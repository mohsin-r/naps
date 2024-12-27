function A(t,r,n){n=n||2;var x,e,i,v,u,f,p,c=r&&r.length,a=c?r[0]*n:t.length,h=C(t,0,a,n,!0),o=[];if(!h||h.next===h.prev)return o;if(c&&(h=J(t,r,h,n)),t.length>80*n){x=i=t[0],e=v=t[1];for(var y=n;y<a;y+=n)(u=t[y])<x&&(x=u),(f=t[y+1])<e&&(e=f),u>i&&(i=u),f>v&&(v=f);p=(p=Math.max(i-x,v-e))!==0?1/p:0}return g(h,o,n,x,e,p),o}function C(t,r,n,x,e){var i,v;if(e===q(t,r,n,x)>0)for(i=r;i<n;i+=x)v=B(i,t[i],t[i+1],v);else for(i=n-x;i>=r;i-=x)v=B(i,t[i],t[i+1],v);if(v&&b(v,v.next)){var u=v.next;w(v),v=u}return v}function s(t,r){if(!t)return t;r||(r=t);var n,x=t;do if(n=!1,x.steiner||!b(x,x.next)&&l(x.prev,x,x.next)!==0)x=x.next;else{var e=x.prev;if(w(x),(x=r=e)===x.next)break;n=!0}while(n||x!==r);return r}function g(t,r,n,x,e,i,v){if(t){!v&&i&&P(t,x,e,i);for(var u,f,p=t;t.prev!==t.next;)if(u=t.prev,f=t.next,i?G(t,x,e,i):F(t))r.push(u.i/n),r.push(t.i/n),r.push(f.i/n),w(t),t=f.next,p=f.next;else if((t=f)===p){v?v===1?g(t=H(s(t),r,n),r,n,x,e,i,2):v===2&&I(t,r,n,x,e,i):g(s(t),r,n,x,e,i,1);break}}}function F(t){var r=t.prev,n=t,x=t.next;if(l(r,n,x)>=0)return!1;for(var e=t.next.next;e!==t.prev;){if(Z(r.x,r.y,n.x,n.y,x.x,x.y,e.x,e.y)&&l(e.prev,e,e.next)>=0)return!1;e=e.next}return!0}function G(t,r,n,x){var e=t.prev,i=t,v=t.next;if(l(e,i,v)>=0)return!1;for(var u=e.x<i.x?e.x<v.x?e.x:v.x:i.x<v.x?i.x:v.x,f=e.y<i.y?e.y<v.y?e.y:v.y:i.y<v.y?i.y:v.y,p=e.x>i.x?e.x>v.x?e.x:v.x:i.x>v.x?i.x:v.x,c=e.y>i.y?e.y>v.y?e.y:v.y:i.y>v.y?i.y:v.y,a=k(u,f,r,n,x),h=k(p,c,r,n,x),o=t.prevZ,y=t.nextZ;o&&o.z>=a&&y&&y.z<=h;){if(o!==t.prev&&o!==t.next&&Z(e.x,e.y,i.x,i.y,v.x,v.y,o.x,o.y)&&l(o.prev,o,o.next)>=0||(o=o.prevZ,y!==t.prev&&y!==t.next&&Z(e.x,e.y,i.x,i.y,v.x,v.y,y.x,y.y)&&l(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;o&&o.z>=a;){if(o!==t.prev&&o!==t.next&&Z(e.x,e.y,i.x,i.y,v.x,v.y,o.x,o.y)&&l(o.prev,o,o.next)>=0)return!1;o=o.prevZ}for(;y&&y.z<=h;){if(y!==t.prev&&y!==t.next&&Z(e.x,e.y,i.x,i.y,v.x,v.y,y.x,y.y)&&l(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function H(t,r,n){var x=t;do{var e=x.prev,i=x.next.next;!b(e,i)&&D(e,x,x.next,i)&&d(e,i)&&d(i,e)&&(r.push(e.i/n),r.push(x.i/n),r.push(i.i/n),w(x),w(x.next),x=t=i),x=x.next}while(x!==t);return s(x)}function I(t,r,n,x,e,i){var v=t;do{for(var u=v.next.next;u!==v.prev;){if(v.i!==u.i&&S(v,u)){var f=E(v,u);return v=s(v,v.next),f=s(f,f.next),g(v,r,n,x,e,i),void g(f,r,n,x,e,i)}u=u.next}v=v.next}while(v!==t)}function J(t,r,n,x){var e,i,v,u=[];for(e=0,i=r.length;e<i;e++)(v=C(t,r[e]*x,e<i-1?r[e+1]*x:t.length,x,!1))===v.next&&(v.steiner=!0),u.push(R(v));for(u.sort(K),e=0;e<u.length;e++)n=s(n=L(u[e],n),n.next);return n}function K(t,r){return t.x-r.x}function m(t){if(t.next.prev===t)return t;let r=t;for(;;){const n=r.next;if(n.prev===r||n===r||n===t)break;r=n}return r}function L(t,r){var n=N(t,r);if(!n)return r;var x=E(n,t),e=s(n,n.next);let i=m(x);return s(i,i.next),e=m(e),m(r===n?e:r)}function N(t,r){var n,x=r,e=t.x,i=t.y,v=-1/0;do{if(i<=x.y&&i>=x.next.y&&x.next.y!==x.y){var u=x.x+(i-x.y)*(x.next.x-x.x)/(x.next.y-x.y);if(u<=e&&u>v){if(v=u,u===e){if(i===x.y)return x;if(i===x.next.y)return x.next}n=x.x<x.next.x?x:x.next}}x=x.next}while(x!==r);if(!n)return null;if(e===v)return n;var f,p=n,c=n.x,a=n.y,h=1/0;x=n;do e>=x.x&&x.x>=c&&e!==x.x&&Z(i<a?e:v,i,c,a,i<a?v:e,i,x.x,x.y)&&(f=Math.abs(i-x.y)/(e-x.x),d(x,t)&&(f<h||f===h&&(x.x>n.x||x.x===n.x&&O(n,x)))&&(n=x,h=f)),x=x.next;while(x!==p);return n}function O(t,r){return l(t.prev,t,r.prev)<0&&l(r.next,t,t.next)<0}function P(t,r,n,x){var e=t;do e.z===null&&(e.z=k(e.x,e.y,r,n,x)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,Q(e)}function Q(t){var r,n,x,e,i,v,u,f,p=1;do{for(n=t,t=null,i=null,v=0;n;){for(v++,x=n,u=0,r=0;r<p&&(u++,x=x.nextZ);r++);for(f=p;u>0||f>0&&x;)u!==0&&(f===0||!x||n.z<=x.z)?(e=n,n=n.nextZ,u--):(e=x,x=x.nextZ,f--),i?i.nextZ=e:t=e,e.prevZ=i,i=e;n=x}i.nextZ=null,p*=2}while(v>1);return t}function k(t,r,n,x,e){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*e)|t<<8))|t<<4))|t<<2))|t<<1))|(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-x)*e)|r<<8))|r<<4))|r<<2))|r<<1))<<1}function R(t){var r=t,n=t;do(r.x<n.x||r.x===n.x&&r.y<n.y)&&(n=r),r=r.next;while(r!==t);return n}function Z(t,r,n,x,e,i,v,u){return(e-v)*(r-u)-(t-v)*(i-u)>=0&&(t-v)*(x-u)-(n-v)*(r-u)>=0&&(n-v)*(i-u)-(e-v)*(x-u)>=0}function S(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!T(t,r)&&(d(t,r)&&d(r,t)&&U(t,r)&&(l(t.prev,t,r.prev)||l(t,r.prev,r))||b(t,r)&&l(t.prev,t,t.next)>0&&l(r.prev,r,r.next)>0)}function l(t,r,n){return(r.y-t.y)*(n.x-r.x)-(r.x-t.x)*(n.y-r.y)}function b(t,r){return t.x===r.x&&t.y===r.y}function D(t,r,n,x){var e=z(l(t,r,n)),i=z(l(t,r,x)),v=z(l(n,x,t)),u=z(l(n,x,r));return e!==i&&v!==u||!(e!==0||!M(t,n,r))||!(i!==0||!M(t,x,r))||!(v!==0||!M(n,t,x))||!(u!==0||!M(n,r,x))}function M(t,r,n){return r.x<=Math.max(t.x,n.x)&&r.x>=Math.min(t.x,n.x)&&r.y<=Math.max(t.y,n.y)&&r.y>=Math.min(t.y,n.y)}function z(t){return t>0?1:t<0?-1:0}function T(t,r){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==r.i&&n.next.i!==r.i&&D(n,n.next,t,r))return!0;n=n.next}while(n!==t);return!1}function d(t,r){return l(t.prev,t,t.next)<0?l(t,r,t.next)>=0&&l(t,t.prev,r)>=0:l(t,r,t.prev)<0||l(t,t.next,r)<0}function U(t,r){var n=t,x=!1,e=(t.x+r.x)/2,i=(t.y+r.y)/2;do n.y>i!=n.next.y>i&&n.next.y!==n.y&&e<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(x=!x),n=n.next;while(n!==t);return x}function E(t,r){var n=new j(t.i,t.x,t.y),x=new j(r.i,r.x,r.y),e=t.next,i=r.prev;return t.next=r,r.prev=t,n.next=e,e.prev=n,x.next=n,n.prev=x,i.next=x,x.prev=i,x}function B(t,r,n,x){var e=new j(t,r,n);return x?(e.next=x.next,e.prev=x,x.next.prev=e,x.next=e):(e.prev=e,e.next=e),e}function w(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function j(t,r,n){this.i=t,this.x=r,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q(t,r,n,x){for(var e=0,i=r,v=n-x;i<n;i+=x)e+=(t[v]-t[i])*(t[i+1]+t[v+1]),v=i;return e}A.deviation=function(t,r,n,x){var e=r&&r.length,i=e?r[0]*n:t.length,v=Math.abs(q(t,0,i,n));if(e)for(var u=0,f=r.length;u<f;u++){var p=r[u]*n,c=u<f-1?r[u+1]*n:t.length;v-=Math.abs(q(t,p,c,n))}var a=0;for(u=0;u<x.length;u+=3){var h=x[u]*n,o=x[u+1]*n,y=x[u+2]*n;a+=Math.abs((t[h]-t[y])*(t[o+1]-t[h+1])-(t[h]-t[o])*(t[y+1]-t[h+1]))}return v===0&&a===0?0:Math.abs((a-v)/v)},A.flatten=function(t){for(var r=t[0][0].length,n={vertices:[],holes:[],dimensions:r},x=0,e=0;e<t.length;e++){for(var i=0;i<t[e].length;i++)for(var v=0;v<r;v++)n.vertices.push(t[e][i][v]);e>0&&(x+=t[e-1].length,n.holes.push(x))}return n};export{A as m};