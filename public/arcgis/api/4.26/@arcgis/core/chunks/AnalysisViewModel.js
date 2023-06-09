/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import e from"../core/Accessor.js";import{c as t}from"./asyncUtils.js";import{L as i}from"./Logger.js";import{i as n,g as a,f as r,a as o,r as l}from"./maybe.js";import{throwIfAborted as h,isAbortError as c,isAborted as y}from"../core/promiseUtils.js";import{watch as p,syncAndInitial as w,sync as d,whenOnce as _,when as u}from"../core/reactiveUtils.js";import{property as v}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as V}from"../core/accessorSupport/decorators/subclass.js";var m;!function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"}(m||(m={}));let g=class extends e{constructor(s={}){super(s),this.view=null,this.analysisView=null,this._reconnectViewTask=null,this._forceInteractiveHandle=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null,this.logger=i.getLogger(this.declaredClass);const e=s?.analysis;n(e)?this.analysis=e:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0)),s&&null!=s.visible&&(this.visible=s.visible)}normalizeCtorArgs(s){const{analysis:e,...t}=s;return t}initialize(){this.addHandles([p((()=>({readyAndNotSupported:n(this.view)&&this.view.ready&&!this.supported})),(({readyAndNotSupported:s})=>{s&&this.logger.errorOnce(this.unsupportedErrorMessage)}),w),p((()=>a(this.analysis,(({parent:s})=>s))),(s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const e=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,e&&this._scheduleViewReconnect()}),d),p((()=>({view:this.view,ready:n(this.view)&&this.view.ready,supported:this.supported})),(({view:s},e)=>{const t=e?.view;s!==t&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(t)),this._scheduleViewReconnect()}),w)])}destroy(){this._reconnectViewTask=r(this._reconnectViewTask),this._startUserOperation=r(this._startUserOperation),n(this.analysisView)&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),this._set("view",null),n(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}get supported(){return o(this.view)||this.view.type===this.supportedViewType}set visible(s){this._set("visible",s),n(this.analysisView)&&(this.analysisView.visible=s)}get active(){return n(this.tool)&&this.tool.active}get disabled(){return o(this.view)||!this.view.ready||!this.supported}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return n(this.analysisView)&&!this.connectingToView}get connectingToView(){return n(this._reconnectViewTask)}get isAnalysisOwner(){return this._get("isAnalysisOwner")}get tool(){return n(this.analysisView)?this.analysisView.tool:null}clear(){this._startUserOperation=r(this._startUserOperation),this._resetInteractiveCreationState(),n(this.tool)&&n(this.view)&&this.view.activeTool===this.tool&&(this.view.activeTool=null)}async start(){this.clear();const s={task:null,abort:null,state:m.PENDING},e=t((async e=>{if(s.state=m.WAIT_FOR_VIEW_READY,await _((()=>this.ready),e),s.state=m.RUNNING,o(this.analysisView)||o(this.view))return;const t=this.analysisView.tool;o(t)||(this.view.activeTool=t,u((()=>t.created),(()=>{t.active&&n(this.view)&&(this.view.activeTool=null)}),{initial:!0,once:!0}))}));return s.task=e,s.abort=()=>e.abort(),this._startUserOperation=s,e.promise}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=r(this._reconnectViewTask);const s=t((async e=>{try{await this._reconnectView(e)}catch(s){if(h(e),!c(s))return void this.logger.warn("Failed to use analysis in view model",s);throw s}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=s}async _reconnectView(s){const{view:e}=this,t=n(e)&&e.ready&&this.supported,i=this.analysis;if(this._startUserOperation=A(this._startUserOperation),this._disconnectFromView(e),t&&!o(e)&&!o(i)){if(this.isAnalysisOwner){if(n(i.parent))return void this.logger.errorOnce("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,e.analyses.add(i)}this.analysisView=await e.whenAnalysisView(i),y(s)?this._startUserOperation=A(this._startUserOperation):(this.analysisView.visible=this.visible,this._forceInteractiveHandle=this.analysisView.forceInteractiveForViewModel(),this.addHandles(this._forceInteractiveHandle),this.onConnectToAnalysisView(this.analysisView))}}_disconnectFromView(s){n(s)&&this.isAnalysisOwner&&s.analyses.includes(this.analysis)&&(this._parentChangeFromReconnect=!0,this.analysis.clear(),s.analyses.remove(this.analysis)),this.onDisconnectFromAnalysisView(),this._forceInteractiveHandle=l(this._forceInteractiveHandle),this.analysisView=null}_setExternalAnalysis(s){n(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=void 0,this._forceInteractiveHandle=l(this._forceInteractiveHandle)),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}_resetInteractiveCreationState(){this.analysis.clear(),n(this.tool)&&this.tool.resetCreated()}get testInfo(){return{analysisView:this.analysisView}}};function A(s){return n(s)&&s.state>=m.RUNNING?(s.abort(),null):s}s([v()],g.prototype,"supported",null),s([v()],g.prototype,"view",void 0),s([v({type:Boolean,value:!0})],g.prototype,"visible",null),s([v()],g.prototype,"active",null),s([v()],g.prototype,"disabled",null),s([v({nonNullable:!0})],g.prototype,"analysis",null),s([v()],g.prototype,"analysisView",void 0),s([v()],g.prototype,"ready",null),s([v()],g.prototype,"connectingToView",null),s([v({readOnly:!0})],g.prototype,"isAnalysisOwner",null),s([v()],g.prototype,"_reconnectViewTask",void 0),s([v()],g.prototype,"_forceInteractiveHandle",void 0),s([v()],g.prototype,"tool",null),g=s([V("esri.widgets.support.AnalysisViewModel")],g);export{g as A};
