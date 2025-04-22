<script lang="ts">
  import WhatIsDataspace from "./qa/vocabulary/001-what-is-a-dataspace.svelte"
  import WhatIsDataDefinition from "./qa/vocabulary/002-what-is-a-data-definition.svelte"
  import WhatIsDataProduct from "./qa/vocabulary/003-what-is-a-data-product.svelte"
  import WhatIsPartyConfigurationDomain from "./qa/vocabulary/004-what-is-a-party-configuration-domain.svelte"
  import WhatAreGroups from "./qa/vocabulary/005-what-are-groups.svelte"

  import CanIUseAnyTypeOfData from "./qa/data/001-can-i-use-any-type-of-data.svelte"
  import IsThereALimitToTheAmountOfData from "./qa/data/002-is-there-a-limit-to-the-amount-of-data-t.svelte"
  import WhatKindOfDataDefinitionsAreAvailable from "./qa/data/003-what-kind-of-data-definitions-are-availa.svelte"
  import DoesIOXIOStoreData from "./qa/data/004-does-ioxio-store-data.svelte"
  import HowDoYouHandleDataPrivacy from "./qa/data/005-how-do-you-handle-data-privacy.svelte"
  import HowCanAIBenefitFromUsingData from "./qa/data/006-how-can-ai-benefit-from-using-data-from-.svelte"

  import HowIsTheSecurityOfTheDataSharing from "./qa/technology/001-how-is-the-security-of-the-data-sharing-.svelte"
  import WhatAreDigitalProductPassports from "./qa/technology/002-what-are-digital-product-passports-and-i.svelte"
  import DoYouSupportRequestsMethodsOtherThan from "./qa/technology/003-do-you-support-requests-methods-other-th.svelte"
  import WhatIsYourStanceOnOpenSource from "./qa/technology/004-what-is-your-stance-on-open-source.svelte"
  import AreYouIDSACompliant from "./qa/technology/005-are-you-idsa-compliant.svelte"

  import WhatIsIOXIOIODataSharingService from "./qa/ioxioio/001-what-is-ioxioio-data-sharing-service.svelte"
  import WhatAreTheBenefitsOfIOXIOIO from "./qa/ioxioio/002-what-are-the-benefits-of-ioxioio-data-sh.svelte"
  import WhatsTheDifferenceBetweenDataLake from "./qa/ioxioio/003-whats-the-difference-between-a-data-lake.svelte"
  import WhatsTheDifferenceBetweenCloudStorage from "./qa/ioxioio/004-whats-the-difference-between-a-cloud-sto.svelte"
  import WhatsTheDifferenceBetweenTrackAndTrace from "./qa/ioxioio/005-whats-the-difference-between-track-and-t.svelte"
  import WhatIsTheProcessForOnboarding from "./qa/ioxioio/006-what-is-the-process-for-onboarding-data-.svelte"
  import WhatLevelOfTechnicalExpertise from "./qa/ioxioio/007-what-level-of-technical-expertise-is-req.svelte"
  import WhatTechnicalRequirements from "./qa/ioxioio/008-what-technical-requirements-do-i-need-to.svelte"
  import WhatKindOfSupportIsAvailable from "./qa/ioxioio/009-what-kind-of-support-is-available-for-co.svelte"
  import WhoCanUseAndBenefit from "./qa/ioxioio/010-who-can-use-and-benefit-from-ioxio-datas.svelte"
  import WhatKindOfCompaniesCanBenefit from "./qa/ioxioio/011-what-kind-of-companies-can-benefit-from-.svelte"
  import WhatIsTheExpectedUptime from "./qa/ioxioio/012-what-is-the-expected-uptime-for-ioxioio.svelte"
  import HowDoesIOXIOIOHelpWithRegulations from "./qa/ioxioio/013-how-does-ioxioio-help-with-regulations.svelte"
  import WillIGetVendorLockedIntoIOXIOIO from "./qa/ioxioio/014-will-i-get-vendor-locked-into-ioxioio.svelte"
  import WhatIsThePricingModelForIOXIOIO from "./qa/ioxioio/015-what-is-the-pricing-model-for-ioxioio.svelte"
  import A from "$lib/components/A.svelte"

  const sections = [
    {
      name: "IOXIO.io",
      components: [
        WhatIsIOXIOIODataSharingService,
        WhatAreTheBenefitsOfIOXIOIO,
        WhatsTheDifferenceBetweenDataLake,
        WhatsTheDifferenceBetweenCloudStorage,
        WhatsTheDifferenceBetweenTrackAndTrace,
        WhatIsTheProcessForOnboarding,
        WhatLevelOfTechnicalExpertise,
        WhatTechnicalRequirements,
        WhatKindOfSupportIsAvailable,
        WhoCanUseAndBenefit,
        WhatKindOfCompaniesCanBenefit,
        WhatIsTheExpectedUptime,
        HowDoesIOXIOIOHelpWithRegulations,
        WillIGetVendorLockedIntoIOXIOIO,
        WhatIsThePricingModelForIOXIOIO,
      ],
    },
    {
      name: "Vocabulary",
      components: [
        WhatIsDataspace,
        WhatIsDataDefinition,
        WhatIsDataProduct,
        WhatIsPartyConfigurationDomain,
        WhatAreGroups,
      ],
    },
    {
      name: "Data",
      components: [
        CanIUseAnyTypeOfData,
        IsThereALimitToTheAmountOfData,
        WhatKindOfDataDefinitionsAreAvailable,
        DoesIOXIOStoreData,
        HowDoYouHandleDataPrivacy,
        HowCanAIBenefitFromUsingData,
      ],
    },
    {
      name: "Technology",
      components: [
        HowIsTheSecurityOfTheDataSharing,
        WhatAreDigitalProductPassports,
        DoYouSupportRequestsMethodsOtherThan,
        WhatIsYourStanceOnOpenSource,
        AreYouIDSACompliant,
      ],
    },
  ]
</script>

<div class="faq-page">
  <h1>Frequently Asked Questions</h1>
  <div class="description">
    <div>Find answers to the most commonly asked questions.</div>
    <div>
      Can't find the answer to your question? Reach out to us at our <A
        href="https://slack.ioxio.com/">IOXIO® Community Slack</A
      > or by email at
      <A href="mailto:support@ioxio.com">support@ioxio.com</A>!
    </div>
  </div>
  {#each sections as section}
    <section>
      <h2>{section.name}</h2>
      <div class="questions">
        {#each section.components as Component}
          <div>
            <svelte:component this={Component} />
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style lang="scss">
  h2 {
    margin: 3rem 0 1rem 0;
  }

  .questions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
