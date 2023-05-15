// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./FeatureContent ./FeatureFields ./FeatureMedia ./FeatureExpression/FeatureExpressionViewModel ../support/widgetUtils ../support/jsxFactory".split(" "),function(e,k,l,n,c,w,x,p,q,r,t,u,m,y,f){c=function(b){function d(a,g){a=v.call(this,
a,g);a._contentWidget=null;a.viewModel=new m;return a}e._inherits(d,b);var v=e._createSuper(d);b=d.prototype;b.initialize=function(){this.addHandles(l.watch(()=>this.viewModel?.contentElementViewModel,()=>this._setupExpressionWidget(),l.initial))};b.destroy=function(){this._destroyContentWidget()};b.renderLoading=function(){return f.tsx("div",{key:"loading-container",class:"esri-feature__loading-container"},f.tsx("span",{class:this.classes("esri-icon-loading-indicator esri-rotating","esri-feature__loading-spinner")}))};
b.render=function(){const {state:a}=this.viewModel;return f.tsx("div",{class:"esri-feature-expression"},"loading"===a?this.renderLoading():"disabled"===a?null:this._contentWidget?.render())};b._destroyContentWidget=function(){const {_contentWidget:a}=this;a&&(a.viewModel=null,a.destroy());this._contentWidget=null};b._setupExpressionWidget=function(){const {contentElementViewModel:a,contentElement:g}=this.viewModel,h=g?.type;this._destroyContentWidget();this._contentWidget=a?"fields"===h?new t({viewModel:a}):
"media"===h?new u({viewModel:a}):"text"===h?new r({viewModel:a}):null:null;this.scheduleRender()};return e._createClass(d)}(q);k.__decorate([n.property({type:m})],c.prototype,"viewModel",void 0);return c=k.__decorate([p.subclass("esri.widgets.Feature.FeatureExpression")],c)});