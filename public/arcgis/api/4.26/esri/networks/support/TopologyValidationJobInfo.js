// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/has ../../core/jsonMap ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../layers/mixins/EditBusLayer ../../rest/networks/support/ValidateNetworkTopologyResult".split(" "),function(h,e,n,k,p,q,g,y,z,r,t,u,c){k=p.strict()({Pending:"job-waiting",
InProgress:"job-executing",Completed:"job-succeeded"});c=function(b){function d(a){a=v.call(this,a);a.featureServiceUrl=null;a.statusUrl=null;a.status=null;a.submissionTime=null;a.lastUpdatedTime=null;a._timer=void 0;return a}h._inherits(d,b);var v=h._createSuper(d);b=d.prototype;b.destroy=function(){clearInterval(this._timer)};b.checkJobStatus=async function(a){({data:a}=await n(this.statusUrl,{...a,query:{f:"json"}}));this.read(a);(this.serviceEdits||this.exceededTransferLimit)&&this.featureServiceUrl&&
u.editEventBus.emit("edits",{serviceUrl:this.featureServiceUrl??"",layerId:null,event:{edits:null,addedFeatures:[],updatedFeatures:[],deletedFeatures:[],addedAttachments:[],updatedAttachments:[],deletedAttachments:[],exceededTransferLimit:!0}});return this};b.waitForJobCompletion=async function(a={}){const {interval:w=1E3,statusCallback:l}=a;return new Promise((x,m)=>{this._clearTimer();this._timer=setInterval(()=>{this._timer||m(q.createAbortError());this.checkJobStatus().then(f=>{({status:f}=f);
this.status=f;switch(f){case "job-succeeded":this._clearTimer();x(this);break;case "job-waiting":case "job-executing":l&&l(this)}},f=>{this._clearTimer();m(f)})},w)})};b._clearTimer=function(){clearInterval(this._timer);this._timer=void 0};return h._createClass(d)}(c);e.__decorate([g.property()],c.prototype,"featureServiceUrl",void 0);e.__decorate([g.property({type:String,json:{write:!0}})],c.prototype,"statusUrl",void 0);e.__decorate([r.enumeration(k)],c.prototype,"status",void 0);e.__decorate([g.property({type:Date,
json:{type:Number,write:{writer:(b,d)=>{d.submissionTime=b?b.getTime():null}}}})],c.prototype,"submissionTime",void 0);e.__decorate([g.property({type:Date,json:{type:Number,write:{writer:(b,d)=>{d.lastUpdatedTime=b?b.getTime():null}}}})],c.prototype,"lastUpdatedTime",void 0);return c=e.__decorate([t.subclass("esri.networks.support.TopologyValidationJobInfo")],c)});