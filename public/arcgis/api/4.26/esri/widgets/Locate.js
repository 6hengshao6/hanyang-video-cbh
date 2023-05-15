// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./Locate/LocateViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils".split(" "),function(h,c,d,b,v,w,p,q,l,r,m,t,k,x){b=function(f){function g(a,e){a=u.call(this,a,e);a.iconClass=
"esri-icon-north-navigation";a.messages=null;a.messagesCommon=null;a.viewModel=new l;return a}h._inherits(g,f);var u=h._createSuper(g);f=g.prototype;f.cancelLocate=function(){this.viewModel.cancelLocate()};f.locate=function(){return this.viewModel.locate()};f.render=function(){const a=this.get("viewModel.state");var e="locating"===a;e={["esri-icon-loading-indicator"]:e,["esri-rotating"]:e,["esri-icon-locate"]:!e};const n="locating"===a?this.messagesCommon.cancel:this.messages.title;return k.tsx("div",
{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",{["esri-disabled"]:"disabled"===a,["esri-hidden"]:"feature-unsupported"===a}),hidden:"feature-unsupported"===a,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":n,title:n},k.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon",e)}),k.tsx("span",{class:"esri-icon-font-fallback-text"},this.messages.title))};f._locate=function(){const {viewModel:a}=this;"locating"===a.state?a.cancelLocate():
a.locate()};h._createClass(g,[{key:"geolocationOptions",get:function(){return this.viewModel.geolocationOptions},set:function(a){this.viewModel.geolocationOptions=a}},{key:"goToLocationEnabled",get:function(){return this.viewModel.goToLocationEnabled},set:function(a){this.viewModel.goToLocationEnabled=a}},{key:"goToOverride",get:function(){return this.viewModel.goToOverride},set:function(a){this.viewModel.goToOverride=a}},{key:"graphic",get:function(){return this.viewModel.graphic},set:function(a){this.viewModel.graphic=
a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"popupEnabled",get:function(){return this.viewModel.popupEnabled},set:function(a){this.viewModel.popupEnabled=a}},{key:"scale",get:function(){return this.viewModel.scale},set:function(a){this.viewModel.scale=a}},{key:"useHeadingEnabled",get:function(){return this.viewModel.useHeadingEnabled},set:function(a){this.viewModel.useHeadingEnabled=a}},{key:"view",get:function(){return this.viewModel.view},
set:function(a){this.viewModel.view=a}}]);return g}(q);c.__decorate([d.property()],b.prototype,"geolocationOptions",null);c.__decorate([d.property()],b.prototype,"goToLocationEnabled",null);c.__decorate([d.property()],b.prototype,"goToOverride",null);c.__decorate([d.property()],b.prototype,"graphic",null);c.__decorate([d.property()],b.prototype,"iconClass",void 0);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property(),m.messageBundle("esri/widgets/Locate/t9n/Locate")],b.prototype,
"messages",void 0);c.__decorate([d.property(),m.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([d.property()],b.prototype,"popupEnabled",null);c.__decorate([d.property()],b.prototype,"scale",null);c.__decorate([d.property()],b.prototype,"useHeadingEnabled",null);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:l}),t.vmEvent(["locate","locate-error"])],b.prototype,"viewModel",void 0);c.__decorate([r.accessibleHandler()],b.prototype,
"_locate",null);return b=c.__decorate([p.subclass("esri.widgets.Locate")],b)});