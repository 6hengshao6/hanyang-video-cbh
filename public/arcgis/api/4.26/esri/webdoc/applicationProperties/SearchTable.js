// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./SearchTableField".split(" "),function(d,e,a,h,g,p,k,l){var f;a=f=function(m){function c(b){b=n.call(this,b);b.field=null;b.id=null;return b}d._inherits(c,m);var n=d._createSuper(c);c.prototype.clone=function(){return new f(h.clone({field:this.field,id:this.id}))};
return d._createClass(c)}(a.JSONSupport);e.__decorate([g.property({type:l,json:{write:{isRequired:!0}}})],a.prototype,"field",void 0);e.__decorate([g.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"id",void 0);return a=f=e.__decorate([k.subclass("esri.webdoc.applicationProperties.SearchTable")],a)});