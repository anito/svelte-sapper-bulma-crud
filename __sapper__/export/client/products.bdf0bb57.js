import{S as a,i as e,s as t,R as s,e as c,d as r,f as l,g as n,h as o,j as i,z as u,v as d,M as h,T as p,u as f,b as v,w as m,y as g,N as E,I as b,U as _,r as y,a as I,V as k,m as $,Q as D,t as S,n as T,o as x,J as P,L as C,W as N,D as V,X as w}from"./index.2b624af8.js";import{C as L}from"./Card.6b5aadf1.js";function U(a,e,t){const s=Object.create(a);return s.item=e[t],s}function A(a){var e;return{c(){e=f("Error!")},l(a){e=v(a,"Error!")},m(a,t){i(a,e,t)},p:d,d(a){a&&n(e)}}}function O(a){for(var e,t,s=a.list,o=[],u=0;u<s.length;u+=1)o[u]=j(U(a,s,u));return{c(){e=c("select");for(var a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=r(a,"SELECT",{},!1);for(var t=l(e),s=0;s<o.length;s+=1)o[s].l(t);t.forEach(n),this.h()},h(){void 0===a.selected&&E(()=>a.select_change_handler.call(e)),t=b(e,"change",a.select_change_handler)},m(t,s){i(t,e,s);for(var c=0;c<o.length;c+=1)o[c].m(e,null);_(e,a.selected)},p(a,t){if(a.categories){s=t.list;for(var c=0;c<s.length;c+=1){const r=U(t,s,c);o[c]?o[c].p(a,r):(o[c]=j(r),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}a.selected&&_(e,t.selected)},d(a){a&&n(e),y(o,a),t()}}}function j(a){var e,t,s,o=a.item.name+"";return{c(){e=c("option"),t=f(o),this.h()},l(a){e=r(a,"OPTION",{value:!0},!1);var s=l(e);t=v(s,o),s.forEach(n),this.h()},h(){e.__value=s=a.item.id,e.value=e.__value},m(a,s){i(a,e,s),m(e,t)},p(a,c){a.categories&&o!==(o=c.item.name+"")&&g(t,o),a.categories&&s!==(s=c.item.id)&&(e.__value=s),e.value=e.__value},d(a){a&&n(e)}}}function B(a){var e,t;return{c(){e=c("progress"),t=f("15%"),this.h()},l(a){e=r(a,"PROGRESS",{class:!0,max:!0},!1);var s=l(e);t=v(s,"15%"),s.forEach(n),this.h()},h(){o(e,"class","progress is-small is-primary"),o(e,"max","100")},m(a,s){i(a,e,s),m(e,t)},p:d,d(a){a&&n(e)}}}function z(a){var e,t;let h={ctx:a,current:null,token:null,pending:B,then:O,catch:A,value:"list",error:"null"};return s(t=a.categories,h),{c(){e=c("div"),h.block.c(),this.h()},l(a){e=r(a,"DIV",{class:!0},!1);var t=l(e);h.block.l(t),t.forEach(n),this.h()},h(){o(e,"class","select")},m(a,t){i(a,e,t),h.block.m(e,h.anchor=null),h.mount=(()=>e),h.anchor=null},p(e,c){a=c,h.ctx=a,"categories"in e&&t!==(t=a.categories)&&s(t,h)||h.block.p(e,u(u({},a),h.resolved))},i:d,o:d,d(a){a&&n(e),h.block.d(),h.token=null,h=null}}}function R(a,e,t){let s=[],{selected:c}=e;return h(async()=>{t("categories",s=async function(){const a=await fetch("https://northwind.now.sh/api/categories");if(a.ok)return a.json()}())}),a.$set=(a=>{"selected"in a&&t("selected",c=a.selected)}),{categories:s,selected:c,select_change_handler:function(){c=p(this),t("selected",c),t("categories",s)}}}class H extends a{constructor(a){super(),e(this,a,R,z,t,["selected"])}}function q(a,e,t){const s=Object.create(a);return s.item=e[t],s}function M(a){var e;return{c(){e=f("Error!")},l(a){e=v(a,"Error!")},m(a,t){i(a,e,t)},p:d,d(a){a&&n(e)}}}function G(a){for(var e,t,s=a.list,o=[],u=0;u<s.length;u+=1)o[u]=Q(q(a,s,u));return{c(){e=c("select");for(var a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=r(a,"SELECT",{},!1);for(var t=l(e),s=0;s<o.length;s+=1)o[s].l(t);t.forEach(n),this.h()},h(){void 0===a.selected&&E(()=>a.select_change_handler.call(e)),t=b(e,"change",a.select_change_handler)},m(t,s){i(t,e,s);for(var c=0;c<o.length;c+=1)o[c].m(e,null);_(e,a.selected)},p(a,t){if(a.suppliers){s=t.list;for(var c=0;c<s.length;c+=1){const r=q(t,s,c);o[c]?o[c].p(a,r):(o[c]=Q(r),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}a.selected&&_(e,t.selected)},d(a){a&&n(e),y(o,a),t()}}}function Q(a){var e,t,s,o=a.item.companyName+"";return{c(){e=c("option"),t=f(o),this.h()},l(a){e=r(a,"OPTION",{value:!0},!1);var s=l(e);t=v(s,o),s.forEach(n),this.h()},h(){e.__value=s=a.item.id,e.value=e.__value},m(a,s){i(a,e,s),m(e,t)},p(a,c){a.suppliers&&o!==(o=c.item.companyName+"")&&g(t,o),a.suppliers&&s!==(s=c.item.id)&&(e.__value=s),e.value=e.__value},d(a){a&&n(e)}}}function F(a){var e,t;return{c(){e=c("progress"),t=f("15%"),this.h()},l(a){e=r(a,"PROGRESS",{class:!0,max:!0},!1);var s=l(e);t=v(s,"15%"),s.forEach(n),this.h()},h(){o(e,"class","progress is-small is-primary"),o(e,"max","100")},m(a,s){i(a,e,s),m(e,t)},p:d,d(a){a&&n(e)}}}function J(a){var e,t;let h={ctx:a,current:null,token:null,pending:F,then:G,catch:M,value:"list",error:"null"};return s(t=a.suppliers,h),{c(){e=c("div"),h.block.c(),this.h()},l(a){e=r(a,"DIV",{class:!0},!1);var t=l(e);h.block.l(t),t.forEach(n),this.h()},h(){o(e,"class","select")},m(a,t){i(a,e,t),h.block.m(e,h.anchor=null),h.mount=(()=>e),h.anchor=null},p(e,c){a=c,h.ctx=a,"suppliers"in e&&t!==(t=a.suppliers)&&s(t,h)||h.block.p(e,u(u({},a),h.resolved))},i:d,o:d,d(a){a&&n(e),h.block.d(),h.token=null,h=null}}}function W(a,e,t){let s=[],{selected:c}=e;return h(async()=>{t("suppliers",s=async function(){const a=await fetch("https://northwind.now.sh/api/suppliers");if(a.ok)return a.json()}())}),a.$set=(a=>{"selected"in a&&t("selected",c=a.selected)}),{suppliers:s,selected:c,select_change_handler:function(){c=p(this),t("selected",c),t("suppliers",s)}}}class X extends a{constructor(a){super(),e(this,a,W,J,t,["selected"])}}function Y(a,e,t){const s=Object.create(a);return s.item=e[t],s}function K(a){var e,t,s=a.error.message+"";return{c(){e=c("p"),t=f(s),this.h()},l(a){e=r(a,"P",{style:!0},!1);var c=l(e);t=v(c,s),c.forEach(n),this.h()},h(){V(e,"color","red")},m(a,s){i(a,e,s),m(e,t)},p(a,e){a.products&&s!==(s=e.error.message+"")&&g(t,s)},d(a){a&&n(e)}}}function Z(a){for(var e,t,s,u,d,h,p,g,E,b,_,k,$,D,S,T,x=a.list,P=[],C=0;C<x.length;C+=1)P[C]=aa(Y(a,x,C));return{c(){e=c("table"),t=c("thead"),s=c("tr"),u=c("th"),d=f("Name"),h=I(),p=c("th"),g=f("Category"),E=I(),b=c("th"),_=f("Supplier"),k=I(),$=c("th"),D=f("Actions"),S=I(),T=c("tbody");for(var a=0;a<P.length;a+=1)P[a].c();this.h()},l(a){e=r(a,"TABLE",{class:!0},!1);var c=l(e);t=r(c,"THEAD",{},!1);var o=l(t);s=r(o,"TR",{},!1);var i=l(s);u=r(i,"TH",{},!1);var f=l(u);d=v(f,"Name"),f.forEach(n),h=v(i,"\r\n                      "),p=r(i,"TH",{},!1);var m=l(p);g=v(m,"Category"),m.forEach(n),E=v(i,"\r\n                      "),b=r(i,"TH",{},!1);var y=l(b);_=v(y,"Supplier"),y.forEach(n),k=v(i,"\r\n                      "),$=r(i,"TH",{width:!0},!1);var I=l($);D=v(I,"Actions"),I.forEach(n),i.forEach(n),o.forEach(n),S=v(c,"\r\n                "),T=r(c,"TBODY",{},!1);for(var x=l(T),C=0;C<P.length;C+=1)P[C].l(x);x.forEach(n),c.forEach(n),this.h()},h(){o($,"width","100px"),o(e,"class","table is-striped is-hoverable")},m(a,c){i(a,e,c),m(e,t),m(t,s),m(s,u),m(u,d),m(s,h),m(s,p),m(p,g),m(s,E),m(s,b),m(b,_),m(s,k),m(s,$),m($,D),m(e,S),m(e,T);for(var r=0;r<P.length;r+=1)P[r].m(T,null)},p(a,e){if(a.products){x=e.list;for(var t=0;t<x.length;t+=1){const s=Y(e,x,t);P[t]?P[t].p(a,s):(P[t]=aa(s),P[t].c(),P[t].m(T,null))}for(;t<P.length;t+=1)P[t].d(1);P.length=x.length}},d(a){a&&n(e),y(P,a)}}}function aa(a){var e,t,s,u,d,h,p,E,_,y,k,$,D,S,T,x,C,N,V,w,L=a.item.name+"",U=a.item.category.name+"",A=a.item.supplier.companyName+"";function O(){return a.click_handler(a)}function j(){return a.click_handler_1(a)}return{c(){e=c("tr"),t=c("td"),s=f(L),u=I(),d=c("td"),h=f(U),p=I(),E=c("td"),_=f(A),y=I(),k=c("td"),$=c("a"),D=c("span"),S=c("i"),T=I(),x=c("a"),C=c("span"),N=c("i"),V=I(),this.h()},l(a){e=r(a,"TR",{},!1);var c=l(e);t=r(c,"TD",{class:!0},!1);var o=l(t);s=v(o,L),o.forEach(n),u=v(c,"\r\n                            "),d=r(c,"TD",{class:!0},!1);var i=l(d);h=v(i,U),i.forEach(n),p=v(c,"\r\n                            "),E=r(c,"TD",{class:!0},!1);var f=l(E);_=v(f,A),f.forEach(n),y=v(c,"\r\n                            "),k=r(c,"TD",{class:!0},!1);var m=l(k);$=r(m,"A",{href:!0},!1);var g=l($);D=r(g,"SPAN",{class:!0},!1);var b=l(D);S=r(b,"I",{class:!0},!1),l(S).forEach(n),b.forEach(n),g.forEach(n),T=v(m,"\r\n\r\n                                "),x=r(m,"A",{href:!0},!1);var I=l(x);C=r(I,"SPAN",{class:!0},!1);var P=l(C);N=r(P,"I",{class:!0},!1),l(N).forEach(n),P.forEach(n),I.forEach(n),m.forEach(n),V=v(c,"\r\n                        "),c.forEach(n),this.h()},h(){o(t,"class","col-name"),o(d,"class","col-category-name"),o(E,"class","col-company-name"),o(S,"class","fas fa-edit"),o(D,"class","icon is-large"),o($,"href","javascript:;"),o(N,"class","fas fa-trash"),o(C,"class","icon is-small"),o(x,"href","javascript:;"),o(k,"class","col-action"),w=[b($,"click",O),b(x,"click",j)]},m(a,c){i(a,e,c),m(e,t),m(t,s),m(e,u),m(e,d),m(d,h),m(e,p),m(e,E),m(E,_),m(e,y),m(e,k),m(k,$),m($,D),m(D,S),m(k,T),m(k,x),m(x,C),m(C,N),m(e,V)},p(e,t){a=t,e.products&&L!==(L=a.item.name+"")&&g(s,L),e.products&&U!==(U=a.item.category.name+"")&&g(h,U),e.products&&A!==(A=a.item.supplier.companyName+"")&&g(_,A)},d(a){a&&n(e),P(w)}}}function ea(a){var e,t;return{c(){e=c("progress"),t=f("15%"),this.h()},l(a){e=r(a,"PROGRESS",{class:!0,max:!0},!1);var s=l(e);t=v(s,"15%"),s.forEach(n),this.h()},h(){o(e,"class","progress is-small is-primary"),o(e,"max","100")},m(a,s){i(a,e,s),m(e,t)},p:d,d(a){a&&n(e)}}}function ta(a){var e,t,s;return{c(){e=c("a"),t=f("New"),this.h()},l(a){e=r(a,"A",{href:!0,slot:!0,class:!0},!1);var s=l(e);t=v(s,"New"),s.forEach(n),this.h()},h(){o(e,"href","javascript:;"),o(e,"slot","footer"),o(e,"class","card-footer-item svelte-1anynrz"),s=b(e,"click",a.onNewClick)},m(a,s){i(a,e,s),m(e,t)},p:d,d(a){a&&n(e),s()}}}function sa(a){var e,t,o;let d={ctx:a,current:null,token:null,pending:ea,then:Z,catch:K,value:"list",error:"error"};return s(t=a.products,d),{c(){e=c("div"),d.block.c(),o=I()},l(a){e=r(a,"DIV",{},!1);var t=l(e);d.block.l(t),t.forEach(n),o=v(a,"\r\n    ")},m(a,t){i(a,e,t),d.block.m(e,d.anchor=null),d.mount=(()=>e),d.anchor=null,i(a,o,t)},p(e,c){a=c,d.ctx=a,"products"in e&&t!==(t=a.products)&&s(t,d)||d.block.p(e,u(u({},a),d.resolved))},d(a){a&&n(e),d.block.d(),d.token=null,d=null,a&&n(o)}}}function ca(a){var e,t,s,u,d,h,p,E,_,y,V,U,A,O,j,B,z,R,q,M,G,Q,F,J,W,Y,K,Z,aa,ea,ca,ra,la,na,oa,ia,ua,da,ha,pa,fa,va,ma,ga,Ea,ba,_a,ya,Ia,ka,$a,Da,Sa,Ta,xa,Pa,Ca,Na,Va,wa,La,Ua,Aa,Oa,ja,Ba,za,Ra,Ha,qa,Ma=a.product.name+"",Ga=new L({props:{title:"Products",$$slots:{default:[sa],footer:[ta]},$$scope:{ctx:a}}});function Qa(e){a.categoryselection_selected_binding.call(null,e),K=!0,w(()=>K=!1)}let Fa={};void 0!==a.product.categoryId&&(Fa.selected=a.product.categoryId);var Ja=new H({props:Fa});function Wa(e){a.supplierselection_selected_binding.call(null,e),na=!0,w(()=>na=!1)}C.push(()=>N(Ja,"selected",Qa));let Xa={};void 0!==a.product.supplierId&&(Xa.selected=a.product.supplierId);var Ya=new X({props:Xa});return C.push(()=>N(Ya,"selected",Wa)),{c(){e=I(),Ga.$$.fragment.c(),t=I(),s=c("div"),u=c("div"),d=I(),h=c("div"),p=c("header"),E=c("p"),_=f(Ma),y=I(),V=c("button"),U=I(),A=c("section"),O=c("div"),j=c("label"),B=f("Name"),z=I(),R=c("div"),q=c("input"),M=I(),G=c("div"),Q=c("div"),F=c("label"),J=f("Category"),W=I(),Y=c("div"),Ja.$$.fragment.c(),Z=I(),aa=c("div"),ea=c("label"),ca=f("Supplier"),ra=I(),la=c("div"),Ya.$$.fragment.c(),oa=I(),ia=c("div"),ua=c("div"),da=c("label"),ha=f("Quantity Per Unit"),pa=I(),fa=c("div"),va=c("input"),ma=I(),ga=c("div"),Ea=c("label"),ba=f("Unit Price"),_a=I(),ya=c("div"),Ia=c("input"),ka=I(),$a=c("div"),Da=c("label"),Sa=f("Unit in Stock"),Ta=I(),xa=c("div"),Pa=c("input"),Ca=I(),Na=c("div"),Va=c("label"),wa=f("Discontinued \r\n                    "),La=c("input"),Ua=I(),Aa=c("footer"),Oa=c("button"),ja=f("Save changes"),Ba=I(),za=c("button"),Ra=f("Cancel"),this.h()},l(a){e=v(a,"\r\n\r\n"),Ga.$$.fragment.l(a),t=v(a,"\r\n\r\n"),s=r(a,"DIV",{class:!0},!1);var c=l(s);u=r(c,"DIV",{class:!0},!1),l(u).forEach(n),d=v(c,"\r\n    "),h=r(c,"DIV",{class:!0},!1);var o=l(h);p=r(o,"HEADER",{class:!0},!1);var i=l(p);E=r(i,"P",{class:!0},!1);var f=l(E);_=v(f,Ma),f.forEach(n),y=v(i,"\r\n            "),V=r(i,"BUTTON",{class:!0,"aria-label":!0},!1),l(V).forEach(n),i.forEach(n),U=v(o,"\r\n        "),A=r(o,"SECTION",{class:!0},!1);var m=l(A);O=r(m,"DIV",{class:!0},!1);var g=l(O);j=r(g,"LABEL",{class:!0},!1);var b=l(j);B=v(b,"Name"),b.forEach(n),z=v(g,"\r\n                "),R=r(g,"DIV",{class:!0},!1);var I=l(R);q=r(I,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(q).forEach(n),I.forEach(n),g.forEach(n),M=v(m,"\r\n            "),G=r(m,"DIV",{class:!0},!1);var k=l(G);Q=r(k,"DIV",{class:!0},!1);var $=l(Q);F=r($,"LABEL",{class:!0},!1);var D=l(F);J=v(D,"Category"),D.forEach(n),W=v($,"\r\n                    "),Y=r($,"DIV",{class:!0},!1);var S=l(Y);Ja.$$.fragment.l(S),S.forEach(n),$.forEach(n),Z=v(k,"\r\n                "),aa=r(k,"DIV",{class:!0},!1);var T=l(aa);ea=r(T,"LABEL",{class:!0},!1);var x=l(ea);ca=v(x,"Supplier"),x.forEach(n),ra=v(T,"\r\n                    "),la=r(T,"DIV",{class:!0},!1);var P=l(la);Ya.$$.fragment.l(P),P.forEach(n),T.forEach(n),k.forEach(n),oa=v(m,"\r\n            "),ia=r(m,"DIV",{class:!0},!1);var C=l(ia);ua=r(C,"DIV",{class:!0},!1);var N=l(ua);da=r(N,"LABEL",{class:!0},!1);var w=l(da);ha=v(w,"Quantity Per Unit"),w.forEach(n),pa=v(N,"\r\n                    "),fa=r(N,"DIV",{class:!0},!1);var L=l(fa);va=r(L,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(va).forEach(n),L.forEach(n),N.forEach(n),ma=v(C,"\r\n                "),ga=r(C,"DIV",{class:!0},!1);var H=l(ga);Ea=r(H,"LABEL",{class:!0},!1);var X=l(Ea);ba=v(X,"Unit Price"),X.forEach(n),_a=v(H,"\r\n                    "),ya=r(H,"DIV",{class:!0},!1);var K=l(ya);Ia=r(K,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(Ia).forEach(n),K.forEach(n),H.forEach(n),ka=v(C,"\r\n                "),$a=r(C,"DIV",{class:!0},!1);var ta=l($a);Da=r(ta,"LABEL",{class:!0},!1);var sa=l(Da);Sa=v(sa,"Unit in Stock"),sa.forEach(n),Ta=v(ta,"\r\n                    "),xa=r(ta,"DIV",{class:!0},!1);var na=l(xa);Pa=r(na,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(Pa).forEach(n),na.forEach(n),ta.forEach(n),C.forEach(n),Ca=v(m,"\r\n            "),Na=r(m,"DIV",{class:!0},!1);var Ha=l(Na);Va=r(Ha,"LABEL",{class:!0},!1);var qa=l(Va);wa=v(qa,"Discontinued \r\n                    "),La=r(qa,"INPUT",{type:!0},!1),l(La).forEach(n),qa.forEach(n),Ha.forEach(n),m.forEach(n),Ua=v(o,"\r\n        "),Aa=r(o,"FOOTER",{class:!0},!1);var Qa=l(Aa);Oa=r(Qa,"BUTTON",{class:!0},!1);var Fa=l(Oa);ja=v(Fa,"Save changes"),Fa.forEach(n),Ba=v(Qa,"\r\n            "),za=r(Qa,"BUTTON",{class:!0},!1);var Wa=l(za);Ra=v(Wa,"Cancel"),Wa.forEach(n),Qa.forEach(n),o.forEach(n),c.forEach(n),this.h()},h(){document.title="Products",o(u,"class","modal-background"),o(E,"class","modal-card-title svelte-1anynrz"),o(V,"class","delete"),o(V,"aria-label","close"),o(p,"class","modal-card-head svelte-1anynrz"),o(j,"class","label"),o(q,"class","input"),o(q,"type","text"),o(q,"placeholder",""),o(R,"class","control"),o(O,"class","field"),o(F,"class","label"),o(Y,"class","control"),o(Q,"class","column field"),o(ea,"class","label"),o(la,"class","control"),o(aa,"class","column field"),o(G,"class","columns is-desktop"),o(da,"class","label"),o(va,"class","input"),o(va,"type","text"),o(va,"placeholder",""),o(fa,"class","control"),o(ua,"class","column field"),o(Ea,"class","label"),o(Ia,"class","input"),o(Ia,"type","text"),o(Ia,"placeholder",""),o(ya,"class","control"),o(ga,"class","column field"),o(Da,"class","label"),o(Pa,"class","input"),o(Pa,"type","text"),o(Pa,"placeholder",""),o(xa,"class","control"),o($a,"class","column field"),o(ia,"class","columns is-desktop"),o(La,"type","checkbox"),o(Va,"class","label"),o(Na,"class","field"),o(A,"class","modal-card-body svelte-1anynrz"),o(Oa,"class",k(a.buttonSaveClass)+" svelte-1anynrz"),o(za,"class","button"),o(Aa,"class","modal-card-foot svelte-1anynrz"),o(h,"class","modal-card svelte-1anynrz"),o(s,"class",k(a.modalClass)+" svelte-1anynrz"),qa=[b(V,"click",a.closeModal),b(q,"input",a.input0_input_handler),b(va,"input",a.input1_input_handler),b(Ia,"input",a.input2_input_handler),b(Pa,"input",a.input3_input_handler),b(La,"change",a.input4_change_handler),b(Oa,"click",a.save),b(za,"click",a.closeModal)]},m(c,r){i(c,e,r),$(Ga,c,r),i(c,t,r),i(c,s,r),m(s,u),m(s,d),m(s,h),m(h,p),m(p,E),m(E,_),m(p,y),m(p,V),m(h,U),m(h,A),m(A,O),m(O,j),m(j,B),m(O,z),m(O,R),m(R,q),D(q,a.product.name),m(A,M),m(A,G),m(G,Q),m(Q,F),m(F,J),m(Q,W),m(Q,Y),$(Ja,Y,null),m(G,Z),m(G,aa),m(aa,ea),m(ea,ca),m(aa,ra),m(aa,la),$(Ya,la,null),m(A,oa),m(A,ia),m(ia,ua),m(ua,da),m(da,ha),m(ua,pa),m(ua,fa),m(fa,va),D(va,a.product.quantityPerUnit),m(ia,ma),m(ia,ga),m(ga,Ea),m(Ea,ba),m(ga,_a),m(ga,ya),m(ya,Ia),D(Ia,a.product.unitPrice),m(ia,ka),m(ia,$a),m($a,Da),m(Da,Sa),m($a,Ta),m($a,xa),m(xa,Pa),D(Pa,a.product.unitsInStock),m(A,Ca),m(A,Na),m(Na,Va),m(Va,wa),m(Va,La),La.checked=a.product.discontinued,m(h,Ua),m(h,Aa),m(Aa,Oa),m(Oa,ja),m(Aa,Ba),m(Aa,za),m(za,Ra),Ha=!0},p(a,e){var t={};(a.$$scope||a.products)&&(t.$$scope={changed:a,ctx:e}),Ga.$set(t),Ha&&!a.product||Ma===(Ma=e.product.name+"")||g(_,Ma),a.product&&q.value!==e.product.name&&D(q,e.product.name);var c={};!K&&a.product&&(c.selected=e.product.categoryId),Ja.$set(c);var r={};!na&&a.product&&(r.selected=e.product.supplierId),Ya.$set(r),a.product&&va.value!==e.product.quantityPerUnit&&D(va,e.product.quantityPerUnit),a.product&&Ia.value!==e.product.unitPrice&&D(Ia,e.product.unitPrice),a.product&&Pa.value!==e.product.unitsInStock&&D(Pa,e.product.unitsInStock),a.product&&(La.checked=e.product.discontinued),Ha&&!a.buttonSaveClass||o(Oa,"class",k(e.buttonSaveClass)+" svelte-1anynrz"),Ha&&!a.modalClass||o(s,"class",k(e.modalClass)+" svelte-1anynrz")},i(a){Ha||(S(Ga.$$.fragment,a),S(Ja.$$.fragment,a),S(Ya.$$.fragment,a),Ha=!0)},o(a){T(Ga.$$.fragment,a),T(Ja.$$.fragment,a),T(Ya.$$.fragment,a),Ha=!1},d(a){a&&n(e),x(Ga,a),a&&(n(t),n(s)),x(Ja),x(Ya),P(qa)}}}async function ra(){const a=await fetch("https://northwind.now.sh/api/products/?_expand=category&_expand=supplier");if(a.ok)return a.json();throw new Error(`🚨 Catastrofic failure 🚨 ${a.status} ${a.statusText}`)}function la(a,e,t){let s,c,r=[],l={},n=!1,o=!1;function i(a){t("product",l=a),p()}async function u(a){t("product",l=a),confirm(`Delete "${l.name}"?`)&&(await http.delete(`/products/${l.id}`),t("products",r=ra()))}function d(){t("modalIsVisible",o=!1)}function p(){t("modalIsVisible",o=!0)}return h(async()=>{t("products",r=ra())}),a.$$.update=((a={buttonSaveIsLoading:1,modalIsVisible:1})=>{a.buttonSaveIsLoading&&t("buttonSaveClass",s=!0===n?"button is-success is-loading":"button is-success"),a.modalIsVisible&&t("modalClass",c=!0===o?"modal is-active":"modal")}),{products:r,product:l,onItemClick:i,onDeleteClick:u,closeModal:d,onNewClick:function(){t("product",l={name:"",description:""}),p()},save:async function(){try{t("buttonSaveIsLoading",n=!0),await http({method:l.id?"put":"post",url:l.id?`/products/${l.id}`:"/products",data:l}),t("products",r=ra()),d()}catch(a){console.log(a)}finally{t("buttonSaveIsLoading",n=!1)}},buttonSaveClass:s,modalClass:c,click_handler:function({item:a}){return i(a)},click_handler_1:function({item:a}){return u(a)},input0_input_handler:function(){l.name=this.value,t("product",l)},categoryselection_selected_binding:function(a){l.categoryId=a,t("product",l)},supplierselection_selected_binding:function(a){l.supplierId=a,t("product",l)},input1_input_handler:function(){l.quantityPerUnit=this.value,t("product",l)},input2_input_handler:function(){l.unitPrice=this.value,t("product",l)},input3_input_handler:function(){l.unitsInStock=this.value,t("product",l)},input4_change_handler:function(){l.discontinued=this.checked,t("product",l)}}}export default class extends a{constructor(a){super(),e(this,a,la,ca,t,[])}}