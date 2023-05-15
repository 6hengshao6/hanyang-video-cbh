/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as t,b as e}from"../chunks/maybe.js";import{n as s}from"../chunks/nextTick.js";import{P as i,l as n,m as h}from"../chunks/typedArrayUtil.js";import{createResolver as a,isAborted as r,createAbortError as l}from"./promiseUtils.js";import"./Error.js";import"./lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";class o{constructor(t,e=30){this.name=t,this._counter=0,this._samples=new Array(e)}record(e){t(e)&&(this._samples[++this._counter%this._samples.length]=e)}get median(){return this._samples.slice().sort(((t,e)=>t-e))[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce(((t,e)=>t+e),0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}}var c;!function(t){const e=(t,e,s,i)=>{let n=e,h=e;const a=s>>>1,r=t[n-1];for(;h<=a;){h=n<<1,h<s&&i(t[h-1],t[h])<0&&++h;const e=t[h-1];if(i(e,r)<=0)break;t[n-1]=e,n=h}t[n-1]=r},s=(t,e)=>t<e?-1:t>e?1:0;t.sort=function(t,i,n,h){void 0===i&&(i=0),void 0===n&&(n=t.length),void 0===h&&(h=s);for(let s=n>>>1;s>i;s--)e(t,s,n,h);const a=i+1;for(let s=n-1;s>i;s--){const n=t[i];t[i]=t[s],t[s]=n,e(t,a,s,h)}},t.iterableSort=function*(t,i,n,h){void 0===i&&(i=0),void 0===n&&(n=t.length),void 0===h&&(h=s);for(let s=n>>>1;s>i;s--)e(t,s,n,h),yield;const a=i+1;for(let s=n-1;s>i;s--){const n=t[i];t[i]=t[s],t[s]=n,e(t,a,s,h),yield}}}(c||(c={}));const d=c,u=1.5,f=1.1;class g{constructor(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new i,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),void 0!==t.deallocator&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>m(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){const e=new Array;for(let s=0;s<this._length;s++){const i=this.data[s];t(i)&&e.push(i)}return e}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}includes(t,e){const s=this.data.indexOf(t,e);return-1!==s&&s<this.length}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let e=t;e<this._length;++e)this.data[e]=this._deallocator(this.data[e]);this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,e=t.length){for(let s=0;s<e;s++)this.data[this._length++]=t[s]}fill(t,e){for(let s=0;s<e;s++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return++this._length,t}unshift(t){this.data.unshift(t),this._length++,m(this)}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const e=n(this.data,t,this.length,this._hint);if(-1!==e)return this.data.splice(e,1),this.length=this.length-1,t}removeUnordered(t){return this.removeUnorderedIndex(n(this.data,t,this.length,this._hint))}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,e=t.length,s){this.length=h(this.data,t,this.length,e,this._hint,s),this._shrink()}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,e){if(t>=this.length||e>=this.length||t===e)return;const s=this.data[t];this.data[t]=this.data[e],this.data[e]=s}sort(t){d.sort(this.data,0,this.length,t)}iterableSort(t){return d.iterableSort(this.data,0,this.length,t)}some(t,e){for(let s=0;s<this.length;++s)if(t.call(e,this.data[s],s,this.data))return!0;return!1}find(t,e){for(let s=0;s<this.length;++s){const i=this.data[s];if(t.call(e,i,s))return i}}filterInPlace(t,e){let s=0;for(let i=0;i<this._length;++i){const n=this.data[i];t.call(e,n,i,this.data)&&(this.data[i]=this.data[s],this.data[s]=n,s++)}if(this._deallocator)for(let t=s;t<this._length;t++)this.data[t]=this._deallocator(this.data[t]);return this._length=s,this._shrink(),this}forAll(t,e){const s=this.length,i=this.data;for(let n=0;n<s;++n)t.call(e,i[n],n,i)}forEach(t,e){for(let s=0;s<this.length;++s)t.call(e,this.data[s],s,this.data)}map(t,e){const s=new Array(this.length);for(let i=0;i<this.length;++i)s[i]=t.call(e,this.data[i],i,this.data);return s}reduce(t,e){let s=e;for(let e=0;e<this.length;++e)s=t(s,this.data[e],e,this.data);return s}has(t){const e=this.length,s=this.data;for(let i=0;i<e;++i)if(s[i]===t)return!0;return!1}}function m(t){t.data.length>u*t.length&&(t.data.length=Math.floor(t.length*f))}function p(t){return t}function _(t){return 1e3*t}function k(t){return t}function v(t){return.001*t}class w{constructor(t){this.phases=t,this.paused=!1,this.ticks=-1,this.removed=!1}}class A{constructor(t){this.callback=t,this.isActive=!0}remove(){this.isActive=!1}}let y=0,j=0;const b={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},x=["prepare","preRender","render","postRender","update","finish"],T=[],F=new g;class M{constructor(t){this._task=t}remove(){this._task.removed=!0}pause(){this._task.paused=!0}resume(){this._task.paused=!1}}const U={frameTasks:F,willDispatch:!1,clearFrameTasks:function(t=!1){F.forAll((t=>{t.removed=!0})),t&&q()},dispatch:z,executeFrameTasks:function(t){const e=t-y;y=t;const s=j>0?j:1e3/60,i=Math.max(0,e-s);b.time=t,b.frameDuration=s-i;for(let s=0;s<x.length;s++){const i=performance.now(),n=x[s];F.forAll((i=>{i.paused||i.removed||(0===s&&i.ticks++,i.phases[n]&&(b.elapsedFrameTime=performance.now()-t,b.deltaTime=0===i.ticks?0:e,i.phases[n]?.call(i,b)))})),O[s].record(performance.now()-i)}q(),B.record(performance.now()-t)}};function D(t){const e=new A(t);return T.push(e),U.willDispatch||(U.willDispatch=!0,s(z)),e}function S(t){const e=new w(t);return F.push(e),null==E&&(y=performance.now(),E=requestAnimationFrame(P)),new M(e)}let E=null;function I(t){j=Math.max(0,t)}function P(){const t=performance.now();E=null,E=F.length>0?requestAnimationFrame(P):null,U.executeFrameTasks(t)}const R=new g;function q(){F.forAll((t=>{t.removed&&R.push(t)})),F.removeUnorderedMany(R.data,R.length),R.clear()}function z(){for(;T.length;){const t=e(T.shift());t.isActive&&t.callback()}U.willDispatch=!1}function L(t=1,e){const i=a(),n=()=>{r(e)?i.reject(l()):0===t?i():(--t,s((()=>n())))};return n(),i.promise}function N(){const t=a(),e=S({postRender:()=>{e.remove(),D(t)}});return t.promise}const O=x.map((t=>new o(t))),B=new o("total");export{M as FrameTaskHandle,p as M,g as P,k as S,o as a,S as addFrameTask,U as debug,_ as m,O as performanceInfo,B as performanceTotal,v as s,D as schedule,I as setFrameDuration,N as waitAnimationFrame,L as waitTicks};
