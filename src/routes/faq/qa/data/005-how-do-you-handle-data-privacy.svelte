<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<FAQ>
  <svelte:fragment slot="question">
    How do you handle data privacy?
  </svelte:fragment>
  
  <svelte:fragment slot="answer">
    <p>Our service is designed with a strong emphasis on data privacy and compliance with global regulations, ensuring that user data is handled responsibly and securely. Each group within the platform has a dedicated GDPR contact to address any GDPR-related concerns or issues, providing a clear and accessible point of communication for regulatory inquiries.</p>
<p>For user accounts, IOXIO.io leverages CIDAAS as its OpenID Connect provider. CIDAAS is a trusted solution that manages GDPR-related data associated with user accounts, ensuring compliance with privacy laws and delivering secure authentication services. By relying on CIDAAS, IOXIO.io maintains a high standard of data protection while adhering to the necessary legal frameworks.</p>
<p>The privacy of the data being transferred through the dataspace is secured in transit using HTTPS, both between the party requesting the data and the dataspace, as well as between the dataspace and the API in the data source. And in accordance with the dataspace architecture, the data is not stored on the dataspace, it’s only transferred through it on demand.</p>

  </svelte:fragment>
</FAQ>
