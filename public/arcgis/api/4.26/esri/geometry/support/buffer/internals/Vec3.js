// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3"],function(h,m,n){let l=function(){function g(a,b,c=0,d,f){this.TypedArrayConstructor=a;this.elementCount=3;a=this.TypedArrayConstructor;void 0===d&&(d=3*a.BYTES_PER_ELEMENT);const k=0===b.byteLength?0:c;this.typedBuffer=null==f?new a(b,k):new a(b,k,(f-c)/a.BYTES_PER_ELEMENT);this.typedBufferStride=d/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*
this.TypedArrayConstructor.BYTES_PER_ELEMENT}var e=g.prototype;e.sliceBuffer=function(a,b,c=this.count-b){b=this.typedBuffer.byteOffset+b*this.stride;return new a(this.buffer,b,this.stride,b+c*this.stride)};e.getVec=function(a,b){a*=this.typedBufferStride;return n.set(b,this.typedBuffer[a],this.typedBuffer[a+1],this.typedBuffer[a+2])};e.setVec=function(a,b){a*=this.typedBufferStride;this.typedBuffer[a++]=b[0];this.typedBuffer[a++]=b[1];this.typedBuffer[a]=b[2]};e.get=function(a,b){return this.typedBuffer[a*
this.typedBufferStride+b]};e.set=function(a,b,c){this.typedBuffer[a*this.typedBufferStride+b]=c};e.setValues=function(a,b,c,d){a*=this.typedBufferStride;this.typedBuffer[a++]=b;this.typedBuffer[a++]=c;this.typedBuffer[a]=d};e.copyFrom=function(a,b,c){const d=this.typedBuffer,f=b.typedBuffer;a*=this.typedBufferStride;b=c*b.typedBufferStride;d[a++]=f[b++];d[a++]=f[b++];d[a]=f[b]};m._createClass(g,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]);return g}();l.ElementCount=3;h.BufferViewVec3Impl=
l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});