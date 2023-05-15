// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/HandleOwner ../../../../core/Logger ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/projection ../../../../geometry/support/aaBoundingRect ./enums ../../../support/layerViewUtils ../../../support/Scheduler".split(" "),
function(t,f,e,B,m,g,E,F,G,C,u,v,h,w,x){const y=B.getLogger("esri.views.3d.layers.graphics.Graphics3DScaleVisibility");e=function(c){function n(a){a=D.call(this,a);a._scaleRangeActive=!1;a._layerScaleRangeVisibilityQuery=!1;a._extent=null;a.graphicsCoreOwner=null;a.layer=null;a.queryGraphicUIDsInExtent=null;a.graphicsCore=null;a.basemapTerrain=null;a.layerScaleEnabled=!0;a.suspended=!1;a._dirty=!0;return a}t._inherits(n,c);var D=t._createSuper(n);c=n.prototype;c.initialize=function(){this.updateScaleRangeActive();
this.handles.add(this.graphicsCoreOwner.view.resourceController.scheduler.registerTask(x.TaskPriority.SCALE_VISIBILITY,this));this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.layerMinMaxScaleChangeHandler())};c.destroy=function(){this.updatingHandles.removeAll();this.handles.removeAll();this._dirty=!1;this.basemapTerrain=this.graphicsCore=this.queryGraphicUIDsInExtent=this.layer=this.graphicsCoreOwner=this._extent=null};c._setDirty=function(){this._dirty=!0};c.setExtent=function(a){const b=
this.graphicsCoreOwner.view.spatialReference,d=this.graphicsCoreOwner.view.basemapTerrain.spatialReference;if(b===d)this._extent=a??null;else{const k=v.create();u.projectBoundingRect(a,b,k,d)?this._extent=k:this._extent=null}this._setDirty()};c.scaleRangeActive=function(){return this._scaleRangeActive};c.updateScaleRangeActive=function(){var a=this.layer,b=a.effectiveScaleRange;b=this.layerScaleEnabled&&null!=b&&(0<b.minScale||0<b.maxScale);a.labelingInfo&&!b&&(b=a.labelingInfo.some(d=>d&&(0<(d.minScale??
0)||0<(d.maxScale??0))));a=this._scaleRangeActive!==b;(this._scaleRangeActive=b)&&!this.handles.has("terrain-events")&&this.basemapTerrain?(this.handles.add(this.basemapTerrain.on("scale-change",d=>this._scaleUpdateHandler(d)),"terrain-events"),this.layerScaleEnabled&&this.handles.add(this.basemapTerrain.on("tiles-visibility-changed",()=>this._setDirty()),"terrain-events")):!b&&this.handles.has("terrain-events")&&this.handles.remove("terrain-events");return a};c.runTask=function(a){const b=this.graphicsCoreOwner.view.basemapTerrain;
if(this._extent&&b&&b.ready&&this._scaleRangeActive&&this.layerScaleEnabled){if(this._layerScaleRangeVisibilityQuery)return x.Task.YIELD;this._layerScaleRangeVisibilityQuery=!0;const {minScale:d,maxScale:k}=this.layer.effectiveScaleRange;b.queryVisibleScaleRange(this._extent,d,k,p=>this._finishUpdate(p))}else this._finishUpdate(!0);a.madeProgress()};c._finishUpdate=function(a){this._layerScaleRangeVisibilityQuery=!1;this._set("suspended",!a);this._dirty=!1};c._visibleAtLayerScale=function(a){const b=
this.layer.effectiveScaleRange;return!this.layerScaleEnabled||w.scaleBoundsPredicate(a,b.minScale||0,b.maxScale||0)};c._visibleAtLabelScale=function(a,b){return w.scaleBoundsPredicate(a,b.minScale||0,b.maxScale||0)};c._graphicScale=function(a){let b;m.isSome(a.centroid)?b=a.centroid:m.isSome(a.graphic.geometry)&&"point"===a.graphic.geometry.type&&(b=a.graphic.geometry);return b?this.graphicsCoreOwner.view.basemapTerrain?this.graphicsCoreOwner.view.basemapTerrain.getScale(b):1:null};c._graphicVisible=
function(a){if(!this.layerScaleEnabled)return!0;a=this._graphicScale(a);return this._visibleAtLayerScale(a)};c.updateVisibility=function(a){if(this._scaleRangeActive){const b=this._graphicVisible(a);return a.setVisibilityFlag(h.VisibilityFlag.SCALE_RANGE,b,h.VisibilityGroup.GRAPHIC)}return!1};c.updateGraphicLabelScaleVisibility=function(a){if(!this._scaleRangeActive||!a.labelLayers||0===a.labelLayers.length)return!1;const b=this._graphicScale(a);if(a=this._updateLabelScaleVisibility(a,b))this.graphicsCoreOwner.view.deconflictor.setDirty(),
this.graphicsCoreOwner.view.labeler.setDirty();return a};c._updateLabelScaleVisibility=function(a,b){if(!a.labelLayers||0===a.labelLayers.length)return!1;const d=a.labelLayers[0]._labelClass;return d&&null!=d.minScale&&null!=d.maxScale&&(b=this._visibleAtLabelScale(b,d),a.setVisibilityFlag(h.VisibilityFlag.SCALE_RANGE,b,h.VisibilityGroup.LABEL))?!0:!1};c._scaleUpdateHandler=function(a){this._setDirty();if(this.graphicsCore.visible){var b=a.extent,d=a.scale,k=this._visibleAtLayerScale(d),p=!1,r=this.graphicsCoreOwner.view.spatialReference;
a=a.spatialReference;if(m.isNone(a))y.error("scaleUpdate: Internal error, no SpatialReference given for tiles");else{var z=!a.equals(r);z&&!u.projectBoundingRect(b,a,A,r)?y.error("scaleUpdate: Internal error, cannot project AABR from "+a+" to wkid "+r):(this.queryGraphicUIDsInExtent(z?A:b,r,l=>{l=this.graphicsCore.getGraphics3DGraphicById(l);if(!m.isNone(l)){var q=l.centroid;m.isSome(q)&&(b[0]>q.x||b[1]>q.y||b[2]<q.x||b[3]<q.y)||(l.setVisibilityFlag(h.VisibilityFlag.SCALE_RANGE,k,h.VisibilityGroup.GRAPHIC)&&
(p=!0),this._updateLabelScaleVisibility(l,d)&&(p=!0))}}),p&&(this.graphicsCoreOwner.view.deconflictor.setDirty(),this.graphicsCoreOwner.view.labeler.setDirty()))}}};c.layerMinMaxScaleChangeHandler=function(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities(a=>a.clearVisibilityFlag(h.VisibilityFlag.SCALE_RANGE)):this._scaleRangeActive&&this.graphicsCore.updateAllGraphicsVisibility();this._setDirty()};t._createClass(n,[{key:"updating",get:function(){return this._dirty||
this.updatingHandles.updating}},{key:"running",get:function(){return!(!this.graphicsCoreOwner.view.basemapTerrain||!this.updating)}}]);return n}(e.HandleOwner);f.__decorate([g.property()],e.prototype,"graphicsCoreOwner",void 0);f.__decorate([g.property()],e.prototype,"layer",void 0);f.__decorate([g.property()],e.prototype,"queryGraphicUIDsInExtent",void 0);f.__decorate([g.property()],e.prototype,"graphicsCore",void 0);f.__decorate([g.property()],e.prototype,"basemapTerrain",void 0);f.__decorate([g.property({constructOnly:!0})],
e.prototype,"layerScaleEnabled",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"suspended",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"updating",null);f.__decorate([g.property()],e.prototype,"_dirty",void 0);e=f.__decorate([C.subclass("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],e);const A=v.create();return e});