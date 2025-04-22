<script lang="ts">
  import ArrowDown from "$lib/images/arrow-down.svg"
  import { slide } from "svelte/transition"
  let isOpen = false

  function toggleOpen() {
    isOpen = !isOpen
  }
</script>

<button class="faq" on:click={toggleOpen} aria-expanded={isOpen}>
  <div class="question">
    <slot name="question" />
    <ArrowDown />
  </div>
  {#if isOpen}
    <div class="answer" transition:slide>
      <slot name="answer" />
    </div>
  {/if}
</button>

<style lang="scss">
  @import "$styles/setup.scss";

  .faq {
    width: 100%;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    background-color: #1e2530;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b3c1d8;
    }

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      gap: 0.5rem;
    }

    .answer {
      color: $color-neutral-main;

      :global(a) {
        color: $color-success-main;
      }
    }
  }

  :global(.faq svg) {
    flex-shrink: 0;
    width: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(0);
  }

  :global(.faq[aria-expanded="true"] svg) {
    transform: rotate(180deg);
  }
</style>
