const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-Ch7JUwmt-yKUQ9iWr.js","./main-B2UX4EBG.js","./main-B0BSaEIx.css","./index-Dc4yX_Cr-D7FTYaXP.js"])))=>i.map(i=>d[i]);
import{pD as o,b as l,p3 as s,pz as d}from"./main-B2UX4EBG.js";const t={en:{"layer-reorder.title":"Reorder Layers","layer-reorder.nolayers":"No Layers","layer-reorder.loading":"Loading","layer-reorder.expand":"Expand Sublayers","layer-reorder.expanded":"{name} sublayers expanded","layer-reorder.collapse":"Collapse Sublayers","layer-reorder.collapsed":"{name} sublayers collapsed","layer-reorder.move.up":"Move up","layer-reorder.move.down":"Move down","layer-reorder.layermoved":"{name} moved to index {index}"},fr:{"layer-reorder.title":"Réorganiser les couches","layer-reorder.nolayers":"Aucune couche","layer-reorder.loading":"Chargement","layer-reorder.expand":"Développer les sous-couches","layer-reorder.expanded":"Sous-couches {name} développées","layer-reorder.collapse":"Réduire les sous-couches","layer-reorder.collapsed":"Sous-couches {name} réduites","layer-reorder.move.up":"Déplacer vers le haut","layer-reorder.move.down":"Déplacer vers le bas","layer-reorder.layermoved":"{name} déplacé vers l'index {index}"}};class p extends d{toggleLayerReorder(r){const a=this.$iApi.panel.get("layer-reorder");this.$iApi.panel.toggle(a,r)}}class n extends p{added(){this.$iApi.panel.register({"layer-reorder":{screens:{"layer-reorder-screen":()=>o(l(()=>import("./screen-Ch7JUwmt-yKUQ9iWr.js"),__vite__mapDeps([0,1,2,3]),import.meta.url))},style:{width:"350px"},button:{tooltip:"layer-reorder.title",icon:'<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'},alertName:"layer-reorder.title"}},{i18n:{messages:t}}),this.handlePanelTeleports(["layer-reorder"])}removed(){this.$iApi.fixture.exists("appbar")&&s(this.$vApp.$pinia).removeButton("layer-reorder"),this.$iApi.panel.remove("layer-reorder")}}export{n as default};
