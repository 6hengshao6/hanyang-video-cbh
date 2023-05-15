/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{clone as t}from"../core/lang.js";import{t as o}from"../chunks/screenUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as i}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import p from"./FillSymbol.js";import{u as c,s as h}from"../chunks/urlUtils.js";import"../chunks/typedArrayUtil.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"./SimpleLineSymbol.js";import"./LineSymbol.js";import"./Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"./LineSymbolMarker.js";import"../chunks/writer.js";import"../chunks/lineMarkers.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";var l;let m=l=class extends p{constructor(...s){super(...s),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null}normalizeCtorArgs(s,t,r,i){if(s&&"string"!=typeof s&&null==s.imageData)return s;const e={};return s&&(e.url=s),t&&(e.outline=t),null!=r&&(e.width=o(r)),null!=i&&(e.height=o(i)),e}clone(){const s=new l({color:t(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return s._set("source",t(this.source)),s}hash(){return`${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};s([i({esriPFS:"picture-fill"},{readOnly:!0})],m.prototype,"type",void 0),s([r(c)],m.prototype,"url",void 0),s([r({type:Number,json:{write:!0}})],m.prototype,"xscale",void 0),s([r({type:Number,json:{write:!0}})],m.prototype,"yscale",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"width",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"height",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"xoffset",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"yoffset",void 0),s([r(h)],m.prototype,"source",void 0),m=l=s([e("esri.symbols.PictureFillSymbol")],m);const n=m;export{n as default};
