// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./FeatureSet".split(" "),function(d,f,g,a,n,p,h,k){var e;a=e=function(l){function b(c){c=m.call(this,c);c.doNotLocateOnRestrictedElements=null;return c}d._inherits(b,l);var m=d._createSuper(b);b.prototype.clone=function(){return new e({doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,
...this.cloneProperties()})};return d._createClass(b)}(k);f.__decorate([g.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);return a=e=f.__decorate([h.subclass("esri.rest.support.NetworkFeatureSet")],a)});