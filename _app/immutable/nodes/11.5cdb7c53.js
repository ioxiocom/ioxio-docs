import{s as ge,a as C,f as u,l as f,c as v,g as p,z as h,h as Nt,m,d as r,i as $,y as s,B as he}from"../chunks/scheduler.2e48bd10.js";import{S as de,i as ce,b as w,d as y,m as b,a as k,t as E,e as j}from"../chunks/index.ed958696.js";import{T as _e,S as me}from"../chunks/TableOfContents.c7a57465.js";import{C as ue}from"../chunks/Code.23820852.js";import{j as pe}from"../chunks/json.4d993fc0.js";import{A as Ot}from"../chunks/A.2ad5f04f.js";import{T as xe,B as Ce}from"../chunks/Title.1ea49443.js";import{G as $e}from"../chunks/GuideImage.920a4a56.js";function ve(g){let n;return{c(){n=f("party configuration schema")},l(a){n=m(a,"party configuration schema")},m(a,o){$(a,n,o)},d(a){a&&r(n)}}}function we(g){let n;return{c(){n=f("https://docs.ioxio.dev/schemas/party-configuration")},l(a){n=m(a,"https://docs.ioxio.dev/schemas/party-configuration")},m(a,o){$(a,n,o)},d(a){a&&r(n)}}}function ye(g){let n=`
{
  "jwks_uri": "https://ioxio.com/.well-known/jwks.json"
}
`,a;return{c(){a=f(n)},l(o){a=m(o,n)},m(o,_){$(o,a,_)},p:he,d(o){o&&r(a)}}}function be(g){let n;return{c(){n=f("https://ioxio.com/.well-known/jwks.json")},l(a){n=m(a,"https://ioxio.com/.well-known/jwks.json")},m(a,o){$(a,n,o)},d(a){a&&r(n)}}}function ke(g){let n=`
{
  "keys": [
    {
      "kid": "302feac8851574f3ef74ec1c62a7489f",
      "kty": "RSA",
      "use": "sig",
      "alg": "RS256",
      "n": "wO_R-_1EUodohCn9mIf3lxH70IFDLIsSbSLg3rNbKJIexFlxE8X72_gFGwMoZJqbeNfEDcPI9UiSXM6H9z_bpfVF7jxtvvyCqSmy-R5miadGoiiYUZpRvK-nxyjOiXlobsaPOgXiC3tCwxZ4EfXznzu5WZm2ekSeIf9nj-NKuPNuUpfCLH6Jbfq7PzWq5BMnmjEwz_VXqqk58mkqgFwr_0BRh2I2i5ufHTixyUGV7u7NK1WkkeIF4VbQILpO0t5-yxO6by2r3A_pubjSUmy8F5FSqqWkxNOfv5svFLnbCTvFuXVonjMqs6MD4BFVjRRhSI9NDWfjTisy-EKNpmWtbM0WAqk2hwey-dE8Fd0B7FmR9GmWt8oR5-LN3QgoRa8_z-h0dYhSWi6vV7dBJxHtyFFVJSTHw3xwCpg6PdeuB8OxqlSuLxry5tMVGNv9humih_92tPbAOq3luAuUuVKmxEgZ-_bk3y9Gxo2YutFfTI8QcaBEyqiao040NIJiNJ0z0OiBodalGny-sHL51Y7iB_z8TYIs8aie_WDfpXRg5IP5UbZ3Onl84IIrH3RbsM2p889-qEpMRXJJY5pQVjur3LIlx2TQ3ir7nBqGYC_5JAeq0sDFonvFGGTfWA_e_QDLKth9Dz2-HPVCUqBsdyF2Es7Ot1ijBV9rVKiaGUtx67M",
      "e": "AQAB"
    }
  ]
}
    `,a;return{c(){a=f(n)},l(o){a=m(o,n)},m(o,_){$(o,a,_)},p:he,d(o){o&&r(a)}}}function Ee(g){let n,a,o,_,x,ot,G,Pt=`A group is needed both for data sources and for applications. You create a group in the
    developer portal. You have to input a unique name for the group and then input the party
    configuration domain where you hosted a party configuration you set up. In case you have an
    existing group without a party configuration you can find the group in your list of groups, edit
    it, add the party configuration domain and click the update button.`,at,T,Bt=`Note that some dataspaces require groups to be created by staff, so if the page has a notice
    saying so, please follow the instructions written on it.`,st,A,it,N,lt,O,rt,P,Vt=`<strong>1.</strong>
    Select a domain (it can also be a subdomain) on which you want to host your party configuration.
    <br/> <strong>Note:</strong> You will need to be able to create a file at
    <em>/.well-known/dataspace/party-configuration.json</em>
    on that domain and it needs to be accessible over <em>https://</em> with a valid certificate.`,ft,S,B,Ht="2.",gt,V,zt="party-configuration.json",dt,M,ct,mt,d,H,Lt="3.",_t,z,Ut="jwks_uri",xt,L,Wt="https://",Ct,U,Jt="/.well-known/jwks.json",vt,wt,yt,R,bt,ut,q,pt,i,W,Yt="4.",kt,J,Dt="jwks_uri",Et,Y,Xt="kid",jt,D,Kt="kty",St,X,Qt="RSA",Mt,K,Zt="use",Rt,Q,te="sig",qt,Z,ee="alg",It,tt,ne="RS256",Ft,et,oe="n",Gt,nt,ae="e",Tt,I,At,$t,F,ht;return n=new xe({props:{title:g[0].guide.title}}),o=new Ce({props:{path:g[0].path}}),x=new me({props:{title:"Introduction"}}),A=new $e({props:{img:g[1].PAGE_FOR_CREATING_GROUPS}}),N=new $e({props:{img:g[1].EDITING_A_GROUP}}),O=new me({props:{title:"Creating and hosting party configuration"}}),M=new Ot({props:{href:"/schemas/party-configuration/",$$slots:{default:[ve]},$$scope:{ctx:g}}}),R=new Ot({props:{href:"/schemas/party-configuration",$$slots:{default:[we]},$$scope:{ctx:g}}}),q=new ue({props:{lang:pe,$$slots:{default:[ye]},$$scope:{ctx:g}}}),I=new Ot({props:{href:"https://ioxio.com/.well-known/jwks.json",$$slots:{default:[be]},$$scope:{ctx:g}}}),F=new ue({props:{lang:pe,$$slots:{default:[ke]},$$scope:{ctx:g}}}),{c(){w(n.$$.fragment),a=C(),w(o.$$.fragment),_=C(),w(x.$$.fragment),ot=C(),G=u("p"),G.textContent=Pt,at=C(),T=u("p"),T.textContent=Bt,st=C(),w(A.$$.fragment),it=C(),w(N.$$.fragment),lt=C(),w(O.$$.fragment),rt=C(),P=u("p"),P.innerHTML=Vt,ft=C(),S=u("p"),B=u("strong"),B.textContent=Ht,gt=f(`
    Create the `),V=u("em"),V.textContent=zt,dt=f(` and host it on the desired domain. See
    `),w(M.$$.fragment),ct=f(`
    for more details.`),mt=C(),d=u("p"),H=u("strong"),H.textContent=Lt,_t=f(`
    Ensure the `),z=u("em"),z.textContent=Ut,xt=f(" points to some "),L=u("em"),L.textContent=Wt,Ct=f(` based domain and a location you
    can control. A suggestion is to point it to the `),U=u("em"),U.textContent=Jt,vt=f(` on the same
    domain as the party configuration.`),wt=u("br"),yt=f(`Example from
    `),w(R.$$.fragment),bt=f(":"),ut=C(),w(q.$$.fragment),pt=C(),i=u("p"),W=u("strong"),W.textContent=Yt,kt=f(`
    Create the content for the `),J=u("em"),J.textContent=Dt,Et=f(` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),Y=u("em"),Y.textContent=Xt,jt=f(", the "),D=u("em"),D.textContent=Kt,St=f(" is "),X=u("em"),X.textContent=Qt,Mt=f(`, the
    `),K=u("em"),K.textContent=Zt,Rt=f(`
    is set to `),Q=u("em"),Q.textContent=te,qt=f(", the "),Z=u("em"),Z.textContent=ee,It=f(`
    is `),tt=u("em"),tt.textContent=ne,Ft=f(" and it has the "),et=u("em"),et.textContent=oe,Gt=f(" and "),nt=u("em"),nt.textContent=ae,Tt=f(` parameters. Here is an example of
    what it should look like from
    `),w(I.$$.fragment),At=f(":"),$t=C(),w(F.$$.fragment)},l(t){y(n.$$.fragment,t),a=v(t),y(o.$$.fragment,t),_=v(t),y(x.$$.fragment,t),ot=v(t),G=p(t,"P",{"data-svelte-h":!0}),h(G)!=="svelte-15c39j3"&&(G.textContent=Pt),at=v(t),T=p(t,"P",{"data-svelte-h":!0}),h(T)!=="svelte-125vtkf"&&(T.textContent=Bt),st=v(t),y(A.$$.fragment,t),it=v(t),y(N.$$.fragment,t),lt=v(t),y(O.$$.fragment,t),rt=v(t),P=p(t,"P",{"data-svelte-h":!0}),h(P)!=="svelte-gg2a3h"&&(P.innerHTML=Vt),ft=v(t),S=p(t,"P",{});var e=Nt(S);B=p(e,"STRONG",{"data-svelte-h":!0}),h(B)!=="svelte-83a0bo"&&(B.textContent=Ht),gt=m(e,`
    Create the `),V=p(e,"EM",{"data-svelte-h":!0}),h(V)!=="svelte-6rg2kf"&&(V.textContent=zt),dt=m(e,` and host it on the desired domain. See
    `),y(M.$$.fragment,e),ct=m(e,`
    for more details.`),e.forEach(r),mt=v(t),d=p(t,"P",{});var c=Nt(d);H=p(c,"STRONG",{"data-svelte-h":!0}),h(H)!=="svelte-hj6ifl"&&(H.textContent=Lt),_t=m(c,`
    Ensure the `),z=p(c,"EM",{"data-svelte-h":!0}),h(z)!=="svelte-1dggqs6"&&(z.textContent=Ut),xt=m(c," points to some "),L=p(c,"EM",{"data-svelte-h":!0}),h(L)!=="svelte-aecpr5"&&(L.textContent=Wt),Ct=m(c,` based domain and a location you
    can control. A suggestion is to point it to the `),U=p(c,"EM",{"data-svelte-h":!0}),h(U)!=="svelte-2pa6nl"&&(U.textContent=Jt),vt=m(c,` on the same
    domain as the party configuration.`),wt=p(c,"BR",{}),yt=m(c,`Example from
    `),y(R.$$.fragment,c),bt=m(c,":"),c.forEach(r),ut=v(t),y(q.$$.fragment,t),pt=v(t),i=p(t,"P",{});var l=Nt(i);W=p(l,"STRONG",{"data-svelte-h":!0}),h(W)!=="svelte-1nm293q"&&(W.textContent=Yt),kt=m(l,`
    Create the content for the `),J=p(l,"EM",{"data-svelte-h":!0}),h(J)!=="svelte-1dggqs6"&&(J.textContent=Dt),Et=m(l,` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),Y=p(l,"EM",{"data-svelte-h":!0}),h(Y)!=="svelte-6cm7u2"&&(Y.textContent=Xt),jt=m(l,", the "),D=p(l,"EM",{"data-svelte-h":!0}),h(D)!=="svelte-a3k7k4"&&(D.textContent=Kt),St=m(l," is "),X=p(l,"EM",{"data-svelte-h":!0}),h(X)!=="svelte-twihgw"&&(X.textContent=Qt),Mt=m(l,`, the
    `),K=p(l,"EM",{"data-svelte-h":!0}),h(K)!=="svelte-1ltck1j"&&(K.textContent=Zt),Rt=m(l,`
    is set to `),Q=p(l,"EM",{"data-svelte-h":!0}),h(Q)!=="svelte-jgnovp"&&(Q.textContent=te),qt=m(l,", the "),Z=p(l,"EM",{"data-svelte-h":!0}),h(Z)!=="svelte-ohz2o8"&&(Z.textContent=ee),It=m(l,`
    is `),tt=p(l,"EM",{"data-svelte-h":!0}),h(tt)!=="svelte-3a3k9q"&&(tt.textContent=ne),Ft=m(l," and it has the "),et=p(l,"EM",{"data-svelte-h":!0}),h(et)!=="svelte-vzi530"&&(et.textContent=oe),Gt=m(l," and "),nt=p(l,"EM",{"data-svelte-h":!0}),h(nt)!=="svelte-vvh47f"&&(nt.textContent=ae),Tt=m(l,` parameters. Here is an example of
    what it should look like from
    `),y(I.$$.fragment,l),At=m(l,":"),l.forEach(r),$t=v(t),y(F.$$.fragment,t)},m(t,e){b(n,t,e),$(t,a,e),b(o,t,e),$(t,_,e),b(x,t,e),$(t,ot,e),$(t,G,e),$(t,at,e),$(t,T,e),$(t,st,e),b(A,t,e),$(t,it,e),b(N,t,e),$(t,lt,e),b(O,t,e),$(t,rt,e),$(t,P,e),$(t,ft,e),$(t,S,e),s(S,B),s(S,gt),s(S,V),s(S,dt),b(M,S,null),s(S,ct),$(t,mt,e),$(t,d,e),s(d,H),s(d,_t),s(d,z),s(d,xt),s(d,L),s(d,Ct),s(d,U),s(d,vt),s(d,wt),s(d,yt),b(R,d,null),s(d,bt),$(t,ut,e),b(q,t,e),$(t,pt,e),$(t,i,e),s(i,W),s(i,kt),s(i,J),s(i,Et),s(i,Y),s(i,jt),s(i,D),s(i,St),s(i,X),s(i,Mt),s(i,K),s(i,Rt),s(i,Q),s(i,qt),s(i,Z),s(i,It),s(i,tt),s(i,Ft),s(i,et),s(i,Gt),s(i,nt),s(i,Tt),b(I,i,null),s(i,At),$(t,$t,e),b(F,t,e),ht=!0},p(t,e){const c={};e&1&&(c.title=t[0].guide.title),n.$set(c);const l={};e&1&&(l.path=t[0].path),o.$set(l);const se={};e&4&&(se.$$scope={dirty:e,ctx:t}),M.$set(se);const ie={};e&4&&(ie.$$scope={dirty:e,ctx:t}),R.$set(ie);const le={};e&4&&(le.$$scope={dirty:e,ctx:t}),q.$set(le);const re={};e&4&&(re.$$scope={dirty:e,ctx:t}),I.$set(re);const fe={};e&4&&(fe.$$scope={dirty:e,ctx:t}),F.$set(fe)},i(t){ht||(k(n.$$.fragment,t),k(o.$$.fragment,t),k(x.$$.fragment,t),k(A.$$.fragment,t),k(N.$$.fragment,t),k(O.$$.fragment,t),k(M.$$.fragment,t),k(R.$$.fragment,t),k(q.$$.fragment,t),k(I.$$.fragment,t),k(F.$$.fragment,t),ht=!0)},o(t){E(n.$$.fragment,t),E(o.$$.fragment,t),E(x.$$.fragment,t),E(A.$$.fragment,t),E(N.$$.fragment,t),E(O.$$.fragment,t),E(M.$$.fragment,t),E(R.$$.fragment,t),E(q.$$.fragment,t),E(I.$$.fragment,t),E(F.$$.fragment,t),ht=!1},d(t){t&&(r(a),r(_),r(ot),r(G),r(at),r(T),r(st),r(it),r(lt),r(rt),r(P),r(ft),r(S),r(mt),r(d),r(ut),r(pt),r(i),r($t)),j(n,t),j(o,t),j(x,t),j(A,t),j(N,t),j(O,t),j(M),j(R),j(q,t),j(I),j(F,t)}}}function je(g){let n,a;return n=new _e({props:{$$slots:{default:[Ee]},$$scope:{ctx:g}}}),{c(){w(n.$$.fragment)},l(o){y(n.$$.fragment,o)},m(o,_){b(n,o,_),a=!0},p(o,[_]){const x={};_&5&&(x.$$scope={dirty:_,ctx:o}),n.$set(x)},i(o){a||(k(n.$$.fragment,o),a=!0)},o(o){E(n.$$.fragment,o),a=!1},d(o){j(n,o)}}}function Se(g,n,a){let{data:o}=n;const _=o.images;return g.$$set=x=>{"data"in x&&a(0,o=x.data)},[o,_]}class Ne extends de{constructor(n){super(),ce(this,n,Se,je,ge,{data:0})}}export{Ne as component};
