// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./widgets/FloorFilter ./widgets/Range ./widgets/TimeSlider".split(" "),function(e,c,a,h,f,r,k,l,m,n){var g;a=g=function(p){function d(b){b=q.call(this,b);b.range=null;b.timeSlider=null;b.floorFilter=null;return b}e._inherits(d,p);var q=e._createSuper(d);d.prototype.clone=function(){return new g(h.clone({range:this.range,
timeSlider:this.timeSlider,floorFilter:this.floorFilter}))};return e._createClass(d)}(a.JSONSupport);c.__decorate([f.property({type:m,json:{write:!0}})],a.prototype,"range",void 0);c.__decorate([f.property({type:n,json:{write:!0}})],a.prototype,"timeSlider",void 0);c.__decorate([f.property({type:l,json:{write:!0}})],a.prototype,"floorFilter",void 0);return a=g=c.__decorate([k.subclass("esri.webdoc.Widgets")],a)});