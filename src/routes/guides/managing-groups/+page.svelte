<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import A from "$lib/components/A.svelte"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"
  import GuideImage from "$lib/components/GuideImage.svelte"
  import type { PageData } from "./$types"
  import { GUIDES } from "../urls"

  export let data: PageData

  const images = data.images
</script>

<TableOfContents>
  <Title title={data.guide.title} />

  <Breadcrumbs path={data.path} />

  <SectionTitle title="Introduction" />
  <p>
    A group is needed both to create data sources and to be able to request data from data sources
    that use access control.
  </p>

  <SectionTitle title="Creating a group" />

  <p>
    You can create a group in the <em>My groups</em> section using the <em>Add a group</em> button.
  </p>
  <GuideImage img={images.MY_GROUPS_BUTTON} />
  <p>
    <strong>Note:</strong> In some IOXIO data sharing services, such as
    <A href="https://ioxio.io/">IOXIO.io</A> the group creation is restricted and the group is instead
    created by the support upon separate requests and verification. In that case the
    <em>My groups</em> page has a disclaimer with instructions to follow. Please also after it has
    been created follow the steps in<A href="#editing-a-group">Editing a group</A> section of this guide
    to fill in a GDPR and technical contact for the group.
  </p>
  <GuideImage img={images.MY_GROUPS_DISCLAIMER} />
  <GuideImage img={images.CREATE_GROUP_PAGE} />
  <p>
    When creating the group, note that the name of the group needs to be unique for the data sharing
    service, can consist of lower case letters a-z, underscores and numbers, and be at most 64
    characters long.
  </p>
  <p>
    The group should also have a GDPR contact, as well as a technical contact that can be contacted
    in case of technical problems, such as problems with requesting data from data sources or
    requests to data sources made by the group.
  </p>
  <p>
    The group can also optionally have a party configuration domain; a domain on which a party (the
    group) publishes standardized configuration files. In most cases this should be left empty. It
    is only needed if the group is going to use HTTP Message Signatures or intends to use the
    consent protocol prototype (only available on a limited set of IOXIO data sharing services). To
    set it up, see the
    <A href={GUIDES.PARTY_CONFIGURATION.href}>{GUIDES.PARTY_CONFIGURATION.title}</A> guide for details
    before entering the domain here.
  </p>
  <p>
    Once you have filled in all the required fields, press the <em>Create</em> button.
  </p>

  <SectionTitle title="Editing a group" />

  <p>
    You can also open any of your groups for editing from the <em>My groups</em> page by pressing
    the <em>View</em> button next to it.
  </p>
  <GuideImage img={images.GROUP_LISTING} />

  <GuideImage img={images.EDIT_GROUP} />

  <p>
    If your group was created by support, please ensure you fill in a GDPR contact and a technical
    contact.
  </p>

  <SectionTitle title="Next steps" />

  <p>When you have a group, you might want to check out the following guides:</p>

  <ul>
    <li><A href={GUIDES.MANAGE_GROUP_MEMBERS.href}>{GUIDES.MANAGE_GROUP_MEMBERS.title}</A></li>
    <li><A href={GUIDES.BUILD_DATA_SOURCE.href}>{GUIDES.BUILD_DATA_SOURCE.title}</A></li>
    <li><A href={GUIDES.USING_DATA.href}>{GUIDES.USING_DATA.title}</A></li>
  </ul>
</TableOfContents>
