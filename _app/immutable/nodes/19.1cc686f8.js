import{s as de,a as C,f as Y,c as y,g as q,A as X,i as c,d as l,l as H,m as K,C as V}from"../chunks/scheduler.f9d0632e.js";import{S as me,i as pe,b as M,d as O,m as x,a as h,t as L,e as D}from"../chunks/index.18812859.js";import{C as J}from"../chunks/Code.ce5a82bd.js";import{B as fe,T as ge}from"../chunks/Title.dd38e6c6.js";import{M as _e}from"../chunks/Miro.1589f889.js";import{p as be}from"../chunks/python.62bbd573.js";import{j as Ee}from"../chunks/json.4d993fc0.js";const G="[A-Za-z$_][0-9A-Za-z$_]*",ee=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],te=["true","false","null","undefined","NaN","Infinity"],ne=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ae=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],se=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],re=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],oe=[].concat(se,ne,ae);function $e(a){const t=a.regex,s=(E,{after:I})=>{const P="</"+E[0].slice(1);return E.input.indexOf(P,I)!==-1},n=G,i={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,b={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(E,I)=>{const P=E[0].length+E.index,z=E.input[P];if(z==="<"||z===","){I.ignoreMatch();return}z===">"&&(s(E,{after:P})||I.ignoreMatch());let W;const j=E.input.substring(P);if(W=j.match(/^\s*=/)){I.ignoreMatch();return}if((W=j.match(/^\s+extends\s+/))&&W.index===0){I.ignoreMatch();return}}},d={$pattern:G,keyword:ee,literal:te,built_in:oe,"variable.language":re},m="[0-9](_?[0-9])*",f=`\\.(${m})`,p="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",$={className:"number",variants:[{begin:`(\\b(${p})((${f})|\\.)?|(${f}))[eE][+-]?(${m})\\b`},{begin:`\\b(${p})\\b((${f})\\b|\\.)?|(${f})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},R={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},A={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,o],subLanguage:"css"}},u={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,o],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,o]},w={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},v=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,R,A,u,S,{match:/\$\d+/},$];o.contains=v.concat({begin:/\{/,end:/\}/,keywords:d,contains:["self"].concat(v)});const _=[].concat(w,o.contains),T=_.concat([{begin:/\(/,end:/\)/,keywords:d,contains:["self"].concat(_)}]),e={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:T},r={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,t.concat(n,"(",t.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ne,...ae]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},U={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[e],illegal:/%/},F={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Z(E){return t.concat("(?!",E.join("|"),")")}const ie={match:t.concat(/\b/,Z([...se,"super","import"]),n,t.lookahead(/\(/)),className:"title.function",relevance:0},ce={begin:t.concat(/\./,t.lookahead(t.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},le={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},e]},Q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",ue={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(Q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[e]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:T,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,R,A,u,S,w,{match:/\$\d+/},$,k,{className:"attr",begin:n+t.lookahead(":"),relevance:0},ue,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,a.REGEXP_MODE,{className:"function",begin:Q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:T}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:g},{begin:b.begin,"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},U,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[e,a.inherit(a.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},ce,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[e]},ie,F,r,le,{match:/\$[(.]/}]}}function Ae(a){const t=$e(a),s=G,n=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],i={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[t.exports.CLASS_REFERENCE]},g={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:n},contains:[t.exports.CLASS_REFERENCE]},b={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},d=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],m={$pattern:G,keyword:ee.concat(d),literal:te,built_in:oe.concat(n),"variable.language":re},f={className:"meta",begin:"@"+s},p=(o,R,A)=>{const u=o.contains.findIndex(S=>S.label===R);if(u===-1)throw new Error("can not find mode to replace");o.contains.splice(u,1,A)};Object.assign(t.keywords,m),t.exports.PARAMS_CONTAINS.push(f),t.contains=t.contains.concat([f,i,g]),p(t,"shebang",a.SHEBANG()),p(t,"use_strict",b);const $=t.contains.find(o=>o.label==="func.def");return $.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}const Se={name:"typescript",register:Ae},Ne=Se;function Te(a){let t;return{c(){t=H("How to build applications")},l(s){t=K(s,"How to build applications")},m(s,n){c(s,t,n)},d(s){s&&l(t)}}}function Ce(a){let t=`
import foo from "./foo";

function bar(arg: string): boolean {
  return foo(bar)
}
`,s;return{c(){s=H(t)},l(n){s=K(n,t)},m(n,i){c(n,s,i)},p:V,d(n){n&&l(s)}}}function ye(a){let t=`
from definition_tooling.converter import CamelCaseModel, DataProductDefinition
from pydantic import Field


class CurrentWeatherMetricRequest(CamelCaseModel):
    lat: float = Field(
        ...,
        title="Latitude",
        description="The latitude coordinate of the desired location",
        ge=-90.0,
        le=90.0,
        example=60.192059,
    )
    lon: float = Field(
        ...,
        title="Longitude",
        description="The longitude coordinate of the desired location",
        ge=-180.0,
        le=180.0,
        example=24.945831,
    )


class CurrentWeatherMetricResponse(CamelCaseModel):
    humidity: float = Field(..., title="Current relative air humidity in %", example=72)
    pressure: float = Field(..., title="Current air pressure in hPa", example=1007)
    # ...


DEFINITION = DataProductDefinition(
    title="Current weather in a given location",
    description="Common data points about the current weather with metric units in a given location. Simplified for example use, and not following industry standards.",
    request=CurrentWeatherMetricRequest,
    response=CurrentWeatherMetricResponse,
)
}
`,s;return{c(){s=H(t)},l(n){s=K(n,t)},m(n,i){c(n,s,i)},p:V,d(n){n&&l(s)}}}function Re(a){let t=`
{
  "jwks_uri": "https://example.com/.well-known/jwks.json",
  "logo_url": "https://example.com/favicon-32x32.png",
  "product_dataspace": "sandbox.ioxio-dataspace.com"
}
`,s;return{c(){s=H(t)},l(n){s=K(n,t)},m(n,i){c(n,s,i)},p:V,d(n){n&&l(s)}}}function ve(a){let t,s,n,i,g,b="This wonderful code fetches your data.",d,m,f,p,$,o,R=`You can define data products like this in <em>src/draft/Weather/Current/Metric.py</em> in the definitions
  repository.`,A,u,S,N,w="And then you can host this in <em>.well-known/product-passport/product-passport.json</em>:",v,_,T;return t=new fe({props:{path:a[0].path}}),n=new ge({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),m=new J({props:{lang:Ne,$$slots:{default:[Ce]},$$scope:{ctx:a}}}),p=new _e({props:{url:"https://miro.com/app/board/uXjVMANjO8Y=/"}}),u=new J({props:{lang:be,lineNumbers:!0,$$slots:{default:[ye]},$$scope:{ctx:a}}}),_=new J({props:{lang:Ee,$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment),s=C(),M(n.$$.fragment),i=C(),g=Y("p"),g.textContent=b,d=C(),M(m.$$.fragment),f=C(),M(p.$$.fragment),$=C(),o=Y("p"),o.innerHTML=R,A=C(),M(u.$$.fragment),S=C(),N=Y("p"),N.innerHTML=w,v=C(),M(_.$$.fragment)},l(e){O(t.$$.fragment,e),s=y(e),O(n.$$.fragment,e),i=y(e),g=q(e,"P",{"data-svelte-h":!0}),X(g)!=="svelte-d7srsc"&&(g.textContent=b),d=y(e),O(m.$$.fragment,e),f=y(e),O(p.$$.fragment,e),$=y(e),o=q(e,"P",{"data-svelte-h":!0}),X(o)!=="svelte-1g4my1q"&&(o.innerHTML=R),A=y(e),O(u.$$.fragment,e),S=y(e),N=q(e,"P",{"data-svelte-h":!0}),X(N)!=="svelte-1eijzgr"&&(N.innerHTML=w),v=y(e),O(_.$$.fragment,e)},m(e,r){x(t,e,r),c(e,s,r),x(n,e,r),c(e,i,r),c(e,g,r),c(e,d,r),x(m,e,r),c(e,f,r),x(p,e,r),c(e,$,r),c(e,o,r),c(e,A,r),x(u,e,r),c(e,S,r),c(e,N,r),c(e,v,r),x(_,e,r),T=!0},p(e,[r]){const k={};r&1&&(k.path=e[0].path),t.$set(k);const B={};r&2&&(B.$$scope={dirty:r,ctx:e}),n.$set(B);const U={};r&2&&(U.$$scope={dirty:r,ctx:e}),m.$set(U);const F={};r&2&&(F.$$scope={dirty:r,ctx:e}),u.$set(F);const Z={};r&2&&(Z.$$scope={dirty:r,ctx:e}),_.$set(Z)},i(e){T||(h(t.$$.fragment,e),h(n.$$.fragment,e),h(m.$$.fragment,e),h(p.$$.fragment,e),h(u.$$.fragment,e),h(_.$$.fragment,e),T=!0)},o(e){L(t.$$.fragment,e),L(n.$$.fragment,e),L(m.$$.fragment,e),L(p.$$.fragment,e),L(u.$$.fragment,e),L(_.$$.fragment,e),T=!1},d(e){e&&(l(s),l(i),l(g),l(d),l(f),l($),l(o),l(A),l(S),l(N),l(v)),D(t,e),D(n,e),D(m,e),D(p,e),D(u,e),D(_,e)}}}function we(a,t,s){let{data:n}=t;return a.$$set=i=>{"data"in i&&s(0,n=i.data)},[n]}class ke extends me{constructor(t){super(),pe(this,t,we,ve,de,{data:0})}}export{ke as component};
