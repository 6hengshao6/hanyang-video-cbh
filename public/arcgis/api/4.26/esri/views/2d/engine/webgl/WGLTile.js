// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat2d ../../../../chunks/mat2df32 ../../../../chunks/mat3 ../../../../chunks/mat3f32 ./definitions ./TiledDisplayObject".split(" "),function(n,d,p,q,r,t,u,g){let w=function(){function b(){}var a=b.prototype;a.acquire=function(m){return{refCount:1,version:-1,labelMat2d:q.create(),tileMat3:t.create(),dvs:t.create()}};a.release=function(m){};return d._createClass(b)}();g=function(b){function a(e,c,f,h){return m.call(this,
e,c,f,h,u.TILE_SIZE,u.TILE_SIZE)}d._inherits(a,b);var m=d._createSuper(a);b=a.prototype;b.destroy=function(){d._get(d._getPrototypeOf(a.prototype),"destroy",this).call(this);this._transforms&&a.TransformCache.release(this.key.hash)};b.setTransform=function(e){var c=this.resolution/e.resolution,f=this.transforms.tileMat3;const [h,v]=e.toScreenNoRotation([0,0],[this.x,this.y]);var k=this.width/this.rangeX*c;c*=this.height/this.rangeY;r.set(f,k,0,0,0,c,0,h,v,1);r.multiply(this.transforms.dvs,e.displayViewMat3,
f);f=this.transforms.labelMat2d;const l=window.devicePixelRatio;k=p.set(q.create(),k*l,0,0,c*l,h*l,v*l);p.multiply(f,e.viewMat2d,k)};b._createTransforms=function(){return a.TransformCache.acquire(this.key.hash)};return d._createClass(a)}(g.TiledDisplayObject);g.TransformCache=new w;n.WGLTile=g;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});