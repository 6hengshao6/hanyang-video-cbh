/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../core/Accessor.js";import r from"../../core/Error.js";import{JSONSupportMixin as e}from"../../core/JSONSupport.js";import{L as n}from"../../chunks/Logger.js";import{a as s,i,u as c}from"../../chunks/maybe.js";import{t as a,g as p}from"../../chunks/perspectiveUtils.js";import{c as l}from"../../chunks/screenUtils.js";import{property as m}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as u}from"../../chunks/reader.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{w as f}from"../../chunks/writer.js";import{b as P}from"../../chunks/mat3.js";import{f as j,c as y}from"../../chunks/mat3f64.js";import{s as d,r as g,l as k}from"../../chunks/vec2.js";import{a as w,f as v}from"../../chunks/vec2f64.js";import R from"../../geometry/Point.js";import x from"../../geometry/Polygon.js";import{projectOrLoad as C}from"../../geometry/projection.js";import S from"../../geometry/SpatialReference.js";import{G as b}from"../../chunks/GeoreferenceBase.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec4.js";import"../../chunks/zmUtils.js";import"../../chunks/SimpleObservable.js";import"../../chunks/mat4.js";import"../../geometry/Multipoint.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polyline.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../core/Clonable.js";const T=y(),U=w();let _=class extends o{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};t([m()],_.prototype,"sourcePoint",void 0),t([m({type:R})],_.prototype,"mapPoint",void 0),_=t([h("esri.layers.support.ControlPoint")],_);let M=class extends(e(b)){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,o){const r=S.fromJSON(o.spatialReference),e=j(...o.coefficients,1);return t.map((t=>(d(U,t.x,t.y),a(U,U,e),{sourcePoint:t,mapPoint:new R({x:U[0],y:U[1],spatialReference:r})})))}writeControlPoints(t,o,e,a){if(s(this.transform)){const t=new r("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:a?.layer,georeference:this});a?.messages?a.messages.push(t):n.getLogger(this.declaredClass).error(t.name,t.message)}else i(t)&&O(t[0])&&(o.controlPoints=t.map((t=>{const o=c(t.sourcePoint);return{x:o.x,y:o.y}})),o.spatialReference=t[0].mapPoint.spatialReference.toJSON(),o.coefficients=this.transform.slice(0,8))}get coords(){if(s(this.controlPoints))return null;const t=this._updateTransform(T);if(s(t)||!O(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return function(t,o,r,e){const n=v(0,r),s=v(0,0),i=v(o,0),c=v(o,r);return a(n,n,t),a(s,s,t),a(i,i,t),a(c,c,t),new x({rings:[[n,s,i,c,n]],spatialReference:e})}(t,this.width,this.height,o)}set coords(t){if(s(this.controlPoints)||!O(this.controlPoints[0]))return;const o=this.controlPoints[0].mapPoint.spatialReference;if(t=this.projectOrWarn(t,o),s(t))return;const{width:r,height:e}=this,{rings:[[n,i,p,m]]}=t,u={sourcePoint:l(0,e),mapPoint:new R({x:n[0],y:n[1],spatialReference:o})},h={sourcePoint:l(0,0),mapPoint:new R({x:i[0],y:i[1],spatialReference:o})},f={sourcePoint:l(r,0),mapPoint:new R({x:p[0],y:p[1],spatialReference:o})},P={sourcePoint:l(r,e),mapPoint:new R({x:m[0],y:m[1],spatialReference:o})};O(u)&&O(h)&&O(f)&&O(P)&&(H(T,u,h,f,P),this.controlPoints=c(this.controlPoints).map((({sourcePoint:t})=>(d(U,t.x,t.y),a(U,U,T),{sourcePoint:t,mapPoint:new R({x:U[0],y:U[1],spatialReference:o})}))))}get inverseTransform(){return s(this.transform)?null:P(y(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(s(t)||s(this.transform)||s(this.controlPoints)||!O(this.controlPoints[0]))return null;d(U,t.x,t.y);const o=this.controlPoints[0].mapPoint.spatialReference;return a(U,U,this.transform),new R({x:U[0],y:U[1],spatialReference:o})}toSource(t){if(s(t)||s(this.inverseTransform)||s(this.controlPoints)||!O(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),t=C(t,o).geometry,s(t)?null:(d(U,t.x,t.y),a(U,U,this.inverseTransform),l(U[0],U[1]))}_updateTransform(t){const{controlPoints:o,width:r,height:e}=this;if(s(o)||!(r>0)||!(e>0))return null;const[n,i,c,a]=o;if(!O(n))return null;const p=n.mapPoint.spatialReference,l=this._projectControlPoint(i,p),m=this._projectControlPoint(c,p),u=this._projectControlPoint(a,p);if(!l.valid||!m.valid||!u.valid)return null;if(!O(l.controlPoint))return null;s(t)&&(t=y());let h=null;return h=O(m.controlPoint)&&O(u.controlPoint)?H(t,n,l.controlPoint,m.controlPoint,u.controlPoint):O(m.controlPoint)?function(t,o,r,e){return B(G,N,o),B(A,z,r),B(I,E,e),k(L,G,A,.5),g(L,I,L,Math.PI),k(J,N,z,.5),g(J,E,J,Math.PI),K(t,G,A,I,L,N,z,E,J)}(t,n,l.controlPoint,m.controlPoint):function(t,o,r){return B(G,N,o),B(A,z,r),g(I,A,G,q),g(L,G,A,q),g(E,z,N,-q),g(J,N,z,-q),K(t,G,A,I,L,N,z,E,J)}(t,n,l.controlPoint),h.every((t=>0===t))?null:h}_projectControlPoint(t,o){if(!O(t))return{valid:!0,controlPoint:t};const{sourcePoint:r,mapPoint:e}=t,{geometry:s,pending:i}=C(e,o);return i?{valid:!1,controlPoint:null}:i||s?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:s}}:(n.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:e.spatialReference,targetSpatialReference:o}),{valid:!1,controlPoint:null})}};function O(t){return i(t)&&i(t.sourcePoint)&&i(t.mapPoint)}t([m({type:[_],json:{write:{allowNull:!1,isRequired:!0}}})],M.prototype,"controlPoints",void 0),t([u("controlPoints")],M.prototype,"readControlPoints",null),t([f("controlPoints")],M.prototype,"writeControlPoints",null),t([m()],M.prototype,"coords",null),t([m({json:{write:!0}})],M.prototype,"height",void 0),t([m({readOnly:!0})],M.prototype,"inverseTransform",null),t([m({readOnly:!0})],M.prototype,"transform",null),t([m({json:{write:!0}})],M.prototype,"width",void 0),M=t([h("esri.layers.support.ControlPointsGeoreference")],M);const G=w(),A=w(),I=w(),L=w(),N=w(),z=w(),E=w(),J=w(),q=Math.PI/2;function B(t,o,r){d(t,r.sourcePoint.x,r.sourcePoint.y),d(o,r.mapPoint.x,r.mapPoint.y)}function H(t,o,r,e,n){return B(G,N,o),B(A,z,r),B(I,E,e),B(L,J,n),K(t,G,A,I,L,N,z,E,J)}const W=new Array(8).fill(0),D=new Array(8).fill(0);function F(t,o,r,e,n){return t[0]=o[0],t[1]=o[1],t[2]=r[0],t[3]=r[1],t[4]=e[0],t[5]=e[1],t[6]=n[0],t[7]=n[1],t}function K(t,o,r,e,n,s,i,c,a){return p(t,F(W,o,r,e,n),F(D,s,i,c,a))}const Q=M;export{Q as default};