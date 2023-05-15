// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../chunks/vec3f64 ../../../../geometry/support/lineSegment ../core/shaderModules/interfaces ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/Laserlines.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(p,g,e,q,d,m,h,r,f,t,u,v,n,k){h=function(c){function b(){var a=
l.apply(this,arguments);a.innerColor=d.fromValues(1,1,1);a.innerWidth=1;a.glowColor=d.fromValues(1,.5,0);a.glowWidth=8;a.glowFalloff=8;a.globalAlpha=.75;a.globalAlphaContrastBoost=2;a.angleCutoff=q.deg2rad(6);a.pointDistanceOrigin=d.create();a.pointDistanceTarget=d.create();a.lineVerticalPlaneSegment=m.create();a.intersectsLineSegment=m.create();a.intersectsLineRadius=3;a.heightManifoldTarget=d.create();a.lineStartWorld=d.create();a.lineEndWorld=d.create();return a}e._inherits(b,c);var l=e._createSuper(b);
return e._createClass(b)}(h.NoParameters);f=function(c){function b(){return l.apply(this,arguments)}e._inherits(b,c);var l=e._createSuper(b);c=b.prototype;c.initializeProgram=function(a){return new u.Program(a.rctx,b.shader.get().build(this.configuration),t.Default3D)};c.initializePipeline=function(){return k.makePipelineState({blending:k.simpleBlendingParams(n.BlendFactor.ONE,n.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:k.defaultColorWriteParams})};return e._createClass(b)}(f.ShaderTechnique);f.shader=
new r.ReloadableShaderModule(v.LaserlinesShader,()=>new Promise((c,b)=>p(["./Laserlines.glsl"],c,b)));g.LaserlinePassParameters=h;g.LaserlineTechnique=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});