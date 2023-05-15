// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../../core/unitUtils","./spatialReferenceUtils"],function(g,h,k,l){g.getGeometryZScaler=function(m,f,e){if(h.isNone(f)||h.isNone(e)||e.vcsWkid||l.equals(f,e))return null;f=k.getMetersPerVerticalUnitForSR(f);e=k.getMetersPerVerticalUnitForSR(e);const b=f/e;if(1===b)return null;switch(m){case "point":case "esriGeometryPoint":return a=>{a&&null!=a.z&&(a.z*=b)};case "polyline":case "esriGeometryPolyline":return a=>{if(a)for(const c of a.paths)for(const d of c)2<d.length&&
(d[2]*=b)};case "polygon":case "esriGeometryPolygon":return a=>{if(a)for(const c of a.rings)for(const d of c)2<d.length&&(d[2]*=b)};case "multipoint":case "esriGeometryMultipoint":return a=>{if(a)for(const c of a.points)2<c.length&&(c[2]*=b)};case "extent":case "esriGeometryExtent":return a=>{a&&null!=a.zmin&&null!=a.zmax&&(a.zmin*=b,a.zmax*=b)};default:return null}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});