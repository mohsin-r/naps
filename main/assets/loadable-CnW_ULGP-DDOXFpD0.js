import{oW as r,oV as a}from"./main-B2UX4EBG.js";const t=new WeakMap,o=new WeakMap;function c(e){o.set(e,new Promise(n=>t.set(e,n)))}function m(e){t.get(e)()}function i(e){return o.get(e)}async function u(e){if(await i(e),!!r())return a(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{m as i,u as m,c as r};