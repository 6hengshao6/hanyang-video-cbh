// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec4f32 ../DefaultVertexAttributeLayouts ./WGLBrush ../shaders/BackgroundPrograms ../shaders/TileInfoPrograms ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/ProgramTemplate ../../../../webgl/Texture ../../../../webgl/VertexArrayObject".split(" "),function(l,u,v,m,w,n,p,q,d,r,x,t){return function(h){function k(){var a=y.apply(this,arguments);a._color=v.fromValues(1,0,0,
1);return a}l._inherits(k,h);var y=l._createSuper(k);h=k.prototype;h.dispose=function(){this._outlineProgram?.dispose();this._outlineProgram=null;this._tileInfoProgram?.dispose();this._tileInfoProgram=null;this._outlineVertexArrayObject?.dispose();this._outlineVertexArrayObject=null;this._tileInfoVertexArrayObject?.dispose();this._canvas=this._tileInfoVertexArrayObject=null};h.prepareState=function({context:a}){a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA,
d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!1)};h.draw=function(a,b){const {context:c,requestRender:e,allowDelayedRender:g}=a;if(b.isReady)if(this._loadWGLResources(c),!g||!u.isSome(e)||this._outlineProgram.compiled&&this._tileInfoProgram.compiled){c.bindVAO(this._outlineVertexArrayObject);c.useProgram(this._outlineProgram);this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);this._outlineProgram.setUniform2f("u_coord_range",
b.rangeX,b.rangeY);this._outlineProgram.setUniform1f("u_depth",0);this._outlineProgram.setUniform4fv("u_color",this._color);c.drawArrays(d.PrimitiveType.LINE_STRIP,0,4);if(a=this._getTexture(c,b))c.bindVAO(this._tileInfoVertexArrayObject),c.useProgram(this._tileInfoProgram),c.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",b.rangeX/b.width,b.rangeY/b.height),
this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),c.drawArrays(d.PrimitiveType.TRIANGLE_STRIP,0,4);c.bindVAO()}else e()};h._loadWGLResources=function(a){if(!this._outlineProgram||!this._tileInfoProgram){var b=r.createProgram(a,n.background),c=r.createProgram(a,p.tileInfo),e=new Int8Array([0,0,1,0,1,1,0,1]);e=q.BufferObject.createVertex(a,d.Usage.STATIC_DRAW,e);e=new t.VertexArrayObject(a,n.background.attributes,
m.Pos2b,{geometry:e});var g=new Int8Array([0,0,1,0,0,1,1,1]);g=q.BufferObject.createVertex(a,d.Usage.STATIC_DRAW,g);a=new t.VertexArrayObject(a,p.tileInfo.attributes,m.Pos2b,{geometry:g});this._outlineProgram=b;this._tileInfoProgram=c;this._outlineVertexArrayObject=e;this._tileInfoVertexArrayObject=a}};h._getTexture=function(a,b){if(b.texture&&b.triangleCountReportedInDebug===b.triangleCount)return b.texture;b.triangleCountReportedInDebug=b.triangleCount;this._canvas||(this._canvas=document.createElement("canvas"),
this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));const c=b.triangleCount;let e=b.key.id;0<b.triangleCount&&(e+=`, ${c}`);const g=this._canvas,f=g.getContext("2d");f.font="24px sans-serif";f.textAlign="left";f.textBaseline="top";f.clearRect(0,0,300,32);1E5<c?(f.fillStyle="red",f.fillRect(0,0,300,32),f.fillStyle="black"):(f.clearRect(0,0,300,32),f.fillStyle="blue");f.fillText(e,
0,0);b.texture=new x.Texture(a,{target:d.TextureType.TEXTURE_2D,pixelFormat:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_BYTE,samplingMode:d.TextureSamplingMode.NEAREST,wrapMode:d.TextureWrapMode.CLAMP_TO_EDGE},g);return b.texture};return l._createClass(k)}(w)});