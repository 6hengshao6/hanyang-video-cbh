/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{p as e}from"../../chunks/screenUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{c as p,s as n}from"../../chunks/materialUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/maybe.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/opacityUtils.js";let m=class extends r{constructor(s){super(s),this.color=new o([0,0,0,1]),this.extensionLength=0,this.size=e(1)}clone(){}cloneProperties(){return{color:t(this.color),size:this.size,extensionLength:this.extensionLength}}};s([i({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],m.prototype,"type",void 0),s([i(p)],m.prototype,"color",void 0),s([i({...n,json:{write:{overridePolicy:s=>({enabled:!!s})}}})],m.prototype,"extensionLength",void 0),s([i(n)],m.prototype,"size",void 0),m=s([c("esri.symbols.edges.Edges3D")],m);const h=m;export{h as default};
