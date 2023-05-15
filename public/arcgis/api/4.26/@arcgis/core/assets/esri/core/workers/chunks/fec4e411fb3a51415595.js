"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9461],{60045:(e,n,t)=>{t.d(n,{M:()=>a,b:()=>l,c:()=>u,e:()=>s,g:()=>o,k:()=>r}),t(82426);var i=t(99403);t(7200),t(68681);const a=2.4;function o(e){return(0,i.p)(e*a)}function r(e){return(0,i.a)(e)/a}function l(e,n,t,a){const{radius:o,fieldOffset:r,field:l}=n,u=Math.round((0,i.a)(o)),f=new Float64Array(t*a);let c,d=Number.NEGATIVE_INFINITY;const m=function(e,n){return null!=e?"string"==typeof n?n=>-1*+n.readAttribute(e):t=>+t.readAttribute(e)+n:e=>1}(l,r),p=new Set;for(const n of e){const e=n.getCursor();for(;e.next();){const n=e.getObjectId();if(p.has(n))continue;p.add(n);const i=e.readLegacyPointGeometry(),o=128;if(i.x<-o||i.x>=t+o||i.y<-o||i.y>a+o)continue;const r=+m(e),l=Math.max(0,Math.round(i.x)-u),h=Math.max(0,Math.round(i.y)-u),y=Math.min(a,Math.round(i.y)+u),v=Math.min(t,Math.round(i.x)+u);for(let e=h;e<y;e++)for(let n=l;n<v;n++){const a=e*t+n,o=s(i.x-n,i.y-e,u);c=f[a]+=o*r,c>d&&(d=c)}}}return{matrix:f.buffer,max:d}}function s(e,n,t){const i=Math.sqrt(e**2+n**2)/t;return i>1?0:3/(Math.PI*t**2)*(1-i**2)**2}function u(e,n){return"function"==typeof e?e:e?"string"==typeof n?n=>-1*+n[e]:t=>+t[e]+n:()=>1}},99403:(e,n,t)=>{t.d(n,{a:()=>r,c:()=>u,p:()=>l,t:()=>s});const i=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,a="screenUtils.toPt: input not recognized!",o=96;function r(e){return e?e/72*o:0}function l(e){return e?72*e/o:0}function s(e){if("string"==typeof e){const n=e.match(i);if(n){const t=Number(n[1]),i=n[3]&&n[3].toLowerCase(),a="-"===e.charAt(0),o="px"===i?l(t):t;return a?-o:o}return console.warn(a),null}return e}function u(e=0,n=0){return{x:e,y:n}}},99461:(e,n,t)=>{t.r(n),t.d(n,{a:()=>v,b:()=>E,c:()=>$,d:()=>h,e:()=>x,f:()=>z,g:()=>y,h:()=>M,i:()=>I,j:()=>g,k:()=>V,m:()=>w,s:()=>T,u:()=>F,v:()=>b}),t(74569);var i=t(60991),a=t(71252),o=t(99403),r=t(60947),l=t(71435),s=t(53785),u=t(14249),f=t(60045),c=t(90529),d=t(60217),m=t(91597);let p=null;async function h(e,n){if(!n)return[];const{field:t,field2:i,field3:a,fieldDelimiter:o}=e,l=e.valueExpression,s=e.normalizationType,u=e.normalizationField,f=e.normalizationTotal,m=[],h=e.viewInfoParams;let y=null,v=null;if(l){if(!p){const{arcadeUtils:e}=await(0,d.l)();p=e}y=p.createFunction(l),v=h&&p.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new r.Z(h.spatialReference)})}const I=e.fieldInfos,x=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!I?null:{fields:I};return n.forEach((e=>{const n=e.attributes;let r;if(l){const n=x?{...e,layer:x}:e,t=p.createExecContext(n,v);r=p.executeFunction(y,t)}else n&&(r=n[t],i&&(r=`${(0,c.p)(r)}${o}${(0,c.p)(n[i])}`,a&&(r=`${r}${o}${(0,c.p)(n[a])}`)));if(s&&"number"==typeof r&&isFinite(r)){const e=n&&parseFloat(n[u]);r=(0,c.g)(r,s,e,f)}m.push(r)})),m}function y(e){const n=e.field,t=e.normalizationType,i=e.normalizationField;let a;return"field"===t?a="(NOT "+i+" = 0)":"log"!==t&&"natural-log"!==t&&"square-root"!==t||(a=`(${n} > 0)`),a}function v(e,n,t){const i=null!=n?e+" >= "+n:"",a=null!=t?e+" <= "+t:"";let o="";return o=i&&a?w(i,a):i||a,o?"("+o+")":""}function I(e,n,t,a){let o;return n?n.name!==e.objectIdField&&a.includes(n.type)||(o=new i.Z(t,"'field' should be one of these types: "+a.join(","))):o=new i.Z(t,"'field' is not defined in the layer schema"),o}function x(e,n,t){let a;return n?n.name!==e.objectIdField&&(0,u.H7)(n)||(a=new i.Z(t,"'field' should be one of these numeric types: "+u.v5.join(","))):a=new i.Z(t,"'field' is not defined in the layer schema"),a}function w(e,n){let t=(0,a.i)(e)?e:"";return(0,a.i)(n)&&n&&(t=t?"("+t+") AND ("+n+")":n),t}function z(e,n){if(e&&"intersects"!==e.spatialRelationship)return new i.Z(n,"Only 'intersects' spatialRelationship is supported for featureFilter")}function b(e,n,t){const a=function(e){const n=e.layer;return e.fields.filter((e=>!n.getField(e)))}({layer:e,fields:n});if(a.length)return new i.Z(t,"Unknown fields: "+a.join(", ")+". You can only use fields defined in the layer schema");const o=function(e){const n=e.layer;return e.fields.filter((e=>{const t=n.getFieldUsageInfo(e);return!t||!t.supportsStatistics}))}({layer:e,fields:n});return o.length?new i.Z(t,"Unsupported fields: "+o.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function g(e,n,t){const i=[],a=[],o=[],r=[],l=[];e.forEach(((e,n)=>{const s=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(l.push(u),a.push(`var ${s}${n} = Number($feature["${u}"]);`)):(i.push(`function getValueForExpr${n}() {\n  ${u} \n}`),a.push(`var ${s}${n} = Number(getValueForExpr${n}());`)),t||o.push(`${s}${n} = IIf(${s}${n} < 0, 0, ${s}${n});`),r.push(`${s}${n}`)}));let s="return sum;";const u=i.length?null:l.reduce(((e,n)=>`${e} + ${n}`));let f=null;return n||t?n?t||(s="return IIf(sum >= 0, sum, null);",u&&(f=`(( ${u} ) >= 0)`)):(s="return IIf(sum != 0, sum, null);",u&&(f=`(( ${u} ) <> 0)`)):(s="return IIf(sum > 0, sum, null);",u&&(f=`(( ${u} ) > 0)`)),{valueExpression:[i.length?i.join("\n"):"",a.join("\n"),o.join("\n"),`var sum = ${r.join(" + ")};`,s].filter(Boolean).join("\n\n"),sqlExpression:u,sqlWhere:f}}async function T(e){const{attribute:n,features:t}=e,{normalizationType:i,normalizationField:a,minValue:o,maxValue:r,fieldType:l}=n,s=await h({field:n.field,valueExpression:n.valueExpression,normalizationType:i,normalizationField:a,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},t),u=(0,c.i)({normalizationType:i,normalizationField:a,minValue:o,maxValue:r}),f={value:.5,fieldType:l},d="esriFieldTypeString"===l?(0,c.c)({values:s,supportsNullCount:u,percentileParams:f}):(0,c.a)({values:s,minValue:o,maxValue:r,useSampleStdDev:!i,supportsNullCount:u,percentileParams:f});return(0,c.b)(d,"esriFieldTypeDate"===l)}async function F(e){const{attribute:n,features:t}=e,i=await h({field:n.field,field2:n.field2,field3:n.field3,fieldDelimiter:n.fieldDelimiter,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},t),a=(0,c.d)(i);return(0,c.e)(a,n.domains,n.returnAllCodedValues,n.fieldDelimiter)}async function $(e){const{attribute:n,features:t}=e,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l}=n,s=await h({field:i,valueExpression:n.valueExpression,normalizationType:a,normalizationField:o,normalizationTotal:r,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},t),u=(0,c.f)(s,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return(0,c.r)(u,l)}async function M(e){const{attribute:n,features:t}=e,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l}=n,s=await h({field:i,valueExpression:n.valueExpression,normalizationType:a,normalizationField:o,normalizationTotal:r,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},t);return(0,c.h)(s,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}async function E(e){const{attribute:n,features:t}=e,{field:i,radius:r,fieldOffset:u,transform:c,spatialReference:d}=n,p=n.size??[0,0],h=function(e,n,t,i){const o=(0,s.d)(t)?(0,s.h)(t):null,r=o?Math.round((o.valid[1]-o.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new m.Z((0,a.u)(e.geometry));return(0,l.q)(n,t,t,t.hasZ,t.hasM),e.geometry=o?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,r??0,i[0]):t,e}))}(t??[],c,d,p),{count:y,min:v,max:I,mean:x,stdDev:w}=function(e,n=18,t,i,a,r){const l=new Float64Array(a*r);n=Math.round((0,o.a)(n));let s=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=0,d=0,m=0,p=0;const h=(0,f.c)(i,t);for(const{geometry:t,attributes:i}of e){const{x:e,y:o}=t,y=Math.max(0,e-n),v=Math.max(0,o-n),I=Math.min(r,o+n),x=Math.min(a,e+n),w=+h(i);for(let t=v;t<I;t++)for(let i=y;i<x;i++){const r=t*a+i,h=(0,f.e)(i-e,t-o,n),y=l[r];c=l[r]+=h*w;const v=c-y;d+=v,m+=v*v,c<s&&(s=c),c>u&&(u=c),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const y=(u-s)/2;return{mean:d/p,stdDev:Math.sqrt((m-d*d/p)/p),min:s,max:u,mid:y,count:p}}(h,r??void 0,u,i,p[0],p[1]);return{count:y,min:v,max:I,avg:x,stddev:w}}const V=Object.freeze(Object.defineProperty({__proto__:null,classBreaks:$,heatmapStatistics:E,histogram:M,summaryStatistics:T,uniqueValues:F},Symbol.toStringTag,{value:"Module"}))},68681:(e,n,t)=>{function i(){return[0,0,0,0]}function a(e,n,t,i){return[e,n,t,i]}function o(e,n){return new Float64Array(e,n,4)}t.d(n,{b:()=>o,c:()=>i,f:()=>a}),a(1,1,1,1)}}]);