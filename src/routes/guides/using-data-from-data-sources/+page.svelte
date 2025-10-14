<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"

  import type { PageData } from "./$types"
  import GuideImage from "$lib/components/GuideImage.svelte"
  import A from "$lib/components/A.svelte"
  import { GUIDES } from "../urls"

  export let data: PageData
  const images = data.images
</script>

<TableOfContents>
  <Title title={data.guide.title} />

  <Breadcrumbs path={data.path} />

  <SectionTitle title="Introduction" />

  <p>
    In this guide we will explain how to find, get access to and use data from data sources
    published on an IOXIO data sharing service. We will be showing the process on the
    <A href="https://sandbox.ioxio-dataspace.com/">IOXIO Sandbox Dataspace</A>, but this guide also
    works for most parts on for example
    <A href="https://ioxio.io/">IOXIO.io</A>.
  </p>

  <SectionTitle title="Prerequisites" />

  <ul>
    <li>Knowing what kind of data you want to access/use.</li>
    <li>
      An account and a group on one of the data sharing services, such as
      <A href="https://sandbox.ioxio-dataspace.com/">IOXIO Sandbox Dataspace</A> or
      <A href="https://ioxio.io/">IOXIO.io</A>.
    </li>
    <li>
      To access the data, you need to request access for your group. If you don’t yet know which
      data, you can find instructions to identify the source below, but you cannot connect to it
      before your group has been granted access.
    </li>
  </ul>

  <SectionTitle title="Finding a data source" />

  <p>
    The first step is to find a data source providing the kind of data you want to use. You can
    browse all available data sources by going to the <em>Data sources</em>
    section in the menu.
  </p>

  <GuideImage img={images.MENU_DATA_SOURCES} compact />

  <p>
    Search for the data relevant to you, e.g. using search words, or tags. In this example we’ve
    searched for data related to <em>weather</em> and will be using a source for the
    <em>Meteorology/Weather</em> definition.
  </p>

  <GuideImage img={images.DATA_SOURCE_SEARCH} />

  <p>To view all data sources available for it, open the details from the blue arrow next to it.</p>

  <p>
    You will be presented with a list of all data sources available for different versions of that
    definition. On the right side, you will also find links to the OpenAPI Spec for the data product
    definition, as well as links to view it in Swagger UI or ReDoc.
  </p>

  <GuideImage img={images.DATA_SOURCES_FOR_DEFINITION} />

  <p>
    In this case there’s a source available from the <em>ioxio_dataspace_guides</em>
    group. You can view the details by pressing the <em>Open</em> button.
  </p>

  <GuideImage img={images.DATA_SOURCES_DETAILS} />

  <SectionTitle title="Requesting access to the data source" />

  <p>
    On <A href="https://IOXIO.io/">IOXIO.io</A> all data sources are set to require API tokens, in other
    data sharing services the data source may or may not require them. This particular source on the
    <A href="https://sandbox.ioxio-dataspace.com/">IOXIO Sandbox Dataspace</A> requires API tokens. In
    order to be able to generate API tokens you need access control keys for the data source. You can
    for example contact the <em>Technical contact</em> by email and request access to the data source.
    In order for the access to be granted you will need to provide at least:
  </p>

  <ul>
    <li>
      The details of the data source you want to access, the simplest way is to mention the
      <strong>Data source identifier</strong> for the source, since it includes in a condensed form
      the needed details like the <strong>domain</strong> of the data sharing service (for example
      <em>ioxio.io</em>) the <strong>Data definition</strong> (<em>Meteorology/Weather_v0.1</em>),
      and the <strong>Data source name</strong> (<em>ioxio_dataspace_guides</em>).
    </li>
    <li>
      The name of the group you want the access to be granted to. This should be one of your groups
      found on the <em>My groups</em> page.
    </li>
  </ul>

  <p>The data source owner might also have other conditions for granting access.</p>

  <p>
    In many cases the access to the data source is taken care of beforehand as part of the
    coordination work for the project.
  </p>

  <p>
    If you’re interested in trying out bidirectional communication yourself, you might also want to
    check out the
    <A href={GUIDES.BUILD_DATA_SOURCE.href}>{GUIDES.BUILD_DATA_SOURCE.title}</A> guide.
  </p>

  <SectionTitle title="Access control keys and API tokens" />

  <p>The access control system consisted of two parts:</p>

  <ul>
    <li>
      <p>
        Access control keys: Each group, which is granted access to a data source, gets their own
        access control keys for the data source. These are long-lived keys that are shared between
        the IOXIO data sharing service and the group who has access to the source. These are used
        only for generating short lived API tokens for one particular data source.
      </p>
      <p>
        It’s important that these keys are kept well protected and they should only be used in
        server-to-server connections with the IOXIO data sharing service. They should not be shared
        with anyone else, not even with the owners of the data source. If they for any reason leak,
        or there’s a suspicion of it, they can easily be rotated by the click of a button.
      </p>
    </li>
    <li>
      <p>
        API tokens: API tokens are short-lived, typically valid for an hour from being generated,
        and used in the requests to fetch data products from a data source. They are validated by
        the IOXIO data sharing service (when the <em>Dataspace verified API tokens</em> option is used
        for the data source) and optionally validated by the data source.
      </p>
      <p>
        These can be treated as opaque strings for the practical matters of the group requesting
        data. Technically they are actually JWTs signed by the data sharing service. They prove that
        the holder of the token, for a limited time, has the right to request data from a particular
        source on behalf of a the group that generated them. These tokens can not be invalidated or
        revoked but automatically expire in a short time.
      </p>
      <p>
        They are forwarded by the IOXIO data sharing service to the data source so that it can (if
        it wants to) verify that the request came from the IOXIO data sharing service. The data
        source can also verify which group is requesting data and might also implement its own
        access control to restrict access based on that.
      </p>
      <p>
        API tokens should also be kept safe and only used in server-to-server connections as they
        can be used to request any data on behalf of the requesting group from the data source.
      </p>
    </li>
  </ul>

  <SectionTitle title="Using access control keys" />

  <p>
    You can view all the access control keys for all the groups you are a member of in the
    <em>Access control keys</em> section:
  </p>

  <GuideImage img={images.MENU_ACCESS_CONTROL_KEYS} compact />

  <p>
    On the Access control keys page you will find a listing of the data sources that each of your
    groups have access to. If you see nothing on this page, you’ve not been granted access yet, and
    you should go back to requesting access and wait for it to be granted before continuing.
  </p>

  <GuideImage img={images.ACCESS_CONTROL_KEYS_LISTING} />

  <p>Press the <em>View</em> button to see the access control keys for the source:</p>

  <GuideImage img={images.ACCESS_CONTROL_KEYS_VIEW} />

  <p>
    The page displays the two long term access control keys, together with buttons to reveal the
    key, rotate the key and copy the key.
  </p>

  <p>
    The <em>Show cURL example</em> button will show you how to make a request to get a short-lived API
    token using one of the two access control keys:
  </p>

  <GuideImage img={images.CURL_EXAMPLE} compact />

  <p>
    The example here has all the necessary details pre-configured for this data source. It’s has
    filled in:
  </p>

  <ul>
    <li>The URL for the API token request endpoint on the particular data sharing service</li>
    <li>
      <em>accessControlKey</em> using one of the two long lasting access control keys (be careful since
      this shows it in clear text!)
    </li>
    <li>
      <em>sub</em> set to your group (the one who was granted access and is requesting the token)
    </li>
    <li><em>aud</em> set to the DSI of this particular data source</li>
  </ul>

  <p>
    You can try running the cURL command; if you don’t have cURL installed on your computer you can
    use the
    <em>View API token request in Swagger UI</em> link in the <em>Resources</em> sidebar, press the
    <em>Try it out</em> button and paste in the 3 values mentioned above and run it with the
    <em>Execute</em> button:
  </p>

  <GuideImage img={images.CURL_REQUEST} />

  <p>
    The response contains the field <em>success</em>, which is set to <em>true</em> to indicate all
    was OK, the <em>apiToken</em>, information on when it expires (<em>expiresAt</em>) as well as
    the <em>aud</em> and <em>sub</em> you submitted.
  </p>

  <p>
    For your real integration you will want to automate this process, as the generated API tokens
    are valid for a somewhat short time (currently one hour at a time, but might be subject to
    change). You should set up some secure way of storing the access control keys and you might want
    to also cache or reuse the short lived API tokens if you are doing multiple requests to the same
    data source within the lifetime of the tokens.
  </p>

  <p>
    To make it easier to test fetching data, the access control keys page also has a
    <em>Generate API token</em> button, that will use one of your access control keys to generate a fresh
    API token that you can easily copy & paste.
  </p>

  <GuideImage img={images.GENERATED_API_TOKEN} />

  <SectionTitle title="Requesting data" />

  <p>The details page of the access control keys tell you the main parts of making the request:</p>

  <GuideImage img={images.ACCESS_CONTROL_KEYS_MAKING_REQUEST} />

  <p>
    I.e. it tells you that you need to make a <strong>POST</strong> request and include a valid API
    token in the <em>X-API-Key</em> header. The URL consists of the address to the product gateway
    for the particular data sharing service (for example <em>https://gateway.ioxio.io</em> or
    <em>https://gateway.sandbox.ioxio-dataspace.com</em>), the path consists of the name of the data
    definition, including the version number (for example <em>/Meteorology/Weather_v0.1</em>) and
    the name of the particular source is used as a query parameter (for example
    <em>?source=ioxio_dataspace_guides:test</em>).
  </p>
  <p>
    The format of the JSON payload to be sent to the data source in the request varies per data
    definition. There are multiple ways to check the format. You can check it in Swagger UI, ReDoc
    or check the OpenAPI Spec version of the definition.
  </p>

  <GuideImage img={images.ACCESS_CONTROL_KEYS_LINKS} />

  <p>
    We will here be using Swagger UI, as it also allows us to easily make a test request to the data
    source. Copy the generated API token and take note of the name of the source mentioned below the
    field of the generated token and open the Swagger UI link below the field.
  </p>
  <p>
    The Swagger UI should open with the correct definition by default when opened from that link.
    Under the <em>Request body</em> heading you will see an <em>Example Value</em> and you can
    switch to the <em>Schema</em> to see more details of the expected fields, such as descriptions, limits
    etc.
  </p>

  <GuideImage img={images.SWAGGER_UI_EXAMPLE_VALUE} />
  <GuideImage img={images.SWAGGER_UI_SCHEMA} />

  <p>Based on this, we now know what data we need to supply in the request.</p>

  <p>
    To make a test request directly from Swagger UI, press the <em>Try it out</em> button:
  </p>

  <GuideImage img={images.SWAGGER_UI_TRY_IT_OUT} />

  <p>
    Fill in the name of the <em>source</em> in the source query parameter, paste in the API token in
    the <em>x-api-key</em> header, do any necessary changes to the <em>Request body</em>
    and finally press the <em>Execute</em> button to make the request to the data source.
  </p>

  <GuideImage img={images.SWAGGER_UI_FIELDS} />

  <p>
    Below the <em>Execute</em> button you should now see the cURL version of the request, as well as
    the actual response:
  </p>

  <GuideImage img={images.SWAGGER_UI_REQUEST_RESPONSE} />

  <p>You should now have successfully requested data from the data source, congratulations!</p>

  <p>
    Below the response you will also find documentation of all the possible responses, incl. errors,
    by response code and can view the schema of them as well. You might also want to consider
    viewing the definition in the ReDoc interface or using the OpenAPI Spec file, possibly together
    with some tools or libraries.
  </p>

  <SectionTitle title="Conclusion" />

  <p>
    You should now have the necessary knowledge to find suitable data sources, request access to
    them if needed and use the access control keys to get short-lived API tokens that are included
    in the <em>X-API-Key</em> header.
  </p>

  <p>
    You should also know how to check the details of the definitions to understand what data you
    need to send and the structure and meaning of the data you are receiving.
  </p>

  <SectionTitle title="Next steps" />

  <p>
    We recommend structuring your code so that using an alternative source only requires changing
    configuration for the name of the source and the access control key for it.
  </p>

  <p>
    You might want to check out the
    <A href="https://github.com/ioxio-dataspace/example-app">IOXIO Dataspace example app</A>
    to see an example of an app that is fetching data products, as well as handling the access control
    keys and API tokens.
  </p>
</TableOfContents>
