// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./TextInput".split(" "),function(d,f,g,a,n,p,h,k){var e;a=e=function(l){function b(c){c=m.call(this,c);c.type="text-box";return c}d._inherits(b,l);var m=d._createSuper(b);b.prototype.clone=function(){return new e({maxLength:this.maxLength,minLength:this.minLength})};
return d._createClass(b)}(k);f.__decorate([g.property({type:["text-box"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=e=f.__decorate([h.subclass("esri.form.elements.inputs.TextBoxInput")],a)});