/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import s from"../../core/Error.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{w as r}from"../../chunks/writer.js";import i from"./VisualVariable.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/LegendOptions.js";var p;let n=p=class extends i{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,t,o,r){if(r&&r.messages){const e=`visualVariables[${this.index}]`;r.messages.push(new s("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new p({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}};e([t({readOnly:!0})],n.prototype,"cache",null),e([t({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],n.prototype,"axis",void 0),e([t({type:["rotation"],json:{type:["rotationInfo"]}})],n.prototype,"type",void 0),e([t({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],n.prototype,"rotationType",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"valueExpressionTitle",void 0),e([r("web-scene","valueExpressionTitle")],n.prototype,"writeValueExpressionTitleWebScene",null),n=p=e([o("esri.renderers.visualVariables.RotationVariable")],n);const a=n;export{a as default};
