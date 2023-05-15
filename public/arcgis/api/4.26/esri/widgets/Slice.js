// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./Slice/SliceViewModel ./support/componentsUtils ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(w,u,d,x,y,f,c,H,I,z,A,v,B,C,J,D,b){c=function(h){function l(a,g){a=
E.call(this,a,g);a.headingLevel=3;a.iconClass="esri-icon-slice";a.messages=null;a.viewModel=new v;return a}u._inherits(l,h);var E=u._createSuper(l);h=l.prototype;h.loadDependencies=function(){return B.loadCalciteComponents({button:()=>new Promise((a,g)=>w(["../chunks/calcite-button"],a,g))})};h.render=function(){var a=this.viewModel.supported,g=this.viewModel.active,k="disabled"===this.viewModel.state,m="ready"===this.viewModel.state,n="slicing"===this.viewModel.state||"sliced"===this.viewModel.state;
const p="exclude"===this.viewModel.layersMode;var {messages:e}=this,q=k&&"esri-button--disabled";const F=x.isSome(this.viewModel.view)?this.viewModel.view.allLayerViews.some(r=>"voxel-3d"===r.type):!1;k=g&&!n||p?null:b.tsx("button",{disabled:k,class:this.classes("esri-slice__clear-button esri-button esri-button--primary",q),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear",type:"button"},e.newSlice);const G=n&&!p?b.tsx("button",{class:this.classes("esri-slice__exclude-button esri-button esri-button--secondary",
q),bind:this,onclick:()=>{this.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude",type:"button"},e.excludeLayer):null;q=g&&p?b.tsx("button",{class:this.classes("esri-slice__cancel-button esri-button esri-button--secondary",q),bind:this,onclick:()=>{this.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude",type:"button"},e.cancel):null;let t=null;g&&(p?t=e.excludeHint:m&&(t=F?e.voxelHint:e.hint));g=t?b.tsx("div",{class:"esri-slice__hint",key:"esri-slice__hint"},b.tsx("p",{class:"esri-slice__hint-text"},
t),b.tsx("p",{class:"esri-slice__hint-text"},e.verticalHint)):null;m=this.excludedLayers?this.excludedLayers.toArray().map(r=>this._renderLayerItem({uid:r.uid,title:r.title,onClick:()=>{this.excludedLayers.remove(r);return!1}})):[];this.excludeGroundSurface&&m.push(this._renderLayerItem({uid:"ground",title:e.ground,onClick:()=>this.excludeGroundSurface=!1}));n=!p&&n&&0<m.length?b.tsx("div",{class:"esri-slice__settings",key:"esri-slice__settings"},b.tsx(C.Heading,{class:"esri-slice__settings-title",
level:this.headingLevel},e.excludedLayers),b.tsx("ul",null,m)):null;e=b.tsx("div",{class:"esri-slice__panel--error",key:"esri-slice__unsupported"},b.tsx("p",null,e.unsupported));k=b.tsx("div",{class:"esri-slice__actions"},G,q,k);a=this.visible?b.tsx("div",{class:"esri-slice__container"},a?[g,n,k]:e):null;return b.tsx("div",{class:"esri-slice esri-widget esri-widget--panel",role:"presentation"},a)};h._renderLayerItem=function(a){return b.tsx("li",{class:"esri-slice__layer-item",key:a.uid},b.tsx("calcite-button",
{appearance:"transparent",class:"esri-slice__cross",iconStart:"x",scale:"s",title:this.messages.includeLayer,bind:this,onclick:a.onClick}),b.tsx("div",{class:"esri-slice__layer-item__title"},a.title))};h._onNewSliceClick=function(){y.ignoreAbortErrors(this.viewModel.start())};u._createClass(l,[{key:"active",get:function(){return this.viewModel.active}},{key:"analysis",get:function(){return this.viewModel.analysis},set:function(a){this.viewModel.analysis=a}},{key:"excludedLayers",get:function(){return this.viewModel.excludedLayers},
set:function(a){this.viewModel.excludedLayers=a}},{key:"excludeGroundSurface",get:function(){return this.viewModel.excludeGroundSurface},set:function(a){this.viewModel.excludeGroundSurface=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}},{key:"visible",get:function(){return this.viewModel.visible},set:function(a){this.viewModel.visible=
a}}]);return l}(A);d.__decorate([f.property()],c.prototype,"active",null);d.__decorate([f.property({constructOnly:!0,nonNullable:!0})],c.prototype,"analysis",null);d.__decorate([f.property()],c.prototype,"excludedLayers",null);d.__decorate([f.property()],c.prototype,"excludeGroundSurface",null);d.__decorate([f.property()],c.prototype,"headingLevel",void 0);d.__decorate([f.property()],c.prototype,"iconClass",void 0);d.__decorate([f.property()],c.prototype,"label",null);d.__decorate([f.property(),D.messageBundle("esri/widgets/Slice/t9n/Slice")],
c.prototype,"messages",void 0);d.__decorate([f.property()],c.prototype,"view",null);d.__decorate([f.property({type:v})],c.prototype,"viewModel",void 0);d.__decorate([f.property()],c.prototype,"visible",null);return c=d.__decorate([z.subclass("esri.widgets.Slice")],c)});