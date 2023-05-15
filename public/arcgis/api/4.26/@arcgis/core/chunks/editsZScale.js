/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as n}from"./maybe.js";import{j as s,f as i}from"./unitUtils.js";function f(n,s,i){if(null==n.hasM||n.hasZ)for(const n of s)for(const s of n)s.length>2&&(s[2]*=i)}function t(n,i,f){if(!n&&!i||!f)return;const t=s(f);e(n,f,t),e(i,f,t)}function e(n,s,i){if(n)for(const f of n)o(f.geometry,s,i)}function o(t,e,o){if(n(t)||!t.spatialReference||i(t.spatialReference,e))return;const r=s(t.spatialReference)/o;if(1!==r)if("x"in t)null!=t.z&&(t.z*=r);else if("rings"in t)f(t,t.rings,r);else if("paths"in t)f(t,t.paths,r);else if("points"in t&&(null==t.hasM||t.hasZ))for(const n of t.points)n.length>2&&(n[2]*=r)}export{t as u};
