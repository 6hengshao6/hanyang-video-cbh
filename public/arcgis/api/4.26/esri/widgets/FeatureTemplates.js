// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/HandleOwner ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./FeatureTemplates/FeatureTemplatesViewModel ./FeatureTemplates/ItemList ./FeatureTemplates/TemplateItem ./support/componentsUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory".split(" "),
function(u,m,e,b,y,v,f,z,L,M,A,B,w,C,D,E,N,F,G,q){function H(d){return d.id}const x={filter:!0};b=function(d){function p(a,c){a=I.call(this,a,c);a._iconIntersectionObserver=new IntersectionObserver((k,l)=>{k.forEach(async g=>{if(g.isIntersecting){const h=g.target;if(h["data-has-icon"])l.unobserve(h);else{var {layer:r,template:t}=h["data-item"];h["data-has-icon"]=!0;g=await D.fetchThumbnail(r,t).catch(()=>{h["data-has-icon"]=!1;return null});y.isNone(g)||h.appendChild(g)}}})});a.enableListScroll=!0;
a.filterText="";a.headingLevel=4;a.messages=null;a.viewModel=new w;a.visibleElements={...x};a.renderItemIcon=a.renderItemIcon.bind(m._assertThisInitialized(a));a._afterItemCreateOrUpdate=a._afterItemCreateOrUpdate.bind(m._assertThisInitialized(a));a._afterItemRemoved=a._afterItemRemoved.bind(m._assertThisInitialized(a));return a}m._inherits(p,d);var I=m._createSuper(p);d=p.prototype;d.initialize=function(){const a=({label:c})=>!this.filterText||!!c?.toLowerCase().includes(this.filterText.toLowerCase());
this.addHandles(v.watch(()=>this.viewModel,(c,k)=>{c&&!c.filterFunction&&(this.filterFunction=a);k&&k!==c&&k.filterFunction===a&&(k.filterFunction=null)},v.initial))};d.destroy=function(){this._iconIntersectionObserver?.disconnect();this._iconIntersectionObserver=null};d.loadDependencies=function(){return E.loadCalciteComponents({input:()=>new Promise((a,c)=>u(["../chunks/calcite-input"],a,c)),"list-item":()=>new Promise((a,c)=>u(["../chunks/calcite-list-item"],a,c))})};d.castVisibleElements=function(a){return{...x,
...a}};d.select=function(a,c){return this.viewModel.select(a,c)};d.render=function(){const {enableListScroll:a,filterText:c,headingLevel:k,messages:l,viewModel:{items:g,numberOfFeatureTemplates:r,selectedItem:t,state:h}}=this,J=this.visibleElements.filter&&1<r;if(0<g.length&&"items"in g[0]){const n=g.find(K=>K.label===w.nullGroupBy.label);n&&(n.label=l.other)}return q.tsx("div",{class:this.classes("esri-feature-templates","esri-widget"),"aria-label":l.widgetLabel},"loading"===h?this.renderLoader():
"ready"===h?q.tsx(C.ItemList,{id:this.id,identify:H,filterText:c,items:g,headingLevel:k,selectionMode:"single",messages:{filterPlaceholder:l.filterPlaceholder,noItems:l.noItems,noMatches:l.noMatches},filterEnabled:J,onItemSelect:n=>this.viewModel.select(n),onFilterChange:n=>{this.filterText=n;this.viewModel.refresh()},renderIcon:this.renderItemIcon,selectedItem:t??void 0,enableListScroll:a}):null)};d.renderItemIcon=function({item:a}){return q.tsx("span",{key:"icon",afterCreate:this._afterItemCreateOrUpdate,
afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":a,"data-has-icon":!1})};d.renderLoader=function(){return q.tsx("div",{class:"esri-feature-templates__loader",key:"loader"})};d._afterItemCreateOrUpdate=function(a){this._iconIntersectionObserver?.observe(a)};d._afterItemRemoved=function(a){this._iconIntersectionObserver?.unobserve(a)};m._createClass(p,[{key:"filterFunction",get:function(){return this.viewModel.filterFunction},set:function(a){this.viewModel.filterFunction=
a}},{key:"groupBy",get:function(){return this.viewModel.groupBy},set:function(a){this.viewModel.groupBy=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"layers",get:function(){return this.viewModel.layers},set:function(a){this.viewModel.layers=a}},{key:"selectedItem",get:function(){return this.viewModel.selectedItem}}]);return p}(b.HandleOwnerMixin(B));e.__decorate([f.property()],b.prototype,"enableListScroll",void 0);e.__decorate([f.property()],
b.prototype,"filterFunction",null);e.__decorate([f.property()],b.prototype,"filterText",void 0);e.__decorate([f.property()],b.prototype,"groupBy",null);e.__decorate([f.property()],b.prototype,"headingLevel",void 0);e.__decorate([f.property()],b.prototype,"label",null);e.__decorate([f.property()],b.prototype,"layers",null);e.__decorate([f.property(),F.messageBundle("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],b.prototype,"messages",void 0);e.__decorate([f.property({readOnly:!0})],b.prototype,
"selectedItem",null);e.__decorate([f.property(),G.vmEvent("select")],b.prototype,"viewModel",void 0);e.__decorate([f.property()],b.prototype,"visibleElements",void 0);e.__decorate([z.cast("visibleElements")],b.prototype,"castVisibleElements",null);return b=e.__decorate([A.subclass("esri.widgets.FeatureTemplates")],b)});