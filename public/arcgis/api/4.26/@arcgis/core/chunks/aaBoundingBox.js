/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as n}from"./maybe.js";import t from"../geometry/Extent.js";import{c as a}from"./aaBoundingRect.js";function r(n=O){return[n[0],n[1],n[2],n[3],n[4],n[5]]}function i(n,t,a,i,e,u,m=r()){return m[0]=n,m[1]=t,m[2]=a,m[3]=i,m[4]=e,m[5]=u,m}function e(n,a){const r=isFinite(n[2])||isFinite(n[5]);return new t(r?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:a}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:a})}function u(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function m(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[3]=Math.max(n[3],t[2]),n[4]=Math.max(n[4],t[3])}function s(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function o(n,t,a=0,r=t.length/3){let i=n[0],e=n[1],u=n[2],m=n[3],s=n[4],o=n[5];for(let n=0;n<r;n++)i=Math.min(i,t[a+3*n]),e=Math.min(e,t[a+3*n+1]),u=Math.min(u,t[a+3*n+2]),m=Math.max(m,t[a+3*n]),s=Math.max(s,t[a+3*n+1]),o=Math.max(o,t[a+3*n+2]);n[0]=i,n[1]=e,n[2]=u,n[3]=m,n[4]=s,n[5]=o}function f(n,t,a){const r=t.length;let i=n[0],e=n[1],u=n[2],m=n[3],s=n[4],o=n[5];if(a)for(let n=0;n<r;n++){const a=t[n];i=Math.min(i,a[0]),e=Math.min(e,a[1]),u=Math.min(u,a[2]),m=Math.max(m,a[0]),s=Math.max(s,a[1]),o=Math.max(o,a[2])}else for(let n=0;n<r;n++){const a=t[n];i=Math.min(i,a[0]),e=Math.min(e,a[1]),m=Math.max(m,a[0]),s=Math.max(s,a[1])}n[0]=i,n[1]=e,n[2]=u,n[3]=m,n[4]=s,n[5]=o}function c(n){for(let t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function h(n){return n[0]>=n[3]?0:n[3]-n[0]}function M(n){return n[1]>=n[4]?0:n[4]-n[1]}function x(n){return n[2]>=n[5]?0:n[5]-n[2]}function l(n){const t=h(n),a=x(n),r=M(n);return Math.sqrt(t*t+a*a+r*r)}function I(n,t=[0,0,0]){return t[0]=n[0]+h(n)/2,t[1]=n[1]+M(n)/2,t[2]=n[2]+x(n)/2,t}function N(n,t=[0,0,0]){return t[0]=h(n),t[1]=M(n),t[2]=x(n),t}function g(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function E(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function F(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function T(t,a){return!!n(a)||F(t,a)}function p(n,t,a,r,i=n){return i[0]=n[0]+t,i[1]=n[1]+a,i[2]=n[2]+r,i[3]=n[3]+t,i[4]=n[4]+a,i[5]=n[5]+r,i}function y(n,t,a=n){const r=n[0]+h(n)/2,i=n[1]+M(n)/2,e=n[2]+x(n)/2;return a[0]=r+(n[0]-r)*t,a[1]=i+(n[1]-i)*t,a[2]=e+(n[2]-e)*t,a[3]=r+(n[3]-r)*t,a[4]=i+(n[4]-i)*t,a[5]=e+(n[5]-e)*t,a}function b(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function j(n,t,a=n){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a!==n&&(a[3]=n[3],a[4]=n[4],a[5]=n[5]),a}function V(n,t,a=n){return a[3]=t[0],a[4]=t[1],a[5]=t[2],a!==n&&(a[0]=n[0],a[1]=n[1],a[2]=n[2]),n}function Y(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function _(n){return n?Y(n,B):r(B)}function z(n,t){return t||(t=a()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function A(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function G(n,t,a,r,i){return n[0]=t,n[1]=a,n[2]=Number.NEGATIVE_INFINITY,n[3]=r,n[4]=i,n[5]=Number.POSITIVE_INFINITY,n}function P(n){return 6===n.length}function R(n){return 0===h(n)&&0===M(n)&&0===x(n)}function d(t,a,r){if(n(t)||n(a))return t===a;if(!P(t)||!P(a))return!1;if(r){for(let n=0;n<t.length;n++)if(!r(t[n],a[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==a[n])return!1;return!0}function q(n,t,a,r,e,u){return i(n,t,a,r,e,u,S)}const w=[-1/0,-1/0,-1/0,1/0,1/0,1/0],B=[1/0,1/0,1/0,-1/0,-1/0,-1/0],O=[0,0,0,0,0,0],S=r();export{c as A,T as B,m as C,N as D,E,F,b as G,B as N,w as P,O as Z,G as a,u as b,r as c,d,s as e,i as f,A as g,j as h,P as i,V as j,_ as k,f as l,l as m,o as n,I as o,y as p,M as q,x as r,Y as s,e as t,z as u,R as v,h as w,q as x,p as y,g as z};