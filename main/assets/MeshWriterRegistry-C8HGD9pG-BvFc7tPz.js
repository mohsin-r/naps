import{D as M,K as xe,J as ve,Z as te,u as D,G as z,_ as Me}from"./UpdateTracking2D-swFQJIjy-BaZsakTc.js";import{e6 as S,e_ as $,d$ as Pe,a2 as se,e$ as be,f0 as N,bK as T,f1 as re,f2 as ne,e4 as k,f3 as ie,f4 as Z,f5 as we,f6 as ae,cj as R,am as Ie,q as Se,f7 as ke,aM as q,f8 as A,Q as Ae,f9 as Le}from"./main-B2UX4EBG.js";import{I as ze,O as De,y as Ee,L as de,$ as Te,Q as Be,v as Re,M as Fe,k as Oe,X as Ge,a as Ce,m as We,b as Ve,R as fe,J as Y,g as je,c as Ne,C as E}from"./PieChartMeshWriter-DYJnKx_X-CLZ7UnIB.js";import{T as oe,h as Ze}from"./LabelMetric-DpMX58iW-B-5yyl82.js";import{e as F}from"./constants-Bqe1QJ4u-F8oTIn7N.js";import{r as me,f as qe}from"./grouping-Bl3jGfSC-ZYMZjTql.js";import{T as Ye}from"./AttributeStore-BysBgiw_-LpWqk63G.js";let Qe=class extends Ne{};function Xe(n){const{sprite:e,isMapAligned:t,colorLocked:r,scaleSymbolsProportionally:s,isStroke:i}=n;let a=0;return t&&(a|=E(D.bitset.isMapAligned)),r&&(a|=E(D.bitset.colorLocked)),e.sdf&&(a|=E(D.bitset.isSDF)),s&&(a|=E(D.bitset.scaleSymbolsProportionally)),i&&(a|=E(D.bitset.isStroke)),a}let $e=class extends Qe{get vertexSpec(){return{createComputedParams:n=>{let{pixelDimensions:e,texelDimensions:t,baseSize:r,referenceSize:s,strokeWidth:i,sizeRatio:a}=n;e||(e=n.sprite.sdf?[0,0]:[n.sprite.width,n.sprite.height]),t||(t=n.sprite.sdf?[0,0]:e),r=T(r),s=T(s),i=T(i);const o=(n.sprite.sdfDecodeCoeff??1)*a;return{...n,pixelDimensions:e,texelDimensions:t,baseSize:r,referenceSize:s,strokeWidth:i,sdfDecodeCoeff:o}},optionalAttributes:{zoomRange:{type:S.SHORT,count:2,packPrecisionFactor:$,pack:({scaleInfo:n},{tileInfo:e})=>fe(n,e)}},attributes:{id:{type:S.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:S.UNSIGNED_BYTE,count:1,pack:Xe},pos:{type:S.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:S.FLOAT,count:2,packAlternating:{count:4,pack:n=>{const e=n.texelDimensions;return[[-.5*e[0],-.5*e[1]],[.5*e[0],-.5*e[1]],[-.5*e[0],.5*e[1]],[.5*e[0],.5*e[1]]]}}},uv:{type:S.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:n,texXmin:e,texYmax:t,texYmin:r})=>[[e,r],[n,r],[e,t],[n,t]]}},animationPointerAndBaseSizeAndReferenceSize:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:n,baseSize:e,referenceSize:t})=>[n.dataColumn,n.dataRow,e,t]},sizing:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:n,pixelDimensions:e,baseSize:t,sprite:r,sizeRatio:s})=>{const i=Math.max(t*r.width/r.height,t),a=r.sdfDecodeCoeff*i*s;return[e[0],e[1],n,a]}},angle:{type:S.BYTE,count:1,packTessellation:({angle:n})=>n}}}}_write(n,e){const t=this.evaluatedMeshParams.sprite,{textureBinding:r}=t;n.recordStart(this.instanceId,this.attributeLayout,r);const s=e.getDisplayId();if(e.geometryType==="esriGeometryPolygon"){const i=e.readCentroidForDisplay();if(!i)return;const[a,o]=i.coords;this._writeQuad(n,s,a,o)}else if(e.geometryType==="esriGeometryPoint"){const i=e.readXForDisplay(),a=e.readYForDisplay();this._writeQuad(n,s,i,a)}else{const i=e.readGeometryForDisplay();if(i){const{angleToLine:a}=this.evaluatedMeshParams;if(a){let o=!0,c=null,d=null;i.forEachVertex((l,u)=>{if(c!=null&&d!=null){const h=Math.atan2(u-d,l-c)/Me;o&&(this._writeQuad(n,s,c,d,h),o=!1),this._writeQuad(n,s,l,u,h)}c=l,d=u})}else i.forEachVertex((o,c)=>{this._writeQuad(n,s,o,c)})}}n.recordEnd()}_writeQuad(n,e,t,r,s=0){const i=this.evaluatedMeshParams.sprite,{rect:a}=i,o=a.x+2,c=a.y+2,d=a.x+a.width-2,l=a.y+a.height-2,u=n.vertexCount();n.recordBounds(t,r,64,64);const h={texXmin:o,texYmin:c,texXmax:d,texYmax:l,angle:s};for(let _=0;_<4;_++)this._writeVertex(n,e,t,r,h);n.indexEnsureSize(6),n.indexWrite(u),n.indexWrite(u+1),n.indexWrite(u+2),n.indexWrite(u+1),n.indexWrite(u+3),n.indexWrite(u+2)}};function ce(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n}function pe(n,e){return Math.sqrt(n*n+e*e)}function le(n){const e=pe(n[0],n[1]);n[0]/=e,n[1]/=e}function He(n,e){return pe(n[0]-e[0],n[1]-e[1])}function Ke(n,e){return n[e+1]}function _e(n){return n.length-1}function Je(n){let e=0;for(let t=0;t<_e(n);t++)e+=Ue(n,t);return e}function Ue(n,e,t=1){let[r,s]=Ke(n,e);return[r,s]=[Math.round(r),Math.round(s)],Math.sqrt(r*r+s*s)*t}let et=class H{constructor(e,t,r,s,i){this._segments=e,this._index=t,this._distance=r,this._xStart=s,this._yStart=i,this._done=!1}static create(e){return new H(e,0,0,e[0][0],e[0][1])}clone(){return new H(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let r=Math.acos(t);return e>0&&(r=2*Math.PI-r),r}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<_e(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const r=this.backwardLength;if(e<=r)return this._distance=(r-e)/this.length,this;let s=this.backwardLength;for(;this.prev();){if(s+this.length>e)return this._seekBackwards(e-s);s+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let r=this.remainingLength;for(;this.next();){if(r+this.length>e)return this.seek(e-r,t);r+=this.length}return this._distance=1,t?this:null}};function Q(n,e,t,r=!0){const s=Je(n),i=et.create(n),a=s/2;if(!r)return i.seek(a),void(Math.abs(i.x)<F&&Math.abs(i.y)<F&&t(i.clone(),0,a+0*e,s));const o=Math.max((s-e)/2,0),c=Math.floor(o/e),d=a-c*e;i.seek(d);for(let l=-c;l<=c;l++)Math.abs(i.x)<F&&Math.abs(i.y)<F&&t(i.clone(),l,a+l*e,s),i.seek(e)}function X(n,e){const t=e;for(let r=0;r<n.length;r++){let s=n[r];tt(s,t);const i=[];i.push(s[0]);for(let a=1;a<s.length;a++){const[o,c]=s[a-1],[d,l]=s[a],u=d-o,h=l-c;i.push([u,h])}n[r]=i,s=i}return n}function tt(n,e){if(e<=0)return;const t=n.length;if(t<3)return;const r=[];let s=0;r.push(0);for(let l=1;l<t;l++)s+=He(n[l],n[l-1]),r.push(s);e=Math.min(e,.2*s);const i=[];i.push(n[0][0]),i.push(n[0][1]);const a=n[t-1][0],o=n[t-1][1],c=ce([0,0],n[0],n[1]);le(c),n[0][0]+=e*c[0],n[0][1]+=e*c[1],ce(c,n[t-1],n[t-2]),le(c),n[t-1][0]+=e*c[0],n[t-1][1]+=e*c[1];for(let l=1;l<t;l++)r[l]+=e;r[t-1]+=e;const d=.5*e;for(let l=1;l<t-1;l++){let u=0,h=0,_=0;for(let m=l-1;m>=0&&!(r[m+1]<r[l]-d);m--){const f=d+r[m+1]-r[l],p=r[m+1]-r[m],g=r[l]-r[m]<d?1:f/p;if(Math.abs(g)<1e-6)break;const y=g*g,v=g*f-.5*y*p,P=g*p/e,x=n[m+1],I=n[m][0]-x[0],b=n[m][1]-x[1];u+=P/v*(x[0]*g*f+.5*y*(f*I-p*x[0])-y*g*p*I/3),h+=P/v*(x[1]*g*f+.5*y*(f*b-p*x[1])-y*g*p*b/3),_+=P}for(let m=l+1;m<t&&!(r[m-1]>r[l]+d);m++){const f=d-r[m-1]+r[l],p=r[m]-r[m-1],g=r[m]-r[l]<d?1:f/p;if(Math.abs(g)<1e-6)break;const y=g*g,v=g*f-.5*y*p,P=g*p/e,x=n[m-1],I=n[m][0]-x[0],b=n[m][1]-x[1];u+=P/v*(x[0]*g*f+.5*y*(f*I-p*x[0])-y*g*p*I/3),h+=P/v*(x[1]*g*f+.5*y*(f*b-p*x[1])-y*g*p*b/3),_+=P}i.push(u/_),i.push(h/_)}i.push(a),i.push(o);for(let l=0,u=0;l<t;l++)n[l][0]=i[u++],n[l][1]=i[u++]}const O=1,L=0,st=128,rt=ke(n=>{let e=0;if(n===0)return 1/0;for(;!(n%2);)e++,n/=2;return e});class nt extends de{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,r,s){if(this._zoomLevel=s||0,r!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const i=t.readXForDisplay(),a=t.readYForDisplay();this._writePoint(e,i,a,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const i=t.readCentroidForDisplay();if(!i)return;const[a,o]=i.coords;this._writePoint(e,a,o,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_createLineLabelMetric(e,t,r,s){const i=te(e),a=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,o=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,d=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new oe(i,t,r,a,o,c,d,s??null)}_writePoint(e,t,r,s){const i=this._getShaping();if(!i)return;const a=s.getDisplayId(),o=xe(this.evaluatedMeshParams.horizontalAlignment),c=ve(this.evaluatedMeshParams.verticalAlignment),d=this.evaluatedMeshParams.scaleInfo?.maxScale??0,l=this.evaluatedMeshParams.scaleInfo?.minScale??0,u=te(s.getDisplayId()),h=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new oe(u,t,r,o,c,d,l,h)),this._writeGlyphs(e,a,t,r,i,0,h),e.metricBoxWrite(i.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:r,verticalAlignment:s}=this.evaluatedMeshParams,i=this.evaluatedMeshParams.repeatLabelDistance||128,a=this._getShaping("middle");if(!a)return;const o=(d,l,u,h)=>this._placeSubdivGlyphs(d,l,u,h),c=(a.bounds.width+i)/(1<<O);this._current={out:e,id:t.getDisplayId(),shaping:a,zoomRange:fe(r,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=s==="bottom"?"above":s==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,o,c):this._writeCenterAlong(t,o,c)}_writeAboveAndBelowAlong(e,t,r){const{repeatLabel:s}=this.evaluatedMeshParams,{shaping:i}=this._current,a=i.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const c=new q;Pe(c,o,!1,!1,"esriGeometryPolyline",1);const d=he(new q,c,a),l=he(new q,c,-a),u=se(l,"esriGeometryPolyline",!1,!1),h=se(d,"esriGeometryPolyline",!1,!1),_=X(h.paths,i.bounds.width),m=X(u.paths,i.bounds.width);this._current.offsetDirection="above";for(const f of _)Q(f,r,t,!!s);this._current.offsetDirection="below";for(const f of m)Q(f,r,t,!!s)}_writeCenterAlong(e,t,r){const{repeatLabel:s}=this.evaluatedMeshParams,{shaping:i}=this._current,a=X(e.readLegacyGeometryForDisplay().paths,i.bounds.width);for(const o of a)Q(o,r,t,!!s)}_placeSubdivGlyphs(e,t,r,s){const{allowOverrun:i,labelPosition:a,repeatLabelDistance:o}=this.evaluatedMeshParams,c=this._current.zoomRange[0],d=rt(t),l=this._current.shaping.bounds.width/(1<<O),u=Math.sqrt(o||st)/(1<<O),h=Math.min(r,s-r),_=this._current.shaping.isMultiline?Y:Math.log2(h/(u+l/2)),m=t===0?_:Math.min(d,_),f=Math.max(c,this._zoomLevel+O-m),p=this._zoomLevel-f,g=this._current.shaping.bounds.width/2*2**p;this._current.shaping.isMultiline?t===0&&this._placeStraight(e,f):i&&p<0?this._placeStraightAlong(e,c):a==="parallel"?this._placeStraightAlong(e,f):a==="curved"&&this._placeCurved(e,f,g)}_placeStraight(e,t){const{out:r,id:s,shaping:i,referenceBounds:a}=this._current,{x:o,y:c}=e;r.metricStart(this._createLineLabelMetric(s,o,c)),r.metricBoxWrite(i.boundsT);const d=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(r,s,o,c,i,0,a,{clipAngle:d,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(r,s,o,c,i,0,a,{clipAngle:l,mapAligned:!0,isLineLabel:!0,minZoom:t}),r.metricEnd()}_placeCurved(e,t,r){const{out:s,id:i}=this._current;s.metricStart(this._createLineLabelMetric(i,e.x,e.y));const a=e.clone(),o=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(a,t,1,o),this._placeBack(e,a,t,r,1,o),this._placeForward(e,a,t,r,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(a,t,0,c),this._placeBack(e,a,t,r,0,c),this._placeForward(e,a,t,r,0,c)),s.metricEnd()}_placeStraightAlong(e,t){const{out:r,id:s,shaping:i,zoomRange:a,referenceBounds:o}=this._current,{boxBorderLineColor:c,boxBackgroundColor:d}=this.evaluatedMeshParams,l=e.clone(),u=e.angle*(180/Math.PI)%360,h=(e.angle*(180/Math.PI)+180)%360,_=i.glyphs.length>0&&!(!c&&!d);if(r.metricStart(this._createLineLabelMetric(s,e.x,e.y)),_){const m=Math.max(t,a[0],0),f=Math.min(Y,a[1]),p=be(N(),-e.angle),g={minZoom:m,maxZoom:f,clipAngle:u,mapAligned:!0,isLineLabel:!0},y=T(this.evaluatedMeshParams.offsetX),v=T(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const P=re(y,-1*v),[x,I]=i.shapeBackground(ne(N(),p,P));r.recordStart(this.instanceId,this.attributeLayout,i.glyphs[0].textureBinding);const b=2*Math.max(x.width,x.height);r.recordBounds(e.x+x.x,e.y+x.y,b,b),this._writeTextBox(r,s,e.x,e.y,I,o,g),r.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const P=re(y,v),[x,I]=i.shapeBackground(ne(N(),p,P));g.clipAngle=h,r.recordStart(this.instanceId,this.attributeLayout,i.glyphs[0].textureBinding);const b=2*Math.max(x.width,x.height);r.recordBounds(e.x+x.x,e.y+x.y,b,b),this._writeTextBox(r,s,e.x,e.y,I,o,g),r.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(l,t,1,u,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(l,t,0,h,!0),r.metricEnd()}_placeBack(e,t,r,s,i,a){const o=e.clone();let c=e.backwardLength+L;for(;o.prev()&&!(c>=s);)this._placeOnSegment(o,t,c,r,-1,i,a),c+=o.length+L}_placeForward(e,t,r,s,i,a){const o=e.clone();let c=e.remainingLength+L;for(;o.next()&&!(c>=s);)this._placeOnSegment(o,t,c,r,1,i,a),c+=o.length+L}_placeFirst(e,t,r,s,i=!1){const{out:a,id:o,shaping:c,zoomRange:d,referenceBounds:l}=this._current,u=c.glyphs;for(const h of u){const _=h.x>c.bounds.x?r:1-r,m=_*e.remainingLength+(1-_)*e.backwardLength,f=Math.abs(h.x+h.width/2-c.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(m+L))),g=Math.max(t,i?0:p);h.maxZoom=Math.min(d[1],Y),h.angle=e.angle+(1-r)*Math.PI,h.minZoom=Math.max(d[0],g),this._writeLineGlyph(a,o,e.x,e.y,c.bounds,h,s,l,!0),(r||this._current.offsetDirection)&&this._isVisible(h.minZoom,h.maxZoom)&&a.metricBoxWrite(h.bounds)}}_placeOnSegment(e,t,r,s,i,a,o){const{out:c,id:d,shaping:l,referenceBounds:u}=this._current,h=l.glyphs,_=e.dx/e.length,m=e.dy/e.length,f={x:e.x+r*-i*_,y:e.y+r*-i*m};for(const p of h){const g=p.x>l.bounds.x?a:1-a;if(!(g&&i===1||!g&&i===-1))continue;const y=Math.abs(p.x+p.width/2-l.bounds.x),v=Math.max(0,this._zoomLevel+Math.log2(y/r)-.1),P=Math.max(s,this._zoomLevel+Math.log2(y/(r+e.length+L)));v!==0&&(p.angle=e.angle+(1-a)*Math.PI,p.minZoom=P,p.maxZoom=v,this._writeLineGlyph(c,d,f.x,f.y,l.bounds,p,o,u,!0),(a||this._current.offsetDirection)&&this._isVisible(p.minZoom,p.maxZoom)&&c.metricBoxWrite(p.bounds))}}_writeLineGlyph(e,t,r,s,i,a,o,c,d){const l=r+i.x,u=s+i.y,h=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),_=Math.max(i.width,i.height)*h;e.recordStart(this.instanceId,this.attributeLayout,a.textureBinding),e.recordBounds(l,u,_,_);const{texcoords:m,offsets:f}=a,{fontSize:p,haloSize:g,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,t,r,s,{texcoords:m,offsets:f,fontSize:p,haloSize:g,outlineSize:y,color:je(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],a.minZoom),maxZoom:Math.min(this._current.zoomRange[1],a.maxZoom),clipAngle:o,mapAligned:d,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const r=Math.floor(this._zoomLevel*$)/$;return e<=r&&r<=t}}function he(n,e,t){const{coords:r,lengths:s}=e,i=A(),a=A(),o=A(),c=A(),d=A(),l=A(),u=2;let h=0;for(let _=0;_<s.length;_++){const m=s[_];for(let f=0;f<m;f++){const p=u*(f+h-1),g=u*(f+h),y=u*(f+h+1);f>0?k(i,r[p],r[p+1]):k(i,0,0),k(a,r[g],r[g+1]),f<m-1?k(o,r[y],r[y+1]):k(o,0,0),f===0?k(c,0,0):(ie(c,a,i),Z(c,c),k(c,c[1],-c[0])),f===m-1?k(d,0,0):(ie(d,o,a),Z(d,d),k(d,d[1],-d[0])),we(l,c,d),Z(l,l);const v=l[0]*d[0]+l[1]*d[1];v!==0&&ae(l,l,v),ae(l,l,t),n.coords.push(a[0]+l[0],a[1]+l[1])}n.lengths.push(m),h+=m}return n}function V(n){return n instanceof j?n:typeof n=="object"&&"type"in n?ot[n.type].hydrate(n):new B(n)}class j{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}let B=class extends j{constructor(n){super([]),this.value=n}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[n,e,t,r]=this.value;return r!=null?z.vector4.encode([n,e||0,t||0,r]):z.vector3.encode([n,e||0,t||0])}return z.scalar.encode(this.value)}},it=class K extends j{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new K(e,V(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof B))return this;const[t,r,s,i]=e.value,a=this._config.translation.from[0],o=this._config.translation.from[1],c=this._config.rotation.from,d=this._config.scale.from;if(a===this._config.translation.to[0]&&o===this._config.translation.to[1]&&c===this._config.rotation.to&&d===this._config.scale.to){const l=s+c,u=i*d,h=Math.sin(s),_=Math.cos(s);return new B([_*i*a-h*i*o+t,h*i*a+_*i*o+r,l,u])}return new K(this._config,e)}get instructions(){return z.animatedTransform.encode(this._config)}},at=class J extends j{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new J(e,V(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof B))return this;const[t,r,s,i]=e.value,a=this._config.color.from[0],o=this._config.color.from[1],c=this._config.color.from[2];let d=this._config.color.from[3];const l=this._config.opacity.from;return a===this._config.color.to[0]&&o===this._config.color.to[1]&&c===this._config.color.to[2]&&d===this._config.color.to[3]&&l===this._config.opacity.to?(d*=l,new B([t*a,r*o,s*c,i*d])):new J(this._config,e)}get instructions(){return z.animatedColor.encode(this._config)}};const ot={AnimatedTransform:it,AnimatedColor:at};function ct(n){return ge(n.map(e=>w(e)).map(e=>V(e).simplify()))}function lt(n){const e=[];return e.push(n.transform),e.push(n.fromColor),e.push(n.toColor),e.push(n.colorMix),e.push(n.toOpacity),e.push(n.opacityMix),e}function ge(n){const e=[],t=[];let r=0;for(const s of n){const i=[...s.encode(),...z.ret.encode()];e.push([r+n.length,0,0,0]),t.push(...i),r+=i.length}return[...e,...t]}async function U(n,e){const t=n;let r;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")r=t;else if(Array.isArray(t))r=await Promise.all(t.map(s=>U(s,e)));else if(typeof t=="object")if("valueExpressionInfo"in t){const{valueExpressionInfo:s}=t,{expression:i}=s;r={...t,computed:await e.createComputedField({expression:i})}}else{r={};for(const s in t)r[s]=await U(t[s],e)}return r}function w(n,e,t){function r(a){if(!("computed"in a))return a;let o=a.computed.readWithDefault(e,t,[255*a.defaultValue[0],255*a.defaultValue[1],255*a.defaultValue[2],a.defaultValue[3]]);if(typeof o=="string"){const c=Le.fromString(o);c&&(o=[c.r,c.g,c.b,c.a])}return o}const s=n;let i;if(typeof s=="number"||typeof s=="string"||typeof s=="boolean")i=s;else if(Array.isArray(s))i=s.map(a=>w(a,e,t));else if(typeof s=="object")if("type"in s&&s.type!=null&&s.type==="Process")switch(s.op){case"ArcadeColor":{const a=w(s.value,e,t);G(Array.isArray(a)&&a.length===4),i=[a[0]/255,a[1]/255,a[2]/255,a[3]]}break;case"Transparency":{const a=w(s.value,e,t);G(typeof a=="number"),i=1-a/100}break;case"Divide":{const a=w(s.left,e,t);G(typeof a=="number");const o=w(s.right,e,t);G(typeof o=="number"),i=a/o}break;case"Random":{const a=w(s.seed,e,t),o=w(s.min,e,t),c=w(s.max,e,t),d=e.getObjectId(),l=me(d||0);i=o+qe(l,a)*(c-o)}}else if("computed"in s)i=r(s);else{i={};for(const a in s)i[a]=w(s[a],e,t)}return i}function G(n){if(!n)throw new Error("Assertion failed.")}class ht extends Ye{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,r){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}const ut=()=>Ae.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function C(n,e,t=!1){const{defaultValue:r,valueExpressionInfo:s,value:i}=e;if(s){const{expression:a}=s,o=await n.createComputedField({expression:a},t);return o?{...e,computed:o,defaultValue:r}:null}return{...e,computed:new ht(i),defaultValue:r}}async function ue(n,e){const{valueExpressionInfo:t}=e,{expression:r}=t,s=await n.createComputedField({expression:r});return s?{...e,computed:s}:null}function ye(n){return typeof n=="object"&&n!=null&&(!(!("valueExpressionInfo"in n)||!n.valueExpressionInfo)||"type"in n&&n.type==="Process"&&"op"in n&&n.op==="Random")}function W(n){if(Array.isArray(n)){for(const e of n)if(W(e))return!0}if(typeof n=="object"){if(ye(n))return!0;for(const e in n)if(W(n[e]))return!0}return!1}class ee{static async create(e,t,r){const s={},i=new Map,a=new Map,o=new Map,c=new Map,d=new Map,l=new Map;for(const u in r){const h=r[u];if(h!=null&&typeof h=="object")if(Array.isArray(h)){if(typeof h[0]=="object")throw new Error(`InternalError: Cannot handle ${u}. Nested array params are not supported`);s[u]=h}else if("valueExpressionInfo"in h){if(h.value){s[u]=h.value;continue}const _=await ue(e,h);if(!_){s[u]=h.defaultValue;continue}i.set(u,_),s[u]=null}else switch(h.type){case"cim-effect-infos":if(h.effectInfos.some(_=>_.overrides.length)){a.set(u,{effects:await Promise.all(h.effectInfos.map(async _=>{const m=_.overrides.map(f=>C(e,f));return{effect:_.effect,compiledOverrides:(await Promise.all(m)).filter(R)}}))});break}s[u]=h.effectInfos.map(_=>_.effect);break;case"cim-marker-placement-param":h.overrides.length&&o.set(u,{placementInfo:h,compiledOverrides:(await Promise.all(h.overrides.map(_=>C(e,_)))).filter(R)}),s[u]=h.placement;break;case"text-rasterization-param":{if(h.overrides.length){const m=h.overrides.map(f=>C(e,f,h.useLegacyLabelEvaluationRules));c.set(u,{compiledOverrides:(await Promise.all(m)).filter(R),rasterizationParam:h,objectIdToResourceId:new Map});continue}const _={type:"cim-rasterization-info",resource:h.resource};s[u]=await t.fetchResourceImmediate(_)??null;break}case"sprite-rasterization-param":{if(h.overrides.length){const m=h.overrides.map(f=>C(e,f));c.set(u,{compiledOverrides:(await Promise.all(m)).filter(R),rasterizationParam:h,objectIdToResourceId:new Map});continue}if(h.resource.type==="animated"){c.set(u,{compiledOverrides:[],rasterizationParam:h,objectIdToResourceId:new Map});continue}const _={type:"cim-rasterization-info",resource:h.resource};s[u]=await t.fetchResourceImmediate(_)??null;break}case"cim-marker-transform-param":{const{params:_}=h;if(W(_)){const m={compiledMarkerInfos:[]};await Promise.all(_.map(async f=>{const p={props:{}};for(const g in f)if(ye(f[g])){const y=await ue(e,f[g]);p.compiledExpressionMap||(p.compiledExpressionMap=new Map);const v=p.compiledExpressionMap;y&&v.set(g,y)}else p.props[g]=f[g];m.compiledMarkerInfos.push(p)})),d.set(u,m)}else s[u]={type:"cim-marker-transform-info",infos:_};break}case"animation-params":{const{params:_}=h,m=lt(_);if(W(m)){const f=await Promise.all(m.map(p=>U(p,e)));l.set(u,{params:f,propertyIdToResourceId:new Map,key:u})}else{const f=ct(m),p=await t.fetchResourceImmediate({type:"animation-info",resource:f});p!=null&&p.type==="sprite"&&(s[u]={dataRow:p.rect.y,dataColumn:p.rect.x})}break}default:s[u]=h}else s[u]=h}return new ee(r,s,i,a,o,c,d,l)}constructor(e,t,r,s,i,a,o,c){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=r,this._dynamicEffectProperties=s,this._dynamicPlacementProperties=i,this._dynamicAsyncProperties=a,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=c,this.evaluator=d=>d}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,r){for(const s of this._dynamicAsyncProperties.values()){const i=Ie(s.rasterizationParam.resource);s.rasterizationParam.resource.type==="animated"&&s.rasterizationParam.resource.randomizeStartTime&&(i.primitiveName="__RESERVED__PRIMITIVE__NAME__",i.startGroup=me(t.getObjectId()||0));for(const{primitiveName:o,propertyName:c,computed:d,defaultValue:l,valueExpressionInfo:u}of s.compiledOverrides)try{const h=s.rasterizationParam.resource.type==="animated"?i.primitiveName:o;Ze(i,h,c,d,t,r,l)}catch(h){ut().errorOnce(new Se("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${u?.expression}' (primitive: '${o}', property: '${c}')`,h))}const a=e.enqueueRequest({type:"cim-rasterization-info",resource:i});s.objectIdToResourceId.set(t.getObjectId(),a)}for(const s of this._dynamicAsyncAnimations.values()){const i=s.params.map(c=>w(c,t,r)).map(V).map(c=>c.simplify()),a=ge(i),o=e.enqueueRequest({type:"animation-info",resource:a});s.propertyIdToResourceId.set(t.getObjectId()+"."+s.key,o)}}evaluateMeshParams(e,t,r){for(const[s,i]of this._dynamicProperties.entries())this._resolvedMeshParams[s]=i.computed.readWithDefault(t,r,i.defaultValue);for(const[s,i]of this._dynamicPlacementProperties.entries())for(const{computed:a,defaultValue:o,propertyName:c}of i.compiledOverrides){const d=a.readWithDefault(t,r,o);i.placementInfo.placement[c]=d,this._resolvedMeshParams[s]=i.placementInfo.placement}for(const[s,i]of this._dynamicEffectProperties.entries())for(const a of i.effects){for(const{computed:o,defaultValue:c,propertyName:d}of a.compiledOverrides){const l=o.readWithDefault(t,r,c);a.effect[d]=l}this._resolvedMeshParams[s]=i.effects.map(o=>o.effect)}for(const[s,i]of this._dynamicTransformProperties.entries()){const a={type:"cim-marker-transform-info",infos:[]};for(const o of i.compiledMarkerInfos){const c={...o.props};if(o.compiledExpressionMap)for(const[d,l]of o.compiledExpressionMap){const u=l.computed.readWithDefault(t,r,l.defaultValue);c[d]=typeof u=="number"||typeof u=="boolean"?u:l.defaultValue}a.infos.push(c)}this._resolvedMeshParams[s]=a}for(const[s,i]of this._dynamicAsyncProperties.entries()){const a=i.objectIdToResourceId.get(t.getObjectId());if(a==null)continue;const o=e.getResource(a);this._resolvedMeshParams[s]=o}for(const[s,i]of this._dynamicAsyncAnimations.entries()){const a=i.propertyIdToResourceId.get(t.getObjectId()+"."+s);if(a==null)continue;const o=e.getResource(a);this._resolvedMeshParams[s]={dataRow:o.rect.y,dataColumn:o.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}class xt{async createMeshWriter(e,t,r,s){const i=this._getMeshWriter(s.techniqueType),a=await ee.create(e,t,s.inputParams),o=new i(s.id,a,s.optionalAttributes,r);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case M.Fill:return Ve;case M.DotDensity:return We;case M.ComplexFill:return Ce;case M.PatternFill:return Ge;case M.OutlineFill:return Oe;case M.PatternOutlineFill:return Fe;case M.ComplexOutlineFill:return Re;case M.Marker:return Be;case M.PieChart:return Te;case M.Text:return de;case M.Line:return Ee;case M.TexturedLine:return De;case M.Heatmap:return ze;case M.Label:return nt;case M.AnimatedMarker:return $e;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}export{ht as _,xt as d};
