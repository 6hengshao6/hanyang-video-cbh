// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../analysis/LengthDimensionResult".split(" "),function(a,h,c,k,f,d,r,t,u,l,m){a.LengthDimensionComputation=function(g){function e(b){b=n.call(this,b);
b.geometry=null;b.unconstrainedGeometry=null;b.elevationAlignedStartPoint=null;b.elevationAlignedEndPoint=null;return b}h._inherits(e,g);var n=h._createSuper(e);g=e.prototype;g.normalizeCtorArgs=function(b){const {dimension:p,...q}=b;return{result:new m({dimension:p}),...q}};g.initialize=function(){this.addHandles([f.watch(()=>this.dimension.startPoint,b=>this.elevationAlignedStartPoint=this.projectAndAlignPoint(b),f.syncAndInitial),f.watch(()=>this.dimension.endPoint,b=>this.elevationAlignedEndPoint=
this.projectAndAlignPoint(b),f.syncAndInitial)])};h._createClass(e,[{key:"dimension",get:function(){return this.result.dimension}},{key:"length",get:function(){return this.result.length}}]);return e}(k);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.LengthDimensionComputation.prototype,"result",void 0);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.LengthDimensionComputation.prototype,"projectAndAlignPoint",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,
"dimension",null);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"length",null);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"geometry",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"unconstrainedGeometry",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"elevationAlignedStartPoint",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"elevationAlignedEndPoint",void 0);c.__decorate([d.property()],
a.LengthDimensionComputation.prototype,"preConstraintProperties",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"previousConstraint",void 0);a.LengthDimensionComputation=c.__decorate([l.subclass("esri.views.3d.analysis.LengthDimensionComputation")],a.LengthDimensionComputation);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});