// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(d,e,a,f,l,m,n,g){a=function(h){function c(b){b=k.call(this,b);b.field=null;b.type=null;return b}d._inherits(c,h);var k=d._createSuper(c);c.prototype.clone=function(){console.warn(".clone() is not implemented for "+this.declaredClass);
return null};return d._createClass(c)}(a.JSONSupport);e.__decorate([f.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"field",void 0);e.__decorate([f.property({readOnly:!0,nonNullable:!0,json:{read:!1}})],a.prototype,"type",void 0);return a=e.__decorate([g.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],a)});