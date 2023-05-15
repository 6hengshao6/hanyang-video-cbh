// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/mathUtils ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/ellipsoidUtils ../../../../geometry/Point ../../../../geometry/projection ../../../../geometry/support/aaBoundingRect ../debugFlags ../PropertiesPool ./PointOfInterest ../../../support/Scheduler".split(" "),
function(e,m,g,q,n,h,J,K,L,u,d,p,v,w,x,y,z,A,B,C){const D=Array;e.CenterOnSurface=function(f){function k(a){a=E.call(this,a);a._propertiesPool=new A.PropertiesPool({location:w,renderLocation:D},m._assertThisInitialized(a));a._currentSurfaceAltitude=0;a._latestSurfaceAltitude=0;a.distance=0;a.renderLocation=p.create();a.updating=!1;return a}m._inherits(k,f);var E=m._createSuper(k);f=k.prototype;f.initialize=function(){this._frameWorker=this.scheduler.registerTask(this.task,this);this.runTask()};f.destroy=
function(){this._frameWorker=n.removeMaybe(this._frameWorker);this._propertiesPool=n.destroyMaybe(this._propertiesPool)};f.updateRenderLocation=function(){this.updating=!0;this._updateRenderLocation()};f.runTask=function(){this._latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter();this._updateRenderLocation();this.updating=!1;return C.Task.YIELD};f._updateRenderLocation=function(){const a=F;let b=this._calculateSurfaceIntersection(this._currentSurfaceAltitude,a);var c=this._currentSurfaceAltitude!==
this._latestSurfaceAltitude;!b&&c&&(b=this._calculateSurfaceIntersection(this._latestSurfaceAltitude,a))&&(this._currentSurfaceAltitude=this._latestSurfaceAltitude);c=G;b&&this._latestSurfaceAltitudeChangesDistanceSignificantly(a,c)&&(d.copy(a,c),this._currentSurfaceAltitude=this._latestSurfaceAltitude);b?this.distance=d.distance(this._camera.eye,a):(d.scale(a,this._camera.viewForward,this._get("distance")),d.add(a,a,this._camera.eye));d.exactEquals(this._get("renderLocation"),a)||this._set("renderLocation",
d.copy(this._propertiesPool.get("renderLocation"),a))};f._calculateSurfaceIntersection=function(a,b){var c=this._camera;if(!this.renderCoordsHelper.intersectManifold(c.ray,a,b))return!1;if(this.state.isGlobal){const r=v.getReferenceEllipsoid(this.renderCoordsHelper.spatialReference).radius;a=r+a;const t=d.squaredLength(c.eye),H=t<a*a,I=d.distance(c.eye,b);H&&I>r/4&&(d.scale(b,c.viewForward,a-Math.sqrt(t)),d.add(b,b,c.eye))}else c=this.surface?.ready?this.surface.extent:null,n.isSome(c)&&x.projectBoundingRect(c,
this.surface?.spatialReference,l,this.renderCoordsHelper.spatialReference)&&(b[0]=q.clamp(b[0],l[0],l[2]),b[1]=q.clamp(b[1],l[1],l[3]));return!0};f._latestSurfaceAltitudeChangesDistanceSignificantly=function(a,b){if(this._latestSurfaceAltitude===this._currentSurfaceAltitude||null==a)return!1;if(this._calculateSurfaceIntersection(this._latestSurfaceAltitude,b)){if(z.TESTS_DISABLE_OPTIMIZATIONS)return!0;const c=this._camera.eye;a=d.distance(c,a);b=d.distance(c,b);if(.05<Math.abs(b-a)/a)return!0}return!1};
m._createClass(k,[{key:"_camera",get:function(){return this.state.contentCamera}},{key:"location",get:function(){const a=this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,a,this.state.spatialReference);return a}},{key:"estimatedSurfaceAltitude",get:function(){return this._latestSurfaceAltitude}},{key:"running",get:function(){return this.updating}}]);return k}(B.PointOfInterest);g.__decorate([h.property({constructOnly:!0})],e.CenterOnSurface.prototype,
"scheduler",void 0);g.__decorate([h.property({constructOnly:!0})],e.CenterOnSurface.prototype,"task",void 0);g.__decorate([h.property()],e.CenterOnSurface.prototype,"distance",void 0);g.__decorate([h.property({constructOnly:!0})],e.CenterOnSurface.prototype,"estimateSurfaceAltitudeAtCenter",void 0);g.__decorate([h.property({readOnly:!0})],e.CenterOnSurface.prototype,"location",null);g.__decorate([h.property({readOnly:!0})],e.CenterOnSurface.prototype,"renderLocation",void 0);g.__decorate([h.property()],
e.CenterOnSurface.prototype,"updating",void 0);e.CenterOnSurface=g.__decorate([u.subclass("esri.views.3d.support.CenterOnSurface")],e.CenterOnSurface);const F=p.create(),G=p.create(),l=y.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});