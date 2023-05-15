// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./commonProperties".split(" "),function(g,c,b,d,n,p,q,l,k){var h;b=h=function(e){function f(a){a=m.call(this,a);a.description=null;a.label=null;a.symbol=null;a.value=null;return a}g._inherits(f,e);var m=g._createSuper(f);e=f.prototype;e.clone=
function(){return new h({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})};e.getMeshHash=function(){const a=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${a}`};return g._createClass(f)}(b.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);c.__decorate([d.property(k.rendererSymbolProperty)],
b.prototype,"symbol",void 0);c.__decorate([d.property(k.uniqueValueProperty)],b.prototype,"value",void 0);return b=h=c.__decorate([l.subclass("esri.renderers.support.UniqueValueInfo")],b)});