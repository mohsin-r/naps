import{r_ as n,e9 as r,kU as l,cj as o,c as s,d as i,j as p,Z as c}from"./main-C9wvg2yZ.js";let d=0,e=class extends n(r(l(c))){constructor(a){super(a),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(a){const t=this.parent;if(t!=null)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",a)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};s([i({type:String,constructOnly:!0,clonable:!1})],e.prototype,"id",void 0),s([i({type:String})],e.prototype,"title",void 0),s([i({clonable:!1,value:null})],e.prototype,"parent",null),s([i({readOnly:!0})],e.prototype,"isEditable",null),e=s([p("esri.analysis.Analysis")],e);const u=e;export{u as d};