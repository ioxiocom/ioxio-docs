<script>
  import Layout from "$lib/components/Layout.svelte"

  import "@fontsource/poppins"

  import "$styles/_init.scss"
  import "svelte-highlight/styles/github.css"
</script>

<Layout>
  <slot />
</Layout>

<style lang="scss">
  $targetOpacity: 0.85;

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-image: url("/background.jpg");
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    background: rgba(233, 240, 250, $targetOpacity);
  }

  @media (min-width: 45rem) {
    .content {
      padding: 1rem 4rem;
    }

    .content:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: -4rem;
      pointer-events: none;
      background-image: linear-gradient(
        to right,
        rgba(233, 240, 250, 0),
        rgba(233, 240, 250, $targetOpacity)
      );
      height: 100%;
      width: 4rem;
    }

    .content:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: -4rem;
      pointer-events: none;
      background-image: linear-gradient(
        to left,
        rgba(233, 240, 250, 0),
        rgba(233, 240, 250, $targetOpacity)
      );
      height: 100%;
      width: 4rem;
    }
  }

  main {
    flex-grow: 1;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 4rem;

    p {
      margin: 0.25rem 0;
    }
  }

  footer :global(a) {
    font-weight: bold;
  }
</style>
