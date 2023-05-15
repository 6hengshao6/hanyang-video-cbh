// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./Effect ../../../../webgl/enums".split(" "),function(q,l,h,m,n,r){n=function(e){function k(){var a=t.apply(this,arguments);a.name=a.constructor.name;a.defines=["hittest"];return a}l._inherits(k,e);var t=l._createSuper(k);e=k.prototype;e.dispose=function(){h.isSome(this._fbo)&&this._fbo.dispose()};e.createOptions=function({pixelRatio:a},b,f=m.HITTEST_RADIUS){if(!b.length)return null;b=b.shift();
const p=b.x,d=b.y;this._outstanding=b;return{type:"hittest",distance:f*a,position:[p,d]}};e.bind=function(a){const {context:b,attributeView:f}=a;f.size&&(a=f.getBlock(m.ATTRIBUTE_DATA_GPGPU),h.isNone(a)||(a=a.getFBO(b),b.setViewport(0,0,f.size,f.size),b.bindFramebuffer(a),b.setColorMask(!0,!0,!0,!0),b.setClearColor(0,0,0,0),b.clear(b.gl.COLOR_BUFFER_BIT|b.gl.DEPTH_BUFFER_BIT)))};e.unbind=function(a){};e.draw=function(a){if(!h.isNone(this._outstanding)){var b=this._outstanding;this._outstanding=null;
this._resolve(a,b.resolvers)}};e._resolve=async function(a,b){const {context:f,attributeView:p}=a;a=p.getBlock(m.ATTRIBUTE_DATA_GPGPU);if(h.isNone(a))b.forEach(c=>c.resolve([]));else{var d=a.getFBO(f);a=new Uint8Array(d.width*d.height*4);try{await d.readPixelsAsync(0,0,d.width,d.height,r.PixelFormat.RGBA,r.PixelType.UNSIGNED_BYTE,a)}catch(c){b.forEach(g=>g.resolve([]));return}d=[];for(let c=0;c<a.length;c+=4){const g=a[c+3];a[c]&&d.push({id:c/4,directHits:g})}d.sort((c,g)=>g.directHits===c.directHits?
g.id-c.id:g.directHits-c.directHits);var u=d.map(c=>c.id);b.forEach(c=>c.resolve(u))}};return l._createClass(k)}(n.Effect);q.HittestEffect=n;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});