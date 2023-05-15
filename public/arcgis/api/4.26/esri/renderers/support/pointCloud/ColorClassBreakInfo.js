// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(f,b,h,a,k,d,l,m){var g;a=g=function(n){function e(){var c=p.apply(this,arguments);c.description=null;c.label=null;c.minValue=0;c.maxValue=0;c.color=null;return c}f._inherits(e,n);var p=f._createSuper(e);
e.prototype.clone=function(){return new g({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:k.clone(this.color)})};return f._createClass(e)}(a.JSONSupport);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([d.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,
"minValue",void 0);b.__decorate([d.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0);b.__decorate([d.property({type:h,json:{type:[l.Integer],write:!0}})],a.prototype,"color",void 0);return a=g=b.__decorate([m.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a)});