import{S as t,i as e,s as n,e as s,a,d as i,f as o,g as c,b as r,h as m,w as d,j as h,m as p,t as f,n as g,o as u}from"./index.2b624af8.js";import{D as l}from"./index.de53ddf9.js";function $(t){var e,n,$,w,x,j=new l({props:{sections:t.sections,project:"sapper",dir:"migrating"}});return{c(){e=s("meta"),n=s("meta"),$=s("meta"),w=a(),j.$$.fragment.c(),this.h()},l(t){e=i(t,"META",{name:!0,content:!0},!1),o(e).forEach(c),n=i(t,"META",{name:!0,content:!0},!1),o(n).forEach(c),$=i(t,"META",{name:!0,content:!0},!1),o($).forEach(c),w=r(t,"\n\n"),j.$$.fragment.l(t),this.h()},h(){document.title="Migration • Sapper",m(e,"name","twitter:title"),m(e,"content","Sapper migration guides"),m(n,"name","twitter:description"),m(n,"content","The next small thing in web development"),m($,"name","Description"),m($,"content","The next small thing in web development")},m(t,s){d(document.head,e),d(document.head,n),d(document.head,$),h(t,w,s),p(j,t,s),x=!0},p(t,e){var n={};t.sections&&(n.sections=e.sections),j.$set(n)},i(t){x||(f(j.$$.fragment,t),x=!0)},o(t){g(j.$$.fragment,t),x=!1},d(t){c(e),c(n),c($),t&&c(w),u(j,t)}}}async function w(){return{sections:await this.fetch("migrating.json").then(t=>t.json())}}function x(t,e,n){let{sections:s}=e;return t.$set=(t=>{"sections"in t&&n("sections",s=t.sections)}),{sections:s}}export default class extends t{constructor(t){super(),e(this,t,x,$,n,["sections"])}}export{w as preload};
