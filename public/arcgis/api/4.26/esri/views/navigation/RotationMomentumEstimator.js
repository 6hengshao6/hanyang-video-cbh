// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],function(g,b,e){e=function(h){function c(a=3,f=.01,d=.95,k=12){return l.call(this,a,f,d,k)}b._inherits(c,h);var l=b._createSuper(c);c.prototype.add=function(a,f){const d=this.value.lastValue;if(null!=d){for(a-=d;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=d+a}b._get(b._getPrototypeOf(c.prototype),"add",this).call(this,a,f)};return b._createClass(c)}(e.MomentumEstimator);g.RotationMomentumEstimator=e;Object.defineProperty(g,
Symbol.toStringTag,{value:"Module"})});