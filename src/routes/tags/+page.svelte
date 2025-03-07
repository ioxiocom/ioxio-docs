<script>
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import A from "$lib/components/A.svelte"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import Miro from "$lib/components/Miro.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<TableOfContents>
  <Title title={`IOXIO Tags™`} />

  <Breadcrumbs path={data.path} />

  <SectionTitle title="Overview" />

  <Miro url="https://miro.com/app/board/uXjVNfOfDe8=/" />

  <p>
    IOXIO Tags™ are a technology with the primary goal to connect physical world things to
    standardized data on dataspaces. This is accomplished with the combination of QR Codes and
    metadata hosted by those who wish to connect their items to the data. The technology is based on
    existing standards of the Internet, leaves your data in your care in your existing systems, and
    leaves you in control of which Dataspaces you are working with, while allowing 3rd parties to
    freely build their own solutions using the data in the codes. These IOXIO Tags™ provide a way to
    implement Digital Product Passports.
  </p>
  <p>
    The primary contents of the QR Code include 3 properties: the issuer, product type, and unique
    identifier of the individual unit. The issuer is a domain where further
    <A href="/tags/metadata/">metadata</A> can be found, typically the manufacturer of the product. The
    product type is typically e.g. the model number, or stock keeping unit, something that identifies
    clearly the product that is being talked about, but not the individual unit. The unique identifier
    is then e.g. the serial number or similar code that can be used to identify the individual unit as
    accurately as necessary.
  </p>
  <p>
    There are two types of QR Codes that can be used with IOXIO Tags™, a signed code, and a basic
    URL. The simpler URL based code simply links to tags.ioxio.dev/q/issuer/product/id, which opens
    up our code scanner application, so if you scan it you can quickly read up the information.
    Generation of the URL based codes is incredibly simple for all cases, and they can typically be
    printed at a very small size without issues - in our testing around 2cm x 2cm is fine. Parsing
    of the data from the URLs is also very simple for 3rd party uses.
  </p>
  <p>
    The signed code is a bit more complicated, but provides additional benefits. As the name
    implies, it includes a
    <A href="/tags/signatures/">digital signature</A> as a proof of authenticity of the properties. It
    is however up to whoever is printing the code to ensure that it has adequate anti-tamper measures
    in place to ensure it is not copied or modified in a malicious manner, and that it lasts in the environment
    it will be stored in. The digital signature can be verified via the metadata from the issuer.
  </p>

  <SectionTitle title="Metadata" />
  <p>
    The metadata is configuration hosted by the issuer includes information about themselves - e.g.
    logo, as well as the necessary keys to verify their digital signatures, and which dataspace they
    are providing data about their products on. Additionally for every product type they will have
    another metadata file that includes the name, product picture, and which data products (and
    sources for them) the issuer supports for them on the dataspace.
  </p>
  <p>
    The data from the code can then be combined with the metadata to automatically discover data
    products connected to the physical goods that are provided by the manufacturer.
  </p>

  <h2>Digital Product Passport -compatible data products</h2>
  <p>
    To make it easy to connect data with these properties, we designed a standard for creating data
    product definitions that are compatible with the data in the QR codes to make connecting data to
    them easy and convenient for most developers. This has been accomplished by limiting the input
    parameters to always include two properties from the code: the product type, and unique ID.
    These provide enough information to connect the necessary data in a multitude of systems.
  </p>
  <p>
    Check out an example of a definition at <A
      href="https://definitions.sandbox.ioxio-dataspace.com/definitions/DPP/Energy/Battery/ProductDataSheet_v0.1"
      >our sandbox environment</A
    >.
  </p>

  <SectionTitle title="Demo" />

  <p>
    You can check out our <A href="https://generator.tags.ioxio.dev">IOXIO Tags™ generator</A> and as
    well as <A href="https://scanner.tags.ioxio.dev">IOXIO Tags™ scanner</A>, and their <A
      href="https://github.com/ioxiocom/ioxio-tags">source code</A
    > to see how these work in practice.
  </p>

  <p>Here's an example of how a signed IOXIO Tags™ could look like.</p>

  <img alt="example of a signed IOXIO Tag QR code" src="/ioxio-tag-example-signed.png" />

  <p>And here's an example of how a simple URL based IOXIO Tags™ -tag could look like.</p>

  <img
    class="small"
    alt="example of a basic IOXIO Tag QR code"
    src="/tags.ioxio.dev_example_string_simple.png"
  />
</TableOfContents>

<style lang="scss">
  img {
    max-width: 32rem;
  }

  img.small {
    max-width: 24rem;
  }
</style>
