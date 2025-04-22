<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    Do you support requests methods other than POST?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      While we have plans for multiple different kind of data transfers, the current answer in short
      is no. Your API needs to be able to handle POST requests.
    </p>
  </svelte:fragment>
</FAQ>
