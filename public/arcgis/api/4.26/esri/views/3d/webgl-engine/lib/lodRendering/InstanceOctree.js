// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/sphere ../../../support/mathUtils ../Octree".split(" "),function(h,e,l,m,k,n,f){f=function(c){function d(b,g){var a=p.call(this,q=>k.wrap(a._instanceData.view.boundingSphere.getVec(q,a._tmpSphere)),{maximumDepth:25});a._tmpSphere=k.create();a._tmpMat4=l.create();a._instanceData=b;a._boundingSphere=g;return a}e._inherits(d,c);var p=e._createSuper(d);c=d.prototype;
c.addInstance=function(b){const g=this._instanceData.view.boundingSphere,a=this._instanceData.getCombinedModelTransform(b,this._tmpMat4);m.transformMat4(this._tmpSphere,this._boundingSphere.center,a);this._tmpSphere[3]=this._boundingSphere.radius*n.maxScale(a);g.setVec(b,this._tmpSphere);this.add([b])};c.removeInstance=function(b){this.remove([b])};return e._createClass(d)}(f);h.InstanceOctree=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});