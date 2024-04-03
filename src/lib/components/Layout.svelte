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
</script>

<section>
  <NavBar {popover} />
  <Container class="main-container">
    <!--    needs to stay there for better keyboard navigation on mobile-->
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
      {#if $page.url.pathname !== "/"}
        {#if !$isSmallScreen}
          <Grid sm={0} md={3} class="left-nav-wrapper">
            <Sidebar />
            <div class="left-nav" />
          </Grid>
        {/if}
        <Grid sm={12} md={7} class="content-grid">
          <div class="content">
            <slot />
          </div>
        </Grid>
        <Grid sm={0} md={2} />
      {:else}
        {#if !$isSmallScreen}
          <Grid sm={0} md={1} class="left-nav-wrapper">
            <Sidebar />
            <div class="left-nav" />
          </Grid>
        {/if}
        <Grid sm={12} md={11} class="content-grid">
          <div class="content">
            <slot />
          </div>
        </Grid>
      {/if}
    </Grid>
  </Container>
  <Footer />
</section>

<style lang="scss">
  @import "$styles/setup";

  section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: $color-primary-highlight;
  }

  :global(.main-container) {
    flex-grow: 1;
    background-color: $color-primary-highlight;
    position: relative;
  }

  :global(.main-grid .mdc-layout-grid__inner) {
    height: 100%;
  }

  :global(.left-nav-wrapper) {
    position: relative;
  }

  .left-nav {
    margin-left: 72px;
  }

  .mobile-sidebar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    :global(.grid-full-height) {
      height: 100%;

      :global(.mdc-layout-grid__inner) {
        height: 100%;
        grid-gap: 0;
      }
    }

    .mobile-sidebar-background {
      height: 100%;
      padding: 1rem;
      background-color: #ffffff;
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

  .mobile-sidebar-wrapper {
    position: absolute;
    background-color: $color-primary-highlight;
  }

  :global(.left-nav-wrapper) {
    @include mobile() {
      display: none;
    }
  }
</style>
