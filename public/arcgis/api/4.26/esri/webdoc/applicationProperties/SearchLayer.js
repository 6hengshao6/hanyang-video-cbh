// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./SearchLayerField".split(" "),function(e,c,a,h,f,k,l,m){var g;a=g=function(n){function d(b){b=p.call(this,b);b.field=null;b.id=null;b.subLayer=null;return b}e._inherits(d,n);var p=e._createSuper(d);d.prototype.clone=function(){return new g(h.clone({field:this.field,
id:this.id,subLayer:this.subLayer}))};return e._createClass(d)}(a.JSONSupport);c.__decorate([f.property({type:m,json:{write:{isRequired:!0}}})],a.prototype,"field",void 0);c.__decorate([f.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"id",void 0);c.__decorate([f.property({type:k.Integer,json:{write:!0}})],a.prototype,"subLayer",void 0);return a=g=c.__decorate([l.subclass("esri.webdoc.applicationProperties.SearchLayer")],a)});