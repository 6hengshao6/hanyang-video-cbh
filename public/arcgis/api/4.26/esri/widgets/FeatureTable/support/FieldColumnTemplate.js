// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/support/domains ../../FeatureForm/Format ./ColumnTemplateBase ./EditableColumnTemplateMixin".split(" "),function(e,c,d,a,q,r,h,g,k,l,m){a=function(n){function f(b){b=p.call(this,b);b.domain=null;b.editableExpression=null;b.fieldName=
null;b.format=null;b.requiredExpression=null;b.type="field";b.valueExpression=null;b.visibilityExpression=null;return b}e._inherits(f,n);var p=e._createSuper(f);return e._createClass(f)}(m.EditableColumnTemplateMixin(l));c.__decorate([d.property({types:g.types,json:{read:{reader:g.fromJSON},write:!0}})],a.prototype,"domain",void 0);c.__decorate([d.property({type:String,json:{write:!0}}),d.property()],a.prototype,"editableExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],
a.prototype,"fieldName",void 0);c.__decorate([d.property({type:k})],a.prototype,"format",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"requiredExpression",void 0);c.__decorate([d.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([h.subclass("esri.widgets.FeatureTable.support.FieldColumnTemplate")],
a)});