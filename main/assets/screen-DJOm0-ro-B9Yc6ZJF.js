import{p0 as _,p1 as M,p4 as E,pj as V,p8 as c,pk as w,pb as l,pl as k,pd as r,pp as S,pc as z,px as A,pa as C,pm as B,qC as D,pe as H,p5 as G,pS as P,p6 as F,pf as x,pr as K,pg as N,pi as U,p7 as Y,p9 as R,pP as Z,qq as J,qD as Q,ql as W,qk as X,pv as ee,pu as ne,qh as ae}from"./main-B2UX4EBG.js";import{u as $}from"./marked.esm-DgqJBp_S-CCvGNfAT.js";const te={key:0},pe=["content"],le={class:"text-lg text-left flex-grow"},se=["innerHTML"],oe=_({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(o){const{t:g}=E();return(b,s)=>{const u=V("tippy");return o.helpSection.drawn?(c(),w("div",te,[l("div",null,[k((c(),w("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:s[0]||(s[0]=i=>b.$emit("expand")),content:r(g)(o.helpSection.expanded?"help.section.collapse":"help.section.expand")},[l("span",le,S(o.helpSection.header),1),l("div",{class:z(["dropdown-icon",{"transform -rotate-180":o.helpSection.expanded}])},s[1]||(s[1]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[l("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,pe)),[[u,{placement:"top-end",hideOnClick:!1}]]),A(D,{name:"help-item",mode:"out-in"},{default:C(()=>[k(l("div",{innerHTML:o.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,se),[[B,o.helpSection.expanded]])]),_:1})])])):H("",!0)}}}),re=M(oe,[["__scopeId","data-v-7dc61532"]]),ie={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},fe=_({__name:"screen",props:{panel:{type:Object,required:!0}},setup(o){const g=G("iApi"),b=P(),{t:s}=E(),u=F(()=>b.location),i=x([]),y=x([]),q=x([]),L=x(!1);let h,f;function O(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,p]of n.entries())if(a%2===0&&p.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function T(e,t){const n=y.value[t].split(/(<[^>]*>)/);let a="";for(const[p,d]of n.entries())p%2===0?a+=d.replace(new RegExp(e,"gi"),v=>`<mark>${v}</mark>`):a+=d;i.value[t].info=a}function j(e,t){h=0,t.forEach((n,a)=>{n.info=y.value[a],n.drawn=O(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,h=n.drawn?h+1:h,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&T(e,a)}),L.value=h===0}function I(e){e.expanded=!e.expanded}return K(()=>{q.value.push(N(()=>g.language,(e,t)=>{if(e===t)return;const n=new $.Renderer,a=u.value.slice(-1)==="/"?u.value:`${u.value}/`;n.image=(p,d,v)=>(p.indexOf("http")===-1&&(p=`${a}images/`+p),`<img src="${p}" alt="${v}">`),ae.get(`${a}${e}.md`).then(p=>{const d=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let v=p.data.replace(new RegExp("\r","g"),"");i.value=[];let m;for(;m=d.exec(v);)i.value.push({header:m[1],info:$(m[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),y.value.push($(m[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),U(()=>{q.value.forEach(e=>e())}),(e,t)=>{const n=Y("panel-screen");return c(),R(n,{panel:o.panel},{header:C(()=>[Z(S(r(s)("help.title")),1)]),content:C(()=>[l("div",ie,[k(l("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:r(s)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>Q(f)?f.value=a:f=a),"aria-label":r(s)("help.search"),onInput:t[1]||(t[1]=a=>j(r(f),i.value)),onKeypress:t[2]||(t[2]=W(X(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[J,r(f)]])]),L.value?(c(),w("div",ce,[l("p",null,S(r(s)("help.noResults")),1)])):H("",!0),(c(!0),w(ne,null,ee(i.value,(a,p)=>(c(),R(re,{helpSection:a,key:p,onExpand:d=>I(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{fe as default};
