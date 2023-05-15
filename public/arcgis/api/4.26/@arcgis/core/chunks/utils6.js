/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../Color.js";import{isSymbol3D as t,isSymbol2D as o}from"../symbols.js";import{f as r}from"./asyncUtils.js";import"./typedArrayUtil.js";import{a as n,u as s,i as l,j as i,c as a}from"./maybe.js";import{a as c,p as u}from"./screenUtils.js";import{O as f}from"./vec3.js";import{e as m}from"./jsonUtils.js";import{g as y}from"./assets.js";import p from"../request.js";import{I as h}from"./ItemCache.js";import{getCIMSymbolColor as b}from"../symbols/support/cimSymbolUtils.js";import{S as d}from"./Symbol3DMaterial.js";const w="picture-fill",g="simple-fill",j="simple-line",k="simple-marker",L="text",x="cim",S=new h(1e3);function z(e){const t=e.style;let o=null;if(e)switch(e.type){case k:"cross"!==t&&"x"!==t&&(o=e.color);break;case g:"solid"===t?o=e.color:"none"!==t&&(o={type:"pattern",x:0,y:0,src:y(`esri/symbols/patterns/${t}.png`),width:5,height:5});break;case w:o={type:"pattern",src:e.url,width:c(e.width)*e.xscale,height:c(e.height)*e.yscale,x:c(e.xoffset),y:c(e.yoffset)};break;case L:o=e.color;break;case x:o=b(e)}return o}function v(e,t){const o=e+"-"+t;return void 0!==S.get(o)?Promise.resolve(S.get(o)):p(e,{responseType:"image"}).then((e=>{const r=e.data,n=r.naturalWidth,s=r.naturalHeight,l=document.createElement("canvas");l.width=n,l.height=s;const i=l.getContext("2d");i.fillStyle=t,i.fillRect(0,0,n,s),i.globalCompositeOperation="destination-in",i.drawImage(r,0,0);const a=l.toDataURL();return S.put(o,a),a}))}function U(e){if(!e)return null;let t=null;switch(e.type){case g:case w:case k:t=U(e.outline);break;case j:{const o=c(e.width);null!=e.style&&"none"!==e.style&&0!==o&&(t={color:e.color,style:C(e.style),width:o,cap:e.cap,join:"miter"===e.join?c(e.miterLimit):e.join});break}default:t=null}return t}const C=(()=>{const e={};return t=>{if(e[t])return e[t];const o=t.replace(/-/g,"");return e[t]=o,o}})(),I=new e([128,128,128]),E=new e("white");function O(e){if(!e)return 0;if(t(e)){const t=function(e){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const o=e.symbolLayers.getItemAt(t-1);return"outline"in o?i(o,"outline","size"):void 0}(e);return l(t)?t:0}return u(U(e)?.width)}function R(e){if(n(e)||!("symbolLayers"in e)||n(e.symbolLayers))return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function A(e){return a(e.resource).href}function D(r,n){if(!r)return null;let i=null;return t(r)?i=function(t){const o=t.symbolLayers;if(!o)return null;let r=null;return o.forEach((e=>{"object"===e.type&&null!=e.resource?.href||(r="water"===e.type?s(e.color):l(e.material)?s(e.material.color):null)})),r?new e(r):null}(r):o(r)&&(i=r.color?new e(r.color):null),i?M(i,n):null}function M(t,o){if(null==o||null==t)return t;const r=t.toRgba();return r[3]=r[3]*o,new e(r)}function q(r,s,i){r&&(s||null!=i)&&(s&&(s=new e(s)),t(r)?function(e,t,o){const r=e.symbolLayers;if(!r)return;const s=e=>{const r=l(e)?e:null;return M(t=t??r??(null!=o?E:null),o)};r.forEach((e=>{if("object"!==e.type||null==e.resource?.href||t)if("water"===e.type)e.color=s(e.color);else{const t=l(e.material)?e.material.color:null,r=s(t);n(e.material)?e.material=new d({color:r}):e.material.color=r,null!=o&&"outline"in e&&l(e.outline)&&l(e.outline.color)&&(e.outline.color=M(e.outline.color,o))}}))}(r,s,i):o(r)&&function(e,t,o){(t=t??e.color)&&(e.color=M(t,o)),null!=o&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=M(e.outline.color,o))}(r,s,i))}function H(e){for(const t of e)if("number"==typeof t)return t;return null}function J(e,t,o){for(let r=0;r<3;r++){const n=e[r];switch(n){case"symbol-value":{const e=o[r];return null!=e?e/t[r]:1}case"proportional":break;default:if(n&&t[r])return n/t[r]}}return 1}function N(e,t,o,r){switch(e){case"proportional":return o*r;case"symbol-value":return null!=t?t:o;default:return e}}async function P(e,s){if(e&&s)return t(e)?async function(e,t){const o=e.symbolLayers;o&&await r(o,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":!function(e,t){const o=H(t);l(o)&&(e.size=o)}(e,t);break;case"path":!function(e,t){const o=J(t,f,[e.width,void 0,e.height]);e.width=N(t[0],e.width,1,o),e.height=N(t[2],e.height,1,o)}(e,t);break;case"object":await async function(e,t){const{resourceSize:o,symbolSize:r}=await async function(e){const t=await import("./symbolLayerUtils.js"),o=await t.computeObjectLayerResourceSize(e,10),{width:r,height:n,depth:s}=e,l=[r,s,n];let i=1;for(let e=0;e<3;e++){const t=l[e];if(null!=t){i=t/o[e];break}}for(let e=0;e<3;e++)null==l[e]&&(l[e]=o[e]*i);return{resourceSize:o,symbolSize:l}}(e),n=J(t,o,r);e.width=N(t[0],r[0],o[0],n),e.depth=N(t[1],r[1],o[1],n),e.height=N(t[2],r[2],o[2],n)}(e,t)}}(e,t)))}(e,s):void(o(e)&&function(e,t){const o=H(t);if(!n(o))switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=o,e.height=o*t):(e.width=o*t,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}(e,s))}function T(e,r,n){if(e&&null!=r)if(t(e)){const t=e.symbolLayers;t&&t.forEach((e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=r;break;case"roll":e.roll=r;break;default:e.heading=r}}))}else o(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=r))}function W(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return m(t)}function $(e){return l(e)&&"polygon-3d"===e.type&&e.symbolLayers.some((e=>"extrude"===e.type))}async function B(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}export{P as a,T as b,q as c,W as d,U as e,z as f,D as g,B as h,M as i,I as j,v as k,R as l,C as m,A as n,O as o,$ as s};
