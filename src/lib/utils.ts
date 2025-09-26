export function isInternalLink(url: string): boolean {
  const docsAbsoluteUrl = url.startsWith("https://docs.ioxio.dev/")
  const relativeUrl = url.startsWith("/") || url.startsWith("#")
  return docsAbsoluteUrl || relativeUrl
}
