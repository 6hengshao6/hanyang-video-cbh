// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/BuildingSceneLayer ../../layers/support/BuildingFilter ./BuildingDisciplinesViewModel ./BuildingLevel ./BuildingPhase ./support/buildingLayerUtils ./support/filterUtils ./support/layerUtils".split(" "),
function(m,c,b,n,v,w,x,p,y,k,e,F,G,H,z,A,B,q,r,t,C,l,D){b=function(g){function h(a){a=E.call(this,a);a.view=null;a.state="disabled";a.level=new r;a.phase=new t;a.disciplines=new q;a._handles=new w;a._loadLayers=D.createLoadLayersFunction();a.layers=new n;return a}m._inherits(h,g);var E=m._createSuper(h);g=h.prototype;g.initialize=function(){this._handles.add([this.layers.on("change",()=>this._onLayersChange()),k.watch(()=>({state:this.state,layers:this.layers,filter:this._filter}),({state:a,layers:d,
filter:f})=>{"ready"===a&&l.setFilterOnLayers(d,f)},{initial:!0})]);this._onLayersChange()};g.destroy=function(){this._handles.destroy();this.level.destroyed||this.level.destroy();this.phase.destroyed||this.phase.destroy();this.disciplines.destroyed||this.disciplines.destroy()};g._onLayersChange=async function(){const a=this.layers;this.level.layers=a;this.phase.layers=a;this.disciplines.layers=a;if(0===a.length)this._set("state","disabled");else{this._set("state","loading");try{await this._loadLayers(a),
await Promise.all([k.whenOnce(()=>"ready"===this.level.state),k.whenOnce(()=>"ready"===this.phase.state),k.whenOnce(()=>"ready"===this.disciplines.state)]),a.forEach(C.showFullModel),this._set("state","ready")}catch(d){y.isAbortError(d)||this._set("state","failed")}}};m._createClass(h,[{key:"isSupported",get:function(){return"3d"===this.view?.type}},{key:"layers",get:function(){return this._get("layers")},set:function(a){const d=a.filter(f=>f instanceof A);d.length!==a.length&&x.getLogger(this.declaredClass).error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget.");
this._set("layers",v.referenceSetter(d,this._get("layers")))}},{key:"_filter",get:function(){var a=this.level.filterExpressions;const d=this.phase.filterExpressions,f=[],u=l.getFilterBlockSolid([a.solid,d.solid]);p.isSome(u)&&f.push(u);a=l.getFilterBlockXRay([a.xRay,d.xRay]);p.isSome(a)&&f.push(a);return 0===f.length?null:new B({id:l.generateFilterId(),name:"Building Explorer Filter",filterBlocks:f})}}]);return h}(b);c.__decorate([e.property({value:null})],b.prototype,"view",void 0);c.__decorate([e.property()],
b.prototype,"isSupported",null);c.__decorate([e.property({type:n,nonNullable:!0})],b.prototype,"layers",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"state",void 0);c.__decorate([e.property({readOnly:!0,type:r})],b.prototype,"level",void 0);c.__decorate([e.property({readOnly:!0,type:t})],b.prototype,"phase",void 0);c.__decorate([e.property({readOnly:!0,type:q})],b.prototype,"disciplines",void 0);c.__decorate([e.property()],b.prototype,"_filter",null);return b=c.__decorate([z.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],
b)});