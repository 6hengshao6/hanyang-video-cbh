// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Handles ../../../../core/has ../../../../core/maybe ../../../../core/PooledArray ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/boundedPlane ../../support/debugFlags ../../terrain/TerrainRenderer ../core/renderPasses/RenderPassManager ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/hud/HUDUniforms ./AnimationTimeStep ./basicInterfaces ./BoundingInfo ./depthRange ./depthRangeUtils ./glUtil3D ./Highlight ./Material ./OffscreenRendering ./RenderContext ./rendererUtils ./RenderFeature ./RenderPluginManager ./RenderSlot ./ShadowAccumulator ./ShadowHighlight ./ShadowMap ./SliceHelper ./SmaaRenderPass ./SSAOHelper ./TransparencyPassType ./edgeRendering/EdgeView ./edgeRendering/interfaces ../materials/renderers/MergedRenderer ../shaders/CompositingTechniqueConfiguration ../statistics/RendererPerformanceInfo ../../../support/RenderState ../../../webgl/enums".split(" "),
function(p,M,w,U,V,W,X,r,Q,z,x,va,Y,D,I,Z,aa,N,ba,q,y,ca,E,da,R,ea,fa,ha,v,ia,ja,ka,C,la,e,ma,na,O,oa,pa,qa,A,ra,J,sa,K,m,ta,B){p.Renderer=function(d){function L(a,c,f,g,l,k,n,t){var b=ua.call(this,{});b._stage=a;b._materialRepository=c;b._shaderTechniqueRepository=g;b._rctx=l;b._compositingHelper=k;b._magnifierHelper=n;b._requestRender=t;b._materialRenderers=new Q;b._needsTransparentPass=!1;b._hasHUDElements=!1;b._hasHighlights=!1;b._hasWater=!1;b._hasOverlayWater=!1;b._renderOverlay=h=>{};b._isRendering=
!1;b._fallbackDepthStencilTexture=null;b._sliceHelper=new oa;b._state=ta.RenderState.IDLE;b._renderStateFeatures=C.setupFeatureDefaults();b._antialiasingEnabled=!0;b._highQualityTransparencyEnabled=!0;b._terrainRenderingEnabled=!0;b._terrainTransparency=N.TransparencyMode.Opaque;b._waterReflectionEnabled=!1;b._ssaoEnabled=!1;b._hasAnimations=!1;b._animationTimestep=new ca.AnimationTimeStep;b._handles=new W;b._renderHiddenTransparentEdges=()=>{};b._oitUsed=!1;b._smaaPass=new pa.SmaaRenderPass(b._rctx,
g);t();b._offscreen=new ia.OffscreenRendering(b._rctx,b._compositingHelper);b.performanceInfo=new m.RendererPerformanceInfo(b._rctx);b._shadowMap=new O.ShadowMap(b._rctx,a.viewingMode);b._ssaoHelper=new qa.SSAOHelper(a.view,g,b._rctx,t);b._highlight=new ha.Highlight(g,b._rctx);b._shadowHighlight=new na.ShadowHighlight(b._rctx,a.viewingMode);b._shadowAccumulator=new ma.ShadowAccumulator(b._rctx,g,a,h=>{const F=b.shadowsEnabled;b._shadowMap.enabled=!0;b._prepare(h.camera,h.contentCamera);b._renderPlugins.prepareRender();
b._shadowMap.enabled=F},(h,F,P)=>{h.shadowMap.start(h.camera,F,P);b._renderShadowCascades(q.ShaderOutput.Shadow,h.shadowMap);h.camera.setGLViewport(b._rctx);b._prepare(h.camera,h.contentCamera)},t);b._renderContext=new ja.RenderContext(b._rctx,b._offscreen,b._shadowMap,b._ssaoHelper,b._sliceHelper);b._renderPlugins=new la.RenderPluginManager({renderContext:b._renderContext,techniqueRepository:g,textureRepository:f,materialRepository:b._materialRepository,requestRender:t,controller:a});b.renderPassManager=
new ba.RenderPassManager(b._rctx,b._shaderTechniqueRepository);b._renderPlugins.add(b.renderPassManager.slots(),b.renderPassManager);b._handles.add([z.watch(()=>b._stage.view.state.camera,()=>t(),z.syncAndInitial),z.watch(()=>aa.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES,h=>{b._renderHiddenTransparentEdges=h?()=>b._renderEdges(J.Transparency.TRANSPARENT):()=>{};t()},z.initial),z.watch(()=>b._ssaoEnabled||b.isFeatureEnabled(C.RenderFeature.SSAO),h=>b._ssaoHelper.enabled=h,z.syncAndInitial)]);return b}M._inherits(L,
d);var ua=M._createSuper(L);d=L.prototype;d.isFeatureEnabled=function(a,c=this._state){return r.unwrapOr(this._renderStateFeatures.get(c,a),!1)};d.setFeatureEnabled=function(a,c,f){this._renderStateFeatures.set(c,a,f);this.notifyChange("_renderStateFeatures");this._requestRender()};d.normalizeCtorArgs=function(){return{}};d.destroy=function(){this._handles.destroy();this._smaaPass.dispose();this._gpuTimerHandle=r.removeMaybe(this._gpuTimerHandle);this._materialRenderers.forAll(a=>a.dispose());this._materialRenderers.clear();
this._offscreen.dispose();this._fallbackDepthStencilTexture=r.disposeMaybe(this._fallbackDepthStencilTexture);this._shadowMap.dispose();this._ssaoHelper.dispose();this._highlight.dispose();this._shadowHighlight.dispose();this._shadowAccumulator.dispose();this._edgeView=r.destroyMaybe(this._edgeView);da.BoundingInfo.prune()};d.disposeOffscreenBuffers=function(){this._offscreen.dispose();this._shadowMap.disposeOffscreenBuffers();this._smaaPass.disable();this._ssaoHelper.disposeOffscreenBuffers()};d.ensureEdgeView=
function(){r.isNone(this._edgeView)&&(this._edgeView=new ra.EdgeView({rctx:this._rctx,renderSR:this._stage.view.renderSpatialReference,viewingMode:this._stage.viewingMode,techniqueRepository:this._shaderTechniqueRepository,setNeedsRender:()=>this._requestRender(),schedule:a=>this._stage.view.resourceController.immediate.schedule(a)}),this._handles.add(z.watch(()=>r.applySome(this._edgeView,a=>a.updating),()=>this._requestRender(),z.sync)),this._requestRender());return this._edgeView};d.setParameters=
function(a){const {_shadowMap:c,_bindParameters:f}=this;void 0!==a.screenSpaceReflectionsEnabled&&f.ssr.enabled!==a.screenSpaceReflectionsEnabled&&(f.ssr.enabled=a.screenSpaceReflectionsEnabled,this._requestRender());void 0!==a.shadowMap&&this._shadowMap.enabled!==a.shadowMap&&(this._shadowMap.enabled=a.shadowMap,this._requestRender());void 0!==a.shadowMapMaxCascades&&c.maxCascades!==a.shadowMapMaxCascades&&(c.maxCascades=a.shadowMapMaxCascades,this._requestRender());if(r.isSome(a.environment)){r.isSome(a.environment.weather)&&
(this._bindParameters.weather=a.environment.weather,this._bindParameters.weatherVisible=!!a.weatherVisible);void 0!==a.environment.lighting.ambientOcclusionEnabled&&this._ssaoEnabled!==a.environment.lighting.ambientOcclusionEnabled&&(this._ssaoEnabled=a.environment.lighting.ambientOcclusionEnabled,this._requestRender());void 0!==a.environment.lighting.waterReflectionEnabled&&this._waterReflectionEnabled!==a.environment.lighting.waterReflectionEnabled&&(this._waterReflectionEnabled=a.environment.lighting.waterReflectionEnabled,
this._requestRender());const g="virtual"!==a.environment.lighting.type;f.enableFillLights!==g&&(f.enableFillLights=g,this._requestRender())}a.background&&this._offscreen.background!==a.background&&(this._offscreen.background=a.background,this._requestRender());void 0!==a.antialiasingEnabled&&this._antialiasingEnabled!==a.antialiasingEnabled&&(this._antialiasingEnabled=a.antialiasingEnabled,this._requestRender());void 0!==a.highQualityTransparency&&this._highQualityTransparencyEnabled!==a.highQualityTransparency&&
(this._highQualityTransparencyEnabled=a.highQualityTransparency,this._requestRender());void 0!==a.defaultHighlightOptions&&(this._highlight.setDefaultOptions(a.defaultHighlightOptions),this._shadowHighlight.setDefaultOptions(a.defaultHighlightOptions),this._requestRender());void 0!==a.overlays&&this._bindParameters.overlays!==a.overlays&&(this._bindParameters.overlays=a.overlays,this._requestRender());void 0!==a.hasOverlayWater&&this._hasOverlayWater!==a.hasOverlayWater&&(this._hasOverlayWater=a.hasOverlayWater,
this._requestRender());void 0!==a.renderOverlay&&this._renderOverlay!==a.renderOverlay&&(this._renderOverlay=a.renderOverlay,this._requestRender());void 0!==a.slicePlane&&this._sliceHelper.plane!==a.slicePlane&&(this._sliceHelper.plane=r.unwrap(a.slicePlane),this._requestRender());void 0!==a.terrainRenderingEnabled&&this._terrainRenderingEnabled!==a.terrainRenderingEnabled&&(this._terrainRenderingEnabled=a.terrainRenderingEnabled,this._requestRender());void 0!==a.terrainTransparency&&this._terrainTransparency!==
a.terrainTransparency&&(this._terrainTransparency=a.terrainTransparency,this._requestRender());void 0!==a.shadowCastOptions&&this._shadowAccumulator.setOptions(a.shadowCastOptions)};d.modify=function(a,c){this._isRendering&&console.warn("Renderer.modify called while rendering");const {adds:f,removes:g,updates:l}=a;if(0!==f.length||0!==g.length||0!==l.length){var k=!1;ka.splitRenderGeometryChangeSetByMaterial(a).forEach((n,t)=>{if(!c.done){var b=this._materialRenderers.find(h=>h.material===t);r.isNone(b)&&
0<n.adds.length&&(b=new sa.MergedRenderer(this._rctx,this._materialRepository,t),this._materialRenderers.push(b));b&&(b.modify(n),b.isEmpty&&(k=!0));n.removes.forEach(h=>a.removes.removeUnordered(h));n.adds.forEach(h=>a.adds.removeUnordered(h));n.updates.forEach(h=>a.updates.removeUnordered(h));c.madeProgress()}});k&&this._materialRenderers.filterInPlace(n=>n.isEmpty?(n.dispose(),!1):!0);this._hasHighlights=this._materialRenderers.some(n=>n.hasHighlights);this._bindParameters.hasOccludees=this._materialRenderers.some(n=>
n.hasOccludees);this._hasWater=this._materialRenderers.some(n=>n.hasWater);this._hasHUDElements=this._materialRenderers.some(n=>n.requiresSlot(e.RenderSlot.LINE_CALLOUTS_HUD_DEPTH,q.ShaderOutput.Color)||n.requiresSlot(e.RenderSlot.HUD_MATERIAL,q.ShaderOutput.Color)||n.requiresSlot(e.RenderSlot.LABEL_MATERIAL,q.ShaderOutput.Color));this._requestRender()}};d.updateAnimation=function(a){const c=this._hasAnimations;this._hasAnimations=!1;this._materialRenderers.forAll(f=>this._hasAnimations=f.updateAnimation(a)||
this._hasAnimations);this._hasAnimations=this._renderPlugins.updateAnimation(a)||this._hasAnimations;this._hasAnimations!==c&&(this._gpuTimerHandle=c?r.removeMaybe(this._gpuTimerHandle):this.performanceInfo.enableGPUPerformanceInfo());return this._hasAnimations};d.resetAnimation=function(){this._animationTimestep.clear()};d.render=function(a,c,f,g,l){this._isRendering=!0;this.performanceInfo.startFrame();const {camera:k,contentCamera:n,mode:t}=f;this._state=t;this._renderOverlay(l);this.performanceInfo.advance(m.PerformanceCategory.OVERLAY);
this._renderContext.time=l;this._bindParameters.transparencyPassType=A.TransparencyPassType.NONE;var b=this._offscreen;b.setupRenderTarget(this.hasWaterReflection);f=Z.create(this._sliceHelper.plane);g===E.Decorations.OFF&&(this._sliceHelper.plane=null);this._rctx.bindFramebuffer(a);k.setGLViewport(this._rctx);this._prepare(k,n);this._renderPlugins.prepareRender();this.performanceInfo.advance(m.PerformanceCategory.PREPARE);var h=this._computeDepthRange(k);this._renderShadowMap(a,k,this._bindParameters.lighting.mainLight.direction,
h);this.performanceInfo.advance(m.PerformanceCategory.SHADOW_MAP);b.initializeFrame(k);this._ensureBindParameters(k,n);this._renderLinearDepth();this.performanceInfo.advance(m.PerformanceCategory.LINEAR_DEPTH);this._accumulateShadows(h,k,n);this.performanceInfo.advance(m.PerformanceCategory.ACCUMULATED_SHADOWS);this._renderNormal();this.performanceInfo.advance(m.PerformanceCategory.NORMALS);this._ensureBindParametersSSR(l);this._renderSSAO(l);this.performanceInfo.advance(m.PerformanceCategory.SSAO);
this._renderContext.output=q.ShaderOutput.Color;b.bindFramebuffer();l=this._terrainRenderingEnabled&&(this._terrainTransparency===N.TransparencyMode.Semitransparent||this._terrainTransparency===N.TransparencyMode.TransparentWithDraped);h=this._highQualityTransparency&&l;this._prepareOpaqueGeometrySlots();this._setMultipassTerrain(h);this._prepareSlots(e.RenderSlot.TRANSPARENT_TERRAIN);this._setMultipassTerrain(!1);h||this._prepareInternalSlots(this._materialRenderers,e.RenderSlot.LINE_CALLOUTS);this._renderOpaqueGeometry();
this.performanceInfo.advance(m.PerformanceCategory.OPAQUE);this._renderTerrainLinearDepth(h);this._setMultipassTerrain(h);this._renderEdges(J.Transparency.OPAQUE);this.performanceInfo.advance(m.PerformanceCategory.OPAQUE_EDGES);this._offscreen.bindTarget(this._offscreen.currentColorTarget,this._offscreen.mainDepth);this._renderSlot(e.RenderSlot.VOXEL);this.performanceInfo.advance(m.PerformanceCategory.VOXEL);this._renderHiddenTransparentEdges();const F=this._needsTransparentPass||this._renderPlugins.needsTransparentPass;
F&&(this._oitEnabled?this._renderOrderIndependentTransparency(G.Geometry):this._renderTransparentGeometry());this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT);this._renderGeometryLinearDepth(h);const P=this._renderHUDVisibility(h);h||this._renderInternalSlot(e.RenderSlot.LINE_CALLOUTS);this.performanceInfo.advance(m.PerformanceCategory.HUD_VISIBILITY);this._renderObjectAndLayerIdColor(c);this.performanceInfo.advance(m.PerformanceCategory.OBJECT_AND_LAYER_ID_COLOR);this._renderEdges(J.Transparency.TRANSPARENT,
h);this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_EDGES);this._renderTransparentTerrain();l&&P&&(h?this._renderLineCallouts(y.HUDTransparencyRenderStyle.Occluded):b.compositeTransparentTerrainOntoHUDVisibility(this._bindParameters),this._renderHUD(y.HUDTransparencyRenderStyle.Occluded,b.framebuffer),this.performanceInfo.advance(m.PerformanceCategory.HUD_OCCLUDED));this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_TERRAIN);this._setTerrainCulling(!1);l&&(b.compositeTransparentTerrainOntoMain(this._bindParameters),
h&&(this._renderEdges(J.Transparency.OPAQUE),this.performanceInfo.advance(m.PerformanceCategory.OPAQUE_EDGES),F&&(this._oitEnabled?this._renderOrderIndependentTransparency(G.Geometry):this._renderTransparentGeometry()),this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT),this._renderEdges(J.Transparency.TRANSPARENT),this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_EDGES)));h&&this._renderLineCallouts(y.HUDTransparencyRenderStyle.NotOccluded);this._setMultipassEnabled(!1);
this._shadowAccumulator.render(this._bindParameters);b.renderToTargets(()=>{this._prepareInternalSlots(this._materialRenderers,e.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);this._prepareSlots(e.RenderSlot.POSTPROCESSING_ENVIRONMENT_TRANSPARENT,e.RenderSlot.LASERLINES);this._renderInternalSlot(e.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);this._renderSlot(e.RenderSlot.POSTPROCESSING_ENVIRONMENT_TRANSPARENT);this._renderSlot(e.RenderSlot.LASERLINES)},b.currentColorTarget,b.mainDepth);
this.performanceInfo.advance(m.PerformanceCategory.ENVIRONMENT);this._renderPlugins.needsLaserlineWithContrastControl&&b.renderTmpAndCompositeToMain(()=>this._renderSlot(e.RenderSlot.LASERLINES_CONTRAST_CONTROL),this._bindParameters,K.AlphaMode.PremultipliedAlpha);this.performanceInfo.advance(m.PerformanceCategory.LASER_LINE);this._renderOccluded();this.performanceInfo.advance(m.PerformanceCategory.OCCLUDED);g=(c=g===E.Decorations.ON&&this._magnifierHelper.enabled)&&r.isNone(a)?this._offscreen.getFramebuffer(this._offscreen.tmpColor,
this._offscreen.tmpDepth):a;this._rctx.bindFramebuffer(g);b=this._offscreen.colorTexture;!this._renderAntiAliasing(b)&&r.isSome(b)&&this._compositingHelper.composite(this._bindParameters,b,K.AlphaMode.None);this.performanceInfo.advance(m.PerformanceCategory.ANTIALIASING);this._renderHUD(y.HUDTransparencyRenderStyle.NotOccluded,g);this.performanceInfo.advance(m.PerformanceCategory.HUD);this._renderHighlights(g,this._bindParameters);this.performanceInfo.advance(m.PerformanceCategory.HIGHLIGHTS);c&&
this._magnifierHelper.render(this._rctx,this._bindParameters);g!==a&&(this._rctx.bindFramebuffer(a),this._compositingHelper.composite(this._bindParameters,this._offscreen.tmpColorTexture,K.AlphaMode.None));this._disposeOITBuffers();this._renderContext.lastFrameCamera.copyFrom(this._bindParameters.camera);this._sliceHelper.plane=f;this._isRendering=!1;if(this.onPostRender)this.onPostRender();this.performanceInfo.finishFrame()};d._renderObjectAndLayerIdColor=function(a){if(r.isSome(a)&&X("enable-feature:objectAndLayerId-rendering")){const c=
this._renderContext.output;this._rctx.bindFramebuffer(a);this._offscreen.renderToFBO(()=>this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.ObjectAndLayerIdColor),[0,0,0,0],!0,!0);this._rctx.bindFramebuffer(a);this._offscreen.renderToFBO(()=>{this._bindParameters.renderTransparentlyOccludedHUD=y.HUDTransparencyRenderStyle.NotOccluded;this._renderInternalSlot(e.RenderSlot.HUD_MATERIAL)},void 0,!0,!0);this._renderContext.output=c}};d.finish=function(a){this._hasAnimations||this._animationTimestep.clear();
var c=this.performanceInfo.gpuSamplingEnabled;if((a=a===E.RenderRequestType.BACKGROUND)||c){const f=a?this.performanceInfo.elapsedTime:0;c=c?this.performanceInfo.totalGPUTimeSampler.last:this._rctx.gl.getError();this._animationTimestep.frame(Math.max(f,c),a)}};d.readDepthPixels=function(a,c,f){const g=this._offscreen.bindTarget(this._offscreen.linearDepth,this._offscreen.tmpDepth);this._needsLinearDepth||(this._ensureBindParameters(a,a),this._bindParameters.camera.setGLViewport(this._rctx),this._rctx.setClearColor(0,
0,0,0),this._rctx.clearSafe(B.ClearBufferBit.COLOR_BUFFER_BIT|B.ClearBufferBit.DEPTH_BUFFER_BIT|B.ClearBufferBit.STENCIL_BUFFER_BIT),this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.Depth));g.readPixels(c[0],c[1],c[2],c[3],B.PixelFormat.RGBA,B.PixelType.UNSIGNED_BYTE,f)};d.readHUDVisibility=function(a,c,f,g,l){this._offscreen.bindTarget(this._offscreen.hudVisibility).readPixels(a,c,f,g,B.PixelFormat.RGBA,B.PixelType.UNSIGNED_BYTE,l)};d.readAccumulatedShadow=function(a){return this._shadowAccumulator.readAccumulatedShadow(a[0],
a[1])};d._setMultipassTerrain=function(a){this._setMultipassEnabled(a);this._setTerrainCulling(a)};d._setMultipassEnabled=function(a){this._bindParameters.multipassTerrain.enabled=this._bindParameters.multipassGeometry.enabled=a};d._setTerrainCulling=function(a){this._bindParameters.multipassTerrain.cullAboveGround=a};d._prepareSlots=function(...a){this._renderPlugins.prepareSlots(a)};d._renderSlot=function(a){this._bindParameters.slot=a;this._renderPlugins.render()};d._renderEdges=function(a,c=!1){const f=
this._edgeView;r.isSome(f)&&f.shouldRender()&&this._offscreen.renderTmpAndCompositeToMain(()=>f.render(this._bindParameters,a),this._bindParameters,K.AlphaMode.Alpha,c)};d._renderShadowMap=function(a,c,f,g){const l=this._shadowMap;l.enabled&&this.isFeatureEnabled(C.RenderFeature.ShadowMapUpdate)&&(l.start(c,f,g),this._shadowHighlight.updateParameters(c,f),this._needsShadowHighlight?(this._renderShadowCascades(q.ShaderOutput.ShadowHighlight,this._shadowMap,k=>l.takeCascadeSnapshotTo(k,O.SnapshotSlot.Highlight)),
l.clear(),this._renderShadowCascades(q.ShaderOutput.ShadowExcludeHighlight,this._shadowMap,k=>{l.takeCascadeSnapshotTo(k,O.SnapshotSlot.Default);this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.ShadowHighlight)})):this._renderShadowCascades(q.ShaderOutput.Shadow),l.finish(a),c.setGLViewport(this._rctx))};d._renderShadowCascades=function(a,c=this._shadowMap,f=g=>{}){for(const g of c.cascades)g.camera.setGLViewport(this._rctx),this._prepare(g.camera,g.camera),this._renderGeometryAndTransparentTerrainPass(a),
f(g)};d._renderLinearDepth=function(){this._needsLinearDepth?this._offscreen.renderToTargets(()=>this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.Depth),this._offscreen.linearDepth,this._offscreen.tmpDepth,[0,0,0,0],!0,!0):this._offscreen.disposeTarget(this._offscreen.linearDepth);this._bindParameters.linearDepthTexture=this._offscreen.linearDepthTexture};d._renderTerrainLinearDepth=function(a){a?(a=this._renderContext.output,this._renderContext.output=q.ShaderOutput.Depth,this._offscreen.renderToTargets(()=>
this._renderTransparentTerrain(),this._offscreen.terrainLinearDepth,this._offscreen.tmpDepth,[-1E10,-1E10,-1E10,1],!0,!0),this._renderContext.output=a):this._offscreen.disposeTarget(this._offscreen.terrainLinearDepth);this._bindParameters.multipassTerrain.linearDepthTexture=this._offscreen.terrainLinearDepthTexture};d._renderGeometryLinearDepth=function(a){a?(a=this._renderContext.output,this._offscreen.renderToTargets(()=>this._renderGeometryPass(q.ShaderOutput.Depth),this._offscreen.geometryLinearDepth,
this._offscreen.tmpDepth,[1,1,1,1],!0,!0),this._renderContext.output=a):this._offscreen.disposeTarget(this._offscreen.geometryLinearDepth);this._bindParameters.multipassGeometry.linearDepthTexture=this._offscreen.geometryLinearDepthTexture};d._renderNormal=function(){this._needsNormal?this._offscreen.renderToTargets(()=>{this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.Normal)},this._offscreen.normal,this._offscreen.tmpDepth,[0,0,0,0],!0,!0):this._offscreen.disposeTarget(this._offscreen.normal)};
d._computeDepthRange=function(a){if(!this._needsDepthRange)return R.ZERO;const c=ea.depthRangeFromScene(a,this._materialRenderers,this._stage.layers);R.union(c,this.renderPlugins.queryDepthRange(a));c.near=Math.max(a.near,c.near);c.far=Math.min(a.far,c.far);return c};d._renderGeometryAndTransparentTerrainPass=function(a){this._renderContext.output=a;this._prepareSlots(e.RenderSlot.TRANSPARENT_TERRAIN);this._renderGeometryPass(a);this._renderTransparentTerrain()};d._renderGeometryPass=function(a){this._renderContext.output=
a;this._prepareSlots(e.RenderSlot.TRANSPARENT_MATERIAL);this._renderOpaqueGeometry();this._renderTransparentGeometry()};d._renderSSAO=function(a){this._ssaoHelper.render(this._bindParameters,a,this._offscreen.linearDepthTexture,this._offscreen.normalTexture)};d._prepareOpaqueGeometrySlots=function(){this._prepareSlots(e.RenderSlot.INTEGRATED_MESH,e.RenderSlot.OPAQUE_TERRAIN,e.RenderSlot.OPAQUE_MATERIAL,e.RenderSlot.POSTPROCESSING_ENVIRONMENT_OPAQUE);this._prepareInternalSlots(this._materialRenderers,
e.RenderSlot.OPAQUE_MATERIAL)};d._renderOpaqueGeometry=function(){this._renderSlot(e.RenderSlot.INTEGRATED_MESH);this._renderSlot(e.RenderSlot.OPAQUE_TERRAIN);this._renderInternalSlot(e.RenderSlot.OPAQUE_MATERIAL);this._renderSlot(e.RenderSlot.OPAQUE_MATERIAL);this._renderSlot(e.RenderSlot.POSTPROCESSING_ENVIRONMENT_OPAQUE)};d._renderTransparentGeometry=function(){this._renderInternalSlot(e.RenderSlot.TRANSPARENT_MATERIAL);this._renderSlot(e.RenderSlot.TRANSPARENT_MATERIAL)};d._renderTransparentTerrain=
function(){this._renderSlot(e.RenderSlot.TRANSPARENT_TERRAIN)};d._renderHUDVisibility=function(a){let c=!1;this._renderContext.offscreenRenderingHelper&&this._renderContext.offscreenRenderingHelper.renderHUDVisibility(()=>{this._bindParameters.hudVisibilityTexture=this._renderContext.offscreenRenderingHelper.hudVisibilityTexture;c=this._renderInternalSlot(e.RenderSlot.OCCLUSION_PIXELS)},a);return c};d._renderLineCallouts=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;a===y.HUDTransparencyRenderStyle.Occluded?
this._offscreen.renderToTargets(()=>this._renderInternalSlot(e.RenderSlot.LINE_CALLOUTS),this._offscreen.currentColorTarget,this._offscreen.tmpDepth,void 0,!0,!0):this._renderInternalSlot(e.RenderSlot.LINE_CALLOUTS)};d._renderHUD=function(a,c){this._hasHUDElements&&(this._oitEnabled?(this._renderOrderIndependentTransparency(G.HUD,a),this._rctx.bindFramebuffer(c),this._compositingHelper.composite(this._bindParameters,this._offscreen.hudColorTexture,K.AlphaMode.PremultipliedAlpha)):a===y.HUDTransparencyRenderStyle.Occluded?
this._offscreen.renderToTargets(()=>this._renderHUDElements(y.HUDTransparencyRenderStyle.Occluded),this._offscreen.currentColorTarget,this._offscreen.tmpDepth,void 0,!0,!0):this._renderHUDElements(a))};d._renderHUDElements=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;this._prepareInternalSlots(this._materialRenderers,e.RenderSlot.LINE_CALLOUTS_HUD_DEPTH,e.RenderSlot.HUD_MATERIAL,e.RenderSlot.LABEL_MATERIAL);this._renderInternalSlot(e.RenderSlot.LINE_CALLOUTS_HUD_DEPTH);this._renderInternalSlot(e.RenderSlot.HUD_MATERIAL);
this._renderInternalSlot(e.RenderSlot.LABEL_MATERIAL)};d._renderHighlights=function(a,c){if(this._needsHighlight){var f=this._highlight,g=this._offscreen.renderToTargets(()=>{this._renderGeometryAndTransparentTerrainPass(q.ShaderOutput.Highlight);this._rctx.clearSafe(B.ClearBufferBit.DEPTH_BUFFER_BIT);this._renderHUDElements(y.HUDTransparencyRenderStyle.Both)},this._offscreen.highlight,this._offscreen.tmpDepth,[0,0,0,0],!0,!0);this._bindParameters.highlightColorTexture=g.colorTexture;this._needsShadowHighlight&&
this._shadowHighlight.render(c,a);f.render(this._bindParameters,g,a)}else this._offscreen.disposeTarget(this._offscreen.highlight)};d._accumulateShadows=function(a,c,f){this._needsShadowCast&&r.isSome(this._offscreen.linearDepthTexture)&&this._shadowAccumulator.renderAccumulation(this._offscreen.linearDepthTexture,a,c,f)};d._renderOrderIndependentTransparency=function(a,c=y.HUDTransparencyRenderStyle.Both){const f=a===G.HUD,g=f?()=>this._renderHUDElements(c):()=>this._renderTransparentGeometry();
a=k=>{this._bindParameters.transparencyPassType=k;this._offscreen.renderOITPass(()=>g(),k,f)};const l=this._renderContext.output;f||(this._renderContext.output=q.ShaderOutput.Alpha,this._bindParameters.transparencyPassType=A.TransparencyPassType.Alpha,this._prepareSlots(e.RenderSlot.TRANSPARENT_MATERIAL),this._renderContext.output=q.ShaderOutput.Color,this._bindParameters.transparencyPassType=A.TransparencyPassType.Color,this._prepareSlots(e.RenderSlot.TRANSPARENT_MATERIAL),this._bindParameters.transparencyPassType=
A.TransparencyPassType.FrontFace,this._prepareSlots(e.RenderSlot.TRANSPARENT_MATERIAL));this._renderContext.output=q.ShaderOutput.Alpha;a(A.TransparencyPassType.Alpha);this._renderContext.output=q.ShaderOutput.Color;a(A.TransparencyPassType.Color);a(A.TransparencyPassType.FrontFace);this._offscreen.compositeTransparentOntoOpaque(this._bindParameters,f);this._bindParameters.transparencyPassType=A.TransparencyPassType.NONE;this._renderContext.output=l;this._oitUsed=!0};d._disposeOITBuffers=function(){this._oitUsed||
(this._offscreen.disposeTarget(this._offscreen.alphaFloatTarget),this._offscreen.disposeTarget(this._offscreen.colorFloatTarget),this._offscreen.disposeTarget(this._offscreen.frontFaceTarget));this._oitUsed=!1};d._renderOccluded=function(){let a=0;u.clear();this._materialRenderers.forAll(k=>{k.material&&k.material.isVisible()&&k.material.renderOccluded===v.RenderOccludedFlag.OccludeAndTransparentStencil&&(a|=k.material.renderOccluded,u.push(k))});const c=this._offscreen,f=(k,n,t,b,h)=>{0!==(a&n)&&
(c.renderToTargets(t,c.tmpColor,c.mainDepth,[0,0,0,0],b,h),c.compositeOccludedOntoMain(this._bindParameters,k))};0!==u.length&&(this._prepareInternalSlots(u,e.RenderSlot.OCCLUDER_MATERIAL,e.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL),this._renderInternalSlot(e.RenderSlot.OCCLUDER_MATERIAL,u),f(.5,v.RenderOccludedFlag.OccludeAndTransparentStencil,()=>this._renderInternalSlot(e.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL,u),!1,!1));u.clear();this._materialRenderers.forAll(k=>{k.material&&k.material.isVisible()&&
(k.material.renderOccluded===v.RenderOccludedFlag.OccludeAndTransparent||k.material.renderOccluded===v.RenderOccludedFlag.Transparent||k.material.renderOccluded===v.RenderOccludedFlag.Opaque)&&(a|=k.material.renderOccluded,u.push(k))});const g=this._renderPlugins.renderOccludedFlags;if(a|=g){var l=k=>{this._renderContext.renderOccludedMask=k;this._prepareInternalSlots(u,e.RenderSlot.OPAQUE_MATERIAL,e.RenderSlot.TRANSPARENT_MATERIAL,e.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);g>v.RenderOccludedFlag.Occlude&&
this._renderSlot(e.RenderSlot.OCCLUDED_TERRAIN);this._renderInternalSlot(e.RenderSlot.OPAQUE_MATERIAL,u);this._renderInternalSlot(e.RenderSlot.TRANSPARENT_MATERIAL,u);this._renderInternalSlot(e.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,u);this._renderContext.resetRenderOccludedMask()};this._renderContext.output=q.ShaderOutput.Color;f(.5,v.RenderOccludedFlag.OccludeAndTransparent,()=>l(v.RenderOccludedFlag.OccludeAndTransparent),!0,E.StencilBits.OutlineVisualElementMask);f(.5,v.RenderOccludedFlag.Transparent,
()=>l(v.RenderOccludedFlag.Transparent),!0,E.StencilBits.OutlineVisualElementMask);f(1,v.RenderOccludedFlag.Opaque,()=>l(v.RenderOccludedFlag.Opaque),!0,E.StencilBits.OutlineVisualElementMask);u.clear()}};d._renderAntiAliasing=function(a){if(this._antialiasing){if(this._smaaPass.enable(()=>this._requestRender())&&r.isSome(a))return this._smaaPass.render(a),!0}else this._smaaPass.disable();return!1};d._prepare=function(a,c){this._needsTransparentPass=this._materialRenderers.some(f=>f.requiresSlot(e.RenderSlot.TRANSPARENT_MATERIAL,
q.ShaderOutput.Color));this._bindParameters.camera=a;this._bindParameters.contentCamera=c};d._ensureBindParameters=function(a,c){this._bindParameters.camera=a;this._bindParameters.contentCamera=c;a=this._renderContext.offscreenRenderingHelper;this._bindParameters.hudVisibilityTexture=a.hudVisibilityTexture;this._bindParameters.mainColorTexture=a.mainColorTexture;this._bindParameters.highlightDepthTexture=a.depthTexture??this._getFallbackDepthTexture()};d._ensureBindParametersSSR=function(a){this._bindParameters.ssr.enabled=
this.hasWaterReflection;if(this._bindParameters.ssr.enabled){r.isNone(this._waterReflectionEnableTime)&&(this._waterReflectionEnableTime=a);this._renderContext.lastFrameCamera.equals(this._bindParameters.camera)?this._reprojectionMatrix=I.IDENTITY:(D.invert(S,this._bindParameters.camera.viewMatrix),D.invert(T,this._bindParameters.camera.projectionMatrix),D.multiply(H,S,T),D.multiply(H,this._renderContext.lastFrameCamera.viewMatrix,H),D.multiply(H,this._renderContext.lastFrameCamera.projectionMatrix,
H),this._reprojectionMatrix=H);this._bindParameters.ssr.lastFrameColorTexture=this._offscreen.lastFrameColorTexture;const c=this._stage.view.qualitySettings.fadeDuration;this._bindParameters.ssr.fadeFactor=0<c?Math.min(c,a-this._waterReflectionEnableTime)/c:1;1>this._bindParameters.ssr.fadeFactor&&this._requestRender()}else this._waterReflectionEnableTime=this._bindParameters.ssr.lastFrameColorTexture=null};d._prepareInternalSlots=function(a,...c){for(const f of c)this._bindParameters.slot=f,a.forAll(g=>
{g.material.shouldRender(this._renderContext)&&g.prepareTechnique(this._renderContext)})};d._renderInternalSlot=function(a,c=this._materialRenderers){let f=!1;this._bindParameters.slot=a;c.forAll(g=>{if(g.material.shouldRender(this._renderContext)){const l=g.prepareTechnique(this._renderContext);r.isSome(l)&&(g.render(this._renderContext,l),f=!0)}});return f};d._getFallbackDepthTexture=function(){this._fallbackDepthStencilTexture||(this._fallbackDepthStencilTexture=fa.createEmptyDepthTexture(this._rctx));
return this._fallbackDepthStencilTexture};M._createClass(L,[{key:"_bindParameters",get:function(){return this._renderContext.bindParameters}},{key:"_antialiasing",get:function(){return this._antialiasingEnabled||this.isFeatureEnabled(C.RenderFeature.Antialiasing)}},{key:"_highQualityTransparency",get:function(){return this._highQualityTransparencyEnabled||this.isFeatureEnabled(C.RenderFeature.HighQualityTransparency)}},{key:"hasWaterReflection",get:function(){return this.hasWater&&(this._waterReflectionEnabled||
this.isFeatureEnabled(C.RenderFeature.WaterReflection))}},{key:"hasWater",get:function(){return this._hasWater||this._hasOverlayWater}},{key:"updating",get:function(){return this._antialiasing&&this._smaaPass.updating||r.isSome(this._edgeView)&&this._edgeView.updating||this._shadowAccumulator.running||!this.isCameraFinal}},{key:"edgeView",get:function(){return this._edgeView}},{key:"isCameraFinal",get:function(){return D.equals(this._bindParameters.ssr.reprojectionMatrix,I.IDENTITY)}},{key:"_reprojectionMatrix",
set:function(a){V.update(this._bindParameters.ssr.reprojectionMatrix,a)&&this.notifyChange("isCameraFinal")}},{key:"shadowsEnabled",get:function(){return!!this._shadowMap?.enabled}},{key:"hasSlicePlane",get:function(){return!!this._sliceHelper.plane}},{key:"renderPlugins",get:function(){return this._renderPlugins}},{key:"_hasOITSupport",get:function(){return this._rctx.driverTest.floatBufferBlend.result}},{key:"_oitEnabled",get:function(){return this._highQualityTransparency&&this._hasOITSupport}},
{key:"animationTimestep",get:function(){return this._animationTimestep.value}},{key:"animationTimeDilation",get:function(){return this._animationTimestep.timeDilation}},{key:"_needsLinearDepth",get:function(){return this._ssaoHelper.active||this._renderPlugins.needsLinearDepth||this.hasWaterReflection||this._needsShadowHighlight||this._needsShadowCast}},{key:"_needsNormal",get:function(){return this._ssaoHelper.active}},{key:"_needsDepthRange",get:function(){return this._shadowMap.enabled||this._needsShadowCast}},
{key:"_needsHighlight",get:function(){return this._hasHighlights||this._renderPlugins.needsHighlight}},{key:"_needsShadowHighlight",get:function(){return this._shadowMap.enabled&&this._shadowHighlight.isVisible&&this._needsHighlight}},{key:"_needsShadowCast",get:function(){return this._shadowAccumulator.isAccumulating}},{key:"gpuMemoryUsage",get:function(){return{offscreen:this._offscreen?.gpuMemoryUsage??0,highlights:(this._highlight?.gpuMemoryUsage??0)+(this._shadowHighlight?.gpuMemoryUsage??0),
shadows:this._shadowMap?.gpuMemoryUsage??0,ssao:this._ssaoHelper?.gpuMemoryUsage??0}}},{key:"test",get:function(){const a=this;return{offscreen:this._offscreen,shadowMap:this._shadowMap,ssao:this._ssaoHelper,highlight:this._highlight,lighting:this._bindParameters.lighting,materialRenderers:this._materialRenderers,shadowAccumulator:this._shadowAccumulator,weatherIsFading:this._bindParameters.cloudsFade.isFading,resetRenderStateFeatures:()=>{a._renderStateFeatures=C.setupFeatureDefaults()},getFramebufferTexture:c=>
{switch(c){case p.FramebufferId.Color:return a._offscreen.colorTexture;case p.FramebufferId.LinearDepth:return a._offscreen.linearDepthTexture;case p.FramebufferId.Normals:return a._offscreen.normalTexture;case p.FramebufferId.ShadowMap:return a._shadowMap.depthTexture;case p.FramebufferId.HudVisibility:return a._offscreen.hudVisibilityTexture;case p.FramebufferId.Highlight:return a._offscreen.highlightTexture}}}}}]);return L}(U);w.__decorate([x.property()],p.Renderer.prototype,"_shadowAccumulator",
void 0);w.__decorate([x.property()],p.Renderer.prototype,"_state",void 0);w.__decorate([x.property()],p.Renderer.prototype,"_renderStateFeatures",void 0);w.__decorate([x.property()],p.Renderer.prototype,"_antialiasingEnabled",void 0);w.__decorate([x.property({readOnly:!0})],p.Renderer.prototype,"_antialiasing",null);w.__decorate([x.property()],p.Renderer.prototype,"_ssaoEnabled",void 0);w.__decorate([x.property()],p.Renderer.prototype,"_smaaPass",void 0);w.__decorate([x.property({autoDestroy:!0})],
p.Renderer.prototype,"_edgeView",void 0);w.__decorate([x.property()],p.Renderer.prototype,"updating",null);w.__decorate([x.property()],p.Renderer.prototype,"isCameraFinal",null);p.Renderer=w.__decorate([Y.subclass("esri.views.3d.webgl-engine.lib.Renderer")],p.Renderer);var G;(function(d){d[d.Geometry=0]="Geometry";d[d.HUD=1]="HUD"})(G||(G={}));p.FramebufferId=void 0;(function(d){d[d.Color=0]="Color";d[d.LinearDepth=1]="LinearDepth";d[d.Normals=2]="Normals";d[d.ShadowMap=3]="ShadowMap";d[d.HudVisibility=
4]="HudVisibility";d[d.Highlight=5]="Highlight"})(p.FramebufferId||(p.FramebufferId={}));const u=new Q,T=I.create(),S=I.create(),H=I.create();Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});