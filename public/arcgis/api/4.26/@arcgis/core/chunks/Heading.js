/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{c as i}from"./widgetUtils.js";import{t as r}from"./jsxFactory.js";const s={heading:"esri-widget__heading"};function e({level:t,class:e,...n},o){const c=a(t);return r(`h${c}`,{...n,class:i(s.heading,e),role:"heading","aria-level":String(c)},o)}function a(i){return t(Math.ceil(i),1,6)}function n(t,i=1){return a(t+i)}export{e as H,n as i};
