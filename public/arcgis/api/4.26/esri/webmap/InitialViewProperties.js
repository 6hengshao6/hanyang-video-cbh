// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Viewpoint ../core/Accessor ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/SpatialReference ../webdoc/RangeInfo ./background/ColorBackground".split(" "),function(f,c,h,a,k,d,t,l,m,n,p){var g;a=g=function(q){function e(b){b=r.call(this,b);b.background=null;b.rangeInfo=null;b.spatialReference=null;b.viewpoint=null;return b}f._inherits(e,
q);var r=f._createSuper(e);e.prototype.clone=function(){return new g(k.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))};return f._createClass(e)}(a);c.__decorate([d.property({type:p})],a.prototype,"background",void 0);c.__decorate([d.property({type:n})],a.prototype,"rangeInfo",void 0);c.__decorate([d.property({type:m})],a.prototype,"spatialReference",void 0);c.__decorate([d.property({type:h})],a.prototype,"viewpoint",void 0);
return a=g=c.__decorate([l.subclass("esri.webmap.InitialViewProperties")],a)});