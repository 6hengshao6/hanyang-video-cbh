// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Cyclical ../../../core/Handles ../../../core/has ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/time ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/ellipsoidUtils ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/ray ../../../chunks/sphere ../../../geometry/support/vector ../../../geometry/support/webMercatorUtils ../state/utils/viewUtils ../support/debugFlags ../support/debugUtils ./interfaces ./OverlayRenderer ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Intersector ../webgl-engine/lib/LocalOriginFactory ../webgl-engine/lib/Material ../webgl-engine/lib/SortedRenderGeometryRenderer ../webgl-engine/parts/requireUtils ../../support/Scheduler".split(" "),
function(n,I,p,T,J,U,V,F,m,K,O,r,oa,pa,W,X,C,P,L,Q,G,R,l,S,M,Y,Z,aa,N,ba,q,ca,w,da,ea,fa,ha,ia,D){const ja=[[-.1,-2,3.9,2],[-.1,-3.9,3.9,.1],[-2,-3.9,2,.1],[-3.9,-3.9,.1,.1],[-3.9,-2,.1,2],[-3.9,-.1,.1,3.9],[-2,-.1,2,3.9],[-.1,-.1,3.9,3.9]];let A;n.OverlayManager=function(f){function E(a){a=ka.call(this,a);a._handles=new U;a._spatialReference=null;a._renderSR=null;a._overlaySREqualsRenderSR=!0;a._drapeSources=new Set;a._drapeTargets=new Set;a._placementDirty=!1;a._contentUpdated=!1;a._drawTexturesDirty=
!1;a._drawTexturesAnimateDirty=!1;a._hasUnusedRenderTargets=!1;a._longitudeCyclical=null;a._latestOriginId=0;a._maxResolution=V("esri-mobile")?2048:4096;a._animationTimeLast=0;a._removeRenderOverlayCallback=()=>{};return a}I._inherits(E,f);var ka=I._createSuper(E);f=E.prototype;f.initialize=function(){const a=this.view;this.renderer=new ca.OverlayRenderer({view:a,worldToPCSRatio:this._worldToPCSRatio,spatialReference:this._spatialReference});this._groundIntersector=da.newIntersector(this.view.state.viewingMode);
this._groundIntersector.options.backfacesTerrain=!0;this._groundIntersector.options.invisibleTerrain=!0;this._groundIntersector.options.hud=!1;this._handles.add([this.renderer.events.on("has-highlights",()=>{this.setDrawTexturesDirty();this.notifyChange("hasHighlights")}),this.renderer.events.on("has-water",c=>a._stage?.renderer.setParameters({hasOverlayWater:c})),this.renderer.events.on("renders-occluded",()=>{this.setDrawTexturesDirty();this.notifyChange("rendersOccluded")}),this.renderer.events.on("content-changed",
()=>this.setDrawTexturesDirty()),this.renderer.events.on("textures-disposed",()=>this.updateOverlayResult()),K.watch(()=>[a.pointsOfInterest?.renderPointOfView,a.pointsOfInterest?.centerOnSurfaceFrequent?.location],()=>this.setPlacementDirty()),K.watch(()=>[a.state?.pixelRatio,a.state?.contentPixelRatio],()=>this.setPlacementDirty(),K.sync),this.surface.on("elevation-change",()=>this.setPlacementDirty()),a.on("resize",()=>this.setPlacementDirty()),a.resourceController.scheduler.registerTask(D.TaskPriority.OVERLAY,
this),a._stage.renderView.events.on("force-camera-for-screenshot",c=>{this._updateOverlays(D.noBudget,c,w.RenderRequestType.BACKGROUND);this.renderer.hasOverlays&&this._drawOverlayTextures(this.renderer.overlays,w.RenderRequestType.BACKGROUND,c.pixelRatio)})]);let b=c=>this._renderOverlayCallback(c);this._removeRenderOverlayCallback=()=>{b=()=>{}};a._stage?.renderer.setParameters({renderOverlay:c=>b(c)})};f._renderOverlayCallback=function(a){this._contentUpdated=!1;const b=this.renderer;b.processSyncDrapeSources();
b.hasOverlays&&(this._dispatchAnimationUpdate(a),this._drawOverlayTextures(b.overlays,w.RenderRequestType.UPDATE));this._hasUnusedRenderTargets&&this._collectUnusedRenderTargetMemory()};f.destroy=function(){this._handles=m.destroyMaybe(this._handles);this._removeRenderOverlayCallback();this.view?._stage?.renderer.setParameters({renderOverlay:()=>{}});m.isSome(A)&&(A.hide(),A=null)};f.setSpatialReference=function(a){this._spatialReference=a;this.renderer.spatialReference=a;this._longitudeCyclical=
null;const b=this.view.renderSpatialReference;m.isSome(a)&&m.isSome(b)?(this._renderSR=b,this._overlaySREqualsRenderSR=a.equals(this._renderSR),this._isSpherical&&(this._longitudeCyclical=a.isWebMercator?new J.Cyclical(-2.0037508342787E7,2.0037508342787E7):new J.Cyclical(-180,180),this.renderer.longitudeCyclical=this._longitudeCyclical),this.renderer&&(this.renderer.worldToPCSRatio=this._worldToPCSRatio)):this.renderer.disposeOverlays()};f.registerDrapeSource=function(a,b,c){this._drapeSources.add(a);
this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources);b=this.renderer.createDrapeSourceRenderer(a,b,c);this._updateDrapeSourceExtent(a);this._setContentDirty();this.notifyChange("running");return b};f.registerGeometryDrapeSource=function(a){return this.registerDrapeSource(a,ha.SortedRenderGeometryRenderer)};f._updateDrapeSourceExtent=function(a){2===this.renderer.overlays.length&&m.isSome(a.setDrapingExtent)&&m.isSome(this._spatialReference)&&a.setDrapingExtent(this.renderer.overlays,
this._spatialReference)};f.unregisterDrapeSource=function(a){this._drapeSources.has(a)&&(this._drapeSources.delete(a),this.renderer.removeDrapeSourceRenderer(a),this.renderer.ensureDrapeSources(this._drapeSources),this._setContentDirty(),this.notifyChange("running"))};f.registerDrapeTarget=function(a){this._drapeTargets.add(a);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources)};f.updateOverlayResult=function(){this.view._stage?.renderer.setParameters({overlays:this.renderer.overlays})};
f.unregisterDrapeTarget=function(a){this._drapeTargets.delete(a);this.renderer.ensureDrapeTargets(this._drapeTargets)};f._setContentDirty=function(){this.setPlacementDirty();this.setDrawTexturesDirty()};f.setPlacementDirty=function(){this._placementDirty=!0};f.runTask=function(a){return this._updateOverlays(a,this.view.state.contentCamera,w.RenderRequestType.UPDATE)};f._updateOverlays=function(a,b,c){if(!this._spatialReference)return D.Task.YIELD;var e=this._computeOverlayResolution(b);this._computeOverlayExtents(b,
e,x);const d=l.width(x.inner)/l.width(x.outer);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources);b=this._updateOverlay(q.OverlayIndex.INNER,x.inner,e,1*x.pixelRatioAdjustment,x.mapUnitsPerPixel);e=this._updateOverlay(q.OverlayIndex.OUTER,x.outer,e,d*x.pixelRatioAdjustment,x.mapUnitsPerPixel);if(b===v.EXTENT||e===v.EXTENT)this._drapeSources.forEach(g=>this._updateDrapeSourceExtent(g)),this.surface.updateTileOverlayParams(c);b===v.NONE&&e===v.NONE||this.setDrawTexturesDirty();this._placementDirty=
!1;a.madeProgress()};f._computeOverlayResolution=function(a){const b=this.view.state.contentPixelRatio;return Math.min(F.nextHighestPowerOfTwo(Math.max(a.fullWidth/a.pixelRatio*b,a.fullHeight/a.pixelRatio*b)+256),this._maxResolution)};f._updateOverlay=function(a,b,c,e,d){if(0===this.renderer.overlays.length)return v.NONE;a=this.renderer.overlays[a];const g=a.mapUnitsPerPixel;a.mapUnitsPerPixel=d;a.pixelRatio=e;e=a.extent;const u=N.TESTS_DISABLE_OPTIMIZATIONS?0:1E-5*Math.max(b[2]-b[0],b[3]-b[1],e[2]-
e[0],e[3]-e[1]);if(Math.abs(e[0]-b[0])<=u&&Math.abs(e[1]-b[1])<=u&&Math.abs(e[2]-b[2])<=u&&Math.abs(e[3]-b[3])<=u&&c===a.resolution)return g===d?v.NONE:v.RERENDER_ONLY;l.copy(a.extent,b);a.resolution=c;b=l.center(a.extent);a.renderLocalOrigin=ea.fromValues(b[0],b[1],0,`OV_${this._latestOriginId++}`);return v.EXTENT};f.setTileParameters=function(a){const b=a.renderData.overlay;if(0<this.renderer.overlays.length){const c=this.renderer.overlays[q.OverlayIndex.INNER],e=this.renderer.overlays[q.OverlayIndex.OUTER];
a=a.extent;this._rectInsideRect(c.extent,a)||this._rectanglesOverlap(a,c.extent)||this._rectanglesOverlap(a,e.extent)?(this._setTileOverlayData(a,q.OverlayIndex.INNER,b),this._setTileOverlayData(a,q.OverlayIndex.OUTER,b)):(this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b))}else this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b)};f.overlayPixelSizeInMapUnits=function(a){if(0===this.renderer.overlays.length)return 0;
const b=this.renderer.overlays[q.OverlayIndex.INNER],c=this.renderer.overlays[q.OverlayIndex.OUTER];a=this._pointIsInExtent(a,b.extent)?b:c;return(a.extent[2]-a.extent[0])/a.resolution};f._setTileOverlayData=function(a,b,c){if(0!==this.renderer.overlays.length){var e=this.renderer.overlays[b].extent,d=l.width(e),g=l.height(e),u=a[0];if(this._longitudeCyclical){u=this._longitudeCyclical.minimalMonotonic(e[0],u);const t=this._longitudeCyclical.minimalMonotonic(e[0],a[2]);u>t&&(u=t-(a[2]-a[0]))}c.setScale(b,
l.width(a)/d,l.height(a)/g);c.setOffset(b,(u-e[0])/d,(a[1]-e[1])/g)}};f._clearTileOverlayData=function(a,b){b.setScale(a,-1,-1);b.setOffset(a,-1,-1)};f.reloadShaders=async function(){ia.removeLoadedShaderModules();await this.renderer.reloadShaders();this.setDrawTexturesDirty();this.runTask(D.noBudget)};f._dispatchAnimationUpdate=function(a){var b=O.Milliseconds(a-this._animationTimeLast);if(b>=this.surface.view._stage.renderer.animationTimestep||m.isSome(this.view.state.forcedAnimationTime)||this._drawTexturesDirty||
this._drawTexturesAnimateDirty)b=O.Milliseconds(b/this.surface.view._stage.renderer.animationTimeDilation),b=new fa.UpdateParameters(this.view.state.camera,b,this.view.state.forcedAnimationTime),this.renderer.updateAnimation(b)&&(this._drawTexturesAnimateDirty=!0),this._animationTimeLast=a};f.setDrawTexturesDirty=function(){this.renderer.hasOverlays?(this._drawTexturesDirty=this._contentUpdated=!0,this.view._stage.renderView.requestRender()):this.setPlacementDirty()};f._intersectGroundFromView=function(a,
b,c,e){c=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(a,la,b,c);if(m.isNone(c))return!1;b=c.origin;c=C.add(H,c.origin,c.direction);this._groundIntersector.reset(b,c,a);this._groundIntersector.intersect([]);this.view.basemapTerrain.intersect(this._groundIntersector,null,b,c);return this._groundIntersector.results.min.getIntersectionPoint(e)};f._findHorizonBasedPointOfInterest=function(a,b){var c=.5;c=this.view.renderCoordsHelper.getAltitude(a.eye);const e=this.view.pointsOfInterest.centerOnSurfaceFrequent;
var d=F.clamp(e.estimatedSurfaceAltitude,a.aboveGround?-Infinity:c+1E-5,a.aboveGround?c-1E-5:Infinity);c=a.aboveGround;if("global"===this.view.viewingMode){var g=H;M.closestPointOnSilhouette(M.fromRadius(M.tmpSphere,G.getReferenceEllipsoid(this.view.spatialReference).radius+d),S.wrap(a.eye,a.viewForward),g);C.subtract(g,g,a.eye);d=J.cyclicalPI.normalize(Y.angleAroundAxis(a.viewForward,g,a.viewRight))/a.fovY+.5;g=0>=d||1<=d?.5:.55;c=c?g*d:d+g*(1-d)}else d=Q.fromValues(0,Math.tan(.5*Math.PI-Math.acos(-a.viewForward[2])),
1,0),d=L.transformMat4(d,d,a.projectionMatrix)[1],d=F.clamp(.5+.5*d,0,1),c=1===d||0===d?.5:c?.55*d:1-.55*(1-d);return this._intersectGroundFromView(a,.5,c,b)?C.sqrDist(b,a.eye)<e.distance*e.distance:!1};f._computeOverlayExtents=function(a,b,c){var e=this.view.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,d=P.create();this._findHorizonBasedPointOfInterest(a,d)||C.copy(d,e);var g=Math.max(.1,C.distance(a.eye,d));e=aa.viewAngle(this.view.renderCoordsHelper,e,a.eye);const u=Math.PI/2-Math.abs(e-
Math.PI/2);N.OVERLAY_SHOW_CENTER?(m.isNone(A)&&(A=new ba.PointGraphics(this.view.graphics,"red")),A.show(d,this._renderSR)):m.isSome(A)&&A.hide();this._overlaySREqualsRenderSR||R.projectVectorToVector(d,this._renderSR,d,this._spatialReference);e=this.surface.extent;var t=!this._isSpherical&&m.isSome(this._spatialReference)&&this._spatialReference.isGeographic,y=t&&m.isSome(this._spatialReference)?1/G.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1;g=a.perScreenPixelRatio/this.view.state.contentPixelRatio*
g*y;c.mapUnitsPerPixel=g/this._worldToPCSRatio;g=b*g/2;var h=!1;t=t?90:Infinity;this._isSpherical&&m.isSome(e)&&m.isSome(this._spatialReference)&&(this._spatialReference.isWebMercator?(g/=Math.cos(Z.y2lat(d[1])),t=e[3]):(h=!0,g/=G.getReferenceEllipsoid(this._spatialReference).metersPerDegree,t=90),g>=t&&(g=t,d[1]=0,this._spatialReference.isWebMercator&&(d[0]=0)));y=1;h&&(y=1/Math.max(.2,Math.cos(Math.abs(F.deg2rad(d[1])))),180<g*y&&(y=180/g),c.mapUnitsPerPixel*=y);h=Math.log(2)/12;g=Math.exp(Math.round(Math.log(g)/
h)*h);const B=g*y;h=.5*b/(32*B);var k=.5*b/(32*g);d[0]=Math.round(d[0]*h)/h;d[1]=Math.round(d[1]*k)/k;h=c.inner;h[0]=d[0]-B;h[1]=d[1]-g;h[2]=d[0]+B;h[3]=d[1]+g;this._isSpherical&&this._shiftExtentToFitBounds(h,Infinity,t);k=c.outer;6*B>l.width(e)?l.copy(k,m.unwrap(e)):u<=.25*Math.PI?(k[0]=h[0]-B,k[1]=h[1]-g,k[2]=h[2]+B,k[3]=h[3]+g):(R.projectVectorToVector(a.eye,this._renderSR,H,this._spatialReference),X.subtract(z,d,H),a=-Math.atan2(z[1],z[0])+.125*Math.PI,0>a&&(a+=2*Math.PI),L.scale(z,ja[Math.floor(a/
(.25*Math.PI))],2*g),z[0]*=y,z[2]*=y,L.add(k,h,z));this._isSpherical?(k[0]=this._longitudeCyclical.clamp(k[0]),k[2]=this._longitudeCyclical.clamp(k[2]),k[1]=Math.max(k[1],-t),k[3]=Math.min(k[3],t)):(a=l.intersection(h,e,ma),d=l.intersection(k,e,na),l.contains(a,d)&&(k[2]=k[0],k[3]=k[1]));b=Math.abs(h[2]-h[0])/b;c.mapUnitsPerPixel=Math.max(c.mapUnitsPerPixel,b);c.pixelRatioAdjustment=c.mapUnitsPerPixel/b};f._drawOverlayTextures=function(a,b,c=this.view.state.contentPixelRatio){if(0!==a.length&&(this._drawTexturesDirty||
this._drawTexturesAnimateDirty)){var e=this._drawTexturesDirty;this._drawTexturesAnimateDirty=this._drawTexturesDirty=!1;var d=this._drawOverlay(a[q.OverlayIndex.INNER],c);a=this._drawOverlay(a[q.OverlayIndex.OUTER],c);d!==w.ValidationState.CHANGED&&a!==w.ValidationState.CHANGED||this.surface.updateTileOverlayParams(w.RenderRequestType.UPDATE);this._collectUnusedRenderTargetMemory();this.updateOverlayResult();e?(this.surface.requestRender(b),b===w.RenderRequestType.UPDATE&&this.surface.requestUpdate()):
this.surface.requestRender(w.RenderRequestType.BACKGROUND)}};f._drawOverlay=function(a,b){this._longitudeCyclical?a.setupGeometryViewsCyclical(this._longitudeCyclical):a.setupGeometryViewsDirect();return a.draw(this.renderer,b)};f._collectUnusedRenderTargetMemory=function(){this._hasUnusedRenderTargets=!1;if(this.renderer.hasOverlays){const a=performance.now();this._hasUnusedRenderTargets=this.renderer.collectUnusedRenderTargetMemory(a)}};f._rectanglesOverlap=function(a,b){return m.isNone(a)?!1:this._longitudeCyclical?
(this._longitudeCyclical.contains(b[0],b[2],a[0])||this._longitudeCyclical.contains(b[0],b[2],a[2])||this._longitudeCyclical.contains(a[0],a[2],b[0]))&&!(a[1]>b[3]||a[3]<b[1]):l.intersects(a,b)};f._rectInsideRect=function(a,b){return m.isNone(b)?!1:this._longitudeCyclical?this._longitudeCyclical.contains(a[0],a[2],b[0])&&this._longitudeCyclical.contains(a[0],a[2],b[2])&&b[1]>a[1]&&b[3]<a[3]:l.contains(a,b)};f._pointIsInExtent=function(a,b){if(this._longitudeCyclical)return this._longitudeCyclical.contains(b[0],
b[2],a.x)&&a.y>=b[1]&&a.y<=b[3];const c=a.x;a=a.y;return c>b[0]&&c<b[2]&&a>b[1]&&a<b[3]};f._shiftExtentToFitBounds=function(a,b,c){let e=0,d=0;a[0]<-b?e=a[0]+b:a[2]>b&&(e=b-a[2]);a[1]<-c?d=a[1]+c:a[3]>c&&(d=c-a[3]);l.offset(a,e,d)};I._createClass(E,[{key:"running",get:function(){return this._placementDirty&&(0<this._drapeSources.size||0<this.view.graphics.length||N.OVERLAY_DRAW_DEBUG_TEXTURE)&&!!this._spatialReference&&!this.suspended&&this.surface.ready}},{key:"_isSpherical",get:function(){return this.view.state.isGlobal}},
{key:"_worldToPCSRatio",get:function(){return m.isSome(this._spatialReference)&&this._spatialReference.isGeographic&&!this.view.state.isLocal?G.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1}},{key:"suspended",get:function(){return this.surface.suspended}},{key:"updating",get:function(){return this.running||this.renderer.updating||this._contentUpdated}},{key:"hasHighlights",get:function(){return this.renderer.hasHighlights}},{key:"rendersOccluded",get:function(){return this.renderer.rendersOccluded}},
{key:"hasOverlays",get:function(){return this.renderer.hasOverlays}},{key:"gpuMemoryUsage",get:function(){return this.renderer.gpuMemoryUsage}},{key:"test",get:function(){return{renderer:this.renderer,update:()=>this.runTask(D.noBudget)}}}]);return E}(T);p.__decorate([r.property()],n.OverlayManager.prototype,"_spatialReference",void 0);p.__decorate([r.property({readOnly:!0})],n.OverlayManager.prototype,"running",null);p.__decorate([r.property()],n.OverlayManager.prototype,"_placementDirty",void 0);
p.__decorate([r.property()],n.OverlayManager.prototype,"_contentUpdated",void 0);p.__decorate([r.property()],n.OverlayManager.prototype,"_isSpherical",null);p.__decorate([r.property()],n.OverlayManager.prototype,"_worldToPCSRatio",null);p.__decorate([r.property({autoDestroy:!0})],n.OverlayManager.prototype,"renderer",void 0);p.__decorate([r.property({constructOnly:!0})],n.OverlayManager.prototype,"view",void 0);p.__decorate([r.property({constructOnly:!0})],n.OverlayManager.prototype,"surface",void 0);
p.__decorate([r.property()],n.OverlayManager.prototype,"suspended",null);p.__decorate([r.property()],n.OverlayManager.prototype,"updating",null);p.__decorate([r.property({type:Boolean})],n.OverlayManager.prototype,"hasHighlights",null);p.__decorate([r.property({type:Boolean})],n.OverlayManager.prototype,"rendersOccluded",null);n.OverlayManager=p.__decorate([W.subclass("esri.views.3d.terrain.OverlayManager")],n.OverlayManager);const z=Q.create(),H=P.create(),x={inner:l.create(),outer:l.create(),mapUnitsPerPixel:0,
pixelRatioAdjustment:1},ma=l.create(),na=l.create(),la=S.create();var v;(function(f){f[f.NONE=0]="NONE";f[f.EXTENT=1]="EXTENT";f[f.RERENDER_ONLY=2]="RERENDER_ONLY"})(v||(v={}));Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});