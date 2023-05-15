// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ./SnappingPoint ../../support/geometry3dUtils ../../support/geometry2dUtils".split(" "),function(l,h,x,A,D,p,B,m,k,I){function J(c,a){let e=[];if(u(c)){var {point:b}=c;q(a)?e=k.intersectLineAndPoint(a.lineLike,b):v(a)?e=k.intersectVerticalCylinderAndPoint(a.center,a.radius,b):r(a)?e=k.intersectVerticalPlaneAndPoint(a.planeLike,b):t(a)&&
(e=w(a,c))}else if(q(c))({lineLike:b}=c),u(a)?e=k.intersectLineAndPoint(b,a.point):q(a)?e=k.intersectLineLike(b,a.lineLike):v(a)?e=k.intersectLineLikeAndVerticalCylinder(b,a.center,a.radius):r(a)?e=k.intersectVerticalPlaneAndLineLike(a.planeLike,b):t(a)&&(e=w(a,c));else if(v(c)){const {center:d,radius:g}=c;if(q(a))e=k.intersectLineLikeAndVerticalCylinder(a.lineLike,d,g);else if(u(a))e=k.intersectVerticalCylinderAndPoint(d,g,a.point);else{if(r(a))return k.intersectVerticalPlaneAndVerticalCylinder(a.planeLike,
d,g).map(f=>new y(f,c,a));t(a)&&(e=w(a,c))}}else if(r(c)){({planeLike:b}=c);if(r(a))return k.intersectVerticalPlane(b,a.planeLike).map(d=>new y(d,c,a));if(u(a))e=k.intersectVerticalPlaneAndPoint(b,a.point);else if(q(a))e=k.intersectVerticalPlaneAndLineLike(b,a.lineLike);else{if(v(a))return k.intersectVerticalPlaneAndVerticalCylinder(b,a.center,a.radius).map(d=>new y(d,c,a));t(a)&&(e=w(a,c))}}else t(c)&&(e=w(c,a));return K(e,c,a)}function w(c,a){const {planeLike:e,getZ:b}=c,d=[];if(u(a))c.addIfOnTheGround(d,
k.intersectVerticalPlaneAndPoint(e,a.point));else if(q(a))c.addIfOnTheGround(d,k.intersectVerticalPlaneAndLineLike(e,a.lineLike));else if(v(a))for(const [g,f]of k.intersectVerticalPlaneAndVerticalCylinder(e,a.center,a.radius))c=b(g,f,0),x.isSome(c)&&d.push(B.fromValues(g,f,c));else if(r(a)||t(a))for(const [g,f]of k.intersectVerticalPlane(e,a.planeLike))c=x.toNullable(b(g,f,0))??0,d.push(B.fromValues(g,f,c));return d}function K(c,a,e){return c.map(b=>new E(m.asSnappingPoint(b),a,e))}function u(c){return c instanceof
F}function q(c){return c instanceof C}function v(c){return c instanceof G}function r(c){return c instanceof z}function t(c){return c instanceof H}let n=function(){function c(){}c.prototype.intersect=function(a){return J(this,a)};return h._createClass(c)}(),F=function(c){function a(b){var d=e.call(this);d.point=b;return d}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return u(b)&&p.exactEquals(this.point,b.point)};c.closestTo=function(){return m.cloneSnappingPoint(this.point)};
return h._createClass(a)}(n),C=function(c){function a(b,d,g){var f=e.call(this);f.start=b;f.end=d;f.type=g;f.lineLike={start:f.start,end:f.end,type:f.type};return f}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return q(b)&&this.type===b.type&&p.exactEquals(this.start,b.start)&&p.exactEquals(this.end,b.end)};c.closestTo=function(b){b=k.projectPointToLineLike(b,this.lineLike);return m.asSnappingPoint(b)};return h._createClass(a)}(n),L=function(c){function a(b,d){return e.call(this,
b,d,I.LineType.LINE)}h._inherits(a,c);var e=h._createSuper(a);return h._createClass(a)}(C),E=function(c){function a(b,d,g){var f=e.call(this);f.intersection=b;f.first=d;f.second=g;return f}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return b instanceof a&&this.first.equals(b.first)&&this.second.equals(b.second)};c.closestTo=function(){return m.cloneSnappingPoint(this.intersection)};return h._createClass(a)}(n),y=function(c){function a(b,d,g){var f=e.call(this);f.basePoint=
b;f.first=d;f.second=g;return f}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return b instanceof a&&this.first.equals(b.first)&&this.second.equals(b.second)};c.closestTo=function(b){const d=this.basePoint;return m.asSnappingPoint(B.fromValues(d[0],d[1],b[2]))};return h._createClass(a)}(n),G=function(c){function a(b,d){var g=e.call(this);g.center=b;g.radius=d;return g}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return v(b)&&this.center[0]===
b.center[0]&&this.center[1]===b.center[1]&&this.radius===b.radius};c.closestTo=function(b){b=k.projectPointToVerticalCylinder(b,this.center,this.radius);return m.asSnappingPoint(b)};return h._createClass(a)}(n),z=function(c){function a(b,d,g){var f=e.call(this);f.start=b;f.end=d;f.type=g;f.planeLike={start:b,end:d,type:g};return f}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return r(b)&&this.type===b.type&&p.exactEquals(this.start,b.start)&&p.exactEquals(this.end,b.end)};
c.closestTo=function(b){return m.asSnappingPoint(k.projectPointToVerticalPlane(b,this.planeLike))};c.closestEndTo=function(b){const {start:d,end:g}=this;return 0<Math.sign(A.dot(A.subtract(M,g,d),A.subtract(N,b,d)))?g:d};return h._createClass(a)}(n),O=function(c){function a(b,d){return e.call(this,b,d,k.VerticalPlaneType.HALF_PLANE)}h._inherits(a,c);var e=h._createSuper(a);return h._createClass(a)}(z),P=function(c){function a(b,d){return e.call(this,b,d,k.VerticalPlaneType.PLANE)}h._inherits(a,c);
var e=h._createSuper(a);return h._createClass(a)}(z),H=function(c){function a(b,d,g){var f=e.call(this);f.start=b;f.end=d;f.getZ=g;f.planeLike={start:b,end:d,type:k.VerticalPlaneType.PLANE};return f}h._inherits(a,c);var e=h._createSuper(a);c=a.prototype;c.equals=function(b){return t(b)&&p.exactEquals(this.start,b.start)&&p.exactEquals(this.end,b.end)&&this.getZ===b.getZ};c.closestTo=function(b){const d=k.projectPointToVerticalPlane(b,this.planeLike);d[2]=x.toNullable(this.getZ(b[0],b[1],b[2]))??0;
return m.asSnappingPoint(d)};c.addIfOnTheGround=function(b,d){for(const g of d)d=x.unwrapOr(this.getZ(g[0],g[1],g[2]),0),Math.abs(g[2]-d)<k.epsilon&&(g[2]=d,b.push(g))};return h._createClass(a)}(n);const M=D.create(),N=D.create();l.DrapedLineConstraint=H;l.IntersectionConstraint=E;l.LineConstraint=L;l.LineLikeConstraint=C;l.PointConstraint=F;l.SnappingConstraint=n;l.VerticalCylinderConstraint=G;l.VerticalHalfPlaneConstraint=O;l.VerticalLineIntersectionConstraint=y;l.VerticalPlaneConstraint=P;l.VerticalPlaneLikeConstraint=
z;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});