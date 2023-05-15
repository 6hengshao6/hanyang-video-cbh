/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as e}from"./maybe.js";import{c as t,f as n,s as r}from"./rasterProjectionHelper.js";import o from"../geometry/Point.js";const l=new Map,s=new class{constructor(e=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=e,this._interval=Math.min(e,t)}decreaseRefCount(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.refCount--,e.refCount<=0&&(r.delete(n),e.controller&&e.controller.abort()),e.refCount}return 0}getBlock(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.ts=Date.now(),e.refCount++,r.delete(n),r.set(n,e),e.block}return null}putBlock(e,t,n,r){const o=this._cachedBlocks,l=e+"/"+t;if(o.has(l)){const e=o.get(l);e.ts=Date.now(),e.refCount++}else o.set(l,{block:n,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(e,t){const n=this._cachedBlocks,r=e+"/"+t;n.has(r)&&n.delete(r)}updateMaxSize(e){this._size=e,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const e=this._cachedBlocks;this._timer=setInterval((()=>{const t=Array.from(e),n=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=n-this._duration;r++)e.delete(t[r][0]);0===e.size&&this._clearTimer()}),this._interval)}_trim(){const e=this._cachedBlocks;if(-1===this._size||this._size>=e.size)return;const t=Array.from(e);for(let n=0;n<t.length-this._size;n++)e.delete(t[n][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}};function c(e,t){return null==t?e:`${e}?sliceId=${t}`}function i(e,t){const n={extent:null,rasterInfo:t,cache:new Map},r=l.get(e);return r?(r.push(n),r.length-1):(l.set(e,[n]),0)}function a(e,t){const n=l.get(e);n&&(n[t]=null,n.some((e=>null!=e))||l.delete(e))}function u(e,t,n){const r=l.get(e);if(!r)return null==t?s.decreaseRefCount(e,n):0;if(null==t||null==r[t])return s.decreaseRefCount(e,n);const o=r[t]?.cache,c=o?.get(n);if(o&&c){if(c.refCount--,0===c.refCount){o.delete(n);for(let e=0;e<r.length;e++)r[e]?.cache.delete(n);c.controller&&c.controller.abort()}return c.refCount}return 0}function h(e,t,n){const r=l.get(e);if(!r)return null==t?s.getBlock(e,n):null;if(null==t||null==r[t]){for(let e=0;e<r.length;e++){const t=r[e]?.cache.get(n);if(t)return t.refCount++,t.block}return s.getBlock(e,n)}const o=r[t]?.cache.get(n);if(o)return o.refCount++,o.block;for(let e=0;e<r.length;e++){if(e===t||!r[e])continue;const o=r[e]?.cache,l=o?.get(n);if(o&&l)return l.refCount++,o.set(n,l),l.block}return null}function f(e,t,n,r,o=null){const c=l.get(e);if(!c)return void(null==t&&s.putBlock(e,n,r,o));if(null==t||null==c[t])return void s.putBlock(e,n,r,o);const i={refCount:1,block:r,isResolved:!1,isRejected:!1,controller:o};r.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),c[t]?.cache.set(n,i)}function m(e,t,n){const r=l.get(e);r?null!=t&&null!=r[t]?r[t]?.cache.delete(n):s.deleteBlock(e,n):null==t&&s.deleteBlock(e,n)}function d(s,c,i,a,u,h,f=null){const m=function(e,t){const n=l.get(e);return n?n[t]??null:null}(s,c);if(!m)return;const d=m.extent,{cache:x,rasterInfo:g}=m;if(d&&d.xmin===i.xmin&&d.xmax===i.xmax&&d.ymin===i.ymin&&d.ymax===i.ymax)return;a=a??0;const _=i.clone().normalize(),{spatialReference:y,transform:k}=g,p=new Set;for(let l=0;l<_.length;l++){const s=_[l];if(s.xmax-s.xmin<=a||s.ymax-s.ymin<=a)continue;let c=t(s,y,f);e(k)&&(c=k.inverseTransform(c));const i=new o({x:a,y:a,spatialReference:s.spatialReference});if(null==u&&!(u=n(i,y,s,f)))return;const{pyramidLevel:m,pyramidResolution:d,excessiveReading:x}=r(u,g,h||"closest");if(x)return;const{storageInfo:B}=g,{origin:C}=B,M={x:Math.max(0,Math.floor((c.xmin-C.x)/d.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/d.y))},R=Math.ceil((c.xmax-c.xmin)/d.x-.1),b=Math.ceil((c.ymax-c.ymin)/d.y-.1),v=m>0?B.pyramidBlockWidth:B.blockWidth,z=m>0?B.pyramidBlockHeight:B.blockHeight,w=1,j=Math.max(0,Math.floor(M.x/v)-w),I=Math.max(0,Math.floor(M.y/z)-w),T=Math.floor((M.x+R-1)/v)+w,$=Math.floor((M.y+b-1)/z)+w;for(let e=I;e<=$;e++)for(let t=j;t<=T;t++)p.add(`${m}/${e}/${t}`)}x.forEach(((e,t)=>{if(!p.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),m.extent={xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax}}export{h as a,u as b,a as c,m as d,c as g,f as p,i as r,d as u};
