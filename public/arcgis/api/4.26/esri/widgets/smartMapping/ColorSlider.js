// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderBase ./ColorSlider/ColorSliderViewModel ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(p,e,h,c,y,z,t,u,v,A,w,k){var q;c=q=function(m){function l(a,b){a=x.call(this,a,b);a.messages=null;a.viewModel=
new v;a._bgFillId=`${a.id}-bg-fill`;a._rampFillId=`${a.id}-linear-gradient`;return a}p._inherits(l,m);var x=p._createSuper(l);l.fromRendererResult=function(a,b){const {visualVariable:{stops:f},statistics:g}=a,{avg:d,stddev:n}=g;a=a.renderer.authoringInfo.visualVariables.find(r=>"color"===r.type);return new q({max:a.maxSliderValue,min:a.minSliderValue,stops:f,histogramConfig:{average:d,standardDeviation:n,bins:b?b.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})};m=l.prototype;m.updateFromRendererResult=
function(a,b){const {visualVariable:{stops:f},statistics:g}=a,{avg:d,stddev:n}=g;a=a.renderer.authoringInfo.visualVariables.find(r=>"color"===r.type);this.set({max:a.maxSliderValue,min:a.minSliderValue,stops:f,histogramConfig:{average:d,standardDeviation:n,bins:b?b.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})};m.render=function(){const {label:a,primaryHandleEnabled:b,state:f,visibleElements:g}=this,d="disabled"===f,n=this.classes("esri-color-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:d,
["esri-color-slider--primary-handle"]:b,["esri-color-slider--interactive-track"]:!!g.interactiveTrack});return k.tsx("div",{"aria-label":a,class:n},d?null:this.renderContent(this.renderRamp(),"esri-color-slider__slider-container","esri-color-slider__histogram-container"))};m.renderRamp=function(){const {_bgFillId:a,_rampFillId:b,viewModel:f,zoomOptions:g}=this,d=f.getStopInfo();return k.tsx("div",{class:"esri-color-slider__ramp"},k.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},k.tsx("defs",null,
this.renderRampFillDefinition(b,d),this.renderBackgroundFillDefinition(a)),k.tsx("rect",{x:"0",y:"0",fill:`url(#${a})`,height:"100%",width:"100%"}),k.tsx("rect",{x:"0",y:"0",fill:`url(#${b})`,height:"100%",width:"100%"})),g?this.renderZoomCaps():null)};p._createClass(l,[{key:"handlesSyncedToPrimary",get:function(){return this.viewModel.handlesSyncedToPrimary},set:function(a){this.viewModel.handlesSyncedToPrimary=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",
a)}},{key:"primaryHandleEnabled",get:function(){return this.viewModel.primaryHandleEnabled},set:function(a){this.viewModel.primaryHandleEnabled=a}},{key:"stops",get:function(){return this.viewModel.stops},set:function(a){this.viewModel.stops=a}}]);return l}(u.SmartMappingSliderBase);e.__decorate([h.property()],c.prototype,"handlesSyncedToPrimary",null);e.__decorate([h.property()],c.prototype,"label",null);e.__decorate([h.property(),w.messageBundle("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],
c.prototype,"messages",void 0);e.__decorate([h.property()],c.prototype,"primaryHandleEnabled",null);e.__decorate([h.property()],c.prototype,"stops",null);e.__decorate([h.property()],c.prototype,"viewModel",void 0);return c=q=e.__decorate([t.subclass("esri.widgets.smartMapping.ColorSlider")],c)});