// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],function(d,e,h,k,l){let g=function(){function b(){}b.local=function(){null===b.instance&&(b.instance=new b);return b.instance};b.prototype.execute=function(a,c,f,n,p){return new m(a,c,f)};return e._createClass(b)}();g.instance=null;let m=function(){function b(a,c,f){this._inputGeometries=a;this._reverse=void 0!==c.reverse?c.reverse:!0}b.prototype.next=function(){for(var a=
this._inputGeometries.next();a;){if(!this._reverse)return a;if(k.isPolyline(a))return a=h.clone(a),l.reverseMultipath(a.paths),a;a=this._inputGeometries.next()}return null};return e._createClass(b)}();d.EffectReverse=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});