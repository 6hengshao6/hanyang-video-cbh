// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],function(f,d,g,h,e){e=function(k){function a(b,c,l=h.SnappingDomain.ALL){c=m.call(this,c,l);c.intersectionPoint=b;return c}d._inherits(a,k);var m=d._createSuper(a);a.prototype.equals=function(b){return b instanceof a?g.exactEquals(this.intersectionPoint,b.intersectionPoint):!1};return d._createClass(a)}(e.SnappingHint);f.IntersectionSnappingHint=e;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});