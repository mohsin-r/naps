import{C as p,D as y}from"./utils-2iHN6TbU-nMn77vT3.js";import{i as f}from"./jsonContext-v1mRP0aL-BIlCitQ5.js";import{jW as s,c$ as v,jV as d,jX as g}from"./main-B2UX4EBG.js";import{F as i}from"./resourceUtils-Djt21JsK-DZw8o0qu.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./saveUtils-BQy3eBhU-0DFvUEM1.js";import"./resourceUtils-PAYBmvyK-CEmeOeje.js";const n="Group Layer",A="group-layer-save",I="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function m(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,s.METADATA),g(r,o)}async function D(e,r){return p({layer:e,itemType:n,validateLayer:c,validateItem:P,createJSONContext:t=>u(t,e),createItemData:m,errorNamePrefix:A,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function J(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>u(a,e),createItemData:m,errorNamePrefix:I,newItem:r,setItemProperties:R,saveResources:(a,l)=>i(e.resourceReferences,l)},t)}export{D as save,J as saveAs};
