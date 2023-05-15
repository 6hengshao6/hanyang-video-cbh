// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DGraphic ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayerFactory ./interfaces ./Loadable ./symbolComplexity".split(" "),function(m,u,g,q,v,w,x,r,n,y){const p={renderPriority:0,renderPriorityStep:1,ignoreDrivers:!1};return function(k){function l(a,d,c){var b=z.call(this,d.schedule);b._symbol=a;b._context=d;b._backgroundLayers=c;b._destroyed=!1;b.symbolLayers=
[];b.referenced=0;b._extentPadding=0;return b}m._inherits(l,k);var z=m._createSuper(l);k=l.prototype;k.doLoad=async function(a){let d=this._symbol.symbolLayers;this._extentPadding=0;this._backgroundLayers&&(d=this._backgroundLayers.concat(d));const c=d.length;for(;this.symbolLayers.length<d.length;)this.symbolLayers.push(null);this.symbolLayers.length=d.length;const b=[];for(let e=0;e<c;e++){var f=d.getItemAt(e);if(!1===f.enabled)continue;p.renderPriority=1-(1+e)/c;p.renderPriorityStep=1/c;p.ignoreDrivers=
f._ignoreDrivers;const h=x.make(this.symbol,f,this._context,p);(f=q.onAbortOrThrow(a,()=>{this.symbolLayers[e]=null;h.destroy()}))&&b.push(f);this.symbolLayers[e]=h}await u.forEach(this.symbolLayers,async(e,h)=>{if(g.isSome(e))try{await e.load(),this._extentPadding+=Math.max(this._extentPadding,e.extentPadding)}catch{this.symbolLayers[h]=null}});b.forEach(e=>e.remove());q.throwIfAborted(a);if(this.symbolLayers.length&&!this.symbolLayers.some(e=>!!e))throw Error();};k.getSymbolLayerSize=function(a){a=
this.symbolLayers[a];return g.isSome(a)?a.getCachedSize():null};k.createGraphics3DGraphic=function(a,d){const c=a.graphic,b=Array(this.symbolLayers.length);for(let f=0;f<this.symbolLayers.length;f++){const e=this.symbolLayers[f];b[f]=g.isSome(e)?e.createGraphics3DGraphic(a):null}return new v(c,d||this,b,a.layer,this._context.arcade||this._context.featureExpressionInfoContext&&this._context.featureExpressionInfoContext.arcade&&this._context.featureExpressionInfoContext.arcade.modules||null)};k.globalPropertyChanged=
function(a,d){const c=this.symbolLayers.length;for(let b=0;b<c;b++){const f=this.symbolLayers[b],e=h=>{h=h.layers[b];return h instanceof w.Graphics3DObject3DGraphicLayer?h:null};if(g.isSome(f)&&!f.globalPropertyChanged(a,d,e))return!1}return!0};k.applyRendererDiff=function(a,d){return this.loadStatus!==n.LoadStatus.LOADED?r.ApplyRendererDiffResult.Recreate_Symbol:this.symbolLayers.reduce((c,b)=>c!==r.ApplyRendererDiffResult.Recreate_Symbol&&g.isSome(b)?Math.min(c,b.applyRendererDiff(a,d)):c,r.ApplyRendererDiffResult.Fast_Update)};
k.prepareSymbolPatch=function(a){if(this.loadStatus!==n.LoadStatus.FAILED&&"partial"===a.diff.type){var d=a.diff.diff;if(d.symbolLayers&&"partial"===d.symbolLayers.type){var c=d.symbolLayers.diff;this.symbolLayers.forEach((b,f)=>{if(!g.isNone(b)){var e=c[f];if(e){const h={diff:e,graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};b.prepareSymbolLayerPatch(h);a.symbolStatePatches.push(...h.symbolLayerStatePatches);h.graphics3DGraphicPatches.length&&a.graphics3DGraphicPatches.push((A,B)=>{const t=
A.layers[f];g.isSome(t)&&h.graphics3DGraphicPatches.forEach(C=>C(t,B))})}}})}}};k.updateGeometry=function(a,d){for(let c=0;c<this.symbolLayers.length;c++){const b=this.symbolLayers[c];if(g.isNone(b))continue;const f=a.layers[c];if(g.isNone(f)||!b.updateGeometry(f,d))return!1}return!0};k.onRemoveGraphic=function(a){for(let d=0;d<this.symbolLayers.length;d++){const c=this.symbolLayers[d];if(g.isNone(c))continue;const b=a.layers[d];if(g.isSome(b))c.onRemoveGraphic(b)}};k.getFastUpdateStatus=function(){let a=
0,d=0,c=0;this.symbolLayers.forEach(b=>{g.isNone(b)||(b.loadStatus===n.LoadStatus.LOADING?a++:b.isFastUpdatesEnabled()?c++:d++)});return{loading:a,slow:d,fast:c}};k.queryForSnapping=async function(a,d,c,b){var f=this.symbolLayers.filter(g.isSome).filter(e=>g.isSome(e.queryForSnapping)).map(e=>e.queryForSnapping(a,d,c,b));f=await Promise.all(f);q.throwIfAborted(b);return f.flat()};k.destroy=function(){if(this.destroyed)console.error("Graphics3DSymbol.destroy called when already destroyed!");else{m._get(m._getPrototypeOf(l.prototype),
"destroy",this).call(this);for(const a of this.symbolLayers)g.isSome(a)&&a.destroy();this.symbolLayers.length=0;this._destroyed=!0}};m._createClass(l,[{key:"symbol",get:function(){return this._symbol},set:function(a){this._symbol=a;a.symbolLayers.forEach((d,c)=>{c=this.symbolLayers[c];g.isSome(c)&&(c.symbol=a,c.symbolLayer=d)})}},{key:"extentPadding",get:function(){return this._extentPadding}},{key:"symbologySnappingSupported",get:function(){return this.symbolLayers.some(a=>g.isSome(a)&&a.queryForSnapping)}},
{key:"complexity",get:function(){return y.totalSymbolComplexities(this.symbolLayers.map(a=>g.isSome(a)?a.complexity:null))}},{key:"destroyed",get:function(){return this._destroyed}}]);return l}(n.Loadable)});