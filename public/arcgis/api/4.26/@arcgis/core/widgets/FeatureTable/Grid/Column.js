/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import e from"../../../core/Evented.js";import{HandleOwnerMixin as o}from"../../../core/HandleOwner.js";import{i as s}from"../../../chunks/maybe.js";import{watch as i}from"../../../core/reactiveUtils.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as n}from"../../../core/accessorSupport/decorators/subclass.js";import c from"./support/ButtonMenu.js";import{r as l}from"../../../chunks/widgetUtils.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/lang.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/WatchUpdatingTracking.js";import"../../Widget.js";import"../../../intl.js";import"../../../chunks/number.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/assets.js";import"../../../chunks/domUtils.js";import"../../../core/Promise.js";import"../../../chunks/uuid.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/projector.js";import"../../../chunks/dom.js";import"../../../chunks/index.js";import"../../../chunks/jsxWidgetSupport.js";import"./support/ButtonMenuViewModel.js";import"./support/ButtonMenuItem.js";import"../../../chunks/Popover.js";import"../../../chunks/jsxFactory.js";const a="esri-column",d={sortAscIcon:"esri-icon-arrow-up",sortDescIcon:"esri-icon-arrow-down",menuContainer:`${a}__menu-container`,menuIcon:"esri-icon-handle-horizontal",sorter:`${a}__sorter`,headerContent:`${a}__header-content`,headerLabel:`${a}__header-label`};let h=class extends(o(e.EventedAccessor)){constructor(t){super(t),this._menuContainer=document.createElement("div"),this.activeRowIndex=null,this.autoWidth=!1,this.cellValueFormatFunction=({value:t})=>l.sanitize(t),this.flexGrow=1,this.footerRenderFunction=null,this.frozen=!1,this.grid=null,this.header=null,this.headerRenderFunction=t=>{const{root:e}=t;if(this.removeCellContent(e),e.classList.add(d.headerContent),this.sortable)this.headerSorterRenderFunction(t);else{const t=document.createElement("div");t.classList.add(d.headerLabel),t.textContent=this.label,e.appendChild(t)}this.headerMenuEnabled&&this.headerMenuRenderFunction(t)},this.headerMenuRenderFunction=({root:t})=>{this.menu?.items?.length&&t.appendChild(this._menuContainer)},this.headerSorterRenderFunction=({root:t})=>{const{label:e,sortElement:o}=this;if(!o)return void(t.textContent=e);o.textContent!==e&&o.setAttribute("textContent",e),t.appendChild(o);const s=this.grid?.getSlotElementByName(t.slot),i=s?.parentElement;i&&!i.onkeydown&&(i.onkeydown=({key:t})=>{"Enter"!==t&&"Spacebar"!==t||o.click()})},this.hidden=!1,this.headerMenuEnabled=!0,this.initialSortPriority=null,this.menu=null,this.menuConfig=null,this.messages=null,this.messagesCommon=null,this.messagesURIUtils=null,this.path=null,this.renderFunction=({root:t,column:e,rowData:o})=>{const s=this.getCellValue(e,o),i=this.cellValueFormatFunction({column:e,rowData:o,value:s});t.innerHTML!==i&&(t.innerHTML=i)},this.resizable=!0,this.sortable=!0,this.textAlign="start",this.width=200}initialize(){const{messages:t,path:e}=this;this._set("sortElement",this.createSortElement()),this.sortElement.setAttribute("path",e??""),this._menuContainer.classList.add(d.menuContainer),this.menu=new c({label:t?.options,iconClass:d.menuIcon,...this.menuConfig}),this.menu.container=this._menuContainer,this.menu.set("items",this.getMenuItems()),this.handles.add(i((()=>this.hidden),(()=>this.menu?.set("open",!1))),i((()=>this.path),(t=>{this.sortElement&&this.sortElement.path!==t&&this.sortElement.setAttribute("path",t??"")})))}destroy(){this.menu?.destroy()}set direction(t){this.sortable&&(this.sortElement&&(t?this.sortElement.direction!==t&&this.sortElement.setAttribute("direction",t):this.sortElement.removeAttribute("direction")),this._set("direction",t))}get direction(){return this._get("direction")||null}get label(){return l.sanitize(this.header??this.path??"")}getMenuItems(){const{menuConfig:t,sortable:e}=this,o=t?.items,s=this.getSortMenuItems(),i=[];return e&&i.push(...s),o?.length&&i.push(...o),i.length?i:null}getSortMenuItems(){const{messages:t}=this;return[{selected:"asc"===this.direction,iconClass:d.sortAscIcon,label:t?.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","asc"!==this.direction?"asc":null)},{selected:"desc"===this.direction,iconClass:d.sortDescIcon,label:t?.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","desc"!==this.direction?"desc":null)}]}getCellValue(t,e){return e?.item[t?.path]??""}createSortElement(){const{direction:t,label:e,path:o,initialSortPriority:i}=this,r=document.createElement("vaadin-grid-sorter");return r.classList.add(d.sorter),r.setAttribute("path",o??""),r.setAttribute("title",e),r.textContent=e,t&&r.setAttribute("direction",t),s(i)&&(r._initialOrder=i),r.addEventListener("direction-changed",(()=>{this.direction!==r.direction&&this._set("direction",r.direction)})),r}removeCellContent(t){if(t)for(;t.firstChild;)try{t.removeChild(t.firstChild)}catch(t){}}};t([r()],h.prototype,"activeRowIndex",void 0),t([r()],h.prototype,"autoWidth",void 0),t([r()],h.prototype,"cellValueFormatFunction",void 0),t([r()],h.prototype,"direction",null),t([r()],h.prototype,"flexGrow",void 0),t([r()],h.prototype,"footerRenderFunction",void 0),t([r()],h.prototype,"frozen",void 0),t([r()],h.prototype,"grid",void 0),t([r()],h.prototype,"header",void 0),t([r()],h.prototype,"headerRenderFunction",void 0),t([r()],h.prototype,"headerMenuRenderFunction",void 0),t([r()],h.prototype,"headerSorterRenderFunction",void 0),t([r()],h.prototype,"hidden",void 0),t([r()],h.prototype,"headerMenuEnabled",void 0),t([r({constructOnly:!0})],h.prototype,"initialSortPriority",void 0),t([r({readOnly:!0})],h.prototype,"label",null),t([r()],h.prototype,"menu",void 0),t([r()],h.prototype,"menuConfig",void 0),t([r()],h.prototype,"messages",void 0),t([r()],h.prototype,"messagesCommon",void 0),t([r()],h.prototype,"messagesURIUtils",void 0),t([r()],h.prototype,"path",void 0),t([r()],h.prototype,"renderFunction",void 0),t([r()],h.prototype,"resizable",void 0),t([r()],h.prototype,"sortable",void 0),t([r({readOnly:!0})],h.prototype,"sortElement",void 0),t([r()],h.prototype,"textAlign",void 0),t([r()],h.prototype,"width",void 0),h=t([n("esri.widgets.FeatureTable.Grid.Column")],h);const u=h;export{u as default};