// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ./createFlowStyle ./dataUtils ./FlowContainer ./FlowStrategy".split(" "),function(n,c,r,b,m,e,z,A,B,t,u,q,v,w){b=function(d){function g(){var a=
x.apply(this,arguments);a._loadImagery=(f,h,k,l,p)=>q.loadImagery(a.layer,f,h,k,l,p);a._createFlowMesh=(f,h,k,l)=>a.layer.createFlowMesh({meshType:f,flowData:k,simulationSettings:h},{signal:l});a.attached=!1;a.type="flow";a.timeExtent=null;a.redrawOrRefetch=async()=>{a._updateVisualization()};return a}n._inherits(g,d);var x=n._createSuper(g);d=g.prototype;d.attach=function(){const {layer:a}=this,f=()=>{this._loadImagery=(h,k,l,p,y)=>q.loadImagery(a,h,k,l,p,y);this._updateVisualization()};"multidimensionalDefinition"in
a?this.addHandles(m.watch(()=>a.multidimensionalDefinition,f)):this.addHandles([m.watch(()=>a.mosaicRule,f),m.watch(()=>a.renderingRule,f),m.watch(()=>a.definitionExpression,f)]);this.container=new v;this._strategy=new w({flowContainer:this.container});this._updateVisualization()};d.detach=function(){this._strategy.destroy();this.container?.removeAllChildren();this.container=null;this.removeHandles()};d.update=function(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()};d.hitTest=
function(a){return new r({attributes:{},geometry:a.clone(),layer:this.layer})};d.moveEnd=function(){};d.doRefresh=async function(){};d._updateVisualization=function(){var a=this.layer.renderer;null!=a&&"flow"===a.type&&(a=u(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent}),this.container.flowStyle=a,this.layerView.requestUpdate())};n._createClass(g,[{key:"updating",get:function(){return!this.attached||this._strategy.updating}}]);return g}(b);c.__decorate([e.property()],
b.prototype,"_strategy",void 0);c.__decorate([e.property()],b.prototype,"attached",void 0);c.__decorate([e.property()],b.prototype,"container",void 0);c.__decorate([e.property()],b.prototype,"layer",void 0);c.__decorate([e.property()],b.prototype,"layerView",void 0);c.__decorate([e.property()],b.prototype,"type",void 0);c.__decorate([e.property()],b.prototype,"updating",null);c.__decorate([e.property()],b.prototype,"timeExtent",void 0);return b=c.__decorate([t.subclass("esri.views.2d.engine.flow.FlowView2D")],
b)});