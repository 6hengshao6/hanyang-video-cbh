/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import o from"./mixins/ChartMediaInfo.js";import{c as e}from"../../chunks/chartMediaInfoUtils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"./mixins/MediaInfo.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"./support/ChartMediaInfoValue.js";import"./support/ChartMediaInfoValueSeries.js";import"../../chunks/jsonMap.js";var i;let p=i=class extends o{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};t([r({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:e.write}})],p.prototype,"type",void 0),p=i=t([s("esri.popup.content.PieChartMediaInfo")],p);const c=p;export{c as default};
