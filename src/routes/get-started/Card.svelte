<script lang="ts">
  import Button from "$lib/components/Button.svelte"

  import Num1 from "$lib/images/num-1.svg?component"
  import Num2 from "$lib/images/num-2.svg?component"
  import Num3 from "$lib/images/num-3.svg?component"
  import Num4 from "$lib/images/num-4.svg?component"
  import CircleArrowRight from "$lib/images/circle-arrow-right.svg?component"

  export let title: string
  export let index: string
  export let action: { title: string; href: string }
</script>

<div class="card">
  <div class="card-content">
    <div class="card-index">
      {#if index === "1"}
        <Num1 />
      {:else if index === "2"}
        <Num2 />
      {:else if index === "3"}
        <Num3 />
      {:else if index === "4"}
        <Num4 />
      {/if}
    </div>
    <div class="heading-wrapper">
      <h2 class="card-title">
        {title}
      </h2>
    </div>
    <div>
      <slot />
    </div>
  </div>
  <Button variant="fill" url={action.href} icon={CircleArrowRight}>
    {action.title}
  </Button>
</div>

<style lang="scss">
  @use "$styles/setup" as *;

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .heading-wrapper {
    border-bottom: 1px solid $color-primary-dark-hover;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card-index {
    height: 4.375rem;
    :global(svg) {
      width: 100%;
      height: 100%;
    }
  }
</style>
