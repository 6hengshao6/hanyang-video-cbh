// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./Association".split(" "),function(c,d,a,f,m,n,p,g,h){a=function(k){function e(b){b=l.call(this,b);b.maxGeometryCountExceeded=!1;b.associations=[];return b}c._inherits(e,k);var l=c._createSuper(e);return c._createClass(e)}(a.JSONSupport);
d.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"maxGeometryCountExceeded",void 0);d.__decorate([f.property({type:[h],json:{write:!0}})],a.prototype,"associations",void 0);return a=d.__decorate([g.subclass("esri.rest.networks.support.AssociationGeometriesResult")],a)});