// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,b,g,a,h,d,n,p,q,k){a=function(l){function f(){var c=m.apply(this,arguments);c.color=new g([255,0,0,.7]);c.value=h.convertTime(4,"hours","milliseconds");c.minValue=0;c.maxValue=h.convertTime(8,
"hours","milliseconds");return c}e._inherits(f,l);var m=e._createSuper(f);return e._createClass(f)}(a);b.__decorate([d.property({type:g})],a.prototype,"color",void 0);b.__decorate([d.property()],a.prototype,"value",void 0);b.__decorate([d.property()],a.prototype,"minValue",void 0);b.__decorate([d.property()],a.prototype,"maxValue",void 0);return a=b.__decorate([k.subclass("esri.widgets.ShadowCast.ThresholdOptions")],a)});