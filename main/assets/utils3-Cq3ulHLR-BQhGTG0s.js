import{oW as s}from"./main-B2UX4EBG.js";const c="calcite-list",o="calcite-list-item-group",n="calcite-list-item";function u(r){return Array.from(r.assignedElements({flatten:!0}).filter(e=>e.matches(c)))}function f(r){const e=r.assignedElements({flatten:!0}),i=e.filter(t=>t?.matches(o)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,l)=>[...t,...l],[]),a=e.filter(t=>t?.matches(n));return[...e.filter(t=>t?.matches(c)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,l)=>[...t,...l],[]),...i,...a]}function h(r){r.forEach(e=>{e.setPosition=r.indexOf(e)+1,e.setSize=r.length})}function d(r,e=!1){if(!s())return 0;const i=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(i,r,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{h as f,d as h,f as m,u};