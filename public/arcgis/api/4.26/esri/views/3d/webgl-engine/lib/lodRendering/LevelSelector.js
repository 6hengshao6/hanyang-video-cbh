// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(d,f){let g=function(){function e(a,c){this._worldSpaceRadius=a;this._minScreenSpaceRadii=c}e.prototype.selectLevel=function(a,c,b){a=b.computeScreenPixelSizeAt(a);c=this._worldSpaceRadius*c/a;a=0;for(b=1;b<this._minScreenSpaceRadii.length;++b)c>=this._minScreenSpaceRadii[b]&&(a=b);return a};return f._createClass(e)}();d.LevelSelector=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});