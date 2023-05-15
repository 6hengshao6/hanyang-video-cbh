// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","../../chunks/_rollupPluginBabelHelpers","../nextTick","./RemoteClient","./utils"],function(l,g,h,k,f){function m(b){if(b&&b.__esModule)return b;const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(b)for(const a in b)if("default"!==a){const d=Object.getOwnPropertyDescriptor(b,a);Object.defineProperty(c,a,d.get?d:{enumerable:!0,get:()=>b[a]})}c.default=b;return Object.freeze(c)}let n=g._createClass(function(){const b=document.createDocumentFragment();["addEventListener",
"dispatchEvent","removeEventListener"].forEach(c=>{this[c]=(...a)=>b[c](...a)})});return function(){function b(){this._dispatcher=new n;this._workerPostMessage({type:f.MessageType.HANDSHAKE})}var c=b.prototype;c.terminate=function(){};c.postMessage=function(a){h.nextTick(()=>{this._workerMessageHandler(new MessageEvent("message",{data:a}))})};c.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};c.addEventListener=function(a,d,e){this._dispatcher.addEventListener(a,d,e)};c.removeEventListener=
function(a,d,e){this._dispatcher.removeEventListener(a,d,e)};c._workerPostMessage=function(a){h.nextTick(()=>{this.dispatchEvent(new MessageEvent("message",{data:a}))})};c._workerMessageHandler=async function(a){if((a=f.receiveMessage(a))&&a.type===f.MessageType.OPEN){const {modulePath:d,jobId:e}=a;(a=await k.loadWorker(d))||(a=await new Promise((p,q)=>l([d],r=>p(m(r)),q)));a=k.connect(a);this._workerPostMessage({type:f.MessageType.OPENED,jobId:e,data:a})}};g._createClass(b,[{key:"onmessage",get:function(){return this._onmessageHandler},
set:function(a){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)}},{key:"onmessageerror",get:function(){return this._onmessageerrorHandler},set:function(a){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler);(this._onmessageerrorHandler=a)&&this.addEventListener("messageerror",a)}},{key:"onerror",get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&
this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)}}]);return b}()});