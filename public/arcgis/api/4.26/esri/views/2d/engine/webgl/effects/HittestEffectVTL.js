// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./Effect ../../../../webgl/enums".split(" "),function(t,p,x,y,q,u){q=function(d){function k(){var a=z.apply(this,arguments);a.name=a.constructor.name;a.defines=["id"];a._lastSize=0;a._boundFBO=null;return a}p._inherits(k,d);var z=p._createSuper(k);d=k.prototype;d.dispose=function(){x.isSome(this._fbo)&&this._fbo.dispose()};d.bind=function({context:a,painter:f}){const {width:e,height:l}=a.getViewport();
this._boundFBO=a.getBoundFramebufferObject();f=f.getFbos(e,l).effect0;a.bindFramebuffer(f);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};d.unbind=function({context:a}){a.bindFramebuffer(this._boundFBO);this._boundFBO=null};d.draw=function(a,f,e=2*y.HITTEST_RADIUS){this._resolve(a,f,e)};d._resolve=async function({context:a,state:f,pixelRatio:e},l,A){const B=a.getBoundFramebufferObject(),C=f.size[1]*e,b=Math.round(A*e),v=b/2,w=b/2;this._ensureBuffer(b);l.forEach(async(D,
r)=>{var h=new Map;await B.readPixelsAsync(Math.floor(r.x*e-b/2),Math.floor(C-r.y*e-b/2),b,b,u.PixelFormat.RGBA,u.PixelType.UNSIGNED_BYTE,this._buf);for(let c=0;c<this._buf32.length;c++){const g=this._buf32[c];if(4294967295!==g&&0!==g){var m=c%b,n=b-Math.floor(c/b);m=(v-m)*(v-m)+(w-n)*(w-n);n=h.has(g)?h.get(g):4294967295;h.set(g,Math.min(m,n))}}h=Array.from(h).sort((c,g)=>c[1]-g[1]).map(c=>c[0]);D.resolve(h);l.delete(r)})};d._ensureBuffer=function(a){this._lastSize!==a&&(this._lastSize=a,this._buf=
new Uint8Array(4*a*a),this._buf32=new Uint32Array(this._buf.buffer))};return p._createClass(k)}(q.Effect);t.HittestEffectVTL=q;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});