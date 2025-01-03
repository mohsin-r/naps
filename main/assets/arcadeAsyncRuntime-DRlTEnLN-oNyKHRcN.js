import{C as wt,X as pt,M as dt,L as ht,f as gt,m as yt,s as mt,a as rt,p as vt,N as M,e as m,b as J,D as ot}from"./arcadeUtils-BUv04XWE-CY63aLp0.js";import{v as Q,b as R,T as l,n as s,D as z,a5 as v,a9 as W,l as w,U as S,a6 as F,a7 as E,R as at,y as g,C as j,S as C,f,t as k,Z as U,M as O,V as bt,o as D,a0 as St,z as xt,a8 as Ft,J as It,a4 as T,r as Rt,ac as Mt,ad as $}from"./languageUtils-Bxl5LDSi-lI08MNgX.js";import{registerFunctions as At}from"./geomasync-CyfK82og-BJ-7PTYG.js";import{aj as nt,Y as tt}from"./main-C9wvg2yZ.js";import"./TimeOnly-BR6daUyu-B1wD7NWs.js";import"./ImmutableArray-CiJxhY8_-Kqx7aWRu.js";import"./number-BJi_xsDz-CPzgXyFY.js";import"./shared-CWBqh2zd-BDrvv4Yi.js";import"./portalUtils-BNrT8D9R-D3Du1WKz.js";import"./geometryEngineAsync-BiWvQc1r-CZ-ucJV2.js";const K=100;async function Y(e,t){const r=[];for(let o=0;o<t.arguments.length;o++)r.push(await u(e,t.arguments[o]));return r}async function I(e,t,r){return t.preparsed===!0?r(e,null,t.arguments):r(e,t,await Y(e,t))}class Ct extends Mt{constructor(t,r){super(),this.definition=null,this.context=null,this.definition=t,this.context=r}createFunction(t){return(...r)=>{const o={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:t.depthCounter+1},globalScope:this.context.globalScope};if(o.depthCounter.depth>64)throw new l(t,s.MaximumCallDepth,null);return Z(this.definition,o,r,null)}}call(t,r){return B(t,r,(o,a,n)=>{const i={spatialReference:t.spatialReference,services:t.services,console:t.console,libraryResolver:t.libraryResolver,exports:t.exports,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:{},abortSignal:t.abortSignal,globalScope:t.globalScope,depthCounter:{depth:t.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l(t,s.MaximumCallDepth,r);return Z(this.definition,i,n,r)})}marshalledCall(t,r,o,a){return a(t,r,async(n,i,c)=>{const p={spatialReference:t.spatialReference,globalScope:o.globalScope,depthCounter:{depth:t.depthCounter.depth+1},libraryResolver:t.libraryResolver,exports:t.exports,console:t.console,abortSignal:t.abortSignal,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:{}};return c=c.map(d=>!S(d)||d instanceof T?d:$(d,t,a)),$(await Z(this.definition,p,c,r),o,a)})}}class A extends It{constructor(t){super(),this.source=t}async global(t){const r=this.executingContext.globalScope[t.toLowerCase()];if(r.valueset||(r.value=await u(this.executingContext,r.node),r.valueset=!0),S(r.value)&&!(r.value instanceof T)){const o=new T;o.fn=r.value,o.parameterEvaluator=B,o.context=this.executingContext,r.value=o}return r.value}setGlobal(t,r){if(S(r))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[t.toLowerCase()]={value:r,valueset:!0,node:null}}hasGlobal(t){return this.executingContext.exports[t]===void 0&&(t=t.toLowerCase()),this.executingContext.exports[t]!==void 0}async loadModule(t){let r=t.spatialReference;r==null&&(r=new nt({wkid:102100})),this.moduleScope=ut({},t.customfunctions,t.timeZone),this.executingContext={spatialReference:r,services:t.services,libraryResolver:new rt(t.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:t.abortSignal===void 0||t.abortSignal===null?{aborted:!1}:t.abortSignal,globalScope:this.moduleScope,console:t.console??ft,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},await X(this.executingContext,this.source.syntax)}}async function B(e,t,r){return t.preparsed===!0?r(e,null,t.arguments):r(e,t,await Y(e,t))}async function u(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"UpdateExpression":return await Kt(e,t);case"AssignmentExpression":return await Lt(e,t);case"TemplateLiteral":return await Jt(e,t);case"Identifier":return await H(e,t);case"MemberExpression":return await _t(e,t);case"Literal":return t.value;case"CallExpression":return await Ht(e,t);case"UnaryExpression":return await zt(e,t);case"BinaryExpression":return await Yt(e,t);case"LogicalExpression":return await Xt(e,t);case"ArrayExpression":return await Wt(e,t);case"ObjectExpression":return await Nt(e,t);default:throw new l(e,s.Unrecognized,t)}}catch(r){throw at(e,t,r)}}async function b(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"ImportDeclaration":return await qt(e,t);case"ExportNamedDeclaration":return await Gt(e,t);case"VariableDeclaration":return await lt(e,t,0);case"BlockStatement":return await X(e,t);case"FunctionDeclaration":return await Pt(e,t);case"ReturnStatement":return await Tt(e,t);case"IfStatement":return await Dt(e,t);case"ExpressionStatement":return await Zt(e,t);case"ForStatement":return await Bt(e,t);case"WhileStatement":return await kt(e,t);case"ForInStatement":return await Ut(e,t);case"BreakStatement":return F;case"EmptyStatement":return w;case"ContinueStatement":return E;default:throw new l(e,s.Unrecognized,t)}}catch(r){throw at(e,t,r)}}async function Nt(e,t){const r=[];for(let i=0;i<t.properties.length;i++){const c=t.properties[i],p=await u(e,c.value),d=c.key.type==="Identifier"?c.key.name:await u(e,c.key);r[i]={key:d,value:p}}const o={},a=new Map;for(let i=0;i<r.length;i++){const c=r[i];if(S(c.value))throw new l(e,s.NoFunctionInDictionary,t);if(g(c.key)===!1)throw new l(e,s.KeyMustBeString,t);let p=c.key.toString();const d=p.toLowerCase();a.has(d)?p=a.get(d):a.set(d,p),c.value===w?o[p]=null:o[p]=c.value}const n=new M(o);return n.immutable=!1,n}async function kt(e,t){const r={testResult:!0,lastAction:w};if(r.testResult=await u(e,t.test),r.testResult===!1)return w;if(r.testResult!==!0)throw new l(e,s.BooleanConditionRequired,t);for(;r.testResult===!0&&(r.lastAction=await b(e,t.body),r.lastAction!==F)&&!(r.lastAction instanceof v);)if(r.testResult=await u(e,t.test),r.testResult!==!0&&r.testResult!==!1)throw new l(e,s.BooleanConditionRequired,t);return r.lastAction instanceof v?r.lastAction:w}async function et(e,t,r){const o=await b(e,t.body);return r.lastAction=o,r.lastAction===F||r.lastAction instanceof v?(r.testResult=!1,r):(t.update!==null&&await u(e,t.update),r)}async function Ot(e,t,r){if(t.test!==null){const o=await u(e,t.test);if(e.abortSignal?.aborted===!0)throw new l(e,s.Cancelled,t);if(r.testResult=o,r.testResult===!1)return r;if(r.testResult!==!0)throw new l(e,s.BooleanConditionRequired,t);return et(e,t,r)}return et(e,t,r)}function P(e,t,r,o,a,n){try{Ot(e,t,r).then(()=>{try{r.testResult===!0?++n>K?(n=0,setTimeout(()=>{P(e,t,r,o,a,n)},0)):P(e,t,r,o,a,n):r.lastAction instanceof v?o(r.lastAction):o(w)}catch(i){a(i)}},i=>{a(i)})}catch(i){a(i)}}async function Bt(e,t){try{return t.init!==null&&(t.init.type==="VariableDeclaration"?await b(e,t.init):await u(e,t.init)),await new Promise((r,o)=>{P(e,t,{testResult:!0,lastAction:w},a=>{r(a)},a=>{o(a)},0)})}catch(r){throw r}}function q(e,t,r,o,a,n,i,c,p,d){try{if(o<=n)return void c(w);a.value=i==="k"?r[n]:n,b(e,t.body).then(y=>{try{y instanceof v?c(y):y===F?c(w):++d>K?(d=0,setTimeout(()=>{q(e,t,r,o,a,n+1,i,c,p,d)},0)):q(e,t,r,o,a,n+1,i,c,p,d)}catch(L){p(L)}},y=>{p(y)})}catch(y){p(y)}}function G(e,t,r,o,a,n,i,c,p){try{if(r.length()<=a)return void i(w);o.value=n==="k"?r.get(a):a,b(e,t.body).then(d=>{d instanceof v?i(d):d===F?i(w):++p>K?(p=0,setTimeout(()=>{G(e,t,r,o,a+1,n,i,c,p)},0)):G(e,t,r,o,a+1,n,i,c,p)},d=>{c(d)})}catch(d){c(d)}}function V(e,t,r,o,a,n){try{if(n===void 0&&(n="i"),r.length===0)return void o.resolve(w);q(e,t,r,r.length,a,0,n,i=>{o.resolve(i)},i=>{o.reject(i)},0)}catch(i){o.reject(i)}}function Et(e,t,r,o,a,n){try{if(n===void 0&&(n="i"),r.length()===0)return void o.resolve(w);G(e,t,r,a,0,n,i=>{o.resolve(i)},i=>{o.reject(i)},0)}catch(i){o.reject(i)}}function jt(e,t,r,o,a){try{V(e,t,r.keys(),o,a,"k")}catch(n){o.reject(n)}}function _(e,t,r,o,a,n,i,c){try{e.next().then(p=>{try{if(p===null)n(w);else{const d=ot.createFromGraphicLikeObject(p.geometry,p.attributes,o,t.timeZone);d._underlyingGraphic=p,a.value=d,b(t,r.body).then(y=>{try{y===F?n(w):y instanceof v?n(y):++c>K?(c=0,setTimeout(()=>{_(e,t,r,o,a,n,i,c)},0)):_(e,t,r,o,a,n,i,c)}catch(L){i(L)}},y=>{i(y)})}}catch(d){i(d)}},p=>{i(p)})}catch(p){i(p)}}async function Ut(e,t){return new Promise((r,o)=>{u(e,t.right).then(a=>{try{let n;n=t.left.type==="VariableDeclaration"?b(e,t.left):Promise.resolve(),n.then(()=>{try{const i=m(t.left.type==="VariableDeclaration"?t.left.declarations[0].id:t.left);let c=null;if(e.localScope!=null&&e.localScope[i]!==void 0&&(c=e.localScope[i]),c===null&&e.globalScope[i]!==void 0&&(c=e.globalScope[i]),c===null)return void o(new l(e,s.InvalidIdentifier,t));j(a)||g(a)?V(e,t,a,{reject:o,resolve:r},c):U(a)?Et(e,t,a,{reject:o,resolve:r},c):a instanceof M||k(a)?jt(e,t,a,{reject:o,resolve:r},c):Rt(a)?_(a.iterator(e.abortSignal),e,t,a,c,p=>{r(p)},p=>{o(p)},0):V(e,t,[],{reject:o,resolve:r},c)}catch(i){o(i)}},o)}catch(n){o(n)}},o)})}async function Kt(e,t){const r=t.argument;if(r.type==="CallExpression")throw new l(e,s.NeverReach,t);if(r.type==="MemberExpression"){const n=await u(e,r.object);let i,c;if(r.computed===!0)i=await u(e,r.property);else{if(r.property.type!=="Identifier")throw new l(e,s.Unrecognized,t);i=r.property.name}if(j(n)){if(!C(i))throw new l(e,s.ArrayAccessorMustBeNumber,t);if(i<0&&(i=n.length+i),i<0||i>=n.length)throw new l(e,s.OutOfBounds,t);c=f(n[i]),n[i]=t.operator==="++"?c+1:c-1}else if(n instanceof M){if(g(i)===!1)throw new l(e,s.KeyAccessorMustBeString,t);if(n.hasField(i)!==!0)throw new l(e,s.FieldNotFound,t,{key:i});c=f(n.field(i)),n.setField(i,t.operator==="++"?c+1:c-1)}else if(n instanceof A){if(g(i)===!1)throw new l(e,s.ModuleAccessorMustBeString,t);if(n.hasGlobal(i)!==!0)throw new l(e,s.ModuleExportNotFound,t);c=f(await n.global(i)),n.setGlobal(i,t.operator==="++"?c+1:c-1)}else{if(!k(n))throw U(n)?new l(e,s.Immutable,t):new l(e,s.InvalidParameter,t);if(g(i)===!1)throw new l(e,s.KeyAccessorMustBeString,t);if(n.hasField(i)!==!0)throw new l(e,s.FieldNotFound,t,{key:i});c=f(n.field(i)),n.setField(i,t.operator==="++"?c+1:c-1)}return t.prefix===!1?c:t.operator==="++"?c+1:c-1}const o=m(r);let a;if(e.localScope!=null&&e.localScope[o]!==void 0)return a=f(e.localScope[o].value),e.localScope[o]={value:t.operator==="++"?a+1:a-1,valueset:!0,node:t},t.prefix===!1?a:t.operator==="++"?a+1:a-1;if(e.globalScope[o]!==void 0)return a=f(e.globalScope[o].value),e.globalScope[o]={value:t.operator==="++"?a+1:a-1,valueset:!0,node:t},t.prefix===!1?a:t.operator==="++"?a+1:a-1;throw new l(e,s.InvalidIdentifier,t)}function x(e,t,r,o,a){switch(t){case"=":return e===w?null:e;case"/=":return f(r)/f(e);case"*=":return f(r)*f(e);case"-=":return f(r)-f(e);case"+=":return g(r)||g(e)?O(r)+O(e):f(r)+f(e);case"%=":return f(r)%f(e);default:throw new l(a,s.UnsupportedOperator,o)}}async function Lt(e,t){const r=t.left;if(r.type==="MemberExpression"){const a=await u(e,r.object);let n;if(r.computed===!0)n=await u(e,r.property);else{if(r.property.type!=="Identifier")throw new l(e,s.InvalidIdentifier,t);n=r.property.name}const i=await u(e,t.right);if(j(a)){if(!C(n))throw new l(e,s.ArrayAccessorMustBeNumber,t);if(n<0&&(n=a.length+n),n<0||n>a.length)throw new l(e,s.OutOfBounds,t);if(n===a.length){if(t.operator!=="=")throw new l(e,s.OutOfBounds,t);a[n]=x(i,t.operator,a[n],t,e)}else a[n]=x(i,t.operator,a[n],t,e)}else if(a instanceof M){if(g(n)===!1)throw new l(e,s.KeyAccessorMustBeString,t);if(a.hasField(n)===!0)a.setField(n,x(i,t.operator,a.field(n),t,e));else{if(t.operator!=="=")throw new l(e,s.FieldNotFound,t,{key:n});a.setField(n,x(i,t.operator,null,t,e))}}else if(a instanceof A){if(g(n)===!1)throw new l(e,s.KeyAccessorMustBeString,t);if(a.hasGlobal(n)!==!0)throw new l(e,s.ModuleExportNotFound,t);a.setGlobal(n,x(i,t.operator,await a.global(n),t,e))}else{if(!k(a))throw U(a)?new l(e,s.Immutable,t):new l(e,s.InvalidParameter,t);if(g(n)===!1)throw new l(e,s.KeyAccessorMustBeString,t);if(a.hasField(n)===!0)a.setField(n,x(i,t.operator,a.field(n),t,e));else{if(t.operator!=="=")throw new l(e,s.FieldNotFound,t,{key:n});a.setField(n,x(i,t.operator,null,t,e))}}return w}const o=m(r);if(e.localScope!=null&&e.localScope[o]!==void 0){const a=await u(e,t.right);return e.localScope[o]={value:x(a,t.operator,e.localScope[o].value,t,e),valueset:!0,node:t.right},w}if(e.globalScope[o]!==void 0){const a=await u(e,t.right);return e.globalScope[o]={value:x(a,t.operator,e.globalScope[o].value,t,e),valueset:!0,node:t.right},w}throw new l(e,s.InvalidIdentifier,t)}async function Zt(e,t){const r=await u(e,t.expression);return r===w?w:new W(r)}async function Dt(e,t){const r=await u(e,t.test);if(r===!0)return b(e,t.consequent);if(r===!1)return t.alternate!==null?b(e,t.alternate):w;throw new l(e,s.BooleanConditionRequired,t)}async function X(e,t){return it(e,t,0)}async function it(e,t,r){if(r>=t.body.length)return w;const o=await b(e,t.body[r]);return o instanceof v||o===F||o===E||r===t.body.length-1?o:it(e,t,r+1)}async function Tt(e,t){if(t.argument===null)return new v(w);const r=await u(e,t.argument);return new v(r)}async function Pt(e,t){const r=m(t.id);return e.globalScope[r]={valueset:!0,node:null,value:new Ct(t,e)},w}async function qt(e,t){const r=m(t.specifiers[0].local),o=e.libraryResolver.loadLibrary(r);let a;return e.libraryResolver._moduleSingletons?.has(o.uri)?a=e.libraryResolver._moduleSingletons.get(o.uri):(a=new A(o),await a.loadModule(e),e.libraryResolver._moduleSingletons?.set(o.uri,a)),e.globalScope[r]={value:a,valueset:!0,node:t},w}async function Gt(e,t){if(await b(e,t.declaration),t.declaration.type==="FunctionDeclaration")e.exports[m(t.declaration.id)]="function";else if(t.declaration.type==="VariableDeclaration")for(const r of t.declaration.declarations)e.exports[m(r.id)]="variable";return w}async function lt(e,t,r){return r>=t.declarations.length?w:(await Vt(e,t.declarations[r]),r===t.declarations.length-1||await lt(e,t,r+1),w)}async function Vt(e,t){let r=null;if(r=t.init===null?null:await u(e,t.init),e.localScope!==null){if(r===w&&(r=null),t.id.type!=="Identifier")throw new l(e,s.InvalidIdentifier,t);const a=m(t.id);return void(e.localScope!=null&&(e.localScope[a]={value:r,valueset:!0,node:t.init}))}if(t.id.type!=="Identifier")throw new l(e,s.InvalidIdentifier,t);const o=m(t.id);r===w&&(r=null),e.globalScope[o]={value:r,valueset:!0,node:t.init}}async function _t(e,t){const r=await u(e,t.object);if(r===null)throw new l(e,s.MemberOfNull,t);if(t.computed===!1){if(t.property.type==="Identifier"){if(r instanceof M||k(r))return r.field(t.property.name);if(r instanceof tt)return J(r,t.property.name,e,t);if(r instanceof A){if(!r.hasGlobal(t.property.name))throw new l(e,s.InvalidIdentifier,t);return r.global(t.property.name)}throw new l(e,s.InvalidMemberAccessKey,t)}throw new l(e,s.InvalidMemberAccessKey,t)}let o=await u(e,t.property);if(r instanceof M||k(r)){if(g(o))return r.field(o);throw new l(e,s.InvalidMemberAccessKey,t)}if(r instanceof A){if(g(o))return r.global(o);throw new l(e,s.InvalidMemberAccessKey,t)}if(r instanceof tt){if(g(o))return J(r,o,e,t);throw new l(e,s.InvalidMemberAccessKey,t)}if(j(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length+o),o>=r.length||o<0)throw new l(e,s.OutOfBounds,t);return r[o]}throw new l(e,s.InvalidMemberAccessKey,t)}if(U(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length()+o),o>=r.length()||o<0)throw new l(e,s.OutOfBounds,t);return r.get(o)}throw new l(e,s.InvalidMemberAccessKey,t)}if(g(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length+o),o>=r.length||o<0)throw new l(e,s.OutOfBounds,t);return r[o]}throw new l(e,s.InvalidMemberAccessKey,t)}throw new l(e,s.InvalidMemberAccessKey,t)}async function zt(e,t){const r=await u(e,t.argument);if(R(r)){if(t.operator==="!")return!r;if(t.operator==="-")return-1*f(r);if(t.operator==="+")return 1*f(r);if(t.operator==="~")return~f(r);throw new l(e,s.UnsupportedUnaryOperator,t)}if(t.operator==="-")return-1*f(r);if(t.operator==="+")return 1*f(r);if(t.operator==="~")return~f(r);throw new l(e,s.UnsupportedUnaryOperator,t)}async function Wt(e,t){const r=[];for(let o=0;o<t.elements.length;o++)r.push(await u(e,t.elements[o]));for(let o=0;o<r.length;o++){if(S(r[o]))throw new l(e,s.NoFunctionInArray,t);r[o]===w&&(r[o]=null)}return r}async function Yt(e,t){const r=await u(e,t.left),o=await u(e,t.right);switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return St(f(r),f(o),t.operator);case"==":return D(r,o);case"!=":return!D(r,o);case"<":case">":case"<=":case">=":return bt(r,o,t.operator);case"+":return g(r)||g(o)?O(r)+O(o):f(r)+f(o);case"-":return f(r)-f(o);case"*":return f(r)*f(o);case"/":return f(r)/f(o);case"%":return f(r)%f(o);default:throw new l(e,s.UnsupportedOperator,t)}}async function Xt(e,t){const r=await u(e,t.left);if(!R(r))throw new l(e,s.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":{if(r===!0)return r;const o=await u(e,t.right);if(R(o))return o;throw new l(e,s.LogicExpressionOrAnd,t)}case"&&":{if(r===!1)return r;const o=await u(e,t.right);if(R(o))return o;throw new l(e,s.LogicExpressionOrAnd,t)}default:throw new l(e,s.LogicExpressionOrAnd,t)}}async function H(e,t){const r=m(t);if(e.localScope!=null&&e.localScope[r]!==void 0){const o=e.localScope[r];if(o.valueset===!0)return o.value;if(o.d!==null)return o.d;o.d=u(e,o.node);const a=await o.d;return o.value=a,o.valueset=!0,a}if(e.globalScope[r]!==void 0){const o=e.globalScope[r];if(o.valueset===!0)return o.value;if(o.d!==null)return o.d;o.d=u(e,o.node);const a=await o.d;return o.value=a,o.valueset=!0,a}throw new l(e,s.InvalidIdentifier,t)}async function Ht(e,t){if(t.callee.type==="MemberExpression"){const o=await u(e,t.callee.object);if(!(o instanceof A))throw new l(e,s.FunctionNotFound,t);const a=t.callee.computed===!1?t.callee.property.name:await u(e,t.callee.property);if(!o.hasGlobal(a))throw new l(e,s.FunctionNotFound,t);const n=await o.global(a);if(!S(n))throw new l(e,s.CallNonFunction,t);return n.call(e,t)}if(t.callee.type!=="Identifier")throw new l(e,s.FunctionNotFound,t);const r=m(t.callee);if(e.localScope!=null&&e.localScope[r]!==void 0){const o=e.localScope[r];if(S(o.value))return o.value.call(e,t);throw new l(e,s.CallNonFunction,t)}if(e.globalScope[r]!==void 0){const o=e.globalScope[r];if(S(o.value))return o.value.call(e,t);throw new l(e,s.CallNonFunction,t)}throw new l(e,s.FunctionNotFound,t)}async function Jt(e,t){let r="",o=0;for(const a of t.quasis)if(r+=a.value?a.value.cooked:"",a.tail===!1){if(t.expressions[o]){const n=await u(e,t.expressions[o]);if(S(n))throw new l(e,s.NoFunctionInTemplateLiteral,t);r+=O(n)}o++}return r}const h={};async function st(e,t,r,o){const a=await u(e,t.arguments[r]);if(D(a,o))return u(e,t.arguments[r+1]);const n=t.arguments.length-r;return n===1?u(e,t.arguments[r]):n===2?null:n===3?u(e,t.arguments[r+2]):st(e,t,r+2,o)}async function ct(e,t,r,o){if(o===!0)return u(e,t.arguments[r+1]);if(t.arguments.length-r===3)return u(e,t.arguments[r+2]);const a=await u(e,t.arguments[r+2]);if(R(a)===!1)throw new l(e,s.ModuleExportNotFound,t.arguments[r+2]);return ct(e,t,r+2,a)}async function Z(e,t,r,o){const a=e.body;if(r.length!==e.params.length)throw new l(t,s.WrongNumberOfParameters,null);for(let i=0;i<r.length;i++){const c=e.params[i];c.type==="Identifier"&&t.localScope!=null&&(t.localScope[m(c)]={d:null,value:r[i],valueset:!0,node:null})}const n=await b(t,a);if(n instanceof v)return n.value;if(n===F)throw new l(t,s.UnexpectedToken,o);if(n===E)throw new l(t,s.UnexpectedToken,o);return n instanceof W?n.value:n}wt(h,I),pt(h,I),dt(h,I),ht(h,I),gt(h,I),At({functions:h,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:I,standardFunctionAsync:B}),h.iif=async function(e,t){Q(t.arguments===null?[]:t.arguments,3,3,e,t);const r=await u(e,t.arguments[0]);if(R(r)===!1)throw new l(e,s.BooleanConditionRequired,t);return u(e,r?t.arguments[1]:t.arguments[2])},h.defaultvalue=async function(e,t){Q(t.arguments===null?[]:t.arguments,2,3,e,t);const r=await u(e,t.arguments[0]);if(t.arguments.length===3){const o=await u(e,t.arguments[1]),a=yt(r,o);return a!=null&&a!==""?a:u(e,t.arguments[2])}return r==null||r===""?u(e,t.arguments[1]):r},h.decode=async function(e,t){if(t.arguments.length<2)throw new l(e,s.WrongNumberOfParameters,t);if(t.arguments.length===2)return u(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new l(e,s.WrongNumberOfParameters,t);return st(e,t,1,await u(e,t.arguments[0]))},h.when=async function(e,t){if(t.arguments.length<3)throw new l(e,s.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new l(e,s.WrongNumberOfParameters,t);const r=await u(e,t.arguments[0]);if(R(r)===!1)throw new l(e,s.BooleanConditionRequired,t.arguments[0]);return ct(e,t,0,r)};const Qt={fixSpatialReference:xt,parseArguments:Y,standardFunction:I,standardFunctionAsync:B,evaluateIdentifier:H};for(const e in h)h[e]={value:new z(h[e]),valueset:!0,node:null};const N=function(){};function ut(e,t,r){const o=new N;e==null&&(e={}),t==null&&(t={});const a=new M({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,o.textformatting={value:a,valueset:!0,node:null};for(const n in t)o[n]={value:new z(t[n]),native:!0,valueset:!0,node:null};for(const n in e)o[n]={value:Ft(e[n])?ot.createFromGraphic(e[n],r):e[n],valueset:!0,node:null};return o}function ft(e){console.log(e)}N.prototype=h,N.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},N.prototype.pi={value:Math.PI,valueset:!0,node:null};const ue=Qt;function $t(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:I,standardFunctionAsync:B,evaluateIdentifier:H};for(let r=0;r<e.length;r++)e[r].registerFunctions(t);for(const r in t.functions)h[r]={value:new z(t.functions[r]),valueset:!0,node:null},N.prototype[r]=h[r];for(let r=0;r<t.signatures.length;r++)mt(t.signatures[r],"async")}async function fe(e,t){let r=t.spatialReference;r==null&&(r=new nt({wkid:102100}));let o=null;e.usesModules&&(o=new rt(new Map,e.loadedModules));const a=ut(t.vars,t.customfunctions,t.timeZone),n={spatialReference:r,services:t.services,exports:{},libraryResolver:o,abortSignal:t.abortSignal===void 0||t.abortSignal===null?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console??ft,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},i=await X(n,e);if(i instanceof v||i instanceof W){const c=i.value;if(c===w)return null;if(S(c))throw new l(n,s.IllegalResult,null);return c}if(i===w)return null;throw i===F?new l(n,s.IllegalResult,null):i===E?new l(n,s.IllegalResult,null):new l(n,s.NeverReach,null)}$t([vt]);export{fe as executeScript,$t as extend,ue as functionHelper};