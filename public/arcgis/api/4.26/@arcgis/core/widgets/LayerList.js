/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{e as i}from"../core/promiseUtils.js";import{h as s}from"../chunks/typedArrayUtil.js";import{i as n}from"../chunks/maybe.js";import{on as o,watch as r,initial as l,syncAndInitial as a}from"../core/reactiveUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{cast as d}from"../core/accessorSupport/decorators/cast.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import m,{l as u}from"./Widget.js";import p from"./LayerList/LayerListViewModel.js";import g from"./LayerList/ListItem.js";import{f as b,s as _,h as y,j as I}from"../chunks/layerListUtils.js";import{a as v}from"../chunks/accessibleHandler.js";import{m as f}from"../chunks/messageBundle.js";import{v as k}from"../chunks/vmEvent.js";import{t as A}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import{S as C}from"../chunks/sortable.esm.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/lang.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/themeUtils.js";function w(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const S=t.ofType(g),j="data-sort-filter",$="data-layer-uid",L="esri-layer-list",T=`${L}__item`,M={base:`${L} esri-widget esri-widget--panel`,newUI:`${L}--new-ui`,noItems:`${L}__no-items`,list:`${L}__list`,listRoot:`${L}__list--root`,listExclusive:`${L}__list--exclusive`,listInherited:`${L}__list--inherited`,listIndependent:`${L}__list--independent`,item:T,itemContent:`${T}-content`,itemMessage:`${T}--has-message`,itemInvisible:`${T}--invisible`,itemInvisibleAtScale:`${T}--invisible-at-scale`,itemChildren:`${T}--has-children`,itemSelectable:`${T}--selectable`,itemContainer:`${T}-container`,actionsMenu:`${T}-actions-menu`,actionsMenuItem:`${T}-actions-menu-item`,actionsMenuItemActive:`${T}-actions-menu-item--active`,actions:`${T}-actions`,actionsList:`${T}-actions-list`,action:`${T}-action`,actionIcon:`${T}-action-icon`,actionImage:`${T}-action-image`,actionTitle:`${T}-action-title`,actionToggle:`${L}__action-toggle`,actionToggleOn:`${L}__action-toggle--on`,label:`${T}-label`,message:`${T}-message`,title:`${T}-title`,statusIndicator:`${L}__status-indicator`,publishing:`${L}__publishing`,updating:`${L}__updating`,connectionStatus:`${L}__connection-status`,connectionStatusConnected:`${L}__connection-status--connected`,toggleVisible:`${T}-toggle`,toggleVisibleIcon:`${T}-toggle-icon`,toggleIcon:`${T}-toggle-icon`,radioIcon:`${T}-radio-icon`,childToggle:`${L}__child-toggle`,childToggleOpen:`${L}__child-toggle--open`,childOpened:`${L}__child-toggle-icon--opened`,childClosed:`${L}__child-toggle-icon--closed`,childClosed_RTL:`${L}__child-toggle-icon--closed-rtl`,sortableChosen:`${L}--chosen`,disabled:"esri-disabled",disabledElement:"esri-disabled-element",hidden:"esri-hidden",rotating:"esri-rotating",iconEllipses:"esri-icon-handle-horizontal",iconVisible:"esri-icon-visible",iconInvisible:"esri-icon-non-visible",iconRadioSelected:"esri-icon-radio-checked",iconRadioUnselected:"esri-icon-radio-unchecked",iconNoticeTriangle:"esri-icon-notice-triangle",iconChildrenOpen:"esri-icon-down-arrow",iconDownArrow:"esri-icon-down-arrow",iconRightArrow:"esri-icon-right-triangle-arrow",iconLeftArrow:"esri-icon-left-triangle-arrow",iconLoading:"esri-icon-loading-indicator",iconDefaultAction:"esri-icon-default-action",widgetIcon:"esri-icon-layers"},E={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function x(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>x(e)))}const R="root",U={statusIndicators:!0,errors:!1};let O=class extends m{constructor(e,i){super(e,i),this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=s("esri-layerlist-new-ui"),this._tooltipReferenceMap=new Map,this.visibleItems=new t,this.iconClass=M.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new S,this.viewModel=new p,this.visibleElements={...U},this._onSortableSort=({to:e,from:t,item:i,newIndex:s})=>{t&&e&&(t===e?this._sortLayers(this._sortableMap.get(t.dataset.group)):this._moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}))},this._sortableCanSort=(e,t)=>!(!e.el.dataset.group||!t.el.dataset.group),this._sortableCanPull=(e,t,i)=>{const{listItemCanGiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._sortableCanPut=(e,t,i)=>{const{listItemCanReceiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._onSortableEnd=({oldIndex:e,from:t,to:i,item:s})=>{t!==i&&t.insertBefore(s,t.children[e])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.addHandles([o((()=>this.operationalItems),"change",(()=>this._itemsChanged(e))),r((()=>this.visibleElements),(()=>this._itemsChanged(e))),r((()=>this.selectionEnabled),(()=>this._toggleAllSorting()),l)])}loadDependencies(){return u({icon:()=>import("../chunks/calcite-icon.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}destroy(){this.removeAllHandles(),this._destroySortables(),this._tooltipReferenceMap.clear()}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...U,...e}}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e,_newUI:t}=this,i=this.viewModel?.state,s={[M.newUI]:t,[M.hidden]:"loading"===i,[M.disabled]:"disabled"===i},n=this.renderItemTooltips(),o=this.renderItems();return A("div",{class:this.classes(M.base,s)},0!==e.length?[n,o]:this.renderNoItems())}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?A("calcite-tooltip",{label:i?.layerIncompatible??"",referenceElement:t.get(e.uid)},i?.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...!t&&i?i.toArray().map((e=>this.renderItemTooltipNodes(e))):[]]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))??[]}renderNoItems(){return A("div",{class:M.noItems},this.messages?.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return A("ul",{"aria-label":i?.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":R,bind:this,class:this.classes(M.list,M.listRoot,M.listIndependent)},e.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[M.actionsMenuItemActive]:e.actionsOpen};return A("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(M.actionsMenuItem,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i?.options,title:i?.options},A("span",{"aria-hidden":"true",class:M.iconEllipses}))}renderActionsMenu(e,t,i,s){const{panel:n}=e,o=n&&n.visible?this.renderPanelButton(n):null,r=1===i&&this._getSingleActionButton(t),l=r?this.renderAction({item:e,action:r,singleAction:!0}):null,a=!r&&i?this.renderActionsMenuIcon(e,s):null;return a||o||r?A("div",{key:"actions-menu",class:M.actionsMenu},o,l,a):null}renderChildList(e,t){const{selectionEnabled:i}=this,{visibilityMode:s,children:n}=e,o=this._hasChildren(e),r=!o&&i&&"group"===e.layer?.type,{exclusive:l,inherited:a}=E,c={[M.listExclusive]:s===l,[M.listInherited]:s===a,[M.listIndependent]:s!==a&&s!==l};return o||r?A("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes(M.list,c),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===l?"radiogroup":"group",hidden:!e.open&&!r||null},n?.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,s=this._hasChildren(e),n={[M.childToggleOpen]:e.open},o=e.open?i?.collapse:i?.expand;return s?A("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(M.childToggle,n),tabindex:"0",role:"button","aria-controls":t,"aria-label":o,title:o},A("span",{"aria-hidden":"true",class:this.classes(M.childClosed,M.iconRightArrow)}),A("span",{"aria-hidden":"true",class:this.classes(M.childOpened,M.iconDownArrow)}),A("span",{"aria-hidden":"true",class:this.classes(M.childClosed_RTL,M.iconLeftArrow)})):null}renderItemMessage(e){return e.error?A("div",{key:"esri-layer-list__error",class:M.message,role:"alert"},A("span",{"aria-hidden":"true",class:M.iconNoticeTriangle}),this.messages?.layerError):e.incompatible?A("div",{key:"esri-layer-list__incompatible",class:M.message,role:"alert"},A("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:M.iconNoticeTriangle,afterCreate:t=>this._setTooltipReference(t,e)}),this.messages?.layerIncompatible):null}renderItemContent(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,o=`${n}_actions`,r=`${n}__list`,{panel:l}=e,a=this._filterActions(e.actionsSections),c=this._countActions(a);return[A("div",{key:"list-item-container",class:M.itemContainer},this.renderChildrenToggle(e,r),this.renderLabel(e,t,i),this.renderActionsMenu(e,a,c,o)),this.renderItemMessage(e),c?this.renderActionsSections(e,a,o):null,l&&l.open&&!l.disabled?l.render():null,this.renderChildList(e,r)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:n,selectedItems:o}=this,r=`${s}_${e.uid}__title`,l=this._hasMessage(e),a=this._hasChildren(e),c={[M.itemChildren]:a,[M.itemMessage]:!!l,[M.itemInvisible]:i&&!e.visible,[M.itemInvisibleAtScale]:!e.visibleAtCurrentScale,[M.itemSelectable]:n};if(n){const i={[$]:e.layer?.uid,[j]:(!e.sortable).toString()};return A("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(M.item,c),"aria-labelledby":r,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:R,tabIndex:0,"aria-selected":b(e,o)?"true":"false",role:"option",...i},this.renderItemContent(e,t,r))}return A("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(M.item,c),"aria-labelledby":r},this.renderItemContent(e,t,r))}renderConnectionIcon(e){const{connectionStatus:t}=e;return n(t)?A("calcite-icon",{icon:"connected"===t?"check-circle":"offline",scale:"s"}):null}renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:n,updating:o}=e,r=o&&!t,l=!!s;return A("span",{class:this.classes({[M.statusIndicator]:!0,[M.publishing]:n,[M.updating]:r,[M.connectionStatus]:l,[M.connectionStatusConnected]:l&&"connected"===s}),key:"layer-item-status"},this.renderConnectionIcon(e))}renderItemTitle(e,t){const{messages:i}=this;if(!e)return null;const s=e.title||i?.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i?.layerInvisibleAtScale??""})`;return A("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:M.title},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=E,n=t?.visibilityMode,o={[M.toggleVisibleIcon]:i,[M.toggleIcon]:i&&n!==s,[M.radioIcon]:i&&n===s,[M.iconRadioSelected]:n===s&&e.visible,[M.iconRadioUnselected]:n===s&&!e.visible,[M.iconVisible]:n!==s&&e.visible,[M.iconInvisible]:n!==s&&!e.visible};return A("span",{key:"item-toggle-icon",class:this.classes(o),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s,messages:n}=this,{exclusive:o}=E,r=t?.visibilityMode,l=r===o?"radio":"switch";return A("span",s?{key:"item-toggle-selection-enabled",class:M.toggleVisible,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":r,tabIndex:0,title:e.visible?n?.hideLayer:n?.showLayer,"aria-checked":e.visible?"true":"false",role:l,"aria-labelledby":i}:{key:"item-toggle",class:M.toggleVisible},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:n,messages:o}=this,{inherited:r,exclusive:l}=E,a=t?.visibilityMode,c=a===l?"radio":"switch",d=n?[this.renderItemTitle(e,i),this.renderItemStatus(e,t),this.renderItemToggle(e,t,i)]:[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i),this.renderItemStatus(e,t)],h=A("div",s?{key:`item-label-no-selection-${e.uid}`,class:M.label}:{key:`item-label-with-selection-${e.uid}`,class:M.label,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":a,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?o?.hideLayer:o?.showLayer,role:c,"aria-labelledby":i},d);return a===r||e.error?A("div",{key:`item-label-container-${e.uid}`,class:M.label},this.renderItemTitle(e,i),this.renderItemStatus(e,t)):h}renderPanelButton(e){const{className:t,open:i,title:s,image:n}=e,o=n||t?t:M.iconDefaultAction,r=this._getIconImageStyles(e),l={[M.actionsMenuItemActive]:i},a={[M.actionImage]:!!r["background-image"],[M.disabledElement]:e.disabled};return o&&(a[o]=!!o),A("div",{"aria-disabled":e.disabled.toString(),key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(M.actionsMenuItem,l),role:"button",tabindex:e.disabled?null:0,title:s,"aria-label":s},A("span",{class:this.classes(a),styles:r}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>A("ul",{key:`${e}-action-section-${i}`,class:M.actionsList},this.renderActionSection(e,t))));return A("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:M.actions,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:M.iconDefaultAction,o={[M.actionImage]:!t&&!!s["background-image"],[M.iconLoading]:t,[M.rotating]:t};return n&&!t&&(o[n]=!0),A("span",{key:"action-icon","aria-hidden":"true",class:this.classes(M.actionIcon,o),styles:s})}renderActionTitle(e,t){return t?null:A("span",{key:"action-title",class:M.actionTitle},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:o,title:r}=i,l={[M.actionsMenuItem]:s&&"button"===i.type,[M.action]:n||!s&&"toggle"!==i.type,[M.actionToggle]:!n&&"toggle"===i.type,[M.actionToggleOn]:!n&&"toggle"===i.type&&i.value,[M.disabledElement]:o},a=[this.renderActionIcon(i),this.renderActionTitle(r,s)];return s?A("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:l,tabindex:"0",title:r??void 0,"aria-label":r??void 0},a):A("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:l,tabindex:"0",role:"button",title:r??void 0,"aria-label":r??void 0},a)}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}){const n=i["data-item"],o=e["data-item"],r=t["data-item"];this.viewModel.moveListItem(n,r,o,s)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();t?y(t,i):_(this.view?.map?.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,n=i.get(t),o=e["data-item"],r=(t===R||o.childrenSortable&&I(o))&&s;if(n)n.option("disabled",!r);else if(r){const s=C.create(e,{dataIdAttr:$,group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:`[${j}="true"]`,fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!r,chosenClass:M.sortableChosen});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=e.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;if(!e||!t)return;const i=e["data-item"];i.layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i="action-section"+t;this.addHandles(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i="actions"+t;"toggle"!==e.type?"slider"!==e.type?this.addHandles(r((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible]),(()=>this.scheduleRender()),l),i):this.addHandles(r((()=>[e?.className,e?.id,e?.title,e?.visible,e?.value,e?.displayValueEnabled,e?.max,e?.min,e?.step]),(()=>this.scheduleRender()),l),i):this.addHandles(r((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible,e?.value]),(()=>this.scheduleRender()),l),i)}_renderOnItemChanges(e){const t=e.uid,i="items"+t;this.addHandles([r((()=>[e?.actionsOpen,e?.visible,e?.open,e?.updating,e?.connectionStatus,e?.publishing,e?.title,e?.visibleAtCurrentScale,e?.error,e?.visibilityMode,e?.panel,e?.panel?.title,e?.panel?.content,e?.panel?.className,e?.sortable,e?.childrenSortable]),(()=>this.scheduleRender()),a),r((()=>[e?.hidden,e?.error]),(()=>this._setVisibleItems(this.operationalItems))),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this.removeAllHandles(),e.forEach((e=>this._renderOnItemChanges(e))),this._tooltipReferenceMap.clear(),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:void 0}}_selectionKeydown(e){const t=i(e);if(!["ArrowDown","ArrowUp"].includes(t))return void this._toggleSelection(e);e.stopPropagation();const s=e.currentTarget,n=s["data-item"],{_sortableMap:o,selectedItems:r}=this,l=s.dataset.group,a=o.get(l);if(!a)return;const c=b(n,r),d=a.toArray(),h=e.target,m=d.indexOf(h.dataset.layerUid);if(-1!==m){if("ArrowDown"===t){const e=m+1;if(e>=d.length)return;c?(w(d,m,e),a.sort(d),this._sortLayers(a),this._focusSortUid=n.layer?.uid):(this._focusSortUid=n.layer?.uid,this.scheduleRender())}if("ArrowUp"===t){const e=m-1;if(e<=-1)return;c?(w(d,m,e),a.sort(d),this._sortLayers(a),this._focusSortUid=n.layer?.uid):(this._focusSortUid=n.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>x(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];e.stopPropagation(),t&&!t.disabled&&(t.open=!t.open)}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===E.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],n=b(s,i),{length:o}=i;if(!t)return!o||n&&1===o?void(n?i.remove?.(n):i.add(s)):(i.removeAll(),void i.add(s));n?i.remove?.(n):i.add(s)}};e([c()],O.prototype,"visibleItems",void 0),e([c()],O.prototype,"iconClass",void 0),e([c()],O.prototype,"label",null),e([c()],O.prototype,"listItemCanGiveFunction",void 0),e([c()],O.prototype,"listItemCanReceiveFunction",void 0),e([c()],O.prototype,"listItemCreatedFunction",null),e([c(),f("esri/widgets/LayerList/t9n/LayerList")],O.prototype,"messages",void 0),e([c(),f("esri/t9n/common")],O.prototype,"messagesCommon",void 0),e([c()],O.prototype,"multipleSelectionEnabled",void 0),e([c()],O.prototype,"operationalItems",null),e([c()],O.prototype,"selectionEnabled",void 0),e([c()],O.prototype,"selectedItems",void 0),e([c()],O.prototype,"view",null),e([k("trigger-action"),c({type:p})],O.prototype,"viewModel",void 0),e([c()],O.prototype,"visibleElements",void 0),e([d("visibleElements")],O.prototype,"castVisibleElements",null),e([v()],O.prototype,"_toggleActionsOpen",null),e([v()],O.prototype,"_triggerPanel",null),e([v()],O.prototype,"_triggerAction",null),e([v()],O.prototype,"_toggleVisibility",null),e([v()],O.prototype,"_toggleChildrenClick",null),e([v()],O.prototype,"_toggleSelection",null),O=e([h("esri.widgets.LayerList")],O);const N=O;export{N as default};
