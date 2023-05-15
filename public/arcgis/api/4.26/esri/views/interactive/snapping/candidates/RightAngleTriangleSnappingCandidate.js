// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../SnappingConstraint ../SnappingDomain ../SnappingPoint ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(g,c,l,m,n,p,q,r,h,d,k,t){d=function(u){function b({targetPoint:a,point1:e,point2:f,isDraped:v}){a=w.call(this,a,new p.VerticalCylinderConstraint(r.asSnappingPoint(m.lerp(n.create(),e,f,.5)),.5*
l.distance(e,f)),v,q.SnappingDomain.SELF);a._p1=e;a._p2=f;return a}c._inherits(b,u);var w=c._createSuper(b);c._createClass(b,[{key:"hints",get:function(){return[new k.LineSnappingHint(h.LineSegmentHintType.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new k.LineSnappingHint(h.LineSegmentHintType.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new t.RightAngleSnappingHint(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}}]);return b}(d.SnappingCandidate);
g.RightAngleTriangleSnappingCandidate=d;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});