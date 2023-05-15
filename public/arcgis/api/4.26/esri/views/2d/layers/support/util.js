// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/jsonMap"],function(k,q){const r=new q.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});k.analyzeRings=function(a,p,l){const c=[],d=[];let e=0,b=0;for(const f of a){a=b;let g=f[0][0],h=f[0][1];c[b++]=g;c[b++]=h;let m=0;for(let n=1;n<f.length;++n){const t=g,u=h;g=f[n][0];h=f[n][1];m+=h*t-g*u;c[b++]=g;c[b++]=h}p(m/2);0<m?(0<a-e&&(l(e,
a,c,d),e=a),d.length=0):0>m?0<a-e?d.push(.5*(a-e)):b=a:b=a}0<b-e&&l(e,b,c,d)};k.canUseMajorityInterpolationOnDataSource=function(a){const {bandCount:p,attributeTable:l,colormap:c,pixelType:d}=a.raster.rasterInfo;return 1===p&&(null!=l||null!=c||"u8"===d||"s8"===d)};k.toJSONGeometryType=function(a){return r.toJSON(a)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});