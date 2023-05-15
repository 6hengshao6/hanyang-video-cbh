/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as n,i as e}from"./maybe.js";import{watch as t,syncAndInitial as o}from"../core/reactiveUtils.js";import{f as r,k as a,H as s}from"./vec3.js";import{m as i}from"./dehydratedFeatures.js";import{V as u}from"./InputManager.js";import{a as l}from"./keybindings.js";import{c,f,a as p}from"./elevationInfoUtils.js";function d(n){return n}function g(n){return a(n)}function m(n,e,t){return r(n,e,t)}function E(e,t,o){return n(e)?null:y(o.coordinateHelper.vectorToDehydratedPoint(e,T),t,o)}function y(e,t,o){if(n(e))return null;if(n(t))return r(e.x,e.y,e.z??0);if("2d"===t.type)return r(e.x,e.y,0);const{elevationInfo:a}=o,s=c(t,e,a,f)??0;return r(e.x,e.y,s)}function v(e,t,{z:o,m:r,spatialReference:a,elevationInfo:s}){if(null==o&&null==r){const n=i(e[0],e[1],void 0,a);return null!=r&&(n.m=r,n.hasM=!0),n}if(n(t)||"2d"===t.type){const n=i(e[0],e[1],o,a);return null!=r&&(n.m=r,n.hasM=!0),n}const u=p(t,e,a,f,s)??0,l=i(e[0],e[1],u,a);return null!=r&&(l.m=r,l.hasM=!0),l}function R(n,e){return i(n[0],n[1],n[2],e)}const T=i(0,0,0,null);function h(n,e){const t=n.x-e.x,o=n.y-e.y;return t*t+o*o}function N(n,e){return Math.sqrt(h(n,e))}function O(n,e){e.sort(((e,t)=>s(e.targetPoint,n)-s(t.targetPoint,n)))}var j;function x({point:n,distance:t,types:o,coordinateHelper:{spatialReference:r}},a,s){return{point:i(n[0],n[1],n[2],r.toJSON()),mode:a,distance:t,types:o,query:e(s)?s.toJSON():{where:"1=1"}}}function b(n,e,t){return{left:E(n.leftVertex.pos,e,t),right:E(n.rightVertex.pos,e,t)}}function k(n){return n.createQuery()}function H(n,r=(()=>{})){const a=t((()=>({view:n.view,snappingOptions:n.snappingOptions})),(({view:t,snappingOptions:o})=>{const a="snapping-toggle",s=u.TOOL;if(n.removeHandles(a),t&&e(o)){const e=[t.on("key-down",(n=>{n.key!==l.toggle||n.repeat||(o.enabledToggled=!0,r())}),s),t.on("key-up",(n=>{n.key===l.toggle&&(o.enabledToggled=!1,r())}),s),t.on("pointer-move",(n=>{const e=n.native.ctrlKey;o.enabledToggled!==e&&(o.enabledToggled=e,r())}),s)];n.addHandles(e,a)}}),o);n.addHandles(a)}!function(n){n[n.TARGET=0]="TARGET",n[n.REFERENCE=1]="REFERENCE",n[n.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"}(j||(j={}));export{j as L,R as a,O as b,m as c,E as d,N as e,h as f,b as g,d as h,v as i,g as j,x as k,k as m,y as p,H as s};