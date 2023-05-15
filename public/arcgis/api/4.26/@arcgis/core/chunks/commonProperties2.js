/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../TimeExtent.js";import r from"../geometry/Extent.js";import i from"../geometry/SpatialReference.js";import{w as n}from"./persistableUrlUtils.js";import{toLocalTimeExtent as t,toUTCTimeExtent as a}from"../support/timeUtils.js";import{E as o}from"./ElevationInfo.js";import{t as s}from"./opacityUtils.js";const l={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n}}},d={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},c={value:null,type:o,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={write:!0,read:!0},g={type:Number,json:{origins:{"web-document":w,"portal-item":{write:!0}}}},u={...g,json:{...g.json,origins:{"web-document":{...w,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s(r.layerDefinition.drawingInfo.transparency):void 0:s(r.drawingInfo.transparency)}}},j={type:e,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:i}=this.layer,n=this.view?.timeExtent;let o=this.layer.timeExtent;e&&(o=t(o));let s=i?n&&o?n.intersection(o):n||o:o;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=a(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:r,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=r.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=i.fromJSON(n.spatialReference)),t}}}},read:!1}},b={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},D={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},S={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}};export{d as a,S as b,D as c,g as d,c as e,v as f,j as g,b as i,m as l,I as m,u as o,p,y as r,l as s,f as u};