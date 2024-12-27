const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-cnFh4oQ2-CuKJMTOs.js","./geometryEngineBase-DDJcGEx2-0XvuvKD3.js","./main-B2UX4EBG.js","./main-B0BSaEIx.css"])))=>i.map(i=>d[i]);
import{aZ as ce,dr as je,a0 as Ze,ds as he,bR as Be,dt as E,du as N,am as J,dv as $e,aH as V,aN as re,bu as C,dw as de,a1 as fe,q as A,D as ke,dx as Le,dy as He,b$ as Je,dz as Ue,ab as W,dA as me,dB as pe,dC as U,dD as Ye,dE as Ke,dF as We,bt as Xe,dG as et,dH as ye,dI as tt,dJ as st,aR as it,dh as ge,di as ie,dj as ae,dK as X,c6 as xe,dd as be,b as at,dL as rt,dM as _e,dN as nt,dO as lt,de as Ee,dP as ot,bs as Fe}from"./main-B2UX4EBG.js";import{Z as ut}from"./WhereClause-D233Ox-8-BQCqdKZR.js";import{G as ct,r as j,d as O,T as ht,g as Ve,a as Z,e as ee,R as ze}from"./timeSupport-sB9XTwIv-tcVoK5A5.js";import{t as dt}from"./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js";import{C as ft}from"./utils-CpnbG32Y-7tDpzSfm.js";import{l as we,N as Ie,s as mt,c as pt,m as yt,E as gt,h as xt,V as _t,k as Ft,M as wt,x as te,f as It,D as St}from"./utils-DN5yax8A-fofFgCBc.js";let Tt=class{constructor(n,e){this._cache=new ce(n),this._invalidCache=new ce(e)}get(n,e){const t=`${e.uid}:${n}`,s=this._cache.get(t);if(s)return s;if(this._invalidCache.get(t)!=null)return null;try{const i=ut.create(n,{fieldsIndex:e});return this._cache.put(t,i),i}catch(i){return this._invalidCache.put(t,i),null}}getError(n,e){const t=`${e.uid}:${n}`;return this._invalidCache.get(t)??null}};const De=new Tt(50,500),B="unsupported-query",qe=" as ",Ce=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),Me=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),Rt=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...Ce,...Me]);function ne(n,e,t={}){const s=M(e,n);if(!s){const a=De.getError(e,n);throw new A(B,"invalid SQL expression",{expression:e,error:a})}const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new A(B,`${i} is not standard`,{expression:e});if(t.validateAggregate&&!s.isAggregate)throw new A(B,`${i} does not contain a valid aggregate function`,{expression:e});return s.fieldNames}function vt(n,e,t,s){if(!t)return!0;const i="where clause";return D(n,e,ne(n,t,{validateStandardized:!0,expressionName:i}),{expressionName:i,query:s}),!0}function At(n,e,t,s,i){if(!t)return!0;const a="having clause",r=ne(n,t,{validateAggregate:!0,expressionName:a});if(D(n,e,r,{expressionName:a,query:i}),!M(t,n)?.getExpressions().every(l=>{const{aggregateType:o,field:u}=l,c=n.get(u)?.name;return s.some(h=>{const{onStatisticField:d,statisticType:m}=h;return n.get(d)?.name===c&&m.toLowerCase().trim()===o})}))throw new A(B,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function M(n,e){return n?De.get(n,e):null}function Qe(n){return/\((.*?)\)/.test(n)?n:n.split(qe)[0]}function bt(n){return n.split(qe)[1]}function D(n,e,t,s={}){const i=new Map;if(Et(i,n,e,s.allowedFieldTypes??Rt,t),i.size){const a=s.expressionName??"expression";throw new A(B,`${a} contains invalid or missing fields`,{errors:Array.from(i.values()),query:s.query})}}function Et(n,e,t,s,i){const a=i.includes("*")?[...t,...i.filter(r=>r!=="*")]:i;for(const r of a)if(e.get(r))Se(n,e,t,s,r);else try{const l=ne(e,Qe(r),{validateStandardized:!0});for(const o of l)Se(n,e,t,s,o)}catch(l){n.set(r,{type:"expression-error",expression:r,error:l})}}function Se(n,e,t,s,i){const a=e.get(i);a?t.has(a.name)?s!=="all"&&s?.has(a.type)===!1&&n.set(i,{type:"invalid-type",fieldName:a.name,fieldType:Fe.fromJSON(a.type),allowedFieldTypes:Array.from(s,r=>Fe.fromJSON(r))}):n.set(i,{type:"missing-field",fieldName:a.name}):n.set(i,{type:"invalid-field",fieldName:i})}const Vt=5;let zt=class{constructor(){this._storage=new Map,this._purgeInterval=Vt,this._sweep=()=>{if(this._timer=void 0,!this._storage)return;const n=1e3*this._purgeInterval,e=performance.now()-n;for(const[t,s]of this._storage){if(!(s.time<e))return void(this._storage.size>0&&(this._timer=setTimeout(this._sweep,n)));this._storage.delete(t)}}}destroy(){this._storage?.clear(),this._storage=null,clearTimeout(this._timer)}get size(){return this._storage?.size??0}put(n,e){this._storage?.set(n,new qt(e)),this._scheduleSweep()}get(n){if(!this._storage)return;const e=this._storage?.get(n);return e?(this._storage?.delete(n),e.time=performance.now(),this._storage?.set(n,e),e.items):void 0}clear(){this._storage?.clear()}_scheduleSweep(){this._storage&&(this._timer??=setTimeout(this._sweep,1e3*this._purgeInterval))}},Dt=0;class qt{constructor(e){this.items=e,this.time=performance.now(),this.id=Dt++}}let H=class{constructor(n,e,t){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=n.returnDistinctValues??!1,this.fieldsIndex=t,this.featureAdapter=e;const s=n.outFields;if(s&&!s.includes("*")){this.outFields=s;let i=0;for(const a of s){const r=Qe(a),l=this.fieldsIndex.get(r),o=l?null:M(r,t),u=l?l.name:bt(a)||"FIELD_EXP_"+i++;this._fieldDataCache.set(a,{alias:u,clause:o})}}}countDistinctValues(n){return this.returnDistinctValues?(n.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):n.length}getAttributes(n){const e=this._processAttributesForOutFields(n);return this._processAttributesForDistinctValues(e)}getFieldValue(n,e,t){const s=t?t.name:e;let i=null;return this._fieldDataCache.has(s)?i=this._fieldDataCache.get(s)?.clause:t||(i=M(e,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:i})),t?this.featureAdapter.getAttribute(n,s):i?.calculateValue(n,this.featureAdapter)}getDataValues(n,e,t=!0){const s=e.normalizationType,i=e.normalizationTotal,a=this.fieldsIndex.get(e.field),r=ie(a)||ae(a),l=be(a);return n.map(o=>{let u=e.field&&this.getFieldValue(o,e.field,this.fieldsIndex.get(e.field));if(e.field2?(u=`${te(u)}${e.fieldDelimiter}${te(this.getFieldValue(o,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(u=`${u}${e.fieldDelimiter}${te(this.getFieldValue(o,e.field3,this.fieldsIndex.get(e.field3)))}`)):typeof u=="string"&&t&&(r?u=u?new Date(u).getTime():null:l&&(u=u?ft(u):null)),s&&Number.isFinite(u)){const c=s==="field"&&e.normalizationField?this.getFieldValue(o,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;u=It(u,s,c,i)}return u})}async getExpressionValues(n,e,t,s,i){const{arcadeUtils:a}=await Ee(),r=a.hasGeometryOperations(e);r&&await a.enableGeometryOperations();const l=a.createFunction(e),o=a.getViewInfo(t),u={fields:this.fieldsIndex.fields};return n.map(c=>{const h={attributes:this.featureAdapter.getAttributes(c),layer:u,geometry:r?{...Z(s.geometryType,s.hasZ,s.hasM,this.featureAdapter.getGeometry(c)),spatialReference:t?.spatialReference}:null},d=a.createExecContext(h,o,i);return a.executeFunction(l,d)})}validateItem(n,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:M(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testFeature(n,this.featureAdapter)??!1}validateItems(n,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:M(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testSet(n,this.featureAdapter)??!1}_processAttributesForOutFields(n){const e=this.outFields;if(!e?.length)return this.featureAdapter.getAttributes(n);const t={};for(const s of e){const{alias:i,clause:a}=this._fieldDataCache.get(s);t[i]=a?a.calculateValue(n,this.featureAdapter):this.featureAdapter.getAttribute(n,i)}return t}_processAttributesForDistinctValues(n){if(n==null||!this.returnDistinctValues)return n;const e=this.outFields,t=[];if(e)for(const a of e){const{alias:r}=this._fieldDataCache.get(a);t.push(n[r])}else for(const a in n)t.push(n[a]);const s=`${(e||["*"]).join(",")}=${t.join(",")}`;let i=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++i),i>1?null:n}};function Te(n,e,t){return{objectId:n,target:e,distance:t,type:"vertex"}}function Ct(n,e,t,s,i,a=!1){return{objectId:n,target:e,distance:t,type:"edge",start:s,end:i,draped:a}}class v{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new H(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!t?.length)return 1;const a=new Map,r=new Map,l=new Set;for(const o of i){const{statisticType:u}=o,c=u!=="exceedslimit"?o.onStatisticField:void 0;if(!r.has(c)){const d=[];for(const m of t){const y=this._getAttributeValues(e,m,a);d.push(y)}r.set(c,this._calculateUniqueValues(d,e.returnDistinctValues))}const h=r.get(c);for(const d in h){const{data:m,items:y}=h[d],f=m.join(",");s&&!e.validateItems(y,s)||l.add(f)}}return l.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;U(this.query.outSR)&&!V(t.spatialReference,this.query.outSR)?e.queryGeometry=j({spatialReference:this.query.outSR,...C(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=j({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=Re(this.hasZ,this.hasM),{point:a,mode:r}=e,l=typeof e.distance=="number"?e.distance:e.distance.x,o=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),d=new ve(null,0),m=new ve(null,0),y={x:0,y:0,z:0};for(const f of this.items){const w=s.getGeometry(f);if(w==null)continue;const{coords:_,lengths:S}=w;if(d.coords=_,m.coords=_,e.returnEdge){let I=0;for(let g=0;g<S.length;g++){const p=S[g];for(let F=0;F<p;F++,I+=i){const x=d;if(x.coordsIndex=I,F!==p-1){const T=m;T.coordsIndex=I+i;const R=y;Mt(y,a,x,T);const q=(a.x-R.x)/l,$=(a.y-R.y)/o,b=q*q+$*$;b<=1&&u.candidates.push(Ct(s.getObjectId(f),h(R),Math.sqrt(b),h(x),h(T)))}}}}if(e.vertexMode!=="none"){const I=c?_.length-i:_.length;if(e.vertexMode==="all")for(let g=0;g<I;g+=i){const p=d;p.coordsIndex=g;const F=(a.x-p.x)/l,x=(a.y-p.y)/o,T=F*F+x*x;T<=1&&u.candidates.push(Te(s.getObjectId(f),h(p),Math.sqrt(T)))}else if(e.vertexMode==="ends"){const g=[0];c||g.push(_.length-i);for(const p of g){const F=d;F.coordsIndex=p;const x=(a.x-F.x)/l,T=(a.y-F.y)/o,R=x*x+T*T;R<=1&&u.candidates.push(Te(s.getObjectId(f),h(F),Math.sqrt(R)))}}}}return u.candidates.sort((f,w)=>f.distance-w.distance),u}_getPointCreator(e,t,s){const i=s==null||V(t,s)?l=>l:l=>C(l,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:l,y:o,z:u})=>i({x:l,y:o,z:u}):({x:l,y:o})=>i({x:l,y:o,z:r}):({x:l,y:o})=>i({x:l,y:o})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:l,maxValue:o,scale:u,timeZone:c,outStatisticTypes:h}=e,d=this.fieldsIndex.get(t),m=ge(d)||ie(d)||ae(d),y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),f=St({normalizationType:a,normalizationField:i,minValue:l,maxValue:o}),w={value:.5,fieldType:d?.type},_=X(d)?we({values:y,supportsNullCount:f,percentileParams:w,outStatisticTypes:h}):Ie({values:y,minValue:l,maxValue:o,useSampleStdDev:!a,supportsNullCount:f,percentileParams:w,outStatisticTypes:h});return mt(_,h,m)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r,timeZone:l}=e,o=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r,timeZone:l},!1),u=pt(o);return yt(u,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h,scale:d,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:d,timeZone:m}),f=gt(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h});return xt(f,l)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h,scale:d,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:d,timeZone:m});return _t(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t?.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],l=this.fieldsIndex.get(r),o=!!a[1]&&a[1].toLowerCase()==="desc",u=Ft(l?.type,o);e.sort((c,h)=>{const d=s(c,r,l),m=s(h,r,l);return u(d,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:l}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:d,returnZ:m,returnM:y}=e,f=h!=null&&t.length>(d||0)+h,w=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:f,features:this._createFeatures(e,t),fields:w,geometryType:s,hasM:i&&y,hasZ:a&&m,objectIdFieldName:r,spatialReference:j(u||l),transform:c&&xe(c)||null}}_createFeatures(e,t){const s=new H(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:l,returnGeometry:o,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:d,returnZ:m=!1,returnM:y=!1}=e,f=a&&m,w=i&&y;let _=[],S=0;const I=[...t];if(this._sortFeatures(I,r,(p,F,x)=>s.getFieldValue(p,F,x)),this.geometryType&&(o||u)){const p=xe(l)??void 0,F=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(o&&!u)for(const x of I){const T=this.featureAdapter.getGeometry(x),R={attributes:s.getAttributes(x),geometry:Z(this.geometryType,this.hasZ,this.hasM,T,c,p,f,w)};F&&T&&!R.geometry&&(R.centroid=ee(this,this.featureAdapter.getCentroid(x,this),p)),_[S++]=R}else if(!o&&u)for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),p)};else for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),p),geometry:Z(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,p,f,w)}}else for(const p of I){const F=s.getAttributes(p);F&&(_[S++]={attributes:F})}const g=h||0;if(d!=null){const p=g+d;_=_.slice(g,Math.min(_.length,p))}return _}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=Re(this.hasZ,this.hasM),l=this.featureAdapter;t=this.items.reduce((o,u)=>{const c=l.getGeometry(u);return o+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,l=new Map,o=new H(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:d,resultRecordCount:m}=e,y=c?.length,f=!!y,w=f?c[0]:null,_=f&&!this.fieldsIndex.get(w);for(const I of u??[]){const{outStatisticFieldName:g,statisticType:p}=I,F=I,x=p!=="exceedslimit"?I.onStatisticField:void 0,T=p==="percentile_disc"||p==="percentile_cont",R=p==="EnvelopeAggregate"||p==="CentroidAggregate"||p==="ConvexHullAggregate",q=f&&y===1&&(x===w||_)&&p==="count";if(f){if(!r.has(x)){const k=[];for(const K of c){const L=this._getAttributeValues(o,K,i);k.push(L)}r.set(x,this._calculateUniqueValues(k,!R&&o.returnDistinctValues))}const b=r.get(x);if(!b)continue;const Y=Object.keys(b);for(const k of Y){const{count:K,data:L,items:le,itemPositions:Pe}=b[k],oe=L.join(",");if(!h||o.validateItems(le,h)){const Q=l.get(oe)||{attributes:{}};if(R){Q.aggregateGeometries||(Q.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:G}=await this._getAggregateGeometry(F,le);Q.aggregateGeometries[G]=z}else{let z=null;if(q)z=K;else{const G=this._getAttributeValues(o,x,i),ue=Pe.map(Oe=>G[Oe]);z=T&&"statisticParameters"in F?this._getPercentileValue(F,ue):this._getStatisticValue(F,ue,null,o.returnDistinctValues)}Q.attributes[g]=z}let Ge=0;c.forEach((z,G)=>Q.attributes[this.fieldsIndex.get(z)?z:"EXPR_"+ ++Ge]=L[G]),l.set(oe,Q)}}}else if(R){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:b,outStatisticFieldName:Y}=await this._getAggregateGeometry(F,this.items);t.aggregateGeometries[Y]=b}else{const b=this._getAttributeValues(o,x,i);t.attributes[g]=T&&"statisticParameters"in F?this._getPercentileValue(F,b):this._getStatisticValue(F,b,a,o.returnDistinctValues)}const $=p!=="min"&&p!=="max"||!X(this.fieldsIndex.get(x))&&!this._isAnyDateField(x)?null:this.fieldsIndex.get(x)?.type;s.push({name:g,alias:g,type:$||"esriFieldTypeDouble"})}const S=f?Array.from(l.values()):[t];return this._sortFeatures(S,d,(I,g)=>I.attributes[g]),m&&(S.length=Math.min(m,S.length)),{fields:s,features:S}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return ge(t)||ie(t)||ae(t)||be(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await at(()=>import("./geometryEngineJSON-cnFh4oQ2-CuKJMTOs.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(f=>f.g),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:l,spatialReference:o,geometryType:u,hasZ:c,hasM:h}=this,d=t.map(f=>Z(u,c,h,l.getGeometry(f))),m=s(o,d,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const f=m?rt(m):_e(i(o,d));y.aggregateGeometries={...f,spatialReference:o},y.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const f=m?nt(m):lt(_e(i(o,d)));y.aggregateGeometries={x:f[0],y:f[1],spatialReference:o},y.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(y.aggregateGeometries=m,y.outStatisticFieldName=r||"convexHull");return y}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let l=null;return l=s?.has(a)?s.get(a):X(this.fieldsIndex.get(a))||this._isAnyDateField(a)?we({values:t,returnDistinct:i}):Ie({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,l),l[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:l}=i,o=this.fieldsIndex.get(s);return wt(t,{value:r,orderBy:l,fieldType:o?.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const l=i[r],o=[];for(const c of e)o.push(c[r]);const u=o.join(",");s[u]==null?s[u]={count:1,data:o,items:[l],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(l),s[u].itemPositions.push(r))}return s}async _getDataValues(e,t=!0){const s=new H(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,scale:a,timeZone:r}=e;return i?s.getExpressionValues(this.items,i,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):s.getDataValues(this.items,J(e),t)}}function Mt(n,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,l=(e.x-t.x)*i+(e.y-t.y)*a,o=Math.min(1,Math.max(0,l/r));n.x=t.x+i*o,n.y=t.y+a*o}function Re(n,e){return n?e?4:3:e?3:2}class ve{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const P="unsupported-query";async function Ae(n,{fieldsIndex:e,geometryType:t,spatialReference:s,availableFields:i}){if((n.distance??0)<0||n.geometryPrecision!=null||n.multipatchOption&&n.multipatchOption!=="xyFootprint"||n.pixelSize||n.relationParam||n.text)throw new A(P,"Unsupported query options",{query:n});return Ne(e,i,n),Nt(e,i,n),Promise.all([ze(n,t,s),re(s,n.outSR)]).then(()=>n)}function Ne(n,e,t){const{outFields:s,orderByFields:i,returnDistinctValues:a,outStatistics:r}=t,l=r?r.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const o=" asc",u=" desc",c=i.map(h=>{const d=h.toLowerCase();return d.includes(o)?d.split(o)[0]:d.includes(u)?d.split(u)[0]:h}).filter(h=>!l.includes(h));D(n,e,c,{expressionName:"orderByFields",query:t})}if(s&&s.length>0)D(n,e,s,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new A(P,"outFields should be specified for returnDistinctValues",{query:t});vt(n,e,t.where,t)}const Qt=new Set([...Ce,...Me]);function Nt(n,e,t){const{outStatistics:s,groupByFieldsForStatistics:i,having:a}=t,r=i?.length,l=s?.length;if(a){if(!r||!l)throw new A(P,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});At(n,e,a,s,t)}if(l){if(!Ot(s))return;const o=s.map(u=>u.onStatisticField).filter(Boolean);D(n,e,o,{expressionName:"onStatisticFields",query:t}),r&&D(n,e,i,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of s){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:d}=u;if(!d)throw new A(P,"statisticParameters should be set for percentile type",{definition:u,query:t})}else n.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&D(n,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:Qt,query:t})}}}async function Pt(n,e,{fieldsIndex:t,geometryType:s,spatialReference:i,availableFields:a}){if((n.distance??0)<0||n.geometryPrecision!=null||n.multipatchOption||n.pixelSize||n.relationParam||n.text||n.outStatistics||n.groupByFieldsForStatistics||n.having||n.orderByFields)throw new A(P,"Unsupported query options",{query:n});return Ne(t,a,n),Promise.all([Gt(t,a,e,n),ze(n,s,i),re(i,n.outSR)]).then(()=>n)}async function Gt(n,e,t,s){let i=[];if(t.valueExpression){const{arcadeUtils:a}=await Ee();i=a.extractFieldNames(t.valueExpression)}if(t.field&&i.push(t.field),t.field2&&i.push(t.field2),t.field3&&i.push(t.field3),t.normalizationField&&i.push(t.normalizationField),!i.length&&!t.valueExpression)throw new A(P,"field or valueExpression is required",{params:t});D(n,e,i,{expressionName:"statistics",query:s})}function Ot(n){return n!=null&&n.every(e=>e.statisticType!=="exceedslimit")}const jt="unsupported-query";class Jt{constructor(e){this._cache=new zt,this._changeHandle=null,this.capabilities={query:dt},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,this.fieldsIndex=je(e.fieldsIndex)?e.fieldsIndex:Ze.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>this.fieldsIndex.get(t)?.name).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=he(this._frameTask),this.clearCache(),Be(this._cache),this._changeHandle=he(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._cache.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=E(t);try{return await(await this._executeQuery(e,{},s)).createQueryResponse()}catch(i){if(i!==N)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=E(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==N)throw i;return 0}}async executeQueryForExtent(e,t){const s=E(t),i=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===N)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){const s=E(t);try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),a=i.items,r=new Set;return await this._reschedule(()=>{for(const l of a)r.add(i.featureAdapter.getObjectId(l))},s),r}catch(i){if(i===N)return new Set;throw i}}async executeQueryForSnapping(e,t){const s=E(t),{point:i,distance:a,returnEdge:r,vertexMode:l}=e;if(!r&&l==="none")return{candidates:[]};let o=J(e.query);o=await this._schedule(()=>$e(o,this.definitionExpression,this.spatialReference),s),o=await this._reschedule(()=>Ae(o,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const u=!V(i.spatialReference,this.spatialReference);u&&await re(i.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,d={xmin:i.x-c,xmax:i.x+c,ymin:i.y-h,ymax:i.y+h,spatialReference:i.spatialReference},m=u?C(d,this.spatialReference):d;if(!m)return{candidates:[]};const y=(await de(fe(i),null,{signal:s}))[0],f=(await de(fe(m),null,{signal:s}))[0];if(y==null||f==null)return{candidates:[]};const w=new v(await this._reschedule(()=>this._searchFeatures(se(f.toJSON())),s),o,this);await this._reschedule(()=>this._executeObjectIdsQuery(w),s),await this._reschedule(()=>this._executeTimeQuery(w),s),await this._reschedule(()=>this._executeAttributesQuery(w),s),await this._reschedule(()=>this._executeGeometryQueryForSnapping(w,s),s);const _=y.toJSON(),S=u?C(_,this.spatialReference):_,I=u?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return w.createSnappingResponse({...e,point:S,distance:I},i.spatialReference)}async executeQueryForLatestObservations(e,t){const s=E(t);if(!this.timeInfo?.trackIdField)throw new A(jt,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},s);return await this._reschedule(()=>this._filterLatest(i),s),await i.createQueryResponse()}catch(i){if(i!==N)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:l},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=E(s),{field:a,field2:r,field3:l,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:l,valueExpression:o},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:l},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:l},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=E(e);this._timeExtentPromise||=ct(this.timeInfo,this.featureStore);const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return ke(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=Le(Je(),He);await this.featureStore.forEachBounds(e,l=>Ue(i,l));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:j(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5],a.hasZ=!0);const r=C(a,t,s);if(r.spatialReference=j(s),r.xmax-r.xmin==0){const l=W(r.spatialReference);r.xmin-=l,r.xmax+=l}if(r.ymax-r.ymin==0){const l=W(r.spatialReference);r.ymin-=l,r.ymax+=l}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const l=W(r.spatialReference);r.zmin-=l,r.zmax+=l}return r}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference)),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(me)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(me)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=J(e),e=await this._schedule(()=>pe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Ae(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,l=e.sceneFilter.geometry,o=r==null||V(r,l.spatialReference)?l:C(l,r);if(!o)return null;const u=i||a,c=U(s)&&!V(this.spatialReference,s)&&u?async f=>this._project(f,s):f=>f,h=this.featureAdapter,d=await this._reschedule(()=>this._searchFeatures(se(o)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!d.length)return null;const f=new Set;for(const S of d)f.add(h.getObjectId(S));const w=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const S=await O("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),I=p=>!f.has(h.getObjectId(p))||S(h.getGeometry(p)),g=await this._runSpatialFilter(w,I,t);return new v(g,e,this)},t);return c(_)}if(!d.length)return new v([],e,this);if(this._canExecuteSinglePass(o,e))return c(new v(d,e,this));const m=await O("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(d,f=>m(h.getGeometry(f)),t);return c(new v(y,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:l,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,c=!i||u==null||V(u,i.spatialReference)?i:C(i,u),h=l||o,d=U(a)&&!V(this.spatialReference,a),m=t==null?this._getCacheKey(e):null,y=m?this._cache.get(m):null;if(y!=null)return new v(y,e,this);const f=async g=>(d&&h&&await this._project(g,a),m&&this._cache.put(m,g.items),g);if(!c)return f(t??await this._getAllFeaturesQueryEngineResult(e));const w=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(se(i)),s);if(r==="esriSpatialRelDisjoint"){if(!_.length)return f(t??await this._getAllFeaturesQueryEngineResult(e));const g=new Set;for(const x of _)g.add(w.getObjectId(x));const p=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),F=await this._reschedule(async()=>{const x=await O(r,c,this.geometryType,this.hasZ,this.hasM),T=q=>!g.has(w.getObjectId(q))||x(w.getGeometry(q)),R=await this._runSpatialFilter(p,T,s);return new v(R,e,this)},s);return f(F)}if(t!=null){const g=new ot;_=_.filter(p=>Ye(t.items,p,t.items.length,g)>=0)}if(!_.length){const g=new v([],e,this);return m&&this._cache.put(m,g.items),g}if(this._canExecuteSinglePass(c,e))return f(new v(_,e,this));const S=await O(r,c,this.geometryType,this.hasZ,this.hasM),I=await this._runSpatialFilter(_,g=>S(w.getGeometry(g)),s);return f(new v(I,e,this))}async _executeGeometryQueryForSnapping(e,t){const{query:s}=e,{spatialRel:i}=s;if(!e?.items?.length||!s.geometry||!i)return;const a=await O(i,s.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,l=>a(l.geometry),t);e.items=r}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds?.length||this.aggregateAdapter==null)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=ht(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=M(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(l=>t(l));let i=0;const a=new Array,r=async l=>{for(;i<e.length;){const o=e[i++];t(o)&&(a.push(o),l.madeProgress()),l.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(l=>r(l),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,l=this.featureAdapter.getAttribute;for(const o of e.items){const u=l(o,t),c=l(o,a),h=r.get(u);(!h||c>l(h,a))&&r.set(u,o)}e.items=Array.from(r.values())}_getCacheKey(e){const{geometry:t,spatialRel:s,returnGeometry:i,returnCentroid:a,outSR:r,resultType:l,cacheHint:o}=e;if(l!=="tile"&&!o)return null;const u=i||a;return U(r)&&!V(this.spatialReference,r)&&u?JSON.stringify([t,s,r]):JSON.stringify([t,s])}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return Ve(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"))}async _project(e,t){if(!t||V(this.spatialReference,t))return e;const s=this.featureAdapter;let i;try{const r=await this._getFullExtent();i=Ke(this.spatialReference,t,r)}catch{}const a=await We(e.items.map(r=>Z(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t,i);return e.items=a.map((r,l)=>s.cloneWithGeometry(e.items[l],Xe(r,this.hasZ,this.hasM))),e}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=J(e);try{e=await this._schedule(()=>pe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Pt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==N)throw i;return new v([],e,this)}}}function se(n){if(Ve(n)){if(et(n))return[ye(Math.min(n.xmin,n.xmax),Math.min(n.ymin,n.ymax),Math.max(n.xmin,n.xmax),Math.max(n.ymin,n.ymax))];if(tt(n))return n.rings.map(e=>ye(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1])))}return[st(it(),n)]}export{Jt as Z};
