<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
  import A from "$lib/components/A.svelte"
</script>

<FAQ question={"What level of technical expertise is required to use IOXIO.io?"}>
  <p>
    You don’t need to be a senior developer, but you need to be able to understand what an API is.
    To provide data you will need to be able to create and host an API to make the data available
    for the dataspace either by developing it yourself or by using a no-code or low-code service,
    e.g. an “Integration Platform as a service” (IPaaS).
  </p>
  <p>
    <A href="http://IOXIO.io">IOXIO.io</A> can then handle managing access, tracking errors and communicating
    the expected data structure to people you want share data with. After the initial setup of the API
    basically anyone who can use a web browser can maintain the integration, access control and your
    group.
  </p>
</FAQ>
