const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./libtess-asm-Bj2RQ7AT-hkPIOo-n.js","./main-C9wvg2yZ.js","./main-HZDgF7N9.css","./libtess-C_fgCuzY-BdiOrWgM.js"])))=>i.map(i=>d[i]);
import{gq as bt,gr as S,gs as L,ak as Rt,b as wt,c8 as pt}from"./main-C9wvg2yZ.js";const kt=128e3;let dt=null,mt=null;async function Lt(){return dt||(dt=Ut()),dt}async function Ut(){mt=await(Rt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-Bj2RQ7AT-hkPIOo-n.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(x=>x.l):await wt(()=>import("./libtess-C_fgCuzY-BdiOrWgM.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(x=>x.l)).default({locateFile:x=>pt(`esri/core/libs/libtess/${x}`)})}function Ot(x,i){const n=Math.max(x.length,kt);return mt.triangulate(x,i,n)}function Vt(x,i){return x.x===i.x&&x.y===i.y}function Mt(x){if(!x)return;const i=x.length;if(i<=1)return;let n=0;for(let v=1;v<i;v++)Vt(x[v],x[n])||++n===v||(x[n]=x[v]);x.length=n+1}function M(x,i){return x.x=i.y,x.y=-i.x,x}function R(x,i){return x.x=-i.y,x.y=i.x,x}function Tt(x,i){return x.x=i.x,x.y=i.y,x}function vt(x,i){return x.x=-i.x,x.y=-i.y,x}function ft(x){return Math.sqrt(x.x*x.x+x.y*x.y)}function Dt(x,i){return x.x*i.y-x.y*i.x}function gt(x,i){return x.x*i.x+x.y*i.y}function et(x,i,n,v){return x.x=i.x*n+i.y*v,x.y=i.x*v-i.y*n,x}class At{constructor(i,n,v){this._writeVertex=i,this._writeTriangle=n,this._canUseThinTessellation=v,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,n,v=this._canUseThinTessellation){Mt(i),v&&n.halfWidth<bt&&!n.offset?this._tessellateThin(i,n):this._tessellate(i,n)}_tessellateThin(i,n){if(i.length<2)return;const v=n.wrapDistance||65535;let E=n.initialDistance||0,q=!1,$=i[0].x,C=i[0].y;const D=i.length;for(let W=1;W<D;++W){q&&(q=!1,E=0);let j=i[W].x,Q=i[W].y,b=j-$,f=Q-C,T=Math.sqrt(b*b+f*f);if(b/=T,f/=T,E+T>v){q=!0;const t=(v-E)/T;T=v-E,j=(1-t)*$+t*j,Q=(1-t)*C+t*Q,--W}const o=this._writeVertex($,C,0,0,b,f,f,-b,0,-1,E),y=this._writeVertex($,C,0,0,b,f,-f,b,0,1,E);E+=T;const z=this._writeVertex(j,Q,0,0,b,f,f,-b,0,-1,E),e=this._writeVertex(j,Q,0,0,b,f,-f,b,0,1,E);this._writeTriangle(o,y,z),this._writeTriangle(y,z,e),$=j,C=Q}}_tessellate(i,n){const v=i[0],E=i[i.length-1],q=Vt(v,E),$=q?3:2;if(i.length<$)return;const C=n.pixelCoordRatio,D=n.capType!=null?n.capType:S.BUTT,W=n.joinType!=null?n.joinType:L.MITER,j=n.miterLimit!=null?Math.min(n.miterLimit,4):2,Q=n.roundLimit!=null?Math.min(n.roundLimit,1.05):1.05,b=n.halfWidth!=null?n.halfWidth:2,f=!!n.textured;let T,o,y,z=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,X=-1;const s=this._joinNormal;let _,c;const nt=this._textureNormalLeft,rt=this._textureNormalRight,w=this._textureNormal;let u=-1,l=-1;const _t=n.wrapDistance||65535;let h=n.initialDistance||0;const Nt=this._writeVertex,Et=this._writeTriangle,d=(p,st,G,m,B,O)=>{const A=Nt(o,y,_,c,G,m,p,st,B,O,h);return u>=0&&l>=0&&A>=0&&Et(u,l,A),u=l,l=A,A};q&&(T=i[i.length-2],t.x=E.x-T.x,t.y=E.y-T.y,X=ft(t),t.x/=X,t.y/=X);let Y=!1;for(let p=0;p<i.length;++p){if(Y&&(Y=!1,h=0),T&&(e.x=-t.x,e.y=-t.y,K=X,h+K>_t&&(Y=!0)),Y){const r=(_t-h)/K;K=_t-h,T={x:(1-r)*T.x+r*i[p].x,y:(1-r)*T.y+r*i[p].y},--p}else T=i[p];o=T.x,y=T.y;const st=p<=0&&!Y,G=p===i.length-1;if(st||(h+=K),z=G?q?i[1]:null:i[p+1],z?(t.x=z.x-o,t.y=z.y-y,X=ft(t),t.x/=X,t.y/=X):(t.x=void 0,t.y=void 0),!q){if(st){R(s,t),_=s.x,c=s.y,D===S.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),D===S.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),D!==S.ROUND&&D!==S.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(G){M(s,e),_=s.x,c=s.y,D!==S.ROUND&&D!==S.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),D===S.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),D===S.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let m,B,O=-Dt(e,t);if(Math.abs(O)<.01)gt(e,t)>0?(s.x=e.x,s.y=e.y,O=1,m=Number.MAX_VALUE,B=!0):(R(s,t),O=1,m=1,B=!1);else{s.x=(e.x+t.x)/O,s.y=(e.y+t.y)/O,m=ft(s);const r=(m-1)*b*C;B=m>4||r>K&&r>X}_=s.x,c=s.y;let A=W;switch(W){case L.BEVEL:m<1.05&&(A=L.MITER);break;case L.ROUND:m<Q&&(A=L.MITER);break;case L.MITER:m>j&&(A=L.BEVEL)}switch(A){case L.MITER:if(d(s.x,s.y,-e.x,-e.y,0,-1),d(-s.x,-s.y,-e.x,-e.y,0,1),G)break;if(f){const r=Y?0:h;u=this._writeVertex(o,y,_,c,t.x,t.y,s.x,s.y,0,-1,r),l=this._writeVertex(o,y,_,c,t.x,t.y,-s.x,-s.y,0,1,r)}break;case L.BEVEL:{const r=O<0;let g,V,F,k;if(r){const a=u;u=l,l=a,g=nt,V=rt}else g=rt,V=nt;if(B)F=r?R(this._innerPrev,e):M(this._innerPrev,e),k=r?M(this._innerNext,t):R(this._innerNext,t);else{const a=r?vt(this._inner,s):Tt(this._inner,s);F=a,k=a}const U=r?M(this._bevelStart,e):R(this._bevelStart,e);d(F.x,F.y,-e.x,-e.y,g.x,g.y);const yt=d(U.x,U.y,-e.x,-e.y,V.x,V.y);if(G)break;const I=r?R(this._bevelEnd,t):M(this._bevelEnd,t);if(B){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);u=this._writeVertex(o,y,_,c,t.x,t.y,k.x,k.y,g.x,g.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h),this._writeTriangle(yt,a,l)}else{if(f){const a=this._bevelMiddle;a.x=(U.x+I.x)/2,a.y=(U.y+I.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,k.x,k.y,g.x,g.y,h)}else{const a=u;u=l,l=a}d(I.x,I.y,t.x,t.y,V.x,V.y)}if(r){const a=u;u=l,l=a}break}case L.ROUND:{const r=O<0;let g,V;if(r){const N=u;u=l,l=N,g=nt,V=rt}else g=rt,V=nt;const F=r?vt(this._inner,s):Tt(this._inner,s);let k,U;B?(k=r?R(this._innerPrev,e):M(this._innerPrev,e),U=r?M(this._innerNext,t):R(this._innerNext,t)):(k=F,U=F);const yt=r?M(this._roundStart,e):R(this._roundStart,e),I=r?R(this._roundEnd,t):M(this._roundEnd,t),a=d(k.x,k.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if(G)break;const H=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);B||this._writeTriangle(u,l,H);const P=vt(this._outer,F),J=this._writeVertex(o,y,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h);let Z,tt;const lt=m>2;if(lt){let N;m!==Number.MAX_VALUE?(P.x/=m,P.y/=m,N=gt(e,P),N=(m*(N*N-1)+1)/N):N=-1,Z=r?M(this._startBreak,e):R(this._startBreak,e),Z.x+=e.x*N,Z.y+=e.y*N,tt=r?R(this._endBreak,t):M(this._endBreak,t),tt.x+=t.x*N,tt.y+=t.y*N}et(w,P,-e.x,-e.y);const ht=this._writeVertex(o,y,_,c,-e.x,-e.y,P.x,P.y,w.x,w.y,h);et(w,P,t.x,t.y);const ct=f?this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,w.x,w.y,h):ht,ut=H,at=f?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,h):H;let it=-1,xt=-1;if(lt&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,h),et(w,tt,t.x,t.y),xt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,h)),f?lt?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,ht),this._writeTriangle(at,ct,xt),this._writeTriangle(at,xt,J)):(this._writeTriangle(ut,ot,ht),this._writeTriangle(at,ct,J)):lt?(this._writeTriangle(H,ot,it),this._writeTriangle(H,it,xt),this._writeTriangle(H,xt,J)):(this._writeTriangle(H,ot,ht),this._writeTriangle(H,ct,J)),B?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,h),l=J):(u=f?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,h):a,this._writeTriangle(u,at,J),l=J),r){const N=u;u=l,l=N}break}}}}}export{At as D,Lt as R,Ot as k};