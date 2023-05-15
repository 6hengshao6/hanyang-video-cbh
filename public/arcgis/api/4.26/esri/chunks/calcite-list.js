// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./interactive ./observers ./utils3 ./loadable ./filter2 ./locale ./t9n ./icon ./input ./progress ./debounce ./loader ./scrim".split(" "),function(n,d,C,t,D,p,k,u,v,m,w,x,y,q,E,F){function z(){"undefined"!==typeof customElements&&["calcite-filter","calcite-icon","calcite-input","calcite-progress"].forEach(a=>{switch(a){case "calcite-filter":customElements.get(a)||customElements.define(a,G);break;case "calcite-icon":customElements.get(a)||w.defineCustomElement();break;
case "calcite-input":customElements.get(a)||x.defineCustomElement();break;case "calcite-progress":customElements.get(a)||y.defineCustomElement()}})}function A(){"undefined"!==typeof customElements&&"calcite-list calcite-filter calcite-icon calcite-input calcite-loader calcite-progress calcite-scrim".split(" ").forEach(a=>{switch(a){case "calcite-list":customElements.get(a)||customElements.define(a,B);break;case "calcite-filter":customElements.get(a)||z();break;case "calcite-icon":customElements.get(a)||
w.defineCustomElement();break;case "calcite-input":customElements.get(a)||x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||E.defineCustomElement();break;case "calcite-progress":customElements.get(a)||y.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||F.defineCustomElement()}})}const G=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteFilterChange=d.createEvent(this,"calciteFilterChange",
6);this.filter=q.debounce((a,c=!1)=>this.updateFiltered(u.filter(this.items,a),c),250);this.inputHandler=a=>{a=a.target;this.value=a.value;this.filter(a.value,!0)};this.keyDownHandler=a=>{"Escape"===a.key&&(this.clear(),a.preventDefault());"Enter"===a.key&&a.preventDefault()};this.clear=()=>{this.value="";this.filter("",!0);this.setFocus()};this.items=[];this.disabled=!1;this.filteredItems=[];this.placeholder=void 0;this.scale="m";this.value="";this.defaultMessages=this.effectiveLocale=this.messageOverrides=
this.messages=void 0}watchItemsHandler(){this.filter(this.value)}onMessagesChange(){}valueHandler(a){this.filter(a)}effectiveLocaleChange(){m.updateMessages(this,this.effectiveLocale)}async componentWillLoad(){k.setUpLoadableComponent(this);this.updateFiltered(u.filter(this.items,this.value));await m.setUpMessages(this)}connectedCallback(){v.connectLocalized(this);m.connectMessages(this)}componentDidRender(){t.updateHostInteraction(this)}disconnectedCallback(){v.disconnectLocalized(this);m.disconnectMessages(this)}componentDidLoad(){k.setComponentLoaded(this)}async setFocus(){await k.componentLoaded(this);
this.el?.focus()}updateFiltered(a,c=!1){this.filteredItems.length=0;this.filteredItems=this.filteredItems.concat(a);c&&this.calciteFilterChange.emit()}render(){const {disabled:a,scale:c}=this;return d.h(d.Fragment,null,d.h("div",{class:"container"},d.h("label",null,d.h("calcite-input",{"aria-label":this.messages.label,clearable:!0,disabled:a,icon:"search",messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:b=>
{this.textInput=b},scale:c,type:"text",value:this.value}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{items:["watchItemsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type\x3dtext]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type\x3dtext]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type\x3dtext]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type\x3dtext]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}"}},
[17,"calcite-filter",{items:[1040],disabled:[516],filteredItems:[1040],placeholder:[1],scale:[513],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);z();const B=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteListFilter=d.createEvent(this,"calciteListFilter",6);this.listItems=[];this.enabledListItems=[];this.mutationObserver=D.createObserver("mutation",()=>this.updateListItems());
this.handleDefaultSlotChange=a=>{p.updateListItemChildren(p.getListItemChildren(a))};this.setActiveListItem=()=>{const {enabledListItems:a}=this;!a.some(c=>c.active)&&a[0]&&(a[0].active=!0)};this.updateSelectedItems=q.debounce(()=>{this.selectedItems=this.enabledListItems.filter(a=>a.selected)},100);this.updateFilteredItems=q.debounce(()=>{const {listItems:a,filteredData:c,filterText:b}=this,e=c.map(g=>g.value),h=new Set,l=a?.filter(g=>{var f=g.parentElement;f.matches("calcite-list-item-group")&&
h.add(f);f=b?e.includes(g.value):!0;g.hidden=!f;return f})||[];this.filteredItems=l;h.forEach(g=>{var f=l.some(r=>g.contains(r));g.hidden=!f;f&&(f=g.closest("calcite-list-item"))&&(f.hidden=!1,l.includes(f)&&Array.from(g.querySelectorAll("calcite-list-item")).forEach(r=>r.hidden=!1))});h.clear()});this.handleFilter=a=>{a.stopPropagation();const {filteredItems:c,value:b}=a.currentTarget;this.filteredData=c;this.filterText=b;this.updateFilteredItems();this.calciteListFilter.emit()};this.getItemData=
()=>this.listItems.map(a=>({label:a.label,description:a.description,metadata:a.metadata,value:a.value}));this.queryListItems=()=>Array.from(this.el.querySelectorAll("calcite-list-item"));this.focusRow=a=>{const {enabledListItems:c}=this;a&&(c.forEach(b=>b.active=b===a),a.setFocus())};this.isNavigable=a=>(a=a.parentElement?.closest("calcite-list-item"))?a.open&&this.isNavigable(a):!0;this.handleListKeydown=a=>{const {key:c}=a;var b=this.enabledListItems.filter(h=>this.isNavigable(h));const e=b.findIndex(h=>
h.active);"ArrowDown"===c?(a.preventDefault(),a=e+1,b[a]&&this.focusRow(b[a])):"ArrowUp"===c?(a.preventDefault(),a=e-1,b[a]&&this.focusRow(b[a])):"Home"===c?(a.preventDefault(),(b=b[0])&&this.focusRow(b)):"End"===c&&(a.preventDefault(),(b=b[b.length-1])&&this.focusRow(b))};this.filterEnabled=this.disabled=!1;this.filteredItems=[];this.filteredData=[];this.label=this.filterText=this.filterPlaceholder=void 0;this.openable=this.loading=!1;this.selectedItems=[];this.selectionMode="none";this.selectionAppearance=
"icon";this.dataForFilter=[]}handleFilterEnabledChange(){this.updateListItems()}handleSelectionAppearanceChange(){this.updateListItems()}handleCalciteInternalFocusPreviousItem(a){a.stopPropagation();({enabledListItems:a}=this);const c=a.findIndex(b=>b.active)-1;a[c]&&this.focusRow(a[c])}handleCalciteListItemActive(a){const c=a.target;({listItems:a}=this);a.forEach(b=>{b.active=b===c})}handleCalciteListItemSelect(a){const c=a.target,{listItems:b,selectionMode:e}=this;b.forEach(h=>{"single"===e&&(h.selected=
h===c)});this.updateSelectedItems()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0});this.updateListItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}componentWillLoad(){k.setUpLoadableComponent(this)}componentDidRender(){t.updateHostInteraction(this)}componentDidLoad(){k.setComponentLoaded(this);var {filterEl:a}=this;if(a=a?.filteredItems)this.filteredData=a;this.updateFilteredItems()}async setFocus(){await k.componentLoaded(this);this.enabledListItems.find(a=>
a.active)?.setFocus()}render(){const {loading:a,label:c,disabled:b,dataForFilter:e,filterEnabled:h,filterPlaceholder:l,filterText:g}=this;return d.h("div",{class:"container"},a?d.h("calcite-scrim",{class:"scrim",loading:a}):null,d.h("table",{"aria-busy":C.toAriaBoolean(a),"aria-label":c||"",class:"table",onKeyDown:this.handleListKeydown,role:"treegrid"},h?d.h("thead",null,d.h("tr",{class:{["sticky-pos"]:!0}},d.h("th",{colSpan:p.MAX_COLUMNS},d.h("calcite-filter",{"aria-label":l,disabled:a||b,items:e,
onCalciteFilterChange:this.handleFilter,placeholder:l,ref:f=>this.filterEl=f,value:g})))):null,d.h("tbody",{class:"table-container"},d.h("slot",{onSlotchange:this.handleDefaultSlotChange}))))}updateListItems(){const {selectionAppearance:a,selectionMode:c}=this,b=this.queryListItems();b.forEach(e=>{e.selectionAppearance=a;e.selectionMode=c});this.listItems=b;this.enabledListItems=b.filter(e=>!e.disabled);this.filterEnabled&&(this.dataForFilter=this.getItemData());this.setActiveListItem();this.updateSelectedItems();
this.updateFilteredItems()}get el(){return this}static get watchers(){return{filterEnabled:["handleFilterEnabledChange"],selectionMode:["handleSelectionAppearanceChange"],selectionAppearance:["handleSelectionAppearanceChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{position:relative;z-index:1;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}"}},
[1,"calcite-list",{disabled:[516],filterEnabled:[516,"filter-enabled"],filteredItems:[1040],filteredData:[1040],filterPlaceholder:[513,"filter-placeholder"],filterText:[1537,"filter-text"],label:[1],loading:[516],openable:[4],selectedItems:[1040],selectionMode:[513,"selection-mode"],selectionAppearance:[513,"selection-appearance"],dataForFilter:[32],setFocus:[64]},[[0,"calciteInternalFocusPreviousItem","handleCalciteInternalFocusPreviousItem"],[0,"calciteInternalListItemActive","handleCalciteListItemActive"],
[0,"calciteInternalListItemSelect","handleCalciteListItemSelect"]]]);A();n.CalciteList=B;n.defineCustomElement=A;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});