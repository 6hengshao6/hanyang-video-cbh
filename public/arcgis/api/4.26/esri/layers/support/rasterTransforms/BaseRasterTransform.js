// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(d,e,a,g,l,m,n,h){a=function(c){function b(){return k.apply(this,arguments)}d._inherits(b,c);var k=d._createSuper(b);c=b.prototype;c.forwardTransform=function(f){return f};c.inverseTransform=function(f){return f};
d._createClass(b,[{key:"affectsPixelSize",get:function(){return!1}}]);return b}(a.JSONSupport);e.__decorate([g.property()],a.prototype,"affectsPixelSize",null);e.__decorate([g.property({json:{write:!0}})],a.prototype,"spatialReference",void 0);return a=e.__decorate([h.subclass("esri.layers.support.rasterTransforms.BaseRasterTransform")],a)});