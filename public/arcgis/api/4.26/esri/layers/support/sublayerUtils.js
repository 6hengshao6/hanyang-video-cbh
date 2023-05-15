// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../../core/accessorSupport/PropertyOrigin"],function(f,h,g){function k(c,b){if(!c||!c.length||h.isNone(b))return!0;b=b.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(c.length>b.length)return!1;let d=0;const a=b.length;for(const {id:e}of c){for(;d<a&&b[d]!==e;)d++;if(d>=a)return!1}return!0}f.isExportDynamic=function(c,b,d){return c.some(a=>{const e=a.source;return!(!e||"map-layer"===e.type&&e.mapLayerId===a.id&&(h.isNone(e.gdbVersion)||
e.gdbVersion===d))||a.originIdOf("renderer")>g.OriginId.SERVICE||a.originIdOf("labelingInfo")>g.OriginId.SERVICE||a.originIdOf("opacity")>g.OriginId.SERVICE||a.originIdOf("labelsVisible")>g.OriginId.SERVICE})?!0:!k(c,b)};f.isSublayerOverhaul=function(c){return!!c&&c.some(b=>null!=b.minScale||b.layerDefinition&&null!=b.layerDefinition.minScale)};f.shouldWriteSublayerStructure=function(c,b,d){return b.flatten(({sublayers:a})=>a).length!==c.length||c.some(a=>a.originIdOf("minScale")>d||a.originIdOf("maxScale")>
d||a.originIdOf("renderer")>d||a.originIdOf("labelingInfo")>d||a.originIdOf("opacity")>d||a.originIdOf("labelsVisible")>d||a.originIdOf("source")>d)?!0:!k(c,b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});