// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],function(d,h,e,f){d.reshape=async function(b,a,k,c){const g=a.spatialReference;b=f.parseUrl(b);a={...b.query,f:"json",sr:JSON.stringify(g.toJSON()),target:JSON.stringify({geometryType:e.getJsonType(a),geometry:a.toJSON()}),reshaper:JSON.stringify(k.toJSON())};c=f.asValidOptions(a,c);return h(b.path+"/reshape",c).then(({data:l})=>e.fromJSON(l.geometry).set({spatialReference:g}))};Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});