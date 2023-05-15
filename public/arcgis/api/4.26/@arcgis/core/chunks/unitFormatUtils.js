/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{B as t}from"./byteSizeEstimations.js";import{c as n}from"./Cyclical.js";import{c as r}from"./mathUtils.js";import{e as i}from"./maybe.js";import{r as s}from"./string.js";import{J as a,w as e,N as o,I as u,O as c,H as m,G as f}from"./unitUtils.js";import{a as b}from"./number.js";function g(t,n,r){return t.units[n][r]}function l(t,n,r,i=2,s="abbr"){return`${b(n,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:n>0?"never":"exceptZero"})} ${g(t,r,s)}`}function p(t,n,r,i=2,s="abbr"){return`${b(n,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:"exceptZero"})} ${g(t,r,s)}`}function D(t,n,r,i=2,s="abbr"){const o=a(n,r);return l(t,e(n,r,o),o,i,s)}function y(t,n,r,i=2,s="abbr"){const o=a(n,r);return p(t,e(n,r,o),o,i,s)}function x(t,n,r,i=2,s="abbr"){const a=o(n,r);return l(t,e(n,r,a),a,i,s)}function F(t,n,r,i=2,s="abbr"){const a=o(n,r);return p(t,e(n,r,a),a,i,s)}function h(t,n,r,i=2,s="abbr"){const a=u(n,r);return l(t,e(n,r,a),a,i,s)}function j(t,n,r,i=2,s="abbr"){const a=u(n,r);return p(t,e(n,r,a),a,i,s)}function B(t,n,r,i=2,s="abbr"){const a=c(n,r);return l(t,e(n,r,a),a,i,s)}function w(t,n,r,i=2,s="abbr"){const a=c(n,r);return p(t,e(n,r,a),a,i,s)}function S(t,n,r,i=2,s="abbr"){const a=m(n,r);return l(t,e(n,r,a),a,i,s)}function d(t,n,r,i=2,s="abbr"){const a=f(n,r);return l(t,e(n,r,a),a,i,s)}function M(t,r,s,a,o){o=i(o,2);let u=n.normalize(function(t,n,r){if(n===r)return t;switch(r){case"arithmetic":return function(t){return 90-t}(t);case"geographic":return function(t){return-t-90}(t)}}(e(t,r,"degrees"),s,a),0,!0);const c={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:o,minimumFractionDigits:o,signDisplay:u>0?"never":"exceptZero"};return u=Z(u,c),b(u,c)}function I(t,n,r,s,a){r!==s&&(t=-t);const o={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:a=i(a,2),minimumFractionDigits:a,signDisplay:"exceptZero"};let u=e(t,n,"degrees")%360;return u=Z(u,o),b(u,o)}const O=new Map;function Z(t,n){const r=JSON.stringify(n);let i=O.get(r);return i||(i=new Intl.NumberFormat("en-US",n),O.set(r,i)),/\-?\+?360/.test(i.format(t))?0:t}const $=["B","kB","MB","GB","TB"];function z(n,i){let a=0===i?0:Math.floor(Math.log(i)/Math.log(t.KILOBYTES));a=r(a,0,$.length-1);const e=b(i/t.KILOBYTES**a,{maximumFractionDigits:2});return s(n.units.bytes[$[a]],{fileSize:e})}export{D as a,x as b,h as c,B as d,M as e,l as f,I as g,p as h,y as i,F as j,S as k,j as l,w as m,d as n,z as o,g as u};
