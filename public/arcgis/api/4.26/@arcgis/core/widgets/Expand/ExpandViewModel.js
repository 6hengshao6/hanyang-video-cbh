/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{on as s,when as i,pausable as o}from"../../core/reactiveUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let p=class extends e{constructor(t){super(t),this._viewpointHandle=null,this.group=null}initialize(){this.addHandles(s((()=>this.view?.ui),"expand",(t=>{const{target:e}=t;e&&e!==this&&e.expanded&&e.group&&e.group===this.group&&this._collapse()})))}destroy(){this.removeAllHandles(),this._viewpointHandle=null,this.view=null}set autoCollapse(t){this._set("autoCollapse",t),this._watchViewpoint()}set expanded(t){const e=!!t;this._set("expanded",e);const s=this.get("view.ui");s&&s.emit("expand",{target:this}),this._viewpointHandleChange(e)}get state(){return this.get("view.ready")?"ready":"disabled"}set view(t){this._get("view")!==t&&(this._set("view",t),t&&i((()=>t.ready),(()=>{this.view===t&&this._watchViewpoint()}),{once:!0,initial:!0}))}_viewpointHandleChange(t){this._viewpointHandle&&(t?i((()=>this.view?.stationary),(()=>this._viewpointHandle?.resume()),{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const t="viewpoint";this.removeHandles(t),this._viewpointHandle=null;const{autoCollapse:e,view:s}=this;if(!s||!e)return;const i=o((()=>"3d"===s.type?s.camera:s.viewpoint),(()=>this._collapse()));this.addHandles(i,t),this._viewpointHandle=i}_collapse(){this.expanded=!1}};t([r({value:!1})],p.prototype,"autoCollapse",null),t([r({value:!1})],p.prototype,"expanded",null),t([r()],p.prototype,"group",void 0),t([r({readOnly:!0})],p.prototype,"state",null),t([r({value:null})],p.prototype,"view",null),p=t([n("esri.widgets.Expand.ExpandViewModel")],p);const a=p;export{a as default};