class u{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return this._outer.size===0}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),r.size===0&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,r)=>e(t,r))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}export{u as s};