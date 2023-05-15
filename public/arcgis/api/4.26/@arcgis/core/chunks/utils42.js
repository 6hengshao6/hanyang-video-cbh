/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
function t(t){for(let n=t;n;n=e(n))if(n instanceof Element&&"none"===getComputedStyle(n).display)return null;for(let n=e(t);n;n=e(n)){if(!(n instanceof Element))continue;const t=getComputedStyle(n);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return n;if("BODY"===n.tagName)return n}}return null}function e(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}export{t as offsetParent};
