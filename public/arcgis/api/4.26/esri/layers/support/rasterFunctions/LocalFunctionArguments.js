// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./BaseFunctionArguments".split(" "),function(g,b,l,h,a,m,n,p){var k;a=k=function(d){function e(){var c=q.apply(this,arguments);c.rasters=[];c.processAsMultiband=!0;return c}g._inherits(e,d);var q=g._createSuper(e);d=e.prototype;
d.writeRasters=function(c,r){r.rasters=c.map(f=>"number"===typeof f||"string"===typeof f?f:f.toJSON())};d.clone=function(){return new k({operation:this.operation,processAsMultiband:this.processAsMultiband,rasters:l.clone(this.rasters)})};return g._createClass(e)}(p);b.__decorate([h.property({json:{write:!0}})],a.prototype,"operation",void 0);b.__decorate([h.property({json:{write:!0}})],a.prototype,"rasters",void 0);b.__decorate([n.writer("rasters")],a.prototype,"writeRasters",null);b.__decorate([h.property({json:{write:!0}})],
a.prototype,"processAsMultiband",void 0);return a=k=b.__decorate([m.subclass("esri.layers.support.rasterFunctions.LocalFunctionArguments")],a)});