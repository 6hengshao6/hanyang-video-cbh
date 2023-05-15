// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/ellipsoidUtils ../../support/FrustumExtentIntersection ../../../support/Scheduler".split(" "),
function(k,h,e,p,q,f,l,w,x,y,r,m,t,n){e=function(c){function g(a){a=u.call(this,a);a.suspended=!1;a._extent=null;a._extentIntersectionDirty=!0;a._isVisibleBelowSurfaceInternal=!1;a._handles=new p;a.graphicsCoreOwner=null;a.updating=!0;return a}k._inherits(g,c);var u=k._createSuper(g);c=g.prototype;c.initialize=function(){var {graphicsCoreOwner:a}=this;this._extentIntersection=new t.FrustumExtentIntersection({renderCoordsHelper:a.view.renderCoordsHelper});const b=a.view,d=b.basemapTerrain;a=b.resourceController.scheduler;
this._handles.add([b.on("resize",()=>this._viewChange()),f.watch(()=>b.state.camera,()=>this._viewChange(),f.sync),a.registerTask(n.TaskPriority.FRUSTUM_VISIBILITY,this),f.watch(()=>d.visibleElevationBounds,()=>this._elevationBoundsChange())]);"local"===b.viewingMode?this._isVisibleBelowSurface=!0:this._handles.add([f.watch(()=>[d.baseOpacity,d.wireframe,b.map?.ground?.navigationConstraint?.type],()=>this._updateIsVisibleBelowSurface(),f.initial)])};c.destroy=function(){this._set("graphicsCoreOwner",
null);this._extentIntersection=this._extent=null;this._handles=q.destroyMaybe(this._handles)};c._setDirty=function(){this.updating||this._set("updating",!0)};c.setExtent=function(a){this._extent=a;this._extentIntersectionDirty=!0;this._setDirty()};c._viewChange=function(){this._setDirty()};c._elevationBoundsChange=function(){this._setDirty();this._extentIntersectionDirty=!0};c._updateIsVisibleBelowSurface=function(){const a=this.graphicsCoreOwner.view,b=a.basemapTerrain,d="none"===a.map.ground?.navigationConstraint?.type;
this._isVisibleBelowSurface="local"===a.viewingMode||!b.opaque||d};c._updateExtentIntersection=function(){if(this._extentIntersectionDirty){this._extentIntersectionDirty=!1;var a=this.graphicsCoreOwner.view;if(this._isVisibleBelowSurfaceInternal)var b=-.3*m.getReferenceEllipsoid(a.spatialReference).radius;else{const {min:d,max:v}=a.basemapTerrain.visibleElevationBounds;b=d-Math.max(1,(v-d)*(1.2-1))}this._extentIntersection.update(this._extent,a.spatialReference,b)}};c.runTask=function(a){this._set("updating",
!1);if(!this._extent)return this._set("suspended",!1),n.Task.YIELD;this._updateExtentIntersection();const b=this.graphicsCoreOwner.view.frustum,d=m.getReferenceEllipsoid(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this._extentIntersection.isVisibleInFrustum(b,d));a.madeProgress()};k._createClass(g,[{key:"_isVisibleBelowSurface",set:function(a){this._isVisibleBelowSurfaceInternal=a;this._setDirty();this._extentIntersectionDirty=!0}},{key:"running",get:function(){return this.updating}}]);
return g}(e);h.__decorate([l.property({readOnly:!0})],e.prototype,"suspended",void 0);h.__decorate([l.property({constructOnly:!0})],e.prototype,"graphicsCoreOwner",void 0);h.__decorate([l.property({readOnly:!0})],e.prototype,"updating",void 0);return e=h.__decorate([r.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],e)});