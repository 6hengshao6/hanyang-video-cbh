/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,B as n,h as s,a}from"./index.js";import{f as o}from"./filter2.js";import{r as l,g as c,i as r,t as h}from"./dom.js";import{b as d,f as m,c as p,u,r as g,a as b,F as f}from"./floating-ui.js";import{s as v,c as x,a as I,d as C,H as k}from"./form.js";import{u as y}from"./interactive.js";import{c as w,d as E,g as z}from"./label2.js";import{a as H,s as F,c as D}from"./loadable.js";import{c as L,d as S}from"./locale2.js";import{c as A}from"./observers.js";import{c as O,d as M}from"./openCloseComponent.js";import{u as $,c as V,d as P,s as _}from"./t9n.js";import{C as T,g as j,a as B,h as R,b as N,c as q}from"./utils22.js";import{c as W,d as U}from"./conditionalSlot.js";import{d as G}from"./icon.js";import{d as X}from"./debounce.js";import"./key.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const Y=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipClose=i(this,"calciteChipClose",6),this.closeClickHandler=e=>{e.preventDefault(),this.calciteChipClose.emit(),this.closed=!0},this.handleSlotImageChange=e=>{this.hasImage=l(e)},this.mutationObserver=A("mutation",(()=>this.updateHasContent())),this.guid=c(),this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.value=void 0,this.closed=!1,this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasContent=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){$(this,this.effectiveLocale)}connectedCallback(){W(this),L(this),V(this),this.setupTextContentObserver()}componentDidLoad(){H(this)}disconnectedCallback(){U(this),S(this),P(this)}async componentWillLoad(){F(this),n.isBrowser&&(await _(this),this.updateHasContent())}async setFocus(){await D(this),this.closeButton?.focus()}updateHasContent(){const e=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=this.el.childNodes.length>0&&"#text"===this.el.childNodes[0]?.nodeName?this.el.textContent?.trim().length>0:e}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}renderChipImage(){return s("div",{class:"image-container",key:"image"},s("slot",{name:"image",onSlotchange:this.handleSlotImageChange}))}render(){const e=s("calcite-icon",{class:"chip-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"===this.scale?"m":"s"}),t=s("button",{"aria-describedby":this.guid,"aria-label":this.messages.dismissLabel,class:"close",onClick:this.closeClickHandler,ref:e=>this.closeButton=e},s("calcite-icon",{class:"close-icon",icon:"x",scale:"l"===this.scale?"m":"s"}));return s("div",{class:{container:!0,"content--slotted":this.hasContent,"image--slotted":this.hasImage}},this.renderChipImage(),this.icon?e:null,s("span",{class:"title",id:this.guid},s("slot",null)),this.closable?t:null)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem;padding-inline-start:0.125rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:calc(0.75rem / 2)}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.5rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-block:0}.content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable][icon]) .container:not(.content--slotted) .title{padding-inline:0 var(--calcite-chip-spacing-unit-s)}:host(:not([closable])) .container:not(.content--slotted) .chip-icon{margin-inline:auto}.container:not(.image--slotted) .image-container{display:none}:host([scale=s][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.125rem}:host([scale=m][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.25rem}:host([scale=l][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted){block-size:1.5rem;inline-size:1.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.125rem}:host([scale=m]:not([closable])) .container:not(.content--slotted){block-size:2rem;inline-size:2rem}:host([scale=m]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.25rem}:host([scale=l]:not([closable])) .container:not(.content--slotted){block-size:2.75rem;inline-size:2.75rem}:host([scale=l]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:calc(0.75rem / 2)}:host([closable]) .content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([scale=s]) button{inline-size:1rem;block-size:1rem;margin-inline-end:0.125rem}:host([scale=m]) button{inline-size:1.5rem;block-size:1.5rem;margin-inline-end:0.25rem}:host([scale=l]) button{inline-size:2rem;block-size:2rem;margin-inline-end:0.5rem}button{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}button:hover{background-color:var(--calcite-chip-transparent-hover)}button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l)}:host([kind=neutral]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button,:host([kind=neutral]) .close-icon{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){border-color:transparent;background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) button,:host([kind=inverse]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){border-color:transparent;background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button,:host([kind=brand]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) .close-icon,:host([appearance=outline]) button,:host([appearance=outline]) .close-icon{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]),:host([kind=neutral][appearance=outline]){border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]),:host([kind=inverse][appearance=outline]){border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]),:host([kind=brand][appearance=outline]){border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}"}},[1,"calcite-chip",{appearance:[513],kind:[513],closable:[1540],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],value:[8],closed:[1540],messageOverrides:[1040],messages:[1040],defaultMessages:[32],effectiveLocale:[32],hasContent:[32],hasImage:[32],setFocus:[64]}]);function K(){"undefined"!=typeof customElements&&["calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,Y);break;case"calcite-icon":customElements.get(e)||G()}}))}K();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
const J="combobox-item-",Q="combobox-chip-",Z="combobox-label-",ee="combobox-listbox-",te="combobox-input-",ie=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxChange=i(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=i(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipClose=i(this,"calciteComboboxChipClose",6),this.calciteComboboxBeforeClose=i(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=i(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=i(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=i(this,"calciteComboboxOpen",6),this.placement=d,this.internalValueChangeFlag=!1,this.textInput=null,this.mutationObserver=A("mutation",(()=>this.updateItems())),this.resizeObserver=A("resize",(()=>this.setMaxScrollerHeight())),this.guid=c(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?m(t,e):null},this.getValue=()=>{const e=this.selectedItems.map((e=>e?.value?.toString()));return e?.length?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keydownHandler=e=>{const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):this.open&&(this.open=!1,e.preventDefault());break;case"ArrowLeft":this.previousChip(),e.preventDefault();break;case"ArrowRight":this.nextChip(),e.preventDefault();break;case"ArrowUp":e.preventDefault(),this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView();break;case"ArrowDown":e.preventDefault(),this.open||(this.open=!0),this.shiftActiveItemIndex(1),this.comboboxInViewport()||this.el.scrollIntoView();break;case" ":this.textInput.value||(e.preventDefault(),this.open=!0,this.shiftActiveItemIndex(1));break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":this.open=!1,e.preventDefault();break;case"Enter":this.activeItemIndex>-1?(this.toggleSelection(this.filteredItems[this.activeItemIndex]),e.preventDefault()):this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):e.defaultPrevented||v(this)&&e.preventDefault();break;case"Delete":case"Backspace":this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(e.preventDefault(),this.removeLastChip())}},this.toggleCloseEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.setMaxScrollerHeight=async()=>{const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const n=this.getMaxScrollerHeight();e.style.maxHeight=n>0?`${n}px`:"",e.style.minWidth=`${i.clientWidth}px`,await this.reposition(!0)},this.calciteChipCloseHandler=e=>{this.open=!1;const t=this.items.find((t=>t===e));t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()},this.clickHandler=e=>{e.composedPath().some((e=>"CALCITE-CHIP"===e.tagName))||(this.open=!this.open,this.updateActiveItemIndex(0),this.setFocus())},this.setInactiveIfNotContained=e=>{const t=e.composedPath();!this.open||t.includes(this.el)||t.includes(this.referenceEl)||(this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),"single"===this.selectionMode&&(this.textInput&&(this.textInput.value=""),this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.open=!1)},this.setFloatingEl=e=>{this.floatingEl=e,p(this,this.referenceEl,this.floatingEl)},this.setContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e,this.transitionEl=e,O(this)},this.setReferenceEl=e=>{this.referenceEl=e,p(this,this.referenceEl,this.floatingEl)},this.inputHandler=e=>{const t=e.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const e=(e,t)=>e&&t.some((({label:t,value:i})=>e.tagName===q?i===e.label:i===e.textLabel||i===e.value||t===e.textLabel||t===e.value));return X((t=>{const i=o(this.data,t);this.getCombinedItems().forEach((t=>{const n=!e(t,i);t.hidden=n;const[s,a]=t.ancestors;(e(s,i)||e(a,i))&&(t.hidden=!1),n||t.ancestors.forEach((e=>e.hidden=!1))})),this.filteredItems=this.getfilteredItems(),this.calciteComboboxFilterChange.emit()}),100)})(),this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()},this.emitComboboxChange=X(this.internalComboboxChangeEvent,0),this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getfilteredItems(),this.needsIcon=this.getNeedsIcon(),this.allowCustomValues||this.setMaxScrollerHeight()},this.scrollToActiveItem=()=>{const e=this.filteredItems[this.activeItemIndex];if(!e)return;const t=this.calculateSingleItemHeight(e),{offsetHeight:i,scrollTop:n}=this.listContainerEl;i+n<e.offsetTop+t?this.listContainerEl.scrollTop=e.offsetTop-i+t:e.offsetTop<n&&(this.listContainerEl.scrollTop=e.offsetTop)},this.comboboxFocusHandler=()=>{this.textInput?.focus()},this.comboboxBlurHandler=e=>{this.setInactiveIfNotContained(e)},this.open=!1,this.disabled=!1,this.label=void 0,this.placeholder=void 0,this.placeholderIcon=void 0,this.placeholderIconFlipRtl=!1,this.maxItems=0,this.name=void 0,this.allowCustomValues=void 0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multiple",this.scale="m",this.value=null,this.flipPlacements=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedItems=[],this.filteredItems=[],this.items=[],this.groupItems=[],this.needsIcon=void 0,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(e){e||u(this.floatingEl),this.disabled?this.open=!1:this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach((t=>t.selected=e.includes(t.value))):e?t.forEach((t=>t.selected=e===t.value)):t.forEach((e=>e.selected=!1)),this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}documentClickHandler(e){r(e)&&this.setInactiveIfNotContained(e)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.filteredItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:n,overlayPositioning:s,filteredFlipPlacements:a}=this;return g(this,{floatingEl:t,referenceEl:i,overlayPositioning:s,placement:n,flipPlacements:a,type:"menu"},e)}async setFocus(){await D(this),this.textInput?.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){L(this),V(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),w(this),x(this),O(this),this.setFilteredPlacements(),this.reposition(!0),this.open&&this.openHandler(this.open)}async componentWillLoad(){F(this),this.updateItems(),await _(this)}componentDidLoad(){I(this,this.getValue()),this.reposition(!0),H(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),y(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),E(this),C(this),b(this,this.referenceEl,this.floatingEl),M(this),S(this),P(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){$(this,this.effectiveLocale)}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}getMaxScrollerHeight(){const e=this.getCombinedItems().filter((e=>!e.hidden)),{maxItems:t}=this;let i=0,n=0;return e.length>t&&e.forEach((e=>{if(i<t&&t>0){const t=this.calculateSingleItemHeight(e);t>0&&(n+=t,i++)}})),n}calculateSingleItemHeight(e){if(!e)return;let t=e.offsetHeight;return Array.from(e.querySelectorAll(T)).map((e=>e?.offsetHeight)).forEach((e=>{t-=e})),t}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(e,t=!e.selected){e&&(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach((i=>i.selected=i===e&&t)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=e.textLabel),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if("ancestors"!==this.selectionMode)return;const t=j(e),i=B(e);e.selected?t.forEach((e=>{e.selected=!0})):(i.forEach((e=>e.selected=!1)),[...t].forEach((e=>{R(e)||(e.selected=!1)})))}getfilteredItems(){return this.items.filter((e=>!e.hidden))}getSelectedItems(){if(!this.isMulti()){const e=this.items.find((({selected:e})=>e));return e?[e]:[]}return this.items.filter((e=>e.selected&&("ancestors"!==this.selectionMode||!R(e)))).sort(((e,t)=>{const i=this.selectedItems.indexOf(e),n=this.selectedItems.indexOf(t);return i>-1&&n>-1?i-n:n-i}))}getData(){return this.items.map((e=>({filterDisabled:e.filterDisabled,value:e.value,label:e.textLabel})))}getNeedsIcon(){return"single"===this.selectionMode&&this.items.some((e=>e.icon))}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(N)).filter((e=>!e.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(q))}addCustomChip(e,t){const i=this.items.find((t=>t.textLabel===e));if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const i=document.createElement(N);i.value=e,i.textLabel=e,i.selected=!0,this.el.appendChild(i),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=-1===t?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){const e=this.selectedItems[this.activeChipIndex]?.guid,t=e?this.referenceEl.querySelector(`#${Q}${e}`):null;t?.setFocus()}shiftActiveItemIndex(e){const{length:t}=this.filteredItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveItem()}updateActiveItemIndex(e){this.activeItemIndex=e;let t=null;this.filteredItems.forEach(((i,n)=>{n===e?(i.active=!0,t=`${J}${i.guid}`):i.active=!1})),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isMulti(){return"single"!==this.selectionMode}renderChips(){const{activeChipIndex:e,scale:t,selectionMode:i,messages:n}=this;return this.selectedItems.map(((a,o)=>{const l={chip:!0,"chip--active":e===o},c=[...[...j(a)].reverse(),a].map((e=>e.textLabel)),r="ancestors"!==i?a.textLabel:c.join(" / ");return s("calcite-chip",{class:l,closable:!0,icon:a.icon,iconFlipRtl:a.iconFlipRtl,id:a.guid?`${Q}${a.guid}`:null,key:a.textLabel,messageOverrides:{dismissLabel:n.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(a),scale:t,title:r,value:a.value},r)}))}renderInput(){const{guid:e,disabled:t,placeholder:i,selectionMode:n,selectedItems:a,open:o}=this,l="single"===n,c=a[0],r=!o&&l&&!!c;return s("span",{class:{"input-wrap":!0,"input-wrap--single":l}},r&&s("span",{class:{label:!0,"label--icon":!!c?.icon},key:"label"},c.textLabel),s("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${ee}${e}`,"aria-label":z(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":r,"input--icon":!!this.placeholderIcon},disabled:t,id:`${te}${e}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:i,ref:e=>this.textInput=e,type:"text"}))}renderListBoxOptions(){return this.filteredItems.map((e=>s("li",{"aria-selected":h(e.selected),id:e.guid?`${J}${e.guid}`:null,role:"option",tabindex:"-1"},e.textLabel)))}renderFloatingUIContainer(){const{setFloatingEl:e,setContainerEl:t,open:i}=this,n={"list-container":!0,[f.animation]:!0,[f.animationActive]:i};return s("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":i},ref:e},s("div",{class:n,ref:t},s("ul",{class:{list:!0,"list--hide":!i}},s("slot",null))))}renderIconStart(){const{selectedItems:e,placeholderIcon:t,selectionMode:i,placeholderIconFlipRtl:n}=this,a=e[0],o=a?.icon,l="single"===i;return(!this.open&&a?!!o&&l:!!this.placeholderIcon&&(!a||l))&&s("span",{class:"icon-start"},s("calcite-icon",{class:"selected-icon",flipRtl:this.open&&a?a.iconFlipRtl:n,icon:!this.open&&a?o:t,scale:"s"}))}renderIconEnd(){const{open:e}=this;return s("span",{class:"icon-end"},s("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:"s"}))}render(){const{guid:e,label:t,open:i}=this,n="single"===this.selectionMode;return s(a,{onClick:this.comboboxFocusHandler},s("div",{"aria-autocomplete":"list","aria-controls":`${ee}${e}`,"aria-expanded":h(i),"aria-haspopup":"listbox","aria-label":z(this),"aria-live":"polite","aria-owns":`${ee}${e}`,class:{wrapper:!0,"wrapper--single":n||!this.selectedItems.length,"wrapper--active":i},onClick:this.clickHandler,onKeyDown:this.keydownHandler,ref:this.setReferenceEl,role:"combobox"},s("div",{class:"grid-input"},this.renderIconStart(),!n&&this.renderChips(),s("label",{class:"screen-readers-only",htmlFor:`${te}${e}`,id:`${Z}${e}`},t),this.renderInput()),this.renderIconEnd()),s("ul",{"aria-labelledby":`${Z}${e}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${ee}${e}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),s(k,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},[1,"calcite-combobox",{open:[1540],disabled:[516],label:[1],placeholder:[1],placeholderIcon:[513,"placeholder-icon"],placeholderIconFlipRtl:[516,"placeholder-icon-flip-rtl"],maxItems:[514,"max-items"],name:[513],allowCustomValues:[516,"allow-custom-values"],overlayPositioning:[513,"overlay-positioning"],required:[516],selectionMode:[513,"selection-mode"],scale:[513],value:[1025],flipPlacements:[16],messages:[1040],messageOverrides:[1040],selectedItems:[1040],filteredItems:[1040],items:[32],groupItems:[32],needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],text:[32],effectiveLocale:[32],defaultMessages:[32],reposition:[64],setFocus:[64]},[[5,"pointerdown","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"]]]);function ne(){"undefined"!=typeof customElements&&["calcite-combobox","calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox":customElements.get(e)||customElements.define(e,ie);break;case"calcite-chip":customElements.get(e)||K();break;case"calcite-icon":customElements.get(e)||G()}}))}ne();const se=ie,ae=ne;export{se as CalciteCombobox,ae as defineCustomElement};