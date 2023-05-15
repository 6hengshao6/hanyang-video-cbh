/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as t}from"./assets.js";import{h as s}from"./typedArrayUtil.js";const a=128e3;let i=null,e=null;async function n(){return i||(i=async function(){const a=s("esri-csp-restrictions")?await import("./libtess-asm.js").then((t=>t.l)):await import("./libtess2.js").then((t=>t.l));e=await a.load({locateFile:s=>t(`esri/core/libs/libtess/${s}`)})}()),i}function r(t,s){const i=Math.max(t.length,a);return e.triangulate(t,s,i)}export{n as l,r as t};
