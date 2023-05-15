// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/floatRGBA ../../../../core/maybe ../core/shaderModules/interfaces ../../../webgl/enums ../../../webgl/Texture".split(" "),function(k,m,w,l,x,n,y){function r(c){return c.pattern.map(b=>Math.round(b*c.pixelRatio))}function u(c){if(l.isNone(c))return 1;c=r(c);return Math.floor(c.reduce((b,a)=>b+a))}function v(c){return r(c).reduce((b,a)=>Math.max(b,a))}let D=function(){function c(a){this._rctx=a;this._cache=new Map}var b=c.prototype;
b.destroy=function(){this._cache.forEach(a=>l.disposeMaybe(a.stippleTexture));this._cache.clear()};b._acquire=function(a){if(l.isNone(a))return null;const d=this._patternId(a);var e=this._cache.get(d);if(e)return e.refCount++,e;var g=r(a),f=1/a.pixelRatio;e=u(a);a=v(a);const z=(Math.floor(.5*(a-1))+.5)*f;a=[];let t=1;for(var h of g){for(let p=0;p<h;p++)a.push(t*(Math.min(p,h-1-p)+.5)*f/z*.5+.5);t=-t}h=Math.round(g[0]/2);h=[...a.slice(h),...a.slice(0,h)];e+=2;g=new Uint8Array(4*e);f=4;for(var q of h)w.packFloatRGBA(q,
g,f),f+=4;g.copyWithin(0,f-4,f);g.copyWithin(f,4,8);const {encodedData:A,paddedPixels:B}={encodedData:g,paddedPixels:e};q=new C(new y.Texture(this._rctx,{width:B,height:1,internalFormat:n.PixelFormat.RGBA,pixelFormat:n.PixelFormat.RGBA,dataType:n.PixelType.UNSIGNED_BYTE,wrapMode:n.TextureWrapMode.CLAMP_TO_EDGE},A));this._cache.set(d,q);return q};b.release=function(a){if(!l.isNone(a)){a=this._patternId(a);var d=this._cache.get(a);d&&(d.refCount--,0===d.refCount&&(l.isSome(d.stippleTexture)&&d.stippleTexture.dispose(),
this._cache.delete(a)))}};b.swap=function(a,d){d=this._acquire(d);this.release(a);return d};b._patternId=function(a){return`${a.pattern.join(",")}-r${a.pixelRatio}`};return m._createClass(c)}(),C=function(c){function b(d){var e=a.call(this);e.stippleTexture=d;e.refCount=1;return e}m._inherits(b,c);var a=m._createSuper(b);return m._createClass(b)}(x.NoParameters);k.STIPPLE_TEXTURE_PADDING=2;k.StippleTextureRepository=D;k.computeLongestPattern=v;k.computeTextureSize=u;Object.defineProperty(k,Symbol.toStringTag,
{value:"Module"})});