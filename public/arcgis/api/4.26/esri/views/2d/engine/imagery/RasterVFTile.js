// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat3 ../../../../chunks/mat3f32 ./RasterVFDisplayObject ../webgl/TiledDisplayObject".split(" "),function(p,c,q,r,t,l){l=function(d){function e(b,f,g,m,h,k,n=null){var a=u.call(this,b,f,g,m,h,k);a.tileData=new t.RasterVFDisplayObject(n);a.tileData.coordScale=[h,k];a.tileData.once("isReady",()=>a.ready());return a}c._inherits(e,d);var u=c._createSuper(e);d=e.prototype;d.destroy=function(){c._get(c._getPrototypeOf(e.prototype),
"destroy",this).call(this);this.tileData.destroy();this.stage=this.tileData=null};d._createTransforms=function(){return{dvs:r.create(),tileMat3:r.create()}};d.setTransform=function(b){c._get(c._getPrototypeOf(e.prototype),"setTransform",this).call(this,b);const f=this.resolution/(b.resolution*b.pixelRatio),g=this.transforms.tileMat3,[m,h]=this.tileData.offset,[k,n]=b.toScreenNoRotation([0,0],[this.x+m*this.resolution,this.y-h*this.resolution]),{symbolTileSize:a}=this.tileData.symbolizerParameters;
q.set(g,Math.round((this.width-this.tileData.offset[0])/a)*a/this.rangeX*f,0,0,0,Math.round((this.height-this.tileData.offset[1])/a)*a/this.rangeY*f,0,k,n,1);q.multiply(this.transforms.dvs,b.displayViewMat3,g);this.tileData.transforms.dvs=this.transforms.dvs};d.onAttach=function(){this.tileData.stage=this.stage};d.onDetach=function(){this.tileData.stage=null};c._createClass(e,[{key:"stencilRef",get:function(){return this.tileData.stencilRef},set:function(b){this.tileData.stencilRef=b}}]);return e}(l.TiledDisplayObject);
p.RasterVFTile=l;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});