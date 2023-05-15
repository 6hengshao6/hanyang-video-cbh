// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../IntersectorInterfaces","../IntersectorTarget","../intersectorUtils"],function(c,d,k,e,l){e=function(b){function f(g,h,m,n,p,q){var a=r.call(this,g,h);a.layerUid=g;a.graphicUid=h;a.geometryId=m;a.triangleNr=n;a.baseBoundingSphere=p;a.numLodLevels=q;return a}d._inherits(f,b);var r=d._createSuper(f);return d._createClass(f)}(e.Graphic3DTarget);c.LodTarget=e;c.isLodIntersectorResult=function(b){return l.isValidIntersectorResult(b)&&
b.intersector===k.IntersectorType.LOD&&!!b.target};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});