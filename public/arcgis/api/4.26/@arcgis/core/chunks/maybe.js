/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=null;function r(n){return null!=n}function t(n){return null==n}function u(t,u){return r(t)?u(t):n}function o(n){return n}function e(n){return n}function s(n,r){return f(n,r),n}function f(n,r){if(t(n))throw new Error(r??"value is None")}function a(n,t){return r(n)?n:"function"==typeof t?t():t}function c(n,t){return r(n)?n:t}function i(n){return r(n)&&n.destroy(),null}function l(n){return r(n)&&n.dispose(),null}function h(n){return r(n)&&n.remove(),null}function p(n){return r(n)&&n.abort(),null}function w(n){return r(n)&&n.release(),null}function y(n,t,u){return r(n)&&r(t)?r(u)?u(n,t):n.equals(t):n===t}function d(n){return null}function v(n,t){const u=new Array;return n.forEach((n=>{const o=t(n);r(o)&&u.push(o)})),u}function b(n,r){const t=new Array;for(const u of n)t.push(m(u,null,r));return t}function g(n,r){for(const t of n)u(t,r)}function m(n,t,u){return r(n)?u(n):t}function q(n){return n.filter((n=>r(n)))}function x(n,...r){let t=n;for(let n=0;n<r.length&&t;++n)t=t[r[n]];return t}function A(n){return n}export{t as a,A as b,s as c,i as d,a as e,p as f,u as g,y as h,r as i,x as j,w as k,f as l,m,d as n,c as o,l as p,n as q,h as r,q as s,e as t,o as u,g as v,b as w,v as x};
