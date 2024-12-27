import{gt as S}from"./main-B2UX4EBG.js";const z=512;var P,p;(function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon"})(P||(P={}));let f=class R{constructor(i,s){this.x=i,this.y=s}clone(){return new R(this.x,this.y)}equals(i,s){return i===this.x&&s===this.y}isEqual(i){return i.x===this.x&&i.y===this.y}setCoords(i,s){return this.x=i,this.y=s,this}normalize(){const i=this.x,s=this.y,h=Math.sqrt(i*i+s*s);return this.x/=h,this.y/=h,this}rightPerpendicular(){const i=this.x;return this.x=this.y,this.y=-i,this}leftPerpendicular(){const i=this.x;return this.x=-this.y,this.y=i,this}move(i,s){return this.x+=i,this.y+=s,this}assign(i){return this.x=i.x,this.y=i.y,this}assignAdd(i,s){return this.x=i.x+s.x,this.y=i.y+s.y,this}assignSub(i,s){return this.x=i.x-s.x,this.y=i.y-s.y,this}rotate(i,s){const h=this.x,e=this.y;return this.x=h*i-e*s,this.y=h*s+e*i,this}scale(i){return this.x*=i,this.y*=i,this}length(){const i=this.x,s=this.y;return Math.sqrt(i*i+s*s)}sub(i){return this.x-=i.x,this.y-=i.y,this}add(i){return this.x+=i.x,this.y+=i.y,this}static distance(i,s){const h=s.x-i.x,e=s.y-i.y;return Math.sqrt(h*h+e*e)}static add(i,s){return new R(i.x+s.x,i.y+s.y)}static sub(i,s){return new R(i.x-s.x,i.y-s.y)}};class v{constructor(i,s,h){this.ratio=i,this.x=s,this.y=h}}let C=class{constructor(t,i,s,h=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=e,this._tileSize=z*h,this._dz=t,this._yPos=i,this._xPos=s}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const s=t>>this._dz;i>s&&(i=s),this._margin=i,this._xmin=s*this._xPos-i,this._ymin=s*this._yPos-i,this._xmax=this._xmin+s+2*i,this._ymax=this._ymin+s+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new f(t,i),this._firstPt=new f(t,i),this._dist=0}lineTo(t,i){const s=this._isIn(t,i),h=new f(t,i),e=f.distance(this._prevPt,h);let l,n,x,_,r,g,m,u;if(s)this._prevIsIn?this._lineTo(t,i,!0):(l=this._prevPt,n=h,x=this._intersect(n,l),this._start=this._dist+e*(1-this._r),this._lineTo(x.x,x.y,!0),this._lineTo(n.x,n.y,!0));else if(this._prevIsIn)n=this._prevPt,l=h,x=this._intersect(n,l),this._lineTo(x.x,x.y,!0),this._lineTo(l.x,l.y,!1);else{const a=this._prevPt,o=h;if(a.x<=this._xmin&&o.x<=this._xmin||a.x>=this._xmax&&o.x>=this._xmax||a.y<=this._ymin&&o.y<=this._ymin||a.y>=this._ymax&&o.y>=this._ymax)this._lineTo(o.x,o.y,!1);else{const y=[];if((a.x<this._xmin&&o.x>this._xmin||a.x>this._xmin&&o.x<this._xmin)&&(_=(this._xmin-a.x)/(o.x-a.x),u=a.y+_*(o.y-a.y),u<=this._ymin?g=!1:u>=this._ymax?g=!0:y.push(new v(_,this._xmin,u))),(a.x<this._xmax&&o.x>this._xmax||a.x>this._xmax&&o.x<this._xmax)&&(_=(this._xmax-a.x)/(o.x-a.x),u=a.y+_*(o.y-a.y),u<=this._ymin?g=!1:u>=this._ymax?g=!0:y.push(new v(_,this._xmax,u))),(a.y<this._ymin&&o.y>this._ymin||a.y>this._ymin&&o.y<this._ymin)&&(_=(this._ymin-a.y)/(o.y-a.y),m=a.x+_*(o.x-a.x),m<=this._xmin?r=!1:m>=this._xmax?r=!0:y.push(new v(_,m,this._ymin))),(a.y<this._ymax&&o.y>this._ymax||a.y>this._ymax&&o.y<this._ymax)&&(_=(this._ymax-a.y)/(o.y-a.y),m=a.x+_*(o.x-a.x),m<=this._xmin?r=!1:m>=this._xmax?r=!0:y.push(new v(_,m,this._ymax))),y.length===0)r?g?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):g?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(y.length>1&&y[0].ratio>y[1].ratio)this._start=this._dist+e*y[1].ratio,this._lineTo(y[1].x,y[1].y,!0),this._lineTo(y[0].x,y[0].y,!0);else{this._start=this._dist+e*y[0].ratio;for(let d=0;d<y.length;d++)this._lineTo(y[d].x,y[d].y,!0)}this._lineTo(o.x,o.y,!1)}}this._dist+=e,this._prevIsIn=s,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this._line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}}result(t=!0){return this._pushLine(),this._lines.length===0?null:(this._type===P.Polygon&&t&&D.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==P.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(i===0)return null;const s=[];for(let h=0;h<i;h++)s.push({line:t[h],start:this._starts[h]||0});return s}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let s,h,e;if(i.x>=this._xmin&&i.x<=this._xmax)h=i.y<=this._ymin?this._ymin:this._ymax,e=(h-t.y)/(i.y-t.y),s=t.x+e*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)s=i.x<=this._xmin?this._xmin:this._xmax,e=(s-t.x)/(i.x-t.x),h=t.y+e*(i.y-t.y);else{h=i.y<=this._ymin?this._ymin:this._ymax,s=i.x<=this._xmin?this._xmin:this._xmax;const l=(s-t.x)/(i.x-t.x),n=(h-t.y)/(i.y-t.y);l<n?(e=l,h=t.y+l*(i.y-t.y)):(e=n,s=t.x+n*(i.x-t.x))}return this._r=e,new f(s,h)}_pushLine(){this._line&&(this._type===P.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===P.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===P.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,s){this._type!==P.Polygon?s&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new f(t,i))):(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new f(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,s){let h,e;if(this._type!==P.Polygon)if(s){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(t,i)))return;this._line.push(new f(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const l=h.x===t,n=h.y===i;if(l&&n)return;this._isH&&l||this._isV&&n?(h.x=t,h.y=i,e=this._line[this._line.length-2],e.x===t&&e.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(e=this._line[this._line.length-2],this._isH=e.x===t,this._isV=e.y===i)):(this._isH=e.x===t,this._isV=e.y===i)):(this._line.push(new f(t,i)),this._isH=l,this._isV=n)}else this._line.push(new f(t,i))}};class A{setExtent(i){this._ratio=i===4096?1:4096/i}get validateTessellation(){return this._ratio<1}reset(i){this._lines=[],this._line=null}moveTo(i,s){this._line&&this._lines.push(this._line),this._line=[];const h=this._ratio;this._line.push(new f(i*h,s*h))}lineTo(i,s){const h=this._ratio;this._line.push(new f(i*h,s*h))}close(){const i=this._line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}(function(t){t[t.sideLeft=0]="sideLeft",t[t.sideRight=1]="sideRight",t[t.sideTop=2]="sideTop",t[t.sideBottom=3]="sideBottom"})(p||(p={}));let D=class T{static simplify(i,s,h){if(!h)return;const e=-s,l=i+s,n=-s,x=i+s,_=[],r=[],g=h.length;for(let u=0;u<g;++u){const a=h[u];if(!a||a.length<2)continue;let o,y=a[0];const d=a.length;for(let c=1;c<d;++c)o=a[c],y.x===o.x&&(y.x<=e&&(y.y>o.y?(_.push(u),_.push(c),_.push(p.sideLeft),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideLeft),r.push(-1))),y.x>=l&&(y.y<o.y?(_.push(u),_.push(c),_.push(p.sideRight),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideRight),r.push(-1)))),y.y===o.y&&(y.y<=n&&(y.x<o.x?(_.push(u),_.push(c),_.push(p.sideTop),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideTop),r.push(-1))),y.y>=x&&(y.x>o.x?(_.push(u),_.push(c),_.push(p.sideBottom),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideBottom),r.push(-1)))),y=o}if(_.length===0||r.length===0)return;T.fillParent(h,r,_),T.fillParent(h,_,r);const m=[];T.calcDeltas(m,r,_),T.calcDeltas(m,_,r),T.addDeltas(m,h)}static fillParent(i,s,h){const e=h.length,l=s.length;for(let n=0;n<l;n+=4){const x=s[n],_=s[n+1],r=s[n+2],g=i[x][_-1],m=i[x][_];let u=8092,a=-1;for(let o=0;o<e;o+=4){if(h[o+2]!==r)continue;const y=h[o],d=h[o+1],c=i[y][d-1],M=i[y][d];switch(r){case p.sideLeft:case p.sideRight:if(I(g.y,c.y,M.y)&&I(m.y,c.y,M.y)){const w=Math.abs(M.y-c.y);w<u&&(u=w,a=o)}break;case p.sideTop:case p.sideBottom:if(I(g.x,c.x,M.x)&&I(m.x,c.x,M.x)){const w=Math.abs(M.x-c.x);w<u&&(u=w,a=o)}}}s[n+3]=a}}static calcDeltas(i,s,h){const e=s.length;for(let l=0;l<e;l+=4){const n=[],x=T.calcDelta(l,s,h,n);i.push(s[l]),i.push(s[l+1]),i.push(s[l+2]),i.push(x)}}static calcDelta(i,s,h,e){const l=s[i+3];if(l===-1)return 0;const n=e.length;return n>1&&e[n-2]===l?0:(e.push(l),T.calcDelta(l,h,s,e)+1)}static addDeltas(i,s){const h=i.length;let e=0;for(let l=0;l<h;l+=4){const n=i[l+3];n>e&&(e=n)}for(let l=0;l<h;l+=4){const n=s[i[l]],x=i[l+1],_=e-i[l+3];switch(i[l+2]){case p.sideLeft:n[x-1].x-=_,n[x].x-=_,x===1&&(n[n.length-1].x-=_),x===n.length-1&&(n[0].x-=_);break;case p.sideRight:n[x-1].x+=_,n[x].x+=_,x===1&&(n[n.length-1].x+=_),x===n.length-1&&(n[0].x+=_);break;case p.sideTop:n[x-1].y-=_,n[x].y-=_,x===1&&(n[n.length-1].y-=_),x===n.length-1&&(n[0].y-=_);break;case p.sideBottom:n[x-1].y+=_,n[x].y+=_,x===1&&(n[n.length-1].y+=_),x===n.length-1&&(n[0].y+=_)}}}};const I=(t,i,s)=>t>=i&&t<=s||t>=s&&t<=i,O=Number.POSITIVE_INFINITY,L=Math.PI,U=2*L,q=128/L,E=256/360,F=L/180,N=1/Math.LN2;function b(t,i){return(t%=i)>=0?t:t+i}function Q(t){return b(t*q,256)}function W(t){return b(t*E,256)}function Y(t){return Math.log(t)*N}function j(t,i,s){return t*(1-s)+i*s}const V=8,k=14,B=16;function G(t){return V+Math.max((t-k)*B,0)}function J(t,i,s){let h,e,l,n=0;for(const x of s){h=x.length;for(let _=1;_<h;++_)e=x[_-1],l=x[_],e.y>i!=l.y>i&&((l.x-e.x)*(i-e.y)-(l.y-e.y)*(t-e.x)>0?n++:n--)}return n!==0}function K(t,i,s,h){let e,l,n,x;const _=h*h;for(const r of s){const g=r.length;if(!(g<2)){e=r[0].x,l=r[0].y;for(let m=1;m<g;++m){if(n=r[m].x,x=r[m].y,S(t,i,e,l,n,x)<_)return!0;e=n,l=x}}}return!1}function X(t,i,s,h,e,l,n){const x=Math.max(h,Math.min(i,l))-i,_=Math.max(e,Math.min(s,n))-s;return x*x+_*_<=t*t}function Z(t,i){if(i===0||Number.isNaN(i))return t;const s=[],h=new f(0,0),e=new f(0,0),l=new f(0,0);for(let n=0;n<t.length;n++){const x=t[n],_=[];for(let r=0;r<x.length;r++){const g=x[r-1],m=x[r],u=x[r+1];r===0?h.setCoords(0,0):h.assignSub(m,g).normalize().rightPerpendicular(),r===x.length-1?e.setCoords(0,0):e.assignSub(u,m).normalize().rightPerpendicular(),l.assignAdd(h,e).normalize();const a=l.x*e.x+l.y*e.y;a!==0&&l.scale(1/a),_.push(f.add(m,l.scale(i)))}s.push(_)}return s}function $(t,i,s,h){const e=new f(t[0],t[1]);if(e.scale(h),i==="viewport"){const l=-s*(Math.PI/180),n=Math.cos(l),x=Math.sin(l);e.rotate(n,x)}return e}export{F as B,Q as C,C as D,O as E,W as F,G,J,K,A as N,Y as O,X as Q,L as R,j as U,U as V,Z as X,$ as Z,b,P as d,f as g};
