// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../views/3d/environment/SunnyWeather ../../views/3d/environment/weather ../lightingTypes ../SunLighting".split(" "),function(a,c,d,k,g,h,u,l,m,n,p,q){var e;a.SlideEnvironment=e=function(r){function b(){var f=t.apply(this,arguments);f.lighting=new q;
f.weather=new m;return f}c._inherits(b,r);var t=c._createSuper(b);b.prototype.clone=function(){return new e({lighting:g.clone(this.lighting),weather:g.clone(this.weather)})};return c._createClass(b)}(k.JSONSupport);d.__decorate([h.property({types:p.lightingTypes,json:{write:!0}})],a.SlideEnvironment.prototype,"lighting",void 0);d.__decorate([h.property({types:n.weatherTypes,json:{write:!0}})],a.SlideEnvironment.prototype,"weather",void 0);a.SlideEnvironment=e=d.__decorate([l.subclass("esri.webscene.Environment")],
a.SlideEnvironment);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});