import{D as p,q as m,am as s}from"./main-C9wvg2yZ.js";import{o as n}from"./MeshVertexAttributes-D9RxS-0O-D4aJPf3d.js";import{L as c}from"./vertexSpaceConversion-J1a6a3Ka-D9J27VPo.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-DgBMXhOd.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-B0j47Z_C.js";import"./projectPointToVector-D1BQGAFG-6k0Fpvsc.js";import"./meshVertexSpaceUtils-VVkhP71b-C527VOPs.js";import"./MeshLocalVertexSpace-DkOk3052-C4OtiScD.js";import"./vec3-DeYubiaN-DHwkzPiQ.js";import"./BufferView-BDYk8Sh_-BxaS90qZ.js";import"./vec4-DamUQeRS-DorZaa65.js";async function E(r,t,o){await Promise.resolve(),p(o);const e=c(r,t,{useEllipsoid:o?.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=r.cloneAndModifyVertexAttributes(new n({...e,uv:s(r.vertexAttributes.uv),color:s(r.vertexAttributes.color)}),t);return i.transform=null,i}export{E as convertMeshVertexSpace};
