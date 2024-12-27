import{re as M,rf as T,rg as _,y as S,B as D,$ as L,z as v,ro as A,c_ as y,aU as k,aV as E,C,q as g,rQ as l,t8 as N,Q as u,ao as I,t0 as G,kr as w,t1 as R,a_ as U,c as o,d as r,E as O,hv as P,G as z,j,ad as F,cW as H,M as x}from"./main-KOPTRisL.js";import{t as d,P as b,A as K,Y as $,V}from"./KnowledgeGraphSublayer-VSk21z03-D0vwvYBN.js";import{F as Y}from"./knowledgeGraphService-BTB1M7Gx-DLWSun7n.js";import"./GraphQueryStreaming-U8ctbyJL-1jKX1h1P.js";import"./FeatureStore-CGZUrE_U-DQbtEu0I.js";import"./BoundsStore-5unyB8-T-Bee9U4x5.js";import"./PooledRBush-DFMOIq_L-CanZMQZi.js";import"./timeSupport-sB9XTwIv-IwmgC9Bx.js";import"./optimizedFeatureQueryEngineAdapter-kZ9wH51p-BMKU-Egs.js";import"./QueryEngine-DDOrno8f-CG9xe7Mn.js";import"./WhereClause-D233Ox-8-CLWkfCyu.js";import"./TimeOnly-BR6daUyu-tYTZNTIq.js";import"./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js";import"./utils-CpnbG32Y-BOKFBlYe.js";import"./utils-BszyTz9P-k9TpoZGx.js";import"./utils-DN5yax8A-CF99_Eg5.js";import"./clientSideDefaults-DaxivApY-DrIUqb26.js";import"./capabilities-Cjn77swe-Y9lFlGVh.js";let n=class extends M(T(_(S(D(L(v(A(x)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(y.ofType(d)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(y.ofType(d)),this.type="knowledge-graph",this.url=null,this.addHandles(k(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),E))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){C(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await b(this)}async _fetchMetadata(){if(!this.url)throw new g("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await Y(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===l.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new K({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await $(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,N(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new g("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):a&&a.size>0&&a.forEach((s,h)=>{const p=this._graphTypeLookup.get(h);switch(p?.type){case"relationship":t.push(p);break;case"entity":e.push(p)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach(t=>{e(t)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await b(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new d({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(B(this.inclusionModeDefinition).then(s=>{const h=q(a);e[t]=h.itemRelativeUrl,i.toAdd.push({resource:h,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return I(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a?.portalItem,h=a?.resources,p=G(a?.origin);if(!s||!h||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:f}=this;if(!f||this._displaysAllRecords(f))return void(this.definitionSetMap=null);const c=this.originIdOf("inclusionModeDefinition");if(c===l.USER||this._namedTypesModified||p<c)this._saveUrlAsNewResource(t,i,h,s);else if(p===c&&e){const m=w(e,a);R(m)?this._saveUrlAsNewResource(t,i,h,s):t[i]=m}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):u.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===l.DEFAULTS?this._createSublayers(e,this.layers,t=>!!t.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===l.DEFAULTS?this._createSublayers(e,this.tables,t=>!t.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t,i)=>{const a=U(this.sublayerIdsCache,i,()=>new Set);t.members?.forEach(s=>{a.add(s.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){const t=[];for(const i of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const i of t)this.sublayerIdsCache.get(i.typeName)?.delete(i.id);return this._refreshNamedTypes(),t}};o([r()],n.prototype,"dataManager",void 0),o([r({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],n.prototype,"definitionSetMap",void 0),o([O("definitionSetMap")],n.prototype,"readDefinitionSetMap",null),o([P("definitionSetMap")],n.prototype,"writeDefinitionSetMap",null),o([r()],n.prototype,"inclusionModeDefinition",null),o([r()],n.prototype,"knowledgeGraph",void 0),o([r({type:y.ofType(d),json:{write:{ignoreOrigin:!0}}})],n.prototype,"layers",void 0),o([r()],n.prototype,"memberEntityTypes",void 0),o([r()],n.prototype,"memberRelationshipTypes",void 0),o([r({type:["KnowledgeGraphLayer"]})],n.prototype,"operationalLayerType",void 0),o([r()],n.prototype,"sublayerIdsCache",void 0),o([r({type:y.ofType(d),json:{write:{ignoreOrigin:!0}}})],n.prototype,"tables",void 0),o([r({json:{read:!1}})],n.prototype,"type",void 0),o([r(z)],n.prototype,"url",void 0),n=o([j("esri.layers.KnowledgeGraphLayer")],n);const ce=n;async function B(e){const t=await V(e);return new Blob([t],{type:"application/x-protobuf"})}function q(e){const t=`definitionSetMap-${F()}.dat`,i=H("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{ce as default};