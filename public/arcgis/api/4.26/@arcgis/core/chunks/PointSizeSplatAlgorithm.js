/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{e as r}from"./enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{J as s}from"./jsonMap.js";import{JSONSupport as p}from"../core/JSONSupport.js";const i=new s({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let a=class extends p{};o([t({type:i.apiValues,readOnly:!0,nonNullable:!0,json:{type:i.jsonValues,read:!1,write:i.write}})],a.prototype,"type",void 0),a=o([e("esri.renderers.support.pointCloud.PointSizeAlgorithm")],a);const l=a;var n;let c=n=class extends l{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new n({scaleFactor:this.scaleFactor})}};o([r({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),o([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=n=o([e("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const u=c;export{l as P,u as a};
