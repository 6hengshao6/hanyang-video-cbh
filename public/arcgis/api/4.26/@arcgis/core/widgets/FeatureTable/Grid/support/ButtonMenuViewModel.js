/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../../../chunks/tslib.es6.js";import o from"../../../../core/Accessor.js";import{property as r}from"../../../../core/accessorSupport/decorators/property.js";import{cast as t}from"../../../../core/accessorSupport/decorators/cast.js";import"../../../../chunks/typedArrayUtil.js";import{subclass as e}from"../../../../core/accessorSupport/decorators/subclass.js";import c from"./ButtonMenuItem.js";import"../../../../core/Handles.js";import"../../../../chunks/maybe.js";import"../../../../chunks/get.js";import"../../../../chunks/utils.js";import"../../../../chunks/handleUtils.js";import"../../../../core/lang.js";import"../../../../chunks/metadata.js";import"../../../../chunks/Logger.js";import"../../../../config.js";import"../../../../chunks/object.js";import"../../../../chunks/string.js";import"../../../../chunks/ArrayPool.js";import"../../../../chunks/tracking.js";import"../../../../chunks/watch.js";import"../../../../core/scheduling.js";import"../../../../chunks/nextTick.js";import"../../../../core/promiseUtils.js";import"../../../../core/Error.js";import"../../../../chunks/ensureType.js";let p=class extends o{constructor(s){super(s),this.items=null,this.open=!1}castItems(s){return s?s.map((s=>s instanceof c?s:new c(s))):null}};s([r()],p.prototype,"items",void 0),s([t("items")],p.prototype,"castItems",null),s([r()],p.prototype,"open",void 0),p=s([e("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],p);const i=p;export{i as default};
