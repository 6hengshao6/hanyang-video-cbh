/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{C as n,c as e}from"./generateRendererUtils.js";const t="<Null>",l="equal-interval",a=1,i=5,r=10,o=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,u=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),s=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function c(n){return null==n||"string"==typeof n&&!n?t:n}function m(n){const e=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,l=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!t&&!l}function f(n){const e=n.returnDistinct?[...new Set(n.values)]:n.values,t=e.filter((n=>null!=n)).length,l={count:t};return n.supportsNullCount&&(l.nullcount=e.length-t),n.percentileParams&&(l.median=p(e,n.percentileParams)),l}function d(n){const{values:e,useSampleStdDev:t,supportsNullCount:l}=n;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,o=null,u=null,s=null,c=0;const m=null==n.minValue?-1/0:n.minValue,f=null==n.maxValue?1/0:n.maxValue;for(const n of e)Number.isFinite(n)?n>=m&&n<=f&&(r=null===r?n:r+n,a=Math.min(a,n),i=Math.max(i,n),c++):"string"==typeof n&&c++;if(c&&null!=r){o=r/c;let n=0;for(const t of e)Number.isFinite(t)&&t>=m&&t<=f&&(n+=(t-o)**2);s=t?c>1?n/(c-1):0:c>0?n/c:0,u=Math.sqrt(s)}else a=null,i=null;const d={avg:o,count:c,max:i,min:a,stddev:u,sum:r,variance:s};return l&&(d.nullcount=e.length-c),n.percentileParams&&(d.median=p(e,n.percentileParams)),d}function p(n,e){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=e,r=v(t,"desc"===a);if(0===(n=[...n].filter((n=>null!=n)).sort(((n,e)=>r(n,e)))).length)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const o=(n.length-1)*l,u=Math.floor(o),s=u+1,c=o%1,m=n[u],f=n[s];return s>=n.length||i||"string"==typeof m||"string"==typeof f?m:m*(1-c)+f*c}function v(n,e){const t=e?1:-1,l=function(n){return n?(n,e)=>{const t=b(n,e,!0);return null!=t?t:e-n}:(n,e)=>{const t=b(n,e,!1);return null!=t?t:n-e}}(e),a=h(e);if(!n||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...u].includes(n))return(n,e)=>"number"==typeof n&&"number"==typeof e?l(n,e):"string"==typeof n&&"string"==typeof e?a(n,e):t;if("esriFieldTypeDate"===n)return(n,e)=>{const a=new Date(n).getTime(),i=new Date(e).getTime();return isNaN(a)||isNaN(i)?t:l(a,i)};if(u.has(n))return(n,e)=>l(n,e);if("esriFieldTypeString"===n)return(n,e)=>a(n,e);if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){const n=h(e);return(e,t)=>n(g(e),g(t))}return e?(n,e)=>1:(n,e)=>-1}function b(n,e,t){if(t){if(null==n)return null==e?0:1;if(null==e)return-1}else{if(null==n)return null==e?0:-1;if(null==e)return 1}return null}function h(n){return n?(n,e)=>{const t=b(n,e,!0);return null!=t?t:(n=n.toUpperCase())>(e=e.toUpperCase())?-1:n<e?1:0}:(n,e)=>{const t=b(n,e,!1);return null!=t?t:(n=n.toUpperCase())<(e=e.toUpperCase())?-1:n>e?1:0}}function g(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function V(n,e){let t;for(t in n)s.includes(t)&&(Number.isFinite(n[t])||(n[t]=null));return e?(["avg","stddev","variance"].forEach((e=>{null!=n[e]&&(n[e]=Math.ceil(n[e]))})),n):n}function T(n){const e={};for(let t of n)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==e[t]?e[t]={count:1,data:t}:e[t].count++;return{count:e}}function y(n){return"coded-value"!==n?.type?[]:n.codedValues.map((n=>n.code))}function F(n,e,t,l){const a=n.count,i=[];if(t&&e){const n=[],t=y(e[0]);for(const a of t)if(e[1]){const t=y(e[1]);for(const i of t)if(e[2]){const t=y(e[2]);for(const e of t)n.push(`${c(a)}${l}${c(i)}${l}${c(e)}`)}else n.push(`${c(a)}${l}${c(i)}`)}else n.push(a);for(const e of n)a.hasOwnProperty(e)||(a[e]={data:e,count:0})}for(const n in a){const e=a[n];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function x(n,e,t,l){let a=null;switch(e){case"log":0!==n&&(a=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=n/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=n/t);break;case"natural-log":n>0&&(a=Math.log(n));break;case"square-root":n>0&&(a=n**.5)}return a}function D(n,t){const l=z({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||i});return n=function(n,e,t){const l=e??-1/0,a=t??1/0;return n.filter((n=>Number.isFinite(n)&&n>=l&&n<=a))}(n,t.minValue,t.maxValue),e({definition:l,values:n,normalizationTotal:t.normalizationTotal})}function z(e){const{breakCount:t,field:i,normalizationField:r,normalizationType:o}=e,u=e.classificationMethod||l,s="standard-deviation"===u?e.standardDeviationInterval||a:void 0;return new n({breakCount:t,classificationField:i,classificationMethod:u,normalizationField:"field"===o?r:void 0,normalizationType:o,standardDeviationInterval:s})}function I(n,e){let t=n.classBreaks;const l=t.length,a=t[0].minValue,i=t[l-1].maxValue,r="standard-deviation"===e,u=o;return t=t.map((n=>{const e=n.label,t={minValue:n.minValue,maxValue:n.maxValue,label:e};if(r&&e){const n=e.match(u),l=n?.map((n=>+n.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(e.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):e.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function N(n,e){const t=function(n,e){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:u,minValue:s,maxValue:c}=e,f=e.numBins||r;let p=null,v=null,b=null;if(l&&"equal-interval"!==l||i){const{classBreaks:e}=D(n,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:f});p=e[0].minValue,v=e[e.length-1].maxValue,b=e.map((n=>[n.minValue,n.maxValue]))}else{if(null!=s&&null!=c)p=s,v=c;else{const e=d({values:n,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:m({normalizationType:i,normalizationField:o,minValue:s,maxValue:c})});p=e.min??null,v=e.max??null}b=M(p??0,v??0,f)}return{min:p,max:v,intervals:b}}(n,e),l=t.intervals,a=t.min??0,i=t.max??0,o=l.map(((n,e)=>({minValue:l[e][0],maxValue:l[e][1],count:0})));for(const e of n)if(null!=e&&e>=a&&e<=i){const n=S(l,e);n>-1&&o[n].count++}return{bins:o,minValue:a,maxValue:i,normalizationTotal:e.normalizationTotal}}function S(n,e){let t=-1;for(let l=n.length-1;l>=0;l--)if(e>=n[l][0]){t=l;break}return t}function M(n,e,t){const l=(e-n)/t,a=[];let i,r=n;for(let n=1;n<=t;n++)i=r+l,i=Number(i.toFixed(16)),a.push([r,n===t?e:i]),r=i;return a}export{d as a,V as b,f as c,T as d,F as e,D as f,x as g,N as h,m as i,v as j,p as k,M as l,z as m,c as p,I as r,s};