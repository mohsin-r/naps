const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-tOQy13o6-Bjw4bVXa.js","./main-B2UX4EBG.js","./main-B0BSaEIx.css"])))=>i.map(i=>d[i]);
import{c as i,d as s,j as b,r_ as te,c_ as q,a7 as j,eG as re,cR as N,sY as ie,E as v,rS as se,y as ae,B as oe,$ as ne,rf as le,z as de,ro as pe,rp as ue,e9 as ce,bR as ye,a0 as he,tx as fe,rH as C,Q as m,C as me,cY as ge,aY as ve,q as p,oc as we,jO as be,rk as Ie,b as W,b7 as G,ty as Le,tz as Fe,a3 as Se,tA as _e,sd as Q,rQ as P,aE as Te,aX as Ee,tB as Oe,tC as xe,tD as Ae,rt as je,rM as Pe,rK as Re,rL as $,rs as De,tE as qe,rl as Ue,rm as Ne,oq as Ce,s4 as Ge,tg as Qe,tf as k,c0 as V,tF as $e,s as U,kA as ke,aV as Ve,ao as ze,L as B,am as Ke,cW as He,rv as Me,M as Je,s2 as z}from"./main-B2UX4EBG.js";import{F as We}from"./Mesh-BvaroTE0-CgJTYrTL.js";import{b as Be,v as Ye,g as Ze}from"./meshSpatialReferenceScaleUtils-Cq1Y6Eab--TwRnsih.js";import{Q as Xe,f as K}from"./SceneService-DQjtIpoK-lcqXaDO-.js";import{A as et}from"./associatedFeatureServiceUtils-vfs_1QFD-CupZLytv.js";import{t as tt}from"./capabilities-Cjn77swe-Y9lFlGVh.js";import{y as Y,o as rt,d as it,m as st}from"./I3SLayerDefinitions-CS63UqqU-C0maNWn-.js";import{p as at}from"./fetchService-DhIYtzwD-vYgJIzYd.js";import{D as ot}from"./persistable-DhwFrfNW-Bj7VOpDY.js";import{k as H,z as nt,j as lt}from"./elevationInfoUtils-Cubp_PC_-VB3dHDQA.js";import{_ as dt}from"./I3SUtil-D0XpA9Sd-D5WIJ_LF.js";import{h as pt,m as ut}from"./popupUtils-CGEHI2En-CvkG8GU5.js";import"./MeshTransform-BFYjlBv2-O9Z8okes.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quat-Xt9oEsiT-7qMvysTP.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./MeshVertexAttributes-D9RxS-0O-aspAX_VD.js";import"./MeshLocalVertexSpace-DkOk3052-jx6hXhoh.js";import"./meshVertexSpaceUtils-VVkhP71b-H83MFUJ3.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./Indices-CMOcLwPM-CnCXUuhb.js";import"./plane-B2J4G_40-Dg370CQZ.js";import"./deduplicate-KcKkQhWf-AM5o0wEe.js";import"./projectPointToVector-D1BQGAFG-Dv9b2E5j.js";import"./vertexSpaceConversion-J1a6a3Ka-CCFuHhpY.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-CeNHFsWj.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-BssSUPJk.js";import"./vec3-DeYubiaN-Cq-b8gbH.js";import"./BufferView-BDYk8Sh_-BfePcnXN.js";import"./vec4-DamUQeRS-C6uToQ0I.js";import"./External-BllXL05R-DsxMvCxK.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./jsonContext-v1mRP0aL-BIlCitQ5.js";import"./resourceUtils-Djt21JsK-DZw8o0qu.js";import"./resourceUtils-PAYBmvyK-CEmeOeje.js";import"./saveUtils-BQy3eBhU-0DFvUEM1.js";import"./resourceExtension-CvAjal1j-x57XjOqm.js";import"./projectVectorToVector-JABAqSd1-CKA-1xTR.js";import"./sphere-_Zcui0FU-DWMKiHse.js";import"./I3SBinaryReader-B-IG1_cG-Ch6kvnPP.js";import"./VertexAttribute-DqD5S0a2-3q90nikV.js";import"./floatRGBA-CNeCgBBY-DQr9K_Vf.js";import"./NormalAttribute.glsl-CIowDxbJ-BSGTaLuH.js";import"./interfaces-DN2-jsJC-DzMTiT5R.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./orientedBoundingBox-CdpnVLBk-CzCmweh4.js";function Z({associatedLayer:e,serviceUpdateTimeStamp:t}){const r=e?.editingInfo?.lastEditDate,o=e?.serverGens,n=r!=null,l=t!=null,d=n&&l&&t.lastUpdate!==r.getTime();return n&&(d||!l&&o?.minServerGen!==o?.serverGen)}const ct=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const r=this.associatedLayer?.timeInfo;if(r==null)return null;const o=r.clone();return z(o,this.fieldsIndex),o}set timeInfo(r){z(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:o}=this;if(o==null)return;const{startTimeField:n,endTimeField:l}=o;if(n==null&&l==null||Z({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const d=async c=>{let h=null;try{h=(await this.fetchStatistics?.(c,r))?.stats}catch{}if(h==null)return null;const{minTimeStr:I,min:E,maxTimeStr:O,max:x}=h,F=c===n?I??E:O??x;return F!=null?new Date(F):null},[u,y]=await Promise.all([d(n),d(l)]);if(n!=null&&u==null||l!=null&&y==null)return;const f=new V({start:u,end:y});this.setAtOrigin("timeInfo",new k({endField:l,startField:n,fullTimeExtent:f}),"service")}};return i([s({type:k,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([s({type:V,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([s({type:$e,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([s({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([s({type:L,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([b("esri.layers.mixins.TemporalSceneLayer")],t),t};let L=class extends U{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([s({type:String})],L.prototype,"endTimeField",void 0),i([s({type:String})],L.prototype,"startTimeField",void 0),L=i([b("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],L);let g=class extends U{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([s({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),i([s({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([s({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i([b("esri.layers.support.RangeInfo")],g);var _;let R=_=class extends te(q.ofType(j)){constructor(e){super(e)}clone(){return new _(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map(r=>{if(!t.equals(r.spatialReference)){if(!re(r.spatialReference,t))return e?.messages?.push(new N("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new j;ie(r,n,t),r=n}const o=r.toJSON(e);return delete o.spatialReference,o}).filter(r=>r!=null):(e?.messages?.push(new N("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(r=>r.toJSON(e)))}static fromJSON(e,t){const r=new _;return e.forEach(o=>r.add(j.fromJSON(o,t))),r}};R=_=i([b("esri.layers.support.PolygonCollection")],R);const T=R;var D;let w=D=class extends U{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new T,this._geometriesSource=null}initialize(){this.addHandles(ke(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,Ve))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=T.fromJSON(e,r):this._geometriesSource={url:ze(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await B(r,{responseType:"json",signal:t?.signal}),l=e.toJSON(),d=n.data.map(u=>({...u,spatialReference:l}));this.geometries=T.fromJSON(d,o),this._geometriesSource=null}clone(){const e=new D({geometries:Ke(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([s({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],w.prototype,"spatialRelationship",void 0),i([s({type:T,nonNullable:!0,json:{write:!0}}),ot({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],w.prototype,"geometries",void 0),i([v(["web-scene","portal-item"],"geometries")],w.prototype,"readGeometries",null),w=D=i([b("esri.layers.support.SceneFilter")],w);const yt=w;async function ht({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:o,path:n,customParameters:l,apiKey:d,signal:u}){if(t==null)throw new p(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=o.get(e);if(y==null)throw new p(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const f=t.find(I=>I.name===y.name);if(f==null)throw new p(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=He(n,f.href),{data:h}=await B(c,{query:{f:"json",...l,token:d},responseType:"json",signal:u});return h}async function ft(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(mt(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function mt(e){const{BlobReader:t,ZipReader:r,BlobWriter:o}=await W(()=>import("./zipjs-wrapper-DlcHxyCX-BFxi6l53.js"),[],import.meta.url),n=[];return(await new r(new t(e)).getEntries()).forEach(l=>{if(l.directory||/^__MACOS/i.test(l.filename))return;const d=new o,u=l.getData?.(d).then(y=>new File([y],l.filename));u&&n.push(u)}),Promise.all(n)}const gt=new Set(["3DObject","Point"]),M=Me();let a=class extends ct(se(Xe(ae(oe(ne(le(de(pe(ue(ce(Je))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new q,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null),this.associatedLayer=ye(this.associatedLayer)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&r.type!=="inherited"?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get attributeTableTemplate(){return this.associatedLayer?.attributeTableTemplate??null}get fieldsIndex(){return new he(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Y.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&fe(this.associatedLayer)}get geometryType(){return vt[this.profile]||"mesh"}set renderer(e){C(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??tt;const{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:d,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:y,supportsM:f,isVersioned:c,supportsAttachment:h},operations:{supportsEditing:I,supportsAdd:E,supportsUpdate:O,supportsDelete:x,supportsQuery:F,supportsQueryAttachments:X,supportsAsyncConvert3D:ee}}=e,S=e.operations.supportsChangeTracking,A=!!this.associatedLayer?.infoFor3D;return{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:n,supportsGeometryUpdate:A&&d,supportsUploadWithItemId:l},data:{supportsAttachment:h,supportsZ:y,supportsM:f,isVersioned:c},operations:{supportsQuery:F,supportsQueryAttachments:X,supportsEditing:I&&S,supportsAdd:A&&E&&S,supportsDelete:A&&x&&S,supportsUpdate:O&&S,supportsAsyncConvert3D:ee}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return r!=null&&J[r]?J[r]:(m.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(me),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await ge(this,{origin:"service"},t),C(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new ve;return this.geometryType==="mesh"?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r?.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=we(this.fieldsIndex,await pt(this,ut(this)));return dt(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new be;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Ie(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(K.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(K.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await W(()=>import("./editingSupport-tOQy13o6-Bjw4bVXa.js"),__vite__mapDeps([0,1,2]),import.meta.url);let o=t;await this.load();const n=this.associatedLayer;if(!n)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,u=o?.globalIdUsed??!0;if(d&&l==null)throw new p(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(d&&!u)throw new p(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return G(n.url)&&d&&e.deleteFeatures!=null&&l!=null&&(o={...o,globalIdToObjectId:await Le(n,e.deleteFeatures,l)}),r(this,n.source,e,o)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){t??={};const r=c=>{throw m.getLogger(this).error(".convertMesh()",c.message),c};await this.load(),this.infoFor3D||r(new p("invalid:layer","SceneLayer has no capability for mesh conversion"));const o=await this.extractAndFilterFiles(e),n=o.reduce((c,h)=>Fe(this.infoFor3D,h)?c+1:c,0);n===0&&r(new Be),n>1&&r(new Ye);const l=this.spatialReference,d=t.location??new Se({x:0,y:0,z:0,spatialReference:l}),u=d.spatialReference.isGeographic?"local":"georeferenced",y=We.createWithExternalSource(d,o,{vertexSpace:u,transform:Ze(d.spatialReference),unitConversionDisabled:!0}),[f]=await this.uploadAssets([y],{...t,useAssetOrigin:!t.location});return f}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await ft(e)).filter(r=>_e(t,r)):e}validateLayer(e){if(e.layerType&&!gt.has(e.layerType))throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const d=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=d;break;case"vertex-reference-frame":n=!0,l=!d;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some(n=>n.name===e.name),r=!!this.associatedLayer?.fields?.some(n=>n&&e.name===n.name),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=Q(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===P.SERVICE||l===P.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");this.associatedLayer?.infoFor3D==null||!e||!G(this.associatedLayer?.url)||!Z(this)||Q(this).setAtOrigin("fullExtent",e.clone(),P.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:o}=await et(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await at.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:o}),await this.associatedLayer.load()}catch(t){Te(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Ee(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&H(m.getLogger(this),nt("Mesh scene layers","relative-to-scene",e)),H(m.getLogger(this),lt("Scene layers",e))}async fetchStatistics(e,t){return await ht({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};i([s({types:{key:"type",base:Oe,typeMap:{selection:xe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),i([s({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),i([s({json:{read:!1}})],a.prototype,"associatedLayer",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),i([s({...M.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),i([s()],a.prototype,"types",null),i([s()],a.prototype,"typeIdField",null),i([s()],a.prototype,"templates",null),i([s()],a.prototype,"formTemplate",null),i([s()],a.prototype,"attributeTableTemplate",null),i([s({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),i([s({type:Ae,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),i([s(M.outFields)],a.prototype,"outFields",void 0),i([s({type:Y,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),i([v("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),i([s({type:[rt],readOnly:!0})],a.prototype,"materialDefinitions",void 0),i([s({type:[it],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),i([s({type:[st],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),i([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),i([s({readOnly:!0})],a.prototype,"statisticsInfo",void 0),i([s({type:q.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),i([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),i([s({type:yt,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([s(je)],a.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({type:String})],a.prototype,"geometryType",null),i([s(Pe)],a.prototype,"labelsVisible",void 0),i([s({type:[Re],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:$},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:$},write:!0}})],a.prototype,"labelingInfo",void 0),i([s(De)],a.prototype,"legendEnabled",void 0),i([s({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if(typeof e=="number"&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return r!==void 0?qe(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),i([s({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),i([s({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),i([s({types:Ue,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),i([s({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),i([v("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),i([s(Ne)],a.prototype,"popupEnabled",void 0),i([s({type:Ce,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),i([s({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),i([v("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),i([s({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),i([v("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),i([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),i([s({type:String,json:{read:!1}})],a.prototype,"profile",void 0),i([v("service","profile",["store.profile"])],a.prototype,"readProfile",null),i([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),i([s(Ge)],a.prototype,"screenSizePerspectiveEnabled",void 0),i([s({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),i([s(Qe)],a.prototype,"useViewTime",null),a=i([b("esri.layers.SceneLayer")],a);const J={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},vt={"mesh-pyramids":"mesh",points:"point"},yr=a;export{yr as default};
