// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],function(m,k,p,q){let n=function(){function e(){}e.local=function(){null===e.instance&&(e.instance=new e);return e.instance};e.prototype.execute=function(h,l,a,b,c){return new r(h,l,a)};return k._createClass(e)}();n.instance=null;let r=function(e){function h(a,b,c){a=l.call(this,a,!0,!0);a._curveHelper=new q.CurveHelper;a._beginCut=(void 0!==b.beginCut?b.beginCut:1)*c;a._endCut=(void 0!==b.endCut?b.endCut:
1)*c;a._middleCut=(void 0!==b.middleCut?b.middleCut:0)*c;a._invert=void 0!==b.invert?b.invert:!1;0>a._beginCut&&(a._beginCut=0);0>a._endCut&&(a._endCut=0);0>a._middleCut&&(a._middleCut=0);return a}k._inherits(h,e);var l=k._createSuper(h);h.prototype.processPath=function(a){var b=this._beginCut;const c=this._endCut,f=this._middleCut,g=this._curveHelper.calculatePathLength(a),d=[];if(!this._invert)0===b&&0===c&&0===f?d.push(a):b+c+f>=g||(0===f?(a=this._curveHelper.getSubCurve(a,b,g-c))&&d.push(a):((b=
this._curveHelper.getSubCurve(a,b,.5*(g-f)))&&d.push(b),(b=this._curveHelper.getSubCurve(a,.5*(g+f),g-c))&&d.push(b)));else if(0!==b||0!==c||0!==f)b+c+f>=g?d.push(a):((b=this._curveHelper.getSubCurve(a,0,b))&&d.push(b),(b=this._curveHelper.getSubCurve(a,.5*(g-f),.5*(g+f)))&&d.push(b),(b=this._curveHelper.getSubCurve(a,g-c,c))&&d.push(b));return 0===d.length?null:{paths:d}};return k._createClass(h)}(p.PathGeometryCursor);m.EffectCut=n;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});