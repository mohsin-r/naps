import{kI as p,kJ as f,kK as I,kG as l,L as h}from"./main-KOPTRisL.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(s,t){const e={};for(const n of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=n;for(const c of r){const{id:d}=c,m=p(f(`${s.path}/${a}/attachments/${d}`)),u=I.fromJSON(c);u.set({url:m,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(u):e[a]=[u]}}return e}function b(s,t,e){let n={query:l({...s.query,f:"json",...y(t)})};return e&&(n={...e,...n,query:{...e.query,...n.query}}),h(s.path+"/queryAttachments",n).then(a=>a.data.attachmentGroups)}async function k(s,t,e){const{objectIds:n}=t,a=[];for(const o of n)a.push(h(s.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>n.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,k as fetchAttachments,j as processAttachmentQueryResult};