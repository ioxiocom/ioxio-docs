<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    How is the security of the data sharing ensured?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      Every data source has the ability to control who can accesses it on the dataspace. This is
      made possible with “Dataspace managed API tokens”, where the data source developers may choose
      which groups are allowed to have access to the source, and the allowed application developers
      can then integrate with the Dataspace to generate API tokens that can be used to authenticate
      their requests.
    </p>
    <p>
      The API tokens identify the group making the requests, and the API tokens are passed on
      through to the data source for verification and logging purposes.
    </p>
  </svelte:fragment>
</FAQ>
