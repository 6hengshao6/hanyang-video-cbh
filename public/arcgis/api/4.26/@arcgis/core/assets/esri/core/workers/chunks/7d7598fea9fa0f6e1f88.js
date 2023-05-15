"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2058],{82058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,l:()=>p,r:()=>U,s:()=>h});var s=r(31450),o=r(88762),n=r(60991),a=r(48578),i=r(76506),l=r(71252),c=r(50406),u=r(32101);r(71552),r(92143),r(40642);const d=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function h(e){const t=(0,u.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!d.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function p(e,t,r=!1,s){return new Promise(((o,n)=>{if((0,c.Hc)(s))return void n(m());let i=()=>{h(),n(new Error(`Unable to load ${t}`))},u=()=>{const t=e;h(),o(t)},d=()=>{if(!e)return;const t=e;h(),t.src="",n(m())};const h=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",i),e.removeEventListener("load",u)),i=null,u=null,e=null,(0,l.i)(s)&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};(0,l.i)(s)&&s.addEventListener("abort",d),(0,a.h)("esri-image-decode")?e.decode().then(u,i):(e.addEventListener("error",i),e.addEventListener("load",u))}))}function m(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function f(e,t){const i=(0,u.HK)(e),d=(0,u.jc)(e);d||i||(e=(0,u.Fv)(e));const p={url:e,requestOptions:{...(0,l.u)(t)}};let m=(0,u.oh)(e);if(m){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=C("request:interceptor",e,t)}if((s instanceof Error||s instanceof n.Z)&&(r=C("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}(m,p);if(null!=e)return{data:e,getHeader:k,httpStatus:200,requestOptions:p.requestOptions,url:p.url};m.after||m.error||(m=null)}if(e=p.url,"image"===(t=p.requestOptions).responseType){if((0,a.h)("host-webworker")||(0,a.h)("host-node"))throw C("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),p)}else if(i)throw C("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),p);if("head"===t.method){if(t.body)throw C("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),p);if(i||d)throw C("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),p)}if(await async function(){(0,a.h)("host-webworker")?w||(w=await r.e(9768).then(r.bind(r,89768))):f._abortableFetch||(f._abortableFetch=globalThis.fetch.bind(globalThis))}(),w)return w.execute(e,t);const b=new AbortController;(0,c.fu)(t,(()=>b.abort()));const q={controller:b,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:m,params:p,redoRequest:!1,useIdentity:y.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},T=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,a=r.body;let i=null,l=null;if(g&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(l=a),e.fetchOptions={cache:r.cacheBust&&!f._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:y.priority,redirect:"follow",signal:n},(i||l)&&(e.fetchOptions.body=i||l),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.Z.apiKey&&h(t)&&(r.query||(r.query={}),r.query.token=s.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!E(t)&&!(0,c.Hc)(n)){let s;"immediate"===r.authMode?(await S(),s=await o.id.getCredential(t,{signal:n}),e.credential=s):"no-prompt"===r.authMode?(await S(),s=await o.id.getCredential(t,{prompt:!1,signal:n}).catch((()=>{})),e.credential=s):o.id&&(s=o.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await L(e)}while(!await P(e,t,r))}catch(r){const s=C("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(s),s}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,u.kl)(n)){const e=(0,u.P$)(n,!0);e&&y.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&function(e){s.Z.request.crossOriginNoCorsDomains||(s.Z.request.crossOriginNoCorsDomains={});const t=s.Z.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,u.P$)(r)??""]=0:(t[(0,u.P$)("http://"+r)??""]=0,t[(0,u.P$)("https://"+r)??""]=0)}(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&o.id){const e=o.id.findServerInfo(a.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,a.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):k,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(q);return m?.after?.(T),T}let w;const y=s.Z.request,g="FormData"in globalThis,b=[499,498,403,401],q=["COM_0056","COM_0057","SB_0008"],T=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],k=()=>null,v=Symbol();function O(e){const t=(0,u.P$)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,u.kl)(t)}function C(e,t,r,s){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:k,ssl:!1};if(t instanceof n.Z)return t.details?(t.details=(0,i.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,n=t.message;n&&(o=n),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=v in t?t[v]:t}return(0,c.D_)(t)?(0,c.zE)():new n.Z(e,o,a)}async function S(){o.id||await Promise.all([r.e(6676),r.e(7803)]).then(r.bind(r,67803))}function E(e){return T.some((t=>t.test(e)))}async function L(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions??{},i=(0,u.jc)(t)||(0,u.HK)(t),l=r.responseType||"json",d=i?0:null!=r.timeout?r.timeout:y.timeout;let h=!1;if(!i){e.useSSL&&(t=(0,u.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,u.ZN)(t,"request.preventCache",Date.now()));let i={...r.query};e.credentialToken&&(i.token=e.credentialToken);let l=(0,u.B7)(i);(0,a.h)("esri-url-encodes-apostrophe")&&(l=l.replace(/'/g,"%27"));const c=t.length+1+l.length;let d;h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>y.maxUrlLength;const p=r.useProxy||!!(0,u.ed)(t);if(p){const e=(0,u.b7)(t);d=e.path,!h&&d.length+1+c>y.maxUrlLength&&(h=!0),e.query&&(i={...e.query,...i})}if("HEAD"===n.method&&(h||p)){if(h){if(c>y.maxUrlLength)throw C("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw C("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(p)throw C("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,u.fl)(t,i):(n.body=(0,u.B7)(i),n.headers||(n.headers={}),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,u.fl)(t,i),p&&(e.useProxy=!0,t=`${d}?${t}`),i.token&&g&&n.body instanceof FormData&&!(0,u.i)(t)&&n.body.set("token",i.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,u.D6)(t,(0,u.TI)()))if((0,u.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include",function(e){const t=s.Z.request.crossOriginNoCorsDomains;if(t){let r=(0,u.P$)(e);if(r)return r=r.toLowerCase(),!(0,u.D6)(r,(0,u.TI)())&&t[r]<Date.now()-36e5}return!1}(t)&&await async function(e){const t=s.Z.request.crossOriginNoCorsDomains,r=(0,u.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,u.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}(h?(0,u.fl)(t,i):t))}let p,m,w=0,b=!1;d>0&&(w=setTimeout((()=>{b=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)m=n,m.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!i&&!e.useProxy&&y.proxyUrl&&!O(t)){if(p=await f._abortableFetch(t,n),e.useProxy||function(e){const t=(0,u.P$)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)m=p;else if("HEAD"!==n.method)if(p.ok){switch(l){case"array-buffer":m=await p.arrayBuffer();break;case"blob":case"image":m=await p.blob();break;default:m=await p.text()}if(w&&(clearTimeout(w),w=0),"json"===l||"xml"===l||"document"===l)if(m)switch(l){case"json":m=JSON.parse(m);break;case"xml":m=x(m,"application/xml");break;case"document":m=x(m,"text/html")}else m=null;if(m){if("array-buffer"===l||"blob"===l){const e=p.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&m["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(m).json();e.error&&(m=e)}catch{}}"image"===l&&m instanceof Blob&&(m=await D(URL.createObjectURL(m),e,!0))}}else m=await p.text()}else m=await D(t,e)}catch(s){if("AbortError"===s.name){if(b)throw new Error("Timeout exceeded");throw(0,c.zE)("Request canceled")}if(!(!p&&s instanceof TypeError&&y.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||O(t))throw s;e.redoRequest=!0,(0,u.tD)({proxyUrl:y.proxyUrl,urlPrefix:(0,u.P$)(t)??""})}finally{w&&clearTimeout(w)}return[p,m]}function x(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function P(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let n,a;if(!t.ok)throw n=new Error(`Unable to load ${t.url} status: ${t.status}`),n[v]=r,n;r&&(r.error?n=r.error:"error"===r.status&&Array.isArray(r.messages)&&(n={...r},n[v]=r,n.details=r.messages));let i,l=null;n&&(a=Number(n.code),l=n.hasOwnProperty("subcode")?Number(n.subcode):null,i=n.messageCode,i=i&&i.toUpperCase());const c=s.authMode;if(403===a&&(4===l||n.message&&n.message.toLowerCase().includes("ssl")&&!n.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&b.includes(a)&&!E(e.params.url)&&(403!==a||i&&!q.includes(i)&&(null==l||2===l&&e.credentialToken))){await S();try{const t=await o.id.getCredential(e.params.url,{error:C("request:server",n,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;n=t}}if(n)throw n;return!0}function D(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=y.priority,o.src=e,p(o,e,r,s)}f._abortableFetch=null,f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const U=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}))}}]);