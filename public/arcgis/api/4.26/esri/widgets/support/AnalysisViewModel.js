// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/asyncUtils ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,p,f,u,r,v,b,q,l,g,y,z,A,w){function t(d){return b.isSome(d)&&d.state>=m.RUNNING?(d.abort(),null):d}var m;
(function(d){d[d.PENDING=0]="PENDING";d[d.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY";d[d.RUNNING=2]="RUNNING"})(m||(m={}));e.AnalysisViewModel=function(d){function n(a={}){var c=x.call(this,a);c.view=null;c.analysisView=null;c._reconnectViewTask=null;c._forceInteractiveHandle=null;c._parentChangeFromReconnect=!1;c._startUserOperation=null;c.logger=v.getLogger(c.declaredClass);const h=a?.analysis;b.isSome(h)?c.analysis=h:(c._set("analysis",c.constructAnalysis()),c._set("isAnalysisOwner",!0));a&&
null!=a.visible&&(c.visible=a.visible);return c}p._inherits(n,d);var x=p._createSuper(n);d=n.prototype;d.normalizeCtorArgs=function(a){const {analysis:c,...h}=a;return h};d.initialize=function(){this.addHandles([l.watch(()=>({readyAndNotSupported:b.isSome(this.view)&&this.view.ready&&!this.supported}),({readyAndNotSupported:a})=>{a&&this.logger.errorOnce(this.unsupportedErrorMessage)},l.syncAndInitial),l.watch(()=>b.applySome(this.analysis,({parent:a})=>a),a=>{this._parentChangeFromReconnect||a===
this.view||this._set("isAnalysisOwner",!1);a=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1;a&&this._scheduleViewReconnect()},l.sync),l.watch(()=>({view:this.view,ready:b.isSome(this.view)&&this.view.ready,supported:this.supported}),({view:a},c)=>{c=c?.view;a!==c&&(this._startUserOperation=b.abortMaybe(this._startUserOperation),this._disconnectFromView(c));this._scheduleViewReconnect()},l.syncAndInitial)])};d.destroy=function(){this._reconnectViewTask=b.abortMaybe(this._reconnectViewTask);
this._startUserOperation=b.abortMaybe(this._startUserOperation);b.isSome(this.analysisView)&&(this.analysisView.visible=void 0);this._disconnectFromView(this.view);this._set("view",null);b.isSome(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))};d.clear=function(){this._startUserOperation=b.abortMaybe(this._startUserOperation);this._resetInteractiveCreationState();b.isSome(this.tool)&&b.isSome(this.view)&&this.view.activeTool===this.tool&&(this.view.activeTool=
null)};d.start=async function(){this.clear();const a={task:null,abort:null,state:m.PENDING},c=r.createTask(async h=>{a.state=m.WAIT_FOR_VIEW_READY;await l.whenOnce(()=>this.ready,h);a.state=m.RUNNING;if(!b.isNone(this.analysisView)&&!b.isNone(this.view)){var k=this.analysisView.tool;b.isNone(k)||(this.view.activeTool=k,l.when(()=>k.created,()=>{k.active&&b.isSome(this.view)&&(this.view.activeTool=null)},{initial:!0,once:!0}))}});a.task=c;a.abort=()=>c.abort();this._startUserOperation=a;return c.promise};
d.onConnectToAnalysisView=function(a){};d.onDisconnectFromAnalysisView=function(){};d._scheduleViewReconnect=function(){this._reconnectViewTask=b.abortMaybe(this._reconnectViewTask);const a=r.createTask(async c=>{try{await this._reconnectView(c)}catch(h){q.throwIfAborted(c);if(q.isAbortError(h))throw h;this.logger.warn("Failed to use analysis in view model",h)}finally{a===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=a};d._reconnectView=async function(a){const {view:c}=
this,h=b.isSome(c)&&c.ready&&this.supported,k=this.analysis;this._startUserOperation=t(this._startUserOperation);this._disconnectFromView(c);if(h&&!b.isNone(c)&&!b.isNone(k)){if(this.isAnalysisOwner){if(b.isSome(k.parent)){this.logger.errorOnce("expected owned analysis to have null parent when connecting to view");return}this._parentChangeFromReconnect=!0;c.analyses.add(k)}this.analysisView=await c.whenAnalysisView(k);q.isAborted(a)?this._startUserOperation=t(this._startUserOperation):(this.analysisView.visible=
this.visible,this._forceInteractiveHandle=this.analysisView.forceInteractiveForViewModel(),this.addHandles(this._forceInteractiveHandle),this.onConnectToAnalysisView(this.analysisView))}};d._disconnectFromView=function(a){b.isSome(a)&&this.isAnalysisOwner&&a.analyses.includes(this.analysis)&&(this._parentChangeFromReconnect=!0,this.analysis.clear(),a.analyses.remove(this.analysis));this.onDisconnectFromAnalysisView();this._forceInteractiveHandle=b.removeMaybe(this._forceInteractiveHandle);this.analysisView=
null};d._setExternalAnalysis=function(a){b.isSome(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=void 0,this._forceInteractiveHandle=b.removeMaybe(this._forceInteractiveHandle));this.analysisView=null;this._set("isAnalysisOwner",!1);this._set("analysis",a);this._parentChangeFromReconnect=!1};d._resetInteractiveCreationState=function(){this.analysis.clear();b.isSome(this.tool)&&this.tool.resetCreated()};p._createClass(n,[{key:"supported",get:function(){return b.isNone(this.view)||
this.view.type===this.supportedViewType}},{key:"visible",set:function(a){this._set("visible",a);b.isSome(this.analysisView)&&(this.analysisView.visible=a)}},{key:"active",get:function(){return b.isSome(this.tool)&&this.tool.active}},{key:"disabled",get:function(){return b.isNone(this.view)||!this.view.ready||!this.supported}},{key:"analysis",set:function(a){a!==this._get("analysis")&&(this._startUserOperation=b.abortMaybe(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(a),
this._scheduleViewReconnect())}},{key:"ready",get:function(){return b.isSome(this.analysisView)&&!this.connectingToView}},{key:"connectingToView",get:function(){return b.isSome(this._reconnectViewTask)}},{key:"isAnalysisOwner",get:function(){return this._get("isAnalysisOwner")}},{key:"tool",get:function(){return b.isSome(this.analysisView)?this.analysisView.tool:null}},{key:"testInfo",get:function(){return{analysisView:this.analysisView}}}]);return n}(u);f.__decorate([g.property()],e.AnalysisViewModel.prototype,
"supported",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"view",void 0);f.__decorate([g.property({type:Boolean,value:!0})],e.AnalysisViewModel.prototype,"visible",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"active",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"disabled",null);f.__decorate([g.property({nonNullable:!0})],e.AnalysisViewModel.prototype,"analysis",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"analysisView",void 0);
f.__decorate([g.property()],e.AnalysisViewModel.prototype,"ready",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"connectingToView",null);f.__decorate([g.property({readOnly:!0})],e.AnalysisViewModel.prototype,"isAnalysisOwner",null);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"_reconnectViewTask",void 0);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"_forceInteractiveHandle",void 0);f.__decorate([g.property()],e.AnalysisViewModel.prototype,"tool",null);e.AnalysisViewModel=
f.__decorate([w.subclass("esri.widgets.support.AnalysisViewModel")],e.AnalysisViewModel);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});