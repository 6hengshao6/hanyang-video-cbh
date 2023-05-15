// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./locale ./t9n ./action-menu ./action ./icon ./loader ./popover".split(" "),function(e,b,g,h,k,d,f,r,t,u,v){function l(){"undefined"!==typeof customElements&&"calcite-action-group calcite-action calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-group":customElements.get(a)||customElements.define(a,m);break;case "calcite-action":customElements.get(a)||r.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||
f.defineCustomElement();break;case "calcite-icon":customElements.get(a)||t.defineCustomElement();break;case "calcite-loader":customElements.get(a)||u.defineCustomElement();break;case "calcite-popover":customElements.get(a)||v.defineCustomElement()}})}const c={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.setMenuOpen=a=>{this.menuOpen=!!a.target.open};this.expanded=!1;this.layout=
"vertical";this.columns=void 0;this.menuOpen=!1;this.messageOverrides=this.messages=this.scale=void 0;this.effectiveLocale="";this.defaultMessages=void 0}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){d.updateMessages(this,this.effectiveLocale)}connectedCallback(){k.connectLocalized(this);d.connectMessages(this);g.connectConditionalSlotComponent(this)}disconnectedCallback(){k.disconnectLocalized(this);d.disconnectMessages(this);g.disconnectConditionalSlotComponent(this)}async componentWillLoad(){await d.setUpMessages(this)}renderTooltip(){const {el:a}=
this;return h.getSlotted(a,c.menuTooltip)?b.h("slot",{name:c.menuTooltip,slot:f.SLOTS.tooltip}):null}renderMenu(){const {el:a,expanded:n,menuOpen:w,scale:p,layout:x,messages:q}=this;return h.getSlotted(a,c.menuActions)?b.h("calcite-action-menu",{expanded:n,flipPlacements:["left","right"],label:q.more,onCalciteActionMenuOpen:this.setMenuOpen,open:w,placement:"horizontal"===x?"bottom-start":"leading-start",scale:p},b.h("calcite-action",{icon:"ellipsis",scale:p,slot:f.SLOTS.trigger,text:q.more,textEnabled:n}),
b.h("slot",{name:c.menuActions}),this.renderTooltip()):null}render(){return b.h(b.Fragment,null,b.h("slot",null),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns\x3d"1"]){--calcite-action-group-columns:1}:host([columns\x3d"2"]){--calcite-action-group-columns:2}:host([columns\x3d"3"]){--calcite-action-group-columns:3}:host([columns\x3d"4"]){--calcite-action-group-columns:4}:host([columns\x3d"5"]){--calcite-action-group-columns:5}:host([columns\x3d"6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout\x3dhorizontal]){flex-direction:row}:host([layout\x3dgrid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}'}},
[17,"calcite-action-group",{expanded:[516],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32]}]);l();e.ActionGroup=m;e.SLOTS=c;e.defineCustomElement=l});