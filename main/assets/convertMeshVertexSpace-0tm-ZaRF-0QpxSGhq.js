import{D as p,q as m,am as s}from"./main-KOPTRisL.js";import{o as n}from"./MeshVertexAttributes-D9RxS-0O-knllljl-.js";import{L as c}from"./vertexSpaceConversion-J1a6a3Ka-I30ilZ9b.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-zbkKn6n0.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-Q9Oc5TbN.js";import"./projectPointToVector-D1BQGAFG-ArNkPnsm.js";import"./meshVertexSpaceUtils-VVkhP71b-BSiAzrW2.js";import"./MeshLocalVertexSpace-DkOk3052-SG_LscvA.js";import"./vec3-DeYubiaN-CxzTJ7qG.js";import"./BufferView-BDYk8Sh_-Dl-S6ddq.js";import"./vec4-DamUQeRS-08W30TaQ.js";async function E(r,t,o){await Promise.resolve(),p(o);const e=c(r,t,{useEllipsoid:o?.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=r.cloneAndModifyVertexAttributes(new n({...e,uv:s(r.vertexAttributes.uv),color:s(r.vertexAttributes.color)}),t);return i.transform=null,i}export{E as convertMeshVertexSpace};