// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../core/Error ../core/maybe ./vec3 ./vec3f64 ../geometry/projection ../geometry/support/aaBoundingRect ../views/3d/terrain/TerrainConst ../views/3d/terrain/TilingScheme".split(" "),function(q,r,l,h,m,A,t,w,v){function x(a,d,c=0){a=a.extent;return l.isNone(a)?!1:0===c?t.containsPoint(a,d):t.containsPointWithMargin(a,d,c*Math.min(a[2]-a[0],a[3]-a[1]))}function u(a,d,c,b){h.copy(n,c);n[b]=d[b];b=h.subtract(n,n,d);var e=h.subtract(B,a,d);e=h.dot(e,b);const k=h.dot(b,b);d=0>=e?d:k<=e?c:
h.add(n,d,h.scale(b,b,e/k));a=h.subtract(n,a,d);return Math.PI/2-Math.atan(a[2]/Math.sqrt(a[0]*a[0]+a[1]*a[1]))}function y(a,d,c){a=a.extent;if(l.isNone(a))return 0;f[0]=a[0];f[1]=a[1];f[2]=c;g[0]=a[2];g[1]=a[3];g[2]=c;a=c=Infinity;d[0]<f[0]?c=u(d,f,g,0):d[0]>g[0]&&(c=u(d,g,f,0));d[1]<f[1]?a=u(d,f,g,1):d[1]>g[1]&&(a=u(d,g,f,1));return Math.min(c,a)}function z(a,d,c){if(l.isNone(a))return v.getMissingTileInfoError();if(a.spatialReference.isGeographic&&!A.canProjectToWGS84ComparableLonLat(a.spatialReference))return new r("tilingscheme:local-unsupported-spatial-reference",
"The tiling scheme spatial reference is not supported in local scenes");var b=v.TilingScheme.checkUnsupported(a);if(l.isSome(b))return b;if(l.isNone(c))return new r("tilingscheme:extent-not-exist","The layer does not provide a layer extent.");{var e=a.lods;b=e[0].resolution*2**e[0].level;var k=[b*a.size[0],b*a.size[1]];const C=[a.origin.x,a.origin.y];c=t.fromExtent(c);const p=t.create();v.TilingScheme.computeRowColExtent(c,k,C,p);k=(p[2]-p[0])*(p[3]-p[1]);k>w.MAX_ROOT_TILES?(e=e[0].scale*2**e[0].level,
b=Math.max((c[3]-c[1])/a.size[1],(c[2]-c[0])/a.size[0])*e/b,c=Math.floor(Math.log(b)/Math.log(10)),b=Math.ceil(b/10**c)*10**c,b=new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(e).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+b.toLocaleString()+".",{level0Scale:e,suggestedLevel0Scale:b,requiredNumRootTiles:k,allowedNumRootTiles:w.MAX_ROOT_TILES})):b=null}if(b)return b;a=a.spatialReference;return!l.isSome(d)||a.equals(d)||
d.isWGS84&&a.isWebMercator?null:new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene")}const n=m.create(),B=m.create(),f=m.create(),g=m.create();m=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:z,isInsideExtent:x,tiltToExtentEdge:y},Symbol.toStringTag,{value:"Module"}));q.checkIfTileInfoSupportedForViewSR=z;q.isInsideExtent=x;q.terrainUtilsPlanar=m;q.tiltToExtentEdge=y});