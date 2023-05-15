// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/pixelUtils ../../engine/BitmapContainer ../../engine/Container ../../engine/ImageryBitmapSource ../support/ExportStrategy".split(" "),
function(l,g,p,d,m,q,n,h,A,B,C,r,t,u,v,w,x){d=function(e){function k(){var a=y.apply(this,arguments);a.attached=!1;a.container=new v.Container;a.updateRequested=!1;a.type="imagery";a._bitmapView=new u.BitmapContainer;return a}l._inherits(k,e);var y=l._createSuper(k);e=k.prototype;e.destroy=function(){this.attached&&(this.detach(),this.attached=!1);this.updateRequested=!1};e.update=function(a){this.strategy.update(a).catch(b=>{n.isAbortError(b)||m.getLogger(this.declaredClass).error(b)})};e.hitTest=
function(a){return new p({attributes:{},geometry:a.clone(),layer:this.layer})};e.attach=function(){this.container.addChild(this._bitmapView);this.strategy=new x({container:this._bitmapView,imageNormalizationSupported:10<=this.layer.version,imageMaxHeight:10.1<=this.layer.version?this.layer.imageMaxHeight:2048,imageMaxWidth:10.1<=this.layer.version?this.layer.imageMaxWidth:2048,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})};e.detach=function(){this.strategy.destroy();
this._bitmapView.removeAllChildren();this.container.removeAllChildren();this.updateRequested=!1};e.redraw=function(){this.strategy.updateExports(async a=>{const {source:b}=a;if(b&&!(b instanceof ImageBitmap)){var f=await this.layer.applyRenderer({extent:b.extent,pixelBlock:b.originalPixelBlock??b.pixelBlock});b.filter=c=>this.layer.pixelFilter?this.layer.applyFilter(c):{...f,extent:b.extent}}}).catch(a=>{n.isAbortError(a)||m.getLogger(this.declaredClass).error(a)})};e.requestUpdate=function(){this.updateRequested||
(this.updateRequested=!0,this.view.requestUpdate())};e.isUpdating=function(){return this.strategy.updating||this.updateRequested};e.getPixelData=function(){if(this.updating)return null;var a=this.strategy.bitmaps;if(1===a.length&&a[0].source)return{extent:a[0].source.extent,pixelBlock:a[0].source.originalPixelBlock};if(1<a.length){const b=this.view.extent;a=a.map(f=>f.source).filter(f=>f.extent&&f.extent.intersects(b)).map(f=>({extent:f.extent,pixelBlock:f.originalPixelBlock}));a=t.mosaicPixelData(a,
b);return q.isSome(a)?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null};e._fetchImage=async function(a,b,f,c){c=c||{};c.timeExtent=this.timeExtent;c.requestAsImageElement=!0;c.returnImageBitmap=!0;a=await this.layer.fetchImage(a,b,f,c);if(a.imageBitmap)return a.imageBitmap;c=await this.layer.applyRenderer(a.pixelData,{signal:c.signal});c=new w(c.pixelBlock,c.extent?.clone(),a.pixelData.pixelBlock);c.filter=z=>this.layer.applyFilter(z);return c};l._createClass(k,[{key:"updating",get:function(){return!this.attached||
this.isUpdating()}}]);return k}(d);g.__decorate([h.property()],d.prototype,"attached",void 0);g.__decorate([h.property()],d.prototype,"container",void 0);g.__decorate([h.property()],d.prototype,"layer",void 0);g.__decorate([h.property()],d.prototype,"strategy",void 0);g.__decorate([h.property()],d.prototype,"timeExtent",void 0);g.__decorate([h.property()],d.prototype,"view",void 0);g.__decorate([h.property()],d.prototype,"updateRequested",void 0);g.__decorate([h.property()],d.prototype,"updating",
null);g.__decorate([h.property()],d.prototype,"type",void 0);return d=g.__decorate([r.subclass("esri.views.2d.layers.imagery.ImageryView2D")],d)});