// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/asyncUtils ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./InteractiveToolViewModel".split(" "),function(e,p,g,r,u,c,q,k,h,y,z,A,v,w){function t(d){return c.isSome(d)&&d.state>=l.RUNNING?(d.abort(),null):
d}var l;(function(d){d[d.PENDING=0]="PENDING";d[d.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY";d[d.RUNNING=2]="RUNNING"})(l||(l={}));e.InteractiveAnalysisViewModel=function(d){function m(a={}){var b=x.call(this,a);b.analysisView=null;b._reconnectViewTask=null;b._analysisBaseHandles=new u;b._parentChangeFromReconnect=!1;b._startUserOperation=null;a=a?.analysis;c.isSome(a)?b.analysis=a:(b._set("analysis",b.constructAnalysis()),b._set("isAnalysisOwner",!0));return b}p._inherits(m,d);var x=p._createSuper(m);
d=m.prototype;d.normalizeCtorArgs=function(a){const {analysis:b,...f}=a;return f};d.initialize=function(){this._analysisBaseHandles.add([k.watch(()=>c.applySome(this.analysis,({parent:a})=>a),a=>{this._parentChangeFromReconnect||a===this.view||this._set("isAnalysisOwner",!1);a=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1;a&&this._scheduleViewReconnect()},k.sync),k.watch(()=>({view:this.view,ready:c.isSome(this.view)&&this.view.ready,supported:this.supported}),({view:a},b)=>
{b=b?.view;a!==b&&(this._startUserOperation=c.abortMaybe(this._startUserOperation),this._disconnectFromView(b));this._scheduleViewReconnect()},k.syncAndInitial),k.watch(()=>this.analysis.isEditable,(a,b)=>{c.isNone(this.analysisView)||(a&&!b&&c.isNone(this.tool)?this.createTool():!a&&b&&c.isSome(this.tool)&&!this.tool.active&&this.removeTool())})])};d.destroy=function(){this._analysisBaseHandles=c.destroyMaybe(this._analysisBaseHandles);this._reconnectViewTask=c.abortMaybe(this._reconnectViewTask);
this._startUserOperation=c.abortMaybe(this._startUserOperation);c.isSome(this.analysisView)&&(this.analysisView.visible=void 0);this._disconnectFromView(this.view);c.isSome(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))};d.start=async function(){this.clear();const a={task:null,abort:null,state:l.PENDING},b=r.createTask(async f=>{a.state=l.WAIT_FOR_VIEW_READY;await k.whenOnce(()=>this.ready,f);a.state=l.RUNNING;this.createTool({interactive:!0})});a.task=
b;a.abort=()=>b.abort();this._startUserOperation=a;return b.promise};d.clear=function(){this._startUserOperation=c.abortMaybe(this._startUserOperation);this.removeTool();this.analysis.clear()};d.onConnectToAnalysisView=function(a){};d.onDisconnectFromAnalysisView=function(){};d._scheduleViewReconnect=function(){this._reconnectViewTask=c.abortMaybe(this._reconnectViewTask);const a=r.createTask(async b=>{try{await this._reconnectView(b)}catch(f){q.throwIfAborted(b);if(q.isAbortError(f))throw f;this.logger.warn("Failed to use analysis in view model",
f)}finally{a===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=a};d._reconnectView=async function(a){const {view:b}=this,f=c.isSome(b)&&b.ready&&this.supported,n=this.analysis;this._startUserOperation=t(this._startUserOperation);this._disconnectFromView(b);if(f&&!c.isNone(b)&&!c.isNone(n)){if(this.isAnalysisOwner){if(c.isSome(n.parent)){this.logError("expected owned analysis to have null parent when connecting to view");return}this._parentChangeFromReconnect=!0;
b.analyses.add(n)}this.analysisView=await b.whenAnalysisView(n);q.isAborted(a)?this._startUserOperation=t(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}};d._disconnectFromView=function(a){this.removeTool();c.isSome(a)&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,a.analyses.remove(this.analysis),this.analysis.clear());this.analysisView=null;this.onDisconnectFromAnalysisView()};d._setExternalAnalysis=
function(a){c.isSome(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=!0);this.analysisView=null;this._set("isAnalysisOwner",!1);this._set("analysis",a);this._parentChangeFromReconnect=!1};p._createClass(m,[{key:"analysis",set:function(a){a!==this._get("analysis")&&(this._startUserOperation=c.abortMaybe(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(a),this._scheduleViewReconnect())}},{key:"ready",get:function(){return c.isSome(this.analysisView)&&
!this.connectingToView}},{key:"connectingToView",get:function(){return c.isSome(this._reconnectViewTask)}},{key:"isAnalysisOwner",get:function(){return this._get("isAnalysisOwner")}},{key:"visible",set:function(a){this._set("visible",a);c.isSome(this.analysisView)&&(this.analysisView.visible=a)}},{key:"testInfo",get:function(){return{analysisView:this.analysisView}}}]);return m}(w.InteractiveToolViewModel);g.__decorate([h.property({nonNullable:!0})],e.InteractiveAnalysisViewModel.prototype,"analysis",
null);g.__decorate([h.property()],e.InteractiveAnalysisViewModel.prototype,"analysisView",void 0);g.__decorate([h.property()],e.InteractiveAnalysisViewModel.prototype,"ready",null);g.__decorate([h.property()],e.InteractiveAnalysisViewModel.prototype,"connectingToView",null);g.__decorate([h.property({readOnly:!0})],e.InteractiveAnalysisViewModel.prototype,"isAnalysisOwner",null);g.__decorate([h.property({type:Boolean,value:!0})],e.InteractiveAnalysisViewModel.prototype,"visible",null);g.__decorate([h.property()],
e.InteractiveAnalysisViewModel.prototype,"_reconnectViewTask",void 0);e.InteractiveAnalysisViewModel=g.__decorate([v.subclass("esri.widgets.support.InteractiveAnalysisViewModel")],e.InteractiveAnalysisViewModel);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});