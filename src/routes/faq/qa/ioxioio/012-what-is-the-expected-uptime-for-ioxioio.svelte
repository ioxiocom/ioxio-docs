<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    What is the expected uptime for IOXIO.io?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>Currently we aim for 99% uptime.</p>
<p>You can check the <a href="https://status.ioxio.io/">status page</a> for up to date information on our past uptime.</p>

  </svelte:fragment>
</FAQ>
