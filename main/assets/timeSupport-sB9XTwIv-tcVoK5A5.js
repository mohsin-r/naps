const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-cnFh4oQ2-CuKJMTOs.js","./geometryEngineBase-DDJcGEx2-0XvuvKD3.js","./main-B2UX4EBG.js","./main-B0BSaEIx.css"])))=>i.map(i=>d[i]);
import{dU as $,dI as M,cc as j,aM as T,dG as E,dV as D,dW as J,dX as w,dY as W,dZ as X,d_ as z,c3 as F,d$ as H,b as L,q as b,dC as O,aN as k,e0 as B,e1 as K,bv as Q}from"./main-B2UX4EBG.js";const C=new T,tt=new T,V=new T,_={esriGeometryPoint:w,esriGeometryPolyline:W,esriGeometryPolygon:X,esriGeometryMultipoint:z};function gt(t,e,r,l=t.hasZ,s=t.hasM){if(e==null)return null;const n=t.hasZ&&l,i=t.hasM&&s;if(r){const o=F(V,e,t.hasZ,t.hasM,"esriGeometryPoint",r,l,s);return w(o,n,i)}return w(e,n,i)}function P(t,e,r,l,s,n,i=e,o=r){const u=e&&i,a=r&&o,f=l!=null?"coords"in l?l:l.geometry:null;if(f==null)return null;if(s){let c=H(tt,f,e,r,t,s,i,o);return n&&(c=F(V,c,u,a,t,n)),_[t]?.(c,u,a)??null}if(n){const c=F(V,f,e,r,t,n,i,o);return _[t]?.(c,u,a)??null}return $(C,f,e,r,i,o),_[t]?.(C,u,a)??null}function Tt(t){return t&&x in t?JSON.parse(JSON.stringify(t,et)):t}const x="_geVersion",et=(t,e)=>t!==x?e:void 0;function A(t,e){return t?e?4:3:e?3:2}function Gt(t,e,r,l){if(!e?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const s=t.coords,n=[],i=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:o,coords:u}=e,a=A(r,l);let f=0;for(const c of o){const p=nt(i,u,f,c,r,l);p&&n.push(p),f+=c*a}if(n.sort((c,p)=>{let I=c[2]-p[2];return I===0&&r&&(I=c[4]-p[4]),I}),n.length){let c=6*n[0][2];s[0]=n[0][0]/c,s[1]=n[0][1]/c,r&&(c=6*n[0][4],s[2]=c!==0?n[0][3]/c:0),(s[0]<i[0]||s[0]>i[1]||s[1]<i[2]||s[1]>i[3]||r&&(s[2]<i[4]||s[2]>i[5]))&&(s.length=0)}if(!s.length){const c=e.lengths[0]?rt(u,0,o[0],r,l):null;if(!c)return null;s[0]=c[0],s[1]=c[1],r&&c.length>2&&(s[2]=c[2])}return t}function nt(t,e,r,l,s,n){const i=A(s,n);let o=r,u=r+i,a=0,f=0,c=0,p=0,I=0;for(let S=0,G=l-1;S<G;S++,o+=i,u+=i){const y=e[o],h=e[o+1],d=e[o+2],N=e[u],R=e[u+1],Y=e[u+2];let g=y*R-N*h;p+=g,a+=(y+N)*g,f+=(h+R)*g,s&&(g=y*Y-N*d,c+=(d+Y)*g,I+=g),y<t[0]&&(t[0]=y),y>t[1]&&(t[1]=y),h<t[2]&&(t[2]=h),h>t[3]&&(t[3]=h),s&&(d<t[4]&&(t[4]=d),d>t[5]&&(t[5]=d))}if(p>0&&(p*=-1),I>0&&(I*=-1),!p)return null;const m=[a,f,.5*p];return s&&(m[3]=c,m[4]=.5*I),m}function rt(t,e,r,l,s){const n=A(l,s);let i=e,o=e+n,u=0,a=0,f=0,c=0;for(let p=0,I=r-1;p<I;p++,i+=n,o+=n){const m=t[i],S=t[i+1],G=t[i+2],y=t[o],h=t[o+1],d=t[o+2],N=l?lt(m,S,G,y,h,d):st(m,S,y,h);if(N)if(u+=N,l){const R=ot(m,S,G,y,h,d);a+=N*R[0],f+=N*R[1],c+=N*R[2]}else{const R=it(m,S,y,h);a+=N*R[0],f+=N*R[1]}}return u>0?l?[a/u,f/u,c/u]:[a/u,f/u]:r>0?l?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function st(t,e,r,l){const s=r-t,n=l-e;return Math.sqrt(s*s+n*n)}function lt(t,e,r,l,s,n){const i=l-t,o=s-e,u=n-r;return Math.sqrt(i*i+o*o+u*u)}function it(t,e,r,l){return[t+.5*(r-t),e+.5*(l-e)]}function ot(t,e,r,l,s,n){return[t+.5*(l-t),e+.5*(s-e),r+.5*(n-r)]}function ut(t){return t==="mesh"?B:K(t)}function U(t,e){return t?e?4:3:e?3:2}function at(t,e,r,l){return Z(t,e,r,l.coords[0],l.coords[1])}function ct(t,e,r,l,s,n){const i=U(s,n),{coords:o,lengths:u}=l;if(!u)return!1;for(let a=0,f=0;a<u.length;a++,f+=i)if(!Z(t,e,r,o[f],o[f+1]))return!1;return!0}function Z(t,e,r,l,s){if(!t)return!1;const n=U(e,r),{coords:i,lengths:o}=t;let u=!1,a=0;for(const f of o)u=ft(u,i,n,a,f,l,s),a+=f*n;return u}function ft(t,e,r,l,s,n,i){let o=t,u=l;for(let a=l,f=l+s*r;a<f;a+=r){u=a+r,u===f&&(u=l);const c=e[a],p=e[a+1],I=e[u],m=e[u+1];(p<i&&m>=i||m<i&&p>=i)&&c+(i-p)/(m-p)*(I-c)<n&&(o=!o)}return o}const v="unsupported-query",pt={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},q={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function It(t){return t!=null&&q.spatialRelationship[t]===!0}function mt(t){return t!=null&&q.queryGeometry[Q(t)]===!0}function yt(t){return t!=null&&q.layerGeometry[t]===!0}function ht(){return L(()=>import("./geometryEngineJSON-cnFh4oQ2-CuKJMTOs.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.g)}function Pt(t,e,r,l,s){if(M(e)&&r==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains")){const n=j(new T,e,!1,!1);return Promise.resolve(i=>at(n,!1,!1,i))}if(M(e)&&r==="esriGeometryMultipoint"){const n=j(new T,e,!1,!1);if(t==="esriSpatialRelContains")return Promise.resolve(i=>ct(n,!1,!1,i,l,s))}if(E(e)&&r==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains"))return Promise.resolve(n=>D(e,P(r,l,s,n)));if(E(e)&&r==="esriGeometryMultipoint"&&t==="esriSpatialRelContains")return Promise.resolve(n=>J(e,P(r,l,s,n)));if(E(e)&&t==="esriSpatialRelIntersects"){const n=ut(r);return Promise.resolve(i=>n(e,P(r,l,s,i)))}return ht().then(n=>{const i=n[pt[t]].bind(null,e.spatialReference,e);return o=>i(P(r,l,s,o))})}async function Et(t,e,r){const{spatialRel:l,geometry:s}=t;if(s){if(!It(l))throw new b(v,"Unsupported query spatial relationship",{query:t});if(O(s.spatialReference)&&O(r)){if(!mt(s))throw new b(v,"Unsupported query geometry type",{query:t});if(!yt(e))throw new b(v,"Unsupported layer geometry type",{query:t});if(t.outSR)return k(t.geometry?.spatialReference,t.outSR)}}}function bt(t){if(E(t))return!0;if(M(t)){for(const e of t.rings)if(e.length!==5||e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1;return!0}return!1}async function _t(t,e){if(!t)return null;const r=e.featureAdapter,{startTimeField:l,endTimeField:s}=t;let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(l&&s)await e.forEach(o=>{const u=r.getAttribute(o,l),a=r.getAttribute(o,s);u==null||isNaN(u)||(n=Math.min(n,u)),a==null||isNaN(a)||(i=Math.max(i,a))});else{const o=l||s;await e.forEach(u=>{const a=r.getAttribute(u,o);a==null||isNaN(a)||(n=Math.min(n,a),i=Math.max(i,a))})}return{start:n,end:i}}function vt(t,e,r){if(!e||!t)return null;const{startTimeField:l,endTimeField:s}=t;if(!l&&!s)return null;const{start:n,end:i}=e;if(n===null&&i===null)return null;if(n===void 0&&i===void 0)return Rt();const o=r.getAttributeAsTimestamp?.bind(r)??r.getAttribute.bind(r);return l&&s?Nt(o,l,s,n,i):dt(o,l||s,n,i)}function Nt(t,e,r,l,s){return l!=null&&s!=null?n=>{const i=t(n,e),o=t(n,r);return(i==null||i<=s)&&(o==null||o>=l)}:l!=null?n=>{const i=t(n,r);return i==null||i>=l}:s!=null?n=>{const i=t(n,e);return i==null||i<=s}:void 0}function dt(t,e,r,l){return r!=null&&l!=null&&r===l?s=>t(s,e)===r:r!=null&&l!=null?s=>{const n=t(s,e);return n!=null&&n>=r&&n<=l}:r!=null?s=>{const n=t(s,e);return n!=null&&n>=r}:l!=null?s=>{const n=t(s,e);return n!=null&&n<=l}:void 0}function Rt(){return()=>!1}export{_t as G,Et as R,vt as T,P as a,Pt as d,gt as e,bt as g,Gt as n,Tt as r};