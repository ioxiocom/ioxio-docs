<script lang="ts">
  import { navigation } from "$lib/components/navigation"
  import A from "./A.svelte"

  type Breadcrumb = {
    name: string
    link: string
  }

  export let path = "/"

  const pathNormalized = path.replace(/\/$/, "")

  function getBreadcrumbs(): Breadcrumb[] {
    const breadcrumbs = [{ name: "Docs", link: "/" }]
    const pathParts = pathNormalized.split("/")

    let currentPath = "/"
    let workingTree = navigation
    for (let part of pathParts) {
      if (part === "") {
        continue
      }
      for (let node of workingTree) {
        if (node.route === part) {
          breadcrumbs.push({
            name: node.name,
            link: currentPath + node.route,
          })
          currentPath += `${node.route}/`
          workingTree = node.children || []
        }
      }
    }
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()
</script>

<div class="breadcrumbs">
  {#each breadcrumbs as breadcrumb, i}
    <span class="breadcrumb"><A href={breadcrumb.link}>{breadcrumb.name}</A></span>
    <span class="sep">/</span>
  {/each}
</div>

<style lang="scss">
  .sep {
    margin: 0 0.5rem;
  }
</style>
