import{S as s,i as t,s as e,a as o,e as a,u as r,b as n,d as l,f as c,g as h,h as p,j as f,w as i,m as u,t as g,n as m,o as $,y as v,r as d}from"./index.2b624af8.js";import{C as b}from"./Card.6b5aadf1.js";function j(s,t,e){const o=Object.create(s);return o.post=t[e],o}function x(s){var t,e,o,u,g=s.post.title+"";return{c(){t=a("li"),e=a("a"),o=r(g),this.h()},l(s){t=l(s,"LI",{class:!0},!1);var a=c(t);e=l(a,"A",{rel:!0,href:!0},!1);var r=c(e);o=n(r,g),r.forEach(h),a.forEach(h),this.h()},h(){p(e,"rel","prefetch"),p(e,"href",u="blog/"+s.post.slug),p(t,"class","svelte-1013m05")},m(s,a){f(s,t,a),i(t,e),i(e,o)},p(s,t){s.posts&&g!==(g=t.post.title+"")&&v(o,g),s.posts&&u!==(u="blog/"+t.post.slug)&&p(e,"href",u)},d(s){s&&h(t)}}}function E(s){for(var t,e=s.posts,o=[],r=0;r<e.length;r+=1)o[r]=x(j(s,e,r));return{c(){t=a("ul");for(var s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){t=l(s,"UL",{class:!0},!1);for(var e=c(t),a=0;a<o.length;a+=1)o[a].l(e);e.forEach(h),this.h()},h(){p(t,"class","svelte-1013m05")},m(s,e){f(s,t,e);for(var a=0;a<o.length;a+=1)o[a].m(t,null)},p(s,a){if(s.posts){e=a.posts;for(var r=0;r<e.length;r+=1){const n=j(a,e,r);o[r]?o[r].p(s,n):(o[r]=x(n),o[r].c(),o[r].m(t,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=e.length}},d(s){s&&h(t),d(o,s)}}}function w(s){var t,e,v,d,j,x=new b({props:{title:"Posts",$$slots:{default:[E]},$$scope:{ctx:s}}});return{c(){t=o(),e=a("h1"),v=r("Recent posts"),d=o(),x.$$.fragment.c(),this.h()},l(s){t=n(s,"\n\n"),e=l(s,"H1",{class:!0},!1);var o=c(e);v=n(o,"Recent posts"),o.forEach(h),d=n(s,"\n\n"),x.$$.fragment.l(s),this.h()},h(){document.title="Blog",p(e,"class","svelte-1013m05")},m(s,o){f(s,t,o),f(s,e,o),i(e,v),f(s,d,o),u(x,s,o),j=!0},p(s,t){var e={};(s.$$scope||s.posts)&&(e.$$scope={changed:s,ctx:t}),x.$set(e)},i(s){j||(g(x.$$.fragment,s),j=!0)},o(s){m(x.$$.fragment,s),j=!1},d(s){s&&(h(t),h(e),h(d)),$(x,s)}}}function y({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function C(s,t,e){let{posts:o}=t;return s.$set=(s=>{"posts"in s&&e("posts",o=s.posts)}),{posts:o}}export default class extends s{constructor(s){super(),t(this,s,C,w,e,["posts"])}}export{y as preload};