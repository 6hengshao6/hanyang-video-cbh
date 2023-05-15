/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import o from"../../Color.js";import{i as t}from"../../chunks/maybe.js";import{c as r,g as s,a as i}from"../../chunks/symbologyUtils.js";import{t as e}from"../../chunks/utils18.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../../chunks/utils13.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/screenUtils.js";const c=r({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",schemes:{point:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},polyline:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygon:{light:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{size:"12px",color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{size:"12px",color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}}}}}});function p(o){return s(c,o)}function l(o){const r=i({basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme,theme:c.get("default")});if(!r)return;const{schemesInfo:s,basemapId:e,basemapTheme:p}=r;return{primaryScheme:m(o,s.primary),secondarySchemes:s.secondary.map((t=>m(o,t))).filter(t),basemapId:e,basemapTheme:p}}function n(t){if(!t)return;const r={...t};return r.color&&(r.color=new o(r.color)),"outline"in r&&r.outline&&(r.outline={color:r.outline.color&&new o(r.outline.color),width:r.outline.width}),r}function m(t,r){const s="mesh"!==t.geometryType&&t.worldScale?t.view:null;switch(t.geometryType){case"point":case"multipoint":{const t=r;return function(t,r){return{color:new o(t.color),outline:{color:new o(t.outline.color),width:t.outline.width},size:r?e(t.size,r):t.size,opacity:1}}({color:t.color,outline:{...t.outline},size:t.size},s)}case"polyline":{const t=r;return function(t,r){return{color:new o(t.color),width:r?e(t.width,r):t.width,opacity:1}}({color:t.color,width:t.width},s)}case"polygon":{const t=r;return function(t,r){return{color:new o(t.color),outline:{color:new o(t.outline.color),width:t.outline.width},size:r?e(t.size,r):t.size,opacity:t.opacity}}({size:t.size,color:t.color,outline:{...t.outline},opacity:t.opacity},s)}case"mesh":{const t=r;return function(t){return{color:new o(t.color),opacity:t.opacity}}({color:t.color,opacity:t.opacity})}}}export{n as cloneScheme,l as getSchemes,p as getThemes};
