// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry/support/aaBoundingRect ./BitmapTile ./brushes ./webgl/enums ./webgl/TileContainer".split(" "),function(h,b,l,m,n,k,f){f=function(d){function c(){return p.apply(this,arguments)}b._inherits(c,d);var p=b._createSuper(c);d=c.prototype;d.createTile=function(a){const e=this._tileInfoView.getTileBounds(l.create(),a),g=this._tileInfoView.getTileResolution(a.level),[q,r]=this._tileInfoView.tileInfo.size;return new m.BitmapTile(a,g,
e[0],e[3],q,r)};d.prepareRenderPasses=function(a){const e=a.registerRenderPass({name:"bitmap (tile)",brushes:[n.brushes.bitmap],target:()=>this.children.map(g=>g.bitmap),drawPhase:k.WGLDrawPhase.MAP});return[...b._get(b._getPrototypeOf(c.prototype),"prepareRenderPasses",this).call(this,a),e]};d.doRender=function(a){this.visible&&a.drawPhase===k.WGLDrawPhase.MAP&&b._get(b._getPrototypeOf(c.prototype),"doRender",this).call(this,a)};b._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return this.children.some(a=>
"additive"===a.bitmap.blendFunction)}}]);return c}(f);h.BitmapTileContainer=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});