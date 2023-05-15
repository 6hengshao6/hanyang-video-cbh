/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import s from"../core/Accessor.js";import{i as o,f as i,r as e,a as r}from"./maybe.js";import{debounce as n}from"../core/promiseUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{T as l,I as c}from"./Scheduler.js";let h=class extends s{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=n((async(t,s,i,e)=>{const n=this._frameTask;if(r(n))return;const a=await n.schedule((()=>s.snap({...t,context:i,signal:e})),e);a.valid&&await n.schedule((()=>{this.stagedPoint=a.apply(),t!==this._snapPoints&&o(this._snapPoints)&&(this.stagedPoint=s.update({...this._snapPoints,context:i}))}),e)}))}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){const t="3d"===this.view.type?this.view?.resourceController?.scheduler:null;this._frameTask=o(t)?t.registerTask(l.SNAPPING):c}destroy(){this._abortController=i(this._abortController),this._frameTask=e(this._frameTask)}update(t,s,o){this._snapPoints=t;const{point:i,scenePoint:e}=t,r=s.update({point:i,scenePoint:e,context:o});return this.stagedPoint=r,r}async snap(t,s,o){const{point:i,scenePoint:e}=t;return this.stagedPoint=s.update({point:i,scenePoint:e,context:o}),this._snapPoints=t,r(this._abortController)&&(this._abortController=new AbortController),this._snap(t,s,o,this._abortController.signal)}async resnap(t,s){r(this._snapPoints)||await this.snap(this._snapPoints,t,s)}abort(){this._abortController=i(this._abortController),this._snapPoints=null}};t([a({constructOnly:!0})],h.prototype,"view",void 0),t([a()],h.prototype,"stagedPoint",null),t([a()],h.prototype,"constrainResult",void 0),t([a()],h.prototype,"_stagedPoint",void 0),h=t([p("esri.views.interactive.snapping.SnappingOperation")],h);export{h as S};