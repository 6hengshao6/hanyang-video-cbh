/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{revision as e,version as s,buildDate as t}from"../../kernel.js";import o from"../Error.js";import{isAborted as r,createAbortError as n,onAbort as i,isPromiseLike as a,isAbortError as c,o as l}from"../promiseUtils.js";import{r as h,i as p}from"../../chunks/maybe.js";import{h as u}from"../../chunks/typedArrayUtil.js";import"../urlUtils.js";import"../../config.js";import"../../chunks/object.js";import"../lang.js";import"../../chunks/Logger.js";import"../../chunks/string.js";const _={statsWorker:()=>import("../../chunks/statsWorker.js").then((e=>e.k)),geometryEngineWorker:()=>import("../../chunks/geometryEngineWorker.js"),CSVSourceWorker:()=>import("../../chunks/CSVSourceWorker.js"),EdgeProcessingWorker:()=>import("../../chunks/EdgeProcessingWorker.js"),ElevationSamplerWorker:()=>import("../../chunks/ElevationSamplerWorker.js"),FeatureServiceSnappingSourceWorker:()=>import("../../chunks/FeatureServiceSnappingSourceWorker.js"),GeoJSONSourceWorker:()=>import("../../chunks/GeoJSONSourceWorker.js"),LercWorker:()=>import("../../chunks/LercWorker.js"),MemorySourceWorker:()=>import("../../chunks/MemorySourceWorker.js"),PBFDecoderWorker:()=>import("../../chunks/PBFDecoderWorker.js"),Pipeline:()=>import("../../chunks/Pipeline.js"),PointCloudWorker:()=>import("../../chunks/PointCloudWorker.js"),RasterWorker:()=>import("../../chunks/RasterWorker.js"),SceneLayerSnappingSourceWorker:()=>import("../../chunks/SceneLayerSnappingSourceWorker.js"),SceneLayerWorker:()=>import("../../chunks/SceneLayerWorker.js").then((e=>e.S)),WFSSourceWorker:()=>import("../../chunks/WFSSourceWorker.js"),WorkerTileHandler:()=>import("../../chunks/WorkerTileHandler.js")};var d;!function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.OPEN=1]="OPEN",e[e.OPENED=2]="OPENED",e[e.RESPONSE=3]="RESPONSE",e[e.INVOKE=4]="INVOKE",e[e.ABORT=5]="ABORT",e[e.CLOSE=6]="CLOSE",e[e.OPEN_PORT=7]="OPEN_PORT",e[e.ON=8]="ON"}(d||(d={}));let k=0;function g(){return k++}function m(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function f(e,s,t,o){if(s.type===d.OPEN_PORT)return void e.postMessage(s,[s.port]);if(s.type!==d.INVOKE&&s.type!==d.RESPONSE)return void e.postMessage(s);let r;var n;if((n=t)&&"object"==typeof n&&("result"in n||"transferList"in n)?(r=S(t.transferList),s.data=t.result):(r=S(o),s.data=t),r){if(u("ff"))for(const t of r)if("byteLength"in t&&t.byteLength>267386880){const t="Worker call with large ArrayBuffer would crash Firefox";switch(s.type){case d.INVOKE:throw t;case d.RESPONSE:return void f(e,{type:d.RESPONSE,jobId:s.jobId,error:m(t)})}}e.postMessage(s,r)}else e.postMessage(s)}function b(e){if(!e)return null;const s=e.data;return s?"string"==typeof s?JSON.parse(s):s:null}function S(e){if(!e||!e.length)return null;if(u("esri-workers-arraybuffer-transfer"))return e;const s=e.filter((e=>{return!((s=e)instanceof ArrayBuffer||"ArrayBuffer"===s?.constructor?.name);var s}));return s.length?s:null}const{CLOSE:y,ABORT:j,INVOKE:O,RESPONSE:v,OPEN_PORT:E,ON:W}=d;class M{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===d.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class N{static connect(e){const s=new MessageChannel;let t;t="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const o=new N(s.port1,{channel:s,client:t},(()=>null));return"object"==typeof t&&"remoteClient"in t&&(t.remoteClient=o),N.clients.set(o,t),s.port2}static loadWorker(e){const s=_[e];return s?s():Promise.resolve(null)}constructor(e,s,t){this._port=e,this._getNextJob=t,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new M((e=>this._onInvokeMessage(e))),this._client=s.client,this._onMessage=this._onMessage.bind(this),this._channel=s.channel,this._schedule=s.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:y}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,s,t){const a=t&&t.signal,c=t&&t.transferList;if(!this._port)return Promise.reject(new o("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:s}));const l=g();return new Promise(((t,o)=>{if(r(a))return this._processWork(),void o(n());const p=i(a,(()=>{const e=this._outJobs.get(l);e&&(this._outJobs.delete(l),this._processWork(),h(e.abortHandle),this._post({type:j,jobId:l}),o(n()))})),u={resolve:t,reject:o,abortHandle:p,debugInfo:e};this._outJobs.set(l,u),this._post({type:O,jobId:l,methodName:e,abortable:null!=a},s,c)}))}on(e,s){const t=new MessageChannel;function o(e){s(e.data)}return this._port.postMessage({type:d.ON,eventType:e,port:t.port2},[t.port2]),t.port1.addEventListener("message",o),t.port1.start(),{remove(){t.port1.postMessage({type:d.CLOSE}),t.port1.close(),t.port1.removeEventListener("message",o)}}}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:E,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=2)return;const e=this._getNextJob();if(!e)return;const{methodName:s,data:t,invokeOptions:o,deferred:r}=e;this.invoke(s,t,o).then((e=>r.resolve(e))).catch((e=>r.reject(e)))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{h(e.abortHandle),e.reject(n(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){p(this._schedule)?this._schedule((()=>this._processMessage(e))):this._processMessage(e)}_processMessage(e){const s=b(e);if(s)switch(s.type){case v:this._onResponseMessage(s);break;case O:this._invokeQueue.push(s);break;case j:this._onAbortMessage(s);break;case y:this._onCloseMessage();break;case E:this._onOpenPortMessage(s);break;case W:this._onOnMessage(s)}}_onAbortMessage(e){const s=this._inJobs,t=e.jobId,o=s.get(t);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),s.delete(t))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&N.clients.get(this)===e&&e.destroy(),N.clients.delete(this),e&&e.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:s,jobId:t,data:o,abortable:r}=e,n=r?new AbortController:null,i=this._inJobs;let l,h=this._client,p=h[s];try{if(!p&&s&&s.includes(".")){const e=s.split(".");for(let s=0;s<e.length-1;s++)h=h[e[s]],p=h[e[s+1]]}if("function"!=typeof p)throw new TypeError(`${s} is not a function`);l=p.call(h,o,{client:this,signal:n?n.signal:null})}catch(e){return void this._post({type:v,jobId:t,error:m(e)})}a(l)?(i.set(t,{controller:n,promise:l}),l.then((e=>{i.has(t)&&(i.delete(t),this._post({type:v,jobId:t},e))}),(e=>{i.has(t)&&(i.delete(t),c(e)||this._post({type:v,jobId:t,error:m(e||{message:`Error encountered at method ${s}`})}))}))):this._post({type:v,jobId:t},l)}_onOpenPortMessage(e){new N(e.port,{client:this._client},(()=>null))}_onOnMessage(e){const{port:s}=e,t=this._client.on(e.eventType,(e=>{s.postMessage(e)})),o=l(e.port,"message",(e=>{const r=b(e);r?.type===d.CLOSE&&(o.remove(),t.remove(),s.close())}))}_onResponseMessage(e){const{jobId:s,error:t,data:r}=e,n=this._outJobs;if(!n.has(s))return;const i=n.get(s);n.delete(s),this._processWork(),h(i.abortHandle),t?i.reject(o.fromJSON(JSON.parse(t))):i.resolve(r)}_post(e,s,t){return f(this._port,e,s,t)}}N.kernelInfo={revision:e,version:s,buildDate:t},N.clients=new Map;export{d as M,N as default,g as n,f as p,b as r,m as t};
