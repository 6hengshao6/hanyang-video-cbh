// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/promiseUtils ../../views/2d/engine/webgl/animatedFormats/apng ../../views/2d/engine/webgl/animatedFormats/gif".split(" "),function(n,g,h,k,l,m){async function p(b,d){b=window.URL.createObjectURL(b);try{const {data:a}=await g(b,{...d,responseType:"image"});return a}catch(a){if(!k.isAbortError(a))throw new h("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);throw a;}finally{window.URL.revokeObjectURL(b)}}
async function q(b,d){const {arrayBuffer:a,mediaType:e}=await r(b,d);b="image/png"===e;if("image/gif"===e&&m.isAnimatedGIF(a))return m.parseGif(a);if(b&&l.isAnimatedPNG(a))return l.parseApng(a,d);b=new Blob([a],{type:e});return p(b,d)}async function r(b,d){if(b.includes(";base64,")){d=b.indexOf(";base64,");var a=b.indexOf(";base64,")+8;a=b.substring(a);a=atob(a);var e=new Uint8Array(a.length);for(var c=0;c<a.length;c++)e[c]=a.charCodeAt(c);a=e.buffer;b=b.substring(0,d).replace("data:","");a={arrayBuffer:a,
mediaType:b}}else try{e=await g(b,{responseType:"array-buffer",...d});c=e.data;const f=e.getHeader("Content-Type");a={arrayBuffer:c,mediaType:f}}catch(f){if(!k.isAbortError(f))throw new h("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);}return a}return function(){function b(){this._resourceMap=new Map;this._inFlightResourceMap=new Map;this.geometryEnginePromise=this.geometryEngine=null}var d=b.prototype;d.destroy=function(){this._inFlightResourceMap.clear();this._resourceMap.clear()};
d.getResource=function(a){return this._resourceMap.get(a)??null};d.fetchResource=async function(a,e){var c=this._resourceMap.get(a);if(c)return{width:c.width,height:c.height};if(c=this._inFlightResourceMap.get(a))return c.then(f=>({width:f.width,height:f.height}));c=q(a,e);this._inFlightResourceMap.set(a,c);return c.then(f=>{this._inFlightResourceMap.delete(a);this._resourceMap.set(a,f);return{width:f.width,height:f.height}},()=>({width:0,height:0}))};d.deleteResource=function(a){this._inFlightResourceMap.delete(a);
this._resourceMap.delete(a)};return n._createClass(b)}()});