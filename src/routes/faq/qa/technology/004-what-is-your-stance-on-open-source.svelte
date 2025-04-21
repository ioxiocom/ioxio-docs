<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    What is your stance on open source?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>Our service is proprietary, but we use and contribute to open source, and have released multiple libraries as well as example implementations as open source and are in general advocates of open source.</p>

  </svelte:fragment>
</FAQ>
