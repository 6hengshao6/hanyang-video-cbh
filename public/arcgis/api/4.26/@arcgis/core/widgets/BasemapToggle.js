/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{cast as t}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import r,{l as i}from"./Widget.js";import a from"./BasemapToggle/BasemapToggleViewModel.js";import{a as l}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import{t as p}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/compilerUtils.js";import"../geometry/projection.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/SimpleObservable.js";import"../chunks/mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../chunks/pe.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../Basemap.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/collectionUtils.js";import"../core/Loadable.js";import"../chunks/loadAll.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/writeUtils.js";import"../chunks/layerUtils.js";import"../chunks/basemapUtils.js";const n="esri-basemap-thumbnail esri-basemap-toggle__container",c="esri-basemap-thumbnail__image esri-basemap-toggle__image";function u(s){const e=a.getThumbnailUrl(s);return e?{backgroundImage:"url("+e+")"}:{backgroundImage:""}}const j={title:!1};let g=class extends r{constructor(s,e){super(s,e),this.messages=null,this.viewModel=new a,this.visibleElements={...j}}loadDependencies(){return i({icon:()=>import("../chunks/calcite-icon.js"),scrim:()=>import("../chunks/calcite-scrim.js")})}get activeBasemap(){return this.viewModel.activeBasemap}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get nextBasemap(){return this.viewModel.nextBasemap}set nextBasemap(s){this.viewModel.nextBasemap=s}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}castVisibleElements(s){return{...j,...s}}toggle(){return this.viewModel.toggle()}render(){const s=this.viewModel,e="disabled"===s.state?null:s.activeBasemap,t="disabled"===s.state?null:s.nextBasemap,o="loading"===s.state,r="incompatible-next-basemap"===s.state,i=t?t.title:"",a=t&&"loaded"!==t.loadStatus;let l;const m=this.visibleElements.title&&i,j=r;return(m||j)&&(l=p("div",{class:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",key:"overlay"},m?p("span",{class:"esri-basemap-thumbnail__title esri-basemap-toggle__title",title:i},i):null,j?p("calcite-scrim",{class:"esri-basemap-thumbnail__overlay-scrim",title:this.messages.incompatibleSpatialReference},p("calcite-icon",{icon:"exclamation-mark-triangle"})):null)),p("div",{class:this.classes("esri-basemap-toggle esri-widget",r?"esri-disabled":null),role:"button","data-basemap-id":t?t.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:r?-1:0,title:this.label},p("div",{class:this.classes(n,"esri-basemap-toggle__image--secondary")},p("div",{class:c,styles:u(e)})),p("div",{class:n},p("div",{class:this.classes(c,a?"esri-basemap-toggle__image--loading":null),styles:u(t)},a||o?p("calcite-scrim",null,p("span",{"aria-hidden":"true",role:"presentation",class:"esri-widget__loader-animation"})):null),l))}_toggle(){this.toggle()}};s([e({readOnly:!0})],g.prototype,"activeBasemap",null),s([e()],g.prototype,"label",null),s([e(),m("esri/widgets/BasemapToggle/t9n/BasemapToggle")],g.prototype,"messages",void 0),s([e()],g.prototype,"nextBasemap",null),s([e()],g.prototype,"view",null),s([e({type:a})],g.prototype,"viewModel",void 0),s([e()],g.prototype,"visibleElements",void 0),s([t("visibleElements")],g.prototype,"castVisibleElements",null),s([l()],g.prototype,"_toggle",null),g=s([o("esri.widgets.BasemapToggle")],g);const h=g;export{h as default};