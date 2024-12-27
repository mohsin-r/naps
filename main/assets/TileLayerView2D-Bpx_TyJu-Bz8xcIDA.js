import{nQ as w,bH as y,nR as I,iS as V,nS as H,T as v,aH as T,aE as o,bW as g,Q as U,c as n,d as f,j as q}from"./main-B2UX4EBG.js";import"./floatRGBA-CNeCgBBY-DQr9K_Vf.js";import"./UpdateTracking2D-swFQJIjy-BaZsakTc.js";import"./GeometryUtils-v59R1Z6F-CoVPVF-X.js";import"./Container-C-rqKhNk-D3F_mCcp.js";import"./WGLContainer-whJgsi2t-isUvgAB7.js";import"./Program-1XjJitsM-DNupFgb6.js";import"./LabelMetric-DpMX58iW-B-5yyl82.js";import"./StyleDefinition-CovmM7Ch-ue8tg4hO.js";import"./enums-qHpGJ28Q-CmnLAccm.js";import"./GridShader--au302uP-CEt_-d3q.js";import"./FeatureCommandQueue-F8dH-mVd-CSvl61tD.js";import"./PieChartMeshWriter-DYJnKx_X-CLZ7UnIB.js";import"./renderState-CRtOsw3X-BCqlW_4-.js";import"./interfaces-DN2-jsJC-DzMTiT5R.js";import"./testSVGPremultipliedAlpha-DmWsO1ZL-BKqN2EbK.js";import{X as Q}from"./GraphicsView2D-DGP_h330-DjEcMux9.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import{L as S,p as c,S as d}from"./imageUtils-BQMOAI7a-BngcwnjE.js";import{X as b,Y as C}from"./LayerView-DONYuvqR-Bj_Al8HE.js";import{d as P}from"./HighlightGraphicContainer-cUb9kmn3-BjUqU0JO.js";import{c as z}from"./RefreshableLayerView-D30wcOhz-CAhMyJzd.js";import{M as E,O as F}from"./MapServiceLayerViewHelper-CyPZdm17-DUPP7EC-.js";import{x as L}from"./drapedUtils-Bj2xRBlq-CpqTI5T1.js";import"./BidiEngine-Bdqv5H5j-Dyqh9XG-.js";import"./Rect-DD6XS68q-D_hsV3ag.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./Util-cAlFLh9R-oIQpZgxD.js";import"./BufferObject-DqJSjWFs-COKIJclw.js";import"./VertexArrayObject-C4kjI814-miywJgST.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./ProgramTemplate-B_NcbdFz-CA7X3kS9.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./CircularArray-DaQg3PQl-BXS52LZy.js";import"./AttributeStore-BysBgiw_-LpWqk63G.js";import"./TimeOnly-BR6daUyu-BIYLNjHv.js";import"./timeSupport-sB9XTwIv-tcVoK5A5.js";import"./constants-Bqe1QJ4u-F8oTIn7N.js";import"./TurboLine-Bj3gCfCh-C-dEPMcW.js";import"./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js";import"./normalizeUtilsSync-BGR0Mvo7-DNr_2MBi.js";import"./Bitmap-DixeSrEO-B3VgFFNH.js";import"./TileContainer-C5yGwaDr-DZnmgKcC.js";import"./layerViewUtils-DyE3oc1e-DiM-8zsX.js";import"./AGraphicContainer-aPpZ1eAs-B8YkQXBp.js";import"./TechniqueInstance-DBGJNG3B--MCSn0Jq.js";import"./languageUtils-Bxl5LDSi-DMXjBiZx.js";import"./ImmutableArray-CiJxhY8_-Kqx7aWRu.js";import"./shared-CWBqh2zd-MNGrMOiQ.js";import"./number-BJi_xsDz-DkvVhX73.js";import"./popupUtils-CGEHI2En-CvkG8GU5.js";const k=[0,0];let a=class extends z(S(b(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,h)=>this.fetchTile(i,h),scheduler:this.scheduler,priority:V.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new H({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),E(this,this.layer)){const i=this._highlightView=new Q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new F({createFetchPopupFeaturesQueryGeometry:(h,r)=>L(h,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,r)=>{i.graphicUpdateHandler({graphic:h,property:r})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):v()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return T(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(k,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:h,resamplingLevel:r=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(s){if(!o(s)&&!this.resampling)return c(this._tileInfoView.tileInfo.size);if(r<3){const u=this._tileInfoView.getTileParentId(e.id);if(u){const m=new g(u),_=await this.fetchTile(m,{...t,resamplingLevel:r+1});return d(this._tileInfoView,_,m,e)}}throw s}const l=new g(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),!this.resampling&&l.level!==e.level)return c(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(s){if(o(s))throw s;return c(this._tileInfoView.tileInfo.size)}return this.resampling?d(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||U.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};n([f()],a.prototype,"resampling",null),n([f()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Le=a;export{Le as default};
