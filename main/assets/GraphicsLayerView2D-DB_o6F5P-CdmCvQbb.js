import{bR as o,jO as g,c_ as l,cj as c,T as a,c as p,d as m,j as n}from"./main-KOPTRisL.js";import{X as d,Y as u}from"./LayerView-DONYuvqR-gxDMyQRD.js";import{d as w}from"./GraphicContainer-DPQzFmqj-BiukMzDn.js";import{X as y}from"./GraphicsView2D-DGP_h330-BXd8oY33.js";import{i as V}from"./HighlightCounter-DFWq7PnG-L3ompOf4.js";import"./Container-C-rqKhNk-CouSlmMq.js";import"./layerViewUtils-DyE3oc1e-BU1h8i7_.js";import"./AGraphicContainer-aPpZ1eAs-Be1xKMgA.js";import"./TechniqueInstance-DBGJNG3B-BdTd6xiY.js";import"./UpdateTracking2D-swFQJIjy-DvQzg-GI.js";import"./BidiEngine-Bdqv5H5j-Dyqh9XG-.js";import"./GeometryUtils-v59R1Z6F-BMP_zx_0.js";import"./Rect-DD6XS68q-D_hsV3ag.js";import"./LabelMetric-DpMX58iW-DbfvyNQz.js";import"./Program-1XjJitsM-D9K1ghsV.js";import"./BufferObject-DqJSjWFs-CVqCTSQV.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./Util-cAlFLh9R-DYwjM448.js";import"./TileContainer-C5yGwaDr-jjaTiFbr.js";import"./WGLContainer-whJgsi2t-DfLazV89.js";import"./VertexArrayObject-C4kjI814-QZJO5avm.js";import"./ProgramTemplate-B_NcbdFz-D9bH-cw0.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./StyleDefinition-CovmM7Ch-CPliDlDk.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./FeatureCommandQueue-F8dH-mVd-CzRUMMtd.js";import"./constants-Bqe1QJ4u-F8oTIn7N.js";import"./AttributeStore-BysBgiw_-CRloIDC4.js";import"./TimeOnly-BR6daUyu-tYTZNTIq.js";import"./timeSupport-sB9XTwIv-IwmgC9Bx.js";import"./normalizeUtilsSync-BGR0Mvo7-C-RLOq30.js";let s=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let e;typeof i=="number"?e=[i]:i instanceof g?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):l.isCollection(i)&&i.length>0&&(e=i.map(r=>r&&r.uid).toArray());const h=e?.filter(c);return h?.length?(this._addHighlight(h,t),a(()=>this._removeHighlight(h,t))):a()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(t),h=this._getHighlightBits(e);i.push({objectId:t,highlightFlags:h})}this.graphicsView?.setHighlight(i)}};p([m()],s.prototype,"graphicsView",void 0),s=p([n("esri.views.2d.layers.GraphicsLayerView2D")],s);const W=s;export{W as default};