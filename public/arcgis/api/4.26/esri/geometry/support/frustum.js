// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../core/ObjectStack ../../chunks/mat4 ../../chunks/vec3 ../../chunks/vec3f64 ../../chunks/vec4 ../../chunks/vec4f64 ./clipRay ./plane ./vectorStacks".split(" "),function(a,u,m,v,f,w,g,l,e,n){function p(){return[f.create(),f.create(),f.create(),f.create(),f.create(),f.create(),f.create(),f.create()]}function q(b,c){e.fromPoints(c[a.PointIndex.FAR_BOTTOM_LEFT],c[a.PointIndex.NEAR_BOTTOM_LEFT],c[a.PointIndex.NEAR_TOP_LEFT],b[a.PlaneIndex.LEFT]);e.fromPoints(c[a.PointIndex.NEAR_BOTTOM_RIGHT],
c[a.PointIndex.FAR_BOTTOM_RIGHT],c[a.PointIndex.FAR_TOP_RIGHT],b[a.PlaneIndex.RIGHT]);e.fromPoints(c[a.PointIndex.FAR_BOTTOM_LEFT],c[a.PointIndex.FAR_BOTTOM_RIGHT],c[a.PointIndex.NEAR_BOTTOM_RIGHT],b[a.PlaneIndex.BOTTOM]);e.fromPoints(c[a.PointIndex.NEAR_TOP_LEFT],c[a.PointIndex.NEAR_TOP_RIGHT],c[a.PointIndex.FAR_TOP_RIGHT],b[a.PlaneIndex.TOP]);e.fromPoints(c[a.PointIndex.NEAR_BOTTOM_LEFT],c[a.PointIndex.NEAR_BOTTOM_RIGHT],c[a.PointIndex.NEAR_TOP_RIGHT],b[a.PlaneIndex.NEAR]);e.fromPoints(c[a.PointIndex.FAR_BOTTOM_RIGHT],
c[a.PointIndex.FAR_BOTTOM_LEFT],c[a.PointIndex.FAR_TOP_LEFT],b[a.PlaneIndex.FAR])}function r(b,c){for(let d=0;d<a.NumPlanes.NUM;d++)if(!e.clip(b[d],c))return!1;return!0}a.PlaneIndex=void 0;(function(b){b[b.LEFT=0]="LEFT";b[b.RIGHT=1]="RIGHT";b[b.BOTTOM=2]="BOTTOM";b[b.TOP=3]="TOP";b[b.NEAR=4]="NEAR";b[b.FAR=5]="FAR"})(a.PlaneIndex||(a.PlaneIndex={}));a.PointIndex=void 0;(function(b){b[b.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT";b[b.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT";b[b.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT";
b[b.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT";b[b.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT";b[b.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT";b[b.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT";b[b.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"})(a.PointIndex||(a.PointIndex={}));const x={bottom:[a.PointIndex.FAR_BOTTOM_RIGHT,a.PointIndex.NEAR_BOTTOM_RIGHT,a.PointIndex.NEAR_BOTTOM_LEFT,a.PointIndex.FAR_BOTTOM_LEFT],near:[a.PointIndex.NEAR_BOTTOM_LEFT,a.PointIndex.NEAR_BOTTOM_RIGHT,a.PointIndex.NEAR_TOP_RIGHT,a.PointIndex.NEAR_TOP_LEFT],far:[a.PointIndex.FAR_BOTTOM_RIGHT,
a.PointIndex.FAR_BOTTOM_LEFT,a.PointIndex.FAR_TOP_LEFT,a.PointIndex.FAR_TOP_RIGHT],right:[a.PointIndex.NEAR_BOTTOM_RIGHT,a.PointIndex.FAR_BOTTOM_RIGHT,a.PointIndex.FAR_TOP_RIGHT,a.PointIndex.NEAR_TOP_RIGHT],left:[a.PointIndex.FAR_BOTTOM_LEFT,a.PointIndex.NEAR_BOTTOM_LEFT,a.PointIndex.NEAR_TOP_LEFT,a.PointIndex.FAR_TOP_LEFT],top:[a.PointIndex.FAR_TOP_LEFT,a.PointIndex.NEAR_TOP_LEFT,a.PointIndex.NEAR_TOP_RIGHT,a.PointIndex.FAR_TOP_RIGHT]};a.NumPlanes=void 0;(function(b){b[b.NUM=6]="NUM"})(a.NumPlanes||
(a.NumPlanes={}));a.NumPoints=void 0;(function(b){b[b.NUM=8]="NUM"})(a.NumPoints||(a.NumPoints={}));const y=[g.fromValues(-1,-1,-1,1),g.fromValues(1,-1,-1,1),g.fromValues(1,1,-1,1),g.fromValues(-1,1,-1,1),g.fromValues(-1,-1,1,1),g.fromValues(1,-1,1,1),g.fromValues(1,1,1,1),g.fromValues(-1,1,1,1)],t=new u.ObjectStack(l.create),z=p();a.computePlanes=q;a.copy=function(b,c){for(let d=0;d<a.NumPlanes.NUM;d++)e.copy(b[d],c[d])};a.create=function(b){return b?[e.create(b[0]),e.create(b[1]),e.create(b[2]),
e.create(b[3]),e.create(b[4]),e.create(b[5])]:[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]};a.createPoints=p;a.fromMatrix=function(b,c,d,h=z){b=m.multiply(n.sm4d.get(),c,b);m.invert(b,b);for(c=0;c<a.NumPoints.NUM;++c){const k=w.transformMat4(n.sv4d.get(),y[c],b);v.set(h[c],k[0]/k[3],k[1]/k[3],k[2]/k[3])}q(d,h)};a.intersectClipRay=function(b,c){for(let d=0;d<a.NumPlanes.NUM;d++)if(!e.clipInfinite(b[d],c))return!1;return!0};a.intersectsLineSegment=function(b,c,d){return r(b,l.fromLineSegmentAndDirection(c,
d,t.get()))};a.intersectsPoint=function(b,c){for(let d=0;d<a.NumPlanes.NUM;d++)if(0<e.signedDistance(b[d],c))return!1;return!0};a.intersectsRay=function(b,c){return r(b,l.fromRay(c,t.get()))};a.intersectsSphere=function(b,c){for(let d=0;d<a.NumPlanes.NUM;d++){const h=b[d];if(h[0]*c[0]+h[1]*c[1]+h[2]*c[2]+h[3]>=c[3])return!1}return!0};a.planePointIndices=x;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});