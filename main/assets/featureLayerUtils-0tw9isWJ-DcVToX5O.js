import{jS as L,b5 as w,jT as O,ay as R,jU as N,jV as d,jW as c,jX as x,jY as f}from"./main-C9wvg2yZ.js";import{C as j,D}from"./utils-2iHN6TbU-Busgo12E.js";import{d as $,p as J,S as Y}from"./fetchService-DhIYtzwD-BSOdFRH0.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./jsonContext-v1mRP0aL-C45xA8NZ.js";import"./saveUtils-BQy3eBhU-CidOx-Ko.js";const E="Feature Service",b="feature-layer-utils",g=`${b}-save`,M=`${b}-save-as`;function A(e){return{isValid:L(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function h(e){const r=[],t=[];for(const{layer:a,layerJSON:o}of e)a.isTable?t.push(o):r.push(o);return{layers:r,tables:t}}function v(e){return h([e])}async function _(e,r){return/\/\d+\/?$/.test(e.url)?v(r[0]):F(r,e)}async function F(e,r){if(e.reverse(),!r)return h(e);const t=await G(r,e);for(const a of e)S(a.layer,a.layerJSON,t);return U(t,e),t}async function G(e,r){let t=await e.fetchData("json");if(K(t))return t;t||={},C(t);const{layer:{url:a,customParameters:o,apiKey:s}}=r[0];return await V(t,{url:a??"",customParameters:o,apiKey:s},r.map(n=>n.layer.layerId)),t}function K(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function C(e){e.layers||=[],e.tables||=[]}function U(e,r){const t=[],a=[];for(const{layer:o}of r){const{isTable:s,layerId:n}=o;s?a.push(n):t.push(n)}p(e.layers,t),p(e.tables,a)}function p(e,r){if(e.length<2)return;const t=[];for(const{id:a}of e)t.push(a);w(t.sort(m),r.slice().sort(m))&&e.sort((a,o)=>{const s=r.indexOf(a.id),n=r.indexOf(o.id);return s<n?-1:s>n?1:0})}function m(e,r){return e<r?-1:e>r?1:0}async function V(e,r,t){const{url:a,customParameters:o,apiKey:s}=r,{serviceJSON:n,layersJSON:i}=await $(a,{customParameters:o,apiKey:s}),l=I(e.layers,n.layers,t),u=I(e.tables,n.tables,t);e.layers=l.itemResources,e.tables=u.itemResources;const y=[...l.added,...u.added],P=i?[...i.layers,...i.tables]:[];await B(e,y,a,P)}function I(e,r,t){const a=O(e,r,(s,n)=>s.id===n.id);e=e.filter(s=>!a.removed.some(n=>n.id===s.id));const o=a.added;return o.forEach(({id:s})=>{e.push({id:s})}),{itemResources:e,added:o.filter(({id:s})=>!t.includes(s))}}async function B(e,r,t,a){const o=await W(r),s=r.map(({id:n,type:i})=>new(o.get(i))({url:t,layerId:n,sourceJSON:a.find(({id:l})=>l===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:i,loaded:l,defaultPopupTemplate:u}=n;if(!l||u==null)return;const y={id:i,popupInfo:u.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(y.layerType=n.operationalLayerType),S(n,y,e)})}async function W(e){const r=[];e.forEach(({type:o})=>{const s=Y(o),n=J[s];r.push(n())});const t=await Promise.all(r),a=new Map;return e.forEach(({type:o},s)=>{a.set(o,t[s])}),a}function S(e,r,t){e.isTable?T(t.tables,r):T(t.layers,r)}function T(e,r){const t=e.findIndex(({id:a})=>a===r.id);t===-1?e.push(r):e[t]=r}function X(e,r){const t=e.layers.some(a=>a.layerType==="OrientedImageryLayer");f(r,c.ORIENTED_IMAGERY_LAYER,t)}function Z(e,r){const t=e.some(a=>a.type==="oriented-imagery");f(r,c.ORIENTED_IMAGERY_LAYER,t)}async function k(e,r,t){X(t,r)}async function q(e,r){const{url:t,layerId:a,title:o,fullExtent:s,isTable:n}=e,i=R(t);r.url=(i?.serverType==="FeatureServer"?t:`${t}/${a}`)??null,r.title||=o,r.extent=null,n||s==null||(r.extent=await N(s)),d(r,c.METADATA),d(r,c.MULTI_LAYER),x(r,c.SINGLE_LAYER),f(r,c.TABLE,n),Z([e],r)}async function ne(e,r){return j({layer:e,itemType:E,validateLayer:A,createItemData:(t,a)=>_(a,[t]),errorNamePrefix:g,setItemProperties:k},r)}async function se(e,r,t){return D({layer:e,itemType:E,validateLayer:A,createItemData:(a,o)=>Promise.resolve(v(a)),errorNamePrefix:M,newItem:r,setItemProperties:q},t)}export{ne as save,se as saveAs};