<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    What kind of support is available for companies using IOXIO.io?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      We have our <a href="https://slack.ioxio.dev">open community Slack</a> where you can come chat
      with us and ask help from our core developers, or use our support email at
      <a href="mailto:support@ioxio.com">support@ioxio.com</a>. We also offer consultation services
      to help companies tackle different kinds of data sharing problems, so if you need help
      defining your data sharing cases, data structure or anything else data related, or in just
      getting on top of your general data sharing capabilities, get in touch via email at
      <a href="mailto:sales@ioxio.com">sales@ioxio.com</a>.
    </p>
  </svelte:fragment>
</FAQ>
