// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/asyncUtils ../../core/Handles ../../core/handleUtils ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./componentsUtils ./Popover ./widgetUtils ./decorators/messageBundle ./jsxFactory".split(" "),
function(n,d,p,e,q,w,x,t,f,u,v,g,F,G,H,y,z,A,B,I,C,h){function D(b,m){const r=setTimeout(b,m);return t.makeHandle(()=>clearTimeout(r))}var k;(function(b){b.ColorPickerFocus="hex-input-poll-timeout";b.ButtonFocusTimeout="button-focus-timeout"})(k||(k={}));d.ColorPicker=function(b){function m(a,c){a=r.call(this,a,c);a.value=new q;a.alphaEnabled=!0;a._handles=new x;a._containerElement=null;a._popover=null;a._popoverElement=null;a._buttonElement=null;a._colorPickerCreated=!1;return a}p._inherits(m,b);
var r=p._createSuper(m);b=m.prototype;b.initialize=function(){this.addHandles(v.watch(()=>({container:this._containerElement,value:this.value}),({container:a,value:c})=>{f.applySome(a,l=>{l.style.setProperty("--esri-color-picker-value",c.toCss(!0))})},v.syncAndInitial))};b.loadDependencies=function(){return A.loadCalciteComponents({button:()=>new Promise((a,c)=>n(["../../chunks/calcite-button"],a,c)),"color-picker":()=>new Promise((a,c)=>n(["../../chunks/calcite-color-picker"],a,c)),label:()=>new Promise((a,
c)=>n(["../../chunks/calcite-label"],a,c)),slider:()=>new Promise((a,c)=>n(["../../chunks/calcite-slider"],a,c))})};b.destroy=function(){this._destroyPopover();this._handles=f.destroyMaybe(this._handles);this._buttonElement=null};b.render=function(){var a=this._messages;a=f.isSome(this._popover)&&this._popover.open?a.close:a.open;return h.tsx("div",{class:this.classes("esri-color-picker",this.class),bind:this,afterCreate:this._onContainerAfterCreate},h.tsx("div",{class:"esri-color-picker__bg-pattern"}),
h.tsx("calcite-button",{appearance:"transparent",label:a,class:"esri-color-picker__toggle-button",kind:"neutral",id:this.id,scale:"s",tabIndex:-1,title:a,bind:this,onclick:this._togglePopover,afterCreate:this._onButtonAfterCreate}))};b._onContainerAfterCreate=function(a){this._containerElement=a};b._onButtonAfterCreate=function(a){this._destroyPopover();this._buttonElement=a;this._popover=new B({owner:this,anchorElement:a,placement:"bottom-start",renderContentFunction:this._renderPopoverContent})};
b._destroyPopover=function(){this._handles.remove(k.ColorPickerFocus);this._popover=f.destroyMaybe(this._popover);this._popoverElement=null};b._renderPopoverContent=function(){const a=this.value,c=this._messages;return h.tsx("div",{class:"esri-color-picker__popover",tabIndex:-1,bind:this,afterCreate:this._onPopoverAfterCreate,onfocusout:this._onPopoverFocusOut,onkeydown:this._onPopoverKeyDown},h.tsx("calcite-color-picker",{class:"esri-color-picker__calcite-color-picker",hideSaved:!0,hideChannels:!0,
scale:"m",value:this._colorPickerCreated?a.toCss():null,bind:this,onCalciteColorPickerInput:this._onColorInput,afterCreate:this._onColorPickerAfterCreate,afterRemoved:()=>this._colorPickerCreated=!1}),this.alphaEnabled&&h.tsx("section",{class:"esri-color-picker__opacity-slider-container"},h.tsx("calcite-label",{scale:"s"},c.opacity,h.tsx("calcite-slider",{class:"esri-color-picker__opacity-slider",labelHandles:!0,min:0,max:1,step:.01,value:a.a,bind:this,onCalciteSliderInput:this._onOpacityChange}))))};
b._onColorInput=function(a){a=a.target.value;a="string"===typeof a?new q(a):new q;a.a=this.value.a;this._onChange(a)};b._onOpacityChange=function(a){a=a.target;const c=this.value.clone();c.a=a.value;this._onChange(c)};b._onChange=function(a){this.value=a;if(f.isSome(this.onChange))this.onChange(a)};b._onColorPickerAfterCreate=function(a){this._handles.remove(k.ColorPickerFocus);const c=w.createTask(async l=>{await a.componentOnReady?.();u.throwIfAborted(l);this._colorPickerCreated=!0;await new Promise(E=>
requestAnimationFrame(E));u.throwIfAborted(l);a.setFocus()});this._handles.add(t.makeHandle(()=>{c.abort();this._colorPickerCreated=!1}),k.ColorPickerFocus)};b._togglePopover=function(a){f.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()};b._openPopover=function(){f.applySome(this._popover,a=>a.open=!0)};b._closePopover=function(){this._handles.remove(k.ColorPickerFocus);f.applySome(this._popover,a=>a.open=!1);this._setFocusOnButton()};b._setFocusOnButton=function(){this._handles.remove(k.ButtonFocusTimeout);
this._handles.add(D(()=>{f.applySome(this._buttonElement,a=>a.setFocus())}),k.ButtonFocusTimeout)};b._onPopoverAfterCreate=function(a){this._popoverElement=a};b._onPopoverFocusOut=function(a){const c=this._popoverElement;f.isNone(c)||(a=a.relatedTarget)&&a instanceof Node&&(c.contains(a)||a===this._buttonElement||this._isAssociatedLabel(a))||this._closePopover()};b._isAssociatedLabel=function(a){const c=this.id,l=a.tagName?.toLowerCase();return"calcite-label"===l&&a.for===c||"label"===l&&a.htmlFor===
c};b._onPopoverKeyDown=function(a){if("Escape"===a.key||"Enter"===a.key)a.stopPropagation(),this._closePopover()};return p._createClass(m)}(z);e.__decorate([g.property()],d.ColorPicker.prototype,"class",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"value",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"alphaEnabled",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"onChange",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_containerElement",void 0);
e.__decorate([g.property()],d.ColorPicker.prototype,"_popover",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_popoverElement",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_buttonElement",void 0);e.__decorate([g.property(),C.messageBundle("esri/widgets/support/t9n/ColorPicker")],d.ColorPicker.prototype,"_messages",void 0);e.__decorate([g.property()],d.ColorPicker.prototype,"_colorPickerCreated",void 0);d.ColorPicker=e.__decorate([y.subclass("esri.widgets.support.ColorPicker")],
d.ColorPicker);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});