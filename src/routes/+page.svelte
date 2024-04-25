<script xmlns="http://www.w3.org/1999/html">
  import A from "$lib/A.svelte"
  import DataspaceIcon from "$lib/images/dataspace-icon.svg?dataurl"
  import DataSchemasIcon from "$lib/images/schemas-secondary-icon.svg?dataurl"
  import QRCodeIcon from "$lib/images/qr-code-secondary-icon.svg?dataurl"
  import ArrowIcon from "$lib/images/link-arrow-icon.svg"

  const cards = [
    {
      title: "IOXIO Tags™",
      href: "/tags/",
      alt: "QR code",
      img: QRCodeIcon,
    },
    {
      title: "Schemas for data objects",
      href: "/schemas/",
      alt: "Data schemas",
      img: DataSchemasIcon,
    },
  ]
</script>

<div class="wrapper">
  <div class="content">
    <h1 class="title">Welcome to IOXIO® Documentation portal</h1>
    <p class="description">Documentation for various IOXIO® technologies.</p>
    <p class="description">
      Visit <A href="https://ioxio.com">IOXIO®</A> to learn more about IOXIO®
    </p>
  </div>
  <img src={DataspaceIcon} alt="Dataspace" />
</div>
<div class="cards">
  {#each cards as card}
    <div class="card">
      <h2>{card.title}</h2>
      <img src={card.img} alt={card.alt} />
      <a class="link" href={card.href}
        ><span>Read more </span>
        <ArrowIcon />
      </a>
    </div>
  {/each}
  <!-- Reserved -->
  <div class="reserved" />
</div>

<style lang="scss">
  @import "$styles/setup";
  .cards {
    display: flex;
    flex-direction: row;
    margin: $spacing-03 0;
    gap: $spacing-03;

    @include tablet-and-below() {
      padding: 0 $spacing-02;
    }
    @include mobile() {
      flex-direction: column;
    }
  }

  .reserved {
    flex: 1 0 0;
    @include tablet-and-below() {
      display: none;
    }
  }

  .card {
    padding: $spacing-02;
    display: flex;
    flex-direction: column;
    background: #192935;
    justify-content: space-between;
    border-radius: 10px;
    gap: $spacing-01;
    position: relative;
    height: 10rem;
    flex: 1 0 0;

    @include mobile() {
      flex-basis: auto;
    }

    .link {
      display: flex;
      flex-direction: row;
      width: max-content;
      color: $color-success-main;
      font-weight: 600;
      line-height: 150%;
      text-decoration: none;
      align-items: center;
      gap: $spacing-01;
      z-index: 99;
    }

    img {
      position: absolute;
      width: 6.125rem;
      height: 6.125rem;
      right: $spacing-02;
      bottom: $spacing-02;
    }

    h2 {
      font-size: $h2-font-size;
      font-weight: 600;
      line-height: 150%;
      z-index: 99;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $spacing-03;

    @include tablet-and-below() {
      padding: $spacing-03 $spacing-02;
    }

    @include mobile() {
      flex-direction: column;
    }

    .content {
      display: flex;
      flex-direction: column;
      column-gap: 1rem;

      .title {
        font-size: $h1-font-size;
        font-weight: 600;
        line-height: 150%;
      }

      .description {
        font-size: $text-body-font-size;
        line-height: 150%;
      }
    }
  }

  img {
    width: 42.75rem;
    margin: 0 0 0 auto;
  }
</style>
