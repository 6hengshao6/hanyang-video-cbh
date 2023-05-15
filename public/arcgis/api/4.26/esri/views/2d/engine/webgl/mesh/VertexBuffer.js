// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../Utils"],function(k,l,g){let h=function(){function b(a,c){this.data=a;this.stride=c}b.decode=function(a){const c=g.allocateTypedArrayBufferwithData(a.data,a.stride);return new b(c,a.stride)};b.fromVertexVector=function(a){const c=g.allocateTypedArrayBufferwithData(a.data.buffer(),a.stride);return new b(c,a.stride)};return l._createClass(b)}(),m=function(){function b(a,c,d){this.geometryType=a;this.indexBuffer=new Uint32Array(c);
this.namedBuffers=d}b.decode=function(a){const c=a.geometryType,d=a.indexBuffer,e={};for(const f in a.namedBuffers)e[f]=h.decode(a.namedBuffers[f]);return new b(c,d,e)};b.fromVertexData=function(a,c){const d=a.indices,e=g.allocateTypedArrayBufferwithData(a.vertices,a.stride);a={geometry:new h(e,a.stride)};return new b(c,d,a)};b.fromVertexVectors=function(a){const c=a.geometryType,d=a.indexVector.buffer(),e={};for(const f in a.namedVectors)e[f]=h.fromVertexVector(a.namedVectors[f]);return new b(c,
d,e)};return l._createClass(b)}();k.VertexBuffers=m;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});