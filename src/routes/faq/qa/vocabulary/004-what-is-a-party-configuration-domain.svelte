<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">What is a party configuration domain?</svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      A party configuration domain is a domain, or subdomain, that is used to host specific
      configuration files for a party operating on a dataspace in a well-known location on the
      domain.
    </p>
    <p>
      We have a prototype for using it to sign your data. It is also used by our experimental
      consent protocol, which you can try out on our <a href="https://sandbox.ioxio-dataspace.com"
        >Sandbox</a
      >. Read more about
      <a href="https://docs.ioxio.dev/schemas/party-configuration/">party configuration domains</a>.
    </p>
  </svelte:fragment>
</FAQ>
