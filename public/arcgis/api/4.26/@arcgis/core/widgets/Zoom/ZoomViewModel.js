/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{i as e}from"../../chunks/maybe.js";import{ignoreAbortErrors as s}from"../../core/promiseUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/Error.js";let r=class extends t{get canZoomIn(){if(!this.get("view.ready"))return!1;const o=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMaxScale");return 0===t||o>t}get canZoomOut(){if(!this.get("view.ready"))return!1;const o=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMinScale");return 0===t||o<t}};o([i({readOnly:!0})],r.prototype,"canZoomIn",null),o([i({readOnly:!0})],r.prototype,"canZoomOut",null),o([i()],r.prototype,"view",void 0),r=o([n("esri.widgets.Zoom.ZoomConditions2D")],r);const c=r;let a=class extends t{get canZoomIn(){return!!this.view.ready}get canZoomOut(){return!!this.view.ready}};o([i({readOnly:!0})],a.prototype,"canZoomIn",null),o([i({readOnly:!0})],a.prototype,"canZoomOut",null),o([i()],a.prototype,"view",void 0),a=o([n("esri.widgets.Zoom.ZoomConditions3D")],a);const m=a;let p=class extends t{constructor(o){super(o)}destroy(){this.view=null}get canZoomIn(){return e(this._zoomConditions)&&this._zoomConditions.canZoomIn}get canZoomOut(){return e(this._zoomConditions)&&this._zoomConditions?.canZoomOut}get state(){return this.view?.ready?"ready":"disabled"}set view(o){o?"2d"===o.type?this._zoomConditions=new c({view:o}):"3d"===o.type&&(this._zoomConditions=new m({view:o})):this._zoomConditions=null,this._set("view",o)}zoomIn(){if(!this.canZoomIn)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomIn():s(o.goTo({zoomFactor:2}))}zoomOut(){if(!this.canZoomOut)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomOut():s(o.goTo({zoomFactor:.5}))}};o([i()],p.prototype,"_zoomConditions",void 0),o([i()],p.prototype,"canZoomIn",null),o([i()],p.prototype,"canZoomOut",null),o([i({readOnly:!0})],p.prototype,"state",null),o([i()],p.prototype,"view",null),p=o([n("esri.widgets.Zoom.ZoomViewModel")],p);const u=p;export{u as default};
