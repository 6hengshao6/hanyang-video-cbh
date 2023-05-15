/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{p as t,H as e,c as i,B as a,h as n,a as s}from"./index.js";import{g as o,p as r,t as c,e as l}from"./dom.js";import{u as d}from"./interactive.js";import{c as h}from"./observers.js";import{d as b}from"./icon.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const m="calcite-tab-title--icon",p=t(class extends e{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabsActivate=i(this,"calciteTabsActivate",6),this.calciteInternalTabsActivate=i(this,"calciteInternalTabsActivate",6),this.calciteInternalTabsFocusNext=i(this,"calciteInternalTabsFocusNext",6),this.calciteInternalTabsFocusPrevious=i(this,"calciteInternalTabsFocusPrevious",6),this.calciteInternalTabsFocusFirst=i(this,"calciteInternalTabsFocusFirst",6),this.calciteInternalTabsFocusLast=i(this,"calciteInternalTabsFocusLast",6),this.calciteInternalTabTitleRegister=i(this,"calciteInternalTabTitleRegister",6),this.calciteInternalTabIconChanged=i(this,"calciteInternalTabIconChanged",6),this.mutationObserver=h("mutation",(()=>this.updateHasText())),this.resizeObserver=h("resize",(()=>{this.calciteInternalTabIconChanged.emit()})),this.guid=`calcite-tab-title-${o()}`,this.selected=!1,this.disabled=!1,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.layout=void 0,this.position=void 0,this.scale=void 0,this.bordered=!1,this.tab=void 0,this.controls=void 0,this.hasText=!1}selectedHandler(){this.selected&&this.emitActiveTab(!1)}connectedCallback(){this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){this.mutationObserver?.disconnect(),document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el})),this.resizeObserver?.disconnect()}componentWillLoad(){a.isBrowser&&this.updateHasText(),this.tab&&this.selected&&this.emitActiveTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered),!this.parentTabsEl&&this.parentTabNavEl&&(this.position=r(this.parentTabNavEl,"position",this.position),this.scale=r(this.parentTabNavEl,"scale",this.scale))}render(){const t=this.el.id||this.guid,e=n("calcite-icon",{class:{[m]:!0,"icon-start":!0},flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"l"===this.scale?"m":"s"}),i=n("calcite-icon",{class:{[m]:!0,"icon-end":!0},flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"l"===this.scale?"m":"s"});return n(s,{"aria-controls":this.controls,"aria-selected":c(this.selected),id:t,role:"tab",tabIndex:this.selected?0:-1},n("div",{class:{container:!0,"icon-present":!(!this.iconStart&&!this.iconEnd)||null,"container--has-text":this.hasText},ref:t=>this.resizeObserver?.observe(t)},this.iconStart?e:null,n("slot",null),this.iconEnd?i:null))}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){d(this,(()=>this.selected))}internalTabChangeHandler(t){t.composedPath().find((t=>"CALCITE-TABS"===t.tagName))===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then((e=>{this.selected=e===t.detail.tab})),t.stopPropagation())}onClick(){this.emitActiveTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":t.preventDefault(),"ltr"===l(this.el)?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case"ArrowLeft":t.preventDefault(),"ltr"===l(this.el)?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit();break;case"Home":t.preventDefault(),this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault(),this.calciteInternalTabsFocusLast.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],e=[]){this.controls=t[e.indexOf(this.el.id)]||null}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}emitActiveTab(t=!0){if(this.disabled)return;const e={tab:this.tab};this.calciteInternalTabsActivate.emit(e),t&&this.calciteTabsActivate.emit()}get el(){return this}static get watchers(){return{selected:["selectedHandler"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px;margin-inline-end:1.25rem}:host([layout=center]){margin-block:0px;margin-inline:1.25rem;text-align:center;flex-basis:12rem;margin:auto}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host .container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){margin-inline-end:1rem}:host([scale=s]) .container{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){margin-inline-end:1.5rem}:host([scale=l]) .container{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([bordered]) .container{border-block-end-style:unset;border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .container{padding-inline:0.75rem}:host([bordered][scale=s]) .container{padding-inline:0.5rem}:host([bordered][scale=l]) .container{padding-inline:1rem}:host([bordered][scale=l]) .icon-present{padding-block:11px}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}}"}},[1,"calcite-tab-title",{selected:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1537],scale:[1537],bordered:[1540],tab:[513],controls:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]);function u(){"undefined"!=typeof customElements&&["calcite-tab-title","calcite-icon"].forEach((t=>{switch(t){case"calcite-tab-title":customElements.get(t)||customElements.define(t,p);break;case"calcite-icon":customElements.get(t)||b()}}))}u();export{p as T,u as d};
