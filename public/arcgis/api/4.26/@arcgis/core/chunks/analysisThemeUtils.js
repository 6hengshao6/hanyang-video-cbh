/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import n from"../Color.js";import o from"../config.js";import{getColorLuminance as r}from"../views/support/colorUtils.js";function t(o,t){const e=o.a*t;return r(o)>225?new n([0,0,0,e]):new n([255,255,255,e])}function e(o,r){const t=new n(o);return t.a*=r,t}function s(n=1){return e(o.analysisTheme.accentColor,n)}function i(n=1){return t(s(),n)}function c(n=1){return e(o.analysisTheme.textColor,n)}function u(n=1){return t(c(),n)}export{i as a,u as b,c,s as g};
