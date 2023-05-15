// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){const g=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));f.createOrReuseTileRenderer=async function(a,h){if(!a)return null;switch(a.type){case "symbol":return new (await new Promise((b,c)=>e(["./tileRenderers/SymbolTileRenderer"],d=>b(g(d)),c))).default(h);case "heatmap":return new (await new Promise((b,c)=>e(["./tileRenderers/HeatmapTileRenderer"],d=>b(g(d)),c))).default(h)}};Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});