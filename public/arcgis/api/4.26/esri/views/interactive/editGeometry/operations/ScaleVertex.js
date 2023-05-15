// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/arrayUtils ../../../../chunks/vec2f64 ../../../../chunks/vec2 ./UpdateVertices".split(" "),function(g,l,h,m,k,d){let q=function(){function e(a,b,f,n,p=d.AccumulationType.CUMULATIVE){this.origin=a;this.axis1=b;this.factor1=f;this.factor2=n;this._accumulationType=p;this.axis2=m.fromValues(b[1],-b[0])}var c=e.prototype;c._scale=function(a,b,f){k.projectAndScale(a.pos,a.pos,this.origin,this.axis1,b);k.projectAndScale(a.pos,
a.pos,this.origin,this.axis2,f)};c.apply=function(a){this._scale(a,this.factor1,this.factor2)};c.undo=function(a){this._scale(a,1/this.factor1,1/this.factor2)};c.canAccumulate=function(a){return a instanceof e&&h.equals(this.origin,a.origin)&&h.equals(this.axis1,a.axis1)};c.accumulate=function(a,b){b._accumulationType===d.AccumulationType.REPLACE?this._scale(a,b.factor1/this.factor1,b.factor2/this.factor2):this._scale(a,b.factor1,b.factor2)};c.accumulateParams=function(a){const b=a._accumulationType===
d.AccumulationType.REPLACE;this.factor1=b?a.factor1:this.factor1*a.factor1;this.factor2=b?a.factor2:this.factor2*a.factor2};return l._createClass(e)}();g.ScaleVertex=q;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});