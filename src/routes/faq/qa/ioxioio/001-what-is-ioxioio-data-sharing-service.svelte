<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    What is IOXIO.io data sharing service?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>Our data sharing service <a href="http://ioxio.io/">IOXIO.io</a> is meant for anyone who wants to make their data available, or consume data from multiple sources. Read more about it on our <a href="https://docs.ioxio.dev/dataspace/">Dataspace page</a>.</p>
<p>We help you get your data moving and remove the overhead and mess of having multiple different approaches to making data integrations. With IOXIO.io you only need to add your API to the Dataspace to be able manage who gets access to it, and invite people to use and share data with you. </p>
<p>IOXIO.io operates as a data interoperability and communication platform. You can see what is expected from different data products in the definitions viewer, and use the platform to unify your data integrations and sharing principles within your company, and with your data sharing partners. You keep your data, but we enable you to share it with different people, and invite others to share their data with you!</p>

  </svelte:fragment>
</FAQ>
