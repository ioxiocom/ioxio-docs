import{s as za,a as l,f,l as u,c as r,g as d,h as H,m as p,d as n,A as c,i as a,z as m,B as F}from"../chunks/scheduler.5f105fdc.js";import{S as Oa,i as ja,b as h,d as g,m as y,a as w,t as _,e as v}from"../chunks/index.73e7b43c.js";import{T as Ra,S as E}from"../chunks/TableOfContents.314b5577.js";import{C as he}from"../chunks/Code.d0215f6e.js";import{j as Ao}from"../chunks/json.4d993fc0.js";import{p as Pt}from"../chunks/python.62bbd573.js";import{T as Na,B as Sa}from"../chunks/Title.a431bb73.js";import{G as Tt}from"../chunks/navigation.ad3b4cd3.js";import{G as Ba}from"../chunks/GuideImage.961a36c3.js";import{A as P}from"../chunks/A.42f697ed.js";function Wa($){let i;return{c(){i=u("IOXIO Sandbox Dataspace")},l(o){i=p(o,"IOXIO Sandbox Dataspace")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function Ua($){let i;return{c(){i=u("Data definition viewer")},l(o){i=p(o,"Data definition viewer")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function Xa($){let i=Tt.BUILD_DATA_DEF.title+"",o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function Ya($){let i=Tt.BUILD_DATA_DEF.title+"",o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function Ga($){let i=`
{
  "code": "FI"
}
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function Ka($){let i=`
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
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function Ja($){let i;return{c(){i=u("FastAPI")},l(o){i=p(o,"FastAPI")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function Qa($){let i;return{c(){i=u("example productizer")},l(o){i=p(o,"example productizer")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function Za($){let i;return{c(){i=u("Poetry")},l(o){i=p(o,"Poetry")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function Va($){let i;return{c(){i=u("pre-commit")},l(o){i=p(o,"pre-commit")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function ei($){let i;return{c(){i=u("Docker")},l(o){i=p(o,"Docker")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function ti($){let i=Tt.BUILD_DATA_DEF.title+"",o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function ni($){let i;return{c(){i=u("Request Body")},l(o){i=p(o,"Request Body")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function oi($){let i=`
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
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function ai($){let i=`
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
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function ii($){let i=`
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
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function si($){let i;return{c(){i=u("FastAPI documentation")},l(o){i=p(o,"FastAPI documentation")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function li($){let i;return{c(){i=u("request body")},l(o){i=p(o,"request body")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function ri($){let i;return{c(){i=u("response models")},l(o){i=p(o,"response models")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function ui($){let i;return{c(){i=u("handling errors")},l(o){i=p(o,"handling errors")},m(o,s){a(o,i,s)},d(o){o&&n(i)}}}function pi($){let i=`
  curl --include \\
  --request POST \\
  --url 'https://gateway.sandbox.ioxio-dataspace.com/test/ioxio-dataspace-guides/Country/BasicInfo?source=ioxio_dataspace_guides' \\
  --header 'Content-Type: application/json' \\
  --header 'X-Preview-Token: wgyhTXDAMa3uBwLIziBnpQ' \\
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
`,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function fi($){let i=`
  `,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function di($){let i=`curl --include \\
  --request POST \\
  --url 'https://gateway.sandbox.ioxio-dataspace.com/test/ioxio-dataspace-guides/Country/BasicInfo?source=ioxio_dataspace_guides' \\
  --header 'Content-Type: application/json' \\
  --header 'X-Preview-Token: wgyhTXDAMa3uBwLIziBnpQ' \\
  --data '{"code": "ZZ"}'
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

  `,o;return{c(){o=u(i)},l(s){o=p(s,i)},m(s,x){a(s,o,x)},p:F,d(s){s&&n(o)}}}function mi($){let i,o,s,x,D,Mt,W,Rn,U,Nn,At,ge,Et,ye,Eo="Data that you want to provide.",Dt,we,Do="A data source definition for the data.",kt,_e,ko=`Ability to host an API that responds to <em>POST</em> requests on the public internet over the https
    protocol.`,Lt,ve,Ht,X,Sn,Y,Wn,Ft,G,Un,K,Xn,qt,xe,Bt,q,Yn,ft,Lo="test/ioxio-dataspace-guides/Country/BasicInfo",Gn,J,Kn,zt,Ce,Ho=`In this case it means we will create an API that accepts a <em>POST</em> request at the path
    <em>/test/ioxio-dataspace-guides/Country/BasicInfo</em>. It could for example be hosted at
    <em>https://productizer.example.com/test/ioxio-dataspace-guides/Country/BasicInfo</em>.`,Ot,be,Fo="The <em>POST</em> request to that endpoint needs to accept a JSON payload, similar to this:",jt,Q,Rt,Ie,qo="It needs to respond with a JSON payload that could look like this:",Nt,Z,St,Te,Bo=`If you already know how you can build this using your own preferred tools and how to host it,
    you can skip ahead to the section where we add the data source using the developer portal.`,Wt,Pe,Ut,B,Jn,V,Qn,ee,Zn,Xt,Me,Yt,Ae,zo="You most likely want to update the <em>README.md</em> to better describe your own data source.",Gt,M,Vn,te,eo,dt,Oo="pyproject.toml",to,mt,jo="poetry install",no,$t,Ro="poetry run invoke dev",oo,Kt,z,ao,ne,io,ct,No=".pre-commit-config.yaml",so,Jt,A,lo,oe,ro,ht,So="Dockerfile",uo,gt,Wo=".dockerignore",po,yt,Uo="docker",fo,Qt,Ee,Zt,De,Xo=`Let&#39;s start by deleting the models related to the weather data (<em>CurrentWeatherMetricRequest</em>
    and <em>CurrentWeatherMetricResponse</em>) from the <em>app/models.py</em>, as we won&#39;t need
    them.`,Vt,I,mo,wt,Yo="app/models.py",$o,_t,Go="BasicCountryInfoRequest",co,vt,Ko="Capital",ho,xt,Jo="BasicCountryInfoResponse",go,ae,yo,en,O,wo,Ct,Qo="/src",_o,ie,vo,tn,ke,Zo="The <em>app/models.py</em> file would after these changes look like this:",nn,se,on,Le,an,He,Vo=`We can delete the file <em>app/openweathermap.py</em>. You might find it a useful example in
    case your productizer will fetch data from some other system, but in our case we won&#39;t need it.
    Instead we will create the file <em>app/datasource.py</em> with the following content:`,sn,le,ln,Fe,ea=`This contains just a hardcoded dictionary of different values and a simple wrapper to fetch
    them. In practice you would want to change this to actually somehow fetch or generate the
    necessary data. Note that you might also need to install some Python packages for connecting to
    and querying your database or other systems. The original implementation required an
    <em>API_KEY</em>
    and an <em>API_ENDPOINT</em>, which our data source does not require, so we can remove those
    from <em>settings.py</em>. Those can however be handy examples for your own implementation.`,rn,qe,un,Be,ta=`Let&#39;s open the file <em>app/routers/dataproduct.py</em>. We start with emptying it, so we get
    rid of the old route. Let&#39;s add our new route like this:`,pn,re,fn,ze,na=`We define the route for the path <em>/test/ioxio-dataspace-guides/Country/BasicInfo</em>, which
    matches the path for our definition and the path defined in the OpenAPI spec file. We also
    define which pydantic models we use for the request and for the response, as well as define some
    metadata for the route. We use our <em>get_data</em> function to retrieve the data, raising a 404
    exception in case the country is not found.`,dn,C,xo,bt,oa="BasicCountryInfoResponse",Co,It,aa="response_model",bo,ue,Io,pe,To,fe,Po,de,Mo,mn,Oe,$n,je,ia=`Deploy and host your productizer. For the next steps we will need the base URL at which it is
    responding, for example <em>https://productizer.example.com/</em>.`,cn,Re,hn,Ne,sa="Log in to the Developer Portal.",gn,Se,la="Ensure you have a group",yn,We,ra=`In the menu navigate to My groups. If you don't yet have a group, create one. The name of the
    group should preferably relate to yourself, your company or the data source.`,wn,Ue,ua="Add your data source",_n,Xe,pa=`Use the menu to navigate to My data sources. Press the + ADD A DATASOURCE button. In the Data
    product definition, pick the definition you used for your productizer. Pick one of your groups
    in the dropdown for groups.`,vn,Ye,fa=`If you want to publish multiple data sources for the same definition using the same group, you
    can add a variant name to distinguish them from each other. Most likely you don't want to use
    this for your first data source. In the Base URL enter the base URL at which your deployment is
    available. The help text shows where the API endpoint is expected to be available. The Base URL
    will not be displayed to other users and is only used by the product gateway to connect to the
    productizer. All other applications must connect through the product gateway. For the purpose of
    this tutorial let's select "private" for the visibility options. The filled in form would look
    like this:`,xn,Ge,Cn,Ke,da="Finally press the CREATE button to create the data source.",bn,Je,In,Qe,ma=`You should now be able to test your own data source by querying it through the product gateway.
    From the list of your data sources, press EDIT next to the data source you just created. The
    developer portal will show you the address at which you can query your own data source as well
    as the <em>X-Preview-Token</em> necessary to use a data source until it has been published.`,Tn,Ze,Pn,Ve,$a=`You can for example use the cURL command line tool to query it like this (make sure the replace
    the url and <em>X-Preview-Token</em> to the one shown to you in the developer portal and change the
    data to match the expected payload of your own data source):`,Mn,me,An,et,ca=`Note: As long as your datasource is not published you will need to use the
    <em>X-Preview-Token</em>
    header, once the datasource is published the header should be left out.`,En,tt,ha=`In case you make a request that causes an unexpected response to be generated by the
    productizer, like a 404 Not found message, the product gateway will respond with a 502 to
    indicate there was an error in the productizer:`,Dn,$e,kn,ce,Ln,nt,Hn,ot,ga=`When you&#39;ve verified the data source works as intended you can publish the data source by
    selecting it in the list, pressing the EDIT button and ticking the Published checkbox and press
    the UPDATE button to save the changes. When it&#39;s published, it will be listed to all users in
    the Available data sources section and it will no longer require an <em>X-Preview-Token</em> header
    to be queried.`,Fn,at,qn,it,ya=`If you created the data source definition under your own <em>test/&lt;your-own-name&gt;</em>
    namespace, you likely want to submit a pull request to copy it outside the test namespace and add
    a version or copy it to the repository used for definitions in a production Dataspace. Note that
    you will also need to adjust your productizer to accept the request at the updated path or ensure
    it will accept requests on multiple different paths.`,Bn,st,wa=`When the definition has been published, you will need to add the data source once more. This
    time using the definition in the new path. If you want the data source to appear in the list of
    available data sources for other users of the Dataspace also switch the radio button to
    <em>Published</em>.`,zn,lt,_a=`You might want to clean up by removing the old data source definition by submitting a pull
    request to remove it as well as delete your old data source in the developer portal. Please note
    that this will make it impossible to query it, so make sure to update any applications that
    might be using it before deleting either one.`,On,rt,va=`Due to this danger the deletion of the data source is slightly hard to reach. Open My data
    sources page in the developer portal and press OPEN next to the data source to reveal the EDIT
    button. Press it to go to the edit view, where you can press the DELETE button. You will still
    be prompted to confirm the deletion.`,jn;return i=new Na({props:{title:$[0].guide.title}}),s=new Sa({props:{path:$[0].path}}),D=new E({props:{title:"Introduction"}}),U=new P({props:{href:"https://sandbox.ioxio-dataspace.com/",$$slots:{default:[Wa]},$$scope:{ctx:$}}}),ge=new E({props:{title:"Prerequisites"}}),ve=new E({props:{title:"Choosing a data definition for your source"}}),Y=new P({props:{href:"https://sandbox.ioxio-dataspace.com",$$slots:{default:[Ua]},$$scope:{ctx:$}}}),K=new P({props:{href:Tt.BUILD_DATA_DEF.href,$$slots:{default:[Xa]},$$scope:{ctx:$}}}),xe=new E({props:{title:"What are we building?"}}),J=new P({props:{href:Tt.BUILD_DATA_DEF.href,$$slots:{default:[Ya]},$$scope:{ctx:$}}}),Q=new he({props:{lang:Ao,$$slots:{default:[Ga]},$$scope:{ctx:$}}}),Z=new he({props:{lang:Ao,$$slots:{default:[Ka]},$$scope:{ctx:$}}}),Pe=new E({props:{title:"Building a data source based on the example productizer"}}),V=new P({props:{href:"http://fastapi.tiangolo.com",$$slots:{default:[Ja]},$$scope:{ctx:$}}}),ee=new P({props:{href:"https://github.com/ioxio-dataspace/example-productizer/",$$slots:{default:[Qa]},$$scope:{ctx:$}}}),Me=new E({props:{title:"General project setup and cleanup"}}),te=new P({props:{href:"https://python-poetry.org/",$$slots:{default:[Za]},$$scope:{ctx:$}}}),ne=new P({props:{href:"https://pre-commit.com/",$$slots:{default:[Va]},$$scope:{ctx:$}}}),oe=new P({props:{href:"https://www.docker.com/",$$slots:{default:[ei]},$$scope:{ctx:$}}}),Ee=new E({props:{title:"Adding models for the request and response"}}),ae=new P({props:{href:Tt.BUILD_DATA_DEF.href,$$slots:{default:[ti]},$$scope:{ctx:$}}}),ie=new P({props:{href:"https://fastapi.tiangolo.com/tutorial/body/",$$slots:{default:[ni]},$$scope:{ctx:$}}}),se=new he({props:{lang:Pt,$$slots:{default:[oi]},$$scope:{ctx:$}}}),Le=new E({props:{title:"Add logic to retrieve data"}}),le=new he({props:{lang:Pt,$$slots:{default:[ai]},$$scope:{ctx:$}}}),qe=new E({props:{title:"Adding the route"}}),re=new he({props:{lang:Pt,$$slots:{default:[ii]},$$scope:{ctx:$}}}),ue=new P({props:{href:"https://fastapi.tiangolo.com/learn/",$$slots:{default:[si]},$$scope:{ctx:$}}}),pe=new P({props:{href:"https://fastapi.tiangolo.com/tutorial/body/",$$slots:{default:[li]},$$scope:{ctx:$}}}),fe=new P({props:{href:"https://fastapi.tiangolo.com/tutorial/response-model/",$$slots:{default:[ri]},$$scope:{ctx:$}}}),de=new P({props:{href:"https://fastapi.tiangolo.com/tutorial/handling-errors/",$$slots:{default:[ui]},$$scope:{ctx:$}}}),Oe=new E({props:{title:"Deploy and host your productizer"}}),Re=new E({props:{title:"Register your data source in the Developer Portal"}}),Ge=new Ba({props:{img:$[1].CREATE_NEW_DS}}),Je=new E({props:{title:"Test your data source"}}),Ze=new Ba({props:{img:$[1].EDIT_DS}}),me=new he({props:{lang:Pt,$$slots:{default:[pi]},$$scope:{ctx:$}}}),$e=new he({props:{lang:Pt,$$slots:{default:[fi]},$$scope:{ctx:$}}}),ce=new he({props:{lang:Ao,$$slots:{default:[di]},$$scope:{ctx:$}}}),nt=new E({props:{title:"Publish the data source"}}),at=new E({props:{title:"Next steps"}}),{c(){h(i.$$.fragment),o=l(),h(s.$$.fragment),x=l(),h(D.$$.fragment),Mt=l(),W=f("p"),Rn=u(`In this guide we will explain how to build a new data source or productizer and how to use the
    developer portal to publish it using the developer portal so it can be queried through the
    product gateway using `),h(U.$$.fragment),Nn=u(`. These steps are the same on all IOXIO Dataspaces, while some might miss the particular data
    products mentioned here.`),At=l(),h(ge.$$.fragment),Et=l(),ye=f("li"),ye.textContent=Eo,Dt=l(),we=f("li"),we.textContent=Do,kt=l(),_e=f("li"),_e.innerHTML=ko,Lt=l(),h(ve.$$.fragment),Ht=l(),X=f("p"),Sn=u("You can use the "),h(Y.$$.fragment),Wn=u(` to find
    available data source definitions.`),Ft=l(),G=f("p"),Un=u(`If there is no definition for the kind of data that you want to provide you can create your own
    definition by following the `),h(K.$$.fragment),Xn=u(" guide."),qt=l(),h(xe.$$.fragment),Bt=l(),q=f("p"),Yn=u(`In this guide we will build a productizer that provides an API matching the
    `),ft=f("em"),ft.textContent=Lo,Gn=u(" definition that we created in the "),h(J.$$.fragment),Kn=u(` guide. As the definition is an OpenAPI spec you might want to use se some tool like the Swagger
    Editor to view it in a more human friendly format.`),zt=l(),Ce=f("p"),Ce.innerHTML=Ho,Ot=l(),be=f("p"),be.innerHTML=Fo,jt=l(),h(Q.$$.fragment),Rt=l(),Ie=f("p"),Ie.textContent=qo,Nt=l(),h(Z.$$.fragment),St=l(),Te=f("p"),Te.textContent=Bo,Wt=l(),h(Pe.$$.fragment),Ut=l(),B=f("p"),Jn=u("We will use the "),h(V.$$.fragment),Qn=u(` based
    `),h(ee.$$.fragment),Zn=u(` as a starting
    point and just modify it to provide the country data instead. Feel free to fork the repository or
    just download the source code as an archive from GitHub to follow along.`),Xt=l(),h(Me.$$.fragment),Yt=l(),Ae=f("p"),Ae.innerHTML=zo,Gt=l(),M=f("p"),Vn=u("If you intend to use "),h(te.$$.fragment),eo=u(` to manage your Python dependencies
    you should change the name of the project and authors found in
    `),dt=f("em"),dt.textContent=Oo,to=u(" and run "),mt=f("em"),mt.textContent=jo,no=u(` to install the dependencies so you then
    can run the productizer locally by running `),$t=f("em"),$t.textContent=Ro,oo=u(`. If you don't intend
    to use poetry you can delete the file.`),Kt=l(),z=f("p"),ao=u("You might want to set up "),h(ne.$$.fragment),io=u(` for your project or get
    rid of the `),ct=f("em"),ct.textContent=No,so=u(`
    file.`),Jt=l(),A=f("p"),lo=u("If you don't intend to use "),h(oe.$$.fragment),ro=u(` for your data source, you
    can also get rid of the `),ht=f("em"),ht.textContent=So,uo=u(`,
    `),gt=f("em"),gt.textContent=Wo,po=u(" and the "),yt=f("em"),yt.textContent=Uo,fo=u(" directory."),Qt=l(),h(Ee.$$.fragment),Zt=l(),De=f("p"),De.innerHTML=Xo,Vt=l(),I=f("p"),mo=u("Next, let's add the definition for the request and response to "),wt=f("em"),wt.textContent=Yo,$o=u(` . We can
    directly copy the `),_t=f("em"),_t.textContent=Go,co=u(", "),vt=f("em"),vt.textContent=Ko,ho=u(` and
    `),xt=f("em"),xt.textContent=Jo,go=u(`
    classes from the final definition we created in the `),h(ae.$$.fragment),yo=u(" guide. Note that we also need to add the necessary imports."),en=l(),O=f("p"),wo=u(`If you're building a data source for another definition, it's possible it was created using
    pydantic models, in which you can retrieve those from within the `),Ct=f("em"),Ct.textContent=Qo,_o=u(` directory in the
    definitions repository. If they are not available you will have to build them yourself. In that
    case the same guide can be handy, as well as the official pydantic documentation and the
    `),h(ie.$$.fragment),vo=u(" section of the FastAPI docs."),tn=l(),ke=f("p"),ke.innerHTML=Zo,nn=l(),h(se.$$.fragment),on=l(),h(Le.$$.fragment),an=l(),He=f("p"),He.innerHTML=Vo,sn=l(),h(le.$$.fragment),ln=l(),Fe=f("p"),Fe.innerHTML=ea,rn=l(),h(qe.$$.fragment),un=l(),Be=f("p"),Be.innerHTML=ta,pn=l(),h(re.$$.fragment),fn=l(),ze=f("p"),ze.innerHTML=na,dn=l(),C=f("p"),xo=u("Finally we wrap the data into a "),bt=f("em"),bt.textContent=oa,Co=u(`. We could as well just return
    the data as a dictionary and let FastAPI take care of the rest automatically using the
    definition in the
    `),It=f("em"),It.textContent=aa,bo=u(`. The
    `),h(ue.$$.fragment),Io=u(`
    is really well written and describes in great detail topics, such as the
    `),h(pe.$$.fragment),To=u(`,
    `),h(fe.$$.fragment),Po=u(`
    and
    `),h(de.$$.fragment),Mo=u(`, so those
    resources are well worth a look if the explanation in this guide was too brief.`),mn=l(),h(Oe.$$.fragment),$n=l(),je=f("p"),je.innerHTML=ia,cn=l(),h(Re.$$.fragment),hn=l(),Ne=f("p"),Ne.textContent=sa,gn=l(),Se=f("h3"),Se.textContent=la,yn=l(),We=f("p"),We.textContent=ra,wn=l(),Ue=f("h3"),Ue.textContent=ua,_n=l(),Xe=f("p"),Xe.textContent=pa,vn=l(),Ye=f("p"),Ye.textContent=fa,xn=l(),h(Ge.$$.fragment),Cn=l(),Ke=f("p"),Ke.textContent=da,bn=l(),h(Je.$$.fragment),In=l(),Qe=f("p"),Qe.innerHTML=ma,Tn=l(),h(Ze.$$.fragment),Pn=l(),Ve=f("p"),Ve.innerHTML=$a,Mn=l(),h(me.$$.fragment),An=l(),et=f("p"),et.innerHTML=ca,En=l(),tt=f("p"),tt.textContent=ha,Dn=l(),h($e.$$.fragment),kn=l(),h(ce.$$.fragment),Ln=l(),h(nt.$$.fragment),Hn=l(),ot=f("p"),ot.innerHTML=ga,Fn=l(),h(at.$$.fragment),qn=l(),it=f("p"),it.innerHTML=ya,Bn=l(),st=f("p"),st.innerHTML=wa,zn=l(),lt=f("p"),lt.textContent=_a,On=l(),rt=f("p"),rt.textContent=va},l(e){g(i.$$.fragment,e),o=r(e),g(s.$$.fragment,e),x=r(e),g(D.$$.fragment,e),Mt=r(e),W=d(e,"P",{});var t=H(W);Rn=p(t,`In this guide we will explain how to build a new data source or productizer and how to use the
    developer portal to publish it using the developer portal so it can be queried through the
    product gateway using `),g(U.$$.fragment,t),Nn=p(t,`. These steps are the same on all IOXIO Dataspaces, while some might miss the particular data
    products mentioned here.`),t.forEach(n),At=r(e),g(ge.$$.fragment,e),Et=r(e),ye=d(e,"LI",{"data-svelte-h":!0}),c(ye)!=="svelte-13mw6ge"&&(ye.textContent=Eo),Dt=r(e),we=d(e,"LI",{"data-svelte-h":!0}),c(we)!=="svelte-1qmuvs1"&&(we.textContent=Do),kt=r(e),_e=d(e,"LI",{"data-svelte-h":!0}),c(_e)!=="svelte-yvgvsj"&&(_e.innerHTML=ko),Lt=r(e),g(ve.$$.fragment,e),Ht=r(e),X=d(e,"P",{});var ut=H(X);Sn=p(ut,"You can use the "),g(Y.$$.fragment,ut),Wn=p(ut,` to find
    available data source definitions.`),ut.forEach(n),Ft=r(e),G=d(e,"P",{});var pt=H(G);Un=p(pt,`If there is no definition for the kind of data that you want to provide you can create your own
    definition by following the `),g(K.$$.fragment,pt),Xn=p(pt," guide."),pt.forEach(n),qt=r(e),g(xe.$$.fragment,e),Bt=r(e),q=d(e,"P",{});var j=H(q);Yn=p(j,`In this guide we will build a productizer that provides an API matching the
    `),ft=d(j,"EM",{"data-svelte-h":!0}),c(ft)!=="svelte-1l1gqlw"&&(ft.textContent=Lo),Gn=p(j," definition that we created in the "),g(J.$$.fragment,j),Kn=p(j,` guide. As the definition is an OpenAPI spec you might want to use se some tool like the Swagger
    Editor to view it in a more human friendly format.`),j.forEach(n),zt=r(e),Ce=d(e,"P",{"data-svelte-h":!0}),c(Ce)!=="svelte-11lrscg"&&(Ce.innerHTML=Ho),Ot=r(e),be=d(e,"P",{"data-svelte-h":!0}),c(be)!=="svelte-1uznfct"&&(be.innerHTML=Fo),jt=r(e),g(Q.$$.fragment,e),Rt=r(e),Ie=d(e,"P",{"data-svelte-h":!0}),c(Ie)!=="svelte-3bpf49"&&(Ie.textContent=qo),Nt=r(e),g(Z.$$.fragment,e),St=r(e),Te=d(e,"P",{"data-svelte-h":!0}),c(Te)!=="svelte-jmfix1"&&(Te.textContent=Bo),Wt=r(e),g(Pe.$$.fragment,e),Ut=r(e),B=d(e,"P",{});var R=H(B);Jn=p(R,"We will use the "),g(V.$$.fragment,R),Qn=p(R,` based
    `),g(ee.$$.fragment,R),Zn=p(R,` as a starting
    point and just modify it to provide the country data instead. Feel free to fork the repository or
    just download the source code as an archive from GitHub to follow along.`),R.forEach(n),Xt=r(e),g(Me.$$.fragment,e),Yt=r(e),Ae=d(e,"P",{"data-svelte-h":!0}),c(Ae)!=="svelte-xckwy7"&&(Ae.innerHTML=zo),Gt=r(e),M=d(e,"P",{});var k=H(M);Vn=p(k,"If you intend to use "),g(te.$$.fragment,k),eo=p(k,` to manage your Python dependencies
    you should change the name of the project and authors found in
    `),dt=d(k,"EM",{"data-svelte-h":!0}),c(dt)!=="svelte-wj6jdw"&&(dt.textContent=Oo),to=p(k," and run "),mt=d(k,"EM",{"data-svelte-h":!0}),c(mt)!=="svelte-1aq038o"&&(mt.textContent=jo),no=p(k,` to install the dependencies so you then
    can run the productizer locally by running `),$t=d(k,"EM",{"data-svelte-h":!0}),c($t)!=="svelte-y1iybz"&&($t.textContent=Ro),oo=p(k,`. If you don't intend
    to use poetry you can delete the file.`),k.forEach(n),Kt=r(e),z=d(e,"P",{});var N=H(z);ao=p(N,"You might want to set up "),g(ne.$$.fragment,N),io=p(N,` for your project or get
    rid of the `),ct=d(N,"EM",{"data-svelte-h":!0}),c(ct)!=="svelte-1gshp49"&&(ct.textContent=No),so=p(N,`
    file.`),N.forEach(n),Jt=r(e),A=d(e,"P",{});var L=H(A);lo=p(L,"If you don't intend to use "),g(oe.$$.fragment,L),ro=p(L,` for your data source, you
    can also get rid of the `),ht=d(L,"EM",{"data-svelte-h":!0}),c(ht)!=="svelte-ipuk"&&(ht.textContent=So),uo=p(L,`,
    `),gt=d(L,"EM",{"data-svelte-h":!0}),c(gt)!=="svelte-jy14xa"&&(gt.textContent=Wo),po=p(L," and the "),yt=d(L,"EM",{"data-svelte-h":!0}),c(yt)!=="svelte-16qzujy"&&(yt.textContent=Uo),fo=p(L," directory."),L.forEach(n),Qt=r(e),g(Ee.$$.fragment,e),Zt=r(e),De=d(e,"P",{"data-svelte-h":!0}),c(De)!=="svelte-17n2mb6"&&(De.innerHTML=Xo),Vt=r(e),I=d(e,"P",{});var T=H(I);mo=p(T,"Next, let's add the definition for the request and response to "),wt=d(T,"EM",{"data-svelte-h":!0}),c(wt)!=="svelte-1xh0uj7"&&(wt.textContent=Yo),$o=p(T,` . We can
    directly copy the `),_t=d(T,"EM",{"data-svelte-h":!0}),c(_t)!=="svelte-15a5lvd"&&(_t.textContent=Go),co=p(T,", "),vt=d(T,"EM",{"data-svelte-h":!0}),c(vt)!=="svelte-axbm0m"&&(vt.textContent=Ko),ho=p(T,` and
    `),xt=d(T,"EM",{"data-svelte-h":!0}),c(xt)!=="svelte-iyvrvd"&&(xt.textContent=Jo),go=p(T,`
    classes from the final definition we created in the `),g(ae.$$.fragment,T),yo=p(T," guide. Note that we also need to add the necessary imports."),T.forEach(n),en=r(e),O=d(e,"P",{});var S=H(O);wo=p(S,`If you're building a data source for another definition, it's possible it was created using
    pydantic models, in which you can retrieve those from within the `),Ct=d(S,"EM",{"data-svelte-h":!0}),c(Ct)!=="svelte-dwxc2r"&&(Ct.textContent=Qo),_o=p(S,` directory in the
    definitions repository. If they are not available you will have to build them yourself. In that
    case the same guide can be handy, as well as the official pydantic documentation and the
    `),g(ie.$$.fragment,S),vo=p(S," section of the FastAPI docs."),S.forEach(n),tn=r(e),ke=d(e,"P",{"data-svelte-h":!0}),c(ke)!=="svelte-sjvjvy"&&(ke.innerHTML=Zo),nn=r(e),g(se.$$.fragment,e),on=r(e),g(Le.$$.fragment,e),an=r(e),He=d(e,"P",{"data-svelte-h":!0}),c(He)!=="svelte-1qv0iow"&&(He.innerHTML=Vo),sn=r(e),g(le.$$.fragment,e),ln=r(e),Fe=d(e,"P",{"data-svelte-h":!0}),c(Fe)!=="svelte-nhz6t8"&&(Fe.innerHTML=ea),rn=r(e),g(qe.$$.fragment,e),un=r(e),Be=d(e,"P",{"data-svelte-h":!0}),c(Be)!=="svelte-6ah2bj"&&(Be.innerHTML=ta),pn=r(e),g(re.$$.fragment,e),fn=r(e),ze=d(e,"P",{"data-svelte-h":!0}),c(ze)!=="svelte-13aznig"&&(ze.innerHTML=na),dn=r(e),C=d(e,"P",{});var b=H(C);xo=p(b,"Finally we wrap the data into a "),bt=d(b,"EM",{"data-svelte-h":!0}),c(bt)!=="svelte-iyvrvd"&&(bt.textContent=oa),Co=p(b,`. We could as well just return
    the data as a dictionary and let FastAPI take care of the rest automatically using the
    definition in the
    `),It=d(b,"EM",{"data-svelte-h":!0}),c(It)!=="svelte-i28xgf"&&(It.textContent=aa),bo=p(b,`. The
    `),g(ue.$$.fragment,b),Io=p(b,`
    is really well written and describes in great detail topics, such as the
    `),g(pe.$$.fragment,b),To=p(b,`,
    `),g(fe.$$.fragment,b),Po=p(b,`
    and
    `),g(de.$$.fragment,b),Mo=p(b,`, so those
    resources are well worth a look if the explanation in this guide was too brief.`),b.forEach(n),mn=r(e),g(Oe.$$.fragment,e),$n=r(e),je=d(e,"P",{"data-svelte-h":!0}),c(je)!=="svelte-10d6qgn"&&(je.innerHTML=ia),cn=r(e),g(Re.$$.fragment,e),hn=r(e),Ne=d(e,"P",{"data-svelte-h":!0}),c(Ne)!=="svelte-xan10z"&&(Ne.textContent=sa),gn=r(e),Se=d(e,"H3",{"data-svelte-h":!0}),c(Se)!=="svelte-tuu3fh"&&(Se.textContent=la),yn=r(e),We=d(e,"P",{"data-svelte-h":!0}),c(We)!=="svelte-1ctovjr"&&(We.textContent=ra),wn=r(e),Ue=d(e,"H3",{"data-svelte-h":!0}),c(Ue)!=="svelte-1drglyz"&&(Ue.textContent=ua),_n=r(e),Xe=d(e,"P",{"data-svelte-h":!0}),c(Xe)!=="svelte-vmw2fl"&&(Xe.textContent=pa),vn=r(e),Ye=d(e,"P",{"data-svelte-h":!0}),c(Ye)!=="svelte-z3v5t1"&&(Ye.textContent=fa),xn=r(e),g(Ge.$$.fragment,e),Cn=r(e),Ke=d(e,"P",{"data-svelte-h":!0}),c(Ke)!=="svelte-1iu5nmk"&&(Ke.textContent=da),bn=r(e),g(Je.$$.fragment,e),In=r(e),Qe=d(e,"P",{"data-svelte-h":!0}),c(Qe)!=="svelte-1y6s4sw"&&(Qe.innerHTML=ma),Tn=r(e),g(Ze.$$.fragment,e),Pn=r(e),Ve=d(e,"P",{"data-svelte-h":!0}),c(Ve)!=="svelte-10u1fhz"&&(Ve.innerHTML=$a),Mn=r(e),g(me.$$.fragment,e),An=r(e),et=d(e,"P",{"data-svelte-h":!0}),c(et)!=="svelte-1vdhqlw"&&(et.innerHTML=ca),En=r(e),tt=d(e,"P",{"data-svelte-h":!0}),c(tt)!=="svelte-1hcly7e"&&(tt.textContent=ha),Dn=r(e),g($e.$$.fragment,e),kn=r(e),g(ce.$$.fragment,e),Ln=r(e),g(nt.$$.fragment,e),Hn=r(e),ot=d(e,"P",{"data-svelte-h":!0}),c(ot)!=="svelte-12pkz0w"&&(ot.innerHTML=ga),Fn=r(e),g(at.$$.fragment,e),qn=r(e),it=d(e,"P",{"data-svelte-h":!0}),c(it)!=="svelte-a070s"&&(it.innerHTML=ya),Bn=r(e),st=d(e,"P",{"data-svelte-h":!0}),c(st)!=="svelte-7gso9b"&&(st.innerHTML=wa),zn=r(e),lt=d(e,"P",{"data-svelte-h":!0}),c(lt)!=="svelte-29mzqu"&&(lt.textContent=_a),On=r(e),rt=d(e,"P",{"data-svelte-h":!0}),c(rt)!=="svelte-1n4ztk3"&&(rt.textContent=va)},m(e,t){y(i,e,t),a(e,o,t),y(s,e,t),a(e,x,t),y(D,e,t),a(e,Mt,t),a(e,W,t),m(W,Rn),y(U,W,null),m(W,Nn),a(e,At,t),y(ge,e,t),a(e,Et,t),a(e,ye,t),a(e,Dt,t),a(e,we,t),a(e,kt,t),a(e,_e,t),a(e,Lt,t),y(ve,e,t),a(e,Ht,t),a(e,X,t),m(X,Sn),y(Y,X,null),m(X,Wn),a(e,Ft,t),a(e,G,t),m(G,Un),y(K,G,null),m(G,Xn),a(e,qt,t),y(xe,e,t),a(e,Bt,t),a(e,q,t),m(q,Yn),m(q,ft),m(q,Gn),y(J,q,null),m(q,Kn),a(e,zt,t),a(e,Ce,t),a(e,Ot,t),a(e,be,t),a(e,jt,t),y(Q,e,t),a(e,Rt,t),a(e,Ie,t),a(e,Nt,t),y(Z,e,t),a(e,St,t),a(e,Te,t),a(e,Wt,t),y(Pe,e,t),a(e,Ut,t),a(e,B,t),m(B,Jn),y(V,B,null),m(B,Qn),y(ee,B,null),m(B,Zn),a(e,Xt,t),y(Me,e,t),a(e,Yt,t),a(e,Ae,t),a(e,Gt,t),a(e,M,t),m(M,Vn),y(te,M,null),m(M,eo),m(M,dt),m(M,to),m(M,mt),m(M,no),m(M,$t),m(M,oo),a(e,Kt,t),a(e,z,t),m(z,ao),y(ne,z,null),m(z,io),m(z,ct),m(z,so),a(e,Jt,t),a(e,A,t),m(A,lo),y(oe,A,null),m(A,ro),m(A,ht),m(A,uo),m(A,gt),m(A,po),m(A,yt),m(A,fo),a(e,Qt,t),y(Ee,e,t),a(e,Zt,t),a(e,De,t),a(e,Vt,t),a(e,I,t),m(I,mo),m(I,wt),m(I,$o),m(I,_t),m(I,co),m(I,vt),m(I,ho),m(I,xt),m(I,go),y(ae,I,null),m(I,yo),a(e,en,t),a(e,O,t),m(O,wo),m(O,Ct),m(O,_o),y(ie,O,null),m(O,vo),a(e,tn,t),a(e,ke,t),a(e,nn,t),y(se,e,t),a(e,on,t),y(Le,e,t),a(e,an,t),a(e,He,t),a(e,sn,t),y(le,e,t),a(e,ln,t),a(e,Fe,t),a(e,rn,t),y(qe,e,t),a(e,un,t),a(e,Be,t),a(e,pn,t),y(re,e,t),a(e,fn,t),a(e,ze,t),a(e,dn,t),a(e,C,t),m(C,xo),m(C,bt),m(C,Co),m(C,It),m(C,bo),y(ue,C,null),m(C,Io),y(pe,C,null),m(C,To),y(fe,C,null),m(C,Po),y(de,C,null),m(C,Mo),a(e,mn,t),y(Oe,e,t),a(e,$n,t),a(e,je,t),a(e,cn,t),y(Re,e,t),a(e,hn,t),a(e,Ne,t),a(e,gn,t),a(e,Se,t),a(e,yn,t),a(e,We,t),a(e,wn,t),a(e,Ue,t),a(e,_n,t),a(e,Xe,t),a(e,vn,t),a(e,Ye,t),a(e,xn,t),y(Ge,e,t),a(e,Cn,t),a(e,Ke,t),a(e,bn,t),y(Je,e,t),a(e,In,t),a(e,Qe,t),a(e,Tn,t),y(Ze,e,t),a(e,Pn,t),a(e,Ve,t),a(e,Mn,t),y(me,e,t),a(e,An,t),a(e,et,t),a(e,En,t),a(e,tt,t),a(e,Dn,t),y($e,e,t),a(e,kn,t),y(ce,e,t),a(e,Ln,t),y(nt,e,t),a(e,Hn,t),a(e,ot,t),a(e,Fn,t),y(at,e,t),a(e,qn,t),a(e,it,t),a(e,Bn,t),a(e,st,t),a(e,zn,t),a(e,lt,t),a(e,On,t),a(e,rt,t),jn=!0},p(e,t){const ut={};t&1&&(ut.title=e[0].guide.title),i.$set(ut);const pt={};t&1&&(pt.path=e[0].path),s.$set(pt);const j={};t&4&&(j.$$scope={dirty:t,ctx:e}),U.$set(j);const R={};t&4&&(R.$$scope={dirty:t,ctx:e}),Y.$set(R);const k={};t&4&&(k.$$scope={dirty:t,ctx:e}),K.$set(k);const N={};t&4&&(N.$$scope={dirty:t,ctx:e}),J.$set(N);const L={};t&4&&(L.$$scope={dirty:t,ctx:e}),Q.$set(L);const T={};t&4&&(T.$$scope={dirty:t,ctx:e}),Z.$set(T);const S={};t&4&&(S.$$scope={dirty:t,ctx:e}),V.$set(S);const b={};t&4&&(b.$$scope={dirty:t,ctx:e}),ee.$set(b);const xa={};t&4&&(xa.$$scope={dirty:t,ctx:e}),te.$set(xa);const Ca={};t&4&&(Ca.$$scope={dirty:t,ctx:e}),ne.$set(Ca);const ba={};t&4&&(ba.$$scope={dirty:t,ctx:e}),oe.$set(ba);const Ia={};t&4&&(Ia.$$scope={dirty:t,ctx:e}),ae.$set(Ia);const Ta={};t&4&&(Ta.$$scope={dirty:t,ctx:e}),ie.$set(Ta);const Pa={};t&4&&(Pa.$$scope={dirty:t,ctx:e}),se.$set(Pa);const Ma={};t&4&&(Ma.$$scope={dirty:t,ctx:e}),le.$set(Ma);const Aa={};t&4&&(Aa.$$scope={dirty:t,ctx:e}),re.$set(Aa);const Ea={};t&4&&(Ea.$$scope={dirty:t,ctx:e}),ue.$set(Ea);const Da={};t&4&&(Da.$$scope={dirty:t,ctx:e}),pe.$set(Da);const ka={};t&4&&(ka.$$scope={dirty:t,ctx:e}),fe.$set(ka);const La={};t&4&&(La.$$scope={dirty:t,ctx:e}),de.$set(La);const Ha={};t&4&&(Ha.$$scope={dirty:t,ctx:e}),me.$set(Ha);const Fa={};t&4&&(Fa.$$scope={dirty:t,ctx:e}),$e.$set(Fa);const qa={};t&4&&(qa.$$scope={dirty:t,ctx:e}),ce.$set(qa)},i(e){jn||(w(i.$$.fragment,e),w(s.$$.fragment,e),w(D.$$.fragment,e),w(U.$$.fragment,e),w(ge.$$.fragment,e),w(ve.$$.fragment,e),w(Y.$$.fragment,e),w(K.$$.fragment,e),w(xe.$$.fragment,e),w(J.$$.fragment,e),w(Q.$$.fragment,e),w(Z.$$.fragment,e),w(Pe.$$.fragment,e),w(V.$$.fragment,e),w(ee.$$.fragment,e),w(Me.$$.fragment,e),w(te.$$.fragment,e),w(ne.$$.fragment,e),w(oe.$$.fragment,e),w(Ee.$$.fragment,e),w(ae.$$.fragment,e),w(ie.$$.fragment,e),w(se.$$.fragment,e),w(Le.$$.fragment,e),w(le.$$.fragment,e),w(qe.$$.fragment,e),w(re.$$.fragment,e),w(ue.$$.fragment,e),w(pe.$$.fragment,e),w(fe.$$.fragment,e),w(de.$$.fragment,e),w(Oe.$$.fragment,e),w(Re.$$.fragment,e),w(Ge.$$.fragment,e),w(Je.$$.fragment,e),w(Ze.$$.fragment,e),w(me.$$.fragment,e),w($e.$$.fragment,e),w(ce.$$.fragment,e),w(nt.$$.fragment,e),w(at.$$.fragment,e),jn=!0)},o(e){_(i.$$.fragment,e),_(s.$$.fragment,e),_(D.$$.fragment,e),_(U.$$.fragment,e),_(ge.$$.fragment,e),_(ve.$$.fragment,e),_(Y.$$.fragment,e),_(K.$$.fragment,e),_(xe.$$.fragment,e),_(J.$$.fragment,e),_(Q.$$.fragment,e),_(Z.$$.fragment,e),_(Pe.$$.fragment,e),_(V.$$.fragment,e),_(ee.$$.fragment,e),_(Me.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(Ee.$$.fragment,e),_(ae.$$.fragment,e),_(ie.$$.fragment,e),_(se.$$.fragment,e),_(Le.$$.fragment,e),_(le.$$.fragment,e),_(qe.$$.fragment,e),_(re.$$.fragment,e),_(ue.$$.fragment,e),_(pe.$$.fragment,e),_(fe.$$.fragment,e),_(de.$$.fragment,e),_(Oe.$$.fragment,e),_(Re.$$.fragment,e),_(Ge.$$.fragment,e),_(Je.$$.fragment,e),_(Ze.$$.fragment,e),_(me.$$.fragment,e),_($e.$$.fragment,e),_(ce.$$.fragment,e),_(nt.$$.fragment,e),_(at.$$.fragment,e),jn=!1},d(e){e&&(n(o),n(x),n(Mt),n(W),n(At),n(Et),n(ye),n(Dt),n(we),n(kt),n(_e),n(Lt),n(Ht),n(X),n(Ft),n(G),n(qt),n(Bt),n(q),n(zt),n(Ce),n(Ot),n(be),n(jt),n(Rt),n(Ie),n(Nt),n(St),n(Te),n(Wt),n(Ut),n(B),n(Xt),n(Yt),n(Ae),n(Gt),n(M),n(Kt),n(z),n(Jt),n(A),n(Qt),n(Zt),n(De),n(Vt),n(I),n(en),n(O),n(tn),n(ke),n(nn),n(on),n(an),n(He),n(sn),n(ln),n(Fe),n(rn),n(un),n(Be),n(pn),n(fn),n(ze),n(dn),n(C),n(mn),n($n),n(je),n(cn),n(hn),n(Ne),n(gn),n(Se),n(yn),n(We),n(wn),n(Ue),n(_n),n(Xe),n(vn),n(Ye),n(xn),n(Cn),n(Ke),n(bn),n(In),n(Qe),n(Tn),n(Pn),n(Ve),n(Mn),n(An),n(et),n(En),n(tt),n(Dn),n(kn),n(Ln),n(Hn),n(ot),n(Fn),n(qn),n(it),n(Bn),n(st),n(zn),n(lt),n(On),n(rt)),v(i,e),v(s,e),v(D,e),v(U),v(ge,e),v(ve,e),v(Y),v(K),v(xe,e),v(J),v(Q,e),v(Z,e),v(Pe,e),v(V),v(ee),v(Me,e),v(te),v(ne),v(oe),v(Ee,e),v(ae),v(ie),v(se,e),v(Le,e),v(le,e),v(qe,e),v(re,e),v(ue),v(pe),v(fe),v(de),v(Oe,e),v(Re,e),v(Ge,e),v(Je,e),v(Ze,e),v(me,e),v($e,e),v(ce,e),v(nt,e),v(at,e)}}}function $i($){let i,o;return i=new Ra({props:{$$slots:{default:[mi]},$$scope:{ctx:$}}}),{c(){h(i.$$.fragment)},l(s){g(i.$$.fragment,s)},m(s,x){y(i,s,x),o=!0},p(s,[x]){const D={};x&5&&(D.$$scope={dirty:x,ctx:s}),i.$set(D)},i(s){o||(w(i.$$.fragment,s),o=!0)},o(s){_(i.$$.fragment,s),o=!1},d(s){v(i,s)}}}function ci($,i,o){let{data:s}=i;const x=s.images;return $.$$set=D=>{"data"in D&&o(0,s=D.data)},[s,x]}class Ti extends Oa{constructor(i){super(),ja(this,i,ci,$i,za,{data:0})}}export{Ti as component};
