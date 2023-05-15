/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as n}from"./vec2f64.js";import{m as r,b as i,a as t,g as c,D as e,c as s,n as o,d as l}from"./vec3.js";import{n as a,s as f}from"./plane.js";function u(n,r,t,o){const l=function(n,r,t,o){const l=m;return n?(t&&(l.len=e(r,t)),s(l.dir,n)):(l.len=e(r,t),i(l.dir,t,r),c(l.dir,l.dir,1/l.len)),l}(o,r,t);return function(n,r,i,t){t.clip[0]=0,t.clip[1]=i?t.len:Number.MAX_VALUE;for(let i=0;i<n.length;i++)if(!d(n[i],r,t))return!1;return!0}(n,r,t,l)}function p(n,e,s,o){const l=r(s,i(n,o,e));return t(n,e,c(n,s,l))}const m={dir:l(),len:0,clip:n()};function d(n,i,t){const c=r(a(n),t.dir),e=-f(n,i);if(e<0&&c>=0)return!1;if(c>-1e-6&&c<1e-6)return e>0;if((e<0||c<0)&&!(e<0&&c<0))return!0;const s=e/c;return c>0?s<t.clip[1]&&(t.clip[1]=s):s>t.clip[0]&&(t.clip[0]=s),t.clip[0]<=t.clip[1]}export{p as c,u as f};
