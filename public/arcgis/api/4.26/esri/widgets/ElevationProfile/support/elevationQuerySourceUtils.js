// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../Ground","../../../core/arrayUtils","../../../core/maybe","../../../core/unitUtils"],function(c,h,d,b,k){function e(a){if(b.isNone(a))return null;if(a instanceof h)return f(a);a=a.tileInfo;if(b.isNone(a))return null;const g=d.last(a.lods);return b.isNone(g)?null:g.resolution*k.getMetersPerUnitForSR(a.spatialReference)}function f(a){if(b.isNone(a))return null;a=a.layers.items.map(l).filter(b.isSome);return d.min(a)??null}function l(a){return a&&"tileInfo"in a?e(a):null}c.getGroundMinDemResolution=
f;c.getQuerySourceMinDemResolution=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});