import{c as y,j as L,cB as p,D as v,cC as h,cD as u,cE as l,cF as f}from"./main-B2UX4EBG.js";import{u as x,E as S,w as P}from"./lineSegment-CMEPBlyR-BiyqhvqX.js";import{z as _,t as E,S as V}from"./sphere-_Zcui0FU-DWMKiHse.js";import{y as b}from"./Octree-xqikAfA7-CPDsTAoE.js";import{k as j}from"./edgeProcessing-DDKzdzmf-DAdat4FB.js";import"./plane-B2J4G_40-Dg370CQZ.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./Util-cAlFLh9R-oIQpZgxD.js";import"./deduplicate-KcKkQhWf-AM5o0wEe.js";import"./Indices-CMOcLwPM-CnCXUuhb.js";import"./InterleavedLayout-BMFLQBGy-CH9vyKrS.js";import"./BufferView-BDYk8Sh_-BfePcnXN.js";import"./types-ChhhI6OU-Cxh6dPlX.js";import"./VertexAttribute-DqD5S0a2-3q90nikV.js";import"./glUtil-BonlLoq2-D0rcRaN2.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";const I=1e3;function T(t,e,o){const n=V(),i=_(n);return f(i,i,t,.5),f(i,i,e,.5),n[3]=l(i,t),h(i,i,o),n}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=x(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),v(e),await this._ensureEdgeLocations(t,e);const o=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(t,n,o),o.length<I),t.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(t,e){const o=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:d,uid:r}=s;o.push({id:d,uid:r})}return!0},t.bounds),!o.length)return;const n={components:o},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,e??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(t){const e=new m(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const o=[];this._edges.forEachNeighbor(n=>(n.component===e&&o.push(n),!0),e.bounds),this._edges.remove(o),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(e==null||t.uid!==e.uid)return;const o=j.createView(t.locations),n=new Array(o.count),i=p(),s=p();for(let c=0;c<o.count;c++){o.position0.getVec(c,i),o.position1.getVec(c,s);const a=T(i,s,t.origin),w=new k(e,c,a);n[c]=w}this._edges.add(n);const{objectIds:d,origin:r}=t;e.info={locations:o,objectIds:d,origin:r}}_addCandidates(t,e,o){const{info:n}=e.component,{origin:i,objectIds:s}=n,d=n.locations,r=d.position0.getVec(e.index,this._tmpP1),c=d.position1.getVec(e.index,this._tmpP2);h(r,r,i),h(c,c,i);const a=s[d.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,r,c,o),C(t,a,r,o),C(t,a,c,o)}_addEdgeCandidate(t,e,o,n,i){if(!t.returnEdge)return;const s=_(t.bounds),d=S(o,n,this._tmpLineSegment),r=P(d,s,this._tmpP3);E(t.bounds,r)&&i.push({type:"edge",objectId:e,target:u(r),distance:l(s,r),start:u(o),end:u(n)})}};g=y([L("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const Y=g;function C(t,e,o,n){if(!t.returnVertex||!E(t.bounds,o))return;const i=_(t.bounds);n.push({type:"vertex",objectId:e,target:u(o),distance:l(i,o)})}class m{constructor(e,o){this.id=e,this.bounds=o,this.info=null,this.uid=++m.uid}}m.uid=0;class k{constructor(e,o,n){this.component=e,this.index=o,this.bounds=n}}export{Y as default};
