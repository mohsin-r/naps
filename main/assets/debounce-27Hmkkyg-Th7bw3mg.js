var P=typeof global=="object"&&global&&global.Object===Object&&global;const U=P;var k=typeof self=="object"&&self&&self.Object===Object&&self,q=U||k||Function("return this")();const M=q;var z=M.Symbol;const y=z;var W=Object.prototype,B=W.hasOwnProperty,C=W.toString,b=y?y.toStringTag:void 0;function G(t){var n=B.call(t,b),o=t[b];try{t[b]=void 0;var i=!0}catch{}var a=C.call(t);return i&&(n?t[b]=o:delete t[b]),a}var H=Object.prototype,J=H.toString;function K(t){return J.call(t)}var L="[object Null]",Q="[object Undefined]",N=y?y.toStringTag:void 0;function R(t){return t==null?t===void 0?Q:L:N&&N in Object(t)?G(t):K(t)}function V(t){return t!=null&&typeof t=="object"}var X="[object Symbol]";function Y(t){return typeof t=="symbol"||V(t)&&R(t)==X}var Z=/\s/;function _(t){for(var n=t.length;n--&&Z.test(t.charAt(n)););return n}var tt=/^\s+/;function nt(t){return t&&t.slice(0,_(t)+1).replace(tt,"")}function O(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var $=NaN,et=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,ot=/^0o[0-7]+$/i,it=parseInt;function E(t){if(typeof t=="number")return t;if(Y(t))return $;if(O(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=O(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=nt(t);var o=rt.test(t);return o||ot.test(t)?it(t.slice(2),o?2:8):et.test(t)?$:+t}var ut=function(){return M.Date.now()};const h=ut;var at="Expected a function",ct=Math.max,ft=Math.min;function lt(t,n,o){var i,a,p,f,r,c,l=0,T=!1,v=!1,g=!0;if(typeof t!="function")throw new TypeError(at);n=E(n)||0,O(o)&&(T=!!o.leading,v="maxWait"in o,p=v?ct(E(o.maxWait)||0,n):p,g="trailing"in o?!!o.trailing:g);function m(e){var u=i,s=a;return i=a=void 0,l=e,f=t.apply(s,u),f}function A(e){return l=e,r=setTimeout(d,n),T?m(e):f}function D(e){var u=e-c,s=e-l,w=n-u;return v?ft(w,p-s):w}function x(e){var u=e-c,s=e-l;return c===void 0||u>=n||u<0||v&&s>=p}function d(){var e=h();if(x(e))return S(e);r=setTimeout(d,D(e))}function S(e){return r=void 0,g&&i?m(e):(i=a=void 0,f)}function F(){r!==void 0&&clearTimeout(r),l=0,i=c=a=r=void 0}function I(){return r===void 0?f:S(h())}function j(){var e=h(),u=x(e);if(i=arguments,a=this,c=e,u){if(r===void 0)return A(c);if(v)return clearTimeout(r),r=setTimeout(d,n),m(c)}return r===void 0&&(r=setTimeout(d,n)),f}return j.cancel=F,j.flush=I,j}export{U as $,V as A,Y as D,M as O,R as W,y as b,O as g,lt as l};