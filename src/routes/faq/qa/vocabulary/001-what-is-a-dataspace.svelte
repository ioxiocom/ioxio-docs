<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    What is a dataspace?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>Dataspace is the generic name of data sharing environments similar like IOXIO.io. It is an environment for data standardization, communication, control and sharing which ensures interoperability of data between multiple parties, and ensures the data is harmonized between different providers of data so consuming similar data from different parties can be as straight forward as possible. Read more about it on our <a href="https://docs.ioxio.dev/dataspace/">dataspace page</a>.</p>

  </svelte:fragment>
</FAQ>
