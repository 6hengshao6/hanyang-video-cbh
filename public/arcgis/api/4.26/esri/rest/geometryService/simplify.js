// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","./utils"],function(c,f,g,h,d){c.simplify=async function(a,b,k){const e="string"===typeof a?g.urlToObject(a):a;a=b[0].spatialReference;const l=h.getJsonType(b[0]);b={...k,query:{...e.query,f:"json",sr:a.wkid??JSON.stringify(a),geometries:JSON.stringify(d.encodeGeometries(b))}};({data:b}=await f(e.path+"/simplify",b));return d.decodeGeometries(b.geometries,l,a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});