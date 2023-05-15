// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/asyncUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/subclass ./LayerView3D ../../layers/DimensionLayerView ../../layers/LayerView".split(" "),function(p,k,g,q,r,c,m,n,l,t,d,u,v){d=function(b){function h(a){a=w.call(this,a);a.type="dimension-3d";a._analysisModule=
null;return a}k._inherits(h,b);var w=k._createSuper(h);b=h.prototype;b.initialize=function(){this.handles.add(n.watch(()=>this.layer.source,a=>{this._destroyAnalysisView();c.isSome(a)&&this._createAnalysisView(a)},n.syncAndInitial),"analysis-view-handles")};b.destroy=function(){this.handles.remove("analysis-view-handles");this._destroyAnalysisView()};b.isUpdating=function(){return c.isSome(this._createAnalysisViewTask)||c.isSome(this.analysisView)&&this.analysisView.updating};b.whenAnalysisView=async function(){if(c.isSome(this.analysisView))return this.analysisView;
if(c.isSome(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view");};b._createAnalysisView=function(a){const f=q.createTask(async e=>{this.analysisView=await this._createAnalysisViewPromise(a,e);this._createAnalysisViewTask===f&&(this._createAnalysisViewTask=null);return this.analysisView});this.addResolvingPromise(f.promise);this._createAnalysisViewTask=
f};b._destroyAnalysisView=function(){this.analysisView=c.destroyMaybe(this.analysisView);this._createAnalysisViewTask=c.abortMaybe(this._createAnalysisViewTask)};b._createAnalysisViewPromise=async function(a,f){var e=this._analysisModule;c.isNone(e)&&(this._analysisModule=e=await this._loadAnalysisModule());a=new e.default({analysis:a,view:this.view,parent:this});await a.when();if(m.isAborted(f))throw a.destroy(),m.createAbortError();return a};b._loadAnalysisModule=function(){return new Promise((a,
f)=>p(["../analysis/DimensionAnalysisView3D"],e=>a(Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}))),f))};return k._createClass(h)}(d.LayerView3D(u(v)));g.__decorate([l.property()],d.prototype,"type",void 0);g.__decorate([l.property()],d.prototype,"analysisView",void 0);g.__decorate([l.property()],d.prototype,"_createAnalysisViewTask",void 0);return d=g.__decorate([t.subclass("esri.views.3d.layers.DimensionLayerView3D")],d)});