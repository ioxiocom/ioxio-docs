<script lang="ts">
  import ArrowDown from "$lib/images/arrow-down.svg"
  import { slide } from "svelte/transition"
  import LinkIcon from "$lib/images/link-icon.svg"
  import { onMount } from "svelte"
  import { page } from "$app/stores"

  export let question: string

  let isOpen = false

  function toggleOpen() {
    isOpen = !isOpen
  }

  function makeId(question: string) {
    return question
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  const id = makeId(question)

  onMount(() => {
    if ($page.url.hash === `#${id}`) {
      isOpen = true
    }
  })
</script>

<div
  class="faq"
  on:click={toggleOpen}
  on:keydown={(e) => e.key === "Enter" && toggleOpen()}
  aria-expanded={isOpen}
  tabindex="0"
  role="button"
  {id}
>
  <div class="question">
    <a
      href={`#${id}`}
      on:click={(e) => {
        e.preventDefault()
      }}
    >
      <div class="link-icon">
        <LinkIcon />
      </div>
      {@html question}
    </a>
    <div class="arrow-down">
      <ArrowDown />
    </div>
  </div>
  {#if isOpen}
    <div
      class="answer"
      transition:slide
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.key === "Enter" && toggleOpen()}
      tabindex="0"
      role="button"
    >
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
  @import "$styles/setup.scss";

  .faq {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $color-primary-highlight;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    color: white;

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @include mobile {
          flex-direction: column;
          align-items: flex-start;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .answer {
      cursor: default;
      color: $color-neutral-main;

      :global(a) {
        color: $color-success-main;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .faq .arrow-down,
  .faq .link-icon {
    flex-shrink: 0;
  }

  :global(.faq .arrow-down svg) {
    width: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(0);
  }

  :global(.faq[aria-expanded="true"] .arrow-down svg) {
    transform: rotate(180deg);
  }

  :global(.faq .link-icon svg) {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
