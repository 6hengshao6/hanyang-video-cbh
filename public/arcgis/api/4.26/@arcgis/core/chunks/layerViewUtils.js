/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as n,i as e}from"./maybe.js";function t(n){return n&&"function"==typeof n.highlight}function a(n){return n&&"function"==typeof n.maskOccludee}function c(e,t,a){return n(e)||e>a&&(0===t||e<t)}function i(n,t){return e(n)&&n>0||e(t)&&t>0}function o(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}export{o as e,t as h,i,a as o,c as s};
