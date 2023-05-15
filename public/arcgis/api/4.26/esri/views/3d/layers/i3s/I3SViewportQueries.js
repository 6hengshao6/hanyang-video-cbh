// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../geometry/ellipsoidUtils ../../../../geometry/projection ../../../../geometry/spatialReferenceEllipsoidUtils ../../../../geometry/support/frustum ../../../../geometry/support/spatialReferenceUtils ../../../../chunks/sphere ../../../../layers/graphics/dehydratedFeatures ../graphics/elevationAlignmentUtils ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ./I3SNode ./I3SUtil ../../support/orientedBoundingBox".split(" "),
function(w,k,d,n,x,y,z,A,q,B,C,D,t,E,u,m,l,p){return function(){function v(a,b,c,f,g,h,F,G,r={}){this._indexSR=a;this._renderCoordsHelper=b;this._clippingArea=g;this._elevationProvider=h;this._viewingMode=F;this._options=r;this._frustum=q.create();this._useFrustumCulling=!1;this._poi=n.create();this._elevationContext=null;this.minDistance=Infinity;this.maxDistance=0;this.maxLodLevel=2;this._tmpObb=p.create();this._tmp1=n.create();this._tmp2=n.create();this._tmp3=n.create();this._tmp0=n.create();this._screenspaceErrorBias=
r.screenspaceErrorBias||1;this._progressiveLoadFactor=r.progressiveLoadFactor||1;this.updateCamera(c,f);this.engineSR=this._renderCoordsHelper.spatialReference;this.updateElevationInfo(G);this._tmpPoint=D.makeDehydratedPoint(0,0,0,a);this._isECEFOBBInLocalMode=this._indexSR.isWGS84&&(this.engineSR.isWebMercator||B.isPlateCarree(this.engineSR));this._indexSREllipsoidRadius=y.getReferenceEllipsoid(this._indexSR).radius}var e=v.prototype;e.updateElevationInfo=function(a){null==a?this._elevationContext=
null:(this._elevationContext=E.ElevationContext.fromElevationInfo(a),this._elevationContext.updateFeatureExpressionInfoContext(u.createContextWithoutExpressionSupport(u.extractExpressionInfo(a,!1))))};e.updateCamera=function(a,b){(this._useFrustumCulling=b)&&q.fromMatrix(a.viewMatrix,a.projectionMatrix,this._frustum);this._screenSizeFactor=1/(a.perScreenPixelRatio/2);this._camPos=a.eye;this.minDistance=Infinity;this.maxDistance=0};e.setPointOfInterest=function(a){this._poi=a};e.updateScreenSpaceErrorBias=
function(a){const b=this._screenspaceErrorBias;this._screenspaceErrorBias=a;return b};e.updateClippingArea=function(a){this._clippingArea=a};e.getElevationRange=function(a){if(k.isNone(this._elevationContext))return null;a=a.mbs;if(!a)return null;const b="relative-to-scene"===this._elevationContext.mode?"scene":"ground";if(this._elevationProvider.getSphereElevationBounds)return this._elevationProvider.getSphereElevationBounds(a,this._indexSR);a=this._elevationProvider.getElevation(a[0],a[1],a[2],
this._indexSR,b);return k.isSome(a)?{min:a,max:a}:null};e.getRenderMbs=function(a){const b=a.renderMbs;if(l.isValidMbs(b))return b;a.mbs&&x.copy(b,a.mbs);this._elevationContext&&1E5>b[3]&&(this._tmpPoint.x=b[0],this._tmpPoint.y=b[1],this._tmpPoint.z=b[2],b[2]=t.evaluateElevationAlignmentAtPoint(this._tmpPoint,this._elevationProvider,this._elevationContext,this._renderCoordsHelper));z.projectBoundingSphere(b,this._indexSR,b,this.engineSR);return b};e.getVisibilityObb=function(a){if(k.isSome(a.visibilityObb))return a.visibilityObb;
const b=a.serviceObb,c=.01*this._indexSREllipsoidRadius;if(k.isNone(b)||!a.mbs||!l.isValidObb(b)||this._isECEFOBBInLocalMode&&b.halfSize.some(f=>f>c))return null;a.serviceObbInRenderSR=this._computeRenderObb(b,a.serviceObbInRenderSR,a.mbs[3],a.elevationRange);return a.serviceObbInRenderSR};e._computeRenderObb=function(a,b,c,f){if(k.isNone(b))b=p.create();else if(l.isValidObb(b))return b;let g=0,h=0;if(this._elevationContext&&k.isSome(f)&&Number.isFinite(f.min))switch(this._elevationContext.mode){case "relative-to-ground":g=
this._elevationContext.geometryZWithOffset(a.center[2],this._renderCoordsHelper)+f.min-a.center[2];h=f.max-f.min;break;case "on-the-ground":g=f.min-a.center[2],h=f.max-f.min}else this._elevationContext&&1E5>c&&(this._tmpPoint.x=a.center[0],this._tmpPoint.y=a.center[1],this._tmpPoint.z=a.center[2],g=t.evaluateElevationAlignmentAtPoint(this._tmpPoint,this._elevationProvider,this._elevationContext,this._renderCoordsHelper)-a.center[2]);0<h?(l.transformObb(a,this._indexSR,this._tmpObb,this.engineSR,g),
p.computeOffsetObb(this._tmpObb,0,h,this._viewingMode,b)):l.transformObb(a,this._indexSR,b,this.engineSR,g);return b};e.isNodeVisible=function(a){const b=this.getRenderMbs(a);if(!this._isMBSinClippingArea(b))return!1;if(!this._useFrustumCulling)return!0;a=this.getVisibilityObb(a);return k.isSome(a)?p.isVisible(a,this._frustum):q.intersectsSphere(this._frustum,C.wrap(b))};e.isGeometryVisible=function(a){if(!this._useFrustumCulling)return!0;const b=a.geometryObb;return k.isSome(b)?p.isVisible(b,this._frustum):
this.isNodeVisible(a)};e._isMBSinClippingArea=function(a){return k.isNone(this._clippingArea)?!0:l.intersectBoundingRectWithMbs(this._clippingArea,a)!==l.MbsIntersectResult.OUTSIDE};e._screenSpaceDiameterMbs=function(a,b){var c=this.getRenderMbs(a);a=Math.sqrt(d.squaredDistance(c,this._camPos));c=a-c[3];this._updateMinMaxDistance(a);return 0>c?.5*Number.MAX_VALUE:b/c*this._screenSizeFactor};e.calcCameraDistance=function(a){return this.calcCameraDistanceToCenter(a)-this.getRenderMbs(a)[3]};e.calcCameraDistanceToCenter=
function(a){a=this.getRenderMbs(a);a=d.distance(a,this._camPos);this._updateMinMaxDistance(a);return a};e.calcAngleDependentLoD=function(a){a=this.getRenderMbs(a);const b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/d.length(a)+b)/d.distance(a,this._camPos);return Math.min(1,a)};e.hasLOD=function(a){return a.lodMetric!==m.LodMetric.None};e._getDistancePlanarMode=function(a,b){var c=a[0]-b[0];const f=a[1]-b[1];a=a[2]-b[2];c=c*c+f*f;b=b[3];if(c<=
b*b)return Math.abs(a);b=Math.sqrt(c)-b;return Math.sqrt(a*a+b*b)};e._getDistanceGlobeMode=function(a,b){var c=d.length(b);const f=d.length(a)-c;d.scale(this._tmp0,a,d.dot(a,b)/d.squaredLength(a));var g=d.squaredDistance(b,this._tmp0),h=b[3];if(g<=h*h)return Math.abs(f);b=d.scale(this._tmp0,b,1/c);c=d.scale(this._tmp1,b,c-h*h/2/c);g=d.subtract(this._tmp2,a,c);g=d.subtract(this._tmp2,g,d.scale(this._tmp3,b,d.dot(b,g)));c=d.add(this._tmp2,c,d.scale(this._tmp2,g,h/d.length(g)));h=d.distance(a,c);2E5<=
f&&(a=d.subtract(this._tmp1,a,c),a=d.dot(a,b)/d.length(a),.08>a&&(a=1E-4),h/=a);return h};e._getDistance=function(a,b){return this.engineSR===A.getSphericalPCPF(this.engineSR)?this._getDistanceGlobeMode(a,b):this._getDistancePlanarMode(a,b)};e._updateMinMaxDistance=function(a){0<a?(this.minDistance=Math.min(this.minDistance,a),this.maxDistance=Math.max(this.maxDistance,a)):(this.minDistance=0,this.maxDistance=Math.max(this.maxDistance,-a))};e.getLodLevel=function(a){if(a.lodMetric===m.LodMetric.None)return 0;
if(0===a.childCount)return this.maxLodLevel;if(this._useFrustumCulling&&1>this._progressiveLoadFactor){const b=this._screenspaceErrorBias;return this.evaluateLODmetric(a,this._progressiveLoadFactor*this._screenspaceErrorBias)?this.evaluateLODmetric(a,b)?2:1:0}return this.evaluateLODmetric(a,this._screenspaceErrorBias)?this.maxLodLevel:0};e.evaluateLODmetric=function(a,b){switch(a.lodMetric){case m.LodMetric.ScreenSpaceRelative:const c=this.getRenderMbs(a),f=this._getDistance(this._camPos,c),g=2*f/
this._screenSizeFactor;this._updateMinMaxDistance(f+c[3]);return a.maxError*b<=g;case m.LodMetric.MaxScreenThreshold:return b=this._screenSpaceDiameterMbs(a,a.mbs[3]*b),this._options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),b<a.maxError;case m.LodMetric.RemovedFeatureDiameter:return 10>this._screenSpaceDiameterMbs(a,a.maxError)*b;case m.LodMetric.DistanceRangeFromDefaultCamera:return this.calcCameraDistance(a)>a.maxError*b}return!1};e.distToPOI=function(a){a=this.getRenderMbs(a);return d.distance(a,
this._poi)-a[3]};e.distCameraToPOI=function(){return d.distance(this._camPos,this._poi)};return w._createClass(v)}()});