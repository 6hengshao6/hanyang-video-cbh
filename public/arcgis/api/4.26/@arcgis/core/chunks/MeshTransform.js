/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{i as r}from"./maybe.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{b as e,c as a,m as n,e as l,d as p}from"./mat4.js";import{c,I as m}from"./mat4f64.js";import{s as g}from"./quat.js";import{c as h}from"./quatf64.js";import{d as u,f as j,e as f,j as y,k as b}from"./vec3.js";import x from"../geometry/Point.js";import{computeTranslationToOriginAndRotation as d,projectBuffer as M}from"../geometry/projection.js";import{g as v}from"./spatialReferenceEllipsoidUtils.js";import{c as N,b as w,d as I}from"./axisAngleDegrees.js";import{n as S,d as q}from"./DoubleArray.js";import{t as A}from"./vec32.js";var D;let L=D=class extends o{constructor(t){super(t),this.origin=u(),this.translation=u(),this.rotation=N(),this.scale=j(1,1,1),this.geographic=!0}get localMatrix(){const t=c();return g(O,I(this.rotation),w(this.rotation)),e(t,O,this.translation,this.scale),t}get localMatrixInverse(){return a(c(),this.localMatrix)}applyLocal(t,o){return f(o,t,this.localMatrix)}applyLocalInverse(t,o){return f(o,t,this.localMatrixInverse)}project(t,o){if(this.geographic){const r=v(o),s=c();d(o,this.origin,s,r),n(s,s,this.localMatrix);const i=S(t.length);return A(i,t,s),M(i,r,0,i,o,0,i.length/3),i}const{localMatrix:r,origin:s}=this,i=l(r,m)?q(t):A(S(t.length),t,r);for(let t=0;t<i.length;t+=3)i[t]+=s[0],i[t+1]+=s[1],i[t+2]+=s[2];return i}getOriginPoint(t){const[o,r,s]=this.origin;return new x({x:o,y:r,z:s,spatialReference:t})}equals(t){return r(t)&&this.geographic===t.geographic&&y(this.origin,t.origin)&&p(this.localMatrix,t.localMatrix)}clone(){const t={origin:b(this.origin),translation:b(this.translation),rotation:N(this.rotation),scale:b(this.scale),geographic:this.geographic};return new D(t)}};t([s({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"origin",void 0),t([s({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"translation",void 0),t([s({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"rotation",void 0),t([s({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"scale",void 0),t([s({type:Boolean,nonNullable:!0,json:{write:!0}})],L.prototype,"geographic",void 0),t([s()],L.prototype,"localMatrix",null),t([s()],L.prototype,"localMatrixInverse",null),L=D=t([i("esri.geometry.support.MeshTransform")],L);const O=h(),P=L;export{P as M};
