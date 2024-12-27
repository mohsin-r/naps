import{c as e,d as u,hq as c,j as v,s as A,Q as l,am as i}from"./main-B2UX4EBG.js";function m(t,o,n,g){const{loggerTag:a,stride:s}=o;return t.length%s!=0?(g.error(a,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function p(t,o,n,g,a){if(!t)return t;if(t instanceof o)return m(t,g,o,a);for(const s of n)if(t instanceof s)return m(new o(t),g,o,a);if(Array.isArray(t))return m(new o(t),g,o,a);{const s=n.map(d=>`'${d.name}'`);return a.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new o([])}}function h(t,o,n){o[n]=f(t)}function f(t){const o=new Array(t.length);for(let n=0;n<t.length;n++)o[n]=t[n];return o}var y;let r=y=class extends A{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return p(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&l.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),p(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l.getLogger(this))}castUv(t){return p(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l.getLogger(this))}castNormal(t){return p(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l.getLogger(this))}castTangent(t){return p(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l.getLogger(this))}clone(){const t={position:i(this.position),uv:i(this.uv),normal:i(this.normal),tangent:i(this.tangent),color:i(this.color)};return new y(t)}clonePositional(){const t={position:i(this.position),normal:i(this.normal),tangent:i(this.tangent),uv:this.uv,color:this.color};return new y(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,this.uv!=null&&(t+=this.uv.byteLength),this.normal!=null&&(t+=this.normal.byteLength),this.tangent!=null&&(t+=this.tangent.byteLength),this.color!=null&&(t+=this.color.byteLength),t}};e([u({json:{write:h}})],r.prototype,"color",void 0),e([c("color")],r.prototype,"castColor",null),e([u({nonNullable:!0,json:{write:h}})],r.prototype,"position",void 0),e([c("position")],r.prototype,"castPosition",null),e([u({json:{write:h}})],r.prototype,"uv",void 0),e([c("uv")],r.prototype,"castUv",null),e([u({json:{write:h}})],r.prototype,"normal",void 0),e([c("normal")],r.prototype,"castNormal",null),e([u({json:{write:h}})],r.prototype,"tangent",void 0),e([c("tangent")],r.prototype,"castTangent",null),r=y=e([v("esri.geometry.support.MeshVertexAttributes")],r);export{p as g,r as o,h as u};
