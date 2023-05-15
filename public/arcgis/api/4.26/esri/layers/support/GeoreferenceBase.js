// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/Logger ../../core/maybe ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/Error ../../core/accessorSupport/decorators/subclass ../../geometry/projection".split(" "),function(d,h,b,k,l,r,t,u,v,m,n){b=function(p){function c(){return q.apply(this,arguments)}d._inherits(c,p);var q=d._createSuper(c);c.prototype.projectOrWarn=function(a,e){if(l.isNone(a))return a;const {geometry:f,
pending:g}=n.projectOrLoad(a,e);return g?null:g||f?f:(k.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:a,sourceSpatialReference:a.spatialReference,targetSpatialReference:e}),null)};return d._createClass(c)}(b.Clonable);return b=h.__decorate([m.subclass("esri.layers.support.GeoreferenceBase")],b)});