/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{u as e}from"./dom.js";import{B as t}from"./index.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const o="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",r=`${o}, ${n}`;function s(e){const t=e.parentElement?.closest(r),o=t?.parentElement?.closest(r);return[t,o].filter((e=>e))}function c(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function l(t){return e(t.querySelectorAll("calcite-combobox-item"))}function a(t){return e(t.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function i(e){return t.isBrowser?document.evaluate("ancestor::calcite-combobox-item",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}export{r as C,l as a,o as b,n as c,s as d,i as e,c as g,a as h};
