import{aE as o,Q as p,c as r,d as a,j as m}from"./main-C9wvg2yZ.js";import{d as n}from"./BitmapContainer-Cpw_vXaU-cCELG_VG.js";import{X as h,Y as d}from"./LayerView-DONYuvqR-ZiJmHcF4.js";import{V as c}from"./ExportStrategy-BZfM4Ojc-D7z_nfhg.js";import{c as g}from"./RefreshableLayerView-D30wcOhz-CxqURvNd.js";import"./WGLContainer-whJgsi2t-BF6_cD8T.js";import"./LabelMetric-DpMX58iW-D67UR9sr.js";import"./Program-1XjJitsM-B-Cy_0BT.js";import"./BufferObject-DqJSjWFs-ClcZpGmd.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./VertexArrayObject-C4kjI814-DFF5idN_.js";import"./ProgramTemplate-B_NcbdFz-nx7i8elE.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-C-rqKhNk-Y6XdmyFT.js";import"./StyleDefinition-CovmM7Ch-Df3rdxm5.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./layerViewUtils-DyE3oc1e-DmCp0z_P.js";import"./Bitmap-DixeSrEO-C7rxXkvm.js";let t=class extends g(h(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const j=t;export{j as default};