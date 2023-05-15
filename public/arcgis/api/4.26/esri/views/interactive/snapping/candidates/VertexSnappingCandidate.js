// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/PointSnappingHint"],function(d,b,f,c,g){c=function(h){function a(e){return k.call(this,{...e,constraint:new f.PointConstraint(e.targetPoint)})}b._inherits(a,h);var k=b._createSuper(a);b._createClass(a,[{key:"hints",get:function(){return[new g.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}]);return a}(c.FeatureSnappingCandidate);d.VertexSnappingCandidate=
c;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});