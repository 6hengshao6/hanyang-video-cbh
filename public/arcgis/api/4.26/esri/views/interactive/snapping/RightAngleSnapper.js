// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../support/elevationInfoUtils ./SnappingAlgorithm ./SnappingConstraint ./SnappingPoint ./snappingUtils ./candidates/RightAngleSnappingCandidate ../support/viewUtils".split(" "),function(x,r,B,l,C,y,t,u,v,D,h,E,z,w){v=function(m){function n(){return F.apply(this,arguments)}r._inherits(n,m);var F=r._createSuper(n);m=n.prototype;
m.snapNewVertex=function(k,a){var c=a.editGeometryOperations.data.components[0],b=c.vertices.length;const d=[];if(2>b)return d;var {view:f}=this;const e=w.vectorToScreenPoint(k,a.spatialReference,u.absoluteHeightElevationInfo,f);var g=c.vertices[b-1];this.edgeExceedsShortLineThreshold(g.leftEdge,a)&&(b=h.anyMapPointToSnappingPoint(g.pos,f,a),g=h.anyMapPointToSnappingPoint(g.leftEdge.leftVertex.pos,f,a),this._checkForSnappingCandidate(d,g,b,k,e,a));b=c.vertices[0];this.edgeExceedsShortLineThreshold(b.rightEdge,
a)&&(c=h.anyMapPointToSnappingPoint(b.pos,f,a),f=h.anyMapPointToSnappingPoint(b.rightEdge.rightVertex.pos,f,a),this._checkForSnappingCandidate(d,f,c,k,e,a));return d};m.snapExistingVertex=function(k,a){const c=[];var b=B.unwrap(a.vertexHandle);if(3>b.component.vertices.length)return c;var {view:d}=this;const f=w.vectorToScreenPoint(k,a.spatialReference,u.absoluteHeightElevationInfo,d);var e=b.leftEdge;b=b.rightEdge;if(e&&e.leftVertex.leftEdge){var g=e.leftVertex.leftEdge;this.edgeExceedsShortLineThreshold(g,
a)&&(e=h.anyMapPointToSnappingPoint(g.rightVertex.pos,d,a),g=h.anyMapPointToSnappingPoint(g.leftVertex.pos,d,a),this._checkForSnappingCandidate(c,g,e,k,f,a))}b&&b.rightVertex.rightEdge&&(e=b.rightVertex.rightEdge,this.edgeExceedsShortLineThreshold(e,a)&&(b=h.anyMapPointToSnappingPoint(e.leftVertex.pos,d,a),d=h.anyMapPointToSnappingPoint(e.rightVertex.pos,d,a),this._checkForSnappingCandidate(c,d,b,k,f,a)));return c};m._checkForSnappingCandidate=function(k,a,c,b,d,f){const {spatialReference:e,pointer:g}=
f;l.subtract(p,c,a);const q=y.set(G,p[1],-p[0],0),A=l.dot(q,l.subtract(p,b,c))/l.squaredLength(q);b=h.asSnappingPoint(l.scaleAndAdd(t.clone(b),c,q,A));E.squaredScreenDistance(d,w.vectorToScreenPoint(b,e,u.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(g)&&!this.isVertical(b,c)&&!this.isVertical(c,a)&&(d=y.scaleAndAdd(t.create(),c,q,Math.sign(A)),k.push(new z.RightAngleSnappingCandidate({targetPoint:b,constraint:new D.VerticalHalfPlaneConstraint(c,h.asSnappingPoint(d)),previousVertex:a,
otherVertex:c,otherVertexType:z.OtherVertexType.CENTER,isDraped:"on-the-ground"===f.elevationInfo?.mode})))};return r._createClass(n)}(v.SnappingAlgorithm);const p=C.create(),G=t.create();x.RightAngleSnapper=v;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});