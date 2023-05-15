// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../analysis/dimensionUtils ../../../../core/has ../../../../core/maybe ../../../../chunks/vec3 ../../../../geometry/support/vectorStacks ./lengthDimensionManipulatorUtils ./lengthDimensionUtils ./settings ../../../../geometry/Point".split(" "),function(e,z,w,A,g,n,q,x,r,y,u){function v(a,b,c){const {constraint:h,elevationAlignedStartPoint:d,elevationAlignedEndPoint:k,unconstrainedGeometry:l,view:t}=c,{dimension:f,previousConstraint:p,preConstraintProperties:m}=
a;if(!g.isNone(d)&&!g.isNone(k)){c=()=>{"startPoint"in b?f.startPoint=b.startPoint:"endPoint"in b&&(f.endPoint=b.endPoint)};if(g.isNone(h))c(),g.isSome(p)&&g.isSome(m)&&(f.measureType=m.measureType,f.orientation=m.orientation);else switch(f.measureType=w.LengthDimensionMeasureType.Direct,h){case e.LengthDimensionConstraint.Horizontal:h!==p&&(f.orientation=0);"startPoint"in b?(c=b.startPoint,g.isSome(c)&&(c.z=k.z),f.startPoint=c):"endPoint"in b&&(c=b.endPoint,g.isSome(c)&&(c.z=d.z),f.endPoint=c);break;
case e.LengthDimensionConstraint.Vertical:h!==p&&(f.orientation=x.automaticHeadingFromCamera(l,t));"startPoint"in b?(c=b.startPoint,g.isSome(c)&&(c.x=k.x,c.y=k.y),f.startPoint=c):"endPoint"in b&&(c=b.endPoint,g.isSome(c)&&(c.x=d.x,c.y=d.y),f.endPoint=c);break;case e.LengthDimensionConstraint.Direct:h!==p&&g.isSome(m)&&(f.orientation=m.orientation),c()}a.previousConstraint=h;a.unconstrainedGeometry=l}}e.LengthDimensionConstraint=void 0;(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical";
a[a.Direct=2]="Direct"})(e.LengthDimensionConstraint||(e.LengthDimensionConstraint={}));e.applyConstraint=v;e.computeConstraint=function(a,b){if(r.isGeodesicDimension(a))return e.LengthDimensionConstraint.Direct;if(!a.enabled)return null;({geometry:a}=a);if(g.isNone(a)||n.exactEquals(a.directSegment.startRenderSpace,a.directSegment.endRenderSpace))return null;const {constraintThresholdPx:c}=y.settings,{camera:h}=b.state;b=r.directUp(q.sv3d.get(),a,b.renderCoordsHelper);var d=r.directStartToEnd(q.sv3d.get(),
a);b=n.scale(q.sv3d.get(),b,n.dot(d,b));d=n.subtract(q.sv3d.get(),d,b);d=n.squaredLength(d);b=n.squaredLength(b);const {startRenderSpace:k,endRenderSpace:l}=a.directSegment;a=Math.max(h.computeRenderPixelSizeAt(k)*c,h.computeRenderPixelSizeAt(l)*c)**2;return d<a?e.LengthDimensionConstraint.Vertical:b<a?e.LengthDimensionConstraint.Horizontal:null};e.constraintDependencies=function(a,b){return{enabled:b.effectiveFeatureEnabled,elevationAlignedStartPoint:a.elevationAlignedStartPoint,elevationAlignedEndPoint:a.elevationAlignedEndPoint,
geometry:a.geometry}};e.reapplyConstraint=function(a,b,{constraint:c,view:h}){const {unconstrainedGeometry:d}=a;if(!g.isNone(d)){var {renderCoordsHelper:k,spatialReference:l}=h,{startRenderSpace:t,endRenderSpace:f}=d.directSegment,p=k.fromRenderCoords(t,new u,l),m=k.fromRenderCoords(f,new u,l);v(a,"start"===b?{startPoint:p}:{endPoint:m},{constraint:c,elevationAlignedStartPoint:a.elevationAlignedStartPoint,elevationAlignedEndPoint:a.elevationAlignedEndPoint,unconstrainedGeometry:d,view:h})}};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});