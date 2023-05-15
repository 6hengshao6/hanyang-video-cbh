/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import o from"./Fullscreen/FullscreenViewModel.js";import{a as i}from"../chunks/accessibleHandler.js";import{m as l}from"../chunks/messageBundle.js";import{t as n}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";let c=class extends r{constructor(e,s){super(e,s),this.messages=null,this.viewModel=new o}get element(){return this.viewModel.element}set element(e){this.viewModel.element=e}get fullscreenTitle(){const e=this.viewModel?.state;return"active"===e?this.messages.exit:"ready"===e?this.messages.enter:""}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e=this.viewModel?.state,{fullscreenTitle:s}=this,t={"esri-disabled":"disabled"===e||"feature-unsupported"===e};return n("div",{bind:this,class:this.classes("esri-fullscreen esri-widget--button esri-widget",t),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":s,title:s},this.renderIcon(),this.renderTitle())}renderIcon(){const e=this.viewModel?.state,s={"esri-icon-zoom-out-fixed":"ready"===e||"disabled"===e||"feature-unsupported"===e,"esri-icon-zoom-in-fixed":"active"===e};return n("span",{class:this.classes("esri-icon",s),"aria-hidden":"true"})}renderTitle(){return n("span",{class:"esri-icon-font-fallback-text"},this.fullscreenTitle)}_toggle(){this.viewModel.toggle()}};e([s()],c.prototype,"element",null),e([s({readOnly:!0})],c.prototype,"fullscreenTitle",null),e([s()],c.prototype,"label",null),e([s(),l("esri/widgets/Fullscreen/t9n/Fullscreen")],c.prototype,"messages",void 0),e([s()],c.prototype,"view",null),e([s({type:o})],c.prototype,"viewModel",void 0),e([i()],c.prototype,"_toggle",null),c=e([t("esri.widgets.Fullscreen")],c);const p=c;export{p as default};
