// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../Extent ../Multipoint ../Point ../Polygon ../Polyline".split(" "),function(f,g,h,k,l,m){f.hydratedAdapter={convertToGEGeometry:function(a,b){if(null==b)return null;let c="cache"in b?b.cache._geVersion:void 0;null==c&&(c=a.convertJSONToGeometry(b),"cache"in b&&(b.cache._geVersion=c));return c},exportPoint:function(a,b,c){const d=a.hasZ(b),e=a.hasM(b);c=new k({x:a.getPointX(b),y:a.getPointY(b),spatialReference:c});d&&(c.z=a.getPointZ(b));e&&(c.m=a.getPointM(b));c.cache._geVersion=
b;return c},exportPolygon:function(a,b,c){a=new l({rings:a.exportPaths(b),hasZ:a.hasZ(b),hasM:a.hasM(b),spatialReference:c});a.cache._geVersion=b;return a},exportPolyline:function(a,b,c){a=new m({paths:a.exportPaths(b),hasZ:a.hasZ(b),hasM:a.hasM(b),spatialReference:c});a.cache._geVersion=b;return a},exportMultipoint:function(a,b,c){a=new h({hasZ:a.hasZ(b),hasM:a.hasM(b),points:a.exportPoints(b),spatialReference:c});a.cache._geVersion=b;return a},exportExtent:function(a,b,c){var d=a.hasZ(b);const e=
a.hasM(b);c=new g({xmin:a.getXMin(b),ymin:a.getYMin(b),xmax:a.getXMax(b),ymax:a.getYMax(b),spatialReference:c});d&&(d=a.getZExtent(b),c.zmin=d.vmin,c.zmax=d.vmax);e&&(a=a.getMExtent(b),c.mmin=a.vmin,c.mmax=a.vmax);c.cache._geVersion=b;return c}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});