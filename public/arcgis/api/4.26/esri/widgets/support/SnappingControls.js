// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/uid ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./componentsUtils ./widgetUtils ./decorators/messageBundle ./jsxFactory ./SnappingControls/SnappingControlsViewModel".split(" "),function(k,q,h,m,u,l,v,f,D,w,x,y,E,z,d,A){const t={header:!0,enabledToggle:!0,
selfEnabledToggle:!0,featureEnabledToggle:!0,layerList:!0};f=function(e){function n(a,b){var c=B,g=c.call;const {view:p,viewModel:r,snappingOptions:F,...C}=a;b=g.call(c,this,C,b);b._layerListFilter=null;b.iconClass="esri-icon-vertex-gps";b.layerListOpen=!0;b.messages=null;b.visibleElements={...t};b._defaultViewModel=null;a?.viewModel?b.viewModel=a.viewModel:(b._defaultViewModel=new A({snappingOptions:a.snappingOptions,view:a.view}),b.viewModel=b._defaultViewModel);return b}q._inherits(n,e);var B=
q._createSuper(n);e=n.prototype;e.destroy=function(){this._defaultViewModel=m.destroyMaybe(this._defaultViewModel)};e.loadDependencies=function(){return y.loadCalciteComponents({accordion:()=>new Promise((a,b)=>k(["../../chunks/calcite-accordion"],a,b)),"accordion-item":()=>new Promise((a,b)=>k(["../../chunks/calcite-accordion-item"],a,b)),block:()=>new Promise((a,b)=>k(["../../chunks/calcite-block"],a,b)),checkbox:()=>new Promise((a,b)=>k(["../../chunks/calcite-checkbox"],a,b)),input:()=>new Promise((a,
b)=>k(["../../chunks/calcite-input"],a,b)),label:()=>new Promise((a,b)=>k(["../../chunks/calcite-label"],a,b)),list:()=>new Promise((a,b)=>k(["../../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,b)=>k(["../../chunks/calcite-list-item"],a,b)),panel:()=>new Promise((a,b)=>k(["../../chunks/calcite-panel"],a,b)),switch:()=>new Promise((a,b)=>k(["../../chunks/calcite-switch"],a,b))})};e.castVisibleElements=function(a){return{...t,...a}};e.render=function(){const {label:a,visibleElements:{header:b}}=
this;return d.tsx("div",{"aria-label":a,class:this.classes("esri-snapping-controls","esri-widget")},d.tsx("div",{class:"esri-snapping-controls__container"},b?this.renderHeaderView():this.renderContent()))};e.renderHeaderView=function(){return d.tsx("calcite-panel",{heading:this.label,class:"esri-snapping-controls__panel"},this.renderContent())};e.renderContent=function(){return[this.renderToggles(),this.renderLayerList()]};e.renderToggles=function(){const {visibleElements:{enabledToggle:a,selfEnabledToggle:b,
featureEnabledToggle:c}}=this;return a||b||c?d.tsx("calcite-block",{class:"esri-snapping-controls__toggle-block",key:"toggle-block",heading:"",open:!0},this.renderEnabledToggle(),d.tsx("div",{class:"esri-snapping-controls__nested-container"},this.renderSelfEnabledToggle(),this.renderFeatureEnabledToggle())):null};e.renderEnabledToggle=function(){if(!this.visibleElements.enabledToggle)return null;const {messages:{enableSnapping:a},viewModel:{snappingOptions:{enabled:b,enabledToggled:c}}}=this;return d.tsx("calcite-label",
{layout:"inline-space-between"},a,d.tsx("calcite-switch",{checked:b,disabled:c,bind:this,onCalciteSwitchChange:this._enableSnappingSwitchChange}))};e.renderSelfEnabledToggle=function(){if(!this.visibleElements.selfEnabledToggle)return null;const {messages:{geometryGuides:a},viewModel:{snappingOptions:{enabled:b,selfEnabled:c,enabledToggled:g}}}=this;return d.tsx("calcite-label",{layout:"inline-space-between",key:"self-enabled-toggle"},a,d.tsx("calcite-switch",{checked:c,disabled:g||!b,bind:this,onCalciteSwitchChange:this._selfEnabledSwitchChange}))};
e.renderFeatureEnabledToggle=function(){if(!this.visibleElements.featureEnabledToggle)return null;const {messages:{featureToFeature:a},viewModel:{snappingOptions:{enabled:b,featureEnabled:c,enabledToggled:g}}}=this;return d.tsx("calcite-label",{layout:"inline-space-between",key:"feature-enabled-toggle"},a,d.tsx("calcite-switch",{checked:c,disabled:g||!b,bind:this,onCalciteSwitchChange:this._featureEnabledSwitchChange}))};e.renderLayerList=function(){if(!this.visibleElements.layerList)return null;
const {messages:a}=this;var b=({target:{value:c}})=>this._layerListFilter=""===c?null:new RegExp(c,"i");b=9<this.viewModel.layerListViewModel.operationalItems.length?d.tsx("calcite-input",{class:"esri-snapping-controls__layer-list__filter",clearable:!0,placeholder:a?.searchLayers,onCalciteInputInput:b}):null;return d.tsx("calcite-block",{key:"list-block",heading:a.snappingLayers,class:"esri-snapping-controls__layer-list-block",collapsible:!0,open:this.layerListOpen,onCalciteBlockToggle:c=>this.layerListOpen=
c.target.open},b,d.tsx("calcite-list",{class:"esri-snapping-controls__layer-list"},this.renderLayerListItemCollection(this.viewModel.layerListViewModel.operationalItems,m.unwrap(this._layerListFilter))))};e.renderLayerListItemCollection=function(a,b){return a.map(c=>{if(b?this._itemTitleMatchesFilter(c,b):1)return 0<c.children.length?this.renderLayerListItemGroup(c):this.renderLayerListItem(c);const g=c.children.filter(p=>this._itemTitleMatchesFilter(p,b));return 0<g.length?this.renderLayerListItemGroup(c,
g):null}).toArray().filter(m.isSome)};e.renderLayerListItem=function(a){var {messages:{untitledLayer:b}}=this;b=a.title||b;const c=d.tsx("calcite-checkbox",{value:a.layer.id,checked:a.enabled,bind:this,onCalciteCheckboxChange:g=>this._handleLayerListItemChange(g.target)});return d.tsx("calcite-list-item",{key:`${this.id}-list-item-${a.uid}`,onCalciteListItemSelect:()=>{this._handleLayerListItemChange({checked:!c.properties.checked,value:c.properties.value})}},d.tsx("calcite-label",{class:"esri-snapping-controls__layer-list__item",
slot:"content-start",tabIndex:-1,layout:"inline"},d.tsx("div",{class:"esri-snapping-controls__layer-list__item__checkbox"},c),d.tsx("div",{class:"esri-snapping-controls__layer-list__item__label"},b)))};e.renderLayerListItemGroup=function(a,b){const c=a.title||this.messages.untitledLayer,g=a.title&&""!==a.title?a.title:u.generateUID();return d.tsx("calcite-list-item",{key:g},d.tsx("calcite-accordion",{iconPosition:"start",appearance:"transparent",afterCreate:p=>{p.append(...Array.from(p.children).map(r=>
{r.remove();return r}))}},d.tsx("calcite-accordion-item",{expanded:!!b,heading:c,key:a.uid},d.tsx("calcite-list",null,[...this.renderLayerListItemCollection(b??a.children)]))))};e._enableSnappingSwitchChange=function(a){this.snappingOptions.enabled=a.target.checked};e._featureEnabledSwitchChange=function(a){this.snappingOptions.featureEnabled=a.target.checked};e._itemTitleMatchesFilter=function(a,b){return null!=b&&b.test(a.title)};e._selfEnabledSwitchChange=function(a){this.snappingOptions.selfEnabled=
a.target.checked};e._handleLayerListItemChange=async function(a){a.checked?this.viewModel.enableSnappingForLayer(a.value):this.viewModel.disableSnappingForLayer(a.value)};q._createClass(n,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"snappingOptions",get:function(){return this.viewModel.snappingOptions},set:function(a){this.viewModel.snappingOptions=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=
a}},{key:"viewModel",set:function(a){if(a!==this._get("viewModel")){if(m.isNone(this._defaultViewModel)||this._defaultViewModel!==a)this._defaultViewModel=m.destroyMaybe(this._defaultViewModel);this._set("viewModel",a)}}}]);return n}(x);h.__decorate([l.property()],f.prototype,"_layerListFilter",void 0);h.__decorate([l.property()],f.prototype,"iconClass",void 0);h.__decorate([l.property()],f.prototype,"label",null);h.__decorate([l.property()],f.prototype,"layerListOpen",void 0);h.__decorate([l.property(),
z.messageBundle("esri/widgets/support/SnappingControls/t9n/SnappingControls")],f.prototype,"messages",void 0);h.__decorate([l.property()],f.prototype,"snappingOptions",null);h.__decorate([l.property()],f.prototype,"view",null);h.__decorate([l.property()],f.prototype,"viewModel",null);h.__decorate([l.property()],f.prototype,"visibleElements",void 0);h.__decorate([v.cast("visibleElements")],f.prototype,"castVisibleElements",null);return f=h.__decorate([w.subclass("esri.widgets.support.SnappingControls")],
f)});