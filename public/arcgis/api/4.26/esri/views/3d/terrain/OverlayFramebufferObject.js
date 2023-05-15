// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2f32 ../../webgl/enums ../../webgl/FramebufferObject".split(" "),function(f,g,h,k,b,l){let m=function(){function d(a,e){this._size=k.create();this._fbo=null;this._fbo=new l.FramebufferObject(a,{colorTarget:b.TargetType.TEXTURE,depthStencilTarget:b.DepthStencilTargetType.NONE},{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,
samplingMode:b.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,hasMipmap:e,maxAnisotropy:8,width:0,height:0})}var c=d.prototype;c.dispose=function(){this._fbo=h.disposeMaybe(this._fbo)};c.getTexture=function(){return this._fbo?this._fbo.colorTexture:null};c.isValid=function(){return null!==this._fbo};c.resize=function(a,e){this._size[0]=a;this._size[1]=e;this._fbo.resize(this._size[0],this._size[1])};c.bind=function(a){a.bindFramebuffer(this._fbo)};c.generateMipMap=function(){const a=this._fbo.colorTexture;
a.descriptor.hasMipmap&&a.generateMipmap()};c.disposeRenderTargetMemory=function(){this._fbo?.resize(0,0)};g._createClass(d,[{key:"gpuMemoryUsage",get:function(){return this._fbo?.gpuMemoryUsage??0}}]);return d}();f.OverlayFramebufferObject=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});