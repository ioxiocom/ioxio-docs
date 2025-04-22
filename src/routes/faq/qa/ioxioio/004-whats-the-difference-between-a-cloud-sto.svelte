<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte"
</script>

<FAQ>
  <svelte:fragment slot="question">
    What’s the difference between a cloud storage services and a dataspace?
  </svelte:fragment>

  <svelte:fragment slot="answer">
    <p>
      While a dataspace and a cloud storage service are two entirely different things, the key
      difference lies in how data is stored and managed. Cloud services typically store data on
      remote servers, providing users with the ability to access, manage, and process their
      information directly within the cloud environment. This makes cloud services an ideal choice
      for centralized storage and computation needs.
    </p>
    <p>
      In contrast, a dataspace operates as an intermediary rather than a storage solution. It does
      not store your data but instead facilitates secure and efficient interactions between
      different parties who want to use or share data, and to standardize different data products. A
      dataspace ensures that data remains under the control of its respective owners, enabling
      collaboration and data exchange without compromising ownership or privacy.
    </p>
    <p>
      This distinction makes dataspaces particularly suitable for scenarios where data sovereignty,
      controlled sharing and interoperability are crucial, while cloud services are more aligned
      with centralized storage and processing requirements.
    </p>
  </svelte:fragment>
</FAQ>
