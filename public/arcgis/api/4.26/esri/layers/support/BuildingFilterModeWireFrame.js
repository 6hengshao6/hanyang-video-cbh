// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./BuildingFilterMode ../../symbols/edges/utils".split(" "),function(c,d,g,h,a,k,l,m,n){var e;a=e=function(p){function b(){var f=q.apply(this,arguments);f.type="wire-frame";f.edges=null;return f}c._inherits(b,p);var q=c._createSuper(b);
b.prototype.clone=function(){return new e({edges:g.clone(this.edges)})};return c._createClass(b)}(m);d.__decorate([k.enumeration({wireFrame:"wire-frame"})],a.prototype,"type",void 0);d.__decorate([h.property(n.symbol3dEdgesProperty)],a.prototype,"edges",void 0);return a=e=d.__decorate([l.subclass("esri.layers.support.BuildingFilterModeWireFrame")],a)});