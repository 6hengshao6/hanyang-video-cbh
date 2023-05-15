// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../kernel ../Error ../events ../maybe ../promiseUtils ./registry ./utils ../../support/revision".split(" "),function(w,D,x,E,t,n,F,l,y){const {CLOSE:z,ABORT:A,INVOKE:B,RESPONSE:r,OPEN_PORT:C,ON:G}=l.MessageType;let H=function(){function k(a){this._timer=null;this._cancelledJobIds=new Set;this._invokeMessages=[];this._invoke=a;this._timer=null;this._process=this._process.bind(this)}var e=k.prototype;e.push=function(a){a.type===l.MessageType.ABORT?this._cancelledJobIds.add(a.jobId):
(this._invokeMessages.push(a),null===this._timer&&(this._timer=setTimeout(this._process,0)))};e.clear=function(){this._invokeMessages.length=0;this._cancelledJobIds.clear();this._timer=null};e._process=function(){this._timer=null;for(const a of this._invokeMessages)this._cancelledJobIds.has(a.jobId)||this._invoke(a);this._cancelledJobIds.clear();this._invokeMessages.length=0};return w._createClass(k)}(),v=function(){function k(a,c,b){this._port=a;this._getNextJob=b;this._outJobs=new Map;this._inJobs=
new Map;this._invokeQueue=new H(d=>this._onInvokeMessage(d));this._client=c.client;this._onMessage=this._onMessage.bind(this);this._channel=c.channel;this._schedule=c.schedule;this._port.addEventListener("message",this._onMessage);this._port.start()}k.connect=function(a){const c=new MessageChannel;a="function"===typeof a?new a:"default"in a&&"function"===typeof a.default?new a.default:a;const b=new k(c.port1,{channel:c,client:a},()=>null);"object"===typeof a&&"remoteClient"in a&&(a.remoteClient=b);
k.clients.set(b,a);return c.port2};k.loadWorker=function(a){return(a=F.registry[a])?a():Promise.resolve(null)};var e=k.prototype;e.close=function(){this._post({type:z});this._close()};e.isBusy=function(){return 0<this._outJobs.size};e.invoke=function(a,c,b){const d=b&&b.signal,f=b&&b.transferList;if(!this._port)return Promise.reject(new x("worker:port-closed",`Cannot call invoke('${a}'), port is closed`,{methodName:a,data:c}));const g=l.newJobId();return new Promise((p,m)=>{if(n.isAborted(d))this._processWork(),
m(n.createAbortError());else{var q=n.onAbort(d,()=>{const h=this._outJobs.get(g);h&&(this._outJobs.delete(g),this._processWork(),t.removeMaybe(h.abortHandle),this._post({type:A,jobId:g}),m(n.createAbortError()))});this._outJobs.set(g,{resolve:p,reject:m,abortHandle:q,debugInfo:a});this._post({type:B,jobId:g,methodName:a,abortable:null!=d},c,f)}})};e.on=function(a,c){function b(f){c(f.data)}const d=new MessageChannel;this._port.postMessage({type:l.MessageType.ON,eventType:a,port:d.port2},[d.port2]);
d.port1.addEventListener("message",b);d.port1.start();return{remove(){d.port1.postMessage({type:l.MessageType.CLOSE});d.port1.close();d.port1.removeEventListener("message",b)}}};e.jobAdded=function(){this._processWork()};e.openPort=function(){const a=new MessageChannel;this._post({type:C,port:a.port2});return a.port1};e._processWork=function(){if(!(2<=this._outJobs.size)){var a=this._getNextJob();if(a){var {methodName:c,data:b,invokeOptions:d,deferred:f}=a;this.invoke(c,b,d).then(g=>f.resolve(g)).catch(g=>
f.reject(g))}}};e._close=function(){this._channel&&(this._channel=void 0);this._port.removeEventListener("message",this._onMessage);this._port.close();this._outJobs.forEach(a=>{t.removeMaybe(a.abortHandle);a.reject(n.createAbortError(`Worker closing, aborting job calling '${a.debugInfo}'`))});this._inJobs.clear();this._outJobs.clear();this._invokeQueue.clear();this._schedule=this._client=this._port=null};e._onMessage=function(a){t.isSome(this._schedule)?this._schedule(()=>this._processMessage(a)):
this._processMessage(a)};e._processMessage=function(a){if(a=l.receiveMessage(a))switch(a.type){case r:this._onResponseMessage(a);break;case B:this._invokeQueue.push(a);break;case A:this._onAbortMessage(a);break;case z:this._onCloseMessage();break;case C:this._onOpenPortMessage(a);break;case G:this._onOnMessage(a)}};e._onAbortMessage=function(a){const c=this._inJobs,b=a.jobId,d=c.get(b);this._invokeQueue.push(a);d&&(d.controller&&d.controller.abort(),c.delete(b))};e._onCloseMessage=function(){const a=
this._client;this._close();a&&"destroy"in a&&k.clients.get(this)===a&&a.destroy();k.clients.delete(this);a&&a.remoteClient&&(a.remoteClient=null)};e._onInvokeMessage=function(a){const {methodName:c,jobId:b,data:d,abortable:f}=a;a=f?new AbortController:null;const g=this._inJobs;let p=this._client,m=p[c],q;try{if(!m&&c&&c.includes(".")){const h=c.split(".");for(let u=0;u<h.length-1;u++)p=p[h[u]],m=p[h[u+1]]}if("function"!==typeof m)throw new TypeError(`${c} is not a function`);q=m.call(p,d,{client:this,
signal:a?a.signal:null})}catch(h){this._post({type:r,jobId:b,error:l.toInvokeError(h)});return}n.isPromiseLike(q)?(g.set(b,{controller:a,promise:q}),q.then(h=>{g.has(b)&&(g.delete(b),this._post({type:r,jobId:b},h))},h=>{g.has(b)&&(g.delete(b),n.isAbortError(h)||this._post({type:r,jobId:b,error:l.toInvokeError(h||{message:`Error encountered at method ${c}`})}))})):this._post({type:r,jobId:b},q)};e._onOpenPortMessage=function(a){new k(a.port,{client:this._client},()=>null)};e._onOnMessage=function(a){const {port:c}=
a,b=this._client.on(a.eventType,f=>{c.postMessage(f)}),d=E.on(a.port,"message",f=>{l.receiveMessage(f)?.type===l.MessageType.CLOSE&&(d.remove(),b.remove(),c.close())})};e._onResponseMessage=function(a){const {jobId:c,error:b,data:d}=a;a=this._outJobs;if(a.has(c)){var f=a.get(c);a.delete(c);this._processWork();t.removeMaybe(f.abortHandle);b?f.reject(x.fromJSON(JSON.parse(b))):f.resolve(d)}};e._post=function(a,c,b){return l.postMessage(this._port,a,c,b)};return w._createClass(k)}();v.kernelInfo={revision:y.commitHash,
version:D.version,buildDate:y.buildDate};v.clients=new Map;return v});