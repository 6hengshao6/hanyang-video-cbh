// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(d,b,a,e,k,l,m,f){a=function(g){function c(){return h.apply(this,arguments)}d._inherits(c,g);var h=d._createSuper(c);d._createClass(c,[{key:"canZoomIn",get:function(){return!!this.view.ready}},{key:"canZoomOut",get:function(){return!!this.view.ready}}]);
return c}(a);b.__decorate([e.property({readOnly:!0})],a.prototype,"canZoomIn",null);b.__decorate([e.property({readOnly:!0})],a.prototype,"canZoomOut",null);b.__decorate([e.property()],a.prototype,"view",void 0);return a=b.__decorate([f.subclass("esri.widgets.Zoom.ZoomConditions3D")],a)});