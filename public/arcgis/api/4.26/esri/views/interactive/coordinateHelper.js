// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/vec2 ../../chunks/vec2f64 ../../chunks/vec3 ../../chunks/vec3f64 ../../chunks/vec4 ../../chunks/vec4f64 ../../geometry/Point".split(" "),function(m,r,n,p,h,k,t,q,l){var d;(function(f){f[f.Z=0]="Z";f[f.M=1]="M"})(d||(d={}));let v=function(){function f(a){this.spatialReference=a}var c=f.prototype;c.createVector=function(){return this._tag(p.create())};c.pointToVector=function(a){return this._tag(p.fromValues(a.x,a.y))};c.arrayToVector=
function(a){return this._tag(p.fromValues(a[0],a[1]))};c.vectorToArray=function(a){return[a[0],a[1]]};c.pointToArray=function(a){return[a.x,a.y]};c.vectorToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=void 0;b.m=void 0;b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=void 0;b.m=void 0;b.spatialReference=this.spatialReference;return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,
type:"point"}){b.x=a[0];b.y=a[1];b.z=void 0;b.m=void 0;b.hasZ=!1;b.hasM=!1;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return n.lerp(g,a,b,e)};c.addDelta=function(a,b,e){a[0]+=b;a[1]+=e};c.distance=function(a,b){return n.distance(a,b)};c.getZ=function(a,b){return b};c.hasZ=function(){return!1};c.getM=function(a,b){return b};c.hasM=function(){return!1};c.clone=function(a){return this._tag(p.fromArray(a))};c.copy=function(a,b){return n.copy(b,a)};c.fromXYZ=function(a){return this._tag(p.fromValues(a[0],
a[1]))};c.toXYZ=function(a,b=k.create()){return h.set(b,a[0],a[1],0)};c.pointToXYZ=function(a,b=k.create()){return h.set(b,a.x,a.y,0)};c.equals=function(a,b){return n.equals(a,b)};c._tag=function(a){return a};return r._createClass(f)}(),u=function(){function f(a,b){this._valueType=a;this.spatialReference=b}var c=f.prototype;c.createVector=function(){return this._tag(k.create())};c.pointToVector=function(a){return this._tag(k.fromValues(a.x,a.y,this._valueType===d.Z?a.z:a.m))};c.arrayToVector=function(a){return this._tag(k.fromValues(a[0],
a[1],a[2]||0))};c.vectorToArray=function(a){return[a[0],a[1],a[2]]};c.pointToArray=function(a){return this._valueType===d.Z?[a.x,a.y,a.z]:[a.x,a.y,a.m]};c.vectorToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=this._valueType===d.Z?a[2]:void 0;b.m=this._valueType===d.M?a[2]:void 0;b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=this._valueType===d.Z?a[2]:void 0;b.m=this._valueType===d.M?a[2]:void 0;b.spatialReference=this.spatialReference;
return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const e=this._valueType===d.Z,g=this._valueType===d.M;b.x=a[0];b.y=a[1];b.z=e?a[2]:void 0;b.m=g?a[2]:void 0;b.hasZ=e;b.hasM=g;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return h.lerp(g,a,b,e)};c.addDelta=function(a,b,e,g){a[0]+=b;a[1]+=e;this._valueType===d.Z&&(a[2]+=g)};c.distance=function(a,b){return this._valueType===
d.Z?h.distance(a,b):n.distance(a,b)};c.getZ=function(a,b){return this._valueType===d.Z?a[2]:b};c.hasZ=function(){return this._valueType===d.Z};c.getM=function(a,b){return this._valueType===d.M?a[2]:b};c.hasM=function(){return this._valueType===d.M};c.clone=function(a){return this._tag(k.fromArray(a))};c.copy=function(a,b){return h.copy(b,a)};c.fromXYZ=function(a,b=0,e=0){return this._tag(k.fromValues(a[0],a[1],this._valueType===d.Z?2<a.length?a[2]:b:e))};c.toXYZ=function(a,b=k.create()){return h.set(b,
a[0],a[1],this._valueType===d.Z?a[2]:0)};c.pointToXYZ=function(a,b=k.create()){return h.set(b,a.x,a.y,this._valueType===d.Z?a.z??0:0)};c.equals=function(a,b){return h.equals(a,b)};c._tag=function(a){return a};return r._createClass(f)}(),w=function(){function f(a){this.spatialReference=a}var c=f.prototype;c.createVector=function(){return this._tag(q.create())};c.pointToVector=function(a){return this._tag(q.fromValues(a.x,a.y,a.z,a.m))};c.arrayToVector=function(a){return this._tag(q.fromValues(a[0],
a[1],a[2]||0,a[3]||0))};c.vectorToArray=function(a){return[a[0],a[1],a[2],a[3]]};c.pointToArray=function(a){return[a.x,a.y,a.z,a.m]};c.vectorToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.spatialReference=this.spatialReference;return b};c.arrayToPoint=function(a,b=new l){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.spatialReference=this.spatialReference;return b};c.vectorToDehydratedPoint=function(a,b={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,
type:"point"}){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.hasZ=!0;b.hasM=!0;b.spatialReference=this.spatialReference;return b};c.lerp=function(a,b,e,g){return t.lerp(g,a,b,e)};c.addDelta=function(a,b,e,g){a[0]+=b;a[1]+=e;a[2]+=g};c.distance=function(a,b){return h.distance(a,b)};c.getZ=function(a){return a[2]};c.hasZ=function(){return!0};c.getM=function(a){return a[3]};c.hasM=function(){return!0};c.clone=function(a){return this._tag(q.fromArray(a))};c.copy=function(a,b){return t.copy(b,a)};c.fromXYZ=function(a,
b=0,e=0){return this._tag(q.fromValues(a[0],a[1],2<a.length?a[2]:b,e))};c.toXYZ=function(a,b=k.create()){return h.set(b,a[0],a[1],a[2])};c.pointToXYZ=function(a,b=k.create()){return h.set(b,a.x,a.y,a.z??0)};c.equals=function(a,b){return t.equals(a,b)};c._tag=function(a){return a};return r._createClass(f)}();m.CoordinateHelper2D=v;m.CoordinateHelper3D=u;m.CoordinateHelper4D=w;m.createCoordinateHelper=function(f,c,a){return f&&c?new w(a):c?new u(d.M,a):f?new u(d.Z,a):new v(a)};Object.defineProperty(m,
Symbol.toStringTag,{value:"Module"})});