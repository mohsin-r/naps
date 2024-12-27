import{ki as S,aj as d,jO as y,aa as g,kj as F,a_ as l,Q as N}from"./main-B2UX4EBG.js";import{F as h}from"./Mesh-BvaroTE0-CgJTYrTL.js";import{v as D,i as M}from"./External-BllXL05R-DsxMvCxK.js";import{s as O,e as T}from"./meshFeatureAttributes-DC-71SuC-BDNkn-30.js";import"./MeshTransform-BFYjlBv2-O9Z8okes.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quat-Xt9oEsiT-7qMvysTP.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./MeshVertexAttributes-D9RxS-0O-aspAX_VD.js";import"./MeshLocalVertexSpace-DkOk3052-jx6hXhoh.js";import"./meshVertexSpaceUtils-VVkhP71b-H83MFUJ3.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./Indices-CMOcLwPM-CnCXUuhb.js";import"./plane-B2J4G_40-Dg370CQZ.js";import"./deduplicate-KcKkQhWf-AM5o0wEe.js";import"./projectPointToVector-D1BQGAFG-Dv9b2E5j.js";import"./vertexSpaceConversion-J1a6a3Ka-CCFuHhpY.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-CeNHFsWj.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-BssSUPJk.js";import"./vec3-DeYubiaN-Cq-b8gbH.js";import"./BufferView-BDYk8Sh_-BfePcnXN.js";import"./vec4-DamUQeRS-C6uToQ0I.js";const I=()=>N.getLogger("esri.rest.support.meshFeatureSet");function et(t,o,e){const r=e.features;e.features=[],delete e.geometryType;const s=S.fromJSON(e);if(s.geometryType="mesh",!e.assetMaps)return s;const n=w(o,e.assetMaps),i=t.sourceSpatialReference??d.WGS84,m=e.globalIdFieldName,{outFields:a}=t,c=a!=null&&a.length>0?L(a.includes("*")?null:new Set(a)):()=>({});for(const u of r){const p=P(u,m,i,o,n);s.features.push(new y({geometry:p,attributes:c(u)}))}return s}function L(t){return({attributes:o})=>{if(!o)return{};if(!t)return o;for(const e in o)t.has(e)||delete o[e];return o}}function P(t,o,e,r,s){const n=t.attributes[o],i=s.get(n);if(i==null||!t.geometry)return null;const m=O(t.attributes,e,r.transformFieldRoles),a=g.fromJSON(t.geometry);a.spatialReference=e;const c=T(t.attributes,r.transformFieldRoles),u=e.isGeographic?"local":"georeferenced",p=b(i);return p?h.createWithExternalSource(m,p,{extent:a,transform:c,vertexSpace:u,unitConversionDisabled:!0}):h.createIncomplete(m,{extent:a,transform:c,vertexSpace:u})}var f;function w(t,o){const e=new Map;for(const r of o){const s=r.parentGlobalId;if(s==null)continue;const n=r.assetName,i=r.assetType,m=r.assetHash,a=r.assetURL,c=r.conversionStatus,u=r.seqNo,p=F(i,t.supportedFormats);if(!p){I().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const E=l(e,s,()=>({files:new Map}));l(E.files,n,()=>({name:n,type:i,mimeType:p,status:v(c),parts:[]})).parts[u]={hash:m,url:a}}return e}function b(t){const o=Array.from(t.files.values()),e=new Array;for(const r of o){if(r.status!==f.COMPLETED)return null;const s=new Array;for(const n of r.parts){if(!n)return null;s.push(new D(n.url,n.hash))}e.push(new M(r.name,r.mimeType,s))}return e}function v(t){switch(t){case"COMPLETED":case"SUBMITTED":return f.COMPLETED;case"INPROGRESS":return f.PENDING;default:return f.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(f||(f={}));export{w as assetMapFromAssetMapsJSON,P as extractMesh,et as meshFeatureSetFromJSON};