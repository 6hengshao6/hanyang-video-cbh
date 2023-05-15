// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(g,d,b,e,q,r,t,k,l){b=function(m){function f(a){a=n.call(this,a);a.geometries=[];a.outSpatialReference=null;a.transformation=null;a.transformForward=null;return a}g._inherits(f,m);var n=
g._createSuper(f);f.prototype.toJSON=function(){const a=this.geometries.map(p=>p.toJSON()),h=this.geometries[0],c={};c.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON());c.inSR=h.spatialReference.wkid||JSON.stringify(h.spatialReference.toJSON());c.geometries=JSON.stringify({geometryType:l.getJsonType(h),geometries:a});this.transformation&&(c.transformation=this.transformation.wkid||JSON.stringify(this.transformation));null!=this.transformForward&&(c.transformForward=
this.transformForward);return c};return g._createClass(f)}(b.JSONSupport);d.__decorate([e.property()],b.prototype,"geometries",void 0);d.__decorate([e.property({json:{read:{source:"outSR"}}})],b.prototype,"outSpatialReference",void 0);d.__decorate([e.property()],b.prototype,"transformation",void 0);d.__decorate([e.property()],b.prototype,"transformForward",void 0);return b=d.__decorate([k.subclass("esri.rest.support.ProjectParameters")],b)});