// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./materialUtils".split(" "),function(b,d,f,g,h,k,q,r,t,l,m){var e;b.Symbol3DMaterial=e=function(n){function c(a){a=p.call(this,a);a.color=null;return a}d._inherits(c,n);var p=d._createSuper(c);c.prototype.clone=function(){const a=
{color:h.isSome(this.color)?this.color.clone():null};return new e(a)};return d._createClass(c)}(g.JSONSupport);f.__decorate([k.property(m.colorAndTransparencyProperty)],b.Symbol3DMaterial.prototype,"color",void 0);b.Symbol3DMaterial=e=f.__decorate([l.subclass("esri.symbols.support.Symbol3DMaterial")],b.Symbol3DMaterial);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});