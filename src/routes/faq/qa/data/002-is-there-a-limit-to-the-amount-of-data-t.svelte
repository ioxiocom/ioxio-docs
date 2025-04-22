<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    Is there a limit to the amount of data that can be shared?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      There are no set data transfer limits at the moment, and instead we operate on fair use
      policy, meaning that reasonable amounts of data transfers will be allowed.
    </p>
    <p>
      Generally speaking it’s a good idea to expect that each request and response should be less
      than 1MB in size, unless otherwise agreed upon.
    </p>
  </svelte:fragment>
</FAQ>
