import{oX as a}from"./main-KOPTRisL.js";function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function i(e){e.target.disabled&&e.preventDefault()}const o=["mousedown","mouseup","click"];function r(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const t={capture:!0};function p(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),l(e);return}s(e),e.el.removeAttribute("aria-disabled")}function l(e){e.el.click=c,d(e.el)}function d(e){e.addEventListener("pointerdown",i,t),o.forEach(n=>e.addEventListener(n,r,t))}function s(e){delete e.el.click,u(e.el)}function u(e){e.removeEventListener("pointerdown",i,t),o.forEach(n=>e.removeEventListener(n,r,t))}const f={container:"interaction-container"},v=({disabled:e},n)=>a("div",{class:f.container,inert:e},...n);export{p as l,v as p};