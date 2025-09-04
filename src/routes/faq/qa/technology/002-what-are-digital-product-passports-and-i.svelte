<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
  import A from "$lib/components/A.svelte"
</script>

<FAQ question={"What are Digital Product Passports and IOXIO Tags&trade;?"}>
  <p>
    A Digital Product Passport (DPP) is an electronic record that contains detailed information
    about a product’s lifecycle, including its materials, production, usage, repair history, and
    recyclability. It enables traceability, transparency, and sustainability by providing consumers,
    businesses, and regulators with real-time access to a product’s key data.
  </p>
  <p>
    Digital Product Passports are an upcoming EU requirement for different industries to be able to
    operate within the EU. Everybody selling goods inside EU will need to be able to track and
    present data through the entire supply chain of their product from the initial creation of the
    materials to the assembly and sale of the product. In order for you to be able to do this, you
    will need to combine a lot of different data points for your product.
  </p>
  <p>
    Our <A href="https://docs.ioxio.dev/tags/">IOXIO Tags&trade;</A> protocol is a solution that allows
    you to use different data providers on a dataspace to combine all of them into one report, and link
    it onto a physical carrier like QR code or an RFID yarn.
  </p>
</FAQ>
