// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(l,m){var f;(function(c){c[c.JSON=1313821514]="JSON";c[c.BIN=5130562]="BIN"})(f||(f={}));let e=function(){function c(b,a){if(!b)throw Error("GLB requires a JSON gltf chunk");this._length=c.HEADER_SIZE;this._length+=c.CHUNK_HEADER_SIZE;b=this._textToArrayBuffer(b);this._length+=this._alignTo(b.byteLength,4);if(a&&(this._length+=c.CHUNK_HEADER_SIZE,this._length+=a.byteLength,a.byteLength%4))throw Error("Expected BIN chunk length to be divisible by 4 at this point");
this.buffer=new ArrayBuffer(this._length);this._outView=new DataView(this.buffer);this._writeHeader();b=this._writeChunk(b,12,f.JSON,32);a&&this._writeChunk(a,b,f.BIN)}var d=c.prototype;d._writeHeader=function(){this._outView.setUint32(0,c.MAGIC,!0);this._outView.setUint32(4,c.VERSION,!0);this._outView.setUint32(8,this._length,!0)};d._writeChunk=function(b,a,k,g=0){const h=this._alignTo(b.byteLength,4);this._outView.setUint32(a,h,!0);this._outView.setUint32(a+=4,k,!0);this._writeArrayBuffer(this._outView.buffer,
b,a+=4,0,b.byteLength);for(a+=b.byteLength;a%4;)g&&this._outView.setUint8(a,g),a++;return a};d._writeArrayBuffer=function(b,a,k,g,h){(new Uint8Array(b,k,h)).set(new Uint8Array(a,g,h),0)};d._textToArrayBuffer=function(b){return(new TextEncoder).encode(b).buffer};d._alignTo=function(b,a){return a*Math.ceil(b/a)};return m._createClass(c)}();e.HEADER_SIZE=12;e.CHUNK_HEADER_SIZE=8;e.MAGIC=1179937895;e.VERSION=2;l.GLB=e;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});