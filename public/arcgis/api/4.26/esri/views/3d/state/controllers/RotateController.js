// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/mathUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/ellipsoidUtils ../../camera/constraintUtils ../../camera/constraintUtils/ConstraintTypes ../../camera/constraintUtils/InteractionType ../../camera/constraintUtils/TiltMode ../Constraints ./InteractiveController ../utils/navigationUtils".split(" "),
function(c,u,y,z,r,E,F,N,O,P,G,A,H,I,B,d,l,J,K,t,v,w,C,L,h){c.PivotPoint=void 0;(function(e){e[e.CENTER=0]="CENTER";e[e.EYE=1]="EYE"})(c.PivotPoint||(c.PivotPoint={}));c.RotateController=function(e){function q(a){a=M.call(this,a);a.pivot=c.PivotPoint.CENTER;a._rotScale=0;a._lastPoint=B.create();a._tmpWorldUp=l.create();a._tmpViewDir=l.create();a._tmpRotCurPoint=B.create();a._tmpTransf=H.create();a._tmpAxis=l.create();a._tmpPivotPoint=l.create();a._pivotPos=l.create();a._constraintOptions={selection:t.ConstraintTypes.ALL,
interactionType:v.InteractionType.TUMBLE,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:w.TiltMode.TUMBLE};return a}u._inherits(q,e);var M=u._createSuper(q);e=q.prototype;e.initialize=function(){this._rotScale=this.pivot===c.PivotPoint.CENTER?3:1.5};e.begin=function(a){if(this.active){switch(this.pivot){case c.PivotPoint.EYE:d.copy(this._pivotPos,this.startCamera.eye);this._constraintOptions.interactionType=v.InteractionType.LOOK_AROUND;this._constraintOptions.tiltMode=
w.TiltMode.LOOK_AROUND;this._constraintOptions.selection=t.ConstraintTypes.NONE;break;case c.PivotPoint.CENTER:const f=this._intersectionHelper.intersectRayFreePointFallback(this.startCamera.ray,this._pivotPos,0===this.view.map.ground.opacity?h.contentIntersectorOptions:{});f||d.copy(this._pivotPos,this.startCamera.center);this._constrainPivotPoint(a,f);this.startCamera.center=this._pivotPos;this._constraintOptions.interactionType=v.InteractionType.TUMBLE;this._constraintOptions.tiltMode=w.TiltMode.TUMBLE;
this._constraintOptions.selection=t.ConstraintTypes.ALL&~t.ConstraintTypes.DISTANCE}this._constraintOptions.interactionStartCamera=this.startCamera;h.normalizeCoordinate(this.startCamera,a,this._lastPoint)}};e._constrainPivotPoint=function(a,f){const b=this.startCamera,k=l.create();d.subtract(k,this._pivotPos,b.eye);const n=d.length(k);var g=Math.abs(this.view.camera.position.z);this.view.renderCoordsHelper.worldUpAtPosition(b.eye,D);g=Math.max(Math.min(h.ROTATE_PIVOT_DISTANCE_MODIFIER,1/Math.abs(d.dot(D,
b.viewForward)))*g,h.ROTATE_PIVOT_MIN_DISTANCE_MODIFIER);f&&(g=Math.min(n,g));var p=J.getReferenceEllipsoid(this.view.spatialReference),m=E.createScreenPointArray(b.width/b.pixelRatio*.5,b.height/b.pixelRatio*.5);p=h.decideNavigationMode(this.startCamera,m,p);m=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,b.fullWidth/b.pixelRatio*.5,b.fullHeight/b.pixelRatio*.5,b,2.5*h.ROTATE_SCREEN_PIXEL_AREA,h.ROTATE_SCREEN_PIXEL_AREA);a=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,
a[0],a[1],b,h.ROTATE_SCREEN_PIXEL_AREA);if(r.isSome(m)||r.isSome(a))m=r.unwrapOr(m,a),a=r.isNone(a)||p===h.NavigationMode.Horizontal?m:a,g=m>a?a:m,g=f?Math.min(g,n):g;d.normalize(k,k);d.copy(this._pivotPos,d.add(this._tmpPivotPoint,b.eye,d.scale(this._tmpPivotPoint,k,g)))};e.update=function(a){if(this.active){switch(this.pivot){case c.PivotPoint.EYE:this.currentCamera.center=this._applyRotation(this.currentCamera,a,this.currentCamera.center,this._pivotPos);break;case c.PivotPoint.CENTER:this.currentCamera.center=
this._pivotPos,this.currentCamera.eye=this._applyRotation(this.currentCamera,a,this.currentCamera.eye,this._pivotPos)}K.applyAll(this.view,this.currentCamera,this._constraintOptions);this.commitCamera()}};e.end=function(){this.active&&this.finishController()};e._applyRotation=function(a,f,b,k){this.view.renderCoordsHelper.worldUpAtPosition(k,this._tmpWorldUp);h.normalizeCoordinate(a,f,this._tmpRotCurPoint);f=(this._lastPoint[1]-this._tmpRotCurPoint[1])*this._rotScale;let n=(this._tmpRotCurPoint[0]-
this._lastPoint[0])*this._rotScale;d.subtract(this._tmpViewDir,b,k);b=d.length(this._tmpViewDir);b=z.acosClamped(d.dot(this._tmpViewDir,this._tmpWorldUp)/b);if(this.pivot===c.PivotPoint.EYE){const g=.5*Math.PI-b,p=.495*Math.PI;f=g-Math.max(-p,Math.min(p,g+-.5*f))}f=z.clamp(f+b,C.TiltDefault.min,C.TiltDefault.max)-b;d.cross(this._tmpAxis,a.up,this._tmpViewDir);this.pivot===c.PivotPoint.CENTER&&(n=-n);A.fromRotation(this._tmpTransf,n,this._tmpWorldUp);A.rotate(this._tmpTransf,this._tmpTransf,f,this._tmpAxis);
d.transformMat4(this._tmpViewDir,this._tmpViewDir,this._tmpTransf);a.up=d.transformMat4(x,a.up,this._tmpTransf);d.add(x,k,this._tmpViewDir);I.copy(this._lastPoint,this._tmpRotCurPoint);return x};u._createClass(q,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]);return q}(L.InteractiveController);y.__decorate([F.property()],c.RotateController.prototype,"pivot",void 0);c.RotateController=y.__decorate([G.subclass("esri.views.3d.state.controllers.RotateController")],
c.RotateController);const x=l.create(),D=l.create();Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});