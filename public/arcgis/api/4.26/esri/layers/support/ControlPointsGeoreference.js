// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/JSONSupport ../../core/Logger ../../core/maybe ../../core/perspectiveUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../chunks/mat3 ../../chunks/mat3f64 ../../chunks/vec2 ../../chunks/vec2f64 ../../geometry/Point ../../geometry/Polygon ../../geometry/projection ../../geometry/SpatialReference ./GeoreferenceBase".split(" "),
function(M,q,I,Z,n,V,g,t,O,B,ka,la,ma,aa,W,ba,ca,P,m,p,C,da,X,ea,fa){function k(c){return g.isSome(c)&&g.isSome(c.sourcePoint)&&g.isSome(c.mapPoint)}function w(c,d,f){m.set(c,f.sourcePoint.x,f.sourcePoint.y);m.set(d,f.mapPoint.x,f.mapPoint.y)}function ha(c,d,f){w(x,y,d);w(z,A,f);m.rotate(J,z,x,Q);m.rotate(D,x,z,Q);m.rotate(K,A,y,-Q);m.rotate(E,y,A,-Q);d=y;f=A;var a=K,b=E;return t.getProjectiveTransform(c,N(S,x,z,J,D),N(T,d,f,a,b))}function ia(c,d,f,a){w(x,y,d);w(z,A,f);w(J,K,a);m.lerp(D,x,z,.5);m.rotate(D,
J,D,Math.PI);m.lerp(E,y,A,.5);m.rotate(E,K,E,Math.PI);d=y;f=A;a=K;var b=E;return t.getProjectiveTransform(c,N(S,x,z,J,D),N(T,d,f,a,b))}function Y(c,d,f,a,b){w(x,y,d);w(z,A,f);w(J,K,a);w(D,E,b);d=y;f=A;a=K;b=E;return t.getProjectiveTransform(c,N(S,x,z,J,D),N(T,d,f,a,b))}function N(c,d,f,a,b){c[0]=d[0];c[1]=d[1];c[2]=f[0];c[3]=f[1];c[4]=a[0];c[5]=a[1];c[6]=b[0];c[7]=b[1];return c}const U=P.create(),h=p.create();I=function(c){function d(){var a=f.apply(this,arguments);a.sourcePoint=null;a.mapPoint=null;
return a}M._inherits(d,c);var f=M._createSuper(d);return M._createClass(d)}(I);q.__decorate([B.property()],I.prototype,"sourcePoint",void 0);q.__decorate([B.property({type:C})],I.prototype,"mapPoint",void 0);I=q.__decorate([W.subclass("esri.layers.support.ControlPoint")],I);n=function(c){function d(a){a=f.call(this,a);a.controlPoints=null;a.height=0;a.type="control-points";a.width=0;return a}M._inherits(d,c);var f=M._createSuper(d);c=d.prototype;c.readControlPoints=function(a,b){const r=ea.fromJSON(b.spatialReference),
l=P.fromValues(...b.coefficients,1);return a.map(e=>{m.set(h,e.x,e.y);t.transformProjective(h,h,l);return{sourcePoint:e,mapPoint:new C({x:h[0],y:h[1],spatialReference:r})}})};c.writeControlPoints=function(a,b,r,l){g.isNone(this.transform)?(a=new Z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:l?.layer,georeference:this}),l?.messages?l.messages.push(a):V.getLogger(this.declaredClass).error(a.name,a.message)):g.isSome(a)&&k(a[0])&&(b.controlPoints=
a.map(e=>{e=g.unwrap(e.sourcePoint);return{x:e.x,y:e.y}}),b.spatialReference=a[0].mapPoint.spatialReference.toJSON(),b.coefficients=this.transform.slice(0,8))};c.toMap=function(a){if(g.isNone(a)||g.isNone(this.transform)||g.isNone(this.controlPoints)||!k(this.controlPoints[0]))return null;m.set(h,a.x,a.y);a=this.controlPoints[0].mapPoint.spatialReference;t.transformProjective(h,h,this.transform);return new C({x:h[0],y:h[1],spatialReference:a})};c.toSource=function(a){if(g.isNone(a)||g.isNone(this.inverseTransform)||
g.isNone(this.controlPoints)||!k(this.controlPoints[0]))return null;const b=this.controlPoints[0].mapPoint.spatialReference;a=a.normalize();a=X.projectOrLoad(a,b).geometry;if(g.isNone(a))return null;m.set(h,a.x,a.y);t.transformProjective(h,h,this.inverseTransform);return O.createScreenPoint(h[0],h[1])};c._updateTransform=function(a){const {controlPoints:b,width:r,height:l}=this;if(!(!g.isNone(b)&&0<r&&0<l))return null;const [e,u,F,R]=b;if(!k(e))return null;var v=e.mapPoint.spatialReference;const G=
this._projectControlPoint(u,v),H=this._projectControlPoint(F,v);v=this._projectControlPoint(R,v);if(!(G.valid&&H.valid&&v.valid&&k(G.controlPoint)))return null;g.isNone(a)&&(a=P.create());let L=null;L=k(H.controlPoint)&&k(v.controlPoint)?Y(a,e,G.controlPoint,H.controlPoint,v.controlPoint):k(H.controlPoint)?ia(a,e,G.controlPoint,H.controlPoint):ha(a,e,G.controlPoint);return L.every(ja=>0===ja)?null:L};c._projectControlPoint=function(a,b){if(!k(a))return{valid:!0,controlPoint:a};const {sourcePoint:r,
mapPoint:l}=a,{geometry:e,pending:u}=X.projectOrLoad(l,b);return u?{valid:!1,controlPoint:null}:u||e?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:e}}:(V.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:a,sourceSpatialReference:l.spatialReference,targetSpatialReference:b}),{valid:!1,controlPoint:null})};M._createClass(d,[{key:"coords",get:function(){if(g.isNone(this.controlPoints))return null;const a=this._updateTransform(U);
if(g.isNone(a)||!k(this.controlPoints[0]))return null;var b=this.width,r=this.height,l=this.controlPoints[0].mapPoint.spatialReference;const e=p.fromValues(0,r),u=p.fromValues(0,0),F=p.fromValues(b,0);b=p.fromValues(b,r);t.transformProjective(e,e,a);t.transformProjective(u,u,a);t.transformProjective(F,F,a);t.transformProjective(b,b,a);return new da({rings:[[e,u,F,b,e]],spatialReference:l})},set:function(a){if(!g.isNone(this.controlPoints)&&k(this.controlPoints[0])){var b=this.controlPoints[0].mapPoint.spatialReference;
a=this.projectOrWarn(a,b);if(!g.isNone(a)){var {width:r,height:l}=this,{rings:[[e,u,F,R]]}=a;a={sourcePoint:O.createScreenPoint(0,l),mapPoint:new C({x:e[0],y:e[1],spatialReference:b})};var v={sourcePoint:O.createScreenPoint(0,0),mapPoint:new C({x:u[0],y:u[1],spatialReference:b})},G={sourcePoint:O.createScreenPoint(r,0),mapPoint:new C({x:F[0],y:F[1],spatialReference:b})},H={sourcePoint:O.createScreenPoint(r,l),mapPoint:new C({x:R[0],y:R[1],spatialReference:b})};k(a)&&k(v)&&k(G)&&k(H)&&(Y(U,a,v,G,H),
this.controlPoints=g.unwrap(this.controlPoints).map(({sourcePoint:L})=>{m.set(h,L.x,L.y);t.transformProjective(h,h,U);return{sourcePoint:L,mapPoint:new C({x:h[0],y:h[1],spatialReference:b})}}))}}}},{key:"inverseTransform",get:function(){return g.isNone(this.transform)?null:ca.invert(P.create(),this.transform)}},{key:"transform",get:function(){return this._updateTransform()}}]);return d}(n.JSONSupportMixin(fa));q.__decorate([B.property({type:[I],json:{write:{allowNull:!1,isRequired:!0}}})],n.prototype,
"controlPoints",void 0);q.__decorate([aa.reader("controlPoints")],n.prototype,"readControlPoints",null);q.__decorate([ba.writer("controlPoints")],n.prototype,"writeControlPoints",null);q.__decorate([B.property()],n.prototype,"coords",null);q.__decorate([B.property({json:{write:!0}})],n.prototype,"height",void 0);q.__decorate([B.property({readOnly:!0})],n.prototype,"inverseTransform",null);q.__decorate([B.property({readOnly:!0})],n.prototype,"transform",null);q.__decorate([B.property({json:{write:!0}})],
n.prototype,"width",void 0);n=q.__decorate([W.subclass("esri.layers.support.ControlPointsGeoreference")],n);const x=p.create(),z=p.create(),J=p.create(),D=p.create(),y=p.create(),A=p.create(),K=p.create(),E=p.create(),Q=Math.PI/2,S=Array(8).fill(0),T=Array(8).fill(0);return n});