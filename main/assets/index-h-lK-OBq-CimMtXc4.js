import{p0 as P,p1 as V,p2 as te,p3 as H,p4 as W,p5 as F,p6 as N,p7 as J,p8 as l,p9 as k,pa as G,pb as C,pc as I,pd as B,pe as M,pf as E,pg as ae,ph as K,pi as Q,pj as T,pk as b,pl as q,pm as ee,pn as ne,po as ie,pp as se,pq as oe,pr as le,ps as re,pt as U,pu as x,pv as L,pw as X,px as j,py as pe,pz as ue,pA as ce,pB as R,pC as de}from"./main-B2UX4EBG.js";class D{id;options;componentId;constructor(a){const r={options:{},...a};({id:this.id,options:this.options,componentId:this.componentId}=r)}}const me=["innerHTML"],S=P({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(f){const{t:a}=W(),r=F("iApi"),n=f,d=N(()=>r?.panel.get(n.panelId)?.button),o=()=>{n.minimize?r?.panel.toggleMinimize(n.panelId):r?.panel.toggle(n.panelId)};return(e,y)=>{const p=J("appbar-button");return d.value?(l(),k(p,{key:0,onClickFunction:o,tooltip:B(a)(d.value.tooltip),id:f.panelId},{default:G(()=>[C("div",{class:I(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":f.overflow}]),innerHTML:d.value.icon},null,10,me)]),_:1},8,["tooltip","id"])):M("",!0)}}}),ve={},fe={class:"border-b p-0 self-center w-2/3"};function he(f,a){return l(),b("span",fe)}const Z=V(ve,[["render",he],["__scopeId","data-v-5d32b715"]]);var be={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(f){var a=f.state,r=f.name,n=f.options,d=de(a,n),o=a.modifiersData.preventOverflow||{x:0,y:0},e=o.x,y=o.y,p=a.rects.popper,u=p.width,h=p.height,z=a.placement.split("-"),w=z[0],_=w==="left"?"left":"right",v=w==="top"?"top":"bottom";a.modifiersData[r]={width:u-d[_]-e,height:h-d[v]-y}}};const ge=["content","aria-label"],$e=P({__name:"more-button",props:{position:{type:String,default:"right-end"},popperOptions:{type:Object,default(){return{}}},numItems:{type:Number,default:1},renderWatch:{type:Number,default:0}},emits:["updateParent"],setup(f,{expose:a,emit:r}){const{t:n}=W(),d=F("iApi"),o=f,e=r;function y(){e("updateParent")}const p=E(!1),u=E(0),h=E(),z=E(),w=E();function _(){y(),U(()=>{v(),p.value=!p.value})}ae(()=>o.renderWatch,()=>{_()});const v=()=>{p.value=!p.value;const c=d.$vApp.$el.querySelector(".inner-shell"),g={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:m}){const{width:i}=m.modifiersData.maxSize;m.styles.popper={...m.styles.popper,maxWidth:`${i}px`,maxHeight:`${c.offsetHeight-45}px`};const $=Math.min(o.numItems<=0?0:55+44*(o.numItems-1),c.offsetHeight-45);m.styles.popper.height=`${$}px`,w?.value?.offsetHeight&&(w.value.style.height=`${$}px`),m.styles.popper.overflowY="auto",m.styles.popper.overflowX="hidden"}};z.value&&w.value&&(u.value++,ce(z.value,w.value,{placement:o.position||"right-end",modifiers:[{...be,options:{boundary:c}},g,{name:"offset",options:{offset:[0,5]}},{name:"preventOverflow",enabled:!0,options:{boundary:c}}],...o.popperOptions})),u.value===1&&_()};return K(()=>{window.addEventListener("click",c=>{c.target instanceof HTMLElement&&!h.value?.contains(c.target)&&(p.value=!1)},{capture:!0})}),Q(()=>{window.removeEventListener("click",c=>{c.target instanceof HTMLElement&&!h.value?.contains(c.target)&&(p.value=!1)},{capture:!0})}),a({rerender:_}),(c,g)=>{const m=T("focus-item"),i=T("tippy");return l(),b("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:h},[q((l(),b("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:g[0]||(g[0]=$=>v()),content:B(n)("appbar.more"),"aria-label":B(n)("appbar.more"),ref_key:"dropdownTrigger",ref:z},g[1]||(g[1]=[C("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[C("path",{d:"M0 0h24v24H0z",fill:"none"}),C("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)]),8,ge)),[[m],[i,{placement:"right-end"}]]),q(C("div",{id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",ref_key:"dropdown",ref:w},[ne(c.$slots,"default",{},void 0,!0)],512),[[ee,p.value]])],512)}}}),ye=V($e,[["__scopeId","data-v-93661050"]]),we={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},xe=P({__name:"appbar-button",setup(f){const a=ie(),{t:r}=W(),n=F("iApi"),d=N(()=>a.notificationNumber),o=()=>{n.panel.toggle("notifications")};return(e,y)=>{const p=J("appbar-button",!0);return l(),k(p,{onClickFunction:o,tooltip:B(r)("notifications.title"),class:"notification-button",id:""},{default:G(()=>[y[0]||(y[0]=C("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[C("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),d.value&&d.value>0?(l(),b("span",we,se(d.value),1)):M("",!0)]),_:1},8,["tooltip"])}}}),ke=V(xe,[["__scopeId","data-v-787da765"]]),Ee=["content"],Ie=P({__name:"appbar",setup(f){const a=oe(),r=H(),n=E(0),d=E(0),o=N(()=>r.visible),e=N(()=>r.temporary),{t:y}=W(),p=E(!1),u=E({}),h=E(),z=()=>{U(()=>{R()?.proxy?.$forceUpdate()})},w=()=>{h.value._tippy.hide()},_=v=>{v.key==="Tab"&&h.value?.matches(":focus")&&h.value._tippy.show()};return K(()=>{h.value?.addEventListener("blur",w),h.value?.addEventListener("keyup",_)}),le(()=>{const v=R();window.addEventListener("resize",()=>v?.proxy?.$forceUpdate())}),Q(()=>{const v=R();window.removeEventListener("resize",()=>v?.proxy?.$forceUpdate()),h.value?.removeEventListener("blur",w),h.value?.removeEventListener("keyup",_)}),re(()=>{U(()=>{const v=h.value;let c,g=[...v.children],m=g[g.length-2].getBoundingClientRect().top;a.mobileView||(m=v.getBoundingClientRect().bottom-38);let i=v.querySelector("#dropdown");for(let s=g.length-4;s>=0;s--){let A=g[s].getBoundingClientRect().bottom;if(m&&i&&(A>m||p.value&&A+56>m))g[s].classList.forEach(O=>{O.includes("identifier")&&(c=O.slice(11))}),c&&(u.value[c]=!0,c.includes("divider")||n.value++,d.value++),p.value||(p.value=!0);else if(A!==0)break}let $=v.querySelector("#more"),t=$.getBoundingClientRect().bottom;if(c=void 0,p.value&&m&&$&&i&&t!==0&&(t<=m-56||i.childElementCount==1&&t<=m)){let s=i.childElementCount,A=0;for(;t<=m-56||s==1;){let O=i.children[A];if(O&&(O.classList.forEach(Y=>{Y.includes("identifier")&&(c=Y.slice(11))}),c&&(u.value[c]=!1,c.includes("divider")||n.value--),t+=48,s-=1,A+=1),s===0){p.value=!1;break}}}Object.keys(u.value).forEach(s=>{v.querySelector(`.identifier-${s}`)||(delete u.value[s],s.includes("divider")||(n.value=Math.max(0,n.value-1)),d.value++)})})}),(v,c)=>{const g=T("focus-list"),m=T("tippy");return q((l(),b("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",content:B(y)("panels.controls.items"),ref_key:"el",ref:h},[(l(!0),b(x,null,L(o.value,(i,$)=>(l(),b(x,null,[(l(!0),b(x,null,L(i,(t,s)=>(l(),b(x,null,[typeof t=="string"&&u.value[`${t}-${s}`]!==!0?(l(),k(S,{key:`${t}-${s}-default`,panelId:t,class:I(["appbar-item h-48",`identifier-${t}-${s}`])},null,8,["panelId","class"])):u.value[`${t}-${s}`]!==!0?(l(),k(X(t.componentId),{key:`${t}-${s}-custom`,options:t.options,class:I(["appbar-item h-48",`identifier-${t}-${s}`]),id:t.id},null,8,["options","id","class"])):M("",!0)],64))),256)),u.value[`divider-${$}`]!==!0?(l(),k(Z,{class:I(["appbar-item",`identifier-divider-${$}`]),key:`${i}-${$}-default`},null,8,["class"])):M("",!0)],64))),256)),(l(!0),b(x,null,L(e.value?.filter(i=>u.value[`${i}-temp`]!==!0),i=>(l(),k(S,{panelId:i,minimize:!0,key:`${i}-temp`,class:I([`identifier-${i}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),q(j(ye,{id:"more",numItems:n.value,renderWatch:d.value,onUpdateParent:z},{default:G(()=>[(l(!0),b(x,null,L(o.value,(i,$)=>(l(),b(x,{key:$},[(l(!0),b(x,null,L(i,(t,s)=>(l(),b(x,null,[typeof t=="string"&&u.value[`${t}-${s}`]?(l(),k(S,{key:`${t}-${s}-default`,panelId:t,class:I(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${s}`]),overflow:""},null,8,["panelId","class"])):u.value[`${t}-${s}`]?(l(),k(X(t.componentId),{key:`${t}-${s}-custom`,options:t.options,id:t.id,class:I(["appbar-item h-48",`identifier-${t}-${s}`])},null,8,["options","id","class"])):M("",!0)],64))),256)),u.value[`divider-${$}`]?(l(),k(Z,{key:0,class:I(["border-black my-4",`identifier-divider-${$}`])},null,8,["class"])):M("",!0)],64))),128)),(l(!0),b(x,null,L(e.value?.filter(i=>u.value[`${i}-temp`]),i=>(l(),k(S,{panelId:i,minimize:!0,key:`${i}-temp`,class:I([`identifier-${i}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},8,["numItems","renderWatch"]),[[ee,p.value]]),j(ke,{class:"appbar-item bottom-48 h-48 sm:display-none"}),j(pe,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})],8,Ee)),[[g],[m,{trigger:"manual",touch:!1,placement:"top-end",popperOptions:{placement:"top",modifiers:[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["top"]}}]}}]])}}});class _e extends ue{get config(){return super.config}_parseConfig(a){if(!a)return;const r=H(this.$vApp.$pinia);let n;Array.isArray(a.items[0])?n=a.items:n=[a.items];const d=[];n.forEach(o=>{d.push(o.map(e=>typeof e=="string"?e:new D(e)))}),r.items=d.flat().reduce((o,e)=>(o[e instanceof D?e.id:e]=e,o),{}),r.order=d.map(o=>o.map(e=>e instanceof D?e.id:e)),this._validateItems()}_validateItems(){const a=H(this.$vApp.$pinia);a.order.flat().forEach(r=>{typeof a.items[r]!="string"&&[r].some(n=>{this.$iApi.fixture.exists(n)&&!a.items[r]&&(a.items[r].componentId=`${n}-appbar-button`)})})}}const ze={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Ae extends _e{initialized(){}async added(){Object.entries(ze).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e));const{destroy:a,el:r}=this.mount(Ie,{app:this.$element}),n=this.$vApp.$el.getElementsByClassName("inner-shell")[0];n.insertBefore(r.childNodes[0],n.querySelector(".panel-stack")),this._parseConfig(this.config);const d=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),o=[];o.push(this.$iApi.event.on(te.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const e=H(this.$vApp.$pinia);d(),o.forEach(u=>this.$iApi.event.off(u));const y={...e.items},p=[...e.temporary];Object.keys(y).forEach(u=>e.removeButton(u)),p.forEach(u=>e.removeButton(u)),a(),e.$reset()}}}export{Ae as default};