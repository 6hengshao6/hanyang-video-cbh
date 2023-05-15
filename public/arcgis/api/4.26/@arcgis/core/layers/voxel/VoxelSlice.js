/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{c as r}from"../../chunks/Cyclical.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/typedArrayUtil.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{l as m}from"../../chunks/ensureType.js";import{c as a,a as c}from"../../chunks/voxelPlaneUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/quat.js";import"../../chunks/quatf64.js";let p=class extends(o(s)){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=a(this.normal);return r.normalize(m(t),0,!0)}set orientation(t){const o=c(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=a(this.normal);return r.normalize(m(o),0,!0)}set tilt(t){const o=c(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};t([e({type:Boolean,json:{write:!0}})],p.prototype,"enabled",void 0),t([e({type:String,json:{write:!0}})],p.prototype,"label",void 0),t([e({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),i((t=>r.normalize(m(t),0,!0)))],p.prototype,"orientation",null),t([e({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),i((t=>r.normalize(m(t),0,!0)))],p.prototype,"tilt",null),t([e({type:[Number],json:{write:!0}})],p.prototype,"normal",void 0),t([e({type:[Number],json:{write:!0}})],p.prototype,"point",void 0),p=t([n("esri.layers.voxel.VoxelSlice")],p);const l=p;export{l as default};
