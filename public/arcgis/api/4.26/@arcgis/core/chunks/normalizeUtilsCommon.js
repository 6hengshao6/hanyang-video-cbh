/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../geometry/Polyline.js";import n from"../geometry/SpatialReference.js";import{isPolygon as t}from"../geometry/support/jsonUtils.js";const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new e({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.WebMercator}),minus180Line:new e({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new e({paths:[[[180,-180],[180,180]]],spatialReference:n.WGS84}),minus180Line:new e({paths:[[[-180,-180],[-180,180]]],spatialReference:n.WGS84})}};function s(e,n){return Math.ceil((e-n)/(2*n))}function o(e,n){const t=a(e);for(const e of t)for(const t of e)t[0]+=n;return e}function a(e){return t(e)?e.rings:e.paths}export{r as c,a as g,s as o,o as u};
