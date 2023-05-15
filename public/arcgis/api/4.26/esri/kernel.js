// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","exports","./core/has","./core/urlUtils","./support/revision"],function(h,c,k,g,e){c.id=void 0;k("host-webworker")||console.warn(`Using ArcGIS Maps SDK for JavaScript ${"4.27"}-next [Date: ${e.buildDate}, Revision: ${e.commitHash.slice(0,8)}]`);c.buildDate=e.buildDate;c.revision=e.commitHash;c.addTokenParameter=function(b){const a=c.id&&c.id.findCredential(b);return a&&a.token?g.addQueryParameter(b,"token",a.token):b};c.setId=function(b){c.id=b};c.version="4.27";c.workerMessages=
{async request(b,a){const {default:l}=await new Promise((m,n)=>h(["./request"],p=>m(Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}))),n)),f=b.options,d=f.responseType;f.signal=a?.signal;f.responseType="native"===d||"native-request-init"===d?"native-request-init":d&&["blob","json","text"].includes(d)&&g.getInterceptor(b.url)?.after?d:"array-buffer";b=await l(b.url,f);a={data:b.data,httpStatus:b.httpStatus,ssl:b.ssl};switch(b.requestOptions?.responseType){case "native-request-init":return delete a.data.signal,
a;case "blob":a.data=await a.data.arrayBuffer();break;case "json":a.data=(new TextEncoder).encode(JSON.stringify(a.data)).buffer;break;case "text":a.data=(new TextEncoder).encode(a.data).buffer}return{result:a,transferList:[a.data]}}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});