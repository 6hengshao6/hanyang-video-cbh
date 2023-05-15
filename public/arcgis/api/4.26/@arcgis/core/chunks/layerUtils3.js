/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as r}from"./maybe.js";function a(r,a,e){if(!a||!r||!r.map)return;const{map:s}=r,n=s.layers.find((r=>r===a));n||s.add(a,e),n&&null!=e&&s.layers.reorder(n,e)}function e(a,e){return a.allLayerViews.find((a=>{const s=a.layer;return s===e||"sublayers"in s&&r(s.sublayers)&&s.sublayers.includes(e)}))}export{a,e as f};
