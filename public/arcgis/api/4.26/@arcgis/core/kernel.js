/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as t}from"./chunks/typedArrayUtil.js";import{getInterceptor as e,addQueryParameter as r}from"./core/urlUtils.js";import"./chunks/maybe.js";import"./config.js";import"./chunks/object.js";import"./core/lang.js";import"./core/Error.js";import"./chunks/Logger.js";import"./chunks/string.js";const s="20230313",a="b9187c09c09f8e8c050251651ad8855e6326b8bb",n="4.27",o={async request(t,r){const{default:s}=await import("./request.js").then((t=>t.r)),a=t.options,n=a.responseType;a.signal=r?.signal,a.responseType="native"===n||"native-request-init"===n?"native-request-init":n&&["blob","json","text"].includes(n)&&e(t.url)?.after?n:"array-buffer";const o=await s(t.url,a),i={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete i.data.signal,i;case"blob":i.data=await i.data.arrayBuffer();break;case"json":i.data=(new TextEncoder).encode(JSON.stringify(i.data)).buffer;break;case"text":i.data=(new TextEncoder).encode(i.data).buffer}return{result:i,transferList:[i.data]}}};let i;function c(t){i=t}function u(t){const e=i&&i.findCredential(t);return e&&e.token?r(t,"token",e.token):t}t("host-webworker")||(console.warn(`Using ArcGIS Maps SDK for JavaScript ${n}-next [Date: ${s}, Revision: ${a.slice(0,8)}]`),console.warn("Only use ES modules from ArcGIS CDN for testing: https://arcg.is/1ii1Gb0"));export{u as addTokenParameter,s as buildDate,i as id,a as revision,c as setId,n as version,o as workerMessages};
