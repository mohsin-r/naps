import{am as p,u as I,U as b,H as w,L as k,b$ as G,dy as S,oF as m,dz as d,oG as E,aj as x,ki as v,or as F,oq as L}from"./main-B2UX4EBG.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function N(n){const s=n.folders||[],t=s.slice(),e=new Map,r=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:r,esriGeometryPolyline:i,esriGeometryPolygon:f};(n.featureCollection?.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(r,g,o.featureSet.features):a==="esriGeometryPolyline"?h(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,o.featureSet.features)}),n.groundOverlays&&n.groundOverlays.forEach(o=>{c.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=C(y,o.id,n.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[M[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=P([o])}});const u=P(t);return{folders:s,sublayers:t,extent:u}}function T(n,s,t,e){const r=I?.findCredential(n);n=b(n,{token:r?.token});const i=w.kmlServiceUrl;return k(i,{query:{url:n,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:e})}function j(n,s,t=null,e=[]){const r=[],i={},f=s.sublayers,c=new Set(s.folders.map(l=>l.id));return f.forEach(l=>{const u=new n;if(t?u.read(l,t):u.read(l),e.length&&c.has(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers?.unshift(u)}else r.unshift(u)}),r}function h(n,s,t){t.forEach(e=>{n.set(e.attributes[s],e)})}function O(n,s){let t;return s.some(e=>e.id===n&&(t=e,!0)),t}function C(n,s,t){const e=O(n,t);return e&&(e.parentFolderId=s,e.networkLink=e),e}async function z(n){const s=v.fromJSON(n.featureSet).features,t=n.layerDefinition,e=F(t.drawingInfo.renderer),r=L.fromJSON(n.popupInfo),i=[];for(const f of s){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=r,f.visible=!0,i.push(f)}return i}function P(n){const s=G(S),t=G(S);for(const e of n){if(e.polygons?.featureSet?.features)for(const r of e.polygons.featureSet.features)m(s,r.geometry),d(t,s);if(e.polylines?.featureSet?.features)for(const r of e.polylines.featureSet.features)m(s,r.geometry),d(t,s);if(e.points?.featureSet?.features)for(const r of e.points.featureSet.features)m(s,r.geometry),d(t,s);if(e.mapImages)for(const r of e.mapImages)m(s,r.extent),d(t,s)}return E(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:x.WGS84}}export{N as C,j as D,z as N,T,P as h};
