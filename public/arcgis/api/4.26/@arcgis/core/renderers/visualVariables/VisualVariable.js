/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{J as s}from"../../chunks/jsonMap.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{L as t}from"../../chunks/Logger.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{k as p}from"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{L as l}from"../../chunks/LegendOptions.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/string.js";var a;let c=a=class extends l{constructor(){super(...arguments),this.showLegend=null}clone(){return new a({title:this.title,showLegend:this.showLegend})}};e([o({type:Boolean,json:{write:!0}})],c.prototype,"showLegend",void 0),c=a=e([n("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],c);const u=c,d=new s({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let m=class extends r{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(t.getLogger(this.declaredClass).error(".field: field must be a string value"),null):p(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};e([o()],m.prototype,"index",void 0),e([o({type:d.apiValues,readOnly:!0,json:{read:d.read,write:d.write}})],m.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"field",void 0),e([i("field")],m.prototype,"castField",null),e([o({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"valueExpressionTitle",void 0),e([o({readOnly:!0})],m.prototype,"arcadeRequired",null),e([o({type:u,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=e([n("esri.renderers.visualVariables.VisualVariable")],m);const h=m;export{u as V,h as default};
