/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as e,e as r,b as o}from"./screenUtils.js";import{b as s,n as t}from"./vec2.js";import{d as n,c as a}from"./vec3.js";import{m as c}from"./dehydratedFeatures.js";import{a as i}from"./elevationInfoUtils.js";function m(e,r,o,n){o.projectToRenderScreen(e,l),o.projectToRenderScreen(r,u),s(n,u,l),t(n,n)}function p(e,r,o,s,t=n()){const c=a(j,e);return c[2]=i(s,c,r,o)||0,s.renderCoordsHelper.toRenderCoords(c,r,t),t}function d(r,o,s,t){return"2d"===t.type?(f.x=r[0],f.y=r[1],f.spatialReference=o,t.toScreen(f)):(p(r,o,s,t,j),t.state.camera.projectToScreen(j,v),e(v[0],v[1]))}const f=c(0,0,0,null),j=n(),l=o(),u=o(),v=r();export{d as a,m as r,p as v};
