// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../SnappingConstraint ../snappingUtils ./FeatureSnappingCandidate ../hints/LineSnappingHint".split(" "),function(e,c,f,g,d,h){d=function(k){function a(b){return l.call(this,{...b,isDraped:!0,constraint:new f.DrapedLineConstraint(b.edgeStart,b.edgeEnd,b.getGroundElevation)})}c._inherits(a,k);var l=c._createSuper(a);c._createClass(a,[{key:"hints",get:function(){return[new h.LineSnappingHint(g.LineSegmentHintType.REFERENCE,this.constraint.start,
this.constraint.end,this.isDraped,this.domain)]}}]);return a}(d.FeatureSnappingCandidate);e.DrapedEdgeSnappingCandidate=d;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});