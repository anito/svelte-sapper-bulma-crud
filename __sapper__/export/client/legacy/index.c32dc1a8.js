import{_ as n,a as t,b as e,c as s,i as a,s as i,d as o,S as r,g as c,f as u,j as f,k as m,l as p,h,m as d,A as l,o as g,n as $,t as v,r as x,u as j}from"./index.867020a7.js";import{_ as w,a as b}from"./asyncToGenerator.18e9fab6.js";import{D as E}from"./index.9eb82588.js";function T(n){var t,e,s,a,i,o=new E({props:{sections:n.sections,project:"sapper",dir:"migrating"}});return{c:function(){t=c("meta"),e=c("meta"),s=c("meta"),a=u(),o.$$.fragment.c(),this.h()},l:function(n){t=f(n,"META",{name:!0,content:!0},!1),m(t).forEach(p),e=f(n,"META",{name:!0,content:!0},!1),m(e).forEach(p),s=f(n,"META",{name:!0,content:!0},!1),m(s).forEach(p),a=h(n,"\n\n"),o.$$.fragment.l(n),this.h()},h:function(){document.title="Migration • Sapper",d(t,"name","twitter:title"),d(t,"content","Sapper migration guides"),d(e,"name","twitter:description"),d(e,"content","The next small thing in web development"),d(s,"name","Description"),d(s,"content","The next small thing in web development")},m:function(n,r){l(document.head,t),l(document.head,e),l(document.head,s),g(n,a,r),$(o,n,r),i=!0},p:function(n,t){var e={};n.sections&&(e.sections=t.sections),o.$set(e)},i:function(n){i||(v(o.$$.fragment,n),i=!0)},o:function(n){x(o.$$.fragment,n),i=!1},d:function(n){p(t),p(e),p(s),n&&p(a),j(o,n)}}}function A(){return M.apply(this,arguments)}function M(){return(M=w(b.mark(function n(){var t;return b.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("migrating.json").then(function(n){return n.json()});case 2:return t=n.sent,n.abrupt("return",{sections:t});case 4:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function y(n,t,e){var s=t.sections;return n.$set=function(n){"sections"in n&&e("sections",s=n.sections)},{sections:s}}export default(function(c){function u(n){var r;return t(this,u),r=e(this,s(u).call(this)),a(o(r),n,y,T,i,["sections"]),r}return n(u,r),u}());export{A as preload};