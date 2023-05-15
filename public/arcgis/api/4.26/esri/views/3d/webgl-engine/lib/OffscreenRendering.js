// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./RenderTargetHelper ./TransparencyPassType ../shaders/CompositingTechniqueConfiguration ../../../webgl/context-util ../../../webgl/enums".split(" "),function(n,p,q,r,k,l,t,e){let w=function(){function m(a,c){this._rctx=a;this._compositingHelper=c;this._mainColorTarget=0;this._dimensions={width:4,height:4};this._background={type:"color",color:[0,0,0,1]};const g=a.type===t.ContextType.WEBGL2,b=this._renderTargetHelper=
new r.RenderTargetHelper(a);this._mainColorTargets=[b.registerColorTarget({name:"mainColorTarget0"}),b.registerColorTarget({name:"mainColorTarget1"})];this.frontFaceTarget=b.registerColorTarget({name:"frontFaceTarget"});a=f=>b.registerColorTarget({name:f,dataType:e.PixelType.FLOAT,internalFormat:g?e.SizedPixelFormat.RGBA32F:e.PixelFormat.RGBA,samplingMode:e.TextureSamplingMode.NEAREST});this.colorFloatTarget=a("colorFloatTarget");this.alphaFloatTarget=a("alphaFloatTarget");this.mainDepth=b.registerDepthTarget({name:"mainDepth"});
this.linearDepth=b.registerColorTarget({name:"linearDepth",samplingMode:e.TextureSamplingMode.NEAREST});this.terrainLinearDepth=b.registerColorTarget({name:"terrainLinearDepth"});this.geometryLinearDepth=b.registerColorTarget({name:"geometryLinearDepth"});this.normal=b.registerColorTarget({name:"normal"});this.highlight=b.registerColorTarget({name:"highlight",internalFormat:g?e.SizedPixelFormat.RGBA4:e.PixelFormat.RGBA,dataType:e.PixelType.UNSIGNED_SHORT_4_4_4_4});this.hudVisibility=b.registerColorTarget({name:"hudVisibility",
internalFormat:g?e.SizedPixelFormat.RGBA4:e.PixelFormat.RGBA,dataType:e.PixelType.UNSIGNED_SHORT_4_4_4_4});this.tmpColor=b.registerColorTarget({name:"tmpColor"});this.tmpDepth=b.registerDepthTarget({name:"tmpDepth"});this.hudColor=b.registerColorTarget({name:"hudColor"})}var d=m.prototype;d.dispose=function(){this._renderTargetHelper.dispose()};d.getFramebuffer=function(a,c){return this._renderTargetHelper.getFramebuffer(this._dimensions,a,c)};d.setupRenderTarget=function(a){a||(this._mainColorTarget=
0,this.disposeTarget(this._mainColorTargets[1]));this._mainColorTarget=0===this._mainColorTarget&&a?1:0};d.initializeFrame=function(a){const c=this._rctx;this._dimensions.width=a.fullWidth;this._dimensions.height=a.fullHeight;this.bindTarget(this.currentColorTarget,this.mainDepth);c.setClearStencil(0);a=this._background.color;c.setClearColor(a[0]*a[3],a[1]*a[3],a[2]*a[3],a[3]);c.clearSafe(e.ClearBufferBit.COLOR_BUFFER_BIT|e.ClearBufferBit.DEPTH_BUFFER_BIT|e.ClearBufferBit.STENCIL_BUFFER_BIT)};d.composite=
function(a){q.isSome(this.colorTexture)&&this._compositingHelper.composite(a,this.colorTexture,l.AlphaMode.None)};d.renderTmpAndCompositeToMain=function(a,c,g,b=!1){this.renderToTargets(a,this.tmpColor,b?this.tmpDepth:this.mainDepth,u);this._compositingHelper.composite(c,this._getColorTexture(this.tmpColor),g)};d.renderHUDVisibility=function(a,c=!1){this.renderToTargets(a,this.hudVisibility,c?this.tmpDepth:this.mainDepth,v)};d.compositeTransparentTerrainOntoHUDVisibility=function(a){this.renderToTargets(()=>
this._compositingHelper.compositeHUD(a,this._getColorTexture(this.tmpColor)),this.hudVisibility,this.tmpDepth)};d.renderOITPass=function(a,c,g){let b,f;switch(c){case k.TransparencyPassType.Color:b=this.colorFloatTarget;f=[0,0,0,0];break;case k.TransparencyPassType.Alpha:b=this.alphaFloatTarget;f=[1,1,1,1];break;case k.TransparencyPassType.FrontFace:b=this.frontFaceTarget,f=[0,0,0,0]}g?this.renderToTargets(a,b,this.tmpDepth,f,!0,!0):this.renderToTargets(a,b,this.mainDepth,f,!1)};d.compositeTransparentTerrainOntoMain=
function(a){this.bindFramebuffer();this._compositingHelper.composite(a,this._getColorTexture(this.tmpColor),l.AlphaMode.PremultipliedAlpha)};d.compositeOccludedOntoMain=function(a,c){this.bindFramebuffer();this._compositingHelper.composite(a,this._getColorTexture(this.tmpColor),l.AlphaMode.PremultipliedAlpha,c)};d.compositeTransparentOntoOpaque=function(a,c){c?(this.bindTarget(this.hudColor,this.tmpDepth),this._rctx.setClearColor(0,0,0,1E-13),this._rctx.clearSafe(e.ClearBufferBit.COLOR_BUFFER_BIT)):
this.bindFramebuffer();this._compositingHelper.compositeOIT(a,this._getColorTexture(this.colorFloatTarget),this._getColorTexture(this.alphaFloatTarget),this._getColorTexture(this.frontFaceTarget))};d.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)};d.renderDepthDetached=function(a){this.bindTarget(this.currentColorTarget);a();this.bindTarget(this.currentColorTarget,this.mainDepth)};d.disposeTarget=function(a){this._renderTargetHelper.disposeTargetResource(a)};d.renderToFBO=
function(a,c,g=!1,b=!1){const f=this._rctx;let h=0;c&&(f.setClearColor(c[0],c[1],c[2],Math.max(1E-13,c[3])),h|=e.ClearBufferBit.COLOR_BUFFER_BIT);g&&(h|=e.ClearBufferBit.DEPTH_BUFFER_BIT);!1===b?b=0:(!0===b&&(b=255),h|=e.ClearBufferBit.STENCIL_BUFFER_BIT);h&&f.clearSafe(h,b);a();f.gl.flush();this.bindTarget(this.currentColorTarget,this.mainDepth)};d.renderToTargets=function(a,c,g,b,f=!1,h=!1){c=this.bindTarget(c,g);this.renderToFBO(a,b,f,h);return c};d.bindTarget=function(a,c){a=this._renderTargetHelper.getFramebuffer(this._dimensions,
a,c);this._rctx.bindFramebuffer(a);return a};d._getColorTexture=function(a){return this._renderTargetHelper.getColorTexture(a,this._dimensions)};p._createClass(m,[{key:"width",get:function(){return this._dimensions.width}},{key:"height",get:function(){return this._dimensions.height}},{key:"background",get:function(){return this._background},set:function(a){this._background=a}},{key:"currentColorTarget",get:function(){return this._mainColorTargets[this._mainColorTarget]}},{key:"previousColorTarget",
get:function(){return this._mainColorTargets[1-this._mainColorTarget]}},{key:"framebuffer",get:function(){return this.getFramebuffer(this.currentColorTarget,this.mainDepth)}},{key:"colorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.currentColorTarget)}},{key:"depthTexture",get:function(){return this._renderTargetHelper.getAllocatedDepthTexture(this.mainDepth)}},{key:"linearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.linearDepth)}},
{key:"terrainLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.terrainLinearDepth)}},{key:"geometryLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.geometryLinearDepth)}},{key:"lastFrameColorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.previousColorTarget)}},{key:"normalTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.normal)}},
{key:"highlightTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.highlight)}},{key:"hudVisibilityTexture",get:function(){return this._getColorTexture(this.hudVisibility)}},{key:"tmpColorTexture",get:function(){return this._getColorTexture(this.tmpColor)}},{key:"hudColorTexture",get:function(){return this._getColorTexture(this.hudColor)}},{key:"mainColorTexture",get:function(){return this._getColorTexture(this.currentColorTarget)}},{key:"gpuMemoryUsage",get:function(){let a=
0;this._renderTargetHelper&&(a+=this._renderTargetHelper.gpuMemoryUsage);return a}}]);return m}();const u=[0,0,0,0],v=[0,1,0,1];n.OffscreenRendering=w;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});