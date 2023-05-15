// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/time ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/ellipsoidUtils ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/surfaceCollision ../../../camera/constraintUtils/TiltMode ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils/ray ../../../support/geometryUtils/sphere ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../../animation/easing".split(" "),
function(m,r,w,x,y,z,P,Q,R,S,T,A,c,h,B,C,D,E,F,G,H,I,k,J,K,u,L,M){m.ZoomStepController=function(l){function n(){var a=N.apply(this,arguments);a._zoomLocation=h.create();a._tmpCamera=new u.Camera;a._tmpViewDir=h.create();a._tmpRayDir={origin:h.create(),direction:h.create()};a._targetOnSphere=h.create();a._tmpCenter=h.create();a._constraintOptions={selection:E.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:F.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new u.Camera,interactionDirection:null,
tiltMode:H.TiltMode.TUMBLE};a._sphere=C.create();return a}r._inherits(n,l);var N=r._createSuper(n);l=n.prototype;l.initialize=function(){this._intersector=L.newIntersector(this.view.state.viewingMode)};l.zoomStep=function(a,e){if(this.active){var f=this.view.state,{interactionStartCamera:b}=this._constraintOptions;b&&(this.animation.finished?b.copyFrom(f.camera):this.animation.cameraAt(1,b));var d=b=!1;this.intersectionHelper.intersectScreen(e,this._zoomLocation,0===this.view.map.ground.opacity?k.contentIntersectorOptions:
{})&&(b=0<a,d=!0);this._tmpCamera.copyFrom(f.camera);b?this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._tmpCenter)&&(this._tmpCamera.center=this._tmpCenter):this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._zoomLocation)?this._tmpCamera.center=this._zoomLocation:c.copy(this._zoomLocation,this._tmpCamera.center);this._updateCamera(this._tmpCamera,a,this._zoomLocation,e,d);this.begin(this._tmpCamera)}};l.animationSettings=function(){return{duration:z.Milliseconds(600),
easing:M.outExpo}};l._updateCamera=function(a,e,f,b,d){var g=B.getReferenceEllipsoid(this.view.spatialReference);g=k.decideNavigationMode(a,b,g);var t=Math.abs(this.view.camera.position.z);c.normalize(p,a.eye);c.scale(p,p,-1);J.fromScreenAtEye(a,b,this._tmpRayDir);c.normalize(this._tmpRayDir.direction,this._tmpRayDir.direction);const v=x.clamp(Math.min(k.ZOOM_DISTANCE_MODIFIER,1/Math.abs(c.dot(p,this._tmpRayDir.direction)))*t,k.ZOOM_MIN_DISTANCE_MODIFIER,k.ZOOM_MAX_DISTANCE_MODIFIER);if(g===k.NavigationMode.Horizontal){e=
.6**e;this._sphere[3]=c.length(f);c.subtract(this._tmpViewDir,a.center,a.eye);d=Math.min(c.length(this._tmpViewDir),v);g=d*e;1>=e&&4>g&&(g=4,e=g/d);if(1E-6>Math.abs(d-g))return;d=c.length(a.center);this._sphere[3]!==d&&(a.center=c.scale(q,a.center,(this._sphere[3]+e*(d-this._sphere[3]))/d));c.scale(this._tmpViewDir,this._tmpViewDir,-e);a.eye=c.add(q,a.center,this._tmpViewDir);D.applyAll(this.view,a,this._constraintOptions);1E-12<c.squaredDistance(f,a.center)&&K.intersectScreen(this._sphere,a,b,this._targetOnSphere)&&
k.panToPosition(this._sphere,a,f,this._targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0)}else{g=.6**Math.abs(e);t=0<e?1:-1;c.subtract(this._tmpViewDir,f,a.eye);const O=c.length(this._tmpViewDir);b=this.view._stage.renderView.getMinimalDepthForArea(null,b[0],b[1],this.view.state.camera,60);b=y.isSome(b)?b:v;b=d&&0<e?Math.min(b,O):b;c.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,b);c.add(f,this._tmpRayDir.origin,this._tmpRayDir.direction);f=b*g;d=Math.max(4,1.01*a.nearFar[0]);
0<e&&f<d&&(f=d,g=f/b);if(1E-6>Math.abs(b-f))return;c.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,t*(1-g));a.eye=c.add(q,a.eye,this._tmpRayDir.direction);a.center=c.add(q,a.center,this._tmpRayDir.direction)}G.applySurfaceCollisionConstraint(this.view,a)};return r._createClass(n)}(I.PointToPointAnimationController);m.ZoomStepController=w.__decorate([A.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],m.ZoomStepController);const q=h.create(),p=h.create();Object.defineProperty(m,
Symbol.toStringTag,{value:"Module"})});