import{jO as m,c_ as f,cj as w,T as c,aU as a,iB as o,kA as y,c as _,j as V}from"./main-B2UX4EBG.js";import{X as v,Y as C}from"./LayerView-DONYuvqR-Bj_Al8HE.js";import{d as g}from"./GraphicContainer-DPQzFmqj-B8vOUWfl.js";import{X as d}from"./GraphicsView2D-DGP_h330-DjEcMux9.js";import"./Container-C-rqKhNk-D3F_mCcp.js";import"./layerViewUtils-DyE3oc1e-DiM-8zsX.js";import"./AGraphicContainer-aPpZ1eAs-B8YkQXBp.js";import"./TechniqueInstance-DBGJNG3B--MCSn0Jq.js";import"./UpdateTracking2D-swFQJIjy-BaZsakTc.js";import"./BidiEngine-Bdqv5H5j-Dyqh9XG-.js";import"./GeometryUtils-v59R1Z6F-CoVPVF-X.js";import"./Rect-DD6XS68q-D_hsV3ag.js";import"./LabelMetric-DpMX58iW-B-5yyl82.js";import"./Program-1XjJitsM-DNupFgb6.js";import"./BufferObject-DqJSjWFs-COKIJclw.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./Util-cAlFLh9R-oIQpZgxD.js";import"./TileContainer-C5yGwaDr-DZnmgKcC.js";import"./WGLContainer-whJgsi2t-isUvgAB7.js";import"./VertexArrayObject-C4kjI814-miywJgST.js";import"./ProgramTemplate-B_NcbdFz-CA7X3kS9.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./StyleDefinition-CovmM7Ch-ue8tg4hO.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./FeatureCommandQueue-F8dH-mVd-CSvl61tD.js";import"./constants-Bqe1QJ4u-F8oTIn7N.js";import"./AttributeStore-BysBgiw_-LpWqk63G.js";import"./TimeOnly-BR6daUyu-BIYLNjHv.js";import"./timeSupport-sB9XTwIv-tcVoK5A5.js";import"./normalizeUtilsSync-BGR0Mvo7-DNr_2MBi.js";const u="sublayers",n="layerView",H=new Set(["default"]);let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof m?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t?.filter(w);return e?.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u)}detach(){this._destroyGraphicsViews(),this.removeHandles(u)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const ei=l;export{ei as default};