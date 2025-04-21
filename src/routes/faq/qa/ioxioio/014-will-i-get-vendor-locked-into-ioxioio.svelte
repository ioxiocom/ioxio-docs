<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    Will I get vendor locked into IOXIO.io?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>No, since you will always keep your data, and we always allow you to just start creating your own API integrations if you for whatever reason feel that using <a href="http://IOXIO.io">IOXIO.io</a> isn’t for you. Using IOXIO.io doesn’t limit your data sharing in any way outside of the integrations you make to the IOXIO.io, and the API implementations required are not special to IOXIO.io or our dataspace technology.</p>

  </svelte:fragment>
</FAQ>
