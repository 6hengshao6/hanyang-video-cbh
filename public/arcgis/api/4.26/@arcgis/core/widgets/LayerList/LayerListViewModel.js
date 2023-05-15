/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Collection.js";import s from"../../core/Evented.js";import{watch as i,initial as r}from"../../core/reactiveUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import n from"./ListItem.js";import{e as c,b as l}from"../../chunks/layerListUtils.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/metadata.js";import"../../chunks/watch.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/Identifiable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"./ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/dom.js";import"../../chunks/index.js";import"../../chunks/jsxWidgetSupport.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const m="view-layers",p="map-layers",h="layer-views",d="layer-list-mode",u=t.ofType(n);let j=class extends s.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.operationalItems=new u,this.view=null}initialize(){this.addHandles([i((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),r),i((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],"view")}destroy(){this.removeAllHandles(),this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,s,i){const r=e?.layer;if(!r)return;const o=this.view?.map?.layers,a=t?c(t):o,n=s?c(s):o;if(!a||!n)return;const{operationalItems:l}=this,m=t?.children||l,p=s?.children||l,h=n.length-i;e.parent=s||null,m.includes(e)&&m.remove(e),a.includes(r)&&a.remove(r),p.includes(e)||p.add(e,h),n.includes(r)||n.add(r,h)}_createLayerViewHandles(e){this.removeHandles(h),this._compileList(),e&&this.addHandles(e.on("change",(()=>this._compileList())),h)}_createMapLayerHandles(e){this.removeHandles(p),this._compileList(),e&&this.addHandles(e.on("change",(()=>this._compileList())),p)}_createListItem(e){const{view:t,listItemCreatedFunction:s,checkPublishStatusEnabled:i}=this;return new n({checkPublishStatusEnabled:i,layer:e,listItemCreatedFunction:s,view:t})}_removeAllItems(){this.operationalItems.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==l(e)))}_watchLayersListMode(e){this.removeHandles(d),e&&e.forEach((e=>{"listMode"in e&&this.addHandles(i((()=>e.listMode),(()=>this._compileList())),d)}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const t=this._getViewableLayers(e);t&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.find((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{operationalItems:t}=this,s=[];t.forEach((t=>{t&&e&&e.includes(t.layer)||s.push(t)})),t.removeMany(s)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,s)=>{const i=e.indexOf(t.layer),r=e.indexOf(s.layer);return i>r?-1:i<r?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{view:e}=this;this.removeHandles([p,h,m]),this._compileList(),e&&e.ready&&this.addHandles([i((()=>this.view?.map?.allLayers),(e=>this._createMapLayerHandles(e)),r),i((()=>this.view?.allLayerViews),(e=>this._createLayerViewHandles(e)),r)],m)}};e([o()],j.prototype,"checkPublishStatusEnabled",void 0),e([o()],j.prototype,"listItemCreatedFunction",void 0),e([o({type:u})],j.prototype,"operationalItems",void 0),e([o({readOnly:!0})],j.prototype,"state",null),e([o()],j.prototype,"view",void 0),j=e([a("esri.widgets.LayerList.LayerListViewModel")],j);const k=j;export{k as default};