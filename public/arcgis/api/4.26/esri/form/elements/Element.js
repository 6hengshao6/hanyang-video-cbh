// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],function(e,c,a,d,g){a=function(h){function f(b){b=k.call(this,b);b.description=null;b.label=null;b.type=null;b.visibilityExpression=null;return b}e._inherits(f,h);var k=e._createSuper(f);return e._createClass(f)}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",
void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([d.property()],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([g.subclass("esri.form.elements.Element")],a)});