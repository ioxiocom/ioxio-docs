<script lang="ts">
  import A from "./A.svelte"

  export let icon: any = undefined
  export let url: string | undefined = undefined
  export let variant: "outline" | "fill" = "outline"

  // whether to change icon color for hover and active states
  export let monochromeIcon = false

  let className = "button"
  if (monochromeIcon) {
    className += " monochrome"
  }
  if (variant === "fill") {
    className += " fill"
  }
</script>

{#if url}
  <div class="button-wrapper">
    <A {className} href={url}>
      {#if icon}
        <span><slot /></span>
        <svelte:component this={icon} />
      {:else}
        <slot />
      {/if}
    </A>
  </div>
{:else}
  <div class="button-wrapper">
    <button class={className}>
      {#if icon}
        <span><slot /></span>
        <svelte:component this={icon} />
      {:else}
        <slot />
      {/if}
    </button>
  </div>
{/if}

<style lang="scss">
  @import "$styles/setup";

  .button-wrapper :global(.button) {
    padding: $spacing-01 $spacing-02;
    color: $color-secondary-light;
    background: transparent;
    border: 1px solid $color-success-main;
    border-radius: 4px;
    font-size: 12px;
    line-height: 150%;
    font-weight: 600;
    display: flex;
    gap: $spacing-01;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: $color-neutral-light;
      border-color: $color-neutral-light;
    }

    &:active {
      color: $color-success-main;
      border-color: $color-success-main;
    }

    :global(svg) {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  .button-wrapper :global(.fill) {
    background-color: $color-success-main;
    color: $color-neutral-light;
    font-weight: 600;
  }

  .button-wrapper :global(.monochrome) {
    :global(svg path) {
      fill: $color-secondary-light;
    }
    &:hover {
      :global(svg path) {
        fill: $color-neutral-light;
      }
    }

    &:active {
      :global(svg path) {
        fill: $color-success-main;
      }
    }
  }
</style>
