/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{u as t,i as n}from"./maybe.js";async function s(n,s){if("2d"===n.type)return n.hitTest(s);const r=await n.hitTest(s);if(0===r.results.length)return r;const i=r.results[0],u=(t(i.distance)??0)*(1+e),a=r.results.findIndex((t=>(t.distance??0)>u));return-1!==a&&(r.results=r.results.slice(0,a)),r}const e=.05;function r(t){return n(t)&&"graphic"===t.type}function i(t){return t.find(r)??null}function u(t){return t.filter(r)}export{i as a,u as f,s as h};
