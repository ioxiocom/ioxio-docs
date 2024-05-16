<script lang="ts">
  import { getContext, onMount, setContext } from "svelte"
  import { tableOfContents } from "../routes/store"

  let id: string
  export let level = 1
  export let title

  $: if (title) {
    id = title.trim().replaceAll(" ", "-").toLowerCase()
  }
  const context = getContext("TableOfContents")
  onMount(() => {
    if (context) {
      if (title && id) {
        context.addEntry({
          title: title,
          level: level,
          id: id,
          active: $tableOfContents.length > 0 ? false : true,
        })
      }
    }
  })
</script>

<h2 {id}><a href={`#${id}`}> {title} <span class="marker">§</span></a></h2>

<style lang="scss">
  h2 {
    margin-top: 3rem;
  }

  .marker {
    visibility: hidden;
  }

  h2:hover {
    .marker {
      visibility: visible;
    }
  }
</style>
