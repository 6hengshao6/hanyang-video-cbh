// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Handles ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec4 ../../../geometry/support/Ellipsoid ./AtmosphereType ./atmosphereUtils ./ChapmanAtmosphereTechnique ./ChapmanAtmosphereTechniqueConfiguration ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/enums".split(" "),function(n,q,r,g,h,p,t,u,v,e,w,f,k,x,y,
z,A){let B=function(){function l(a,b){this._view=a;this.type=w.AtmosphereType.Realistic;this._handles=new r;this._passParameters=new k.ChapmanAtmospherePassParameters;this._rootTileElevationMin=NaN;this._lowerBoundEarthRadius=e.earth.radius;this._fadeHaze=0;this._updateRadius(e.earth.radius);a=b.renderContext.rctx;this._updateRootTileElevationBounds();this._handles.add([p.watch(()=>this._view.basemapTerrain.rootTileElevationBounds,()=>this._updateRootTileElevationBounds()),p.watch(()=>this._view.basemapTerrain.visibleElevationBounds,
()=>this._updateVisibleElevationBounds())]);const d=new x.ChapmanAtmosphereTechniqueConfiguration;d.haze=!1;this._atmosphereTechnique=b.techniqueRepository.acquire(k.ChapmanAtmosphereTechnique,d);d.haze=!0;this._atmosphereHazeTechnique=b.techniqueRepository.acquire(k.ChapmanAtmosphereTechnique,d);this._vao=z.createQuadVAO(a,y.Pos2Tex)}var c=l.prototype;c.destroy=function(){this._atmosphereTechnique.release();this._atmosphereHazeTechnique.release();this._vao.dispose();this._handles.destroy()};c.render=
function(a){this._render(a,this._atmosphereTechnique,a.offscreenRenderingHelper.depthTexture)};c.renderHaze=function(a,b){this._fadeHaze=b;this._render(a,this._atmosphereHazeTechnique,a.offscreenRenderingHelper.linearDepthTexture)};c._render=function(a,b,d){if(!h.isNone(d)){this._update(a.bindParameters.camera);this._passParameters.depthTex=d;var m=a.rctx.bindTechnique(b,this._passParameters,a.bindParameters);a.offscreenRenderingHelper.renderDepthDetached(()=>this._renderCommon(m,a))}};c._renderCommon=
function(a,b){h.isNone(this._vao)||(b.rctx.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao),b.rctx.drawArrays(A.PrimitiveType.TRIANGLE_STRIP,0,4))};c._adjustRadiusForTesselation=function(a){return a*Math.cos(Math.PI/16/16)};c._updateRootTileElevationBounds=function(){const a=this._view.basemapTerrain.rootTileElevationBounds.min;a!==this._rootTileElevationMin&&(this._rootTileElevationMin=a,this._lowerBoundEarthRadius=e.earth.radius,this._updateVisibleElevationBounds())};c._updateVisibleElevationBounds=
function(){const a=this._adjustRadiusForTesselation(e.earth.radius+this._view.basemapTerrain.visibleElevationBounds.min);a<this._lowerBoundEarthRadius&&this._updateRadius(a)};c._updateRadius=function(a){this._lowerBoundEarthRadius=a;t.set(this._passParameters.radii,a,a+f.atmosphereHeight);this._passParameters.innerFadeDistance=2*Math.sqrt((2*a-f.innerAtmosphereDepth)*f.innerAtmosphereDepth)};c._update=function(a){if(!h.isNone(a)){a=u.squaredLength(a.eye);var b=Math.sqrt(a),d=a-this._passParameters.radii[1]*
this._passParameters.radii[1],m=g.clamp((b-this._passParameters.radii[0])/f.atmosphereHeight,0,1);v.set(this._passParameters.heightParameters,b,a,d,m);this._passParameters.altitudeFade=f.computeInnerAltitudeFade(b-this._lowerBoundEarthRadius);this._passParameters.hazeStrength=g.lerp(g.lerp(.6,1,g.smoothstep(9500,10500,b-e.earth.radius)),1,this._fadeHaze)}};l.isSupported=function(a){return a.renderContext.rctx.capabilities.depthTexture};return q._createClass(l)}();n.ChapmanAtmosphere=B;Object.defineProperty(n,
Symbol.toStringTag,{value:"Module"})});