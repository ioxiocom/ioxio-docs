<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    What is a data product?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>A data product is a product that facilitates an end goal through the use of data. Each API call done over the Dataspace should constitute one Data product, which are outlined using <a href="https://docs.ioxio.dev/faq/#vocabulary_data_definition">data definitions</a>.</p>

  </svelte:fragment>
</FAQ>
