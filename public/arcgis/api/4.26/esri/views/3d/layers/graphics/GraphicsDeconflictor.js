// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/MapUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/boundedPlane ./Deconflictor ./enums ./LabelDeconflictor ../../../support/Scheduler".split(" "),
function(g,f,q,r,t,p,h,A,B,C,D,E,u,v,l,k,w,x){function m(c){c=c.layer;return!(!c||!c.featureReduction||"selection"!==c.featureReduction.type)}function y(c){(c=c.graphics3DGraphics)&&c.forEach(e=>e.clearVisibilityFlag(k.VisibilityFlag.DECONFLICTION))}g.GraphicsDeconflictor=function(c){function e(){var a=z.apply(this,arguments);a._handles=new r;a._contexts=new Map;a._viewState=new l.DeconflictorViewState;a.visibilityGroup=k.VisibilityGroup.GRAPHIC;a._iconMarginFactor=-.1;return a}f._inherits(e,c);var z=
f._createSuper(e);c=e.prototype;c.initialize=function(){this._handles.add([h.watch(()=>this.view?.state?.camera,()=>{this._updateViewState();this.setDirty()}),h.watch(()=>this.view?.map?.ground?.opacity,(a,b)=>{1!==a&&1!==b||this.setDirty()}),h.watch(()=>this.view?.slicePlane,()=>{this._updateSlicePlane();this._slicePlaneChanged()},h.initial)]);this._frameTask=this.view.resourceController.scheduler.registerTask(x.TaskPriority.GRAPHICS_DECONFLICTOR,this);this._labels=new w.LabelDeconflictor({view:this.view,
parent:this})};c.destroy=function(){this._labels.destroy();this._labels=null;this._handles.destroy();this._handles=null;this._frameTask&&(this._frameTask.remove(),this._frameTask=null)};c.setDirty=function(){0<this._contexts.size&&(f._get(f._getPrototypeOf(e.prototype),"setDirty",this).call(this),this._labels.setDirty())};c.runTask=function(a){f._get(f._getPrototypeOf(e.prototype),"runTask",this).call(this,a);this.running||this._labels.setDirty()};c.setInitialIconVisibilityFlag=function(a,b){a=!(this._graphicSupportsDeconfliction(b)&&
m(a));b.setVisibilityFlag(k.VisibilityFlag.DECONFLICTION,a,k.VisibilityGroup.GRAPHIC)};c._updateViewState=function(){this.view&&this.view.state&&(this._viewState.camera.copyFrom(this.view.state.camera),this._updateSlicePlane())};c._updateSlicePlane=function(){const a=this.view?this.view.slicePlane:null;p.isSome(a)&&v.transform(a,this._viewState.camera.viewMatrix,this._viewState.slicePlane);this._viewState.slicePlaneEnabled=p.isSome(a)};c._slicePlaneChanged=function(){t.someMap(this._contexts,(a,b)=>
b.symbolCreationContext.slicePlaneEnabled)&&this.setDirty()};c.addGraphicsOwner=function(a){const b=this._getGraphicsContext(a);return{addGraphic:d=>this._addGraphic(a,b,d),removeGraphic:d=>this._removeGraphic(b,d),labelingInfoChange:()=>this._labels.enabledChanged(a,b),featureReductionChange:()=>this.enabledChanged(a,b),slicePlaneEnabledChange:()=>this._slicePlaneEnabledChanged(a,b),clear:()=>b.forEach(d=>this._removeGraphic(b,d.graphics3DGraphic))}};c.removeGraphicsOwner=function(a){const b=this._contexts.get(a);
b&&(b.forEach(d=>this._removeGraphic(b,d.graphics3DGraphic)),this._contexts.delete(a),this.setDirty())};c._addGraphic=function(a,b,d){const n=d.graphic.uid;d=new l.DeconflictorGraphic(d,a.symbolCreationContext.slicePlaneEnabled);b.set(n,d);m(a)&&this.addToActiveGraphics(d);a.labelsEnabled&&this._labels.addToActiveGraphics(d)};c._removeGraphic=function(a,b){b=b.graphic.uid;const d=a.get(b);d&&(this.removeFromActiveGraphics(d),this._labels.removeFromActiveGraphics(d),a.delete(b),this.setDirty())};c.enabledChanged=
function(a,b){const d=m(a);d||y(a);this.modifyGraphics(b,d)};c._slicePlaneEnabledChanged=function(a,b){const d=a.symbolCreationContext.slicePlaneEnabled;b.forEach(n=>n.slicePlaneEnabled=d);this.setDirty()};c.getGraphicsLayers=function(a){return a.layers};c._graphicSupportsDeconfliction=function(a){if(a.isDraped)return!1;a=a.layers;if(!a||!a.length)return!1;for(const b of a)if(this.layerSupportsDeconfliction(b))return!0;return!1};c._getGraphicsContext=function(a){var b=this._contexts.get(a);if(b)return b;
b=new Map;this._contexts.set(a,b);this.setDirty();return b};f._createClass(e,[{key:"labels",get:function(){return this._labels}},{key:"viewState",get:function(){return this._viewState}},{key:"iconMarginFactor",get:function(){return this._iconMarginFactor},set:function(a){this._iconMarginFactor=a;this.setDirty()}}]);return e}(l.Deconflictor);g.GraphicsDeconflictor=q.__decorate([u.subclass("esri.views.3d.layers.graphics.GraphicsDeconflictor")],g.GraphicsDeconflictor);Object.defineProperty(g,Symbol.toStringTag,
{value:"Module"})});