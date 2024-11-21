import{s as pe,a as C,f as u,l as r,c as v,g as p,A as h,h as At,m as f,d as m,i as $,z as s,B as ue}from"../chunks/scheduler.5f105fdc.js";import{S as $e,i as ge,b as w,d as y,m as k,a as b,t as E,e as j}from"../chunks/index.73e7b43c.js";import{T as he,S as le}from"../chunks/TableOfContents.314b5577.js";import{C as re}from"../chunks/Code.d0215f6e.js";import{j as fe}from"../chunks/json.4d993fc0.js";import{A as Tt}from"../chunks/A.42f697ed.js";import{T as de,B as ce}from"../chunks/Title.a431bb73.js";import{G as me}from"../chunks/GuideImage.961a36c3.js";function _e(g){let n;return{c(){n=r("party configuration schema")},l(a){n=f(a,"party configuration schema")},m(a,o){$(a,n,o)},d(a){a&&m(n)}}}function xe(g){let n;return{c(){n=r("https://docs.ioxio.dev/schemas/party-configuration")},l(a){n=f(a,"https://docs.ioxio.dev/schemas/party-configuration")},m(a,o){$(a,n,o)},d(a){a&&m(n)}}}function Ce(g){let n=`
{
  "jwks_uri": "https://ioxio.com/.well-known/jwks.json"
}
`,a;return{c(){a=r(n)},l(o){a=f(o,n)},m(o,_){$(o,a,_)},p:ue,d(o){o&&m(a)}}}function ve(g){let n;return{c(){n=r("https://ioxio.com/.well-known/jwks.json")},l(a){n=f(a,"https://ioxio.com/.well-known/jwks.json")},m(a,o){$(a,n,o)},d(a){a&&m(n)}}}function we(g){let n=`
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
    `,a;return{c(){a=r(n)},l(o){a=f(o,n)},m(o,_){$(o,a,_)},p:ue,d(o){o&&m(a)}}}function ye(g){let n,a,o,_,x,nt,G,Nt=`A group is needed both for data sources and for applications. You create a group in the
    developer portal. You have to input a unique name for the group and then input the party
    configuration domain where you hosted a party configuration you set up. In case you have an
    existing group without a party configuration you can find the group in your list of groups, edit
    it, add the party configuration domain and click the update button.`,ot,A,at,T,st,N,it,O,Ot=`<strong>1.</strong>
    Select a domain (it can also be a subdomain) on which you want to host your party configuration.
    <br/> <strong>Note:</strong> You will need to be able to create a file at
    <em>/.well-known/dataspace/party-configuration.json</em>
    on that domain and it needs to be accessible over <em>https://</em> with a valid certificate.`,lt,S,B,Bt="2.",$t,P,Pt="party-configuration.json",gt,M,ht,rt,d,V,Vt="3.",dt,H,Ht="jwks_uri",ct,z,zt="https://",_t,L,Lt="/.well-known/jwks.json",xt,Ct,vt,R,wt,ft,q,mt,i,U,Ut="4.",yt,W,Wt="jwks_uri",kt,J,Jt="kid",bt,Y,Yt="kty",Et,D,Dt="RSA",jt,X,Xt="use",St,K,Kt="sig",Mt,Q,Qt="alg",Rt,Z,Zt="RS256",qt,tt,te="n",It,et,ee="e",Ft,I,Gt,ut,F,pt;return n=new de({props:{title:g[0].guide.title}}),o=new ce({props:{path:g[0].path}}),x=new le({props:{title:"Introduction"}}),A=new me({props:{img:g[1].PAGE_FOR_CREATING_GROUPS}}),T=new me({props:{img:g[1].EDITING_A_GROUP}}),N=new le({props:{title:"Creating and hosting party configuration"}}),M=new Tt({props:{href:"/schemas/party-configuration/",$$slots:{default:[_e]},$$scope:{ctx:g}}}),R=new Tt({props:{href:"/schemas/party-configuration",$$slots:{default:[xe]},$$scope:{ctx:g}}}),q=new re({props:{lang:fe,$$slots:{default:[Ce]},$$scope:{ctx:g}}}),I=new Tt({props:{href:"https://ioxio.com/.well-known/jwks.json",$$slots:{default:[ve]},$$scope:{ctx:g}}}),F=new re({props:{lang:fe,$$slots:{default:[we]},$$scope:{ctx:g}}}),{c(){w(n.$$.fragment),a=C(),w(o.$$.fragment),_=C(),w(x.$$.fragment),nt=C(),G=u("p"),G.textContent=Nt,ot=C(),w(A.$$.fragment),at=C(),w(T.$$.fragment),st=C(),w(N.$$.fragment),it=C(),O=u("p"),O.innerHTML=Ot,lt=C(),S=u("p"),B=u("strong"),B.textContent=Bt,$t=r(`
    Create the `),P=u("em"),P.textContent=Pt,gt=r(` and host it on the desired domain. See
    `),w(M.$$.fragment),ht=r(`
    for more details.`),rt=C(),d=u("p"),V=u("strong"),V.textContent=Vt,dt=r(`
    Ensure the `),H=u("em"),H.textContent=Ht,ct=r(" points to some "),z=u("em"),z.textContent=zt,_t=r(` based domain and a location you
    can control. A suggestion is to point it to the `),L=u("em"),L.textContent=Lt,xt=r(` on the same
    domain as the party configuration.`),Ct=u("br"),vt=r(`Example from
    `),w(R.$$.fragment),wt=r(":"),ft=C(),w(q.$$.fragment),mt=C(),i=u("p"),U=u("strong"),U.textContent=Ut,yt=r(`
    Create the content for the `),W=u("em"),W.textContent=Wt,kt=r(` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),J=u("em"),J.textContent=Jt,bt=r(", the "),Y=u("em"),Y.textContent=Yt,Et=r(" is "),D=u("em"),D.textContent=Dt,jt=r(`, the
    `),X=u("em"),X.textContent=Xt,St=r(`
    is set to `),K=u("em"),K.textContent=Kt,Mt=r(", the "),Q=u("em"),Q.textContent=Qt,Rt=r(`
    is `),Z=u("em"),Z.textContent=Zt,qt=r(" and it has the "),tt=u("em"),tt.textContent=te,It=r(" and "),et=u("em"),et.textContent=ee,Ft=r(` parameters. Here is an example of
    what it should look like from
    `),w(I.$$.fragment),Gt=r(":"),ut=C(),w(F.$$.fragment)},l(t){y(n.$$.fragment,t),a=v(t),y(o.$$.fragment,t),_=v(t),y(x.$$.fragment,t),nt=v(t),G=p(t,"P",{"data-svelte-h":!0}),h(G)!=="svelte-15c39j3"&&(G.textContent=Nt),ot=v(t),y(A.$$.fragment,t),at=v(t),y(T.$$.fragment,t),st=v(t),y(N.$$.fragment,t),it=v(t),O=p(t,"P",{"data-svelte-h":!0}),h(O)!=="svelte-gg2a3h"&&(O.innerHTML=Ot),lt=v(t),S=p(t,"P",{});var e=At(S);B=p(e,"STRONG",{"data-svelte-h":!0}),h(B)!=="svelte-83a0bo"&&(B.textContent=Bt),$t=f(e,`
    Create the `),P=p(e,"EM",{"data-svelte-h":!0}),h(P)!=="svelte-6rg2kf"&&(P.textContent=Pt),gt=f(e,` and host it on the desired domain. See
    `),y(M.$$.fragment,e),ht=f(e,`
    for more details.`),e.forEach(m),rt=v(t),d=p(t,"P",{});var c=At(d);V=p(c,"STRONG",{"data-svelte-h":!0}),h(V)!=="svelte-hj6ifl"&&(V.textContent=Vt),dt=f(c,`
    Ensure the `),H=p(c,"EM",{"data-svelte-h":!0}),h(H)!=="svelte-1dggqs6"&&(H.textContent=Ht),ct=f(c," points to some "),z=p(c,"EM",{"data-svelte-h":!0}),h(z)!=="svelte-aecpr5"&&(z.textContent=zt),_t=f(c,` based domain and a location you
    can control. A suggestion is to point it to the `),L=p(c,"EM",{"data-svelte-h":!0}),h(L)!=="svelte-2pa6nl"&&(L.textContent=Lt),xt=f(c,` on the same
    domain as the party configuration.`),Ct=p(c,"BR",{}),vt=f(c,`Example from
    `),y(R.$$.fragment,c),wt=f(c,":"),c.forEach(m),ft=v(t),y(q.$$.fragment,t),mt=v(t),i=p(t,"P",{});var l=At(i);U=p(l,"STRONG",{"data-svelte-h":!0}),h(U)!=="svelte-1nm293q"&&(U.textContent=Ut),yt=f(l,`
    Create the content for the `),W=p(l,"EM",{"data-svelte-h":!0}),h(W)!=="svelte-1dggqs6"&&(W.textContent=Wt),kt=f(l,` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),J=p(l,"EM",{"data-svelte-h":!0}),h(J)!=="svelte-6cm7u2"&&(J.textContent=Jt),bt=f(l,", the "),Y=p(l,"EM",{"data-svelte-h":!0}),h(Y)!=="svelte-a3k7k4"&&(Y.textContent=Yt),Et=f(l," is "),D=p(l,"EM",{"data-svelte-h":!0}),h(D)!=="svelte-twihgw"&&(D.textContent=Dt),jt=f(l,`, the
    `),X=p(l,"EM",{"data-svelte-h":!0}),h(X)!=="svelte-1ltck1j"&&(X.textContent=Xt),St=f(l,`
    is set to `),K=p(l,"EM",{"data-svelte-h":!0}),h(K)!=="svelte-jgnovp"&&(K.textContent=Kt),Mt=f(l,", the "),Q=p(l,"EM",{"data-svelte-h":!0}),h(Q)!=="svelte-ohz2o8"&&(Q.textContent=Qt),Rt=f(l,`
    is `),Z=p(l,"EM",{"data-svelte-h":!0}),h(Z)!=="svelte-3a3k9q"&&(Z.textContent=Zt),qt=f(l," and it has the "),tt=p(l,"EM",{"data-svelte-h":!0}),h(tt)!=="svelte-vzi530"&&(tt.textContent=te),It=f(l," and "),et=p(l,"EM",{"data-svelte-h":!0}),h(et)!=="svelte-vvh47f"&&(et.textContent=ee),Ft=f(l,` parameters. Here is an example of
    what it should look like from
    `),y(I.$$.fragment,l),Gt=f(l,":"),l.forEach(m),ut=v(t),y(F.$$.fragment,t)},m(t,e){k(n,t,e),$(t,a,e),k(o,t,e),$(t,_,e),k(x,t,e),$(t,nt,e),$(t,G,e),$(t,ot,e),k(A,t,e),$(t,at,e),k(T,t,e),$(t,st,e),k(N,t,e),$(t,it,e),$(t,O,e),$(t,lt,e),$(t,S,e),s(S,B),s(S,$t),s(S,P),s(S,gt),k(M,S,null),s(S,ht),$(t,rt,e),$(t,d,e),s(d,V),s(d,dt),s(d,H),s(d,ct),s(d,z),s(d,_t),s(d,L),s(d,xt),s(d,Ct),s(d,vt),k(R,d,null),s(d,wt),$(t,ft,e),k(q,t,e),$(t,mt,e),$(t,i,e),s(i,U),s(i,yt),s(i,W),s(i,kt),s(i,J),s(i,bt),s(i,Y),s(i,Et),s(i,D),s(i,jt),s(i,X),s(i,St),s(i,K),s(i,Mt),s(i,Q),s(i,Rt),s(i,Z),s(i,qt),s(i,tt),s(i,It),s(i,et),s(i,Ft),k(I,i,null),s(i,Gt),$(t,ut,e),k(F,t,e),pt=!0},p(t,e){const c={};e&1&&(c.title=t[0].guide.title),n.$set(c);const l={};e&1&&(l.path=t[0].path),o.$set(l);const ne={};e&4&&(ne.$$scope={dirty:e,ctx:t}),M.$set(ne);const oe={};e&4&&(oe.$$scope={dirty:e,ctx:t}),R.$set(oe);const ae={};e&4&&(ae.$$scope={dirty:e,ctx:t}),q.$set(ae);const se={};e&4&&(se.$$scope={dirty:e,ctx:t}),I.$set(se);const ie={};e&4&&(ie.$$scope={dirty:e,ctx:t}),F.$set(ie)},i(t){pt||(b(n.$$.fragment,t),b(o.$$.fragment,t),b(x.$$.fragment,t),b(A.$$.fragment,t),b(T.$$.fragment,t),b(N.$$.fragment,t),b(M.$$.fragment,t),b(R.$$.fragment,t),b(q.$$.fragment,t),b(I.$$.fragment,t),b(F.$$.fragment,t),pt=!0)},o(t){E(n.$$.fragment,t),E(o.$$.fragment,t),E(x.$$.fragment,t),E(A.$$.fragment,t),E(T.$$.fragment,t),E(N.$$.fragment,t),E(M.$$.fragment,t),E(R.$$.fragment,t),E(q.$$.fragment,t),E(I.$$.fragment,t),E(F.$$.fragment,t),pt=!1},d(t){t&&(m(a),m(_),m(nt),m(G),m(ot),m(at),m(st),m(it),m(O),m(lt),m(S),m(rt),m(d),m(ft),m(mt),m(i),m(ut)),j(n,t),j(o,t),j(x,t),j(A,t),j(T,t),j(N,t),j(M),j(R),j(q,t),j(I),j(F,t)}}}function ke(g){let n,a;return n=new he({props:{$$slots:{default:[ye]},$$scope:{ctx:g}}}),{c(){w(n.$$.fragment)},l(o){y(n.$$.fragment,o)},m(o,_){k(n,o,_),a=!0},p(o,[_]){const x={};_&5&&(x.$$scope={dirty:_,ctx:o}),n.$set(x)},i(o){a||(b(n.$$.fragment,o),a=!0)},o(o){E(n.$$.fragment,o),a=!1},d(o){j(n,o)}}}function be(g,n,a){let{data:o}=n;const _=o.images;return g.$$set=x=>{"data"in x&&a(0,o=x.data)},[o,_]}class Ge extends $e{constructor(n){super(),ge(this,n,be,ke,pe,{data:0})}}export{Ge as component};
