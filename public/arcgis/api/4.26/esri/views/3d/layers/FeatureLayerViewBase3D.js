// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ./FeatureLikeLayerView3D ./LayerView3D ./support/FeatureTileFetcher3DLayerViewContext ../support/EventedSet ../support/updatingProperties ../webgl-engine/lib/UpdatePolicy ../../layers/FeatureLayerView ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(k,e,t,n,l,g,c,H,I,u,v,w,x,y,z,A,B,q,C,D,E){c=function(h){function m(a){a=F.call(this,a);a._controllerTotal=0;a._processorTotal=0;a.suspendResumeExtentMode="data";return a}k._inherits(m,h);var F=k._createSuper(m);h=m.prototype;h.initialize=function(){this.handles.add(l.watch(()=>this._updatingRequiredFieldsPromise,a=>this.updatingHandles.addPromise(a),l.syncAndInitial))};h.destroy=function(){this.updatingHandles.removeAll();this.handles.removeAll();this._fetcherContext=n.destroyMaybe(this._fetcherContext)};
h.setVisibility=function(a,b){this.processor?.setObjectIdVisibility(a,b)};h.createQuery=function(){return k._get(k._getPrototypeOf(m.prototype),"createQuery",this).call(this)};h.queryFeatures=function(a,b){const d=()=>k._get(k._getPrototypeOf(m.prototype),"queryFeatures",this).call(this,a,b);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(a),d):d()};h.beforeSetController=function(a){a.maximumNumberOfFeatures=this.maximumNumberOfFeatures};h.createController=function(){this._fetcherContext=
new z.FeatureTileFetcher3DLayerViewContext({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const a=new w.FeatureTileController3D({layerView:this,context:this._fetcherContext,graphics:new A.EventedSet,extent:this.clippingExtent});this.updatingHandles.add(()=>a.serviceDataExtent,b=>{this.processor&&(this.processor.dataExtent=b)},l.initial);this.handles.add(l.watch(()=>this.suspended,b=>{b?a.suspend():a.resume()},l.syncAndInitial));this.updatingHandles.add(()=>this.processor?.displayFeatureLimit,
b=>a.displayFeatureLimit=b,l.initial);this.handles.add(l.when(()=>!this.updating,()=>{this._processorTotal=this._controllerTotal=0}));return a};h.doRefresh=async function(a){a&&!this.suspended&&this.controller&&this.controller.refetch();this.processor.refreshFilter()};h._queryFeaturesMesh=async function(a,b){await this._validateQueryFeaturesMesh(a);b=await b();if(a&&a.outStatistics||n.isNone(this.graphics3DProcessor))return b;a=this.layer.objectIdField;const d=this.graphics3DProcessor.graphics3DGraphicsByObjectID,
f=[];for(const p of b.features)if(p.geometry){const r=d.get(p.attributes[a]);r&&(p.geometry=v.hydrateGeometry(r.graphic.geometry),f.push(p))}else f.push(p);b.features=f;return b};h._validateQueryFeaturesMesh=async function(a){if(a){var b=f=>{throw new t("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${f}'`);},d=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const f of d)null!=a[f]&&b(f);"returnM"in a&&a.returnM&&b("returnM");
"returnCentroid"in a&&a.returnCentroid&&b("returnCentroid");n.isSome(a.outSpatialReference)&&!a.outSpatialReference.equals(this.view.spatialReference)&&b("outSpatialReference")}};k._createClass(m,[{key:"maximumNumberOfFeatures",get:function(){return this.controller?.maximumNumberOfFeatures??this._get("maximumNumberOfFeatures")},set:function(a){this._set("maximumNumberOfFeatures",a);this.controller&&(this.controller.maximumNumberOfFeatures=a)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return this.controller?
!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded):!1}},{key:"updatingProgressValue",get:function(){let a=0;if(this.controller?.updating){var b=this.controller.updatingRemaining,d=Math.max(this.controller.updatingTotal,this._controllerTotal);0<d&&(a=(d-b)/d,this._controllerTotal=d)}b=0;if(this.processor?.updating){d=this.processor.updatingRemaining;const f=Math.max(d,this._processorTotal);0<f&&(b=(f-d)/f,this._processorTotal=f)}return.5*(a+b)}},{key:"updatePolicy",get:function(){if(!this.controller)return q.UpdatePolicy.ASYNC;
switch(this.controller.mode){case "snapshot":const a=G[this.layer.geometryType];return null==a||this.controller.serviceDataCount>a?q.UpdatePolicy.ASYNC:q.UpdatePolicy.SYNC;case "tiles":return q.UpdatePolicy.ASYNC}}},{key:"hasZ",get:function(){const a=this.layer,b=a.capabilities&&a.capabilities.data;return b&&b.supportsZ?"returnZ"in a&&null!=a.returnZ?a.returnZ:b.supportsZ:!1}},{key:"hasM",get:function(){const a=this.layer,b=a.capabilities&&a.capabilities.data;return b&&b.supportsM?"returnM"in a&&
null!=a.returnM?a.returnM:!1:!1}},{key:"usedMemory",get:function(){return(this.processor?.usedMemory??0)+(this.controller?.memoryForUnusedFeatures??0)}},{key:"unloadedMemory",get:function(){const a=this.controller?.expectedFeatureDiff??0,b=this.processor?.loadedFeatures??0;return(this.processor?.unprocessedMemoryEstimate??0)+b/(b+a)*(this.processor?.usedMemoryPerFeature??0)*a}},{key:"ignoresMemoryFactor",get:function(){return this.controller?.hasMaximumNumberOfFeaturesOverride}},{key:"performanceInfo",
get:function(){var a=this.controller?.displayFeatureLimit;a=n.isSome(a)?a.averageSymbolComplexity:void 0;a=n.isSome(a)?`f:${a.primitivesPerFeature},v:${a.primitivesPerCoordinate}`:"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:this.controller?.mode??"n/a",symbolComplexity:a,nodes:this.controller?.tileDescriptors.length??0,...(this.controller?.debug??{storedFeatures:0,totalVertices:0})}}},{key:"test",get:function(){return{updatePolicy:this.updatePolicy,controller:this.controller,
loadedGraphics:this.controller?.graphics}}}]);return m}(E(x.FeatureLikeLayerView3D(C(y.LayerView3D(D)))));e.__decorate([g.property()],c.prototype,"layer",void 0);e.__decorate([g.property()],c.prototype,"controller",void 0);e.__decorate([g.property()],c.prototype,"_controllerTotal",void 0);e.__decorate([g.property()],c.prototype,"_processorTotal",void 0);e.__decorate([g.property()],c.prototype,"maximumNumberOfFeatures",null);e.__decorate([g.property()],c.prototype,"maximumNumberOfFeaturesExceeded",
null);e.__decorate([g.property(B.updatingProgress)],c.prototype,"updatingProgress",void 0);e.__decorate([g.property({readOnly:!0})],c.prototype,"updatingProgressValue",null);e.__decorate([g.property({readOnly:!0})],c.prototype,"updatePolicy",null);e.__decorate([g.property({readOnly:!0})],c.prototype,"hasZ",null);e.__decorate([g.property({readOnly:!0})],c.prototype,"hasM",null);e.__decorate([g.property()],c.prototype,"suspendResumeExtentMode",void 0);c=e.__decorate([u.subclass("esri.views.3d.layers.FeatureLayerViewBase3D")],
c);const G={point:5E3,polygon:500,polyline:1E3};return c});