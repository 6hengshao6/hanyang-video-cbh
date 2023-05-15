/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import r from"../../Color.js";import{i as e}from"../../chunks/maybe.js";import{seqColorSets2021 as t,seqColorSets2019 as s,seqColorSetsFromPortal as o}from"./color.js";import{c as i}from"../../chunks/colors2.js";import{c as a,g as l,a as n,f as m,b as p}from"../../chunks/symbologyUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../../chunks/utils18.js";import"../../chunks/screenUtils.js";import"../../chunks/utils13.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";const c=t.concat(s).concat(o).concat(["seq-yellow-red-purple","seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"]),h=t.concat(s).concat(o).concat(["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"]),g={color:"#4c64c9",density:.8,layerEffect:"drop-shadow(1px, 1px, 3px, rgba(0,0,0,0.75))"},u={color:"#00ffff",density:.8,layerEffect:"bloom(1.4, 0.6px, 0)"},b={flowSpeed:10,trailLength:100,trailWidth:1,trailCap:"butt",minSize:1,maxSize:4},j={flowSpeed:3,trailLength:.7,trailWidth:8,trailCap:"butt",minSize:4,maxSize:16},d=a({themeDictionary:{"flow-line":{name:"flow-line",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...b,...g},primary:"seq-lines-purple-brown",secondary:c.filter((r=>"seq-lines-purple-brown"!==r))},dark:{common:{...b,...u},primary:"seq-mentone-beach",secondary:h.filter((r=>"seq-mentone-beach"!==r))}}}},"wave-front":{name:"wave-front",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...j,...g},primary:"seq-lines-purple-brown",secondary:c.filter((r=>"seq-lines-purple-brown"!==r))},dark:{common:{...j,...u},primary:"seq-mentone-beach",secondary:h.filter((r=>"seq-mentone-beach"!==r))}}}}}});function y(r){return l(d,r)}function k(r){const t=r.theme||"flow-line",s=n({basemap:r.basemap,basemapTheme:r.basemapTheme,theme:d.get(t)});if(!s)return;const{schemesInfo:o,basemapId:i,basemapTheme:a}=s,l=o.common;return{primaryScheme:S(r,o.primary,l),secondarySchemes:o.secondary.map((e=>S(r,e,l))).filter(e),basemapId:i,basemapTheme:a}}function q(r){return m(r.name,k(r))}function f(r){return p(r.includedTags,r.excludedTags,k(r))}function w(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new r(e))),t.tags=[...t.tags],t.color&&(t.color=new r(t.color)),t}function S(e,t,s){const o=e.theme||"flow-line",a=i[t];if(!a)return;const l=a.stops;return{id:`${o}/${e.basemap}/${t}`,name:a.name,tags:[...a.tags],theme:o,color:new r(s.color),colors:l.map((e=>new r(e))),density:s.density,flowSpeed:s.flowSpeed,trailLength:"wave-front"===o&&e.hasSizeVariable?2*s.trailLength:s.trailLength,trailWidth:s.trailWidth,trailCap:s.trailCap,layerEffect:s.layerEffect,minSize:s.minSize,maxSize:s.maxSize,minOpacity:.25,maxOpacity:1}}export{w as cloneScheme,q as getSchemeByName,k as getSchemes,f as getSchemesByTag,y as getThemes};
