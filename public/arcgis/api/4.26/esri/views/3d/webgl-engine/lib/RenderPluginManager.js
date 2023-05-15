// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/PooledArray ../../../../core/promiseUtils ./depthRange ./RenderSlot".split(" "),function(f,n,g,p,h,q,k){let u=function(){function e(b){this._context=b;this._renderPlugins=new p;this._slots=[];for(b=0;b<k.RenderSlot.MAX_SLOTS;++b)this._slots[b]=[]}var d=e.prototype;d.add=function(b,a,c){const l=()=>{if(c?.aborted)throw a.uninitializeRenderContext(),h.createAbortError();this._renderPlugins.push(a);for(const r of b)this._slots[r].push(a);
this._context.requestRender()},m=a.initializeRenderContext(this._context,c);if(h.isPromiseLike(m))return m.then(l);l()};d.remove=function(b){if(null!=this._renderPlugins.removeUnordered(b)){for(let a=0;a<this._slots.length;++a)this._slots[a]=this._slots[a].filter(c=>c!==b);b.uninitializeRenderContext();this._context.requestRender()}};d.prepareRender=function(){this._renderPlugins.forAll(b=>{b.prepareRender&&b.prepareRender(this._context.renderContext)})};d.updateAnimation=function(b){let a=!1;this._renderPlugins.forAll(c=>
{c.updateAnimation&&(a=c.updateAnimation(b)||a)});return a};d.prepareSlots=function(b){for(const a of b)this._context.renderContext.bindParameters.slot=a,this._slots[a].filter(c=>{c.canRender&&("prepareTechnique"in c&&c.prepareTechnique(this._context.renderContext),"prepareTechniques"in c&&c.prepareTechniques(this._context.renderContext))})};d.render=function(){const b=[];this._slots[this._context.renderContext.bindParameters.slot].filter(a=>{if(!a.canRender)return!1;if("prepareTechnique"in a)return a=
a.prepareTechnique(this._context.renderContext),g.isSome(a)?(b.push(a),!0):!1;if("prepareTechniques"in a)return a=a.prepareTechniques(this._context.renderContext),g.isSome(a)?(b.push(a),!0):!1;b.push(null);return!0}).forEach((a,c)=>a.render(this._context.renderContext,b[c]))};d.queryDepthRange=function(b){const a=t;a.near=Infinity;a.far=-Infinity;this._renderPlugins.forAll(c=>{c.queryDepthRange&&(c=c.queryDepthRange(b))&&q.union(a,c,a)});return a};n._createClass(e,[{key:"needsTransparentPass",get:function(){return this._renderPlugins.some(b=>
!!b.needsTransparentPass)}},{key:"needsHighlight",get:function(){return this._renderPlugins.some(b=>!!b.needsHighlight)}},{key:"needsLinearDepth",get:function(){return this._renderPlugins.some(b=>!!b.needsLinearDepth)}},{key:"needsLaserlineWithContrastControl",get:function(){const b=this._slots[k.RenderSlot.LASERLINES_CONTRAST_CONTROL];return!!b&&0<b.length}},{key:"renderOccludedFlags",get:function(){return this._renderPlugins.reduce((b,a)=>b|a.renderOccludedFlags,0)}}]);return e}();const t={near:0,
far:0};f.RenderPluginManager=u;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});