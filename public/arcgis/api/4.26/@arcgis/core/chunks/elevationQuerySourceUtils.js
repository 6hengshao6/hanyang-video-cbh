/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{H as r,G as t}from"./typedArrayUtil.js";import{a as i,i as o}from"./maybe.js";import{g as e}from"./unitUtils.js";function l(t){if(i(t))return null;if(t instanceof n)return s(t);const o=t.tileInfo;if(i(o))return null;const l=r(o.lods);return i(l)?null:l.resolution*e(o.spatialReference)}function s(n){if(i(n))return null;const r=n.layers.items.map(u).filter(o);return t(r)??null}function u(n){return n&&"tileInfo"in n?l(n):null}export{l as a,s as g};
