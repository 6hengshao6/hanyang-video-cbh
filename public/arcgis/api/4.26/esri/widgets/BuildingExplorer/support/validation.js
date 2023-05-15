// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(e,h){function k(b,a){if(0===a.length)return b;if(Infinity===b)return a[a.length-1];if(-Infinity===b)return a[0];let c=a[0],d=Math.abs(c-b);for(const f of a)a=Math.abs(f-b),a<d&&(c=f,d=a);return c}e.findClosest=k;e.getDomainInfo=function(b){const a={fieldValueMap:new Map,allowedValues:[]};for(const c of b){const d=a.fieldValueMap;c.fieldValueMap.forEach((f,g)=>{d.has(g)||(d.set(g,f),a.allowedValues.push(g))})}a.allowedValues.sort((c,d)=>c-d);return a};
e.getMax=function(b){let a=null;for(const c of b)a=h.isSome(a)?Math.max(a,c):c;return a};e.getMin=function(b){let a=null;for(const c of b)a=h.isSome(a)?Math.min(a,c):c;return a};e.getValidNumber=function(b,a){return 0<a.allowedValues.length?k(b,a.allowedValues):null};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});