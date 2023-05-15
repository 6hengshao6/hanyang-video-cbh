// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Logger ../../core/maybe ./BufferObject ./checkWebGLError ./context-util ./enums ./Renderbuffer ./Texture ./Util".split(" "),function(x,E,F,t,G,v,H,c,r,q,y){function p(g){return null!=g&&"type"in g&&"texture"===g.type}function z(g){return null!=g&&"type"in g&&"renderbuffer"===g.type}function A(g){return p(g)||null!=g&&"pixelFormat"in g}function u(g,e){g.target!==c.TextureType.TEXTURE_2D&&g.target!==c.TextureType.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!");
void 0!==e.width&&0<=e.width&&void 0!==e.height&&0<=e.height?e.width===g.width&&e.height===g.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=g.width,e.height=g.height)}function w(g,e){void 0!==e.width&&0<=e.width&&void 0!==e.height&&0<=e.height?e.width===g.width&&e.height===g.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=g.width,e.height=g.height)}function B(g){return g.descriptor.target===c.TextureType.TEXTURE_CUBE_MAP?
c.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X:c.TextureType.TEXTURE_2D}let D=function(){function g(a,b,d=null,f=null){this._context=a;this._stencilAttachment=this._depthAttachment=this._glName=null;this._colorAttachments=new Map;this._depthStencilTexture=null;this._initialized=!1;this._desc={...b};a.instanceCounter.increment(c.ResourceType.FramebufferObject,this);if(t.isSome(d))for(Array.isArray(d)||(d=[d]),a=0;a<d.length;++a){b=d[a];const k=c.ColorAttachment.COLOR_ATTACHMENT0+a;let h;A(b)?(p(b)?(h=b.descriptor,
this._colorAttachments.set(k,b)):(h=b,this._colorAttachments.set(k,new q.Texture(this._context,h))),u(h,this._desc)):(z(b)?(h=b.descriptor,this._colorAttachments.set(k,b)):(h=b,this._colorAttachments.set(k,new r.Renderbuffer(this._context,h))),w(h,this._desc));this._validateColorAttachmentPoint(k)}t.isSome(f)&&(A(f)?(this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),p(f)?(d=f.descriptor,this._depthStencilTexture=
f):(d=f,this._depthStencilTexture=new q.Texture(this._context,d)),u(d,this._desc)):(z(f)?d=f.descriptor:(d=f,f=new r.Renderbuffer(this._context,d)),a=this._desc.depthStencilTarget??c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER,a===c.DepthStencilTargetType.STENCIL_RENDER_BUFFER?this._stencilAttachment=f:a===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER||a===c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=f:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),
this._desc.depthStencilTarget=a,w(d,this._desc)))}var e=g.prototype;e.dispose=function(){if(this._desc){var a=this._context.getBoundFramebufferObject();this._disposeColorAttachments();this._disposeDepthStencilAttachments();this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null);this._context.bindFramebuffer(a);this._context.instanceCounter.decrement(c.ResourceType.FramebufferObject,this);this._desc=null}};e.getColorTexture=function(a){return(a=this._colorAttachments.get(a))&&
p(a)?a:null};e.attachColorTexture=function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0){a&&(this._validateColorAttachmentPoint(b),u(a.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(a.glName,b)),this._colorAttachments.set(b,a))};e.detachColorTexture=function(a=c.ColorAttachment.COLOR_ATTACHMENT0){const b=this._colorAttachments.get(a);if(p(b))return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,
a)),this._colorAttachments.delete(a),b};e.setColorTextureTarget=function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0){const d=this._colorAttachments.get(b);p(d)&&this._framebufferTexture2D(d.glName,b,a)};e.attachDepthStencilTexture=function(a){if(!t.isNone(a)){var b=a.descriptor;b.pixelFormat!==c.PixelFormat.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!");b.dataType!==c.PixelType.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!");
this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!");u(b,this._desc);this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE);this._disposeDepthStencilAttachments();this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(a.glName,
c.DepthStencilAttachment));this._depthStencilTexture=a}};e.detachDepthStencilTexture=function(){const a=this._depthStencilTexture;a&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,c.DepthStencilAttachment));this._depthStencilTexture=null;return a};e.attachDepthStencilBuffer=function(a){if(!t.isNone(a)){var b=a.descriptor;b.internalFormat!==c.RenderbufferFormat.DEPTH_STENCIL&&b.internalFormat!==c.RenderbufferFormat.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat");
w(b,this._desc);this._disposeDepthStencilAttachments();this._desc.depthStencilTarget=b.internalFormat===c.RenderbufferFormat.DEPTH_STENCIL?c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:c.DepthStencilTargetType.DEPTH_RENDER_BUFFER;this._initialized&&(this._context.bindFramebuffer(this),b=this._context.gl,b.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?b.DEPTH_ATTACHMENT:b.DEPTH_STENCIL_ATTACHMENT,b.RENDERBUFFER,
a.glName));this._depthAttachment=a}};e.detachDepthStencilBuffer=function(){const a=this._context.gl,b=this._depthAttachment;b&&this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null));this._depthAttachment=null;return b};e.detachAll=function(){this._colorAttachments.forEach((a,b)=>this._detachColorAttachment(b));
this.detachDepthStencilBuffer();this.detachDepthStencilTexture()};e.copyToTexture=function(a,b,d,f,k,h,l){(0>a||0>b||0>k||0>h)&&console.error("Offsets cannot be negative!");(0>=d||0>=f)&&console.error("Copy width and height must be greater than zero!");var m=this._desc;const n=l.descriptor;l.descriptor.target!==c.TextureType.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!");(null==m?.width||null==m?.height||null==n?.width||null==n?.height||a+d>m.width||b+f>m.height||k+d>n.width||h+f>
n.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");m=this._context;l=m.bindTexture(l,q.Texture.TEXTURE_UNIT_FOR_UPDATES);m.setActiveTexture(q.Texture.TEXTURE_UNIT_FOR_UPDATES);m.bindFramebuffer(this);m.gl.copyTexSubImage2D(c.TextureType.TEXTURE_2D,0,k,h,a,b,d,f);m.bindTexture(l,q.Texture.TEXTURE_UNIT_FOR_UPDATES)};e.readPixels=function(a,b,d,f,k,h,l){(0>=d||0>=f)&&console.error("Copy width and height must be greater than zero!");l||console.error("Target memory is not initialized!");
this._context.bindFramebuffer(this);this._context.gl.readPixels(a,b,d,f,k,h,l)};e.readPixelsAsync=async function(a,b,d,f,k,h,l){if(this._context.type!==H.ContextType.WEBGL2)v.webglDebugEnabled()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),this.readPixels(a,b,d,f,k,h,l);else{var m=this._context.gl,n=G.BufferObject.createPixelPack(this._context,c.Usage.STREAM_READ,l.byteLength);this._context.bindBuffer(n);this._context.bindFramebuffer(this);m.readPixels(a,b,d,
f,k,h,0);this._context.unbindBuffer(c.BufferType.PIXEL_PACK_BUFFER);await n.getSubDataAsync(l);n.dispose()}};e.resize=function(a,b){const d=this._desc;if(d.width!==a||d.height!==b)if(d.width=a,d.height=b,this._initialized){this._colorAttachments.forEach(f=>{f&&f.resize(a,b)});if(null!=this._depthStencilTexture)this._depthStencilTexture.resize(a,b);else if(this._depthAttachment||this._stencilAttachment)this._depthAttachment&&this._depthAttachment.resize(a,b),this._stencilAttachment&&this._stencilAttachment.resize(a,
b);this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null);this._initialized=!1}else this._colorAttachments.forEach(f=>{f&&f.resize(a,b)}),this._depthStencilTexture&&this._depthStencilTexture.resize(a,b)};e.initializeAndBind=function(a=c.FramebufferTarget.FRAMEBUFFER){const b=this._context.gl;if(this._initialized)b.bindFramebuffer(a,this.glName);else{this._glName&&b.deleteFramebuffer(this._glName);var d=this._context,f=b.createFramebuffer(),k=this._desc,h=k.colorTarget??
c.TargetType.RENDER_BUFFER,l=k.width??1,m=k.height??1;b.bindFramebuffer(a,f);0===this._colorAttachments.size&&(h===c.TargetType.TEXTURE||h===c.TargetType.CUBEMAP?this._colorAttachments.set(c.ColorAttachment.COLOR_ATTACHMENT0,new q.Texture(d,{target:this.descriptor.colorTarget===c.TargetType.CUBEMAP?c.TextureType.TEXTURE_CUBE_MAP:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.NEAREST,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,
width:k.width,height:k.height})):(h=new r.Renderbuffer(d,{internalFormat:c.SizedPixelFormat.RGBA4,width:l,height:m}),this._colorAttachments.set(c.ColorAttachment.COLOR_ATTACHMENT0,h)));this._colorAttachments.forEach((n,C)=>{n&&(p(n)?this._framebufferTexture2D(n.glName,C,B(n),a):b.framebufferRenderbuffer(a,C,b.RENDERBUFFER,n.glName))});h=k.depthStencilTarget??c.DepthStencilTargetType.NONE;switch(h){case c.DepthStencilTargetType.DEPTH_RENDER_BUFFER:case c.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:this._depthAttachment||
(this._depthAttachment=new r.Renderbuffer(d,{internalFormat:k.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?c.RenderbufferFormat.DEPTH_COMPONENT16:c.RenderbufferFormat.DEPTH_STENCIL,width:l,height:m}));b.framebufferRenderbuffer(a,h===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?b.DEPTH_ATTACHMENT:b.DEPTH_STENCIL_ATTACHMENT,b.RENDERBUFFER,this._depthAttachment.glName);break;case c.DepthStencilTargetType.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new r.Renderbuffer(d,
{internalFormat:c.RenderbufferFormat.STENCIL_INDEX8,width:l,height:m}));b.framebufferRenderbuffer(a,b.STENCIL_ATTACHMENT,b.RENDERBUFFER,this._stencilAttachment.glName);break;case c.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE:this._depthStencilTexture||(d.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),this._depthStencilTexture=new q.Texture(d,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.DEPTH_STENCIL,
dataType:c.PixelType.UNSIGNED_INT_24_8,samplingMode:c.TextureSamplingMode.NEAREST,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,width:l,height:m})),this._framebufferTexture2D(this._depthStencilTexture.glName,b.DEPTH_STENCIL_ATTACHMENT,B(this._depthStencilTexture),a)}v.webglDebugEnabled()&&b.checkFramebufferStatus(a)!==b.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!");this._glName=f;this._initialized=!0}};e._framebufferTexture2D=function(a,b=c.ColorAttachment.COLOR_ATTACHMENT0,d=c.TextureType.TEXTURE_2D,
f=c.FramebufferTarget.FRAMEBUFFER,k=0){this._context.gl.framebufferTexture2D(f,b,d,a,k)};e._detachColorAttachment=function(a){v.webglDebugEnabled()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const b=this._context.gl,d=this._colorAttachments.get(a);p(d)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a)):this._initialized&&(this._context.bindFramebuffer(this),b.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,
a,b.RENDERBUFFER,null));this._colorAttachments.delete(a);return d};e._disposeColorAttachments=function(){this._colorAttachments.forEach((a,b)=>{this._detachColorAttachment(b);a.dispose()});this._colorAttachments.clear()};e._disposeDepthStencilAttachments=function(){const a=this._context.gl;this._depthAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,this._desc.depthStencilTarget===c.DepthStencilTargetType.DEPTH_RENDER_BUFFER?
a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null);this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(c.FramebufferTarget.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null);this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.DEPTH_STENCIL_ATTACHMENT)),
this._depthStencilTexture.dispose(),this._depthStencilTexture=null)};e._validateColorAttachmentPoint=function(a){if(-1===g._MAX_COLOR_ATTACHMENTS){const b=this._context.capabilities.drawBuffers;g._MAX_COLOR_ATTACHMENTS=b?this._context.gl.getParameter(b.MAX_COLOR_ATTACHMENTS):1}a-=c.ColorAttachment.COLOR_ATTACHMENT0;a+1>g._MAX_COLOR_ATTACHMENTS&&F.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${a+1}. Implementation supports up to ${g._MAX_COLOR_ATTACHMENTS} color attachments`)};
E._createClass(g,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._desc}},{key:"colorTexture",get:function(){const a=this._colorAttachments.get(c.ColorAttachment.COLOR_ATTACHMENT0);return a&&p(a)?a:null}},{key:"colorAttachment",get:function(){return this._colorAttachments.get(c.ColorAttachment.COLOR_ATTACHMENT0)}},{key:"depthStencilAttachment",get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}},{key:"depthStencilTexture",
get:function(){return this._depthStencilTexture}},{key:"width",get:function(){return this._desc.width??0}},{key:"height",get:function(){return this._desc.height??0}},{key:"gpuMemoryUsage",get:function(){return[...this._colorAttachments].reduce((a,[,b])=>a+y.getGpuMemoryUsage(b),0)+y.getGpuMemoryUsage(this.depthStencilAttachment)}}]);return g}();D._MAX_COLOR_ATTACHMENTS=-1;x.FramebufferObject=D;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});