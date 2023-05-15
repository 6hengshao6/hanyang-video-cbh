/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../Color.js";import"../symbols.js";import"./typedArrayUtil.js";import t from"../core/Error.js";import{i as n}from"./maybe.js";import{f as i,c as s}from"./number.js";import{r as o}from"./numberUtils.js";import{a}from"./PointSizeSplatAlgorithm.js";import{a as l}from"./scaleUtils.js";import r from"../renderers/visualVariables/SizeVariable.js";import{s as u}from"./spatialStatistics.js";import{v as m}from"./binningUtils.js";import{b as c,f,c as d,g as p}from"./layerUtils2.js";import y from"../smartMapping/statistics/classBreaks.js";import w from"../smartMapping/statistics/summaryStatistics.js";import{d as h,e as b,f as g}from"./utils13.js";import v from"../symbols/edges/SketchEdges3D.js";import j from"../symbols/edges/SolidEdges3D.js";import{getBackgroundColorTheme as S}from"../views/support/colorUtils.js";import D from"../symbols/MeshSymbol3D.js";import z from"../symbols/FillSymbol3DLayer.js";import x from"../symbols/SimpleFillSymbol.js";import V from"../symbols/PolygonSymbol3D.js";import U from"../symbols/ExtrudeSymbol3DLayer.js";import L from"../symbols/SimpleLineSymbol.js";import k from"../symbols/LineSymbol3D.js";import T from"../symbols/LineSymbol3DLayer.js";import B from"../symbols/PathSymbol3DLayer.js";import F from"../symbols/SimpleMarkerSymbol.js";import M from"../symbols/PointSymbol3D.js";import I from"../symbols/IconSymbol3DLayer.js";import A from"../symbols/ObjectSymbol3DLayer.js";const C=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];async function E(e){const{layerAdapter:i,...s}=await async function(e){const{view:i}=e;if(!(e&&i&&e.layer))throw new t("outline:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&m(e,"outline");const{layer:s,...o}=e,a=e.forBinning?c:f,l=d(s,a,e.forBinning);if(!l)throw new t("outline:invalid-parameters","'layer' must be one of these types: "+p(a).join(", "));const r={layerAdapter:l,...o,view:i};await i.when();const u=n(r.signal)?{signal:r.signal}:null;if(await l.load(u),"polygon"!==l.geometryType)throw new t("outline:not-supported",`outline is not supported for geometryType: ${l.geometryType}`);return r}(e),o=await i.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...s});if(!o?.length)throw new t("outline:insufficient-info","No features are available to calculate statistics");const a=await u({features:o,geometryType:i.geometryType});if(!(a&&"avgSize"in a&&a.avgSize))throw new t("outline:insufficient-info","average polygon size is invalid");return function(e,t){const n=e.avgSize,i=l(1,t.spatialReference),s=C.map((e=>({size:e.width,value:Math.round(n/e.size*i)})));return s.sort(((e,t)=>e.value-t.value)),{visualVariables:[new r({target:"outline",valueExpression:"$view.scale",stops:s})],opacity:.25}}({...a,avgSize:a.avgSize},s.view)}const P=/^(\d+(\.\d+)?)\s*(%)$/i,R=[0,0,0,.4],q=["hours","minutes","seconds"],Y=[...h.light,...h.dark];function $(e,t,n){if("string"==typeof e){const t=n.getField(e);if(t&&"date"===t.type)return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const n=null!=t&&q.includes(t)?"short-date-short-time":"short-date";return i(e,s(n))}return e}function N(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function W(e,t,n,i,s){const o="90-10"===n&&t?{min:t.classBreakInfos[0].maxValue,max:t.classBreakInfos[t.classBreakInfos.length-1].minValue,avg:null,stddev:null}:e,{avg:a,stddev:l,min:r,max:u}=o,m=G(o,!!i,s??!0);let c=m?m[0]:r,f=m?m[1]:u;return m?{minDataValue:c,maxDataValue:f,defaultValuesUsed:!0}:("above"===n?c=N(a,l,r):"below"===n&&(f=N(a,l,r)),{minDataValue:c,maxDataValue:f,defaultValuesUsed:!1})}function G(e,t,n){let i,s;const o=function(e){let t,n,i=e&&e.statistics;if(i||(i={}),null==i.min)if(e.isDate){const e=O();t=e[0],n=e[1]}else t=0,n=100;else if(i.min===i.max)if(e.isDate){const e=O(i.min);t=e[0],n=e[1]}else i.min<0?(t=2*i.min,n=0):i.min>0?(t=0,n=2*i.min):(t=0,n=100);return{min:null!=t?t:i.min,max:null!=n?n:i.max,defaultValuesUsed:null!=t||null!=n}}({statistics:e,isDate:t});return o.defaultValuesUsed?(i=o.min,s=o.max):!n||null!=e.avg&&e.stddev||(i=e.min,s=e.max),null!=i&&null!=s?[i,s]:null}function O(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),i=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>i&&(i=e)),[n,i]}function H(t,n){const i=[],s=t.length;for(let o=0;o<n;o++)i.push(new e(t[o%s]));return i}function J({minDataValue:e,maxDataValue:t,defaultValuesUsed:n},i,s,o=!0){return n||"above"===s||"below"===s||"90-10"===s?X(e,t,5):Z(i,o)}function K(e){const{avg:t,stddev:n}=e,i=e.min,s=e.max;if(null==t||null==n)return X(i,s,5);const a=N(t,n,i),l=s-a,r=a-i,u=Math.max(l,r);return o([a-u,a-u/2,a,u/2+a,a+u],{strictBounds:!0})}function Q(e,t){const{min:n,max:i}=t,[s,a,l,r,u]=e,m=null!=n&&s<n,c=null!=i&&u>i;if(null==n||null==i||!m&&!c)return e;const f=m?n:s,d=c?i:u;return o([f,m?f+(l-f)/2:a,l,c?l+(d-l)/2:r,d],{strictBounds:!0})}function X(e,t,n){const i=(t-e)/(n-1),s=[e];for(let t=1;t<=n-2;t++)s.push(e+t*i);return s.push(t),o(s,{strictBounds:!0})}function Z({min:e,max:t,avg:n,stddev:i},s=!0){if(null==e||null==t||null==n||null==i)return[];let a=n-i,l=n+i;a<e&&(a=e),l>t&&(l=t),s&&(n=a+(l-a)/2);let r=o([a,l],{strictBounds:!0});return a=r[0],l=r[1],r=[a,a+(n-a)/2,n,n+(l-n)/2,l],o(r,{strictBounds:!0})}function _(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;default:return}}function ee(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}default:return}}function te(e,t){const{type:n,size:i,color:s,outline:o}=t;let a;switch(e){case"point":case"multipoint":if("2d"===n)a=new F({color:s,size:i,outline:{color:o.color,width:o.width}});else if("3d-flat"===n)a=new M({symbolLayers:[new I({size:i,resource:{primitive:"circle"},material:{color:s},outline:{color:o.color,size:o.width}})]});else if(n?.includes("3d-volumetric")){const e="3d-volumetric-uniform"===n,o=new A({height:i,resource:{primitive:e?"sphere":"cylinder"},material:{color:s}});e||(o.width=t.widthAndDepth,o.depth=t.widthAndDepth),a=new M({symbolLayers:[o]})}break;case"polyline":"2d"===n?a=new L({color:s,width:i}):"3d-flat"===n?a=new k({symbolLayers:[new T({size:i,material:{color:s}})]}):"3d-volumetric"===n&&(a=new k({symbolLayers:[new B({width:"number"==typeof i?i:parseFloat(i),height:"number"==typeof i?i:parseFloat(i),material:{color:s}})]}));break;case"polygon":"2d"===n?a=new x({color:s,outline:{color:o.color,width:o.width}}):"3d-flat"===n?a=new V({symbolLayers:[new z({material:{color:s},outline:{color:o.color,size:o.width}})]}):"3d-volumetric"===n&&(a=new V({symbolLayers:[new U({size:i,material:{color:s}})]}));break;case"mesh":{const e=t.meshInfo?.colorMixMode,n=t.meshInfo?.edgesType;a=new D({symbolLayers:[new z({material:{color:s,colorMixMode:e||null},edges:"solid"===n?new j({color:R}):"sketch"===n?new v({color:R}):null})]});break}}return a}function ne(e,n,i){const s=function(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}({layer:e,fields:n});if(s.length)return new t(i,"Unknown fields: "+s.join(", ")+". You can only use fields defined in the layer schema");const o=function(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}({layer:e,fields:n});return o.length?new t(i,"Unsupported fields: "+o.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}async function ie(e,t){const n={layer:e.layer,view:e.view,signal:e.signal},[i,s]=await Promise.all([y(e).catch(me),t?E(n).catch(me):null]),o=G({min:i?.minValue,max:i?.maxValue,avg:null,stddev:null},!1,!1);return{result:o?await y({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:o[0],maxValue:o[1],normalizationTotal:o[0]+o[1]}):i,defaultValuesUsed:!!o,outlineResult:s}}function se(e){return w(e)}function oe(e,t){let{minSize:n,maxSize:i}=e;return"height"===t&&(n=((i-n)/2+n)/4.6,i*=2),{minSize:n,maxSize:i}}function ae(e){return P.test(e)}function le(e){if(null==e)return;const t=e.match(P),n=Number(t[1]);return"%"===t[3]?new a({scaleFactor:n/100}):void 0}function re(e,t,n,i){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=i,e.field="string"==typeof t?t:"string"==typeof n?n:null}async function ue(e,t){let i=null,s=null;if(!e&&!t)return{basemapId:i,basemapTheme:s};if(!e&&t&&(e=t&&t.map?.basemap),e&&(i=b(e,Y,!1),i)){const e=g(i);n(e)&&(s=e)}return i||"2d"!==t?.type||(s=await S(t),n(s)&&(i="dark"===s?"dark-gray":"gray")),{basemapId:i,basemapTheme:s}}function me(e){const t=e.name?.toLowerCase();if(!t||t?.includes(":insufficient-info")||t?.includes(":insufficient-data"))return null;throw e}export{H as a,ue as b,J as c,se as d,ie as e,me as f,W as g,le as h,$ as i,ae as j,G as k,X as l,Z as m,te as n,E as o,_ as p,ee as q,oe as r,K as s,Q as t,re as u,ne as v};