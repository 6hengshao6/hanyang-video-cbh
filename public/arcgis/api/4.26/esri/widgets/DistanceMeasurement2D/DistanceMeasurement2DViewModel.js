// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../properties/defaultUnit ./DistanceMeasurement2DTool ../support/InteractiveToolViewModel".split(" "),function(l,d,c,g,m,f,b,w,x,q,r,t,n,u){b=function(e){function k(a){a=
v.call(this,a);a.supportedViewType="2d";a.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views.";a.geodesicDistanceThreshold=1E5;return a}l._inherits(k,e);var v=l._createSuper(k);e=k.prototype;e.initialize=function(){this.addHandles([g.watch(()=>c.unwrap(this.view)?.spatialReference,()=>this.clear()),g.watch(()=>this.unit,a=>{c.isSome(this.tool)&&(this.tool.unit=a)},g.initial),g.watch(()=>this.geodesicDistanceThreshold,a=>{c.isSome(this.tool)&&(this.tool.geodesicDistanceThreshold=
a)},g.initial)])};e.start=async function(){const a=this.view;c.isSome(a)&&(await g.whenOnce(()=>a.ready),n.isProjectionEngineRequired(a.spatialReference)&&await r.load());this.createTool({interactive:!0})};e.clear=function(){this.removeTool()};e.constructTool=function(){return new n.DistanceMeasurement2DTool({view:c.unwrap(this.view),visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})};e._validateUnit=function(a){const {unitOptions:h,defaultUnit:p}=this;
return null!=a&&h.includes(a)?a:h.includes(p)?p:0<h.length?h[0]:p};e._validateUnits=function(a){if(null==a)return[];a=a.filter(h=>m.measurementLengthUnits.includes(h));return 0===a.length?m.measurementLengthUnits.slice():a};l._createClass(k,[{key:"measurement",get:function(){return c.isSome(this.tool)?this.tool.measurement:null}},{key:"measurementLabel",get:function(){return c.isSome(this.tool)?this.tool.measurementLabel:null}},{key:"state",get:function(){return this.disabled||c.isNone(this.view)||
!n.isSupported(this.view?.spatialReference)?"disabled":c.isSome(this.tool)&&this.measurement?this.tool.active?"measuring":"measured":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){this._overrideIfSome("unit",this._validateUnit(a))}},{key:"unitOptions",get:function(){return m.measurementLengthUnits},set:function(a){this._overrideIfSome("unitOptions",this._validateUnits(a))}}]);return k}(u.InteractiveToolViewModel);d.__decorate([f.property(t.defaultUnitPropertyMetadata)],
b.prototype,"defaultUnit",void 0);d.__decorate([f.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,"measurement",null);d.__decorate([f.property({readOnly:!0})],b.prototype,"measurementLabel",null);d.__decorate([f.property({readOnly:!0})],b.prototype,"state",null);d.__decorate([f.property({type:String})],b.prototype,"unit",null);d.__decorate([f.property({type:[String]})],b.prototype,"unitOptions",null);return b=d.__decorate([q.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],
b)});