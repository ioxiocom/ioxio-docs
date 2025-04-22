<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">What are groups?</svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      Groups are the way for managing access to data sources on the dataspace. Everything, and
      everyone needs to be part of one or more groups in order to share and consume data on our
      service.
    </p>
    <p>
      Groups have members who can use them, and owners who can manage the groups and the members of
      the group. Groups are the basic unit of access control for data sources.
    </p>
  </svelte:fragment>
</FAQ>
