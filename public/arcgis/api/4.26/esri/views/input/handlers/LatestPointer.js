// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],function(h,e,f){f=function(k){function c(d){var a=l.call(this,!0);a._onChange=d;a._value="mouse";a._x=null;a._y=null;a.registerIncoming("pointer-move",b=>{a._update(b.data)});return a}e._inherits(c,k);var l=e._createSuper(c);c.prototype._update=function(d){const a="touch"===d.native.pointerType?"touch":"mouse",{x:b,y:g}=d;if(a!==this._value||this._x!==b||this._y!==g)this._value=a,this._x=b,this._y=g,this._onChange(a,
b,g)};return e._createClass(c)}(f.InputHandler);h.LatestPointer=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});