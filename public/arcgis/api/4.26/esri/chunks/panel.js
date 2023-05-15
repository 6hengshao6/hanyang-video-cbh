// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./interactive ./loadable ./observers ./action-menu ./Heading ./locale ./t9n ./action ./icon ./loader ./popover ./scrim".split(" "),function(l,b,n,u,m,v,p,w,q,k,x,y,z,A,B){function r(){"undefined"!==typeof customElements&&"calcite-panel calcite-action calcite-action-menu calcite-icon calcite-loader calcite-popover calcite-scrim".split(" ").forEach(a=>{switch(a){case "calcite-panel":customElements.get(a)||customElements.define(a,t);break;case "calcite-action":customElements.get(a)||
x.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||p.defineCustomElement();break;case "calcite-icon":customElements.get(a)||y.defineCustomElement();break;case "calcite-loader":customElements.get(a)||z.defineCustomElement();break;case "calcite-popover":customElements.get(a)||A.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||B.defineCustomElement()}})}const f={headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",
headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},t=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calcitePanelClose=b.createEvent(this,"calcitePanelClose",6);this.calcitePanelScroll=b.createEvent(this,"calcitePanelScroll",6);this.resizeObserver=v.createObserver("resize",()=>this.resizeHandler());this.resizeHandler=()=>{const {panelScrollEl:a}=this;a&&"number"===typeof a.scrollHeight&&"number"===
typeof a.offsetHeight&&(a.tabIndex=a.scrollHeight>a.offsetHeight?0:-1)};this.setContainerRef=a=>{this.containerEl=a};this.setCloseRef=a=>{this.closeButtonEl=a};this.setBackRef=a=>{this.backButtonEl=a};this.panelKeyDownHandler=a=>{this.closable&&"Escape"===a.key&&!a.defaultPrevented&&(this.close(),a.preventDefault())};this.close=()=>{this.closed=!0;this.calcitePanelClose.emit()};this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()};this.handleHeaderActionsStartSlotChange=a=>{this.hasStartActions=
!!a.target.assignedElements({flatten:!0}).length};this.handleHeaderActionsEndSlotChange=a=>{this.hasEndActions=!!a.target.assignedElements({flatten:!0}).length};this.handleHeaderMenuActionsSlotChange=a=>{this.hasMenuItems=!!a.target.assignedElements({flatten:!0}).length};this.handleHeaderContentSlotChange=a=>{this.hasHeaderContent=!!a.target.assignedElements({flatten:!0}).length};this.handleFooterSlotChange=a=>{this.hasFooterContent=!!a.target.assignedElements({flatten:!0}).length};this.handleFooterActionsSlotChange=
a=>{this.hasFooterActions=!!a.target.assignedElements({flatten:!0}).length};this.handleFabSlotChange=a=>{this.hasFab=!!a.target.assignedElements({flatten:!0}).length};this.setPanelScrollEl=a=>{this.panelScrollEl=a;this.resizeObserver?.disconnect();a&&(this.resizeObserver?.observe(a),this.resizeHandler())};this.closable=this.disabled=this.closed=!1;this.headingLevel=void 0;this.loading=!1;this.description=this.heading=void 0;this.menuOpen=!1;this.messages=this.messageOverrides=void 0;this.hasFab=this.hasFooterActions=
this.hasFooterContent=this.hasHeaderContent=this.hasMenuItems=this.hasEndActions=this.hasStartActions=!1;this.defaultMessages=void 0;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){q.connectLocalized(this);k.connectMessages(this)}async componentWillLoad(){m.setUpLoadableComponent(this);await k.setUpMessages(this)}componentDidLoad(){m.setComponentLoaded(this)}componentDidRender(){u.updateHostInteraction(this)}disconnectedCallback(){q.disconnectLocalized(this);k.disconnectMessages(this);
this.resizeObserver?.disconnect()}effectiveLocaleChange(){k.updateMessages(this,this.effectiveLocale)}async setFocus(){await m.componentLoaded(this);n.focusFirstTabbable(this.containerEl)}async scrollContentTo(a){this.panelScrollEl?.scrollTo(a)}renderHeaderContent(){const {heading:a,headingLevel:c,description:e,hasHeaderContent:g}=this,d=a?b.h(w.Heading,{class:"heading",level:c},a):null,h=e?b.h("span",{class:"description"},e):null;return g||!d&&!h?null:b.h("div",{class:"header-content",key:"header-content"},
d,h)}renderHeaderSlottedContent(){return b.h("div",{class:"header-content",hidden:!this.hasHeaderContent,key:"slotted-header-content"},b.h("slot",{name:f.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const {hasStartActions:a}=this;return b.h("div",{class:{["header-actions--start"]:!0,["header-actions"]:!0},hidden:!a,key:"header-actions-start"},b.h("slot",{name:f.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const {close:a,
hasEndActions:c,messages:e,closable:g}=this;var d=e.close;d=g?b.h("calcite-action",{"aria-label":d,icon:"x",onClick:a,ref:this.setCloseRef,text:d}):null;const h=b.h("slot",{name:f.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange});return b.h("div",{class:{["header-actions--end"]:!0,["header-actions"]:!0},hidden:!(c||d),key:"header-actions-end"},h,d)}renderMenu(){const {hasMenuItems:a,messages:c,menuOpen:e}=this;return b.h("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!a,
key:"menu",label:c.options,open:e,placement:"bottom-end"},b.h("calcite-action",{icon:"ellipsis",slot:p.SLOTS.trigger,text:c.options}),b.h("slot",{name:f.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const {hasHeaderContent:a,hasStartActions:c,hasEndActions:e,closable:g,hasMenuItems:d}=this,h=this.renderHeaderContent();return b.h("header",{class:"header",hidden:!(a||h||c||e||g||d)},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),h,this.renderHeaderActionsEnd(),
this.renderMenu())}renderFooterNode(){const {hasFooterContent:a,hasFooterActions:c}=this;return b.h("footer",{class:"footer",hidden:!(a||c)},b.h("slot",{key:"footer-slot",name:f.footer,onSlotchange:this.handleFooterSlotChange}),b.h("slot",{key:"footer-actions-slot",name:f.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const {hasFab:a}=this;var c=b.h("slot",{key:"default-slot"});c=a?b.h("section",{class:"content-container"},c):c;return b.h("div",{class:{["content-wrapper"]:!0,
["content-container"]:!a,["content-height"]:a},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},c,this.renderFab())}renderFab(){return b.h("div",{class:"fab-container",hidden:!this.hasFab},b.h("slot",{name:f.fab,onSlotchange:this.handleFabSlotChange}))}render(){const {loading:a,panelKeyDownHandler:c,closed:e,closable:g}=this,d=b.h("article",{"aria-busy":n.toAriaBoolean(a),class:"container",hidden:e,onKeyDown:c,ref:this.setContainerRef,tabIndex:g?0:-1},this.renderHeaderNode(),this.renderContent(),
this.renderFooterNode());return b.h(b.Fragment,null,a?b.h("calcite-scrim",{loading:a}):null,d)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}"}},
[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[1540],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);r();l.Panel=t;l.SLOTS=f;l.defineCustomElement=r});