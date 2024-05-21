<script lang="ts">
  import { createPopover } from "svelte-headlessui"
  import { fade } from "svelte/transition"

  import Container from "$lib/components/Container.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Grid from "$lib/components/Grid.svelte"
  import NavBar from "$lib/components/NavBar.svelte"
  import breakpointObserver from "$lib/breakpointObserver.js"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import { page } from "$app/stores"

  const popover = createPopover({})
  const size = breakpointObserver()
  $: isSmallScreen = size.smallerThan("md")

  $: indexPage = $page.url.pathname === "/"
</script>

<section>
  <NavBar {popover} />
  <div class="main-container">
    {#if !$isSmallScreen}
      <Sidebar />
    {/if}
    {#if !indexPage}
      <div class="left-nav-wrapper">
        <div class="left-nav" />
      </div>
    {/if}
    <Container class="main-container">
      <!-- needs to stay there for better keyboard navigation on mobile -->
      {#if $isSmallScreen && $popover.expanded}
        <div class="mobile-sidebar-wrapper" use:popover.panel transition:fade={{ duration: 100 }}>
          <Grid container>
            <Grid sm={5}>
              <Sidebar mobile />
            </Grid>
            <Grid sm={7} />
          </Grid>
        </div>
      {/if}
      <Grid container class="main-grid">
        {#if indexPage}
          <Grid sm={0} md={2} />
          <Grid sm={12} md={10} class="content-grid">
            <slot />
          </Grid>
        {:else}
          <Grid sm={12} lg={9} class="content-grid">
            <slot />
          </Grid>
          <Grid sm={0} lg={3} />
        {/if}
      </Grid>
    </Container>
  </div>
  <Footer />
</section>

<style lang="scss">
  @import "$styles/setup";

  section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    position: relative;
    background-color: $color-primary-dark;
  }

  :global(.main-container) {
    display: flex;
    flex-grow: 1;
    background-color: $color-primary-dark;
    position: relative;
  }

  :global(.main-grid, .main-grid .mdc-layout-grid__inner) {
    height: 100%;
  }

  :global(.left-nav-wrapper) {
    position: relative;
    max-width: 20rem;

    @include mobile() {
      display: none;
    }

    .left-nav {
      margin-left: 5.25rem;
    }
  }

  :global(.main-container .content-grid) {
    margin-bottom: $spacing-05;
  }

  :global(.main-container .mdc-layout-grid) {
    width: 100%;
  }

  .mobile-sidebar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: $color-primary-highlight;

    :global(.grid-full-height) {
      height: 100%;

      :global(.mdc-layout-grid__inner) {
        height: 100%;
        grid-gap: 0;
      }
    }

    :global(.mobile-sidebar-right-column) {
      background: rgba(16, 24, 40, 0.88);

      :global(svg) {
        cursor: pointer;
        margin: $spacing-02;
        width: $spacing-03;
        height: $spacing-03;

        :global(path) {
          fill: $color-neutral-light;
        }
      }
    }
  }
</style>
