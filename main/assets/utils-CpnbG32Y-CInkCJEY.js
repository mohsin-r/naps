import{d8 as G,d9 as z,a3 as P,da as Y,db as O,dc as T,dd as V,de as j,aj as A,bK as D,df as K}from"./main-C9wvg2yZ.js";import{b as L}from"./utils-BszyTz9P-CIurmLb_.js";import{x as C,f as R}from"./utils-DN5yax8A-BZGj7TZO.js";let u=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function _(t,e,r){return t.x<0?t.x+=e:t.x>r&&(t.x-=e),t}function J(t,e,r,o){const n=G(r)?z(r):null,c=n?Math.round((n.valid[1]-n.valid[0])/e.scale[0]):null;return t.map(s=>{const i=new P(s.geometry);return Y(e,i,i),s.geometry=n?_(i,c??0,o[0]):i,s})}function Q(t,e=18,r,o,n){const c=new Float64Array(o*n);e=Math.round(D(e));let s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;const M=K(r);for(const{geometry:h,attributes:g}of t){const{x:b,y:m}=h,w=Math.max(0,b-e),$=Math.max(0,m-e),F=Math.min(n,m+e),y=Math.min(o,b+e),p=+M(g);for(let f=$;f<F;f++)for(let d=w;d<y;d++){const I=f*o+d,N=O(d-b,f-m,e)*p,l=c[I]+=N;s=Math.min(s,l),i=Math.max(i,l)}}return{min:s,max:i}}function k(t){const e=U.exec(t);if(!e)return null;const{hh:r,mm:o,ss:n,ms:c}=e.groups;return Number(r)*T.hours+Number(o)*T.minutes+Number(n)*T.seconds+Number(c||0)}async function S(t,e,r=!0){if(!e)return[];const{field:o,field2:n,field3:c,fieldDelimiter:s,fieldInfos:i,timeZone:M}=t,h=o&&i?.find(l=>l.name.toLowerCase()===o.toLowerCase()),g=!!h&&V(h),b=!!h&&L(h),m=t.valueExpression,w=t.normalizationType,$=t.normalizationField,F=t.normalizationTotal,y=[],p=t.viewInfoParams;let f=null,d=null;if(m){if(!u){const{arcadeUtils:l}=await j();u=l}u.hasGeometryOperations(m)&&await u.enableGeometryOperations(),f=u.createFunction(m),d=p?u.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new A(p.spatialReference)}):null}const I=t.fieldInfos,N=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&I?{fields:I}:null;return e.forEach(l=>{const x=l.attributes;let a;if(m){const v=N?{...l,layer:N}:l,E=u.createExecContext(v,d,M);a=u.executeFunction(f,E)}else x&&(a=x[o],n?(a=`${C(a)}${s}${C(x[n])}`,c&&(a=`${a}${s}${C(x[c])}`)):typeof a=="string"&&r&&(b?a=a?new Date(a).getTime():null:g&&(a=a?k(a):null)));if(w&&typeof a=="number"&&isFinite(a)){const v=x&&parseFloat(x[$]);a=R(a,w,v,F)}y.push(a)}),y}export{k as C,J as H,Q as J,S as K};