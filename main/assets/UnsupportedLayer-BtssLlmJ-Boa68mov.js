import{$ as p,z as d,u1 as l,c as r,d as i,j as a,M as u,q as y}from"./main-B2UX4EBG.js";let s=class extends p(d(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";t&&(n+=" "+t),o(new y("layer:unsupported-layer-type",n,{layerType:t}))})}))}read(e,o){const t={resourceInfo:e};e.id!=null&&(t.id=e.id),e.title!=null&&(t.title=e.title),super.read(t,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],s.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:Boolean,readOnly:!1})],s.prototype,"persistenceEnabled",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],s.prototype,"type",void 0),s=r([a("esri.layers.UnsupportedLayer")],s);const h=s;export{h as default};