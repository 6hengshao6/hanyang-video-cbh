// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../views/layers/support/ClipRect".split(" "),function(u,e,c,p,q,f,x,y,z,v,r){const t={left:0,right:0,top:0,bottom:0};c=function(d){function k(a){a=w.call(this,a);a._leadingClips=new Map;a._trailingClips=
new Map;a.direction="horizontal";a.leadingLayers=new p;a.max=100;a.min=0;a.precision=4;a.step=.5;a.stepMultiplier=10;a.trailingLayers=new p;a.view=null;return a}u._inherits(k,d);var w=u._createSuper(k);d=k.prototype;d.initialize=function(){this.addHandles([q.watch(()=>[this.view,this.view?.ready,this.position,this.direction],()=>this._clipLayers(),q.initial),q.on(()=>this.leadingLayers,"change",()=>this._clipLeadingLayers()),q.on(()=>this.trailingLayers,"change",()=>this._clipTrailingLayers())])};
d.destroy=function(){this._removeExistingClips()};d._clipLayers=function(){this._clipLeadingLayers();this._clipTrailingLayers()};d._clipLeadingLayers=function(){this._removeClips("leading");const {leadingLayers:a}=this;a.forEach(b=>this._clipLayer({layer:b,type:"leading"}))};d._clipTrailingLayers=function(){this._removeClips("trailing");const {trailingLayers:a}=this;a.forEach(b=>this._clipLayer({layer:b,type:"trailing"}))};d._getLayerView=async function(a){const {view:b}=this;if(!a||!b)return null;
a=await b.whenLayerView(a);return"clips"in a?a:null};d._getVerticalClipRect=function(a){const {position:b}=this;return"leading"===a?new r({...t,bottom:`${100-b}%`}):"trailing"===a?new r({...t,top:`${b}%`}):null};d._getHorizontalClipRect=function(a){const {position:b}=this;return"leading"===a?new r({...t,right:`${100-b}%`}):"trailing"===a?new r({...t,left:`${b}%`}):null};d._getClipRect=function(a){const {direction:b}=this;return"vertical"===b?this._getVerticalClipRect(a):"horizontal"===b?this._getHorizontalClipRect(a):
null};d._clipLayer=async function(a){const {_leadingClips:b,_trailingClips:l}=this,{layer:m,type:g}=a;a="trailing"===g?l:"leading"===g?b:null;const h=await this._getLayerView(m);if(h&&"clips"in h&&a&&h.hasOwnProperty("clips")){var n=a.get(h);n&&h.clips.remove(n);if(n=this._getClipRect(g))a.set(h,n),h.clips.add(n)}};d._removeClips=function(a){const {_leadingClips:b,_trailingClips:l}=this;if(a="trailing"===a?l:"leading"===a?b:null)a.forEach((m,g)=>{g&&g.hasOwnProperty("clips")&&g.clips.remove(m)}),
a.clear()};d._removeExistingClips=function(){this._removeClips("leading");this._removeClips("trailing")};u._createClass(k,[{key:"position",get:function(){return 25},set:function(a){const {precision:b,min:l,max:m}=this,g=10**b;this._set.call(this,"position",Math.round(Math.max(Math.min(a,m),l)*g)/g)}},{key:"state",get:function(){const {view:a}=this;return a&&a.ready?"ready":"disabled"}}]);return k}(c);e.__decorate([f.property()],c.prototype,"direction",void 0);e.__decorate([f.property({type:p,nonNullable:!0})],
c.prototype,"leadingLayers",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"max",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"min",void 0);e.__decorate([f.property()],c.prototype,"position",null);e.__decorate([f.property()],c.prototype,"precision",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"state",null);e.__decorate([f.property()],c.prototype,"step",void 0);e.__decorate([f.property()],c.prototype,"stepMultiplier",void 0);e.__decorate([f.property({type:p,
nonNullable:!0})],c.prototype,"trailingLayers",void 0);e.__decorate([f.property()],c.prototype,"view",void 0);return c=e.__decorate([v.subclass("esri.widgets.Swipe.SwipeViewModel")],c)});