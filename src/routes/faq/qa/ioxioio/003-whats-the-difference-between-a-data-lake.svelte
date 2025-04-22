<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    What’s the difference between a data lake or a data warehouse and a dataspace?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      Unlike data lakes or data warehouses, which store data in a centralized repository, <a
        href="http://ioxio.io/">IOXIO.io</a
      > data sharing service provides a federated approach where data remains with its original owner
      and is transferred only on demand based on predefined rules and agreements. This ensures greater
      data control, privacy, and compliance with regulations like GDPR.
    </p>
  </svelte:fragment>
</FAQ>
