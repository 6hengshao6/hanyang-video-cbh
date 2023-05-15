// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./RasterBitmap ./colorizer/rasterColorizer ./processor/rasterProcessor ../webgl/definitions ../webgl/VertexStream ../webgl/brushes/WGLBrush ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/rasterUtils".split(" "),function(r,l,x,y,u,v,w,z,g,A,t){return function(f){function m(){var a=B.apply(this,arguments);a.name="raster";a._quad=null;a._rendererUniformInfos=new Map;a._fbo=null;return a}r._inherits(m,f);
var B=r._createSuper(m);f=m.prototype;f.dispose=function(){l.disposeMaybe(this._quad);l.disposeMaybe(this._fbo)};f.prepareState=function(a){const {context:b,renderPass:c}=a;a="raster"===c;b.setBlendingEnabled(!a);b.setBlendFunctionSeparate(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA,g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA);b.setColorMask(!0,!0,!0,!0);b.setStencilWriteMask(0);b.setStencilTestEnabled(!a)};f.draw=function(a,b){if(x.hasSource(b)&&!b.suspended){var {renderPass:c}=a;
if("raster-bitmap"===c)this._drawBitmap(a,b);else{if("raster"===c)return this._process(a,b);this._drawBitmap(a,b,!0)}}};f._process=function(a,b){var {rasterFunction:c}=a;c="Reproject"===c.name;if(!(c?b.rasterTexture&&b.projected:b.processed)){var {timeline:d,context:e}=a;d.begin(this.name);var h=e.getBoundFramebufferObject(),k=e.getViewport();c||(b.processedTexture=l.disposeMaybe(b.processedTexture));e.setStencilFunction(g.CompareFunction.EQUAL,b.stencilRef,255);b.updateTexture(a);this._initQuad(e);
var {isStandardRasterTileSize:n,fbo:p}=this._getRasterFBO(e,b.width,b.height);u.process(a,this._quad,p,b);n||p.dispose();e.bindFramebuffer(h);e.setViewport(k.x,k.y,k.width,k.height);d.end(this.name)}};f._drawBitmap=function(a,b,c=!1){const {timeline:d,context:e}=a;d.begin(this.name);e.setStencilFunction(g.CompareFunction.EQUAL,b.stencilRef,255);b.updateTexture(a);if(c&&!b.processedTexture){b.updateProcessedTexture();if(!b.processedTexture){d.end(this.name);return}b.processed=!0}this._initBitmapCommonUniforms(b);
var h=b.symbolizerParameters.type;const k=y.getColorizer(h),{requestRender:n,allowDelayedRender:p}=a,{defines:C,program:q}=k.createProgram(a,b,c);p&&l.isSome(n)&&!q.compiled?n():(e.useProgram(q),h=this._getUniformInfos(h,e,q,C),this._quad||(this._quad=new w(e,[0,0,1,0,0,1,1,1])),k.bindTextureAndUniforms(a,q,b,h,c),this._quad.draw(),d.end(this.name))};f._initBitmapCommonUniforms=function(a){if(!a.commonUniforms){const b=t.getBasicGridUniforms(1,[0,0]),{transformGrid:c,width:d,height:e}=a,h=t.getCommonUniforms(c,
[d,e],[a.source.width,a.source.height],1,!1);a.commonUniforms={...b,...h,u_coordScale:a.coordScale}}};f._getRasterFBO=function(a,b,c){const d=b===v.TILE_SIZE||c===v.TILE_SIZE;return d?(this._fbo||(this._fbo=this._createNewFBO(a,b,c)),{isStandardRasterTileSize:d,fbo:this._fbo}):{isStandardRasterTileSize:d,fbo:this._createNewFBO(a,b,c)}};f._createNewFBO=function(a,b,c){const d=u.createTexture(a,b,c);return new A.FramebufferObject(a,{colorTarget:g.TargetType.TEXTURE,depthStencilTarget:g.DepthStencilTargetType.NONE,
width:b,height:c},d)};f._initQuad=function(a){this._quad||(this._quad=new w(a,[0,0,1,0,0,1,1,1]))};f._getUniformInfos=function(a,b,c,d){a=0<d.length?a+"-"+d.join("-"):a;if(this._rendererUniformInfos.has(a))return this._rendererUniformInfos.get(a);b=t.getUniformLocationInfos(b,c);this._rendererUniformInfos.set(a,b);return b};return r._createClass(m)}(z)});