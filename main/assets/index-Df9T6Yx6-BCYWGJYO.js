const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-BRctjP38-27mKLyRJ.js","./main-B2UX4EBG.js","./main-B0BSaEIx.css"])))=>i.map(i=>d[i]);
import{p0 as n,pz as o,pD as m,b as r,p3 as b,pF as c,p4 as v,p5 as d,p7 as h,p8 as u,p9 as g,pa as w,pb as e,pd as x}from"./main-B2UX4EBG.js";const V=n({__name:"nav-button",setup(t){const{t:s}=v(),p=d("iApi"),i=()=>p?.panel.toggle("basemap");return(_,a)=>{const l=h("mapnav-button");return u(),g(l,{onClickFunction:i,tooltip:x(s)("basemap.title")},{default:w(()=>a[0]||(a[0]=[e("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1)])),_:1},8,["tooltip"])}}}),f={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"Sélectionner la carte de base","basemap.title":"Carte de base"}};class A extends o{added(){this.$iApi.component("basemap-nav-button",V),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":()=>m(r(()=>import("./screen-BRctjP38-27mKLyRJ.js"),__vite__mapDeps([0,1,2]),import.meta.url))},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:f}}),this.handlePanelTeleports(["basemap"])}removed(){this.$iApi.fixture.exists("appbar")&&b(this.$vApp.$pinia).removeButton("basemap"),this.$iApi.fixture.exists("mapnav")&&c(this.$vApp.$pinia).removeItem("basemap"),this.$iApi.panel.remove("basemap")}}export{A as default};
