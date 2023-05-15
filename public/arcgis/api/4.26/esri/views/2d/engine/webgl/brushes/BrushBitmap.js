// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ../VertexStream ./WGLBrush ../../../../webgl/enums".split(" "),function(k,q,m,r,t,b){const l={nearest:{defines:[],samplingMode:b.TextureSamplingMode.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:b.TextureSamplingMode.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:b.TextureSamplingMode.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:b.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,mips:!0}};
return function(f){function h(){var a=u.apply(this,arguments);a._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])};return a}k._inherits(h,f);var u=k._createSuper(h);f=h.prototype;f.dispose=function(){this._quad&&this._quad.dispose()};f.prepareState=function({context:a}){a.setBlendingEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0)};f.draw=function(a,c){const {context:g,renderingOptions:n,painter:v,requestRender:p,allowDelayedRender:w}=
a;if(c.source&&c.isReady){if("dynamic"===n.samplingMode){({state:e}=a);var d=c.resolution/c.pixelRatio/e.resolution;const x=Math.round(a.pixelRatio)!==a.pixelRatio;var e=e.rotation||1.05<d||.95>d||x||c.isSourceScaled||c.rotation?l.bilinear:l.nearest}else e=l[n.samplingMode];d=v.materialManager.getProgram(this._desc,e.defines);if(w&&q.isSome(p)&&!d.compiled)p();else{a.timeline.begin(this.name);"additive"===c.blendFunction?g.setBlendFunctionSeparate(b.BlendFactor.ONE,b.BlendFactor.ONE,b.BlendFactor.ONE,
b.BlendFactor.ONE):g.setBlendFunctionSeparate(b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA);g.setStencilFunction(b.CompareFunction.EQUAL,c.stencilRef,255);this._quad||(this._quad=new r(g,[0,0,1,0,0,1,1,1]));var {coordScale:y,computedOpacity:z,transforms:A}=c;c.setSamplingProfile(e);c.bind(a.context,m.TEXTURE_BINDING_BITMAP);g.useProgram(d);d.setUniformMatrix3fv("u_dvsMat3",A.dvs);d.setUniform1i("u_texture",m.TEXTURE_BINDING_BITMAP);d.setUniform2fv("u_coordScale",
y);d.setUniform1f("u_opacity",z);this._quad.draw();a.timeline.end(this.name)}}};return k._createClass(h)}(t)});