// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper","../enums"],function(r,l,p,m,n){const u=n.GeometricEffectArrowType.OpenEnded;let t=function(){function g(){}g.local=function(){null===g.instance&&(g.instance=new g);return g.instance};g.prototype.execute=function(h,q,a,d,b){return new v(h,q,a)};return l._createClass(g)}();t.instance=null;let v=function(g){function h(a,d,b){a=q.call(this,a,!1,!0);a._curveHelper=new m.CurveHelper;a._width=(void 0!==d.width?
d.width:5)*b;a._arrowType=void 0!==d.geometricEffectArrowType?d.geometricEffectArrowType:void 0!==d.arrowType?d.arrowType:u;a._offsetFlattenError=m.PIXEL_TOLERANCE*b;return a}l._inherits(h,g);var q=l._createSuper(h);g=h.prototype;g.processPath=function(a){switch(this._arrowType){default:return this._constructSimpleArrow(a,!0);case n.GeometricEffectArrowType.Block:return this._constructSimpleArrow(a,!1);case n.GeometricEffectArrowType.Crossed:return this._constructCrossedArrow(a)}};g._constructSimpleArrow=
function(a,d){var b=this._curveHelper.calculatePathLength(a),e=this._width;b<2*e&&(e=b/2);b=this._curveHelper.getSubCurve(a,0,b-e);if(!b)return null;var f=e/2;if(this._curveHelper.isEmpty(b,!1))return null;e=this._constructOffset(b,-f);if(!e)return null;b=this._constructOffset(b,f);if(!b)return null;const k=this._constructArrowBasePoint(e,-f/2);if(!k)return null;f=this._constructArrowBasePoint(b,f/2);if(!f)return null;a=a[a.length-1];d||(this._makeControlPoint(b,!0),this._makeControlPoint(e,!0));
const c=new m.PathHelper;c.addPath(b,!0);c.lineTo(f);this._makeControlPoint(c.path());c.lineTo(a);this._makeControlPoint(c.path());c.lineTo(k);this._makeControlPoint(c.path());c.addPath(e,!1);return d?{paths:[c.path()]}:(c.close(),{rings:[c.path()]})};g._constructCrossedArrow=function(a){var d=this._curveHelper.calculatePathLength(a),b=this._width;d<3.732050807568877*b&&(b=d/3.732050807568877);var e=this._curveHelper.getSubCurve(a,0,d-2.732050807568877*b);if(!e)return null;var f=b/2;if(this._curveHelper.isEmpty(e,
!1))return null;const k=this._constructOffset(e,f);if(!k)return null;e=this._constructOffset(e,-f);if(!e)return null;d=this._curveHelper.getSubCurve(a,0,d-b);if(!d||this._curveHelper.isEmpty(d,!1))return null;b=this._constructOffset(d,f);if(!b)return null;var c=this._constructOffset(d,-f);if(!c)return null;d=b[b.length-1];b=this._constructArrowBasePoint(b,f/2);if(!b)return null;const w=c[c.length-1];f=this._constructArrowBasePoint(c,-f/2);if(!f)return null;a=a[a.length-1];this._makeControlPoint(k,
!1);this._makeControlPoint(e,!1);c=new m.PathHelper;c.addPath(k,!0);this._makeControlPoint(c.path());c.lineTo(w);c.lineTo(f);this._makeControlPoint(c.path());c.lineTo(a);this._makeControlPoint(c.path());c.lineTo(b);this._makeControlPoint(c.path());c.lineTo(d);this._makeControlPoint(c.path());c.addPath(e,!1);return{paths:[c.path()]}};g._constructOffset=function(a,d){return this._curveHelper.offset(a,d,n.GeometricEffectOffsetMethod.Rounded,4,this._offsetFlattenError)};g._constructArrowBasePoint=function(a,
d){if(!a||2>a.length)return null;var b=a[a.length-2];a=a[a.length-1];b=[a[0]-b[0],a[1]-b[1]];this._curveHelper.normalize(b);return[a[0]+b[1]*d,a[1]-b[0]*d]};g._makeControlPoint=function(a,d=!1){d?p.setId(a[0],1):p.setId(a[a.length-1],1)};return l._createClass(h)}(p.PathGeometryCursor);r.EffectArrow=t;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});