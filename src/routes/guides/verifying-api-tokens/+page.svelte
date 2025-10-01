<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import Code from "$lib/components/Code.svelte"
  import json from "svelte-highlight/languages/json"
  import xml from "svelte-highlight/languages/xml"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"

  import type { PageData } from "./$types"
  import GuideImage from "$lib/components/GuideImage.svelte"
  import A from "$lib/components/A.svelte"

  export let data: PageData
  const images = data.images
</script>

<TableOfContents>
  <Title title={data.guide.title} />

  <Breadcrumbs path={data.path} />

  <SectionTitle title="Introduction" />

  <p>
    Data sources that are set to use the <em>Dataspace verified API tokens</em> access control mode
    will in each request coming from the product gateway on the dataspace receive an API token in
    the <em>X-API-Key</em> HTTP Header.
  </p>

  <p>There are two main ways a data source can verify this API token:</p>

  <ol>
    <li>
      <A href="#validate-token-as-a-jwt-signed-by-the-dataspace">
        Validate the token as a JWT signed by the dataspace
      </A>
    </li>
    <li>
      <A href="#token-verification-api">
        Use the token verification endpoint on the product gateway
      </A>
    </li>
  </ol>

  <SectionTitle title="Validate token as a JWT signed by the dataspace" />

  <p>
    The API token is actually a JWT token signed by the dataspace and can easily be verified using
    most common JWT libraries.
  </p>

  <p>
    As an example here’s a token that has been verified and decoded using the
    <A href="https://jwt.io">https://jwt.io</A> service:
  </p>

  <GuideImage img={images.JWT_IO_DECODED_TOKEN} />

  <p>
    To verify the token you need to find the public keys of the dataspace. They can be found by
    checking the
    <em>/.well-known/dataspace/dataspace-configuration.json</em> on the base domain of the dataspace
    and locating the
    <em>jwks_url</em>. For example the
    <A href="https://ioxio.io/.well-known/dataspace/dataspace-configuration.json">
      dataspace configuration on ioxio.io
    </A> points to <A href="https://ioxio.io/.well-known/jwks.json">
      https://ioxio.io/.well-known/jwks.json</A
    >.
  </p>

  <p>Things to ensure:</p>

  <ul>
    <li>
      The <em>aud</em> must match the DSI (Data Source Identifier) of your source. This is critical to
      verify! If you don’t verify this and someone else figures out the address at which your data source
      lives, they could publish it as their own data source on the same dataspace and grant access to
      it to anyone they want and get JWTs that are in all other aspects valid.
    </li>
    <li>The token is signed with one of the keys of the dataspace.</li>
    <li>
      The token hasn’t expired - make sure the <em>exp</em> is in the future and the <em>iat</em> is
      in the past (potentially allowing some reasonable leeway to account for clock differences, e.g.
      5 minutes).
    </li>
    <li>
      The issuer (<em>iss</em>) is the base URL of the dataspace, for example
      <em>https://ioxio.io</em>, on which you’ve published the data source.
    </li>
  </ul>

  <p>
    In case you want to do some more fine-grained access control to what data who has access to, you
    can use the sub to identify the group access was granted to.
  </p>

  <p>
    An example implementation can be found on
    <A
      href="https://github.com/ioxio-dataspace/example-productizer/blob/3dd2435183ed5cbbd30c99a473a8d9c2ccf6b7c7/app/api_tokens.py#L221-L278"
    >
      https://github.com/ioxio-dataspace/example-productizer/blob/3dd2435183ed5cbbd30c99a473a8d9c2ccf6b7c7/app/api_tokens.py#L221-L278</A
    >.
  </p>

  <SectionTitle title="Validating the token as a JWT in Azure API Management" />

  <p>
    In Azure API Management you can use the <em>Validate JWT</em> inbound processing policy to
    validate the API Token from the <em>X-API-Key</em> header.
  </p>

  <p>
    You should point the <em>Open ID URLs</em> to a URL of the form
    <em>https://&lt;dataspace-domain&gt;/.well-known/openid-configuration</em>. So for example for
    <A href="https://IOXIO.io">IOXIO.io</A>
    you would set it to <A href="https://ioxio.io/.well-known/openid-configuration">
      https://ioxio.io/.well-known/openid-configuration</A
    >.
  </p>

  <p>
    The <em>Audiences</em> should be set to match the DSI (Data Source Identifier) of your source. This
    is critical! If you don’t set this and someone else figures out the address of your API Management
    endpoint they could publish it as their own data source on the same dataspace and grant access to
    it to anyone they want and get JWTs that are in all other aspects valid.
  </p>

  <p>
    The default values are to require an expiration time and to require the tokens to be signed, but
    we still encourage to explicitly set them.
  </p>

  <p>
    You might also want to allow some clock skew, for example 5 minutes or 300 seconds should be
    more than enough.
  </p>

  <p>
    You might also like output the parsed token to a variable for further processing. The
    <em>sub</em> field of the token identifies the group the access was granted to, so you might want
    to use it to check what data you want to give which group access to.
  </p>

  <p>In the UI the configuration could look like this:</p>

  <GuideImage img={images.AZURE_API_MANAGEMENT_POLICY} />

  <p>And in the code editor the configuration should look somewhat similar to this:</p>

  <Code lang={xml}>
    {`
<validate-jwt
    header-name="X-API-Key"
    require-expiration-time="true"
    require-signed-tokens="true"
    clock-skew="300"
    output-token-variable-name="jwt">
  <openid-config url="https://ioxio.io/.well-known/openid-configuration" />
  <audiences>
    <audience>dpp://ioxio:visual_crossing@ioxio.io/Meteorology/Weather_v0.1</audience>
  </audiences>
</validate-jwt>
    `}
  </Code>

  <p>
    You might also find the documentation on
    <A href="https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy">
      validating JWTs in Azure API Management</A
    > useful.
  </p>

  <SectionTitle title="Token verification API" />

  <p>
    The product gateway offers an endpoint at the path <em>/api/v1/api-token/verify</em>, for
    example on <em>https://gateway.ioxio.io/api/v1/api-token/verify</em>. It expects a
    <strong>POST</strong> request with a body of the form:
  </p>

  <Code lang={json}>
    {`
{
  "aud": "dpp://group:variant@ioxio.io/Meteorology/Weather_v0.1",
  "apiToken": "eyJ..."
}
    `}
  </Code>

  <p>
    The <em>aud</em> needs to match the DSI (Data Source Identifier) of the source you are
    providing, the <em>apiToken</em> is the token from the request that you want to verify is valid for
    your data source.
  </p>

  <p>
    In case of a valid token you will get a 200 OK response with <em>"valid": true</em> and some additional
    details of the token, similar to this:
  </p>

  <Code lang={json}>
    {`
{
  "valid": true,
  "aud": "dpp://ioxio:visual_crossing@ioxio.io/Meteorology/Weather_v0.1",
  "exp": 1733758438,
  "iat": 1733754838,
  "iss": "https://ioxio.io",
  "sub": "ioxio"
}
    `}
  </Code>

  <p>
    In case the API token is not valid, you will get a 403 error response with
    <em>"success": false</em>, similar to this:
  </p>

  <Code lang={json}>
    {`
{
  "success": false,
  "message": "API token is not valid for this source or it has expired"
}
    `}
  </Code>

  <p>Any other possible errors should also be treated as failures.</p>
</TableOfContents>
