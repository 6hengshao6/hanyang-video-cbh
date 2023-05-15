// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/vectorFieldUtils ../../engine/imagery/RasterVFTileContainer ./BaseImageryTileSubView2D".split(" "),function(f,k,l,n,m,g,v,w,
p,q,r,t){g=function(e){function h(){var a=u.apply(this,arguments);a._handle=null;a.type="rasterVF";return a}f._inherits(h,e);var u=f._createSuper(h);e=h.prototype;e.canUseWebGLForProcessing=function(){return!1};e.fetchTile=async function(a,b){b={...b,interpolation:"nearest",requestProjectedLocalDirections:!0};a=await this.layer.fetchTile(a.level,a.row,a.col,b);"vector-magdir"===this.layer.rasterInfo.dataType&&a?.pixelBlock&&(a.pixelBlock=await this.layer.convertVectorFieldData(a.pixelBlock,b));return a};
e.updateTileSource=function(a,b){const c=b.symbolizerParams,{tileData:d}=a;d.key=a.key;d.width=this._tileInfoView.tileInfo.size[0];d.height=this._tileInfoView.tileInfo.size[1];({symbolTileSize:a}=c);({source:b}=b);d.offset=this._getTileSymbolOffset(d.key,a);l.isSome(b)&&l.isSome(b.pixelBlock)?(d.rawPixelData={extent:b.extent,pixelBlock:b.pixelBlock},d.symbolizerParameters=c,d.source=this._sampleVectorFieldData(b.pixelBlock,c,d.offset)):(b=this.createEmptyTilePixelBlock([Math.round((this._tileInfoView.tileInfo[0]-
d.offset[0])/a),Math.round((this._tileInfoView.tileInfo[1]-d.offset[1])/a)]),d.source=b,d.symbolizerParameters=c);d.invalidateVAO();return Promise.resolve()};e.updateTileSymbolizerParameters=function(a,b){var c=b.local;({symbolTileSize:b}=c);({tileData:a}=a);a.offset=this._getTileSymbolOffset(a.key,b);const d=a.symbolizerParameters.symbolTileSize;a.symbolizerParameters=c;c=a.rawPixelData?.pixelBlock;l.isSome(c)&&d!==b&&(a.source=this._sampleVectorFieldData(c,a.symbolizerParameters,a.offset));return Promise.resolve()};
e.attach=function(){f._get(f._getPrototypeOf(h.prototype),"attach",this).call(this);this.container=new r.RasterVFTileContainer(this._tileInfoView);this.container.isCustomTilingScheme=this._isCustomTilingScheme;this._updateSymbolType(this.layer.renderer);this._handle=n.watch(()=>this.layer.renderer,a=>this._updateSymbolType(a))};e.detach=function(){f._get(f._getPrototypeOf(h.prototype),"detach",this).call(this);this.container.removeAllChildren();this._handle?.remove();this.container=this._handle=null};
e._getTileSymbolOffset=function(a,b){const c=a.col*this._tileInfoView.tileInfo.size[0]%b;a=a.row*this._tileInfoView.tileInfo.size[1]%b;return[c>b/2?b-c:-c,a>b/2?b-a:-a]};e._sampleVectorFieldData=function(a,b,c){({symbolTileSize:b}=b);return q.sampleVectorField(a,"vector-uv",b,c)};e._updateSymbolType=function(a){"vector-field"===a.type&&(this.container.symbolTypes="wind-barb"===a.style?["scalar","triangle"]:"simple-scalar"===a.style?["scalar"]:["triangle"])};return f._createClass(h)}(t.BaseImageryTileSubView2D);
k.__decorate([m.property()],g.prototype,"container",void 0);k.__decorate([m.property()],g.prototype,"layer",void 0);k.__decorate([m.property()],g.prototype,"type",void 0);return g=k.__decorate([p.subclass("esri.views.2d.layers.imagery.VectorFieldTileView2D")],g)});