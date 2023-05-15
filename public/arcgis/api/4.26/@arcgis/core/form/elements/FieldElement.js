/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{d as e}from"../../core/promiseUtils.js";import{L as s}from"../../chunks/Logger.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import o from"./Element.js";import{types as p}from"./support/inputs.js";import{t as n,f as a}from"../../chunks/domains.js";import"../../core/Error.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"./inputs/BarcodeScannerInput.js";import"./inputs/TextInput.js";import"./inputs/Input.js";import"./inputs/ComboBoxInput.js";import"./inputs/DateTimePickerInput.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"./inputs/RadioButtonsInput.js";import"./inputs/SwitchInput.js";import"./inputs/TextAreaInput.js";import"./inputs/TextBoxInput.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";var u;const m="esri.form.elements.FieldElement",l=s.getLogger(m);let c=u=class extends o{constructor(t){super(t),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return e(l,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._get("editable")??!0}set editable(t){e(l,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._set("editable",t)}clone(){return new u({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};t([i({types:n,json:{read:{reader:a},write:!0}})],c.prototype,"domain",void 0),t([i({type:Boolean,json:{write:!0}})],c.prototype,"editable",null),t([i({type:String,json:{write:!0}})],c.prototype,"editableExpression",void 0),t([i({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),t([i({type:String,json:{write:!0}})],c.prototype,"hint",void 0),t([i({types:p,json:{read:{source:"inputType"},write:{target:"inputType"}}})],c.prototype,"input",void 0),t([i({type:String,json:{write:!0}})],c.prototype,"requiredExpression",void 0),t([i({type:String,json:{read:!1,write:!0}})],c.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),c=u=t([r(m)],c);const d=c;export{d as default};
