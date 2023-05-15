// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../geometry/support/aaBoundingBox ../../../geometry/support/buffer/BufferPool ../support/buffer/InterleavedLayout ./terrainUtils ../webgl-engine/lib/VertexAttribute".split(" "),function(g,q,r,x,t,y,z,A,B,k){function u(c,d,a,b,e){var f=1/(Math.abs(a)+Math.abs(b)+Math.abs(e));a*=f;b*=f;f=0>=e?(0<=b?1:-1)*(1-Math.abs(a)):b;c.setValues(d,l(0>=e?(0<=a?1:-1)*(1-Math.abs(b)):
a),l(f))}function v(c,d){const a=m(d[0]);d=m(d[1]);const b=1-Math.abs(a)-Math.abs(d);c[2]=b;0>b?(c[0]=(0<=a?1:-1)*(1-Math.abs(d)),c[1]=(0<=d?1:-1)*(1-Math.abs(a))):(c[0]=a,c[1]=d);t.normalize(c,c)}function w(c,d,a,b){c.setValues(d,16384*a,16384*b)}function l(c){return r.clamp(Math.round(32767*c),-32767,32767)}function m(c){return r.clamp(c/32767,-1,1)}let C=q._createClass(function(){this.vertexAttributes=this.indices=null;this.boundingBox=y.empty();this.numVerticesPerSide=this.indexCount=0;this.uvRange=
[0,0,1,1];this.outerEdges=[null,null,null,null];this.innerEdges=[null,null,null,null]}),G=function(){function c(a,b,e,f,h){this.attributes=a;this.localOrigin=b;this.index0=e;this.stride=f;this.count=h}var d=c.prototype;d.getVertexIndex=function(a){return this.getAttributeIndex(a)};d.getAttributeIndex=function(a){B.internalAssert(0<=a&&a<this.count);return this.index0+this.stride*a};d._getVertexRaw=function(a,b){this.attributes.position.getVec(a,b)};d._getNormalRaw=function(a,b){this.attributes.normalCompressed.getVec(a,
b)};d.getVertexPos=function(a,b){this._getVertexRaw(this.getAttributeIndex(b),a);t.add(a,a,this.localOrigin)};d.getNormal=function(a,b){const e=x.create();this._getNormalRaw(this.getAttributeIndex(b),e);v(a,e)};d._setNormal=function(a,b,e,f){u(this.attributes.normalCompressed,a,b,e,f)};d._setUV=function(a,b,e){w(this.attributes.uv0,a,b,e)};d.setNormalFromValues=function(a,b,e,f){this._setNormal(this.getAttributeIndex(a),b,e,f)};d.setVertexFromValuesRawPositionUV=function(a,b,e,f,h,n){a=this.getAttributeIndex(a);
this.attributes.position.setValues(a,b,e,f);this._setUV(a,h,n)};d.setVertexFromValuesRawPositionUVNormal=function(a,b,e,f,h,n,D,E,F){a=this.getAttributeIndex(a);this.attributes.position.setValues(a,b,e,f);this._setUV(a,h,n);this._setNormal(a,D,E,F)};return q._createClass(c)}();const H=A.newLayout().vec3f(k.VertexAttribute.POSITION).vec2i16(k.VertexAttribute.UV0).vec2i16(k.VertexAttribute.NORMALCOMPRESSED,{glNormalized:!0}),p=new z.BufferPool(c=>H.createBuffer(c),c=>c.count);g.EdgeDescriptor=G;g.PatchGeometry=
C;g.acquireTerrainAttributes=function(c){return p.acquire(c)};g.clearCaches=function(){p.clear()};g.decodeInt16=m;g.decodeNormal=v;g.encodeInt16=l;g.encodeNormalInBuffer=u;g.encodeUVInBuffer=w;g.minMaxBoundingBox=function(c,d,a,b){c<b[0]?b[0]=c:c>b[3]&&(b[3]=c);d<b[1]?b[1]=d:d>b[4]&&(b[4]=d);a<b[2]?b[2]=a:a>b[5]&&(b[5]=a)};g.releaseGeometry=function(c){p.release(c.vertexAttributes);c.vertexAttributes=null;c.indices=null};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});