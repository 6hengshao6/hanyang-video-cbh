// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat4","../../../../chunks/mat4f64","./localOriginHelper"],function(d,f,h,k,l){let m=function(){function b(a){this._factory=a;this._originData=new Map}var c=b.prototype;c.acquire=function(a){return this.register(this._factory.getOrigin(a))};c.register=function(a){a=this._originData.get(a.id)||new g(a);a.refCount++;this._originData.has(a.origin.id)||this._originData.set(a.origin.id,a);return a};c.release=function(a){a.refCount--;
0===a.refCount&&this._originData.delete(a.origin.id)};c.updateViewMatrices=function(a){this._originData.forEach(e=>{h.copy(e.viewMatrix,a);l.applyToViewMatrix(e.origin.vec3,e.viewMatrix)})};return f._createClass(b)}(),g=f._createClass(function(b){this.origin=b;this.refCount=0;this.viewMatrix=k.create()});d.LocalOriginManager=m;d.OriginData=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});