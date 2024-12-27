import{v as wt}from"./main-B2UX4EBG.js";var Z,$={exports:{}};function At(){return Z||(Z=1,D=$,R=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,W=function(t){var H,S;(t=(t=t||{})!==void 0?t:{}).ready=new Promise(function(n,e){H=n,S=e});var T=Object.assign({},t),C=typeof window=="object",v=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var I,s="";function K(n){return t.locateFile?t.locateFile(n,s):s+n}(C||v)&&(v?s=self.location.href:typeof document<"u"&&document.currentScript&&(s=document.currentScript.src),R&&(s=R),s=s.indexOf("blob:")!==0?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",v&&(I=n=>{var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)})),t.print||console.log.bind(console);var m,x,d=t.printErr||console.warn.bind(console);Object.assign(t,T),T=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(m=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&g("no native wasm support detected");var M,_,b,h,l,O,U=!1,B=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Q(n,e,i){for(var c=e+i,u=e;n[u]&&!(u>=c);)++u;if(u-e>16&&n.buffer&&B)return B.decode(n.subarray(e,u));for(var o="";e<u;){var r=n[e++];if(128&r){var f=63&n[e++];if((224&r)!=192){var J=63&n[e++];if((r=(240&r)==224?(15&r)<<12|f<<6|J:(7&r)<<18|f<<12|J<<6|63&n[e++])<65536)o+=String.fromCharCode(r);else{var V=r-65536;o+=String.fromCharCode(55296|V>>10,56320|1023&V)}}else o+=String.fromCharCode((31&r)<<6|f)}else o+=String.fromCharCode(r)}return o}function P(n,e){return n?Q(b,n,e):""}function k(n){M=n,t.HEAP8=_=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=h=new Int32Array(n),t.HEAPU8=b=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=l=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var F=[],q=[],z=[];function tt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)rt(t.preRun.shift());E(F)}function nt(){E(q)}function et(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ot(t.postRun.shift());E(z)}function rt(n){F.unshift(n)}function it(n){q.unshift(n)}function ot(n){z.unshift(n)}var p=0,y=null;function ut(n){p++,t.monitorRunDependencies&&t.monitorRunDependencies(p)}function at(n){if(p--,t.monitorRunDependencies&&t.monitorRunDependencies(p),p==0&&y){var e=y;y=null,e()}}function g(n){t.onAbort&&t.onAbort(n),d(n="Aborted("+n+")"),U=!0,n+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(n);throw S(e),e}var a,st="data:application/octet-stream;base64,";function L(n){return n.startsWith(st)}function N(n){try{if(n==a&&m)return new Uint8Array(m);if(I)return I(n);throw"both async and sync fetching of the wasm failed"}catch(e){g(e)}}function ct(){return m||!C&&!v||typeof fetch!="function"?Promise.resolve().then(function(){return N(a)}):fetch(a,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+a+"'";return n.arrayBuffer()}).catch(function(){return N(a)})}function ft(){var n={a:bt};function e(o,r){var f=o.exports;t.asm=f,k((x=t.asm.g).buffer),O=t.asm.m,it(t.asm.h),at()}function i(o){e(o.instance)}function c(o){return ct().then(function(r){return WebAssembly.instantiate(r,n)}).then(function(r){return r}).then(o,function(r){d("failed to asynchronously prepare wasm: "+r),g(r)})}function u(){return m||typeof WebAssembly.instantiateStreaming!="function"||L(a)||typeof fetch!="function"?c(i):fetch(a,{credentials:"same-origin"}).then(function(o){return WebAssembly.instantiateStreaming(o,n).then(i,function(r){return d("wasm streaming compile failed: "+r),d("falling back to ArrayBuffer instantiation"),c(i)})})}if(ut(),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(o){return d("Module.instantiateWasm callback failed with error: "+o),!1}return u().catch(S),{}}function E(n){for(;n.length>0;){var e=n.shift();if(typeof e!="function"){var i=e.func;typeof i=="number"?e.arg===void 0?G(i)():G(i)(e.arg):i(e.arg===void 0?null:e.arg)}else e(t)}}L(a="lerc-wasm.wasm")||(a=K(a));var w=[];function G(n){var e=w[n];return e||(n>=w.length&&(w.length=n+1),w[n]=e=O.get(n)),e}function lt(n,e,i,c){g("Assertion failed: "+P(n)+", at: "+[e?P(e):"unknown filename",i,c?P(c):"unknown function"])}function pt(n){return X(n+24)+24}function ht(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(e){l[this.ptr+4>>2]=e},this.get_type=function(){return l[this.ptr+4>>2]},this.set_destructor=function(e){l[this.ptr+8>>2]=e},this.get_destructor=function(){return l[this.ptr+8>>2]},this.set_refcount=function(e){h[this.ptr>>2]=e},this.set_caught=function(e){e=e?1:0,_[this.ptr+12|0]=e},this.get_caught=function(){return _[this.ptr+12|0]!=0},this.set_rethrown=function(e){e=e?1:0,_[this.ptr+13|0]=e},this.get_rethrown=function(){return _[this.ptr+13|0]!=0},this.init=function(e,i){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(i),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var e=h[this.ptr>>2];h[this.ptr>>2]=e+1},this.release_ref=function(){var e=h[this.ptr>>2];return h[this.ptr>>2]=e-1,e===1},this.set_adjusted_ptr=function(e){l[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return l[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Y(this.get_type()))return l[this.excPtr>>2];var e=this.get_adjusted_ptr();return e!==0?e:this.excPtr}}function mt(n,e,i){throw new ht(n).init(e,i),n}function dt(){g("")}function _t(n,e,i){b.copyWithin(n,e,e+i)}function yt(){return 2147483648}function gt(n){try{return x.grow(n-M.byteLength+65535>>>16),k(x.buffer),1}catch{}}function vt(n){var e=b.length;n>>>=0;var i=yt();if(n>i)return!1;let c=(r,f)=>r+(f-r%f)%f;for(var u=1;u<=4;u*=2){var o=e*(1+.2/u);if(o=Math.min(o,n+100663296),gt(Math.min(i,c(Math.max(n,o),65536))))return!0}return!1}var bt={a:lt,c:pt,b:mt,d:dt,f:_t,e:vt};ft(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var X=t._malloc=function(){return(X=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var A,Y=t.___cxa_is_pointer_type=function(){return(Y=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)};function j(n){function e(){A||(A=!0,t.calledRun=!0,U||(nt(),H(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),et()))}p>0||(tt(),p>0||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e()))}if(y=function n(){A||j(),A||(y=n)},t.run=j,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return j(),t.ready},D.exports=W),$.exports;var D,R,W}const Rt=wt(At()),It=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"}));export{It as l};
