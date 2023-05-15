// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","../../../../../webgl/enums","../../../../../webgl/FramebufferObject","../../../../../webgl/Texture"],function(h,k,c,l,m){function g(a,b,d){b=new m.Texture(a,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,width:b,height:d,samplingMode:c.TextureSamplingMode.LINEAR});a=new l.FramebufferObject(a,{colorTarget:c.TargetType.TEXTURE,
depthStencilTarget:c.DepthStencilTargetType.STENCIL_RENDER_BUFFER},b);return[b,a]}return function(){function a(){this._height=this._width=void 0;this._resources=null}var b=a.prototype;b.dispose=function(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=k.nullifyNonNullableForDispose(this._resources))};b._initialize=function(d,e,f){this._width=e;this._height=
f;const [n,p]=g(d,e,f),[q,r]=g(d,e,f);this._resources={sharedBlur1Tex:n,sharedBlur1Fbo:p,sharedBlur2Tex:q,sharedBlur2Fbo:r}};b.setup=function(d,e,f){!this._resources||this._width===e&&this._height===f||this.dispose();this._resources||this._initialize(d,e,f)};h._createClass(a,[{key:"sharedBlur1Tex",get:function(){return this._resources.sharedBlur1Tex}},{key:"sharedBlur1Fbo",get:function(){return this._resources.sharedBlur1Fbo}},{key:"sharedBlur2Tex",get:function(){return this._resources.sharedBlur2Tex}},
{key:"sharedBlur2Fbo",get:function(){return this._resources.sharedBlur2Fbo}}]);return a}()});