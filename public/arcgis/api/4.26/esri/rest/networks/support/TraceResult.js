// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./AggregatedGeometry ./FunctionResult ./NetworkElement".split(" "),function(e,c,a,d,p,q,r,g,h,k,l){a=function(m){function f(b){b=n.call(this,b);b.aggregatedGeometry=null;b.elements=null;b.globalFunctionResults=null;
b.kFeaturesForKNNFound=!1;b.startingPointsIgnored=!1;b.warnings=null;return b}e._inherits(f,m);var n=e._createSuper(f);return e._createClass(f)}(a.JSONSupport);c.__decorate([d.property({type:h,json:{write:!0},readOnly:!0})],a.prototype,"aggregatedGeometry",void 0);c.__decorate([d.property({type:[l],json:{write:!0},readOnly:!0})],a.prototype,"elements",void 0);c.__decorate([d.property({type:[k],json:{write:!0},readOnly:!0})],a.prototype,"globalFunctionResults",void 0);c.__decorate([d.property({type:Boolean,
json:{write:!0},readOnly:!0})],a.prototype,"kFeaturesForKNNFound",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0},readOnly:!0})],a.prototype,"startingPointsIgnored",void 0);c.__decorate([d.property({type:[String],json:{write:!0},readOnly:!0})],a.prototype,"warnings",void 0);return a=c.__decorate([g.subclass("esri.rest.networks.support.TraceResult")],a)});