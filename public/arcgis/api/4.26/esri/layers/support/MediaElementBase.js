// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Identifiable ../../core/JSONSupport ../../core/Loadable ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./ControlPointsGeoreference ./CornersGeoreference ./ExtentAndRotationGeoreference ./GeoreferenceBase".split(" "),function(e,c,a,k,l,f,g,v,w,m,n,h,p,q,
r){g={key:"type",base:r,typeMap:{"control-points":h,corners:p,"extent-and-rotation":q}};a=function(t){function d(b){b=u.call(this,b);b.georeference=null;b.opacity=1;return b}e._inherits(d,t);var u=e._createSuper(d);d.prototype.readGeoreference=function(b){return h.fromJSON(b)};return e._createClass(d)}(a.NumericIdentifiableMixin(k.JSONSupportMixin(l)));c.__decorate([f.property({types:g,json:{write:!0}})],a.prototype,"georeference",void 0);c.__decorate([m.reader("georeference")],a.prototype,"readGeoreference",
null);c.__decorate([f.property()],a.prototype,"opacity",void 0);return a=c.__decorate([n.subclass("esri.layers.support.MediaElementBase")],a)});