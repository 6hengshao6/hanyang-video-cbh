/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{b as t}from"./maybe.js";import{m as r}from"./utils.js";function o(r){let o=r.constructor.__accessorMetadata__;const a=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(o){if(!a){o=Object.create(o);for(const t in o)o[t]=e(o[t]);Object.defineProperty(r.constructor,"__accessorMetadata__",{value:o,enumerable:!1,configurable:!0,writable:!0})}}else o={},Object.defineProperty(r.constructor,"__accessorMetadata__",{value:o,enumerable:!1,configurable:!0,writable:!0});return t(r.constructor.__accessorMetadata__)}function a(e,t){const r=o(e);let a=r[t];return a||(a=r[t]={}),a}function c(e,t){return r(e,t,n)}const s=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function n(e){return s.test(e)?"replace":"merge"}export{o as a,a as g,c as m};
