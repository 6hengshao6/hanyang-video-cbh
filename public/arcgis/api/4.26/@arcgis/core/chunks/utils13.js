/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{l as e}from"./arcadeOnDemand.js";import{g as t}from"./basemapUtils.js";const r=",",a={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","arcgis-light-gray","arcgis-navigation","arcgis-streets","arcgis-streets-relief","arcgis-topographic","arcgis-oceans","osm-standard","osm-standard-relief","osm-streets","osm-streets-relief","osm-light-gray","arcgis-terrain","arcgis-charted-territory","arcgis-community","arcgis-colored-pencil","arcgis-modern-antique","arcgis-midcentury","arcgis-newspaper","arcgis-hillshade-light"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","arcgis-imagery","arcgis-imagery-standard","arcgis-dark-gray","arcgis-navigation-night","arcgis-streets-night","osm-dark-gray","arcgis-nova","arcgis-hillshade-dark"]},s="percent-of-total",i="field",n={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},o=["integer","small-integer"];let c=null;async function l(t){const{field:r,field2:a,field3:s,normalizationField:i,valueExpression:n}=t;let o=[];if(n){if(!c){const{arcadeUtils:t}=await e();c=t}o=c.extractFieldNames(n)}return r&&o.push(r),a&&o.push(a),s&&o.push(s),i&&o.push(i),o}function g(e){let t=e.normalizationType;return t||(e.normalizationField?t=i:null!=e.normalizationTotal&&(t=s)),t??void 0}function u(e){return String(e).padStart(2,"0")}function d(e,t,r){let a;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),a=`TIMESTAMP'${r?e.getFullYear():e.getUTCFullYear()}-${u((r?e.getMonth():e.getUTCMonth())+1)}-${u(r?e.getDate():e.getUTCDate())} ${u(r?e.getHours():e.getUTCHours())}:${u(r?e.getMinutes():e.getUTCMinutes())}:${u(r?e.getSeconds():e.getUTCSeconds())}'`):a=e,a}function f(e,t,r,a){const{hasQueryEngine:s}=e;let i=`(${d(r,m(e,r),s)} - ${d(t,m(e,t),s)})`;s&&(i=`(${i} * ${n.milliseconds})`);let o=n[a],c="/";return o<1&&(o=1/o,c="*"),{sqlExpression:1===o?i:`(${i} ${c} ${o})`,sqlWhere:null}}function m(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const r=e.getField(t);if("<now>"===t.toLowerCase())return;if(r&&"date"===r.type)return"field"}}function h(e,t=a){for(const r in t)if(t[r].includes(e))return r}function p(e,r,a=!0){let s=null;return e&&("string"==typeof e?r.includes(e)&&(s=e):s=t(e)),a?s||"gray":s}function y(e,t){const r=t&&e.getField(t);return!!r&&o.includes(r.type)}function $(e){return`cast(${e} as float)`}export{r as F,f as a,g as b,$ as c,a as d,p as e,h as f,l as g,m as h,y as i,n as u};
