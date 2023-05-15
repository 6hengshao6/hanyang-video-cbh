// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./key ./locale ./t9n ./icon ./switch".split(" "),function(l,b,m,u,p,h,v,w){function q(){"undefined"!==typeof customElements&&["calcite-block-section","calcite-icon","calcite-switch"].forEach(a=>{switch(a){case "calcite-block-section":customElements.get(a)||customElements.define(a,r);break;case "calcite-icon":customElements.get(a)||v.defineCustomElement();break;case "calcite-switch":customElements.get(a)||w.defineCustomElement()}})}const k={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",
menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},r=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteBlockSectionToggle=b.createEvent(this,"calciteBlockSectionToggle",6);this.guid=m.guid();this.handleHeaderKeyDown=a=>{u.isActivationKey(a.key)&&(this.toggleSection(),a.preventDefault(),a.stopPropagation())};this.toggleSection=()=>{this.open=!this.open;this.calciteBlockSectionToggle.emit()};this.open=
!1;this.text=this.status=void 0;this.toggleDisplay="button";this.defaultMessages=this.effectiveLocale=this.messageOverrides=this.messages=void 0}onMessagesChange(){}effectiveLocaleChange(){h.updateMessages(this,this.effectiveLocale)}connectedCallback(){p.connectLocalized(this);h.connectMessages(this)}disconnectedCallback(){p.disconnectLocalized(this);h.disconnectMessages(this)}async componentWillLoad(){await h.setUpMessages(this)}renderStatusIcon(){var {status:a}=this;const d=k[a]??!1;a={["status-icon"]:!0,
valid:"valid"==a,invalid:"invalid"==a};return d?b.h("calcite-icon",{class:a,icon:d,scale:"s"}):null}render(){const {el:a,messages:d,open:e,text:t,toggleDisplay:x}=this;var f=m.getElementDir(a),n=e?k.menuOpen:"rtl"===f?k.menuClosedLeft:k.menuClosedRight;const g=e?d.collapse:d.expand;var {guid:c}=this;f=`${c}-region`;c=`${c}-button`;n="switch"===x?b.h("div",{"aria-controls":f,"aria-label":g,class:{toggle:!0,["toggle--switch"]:!0},id:c,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,
title:g},b.h("div",{class:"toggle--switch__content"},b.h("span",{class:"toggle--switch__text"},t)),b.h("calcite-switch",{checked:e,label:g,scale:"s",tabIndex:-1}),this.renderStatusIcon()):b.h("button",{"aria-controls":f,"aria-label":g,class:{["section-header"]:!0,toggle:!0},id:c,name:g,onClick:this.toggleSection},b.h("calcite-icon",{icon:n,scale:"s"}),b.h("span",{class:"section-header__text"},t),this.renderStatusIcon());return b.h(b.Host,null,n,b.h("section",{"aria-expanded":m.toAriaBoolean(e),"aria-labelledby":c,
class:"content",hidden:!e,id:f},b.h("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}"}},
[1,"calcite-block-section",{open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32]}]);q();l.CalciteBlockSection=r;l.defineCustomElement=q;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});