import{bL as z,cD as j,he as T,gY as N,gP as S,ii as Q,gO as G,cC as P,hi as M,cE as V,hm as l,cM as b,ij as H,eq as J,cN as h,ih as K,cK as W,ik as d,cO as Y,cH as y,il as $,im as tt,cB as g,cI as C,cJ as Z,io as nt,cF as it}from"./main-B2UX4EBG.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{f as u,e as et,a as st}from"./plane-B2J4G_40-Dg370CQZ.js";class ot{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&z(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*A);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,A));i++)this._items.push(this._allocator())}}const A=1024;function w(t){return t?O(j(t.origin),j(t.direction)):O(g(),g())}function O(t,i){return{origin:t,direction:i}}function Qt(t,i){const n=ut.get();return n.origin=t,n.direction=i,n}function Vt(t,i=w()){return ct(t.origin,t.direction,i)}function rt(t,i,n=w()){return C(n.origin,t),h(n.direction,i,t),n}function ct(t,i,n=w()){return C(n.origin,t),C(n.direction,i),n}function Yt(t,i){const n=b(u.get(),Y(u.get(),t.direction),h(u.get(),i,t.origin));return Z(n,n)}function at(t,i,n){const e=Z(t.direction,h(n,i,t.origin));return P(n,t.origin,M(n,t.direction,e)),n}const ut=new ot(()=>w());function v(t,i){const n=l(t),e=nt(t[2]/n),s=Math.atan2(t[1]/n,t[0]/n);return y(i,n,e,s),i}const ht=E();function E(){return T()}const ft=N,gt=N;function k(t,i){return S(i,t)}function lt(t,i){return Q(t[0],t[1],t[2],i)}function mt(t){return t}function Mt(t){t[0]=t[1]=t[2]=t[3]=0}function _t(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function _(t){return t[3]}function dt(t){return t}function pt(t,i,n,e){return Q(t,i,n,e)}function Pt(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function wt(t,i,n){return t!==n&&k(t,n),n}function qt(t,i){return i}function q(t,i,n){if(i==null||!B(t,i,p))return!1;let{t0:e,t1:s}=p;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(n){const{origin:o,direction:r}=i;n[0]=o[0]+r[0]*e,n[1]=o[1]+r[1]*e,n[2]=o[2]+r[2]*e}return!0}function xt(t,i,n){const e=rt(i,n);if(!B(t,e,p))return[];const{origin:s,direction:o}=e,{t0:r,t1:c}=p,a=f=>{const m=g();return it(m,s,o,f),R(t,m,m)};return Math.abs(r-c)<G()?[a(r)]:[a(r),a(c)]}const p={t0:0,t1:0};function B(t,i,n){const{origin:e,direction:s}=i,o=St;o[0]=e[0]-t[0],o[1]=e[1]-t[1],o[2]=e[2]-t[2];const r=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(r===0)return!1;const c=2*(s[0]*o[0]+s[1]*o[1]+s[2]*o[2]),a=c*c-4*r*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(a<0)return!1;const f=Math.sqrt(a);return n.t0=(-c-f)/(2*r),n.t1=(-c+f)/(2*r),!0}const St=g();function bt(t,i){return q(t,i,null)}function yt(t,i,n){if(q(t,i,n))return n;const e=D(t,i,u.get());return P(n,i.origin,M(u.get(),i.direction,V(i.origin,e)/l(i.direction))),n}function D(t,i,n){const e=u.get(),s=et.get();b(e,i.origin,i.direction);const o=_(t);b(n,e,i.origin),M(n,n,1/l(n)*o);const r=F(t,i.origin),c=st(i.origin,n);return H(s,c+r,e),J(n,n,s),n}function Ct(t,i,n,e){const s=_(t),o=s*s,r=i+.5*Math.PI,c=n*n+o-2*Math.cos(r)*n*s,a=Math.sqrt(c),f=c-o;if(f<=0)return .5;const m=Math.sqrt(f),X=Math.acos(m/a)-Math.asin(s/(a/Math.sin(r)));return Math.min(1,(X+.5*e)/e)}function Ut(t,i,n){return q(t,i,n)?n:(at(i,t,n),R(t,n,n))}function R(t,i,n){const e=h(u.get(),i,t),s=M(u.get(),e,t[3]/l(e));return P(n,s,t)}function Et(t,i){const n=h(u.get(),i,t),e=K(n),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function F(t,i){const n=h(u.get(),i,t),e=l(n),s=_(t),o=s+Math.abs(s-e);return W(s/o)}const x=g();function I(t,i,n,e){const s=h(x,i,t);switch(n){case d.X:{const o=v(s,x)[2];return y(e,-Math.sin(o),Math.cos(o),0)}case d.Y:{const o=v(s,x),r=o[1],c=o[2],a=Math.sin(r);return y(e,-a*Math.cos(c),-a*Math.sin(c),Math.cos(r))}case d.Z:return Y(e,s);default:return}}function L(t,i){const n=h(U,i,t);return l(n)-t[3]}function Rt(t,i,n,e){const s=L(t,i),o=I(t,i,d.Z,U),r=M(U,o,n-s);return P(e,i,r)}function jt(t,i){const n=$(t,i),e=_(t);return n<=e*e}function At(t,i,n=T()){const e=V(t,i),s=t[3],o=i[3];return e+o<s?(S(n,t),n):e+s<o?(S(n,i),n):(tt(n,t,i,(e+o-s)/(2*e)),n[3]=(e+s+o)/2,n)}const U=g(),Ot=E(),Zt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ht,altitudeAt:L,angleToSilhouette:F,axisAt:I,cameraFrustumCoverage:Ct,clear:Mt,closestPoint:Ut,closestPointOnSilhouette:D,containsPoint:jt,copy:k,create:E,distanceToSilhouette:Et,elevate:Pt,equals:gt,exactEquals:ft,fromCenterAndRadius:lt,fromRadius:_t,fromValues:pt,getCenter:dt,getExtent:qt,getRadius:_,intersectLine:xt,intersectRay:q,intersectRayClosestSilhouette:yt,intersectsRay:bt,projectPoint:R,setAltitudeAt:Rt,setExtent:wt,tmpSphere:Ot,union:At,wrap:mt},Symbol.toStringTag,{value:"Module"}));export{mt as $,ot as B,k as C,pt as D,xt as H,ft as N,bt as Q,E as S,lt as U,Zt as Z,w as _,_ as a,Qt as l,Vt as m,Yt as p,jt as t,R as x,dt as z};
