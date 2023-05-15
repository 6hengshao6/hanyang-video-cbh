// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../lib/VertexAttribute","./internal/bufferWriterUtils"],function(c,e,f,g){let n=function(){function d(a){this.vertexBufferLayout=a}var b=d.prototype;b.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};b.elementCount=function(a){return a.indices.get(f.VertexAttribute.POSITION).length};b.write=function(a,h,k,l,m){g.writeDefaultAttributes(k,this.vertexBufferLayout,a,h,l,m)};return e._createClass(d)}();c.DefaultBufferWriter=
n;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});