import{h5 as Jt,cH as Z,cl as V,h6 as lt,h7 as Ct,h8 as Lt,h9 as pt,ha as Kt,el as ta,cC as mt,hb as aa,hc as Ft,ck as xt,hd as Rt,cB as d,he as sa,hf as Wt,hg as ia,hh as na,hi as nt,hj as ea,f8 as ra,g_ as It,hk as ha,hl as oa,hm as Qt,cF as gt,hn as ca,ho as da,hp as vt}from"./main-C9wvg2yZ.js";import{n as ua,o as fa}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{t as la}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{z as ma,L as K,y as _a}from"./quat-Xt9oEsiT-Q7pdCfnn.js";import{n as Ot,e as zt}from"./quatf64-C16JxGFv-BKWK1F8U.js";import{d as _t}from"./spatialReferenceEllipsoidUtils-a1l2O8Wm-DgBMXhOd.js";import{G as ga}from"./computeTranslationToOriginAndRotation-DlPeD1c9-B0j47Z_C.js";import{f as Ht,o as ba,N as yt}from"./plane-B2J4G_40-ODTmHfiE.js";class wt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Ua extends wt{constructor(t,a,s,e=!1,n=s){super(t,s,n),this.indices=a,this.exclusive=e}}const et=1e-6,rt=d(),bt=d();function Ma(i,t){const{data:a,size:s}=i,e=a.length/s;if(e<=0)return;const n=new Na(i);Nt(rt,n.minProj,n.maxProj),ut(rt,rt,.5),w(bt,n.maxProj,n.minProj);const o=qt(bt),r=new Va;r.quality=o,e<14&&(i=new wt(new Float64Array(n.buffer,112,42),3));const h=d(),u=d(),b=d(),m=d(),I=d(),C=d(),M=d();switch(Pa(n,i,M,h,u,b,m,I,C,r)){case 1:return void Gt(rt,bt,t);case 2:return void pa(i,m,t)}ja(i,M,h,u,b,m,I,C,r),Xt(i,r.b0,r.b1,r.b2,at,st);const Y=d();w(Y,st,at),r.quality=qt(Y),r.quality<o?Dt(r.b0,r.b1,r.b2,at,st,Y,t):Gt(rt,bt,t)}function Pa(i,t,a,s,e,n,o,r,h,u){return xa(i,s,e),Vt(s,e)<et?1:(w(o,s,e),g(o,o),za(t,s,o,n)<et?2:(w(r,e,n),g(r,r),w(h,n,s),g(h,h),A(a,r,o),g(a,a),D(t,a,o,r,h,u),0))}const ht=d(),ot=d(),y=d(),p=d(),q=d(),B=d(),R=d(),W=d();function ja(i,t,a,s,e,n,o,r,h){Sa(i,t,a,ht,ot),ht[0]!==void 0&&(w(y,ht,a),g(y,y),w(p,ht,s),g(p,p),w(q,ht,e),g(q,q),A(B,p,n),g(B,B),A(R,q,o),g(R,R),A(W,y,r),g(W,W),D(i,B,n,p,y,h),D(i,R,o,q,p,h),D(i,W,r,y,q,h)),ot[0]!==void 0&&(w(y,ot,a),g(y,y),w(p,ot,s),g(p,p),w(q,ot,e),g(q,q),A(B,p,n),g(B,B),A(R,q,o),g(R,R),A(W,y,r),g(W,W),D(i,B,n,p,y,h),D(i,R,o,q,p,h),D(i,W,r,y,q,h))}function xa(i,t,a){let s=Vt(i.maxVert[0],i.minVert[0]),e=0;for(let n=1;n<7;++n){const o=Vt(i.maxVert[n],i.minVert[n]);o>s&&(s=o,e=n)}S(t,i.minVert[e]),S(a,i.maxVert[e])}const N=[0,0,0];function za(i,t,a,s){const{data:e,size:n}=i;let o=Number.NEGATIVE_INFINITY,r=0;for(let h=0;h<e.length;h+=n){N[0]=e[h]-t[0],N[1]=e[h+1]-t[1],N[2]=e[h+2]-t[2];const u=a[0]*N[0]+a[1]*N[1]+a[2]*N[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=N[0]*N[0]+N[1]*N[1]+N[2]*N[2]-u*u/b;m>o&&(o=m,r=h)}return S(s,e,r),o}const _=ra();function Sa(i,t,a,s,e){ya(i,t,_,e,s);const n=Ut(a,t);_[1]-et<=n&&(s[0]=void 0),_[0]+et>=n&&(e[0]=void 0)}const Tt=d(),Yt=d(),Et=d(),U=d(),k=d(),Mt=d();function D(i,t,a,s,e,n){if(Zt(t)<et)return;A(Tt,a,t),A(Yt,s,t),A(Et,e,t),tt(i,t,_),k[1]=_[0],U[1]=_[1],Mt[1]=U[1]-k[1];const o=[a,s,e],r=[Tt,Yt,Et];for(let h=0;h<3;++h){tt(i,o[h],_),k[0]=_[0],U[0]=_[1],tt(i,r[h],_),k[2]=_[0],U[2]=_[1],Mt[0]=U[0]-k[0],Mt[2]=U[2]-k[2];const u=qt(Mt);u<n.quality&&(S(n.b0,o[h]),S(n.b1,t),S(n.b2,r[h]),n.quality=u)}}const Ia=d();function tt(i,t,a){const{data:s,size:e}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let n=0;n<s.length;n+=e){const o=s[n]*t[0]+s[n+1]*t[1]+s[n+2]*t[2];a[0]=Math.min(a[0],o),a[1]=Math.max(a[1],o)}}function ya(i,t,a,s,e){const{data:n,size:o}=i;S(s,n),S(e,s),a[0]=Ut(Ia,t),a[1]=a[0];for(let r=o;r<n.length;r+=o){const h=n[r]*t[0]+n[r+1]*t[1]+n[r+2]*t[2];h<a[0]&&(a[0]=h,S(s,n,r)),h>a[1]&&(a[1]=h,S(e,n,r))}}function Gt(i,t,a){a.center=i,a.halfSize=nt(t,t,.5),a.quaternion=Ot}const E=d(),J=d(),ct=d(),at=d(),st=d(),$t=d();function pa(i,t,a){S(E,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?E[0]=0:Math.abs(t[1])>Math.abs(t[2])?E[1]=0:E[2]=0,Zt(E)<et&&(E[0]=E[1]=E[2]=1),A(J,t,E),g(J,J),A(ct,t,J),g(ct,ct),Xt(i,t,J,ct,at,st),w($t,st,at),Dt(t,J,ct,at,st,$t,a)}function Xt(i,t,a,s,e,n){tt(i,t,_),e[0]=_[0],n[0]=_[1],tt(i,a,_),e[1]=_[0],n[1]=_[1],tt(i,s,_),e[2]=_[0],n[2]=_[1]}const O=d(),dt=d(),Pt=d(),H=fa(1,0,0,0,1,0,0,0,1),qa=zt();function Dt(i,t,a,s,e,n,o){H[0]=i[0],H[1]=i[1],H[2]=i[2],H[3]=t[0],H[4]=t[1],H[5]=t[2],H[6]=a[0],H[7]=a[1],H[8]=a[2],o.quaternion=wa(qa,H),Nt(O,s,e),ut(O,O,.5),ut(dt,i,O[0]),ut(Pt,t,O[1]),Nt(dt,dt,Pt),ut(Pt,a,O[2]),o.center=mt(dt,dt,Pt),o.halfSize=nt(O,n,.5)}const j=7;let Na=class{constructor(i){this.minVert=new Array(j),this.maxVert=new Array(j);const t=64*j;this.buffer=new ArrayBuffer(t);let a=0;this.minProj=new Float64Array(this.buffer,a,j),a+=8*j,this.maxProj=new Float64Array(this.buffer,a,j),a+=8*j;for(let r=0;r<j;++r)this.minVert[r]=new Float64Array(this.buffer,a,3),a+=24;for(let r=0;r<j;++r)this.maxVert[r]=new Float64Array(this.buffer,a,3),a+=24;for(let r=0;r<j;++r)this.minProj[r]=Number.POSITIVE_INFINITY,this.maxProj[r]=Number.NEGATIVE_INFINITY;const s=new Array(j),e=new Array(j),{data:n,size:o}=i;for(let r=0;r<n.length;r+=o){let h=n[r];h<this.minProj[0]&&(this.minProj[0]=h,s[0]=r),h>this.maxProj[0]&&(this.maxProj[0]=h,e[0]=r),h=n[r+1],h<this.minProj[1]&&(this.minProj[1]=h,s[1]=r),h>this.maxProj[1]&&(this.maxProj[1]=h,e[1]=r),h=n[r+2],h<this.minProj[2]&&(this.minProj[2]=h,s[2]=r),h>this.maxProj[2]&&(this.maxProj[2]=h,e[2]=r),h=n[r]+n[r+1]+n[r+2],h<this.minProj[3]&&(this.minProj[3]=h,s[3]=r),h>this.maxProj[3]&&(this.maxProj[3]=h,e[3]=r),h=n[r]+n[r+1]-n[r+2],h<this.minProj[4]&&(this.minProj[4]=h,s[4]=r),h>this.maxProj[4]&&(this.maxProj[4]=h,e[4]=r),h=n[r]-n[r+1]+n[r+2],h<this.minProj[5]&&(this.minProj[5]=h,s[5]=r),h>this.maxProj[5]&&(this.maxProj[5]=h,e[5]=r),h=n[r]-n[r+1]-n[r+2],h<this.minProj[6]&&(this.minProj[6]=h,s[6]=r),h>this.maxProj[6]&&(this.maxProj[6]=h,e[6]=r)}for(let r=0;r<j;++r){let h=s[r];S(this.minVert[r],n,h),h=e[r],S(this.maxVert[r],n,h)}}},Va=class{constructor(){this.b0=It(1,0,0),this.b1=It(0,1,0),this.b2=It(0,0,1),this.quality=0}};function qt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function Nt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function w(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function ut(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function S(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function A(i,t,a){const s=t[0],e=t[1],n=t[2],o=a[0],r=a[1],h=a[2];i[0]=e*h-n*r,i[1]=n*o-s*h,i[2]=s*r-e*o}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Zt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function Vt(i,t){const a=t[0]-i[0],s=t[1]-i[1],e=t[2]-i[2];return a*a+s*s+e*e}function Ut(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function wa(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const e=(s+1)%3,n=(s+2)%3;let o=Math.sqrt(t[3*s+s]-t[3*e+e]-t[3*n+n]+1);i[s]=.5*o,o=.5/o,i[3]=(t[3*e+n]-t[3*n+e])*o,i[e]=(t[3*e+s]+t[3*s+e])*o,i[n]=(t[3*n+s]+t[3*s+n])*o}return i}class ft{constructor(t=Jt,a=Ga,s=Ot){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return Z(Ht.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return Z(Ht.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return ma(ba.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let e=0;e<8;++e){const n=t[e];n[0]=(1&e?-1:1)*s[3],n[1]=(2&e?-1:1)*s[4],n[2]=(4&e?-1:1)*s[5],V(n,n,a),n[0]+=s[0],n[1]+=s[1],n[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){c[0]=this._data[0]-t[0],c[1]=this._data[1]-t[1],c[2]=this._data[2]-t[2];const a=this.getQuaternion($);return K(l,a),V(c,c,l),lt(c,c),G[0]=Math.min(c[0],this._data[3]),G[1]=Math.min(c[1],this._data[4]),G[2]=Math.min(c[2],this._data[5]),Ct(G,c)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;c[0]=s[0]-t[0],c[1]=s[1]-t[1],c[2]=s[2]-t[2];const e=t[3],n=e+a;return!(Lt(c)>n*n)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],V(c,c,l),lt(c,c),G[0]=Math.min(c[0],s[3]),G[1]=Math.min(c[1],s[4]),G[2]=Math.min(c[2],s[5]),Ct(G,c)<e*e)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(yt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const e=this._data,n=l;n[0]=-e[6],n[1]=-e[7],n[2]=-e[8],n[3]=e[9],c[0]=t[0]-e[0],c[1]=t[1]-e[1],c[2]=t[2]-e[2];const o=V(c,c,l),r=V(G,a,l);let h=-1/0,u=1/0;const b=this.getHalfSize(it);for(let m=0;m<3;m++){const I=o[m],C=r[m],M=b[m]+s;if(Math.abs(C)>1e-6){const Y=(M-I)/C,P=(-M-I)/C;h=Math.max(h,Math.min(Y,P)),u=Math.min(u,Math.max(Y,P))}else if(I>M||I<-M)return!1}return h<=u}projectedArea(t,a,s,e){const n=this.getQuaternion($);K(l,n),c[0]=t[0]-this._data[0],c[1]=t[1]-this._data[1],c[2]=t[2]-this._data[2],V(c,c,l);const o=this.getHalfSize(it),r=c[0]<-o[0]?-1:c[0]>o[0]?1:0,h=c[1]<-o[1]?-1:c[1]>o[1]?1:0,u=c[2]<-o[2]?-1:c[2]>o[2]?1:0,b=Math.abs(r)+Math.abs(h)+Math.abs(u);if(b===0)return 1/0;const m=b===1?4:6,I=6*(r+3*h+9*u+13);pt(L,n),Kt(L,L,o);const C=this.getCenter(v);for(let P=0;P<m;P++){const St=Fa[I+P];Z(c,((1&St)<<1)-1,(2&St)-1,((4&St)>>1)-1),ta(c,c,L),mt(X,C,c),X[3]=1,aa(X,X,a);const At=1/Math.max(1e-6,X[3]);F[2*P]=X[0]*At,F[2*P+1]=X[1]*At}const M=2*m-2;let Y=F[0]*(F[3]-F[M+1])+F[M]*(F[1]-F[M-1]);for(let P=2;P<M;P+=2)Y+=F[P]*(F[P+3]-F[P-1]);return Math.abs(Y)*s*e*.125}projectedRadius(t){const a=this.getQuaternion($);return K(l,a),V(c,t,l),Math.abs(c[0]*this._data[3])+Math.abs(c[1]*this._data[4])+Math.abs(c[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(yt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(yt(t))}toAaBoundingBox(t){const a=this.getQuaternion($),s=pt(L,a),e=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),n=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),o=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-e,t[1]=this._data[1]-n,t[2]=this._data[2]-o,t[3]=this._data[0]+e,t[4]=this._data[1]+n,t[5]=this._data[2]+o}transform(t,a,s,e=0,n=_t(s),o=_t(a),r=Rt(a,o)){if(s===n)a.isGeographic?Ta(this,t,a,e,o):Ha(this,t,a,e,o,r);else if(a.isWGS84&&(s.isWebMercator||Ft(s)))Qa(a,this,s,t,e);else if(a.isWebMercator&&Ft(s))va(a,this,s,t,e);else{const h=this.getCenter(v);h[2]+=e,xt(h,a,0,h,s,0),t.center=h,this!==t&&(t.quaternion=this.getQuaternion($),t.halfSize=this.getHalfSize(it))}}}const l=zt(),$=zt(),Aa=zt(),c=d(),G=d(),X=sa();function Ca(i,t=new ft){return Ma(i,t),t}const F=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Fa=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let e=0;e<s.length;e++)i[t+e]=s[e];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function ka(i,t,a,s,e){const n=i.getQuaternion($);e.quaternion=n,K(l,n);const o=i.getCenter(v),r=i.getHalfSize(it);if(s===ha.Global){V(f,o,l),lt(Q,f),oa(z,Q,r),Wt(z,Q,z);const h=Qt(z);mt(z,Q,r);const u=Qt(z);if(h<a)e.center=o,Z(f,a,a,a),e.halfSize=mt(f,r,f);else{const b=u>0?1+t/u:1,m=h>0?1+a/h:1,I=(m+b)/2,C=(m-b)/2;nt(z,Q,C),e.halfSize=gt(z,z,r,I),nt(z,Q,I),gt(z,z,r,C),ca(f,f),da(f,z,f);const M=i.getQuaternion(Aa);e.center=V(f,f,M)}}else{e.center=gt(f,o,vt,(a+t)/2);const h=V(f,vt,l);lt(h,h),e.halfSize=gt(Q,r,h,(a-t)/2)}return e}function Qa(i,t,a,s,e){t.getCenter(v),v[2]+=e;const n=_t(a);xt(v,i,0,v,n,0),kt(n,t,v,a,s)}function va(i,t,a,s,e){t.getCenter(v),v[2]+=e,kt(i,t,v,a,s)}function kt(i,t,a,s,e){const n=t.getQuaternion($),o=pt(L,n),r=t.getHalfSize(it);for(let h=0;h<8;++h){for(let u=0;u<3;++u)T[u]=r[u]*(h&1<<u?-1:1);for(let u=0;u<3;++u){let b=a[u];for(let m=0;m<3;++m)b+=T[m]*o[3*m+u];jt[3*h+u]=b}}xt(jt,i,0,jt,s,0,8),Ca(Ya,e)}function Ha(i,t,a,s,e=_t(a),n=Rt(a,e)){i.getCorners(Bt),i.getCenter(T),T[2]+=s,ga(a,T,x,e),t.setCenter(x[12],x[13],x[14]);const o=2*Math.sqrt(1+x[0]+x[5]+x[10]);l[0]=(x[6]-x[9])/o,l[1]=(x[8]-x[2])/o,l[2]=(x[1]-x[4])/o,l[3]=.25*o;const r=i.getQuaternion($);t.quaternion=_a(l,l,r),K(l,l),Z(Q,0,0,0);const h=t.getCenter(Ea);for(const u of Bt)u[2]+=s,n(u,0,u,0),Wt(f,u,h),V(f,f,l),lt(f,f),ia(Q,Q,f);t.halfSize=Q}function Ta(i,t,a,s,e=_t(a)){const n=na(a),o=1+Math.max(0,s)/(n.radius+i.centerZ);i.getCenter(T),T[2]+=s,xt(T,a,0,T,e,0),t.center=T;const r=i.getQuaternion($);t.quaternion=r,K(l,r),Z(f,0,0,1),V(f,f,l);const h=i.getHalfSize(it);Z(f,h[0]*Math.abs(f[0]),h[1]*Math.abs(f[1]),h[2]*Math.abs(f[2])),nt(f,f,n.inverseFlattening),mt(f,h,f),t.halfSize=nt(f,f,o)}const jt=new Array(24),Ya=new wt(jt,3),T=d(),v=d(),Ea=d(),it=d(),L=ua(),x=la(),Bt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),Q=d(),z=d(),Ga=ea(-1,-1,-1);export{Ua as M,ka as Q,ft as i};