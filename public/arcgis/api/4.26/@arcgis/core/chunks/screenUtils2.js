/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"./typedArrayUtil.js";import{c as e,e as t}from"./screenUtils.js";function n(t){return e(t.x,t.y)}function c(e){return t(e.x,e.y)}function i(t,n){const c=(t instanceof HTMLElement?t:t.surface)?.getBoundingClientRect();return c?e(n.clientX-c.left,n.clientY-c.top):e(0,0)}function r(e,t){return t instanceof Event?i(e,t):n(t)}function a(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e)switch(e.type){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"immediate-double-click":case"hold":case"drag":case"mouse-wheel":return!0;default:return!1}return!1}export{r as a,i as b,n as c,c as d,a as i};
