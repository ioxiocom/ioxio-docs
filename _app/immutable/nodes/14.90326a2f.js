import{s as E,a as g,f as b,c as v,g as x,A as S,h as A,d as f,i as c,M as H,l as L,m as P,C as T}from"../chunks/scheduler.f9d0632e.js";import{S as X,i as j,b as k,d as w,m as y,a as C,t as I,e as B}from"../chunks/index.18812859.js";import{e as q}from"../chunks/Grid.a83f1dbc.js";import{s as M}from"../chunks/navigation.4fbb6e36.js";import{T as U,B as z}from"../chunks/Title.dd38e6c6.js";import{A as F}from"../chunks/A.798f390e.js";function G(i,a,s){const t=i.slice();return t[1]=a[s],t}function J(i){let a=i[1].name+"",s;return{c(){s=L(a)},l(t){s=P(t,a)},m(t,l){c(t,s,l)},p:T,d(t){t&&f(s)}}}function K(i){let a,s,t;return s=new F({props:{href:`/schemas/${i[1].route}/`,$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){a=b("li"),k(s.$$.fragment)},l(l){a=x(l,"LI",{});var r=A(a);w(s.$$.fragment,r),r.forEach(f)},m(l,r){c(l,a,r),y(s,a,null),t=!0},p(l,r){const _={};r&16&&(_.$$scope={dirty:r,ctx:l}),s.$set(_)},i(l){t||(C(s.$$.fragment,l),t=!0)},o(l){I(s.$$.fragment,l),t=!1},d(l){l&&f(a),B(s)}}}function N(i){let a,s,t,l,r,_="Schemas",$,u,D="Human readable schemas for various objects and files used in IOXIO Dataspaces.",h,p,d;a=new U({props:{title:"Data schemas used in IOXIO Dataspaces"}}),t=new z({props:{path:i[0].path}});let O=q(M),o=[];for(let e=0;e<O.length;e+=1)o[e]=K(G(i,O,e));return{c(){k(a.$$.fragment),s=g(),k(t.$$.fragment),l=g(),r=b("h1"),r.textContent=_,$=g(),u=b("p"),u.textContent=D,h=g(),p=b("ul");for(let e=0;e<o.length;e+=1)o[e].c()},l(e){w(a.$$.fragment,e),s=v(e),w(t.$$.fragment,e),l=v(e),r=x(e,"H1",{"data-svelte-h":!0}),S(r)!=="svelte-1v78m32"&&(r.textContent=_),$=v(e),u=x(e,"P",{"data-svelte-h":!0}),S(u)!=="svelte-3f0l70"&&(u.textContent=D),h=v(e),p=x(e,"UL",{});var n=A(p);for(let m=0;m<o.length;m+=1)o[m].l(n);n.forEach(f)},m(e,n){y(a,e,n),c(e,s,n),y(t,e,n),c(e,l,n),c(e,r,n),c(e,$,n),c(e,u,n),c(e,h,n),c(e,p,n);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(p,null);d=!0},p(e,[n]){const m={};n&1&&(m.path=e[0].path),t.$set(m)},i(e){if(!d){C(a.$$.fragment,e),C(t.$$.fragment,e);for(let n=0;n<O.length;n+=1)C(o[n]);d=!0}},o(e){I(a.$$.fragment,e),I(t.$$.fragment,e),o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)I(o[n]);d=!1},d(e){e&&(f(s),f(l),f(r),f($),f(u),f(h),f(p)),B(a,e),B(t,e),H(o,e)}}}function Q(i,a,s){let{data:t}=a;return i.$$set=l=>{"data"in l&&s(0,t=l.data)},[t]}class te extends X{constructor(a){super(),j(this,a,Q,N,E,{data:0})}}export{te as component};
