// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/mathUtils","../../../../core/time"],function(e,k,l,m,a){let q=function(){function d(){this._step=f;this._dilation=1;this._firstIdleTime=a.Milliseconds(0)}var g=d.prototype;g.frame=function(c,b){b?0===this._firstIdleTime&&(this._firstIdleTime=a.Milliseconds(performance.now())):this._firstIdleTime=a.Milliseconds(0);if(l("enable-feature:high-quality-idle")){b=b?performance.now()-this._firstIdleTime:
0;if(b>=h+n){this._step=a.Milliseconds(Infinity);this._dilation=1;return}this._dilation=b>=h?10:1}else this._dilation=1;c=m.clamp(c/.5,f,p);this._step=Infinity===this._step?a.Milliseconds(c):a.Milliseconds(.9*this._step+c*(1-.9))};g.clear=function(){this._step=this._firstIdleTime=a.Milliseconds(0)};k._createClass(d,[{key:"value",get:function(){return this._step}},{key:"timeDilation",get:function(){return this._dilation}}]);return d}();const h=a.Milliseconds(6E4),n=a.Milliseconds(5E3),f=a.Milliseconds(1E3),
p=a.Milliseconds(1E3/30);e.AnimationTimeStep=q;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});