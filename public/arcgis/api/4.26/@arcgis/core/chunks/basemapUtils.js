/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e,{e as r}from"../Basemap.js";import a from"../config.js";import t from"../core/Collection.js";import{L as n}from"./Logger.js";import{a as s,i}from"./maybe.js";import{Url as l,makeAbsolute as c,normalize as u}from"../core/urlUtils.js";import{e as o}from"./ensureType.js";const f=n.getLogger("esri.support.basemapUtils");function y(){return{}}function p(e){for(const r in e){const a=e[r];!1===a?.destroyed&&a.destroy(),delete e[r]}}function d(t,n){let s;if("string"==typeof t){if(!(t in r)){const e=Object.entries(r).filter((([e,r])=>a.apiKey&&!r.classic||!a.apiKey&&r.classic&&!r.deprecated)).map((([e])=>`"${e}"`)).join(", ");return f.warn(`Unable to find basemap definition for: ${t}. Try one of these: ${e}`),null}n&&(s=n[t]),s||(s=e.fromId(t),n&&(n[t]=s))}else s=o(e,t);return s?.destroyed&&(f.warn("The provided basemap is already destroyed",{basemap:s}),s=null),s}function m(r,a=null){const t=d(r);if(!t)return null;const n=new e({id:t.id,title:t.title,baseLayers:t.baseLayers.slice(),referenceLayers:t.referenceLayers.slice()});return a&&(n.baseLayers=g(n.baseLayers,a.baseLayers),n.referenceLayers=g(n.referenceLayers,a.referenceLayers)),n.load().catch((()=>{})),n.portalItem=t.portalItem,n}function b(e){let a=null;const t=w(e),n=!t?.baseLayers.length;for(const e in r){const s=U(t,x(r[e]),{mustMatchReferences:n});if("equal"===s){a=e;break}"base-layers-equal"===s&&(a=e)}return a}function L(e,r){return e===r||"equal"===U(w(e),w(r),{mustMatchReferences:!0})}function g(e,r){const a=new t;return e.forEach((e=>{const t=r.find((r=>k(q(e),q(r))))||e;a.includes(t)?a.push(e):a.push(t)})),a}function v(e){return!!e?.baseLayers.concat(e.referenceLayers).some(S)}function S(e){if(I(e.url))return!0;if("vector-tile"===e.type)for(const r in e.sourceNameToSource){const a=e.sourceNameToSource[r];if(I(a?.sourceUrl))return!0}return!1}function h(e,r){if(s(r)||s(e))return{spatialReference:null,updating:!1};if("not-loaded"===r.loadStatus)return r.load(),{spatialReference:null,updating:!0};if(r.spatialReference)return{spatialReference:r.spatialReference,updating:!1};if(0===r.baseLayers.length)return{spatialReference:null,updating:!1};const a=r.baseLayers.getItemAt(0);switch(a.loadStatus){case"not-loaded":a.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}const t=(("supportedSpatialReferences"in a?a.supportedSpatialReferences:null)||["tileInfo"in a?a.tileInfo?.spatialReference:a.spatialReference]).filter(Boolean),n=e.spatialReference;return n?{spatialReference:t.find((e=>n.equals(e)))??t[0]??null,updating:!1}:{spatialReference:t[0],updating:!1}}const R=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function I(e){if(!e)return!1;const r=new l(c(e));return!!r.authority&&R.test(r.authority)}function w(e){return e?!e.loaded&&e.resourceInfo?x(e.resourceInfo.data):{baseLayers:T(e.baseLayers),referenceLayers:T(e.referenceLayers)}:null}function T(e){return(t.isCollection(e)?e.toArray():e).map(q)}function q(e){return{type:e.type,url:$("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl||""),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||!i(e.sublayers)?void 0:e.sublayers?.map((e=>({id:e.id,visible:e.visible}))),activeLayerId:"wmts"===e.type?e.activeLayer?.id:void 0}}function x(e){return e?{baseLayers:j((e.baseMapLayers??[]).filter((e=>!e.isReference))),referenceLayers:j((e.baseMapLayers??[]).filter((e=>e.isReference)))}:null}function j(e){return e.map((e=>function(e){let r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:$(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e)))}function U(e,r,a){return null!=e!=(null!=r)?"not-equal":e&&r?M(e.baseLayers,r.baseLayers)?M(e.referenceLayers,r.referenceLayers)?"equal":a.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function M(e,r){if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(!k(e[a],r[a]))return!1;return!0}function k(e,r){if(e.type!==r.type||"scene"===e.type||e.url!==r.url||e.minScale!==r.minScale||e.maxScale!==r.maxScale||e.visible!==r.visible||e.opacity!==r.opacity)return!1;if(i(e.activeLayerId)||i(r.activeLayerId))return e.activeLayerId===r.activeLayerId;if(i(e.sublayers)||i(r.sublayers)){if(s(e.sublayers)||s(r.sublayers)||e.sublayers.length!==r.sublayers.length)return!1;for(let a=0;a<e.sublayers.length;a++){const t=e.sublayers.at(a),n=r.sublayers.at(a);if(t?.id!==n?.id||t?.visible!==n?.visible)return!1}}return!0}function $(e){return e?u(e).replace(/^\s*https?:/i,"").toLowerCase():""}export{m as a,L as b,y as c,p as d,d as e,h as f,b as g,v as h,S as i};
