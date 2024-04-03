<script lang="ts">
  import QRCodeIcon from "$lib/images/qr-code-icon.svg"
  import SchemasIcon from "$lib/images/schemas-icon.svg"
  import HomeIcon from "$lib/images/home-icon.svg"
  import { page } from "$app/stores"

  export let mobile = false
</script>

<nav class="sidebar" class:mobile-only={mobile}>
  <a href="/" class="menu-item" class:selected={$page.url.pathname === "/"}>
    <div class="icon-wrapper">
      <HomeIcon />
    </div>
    <div class="name">Home</div>
  </a>
  <a href="/tags" class="menu-item" class:selected={$page.url.pathname.startsWith("/tags")}>
    <div class="icon-wrapper">
      <QRCodeIcon />
    </div>
    <div class="name">IOXIO Tags™</div>
  </a>
  <a href="/schemas" class="menu-item" class:selected={$page.url.pathname.startsWith("/schemas")}>
    <div class="icon-wrapper">
      <SchemasIcon />
    </div>
    <div class="name">Schemas</div>
  </a>
</nav>

<style lang="scss">
  @import "$styles/setup.scss";

  nav {
    width: 72px;
    height: 100%;
    background-color: $color-primary-highlight;
    border-right: 1px solid $color-primary-dark-hover;
    padding-top: 1rem;

    position: absolute;
    left: 0;
    top: 0;
    transition: width 250ms ease 0s;
    overflow: hidden;
    white-space: nowrap;

    .menu-item {
      border-radius: 5px;
      margin: $spacing-01 0 $spacing-01 $spacing-02;
      display: flex;
      align-items: center;
      gap: $spacing-02;
      color: $color-neutral-light;
      text-decoration: none;

      &.selected {
        .icon-wrapper {
          background-color: $color-success-main;
          border-radius: 5px;
        }

        :global(svg path) {
          fill: white;
        }
      }

      .icon-wrapper {
        flex-shrink: 0;
        padding: 8px;

        :global(svg) {
          width: $spacing-03;
          height: $spacing-03;
          flex-shrink: 0;
        }
      }

      .name {
        opacity: 0;
        transition: opacity 250ms ease 0s;
      }

      &:hover:not(.selected) {
        .name {
          color: $color-success-main;
        }
      }
    }

    &:hover,
    &.mobile-only {
      width: 13rem;

      .menu-item.selected {
        background-color: $color-success-main;
        margin-right: $spacing-01;
      }

      .name {
        opacity: 1;
      }
    }

    &.mobile-only {
      width: auto;
      overflow: auto;
      white-space: break-spaces;
      position: relative;
      height: 100vh;

      .menu-item {
        margin: 0 0 0 $spacing-04;
        gap: 0;
      }
    }
  }
</style>
