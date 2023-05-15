/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,t,r,n){return function(e){return"function"==typeof e}(e)?e(t,r,n):e}function t(e){return[e.r,e.g,e.b,e.a]}const r=" /-,\n";function n(e){let t=e.length;for(;t--;)if(!r.includes(e.charAt(t)))return!1;return!0}function o(e,t){const r=[];let o=0,s=-1;do{if(s=e.indexOf("[",o),s>=o){if(s>o){const t=e.substr(o,s-o);r.push([t,null,n(t)])}if(o=s+1,s=e.indexOf("]",o),s>=o){if(s>o){const n=t[e.substr(o,s-o)];n&&r.push([null,n,!1])}o=s+1}}}while(-1!==s);if(o<e.length-1){const t=e.substr(o);r.push([t,null,n(t)])}return r}function s(e,t,r){let n="",o=null;for(const r of t){const[t,s,i]=r;if(t)i?o=t:(o&&(n+=o,o=null),n+=t);else{const t=e.attributes[s];t&&(o&&(n+=o,o=null),n+=t)}}return a(n,r)}function i(e,t,r){const n=o(t,e);return e=>s(e,n,r)}function a(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function l(e,t,r,n,o,s,i=!0){const a=t/o,l=r/s,c=Math.ceil(a/2),u=Math.ceil(l/2);for(let r=0;r<s;r++)for(let f=0;f<o;f++){const y=4*(f+(i?s-r-1:r)*o);let M=0,C=0,m=0,b=0,p=0,d=0,h=0;const I=(r+.5)*l;for(let n=Math.floor(r*l);n<(r+1)*l;n++){const r=Math.abs(I-(n+.5))/u,o=(f+.5)*a,s=r*r;for(let r=Math.floor(f*a);r<(f+1)*a;r++){let i=Math.abs(o-(r+.5))/c;const a=Math.sqrt(s+i*i);a>=-1&&a<=1&&(M=2*a*a*a-3*a*a+1,M>0&&(i=4*(r+n*t),h+=M*e[i+3],m+=M,e[i+3]<255&&(M=M*e[i+3]/250),b+=M*e[i],p+=M*e[i+1],d+=M*e[i+2],C+=M))}}n[y]=b/C,n[y+1]=p/C,n[y+2]=d/C,n[y+3]=h/m}}function c(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function u(e){return e.data?.symbol??null}function f(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function y(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function M(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function C(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const m=(e,t=0)=>null==e||isNaN(e)?t:e,b=e=>e.tintColor?c(e.tintColor):{r:255,g:255,b:255,a:1},p=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function d(){return import("./geometryEngineJSON.js").then((e=>e.g))}function h(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function I(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function g(e){let t="",r="";if(e){const n=e.toLowerCase();n.includes("italic")?t="italic":n.includes("oblique")&&(t="oblique"),n.includes("bold")?r="bold":n.includes("light")&&(r="lighter")}return{style:t,weight:r}}function S(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function k(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=k(t);if(null!=e)return e}break;case"CIMTextSymbol":return k(e.symbol);case"CIMSolidFill":return e.color}}function P(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=P(e);if(null!=t)return t}break}case"CIMTextSymbol":return P(e.symbol);case"CIMSolidStroke":case"CIMSolidFill":return e.color}}function w(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=w(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return w(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function L(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function x(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function A(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const F=e=>e.includes("data:image/svg+xml");function G(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}export{e as A,t as B,l as C,y as a,M as b,C as c,F as d,S as e,c as f,g,L as h,f as i,x as j,k,P as l,G as m,h as n,I as o,m as p,A as q,o as r,s,u as t,p as u,d as v,b as w,w as x,a as y,i as z};
