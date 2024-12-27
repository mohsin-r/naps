import{T as f,mc as m,jl as s}from"./main-KOPTRisL.js";import{f as l}from"./grouping-Bl3jGfSC-7jHIL4p2.js";function _(e){return s(e.frameDurations.reduce((t,n)=>t+n,0))}function d(e){const{width:t,height:n}=e,o=e.frameDurations.reverse(),a=i=>{const r=e.frameDurations.length-1-i;return e.getFrame(r)};return{frameCount:e.frameCount,duration:e.duration,frameDurations:o,getFrame:a,width:t,height:n}}function F(e,t){const{width:n,height:o,getFrame:a}=e,i=t/e.duration,r=e.frameDurations.map(u=>s(u*i));return{frameCount:e.frameCount,duration:e.duration,frameDurations:r,getFrame:a,width:n,height:o}}function p(e,t){const{width:n,height:o,getFrame:a}=e,i=e.frameDurations.slice(),r=i.shift();return i.unshift(s(r+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:i,getFrame:a,width:n,height:o}}function c(e,t){const{width:n,height:o,getFrame:a}=e,i=e.frameDurations.slice(),r=i.pop();return i.push(s(r+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:i,getFrame:a,width:n,height:o}}class g{constructor(t,n,o,a){this._animation=t,this._repeatType=o,this._onFrameData=a,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let i=0;for(;n>i;)i+=this.timeToFrame,this.nextFrame();const r=this._animation.getFrame(this._currentFrame);this._onFrameData(r)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=0;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(this._currentFrame===-1)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const t=this._animation.getFrame(this._currentFrame);this._onFrameData(t)}}function D(e,t,n,o){let a,{repeatType:i}=t;if(i==null&&(i=m.Loop),t.reverseAnimation===!0&&(e=d(e)),t.duration!=null&&(e=F(e,s(1e3*t.duration))),t.repeatDelay!=null){const r=1e3*t.repeatDelay;i===m.Loop?e=c(e,s(r)):i===m.Oscillate&&(e=p(c(e,s(r/2)),s(r/2)))}if(t.startTimeOffset!=null)a=s(1e3*t.startTimeOffset);else if(t.randomizeStartTime!=null){const r=t.randomizeStartSeed!=null?t.randomizeStartSeed:82749913,u=l(n,r);a=s(u*_(e))}else a=s(0);return new g(e,a,i,o)}function y(e,t,n,o){const a=t.playAnimation==null||t.playAnimation,i=D(e,t,n,o);let r,u=i.timeToFrame;function h(){r=a?setTimeout(()=>{i.nextFrame(),u=i.timeToFrame,h()},u):void 0}return h(),f(()=>a&&clearTimeout(r))}export{y as T};