const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./featureLayerUtils-0tw9isWJ-DcVToX5O.js","./main-C9wvg2yZ.js","./main-HZDgF7N9.css","./utils-2iHN6TbU-Busgo12E.js","./originUtils-BLsWtgV9-B4sclfuf.js","./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js","./jsonContext-v1mRP0aL-C45xA8NZ.js","./saveUtils-BQy3eBhU-CidOx-Ko.js","./fetchService-DhIYtzwD-BSOdFRH0.js","./FeatureLayerSource-Boc5do0a-Cg5tH9R0.js","./MeshLocalVertexSpace-DkOk3052-C4OtiScD.js","./meshVertexSpaceUtils-VVkhP71b-C527VOPs.js","./External-BllXL05R-CBzP-Vnu.js","./MeshTransform-BFYjlBv2-C45tcubr.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./quat-Xt9oEsiT-Q7pdCfnn.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./quatf64-C16JxGFv-BKWK1F8U.js","./editingSupport-tOQy13o6-xKcs4zkE.js","./clientSideDefaults-DaxivApY-C4mUvKXX.js","./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js","./capabilities-Cjn77swe-Y9lFlGVh.js"])))=>i.map(i=>d[i]);
import{tH as X,z as $,e9 as k,kU as Z,rH as D,am as v,k6 as K,Q as ee,os as T,aj as te,q as m,rk as re,tI as U,b_ as P,tJ as N,c as s,d as n,tK as se,hv as ie,rJ as ne,rM as ae,rK as oe,rL as le,rs as ue,rO as pe,rN as de,rm as ye,oq as ce,E as I,s5 as H,j as M,aY as Q,rR as he,rS as be,re as fe,rU as me,rf as ge,rg as ve,y as we,B as Fe,$ as Se,ro as Ie,rp as Oe,c_ as q,j_ as je,aU as Ee,aV as Te,C as _e,k0 as Ae,tx as Ce,h as Le,cW as qe,ry as xe,tL as Pe,tM as De,rV as Re,kp as Ge,b as R,tN as Ve,tO as $e,tP as ke,rq as Ue,tQ as Ne,tR as He,tS as Me,tT as Qe,tU as Be,tV as Je,sc as j,rY as Ye,s2 as ze,rX as We,rx as Xe,tf as Ze,tW as Ke,tX as et,tY as tt,lq as rt,tZ as st,t_ as it,lm as nt,rv as B,t$ as at,ft as ot,u0 as lt,jZ as ut,M as pt}from"./main-C9wvg2yZ.js";const J={key:"type",base:Ke,errorContext:"renderer",typeMap:{simple:T,"unique-value":et,"class-breaks":tt}},x=X({types:J});function dt(e,t){const r=e.drawingInfo?.renderer,i=r?x(r,e,t):null;if(i?.type==="simple")return rt(i.symbol,null)?i.symbol.clone():null}const yt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function ct(e,t){return st(yt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const i=t.clone();return i.type==="cim"?it(i,r):nt(i,r),new T({symbol:i})})}const G=B();let ht=0;function S(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function bt(e){return new T({symbol:ft(e)})}function ft(e){switch(e){case"point":case"multipoint":return lt.clone();case"polyline":return ot.clone();case"polygon":case"multipatch":return at.clone();default:return null}}function mt(e,t){return!!t&&e?.type==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Y(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function gt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},l=Y(e,t);if(l!=null){const{defaultValues:o}=l;for(const p in o)i[p]=o[p]}return i[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let a=class extends $(k(Z(ut))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ht++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return D(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:l}=this;let o;if(i){o=[];let p=0;i.forEach(({name:d,alias:y,editable:w,visible:F})=>{if(!F)return;const c=l?.fields?.find(_=>_.name===d);if(!c)return;const f={name:d};let g=!1;y!==c.alias&&(f.alias=y,g=!0),w!==c.editable&&(f.editable=w,g=!0),o.push(f),g&&p++}),p===0&&o.length===i.length&&(o=null)}else o=v(e);o?.length&&K(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:l,subtypeField:o}=e,p=l?.find(F=>F.code===r),d=p?.defaultValues,y=p?.domains,w=[];for(const F of i){const c=F.clone(),{name:f}=c,g=t?.find(O=>O.name===f);if(c.visible=!t||!!g,g){const{alias:O,editable:W}=g;O&&(c.alias=O),W===!1&&(c.editable=!1)}const _=d?.[f]??null;c.defaultValue=f===o?r:_;const A=y?.[f]??null;c.domain=f===o?null:A?A.type==="inherited"?c.domain:A.clone():null,w.push(c)}return w}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||ee.getLogger(this).error(h("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){return this.parent?.relationships}set renderer(e){D(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?bt(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const i=t.drawingInfo?.renderer,l=x(i,t,r);let o;const{subtypeCode:p}=this;if(p!=null&&mt(l,t.subtypeField)){const d=l.uniqueValueInfos?.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(p));d&&(o=new T({symbol:d.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(o=l);return o}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;return i?i.visualVariables?.some(l=>l.type!=="rotationInfo")?void 0:x(i,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference??te.WGS84}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[gt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Y(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw h("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:l}=this;if(r){const{displayField:o,editFieldsInfo:p,objectIdField:d}=r;t={displayField:o,editFieldsInfo:p,fields:i,objectIdField:d,title:l}}return re(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=P(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains&&this.parent){const r=N(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const i=e.clone();return i.where=z(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(C(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(C(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(C(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};s([n({type:se,json:{name:"attributeTableInfo",write:{ignoreOrigin:!0}}})],a.prototype,"attributeTableTemplate",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),s([n({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),s([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),s([n({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),s([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),s([ie("fieldOverrides")],a.prototype,"writeFieldOverrides",null),s([n({...G.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),s([n(G.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),s([n({type:ne,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),s([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([n(S(v(ae)))],a.prototype,"labelsVisible",void 0),s([n({type:[oe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:le},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),s([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),s([n(S(v(ue)))],a.prototype,"legendEnabled",void 0),s([n({type:["show","hide"]})],a.prototype,"listMode",void 0),s([n((()=>{const e=v(pe);return e.json.origins.service.read=!1,S(e)})())],a.prototype,"minScale",void 0),s([n((()=>{const e=v(de);return e.json.origins.service.read=!1,S(e)})())],a.prototype,"maxScale",void 0),s([n({readOnly:!0})],a.prototype,"effectiveScaleRange",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),s([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),s([n({clonable:!1})],a.prototype,"parent",void 0),s([n(S(v(ye)))],a.prototype,"popupEnabled",void 0),s([n({type:ce,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"relationships",null),s([n({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),s([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),s([I("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),s([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"subtypeField",null),s([n({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),s([I("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),s([n({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),s([I("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),s([n({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),s([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=s([M("esri.layers.support.SubtypeSublayer")],a);const C=(e,t,r)=>{if(!r)return t.createQuery();const i=Q.from(r);return i.where=z(i.where,e.subtypeField,t.subtypeCode),i},z=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,o=e??"";return i.test(o)?o.replace(i,l):P(l,o)},h=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),E=a,b="SubtypeGroupLayer",vt="esri.layers.SubtypeGroupLayer";function V(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const L=B();let u=class extends he(be(fe(me(ge(ve(we(Fe(Se($(Ie(Oe(k(pt))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(q.ofType(E)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=je(async(t,r,i)=>{const{save:l,saveAs:o}=await R(()=>import("./featureLayerUtils-0tw9isWJ-DcVToX5O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);switch(t){case j.SAVE:return l(this,r);case j.SAVE_AS:return o(this,i,r)}}),this.addHandles(Ee(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Te))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(_e).then(async()=>{if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ae(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ce(this)}get parsedUrl(){const e=Le(this.url);return e!=null&&this.layerId!=null&&(e.path=qe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?xe(this.url,t):t}async addAttachment(e,t){const r=await Pe(this,e,t,b);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await De(this,e,t,r,b);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return Re(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Ge(R(()=>import("./FeatureLayerSource-Boc5do0a-Cg5tH9R0.js"),__vite__mapDeps([9,1,2,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=P(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Ve(this,e,t,b);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return $e(this,e,b)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains){const i=N(this,e);if(i)return i}const r=ke(this,t?.feature);if(r){const i=r.domains?.[e];return i?.type==="inherited"?this._getLayerDomain(e):i}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Ue(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ne(this,e,t,b)}async queryFeatures(e,t){const r=await this.load(),i=Q.from(e)??r.createQuery(),l=i.outFields??[];l.includes(this.subtypeField)||(l.push(this.subtypeField),i.outFields=l);const o=await r.source.queryFeatures(i,t);if(o?.features)for(const p of o.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return o}async queryObjectIds(e,t){return He(this,e,t,b)}async queryFeatureCount(e,t){return Me(this,e,t,b)}async queryExtent(e,t){return Qe(this,e,t,b)}async queryRelatedFeatures(e,t){return Be(this,e,t,b)}async queryRelatedFeaturesCount(e,t){return Je(this,e,t,b)}async save(e){return this._debouncedSaveOperations(j.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(j.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:i,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return l?.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return l?.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Ye(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!this.subtypes?.length)throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),ze(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return We(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};s([n({readOnly:!0})],u.prototype,"createQueryVersion",null),s([n({readOnly:!0})],u.prototype,"editingEnabled",null),s([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),s([n({...L.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),s([n(L.fieldsIndex)],u.prototype,"fieldsIndex",void 0),s([n(Xe)],u.prototype,"id",void 0),s([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),s([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),s([n(L.outFields)],u.prototype,"outFields",void 0),s([n({readOnly:!0})],u.prototype,"parsedUrl",null),s([n({clonable:!1})],u.prototype,"source",null),s([n({type:q.ofType(E),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let i=null;if(this.useUniqueColorsForSublayers){const o=dt(t,r);i=o?ct(e.length,o):null}const l=e.map(({code:o},p)=>{const d=new E({subtypeCode:o});d.read(t,r);const y=i?.[p];return y&&d.read({drawingInfo:{renderer:y.toJSON()}},r),d});return new(q.ofType(E))(l)}}}},name:"layers",write:{ignoreOrigin:!0}}})],u.prototype,"sublayers",void 0),s([n()],u.prototype,"useUniqueColorsForSublayers",void 0),s([n({type:Ze})],u.prototype,"timeInfo",void 0),s([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),s([I("service","title",["name"])],u.prototype,"readTitleFromService",null),s([n({json:{read:!1}})],u.prototype,"type",void 0),u=s([M(vt)],u);const Ft=u;export{Ft as default};