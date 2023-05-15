/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"./typedArrayUtil.js";import{L as s}from"./Logger.js";import{b as i}from"./mathUtils.js";import{O as n,s as t,h as a}from"./ray.js";import{c as o,t as r,a as e}from"./mat4.js";import{c}from"./mat4f64.js";import{f as u,k as g,c as b,m as f,l,d as p,e as m,g as d,a as h,s as I,D as j,G as P,b as N,j as v,n as w,I as y}from"./vec3.js";import{p as M,A as T}from"./vector.js";import{c as A,p as S,d as _}from"./lineSegment.js";import{c as O,j as V,n as x,k as E,w as U,a as Y,l as k,h as q,m as B,o as F,i as L,q as C}from"./plane.js";const R=s.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),G=class{constructor(){this.plane=O(),this.origin=p(),this.basis1=p(),this.basis2=p()}};function z(s=ls){return{plane:O(s.plane),origin:g(s.origin),basis1:g(s.basis1),basis2:g(s.basis2)}}function D(s,i=z()){return W(s.origin,s.basis1,s.basis2,i)}function W(s,i,n,t=z()){return b(t.origin,s),b(t.basis1,i),b(t.basis2,n),X(t),a=t,o="fromValues()",Math.abs(f(a.basis1,a.basis2)/(l(a.basis1)*l(a.basis2)))>1e-6&&R.warn(o,"Provided basis vectors are not perpendicular"),Math.abs(f(a.basis1,cs(a)))>1e-6&&R.warn(o,"Basis vectors and plane normal are not perpendicular"),Math.abs(-f(cs(a),a.origin)-a.plane[3])>1e-6&&R.warn(o,"Plane offset is not consistent with plane origin"),t;var a,o}function X(s){V(s.basis2,s.basis1,s.origin,s.plane)}function Z(s,i,n){s!==n&&D(s,n);const a=d(t.get(),cs(s),i);return h(n.origin,n.origin,a),n.plane[3]-=i,n}function H(s,i=z()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return I(i.origin,s[0]+n,s[1]+t,0),I(i.basis1,n,0,0),I(i.basis2,0,t,0),k(0,0,1,0,i.plane),i}function J(s,i,n){return!!q(s.plane,i,n)&&us(s,n)}function K(s,n,a){const o=ps.get();fs(s,n,o,ps.get());let r=Number.POSITIVE_INFINITY;for(const e of Is){const c=bs(s,e,ms.get()),u=t.get();if(B(o,c,u)){const s=P(t.get(),n.origin,u),o=Math.abs(i(f(n.direction,s)));o<r&&(r=o,b(a,u))}}return r===Number.POSITIVE_INFINITY?Q(s,n,a):a}function Q(s,i,n){if(J(s,i,n))return n;const o=ps.get(),r=ps.get();fs(s,i,o,r);let e=Number.POSITIVE_INFINITY;for(const c of Is){const u=bs(s,c,ms.get()),g=t.get();if(F(o,u,g)){const s=a(i,g);if(!L(r,g))continue;s<e&&(e=s,b(n,g))}}return is(s,i.origin)<e&&$(s,i.origin,n),n}function $(s,i,n){const a=C(s.plane,i,t.get()),o=S(gs(s,s.basis1),a,-1,1,t.get()),r=S(gs(s,s.basis2),a,-1,1,t.get());return N(n,h(t.get(),o,r),s.origin),n}function ss(s,i,n){const{origin:a,basis1:o,basis2:r}=s,e=N(t.get(),i,a),c=M(o,e),u=M(r,e),g=M(cs(s),e);return I(n,c,u,g)}function is(s,i){const n=ss(s,i,t.get()),{basis1:a,basis2:o}=s,r=l(a),e=l(o),c=Math.max(Math.abs(n[0])-r,0),u=Math.max(Math.abs(n[1])-e,0),g=n[2];return c*c+u*u+g*g}function ns(s,i){return Math.sqrt(is(s,i))}function ts(s,i){return L(s.plane,i)&&us(s,i)}function as(s,i){const n=-s.plane[3];return M(cs(s),i)-n}function os(s,i){return v(s.basis1,i.basis1)&&v(s.basis2,i.basis2)&&v(s.origin,i.origin)}function rs(s,i,n){return s!==n&&D(s,n),o(js,i),r(js,js),m(n.basis1,s.basis1,js),m(n.basis2,s.basis2,js),m(x(n.plane),x(s.plane),js),m(n.origin,s.origin,i),E(n.plane,n.plane,n.origin),n}function es(s,i,n,t){return s!==t&&D(s,t),e(Ps,i,n),m(t.basis1,s.basis1,Ps),m(t.basis2,s.basis2,Ps),X(t),t}function cs(s){return x(s.plane)}function us(s,i){const n=N(t.get(),i,s.origin),a=y(s.basis1),o=y(s.basis2),r=f(s.basis1,n),e=f(s.basis2,n);return-r-a<0&&r-a<0&&-e-o<0&&e-o<0}function gs(s,i){const n=ms.get();return b(n.origin,s.origin),b(n.vector,i),n}function bs(s,i,n){const{basis1:a,basis2:o,origin:r}=s,e=d(t.get(),a,i.origin[0]),c=d(t.get(),o,i.origin[1]);h(n.origin,e,c),h(n.origin,n.origin,r);const u=d(t.get(),a,i.direction[0]),g=d(t.get(),o,i.direction[1]);return d(n.vector,h(u,u,g),2),n}function fs(s,i,n,t){const a=cs(s);V(a,i.direction,i.origin,n),V(x(n),a,i.origin,t)}const ls={plane:O(),origin:u(0,0,0),basis1:u(1,0,0),basis2:u(0,1,0)},ps=new n(O),ms=new n(A),ds=p(),hs=new n((()=>z())),Is=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],js=c(),Ps=c(),Ns=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:G,UP:ls,altitudeAt:as,axisAt:function(s,i,n,t){return function(s,i,n){switch(i){case T.X:b(n,s.basis1),w(n,n);break;case T.Y:b(n,s.basis2),w(n,n);break;case T.Z:b(n,cs(s))}return n}(s,n,t)},closestPoint:Q,closestPointOnSilhouette:K,copy:D,copyWithoutVerify:function(s,i){b(i.origin,s.origin),b(i.basis1,s.basis1),b(i.basis2,s.basis2),Y(i.plane,s.plane)},create:z,distance:ns,distance2:is,distanceToSilhouette:function(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Is){const a=bs(s,t,ms.get()),o=_(a,i);o>n&&(n=o)}return Math.sqrt(n)},elevate:Z,equals:os,extrusionContainsPoint:ts,fromAABoundingRect:H,fromValues:W,intersectRay:J,intersectRayClosestSilhouette:function(s,i,n){if(J(s,i,n))return n;const a=K(s,i,t.get());return h(n,i.origin,d(t.get(),i.direction,j(i.origin,a)/l(i.direction))),n},normal:cs,projectPoint:$,projectPointLocal:ss,rotate:es,setAltitudeAt:function(s,i,n,t){const a=as(s,i),o=d(ds,cs(s),n-a);return h(t,i,o),t},setExtent:function(s,i,n){return H(i,n),Z(n,as(s,s.origin),n),n},transform:rs,updateUnboundedPlane:X,wrap:function(s,i,n){const t=hs.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=U(0,0,0,0),X(t),t}},Symbol.toStringTag,{value:"Module"}));export{G as B,D as a,Ns as b,z as c,os as d,ts as e,W as f,H as g,ns as h,J as i,cs as n,es as r,rs as t,X as u};