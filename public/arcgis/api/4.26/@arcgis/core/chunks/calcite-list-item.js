/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{p as t,H as e,c as n,h as i,a}from"./index.js";import{r as o,e as s,t as l}from"./dom.js";import{u as c}from"./interactive.js";import{g as r,u as d,a as h,I as u,C as m,S as p}from"./utils32.js";import{s as f,a as C,c as g}from"./loadable.js";import{d as b}from"./icon.js";import"./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const v=new Map,S=t(class extends e{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=n(this,"calciteListItemSelect",6),this.calciteInternalListItemSelect=n(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=n(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=n(this,"calciteInternalFocusPreviousItem",6),this.handleContentSlotChange=t=>{this.hasCustomContent=o(t)},this.handleActionsStartSlotChange=t=>{this.hasActionsStart=o(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=o(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=o(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=o(t)},this.handleDefaultSlotChange=t=>{const{parentListEl:e}=this,n=r(t);d(n);const i=!!n.length;i&&e&&!e.openable&&(e.openable=!0),this.openable=i,i||(this.open=!1)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=()=>{this.toggleSelected(),this.calciteInternalListItemActive.emit()},this.toggleSelected=()=>{this.disabled||("none"!==this.selectionMode&&(this.selected=!this.selected),this.calciteListItemSelect.emit())},this.handleItemKeyDown=t=>{const{key:e}=t,n=t.composedPath(),{containerEl:i,contentEl:a,actionsStartEl:o,actionsEndEl:s,open:l,openable:c}=this,r=[o,a,s].filter(Boolean),d=r.findIndex((t=>n.includes(t)));if(" "===e)t.preventDefault(),this.toggleSelected();else if("ArrowRight"===e){t.preventDefault();const e=d+1;-1===d?!l&&c?(this.open=!0,this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[d]&&r[e]&&this.focusCell(r[e])}else if("ArrowLeft"===e){t.preventDefault();const e=d-1;-1===d?(this.focusCell(null),l&&c?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):0===d?(this.focusCell(null),i.focus()):r[d]&&r[e]&&this.focusCell(r[e])}},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(t,e=!0)=>{const{contentEl:n,actionsStartEl:i,actionsEndEl:a,parentListEl:o}=this;e&&v.set(o,null),[i,n,a].filter(Boolean).forEach(((n,i)=>{const a="tabindex";n===t?(n.setAttribute(a,"0"),e&&v.set(o,i)):n.removeAttribute(a)})),t?.focus()},this.active=!1,this.description=void 0,this.disabled=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1}activeHandler(t){t||this.focusCell(null,!1)}handleSelectedChange(t){t&&this.calciteInternalListItemSelect.emit()}connectedCallback(){const{el:t}=this;this.parentListEl=t.closest("calcite-list"),this.level=h(t)+1,this.visualLevel=h(t,!0),this.setSelectionDefaults()}componentWillLoad(){f(this)}componentDidLoad(){C(this)}componentDidRender(){c(this,"managed")}async setFocus(){await g(this);const{containerEl:t,contentEl:e,actionsStartEl:n,actionsEndEl:i,parentListEl:a}=this,o=v.get(a);if("number"!=typeof o)t?.focus();else{const a=[n,e,i].filter(Boolean);a[o]?this.focusCell(a[o]):t?.focus()}}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:n}=this;return"none"===e||"border"===n?null:i("td",{class:m.selectionContainer,key:"selection-container",onClick:this.itemClicked},i("calcite-icon",{icon:t?"multiple"===e?u.selectedMultiple:u.selectedSingle:u.unselected,scale:"s"}))}renderOpen(){const{el:t,open:e,openable:n,parentListEl:a}=this,o=s(t);return n?i("td",{class:m.openContainer,key:"open-container",onClick:this.toggleOpen},i("calcite-icon",{icon:e?u.open:"rtl"===o?u.closedRTL:u.closedLTR,scale:"s"})):a?.openable?i("td",{class:m.openContainer,key:"open-container",onClick:this.itemClicked},i("calcite-icon",{icon:u.blank,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return i("td",{"aria-label":t,class:m.actionsStart,hidden:!e,key:"actions-start-container",ref:t=>this.actionsStartEl=t,role:"gridcell"},i("slot",{name:p.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e}=this;return i("td",{"aria-label":t,class:m.actionsEnd,hidden:!e,key:"actions-end-container",ref:t=>this.actionsEndEl=t,role:"gridcell"},i("slot",{name:p.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:m.contentStart,hidden:!t},i("slot",{name:p.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return i("div",{class:m.customContent,hidden:!t},i("slot",{name:p.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:m.contentEnd,hidden:!t},i("slot",{name:p.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:n}=this;return n||!t&&!e?null:i("div",{class:m.content,key:"content"},t?i("div",{class:m.label,key:"label"},t):null,e?i("div",{class:m.description,key:"description"},e):null)}renderContentContainer(){const{description:t,label:e,selectionMode:n,hasCustomContent:a}=this,o=a||!!e||!!t,s=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":e,class:{[m.contentContainer]:!0,[m.contentContainerSelectable]:"none"!==n,[m.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.itemClicked,ref:t=>this.contentEl=t,role:"gridcell"},s)}render(){const{openable:t,open:e,level:n,setPosition:o,setSize:s,active:c,label:r,selected:d,selectionAppearance:h,selectionMode:u}=this,p="none"!==u&&"border"===h,f=p&&d,C=p&&!d;return i(a,null,i("tr",{"aria-expanded":t?l(e):null,"aria-label":r,"aria-level":n,"aria-posinset":o,"aria-selected":l(d),"aria-setsize":s,class:{[m.container]:!0,[m.containerBorderSelected]:f,[m.containerBorderUnselected]:C},onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,ref:t=>this.containerEl=t,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${this.visualLevel}`},tabIndex:c?0:-1},this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),i("div",{class:{[m.nestedContainer]:!0,[m.nestedContainerHidden]:t&&!e}},i("slot",{onSlotchange:this.handleDefaultSlotChange})))}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:n}=this;t&&(e||(this.selectionMode=t.selectionMode),n||(this.selectionAppearance=t.selectionAppearance))}get el(){return this}static get watchers(){return{active:["activeHandler"],selected:["handleSelectedChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],description:[1],disabled:[516],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],setFocus:[64]}]);function y(){"undefined"!=typeof customElements&&["calcite-list-item","calcite-icon"].forEach((t=>{switch(t){case"calcite-list-item":customElements.get(t)||customElements.define(t,S);break;case"calcite-icon":customElements.get(t)||b()}}))}y();const E=S,x=y;export{E as CalciteListItem,x as defineCustomElement};