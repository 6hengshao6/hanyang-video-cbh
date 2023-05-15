// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./focusTrapComponent ./loadable ./observers ./openCloseComponent ./locale ./t9n ./icon ./loader ./scrim".split(" "),function(g,a,k,d,c,h,l,m,n,e,r,t,u){function p(){"undefined"!==typeof customElements&&["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach(b=>{switch(b){case "calcite-modal":customElements.get(b)||customElements.define(b,q);break;case "calcite-icon":customElements.get(b)||r.defineCustomElement();break;case "calcite-loader":customElements.get(b)||
t.defineCustomElement();break;case "calcite-scrim":customElements.get(b)||u.defineCustomElement()}})}const q=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteModalBeforeClose=a.createEvent(this,"calciteModalBeforeClose",6);this.calciteModalClose=a.createEvent(this,"calciteModalClose",6);this.calciteModalBeforeOpen=a.createEvent(this,"calciteModalBeforeOpen",6);this.calciteModalOpen=a.createEvent(this,"calciteModalOpen",6);this.mutationObserver=
l.createObserver("mutation",()=>{this.updateFooterVisibility()});this.cssVarObserver=l.createObserver("mutation",()=>{this.updateSizeCssVars()});this.openTransitionProp="opacity";this.setTransitionEl=b=>{this.focusTrapEl=this.transitionEl=b;c.connectFocusTrap(this)};this.openEnd=()=>{this.setFocus();this.el.removeEventListener("calciteModalOpen",this.openEnd)};this.handleOutsideClose=()=>{this.outsideCloseDisabled||this.close()};this.close=()=>this.beforeClose(this.el).then(()=>{this.isOpen=this.open=
!1;this.removeOverflowHiddenClass()});this.updateFooterVisibility=()=>{this.hasFooter=!!d.getSlotted(this.el,["back","primary","secondary"])};this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")};this.open=!1;this.beforeClose=()=>Promise.resolve();this.outsideCloseDisabled=this.focusTrapDisabled=this.closeButtonDisabled=!1;this.docked=void 0;this.escapeDisabled=
!1;this.width=this.scale="m";this.cssHeight=this.cssWidth=this.slottedInShell=this.messageOverrides=this.messages=this.kind=this.fullscreen=void 0;this.hasFooter=!0;this.isOpen=!1;this.defaultMessages=this.effectiveLocale=void 0}handlefocusTrapDisabled(b){this.open&&(b?c.deactivateFocusTrap(this):c.activateFocusTrap(this))}onMessagesChange(){}async componentWillLoad(){await e.setUpMessages(this);h.setUpLoadableComponent(this);this.open&&(m.onToggleOpenCloseComponent(this),requestAnimationFrame(()=>
this.openModal()))}componentDidLoad(){h.setComponentLoaded(this)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0});this.cssVarObserver?.observe(this.el,{attributeFilter:["style"]});this.updateFooterVisibility();this.updateSizeCssVars();k.connectConditionalSlotComponent(this);n.connectLocalized(this);e.connectMessages(this)}disconnectedCallback(){this.removeOverflowHiddenClass();this.mutationObserver?.disconnect();this.cssVarObserver?.disconnect();k.disconnectConditionalSlotComponent(this);
c.deactivateFocusTrap(this);n.disconnectLocalized(this);e.disconnectMessages(this);this.slottedInShell=!1}render(){return a.h(a.Host,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},a.h("div",{class:{container:!0,["slotted-in-shell"]:this.slottedInShell}},a.h("calcite-scrim",{class:"scrim",onClick:this.handleOutsideClose}),this.renderStyle(),a.h("div",{class:{modal:!0,["modal--open"]:this.isOpen},ref:this.setTransitionEl},a.h("div",{class:"header"},
this.renderCloseButton(),a.h("header",{class:"title"},a.h("slot",{name:"header"}))),a.h("div",{class:{content:!0,["content--no-footer"]:!this.hasFooter},ref:b=>this.modalContent=b},a.h("slot",{name:"content"})),this.renderFooter())))}renderFooter(){return this.hasFooter?a.h("div",{class:"footer",key:"footer"},a.h("span",{class:"back"},a.h("slot",{name:"back"})),a.h("span",{class:"secondary"},a.h("slot",{name:"secondary"})),a.h("span",{class:"primary"},a.h("slot",{name:"primary"}))):null}renderCloseButton(){return this.closeButtonDisabled?
null:a.h("button",{"aria-label":this.messages.close,class:"close",key:"button",onClick:this.close,ref:b=>this.closeButtonEl=b,title:this.messages.close},a.h("calcite-icon",{icon:"x",scale:"s"===this.scale?"s":"m"===this.scale?"m":"l"===this.scale?"l":null}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return a.h("style",null,`.${"container"} {\n              ${this.docked&&this.cssWidth?"align-items: center !important;":""}\n            }\n            .${"modal"} {\n              block-size: ${this.cssHeight?
this.cssHeight:"auto"} !important;\n              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}\n              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}\n              ${this.docked?"border-radius: var(--calcite-border-radius) !important;":""}\n            }\n            @media screen and (max-width: ${this.cssWidth}) {\n              .${"container"} {\n                ${this.docked?"align-items: flex-end !important;":""}\n              }\n              .${"modal"} {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ${this.docked?
"":"block-size: 100% !important;"}\n                ${this.docked?"":"border-radius: 0 !important;"}\n                ${this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":""}\n              }\n            }\n          `)}effectiveLocaleChange(){e.updateMessages(this,this.effectiveLocale)}handleEscape(b){!this.open||this.escapeDisabled||"Escape"!==b.key||b.defaultPrevented||(this.close(),b.preventDefault())}async setFocus(){await h.componentLoaded(this);
d.focusFirstTabbable(this.focusTrapEl)}async updateFocusTrapElements(){c.updateFocusTrapElements(this)}async scrollContent(b=0,f=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:b,left:f,behavior:"smooth"}):(this.modalContent.scrollTop=b,this.modalContent.scrollLeft=f))}onBeforeOpen(){this.transitionEl.classList.add("modal--opening-active");this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove("modal--opening-idle","modal--opening-active");
this.calciteModalOpen.emit();c.activateFocusTrap(this)}onBeforeClose(){this.transitionEl.classList.add("modal--closing-active");this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove("modal--closing-idle","modal--closing-active");this.calciteModalClose.emit();c.deactivateFocusTrap(this)}async toggleModal(b){m.onToggleOpenCloseComponent(this);b?(this.transitionEl?.classList.add("modal--opening-idle"),this.openModal()):(this.transitionEl?.classList.add("modal--closing-idle"),
this.close())}openModal(){this.el.addEventListener("calciteModalOpen",this.openEnd);this.isOpen=this.open=!0;const b=d.getSlotted(this.el,"header"),f=d.getSlotted(this.el,"content");this.titleId=d.ensureId(b);this.contentId=d.ensureId(f);this.slottedInShell||document.documentElement.classList.add("overflow-hidden")}removeOverflowHiddenClass(){document.documentElement.classList.remove("overflow-hidden")}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handlefocusTrapDisabled"],
messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.container{position:fixed;inset:0px;z-index:700;display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale\x3ds]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale\x3dm]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale\x3dl]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:800;float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([open]){opacity:1;visibility:visible !important;transition-delay:0ms}:host([open]) .container{opacity:1;visibility:visible !important;transition-delay:0ms}:host([open]) .container .modal--open{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:400;display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name\x3dheader]::slotted(*),*::slotted([slot\x3dheader]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;max-block-size:100%;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));padding-block:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal));padding-inline:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name\x3dcontent]::slotted(*),*::slotted([slot\x3dcontent]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:400;margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name\x3dprimary]{display:block}:host([width\x3dsmall]) .modal{inline-size:auto}:host([width\x3ds]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width\x3ds]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width\x3ds]) .content{flex:1 1 auto;max-block-size:unset}:host([width\x3ds][docked]) .container{align-items:flex-end}}:host([width\x3dm]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width\x3dm]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width\x3dm]) .content{flex:1 1 auto;max-block-size:unset}:host([width\x3dm][docked]) .container{align-items:flex-end}}:host([width\x3dl]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width\x3dl]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width\x3dl]) .content{flex:1 1 auto;max-block-size:unset}:host([width\x3dl][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([open][fullscreen]) .header{border-radius:0}:host([open][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind\x3dbrand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind\x3ddanger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind\x3dinfo]) .modal{border-color:var(--calcite-ui-info)}:host([kind\x3dsuccess]) .modal{border-color:var(--calcite-ui-success)}:host([kind\x3dwarning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind\x3dbrand]) .modal,:host([kind\x3ddanger]) .modal,:host([kind\x3dinfo]) .modal,:host([kind\x3dsuccess]) .modal,:host([kind\x3dwarning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind\x3dbrand]) .header,:host([kind\x3ddanger]) .header,:host([kind\x3dinfo]) .header,:host([kind\x3dsuccess]) .header,:host([kind\x3dwarning]) .header{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){slot[name\x3dheader]::slotted(*),*::slotted([slot\x3dheader]){font-size:var(--calcite-font-size-1)}.footer{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}"}},
[1,"calcite-modal",{open:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],width:[513],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],isOpen:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],
scrollContent:[64]},[[8,"keydown","handleEscape"]]]);p();g.CalciteModal=q;g.defineCustomElement=p;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});