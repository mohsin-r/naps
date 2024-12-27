import{aH as h,bH as y,nR as w,iS as g,nS as I,bW as p,aE as f,Q as S,c as d,d as T,j as V}from"./main-KOPTRisL.js";import{L as v,S as m}from"./imageUtils-BQMOAI7a-PPVaTqkl.js";import{X as x,Y as R}from"./LayerView-DONYuvqR-gxDMyQRD.js";import{c as M}from"./RefreshableLayerView-D30wcOhz-CqxEpyKW.js";import"./Bitmap-DixeSrEO-BUTUxeW8.js";import"./Container-C-rqKhNk-CouSlmMq.js";import"./WGLContainer-whJgsi2t-DfLazV89.js";import"./LabelMetric-DpMX58iW-DbfvyNQz.js";import"./Program-1XjJitsM-D9K1ghsV.js";import"./BufferObject-DqJSjWFs-CVqCTSQV.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./VertexArrayObject-C4kjI814-QZJO5avm.js";import"./ProgramTemplate-B_NcbdFz-D9bH-cw0.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./StyleDefinition-CovmM7Ch-CPliDlDk.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./TileContainer-C5yGwaDr-jjaTiFbr.js";import"./layerViewUtils-DyE3oc1e-BU1h8i7_.js";const q=[0,0];let s=class extends M(v(x(R))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const{activeLayer:e}=this.layer,{tileMatrixSet:t}=e;if(t&&h(t.tileInfo?.spatialReference,this.view.spatialReference))return t;const i=this._getTileMatrixSetBySpatialReference(e);return i&&i.id!==e.tileMatrixSetId?(e.tileMatrixSetId=i.id,i):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new y(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i),scheduler:this.scheduler,priority:g.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>h(t.tileInfo?.spatialReference,e))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:n=0}=t;if(!i)return this._fetchImage(e,a);const r=new p(0,0,0,0);let o;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:a}),o=await this._fetchImage(r,a)}catch(l){if(f(l))throw l;if(n<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new p(c),_=await this.fetchTile(u,{...t,resamplingLevel:n+1});return m(this._tileInfoView,_,u,e)}}throw l}return m(this._tileInfoView,o,r,e)}canResume(){return super.canResume()&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||S.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){return e.tileMatrixSets?.find(t=>h(t.tileInfo?.spatialReference,this.view.spatialReference))}};d([T({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=d([V("esri.views.2d.layers.WMTSLayerView2D")],s);const $=s;export{$ as default};