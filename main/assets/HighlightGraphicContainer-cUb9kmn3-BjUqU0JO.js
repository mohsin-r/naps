import{c as i,j as a,lL as s,nz as h,ny as n}from"./main-B2UX4EBG.js";import{Z as l}from"./AGraphicContainer-aPpZ1eAs-B8YkQXBp.js";let t=class extends l{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===s.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,n.All)},0))}};t=i([a("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const c=t;export{c as d};
