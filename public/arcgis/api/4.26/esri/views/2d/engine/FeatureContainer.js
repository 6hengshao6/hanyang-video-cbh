// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/promiseUtils ../../../core/Queue ./webgl/AttributeStoreView ./webgl/TileContainer ./webgl/WGLRendererInfo".split(" "),function(l,d,m,n,p,h,q){h=function(c){function e(a){var b=r.call(this,a);b._rendererInfo=new q.WGLRendererInfo;b._materialItemsRequestQueue=new n;b.attributeView=new p.AttributeStoreView(()=>b.onAttributeStoreUpdate());return b}d._inherits(e,c);var r=d._createSuper(e);c=e.prototype;c.destroy=function(){this.children.forEach(a=>
a.destroy());this.removeAllChildren();this.attributeView.destroy();this._materialItemsRequestQueue.clear()};c.setRendererInfo=function(a,b,f){this._rendererInfo.setInfo(a,b,f);this.requestRender()};c.getMaterialItems=async function(a,b){if(!a||0===a.length)return[];const f=m.createResolver();this._materialItemsRequestQueue.push({items:a,abortOptions:b,resolver:f});this.requestRender();return f.promise};c.doRender=function(a){a.context.capabilities.enable("textureFloat");a.context.capabilities.enable("vao");
if(0<this._materialItemsRequestQueue.length){let b=this._materialItemsRequestQueue.pop();for(;b;)this._processMaterialItemRequest(a,b),b=this._materialItemsRequestQueue.pop()}d._get(d._getPrototypeOf(e.prototype),"doRender",this).call(this,a)};c.renderChildren=function(a){for(const b of this.children)b.commit(a);this._rendererInfo.update(a.state);d._get(d._getPrototypeOf(e.prototype),"renderChildren",this).call(this,a)};c.updateTransforms=function(a){if(this.children.some(b=>b.hasData))for(const b of this.children)b.setTransform(a)};
c.createRenderParams=function(a){a=d._get(d._getPrototypeOf(e.prototype),"createRenderParams",this).call(this,a);a.rendererInfo=this._rendererInfo;a.attributeView=this.attributeView;return a};c.onAttributeStoreUpdate=function(){};c._processMaterialItemRequest=function(a,{items:b,abortOptions:f,resolver:k}){const {painter:t,pixelRatio:u}=a;a=b.map(g=>t.textureManager.rasterizeItem(g.symbol,u,g.glyphIds,f));Promise.all(a).then(g=>{this.stage?(g=g.map((v,w)=>({id:b[w].id,mosaicItem:v})),k.resolve(g)):
k.reject()},k.reject)};return d._createClass(e)}(h);l.FeatureContainer=h;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});