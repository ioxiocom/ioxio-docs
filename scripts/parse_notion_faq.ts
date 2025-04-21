import fs from "fs"
import path from "path"
import { marked } from "marked"

type FaqItem = {
  name: string
  section: string
  filename: string
  question: string
  answer: string
}

type CSVEntry = {
  name: string
  section: string
}

function findCsvFile(dir: string): string {
  const csvFile = fs.readdirSync(dir).find((f) => f.endsWith("_all.csv"))

  if (!csvFile) {
    throw new Error(`No CSV file ending with "_all.csv" found in ${dir}`)
  }

  return path.resolve(dir, csvFile)
}

function findMdFolder(dir: string): string {
  const folder = fs.readdirSync(dir).find((f) => {
    const itemPath = path.resolve(dir, f)
    return fs.statSync(itemPath).isDirectory()
  })

  if (!folder) {
    throw new Error(`No directory with MD files found in ${dir}`)
  }

  return path.resolve(dir, folder)
}

function cleanup(dir: string): void {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
  fs.mkdirSync(dir, { recursive: true })
}

function escapeForMatching(str: string): string {
  return str
    .toLowerCase()
    .replace(/[?,'"]/g, "") // Remove punctuation except dots
    .replace(/\./g, " ") // Replace dots with spaces
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim()
}

function parseCSV(csvPath: string): CSVEntry[] {
  const data = fs.readFileSync(csvPath, "utf-8")
  return data
    .split("\n")
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const columns = line.split(",")
      if (columns[1] !== "TODO") {
        return {
          name: columns[0],
          section: columns[2],
        }
      }
    })
    .filter((item) => item !== undefined)
}

function extractQuestionAndAnswer(filePath: string): [string, string] {
  const content = fs.readFileSync(filePath, "utf-8")
  const lines = content.split("\n")

  if (lines.length < 1) {
    throw new Error(`Empty file: ${filePath}`)
  }
  const question = lines[0].replace(/^#\s*/, "").trim()

  let answerStartIndex = -1
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (
      line === "" ||
      line.startsWith("Section:") ||
      line.startsWith("Status:") ||
      line.startsWith("URL Fragment:")
    ) {
      continue
    } else {
      answerStartIndex = i
      break
    }
  }

  if (answerStartIndex === -1) {
    throw new Error(`Failed to find answer in ${filePath}`)
  }
  const answer = lines.slice(answerStartIndex).join("\n").trim()

  return [question, answer]
}

function matchEntriesWithFiles(entries: CSVEntry[], mdDir: string): FaqItem[] {
  const items: FaqItem[] = []
  const mdFiles = fs.readdirSync(mdDir).filter((f) => f.endsWith(".md"))

  for (const entry of entries) {
    const escapedName = escapeForMatching(entry.name)
    const escapedNameShort = escapedName.substring(0, Math.min(escapedName.length, 40))
    const matchingFile = mdFiles.find((f) => {
      const escapedFile = escapeForMatching(f)
      return escapedFile.includes(escapedName) || escapedFile.includes(escapedNameShort)
    })

    if (!matchingFile) {
      throw new Error(`No matching file found for ${entry.name}`)
    }

    const filePath = path.join(mdDir, matchingFile)
    const [question, answer] = extractQuestionAndAnswer(filePath)

    items.push({
      name: entry.name,
      section: entry.section,
      filename: matchingFile,
      question,
      answer,
    })
  }

  return items
}

function generateSvelteComponent(item: FaqItem): string {
  const question = item.question.replace(/"/g, '\\"').replace(/`/g, "'")
  const answer = item.answer.replace(/`/g, "'")

  return `<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    ${question}
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    ${marked.parse(answer)}
  </svelte:fragment>
</FAQ>
`
}

function escapeForPath(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim()
    .substring(0, 40)
}

function saveComponentToFile(item: FaqItem, index: number, qaDir: string): void {
  const questionPart = escapeForPath(item.question)
  const sectionDir = escapeForPath(item.section)
  const sectionPath = path.join(qaDir, sectionDir)

  if (!fs.existsSync(sectionPath)) {
    fs.mkdirSync(sectionPath, { recursive: true })
  }

  const paddedIndex = String(index).padStart(3, "0")
  const filename = `${paddedIndex}-${questionPart}.svelte`
  const filePath = path.join(sectionPath, filename)

  const content = generateSvelteComponent(item)
  fs.writeFileSync(filePath, content, "utf-8")
}

function main(): void {
  if (!process.argv[2]) {
    throw new Error("Please provide a path to the Notion FAQ export dir")
  }
  const baseDir = path.resolve(process.argv[2])
  const csvPath = findCsvFile(baseDir)
  const mdDir = findMdFolder(baseDir)
  const qaDir = path.resolve(__dirname, "../src/routes/faq/qa")

  cleanup(qaDir)

  const csvEntries = parseCSV(csvPath)
  const mappedItems = matchEntriesWithFiles(csvEntries, mdDir)
  const questions: Record<string, FaqItem[]> = {}

  for (const item of mappedItems) {
    const key = item.section
    if (!questions[key]) {
      questions[key] = []
    }
    questions[key].push(item)
  }

  for (const [section, items] of Object.entries(questions)) {
    console.log(`Processing section: ${section}`)

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      console.log(`  - ${item.name}`)
      saveComponentToFile(item, i + 1, qaDir)
    }
  }

  console.log("\nDone")
}

main()
