// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Cyclical ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec2 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/ellipsoidUtils ../../../../../geometry/support/axisAngle ../../../../../geometry/support/plane ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/TiltMode ../../../input/util ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(r,t,B,C,D,w,h,V,W,X,Y,Z,E,u,e,k,F,x,v,y,f,G,m,H,z,I,J,K,L,M,N,c,O,P,Q,R,S){r.PinchAndPanController=function(g){function p(){var a=T.apply(this,arguments);a._smoothRotation=new z.ExponentialFalloff(.05);a._rotationAxis=k.create();a._beginAngle=0;a._beginHeading=0;a._panningPlane=v.create();a._beginRadius=0;a._smoothScaling=new z.ExponentialFalloff(.05);a._zoomCenterScreen=h.createScreenPointArray();a._zoomMomentumEstimator=new S.ZoomMomentumEstimator;a._rotationMomentumEstimator=new R.RotationMomentumEstimator;
a._panSphericalMomentumEstimator=new Q.PanSphericalMomentumEstimator;a._panPlanarMomentumEstimator=new P.PanPlanarMomentumEstimator;a._adjustedSphere=y.create();a._tmp3d=k.create();a._tmpScreenPointArray=h.createScreenPointArray();a._beginScreenPoint=h.createScreenPointArray();a._beginScenePoint=k.create();a._screenPickPoint=h.createScreenPointArray();a._scenePickPoint=k.create();a._mode=c.NavigationMode.Horizontal;a._sphere=y.create();a._pointerCount=0;a._tmpInteractionDirection=k.create();a._constraintOptions=
{selection:G.ConstraintTypes.ALL,interactionType:m.InteractionType.NONE,interactionFactor:0,interactionStartCamera:new O.Camera,interactionDirection:null,tiltMode:H.TiltMode.TUMBLE};return a}t._inherits(p,g);var T=t._createSuper(p);g=p.prototype;g.begin=function(a){if(this.active){var b=this.view.navigation.momentumEnabled;this._zoomMomentumEstimator.enabled=b;this._rotationMomentumEstimator.enabled=b;this._panPlanarMomentumEstimator.enabled=b;this._panSphericalMomentumEstimator.enabled=b;this._beginHeading=
-C.cyclicalPI.normalize(D.deg2rad(this.view.camera.heading));this._beginRadius=a.radius;this._pointerCount=a.pointers.size;this._beginAngle=a.angle;this._smoothRotation.reset();h.screenPointObjectToArray(a.center,this._screenPickPoint);u.copy(this._beginScreenPoint,this._screenPickPoint);b=F.getReferenceEllipsoid(this.view.spatialReference);var d=c.pickPointAndInitSphere(this._intersectionHelper,this.startCamera,this._screenPickPoint,b,c.SpherePickPointFallback.Silhouette,0===this.view.map.ground.opacity?
c.contentIntersectorOptions:{});w.isNone(d.scenePickPoint)||(this._scenePickPoint=d.scenePickPoint,this._sphere=d.sphere,e.copy(this._beginScenePoint,this._scenePickPoint),this._mode=c.decideNavigationMode(this.startCamera,this._screenPickPoint,b),this._mode===c.NavigationMode.Vertical&&this._preparePlanarPanMode(a,d.hasGeometryIntersection),this._constraintOptions.interactionStartCamera?.copyFrom(this.startCamera))}};g.update=function(a){if(this.active){this.currentCamera.copyFrom(this.startCamera);
var b=1<a.pointers.size;this._mode===c.NavigationMode.Horizontal?(b&&this._zoomSpherical(a),this._panningSpherical(a),b&&this._rotateSpherical(a)):(b&&this._zoomPlanar(a),this._panningPlanar(a),b&&this._rotatePlanar(a));this.commitCamera()}};g.end=function(a){a.pointers.size===this._pointerCount&&this.update(a);this.finishController();if(a=this._zoomMomentumEstimator.evaluateMomentum())return this._mode===c.NavigationMode.Horizontal?new N.ZoomSphericalMomentumController({view:this.view,momentum:a,
screenCenter:this._zoomCenterScreen,sceneCenter:this._beginScenePoint,radius:this._sphere[3]}):new M.ZoomPlanarMomentumController({view:this.view,momentum:a,zoomCenter:this._beginScenePoint});if(a=this._rotationMomentumEstimator.evaluateMomentum())return new L.RotationMomentumController({view:this.view,momentum:a,center:this._sphere,axis:this._rotationAxis});if(this._mode===c.NavigationMode.Horizontal){if(a=this._panSphericalMomentumEstimator.evaluateMomentum())return new K.PanSphericalMomentumController({view:this.view,
momentum:a})}else if(a=this._panPlanarMomentumEstimator.evaluateMomentum())return new J.PanPlanarMomentumController({view:this.view,momentum:a});return null};g._preparePlanarPanMode=function(a,b){var d=e.negate(this._tmp3d,this.startCamera.viewForward);v.fromPositionAndNormal(this._scenePickPoint,d,this._panningPlane);var l=h.createScreenPointArray(this._screenPickPoint[0],0);d=k.create();var q=e.length(this.startCamera.eye);this._adjustedSphere[3]=q<this._sphere[3]?q-100:this._sphere[3];c.sphereOrPlanePointFromScreenPoint(this._adjustedSphere,
this.startCamera,l,d);l=h.createRenderScreenPointArray3();this.startCamera.projectToRenderScreen(d,l);d=k.create();l=k.create();q=k.create();e.subtract(d,this._scenePickPoint,this.currentCamera.eye);const U=e.length(d);e.normalize(d,d);var n=c.PAN_DISTANCE_MODIFIER*Math.max(Math.abs(this.view.camera.position.z),c.MIN_HEIGHT_LIMIT);const A=this.view._stage.renderView.getMinimalDepthForArea(null,this._screenPickPoint[0],this._screenPickPoint[1],this.view.state.camera,c.SCREEN_PIXEL_AREA);n=w.isSome(A)?
A:n;n=b?Math.min(n,U):n;e.copy(q,e.add(l,this.currentCamera.eye,e.scale(l,d,n)));this._panningPlane[3]=-e.dot(v.normal(this._panningPlane),q);this.startCamera.center=e.add(l,this.startCamera.eye,e.scale(l,this.startCamera.viewForward,n));a=h.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.intersectPlaneFromScreenPointAtEye(this._panningPlane,this.startCamera,a,this._beginScenePoint)};g._zoomSpherical=function(a){const b=this._beginRadius/a.radius;this._smoothScaling.gain=.001875*Math.min(Math.max(a.radius,
40),120);this._smoothScaling.update(b);c.applyZoomOnSphere(this._sphere,this.currentCamera,this._smoothScaling.value);h.screenPointObjectToArray(a.center,this._zoomCenterScreen);this._zoomMomentumEstimator.add(this._smoothScaling.value,.001*a.timestamp);this._constraintOptions.interactionType=m.InteractionType.ZOOM;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this._beginRadius);f.applyAll(this.view,this.currentCamera,this._constraintOptions)};g._panningSpherical=
function(a){const b=h.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.sphereOrPlanePointFromScreenPoint(this._sphere,this.currentCamera,b,this._tmp3d);c.preserveHeadingThreshold(this._beginScenePoint,e.dot(this.currentCamera.up,this._beginScenePoint),this._sphere[3],this._beginHeading,this.view.camera.tilt,this.startCamera)?(c.applyPanSphericalPreserveHeading(this._sphere,this.currentCamera,this._beginScenePoint,this._tmp3d,this._beginHeading,this.view.camera.tilt,!1),this._panSphericalMomentumEstimator.addMomentumPreserveHeading(b,
this._tmp3d,.001*a.timestamp,this.startCamera,this._sphere,this._beginHeading,this.view.camera.tilt)):(c.applyPanSphericalDirectRotation(this._sphere,this.currentCamera,this._beginScenePoint,this._tmp3d,this.view.camera.tilt,!1),this._panSphericalMomentumEstimator.addMomentumDirectRotation(b,this._tmp3d,.001*a.timestamp,this.startCamera,this._sphere[3],this.view.camera.tilt));this._constraintOptions.interactionType=m.InteractionType.PAN;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(u.distance(this._screenPickPoint,
b));f.applyAll(this.view,this.currentCamera,this._constraintOptions)};g._rotateSpherical=function(a){e.normalize(this._rotationAxis,this._scenePickPoint);this.currentCamera.aboveGround||e.negate(this._rotationAxis,this._rotationAxis);var b=this._smoothRotation.value,d=c.normalizeRotationDelta(a.angle-b);b+=d;this._smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this._smoothRotation.update(b);d=this._smoothRotation.value-this._beginAngle;this._rotationMomentumEstimator.add(d,.001*a.timestamp);
c.applyRotation(this.currentCamera,this._sphere,x.wrapAxisAngle(this._rotationAxis,d));this._constraintOptions.interactionType=m.InteractionType.TUMBLE;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*b);f.applyAll(this.view,this.currentCamera,this._constraintOptions)};g._panningPlanar=function(a){const b=h.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.intersectPlaneFromScreenPointAtEye(this._panningPlane,this.currentCamera,b,this._tmp3d)&&(c.applyPanPlanar(this.currentCamera,
this._beginScenePoint,this._tmp3d),this._panPlanarMomentumEstimator.add(b,this._tmp3d,.001*a.timestamp),this._constraintOptions.interactionType=m.InteractionType.PAN,this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(u.distance(this._beginScreenPoint,b)),this._constraintOptions.interactionDirection=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,this._tmpInteractionDirection),f.applyAll(this.view,this.currentCamera,this._constraintOptions),this._constraintOptions.interactionDirection=
null)};g._zoomPlanar=function(a){const b=this._beginRadius/a.radius;this._smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this._smoothScaling.update(b);this._zoomMomentumEstimator.add(this._smoothScaling.value,.001*a.timestamp);c.applyZoomToPoint(this.currentCamera,this._beginScenePoint,this._smoothScaling.value,this.view.state.constraints.minimumPoiDistance);this._constraintOptions.interactionType=m.InteractionType.ZOOM;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-
this._beginRadius);f.applyAll(this.view,this.currentCamera,this._constraintOptions)};g._rotatePlanar=function(a){e.copy(this._rotationAxis,this._beginScenePoint);this.currentCamera.aboveGround||e.negate(this._rotationAxis,this._rotationAxis);var b=this._smoothRotation.value;let d=a.angle-b;d=c.normalizeRotationDelta(d);this._smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this._smoothRotation.update(b+d);b=this._smoothRotation.value-this._beginAngle;this._rotationMomentumEstimator.add(b,
.001*a.timestamp);c.applyRotation(this.currentCamera,this._sphere,x.wrapAxisAngle(this._rotationAxis,b));this._constraintOptions.interactionType=m.InteractionType.TUMBLE;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*b);f.applyAll(this.view,this.currentCamera,this._constraintOptions)};t._createClass(p,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]);return p}(I.InteractiveController);r.PinchAndPanController=B.__decorate([E.subclass("esri.views.3d.state.controllers.global.PinchAndPanController")],
r.PinchAndPanController);Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});