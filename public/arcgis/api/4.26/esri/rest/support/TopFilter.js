// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,c,a,f,m,n,p,h){var g;a=g=function(k){function d(b){b=l.call(this,b);b.groupByFields=void 0;b.topCount=void 0;b.orderByFields=void 0;return b}e._inherits(d,k);var l=e._createSuper(d);d.prototype.clone=function(){return new g({groupByFields:this.groupByFields,
topCount:this.topCount,orderByFields:this.orderByFields})};return e._createClass(d)}(a.JSONSupport);c.__decorate([f.property({type:[String],json:{write:!0}})],a.prototype,"groupByFields",void 0);c.__decorate([f.property({type:Number,json:{write:!0}})],a.prototype,"topCount",void 0);c.__decorate([f.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);return a=g=c.__decorate([h.subclass("esri.rest.support.TopFilter")],a)});