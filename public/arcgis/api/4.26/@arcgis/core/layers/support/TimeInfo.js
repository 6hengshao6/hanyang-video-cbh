/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../TimeExtent.js";import r from"../../TimeInterval.js";import{ClonableMixin as i}from"../../core/Clonable.js";import{JSONSupport as n}from"../../core/JSONSupport.js";import{i as o}from"../../chunks/maybe.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as s}from"../../chunks/reader.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{T as p}from"../../chunks/TimeReference.js";import"../../chunks/timeUtils.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/datetime.js";function u(t,e){return r.fromJSON({value:t,unit:e})}let c=class extends(i(n)){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(t,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;const i=new Date(r.timeExtent[0]),n=new Date(r.timeExtent[1]);return new e({start:i,end:n})}writeFullTimeExtent(t,e){t&&o(t.start)&&o(t.end)?e.timeExtent=[t.start.getTime(),t.end.getTime()]:e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?u(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?u(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=t?.toJSON().value??null,e.timeIntervalUnits=t?.toJSON().unit??null}};t([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],c.prototype,"cumulative",void 0),t([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],c.prototype,"endField",void 0),t([l({type:e,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"fullTimeExtent",void 0),t([s("fullTimeExtent",["timeExtent"])],c.prototype,"readFullTimeExtent",null),t([m("fullTimeExtent")],c.prototype,"writeFullTimeExtent",null),t([l({type:Boolean,json:{write:!0}})],c.prototype,"hasLiveData",void 0),t([l({type:r,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"interval",void 0),t([s("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],c.prototype,"readInterval",null),t([m("interval")],c.prototype,"writeInterval",null),t([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],c.prototype,"startField",void 0),t([l({type:p,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"timeReference",void 0),t([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"trackIdField",void 0),t([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],c.prototype,"useTime",void 0),c=t([a("esri.layers.support.TimeInfo")],c);const d=c;export{d as default};