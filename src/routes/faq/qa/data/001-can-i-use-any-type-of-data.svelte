<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    Can I use any type of data?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>We currently allow data sharing using JSON POST APIs and following our Data Definitions. If the data follows an available definition, and is available with a JSON POST API, it is supported. Other protocols are planned and will be prioritized when there is enough customer demand.</p>
<p>If you have other use cases in mind, that you think the Dataspace should be able to support feel free to contact us, and we’ll see what can be done to solve your unique challenge!</p>

  </svelte:fragment>
</FAQ>
