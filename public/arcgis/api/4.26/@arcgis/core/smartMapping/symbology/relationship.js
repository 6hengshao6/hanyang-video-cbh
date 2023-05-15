/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../../Color.js";import{clone as r}from"../../core/lang.js";import{i as o}from"../../chunks/maybe.js";import{c as s}from"../../chunks/colors2.js";import{c as t,g as a,a as i,f as n,b as l}from"../../chunks/symbologyUtils.js";import{t as p,h as m}from"../../chunks/utils18.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/utils13.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/screenUtils.js";const c={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},u={lightBasemaps:{primary:"relationship-blue-orange-brown",secondary:["relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green","relationship-blue-red-pink","relationship-blue-green-brightgreen","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal"]},darkBasemaps:{primary:"relationship-blue-green-brightgreen",secondary:["relationship-blue-red-pink","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal","relationship-blue-orange-brown","relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green"]}},h="#aaaaaa",d=t({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",schemes:{point:{light:{common:{noDataColor:h,outline:c.light,size:"8px"},primary:u.lightBasemaps.primary,secondary:u.lightBasemaps.secondary},dark:{common:{noDataColor:h,outline:c.darker,size:"8px"},primary:u.darkBasemaps.primary,secondary:u.darkBasemaps.secondary}},polyline:{light:{common:{noDataColor:h,width:"2px"},primary:u.lightBasemaps.primary,secondary:u.lightBasemaps.secondary},dark:{common:{noDataColor:h,width:"2px"},primary:u.darkBasemaps.primary,secondary:u.darkBasemaps.secondary}},polygon:{light:{common:{noDataColor:h,outline:c.light,fillOpacity:.8},primary:u.lightBasemaps.primary,secondary:u.lightBasemaps.secondary},dark:{common:{noDataColor:h,outline:c.dark,fillOpacity:.8},primary:u.darkBasemaps.primary,secondary:u.darkBasemaps.secondary}}}}}});function g(e){return a(d,e)}function y(e){const r=i({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:d.get("default")});if(!r)return;const{schemesInfo:s,basemapId:t,basemapTheme:a}=r,n={...e,basemap:t};return{primaryScheme:F(n,s.primary,s.common),secondarySchemes:s.secondary.map((e=>F(n,e,s.common))).filter(o),basemapId:t,basemapTheme:a}}function k(e){return n(e.name,y(e))}function j(e){return l(e.includedTags,e.excludedTags,y(e))}function b(r){if(!r)return;const o={...r};return o.colorsForClassBreaks=o.colorsForClassBreaks.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>r.map((r=>new e(r)))))}))),o.tags=[...o.tags],o.noDataColor&&(o.noDataColor=new e(o.noDataColor)),"outline"in o&&o.outline&&(o.outline={color:o.outline.color&&new e(o.outline.color),width:o.outline.width}),o}function w(e,o){e=r(e);let s=[];const t=(o||"HH").split(""),a=t[0],i=t[1];"L"===a&&e.reverse();const n="H"===i;return e.forEach((e=>{n&&e.reverse(),s=s.concat(e)})),s}function f(r,o,s){let t;return r.colorsForClassBreaks.some((e=>(e.numClasses===o&&(t=e.colors),!!t))),t=t?.map((r=>r.map((r=>new e(r))))),t?w(t,s):null}function C(e,r){const o=r?e:b(e);return o.colorsForClassBreaks.forEach((e=>{const r=e.colors.reverse(),o=[];for(let s=0;s<e.numClasses;s++){const e=[];r.forEach((r=>{e.push(r[s])})),o.push(e)}e.colors=o})),o}function B(e){const r=e.theme||"default",o=e.geometryType,s=e.colors,t=e.numClasses,a=d.get(r);if(!a)return[];const i=a.supportedBasemaps,n=[];return i.forEach((e=>{const a=y({theme:r,basemap:e,geometryType:o});if(a){let e=v(a.primaryScheme,s,t);e&&n.push(e),a.secondarySchemes.forEach((r=>{e=v(r,s,t),e&&n.push(e)}))}})),n}function D(e,r,o,s){let t;const a=f(e,o,s);return a&&1===m(r,a)&&(t=e),t}function U(e,r,o,s){let t,a=1;do{t=D(e,r,o,s),t||(e=C(e),a++)}while(!t&&a<=4);return t}function v(e,r,o){return U(e,r,o,"HH")||U(e,r,o,"HL")||U(e,r,o,"LH")||U(e,r,o,"LL")}function F(r,o,t){const a="mesh"!==r.geometryType&&r.worldScale?r.view:null,i=s[o],n=r.theme||"default";if(!i)return;const l=n+"/"+r.basemap+"/"+o,m=[];for(const e in i)if("stops"!==e&&"name"!==e&&"tags"!==e){const r=+e,o=i[e];m.push({numClasses:r,colors:o})}switch(r.geometryType){case"point":case"multipoint":{const r=t;return function(r,o){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:P(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},size:o?p(r.size,o):r.size,opacity:r.opacity}}({id:l,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:1,outline:r.outline,size:r.size},a)}case"polyline":{const r=t;return function(r,o){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:P(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),opacity:r.opacity,width:o?p(r.width,o):r.width}}({id:l,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:1,width:r.width},a)}case"polygon":{const r=t;return{id:(c={id:l,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:r.fillOpacity,outline:r.outline}).id,name:c.name,tags:[...c.tags],colorsForClassBreaks:P(c.colorsForClassBreaks),noDataColor:new e(c.noDataColor),outline:{color:new e(c.outline.color),width:c.outline.width},opacity:c.opacity}}case"mesh":{const r=t;return function(r){return{id:r.id,name:r.name,tags:[...r.tags],colorsForClassBreaks:P(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),opacity:r.opacity}}({id:l,name:i.name,tags:i.tags,colorsForClassBreaks:m,noDataColor:r.noDataColor,opacity:r.fillOpacity})}}var c}function P(r){return r.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>r.map((r=>new e(r)))))})))}export{b as cloneScheme,w as flatten2DArray,C as flipColors,f as getColors,B as getMatchingSchemes,k as getSchemeByName,y as getSchemes,j as getSchemesByTag,g as getThemes};
