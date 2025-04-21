<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    Does IOXIO store data?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>No. The dataspace doesn’t store your data, it is a platform for you to share data through APIs with others and to manage access to the APIs.</p>

  </svelte:fragment>
</FAQ>
