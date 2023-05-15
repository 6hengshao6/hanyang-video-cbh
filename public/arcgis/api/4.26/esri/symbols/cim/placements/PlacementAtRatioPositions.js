// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../geometry/geometryCursorCollectUtils","../CIMCursor","../GeometryWalker"],function(k,f,m,n,g){let l=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(e,h,a,b,c){return new p(e,h,a)};return f._createClass(d)}();l.instance=null;let p=function(d){function e(a,b,c){a=h.call(this,a);a._walker=new g.GeometryWalker;a._walker.updateTolerance(c);a._angleToLine=
void 0!==b.angleToLine?b.angleToLine:!0;a._offset=void 0!==b.offset?b.offset*c:0;a._beginGap=void 0!==b.beginPosition?b.beginPosition*c:0;a._endGap=void 0!==b.endPosition?b.endPosition*c:0;a._flipFirst=void 0!==b.flipFirst?b.flipFirst:!0;a._pattern=new g.DashPattern;a._pattern.init(b.positionArray,!1,!1);a._subPathLen=0;a._posCount=a._pattern.size();a._isFirst=!0;a._prevPos=0;return a}f._inherits(e,d);var h=f._createSuper(e);e.prototype.processPath=function(a){if(this._pattern.isEmpty())return null;
if(this.iteratePath){a=this._pattern.nextValue()*this._subPathLen;var b=this._beginGap+a;a=b-this._prevPos;this._prevPos=b}else{this._posCount=this._pattern.size();this._isFirst=!0;this._prevPos=0;a=m.collectRing(a);this._subPathLen=this._walker.calculatePathLength(a)-this._beginGap-this._endGap;if(0>this._subPathLen)return this.iteratePath=!1,null;if(!this._walker.init(a,this._pattern,!1))return null;this._pattern.reset();a=this._pattern.nextValue()*this._subPathLen;b=this._beginGap+a;a=b-this._prevPos;
this._prevPos=b;this.iteratePath=!0}b=new g.Pos;if(!this._walker.nextPointAndAngle(a,b,g.EndType.END))return this.iteratePath=!1,null;this.internalPlacement.setTranslate(b.pt[0]-this._offset*b.sa,b.pt[1]+this._offset*b.ca);a=this._isFirst&&this._flipFirst;let c;this._angleToLine?(c=b.ca,b=b.sa):(c=1,b=0);a&&(c=-c,b=-b);this.internalPlacement.setRotateCS(c,b);this._isFirst=!1;this._posCount--;0===this._posCount&&(this.iteratePath=!1);return this.internalPlacement};return f._createClass(e)}(n.PathTransformationCursor);
k.PlacementAtRatioPositions=l;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});