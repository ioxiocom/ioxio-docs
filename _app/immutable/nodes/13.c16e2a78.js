import{s as me,a as C,f as p,l as r,c as v,g as $,z as h,h as Ot,m as f,d as m,i as u,y as s,B as fe}from"../chunks/scheduler.2e48bd10.js";import{S as pe,i as $e,b as k,d as y,m as b,a as E,t as j,e as M}from"../chunks/index.ed958696.js";import{T as ue,S as le}from"../chunks/TableOfContents.c7a57465.js";import{C as ie}from"../chunks/Code.23820852.js";import{j as re}from"../chunks/json.4d993fc0.js";import{T as he,B as ce}from"../chunks/Title.c4343f87.js";import{A as Pt}from"../chunks/A.2ad5f04f.js";function de(c){let n;return{c(){n=r("party configuration schema")},l(a){n=f(a,"party configuration schema")},m(a,o){u(a,n,o)},d(a){a&&m(n)}}}function ge(c){let n;return{c(){n=r("https://docs.ioxio.dev/schemas/party-configuration")},l(a){n=f(a,"https://docs.ioxio.dev/schemas/party-configuration")},m(a,o){u(a,n,o)},d(a){a&&m(n)}}}function _e(c){let n=`
{
  "jwks_uri": "https://ioxio.com/.well-known/jwks.json"
}
`,a;return{c(){a=r(n)},l(o){a=f(o,n)},m(o,g){u(o,a,g)},p:fe,d(o){o&&m(a)}}}function xe(c){let n;return{c(){n=r("https://ioxio.com/.well-known/jwks.json")},l(a){n=f(a,"https://ioxio.com/.well-known/jwks.json")},m(a,o){u(a,n,o)},d(a){a&&m(n)}}}function Ce(c){let n=`
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
    `,a;return{c(){a=r(n)},l(o){a=f(o,n)},m(o,g){u(o,a,g)},p:fe,d(o){o&&m(a)}}}function ve(c){let n,a,o,g,w,et,P,qt=`On the IOXIO data sharing services groups can optionally have a party configuration domain; a
    domain on which a party (the group) publishes standardized configuration files. They are used
    with HTTP Message Signatures or with the consent protocol prototype, which is available only on
    some data sharing services.`,nt,q,zt="This guide explains how to set up the necessary configuration files.",ot,z,at,B,Bt=`<strong>1.</strong>
    Select a domain (it can also be a subdomain) on which you want to host your party configuration.
    <br/> <strong>Note:</strong> You will need to be able to create a file at
    <em>/.well-known/dataspace/party-configuration.json</em> on that domain and it needs to be
    accessible over <em>https://</em> with a valid certificate.`,st,x,H,Ht="2.",pt,N,Nt="party-configuration.json",$t,S,ut,lt,d,G,Gt="3.",ht,I,It="jwks_uri",ct,F,Ft="https://",dt,L,Lt="/.well-known/jwks.json",gt,_t,xt,T,Ct,it,R,rt,l,Q,Qt="4.",vt,X,Xt="jwks_uri",wt,Y,Yt="kid",kt,D,Dt="kty",yt,J,Jt="RSA",bt,K,Kt="use",Et,U,Ut="sig",jt,V,Vt="alg",Mt,W,Wt="RS256",St,Z,Zt="n",Tt,tt,te="e",Rt,A,At,ft,O,mt;return n=new he({props:{title:c[0].guide.title}}),o=new ce({props:{path:c[0].path}}),w=new le({props:{title:"Introduction"}}),z=new le({props:{title:"Creating and hosting party configuration"}}),S=new Pt({props:{href:"/schemas/party-configuration/",$$slots:{default:[de]},$$scope:{ctx:c}}}),T=new Pt({props:{href:"/schemas/party-configuration",$$slots:{default:[ge]},$$scope:{ctx:c}}}),R=new ie({props:{lang:re,$$slots:{default:[_e]},$$scope:{ctx:c}}}),A=new Pt({props:{href:"https://ioxio.com/.well-known/jwks.json",$$slots:{default:[xe]},$$scope:{ctx:c}}}),O=new ie({props:{lang:re,$$slots:{default:[Ce]},$$scope:{ctx:c}}}),{c(){k(n.$$.fragment),a=C(),k(o.$$.fragment),g=C(),k(w.$$.fragment),et=C(),P=p("p"),P.textContent=qt,nt=C(),q=p("p"),q.textContent=zt,ot=C(),k(z.$$.fragment),at=C(),B=p("p"),B.innerHTML=Bt,st=C(),x=p("p"),H=p("strong"),H.textContent=Ht,pt=r(`
    Create the `),N=p("em"),N.textContent=Nt,$t=r(` and host it on the desired domain. See
    `),k(S.$$.fragment),ut=r(" for more details."),lt=C(),d=p("p"),G=p("strong"),G.textContent=Gt,ht=r(`
    Ensure the `),I=p("em"),I.textContent=It,ct=r(" points to some "),F=p("em"),F.textContent=Ft,dt=r(` based domain and a location you
    can control. A suggestion is to point it to the `),L=p("em"),L.textContent=Lt,gt=r(` on the same
    domain as the party configuration.`),_t=p("br"),xt=r(`Example from
    `),k(T.$$.fragment),Ct=r(":"),it=C(),k(R.$$.fragment),rt=C(),l=p("p"),Q=p("strong"),Q.textContent=Qt,vt=r(`
    Create the content for the `),X=p("em"),X.textContent=Xt,wt=r(` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),Y=p("em"),Y.textContent=Yt,kt=r(", the "),D=p("em"),D.textContent=Dt,yt=r(" is "),J=p("em"),J.textContent=Jt,bt=r(`, the
    `),K=p("em"),K.textContent=Kt,Et=r(" is set to "),U=p("em"),U.textContent=Ut,jt=r(", the "),V=p("em"),V.textContent=Vt,Mt=r(" is "),W=p("em"),W.textContent=Wt,St=r(` and it has the
    `),Z=p("em"),Z.textContent=Zt,Tt=r(" and "),tt=p("em"),tt.textContent=te,Rt=r(` parameters. Here is an example of what it should look like from
    `),k(A.$$.fragment),At=r(":"),ft=C(),k(O.$$.fragment)},l(t){y(n.$$.fragment,t),a=v(t),y(o.$$.fragment,t),g=v(t),y(w.$$.fragment,t),et=v(t),P=$(t,"P",{"data-svelte-h":!0}),h(P)!=="svelte-zw8alp"&&(P.textContent=qt),nt=v(t),q=$(t,"P",{"data-svelte-h":!0}),h(q)!=="svelte-fmptzr"&&(q.textContent=zt),ot=v(t),y(z.$$.fragment,t),at=v(t),B=$(t,"P",{"data-svelte-h":!0}),h(B)!=="svelte-ib6qjx"&&(B.innerHTML=Bt),st=v(t),x=$(t,"P",{});var e=Ot(x);H=$(e,"STRONG",{"data-svelte-h":!0}),h(H)!=="svelte-83a0bo"&&(H.textContent=Ht),pt=f(e,`
    Create the `),N=$(e,"EM",{"data-svelte-h":!0}),h(N)!=="svelte-6rg2kf"&&(N.textContent=Nt),$t=f(e,` and host it on the desired domain. See
    `),y(S.$$.fragment,e),ut=f(e," for more details."),e.forEach(m),lt=v(t),d=$(t,"P",{});var _=Ot(d);G=$(_,"STRONG",{"data-svelte-h":!0}),h(G)!=="svelte-hj6ifl"&&(G.textContent=Gt),ht=f(_,`
    Ensure the `),I=$(_,"EM",{"data-svelte-h":!0}),h(I)!=="svelte-1dggqs6"&&(I.textContent=It),ct=f(_," points to some "),F=$(_,"EM",{"data-svelte-h":!0}),h(F)!=="svelte-aecpr5"&&(F.textContent=Ft),dt=f(_,` based domain and a location you
    can control. A suggestion is to point it to the `),L=$(_,"EM",{"data-svelte-h":!0}),h(L)!=="svelte-2pa6nl"&&(L.textContent=Lt),gt=f(_,` on the same
    domain as the party configuration.`),_t=$(_,"BR",{}),xt=f(_,`Example from
    `),y(T.$$.fragment,_),Ct=f(_,":"),_.forEach(m),it=v(t),y(R.$$.fragment,t),rt=v(t),l=$(t,"P",{});var i=Ot(l);Q=$(i,"STRONG",{"data-svelte-h":!0}),h(Q)!=="svelte-1nm293q"&&(Q.textContent=Qt),vt=f(i,`
    Create the content for the `),X=$(i,"EM",{"data-svelte-h":!0}),h(X)!=="svelte-1dggqs6"&&(X.textContent=Xt),wt=f(i,` and host it in the location you specified in the
    party configuration. For this, you will need to generate an RSA public/private keypair. Ensure
    there is at least one key and that it has a `),Y=$(i,"EM",{"data-svelte-h":!0}),h(Y)!=="svelte-6cm7u2"&&(Y.textContent=Yt),kt=f(i,", the "),D=$(i,"EM",{"data-svelte-h":!0}),h(D)!=="svelte-a3k7k4"&&(D.textContent=Dt),yt=f(i," is "),J=$(i,"EM",{"data-svelte-h":!0}),h(J)!=="svelte-twihgw"&&(J.textContent=Jt),bt=f(i,`, the
    `),K=$(i,"EM",{"data-svelte-h":!0}),h(K)!=="svelte-1ltck1j"&&(K.textContent=Kt),Et=f(i," is set to "),U=$(i,"EM",{"data-svelte-h":!0}),h(U)!=="svelte-jgnovp"&&(U.textContent=Ut),jt=f(i,", the "),V=$(i,"EM",{"data-svelte-h":!0}),h(V)!=="svelte-ohz2o8"&&(V.textContent=Vt),Mt=f(i," is "),W=$(i,"EM",{"data-svelte-h":!0}),h(W)!=="svelte-3a3k9q"&&(W.textContent=Wt),St=f(i,` and it has the
    `),Z=$(i,"EM",{"data-svelte-h":!0}),h(Z)!=="svelte-vzi530"&&(Z.textContent=Zt),Tt=f(i," and "),tt=$(i,"EM",{"data-svelte-h":!0}),h(tt)!=="svelte-vvh47f"&&(tt.textContent=te),Rt=f(i,` parameters. Here is an example of what it should look like from
    `),y(A.$$.fragment,i),At=f(i,":"),i.forEach(m),ft=v(t),y(O.$$.fragment,t)},m(t,e){b(n,t,e),u(t,a,e),b(o,t,e),u(t,g,e),b(w,t,e),u(t,et,e),u(t,P,e),u(t,nt,e),u(t,q,e),u(t,ot,e),b(z,t,e),u(t,at,e),u(t,B,e),u(t,st,e),u(t,x,e),s(x,H),s(x,pt),s(x,N),s(x,$t),b(S,x,null),s(x,ut),u(t,lt,e),u(t,d,e),s(d,G),s(d,ht),s(d,I),s(d,ct),s(d,F),s(d,dt),s(d,L),s(d,gt),s(d,_t),s(d,xt),b(T,d,null),s(d,Ct),u(t,it,e),b(R,t,e),u(t,rt,e),u(t,l,e),s(l,Q),s(l,vt),s(l,X),s(l,wt),s(l,Y),s(l,kt),s(l,D),s(l,yt),s(l,J),s(l,bt),s(l,K),s(l,Et),s(l,U),s(l,jt),s(l,V),s(l,Mt),s(l,W),s(l,St),s(l,Z),s(l,Tt),s(l,tt),s(l,Rt),b(A,l,null),s(l,At),u(t,ft,e),b(O,t,e),mt=!0},p(t,e){const _={};e&1&&(_.title=t[0].guide.title),n.$set(_);const i={};e&1&&(i.path=t[0].path),o.$set(i);const ee={};e&2&&(ee.$$scope={dirty:e,ctx:t}),S.$set(ee);const ne={};e&2&&(ne.$$scope={dirty:e,ctx:t}),T.$set(ne);const oe={};e&2&&(oe.$$scope={dirty:e,ctx:t}),R.$set(oe);const ae={};e&2&&(ae.$$scope={dirty:e,ctx:t}),A.$set(ae);const se={};e&2&&(se.$$scope={dirty:e,ctx:t}),O.$set(se)},i(t){mt||(E(n.$$.fragment,t),E(o.$$.fragment,t),E(w.$$.fragment,t),E(z.$$.fragment,t),E(S.$$.fragment,t),E(T.$$.fragment,t),E(R.$$.fragment,t),E(A.$$.fragment,t),E(O.$$.fragment,t),mt=!0)},o(t){j(n.$$.fragment,t),j(o.$$.fragment,t),j(w.$$.fragment,t),j(z.$$.fragment,t),j(S.$$.fragment,t),j(T.$$.fragment,t),j(R.$$.fragment,t),j(A.$$.fragment,t),j(O.$$.fragment,t),mt=!1},d(t){t&&(m(a),m(g),m(et),m(P),m(nt),m(q),m(ot),m(at),m(B),m(st),m(x),m(lt),m(d),m(it),m(rt),m(l),m(ft)),M(n,t),M(o,t),M(w,t),M(z,t),M(S),M(T),M(R,t),M(A),M(O,t)}}}function we(c){let n,a;return n=new ue({props:{$$slots:{default:[ve]},$$scope:{ctx:c}}}),{c(){k(n.$$.fragment)},l(o){y(n.$$.fragment,o)},m(o,g){b(n,o,g),a=!0},p(o,[g]){const w={};g&3&&(w.$$scope={dirty:g,ctx:o}),n.$set(w)},i(o){a||(E(n.$$.fragment,o),a=!0)},o(o){j(n.$$.fragment,o),a=!1},d(o){M(n,o)}}}function ke(c,n,a){let{data:o}=n;return c.$$set=g=>{"data"in g&&a(0,o=g.data)},[o]}class Re extends pe{constructor(n){super(),$e(this,n,ke,we,me,{data:0})}}export{Re as component};
