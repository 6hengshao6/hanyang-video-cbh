// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(d,b,g,a,e,h,n,p,k){a=function(l){function f(){var c=m.apply(this,arguments);c.value=null;c.label=null;c.color=null;return c}d._inherits(f,l);var m=d._createSuper(f);return d._createClass(f)}(a.JSONSupport);
b.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([e.property({type:g,json:{type:[h.Integer],write:!0}})],a.prototype,"color",void 0);return a=b.__decorate([k.subclass("esri.renderers.support.ColormapInfo")],a)});