// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../geometry/projection ../../../../geometry/support/DoubleArray ../../../../geometry/support/triangulationUtils ../../layers/graphics/elevationAlignmentUtils ../../terrain/OverlayRenderer".split(" "),function(l,g,p,A,k,n,B,C){function t(b,a,c=null){return b.filter(({count:d})=>1<d).map(({index:d,count:e})=>{const f=3*d,h=3*e;return p.isSome(c)?new u(d,e,k.doubleSubArray(a,f,h),k.doubleSubArray(c,f,h)):new q(d,
e,k.doubleSubArray(a,f,h))})}function v(b,a,c=null){const d=(p.isSome(c),[]);for(const {index:e,count:f,holeIndices:h,pathLengths:m}of b){if(1>=f)continue;b=3*e;const r=3*f,w=h.map(D=>D-e);b=p.isSome(c)?new x(e,f,k.doubleSubArray(a,3*e,3*f),k.doubleSubArray(c,b,r),w,m):new y(e,f,k.doubleSubArray(a,3*e,3*f),w,m);d.push(b)}return d}let q=g._createClass(function(b,a,c){this.index=b;this.count=a;this.position=c}),u=function(b){function a(d,e,f,h){d=c.call(this,d,e,f);d.mapPositions=h;return d}g._inherits(a,
b);var c=g._createSuper(a);return g._createClass(a)}(q),x=function(b){function a(d,e,f,h,m,r){d=c.call(this,d,e,f,h);d.holeIndices=m;d.pathLengths=r;return d}g._inherits(a,b);var c=g._createSuper(a);return g._createClass(a)}(u),y=function(b){function a(d,e,f,h,m){d=c.call(this,d,e,f);d.holeIndices=h;d.pathLengths=m;return d}g._inherits(a,b);var c=g._createSuper(a);return g._createClass(a)}(q),z=g._createClass(function(b,a,c,d,e,f){this.position=b;this.mapPositions=a;this.polygons=c;this.outlines=
d;this.projectionSuccess=e;this.sampledElevation=f});l.PolygonRenderInfo=z;l.PolygonVertexData=x;l.PolygonVertexDataDraped=y;l.geometryToRenderInfo=function(b,a,c,d){const e=n.pathsToTriangulationInfo(b.rings,!!b.hasZ,n.CounterClockwiseMode.CCW_IS_HOLE),f=k.newDoubleArray(e.position.length);b=B.applyPerVertexElevationAlignment(e.position,b.spatialReference,0,f,0,e.position,0,e.position.length/3,a,c,d);a=null!=b;return new z(e.position,f,v(e.polygons,e.position,f),t(e.outlines,e.position,f),a,b)};
l.geometryToRenderInfoDraped=function(b,a){const c=n.pathsToTriangulationInfo(b.rings,!1,n.CounterClockwiseMode.CCW_IS_HOLE);b=A.projectBuffer(c.position,b.spatialReference,0,c.position,a,0,c.position.length/3);for(a=2;a<c.position.length;a+=3)c.position[a]=C.DRAPED_Z;return{position:c.position,polygons:v(c.polygons,c.position),outlines:t(c.outlines,c.position),projectionSuccess:b}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});