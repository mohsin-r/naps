import{b5 as b,D as p,L as g,kc as N,kd as v}from"./main-B2UX4EBG.js";class m{constructor(t,e,s){this.assetName=t,this.assetMimeType=e,this.parts=s}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&b(this.parts,t.parts,(e,s)=>e.equals(s))}isOnService(t){return this.parts.every(e=>e.isOnService(t))}makeHash(){let t="";for(const e of this.parts)t+=e.partHash;return t}async toBlob(t){const{parts:e}=this;if(e.length===1)return e[0].toBlob(t);const s=await Promise.all(e.map(a=>a.toBlob(t)));return p(t),new Blob(s)}}class H{constructor(t,e){this.partUrl=t,this.partHash=e}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(t){const{data:e}=await g(this.partUrl,{responseType:"blob"});return p(t),e}}function M(r){return A(r?.source)}function u(r){return Array.isArray(r)?r.every(t=>t instanceof m):!1}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,l=/\.(gltf|glb)/i;function A(r){return r?Array.isArray(r)?r.some(f):f(r):!1}function f(r){if(r instanceof File){const{type:t,name:e}=r;return c.test(t)||l.test(e)}return c.test(r.assetMimeType)||l.test(r.assetName)}function S(r,t){if(!r)return!1;const{source:e}=r;return T(e,t)}function U(r,t){if(r===t)return!0;const{source:e}=r,{source:s}=t;if(e===s)return!0;if(u(e)&&u(s)){if(e.length!==s.length)return!1;const a=(n,o)=>n.assetName<o.assetName?-1:n.assetName>o.assetName?1:0,i=[...e].sort(a),y=[...s].sort(a);for(let n=0;n<i.length;++n)if(!i[n].equals(y[n]))return!1;return!0}return!1}function T(r,t){if(Array.isArray(r)){const e=r;return e.length>0&&e.every(s=>h(s,t))}return h(r,t)}function h(r,t){return r instanceof m&&r.isOnService(t)}function q(r,t){return r instanceof File?N(r,t):v(r.assetMimeType,r.assetName,t)}function O(r){return Array.isArray(r)?r:[r]}function d(r){return!!r.original}export{S as B,U as H,O,d as S,M as T,m as i,q,H as v};