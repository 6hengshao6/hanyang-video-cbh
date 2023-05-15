// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/plane ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/TiltMode ../InteractiveController ../../utils/navigationUtils".split(" "),
function(m,n,v,w,x,y,G,H,I,J,K,z,p,q,b,d,r,t,A,B,C,D,e){m.ZoomController=function(k){function l(){var a=E.apply(this,arguments);a._tmpP=d.create();a._tmpDir=d.create();a._tmpN=d.create();a._tmpP0=q.create();a._tmpPoi=d.create();a._tmpRayDir=d.create();a.dragBeginPoint=y.createScreenPointArray();a._normalizedAnchorPoint=q.create();a._constraintOptions={selection:A.ConstraintTypes.ALL,interactionType:B.InteractionType.ZOOM,interactionFactor:0,interactionStartCamera:null,interactionDirection:d.create(),
tiltMode:C.TiltMode.TUMBLE};a._plane=r.create();return a}n._inherits(l,k);var E=n._createSuper(l);k=l.prototype;k.begin=function(a){if(this.active){p.copy(this.dragBeginPoint,a);e.normalizeCoordinate(this.startCamera,a,this._normalizedAnchorPoint);var f=this._intersectionHelper.intersectScreenFreePointFallback(a,this._tmpP,0===this.view.map.ground.opacity?e.contentIntersectorOptions:{});b.subtract(this._tmpDir,this._tmpP,this.startCamera.eye);var g=b.length(this._tmpDir);b.normalize(this._tmpDir,
this._tmpDir);var c=Math.abs(this.view.camera.position.z);c=w.clamp(Math.min(e.PIVOT_DISTANCE_MODIFIER,1/Math.abs(b.dot(F,this._tmpDir)))*c,e.DISTANCE_CLAMP_VALUES[0],e.DISTANCE_CLAMP_VALUES[1]);a=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,a[0],a[1],this.view.state.camera,e.SCREEN_PIXEL_AREA);c=x.isSome(a)?a:c;c=f?Math.min(c,g):c;b.scale(this._tmpDir,this._tmpDir,c);b.add(this._tmpP,this.startCamera.eye,this._tmpDir);b.subtract(this._tmpN,this.startCamera.eye,this.startCamera.center);
b.normalize(this._tmpN,this._tmpN);0>this._tmpN[1]&&b.negate(this._tmpN,this._tmpN);r.fromPositionAndNormal(this._tmpP,this._tmpN,this._plane);this._constraintOptions.interactionStartCamera=this.startCamera}};k.update=function(a){if(this.active){e.intersectPlaneFromScreenPoint(this._plane,this.currentCamera,this.dragBeginPoint,this._tmpPoi)||b.copy(this._tmpPoi,this.currentCamera.center);e.normalizeCoordinate(this.currentCamera,a,this._tmpP0);var f=4*(this._tmpP0[1]-this._normalizedAnchorPoint[1]);
p.copy(this._normalizedAnchorPoint,this._tmpP0);b.subtract(this._tmpRayDir,this._tmpPoi,this.currentCamera.eye);var g=b.length(this._tmpRayDir),c=g*(1-f);this._constraintOptions.interactionDirection&&(b.copy(this._constraintOptions.interactionDirection,this._tmpRayDir),b.scale(this._constraintOptions.interactionDirection,this._constraintOptions.interactionDirection,Math.sign(f)/g));var u=this.view.state.constraints.minimumPoiDistance;0<=f&&c<u&&(c=u,f=-(c-g)/g);1E-6>Math.abs(g-c)||(b.scale(this._tmpRayDir,
this._tmpRayDir,f),this.currentCamera.eye=b.add(h,this.currentCamera.eye,this._tmpRayDir),b.lerp(h,this.currentCamera.center,this._tmpPoi,f),h[2]=this._tmpPoi[2]>this.startCamera.center[2]?Math.max(this.startCamera.center[2],h[2]):Math.min(this.startCamera.center[2],h[2]),this.currentCamera.center=h,this._constraintOptions.interactionFactor=t.pixelDistanceToInteractionFactor(p.distance(this.dragBeginPoint,a)),t.applyAll(this.view,this.currentCamera,this._constraintOptions),this.commitCamera())}};
k.end=function(){this.active&&this.finishController()};n._createClass(l,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]);return l}(D.InteractiveController);m.ZoomController=v.__decorate([z.subclass("esri.views.3d.state.controllers.local.ZoomController")],m.ZoomController);const h=d.create(),F=d.fromValues(0,0,1);Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});