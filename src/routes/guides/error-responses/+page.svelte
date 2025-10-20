<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte"
  import Code from "$lib/components/Code.svelte"
  import json from "svelte-highlight/languages/json"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import Title from "$lib/components/Title.svelte"
  import TableOfContents from "$lib/components/TableOfContents.svelte"

  import type { PageData } from "./$types"

  export let data: PageData
</script>

<TableOfContents>
  <Title title={data.guide.title} />

  <Breadcrumbs path={data.path} />

  <p>
    The data definitions define the structure for the responses, both for successful responses as
    well as for errors. You can check the responses for a particular definition in the OpenAPI Spec
    or view it in Swagger UI or ReDoc.
  </p>
  <p>
    Most definitions have just a specific format for the status code <em>200</em> (OK) and use a
    shared set of default error message structures for the status codes <em>4xx</em> and
    <em>5xx</em>. Most of these error messages share the same structure, which has a <em>type</em>
    and <em>message</em> field and look for example like this:
  </p>
  <Code lang={json}>
    {`
{
  "type": "not_found",
  "message": "The item you requested was not found"
}
`}
  </Code>
  <p>
    This structure applies to the default <em>400</em> (Bad Request), <em>401</em> (Unauthorized),
    <em>403</em> (Forbidden), <em>404</em> (Not Found) and <em>500</em> (Internal Server Error) error
    status codes, which are the most common ones to be used by a data source, as well as most of the
    errors returned by the data sharing service.
  </p>
  <p>
    The identifier in the the <em>type</em> field should be in <em>snake_case</em> (lower case letters
    a-z, numbers 0-9 and underscore are allowed) and easily identify the type of error. For example:
  </p>
  <ul>
    <li>
      <em>401</em>: <em>api_token_missing_or_invalid</em> if the validation of the API token fails, or
      it is missing.
    </li>
    <li>
      <em>403</em>: <em>forbidden</em> if the API token is valid, but the owner of the token does not
      have permission to request the data specified by the parameters.
    </li>
    <li>
      <em>404</em>: <em>not_found</em> when the requested data can not be found.
    </li>
    <li>
      <em>400</em> & <em>500</em>: Informative and identifiable strings for most other errors, such
      as <em>time_range_validation</em> or <em>upstream_error</em>.
    </li>
  </ul>
  <p>
    The <em>message</em> field should use a human friendly description.
  </p>

  <SectionTitle title="Reserved and unsupported status codes" />

  <p>
    The following status codes are reserved for the use of the IOXIO data sharing service and should
    not be sent by a data source:
  </p>
  <ul>
    <li>
      <em>444</em> Data source not found, when the <em>?source=</em> query parameter defines a data source
      unknown to the data sharing service, in order to distinguish it from when a data source can’t find
      data for the given payload and returns a 404 Not Found.
    </li>
    <li>
      <em>502</em> Bad Gateway, when there’s some problem with the connection to or communication with
      the data source.
    </li>
    <li>
      <em>503</em> Service Unavailable
    </li>
    <li>
      <em>504</em> Gateway Timeout
    </li>
    <li>
      <em>550</em> Response does not confirm to definition, when the response from the data source either
      uses a status code that is not defined for the definition, is a reserved status code, or if the
      data returned by the data source does not match the structure defined in the definition.
    </li>
  </ul>

  <SectionTitle title="Other status codes" />

  <p>The other status codes present by default in all data definitions are:</p>
  <ul>
    <li>
      <em>422</em> Validation Error is returned by the IOXIO data sharing service when the data in
      the request does not match the format specified in the definition. The data source should
      likely not encounter data that is invalid as it’s validated by the data sharing service. Data
      sources are free to use this, but a generic <em>400</em> error with
      <em>"type": "validation_error"</em> with a human friendly description might be a lot easier to
      write than generating a response that follows the specified format for this status.
    </li>
    <li>
      <em>429</em> Too many requests, returned by the IOXIO data sharing service when the rate limit
      is exceeded. The data source is free to use this as well.
    </li>
  </ul>
  <p>
    Each data definition can also define custom status codes and responses for them. For details
    about those, please check the definition case by case.
  </p>
</TableOfContents>
