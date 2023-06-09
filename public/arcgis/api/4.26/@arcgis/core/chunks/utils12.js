/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{q as r}from"./featureQueryAll.js";import o from"../portal/PortalItem.js";import a from"../rest/support/FeatureSet.js";function n(e,t){const r=[],o=new Map;for(const r of t){const t=e.getLayerIdBySourceId(r.networkSourceId);if(null==t)continue;let a=o.get(t);void 0===a&&(a=[]),a.push(r.objectId),o.set(t,a)}const a=e.featureServiceUrl;return o.forEach(((e,t)=>r.push({layerUrl:`${a}/${t}`,objectIds:e}))),r}async function s(e){const t=e.layers,o=e.layerInfos,n=e.returnGeometry||!1,s=e.outSpatialReference;return await Promise.all(t.map((e=>e.load()))),(await Promise.all(t.map((async e=>{const t=o.find((t=>t.layerUrl===e.parsedUrl?.path));if(!t||!t.objectIds?.length)return{layer:e,featureSet:void 0};const l=e.createQuery();l.returnGeometry=n,l.outFields=t.outFields||["*"],l.outSpatialReference=s,l.gdbVersion=e.gdbVersion,l.objectIds=t.objectIds;const i=a.fromJSON(await r(e,l));return{layer:e,featureSet:i}})))).filter((e=>void 0!==e.featureSet))}async function l(e,t){if("Utility Network Layer"===e){const{default:e}=await import("../networks/UtilityNetwork.js");return new e({layerUrl:t})}return null}async function i(r){let a="portalItem"in r?r:{portalItem:r};!a.portalItem||a.portalItem instanceof o||(a={...a,portalItem:new o(a.portalItem)});const n=a.portalItem;if(await n.load(),"Feature Service"!==n.type)throw new t("portal:unknown-item-type","Unknown item type '${type}'",{type:n.type});const s=n.url,i=await e(s,{responseType:"json",query:{f:"json"}}),u="Network Layer";if(i.data.type&&i.data.type.includes(u))return l(i.data.type,s);if(i.data.layers){const e=i.data.layers.find((e=>e.type.includes(u)));if(e){const t=`${s}/${e.id}`;return l(e.type,t)}}return null}export{s as a,n as g,i as n};
