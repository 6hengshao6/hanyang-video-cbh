// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./SketchTooltipElevationOptions ./SketchTooltipVisibleElements".split(" "),function(f,c,a,d,n,p,q,k,g,h){a=function(l){function e(b){b=m.call(this,b);b.enabled=!1;b.elevation=new g.SketchTooltipElevationOptions;b.visibleElements=
new h.SketchTooltipVisibleElements;b.visualVariables=null;return b}f._inherits(e,l);var m=f._createSuper(e);e.prototype.toJSON=function(){return{enabled:this.enabled,elevation:this.elevation,visibleElements:this.visibleElements}};return f._createClass(e)}(a);c.__decorate([d.property({type:Boolean,nonNullable:!0})],a.prototype,"enabled",void 0);c.__decorate([d.property({type:g.SketchTooltipElevationOptions,nonNullable:!0})],a.prototype,"elevation",void 0);c.__decorate([d.property({type:h.SketchTooltipVisibleElements,
nonNullable:!0})],a.prototype,"visibleElements",void 0);c.__decorate([d.property()],a.prototype,"visualVariables",void 0);return a=c.__decorate([k.subclass("esri.widgets.Sketch.SketchTooltipOptions")],a)});