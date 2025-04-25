<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ question={"What is a data definition?"}>
  <p>
    Data definitions define data products. In practice data definitions are Open API Spec 3.x based
    .json files publicly available on the Dataspace’s GitHub, which outline the structure of API
    calls you can make through the Dataspace. These files define the taxonomical structure of your
    APIs, and define the JSON fields used in the requests and responses.
  </p>
  <p>
    One API transaction following data definition constitutes one <a
      href="https://docs.ioxio.dev/faq/#data_product">data product</a
    >.
  </p>
</FAQ>
