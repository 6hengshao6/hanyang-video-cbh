/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as i}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{HandleOwnerMixin as s}from"../../core/HandleOwner.js";import{u as e,g as r,i as o}from"../../chunks/maybe.js";import{watch as n}from"../../core/reactiveUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/WatchUpdatingTracking.js";let u=class extends(s(t)){constructor(i){super(i),this._expressionTrackingHandles=new Map,this.visibilityExpressionExecutor=null,this.feature=null,this.groupElement=null}initialize(){this.addHandles([n((()=>[this.visible,this.inputFields]),(([i])=>{const{inputFields:t}=this,s=!!i&&void 0;for(const i of t)i.required=s}),{initial:!0,equals:(i,t)=>t[0]===i[0]&&t[1]===i[1]})])}destroy(){for(const i of this._expressionTrackingHandles.values())i.remove()}get visibilityExpression(){return e(this.groupElement)?.visibilityExpression}set visibilityExpression(i){r(this.groupElement,(t=>{t.visibilityExpression=i}))}get evaluatedVisibilityExpression(){const{visibilityExpressionExecutor:i}=this;return o(i)?!!i.lastEvaluatedValue:null}get description(){return e(this.groupElement)?.description}set description(i){r(this.groupElement,(t=>{t.description=i}))}get inputFields(){return this._get("inputFields")}set inputFields(i){this.handles.removeAll(),i&&this.handles.add(i.map((i=>n((()=>i.visible),(()=>this._dirtyEvaluatedVisibilityExpression()))))),this._set("inputFields",i)}get label(){return e(this.groupElement)?.label}set label(i){r(this.groupElement,(t=>{t.label=i}))}get state(){return o(this.groupElement)&&this.groupElement.initialState||"expanded"}set state(i){this._overrideIfSome("state",i)}get visible(){return!1!==this.evaluatedVisibilityExpression&&this.inputFields&&this.inputFields.some((i=>i.visible))}_dirtyEvaluatedVisibilityExpression(){const{groupElement:i}=this;o(i)&&i.visibilityExpression&&this.notifyChange("evaluatedVisibilityExpression")}};i([l()],u.prototype,"visibilityExpression",null),i([l()],u.prototype,"visibilityExpressionExecutor",void 0),i([l()],u.prototype,"evaluatedVisibilityExpression",null),i([l()],u.prototype,"description",null),i([l()],u.prototype,"feature",void 0),i([l()],u.prototype,"groupElement",void 0),i([l()],u.prototype,"initialFeature",void 0),i([l()],u.prototype,"inputFields",null),i([l()],u.prototype,"label",null),i([l()],u.prototype,"state",null),i([l()],u.prototype,"visible",null),u=i([p("esri.widgets.FeatureForm.InputFieldGroup")],u);const a=u;export{a as default};
