// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./index","./dom","./floating-ui","./openCloseComponent"],function(m,c,g,e,k){function n(a){const {referenceElement:b}=a;return("string"===typeof b?g.queryElementRoots(a,{id:b}):b)||null}function p(){"undefined"!==typeof customElements&&["calcite-tooltip"].forEach(a=>{switch(a){case "calcite-tooltip":customElements.get(a)||customElements.define(a,q)}})}class t{constructor(){this.registeredElements=new WeakMap;this.hoverTimeout=null;this.registeredElementCount=0;this.queryTooltip=
a=>{const {registeredElements:b}=this;a=a.find(d=>b.has(d));return b.get(a)};this.keyDownHandler=a=>{if("Escape"===a.key&&!a.defaultPrevented){var {activeTooltipEl:b}=this;b&&b.open&&(this.clearHoverTimeout(),this.toggleTooltip(b,!1),b=n(b),b instanceof Element&&b.contains(a.target)&&a.preventDefault())}};this.queryHoveredTooltip=a=>{const {activeTooltipEl:b}=this;b&&a.includes(b)?this.clearHoverTimeout():(a=this.queryTooltip(a))?this.toggleHoveredTooltip(a,!0):b&&this.toggleHoveredTooltip(b,!1)};
this.pointerMoveHandler=a=>{const b=a.composedPath();this.clearHoverTimeout();this.hoverTimeout=window.setTimeout(()=>this.queryHoveredTooltip(b),500)};this.pointerDownHandler=a=>{g.isPrimaryPointerButton(a)&&(this.clickedTooltip=a=this.queryTooltip(a.composedPath()),a?.closeOnClick&&(this.toggleTooltip(a,!1),this.clearHoverTimeout()))};this.focusInHandler=a=>{this.queryFocusedTooltip(a,!0)};this.focusOutHandler=a=>{this.queryFocusedTooltip(a,!1)};this.toggleHoveredTooltip=(a,b)=>{b&&this.closeExistingTooltip();
this.toggleTooltip(a,b)}}registerElement(a,b){this.registeredElementCount++;this.registeredElements.set(a,b);1===this.registeredElementCount&&this.addListeners()}unregisterElement(a){this.registeredElements.delete(a)&&this.registeredElementCount--;0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0});document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0});document.addEventListener("pointerdown",
this.pointerDownHandler,{capture:!0});document.addEventListener("focusin",this.focusInHandler,{capture:!0});document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0});document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0});document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0});document.removeEventListener("focusin",this.focusInHandler,{capture:!0});
document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout)}closeExistingTooltip(){const {activeTooltipEl:a}=this;a&&this.toggleTooltip(a,!1)}toggleFocusedTooltip(a,b){this.closeExistingTooltip();b&&this.clearHoverTimeout();this.toggleTooltip(a,b)}toggleTooltip(a,b){if(a.open=b)this.activeTooltipEl=a}queryFocusedTooltip(a,b){(a=this.queryTooltip(a.composedPath()))&&a!==this.clickedTooltip?this.toggleFocusedTooltip(a,b):this.clickedTooltip=
null}}const r=new t,q=c.proxyCustomElement(class extends c.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTooltipBeforeClose=c.createEvent(this,"calciteTooltipBeforeClose",6);this.calciteTooltipClose=c.createEvent(this,"calciteTooltipClose",6);this.calciteTooltipBeforeOpen=c.createEvent(this,"calciteTooltipBeforeOpen",6);this.calciteTooltipOpen=c.createEvent(this,"calciteTooltipOpen",6);this.guid=`calcite-tooltip-${g.guid()}`;this.hasLoaded=!1;this.openTransitionProp=
"opacity";this.setTransitionEl=a=>{this.transitionEl=a;k.connectOpenCloseComponent(this)};this.setUpReferenceElement=(a=!0)=>{this.removeReferences();this.effectiveReferenceElement=n(this.el);e.connectFloatingUI(this,this.effectiveReferenceElement,this.el);const {el:b,referenceElement:d,effectiveReferenceElement:f}=this;a&&d&&!f&&console.warn(`${b.tagName}: reference-element id "${d}" was not found.`,{el:b});this.addReferences()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const {effectiveReferenceElement:a}=
this;if(a){var b=this.getId();"setAttribute"in a&&a.setAttribute("aria-describedby",b);r.registerElement(a,this.el)}};this.removeReferences=()=>{const {effectiveReferenceElement:a}=this;a&&("removeAttribute"in a&&a.removeAttribute("aria-describedby"),r.unregisterElement(a))};this.closeOnClick=!1;this.label=void 0;this.offsetDistance=e.defaultOffsetDistance;this.offsetSkidding=0;this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.effectiveReferenceElement=this.referenceElement=
void 0}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(a){a?this.reposition(!0):e.updateAfterClose(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){k.connectOpenCloseComponent(this);this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement();
this.reposition(!0);this.hasLoaded=!0}disconnectedCallback(){this.removeReferences();e.disconnectFloatingUI(this,this.effectiveReferenceElement,this.el);k.disconnectOpenCloseComponent(this)}async reposition(a=!1){const {el:b,effectiveReferenceElement:d,placement:f,overlayPositioning:h,offsetDistance:l,offsetSkidding:u,arrowEl:v}=this;return e.reposition(this,{floatingEl:b,referenceEl:d,overlayPositioning:h,placement:f,offsetDistance:l,offsetSkidding:u,includeArrow:!0,arrowEl:v,type:"tooltip"},a)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const {effectiveReferenceElement:a,
label:b,open:d}=this,f=a&&d,h=!f;return c.h(c.Host,{"aria-hidden":g.toAriaBoolean(h),"aria-label":b,"aria-live":"polite","calcite-hydrated-hidden":h,id:this.getId(),role:"tooltip"},c.h("div",{class:{[e.FloatingCSS.animation]:!0,[e.FloatingCSS.animationActive]:f},ref:this.setTransitionEl},c.h("div",{class:"arrow",ref:l=>this.arrowEl=l}),c.h("div",{class:"container"},c.h("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],
open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^\x3dbottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^\x3dtop]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^\x3dleft]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^\x3dright]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^\x3dtop]) .arrow{inset-block-end:-4px}:host([data-placement^\x3dbottom]) .arrow{inset-block-start:-4px}:host([data-placement^\x3dright]) .arrow,:host([data-placement^\x3dleft]) .arrow{direction:ltr;text-align:start}:host([data-placement^\x3dleft]) .arrow{inset-inline-end:-4px}:host([data-placement^\x3dright]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}'}},
[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);p();m.Tooltip=q;m.defineCustomElement=p});