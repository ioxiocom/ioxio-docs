<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ question={"What technical requirements do I need to meet in order to use IOXIO.io?"}>
  <p>
    To share data on the dataspace, you will need to have a JSON POST API that follows one or more
    data definitions on the platform.
  </p>
  <p>
    To consume data on the dataspace you will need to have a subscription to the platform, the
    ability to make API requests which follow the data definitions, and to make API calls to request
    API tokens which are used to authenticate your requests to the data sources.
  </p>
</FAQ>
