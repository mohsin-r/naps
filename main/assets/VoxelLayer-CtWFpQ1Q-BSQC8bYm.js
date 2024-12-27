import{e9 as L,lx as N,r$ as z,c as t,d as o,hq as ce,j as m,rE as ot,h2 as j,f9 as U,c_ as c,nU as de,c9 as le,iM as ae,aj as Be,y as st,B as rt,$ as nt,rf as lt,z as at,ro as pt,rp as ut,sg as ct,Q as P,C as dt,q as fe,aa as Me,bD as W,a0 as yt,rk as ht,c0 as Oe,tf as Ee,g_ as ie,cO as Re,rs as mt,G as gt,E as Te,oq as vt,tF as ft,cI as Ce,cl as Ue,ub as Ae,mx as De,s as g,am as te,uc as qe,aH as bt,cN as St,ud as xt,a3 as be,iX as wt,ho as Vt,cC as jt,M as Nt,cB as zt}from"./main-B2UX4EBG.js";import{Q as It}from"./SceneService-DQjtIpoK-lcqXaDO-.js";import{D as Rt}from"./persistable-DhwFrfNW-Bj7VOpDY.js";import{b as Se,y as Tt}from"./quat-Xt9oEsiT-7qMvysTP.js";import{e as me}from"./quatf64-C16JxGFv-BKWK1F8U.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./jsonContext-v1mRP0aL-BIlCitQ5.js";import"./resourceUtils-Djt21JsK-DZw8o0qu.js";import"./resourceUtils-PAYBmvyK-CEmeOeje.js";import"./saveUtils-BQy3eBhU-0DFvUEM1.js";import"./resourceExtension-CvAjal1j-x57XjOqm.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";const v=zt(),Pe=me(),Le=me(),Fe=me(),ke=ie(0,0,1),At=ie(0,1,0),Dt=ie(1,0,0);function J(e){Ce(v,e),Re(v,v);const i=Math.atan2(v[1],v[0]),s=Se(me(),ke,-i);Ue(v,v,s);const r=-1*Math.atan2(v[2],v[0]);return[Ae(i)+270,Ae(r)+90]}function ye(e,i){return Se(Le,ke,De(e-270)),Se(Fe,At,De(i-90)),Tt(Pe,Le,Fe),Ce(v,Dt),Ue(v,v,Pe),Re(v,v),[v[0],v[1],v[2]]}let R=class extends L(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(e),0,!0)}set orientation(e){const i=ye(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(i),0,!0)}set tilt(e){const i=ye(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{write:!0}})],R.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],R.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>N.normalize(z(e),0,!0))],R.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>N.normalize(z(e),0,!0))],R.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],R.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],R.prototype,"point",void 0),R=t([m("esri.layers.voxel.VoxelSlice")],R);const he=R;let b=class extends L(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(i),0,!0)}};t([o({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),t([o({type:String,json:{origins:{service:{read:ot}},write:{enabled:!0,isRequired:!0}}}),Rt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),t([o({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),t([o({type:[he],json:{write:!0}})],b.prototype,"slices",void 0),t([o({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=t([m("esri.layers.voxel.VoxelSection")],b);const xe=b;let Q=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"diffuseFactor",void 0),t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"specularFactor",void 0),Q=t([m("esri.layers.voxel.VoxelSimpleShading")],Q);const We=Q;let T=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],T.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],T.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],T.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"type",void 0),T=t([m("esri.layers.voxel.VoxelFormat")],T);const _e=T;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),t([o({type:_e,json:{write:!0}})],V.prototype,"originalFormat",void 0),t([o({type:_e,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=t([m("esri.layers.voxel.VoxelVariable")],V);const qt=V;let $=class extends L(g){constructor(){super(...arguments),this.color=U.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};t([o({type:U,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],$.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],$.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],$.prototype,"label",void 0),t([o({type:Boolean,json:{default:!1,write:!0}})],$.prototype,"colorLocked",void 0),$=t([m("esri.layers.voxel.VoxelIsosurface")],$);const Je=$;let Z=class extends L(g){constructor(){super(...arguments),this.color=null,this.position=0}};t([o({type:U,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],Z.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Z.prototype,"position",void 0),Z=t([m("esri.layers.voxel.VoxelColorStop")],Z);const we=Z;let H=class extends L(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};t([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],H.prototype,"opacity",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=t([m("esri.layers.voxel.VoxelOpacityStop")],H);const Ve=H;let K=class extends L(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([o({type:Boolean,json:{default:!1,write:!0}})],K.prototype,"enabled",void 0),t([o({type:[Number],json:{write:!0}})],K.prototype,"range",void 0),K=t([m("esri.layers.voxel.VoxelRangeFilter")],K);const Pt=K;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let A=class extends L(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(we)),this.opacityStops=new(c.ofType(Ve))}set colorStops(e){this._set("colorStops",de(e,this._get("colorStops"),c.ofType(we)))}set opacityStops(e){this._set("opacityStops",de(e,this._get("opacityStops"),c.ofType(Ve)))}getPreviousNext(e,i,s){let r=e;for(;--r>0&&i[r].type!==s&&i[r].type!==w.Both;);let n=e;const a=i.length;for(;++n<a&&i[n].type!==s&&i[n].type!==w.Both;);return[r,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],s=[],r=1e-5;for(const p of this.colorStops){if(!p.color)return e;s.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:w.Color})}if(this.opacityStops.length===0)for(const p of s)i.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const d=le(u.position,0,1),h=Math.round(255*le(1-u.opacity,0,1));let f=!1;for(const y of s)if(y.type===w.Color&&Math.abs(y.position-d)<r){y.color.a=h,y.type=w.Both,f=!0;break}f||s.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}s.sort((u,d)=>u.position<d.position?-1:1);const p=s.length;for(let u=0;u<p;++u){const d=s[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,f]=this.getPreviousNext(u,s,w.Alpha);if(h!==-1&&f!==p){const y=(d.position-s[h].position)/(s[f].position-s[h].position);d.color.a=Math.round(ae(s[h].color.a,s[f].color.a,y))}else d.color.a=h!==-1?s[h].color.a:s[f].color.a}else{const[h,f]=this.getPreviousNext(u,s,w.Color);if(h!==-1&&f!==p){const y=(d.position-s[h].position)/(s[f].position-s[h].position),F=s[h].color,oe=s[f].color;pe.forEach(_=>{d.color[_]=Math.round(ae(F[_],oe[_],y))})}else h!==-1?pe.forEach(y=>{d.color[y]=s[h].color[y]}):pe.forEach(y=>{d.color[y]=s[f].color[y]})}}for(const u of s)i.push({color:u.color,position:u.position})}i[0].position=0,i[i.length-1].position=1;let n=0,a=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>i[a].position;)n=a++;const d=(u-i[n].position)/(i[a].position-i[n].position),h=i[n].color,f=i[a].color,y=new U;pe.forEach(F=>{y[F]=Math.round(ae(h[F],f[F],d))}),y.a=le(1-ae(h.a,f.a,d)/255,0,1),e.push(y)}return e}getColorForContinuousDataValue(e,i){const s=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||s.length<256)return null;let r=this.stretchRange[0],n=this.stretchRange[1];if(r>n){const p=r;r=n,n=p}e=le(e,r,n);const a=s[Math.round((e-r)/(n-r)*(this._colorMapSize-1))].clone();return i||(a.a=1),a}};t([o({type:["linear","nearest"],json:{write:!0}})],A.prototype,"interpolation",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"stretchRange",void 0),t([o({type:c.ofType(we),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],A.prototype,"colorStops",null),t([o({type:c.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],A.prototype,"opacityStops",null),t([o({type:Pt,json:{write:!0}})],A.prototype,"rangeFilter",void 0),t([o({type:[U],clonable:!1,json:{read:!1}})],A.prototype,"rasterizedTransferFunction",null),A=t([m("esri.layers.voxel.VoxelTransferFunctionStyle")],A);const Lt=A,pe=["r","g","b"];let E=class extends L(g){constructor(){super(...arguments),this.color=U.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};t([o({type:U,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],E.prototype,"color",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],E.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],E.prototype,"label",void 0),E=t([m("esri.layers.voxel.VoxelUniqueValue")],E);const Ge=E;var je;let B=je=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Ge)),this.isosurfaces=new(c.ofType(Je))}clone(){return new je({variableId:this.variableId,label:this.label,transferFunction:te(this.transferFunction),uniqueValues:te(this.uniqueValues),isosurfaces:te(this.isosurfaces)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"variableId",void 0),t([o({type:String,json:{write:!0}})],B.prototype,"label",void 0),t([o({type:Lt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],B.prototype,"transferFunction",void 0),t([o({type:c.ofType(Ge),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],B.prototype,"uniqueValues",void 0),t([o({type:c.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&i}}}}})],B.prototype,"isosurfaces",void 0),B=je=t([m("esri.layers.voxel.VoxelVariableStyle")],B);const Xe=B;function $e(e){const i=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(i==null)return{didParse:!1};const[,s,r,n,a,p,u,d,h,f,y,F,oe]=i;let _="seconds";const ge=s.charAt(0).toLowerCase();ge==="d"?_="days":ge==="h"?_="hours":ge==="m"&&(_="minutes");const G=parseInt(r,10);if(Number.isNaN(G))return{didParse:!1};const I=parseInt(n,10);if(Number.isNaN(I)||I<1||I>12)return{didParse:!1};const M=parseInt(a,10);if(Number.isNaN(M)||M<1||M>31)return{didParse:!1};if(I===2){const Y=G%4==0&&(G%100!=0||G%400==0);if(Y&&M>29||!Y&&M>28)return{didParse:!1}}else if((I===4||I===6||I===9||I===11)&&M>30)return{didParse:!1};const se=parseInt(p,10);if(Number.isNaN(se)||se<0||se>23)return{didParse:!1};const re=parseInt(u,10);if(Number.isNaN(re)||re<0||re>59)return{didParse:!1};const ne=parseInt(d,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let ve=1,O=0,k=0;if(y&&(ve=y==="-"?-1:1),F){if(O=parseInt(F,10),Number.isNaN(O)||O<0)return{didParse:!1};if(O!==0){const Y=ve*O;if(Y<-12||Y>14)return{didParse:!1}}}if(oe&&(k=parseInt(oe,10),Number.isNaN(k)||k<0||k>59))return{didParse:!1};const Ze=`${G}`.padStart(4,"0"),He=`${I}`.padStart(2,"0"),Ke=`${M}`.padStart(2,"0"),et=`${se}`.padStart(2,"0"),tt=`${re}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let X="Z";return O===0&&k===0||(X=ve>0?"+":"-",X+=`${O}`.padStart(2,"0"),X+=":",X+=`${k}`.padStart(2,"0")),{didParse:!0,unit:_,reference:new Date(`${Ze}-${He}-${Ke}T${et}:${tt}:${it}.000${X}`)}}let ue=class extends g{constructor(){super(...arguments),this.values=null}};t([o({type:[Number],json:{write:!0}})],ue.prototype,"values",void 0),ue=t([m("esri.layers.voxel.VoxelIrregularSpacing")],ue);const Ft=ue;let ee=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([o({type:Number,json:{write:!0}})],ee.prototype,"scale",void 0),t([o({type:Number,json:{write:!0}})],ee.prototype,"offset",void 0),ee=t([m("esri.layers.voxel.VoxelRegularSpacing")],ee);const _t=ee;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};t([o({type:Ft,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),t([o({type:_t,json:{write:!0}})],S.prototype,"regularSpacing",void 0),t([o({type:Number,json:{write:!0}})],S.prototype,"size",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"unit",void 0),t([o({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=t([m("esri.layers.voxel.VoxelDimension")],S);const $t=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Be.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let a=0;a<3;++a)n[a]<2?n[a]=1:n[a]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(i[1]-i[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const s=this.dimensions[3];i=s.quantity==="time",i&&s.unit!==null&&(i=$e(s.unit).didParse)}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],i=[],s=$e(e.unit);if(s.didParse){if(e.isRegular){const r=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let a=0;a<e.size;++a){const p=r+n*a;i.push(qe(s.reference,p,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let r=0;r<e.irregularSpacing.values.length;++r){const n=e.irregularSpacing.values[r];i.push(qe(s.reference,n,s.unit))}}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return P.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!bt(this.spatialReference,e.spatialReference))return P.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=ie(e.x,e.y,e.z??0);St(i,i,this.originInLayerSpace3D),xt(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,n=s.irregularSpacing.values,a=s.isPositiveUp?1:-1,p=n.reduce((u,d)=>Math.abs(a*d-r)<Math.abs(a*u-r)?d:u);for(let u=0;u<n.length;++u)if(n[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new be({x:0,y:0,spatialReference:this.spatialReference});const i=wt(e);if(Vt(i,i,this.voxelSizeInLayerSpaceSigned),jt(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new be({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new be({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([o({type:[$t],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),t([o({type:Be,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),t([o({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),t([o({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),t([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),t([o({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=t([m("esri.layers.voxel.VoxelVolume")],x);const Ye=x;var Ne;let C=Ne=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new Ne;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"apronWidth",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"brickSize",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"maxLodLevel",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"nodeSize",void 0),C=Ne=t([m("esri.layers.voxel.VoxelVolumeIndex")],C);const Bt=C;let D=class extends L(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(e),0,!0)}set orientation(e){const i=ye(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return N.normalize(z(i),0,!0)}set tilt(e){const i=ye(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{default:!0,write:!0}})],D.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],D.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>N.normalize(z(e),0,!0))],D.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>N.normalize(z(e),0,!0))],D.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],D.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],D.prototype,"point",void 0),D=t([m("esri.layers.voxel.VoxelDynamicSection")],D);const ze=D;var Ie;let q=Ie=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(he)),this.dynamicSections=new(c.ofType(ze))}set slices(e){this._set("slices",de(e,this._get("slices"),c.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",de(e,this._get("dynamicSections"),c.ofType(ze)))}clone(){return new Ie({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:te(this.slices),dynamicSections:te(this.dynamicSections)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],q.prototype,"volumeId",void 0),t([o({type:Number,json:{default:1,write:!0}})],q.prototype,"verticalExaggeration",void 0),t([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],q.prototype,"exaggerationMode",void 0),t([o({type:Number,json:{default:0,write:!0}})],q.prototype,"verticalOffset",void 0),t([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],q.prototype,"slices",null),t([o({type:c.ofType(ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],q.prototype,"dynamicSections",null),q=Ie=t([m("esri.layers.voxel.VoxelVolumeStyle")],q);const Qe=q;let l=class extends It(st(rt(nt(lt(at(pt(ut(Nt)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new We,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(c.ofType(Qe)),this.variableStyles=new(c.ofType(Xe)),this.sections=new(c.ofType(xe))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",ct(e,P.getLogger(this)))}load(e){const i=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(dt).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(e,i){super.read(e,i),i?.origin==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new fe("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new fe("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new fe("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,s){if(e!=null&&typeof e=="object"){const r=Me.fromJSON(e,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(i.volumes)){const n=Ye.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const a=n.dimensions[2];if(a.isRegular){let p=a.regularSpacing.offset,u=a.regularSpacing.offset+a.regularSpacing.scale*(a.size-1);if(p>u){const d=p;p=u,u=d}r.zmin=p,r.zmax=u}}}return r}return null}get fields(){const e=[new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const s of this.variables){const r=new W({name:s.name,alias:s.description,domain:null,editable:!1,length:128,type:s.renderingFormat.continuity==="discrete"?"string":"double"});e.push(r)}const i=this.getVolume(null);if(i!=null){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const s=new W({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(s);const r=new W({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(r)}if(i.volumeType!=="xyt"){const s=new W({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(s)}}return e}get fieldsIndex(){return this.loaded?new yt(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const i=this.fields;return ht({fields:i,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=e??this.currentVariableId,!this.variableStyles||i===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===i);return s<0?null:this.variableStyles.at(s)}getVariable(e){let i=-1;if(i=e??this.currentVariableId,!this.variables||i===-1)return null;const s=this.variables.findIndex(r=>r.id===i);return s<0?null:this.variables.at(s)}getVolume(e){const i=this.getVariable(e);return i!=null?this.volumes.find(({id:s})=>s===i.volumeId):null}get timeInfo(){const e=this.getVolume(null);if(e?.volumeType!=="xyzt")return null;const i=e.timeStops;if(!i?.length)return null;const s=new Oe({start:i[0],end:i.at(-1)});return new Ee({fullTimeExtent:s,stops:i})}getVolumeStyle(e){const i=this.getVariable(e);return i!=null?this.volumeStyles.find(({volumeId:s})=>s===i.volumeId):null}getColorForContinuousDataValue(e,i,s){const r=this.getVariable(e);if(r==null||r.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const a=this.variableStyles.at(n);return a?.transferFunction?a.transferFunction.getColorForContinuousDataValue(i,s):null}getSections(){const e=[];for(const i of this.sections)e.push(new xe({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const s=this._getVariable(i);if(s!=null){const r=i.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),P.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const a=this.getColorForContinuousDataValue(r.variableId,n.value,!1);a===null||a.equals(n.color)||(n.color=a)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&P.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(P.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)P.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else P.getLogger(this).error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const s=this._getVolumeFromVolumeId(i.volumeId);if(s!=null){const r=i.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else P.getLogger(this).error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const s of this.variables)if(s.id===i)return s;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,s){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=ie(e.normal[0],e.normal[1],e.normal[2]);return Re(r,r),!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<1e-6)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};t([o({type:["Voxel"]})],l.prototype,"operationalLayerType",void 0),t([o(mt)],l.prototype,"legendEnabled",void 0),t([o({json:{write:!0}})],l.prototype,"title",void 0),t([o(gt)],l.prototype,"url",null),t([o({type:c.ofType(xe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],l.prototype,"sections",void 0),t([o({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],l.prototype,"currentVariableId",void 0),t([o({type:c.ofType(Qe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],l.prototype,"volumeStyles",void 0),t([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],l.prototype,"renderMode",void 0),t([o({type:c.ofType(Xe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],l.prototype,"variableStyles",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],l.prototype,"enableSlices",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],l.prototype,"enableSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],l.prototype,"enableDynamicSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],l.prototype,"enableIsosurfaces",void 0),t([o({type:We,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],l.prototype,"shading",void 0),t([o({type:["show","hide"]})],l.prototype,"listMode",void 0),t([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"opacity",void 0),t([o({type:c.ofType(qt)})],l.prototype,"variables",void 0),t([o({type:c.ofType(Ye)})],l.prototype,"volumes",void 0),t([o({type:Bt})],l.prototype,"index",void 0),t([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"minScale",void 0),t([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"maxScale",void 0),t([o({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([o({readOnly:!0,json:{name:"serviceVersion"}})],l.prototype,"version",void 0),t([Te("service","version")],l.prototype,"readVersion",null),t([o({type:Me})],l.prototype,"fullExtent",void 0),t([Te("service","fullExtent",["fullExtent"])],l.prototype,"readFullExtent",null),t([o({readOnly:!0,clonable:!1,json:{read:!1}})],l.prototype,"fields",null),t([o({readOnly:!0})],l.prototype,"fieldsIndex",null),t([o({type:Boolean,json:{name:"disablePopup",read:{reader:(e,i)=>!i.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,i,s){i[s]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],l.prototype,"popupEnabled",void 0),t([o({type:vt,json:{name:"popupInfo",write:!0}})],l.prototype,"popupTemplate",void 0),t([o({readOnly:!0,json:{read:!1}})],l.prototype,"defaultPopupTemplate",null),t([o({type:Ee,readOnly:!0,json:{read:!1}})],l.prototype,"timeInfo",null),t([o({type:Oe,json:{read:!1}})],l.prototype,"timeExtent",void 0),t([o({type:ft,json:{read:!1}})],l.prototype,"timeOffset",void 0),t([o({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],l.prototype,"useViewTime",void 0),l=t([m("esri.layers.VoxelLayer")],l);const Ht=l;export{Ht as default};
