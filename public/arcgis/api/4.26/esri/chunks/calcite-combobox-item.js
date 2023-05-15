// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./interactive ./utils2 ./icon".split(" "),function(d,b,f,c,m,g,n){function h(){"undefined"!==typeof customElements&&["calcite-combobox-item","calcite-icon"].forEach(a=>{switch(a){case "calcite-combobox-item":customElements.get(a)||customElements.define(a,k);break;case "calcite-icon":customElements.get(a)||n.defineCustomElement()}})}const k=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteComboboxItemChange=
b.createEvent(this,"calciteComboboxItemChange",6);this.scale="m";this.itemClickHandler=a=>{a.preventDefault();this.toggleSelected()};this.active=this.selected=this.disabled=!1;this.ancestors=void 0;this.guid=c.guid();this.icon=void 0;this.iconFlipRtl=!1;this.filterDisabled=this.value=this.textLabel=void 0}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=g.getAncestors(this.el);this.scale=c.getElementProp(this.el,"scale",this.scale);f.connectConditionalSlotComponent(this)}disconnectedCallback(){f.disconnectConditionalSlotComponent(this)}componentDidRender(){m.updateHostInteraction(this)}toggleSelected(a){this.disabled||
(this.selected="boolean"===typeof a?a:!this.selected)}renderIcon(a){return this.icon?b.h("calcite-icon",{class:{["icon--custom"]:!!this.icon,["icon--active"]:this.icon&&this.selected,["icon--indent"]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||a,key:"icon",scale:"l"===this.scale?"m":"s"}):null}renderSelectIndicator(a,e){return a?b.h("span",{class:{icon:!0,["icon--dot"]:!0,["icon--indent"]:!0}}):b.h("calcite-icon",{class:{icon:!0,["icon--active"]:this.selected,["icon--indent"]:!0},flipRtl:this.iconFlipRtl,
icon:e,key:"indicator",scale:"l"===this.scale?"m":"s"})}renderChildren(){return c.getSlotted(this.el)?b.h("ul",{key:"default-slot-container"},b.h("slot",null)):null}render(){var a="single"===c.getElementProp(this.el,"selection-mode","multiple");const e=a&&!this.disabled,l=this.disabled?"circle-disallowed":a?"dot":"check";a={label:!0,["label--selected"]:this.selected,["label--active"]:this.active,["label--single"]:a};const p=g.getDepth(this.el);return b.h(b.Host,{"aria-hidden":"true"},b.h("div",{class:`container scale--${this.scale}`,
style:{"--calcite-combobox-item-spacing-indent-multiplier":`${p}`}},b.h("li",{class:a,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(e,l),this.renderIcon(l),b.h("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return'@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"\u2022"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}'}},
[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[516],ancestors:[1040],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],textLabel:[513,"text-label"],value:[8],filterDisabled:[516,"filter-disabled"]}]);h();d.CalciteComboboxItem=k;d.defineCustomElement=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});