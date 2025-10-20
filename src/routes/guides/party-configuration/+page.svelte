<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import Code from "$lib/components/Code.svelte"
  import json from "svelte-highlight/languages/json"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"

  import type { PageData } from "./$types"
  import A from "$lib/components/A.svelte"

  export let data: PageData
</script>

<TableOfContents>
  <Title title={data.guide.title} />

  <Breadcrumbs path={data.path} />

  <SectionTitle title="Introduction" />

  <p>
    On the IOXIO data sharing services groups can optionally have a party configuration domain; a
    domain on which a party (the group) publishes standardized configuration files. They are used
    with HTTP Message Signatures or with the consent protocol prototype, which is available only on
    some data sharing services.
  </p>

  <p>This guide explains how to set up the necessary configuration files.</p>

  <SectionTitle title="Creating and hosting party configuration" />
  <p>
    <strong>1.</strong>
    Select a domain (it can also be a subdomain) on which you want to host your party configuration.
    <br />
    <strong>Note:</strong> You will need to be able to create a file at
    <em>/.well-known/dataspace/party-configuration.json</em> on that domain and it needs to be
    accessible over <em>https://</em> with a valid certificate.
  </p>
  <p>
    <strong>2.</strong>
    Create the <em>party-configuration.json</em> and host it on the desired domain. See
    <A href="/schemas/party-configuration/">party configuration schema</A> for more details.
  </p>
  <p>
    <strong>3.</strong>
    Ensure the <em>jwks_uri</em> points to some <em>https://</em> based domain and a location you
    can control. A suggestion is to point it to the <em>/.well-known/jwks.json</em> on the same
    domain as the party configuration.<br />Example from
    <A href="/schemas/party-configuration">https://docs.ioxio.dev/schemas/party-configuration</A>:
  </p>
  <Code lang={json}>
    {`
{
  "jwks_uri": "https://ioxio.com/.well-known/jwks.json"
}
`}
  </Code>
  <p>
    <strong>4.</strong>
    Create the content for the <em>jwks_uri</em> and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a <em>kid</em>, the <em>kty</em> is <em>RSA</em>, the
    <em>use</em> is set to <em>sig</em>, the <em>alg</em> is <em>RS256</em> and it has the
    <em>n</em> and <em>e</em> parameters. Here is an example of what it should look like from
    <A href="https://ioxio.com/.well-known/jwks.json">https://ioxio.com/.well-known/jwks.json</A>:
  </p>

  <Code lang={json}>
    {`
{
  "keys": [
    {
      "kid": "302feac8851574f3ef74ec1c62a7489f",
      "kty": "RSA",
      "use": "sig",
      "alg": "RS256",
      "n": "wO_R-_1...tx67M",
      "e": "AQAB"
    }
  ]
}
    `}
  </Code>
</TableOfContents>
