import{s as $i,a as l,f as d,l as u,c as r,g as m,h as q,m as f,d as n,z as c,i as o,y as p,B as O}from"../chunks/scheduler.2e48bd10.js";import{S as ci,i as hi,b as h,d as g,m as y,a as w,t as v,e as _}from"../chunks/index.ed958696.js";import{T as gi,S as k}from"../chunks/TableOfContents.947bbe08.js";import{C as _e}from"../chunks/Code.e8e0e89f.js";import{j as Va}from"../chunks/json.4d993fc0.js";import{p as jt}from"../chunks/python.62bbd573.js";import{T as yi,B as wi}from"../chunks/Title.e984b84c.js";import{G as xe}from"../chunks/urls.605ef361.js";import{G as mi}from"../chunks/GuideImage.dd604073.js";import{A as T}from"../chunks/A.6e646f1b.js";function vi($){let s;return{c(){s=u(`IOXIO Sandbox Dataspace
    `)},l(a){s=f(a,`IOXIO Sandbox Dataspace
    `)},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function _i($){let s;return{c(){s=u("Data definition viewer")},l(a){s=f(a,"Data definition viewer")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function xi($){let s=xe.BUILD_DATA_DEF.title+"",a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function bi($){let s=xe.BUILD_DATA_DEF.title+"",a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Ci($){let s=`
{
  "code": "FI"
}
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Ii($){let s=`
{
  "code": "FI",
  "name": "Finland",
  "area": 338455,
  "languages": [
    "fi",
    "sv"
  ],
  "capital": {
    "name": "Helsinki",
    "lat": 60.170833,
    "lon": 24.9375
  }
}
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Ti($){let s;return{c(){s=u("FastAPI")},l(a){s=f(a,"FastAPI")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Pi($){let s;return{c(){s=u("example productizer")},l(a){s=f(a,"example productizer")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Mi($){let s;return{c(){s=u("Poetry")},l(a){s=f(a,"Poetry")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Li($){let s;return{c(){s=u("pre-commit")},l(a){s=f(a,"pre-commit")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function ki($){let s;return{c(){s=u("Docker")},l(a){s=f(a,"Docker")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Ai($){let s=xe.BUILD_DATA_DEF.title+"",a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Ei($){let s;return{c(){s=u("Request Body")},l(a){s=f(a,"Request Body")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Hi($){let s=`
from typing import List, Optional

from pydantic import BaseModel, Field, constr
from stringcase import camelcase


class CamelCaseModel(BaseModel):
    class Config:
        alias_generator = camelcase
        allow_population_by_field_name = True


class HealthResponse(CamelCaseModel):
    status: bool


class BasicCountryInfoRequest(CamelCaseModel):
    code: str = Field(
        ...,
        title="Code",
        description="ISO 3166-1 alpha-2 code for the country",
        example="FI",
        min_length=2,
        max_length=2,
    )


class Capital(CamelCaseModel):
    name: str = Field(
        ...,
        title="Name",
        description="The name of the capital of the Country",
        example="Helsinki",
    )
    lat: float = Field(
        ...,
        title="Latitude",
        description="The latitude coordinate of the Capital",
        ge=-90.0,
        le=90.0,
        example=60.170833,
    )
    lon: float = Field(
        ...,
        title="Longitude",
        description="The longitude coordinate of the Capital",
        ge=-180.0,
        le=180.0,
        example=24.9375,
    )


class BasicCountryInfoResponse(CamelCaseModel):
    code: str = Field(
        ...,
        title="Code",
        description="ISO 3166-1 alpha-2 code for the country",
        example="FI",
        min_length=2,
        max_length=2,
    )
    name: str = Field(
        ...,
        title="Name",
        description="The name of the country",
        example="Finland",
    )
    area: float = Field(
        ...,
        title="Area",
        description="The area of the country in km^2",
        example=338455,
    )
    languages: List[constr(min_length=2, max_length=2)] = Field(
        ...,
        title="Official languages",
        description="ISO 639-1 language codes for the official languages",
        example=["fi", "sv"],
    )
    capital: Optional[Capital] = Field(
        None,
        title="Capital",
        description="The capital of the country, legislative if multiple",
    )
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function qi($){let s=`
from typing import Any, Dict

data = {
    "FI": {
        "code": "FI",
        "name": "Finland",
        "capital": {
            "name": "Helsinki",
            "lat": 60.170833,
            "lon": 24.9375,
        },
        "languages": ["fi", "sv"],
        "area": 338455,
    },
    "NR": {
        "code": "NR",
        "name": "Nauru",
        "capital": None,
        "languages": ["na", "en"],
        "area": 21,
    },
}


async def get_data(country: str) -> Dict[str, Any]:
    """
    Get the country data.

    This would in practice fetch the data from your underlying data source,
    such as a database, sensor or another API.

    :param country: Two-letter country code.
    :return: The data for the country.
    :raise KeyError: If no data is found for the country.
    """
    return data[country.upper()]
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Di($){let s=`
from fastapi import APIRouter
from fastapi.exceptions import HTTPException

from app.datasource import get_data
from app.models import BasicCountryInfoRequest, BasicCountryInfoResponse

router = APIRouter()


@router.post(
    "/test/ioxio-dataspace-guides/Country/BasicInfo",
    summary="Basic Country Info",
    description="Data Product for basic country info",
    response_model=BasicCountryInfoResponse,
)
async def data_product(params: BasicCountryInfoRequest):
    try:
        data = await get_data(params.code)
    except KeyError:
        raise HTTPException(404, "Country not found")

    return BasicCountryInfoResponse(**data)
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Fi($){let s;return{c(){s=u("FastAPI documentation")},l(a){s=f(a,"FastAPI documentation")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Oi($){let s;return{c(){s=u("request body")},l(a){s=f(a,"request body")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Bi($){let s;return{c(){s=u("response models")},l(a){s=f(a,"response models")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function Ri($){let s;return{c(){s=u("handling errors")},l(a){s=f(a,"handling errors")},m(a,i){o(a,s,i)},d(a){a&&n(s)}}}function ji($){let s=xe.VERIFYING_API_TOKENS.title+"",a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Ni($){let s=`
  curl --include \\
  --request POST \\
  --url 'https://gateway.sandbox.ioxio-dataspace.com/test/ioxio-dataspace-guides/Country/BasicInfo?source=ioxio_dataspace_guides' \\
  --header 'Content-Type: application/json' \\
  --header 'X-Preview-Token: m7Arq86bNPRO69GRieKG9A' \\
  --data '{"code": "FI"}'
HTTP/2 200
content-type: application/json
content-security-policy: base-uri 'none'; default-src 'none'; form-action 'none'; frame-ancestors 'none'
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
strict-transport-security: max-age=63072000
x-powered-by: Dataspace technology by IOXIO
x-cloud-trace-context: bdf665cf604f8eb05b5af0fe2f52e521;o=1
date: Mon, 15 Aug 2022 11:36:49 GMT
server: Google Frontend
content-length: 130

{"code":"FI","name":"Finland","area":338455.0,"languages":["fi","sv"],"capital":{"name":"Helsinki","lat":60.170833,"lon":24.9375}}
`,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function zi($){let s=`
  `,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Si($){let s=`curl --include \\
  --request POST \\
  --url 'https://gateway.sandbox.ioxio-dataspace.com/test/ioxio-dataspace-guides/Country/BasicInfo?source=ioxio_dataspace_guides' \\
  --header 'Content-Type: application/json' \\
  --header 'X-Preview-Token: m7Arq86bNPRO69GRieKG9A' \\
  --data '{"code": "XYZ"}'
HTTP/2 502
content-type: application/json
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
strict-transport-security: max-age=63072000
x-powered-by: Dataspace technology by IOXIO
x-cloud-trace-context: d1fed33eef8fa02f6fa160d28637884c;o=1
date: Mon, 15 Aug 2022 11:45:45 GMT
server: Google Frontend
content-length: 95

{"message":"Data source returned an error","status":404,"error":{"detail":"Country not found"}}

  `,a;return{c(){a=u(s)},l(i){a=f(i,s)},m(i,x){o(i,a,x)},p:O,d(i){i&&n(a)}}}function Gi($){let s,a,i,x,A,Nt,Y,oa,K,ia,zt,be,St,Ce,Za="Data that you want to provide.",Gt,Ie,Qa="A data source definition for the data.",Ut,Te,eo=`Ability to host an API that responds to <em>POST</em> requests on the public internet over the https
    protocol.`,Wt,Pe,Xt,J,sa,V,la,Yt,Z,ra,Q,ua,Kt,Me,Jt,B,fa,vt,to="test/ioxio-dataspace-guides/Country/BasicInfo",pa,ee,da,Vt,Le,no=`In this case it means we will create an API that accepts a <em>POST</em> request at the path
    <em>/test/ioxio-dataspace-guides/Country/BasicInfo</em>. It could for example be hosted at
    <em>https://productizer.example.com/test/ioxio-dataspace-guides/Country/BasicInfo</em>.`,Zt,ke,ao="The <em>POST</em> request to that endpoint needs to accept a JSON payload, similar to this:",Qt,te,en,Ae,oo="It needs to respond with a JSON payload that could look like this:",tn,ne,nn,Ee,io=`If you already know how you can build this using your own preferred tools and how to host it,
    you can skip ahead to the section where we add the data source using the developer portal.`,an,He,on,R,ma,ae,$a,oe,ca,sn,qe,ln,De,so="You most likely want to update the <em>README.md</em> to better describe your own data source.",rn,M,ha,ie,ga,_t,lo="pyproject.toml",ya,xt,ro="poetry install",wa,bt,uo="poetry run invoke dev",va,un,j,_a,se,xa,Ct,fo=".pre-commit-config.yaml",ba,fn,L,Ca,le,Ia,It,po="Dockerfile",Ta,Tt,mo=".dockerignore",Pa,Pt,$o="docker",Ma,pn,Fe,dn,Oe,co=`Let&#39;s start by deleting the models related to the weather data (
    <em>CurrentWeatherMetricRequest</em>
    and <em>CurrentWeatherMetricResponse</em>) from the <em>app/models.py</em>, as we won&#39;t need
    them.`,mn,I,La,Mt,ho="app/models.py",ka,Lt,go="BasicCountryInfoRequest",Aa,kt,yo="Capital",Ea,At,wo="BasicCountryInfoResponse",Ha,re,qa,$n,N,Da,Et,vo="/src",Fa,ue,Oa,cn,Be,_o="The <em>app/models.py</em> file would after these changes look like this:",hn,fe,gn,Re,yn,je,xo=`We can delete the file <em>app/openweathermap.py</em>. You might find it a useful example in
    case your productizer will fetch data from some other system, but in our case we won&#39;t need it.
    Instead we will create the file <em>app/datasource.py</em> with the following content:`,wn,pe,vn,Ne,bo=`This contains just a hardcoded dictionary of different values and a simple wrapper to fetch
    them. In practice you would want to change this to actually somehow fetch or generate the
    necessary data. Note that you might also need to install some Python packages for connecting to
    and querying your database or other systems. The original implementation required an
    <em>API_KEY</em>
    and an <em>API_ENDPOINT</em>, which our data source does not require, so we can remove those
    from <em>settings.py</em>. Those can however be handy examples for your own implementation.`,_n,ze,xn,Se,Co=`Let&#39;s open the file <em>app/routers/dataproduct.py</em>. We start with emptying it, so we get
    rid of the old route. Let&#39;s add our new route like this:`,bn,de,Cn,Ge,Io=`We define the route for the path <em>/test/ioxio-dataspace-guides/Country/BasicInfo</em>, which
    matches the path for our definition and the path defined in the OpenAPI spec file. We also
    define which pydantic models we use for the request and for the response, as well as define some
    metadata for the route. We use our <em>get_data</em> function to retrieve the data, raising a 404
    exception in case the country is not found.`,In,b,Ba,Ht,To="BasicCountryInfoResponse",Ra,qt,Po="response_model",ja,me,Na,$e,za,ce,Sa,he,Ga,Tn,Ue,Pn,We,Mo=`Deploy and host your productizer. For the next steps we will need the base URL at which it is
    responding, for example <em>https://productizer.example.com/</em>.`,Mn,Xe,Ln,Ye,Lo="Log in to the Developer Portal.",kn,Ke,ko="Ensure you have a group",An,Je,Ao=`In the menu navigate to My groups. If you don't yet have a group, create one. The name of the
    group should preferably relate to yourself, your company or the data source.`,En,Ve,Eo="Add your data source",Hn,Ze,Ho=`Use the menu to navigate to My data sources. Press the <em>+ Add a data source</em> button. In the
    Data product definition, pick the definition you used for your productizer. Pick one of your groups
    in the dropdown for groups.`,qn,Qe,qo=`If you want to publish multiple data sources for the same definition using the same group, you
    can add a variant name to distinguish them from each other. Most likely you don't want to use
    this for your first data source. In the Base URL enter the base URL at which your deployment is
    available. The help text shows where the API endpoint is expected to be available. The Base URL
    will not be displayed to other users and is only used by the product gateway to connect to the
    productizer. All other applications must connect through the product gateway.`,Dn,et,Do="There's three options for the visibility:",Fn,tt,Fo=`<li><b>Private</b> - The data source will be hidden from other users on the dataspace and
      protected by an additional <em>X-Preview-Token</em> header. Should be used when you want to test
      your own data source before making it available to others.</li> <li><b>Unlisted</b> - The data source can be accessed by anyone who knows it exists, but will not be
      published in any listing of data sources on the dataspace.</li> <li><b>Published</b> - The data source will be published on the dataspace for others to see.</li>`,On,nt,Oo=`The access to the data source can be controlled by different options (all options might not be
    available on all dataspaces):`,Bn,z,Dt,Bo="<b>No access control</b> - The dataspace will allow anyone to request data from the data source.",Ua,Ft,Ro=`<b>Self-managed API keys</b> - <em>X-API-Key</em> header will be required to be present, but its
      contents will not be verified by the dataspace.`,Wa,D,Ot,jo="Dataspace verified API tokens",Xa,Bt,No="X-API-Key",Ya,Rt,zo="Access control keys",Ka,ge,Ja,Rn,at,So=`For this tutorial, let&#39;s for simplicity choose <em>Private</em> for the visibility and
    <em>No access control</em>. The filled in form would look like this:`,jn,ot,Nn,it,Go="Finally press the <em>Create</em> button to create the data source.",zn,st,Sn,lt,Uo=`You should now be able to test your own data source by querying it through the product gateway.
    Once you&#39;ve saved the data source, you should see the <em>X-Preview-Token</em>, which is
    necessary to use as long as it&#39;s marked as private. You can also below the Source field see the
    URL at which you can make requests to the data source.`,Gn,rt,Un,ut,Wo=`You can for example use the cURL command line tool to query it like this (make sure the replace
    the URL and <em>X-Preview-Token</em> to the one shown to you in the developer portal and change the
    data to match the expected payload of your own data source):`,Wn,ye,Xn,ft,Xo=`Note: As long as your datasource remains private you will need to use the
    <em>X-Preview-Token</em>
    header, once the datasource is switched to published or unlisted the header should be left out.`,Yn,pt,Yo=`In case you make a request that causes an unexpected response to be generated by the
    productizer, like a 404 Not found message, the product gateway will respond with a 502 to
    indicate there was an error in the productizer:`,Kn,we,Jn,ve,Vn,dt,Zn,mt,Ko=`When you&#39;ve verified the data source works as intended you can publish the data source by
    selecting it in the list of your data sources, pressing the <em>Edit</em> button and switching
    the visibility setting to Published and press the Save button. When it&#39;s published, it will be
    listed to all users in the Available data sources section and it will no longer require an
    <em>X-Preview-Token</em> header to be queried.`,Qn,$t,ea,ct,Jo=`If you created the data source definition under your own <em>test/&lt;your-own-name&gt;</em>
    namespace, you likely want to submit a pull request to copy it outside the test namespace and add
    a version or copy it to the repository used for definitions in a production Dataspace. Note that
    you will also need to adjust your productizer to accept the request at the updated path or ensure
    it will accept requests on multiple different paths.`,ta,ht,Vo=`When the definition has been published, you will need to add the data source once more. This
    time using the definition in the new path. If you want the data source to appear in the list of
    available data sources for other users of the Dataspace also switch the radio button to
    <em>Published</em>.`,na,gt,Zo=`You might want to clean up by removing your old data source in the developer portal, and
    deleting the old data source definition by submitting a pull request to remove it. Please note
    that this will make it impossible to query it, so make sure to update any applications that
    might be using it before deleting either one. Due to this, the Delete button is only possible to
    reach through the Edit view of the data source and requires an extra confirmation.`,aa;return s=new yi({props:{title:$[0].guide.title}}),i=new wi({props:{path:$[0].path}}),A=new k({props:{title:"Introduction"}}),K=new T({props:{href:"https://sandbox.ioxio-dataspace.com/",$$slots:{default:[vi]},$$scope:{ctx:$}}}),be=new k({props:{title:"Prerequisites"}}),Pe=new k({props:{title:"Choosing a data definition for your source"}}),V=new T({props:{href:"https://sandbox.ioxio-dataspace.com",$$slots:{default:[_i]},$$scope:{ctx:$}}}),Q=new T({props:{href:xe.BUILD_DATA_DEF.href,$$slots:{default:[xi]},$$scope:{ctx:$}}}),Me=new k({props:{title:"What are we building?"}}),ee=new T({props:{href:xe.BUILD_DATA_DEF.href,$$slots:{default:[bi]},$$scope:{ctx:$}}}),te=new _e({props:{lang:Va,$$slots:{default:[Ci]},$$scope:{ctx:$}}}),ne=new _e({props:{lang:Va,$$slots:{default:[Ii]},$$scope:{ctx:$}}}),He=new k({props:{title:"Building a data source based on the example productizer"}}),ae=new T({props:{href:"http://fastapi.tiangolo.com",$$slots:{default:[Ti]},$$scope:{ctx:$}}}),oe=new T({props:{href:"https://github.com/ioxio-dataspace/example-productizer/",$$slots:{default:[Pi]},$$scope:{ctx:$}}}),qe=new k({props:{title:"General project setup and cleanup"}}),ie=new T({props:{href:"https://python-poetry.org/",$$slots:{default:[Mi]},$$scope:{ctx:$}}}),se=new T({props:{href:"https://pre-commit.com/",$$slots:{default:[Li]},$$scope:{ctx:$}}}),le=new T({props:{href:"https://www.docker.com/",$$slots:{default:[ki]},$$scope:{ctx:$}}}),Fe=new k({props:{title:"Adding models for the request and response"}}),re=new T({props:{href:xe.BUILD_DATA_DEF.href,$$slots:{default:[Ai]},$$scope:{ctx:$}}}),ue=new T({props:{href:"https://fastapi.tiangolo.com/tutorial/body/",$$slots:{default:[Ei]},$$scope:{ctx:$}}}),fe=new _e({props:{lang:jt,$$slots:{default:[Hi]},$$scope:{ctx:$}}}),Re=new k({props:{title:"Add logic to retrieve data"}}),pe=new _e({props:{lang:jt,$$slots:{default:[qi]},$$scope:{ctx:$}}}),ze=new k({props:{title:"Adding the route"}}),de=new _e({props:{lang:jt,$$slots:{default:[Di]},$$scope:{ctx:$}}}),me=new T({props:{href:"https://fastapi.tiangolo.com/learn/",$$slots:{default:[Fi]},$$scope:{ctx:$}}}),$e=new T({props:{href:"https://fastapi.tiangolo.com/tutorial/body/",$$slots:{default:[Oi]},$$scope:{ctx:$}}}),ce=new T({props:{href:"https://fastapi.tiangolo.com/tutorial/response-model/",$$slots:{default:[Bi]},$$scope:{ctx:$}}}),he=new T({props:{href:"https://fastapi.tiangolo.com/tutorial/handling-errors/",$$slots:{default:[Ri]},$$scope:{ctx:$}}}),Ue=new k({props:{title:"Deploy and host your productizer"}}),Xe=new k({props:{title:"Register your data source in the Developer Portal"}}),ge=new T({props:{href:xe.VERIFYING_API_TOKENS.href,$$slots:{default:[ji]},$$scope:{ctx:$}}}),ot=new mi({props:{img:$[1].CREATE_NEW_DS}}),st=new k({props:{title:"Test your data source"}}),rt=new mi({props:{img:$[1].EDIT_DS}}),ye=new _e({props:{lang:jt,$$slots:{default:[Ni]},$$scope:{ctx:$}}}),we=new _e({props:{lang:jt,$$slots:{default:[zi]},$$scope:{ctx:$}}}),ve=new _e({props:{lang:Va,$$slots:{default:[Si]},$$scope:{ctx:$}}}),dt=new k({props:{title:"Publish the data source"}}),$t=new k({props:{title:"Next steps"}}),{c(){h(s.$$.fragment),a=l(),h(i.$$.fragment),x=l(),h(A.$$.fragment),Nt=l(),Y=d("p"),oa=u(`In this guide we will explain how to build a new data source or productizer and how to use the
    developer portal to publish it using the developer portal so it can be queried through the
    product gateway using `),h(K.$$.fragment),ia=u(`. These steps are the same on all IOXIO Dataspaces, while some might miss the particular
    data products mentioned here.`),zt=l(),h(be.$$.fragment),St=l(),Ce=d("li"),Ce.textContent=Za,Gt=l(),Ie=d("li"),Ie.textContent=Qa,Ut=l(),Te=d("li"),Te.innerHTML=eo,Wt=l(),h(Pe.$$.fragment),Xt=l(),J=d("p"),sa=u("You can use the "),h(V.$$.fragment),la=u(` to find
    available data source definitions.`),Yt=l(),Z=d("p"),ra=u(`If there is no definition for the kind of data that you want to provide you can create your own
    definition by following the `),h(Q.$$.fragment),ua=u(" guide."),Kt=l(),h(Me.$$.fragment),Jt=l(),B=d("p"),fa=u(`In this guide we will build a productizer that provides an API matching the
    `),vt=d("em"),vt.textContent=to,pa=u(` definition that we created in the
    `),h(ee.$$.fragment),da=u(` guide. As the definition is
    an OpenAPI spec you might want to use se some tool like the Swagger Editor to view it in a more human
    friendly format.`),Vt=l(),Le=d("p"),Le.innerHTML=no,Zt=l(),ke=d("p"),ke.innerHTML=ao,Qt=l(),h(te.$$.fragment),en=l(),Ae=d("p"),Ae.textContent=oo,tn=l(),h(ne.$$.fragment),nn=l(),Ee=d("p"),Ee.textContent=io,an=l(),h(He.$$.fragment),on=l(),R=d("p"),ma=u("We will use the "),h(ae.$$.fragment),$a=u(` based
    `),h(oe.$$.fragment),ca=u(` as a starting
    point and just modify it to provide the country data instead. Feel free to fork the repository or
    just download the source code as an archive from GitHub to follow along.`),sn=l(),h(qe.$$.fragment),ln=l(),De=d("p"),De.innerHTML=so,rn=l(),M=d("p"),ha=u("If you intend to use "),h(ie.$$.fragment),ga=u(` to manage your Python dependencies
    you should change the name of the project and authors found in
    `),_t=d("em"),_t.textContent=lo,ya=u(" and run "),xt=d("em"),xt.textContent=ro,wa=u(` to install the dependencies so you then
    can run the productizer locally by running `),bt=d("em"),bt.textContent=uo,va=u(`. If you don't intend
    to use poetry you can delete the file.`),un=l(),j=d("p"),_a=u("You might want to set up "),h(se.$$.fragment),xa=u(` for your project or get
    rid of the `),Ct=d("em"),Ct.textContent=fo,ba=u(`
    file.`),fn=l(),L=d("p"),Ca=u("If you don't intend to use "),h(le.$$.fragment),Ia=u(` for your data source, you
    can also get rid of the `),It=d("em"),It.textContent=po,Ta=u(`,
    `),Tt=d("em"),Tt.textContent=mo,Pa=u(" and the "),Pt=d("em"),Pt.textContent=$o,Ma=u(" directory."),pn=l(),h(Fe.$$.fragment),dn=l(),Oe=d("p"),Oe.innerHTML=co,mn=l(),I=d("p"),La=u("Next, let's add the definition for the request and response to "),Mt=d("em"),Mt.textContent=ho,ka=u(` . We can
    directly copy the `),Lt=d("em"),Lt.textContent=go,Aa=u(", "),kt=d("em"),kt.textContent=yo,Ea=u(` and
    `),At=d("em"),At.textContent=wo,Ha=u(`
    classes from the final definition we created in the `),h(re.$$.fragment),qa=u(" guide. Note that we also need to add the necessary imports."),$n=l(),N=d("p"),Da=u(`If you're building a data source for another definition, it's possible it was created using
    pydantic models, in which you can retrieve those from within the `),Et=d("em"),Et.textContent=vo,Fa=u(` directory in the
    definitions repository. If they are not available you will have to build them yourself. In that
    case the same guide can be handy, as well as the official pydantic documentation and the
    `),h(ue.$$.fragment),Oa=u(" section of the FastAPI docs."),cn=l(),Be=d("p"),Be.innerHTML=_o,hn=l(),h(fe.$$.fragment),gn=l(),h(Re.$$.fragment),yn=l(),je=d("p"),je.innerHTML=xo,wn=l(),h(pe.$$.fragment),vn=l(),Ne=d("p"),Ne.innerHTML=bo,_n=l(),h(ze.$$.fragment),xn=l(),Se=d("p"),Se.innerHTML=Co,bn=l(),h(de.$$.fragment),Cn=l(),Ge=d("p"),Ge.innerHTML=Io,In=l(),b=d("p"),Ba=u("Finally we wrap the data into a "),Ht=d("em"),Ht.textContent=To,Ra=u(`. We could as well just return
    the data as a dictionary and let FastAPI take care of the rest automatically using the
    definition in the
    `),qt=d("em"),qt.textContent=Po,ja=u(`. The
    `),h(me.$$.fragment),Na=u(`
    is really well written and describes in great detail topics, such as the
    `),h($e.$$.fragment),za=u(`,
    `),h(ce.$$.fragment),Sa=u(`
    and
    `),h(he.$$.fragment),Ga=u(`, so those
    resources are well worth a look if the explanation in this guide was too brief.`),Tn=l(),h(Ue.$$.fragment),Pn=l(),We=d("p"),We.innerHTML=Mo,Mn=l(),h(Xe.$$.fragment),Ln=l(),Ye=d("p"),Ye.textContent=Lo,kn=l(),Ke=d("h3"),Ke.textContent=ko,An=l(),Je=d("p"),Je.textContent=Ao,En=l(),Ve=d("h3"),Ve.textContent=Eo,Hn=l(),Ze=d("p"),Ze.innerHTML=Ho,qn=l(),Qe=d("p"),Qe.textContent=qo,Dn=l(),et=d("p"),et.textContent=Do,Fn=l(),tt=d("ul"),tt.innerHTML=Fo,On=l(),nt=d("p"),nt.textContent=Oo,Bn=l(),z=d("ul"),Dt=d("li"),Dt.innerHTML=Bo,Ua=l(),Ft=d("li"),Ft.innerHTML=Ro,Wa=l(),D=d("li"),Ot=d("b"),Ot.textContent=jo,Xa=u(" - The "),Bt=d("em"),Bt.textContent=No,Ya=u(` header will be required and
      verified by the dataspace. Once you save the data source with this setting you can manage
      which groups are allowed to access the data source. The members of the allowed groups will
      find the data source and instructions on generating valid API-tokens for this header in the
      `),Rt=d("em"),Rt.textContent=zo,Ka=u(`
      section of dataspace. The `),h(ge.$$.fragment),Ja=u(` guide explains how you can verify the tokens in your data source and know which group was
      requesting the data.`),Rn=l(),at=d("p"),at.innerHTML=So,jn=l(),h(ot.$$.fragment),Nn=l(),it=d("p"),it.innerHTML=Go,zn=l(),h(st.$$.fragment),Sn=l(),lt=d("p"),lt.innerHTML=Uo,Gn=l(),h(rt.$$.fragment),Un=l(),ut=d("p"),ut.innerHTML=Wo,Wn=l(),h(ye.$$.fragment),Xn=l(),ft=d("p"),ft.innerHTML=Xo,Yn=l(),pt=d("p"),pt.textContent=Yo,Kn=l(),h(we.$$.fragment),Jn=l(),h(ve.$$.fragment),Vn=l(),h(dt.$$.fragment),Zn=l(),mt=d("p"),mt.innerHTML=Ko,Qn=l(),h($t.$$.fragment),ea=l(),ct=d("p"),ct.innerHTML=Jo,ta=l(),ht=d("p"),ht.innerHTML=Vo,na=l(),gt=d("p"),gt.textContent=Zo},l(e){g(s.$$.fragment,e),a=r(e),g(i.$$.fragment,e),x=r(e),g(A.$$.fragment,e),Nt=r(e),Y=m(e,"P",{});var t=q(Y);oa=f(t,`In this guide we will explain how to build a new data source or productizer and how to use the
    developer portal to publish it using the developer portal so it can be queried through the
    product gateway using `),g(K.$$.fragment,t),ia=f(t,`. These steps are the same on all IOXIO Dataspaces, while some might miss the particular
    data products mentioned here.`),t.forEach(n),zt=r(e),g(be.$$.fragment,e),St=r(e),Ce=m(e,"LI",{"data-svelte-h":!0}),c(Ce)!=="svelte-13mw6ge"&&(Ce.textContent=Za),Gt=r(e),Ie=m(e,"LI",{"data-svelte-h":!0}),c(Ie)!=="svelte-1qmuvs1"&&(Ie.textContent=Qa),Ut=r(e),Te=m(e,"LI",{"data-svelte-h":!0}),c(Te)!=="svelte-yvgvsj"&&(Te.innerHTML=eo),Wt=r(e),g(Pe.$$.fragment,e),Xt=r(e),J=m(e,"P",{});var yt=q(J);sa=f(yt,"You can use the "),g(V.$$.fragment,yt),la=f(yt,` to find
    available data source definitions.`),yt.forEach(n),Yt=r(e),Z=m(e,"P",{});var wt=q(Z);ra=f(wt,`If there is no definition for the kind of data that you want to provide you can create your own
    definition by following the `),g(Q.$$.fragment,wt),ua=f(wt," guide."),wt.forEach(n),Kt=r(e),g(Me.$$.fragment,e),Jt=r(e),B=m(e,"P",{});var S=q(B);fa=f(S,`In this guide we will build a productizer that provides an API matching the
    `),vt=m(S,"EM",{"data-svelte-h":!0}),c(vt)!=="svelte-1l1gqlw"&&(vt.textContent=to),pa=f(S,` definition that we created in the
    `),g(ee.$$.fragment,S),da=f(S,` guide. As the definition is
    an OpenAPI spec you might want to use se some tool like the Swagger Editor to view it in a more human
    friendly format.`),S.forEach(n),Vt=r(e),Le=m(e,"P",{"data-svelte-h":!0}),c(Le)!=="svelte-11lrscg"&&(Le.innerHTML=no),Zt=r(e),ke=m(e,"P",{"data-svelte-h":!0}),c(ke)!=="svelte-1uznfct"&&(ke.innerHTML=ao),Qt=r(e),g(te.$$.fragment,e),en=r(e),Ae=m(e,"P",{"data-svelte-h":!0}),c(Ae)!=="svelte-3bpf49"&&(Ae.textContent=oo),tn=r(e),g(ne.$$.fragment,e),nn=r(e),Ee=m(e,"P",{"data-svelte-h":!0}),c(Ee)!=="svelte-jmfix1"&&(Ee.textContent=io),an=r(e),g(He.$$.fragment,e),on=r(e),R=m(e,"P",{});var G=q(R);ma=f(G,"We will use the "),g(ae.$$.fragment,G),$a=f(G,` based
    `),g(oe.$$.fragment,G),ca=f(G,` as a starting
    point and just modify it to provide the country data instead. Feel free to fork the repository or
    just download the source code as an archive from GitHub to follow along.`),G.forEach(n),sn=r(e),g(qe.$$.fragment,e),ln=r(e),De=m(e,"P",{"data-svelte-h":!0}),c(De)!=="svelte-xckwy7"&&(De.innerHTML=so),rn=r(e),M=m(e,"P",{});var E=q(M);ha=f(E,"If you intend to use "),g(ie.$$.fragment,E),ga=f(E,` to manage your Python dependencies
    you should change the name of the project and authors found in
    `),_t=m(E,"EM",{"data-svelte-h":!0}),c(_t)!=="svelte-wj6jdw"&&(_t.textContent=lo),ya=f(E," and run "),xt=m(E,"EM",{"data-svelte-h":!0}),c(xt)!=="svelte-1aq038o"&&(xt.textContent=ro),wa=f(E,` to install the dependencies so you then
    can run the productizer locally by running `),bt=m(E,"EM",{"data-svelte-h":!0}),c(bt)!=="svelte-y1iybz"&&(bt.textContent=uo),va=f(E,`. If you don't intend
    to use poetry you can delete the file.`),E.forEach(n),un=r(e),j=m(e,"P",{});var U=q(j);_a=f(U,"You might want to set up "),g(se.$$.fragment,U),xa=f(U,` for your project or get
    rid of the `),Ct=m(U,"EM",{"data-svelte-h":!0}),c(Ct)!=="svelte-1gshp49"&&(Ct.textContent=fo),ba=f(U,`
    file.`),U.forEach(n),fn=r(e),L=m(e,"P",{});var H=q(L);Ca=f(H,"If you don't intend to use "),g(le.$$.fragment,H),Ia=f(H,` for your data source, you
    can also get rid of the `),It=m(H,"EM",{"data-svelte-h":!0}),c(It)!=="svelte-ipuk"&&(It.textContent=po),Ta=f(H,`,
    `),Tt=m(H,"EM",{"data-svelte-h":!0}),c(Tt)!=="svelte-jy14xa"&&(Tt.textContent=mo),Pa=f(H," and the "),Pt=m(H,"EM",{"data-svelte-h":!0}),c(Pt)!=="svelte-16qzujy"&&(Pt.textContent=$o),Ma=f(H," directory."),H.forEach(n),pn=r(e),g(Fe.$$.fragment,e),dn=r(e),Oe=m(e,"P",{"data-svelte-h":!0}),c(Oe)!=="svelte-1mbqale"&&(Oe.innerHTML=co),mn=r(e),I=m(e,"P",{});var P=q(I);La=f(P,"Next, let's add the definition for the request and response to "),Mt=m(P,"EM",{"data-svelte-h":!0}),c(Mt)!=="svelte-1xh0uj7"&&(Mt.textContent=ho),ka=f(P,` . We can
    directly copy the `),Lt=m(P,"EM",{"data-svelte-h":!0}),c(Lt)!=="svelte-15a5lvd"&&(Lt.textContent=go),Aa=f(P,", "),kt=m(P,"EM",{"data-svelte-h":!0}),c(kt)!=="svelte-axbm0m"&&(kt.textContent=yo),Ea=f(P,` and
    `),At=m(P,"EM",{"data-svelte-h":!0}),c(At)!=="svelte-iyvrvd"&&(At.textContent=wo),Ha=f(P,`
    classes from the final definition we created in the `),g(re.$$.fragment,P),qa=f(P," guide. Note that we also need to add the necessary imports."),P.forEach(n),$n=r(e),N=m(e,"P",{});var W=q(N);Da=f(W,`If you're building a data source for another definition, it's possible it was created using
    pydantic models, in which you can retrieve those from within the `),Et=m(W,"EM",{"data-svelte-h":!0}),c(Et)!=="svelte-dwxc2r"&&(Et.textContent=vo),Fa=f(W,` directory in the
    definitions repository. If they are not available you will have to build them yourself. In that
    case the same guide can be handy, as well as the official pydantic documentation and the
    `),g(ue.$$.fragment,W),Oa=f(W," section of the FastAPI docs."),W.forEach(n),cn=r(e),Be=m(e,"P",{"data-svelte-h":!0}),c(Be)!=="svelte-sjvjvy"&&(Be.innerHTML=_o),hn=r(e),g(fe.$$.fragment,e),gn=r(e),g(Re.$$.fragment,e),yn=r(e),je=m(e,"P",{"data-svelte-h":!0}),c(je)!=="svelte-1qv0iow"&&(je.innerHTML=xo),wn=r(e),g(pe.$$.fragment,e),vn=r(e),Ne=m(e,"P",{"data-svelte-h":!0}),c(Ne)!=="svelte-nhz6t8"&&(Ne.innerHTML=bo),_n=r(e),g(ze.$$.fragment,e),xn=r(e),Se=m(e,"P",{"data-svelte-h":!0}),c(Se)!=="svelte-6ah2bj"&&(Se.innerHTML=Co),bn=r(e),g(de.$$.fragment,e),Cn=r(e),Ge=m(e,"P",{"data-svelte-h":!0}),c(Ge)!=="svelte-13aznig"&&(Ge.innerHTML=Io),In=r(e),b=m(e,"P",{});var C=q(b);Ba=f(C,"Finally we wrap the data into a "),Ht=m(C,"EM",{"data-svelte-h":!0}),c(Ht)!=="svelte-iyvrvd"&&(Ht.textContent=To),Ra=f(C,`. We could as well just return
    the data as a dictionary and let FastAPI take care of the rest automatically using the
    definition in the
    `),qt=m(C,"EM",{"data-svelte-h":!0}),c(qt)!=="svelte-i28xgf"&&(qt.textContent=Po),ja=f(C,`. The
    `),g(me.$$.fragment,C),Na=f(C,`
    is really well written and describes in great detail topics, such as the
    `),g($e.$$.fragment,C),za=f(C,`,
    `),g(ce.$$.fragment,C),Sa=f(C,`
    and
    `),g(he.$$.fragment,C),Ga=f(C,`, so those
    resources are well worth a look if the explanation in this guide was too brief.`),C.forEach(n),Tn=r(e),g(Ue.$$.fragment,e),Pn=r(e),We=m(e,"P",{"data-svelte-h":!0}),c(We)!=="svelte-10d6qgn"&&(We.innerHTML=Mo),Mn=r(e),g(Xe.$$.fragment,e),Ln=r(e),Ye=m(e,"P",{"data-svelte-h":!0}),c(Ye)!=="svelte-xan10z"&&(Ye.textContent=Lo),kn=r(e),Ke=m(e,"H3",{"data-svelte-h":!0}),c(Ke)!=="svelte-tuu3fh"&&(Ke.textContent=ko),An=r(e),Je=m(e,"P",{"data-svelte-h":!0}),c(Je)!=="svelte-1ctovjr"&&(Je.textContent=Ao),En=r(e),Ve=m(e,"H3",{"data-svelte-h":!0}),c(Ve)!=="svelte-1drglyz"&&(Ve.textContent=Eo),Hn=r(e),Ze=m(e,"P",{"data-svelte-h":!0}),c(Ze)!=="svelte-dc4h6"&&(Ze.innerHTML=Ho),qn=r(e),Qe=m(e,"P",{"data-svelte-h":!0}),c(Qe)!=="svelte-74k6mr"&&(Qe.textContent=qo),Dn=r(e),et=m(e,"P",{"data-svelte-h":!0}),c(et)!=="svelte-ixugg4"&&(et.textContent=Do),Fn=r(e),tt=m(e,"UL",{"data-svelte-h":!0}),c(tt)!=="svelte-7rbimd"&&(tt.innerHTML=Fo),On=r(e),nt=m(e,"P",{"data-svelte-h":!0}),c(nt)!=="svelte-19pc3ke"&&(nt.textContent=Oo),Bn=r(e),z=m(e,"UL",{});var X=q(z);Dt=m(X,"LI",{"data-svelte-h":!0}),c(Dt)!=="svelte-81ikfc"&&(Dt.innerHTML=Bo),Ua=r(X),Ft=m(X,"LI",{"data-svelte-h":!0}),c(Ft)!=="svelte-73iyct"&&(Ft.innerHTML=Ro),Wa=r(X),D=m(X,"LI",{});var F=q(D);Ot=m(F,"B",{"data-svelte-h":!0}),c(Ot)!=="svelte-1k6arvo"&&(Ot.textContent=jo),Xa=f(F," - The "),Bt=m(F,"EM",{"data-svelte-h":!0}),c(Bt)!=="svelte-bx5tdr"&&(Bt.textContent=No),Ya=f(F,` header will be required and
      verified by the dataspace. Once you save the data source with this setting you can manage
      which groups are allowed to access the data source. The members of the allowed groups will
      find the data source and instructions on generating valid API-tokens for this header in the
      `),Rt=m(F,"EM",{"data-svelte-h":!0}),c(Rt)!=="svelte-8vwiqp"&&(Rt.textContent=zo),Ka=f(F,`
      section of dataspace. The `),g(ge.$$.fragment,F),Ja=f(F,` guide explains how you can verify the tokens in your data source and know which group was
      requesting the data.`),F.forEach(n),X.forEach(n),Rn=r(e),at=m(e,"P",{"data-svelte-h":!0}),c(at)!=="svelte-1cp87yg"&&(at.innerHTML=So),jn=r(e),g(ot.$$.fragment,e),Nn=r(e),it=m(e,"P",{"data-svelte-h":!0}),c(it)!=="svelte-f58ss1"&&(it.innerHTML=Go),zn=r(e),g(st.$$.fragment,e),Sn=r(e),lt=m(e,"P",{"data-svelte-h":!0}),c(lt)!=="svelte-17ic6lq"&&(lt.innerHTML=Uo),Gn=r(e),g(rt.$$.fragment,e),Un=r(e),ut=m(e,"P",{"data-svelte-h":!0}),c(ut)!=="svelte-17j2fpz"&&(ut.innerHTML=Wo),Wn=r(e),g(ye.$$.fragment,e),Xn=r(e),ft=m(e,"P",{"data-svelte-h":!0}),c(ft)!=="svelte-m5hnc0"&&(ft.innerHTML=Xo),Yn=r(e),pt=m(e,"P",{"data-svelte-h":!0}),c(pt)!=="svelte-1hcly7e"&&(pt.textContent=Yo),Kn=r(e),g(we.$$.fragment,e),Jn=r(e),g(ve.$$.fragment,e),Vn=r(e),g(dt.$$.fragment,e),Zn=r(e),mt=m(e,"P",{"data-svelte-h":!0}),c(mt)!=="svelte-1f0vg3y"&&(mt.innerHTML=Ko),Qn=r(e),g($t.$$.fragment,e),ea=r(e),ct=m(e,"P",{"data-svelte-h":!0}),c(ct)!=="svelte-a070s"&&(ct.innerHTML=Jo),ta=r(e),ht=m(e,"P",{"data-svelte-h":!0}),c(ht)!=="svelte-7gso9b"&&(ht.innerHTML=Vo),na=r(e),gt=m(e,"P",{"data-svelte-h":!0}),c(gt)!=="svelte-160cv8j"&&(gt.textContent=Zo)},m(e,t){y(s,e,t),o(e,a,t),y(i,e,t),o(e,x,t),y(A,e,t),o(e,Nt,t),o(e,Y,t),p(Y,oa),y(K,Y,null),p(Y,ia),o(e,zt,t),y(be,e,t),o(e,St,t),o(e,Ce,t),o(e,Gt,t),o(e,Ie,t),o(e,Ut,t),o(e,Te,t),o(e,Wt,t),y(Pe,e,t),o(e,Xt,t),o(e,J,t),p(J,sa),y(V,J,null),p(J,la),o(e,Yt,t),o(e,Z,t),p(Z,ra),y(Q,Z,null),p(Z,ua),o(e,Kt,t),y(Me,e,t),o(e,Jt,t),o(e,B,t),p(B,fa),p(B,vt),p(B,pa),y(ee,B,null),p(B,da),o(e,Vt,t),o(e,Le,t),o(e,Zt,t),o(e,ke,t),o(e,Qt,t),y(te,e,t),o(e,en,t),o(e,Ae,t),o(e,tn,t),y(ne,e,t),o(e,nn,t),o(e,Ee,t),o(e,an,t),y(He,e,t),o(e,on,t),o(e,R,t),p(R,ma),y(ae,R,null),p(R,$a),y(oe,R,null),p(R,ca),o(e,sn,t),y(qe,e,t),o(e,ln,t),o(e,De,t),o(e,rn,t),o(e,M,t),p(M,ha),y(ie,M,null),p(M,ga),p(M,_t),p(M,ya),p(M,xt),p(M,wa),p(M,bt),p(M,va),o(e,un,t),o(e,j,t),p(j,_a),y(se,j,null),p(j,xa),p(j,Ct),p(j,ba),o(e,fn,t),o(e,L,t),p(L,Ca),y(le,L,null),p(L,Ia),p(L,It),p(L,Ta),p(L,Tt),p(L,Pa),p(L,Pt),p(L,Ma),o(e,pn,t),y(Fe,e,t),o(e,dn,t),o(e,Oe,t),o(e,mn,t),o(e,I,t),p(I,La),p(I,Mt),p(I,ka),p(I,Lt),p(I,Aa),p(I,kt),p(I,Ea),p(I,At),p(I,Ha),y(re,I,null),p(I,qa),o(e,$n,t),o(e,N,t),p(N,Da),p(N,Et),p(N,Fa),y(ue,N,null),p(N,Oa),o(e,cn,t),o(e,Be,t),o(e,hn,t),y(fe,e,t),o(e,gn,t),y(Re,e,t),o(e,yn,t),o(e,je,t),o(e,wn,t),y(pe,e,t),o(e,vn,t),o(e,Ne,t),o(e,_n,t),y(ze,e,t),o(e,xn,t),o(e,Se,t),o(e,bn,t),y(de,e,t),o(e,Cn,t),o(e,Ge,t),o(e,In,t),o(e,b,t),p(b,Ba),p(b,Ht),p(b,Ra),p(b,qt),p(b,ja),y(me,b,null),p(b,Na),y($e,b,null),p(b,za),y(ce,b,null),p(b,Sa),y(he,b,null),p(b,Ga),o(e,Tn,t),y(Ue,e,t),o(e,Pn,t),o(e,We,t),o(e,Mn,t),y(Xe,e,t),o(e,Ln,t),o(e,Ye,t),o(e,kn,t),o(e,Ke,t),o(e,An,t),o(e,Je,t),o(e,En,t),o(e,Ve,t),o(e,Hn,t),o(e,Ze,t),o(e,qn,t),o(e,Qe,t),o(e,Dn,t),o(e,et,t),o(e,Fn,t),o(e,tt,t),o(e,On,t),o(e,nt,t),o(e,Bn,t),o(e,z,t),p(z,Dt),p(z,Ua),p(z,Ft),p(z,Wa),p(z,D),p(D,Ot),p(D,Xa),p(D,Bt),p(D,Ya),p(D,Rt),p(D,Ka),y(ge,D,null),p(D,Ja),o(e,Rn,t),o(e,at,t),o(e,jn,t),y(ot,e,t),o(e,Nn,t),o(e,it,t),o(e,zn,t),y(st,e,t),o(e,Sn,t),o(e,lt,t),o(e,Gn,t),y(rt,e,t),o(e,Un,t),o(e,ut,t),o(e,Wn,t),y(ye,e,t),o(e,Xn,t),o(e,ft,t),o(e,Yn,t),o(e,pt,t),o(e,Kn,t),y(we,e,t),o(e,Jn,t),y(ve,e,t),o(e,Vn,t),y(dt,e,t),o(e,Zn,t),o(e,mt,t),o(e,Qn,t),y($t,e,t),o(e,ea,t),o(e,ct,t),o(e,ta,t),o(e,ht,t),o(e,na,t),o(e,gt,t),aa=!0},p(e,t){const yt={};t&1&&(yt.title=e[0].guide.title),s.$set(yt);const wt={};t&1&&(wt.path=e[0].path),i.$set(wt);const S={};t&4&&(S.$$scope={dirty:t,ctx:e}),K.$set(S);const G={};t&4&&(G.$$scope={dirty:t,ctx:e}),V.$set(G);const E={};t&4&&(E.$$scope={dirty:t,ctx:e}),Q.$set(E);const U={};t&4&&(U.$$scope={dirty:t,ctx:e}),ee.$set(U);const H={};t&4&&(H.$$scope={dirty:t,ctx:e}),te.$set(H);const P={};t&4&&(P.$$scope={dirty:t,ctx:e}),ne.$set(P);const W={};t&4&&(W.$$scope={dirty:t,ctx:e}),ae.$set(W);const C={};t&4&&(C.$$scope={dirty:t,ctx:e}),oe.$set(C);const X={};t&4&&(X.$$scope={dirty:t,ctx:e}),ie.$set(X);const F={};t&4&&(F.$$scope={dirty:t,ctx:e}),se.$set(F);const Qo={};t&4&&(Qo.$$scope={dirty:t,ctx:e}),le.$set(Qo);const ei={};t&4&&(ei.$$scope={dirty:t,ctx:e}),re.$set(ei);const ti={};t&4&&(ti.$$scope={dirty:t,ctx:e}),ue.$set(ti);const ni={};t&4&&(ni.$$scope={dirty:t,ctx:e}),fe.$set(ni);const ai={};t&4&&(ai.$$scope={dirty:t,ctx:e}),pe.$set(ai);const oi={};t&4&&(oi.$$scope={dirty:t,ctx:e}),de.$set(oi);const ii={};t&4&&(ii.$$scope={dirty:t,ctx:e}),me.$set(ii);const si={};t&4&&(si.$$scope={dirty:t,ctx:e}),$e.$set(si);const li={};t&4&&(li.$$scope={dirty:t,ctx:e}),ce.$set(li);const ri={};t&4&&(ri.$$scope={dirty:t,ctx:e}),he.$set(ri);const ui={};t&4&&(ui.$$scope={dirty:t,ctx:e}),ge.$set(ui);const fi={};t&4&&(fi.$$scope={dirty:t,ctx:e}),ye.$set(fi);const pi={};t&4&&(pi.$$scope={dirty:t,ctx:e}),we.$set(pi);const di={};t&4&&(di.$$scope={dirty:t,ctx:e}),ve.$set(di)},i(e){aa||(w(s.$$.fragment,e),w(i.$$.fragment,e),w(A.$$.fragment,e),w(K.$$.fragment,e),w(be.$$.fragment,e),w(Pe.$$.fragment,e),w(V.$$.fragment,e),w(Q.$$.fragment,e),w(Me.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(ne.$$.fragment,e),w(He.$$.fragment,e),w(ae.$$.fragment,e),w(oe.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(se.$$.fragment,e),w(le.$$.fragment,e),w(Fe.$$.fragment,e),w(re.$$.fragment,e),w(ue.$$.fragment,e),w(fe.$$.fragment,e),w(Re.$$.fragment,e),w(pe.$$.fragment,e),w(ze.$$.fragment,e),w(de.$$.fragment,e),w(me.$$.fragment,e),w($e.$$.fragment,e),w(ce.$$.fragment,e),w(he.$$.fragment,e),w(Ue.$$.fragment,e),w(Xe.$$.fragment,e),w(ge.$$.fragment,e),w(ot.$$.fragment,e),w(st.$$.fragment,e),w(rt.$$.fragment,e),w(ye.$$.fragment,e),w(we.$$.fragment,e),w(ve.$$.fragment,e),w(dt.$$.fragment,e),w($t.$$.fragment,e),aa=!0)},o(e){v(s.$$.fragment,e),v(i.$$.fragment,e),v(A.$$.fragment,e),v(K.$$.fragment,e),v(be.$$.fragment,e),v(Pe.$$.fragment,e),v(V.$$.fragment,e),v(Q.$$.fragment,e),v(Me.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ne.$$.fragment,e),v(He.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(qe.$$.fragment,e),v(ie.$$.fragment,e),v(se.$$.fragment,e),v(le.$$.fragment,e),v(Fe.$$.fragment,e),v(re.$$.fragment,e),v(ue.$$.fragment,e),v(fe.$$.fragment,e),v(Re.$$.fragment,e),v(pe.$$.fragment,e),v(ze.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v($e.$$.fragment,e),v(ce.$$.fragment,e),v(he.$$.fragment,e),v(Ue.$$.fragment,e),v(Xe.$$.fragment,e),v(ge.$$.fragment,e),v(ot.$$.fragment,e),v(st.$$.fragment,e),v(rt.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),v(ve.$$.fragment,e),v(dt.$$.fragment,e),v($t.$$.fragment,e),aa=!1},d(e){e&&(n(a),n(x),n(Nt),n(Y),n(zt),n(St),n(Ce),n(Gt),n(Ie),n(Ut),n(Te),n(Wt),n(Xt),n(J),n(Yt),n(Z),n(Kt),n(Jt),n(B),n(Vt),n(Le),n(Zt),n(ke),n(Qt),n(en),n(Ae),n(tn),n(nn),n(Ee),n(an),n(on),n(R),n(sn),n(ln),n(De),n(rn),n(M),n(un),n(j),n(fn),n(L),n(pn),n(dn),n(Oe),n(mn),n(I),n($n),n(N),n(cn),n(Be),n(hn),n(gn),n(yn),n(je),n(wn),n(vn),n(Ne),n(_n),n(xn),n(Se),n(bn),n(Cn),n(Ge),n(In),n(b),n(Tn),n(Pn),n(We),n(Mn),n(Ln),n(Ye),n(kn),n(Ke),n(An),n(Je),n(En),n(Ve),n(Hn),n(Ze),n(qn),n(Qe),n(Dn),n(et),n(Fn),n(tt),n(On),n(nt),n(Bn),n(z),n(Rn),n(at),n(jn),n(Nn),n(it),n(zn),n(Sn),n(lt),n(Gn),n(Un),n(ut),n(Wn),n(Xn),n(ft),n(Yn),n(pt),n(Kn),n(Jn),n(Vn),n(Zn),n(mt),n(Qn),n(ea),n(ct),n(ta),n(ht),n(na),n(gt)),_(s,e),_(i,e),_(A,e),_(K),_(be,e),_(Pe,e),_(V),_(Q),_(Me,e),_(ee),_(te,e),_(ne,e),_(He,e),_(ae),_(oe),_(qe,e),_(ie),_(se),_(le),_(Fe,e),_(re),_(ue),_(fe,e),_(Re,e),_(pe,e),_(ze,e),_(de,e),_(me),_($e),_(ce),_(he),_(Ue,e),_(Xe,e),_(ge),_(ot,e),_(st,e),_(rt,e),_(ye,e),_(we,e),_(ve,e),_(dt,e),_($t,e)}}}function Ui($){let s,a;return s=new gi({props:{$$slots:{default:[Gi]},$$scope:{ctx:$}}}),{c(){h(s.$$.fragment)},l(i){g(s.$$.fragment,i)},m(i,x){y(s,i,x),a=!0},p(i,[x]){const A={};x&5&&(A.$$scope={dirty:x,ctx:i}),s.$set(A)},i(i){a||(w(s.$$.fragment,i),a=!0)},o(i){v(s.$$.fragment,i),a=!1},d(i){_(s,i)}}}function Wi($,s,a){let{data:i}=s;const x=i.images;return $.$$set=A=>{"data"in A&&a(0,i=A.data)},[i,x]}class as extends ci{constructor(s){super(),hi(this,s,Wi,Ui,$i,{data:0})}}export{as as component};
