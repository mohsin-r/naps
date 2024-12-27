import{c_ as f,c as i,j as V,d as a,j_ as U,bI as $,T as C,bJ as F,Q as I,b_ as w}from"./main-B2UX4EBG.js";import{X as x,Y as H}from"./LayerView-DONYuvqR-Bj_Al8HE.js";import"./Container-C-rqKhNk-D3F_mCcp.js";import"./layerViewUtils-DyE3oc1e-DiM-8zsX.js";const u=Symbol(),O=o=>{let e=class extends o{constructor(){super(...arguments),this.layerViews=new f,this._debouncedUpdate=U(async()=>{const{layer:r,parent:s}=this,n=s?.footprintLayerView;let d=[];const l=this._createQuery();if(l&&n){const{features:h}=await n.queryFeatures(l);this.suspended||(d=h.map(c=>r.acquireLayer(c)))}this.removeHandles(u),this.addHandles(d,u)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return $([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),C(()=>this.removeHandles(u))])}updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise(F(this._debouncedUpdate()).catch(r=>{I.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:n},view:{scale:d}}=this;if(!n)return null;const{itemTypeField:l,itemSourceField:h,itemNameField:c,minScaleField:m,maxScaleField:L,objectIdField:v,orderBy:S}=s,b=w(`${m} IS NULL OR ${d} <= ${m} OR ${m} = 0`,`${L} IS NULL OR ${d} >= ${L}`),p=S?.find(y=>y.field&&!y.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=n,t.outFields=[v,h,c],t.where=w(t.where,b),this.unsupportedItemTypes!=null){const y=`${l} NOT IN (${this.unsupportedItemTypes.map(_=>`'${_}'`)})`;t.where=w(t.where,y)}return p?.field&&(t.orderByFields=[`${p.field} ${p.order==="descending"?"DESC":"ASC"}`],t.outFields.push(p.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([V("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(x(H)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new f}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(o){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((o,e)=>this.container.addChildAt(o.container,e))}};g=i([V("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const q=g;export{q as default};
