/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{clone as e}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as o}from"../chunks/enumeration.js";import{r as i}from"../chunks/reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as m}from"../chunks/writer.js";import{s as a,a as n}from"../chunks/stretchRendererUtils.js";import{f as c,t as u}from"../chunks/colorRamps.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";var h;let l=h=class extends r{constructor(t){super(t),this.colorRamp=null,this.computeGamma=!1,this.dynamicRangeAdjustment=!1,this.gamma=[],this.maxPercent=null,this.minPercent=null,this.numberOfStandardDeviations=null,this.outputMax=null,this.outputMin=null,this.sigmoidStrengthLevel=null,this.statistics=[],this.histograms=null,this.useGamma=!1,this.stretchType="none",this.type="raster-stretch"}readColorRamp(t){if(t)return c(t)}writeStatistics(t,r,e){t?.length&&(Array.isArray(t[0])||(t=t.map((t=>[t.min,t.max,t.avg,t.stddev]))),r[e]=t)}readStretchType(t,r){let e=r.stretchType;return"number"==typeof e&&(e=n[e]),a.read(e)}clone(){return new h({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:e(this.statistics),gamma:e(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:e(this.colorRamp),histograms:e(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})}};t([s({types:u,json:{write:!0}})],l.prototype,"colorRamp",void 0),t([i("colorRamp")],l.prototype,"readColorRamp",null),t([s({type:Boolean,json:{write:!0}})],l.prototype,"computeGamma",void 0),t([s({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],l.prototype,"dynamicRangeAdjustment",void 0),t([s({type:[Number],json:{write:!0}})],l.prototype,"gamma",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"maxPercent",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"minPercent",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"numberOfStandardDeviations",void 0),t([s({type:Number,json:{read:{source:"max"},write:{target:"max"}}})],l.prototype,"outputMax",void 0),t([s({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],l.prototype,"outputMin",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"sigmoidStrengthLevel",void 0),t([s({json:{type:[[Number]],write:!0}})],l.prototype,"statistics",void 0),t([s()],l.prototype,"histograms",void 0),t([m("statistics")],l.prototype,"writeStatistics",null),t([s({type:Boolean,json:{write:!0}})],l.prototype,"useGamma",void 0),t([s({type:a.apiValues,json:{type:a.jsonValues,write:a.write}})],l.prototype,"stretchType",void 0),t([i("stretchType",["stretchType"])],l.prototype,"readStretchType",null),t([o({rasterStretch:"raster-stretch"})],l.prototype,"type",void 0),l=h=t([p("esri.renderers.RasterStretchRenderer")],l);const d=l;export{d as default};
