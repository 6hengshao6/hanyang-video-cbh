// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./AuthoringInfoClassBreakInfo".split(" "),function(a,f,c,h,k,d,q,l,m){var g;a.AuthoringInfoFieldInfo=g=function(n){function e(b){b=p.call(this,b);b.field="";b.normalizationField="";b.label="";b.classBreakInfos=[];return b}f._inherits(e,n);var p=f._createSuper(e);
e.prototype.clone=function(){return new g({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:k.clone(this.classBreakInfos)})};return f._createClass(e)}(h.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"field",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"normalizationField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,
"label",void 0);c.__decorate([d.property({type:[m.AuthoringInfoClassBreakInfo],json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"classBreakInfos",void 0);a.AuthoringInfoFieldInfo=g=c.__decorate([l.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],a.AuthoringInfoFieldInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});