/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{p as r,a as n}from"./screenUtils.js";import{l as o}from"./vec4.js";import{c as a}from"./vec4f64.js";const e=2.4;function i(t){return r(t*e)}function s(t){return n(t)/e}function f(r,n,a,e){let{color:i,ratio:s}=n,{color:f,ratio:c}=a;if(c===s){const t=1e-6;1===c?s-=t:c+=t}const u=t((e-s)/(c-s),0,1);o(r,i.toArray(),f.toArray(),u)}function c(t){const r=new Uint8ClampedArray(2048);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return r;let n=t[0],o=t[0],e=1;const i=a();for(let a=0;a<512;a++){const s=(a+.5)/512;for(;s>o.ratio&&e<t.length;)n=o,o=t[e++];f(i,n,o,s),r.set(i,4*a)}return r}function u(t,r,o,a){const{radius:e,fieldOffset:i,field:s}=r,f=Math.round(n(e)),c=new Float64Array(o*a);let u,l=Number.NEGATIVE_INFINITY;const m=function(t,r){return null!=t?"string"==typeof r?r=>-1*+r.readAttribute(t):n=>+n.readAttribute(t)+r:t=>1}(s,i),y=new Set;for(const r of t){const t=r.getCursor();for(;t.next();){const r=t.getObjectId();if(y.has(r))continue;y.add(r);const n=t.readLegacyPointGeometry(),e=128;if(n.x<-e||n.x>=o+e||n.y<-e||n.y>a+e)continue;const i=+m(t),s=Math.max(0,Math.round(n.x)-f),d=Math.max(0,Math.round(n.y)-f),g=Math.min(a,Math.round(n.y)+f),M=Math.min(o,Math.round(n.x)+f);for(let t=d;t<g;t++)for(let r=s;r<M;r++){const a=t*o+r,e=h(n.x-r,n.y-t,f);u=c[a]+=e*i,u>l&&(l=u)}}}return{matrix:c.buffer,max:l}}function l(r,n,o,a,e,i){r.canvas.width=r.canvas.height=n,r.clearRect(0,0,n,n);const s=r.getImageData(0,0,n,n);o&&a&&s.data.set(new Uint8ClampedArray(function(r,n,o,a,e){const i=new Uint32Array(r*r),s="buffer"in n?n:new Float64Array(n),f="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),c=f.length/(e-a);for(let r=0;r<s.length;r++){const n=s[r],o=Math.floor((n-a)*c);i[r]=f[t(o,0,f.length-1)]}return i.buffer}(n,o,a,e,i))),r.putImageData(s,0,0)}function h(t,r,n){const o=Math.sqrt(t**2+r**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function m(t,r){return"function"==typeof t?t:t?"string"==typeof r?r=>-1*+r[t]:n=>+n[t]+r:()=>1}export{e as M,c as a,u as b,m as c,l as d,h as e,i as g,s as k};