// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3f64"],function(d,f,g,h,b){let k=function(){function c(a){this.mesh=a;this.name="";this.translation=b.create();this.rotation=h.create();this.scale=b.clone(b.ONES);this._nodes=[]}var e=c.prototype;e.addNode=function(a){if(this._nodes.includes(a))throw Error("Node already added");this._nodes.push(a)};e.forEachNode=function(a){this._nodes.forEach(a)};
f._createClass(c,[{key:"rotationAngles",set:function(a){g.fromEuler(this.rotation,a[0],a[1],a[2])}}]);return c}();d.Node=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});