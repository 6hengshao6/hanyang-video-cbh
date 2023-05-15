// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Error ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/SpatialReference ../geometry/support/aaBoundingRect ./Layer ./mixins/BlendLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/imageBitmapUtils ./support/TileInfo ./support/TileKey".split(" "),function(n,f,r,t,k,d,
G,H,v,w,p,x,y,z,A,B,C,u,D){var q;const g=new D.TileKey("0/0/0",0,0,0,void 0);d=q=function(h){function m(){var a=E.apply(this,arguments);a.tileInfo=u.create({spatialReference:p.WebMercator,size:256});a.type="base-tile";a.fullExtent=new w(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,p.WebMercator);a.spatialReference=p.WebMercator;return a}n._inherits(m,h);var E=n._createSuper(m);h=m.prototype;h.getTileBounds=function(a,c,e,b){b=b||x.create();g.level=a;g.row=c;g.col=e;g.extent=
b;this.tileInfo.updateTileInfo(g);g.extent=void 0;return b};h.fetchTile=function(a,c,e,b={}){({signal:b}=b);a=this.getTileUrl(a,c,e);return r(a??"",{responseType:"image",signal:b,query:{...this.refreshParameters}}).then(l=>l.data)};h.fetchImageBitmapTile=async function(a,c,e,b={}){var {signal:l}=b;if(this.fetchTile!==q.prototype.fetchTile){l=await this.fetchTile(a,c,e,b);try{return createImageBitmap(l)}catch(F){throw new t("request:server",`Unable to load tile ${a}/${c}/${e}`,{error:F,level:a,row:c,
col:e});}}a=this.getTileUrl(a,c,e)??"";({data:c}=await r(a,{responseType:"blob",signal:l,query:{...this.refreshParameters}}));return C.createBitmap(c,a)};h.getTileUrl=function(){throw new t("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented");};return n._createClass(m)}(z.BlendLayer(B.ScaleRangeLayer(A.RefreshableLayer(y))));f.__decorate([k.property({type:u})],d.prototype,"tileInfo",void 0);f.__decorate([k.property({type:["show","hide"]})],d.prototype,"listMode",void 0);f.__decorate([k.property({readOnly:!0,
value:"base-tile"})],d.prototype,"type",void 0);f.__decorate([k.property({nonNullable:!0})],d.prototype,"fullExtent",void 0);f.__decorate([k.property()],d.prototype,"spatialReference",void 0);return d=q=f.__decorate([v.subclass("esri.layers.BaseTileLayer")],d)});