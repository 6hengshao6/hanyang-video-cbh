/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"./typedArrayUtil.js";import{L as t}from"./Logger.js";import{b as n,g as r}from"./mathUtils.js";import{a as e}from"./maybe.js";import{a as s}from"./mat4.js";import{h as o,g as i,l as a,e as c,b as u,c as f,d as g,a as m,D as l,I as p,n as h,s as d,H as j}from"./vec3.js";import{c as y}from"./vec4.js";import{c as M,f as b}from"./vec4f64.js";import{a as A,A as S}from"./vector.js";import{s as v,d as R,e as P}from"./ray.js";function x(){return M()}function _(t,n=x()){return y(n,t)}function w(t,n){return b(t[0],t[1],t[2],n)}function C(t){return t}function L(t){t[0]=t[1]=t[2]=t[3]=0}function O(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function T(t){return t[3]}function q(t){return t}function E(t,n,r,e){return b(t,n,r,e)}function U(t,n,r){if(e(n))return!1;const{origin:s,direction:o}=n,i=Z;i[0]=s[0]-t[0],i[1]=s[1]-t[1],i[2]=s[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===a)return!1;const c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const f=Math.sqrt(u);let g=(-c-f)/(2*a);const m=(-c+f)/(2*a);return(g<0||m<g&&m>0)&&(g=m),!(g<0||(r&&(r[0]=s[0]+o[0]*g,r[1]=s[1]+o[1]*g,r[2]=s[2]+o[2]*g),0))}const Z=g();function k(t,n){return U(t,n,null)}function z(t,n,r){const e=v.get(),u=R.get();o(e,n.origin,n.direction);const f=T(t);o(r,e,n.origin),i(r,r,1/a(r)*f);const g=I(t,n.origin),m=A(n.origin,r);return s(u,m+g,e),c(r,r,u),r}function D(t,n,r){const e=u(v.get(),n,t),s=i(v.get(),e,t[3]/a(e));return m(r,s,t)}function H(t,n){const r=u(v.get(),n,t),e=p(r),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function I(t,r){const e=u(v.get(),r,t),s=a(e),o=T(t),i=o+Math.abs(o-s);return n(o/i)}const V=g();function X(t,n,e,s){const o=u(V,n,t);switch(e){case S.X:{const t=r(o,V)[2];return d(s,-Math.sin(t),Math.cos(t),0)}case S.Y:{const t=r(o,V),n=t[1],e=t[2],i=Math.sin(n);return d(s,-i*Math.cos(e),-i*Math.sin(e),Math.cos(n))}case S.Z:return h(s,o);default:return}}function Y(t,n){const r=u(F,n,t);return a(r)-t[3]}function B(t,n){const r=j(t,n),e=T(t);return r<=e*e}const F=g(),G=x(),J=Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:Y,angleToSilhouette:I,axisAt:X,clear:L,closestPoint:function(t,n,r){return U(t,n,r)?r:(P(n,t,r),D(t,r,r))},closestPointOnSilhouette:z,containsPoint:B,copy:_,create:x,distanceToSilhouette:H,elevate:function(t,n,r){return t!==r&&f(r,t),r[3]=t[3]+n,r},fromCenterAndRadius:w,fromRadius:O,fromValues:E,getCenter:q,getRadius:T,intersectRay:U,intersectRayClosestSilhouette:function(t,n,r){if(U(t,n,r))return r;const e=z(t,n,v.get());return m(r,n.origin,i(v.get(),n.direction,l(n.origin,e)/a(n.direction))),r},intersectsRay:k,projectPoint:D,setAltitudeAt:function(t,n,r,e){const s=Y(t,n),o=X(t,n,S.Z,F),a=i(F,o,r-s);return m(e,n,a)},setExtent:function(n,r,e){return t.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===e?e:_(n,e)},tmpSphere:G,wrap:C},Symbol.toStringTag,{value:"Module"}));export{L as a,_ as b,x as c,q as d,U as e,E as f,T as g,w as h,k as i,z as j,O as k,H as l,B as m,J as s,G as t,C as w};
