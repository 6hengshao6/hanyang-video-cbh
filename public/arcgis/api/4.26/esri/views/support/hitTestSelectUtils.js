// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(c,d){function e(a){return d.isSome(a)&&"graphic"===a.type}c.filterGraphicHits=function(a){return a.filter(e)};c.findFirstGraphicHit=function(a){return a.find(e)??null};c.hitTestSelectSimilarDistance=async function(a,b){if("2d"===a.type)return a.hitTest(b);a=await a.hitTest(b);if(0===a.results.length)return a;const f=1.05*(d.unwrap(a.results[0].distance)??0);b=a.results.findIndex(g=>(g.distance??0)>f);-1!==b&&(a.results=a.results.slice(0,b));return a};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});