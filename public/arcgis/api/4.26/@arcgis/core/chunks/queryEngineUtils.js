/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{f as t}from"./vec3.js";import{h as r}from"./snappingUtils.js";import{D as a}from"./DrapedEdgeSnappingCandidate.js";import{E as n}from"./EdgeSnappingCandidate.js";import{V as d}from"./VertexSnappingCandidate.js";function o({x:e,y:a,z:n}){return r(t(e,a,n??0))}function i(e,t){switch(e.type){case"edge":return e.draped?new a({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:o(e.target),objectId:e.objectId,getGroundElevation:t}):new n({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:o(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new d({targetPoint:o(e.target),objectId:e.objectId,isDraped:!1})}}function s(t){return e(t)&&"3d"===t.type?(e,r,a)=>t.elevationProvider.getElevation(e,r,a??0,t.spatialReference,"ground"):()=>null}export{i as c,s as m};
