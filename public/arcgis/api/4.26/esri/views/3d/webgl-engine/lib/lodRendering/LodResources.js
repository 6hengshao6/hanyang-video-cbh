// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/arrayUtils","../../../../../core/maybe"],function(c,g,f,h){g=g._createClass(function(b,a=null){this.geometry=b;this.textures=a});c.LodComponentResources=g;c.geometriesFromLodLevelResources=function(b){b=b.components.map(a=>a.geometry);return f.unique(b)};c.geometriesFromLodResources=function(b){const a=[];b.levels.forEach(e=>{e.components.forEach(d=>{a.push(d.geometry)})});return f.unique(a)};c.materialsFromLodResources=
function(b){const a=[];b.levels.forEach(e=>e.components.forEach(d=>a.push(d.geometry.material)));return f.unique(a)};c.texturesFromLodResources=function(b){const a=[];b.levels.forEach(e=>{e.components.forEach(d=>{h.isSome(d.textures)&&a.push(...d.textures)})});return f.unique(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});