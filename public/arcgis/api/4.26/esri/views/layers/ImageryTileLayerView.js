// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "),function(p,f,y,v,n,g,E,F,G,z,A,q,B){return d=>{d=function(h){function k(){var a=C.apply(this,
arguments);a._rasterFieldPrefix="Raster.";a.layer=null;a.view=null;a.tileInfo=null;return a}p._inherits(k,h);var C=p._createSuper(k);h=k.prototype;h._getfullExtent=function(){return this.projectFullExtent(this.view.spatialReference)};h.supportsSpatialReference=function(a){return!!this.projectFullExtent(a)};h.projectFullExtent=function(a){const b=n.unwrap(this.layer.fullExtent),c=q.getDefaultDatumTransformationForDataset(b,a,!1);return q.projectExtent(b,a,c)};h.fetchPopupFeatures=async function(a,
b){const {layer:c}=this;if(!a)throw new v("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:c});var {popupEnabled:l}=c;b=B.getFetchPopupTemplate(c,b);if(!l||n.isNone(b))throw new v("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:l,popupTemplate:b});l=[];const {value:m,magdirValue:w}=await c.identify(a,{timeExtent:this.timeExtent});let r="";if(m&&m.length){r="imagery-tile"===c.type&&c.hasStandardTime()&&null!=m[0]?
m.map(t=>c.getStandardTimeValue(t)).join(", "):m.join(", ");a={ObjectId:0};a["Raster.ServicePixelValue"]=r;b=c.rasterInfo.attributeTable;if(n.isSome(b)){const {fields:t,features:D}=b,x=t.find(({name:u})=>"value"===u.toLowerCase());if(b=x?D.find(u=>String(u.attributes[x.name])===r):null)for(var e in b.attributes)b.attributes.hasOwnProperty(e)&&(a[this._rasterFieldPrefix+e]=b.attributes[e])}e=c.rasterInfo.dataType;if("vector-magdir"===e||"vector-uv"===e)a["Raster.Magnitude"]=w?.[0],a["Raster.Direction"]=
w?.[1];e=new y(this.fullExtent.clone(),null,a);e.layer=c;e.sourceLayer=e.layer;l.push(e)}return l};p._createClass(k,[{key:"fullExtent",get:function(){return this._getfullExtent()}},{key:"hasTilingEffects",get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}},{key:"datumTransformation",get:function(){return q.getDefaultDatumTransformationForDataset(n.unwrap(this.layer.fullExtent),this.view.spatialReference,!0)}}]);return k}(d);
f.__decorate([g.property()],d.prototype,"layer",void 0);f.__decorate([g.property(A.combinedViewLayerTimeExtentProperty)],d.prototype,"timeExtent",void 0);f.__decorate([g.property()],d.prototype,"view",void 0);f.__decorate([g.property()],d.prototype,"fullExtent",null);f.__decorate([g.property()],d.prototype,"tileInfo",void 0);f.__decorate([g.property({readOnly:!0})],d.prototype,"hasTilingEffects",null);f.__decorate([g.property()],d.prototype,"datumTransformation",null);return d=f.__decorate([z.subclass("esri.views.layers.ImageryTileLayerView")],
d)}});