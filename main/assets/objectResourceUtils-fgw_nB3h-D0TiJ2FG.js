const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-UPmzr-Ad-D3mtPceR.js","./main-C9wvg2yZ.js","./main-HZDgF7N9.css","./mat4f64-Dn1WEGBx-C99QVUMW.js","./quat-Xt9oEsiT-Q7pdCfnn.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./quatf64-C16JxGFv-BKWK1F8U.js","./BufferView-BDYk8Sh_-BxaS90qZ.js","./resourceUtils-D7idyxAc-BjkVzFWw.js","./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js"])))=>i.map(i=>d[i]);
import{b as At,j2 as dt,j3 as Q,jw as _t,eg as Ot,cQ as st,ek as Rt,ef as Ct,eq as tt,cN as Bt,ud as nt,hm as St,cO as Pt,im as Et,lT as Lt,us as Nt,mQ as it,ut as Ft,kO as ft,L as Gt,C as pt,q as Ut,uu as gt,iX as ot,j9 as at,cB as G,cH as L,cC as S,hi as N,uv as kt,Q as jt,bG as Ht}from"./main-C9wvg2yZ.js";import{m as qt}from"./devEnvironmentUtils-CxrVv3RG-CX5aoxVE.js";import{n as xt,o as Z}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{t as Dt,u as ut,o as Vt}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{ab as zt,ac as $t,g as X,ad as Qt,a3 as Xt,aa as V,s as Wt,ae as z,a9 as Kt,a4 as Yt,o as bt}from"./AttributeArray-BZcPy4-N-FTCU79tY.js";import{X as Zt,L as yt,C as Jt,l as wt,g as te,M as ee}from"./BufferView-BDYk8Sh_-BxaS90qZ.js";import{b as re,z as se,O as lt,j as ct}from"./vec3-DeYubiaN-DHwkzPiQ.js";import{G as ne,L as ht}from"./vec4-DamUQeRS-DorZaa65.js";import{U as ie,G as k,E as oe,c as ae,y as ue,d as le}from"./DefaultMaterial_COLOR_GAMMA-CLKlVrgi-C8yRNW0q.js";import{f as J}from"./resourceUtils-D7idyxAc-BjkVzFWw.js";import{s as ce}from"./NestedMap-Ddo7BfvO-BpVPk8mz.js";import{w as he,A as vt}from"./Indices-CMOcLwPM-BlIPLf7-.js";import{r as me}from"./requestImageUtils-D-UkoZHx-hB_GwabK.js";import{M as H}from"./orientedBoundingBox-CdpnVLBk-NDwnhF-k.js";import{N as O,s as de,e as et,u as fe}from"./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js";import{M as pe}from"./triangle-P3uC8zu1-DsglHvxg.js";import{m as ge}from"./Util-cAlFLh9R-BeELI0ae.js";import{T}from"./VertexAttribute-DqD5S0a2-3q90nikV.js";import{t as mt}from"./NormalAttribute.glsl-CIowDxbJ-BnDIEIty.js";import"./InterleavedLayout-BMFLQBGy-N4s2bhvJ.js";import"./types-ChhhI6OU-Cxh6dPlX.js";import"./interfaces-DN2-jsJC-DzMTiT5R.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./boundedPlane-DPc-vTSV-BVzNqFje.js";import"./sphere-_Zcui0FU-CoJiLujV.js";import"./plane-B2J4G_40-ODTmHfiE.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./lineSegment-CMEPBlyR-4Cx2zNRb.js";import"./renderState-CRtOsw3X-BnwI7CKv.js";import"./doublePrecisionUtils-BJbYwoii-kIP-tL_t.js";import"./quat-Xt9oEsiT-Q7pdCfnn.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-DgBMXhOd.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-B0j47Z_C.js";function xe(n,t){if(!n)return!1;const{size:e,data:r,indices:l}=n;L(t,0,0,0),L(v,0,0,0);let u=0,i=0;for(let a=0;a<l.length-2;a+=3){const c=l[a]*e,s=l[a+1]*e,o=l[a+2]*e;L(g,r[c],r[c+1],r[c+2]),L(P,r[s],r[s+1],r[s+2]),L($,r[o],r[o+1],r[o+2]);const h=pe(g,P,$);h?(S(g,g,P),S(g,g,$),N(g,g,1/3*h),S(t,t,g),u+=h):(S(v,v,g),S(v,v,P),S(v,v,$),i+=3)}return(i!==0||u!==0)&&(u!==0?(N(t,t,1/u),!0):i!==0&&(N(t,v,1/i),!0))}function be(n,t){if(!n)return!1;const{size:e,data:r,indices:l}=n;L(t,0,0,0);let u=-1,i=0;for(let a=0;a<l.length;a++){const c=l[a]*e;u!==c&&(t[0]+=r[c],t[1]+=r[c+1],t[2]+=r[c+2],i++),u=c}return i>1&&N(t,t,1/i),i>0}function ye(n,t,e){if(!n)return!1;L(e,0,0,0),L(v,0,0,0);let r=0,l=0;const{size:u,data:i,indices:a}=n,c=a.length-1,s=c+(t?2:0);for(let o=0;o<s;o+=2){const h=o<c?o+1:0,d=a[o<c?o:c]*u,f=a[h]*u;g[0]=i[d],g[1]=i[d+1],g[2]=i[d+2],P[0]=i[f],P[1]=i[f+1],P[2]=i[f+2],N(g,S(g,g,P),.5);const m=kt(g,P);m>0?(S(e,e,N(g,g,m)),r+=m):r===0&&(S(v,v,g),l++)}return r!==0?(N(e,e,1/r),!0):l!==0&&(N(e,v,1/l),!0)}const g=G(),P=G(),$=G(),v=G();class we{constructor(){this.uid=Ht()}}class ve extends we{constructor(t){super(),this.highlightGroupName=t,this.channel=fe.Highlight}}class W extends Wt{constructor(t,e,r=null,l=z.Mesh,u=null,i=-1){super(),this.material=t,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,c]of e)this._attributes.set(a,{...c,indices:he(c.indices)}),a===T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(t={}){const e=new W(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,e._attributes.set(l,r)}),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get attributes(){return this._attributes}getMutableAttribute(t){let e=this._attributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:Kt(e.data)},this._attributes.set(t,e)),e}setAttributeData(t,e){const r=this._attributes.get(t);r&&this._attributes.set(t,{...r,exclusive:!0,data:e})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===z.Mesh?this._computeAttachmentOriginTriangles(t):this.type===z.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(this._transformation!=null&&tt(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const e=this.attributes.get(T.POSITION);return xe(e,t)}_computeAttachmentOriginLines(t){const e=this.attributes.get(T.POSITION);return ye(e,Te(this.material.parameters,e),t)}_computeAttachmentOriginPoints(t){const e=this.attributes.get(T.POSITION);return be(e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(T.POSITION);if(!t||t.indices.length===0)return null;const e=this.type===z.Mesh?3:1;ge(t.indices.length%e==0,"Indexing error: "+t.indices.length+" not divisible by "+e);const r=vt(t.indices.length/e);return new Yt(r,e,t)}get transformation(){return this._transformation??ut}set transformation(t){this._transformation=t&&t!==ut?Vt(t):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(t){this._highlightGroupCounts.forEach((e,r)=>t(r))}allocateIdAndHighlight(t){const e=new ve(t);return this.addHighlight(e)}addHighlight(t){this.highlights.add(t);const{highlightGroupName:e}=t,r=(this._highlightGroupCounts.get(e)??0)+1;return this._highlightGroupCounts.set(e,r),t}removeHighlight(t){if(this.highlights.delete(t)){const{highlightGroupName:e}=t,r=this._highlightGroupCounts.get(e)??0;r<=1?this._highlightGroupCounts.delete(e):this._highlightGroupCounts.set(e,r-1)}}}function Te(n,t){return!(!("isClosed"in n)||!n.isClosed)&&t.indices.length>2}function q(n){if(n==null)return null;const t=n.offset!=null?n.offset:Lt,e=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:Nt,l=Z(1,0,0,0,1,0,t[0],t[1],1),u=Z(Math.cos(e),-Math.sin(e),0,Math.sin(e),Math.cos(e),0,0,0,1),i=Z(r[0],0,0,0,r[1],0,0,0,1),a=xt();return it(a,u,i),it(a,l,a),a}class Ie{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Me{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new Ie,this.numberOfVertices=0}}const B=()=>jt.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ae(n,t){const e=await _e(n,t),r=await Se(e.textureDefinitions??{},t);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i?.image?i.image.width*i.image.height*4:0}return{resource:e,textures:r,size:l+Ft(e)}}async function _e(n,t){const e=t?.streamDataRequester;if(e)return Oe(n,e,t);const r=await ft(Gt(n,t));if(r.ok===!0)return r.value.data;pt(r.error),Tt(r.error)}async function Oe(n,t,e){const r=await ft(t.request(n,"json",e));if(r.ok===!0)return r.value;pt(r.error),Tt(r.error.details.url)}function Tt(n){throw new Ut("",`Request for object resource failed: ${n}`)}function Re(n){const t=n.params,e=t.topology;let r=!0;switch(t.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=t.faces;if(u){if(t.vertexAttributes)for(const i in t.vertexAttributes){const a=u[i];a?.values?(a.valueType!=null&&a.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`),r=!1),a.valuesPerElement!=null&&a.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${e}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Ce(n,t){const e=new Array,r=new Array,l=new Array,u=new ce,i=n.resource,a=gt.parse(i.version||"1.0","wosr");Ee.validate(a);const c=i.model.name,s=i.model.geometries,o=i.materialDefinitions??{},h=n.textures;let d=0;const f=new Map;for(let m=0;m<s.length;m++){const p=s[m];if(!Re(p))continue;const b=Pe(p),I=p.params.vertexAttributes,A=[],M=x=>{if(p.params.topology==="PerAttributeArray")return null;const _=p.params.faces;for(const C in _)if(C===x)return _[C].values;return null},U=I[T.POSITION],D=U.values.length/U.valuesPerElement;for(const x in I){const _=I[x],C=_.values,Y=M(x)??vt(D);A.push([x,new H(C,Y,_.valuesPerElement,!0)])}const R=b.texture,y=h&&h[R];if(y&&!f.has(R)){const{image:x,parameters:_}=y,C=new bt(x,_);r.push(C),f.set(R,C)}const F=f.get(R),K=F?F.id:void 0,E=b.material;let w=u.get(E,R);if(w==null){const x=o[E.slice(E.lastIndexOf("/")+1)].params;x.transparency===1&&(x.transparency=0);const _=y&&y.alphaChannelUsage,C=x.transparency>0||_==="transparency"||_==="maskAndTransparency",Y=y?It(y.alphaChannelUsage):void 0,rt={ambient:ot(x.diffuse),diffuse:ot(x.diffuse),opacity:1-(x.transparency||0),transparent:C,textureAlphaMode:Y,textureAlphaCutoff:.33,textureId:K,initTextureTransparent:!0,doubleSided:!0,cullFace:et.None,colorMixMode:x.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(rt,t.materialParameters),w=new X(rt,t),u.set(E,R,w)}l.push(w);const Mt=new W(w,A);d+=A.find(x=>x[0]===T.POSITION)?.[1]?.indices.length??0,e.push(Mt)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:e},pivotOffset:i.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Be(e)}}function Be(n){const t=dt();return n.forEach(e=>{const r=e.boundingInfo;r!=null&&(Q(t,r.bbMin),Q(t,r.bbMax))}),t}async function Se(n,t){const e=new Array;for(const u in n){const i=n[u],a=i.images[0].data;if(!a){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+a,s="/textureDefinitions/"+u,o=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:at.REPEAT,t:at.REPEAT},preMultiplyAlpha:It(o)!==O.Opaque},d=t?.disableTextures?Promise.resolve(null):me(c,t);e.push(d.then(f=>({refId:s,image:f,parameters:h,alphaChannelUsage:o})))}const r=await Promise.all(e),l={};for(const u of r)l[u.refId]=u;return l}function It(n){switch(n){case"mask":return O.Mask;case"maskAndTransparency":return O.MaskBlend;case"none":return O.Opaque;default:return O.Blend}}function Pe(n){const t=n.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ee=new gt(1,2,"wosr");async function yr(n,t){const e=Le(qt(n));if(e.fileType==="wosr"){const h=await(t.cache?t.cache.loadWOSR(e.url,t):Ae(e.url,t)),{engineResources:d,referenceBoundingBox:f}=Ce(h,t);return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(t.cache)r=await t.cache.loadGLTF(e.url,t,!!t.usePBR);else{const{loadGLTF:h}=await At(()=>import("./loader-UPmzr-Ad-D3mtPceR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);r=await h(new ie(t.streamDataRequester),e.url,t,t.usePBR)}const l=r.model.meta?.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,ke(r,l));const i=!!t.usePBR,a=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:zt}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:$t},c={...t.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:o}=Ne(r,a,c,t,e.specifiedLodIndex);return{lods:s,referenceBoundingBox:o,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Le(n){const t=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Ne(n,t,e,r,l){const u=n.model,i=new Array,a=new Map,c=new Map,s=u.lods.length,o=dt();return u.lods.forEach((h,d)=>{const f=r.skipHighLods===!0&&(s>1&&d===0||s>3&&d===1)||r.skipHighLods===!1&&l!=null&&d!==l;if(f&&d!==0)return;const m=new Me(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(p=>{const b=f?new X({},r):Fe(u,p,m,t,e,a,c,r),{geometry:I,vertexCount:A}=Ge(p,b??new X({},r)),M=I.boundingInfo;M!=null&&d===0&&(Q(o,M.bbMin),Q(o,M.bbMax)),b!=null&&(m.stageResources.geometries.push(I),m.numberOfVertices+=A)}),f||i.push(m)}),{engineResources:i,referenceBoundingBox:o}}function Fe(n,t,e,r,l,u,i,a){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),s=n.materials.get(t.material),o=t.attributes.texCoord0!=null,h=t.attributes.normal!=null;if(s==null)return null;const d=Ue(s.alphaMode);if(!u.has(c)){if(o){const y=(F,K=!1)=>{if(F!=null&&!i.has(F)){const E=n.textures.get(F);if(E!=null){const w=E.data;i.set(F,new bt(J(w)?w.data:w,{...E.parameters,preMultiplyAlpha:!J(w)&&K,encoding:J(w)&&w.encoding!=null?w.encoding:void 0}))}}};y(s.textureColor,d!==O.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const m=s.color[0]**(1/k),p=s.color[1]**(1/k),b=s.color[2]**(1/k),I=s.emissiveFactor[0]**(1/k),A=s.emissiveFactor[1]**(1/k),M=s.emissiveFactor[2]**(1/k),U=s.textureColor!=null&&o?i.get(s.textureColor):null,D=Qt({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),R=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:_t;u.set(c,new X({...r,transparent:d===O.Blend,customDepthTest:de.Lequal,textureAlphaMode:d,textureAlphaCutoff:s.alphaCutoff,diffuse:[m,p,b],ambient:[m,p,b],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?et.None:et.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?mt.Attribute:mt.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:U?.id,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&o?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:U!=null&&!!U.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&o?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&o?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&o?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[I,A,M],mrrFactors:D?Xt:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:D,colorTextureTransformMatrix:q(s.colorTextureTransform),normalTextureTransformMatrix:q(s.normalTextureTransform),scale:[R[0],R[1]],occlusionTextureTransformMatrix:q(s.occlusionTextureTransform),emissiveTextureTransformMatrix:q(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:q(s.metallicRoughnessTextureTransform),...l},a))}const f=u.get(c);if(e.stageResources.materials.push(f),o){const m=p=>{p!=null&&e.stageResources.textures.push(i.get(p))};m(s.textureColor),m(s.textureNormal),m(s.textureOcclusion),m(s.textureEmissive),m(s.textureMetallicRoughness)}return f}function Ge(n,t){const e=n.attributes.position.count,r=oe(n.indices||e,n.primitiveType),l=V(3*e),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;re(l,u,n.transform,3,i);const a=[[T.POSITION,new H(l,r,3,!0)]];if(n.attributes.normal!=null){const s=V(3*e),{typedBuffer:o,typedBufferStride:h}=n.attributes.normal;Ot(j,n.transform),se(s,o,j,3,h),st(j)&&lt(s,s),a.push([T.NORMAL,new H(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=V(4*e),{typedBuffer:o,typedBufferStride:h}=n.attributes.tangent;Rt(j,n.transform),ne(s,o,j,4,h),st(j)&&lt(s,s,4),a.push([T.TANGENT,new H(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=V(2*e),{typedBuffer:o,typedBufferStride:h}=n.attributes.texCoord0;ae(s,o,2,h),a.push([T.UV0,new H(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*e);c.elementCount===4?c instanceof Zt?ht(s,c,255):c instanceof yt?ue(s,c):c instanceof Jt&&ht(s,c,1/256):(s.fill(255),c instanceof wt?ct(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof te?le(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof ee&&ct(s,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([T.COLOR,new H(s,r,4,!0)])}return{geometry:new W(t,a),vertexCount:e}}const j=xt();function Ue(n){switch(n){case"BLEND":return O.Blend;case"MASK":return O.Mask;case"OPAQUE":case null:case void 0:return O.Opaque}}function ke(n,t){for(let e=0;e<n.model.lods.length;++e){const r=n.model.lods[e];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,a=i.count,c=G(),s=G(),o=G(),h=new Uint8Array(4*a),d=new Float64Array(3*a),f=Ct(Dt(),l.transform);let m=0,p=0;for(let b=0;b<a;b++){i.getVec(b,s),u.getVec(b,c),tt(s,s,l.transform),Bt(o,s,t.center),nt(o,o,t.radius);const I=o[2],A=St(o),M=Math.min(.45+.55*A*A,1);nt(o,o,t.radius),f!==null&&tt(o,o,f),Pt(o,o),e+1!==n.model.lods.length&&n.model.lods.length>1&&Et(o,o,c,I>-1?.2:Math.min(-4*I-3.8,1)),d[m]=o[0],d[m+1]=o[1],d[m+2]=o[2],m+=3,h[p]=255*M,h[p+1]=255*M,h[p+2]=255*M,h[p+3]=255,p+=4}l.attributes.normal=new wt(d),l.attributes.color=new yt(h)}}}export{yr as fetch,Le as parseUrl};