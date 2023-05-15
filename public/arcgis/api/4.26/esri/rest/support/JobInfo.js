// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/has ../../core/jsonMap ../../core/JSONSupport ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../utils ../geoprocessor/GPOptions ../geoprocessor/utils ./GPMessage".split(" "),function(x,u,k,p,w,y,e,v,m,F,G,z,A,n,B,q,C){var r;
w=y.strict()({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"},{ignoreUnknown:!1});e=r=function(f){function t(a){a=D.call(this,a);a.jobId=null;a.jobStatus=null;a.messages=null;a.progress=null;a.requestOptions=null;
a.sourceUrl=null;a._timer=void 0;return a}u._inherits(t,f);var D=u._createSuper(t);f=t.prototype;f.cancelJob=async function(a){const {jobId:b,sourceUrl:d}=this;var {path:c}=n.parseUrl(d);a={...this.requestOptions,...a,query:{f:"json"}};this._clearTimer();({data:c}=await p(`${c}/jobs/${b}/cancel`,a));const {messages:g,jobStatus:l,progress:h}=r.fromJSON(c);this.set({messages:g,jobStatus:l,progress:h});return this};f.destroy=function(){clearInterval(this._timer)};f.checkJobStatus=async function(a){const {path:b}=
n.parseUrl(this.sourceUrl);({data:a}=await p(`${b}/jobs/${this.jobId}`,{...this.requestOptions,...a,query:{f:"json"}}));const {messages:d,jobStatus:c,progress:g}=r.fromJSON(a);this.set({messages:d,jobStatus:c,progress:g});return this};f.fetchResultData=async function(a,b,d){b=B.from(b||{});const {returnFeatureCollection:c,returnM:g,returnZ:l,outSpatialReference:h}=b;({path:b}=n.parseUrl(this.sourceUrl));const E=q.gpEncode({returnFeatureCollection:c,returnM:g,returnZ:l,outSR:h,returnType:"data",f:"json"},
null);({data:a}=await p(`${b}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...d,query:E}));return q.decode(a)};f.fetchResultImage=async function(a,b,d){const {path:c}=n.parseUrl(this.sourceUrl);b={...b.toJSON(),f:"json"};b=q.gpEncode(b);({data:a}=await p(`${c}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...d,query:b}));return q.decode(a)};f.fetchResultMapImageLayer=async function(){var {path:a}=n.parseUrl(this.sourceUrl);const b=a.indexOf("/GPServer/");a=`${a.substring(0,
b)}/MapServer/jobs/${this.jobId}`;return new (await new Promise((d,c)=>x(["../../layers/MapImageLayer"],g=>d(Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}))),c))).default({url:a})};f.waitForJobCompletion=async function(a={}){const {interval:b=1E3,signal:d,statusCallback:c}=a;return new Promise((g,l)=>{v.onAbort(d,()=>{this._clearTimer();l(v.createAbortError())});this._clearTimer();this._timer=setInterval(()=>{this._timer||l(v.createAbortError());
this.checkJobStatus(this.requestOptions).then(h=>{({jobStatus:h}=h);this.jobStatus=h;switch(h){case "job-succeeded":this._clearTimer();g(this);break;case "job-submitted":case "job-executing":case "job-waiting":case "job-new":c&&c(this);break;case "job-cancelled":case "job-cancelling":case "job-deleted":case "job-deleting":case "job-timed-out":case "job-failed":this._clearTimer(),l(this)}})},b)})};f._clearTimer=function(){clearInterval(this._timer);this._timer=void 0};return u._createClass(t)}(e.JSONSupport);
k.__decorate([m.property()],e.prototype,"jobId",void 0);k.__decorate([z.enumeration(w,{ignoreUnknown:!1})],e.prototype,"jobStatus",void 0);k.__decorate([m.property({type:[C]})],e.prototype,"messages",void 0);k.__decorate([m.property()],e.prototype,"progress",void 0);k.__decorate([m.property()],e.prototype,"requestOptions",void 0);k.__decorate([m.property({json:{write:!0}})],e.prototype,"sourceUrl",void 0);return e=r=k.__decorate([A.subclass("esri.rest.support.JobInfo")],e)});