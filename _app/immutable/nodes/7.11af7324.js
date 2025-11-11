import{s as Wa,a,f as r,l as $,c as f,g as u,z as m,h as k,d as n,m as d,i,y as c,B as y}from"../chunks/scheduler.2e48bd10.js";import{S as za,i as Ua,b as v,d as _,m as C,a as g,t as w,e as x}from"../chunks/index.ed958696.js";import{T as Ja,S as Ql}from"../chunks/TableOfContents.c7a57465.js";import{C as b}from"../chunks/Code.23820852.js";import{j as Es}from"../chunks/json.4d993fc0.js";import{p as P}from"../chunks/python.62bbd573.js";import{T as Ya,B as Qa}from"../chunks/Title.c4343f87.js";import{G as Ga}from"../chunks/GuideImage.920a4a56.js";import{b as Kl}from"../chunks/bash.7e4226ac.js";import{A as T}from"../chunks/A.2ad5f04f.js";import{G as Aa}from"../chunks/urls.2ac53403.js";function Ka(p){let o;return{c(){o=$("Git")},l(l){o=d(l,"Git")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Va(p){let o;return{c(){o=$("Python 3.11")},l(l){o=d(l,"Python 3.11")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Xa(p){let o;return{c(){o=$("Pre-commit")},l(l){o=d(l,"Pre-commit")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Za(p){let o;return{c(){o=$("data definition repository on GitHub")},l(l){o=d(l,"data definition repository on GitHub")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function ef(p){let o;return{c(){o=$("Fork a repo quickstart guide")},l(l){o=d(l,"Fork a repo quickstart guide")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function tf(p){let o=`
cd sandbox-definitions
pre-commit install
  `,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function nf(p){let o;return{c(){o=$("Configuring Git to sync your fork with the upstream repository")},l(l){o=d(l,"Configuring Git to sync your fork with the upstream repository")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function lf(p){let o=`
    git checkout -b adding-my-definition
    `,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function sf(p){let o;return{c(){o=$("pydantic library")},l(l){o=d(l,"pydantic library")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function of(p){let o=`
{
    "code": "FI",
    "name": "Finland",
    "capital": {
        "name": "Helsinki",
        "lat": 60.170833,
        "lon": 24.9375,
    },
    "languages": ["fi", "sv"],
    "area": 338455
}

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function af(p){let o=`
{
   "code": "NR",
    "name": "Nauru",
    "capital": null,
    "languages": ["na", "en"],
    "area": 21
}

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function ff(p){let o=`
{
   "code": "FI"
}
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function rf(p){let o=`
from definition_tooling.converter import CamelCaseModel, DataProductDefinition
from pydantic import Field


class BasicCountryInfoRequest(CamelCaseModel):
    ...


class BasicCountryInfoResponse(CamelCaseModel):
    ...


DEFINITION = DataProductDefinition(
    version="0.0.1",
    title="Information about a country",
    description="Information about a country, such as name, capital, languages, area etc.",
    request=BasicCountryInfoRequest,
    response=BasicCountryInfoResponse,
)

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function uf(p){let o=`
class BasicCountryInfoRequest(CamelCaseModel):
    code: str

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function pf(p){let o=`
class BasicCountryInfoRequest(CamelCaseModel):
    code: str = Field(...)

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function mf(p){let o;return{c(){o=$("required")},l(l){o=d(l,"required")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function $f(p){let o=`
class BasicCountryInfoRequest(CamelCaseModel):
    code: str = Field(
        ...,
        title="Code",
        description="ISO 3166-1 alpha-2 code for the country",
        example="FI",
    )
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function df(p){let o;return{c(){o=$("Field customization")},l(l){o=d(l,"Field customization")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function hf(p){let o=`
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
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function cf(p){let o=`
    from typing import List

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function vf(p){let o=`
class BasicCountryInfoResponse(CamelCaseModel):
    ...
    languages: List[str] = Field(
        ...,
        title="Official languages",
        description="ISO 639-1 language codes for the official languages",
        example=["fi", "sv"],
        min_length=2,
        max_length=2,
    )
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function _f(p){let o;return{c(){o=$("constrained type")},l(l){o=d(l,"constrained type")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Cf(p){let o=`
from pydantic import constr

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function gf(p){let o=`
class BasicCountryInfoResponse(CamelCaseModel):
    ...
    languages: List[constr(min_length=2, max_length=2)] = Field(
        ...,
        title="Official languages",
        description="ISO 639-1 language codes for the official languages",
        example=["fi", "sv"],
    )
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function wf(p){let o=`
    {
    "code": "FI",
    "name": "Finland",
    "capital": {
        "name": "Helsinki",
        "lat": 60.170833,
        "lon": 24.9375,
    },
    "languages": ["fi", "sv"],
    "area": 338455
}
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function xf(p){let o;return{c(){o=$("Recursive Models")},l(l){o=d(l,"Recursive Models")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function yf(p){let o=`
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
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function bf(p){let o=`
   class BasicCountryInfoResponse(CamelCaseModel):
    code: str = Field(...)
    name: str = Field(...)
    area: float = Field(...)
    languages: List[str] = Field(...)
    capital: Capital
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function kf(p){let o=`
     from typing import List, Optional

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Tf(p){let o=`
class BasicCountryInfoResponse(CamelCaseModel):
    code: str = Field(...)
    name: str = Field(...)
    area: float = Field(...)
    languages: List[str] = Field(...)
    capital: Optional[Capital]
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function If(p){let o=`
class BasicCountryInfoResponse(CamelCaseModel):
    code: str = Field(...)
    name: str = Field(...)
    area: float = Field(...)
    languages: List[str] = Field(...)
    capital: Optional[Capital] = Field(
        None,
        title="Capital",
        description="The capital of the country, legislative if multiple",
    )
`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Pf(p){let o=`
from typing import List, Optional

from definition_tooling.converter import CamelCaseModel, DataProductDefinition
from pydantic import Field, constr


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


DEFINITION = DataProductDefinition(
    version="0.0.1",
    title="Information about a country",
    description="Information about a country, such as name, capital, languages, area etc.",
    request=BasicCountryInfoRequest,
    response=BasicCountryInfoResponse,
)

`,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Hf(p){let o;return{c(){o=$("black")},l(l){o=d(l,"black")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Lf(p){let o=`
git add src/test/ioxio-dataspace-guides/Country/BasicInfo.py
pre-commit run
git status
git add DataProducts/test/ioxio-dataspace-guides/Country/BasicInfo.json
git commit -m "Add definition for Country/BasicInfo"
  `,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Mf(p){let o=`
git push --set-upstream origin adding-my-definition
  `,l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Ff(p){let o;return{c(){o=$("pushing commits to a remote repository")},l(l){o=d(l,"pushing commits to a remote repository")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function qf(p){let o;return{c(){o=$("definition repository")},l(l){o=d(l,"definition repository")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Of(p){let o;return{c(){o=$("Creating a pull request")},l(l){o=d(l,"Creating a pull request")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Bf(p){let o=Aa.BUILD_DATA_SOURCE.title+"",l;return{c(){l=$(o)},l(s){l=d(s,o)},m(s,h){i(s,l,h)},p:y,d(s){s&&n(l)}}}function Ef(p){let o;return{c(){o=$("versioning of definitions")},l(l){o=d(l,"versioning of definitions")},m(l,s){i(l,o,s)},d(l){l&&n(o)}}}function Nf(p){let o,l,s,h,M,Bn,Oe,Ns=`Data definitions are the technical specifications for data products, which are the cornerstone
    of interoperable and trusted data exchange through a Dataspace. To put it simply, data products
    are a standardized set of data contents that can be used in various different business processes
    and use cases.`,En,Be,Ds=`A data product can for example describe the basic information of a company, transaction invoice
    or bill of lading (BoL) used in the logistics and financial processes in global trade. The data
    definition specifies what fields the data product contains, their meaning and type as well as
    limits and restrictions on them.`,Nn,Ee,Rs=`This guide is mostly focused on the technical aspect of creating the definitions and will try to
    give some general advice on creating a good and reusable definition. Please however note that
    for the best results the data definitions should always be created together with business
    functions or experts in the particular field to ensure the definitions are generic, reusable in
    various use cases and work for various different organizations.`,Dn,Ne,Rn,De,js="Install pre-requisites",jn,Re,Ss=`You will need to install all the pre-requisites listed below (the names link directly to
    installation instructions):`,Sn,q,Hn,D,Vl,Ln,R,Xl,Mn,j,Gn,je,Gs="Fork and clone the data definitions repository",An,S,Zl,G,es,Wn,A,ts,W,ns,zn,Se,As="Set up pre-commit hooks",Un,Ge,Ws=`Open the repository you cloned in a terminal and run <em>pre-commit install</em> to set up the pre-commit
    hooks.`,Jn,z,Yn,Ae,zs="If you get any error at this stage, ensure you've properly installed pre-commit and Python.",Qn,We,Us=`The pre-commit hooks are used to perform some tasks at time you are committing your changes.
    They will for example generate an OpenAPI spec versions of the definitions based on the
    Python/pydantic ones, do some reformatting of the code and perform some validation.`,Kn,ze,Js="Sync the repo",Vn,Ue,Ys=`If you have cloned the repository earlier, ensure you sync the repo with the upstream and have
    the latest main checked out before you proceed to create the branch. If you just created the
    fork and cloned it (followed the steps above), you should have an up to date state already.`,Xn,U,is,J,ls,Zn,Je,Qs="Create a new branch",ei,Ye,Ks="Create a new branch for your new definition, for example by running:",ti,Y,ni,Qe,ii,Q,ss,K,os,li,Ke,Vs="Decide what data to include in the definition",si,Ve,Xs=`In this guide we're not giving any detailed information on what data to include in the
    definition or how to structure the data. Some basic principles to follow:`,oi,Xe,Zs=`<li>The definition(s) should include the data you want to consume or provide.</li> <li>Try to make it generic, so it can be used by others, both others providing data or consuming
      data. In some cases it might be better to create multiple definitions rather than one that
      contains a lot of unrelated information that only apply to a particular use case.</li> <li>Try to follow existing standards where possible (ISO etc).</li> <li>Use terminology and units that are commonly used in the field of application.</li> <li>Try to make sure the definition is consistent with other definitions if possible. For example
      prefer using same naming, units etc as similar data in other definitions.</li> <li>Prefer well structured and machine readable data that does not require any parsing. For
      example, don&#39;t define numeric data as a string with a unit (like &quot;21 km&quot;), rather as a numeric
      value and make sure to include the unit in the description of the field.</li>`,ai,Ze,eo="Data we want to define",fi,et,to="For this guide, we are going to write a definition for some basic info for countries.",ri,tt,no=`Note that the data here has been picked to make the definition somewhat short and varied, not to
    be generic and necessary useful for real use cases.`,ui,nt,io="We have decided we want to include this data:",pi,it,lo="<li>Country code</li> <li>Name of the country</li> <li>Capital of the country, including the coordinates of it</li> <li>Official languages</li> <li>Area (in km^2)</li>",mi,lt,so="Expressed in JSON, here is example data for Finland:",$i,V,di,st,oo="and for Nauru:",hi,X,ci,ot,ao="<i>(Data source: Wikipedia)</i>",vi,at,fo=`In this simple example we have taken into account that there are countries that have no official
    capital, like Nauru, but we've ignored that there are countries that have multiple capitals. We
    could solve this by stating we're only interested in the legislative or administrative capital
    in these cases or defining the capitals as a list of cities and add properties about their kind.`,_i,ft,ro="We want the data to be requested by the country code, like this:",Ci,Z,gi,rt,uo="Where do we create the definition?",wi,ut,po=`Let's have a look at the structure of the definitions repository. At the root of the repository
    there is:`,xi,pt,mo=`<li><em>src</em> - contains a folder hierarchy with <em>*.py</em> files; the original sources for each
      definition.</li> <li><em>DataProducts</em> - contains the OpenAPI spec version of each definition in
      <em>*.json</em> files in an identical folder structure. These files are automatically generated
      by the pre-commit hooks before you commit.</li>`,yi,mt,$o=`We&#39;ll use the <em>src/Company/BasicInfo_v1.0.py</em> as a base for our own definition. For the
    purpose of this guide we will store the new definition in
    <em>src/test/ioxio-dataspace-guides/Country/BasicInfo.py</em>.`,bi,$t,ho=`<b>Note:</b> The <em>test</em> subfolder is reserved for experimenting with definitions. Each
    user is expected to create a subfolder inside it, with the same name as their
    <b>GitHub username</b>
    and then create any desired hierarchy of definitions under that. So this guide assumes we&#39;d have
    a user account called <em>ioxio-dataspace-guides</em> and thus store the definition in
    <em>test/ioxio-dataspace-guides</em>.`,ki,dt,co="Initial setup of the definition file",Ti,ht,vo="To get a quick start we will copy most of the content from the BasicInfo for companies.",Ii,ct,_o=`Let&#39;s start by creating this simple initial version of the definition in <em>src/test/ioxio-dataspace-guides/Country/BasicInfo.py
    </em>:`,Pi,ee,Hi,vt,Co=`This acts as a great template for any new definition you want to make. Let's go through the
    details of this a bit.`,Li,_t,go=`Lines 1-2 declare some imports. If you're unfamiliar with python, you don't really need to pay
    attention to these as long as you keep them there.`,Mi,Ct,wo="BasicCountryInfoRequest",Fi,gt,xo="BasicCountryInfoResponse",qi,wt,yo=`In the last section, we define the <em>DEFINITION</em>. The converter expects to find a variable
    with this name, that is an instance of the <em>DataProductDefinition</em>. In it we define a
    version number (for definitions in the <em>test/UserName/</em> space it needs to be of the form
    <em>0.0.x</em>), a title and description. We also specify that the
    <em>BasicCountryInfoRequest</em> class is the one defining the request (input) and
    <em>BasicCountryInfoResponse</em>
    the response (output).`,Oi,xt,bo="Defining the request",Bi,yt,ko="At the simplest, we could define the request just like this:",Ei,te,Ni,bt,To="We define that there&#39;s one attribute/field, called <em>code</em> that is a string (<em>str</em>). The definition is done using python&#39;s type annotations.",Di,kt,Io=`However, this doesn't give any extra info about the parameter for anyone and doesn't impose any
    kind of validation on the length of it etc.`,Ri,Tt,Po=`Pydantic has a class called <em>Field</em>, that can be used to define limits, default values
    etc. It can be used like this:`,ji,ne,Si,I,as,gn,Ho="Field()",fs,wn,Lo="None",rs,xn,Mo="null",us,yn,Fo="...",ps,ie,ms,Gi,It,qo="The end result of the two above examples are identical.",Ai,Pt,Oo=`Let&#39;s now add a title, description and an example and min/max length to ensure it&#39;s a two letter
    code we get. This is done by simply adding some more keyword arguments to the <em>Field()</em>,
    like this:`,Wi,le,zi,Ht,Bo="If we'd want, we could even add a regular expressions to check it's an uppercase string.",Ui,se,$s,oe,ds,Ji,Lt,Eo="Defining the simple fields of the response",Yi,Mt,No=`Similarly to how we defined the fields in the request we'll define the simple fields in the
    response.`,Qi,Ft,Do=`The definition for the <em>code</em> we can copy as-is from the request. The
    <em>name</em>
    we can define rather similarly; we don&#39;t need to set any minimum and maximum lengths for it. The
    <em>area</em> is also straight forward to define; we just need to specify it as a float.`,Ki,ae,Vi,qt,Ro="Defining the languages field in the response",Xi,Ot,jo=`We wanted the official languages to be a list of strings. We&#39;ll need to import <em>List</em> for
    the type annotations, like this (at the top of the file):`,Zi,fe,el,Bt,So=`Then we can define <em>languages</em> field using the type annotation languages:
    <em>List[str]</em>
    and again use the <em>Field()</em> to add a title, example etc.:`,tl,re,nl,O,hs,ue,cs,bn,Go="constr",vs,il,pe,ll,Et,Ao="Then we replace the <em>str</em> with <em>constr(min_length=2, max_length=2)</em>, like this:",sl,me,ol,Nt,Wo="Defining the capital in the response",al,Dt,zo="We wanted the capital to be a nested object in the JSON response, something like this:",fl,$e,rl,de,_s,he,Cs,ul,Rt,Uo=`Let&#39;s start by defining this nested structure for the capital as a new <em>Capital</em> class. It
    looks like this, when we&#39;ve filled in all titles, examples and limits:`,pl,ce,ml,jt,Jo=`The field definitions should be fairly similar to the earlier examples. We&#39;ll need to define
    this somewhere before our response class (<em>BasicCountryInfoResponse</em>) as we want to
    reference it inside it.`,$l,St,Yo=`We add the <em>capital</em> to the <em>BasicCountryInfoResponse</em>, but this time we annotate
    it as a <em>Capital</em>, rather than a <em>str</em>, <em>float</em> or
    <em>List</em>, like this (see the last line):`,dl,ve,hl,Gt,Qo=`However, right now, the <em>capital</em> would be a mandatory field in the response. But we
    wanted to also support countries that don&#39;t have a capital, like Nauru. Thus we need to modify
    this slightly. We&#39;ll need to import <em>Optional</em> from <em>typing</em>, so at the top we&#39;ll
    import both <em>List</em> and <em>Optional</em> from <em>typing</em>, like this:`,cl,_e,vl,At,Ko="Now we can change the type annotation to be <em>Optional[Capital]</em> like this:",_l,Ce,Cl,Wt,Vo="This allows the JSON response to have the <em>capital</em> set to <em>null</em>.",gl,zt,Xo=`Further we want to add some more information about the capital, so we add a <em>Field()</em>.
    Note that this time, we set the default value to <em>None</em> (Python&#39;s variant of
    <em>null</em>) to mark it as optional, so it thus becomes:`,wl,ge,xl,Ut,Zo="The final definition",yl,Jt,ea=`If you&#39;ve followed along the guide so far, the <em>Country/BasicInfo.py</em> file should now look
    like this in it&#39;s entirety:`,bl,we,kl,Yt,Tl,Qt,ta="Committing the new definition",Il,Kt,na=`We'll need to commit the new definition; the pre-commit hooks will take care of generating the
    OpenAPI spec from the python file. Let's go back to the command line and ensure we're in the
    root of the repository we cloned.`,Pl,B,gs,kn,ia="BasicInfo.py",ws,xe,xs,Hl,Vt,la="Here are the commands you should need to run:",Ll,ye,Ml,Xt,sa="And this is what it will likely look like when you run the commands:",Fl,Zt,ql,en,oa="Push your branch to your fork in GitHub",Ol,tn,aa=`Depending a bit on how you cloned your repository, you should be able to push your branch by
    running:`,Bl,be,El,ke,ys,Te,bs,Nl,nn,fa="Create a pull request",Dl,Ie,ks,Pe,Ts,Rl,He,Is,Le,Ps,jl,ln,ra="The flow should look pretty much like this:",Sl,sn,Gl,on,ua="Wait for maintainers to merge it",Al,an,pa=`The next step is to just wait for maintainers to accept and merge the pull request. In some
    cases the maintainers might also ask for adjustments or reject the pull request. Please follow
    the updates posted on the pull request.`,Wl,fn,ma="Next steps",zl,Me,Hs,Fe,Ls,Ul,rn,$a=`If you spot things you want to change in the definition you can submit a pull request with
    changes to your own definition. You can optionally increment the version number of the
    definition each time; i.e. to <em>0.0.2</em>, <em>0.0.3</em> etc.`,Jl,L,Ms,Tn,da="test/UserName/",Fs,In,ha="0.1.0",qs,Pn,ca="src/Country/BasicInfo_v0.1.py",Os,qe,Bs,Yl;return o=new Ya({props:{title:p[0].guide.title}}),s=new Qa({props:{path:p[0].path}}),M=new Ql({props:{title:"Intro to Data Definitions"}}),Ne=new Ql({props:{title:"Setup"}}),D=new T({props:{href:"https://git-scm.com/downloads",$$slots:{default:[Ka]},$$scope:{ctx:p}}}),R=new T({props:{href:"https://www.python.org/downloads/",$$slots:{default:[Va]},$$scope:{ctx:p}}}),j=new T({props:{href:"https://pre-commit.com/#install",$$slots:{default:[Xa]},$$scope:{ctx:p}}}),G=new T({props:{href:"https://github.com/ioxio-dataspace/sandbox-definitions/",$$slots:{default:[Za]},$$scope:{ctx:p}}}),W=new T({props:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo",$$slots:{default:[ef]},$$scope:{ctx:p}}}),z=new b({props:{lang:Kl,$$slots:{default:[tf]},$$scope:{ctx:p}}}),J=new T({props:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository",$$slots:{default:[nf]},$$scope:{ctx:p}}}),Y=new b({props:{lang:Kl,$$slots:{default:[lf]},$$scope:{ctx:p}}}),Qe=new Ql({props:{title:"Creating a new definition"}}),K=new T({props:{href:"https://docs.pydantic.dev/1.10/",$$slots:{default:[sf]},$$scope:{ctx:p}}}),V=new b({props:{lang:Es,$$slots:{default:[of]},$$scope:{ctx:p}}}),X=new b({props:{lang:Es,$$slots:{default:[af]},$$scope:{ctx:p}}}),Z=new b({props:{lang:Es,$$slots:{default:[ff]},$$scope:{ctx:p}}}),ee=new b({props:{lang:P,lineNumbers:!0,$$slots:{default:[rf]},$$scope:{ctx:p}}}),te=new b({props:{lang:P,$$slots:{default:[uf]},$$scope:{ctx:p}}}),ne=new b({props:{lang:P,$$slots:{default:[pf]},$$scope:{ctx:p}}}),ie=new T({props:{href:"https://docs.pydantic.dev/1.10/usage/models/#required-fields",$$slots:{default:[mf]},$$scope:{ctx:p}}}),le=new b({props:{lang:P,$$slots:{default:[$f]},$$scope:{ctx:p}}}),oe=new T({props:{href:"https://docs.pydantic.dev/1.10/usage/schema/#field-customization",$$slots:{default:[df]},$$scope:{ctx:p}}}),ae=new b({props:{lang:P,$$slots:{default:[hf]},$$scope:{ctx:p}}}),fe=new b({props:{lang:P,$$slots:{default:[cf]},$$scope:{ctx:p}}}),re=new b({props:{lang:P,$$slots:{default:[vf]},$$scope:{ctx:p}}}),ue=new T({props:{href:"https://docs.pydantic.dev/1.10/usage/types/#constrained-types",$$slots:{default:[_f]},$$scope:{ctx:p}}}),pe=new b({props:{lang:P,$$slots:{default:[Cf]},$$scope:{ctx:p}}}),me=new b({props:{lang:P,$$slots:{default:[gf]},$$scope:{ctx:p}}}),$e=new b({props:{lang:P,$$slots:{default:[wf]},$$scope:{ctx:p}}}),he=new T({props:{href:"https://docs.pydantic.dev/1.10/usage/models/#recursive-models",$$slots:{default:[xf]},$$scope:{ctx:p}}}),ce=new b({props:{lang:P,$$slots:{default:[yf]},$$scope:{ctx:p}}}),ve=new b({props:{lang:P,$$slots:{default:[bf]},$$scope:{ctx:p}}}),_e=new b({props:{lang:P,$$slots:{default:[kf]},$$scope:{ctx:p}}}),Ce=new b({props:{lang:P,$$slots:{default:[Tf]},$$scope:{ctx:p}}}),ge=new b({props:{lang:P,$$slots:{default:[If]},$$scope:{ctx:p}}}),we=new b({props:{lang:P,lineNumbers:!0,$$slots:{default:[Pf]},$$scope:{ctx:p}}}),Yt=new Ql({props:{title:"Submitting the new definition"}}),xe=new T({props:{href:"https://black.readthedocs.io/en/stable/",$$slots:{default:[Hf]},$$scope:{ctx:p}}}),ye=new b({props:{lang:Kl,$$slots:{default:[Lf]},$$scope:{ctx:p}}}),Zt=new Ga({props:{img:p[1].PRE_COMMIT}}),be=new b({props:{lang:Kl,$$slots:{default:[Mf]},$$scope:{ctx:p}}}),Te=new T({props:{href:"https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository",$$slots:{default:[Ff]},$$scope:{ctx:p}}}),Pe=new T({props:{href:"https://github.com/ioxio-dataspace/sandbox-definitions",$$slots:{default:[qf]},$$scope:{ctx:p}}}),Le=new T({props:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request",$$slots:{default:[Of]},$$scope:{ctx:p}}}),sn=new Ga({props:{img:p[1].PULL_REQUEST}}),Fe=new T({props:{href:Aa.BUILD_DATA_SOURCE.href,$$slots:{default:[Bf]},$$scope:{ctx:p}}}),qe=new T({props:{href:"https://github.com/ioxio-dataspace/sandbox-definitions/blob/main/CONTRIBUTING.md#versioning-of-definitions",$$slots:{default:[Ef]},$$scope:{ctx:p}}}),{c(){v(o.$$.fragment),l=a(),v(s.$$.fragment),h=a(),v(M.$$.fragment),Bn=a(),Oe=r("p"),Oe.textContent=Ns,En=a(),Be=r("p"),Be.textContent=Ds,Nn=a(),Ee=r("p"),Ee.textContent=Rs,Dn=a(),v(Ne.$$.fragment),Rn=a(),De=r("h3"),De.textContent=js,jn=a(),Re=r("p"),Re.textContent=Ss,Sn=a(),q=r("ul"),Hn=r("li"),v(D.$$.fragment),Vl=a(),Ln=r("li"),v(R.$$.fragment),Xl=a(),Mn=r("li"),v(j.$$.fragment),Gn=a(),je=r("h3"),je.textContent=Gs,An=a(),S=r("p"),Zl=$(`Go to the
    `),v(G.$$.fragment),es=$(` and create your own fork of the repository and clone it. It's important that you make a fork
    as you don't have write access to the repository.`),Wn=a(),A=r("p"),ts=$(`Both of these steps are described in detail in the
    `),v(W.$$.fragment),ns=$(" in the GitHub documentation."),zn=a(),Se=r("h3"),Se.textContent=As,Un=a(),Ge=r("p"),Ge.innerHTML=Ws,Jn=a(),v(z.$$.fragment),Yn=a(),Ae=r("p"),Ae.textContent=zs,Qn=a(),We=r("p"),We.textContent=Us,Kn=a(),ze=r("h3"),ze.textContent=Js,Vn=a(),Ue=r("p"),Ue.textContent=Ys,Xn=a(),U=r("p"),is=$(`If you need help with syncing the repo from the upstream, check the
    `),v(J.$$.fragment),ls=$(" on GitHub."),Zn=a(),Je=r("h3"),Je.textContent=Qs,ei=a(),Ye=r("p"),Ye.textContent=Ks,ti=a(),v(Y.$$.fragment),ni=a(),v(Qe.$$.fragment),ii=a(),Q=r("p"),ss=$(`This guide explains how to create a new definition using a python file (with models based on the
    `),v(K.$$.fragment),os=$(`). The content gets automatically
    converted into an OpenAPI spec file using the pre-commit hooks. This is fairly simple to do and
    understand even if you're not too familiar with Python or OpenAPI spec.`),li=a(),Ke=r("h3"),Ke.textContent=Vs,si=a(),Ve=r("p"),Ve.textContent=Xs,oi=a(),Xe=r("ul"),Xe.innerHTML=Zs,ai=a(),Ze=r("h3"),Ze.textContent=eo,fi=a(),et=r("p"),et.textContent=to,ri=a(),tt=r("p"),tt.textContent=no,ui=a(),nt=r("p"),nt.textContent=io,pi=a(),it=r("ul"),it.innerHTML=lo,mi=a(),lt=r("p"),lt.textContent=so,$i=a(),v(V.$$.fragment),di=a(),st=r("p"),st.textContent=oo,hi=a(),v(X.$$.fragment),ci=a(),ot=r("p"),ot.innerHTML=ao,vi=a(),at=r("p"),at.textContent=fo,_i=a(),ft=r("p"),ft.textContent=ro,Ci=a(),v(Z.$$.fragment),gi=a(),rt=r("h3"),rt.textContent=uo,wi=a(),ut=r("p"),ut.textContent=po,xi=a(),pt=r("ul"),pt.innerHTML=mo,yi=a(),mt=r("p"),mt.innerHTML=$o,bi=a(),$t=r("p"),$t.innerHTML=ho,ki=a(),dt=r("h3"),dt.textContent=co,Ti=a(),ht=r("p"),ht.textContent=vo,Ii=a(),ct=r("p"),ct.innerHTML=_o,Pi=a(),v(ee.$$.fragment),Hi=a(),vt=r("p"),vt.textContent=Co,Li=a(),_t=r("p"),_t.textContent=go,Mi=$(`
  In the`),Ct=r("em"),Ct.textContent=wo,Fi=$(` we'll define the input for the data source, and in the
  `),gt=r("em"),gt.textContent=xo,qi=$(`
  we'll define the output of the data source.

  `),wt=r("p"),wt.innerHTML=yo,Oi=a(),xt=r("h3"),xt.textContent=bo,Bi=a(),yt=r("p"),yt.textContent=ko,Ei=a(),v(te.$$.fragment),Ni=a(),bt=r("p"),bt.innerHTML=To,Di=a(),kt=r("p"),kt.textContent=Io,Ri=a(),Tt=r("p"),Tt.innerHTML=Po,ji=a(),v(ne.$$.fragment),Si=a(),I=r("p"),as=$("The first argument to "),gn=r("em"),gn.textContent=Ho,fs=$(` is the default value of the field, which defaults to
    `),wn=r("em"),wn.textContent=Lo,rs=$(`
    in python (`),xn=r("em"),xn.textContent=Mo,us=$(` in JSON). We don't want that, so we've set it to the special value
    `),yn=r("em"),yn.textContent=Fo,ps=$(`
    (ellipsis), which tells pydantic that the field is
    `),v(ie.$$.fragment),ms=$("."),Gi=a(),It=r("p"),It.textContent=qo,Ai=a(),Pt=r("p"),Pt.innerHTML=Oo,Wi=a(),v(le.$$.fragment),zi=a(),Ht=r("p"),Ht.textContent=Bo,Ui=a(),se=r("p"),$s=$(`For more details on these parameters refer to the
    `),v(oe.$$.fragment),ds=$(" section of the documentation for pydantic."),Ji=a(),Lt=r("h3"),Lt.textContent=Eo,Yi=a(),Mt=r("p"),Mt.textContent=No,Qi=a(),Ft=r("p"),Ft.innerHTML=Do,Ki=a(),v(ae.$$.fragment),Vi=a(),qt=r("h3"),qt.textContent=Ro,Xi=a(),Ot=r("p"),Ot.innerHTML=jo,Zi=a(),v(fe.$$.fragment),el=a(),Bt=r("p"),Bt.innerHTML=So,tl=a(),v(re.$$.fragment),nl=a(),O=r("p"),hs=$(`However, like this there would be no restriction on the length of the strings in the list. We
    can fix that by using a
    `),v(ue.$$.fragment),cs=$(`, in
    this case the `),bn=r("em"),bn.textContent=Go,vs=$(". We need to import it like this (at the top of the file):"),il=a(),v(pe.$$.fragment),ll=a(),Et=r("p"),Et.innerHTML=Ao,sl=a(),v(me.$$.fragment),ol=a(),Nt=r("h3"),Nt.textContent=Wo,al=a(),Dt=r("p"),Dt.textContent=zo,fl=a(),v($e.$$.fragment),rl=a(),de=r("p"),_s=$(`To do this, we'll use
    `),v(he.$$.fragment),Cs=$(" in pydantic."),ul=a(),Rt=r("p"),Rt.innerHTML=Uo,pl=a(),v(ce.$$.fragment),ml=a(),jt=r("p"),jt.innerHTML=Jo,$l=a(),St=r("p"),St.innerHTML=Yo,dl=a(),v(ve.$$.fragment),hl=a(),Gt=r("p"),Gt.innerHTML=Qo,cl=a(),v(_e.$$.fragment),vl=a(),At=r("p"),At.innerHTML=Ko,_l=a(),v(Ce.$$.fragment),Cl=a(),Wt=r("p"),Wt.innerHTML=Vo,gl=a(),zt=r("p"),zt.innerHTML=Xo,wl=a(),v(ge.$$.fragment),xl=a(),Ut=r("h3"),Ut.textContent=Zo,yl=a(),Jt=r("p"),Jt.innerHTML=ea,bl=a(),v(we.$$.fragment),kl=a(),v(Yt.$$.fragment),Tl=a(),Qt=r("h3"),Qt.textContent=ta,Il=a(),Kt=r("p"),Kt.textContent=na,Pl=a(),B=r("p"),gs=$(`Let's add the new definition file to it and run the pre-commit hooks to see that it creates the
    OpenAPI spec file. Then let's add the OpenAPI spec file and commit it. Note that you might get
    some changes to the `),kn=r("em"),kn.textContent=ia,ws=$(` file due to the
    `),v(xe.$$.fragment),xs=$(` pre-commit hook reformatting it slightly.
    In that case, you'll also need to add that file again before you'll be able to commit.`),Hl=a(),Vt=r("p"),Vt.textContent=la,Ll=a(),v(ye.$$.fragment),Ml=a(),Xt=r("p"),Xt.textContent=sa,Fl=a(),v(Zt.$$.fragment),ql=a(),en=r("h3"),en.textContent=oa,Ol=a(),tn=r("p"),tn.textContent=aa,Bl=a(),v(be.$$.fragment),El=a(),ke=r("p"),ys=$(`In case you need further assistance with pushing the branch, see the GitHub documentation on
    `),v(Te.$$.fragment),bs=$("."),Nl=a(),nn=r("h3"),nn.textContent=fa,Dl=a(),Ie=r("p"),ks=$("Create a pull request to the "),v(Pe.$$.fragment),Ts=$(" on GitHub from the branch you just created in your own fork of the repository."),Rl=a(),He=r("p"),Is=$("See "),v(Le.$$.fragment),Ps=$(" in the GitHub documentation if you need more assistance with creating the pull request."),jl=a(),ln=r("p"),ln.textContent=ra,Sl=a(),v(sn.$$.fragment),Gl=a(),on=r("h3"),on.textContent=ua,Al=a(),an=r("p"),an.textContent=pa,Wl=a(),fn=r("h3"),fn.textContent=ma,zl=a(),Me=r("p"),Hs=$(`Once the definition has been merged you can start using it in data sources, for that you might
    want to check out the `),v(Fe.$$.fragment),Ls=$(" guide."),Ul=a(),rn=r("p"),rn.innerHTML=$a,Jl=a(),L=r("p"),Ms=$(`Once you've tested the definition and are somewhat happy with it and think it could be tested in
    a broader scope by others, you can submit a pull request to move it out of the `),Tn=r("em"),Tn.textContent=da,Fs=$(`
    scope. Note that at this stage you will have to increment the version number to at least
    `),In=r("em"),In.textContent=ha,qs=$(`
    and also add the corresponding version number (two digit version only) to the filename, so the full
    path and name for this example would then become `),Pn=r("em"),Pn.textContent=ca,Os=$(`. You can
    read more about this in the `),v(qe.$$.fragment),Bs=$(" section of the contribution guidelines.")},l(e){_(o.$$.fragment,e),l=f(e),_(s.$$.fragment,e),h=f(e),_(M.$$.fragment,e),Bn=f(e),Oe=u(e,"P",{"data-svelte-h":!0}),m(Oe)!=="svelte-he4fn"&&(Oe.textContent=Ns),En=f(e),Be=u(e,"P",{"data-svelte-h":!0}),m(Be)!=="svelte-1flwj82"&&(Be.textContent=Ds),Nn=f(e),Ee=u(e,"P",{"data-svelte-h":!0}),m(Ee)!=="svelte-vieads"&&(Ee.textContent=Rs),Dn=f(e),_(Ne.$$.fragment,e),Rn=f(e),De=u(e,"H3",{"data-svelte-h":!0}),m(De)!=="svelte-hr81kj"&&(De.textContent=js),jn=f(e),Re=u(e,"P",{"data-svelte-h":!0}),m(Re)!=="svelte-1q53d7v"&&(Re.textContent=Ss),Sn=f(e),q=u(e,"UL",{});var t=k(q);Hn=u(t,"LI",{});var Fn=k(Hn);_(D.$$.fragment,Fn),Fn.forEach(n),Vl=f(t),Ln=u(t,"LI",{});var qn=k(Ln);_(R.$$.fragment,qn),qn.forEach(n),Xl=f(t),Mn=u(t,"LI",{});var On=k(Mn);_(j.$$.fragment,On),On.forEach(n),t.forEach(n),Gn=f(e),je=u(e,"H3",{"data-svelte-h":!0}),m(je)!=="svelte-rprf6h"&&(je.textContent=Gs),An=f(e),S=u(e,"P",{});var un=k(S);Zl=d(un,`Go to the
    `),_(G.$$.fragment,un),es=d(un,` and create your own fork of the repository and clone it. It's important that you make a fork
    as you don't have write access to the repository.`),un.forEach(n),Wn=f(e),A=u(e,"P",{});var pn=k(A);ts=d(pn,`Both of these steps are described in detail in the
    `),_(W.$$.fragment,pn),ns=d(pn," in the GitHub documentation."),pn.forEach(n),zn=f(e),Se=u(e,"H3",{"data-svelte-h":!0}),m(Se)!=="svelte-6qdmbs"&&(Se.textContent=As),Un=f(e),Ge=u(e,"P",{"data-svelte-h":!0}),m(Ge)!=="svelte-12puvdu"&&(Ge.innerHTML=Ws),Jn=f(e),_(z.$$.fragment,e),Yn=f(e),Ae=u(e,"P",{"data-svelte-h":!0}),m(Ae)!=="svelte-12n0ygh"&&(Ae.textContent=zs),Qn=f(e),We=u(e,"P",{"data-svelte-h":!0}),m(We)!=="svelte-ynuit4"&&(We.textContent=Us),Kn=f(e),ze=u(e,"H3",{"data-svelte-h":!0}),m(ze)!=="svelte-1bm26oi"&&(ze.textContent=Js),Vn=f(e),Ue=u(e,"P",{"data-svelte-h":!0}),m(Ue)!=="svelte-14e18u8"&&(Ue.textContent=Ys),Xn=f(e),U=u(e,"P",{});var mn=k(U);is=d(mn,`If you need help with syncing the repo from the upstream, check the
    `),_(J.$$.fragment,mn),ls=d(mn," on GitHub."),mn.forEach(n),Zn=f(e),Je=u(e,"H3",{"data-svelte-h":!0}),m(Je)!=="svelte-1j408qn"&&(Je.textContent=Qs),ei=f(e),Ye=u(e,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-1al75pp"&&(Ye.textContent=Ks),ti=f(e),_(Y.$$.fragment,e),ni=f(e),_(Qe.$$.fragment,e),ii=f(e),Q=u(e,"P",{});var $n=k(Q);ss=d($n,`This guide explains how to create a new definition using a python file (with models based on the
    `),_(K.$$.fragment,$n),os=d($n,`). The content gets automatically
    converted into an OpenAPI spec file using the pre-commit hooks. This is fairly simple to do and
    understand even if you're not too familiar with Python or OpenAPI spec.`),$n.forEach(n),li=f(e),Ke=u(e,"H3",{"data-svelte-h":!0}),m(Ke)!=="svelte-1decycw"&&(Ke.textContent=Vs),si=f(e),Ve=u(e,"P",{"data-svelte-h":!0}),m(Ve)!=="svelte-17a8fr2"&&(Ve.textContent=Xs),oi=f(e),Xe=u(e,"UL",{"data-svelte-h":!0}),m(Xe)!=="svelte-14kumhr"&&(Xe.innerHTML=Zs),ai=f(e),Ze=u(e,"H3",{"data-svelte-h":!0}),m(Ze)!=="svelte-1bcxwcm"&&(Ze.textContent=eo),fi=f(e),et=u(e,"P",{"data-svelte-h":!0}),m(et)!=="svelte-writ4z"&&(et.textContent=to),ri=f(e),tt=u(e,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-1clbycc"&&(tt.textContent=no),ui=f(e),nt=u(e,"P",{"data-svelte-h":!0}),m(nt)!=="svelte-st53h"&&(nt.textContent=io),pi=f(e),it=u(e,"UL",{"data-svelte-h":!0}),m(it)!=="svelte-iljam7"&&(it.innerHTML=lo),mi=f(e),lt=u(e,"P",{"data-svelte-h":!0}),m(lt)!=="svelte-1imvr6b"&&(lt.textContent=so),$i=f(e),_(V.$$.fragment,e),di=f(e),st=u(e,"P",{"data-svelte-h":!0}),m(st)!=="svelte-1obhzj9"&&(st.textContent=oo),hi=f(e),_(X.$$.fragment,e),ci=f(e),ot=u(e,"P",{"data-svelte-h":!0}),m(ot)!=="svelte-6hvzow"&&(ot.innerHTML=ao),vi=f(e),at=u(e,"P",{"data-svelte-h":!0}),m(at)!=="svelte-oomx6"&&(at.textContent=fo),_i=f(e),ft=u(e,"P",{"data-svelte-h":!0}),m(ft)!=="svelte-wsiu5f"&&(ft.textContent=ro),Ci=f(e),_(Z.$$.fragment,e),gi=f(e),rt=u(e,"H3",{"data-svelte-h":!0}),m(rt)!=="svelte-zv8h5d"&&(rt.textContent=uo),wi=f(e),ut=u(e,"P",{"data-svelte-h":!0}),m(ut)!=="svelte-8ylcv2"&&(ut.textContent=po),xi=f(e),pt=u(e,"UL",{"data-svelte-h":!0}),m(pt)!=="svelte-1jn4rzb"&&(pt.innerHTML=mo),yi=f(e),mt=u(e,"P",{"data-svelte-h":!0}),m(mt)!=="svelte-fsuqok"&&(mt.innerHTML=$o),bi=f(e),$t=u(e,"P",{"data-svelte-h":!0}),m($t)!=="svelte-j6boql"&&($t.innerHTML=ho),ki=f(e),dt=u(e,"H3",{"data-svelte-h":!0}),m(dt)!=="svelte-dauo8s"&&(dt.textContent=co),Ti=f(e),ht=u(e,"P",{"data-svelte-h":!0}),m(ht)!=="svelte-8kowh5"&&(ht.textContent=vo),Ii=f(e),ct=u(e,"P",{"data-svelte-h":!0}),m(ct)!=="svelte-d8kl64"&&(ct.innerHTML=_o),Pi=f(e),_(ee.$$.fragment,e),Hi=f(e),vt=u(e,"P",{"data-svelte-h":!0}),m(vt)!=="svelte-14jr3nr"&&(vt.textContent=Co),Li=f(e),_t=u(e,"P",{"data-svelte-h":!0}),m(_t)!=="svelte-16325k4"&&(_t.textContent=go),Mi=d(e,`
  In the`),Ct=u(e,"EM",{"data-svelte-h":!0}),m(Ct)!=="svelte-15a5lvd"&&(Ct.textContent=wo),Fi=d(e,` we'll define the input for the data source, and in the
  `),gt=u(e,"EM",{"data-svelte-h":!0}),m(gt)!=="svelte-iyvrvd"&&(gt.textContent=xo),qi=d(e,`
  we'll define the output of the data source.

  `),wt=u(e,"P",{"data-svelte-h":!0}),m(wt)!=="svelte-griz0q"&&(wt.innerHTML=yo),Oi=f(e),xt=u(e,"H3",{"data-svelte-h":!0}),m(xt)!=="svelte-1xbptmi"&&(xt.textContent=bo),Bi=f(e),yt=u(e,"P",{"data-svelte-h":!0}),m(yt)!=="svelte-13sav88"&&(yt.textContent=ko),Ei=f(e),_(te.$$.fragment,e),Ni=f(e),bt=u(e,"P",{"data-svelte-h":!0}),m(bt)!=="svelte-s6t7ai"&&(bt.innerHTML=To),Di=f(e),kt=u(e,"P",{"data-svelte-h":!0}),m(kt)!=="svelte-lxtau9"&&(kt.textContent=Io),Ri=f(e),Tt=u(e,"P",{"data-svelte-h":!0}),m(Tt)!=="svelte-168ylar"&&(Tt.innerHTML=Po),ji=f(e),_(ne.$$.fragment,e),Si=f(e),I=u(e,"P",{});var H=k(I);as=d(H,"The first argument to "),gn=u(H,"EM",{"data-svelte-h":!0}),m(gn)!=="svelte-1nxkg47"&&(gn.textContent=Ho),fs=d(H,` is the default value of the field, which defaults to
    `),wn=u(H,"EM",{"data-svelte-h":!0}),m(wn)!=="svelte-17ajvp0"&&(wn.textContent=Lo),rs=d(H,`
    in python (`),xn=u(H,"EM",{"data-svelte-h":!0}),m(xn)!=="svelte-12wbstn"&&(xn.textContent=Mo),us=d(H,` in JSON). We don't want that, so we've set it to the special value
    `),yn=u(H,"EM",{"data-svelte-h":!0}),m(yn)!=="svelte-181mbew"&&(yn.textContent=Fo),ps=d(H,`
    (ellipsis), which tells pydantic that the field is
    `),_(ie.$$.fragment,H),ms=d(H,"."),H.forEach(n),Gi=f(e),It=u(e,"P",{"data-svelte-h":!0}),m(It)!=="svelte-1k45cjc"&&(It.textContent=qo),Ai=f(e),Pt=u(e,"P",{"data-svelte-h":!0}),m(Pt)!=="svelte-1a43yxe"&&(Pt.innerHTML=Oo),Wi=f(e),_(le.$$.fragment,e),zi=f(e),Ht=u(e,"P",{"data-svelte-h":!0}),m(Ht)!=="svelte-yidx5e"&&(Ht.textContent=Bo),Ui=f(e),se=u(e,"P",{});var dn=k(se);$s=d(dn,`For more details on these parameters refer to the
    `),_(oe.$$.fragment,dn),ds=d(dn," section of the documentation for pydantic."),dn.forEach(n),Ji=f(e),Lt=u(e,"H3",{"data-svelte-h":!0}),m(Lt)!=="svelte-16n00pt"&&(Lt.textContent=Eo),Yi=f(e),Mt=u(e,"P",{"data-svelte-h":!0}),m(Mt)!=="svelte-ea3cii"&&(Mt.textContent=No),Qi=f(e),Ft=u(e,"P",{"data-svelte-h":!0}),m(Ft)!=="svelte-vxheiw"&&(Ft.innerHTML=Do),Ki=f(e),_(ae.$$.fragment,e),Vi=f(e),qt=u(e,"H3",{"data-svelte-h":!0}),m(qt)!=="svelte-1sqtywf"&&(qt.textContent=Ro),Xi=f(e),Ot=u(e,"P",{"data-svelte-h":!0}),m(Ot)!=="svelte-1u12kvn"&&(Ot.innerHTML=jo),Zi=f(e),_(fe.$$.fragment,e),el=f(e),Bt=u(e,"P",{"data-svelte-h":!0}),m(Bt)!=="svelte-nyg5qz"&&(Bt.innerHTML=So),tl=f(e),_(re.$$.fragment,e),nl=f(e),O=u(e,"P",{});var E=k(O);hs=d(E,`However, like this there would be no restriction on the length of the strings in the list. We
    can fix that by using a
    `),_(ue.$$.fragment,E),cs=d(E,`, in
    this case the `),bn=u(E,"EM",{"data-svelte-h":!0}),m(bn)!=="svelte-1gf09w9"&&(bn.textContent=Go),vs=d(E,". We need to import it like this (at the top of the file):"),E.forEach(n),il=f(e),_(pe.$$.fragment,e),ll=f(e),Et=u(e,"P",{"data-svelte-h":!0}),m(Et)!=="svelte-1ui942g"&&(Et.innerHTML=Ao),sl=f(e),_(me.$$.fragment,e),ol=f(e),Nt=u(e,"H3",{"data-svelte-h":!0}),m(Nt)!=="svelte-1vkppvo"&&(Nt.textContent=Wo),al=f(e),Dt=u(e,"P",{"data-svelte-h":!0}),m(Dt)!=="svelte-1leuk53"&&(Dt.textContent=zo),fl=f(e),_($e.$$.fragment,e),rl=f(e),de=u(e,"P",{});var hn=k(de);_s=d(hn,`To do this, we'll use
    `),_(he.$$.fragment,hn),Cs=d(hn," in pydantic."),hn.forEach(n),ul=f(e),Rt=u(e,"P",{"data-svelte-h":!0}),m(Rt)!=="svelte-odjwj5"&&(Rt.innerHTML=Uo),pl=f(e),_(ce.$$.fragment,e),ml=f(e),jt=u(e,"P",{"data-svelte-h":!0}),m(jt)!=="svelte-1s15qm9"&&(jt.innerHTML=Jo),$l=f(e),St=u(e,"P",{"data-svelte-h":!0}),m(St)!=="svelte-ubt9nl"&&(St.innerHTML=Yo),dl=f(e),_(ve.$$.fragment,e),hl=f(e),Gt=u(e,"P",{"data-svelte-h":!0}),m(Gt)!=="svelte-pj2ff9"&&(Gt.innerHTML=Qo),cl=f(e),_(_e.$$.fragment,e),vl=f(e),At=u(e,"P",{"data-svelte-h":!0}),m(At)!=="svelte-dyfr00"&&(At.innerHTML=Ko),_l=f(e),_(Ce.$$.fragment,e),Cl=f(e),Wt=u(e,"P",{"data-svelte-h":!0}),m(Wt)!=="svelte-1r0k4m8"&&(Wt.innerHTML=Vo),gl=f(e),zt=u(e,"P",{"data-svelte-h":!0}),m(zt)!=="svelte-a7fr8n"&&(zt.innerHTML=Xo),wl=f(e),_(ge.$$.fragment,e),xl=f(e),Ut=u(e,"H3",{"data-svelte-h":!0}),m(Ut)!=="svelte-1hlt5rw"&&(Ut.textContent=Zo),yl=f(e),Jt=u(e,"P",{"data-svelte-h":!0}),m(Jt)!=="svelte-1giz3sk"&&(Jt.innerHTML=ea),bl=f(e),_(we.$$.fragment,e),kl=f(e),_(Yt.$$.fragment,e),Tl=f(e),Qt=u(e,"H3",{"data-svelte-h":!0}),m(Qt)!=="svelte-18o4pvd"&&(Qt.textContent=ta),Il=f(e),Kt=u(e,"P",{"data-svelte-h":!0}),m(Kt)!=="svelte-16mugqf"&&(Kt.textContent=na),Pl=f(e),B=u(e,"P",{});var N=k(B);gs=d(N,`Let's add the new definition file to it and run the pre-commit hooks to see that it creates the
    OpenAPI spec file. Then let's add the OpenAPI spec file and commit it. Note that you might get
    some changes to the `),kn=u(N,"EM",{"data-svelte-h":!0}),m(kn)!=="svelte-1rnbg1h"&&(kn.textContent=ia),ws=d(N,` file due to the
    `),_(xe.$$.fragment,N),xs=d(N,` pre-commit hook reformatting it slightly.
    In that case, you'll also need to add that file again before you'll be able to commit.`),N.forEach(n),Hl=f(e),Vt=u(e,"P",{"data-svelte-h":!0}),m(Vt)!=="svelte-zmkypv"&&(Vt.textContent=la),Ll=f(e),_(ye.$$.fragment,e),Ml=f(e),Xt=u(e,"P",{"data-svelte-h":!0}),m(Xt)!=="svelte-ob4ctf"&&(Xt.textContent=sa),Fl=f(e),_(Zt.$$.fragment,e),ql=f(e),en=u(e,"H3",{"data-svelte-h":!0}),m(en)!=="svelte-12akhfx"&&(en.textContent=oa),Ol=f(e),tn=u(e,"P",{"data-svelte-h":!0}),m(tn)!=="svelte-rjramf"&&(tn.textContent=aa),Bl=f(e),_(be.$$.fragment,e),El=f(e),ke=u(e,"P",{});var cn=k(ke);ys=d(cn,`In case you need further assistance with pushing the branch, see the GitHub documentation on
    `),_(Te.$$.fragment,cn),bs=d(cn,"."),cn.forEach(n),Nl=f(e),nn=u(e,"H3",{"data-svelte-h":!0}),m(nn)!=="svelte-1s3rn0b"&&(nn.textContent=fa),Dl=f(e),Ie=u(e,"P",{});var vn=k(Ie);ks=d(vn,"Create a pull request to the "),_(Pe.$$.fragment,vn),Ts=d(vn," on GitHub from the branch you just created in your own fork of the repository."),vn.forEach(n),Rl=f(e),He=u(e,"P",{});var _n=k(He);Is=d(_n,"See "),_(Le.$$.fragment,_n),Ps=d(_n," in the GitHub documentation if you need more assistance with creating the pull request."),_n.forEach(n),jl=f(e),ln=u(e,"P",{"data-svelte-h":!0}),m(ln)!=="svelte-188cxyj"&&(ln.textContent=ra),Sl=f(e),_(sn.$$.fragment,e),Gl=f(e),on=u(e,"H3",{"data-svelte-h":!0}),m(on)!=="svelte-wwq53n"&&(on.textContent=ua),Al=f(e),an=u(e,"P",{"data-svelte-h":!0}),m(an)!=="svelte-1u49yst"&&(an.textContent=pa),Wl=f(e),fn=u(e,"H3",{"data-svelte-h":!0}),m(fn)!=="svelte-1dxnv6q"&&(fn.textContent=ma),zl=f(e),Me=u(e,"P",{});var Cn=k(Me);Hs=d(Cn,`Once the definition has been merged you can start using it in data sources, for that you might
    want to check out the `),_(Fe.$$.fragment,Cn),Ls=d(Cn," guide."),Cn.forEach(n),Ul=f(e),rn=u(e,"P",{"data-svelte-h":!0}),m(rn)!=="svelte-10e3okj"&&(rn.innerHTML=$a),Jl=f(e),L=u(e,"P",{});var F=k(L);Ms=d(F,`Once you've tested the definition and are somewhat happy with it and think it could be tested in
    a broader scope by others, you can submit a pull request to move it out of the `),Tn=u(F,"EM",{"data-svelte-h":!0}),m(Tn)!=="svelte-1oyywj2"&&(Tn.textContent=da),Fs=d(F,`
    scope. Note that at this stage you will have to increment the version number to at least
    `),In=u(F,"EM",{"data-svelte-h":!0}),m(In)!=="svelte-996qar"&&(In.textContent=ha),qs=d(F,`
    and also add the corresponding version number (two digit version only) to the filename, so the full
    path and name for this example would then become `),Pn=u(F,"EM",{"data-svelte-h":!0}),m(Pn)!=="svelte-312six"&&(Pn.textContent=ca),Os=d(F,`. You can
    read more about this in the `),_(qe.$$.fragment,F),Bs=d(F," section of the contribution guidelines."),F.forEach(n)},m(e,t){C(o,e,t),i(e,l,t),C(s,e,t),i(e,h,t),C(M,e,t),i(e,Bn,t),i(e,Oe,t),i(e,En,t),i(e,Be,t),i(e,Nn,t),i(e,Ee,t),i(e,Dn,t),C(Ne,e,t),i(e,Rn,t),i(e,De,t),i(e,jn,t),i(e,Re,t),i(e,Sn,t),i(e,q,t),c(q,Hn),C(D,Hn,null),c(q,Vl),c(q,Ln),C(R,Ln,null),c(q,Xl),c(q,Mn),C(j,Mn,null),i(e,Gn,t),i(e,je,t),i(e,An,t),i(e,S,t),c(S,Zl),C(G,S,null),c(S,es),i(e,Wn,t),i(e,A,t),c(A,ts),C(W,A,null),c(A,ns),i(e,zn,t),i(e,Se,t),i(e,Un,t),i(e,Ge,t),i(e,Jn,t),C(z,e,t),i(e,Yn,t),i(e,Ae,t),i(e,Qn,t),i(e,We,t),i(e,Kn,t),i(e,ze,t),i(e,Vn,t),i(e,Ue,t),i(e,Xn,t),i(e,U,t),c(U,is),C(J,U,null),c(U,ls),i(e,Zn,t),i(e,Je,t),i(e,ei,t),i(e,Ye,t),i(e,ti,t),C(Y,e,t),i(e,ni,t),C(Qe,e,t),i(e,ii,t),i(e,Q,t),c(Q,ss),C(K,Q,null),c(Q,os),i(e,li,t),i(e,Ke,t),i(e,si,t),i(e,Ve,t),i(e,oi,t),i(e,Xe,t),i(e,ai,t),i(e,Ze,t),i(e,fi,t),i(e,et,t),i(e,ri,t),i(e,tt,t),i(e,ui,t),i(e,nt,t),i(e,pi,t),i(e,it,t),i(e,mi,t),i(e,lt,t),i(e,$i,t),C(V,e,t),i(e,di,t),i(e,st,t),i(e,hi,t),C(X,e,t),i(e,ci,t),i(e,ot,t),i(e,vi,t),i(e,at,t),i(e,_i,t),i(e,ft,t),i(e,Ci,t),C(Z,e,t),i(e,gi,t),i(e,rt,t),i(e,wi,t),i(e,ut,t),i(e,xi,t),i(e,pt,t),i(e,yi,t),i(e,mt,t),i(e,bi,t),i(e,$t,t),i(e,ki,t),i(e,dt,t),i(e,Ti,t),i(e,ht,t),i(e,Ii,t),i(e,ct,t),i(e,Pi,t),C(ee,e,t),i(e,Hi,t),i(e,vt,t),i(e,Li,t),i(e,_t,t),i(e,Mi,t),i(e,Ct,t),i(e,Fi,t),i(e,gt,t),i(e,qi,t),i(e,wt,t),i(e,Oi,t),i(e,xt,t),i(e,Bi,t),i(e,yt,t),i(e,Ei,t),C(te,e,t),i(e,Ni,t),i(e,bt,t),i(e,Di,t),i(e,kt,t),i(e,Ri,t),i(e,Tt,t),i(e,ji,t),C(ne,e,t),i(e,Si,t),i(e,I,t),c(I,as),c(I,gn),c(I,fs),c(I,wn),c(I,rs),c(I,xn),c(I,us),c(I,yn),c(I,ps),C(ie,I,null),c(I,ms),i(e,Gi,t),i(e,It,t),i(e,Ai,t),i(e,Pt,t),i(e,Wi,t),C(le,e,t),i(e,zi,t),i(e,Ht,t),i(e,Ui,t),i(e,se,t),c(se,$s),C(oe,se,null),c(se,ds),i(e,Ji,t),i(e,Lt,t),i(e,Yi,t),i(e,Mt,t),i(e,Qi,t),i(e,Ft,t),i(e,Ki,t),C(ae,e,t),i(e,Vi,t),i(e,qt,t),i(e,Xi,t),i(e,Ot,t),i(e,Zi,t),C(fe,e,t),i(e,el,t),i(e,Bt,t),i(e,tl,t),C(re,e,t),i(e,nl,t),i(e,O,t),c(O,hs),C(ue,O,null),c(O,cs),c(O,bn),c(O,vs),i(e,il,t),C(pe,e,t),i(e,ll,t),i(e,Et,t),i(e,sl,t),C(me,e,t),i(e,ol,t),i(e,Nt,t),i(e,al,t),i(e,Dt,t),i(e,fl,t),C($e,e,t),i(e,rl,t),i(e,de,t),c(de,_s),C(he,de,null),c(de,Cs),i(e,ul,t),i(e,Rt,t),i(e,pl,t),C(ce,e,t),i(e,ml,t),i(e,jt,t),i(e,$l,t),i(e,St,t),i(e,dl,t),C(ve,e,t),i(e,hl,t),i(e,Gt,t),i(e,cl,t),C(_e,e,t),i(e,vl,t),i(e,At,t),i(e,_l,t),C(Ce,e,t),i(e,Cl,t),i(e,Wt,t),i(e,gl,t),i(e,zt,t),i(e,wl,t),C(ge,e,t),i(e,xl,t),i(e,Ut,t),i(e,yl,t),i(e,Jt,t),i(e,bl,t),C(we,e,t),i(e,kl,t),C(Yt,e,t),i(e,Tl,t),i(e,Qt,t),i(e,Il,t),i(e,Kt,t),i(e,Pl,t),i(e,B,t),c(B,gs),c(B,kn),c(B,ws),C(xe,B,null),c(B,xs),i(e,Hl,t),i(e,Vt,t),i(e,Ll,t),C(ye,e,t),i(e,Ml,t),i(e,Xt,t),i(e,Fl,t),C(Zt,e,t),i(e,ql,t),i(e,en,t),i(e,Ol,t),i(e,tn,t),i(e,Bl,t),C(be,e,t),i(e,El,t),i(e,ke,t),c(ke,ys),C(Te,ke,null),c(ke,bs),i(e,Nl,t),i(e,nn,t),i(e,Dl,t),i(e,Ie,t),c(Ie,ks),C(Pe,Ie,null),c(Ie,Ts),i(e,Rl,t),i(e,He,t),c(He,Is),C(Le,He,null),c(He,Ps),i(e,jl,t),i(e,ln,t),i(e,Sl,t),C(sn,e,t),i(e,Gl,t),i(e,on,t),i(e,Al,t),i(e,an,t),i(e,Wl,t),i(e,fn,t),i(e,zl,t),i(e,Me,t),c(Me,Hs),C(Fe,Me,null),c(Me,Ls),i(e,Ul,t),i(e,rn,t),i(e,Jl,t),i(e,L,t),c(L,Ms),c(L,Tn),c(L,Fs),c(L,In),c(L,qs),c(L,Pn),c(L,Os),C(qe,L,null),c(L,Bs),Yl=!0},p(e,t){const Fn={};t&1&&(Fn.title=e[0].guide.title),o.$set(Fn);const qn={};t&1&&(qn.path=e[0].path),s.$set(qn);const On={};t&4&&(On.$$scope={dirty:t,ctx:e}),D.$set(On);const un={};t&4&&(un.$$scope={dirty:t,ctx:e}),R.$set(un);const pn={};t&4&&(pn.$$scope={dirty:t,ctx:e}),j.$set(pn);const mn={};t&4&&(mn.$$scope={dirty:t,ctx:e}),G.$set(mn);const $n={};t&4&&($n.$$scope={dirty:t,ctx:e}),W.$set($n);const H={};t&4&&(H.$$scope={dirty:t,ctx:e}),z.$set(H);const dn={};t&4&&(dn.$$scope={dirty:t,ctx:e}),J.$set(dn);const E={};t&4&&(E.$$scope={dirty:t,ctx:e}),Y.$set(E);const hn={};t&4&&(hn.$$scope={dirty:t,ctx:e}),K.$set(hn);const N={};t&4&&(N.$$scope={dirty:t,ctx:e}),V.$set(N);const cn={};t&4&&(cn.$$scope={dirty:t,ctx:e}),X.$set(cn);const vn={};t&4&&(vn.$$scope={dirty:t,ctx:e}),Z.$set(vn);const _n={};t&4&&(_n.$$scope={dirty:t,ctx:e}),ee.$set(_n);const Cn={};t&4&&(Cn.$$scope={dirty:t,ctx:e}),te.$set(Cn);const F={};t&4&&(F.$$scope={dirty:t,ctx:e}),ne.$set(F);const va={};t&4&&(va.$$scope={dirty:t,ctx:e}),ie.$set(va);const _a={};t&4&&(_a.$$scope={dirty:t,ctx:e}),le.$set(_a);const Ca={};t&4&&(Ca.$$scope={dirty:t,ctx:e}),oe.$set(Ca);const ga={};t&4&&(ga.$$scope={dirty:t,ctx:e}),ae.$set(ga);const wa={};t&4&&(wa.$$scope={dirty:t,ctx:e}),fe.$set(wa);const xa={};t&4&&(xa.$$scope={dirty:t,ctx:e}),re.$set(xa);const ya={};t&4&&(ya.$$scope={dirty:t,ctx:e}),ue.$set(ya);const ba={};t&4&&(ba.$$scope={dirty:t,ctx:e}),pe.$set(ba);const ka={};t&4&&(ka.$$scope={dirty:t,ctx:e}),me.$set(ka);const Ta={};t&4&&(Ta.$$scope={dirty:t,ctx:e}),$e.$set(Ta);const Ia={};t&4&&(Ia.$$scope={dirty:t,ctx:e}),he.$set(Ia);const Pa={};t&4&&(Pa.$$scope={dirty:t,ctx:e}),ce.$set(Pa);const Ha={};t&4&&(Ha.$$scope={dirty:t,ctx:e}),ve.$set(Ha);const La={};t&4&&(La.$$scope={dirty:t,ctx:e}),_e.$set(La);const Ma={};t&4&&(Ma.$$scope={dirty:t,ctx:e}),Ce.$set(Ma);const Fa={};t&4&&(Fa.$$scope={dirty:t,ctx:e}),ge.$set(Fa);const qa={};t&4&&(qa.$$scope={dirty:t,ctx:e}),we.$set(qa);const Oa={};t&4&&(Oa.$$scope={dirty:t,ctx:e}),xe.$set(Oa);const Ba={};t&4&&(Ba.$$scope={dirty:t,ctx:e}),ye.$set(Ba);const Ea={};t&4&&(Ea.$$scope={dirty:t,ctx:e}),be.$set(Ea);const Na={};t&4&&(Na.$$scope={dirty:t,ctx:e}),Te.$set(Na);const Da={};t&4&&(Da.$$scope={dirty:t,ctx:e}),Pe.$set(Da);const Ra={};t&4&&(Ra.$$scope={dirty:t,ctx:e}),Le.$set(Ra);const ja={};t&4&&(ja.$$scope={dirty:t,ctx:e}),Fe.$set(ja);const Sa={};t&4&&(Sa.$$scope={dirty:t,ctx:e}),qe.$set(Sa)},i(e){Yl||(g(o.$$.fragment,e),g(s.$$.fragment,e),g(M.$$.fragment,e),g(Ne.$$.fragment,e),g(D.$$.fragment,e),g(R.$$.fragment,e),g(j.$$.fragment,e),g(G.$$.fragment,e),g(W.$$.fragment,e),g(z.$$.fragment,e),g(J.$$.fragment,e),g(Y.$$.fragment,e),g(Qe.$$.fragment,e),g(K.$$.fragment,e),g(V.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ne.$$.fragment,e),g(ie.$$.fragment,e),g(le.$$.fragment,e),g(oe.$$.fragment,e),g(ae.$$.fragment,e),g(fe.$$.fragment,e),g(re.$$.fragment,e),g(ue.$$.fragment,e),g(pe.$$.fragment,e),g(me.$$.fragment,e),g($e.$$.fragment,e),g(he.$$.fragment,e),g(ce.$$.fragment,e),g(ve.$$.fragment,e),g(_e.$$.fragment,e),g(Ce.$$.fragment,e),g(ge.$$.fragment,e),g(we.$$.fragment,e),g(Yt.$$.fragment,e),g(xe.$$.fragment,e),g(ye.$$.fragment,e),g(Zt.$$.fragment,e),g(be.$$.fragment,e),g(Te.$$.fragment,e),g(Pe.$$.fragment,e),g(Le.$$.fragment,e),g(sn.$$.fragment,e),g(Fe.$$.fragment,e),g(qe.$$.fragment,e),Yl=!0)},o(e){w(o.$$.fragment,e),w(s.$$.fragment,e),w(M.$$.fragment,e),w(Ne.$$.fragment,e),w(D.$$.fragment,e),w(R.$$.fragment,e),w(j.$$.fragment,e),w(G.$$.fragment,e),w(W.$$.fragment,e),w(z.$$.fragment,e),w(J.$$.fragment,e),w(Y.$$.fragment,e),w(Qe.$$.fragment,e),w(K.$$.fragment,e),w(V.$$.fragment,e),w(X.$$.fragment,e),w(Z.$$.fragment,e),w(ee.$$.fragment,e),w(te.$$.fragment,e),w(ne.$$.fragment,e),w(ie.$$.fragment,e),w(le.$$.fragment,e),w(oe.$$.fragment,e),w(ae.$$.fragment,e),w(fe.$$.fragment,e),w(re.$$.fragment,e),w(ue.$$.fragment,e),w(pe.$$.fragment,e),w(me.$$.fragment,e),w($e.$$.fragment,e),w(he.$$.fragment,e),w(ce.$$.fragment,e),w(ve.$$.fragment,e),w(_e.$$.fragment,e),w(Ce.$$.fragment,e),w(ge.$$.fragment,e),w(we.$$.fragment,e),w(Yt.$$.fragment,e),w(xe.$$.fragment,e),w(ye.$$.fragment,e),w(Zt.$$.fragment,e),w(be.$$.fragment,e),w(Te.$$.fragment,e),w(Pe.$$.fragment,e),w(Le.$$.fragment,e),w(sn.$$.fragment,e),w(Fe.$$.fragment,e),w(qe.$$.fragment,e),Yl=!1},d(e){e&&(n(l),n(h),n(Bn),n(Oe),n(En),n(Be),n(Nn),n(Ee),n(Dn),n(Rn),n(De),n(jn),n(Re),n(Sn),n(q),n(Gn),n(je),n(An),n(S),n(Wn),n(A),n(zn),n(Se),n(Un),n(Ge),n(Jn),n(Yn),n(Ae),n(Qn),n(We),n(Kn),n(ze),n(Vn),n(Ue),n(Xn),n(U),n(Zn),n(Je),n(ei),n(Ye),n(ti),n(ni),n(ii),n(Q),n(li),n(Ke),n(si),n(Ve),n(oi),n(Xe),n(ai),n(Ze),n(fi),n(et),n(ri),n(tt),n(ui),n(nt),n(pi),n(it),n(mi),n(lt),n($i),n(di),n(st),n(hi),n(ci),n(ot),n(vi),n(at),n(_i),n(ft),n(Ci),n(gi),n(rt),n(wi),n(ut),n(xi),n(pt),n(yi),n(mt),n(bi),n($t),n(ki),n(dt),n(Ti),n(ht),n(Ii),n(ct),n(Pi),n(Hi),n(vt),n(Li),n(_t),n(Mi),n(Ct),n(Fi),n(gt),n(qi),n(wt),n(Oi),n(xt),n(Bi),n(yt),n(Ei),n(Ni),n(bt),n(Di),n(kt),n(Ri),n(Tt),n(ji),n(Si),n(I),n(Gi),n(It),n(Ai),n(Pt),n(Wi),n(zi),n(Ht),n(Ui),n(se),n(Ji),n(Lt),n(Yi),n(Mt),n(Qi),n(Ft),n(Ki),n(Vi),n(qt),n(Xi),n(Ot),n(Zi),n(el),n(Bt),n(tl),n(nl),n(O),n(il),n(ll),n(Et),n(sl),n(ol),n(Nt),n(al),n(Dt),n(fl),n(rl),n(de),n(ul),n(Rt),n(pl),n(ml),n(jt),n($l),n(St),n(dl),n(hl),n(Gt),n(cl),n(vl),n(At),n(_l),n(Cl),n(Wt),n(gl),n(zt),n(wl),n(xl),n(Ut),n(yl),n(Jt),n(bl),n(kl),n(Tl),n(Qt),n(Il),n(Kt),n(Pl),n(B),n(Hl),n(Vt),n(Ll),n(Ml),n(Xt),n(Fl),n(ql),n(en),n(Ol),n(tn),n(Bl),n(El),n(ke),n(Nl),n(nn),n(Dl),n(Ie),n(Rl),n(He),n(jl),n(ln),n(Sl),n(Gl),n(on),n(Al),n(an),n(Wl),n(fn),n(zl),n(Me),n(Ul),n(rn),n(Jl),n(L)),x(o,e),x(s,e),x(M,e),x(Ne,e),x(D),x(R),x(j),x(G),x(W),x(z,e),x(J),x(Y,e),x(Qe,e),x(K),x(V,e),x(X,e),x(Z,e),x(ee,e),x(te,e),x(ne,e),x(ie),x(le,e),x(oe),x(ae,e),x(fe,e),x(re,e),x(ue),x(pe,e),x(me,e),x($e,e),x(he),x(ce,e),x(ve,e),x(_e,e),x(Ce,e),x(ge,e),x(we,e),x(Yt,e),x(xe),x(ye,e),x(Zt,e),x(be,e),x(Te),x(Pe),x(Le),x(sn,e),x(Fe),x(qe)}}}function Df(p){let o,l;return o=new Ja({props:{$$slots:{default:[Nf]},$$scope:{ctx:p}}}),{c(){v(o.$$.fragment)},l(s){_(o.$$.fragment,s)},m(s,h){C(o,s,h),l=!0},p(s,[h]){const M={};h&5&&(M.$$scope={dirty:h,ctx:s}),o.$set(M)},i(s){l||(g(o.$$.fragment,s),l=!0)},o(s){w(o.$$.fragment,s),l=!1},d(s){x(o,s)}}}function Rf(p,o,l){let{data:s}=o;const h=s.images;return p.$$set=M=>{"data"in M&&l(0,s=M.data)},[s,h]}class Vf extends za{constructor(o){super(),Ua(this,o,Rf,Df,Wa,{data:0})}}export{Vf as component};
