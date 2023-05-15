/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{clone as s}from"../core/lang.js";import{t}from"../chunks/screenUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as i}from"../chunks/enumeration.js";import{r as e}from"../chunks/reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import h from"./MarkerSymbol.js";import{u as c,s as n}from"../chunks/urlUtils.js";import"../chunks/typedArrayUtil.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"./Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";var u;let m=u=class extends h{constructor(...r){super(...r),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null}normalizeCtorArgs(r,s,o){if(r&&"string"!=typeof r&&null==r.imageData)return r;const i={};return r&&(i.url=r),null!=s&&(i.width=t(s)),null!=o&&(i.height=t(o)),i}readHeight(r,s){return s.size||r}readWidth(r,s){return s.size||r}clone(){const r=new u({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return r._set("source",s(this.source)),r}hash(){return`${super.hash()}.${this.height}.${this.url}.${this.width}`}};r([o({json:{write:!1}})],m.prototype,"color",void 0),r([i({esriPMS:"picture-marker"},{readOnly:!0})],m.prototype,"type",void 0),r([o(c)],m.prototype,"url",void 0),r([o(n)],m.prototype,"source",void 0),r([o({type:Number,cast:t,json:{write:!0}})],m.prototype,"height",void 0),r([e("height",["height","size"])],m.prototype,"readHeight",null),r([o({type:Number,cast:t,json:{write:!0}})],m.prototype,"width",void 0),r([o({json:{write:!1}})],m.prototype,"size",void 0),m=u=r([p("esri.symbols.PictureMarkerSymbol")],m);const l=m;export{l as default};
