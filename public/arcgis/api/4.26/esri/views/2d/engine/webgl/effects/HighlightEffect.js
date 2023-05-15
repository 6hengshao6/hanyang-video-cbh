// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../BitBlitRenderer ./Effect ./highlight/HighlightRenderer ./highlight/HighlightSurfaces ../../../../webgl/enums".split(" "),function(h,t,k,l,m,n,p){return function(d){function g(){var b=q.apply(this,arguments);b.defines=["highlight"];b._hlRenderer=new m;b._width=void 0;b._height=void 0;b._boundFBO=null;b._hlSurfaces=new n;b._adjustedWidth=void 0;b._adjustedHeight=void 0;b._blitRenderer=new k.BitBlitRenderer;return b}h._inherits(g,
d);var q=h._createSuper(g);d=g.prototype;d.dispose=function(){this._hlSurfaces?.dispose();this._hlRenderer?.dispose();this._boundFBO=null};d.bind=function(b){const {context:a,painter:c}=b,{width:e,height:f}=a.getViewport(),r=c.getFbos(e,f).effect0;this.setup(b,e,f);a.bindFramebuffer(r);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};d.unbind=function(){};d.setup=function({context:b},a,c){this._width=a;this._height=c;const e=a%4,f=c%4;a+=2>e?-e:4-e;c+=2>f?-f:4-
f;this._adjustedWidth=a;this._adjustedHeight=c;this._boundFBO=b.getBoundFramebufferObject();a=Math.round(1*a);c=Math.round(1*c);this._hlRenderer.setup(b,a,c);this._hlSurfaces.setup(b,a,c)};d.draw=function(b){const {context:a,highlightGradient:c}=b;c&&(b=a.getBoundFramebufferObject(),a.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight),a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),a.setStencilTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(a,
b.colorTexture,p.TextureSamplingMode.NEAREST,1),a.setStencilTestEnabled(!1),a.setBlendingEnabled(!1),a.setColorMask(!1,!1,!1,!0),a.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(a,this._hlSurfaces.sharedBlur1Tex),a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(a,this._hlSurfaces.sharedBlur2Tex),a.bindFramebuffer(this._boundFBO),a.setBlendingEnabled(!0),
a.setColorMask(!0,!0,!0,!0),a.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(a,this._hlSurfaces.sharedBlur1Tex,c),this._boundFBO=null)};return h._createClass(g)}(l.Effect)});