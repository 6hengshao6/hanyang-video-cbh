// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../support/elevationInfoUtils ./SnappingAlgorithm ./SnappingPoint ./snappingUtils ./candidates/LineSnappingCandidate ../support/viewUtils ../../support/geometry3dUtils ../../support/geometry2dUtils".split(" "),function(v,n,w,p,q,r,t,x,u,y,z){q=function(l){function m(){return A.apply(this,arguments)}n._inherits(m,l);var A=n._createSuper(m);l=m.prototype;l.snapNewVertex=function(g,a){var d=a.editGeometryOperations.data.components[0],
b=d.edges.length;const e=[];if(1>b)return e;var {spatialReference:f}=a;f=u.vectorToScreenPoint(g,f,p.absoluteHeightElevationInfo,this.view);const {view:h}=this;b=d=d.edges[b-1];do{if(this.edgeExceedsShortLineThreshold(b,a)){const c=t.editEdgeToSnappingEdge(b,h,a);this._processCandidateProposal(c.left,c.right,g,f,a,e)}b=b.leftVertex.leftEdge}while(b&&b!==d);return e};l.snapExistingVertex=function(g,a){const d=[],b=w.unwrap(a.vertexHandle);var e=b.component;if(2>e.edges.length)return d;const {view:f}=
this;var {spatialReference:h}=a;h=u.vectorToScreenPoint(g,h,p.absoluteHeightElevationInfo,f);var c=b.leftEdge,k=b.rightEdge;c&&k&&this.edgeExceedsShortLineThreshold(c,a)&&this.edgeExceedsShortLineThreshold(k,a)&&this._processCandidateProposal(r.anyMapPointToSnappingPoint(c.leftVertex.pos,f,a),r.anyMapPointToSnappingPoint(k.rightVertex.pos,f,a),g,h,a,d);c=e=e.edges[0];do c!==b.leftEdge&&c!==b.rightEdge&&this.edgeExceedsShortLineThreshold(c,a)&&(k=t.editEdgeToSnappingEdge(c,f,a),this._processCandidateProposal(k.left,
k.right,g,h,a,d)),c=c.rightVertex.rightEdge;while(c&&c!==e);return d};l._processCandidateProposal=function(g,a,d,b,e,f){const {spatialReference:h,pointer:c}=e;d=r.asSnappingPoint(y.projectPointToLineLike(d,{start:g,end:a,type:z.LineType.LINE}));t.squaredScreenDistance(b,u.vectorToScreenPoint(d,h,p.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(c)&&f.push(new x.LineSnappingCandidate({lineStart:g,lineEnd:a,targetPoint:d,isDraped:"on-the-ground"===e.elevationInfo?.mode}))};return n._createClass(m)}(q.SnappingAlgorithm);
v.LineSnapper=q;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});