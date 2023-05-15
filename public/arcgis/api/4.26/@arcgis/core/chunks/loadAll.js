/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{m as o,r as a}from"./asyncUtils.js";import r from"../core/Collection.js";import l from"../core/Loadable.js";import{a as t}from"./maybe.js";async function s(o,a){return await o.load(),n(o,a)}async function n(s,n){const i=[],c=(...o)=>{for(const a of o)t(a)||(Array.isArray(a)?c(...a):r.isCollection(a)?a.forEach((o=>c(o))):l.isLoadable(a)&&i.push(a))};n(c);let e=null;if(await o(i,(async o=>{const r=await a((l=o,"loadAll"in l&&"function"==typeof l.loadAll?o.loadAll():o.load()));var l;!1!==r.ok||e||(e=r)})),e)throw e.error;return s}export{n as a,s as l};
