import{ak as A,D as l,jN as V,um as X,un as Y,L as m,cW as h,kj as Z,uo as ee,aj as se,fd as te,up as re,jl as j,a_ as oe,T as ne,uq as S,ur as x,C as ae,kb as ie,Q as ce,b7 as le}from"./main-C9wvg2yZ.js";import{B as ue,q as pe,i as D,v as E,O as fe}from"./External-BllXL05R-CBzP-Vnu.js";import{p as me,c as de,m as ge,f as he,$ as O,x as we,g as ye,d as Pe,l as be,i as Te}from"./meshSpatialReferenceScaleUtils-Cq1Y6Eab-DLZyQsCD.js";import{e as Ae,s as je}from"./meshFeatureAttributes-DC-71SuC-By3xLfjH.js";import"./MeshTransform-BFYjlBv2-C45tcubr.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quat-Xt9oEsiT-Q7pdCfnn.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";const v={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function w(e,s=r=>{},t){return new ve(e,s,t)}let ve=class{constructor(e,s=r=>{},t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let r=0;r<e;r++){const o=r,n=1/e;this._weights[o]=n,this._progressMap.set(o,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(e===1&&A("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,r]of this._timingsMap){const o=Math.round(r.end-r.start)/1e3,n=Math.round(o/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:o,relativeTime:n})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),A("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const r=oe(this._timingsMap,e,()=>({start:t,end:0}));s===1&&(r.end=t)}this.emitProgress()}simulate(e,s){return R(t=>this.setProgress(e,t),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function R(e=t=>{},s=Se){const t=performance.now();e(0);const r=setInterval(()=>{const o=performance.now()-t,n=1-Math.exp(-o/s);e(n)},Ne);return ne(()=>{clearInterval(r),e(1)})}function Me(e,s=_e){return S(x(e*C/s))}function Fe(e,s=ke){return S(x(e*C/s))}const _e=10,ke=10,C=8e-6,Ne=j(50),Se=j(1e3),I=1e6,N=20*I,xe=2e9,De=3;async function Ee({data:e,name:s,description:t},r,o){let n=null;try{const a=h(r,"uploads"),i=h(a,"info"),{data:u}=await m(i,{query:{f:"json"},responseType:"json"});l(o);const d=le(r),g=u.maxUploadFileSize*I,f=d?xe:g,c=d?Math.min(N,g):N;if(e.size>f)throw new Error("Data too large");const $=h(a,"register"),{data:M}=await m($,{query:{f:"json",itemName:Oe(s),description:t},responseType:"json",method:"post"});if(l(o),!M.success)throw new Error("Registration failed");const{itemID:H}=M.item;n=h(a,H);const z=h(n,"uploadPart"),F=Math.ceil(e.size/c),y=new Array;for(let p=0;p<F;++p)y.push(e.slice(p*c,Math.min((p+1)*c,e.size)));const P=y.slice().reverse(),_=new Array,G=w(F,o?.onProgress,"uploadItem"),J=async()=>{for(;P.length!==0;){const p=y.length-P.length,b=P.pop(),T=new FormData,W=G.simulate(p,Me(b.size));try{T.append("f","json"),T.append("file",b),T.append("partId",`${p}`);const{data:Q}=await m(z,{timeout:0,body:T,responseType:"json",method:"post"});if(l(o),!Q.success)throw new Error("Part upload failed")}finally{W.remove()}}};for(let p=0;p<De&&P.length!==0;++p)_.push(J());await Promise.all(_);const K=h(n,"commit"),{data:k}=await m(K,{query:{f:"json",parts:y.map((p,b)=>b).join(",")},responseType:"json",method:"post"});if(l(o),!k.success)throw new Error("Commit failed");return k.item}catch(a){if(n!=null){const i=h(n,"delete");await m(i,{query:{f:"json"},responseType:"json",method:"post"})}throw a}}function Oe(e){return e.replaceAll("/","_").replaceAll("\\","_")}async function ps(e,s,t){const r=e.length;if(!r)return t?.onProgress?.(1),[];const o=w(r,t?.onProgress,"uploadAssets");return Promise.all(e.map((n,a)=>Re(n,s,{...t,onProgress:o.makeOnProgress(a)})))}async function Re(e,{layer:s,ongoingUploads:t},r){const o=t.get(e);if(o)return o;if(!Ze(s))throw new me;if(Ce(e,s))return r?.onProgress?.(1),e;const n=Ie(e,s,r);t.set(e,n);try{await n}finally{t.delete(e)}return e}function Ce(e,s){const{parsedUrl:t}=s;return t!=null&&e.metadata.externalSources.some(r=>ue(r,t))}async function Ie(e,s,t){const{metadata:r}=e,{displaySource:o}=r,n=q(o?.source,s,{checkForConversionRequired:A("enable-feature:georeferenced-uploads")}),a=n!=null?qe(n,s,t):r.externalSources.length>0?Be(e,s,t):Ue(e,s,t),i=await a;return l(t),e.addExternalSources([i]),e}async function qe(e,s,t){return{source:await B(e,s,t),original:!0,unitConversionDisabled:!0}}async function Be(e,s,t){const r=L(s),{externalSources:o}=e.metadata,n=$e(o,s);if(!n)throw new de;const a=w(v.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i=await B(n,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:i,original:!0}]);const u=n.reduce((g,{asset:f})=>f instanceof File?g+f.size:g,0),d=a.simulate("serviceAssetsToGlb",Fe(u));try{const{source:g,transform:f,origin:c}=await Qe(i,s,r);return e.transform=f,c&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[c.x,c.y,c.z??0],e.spatialReference=c.spatialReference)),{source:g,unitConversionDisabled:!0}}finally{d.remove()}}async function Ue(e,s,t){const r=w(v.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=Le(e,s,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:await U([o],s,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function Le(e,s,t){const r=L(s),o=await e.load(t),n=await o.toBinaryGLTF({origin:o.origin,signal:t?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return l(t),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${V()}.glb`,assetType:r}}function $e(e,s){for(const t of e){const r=q(t.source,s);if(r)return r}return null}function q(e,{infoFor3D:s},t={}){if(!e)return null;const{supportedFormats:r,editFormats:o}=s,n=fe(e),a=new Array,i=X(s),u=Y(s);let d=!1;for(const g of n){const f=He(g,r);if(!f)return null;const{assetType:c}=f;if(t.checkForConversionRequired&&(c===i||c===u))return null;o.includes(c)&&(d=!0),a.push(f)}return d?a:null}function He(e,s){const t=pe(e,s);return t?{asset:e,assetType:t}:null}async function B(e,s,t){return U(e.map(r=>ze(r,t)),s,t)}async function U(e,s,t){const r=w(v.uploadAssetBlobs,t?.onProgress,"uploadAssetBlobs"),o=await Je(e,s,{...t,onProgress:r.makeOnProgress("prepareAssetItems")});l(t);const n=o.map(({item:i})=>i),{uploadResults:a}=await Ke(n,s,{...t,onProgress:r.makeOnProgress("uploadAssetItems")});return l(t),e.map((i,u)=>We(o[u],a[u],s))}async function ze(e,s){const{asset:t,assetType:r}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:r};const o=await t.toBlob(s);return l(s),{blob:o,assetName:t.assetName,assetType:r}}async function Ge(e,s,t){const{blob:r,assetType:o,assetName:n}=e;let a=null;try{const i=await Ee({data:r,name:n},s.url,t);l(t),a={assetType:o,assetUploadId:i.itemID}}catch(i){ae(i),es().warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!a){const i=await ie(r);if(l(t),!i.isBase64)throw new be;a={assetType:o,assetData:i.data}}if(!a)throw new Te;return{item:a,assetName:n}}function Je(e,s,t){const r=w(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map(async(o,n)=>{const a=Ge(await o,s,{...t,onProgress:r.makeOnProgress(n)});return l(t),a}))}async function Ke(e,s,t){const r=R(t?.onProgress);try{const o=await m(h(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(l(t),o.data.uploadResults.length!==e.length)throw new ge(e.length,o.data.uploadResults.length);return o.data}finally{r.remove()}}function We(e,s,t){const{success:r}=s;if(!r){const{error:d}=s;throw new he(e.assetName,d)}const{assetHash:o}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,u=Z(a,i);if(!u)throw new O(a);return new D(n,u,[new E(`${t.parsedUrl.path}/assets/${o}`,o)])}async function Qe(e,s,t){const r=e.map(({assetName:n,parts:a})=>({assetName:n,assetHash:a[0].partHash}));let o;try{const n=h(s.parsedUrl.path,"convert3D"),a=s.capabilities?.operations.supportsAsyncConvert3D;o=(await(a?Ye:Xe)(n,{query:{f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:a},responseType:"json",timeout:0})).data}catch{throw new we}return Ve(s,o)}function Ve(e,s){const t={source:s.assets.map(r=>{const o=ee(r.contentType,e.infoFor3D.supportedFormats);if(!o)throw new O(o);return new D(r.assetName,r.contentType,[new E(r.assetURL,r.assetHash)])}),origin:void 0,transform:void 0};if(A("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=Ae(s.transform),s.spatialReference){const r=se.fromJSON(s.spatialReference);t.origin=je(s.transform,r)}}else t.transform=ye(e.spatialReference);return t}function Xe(e,s){return m(e,s)}async function Ye(e,s){const t=(await m(e,s)).data.statusUrl;for(;;){const r=(await m(t,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return m(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(r.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await te(ss)}}function Ze(e){return!!e.infoFor3D&&!!e.url}function L({infoFor3D:e}){const s=re(e);if(!s)throw new Pe;return s}function es(){return ce.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const ss=j(1e3);export{ps as uploadAssets};