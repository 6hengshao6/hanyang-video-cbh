// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point".split(" "),function(g,b,a,e,c,p,k,l){var h;a=h=function(m){function f(){var d=n.apply(this,arguments);d.blockWidth=void 0;d.blockHeight=void 0;d.compression=null;d.origin=null;d.firstPyramidLevel=null;d.maximumPyramidLevel=null;d.pyramidScalingFactor=
2;d.pyramidBlockWidth=null;d.pyramidBlockHeight=null;d.isVirtualTileInfo=!1;d.tileInfo=null;d.transposeInfo=null;d.blockBoundary=null;return d}g._inherits(f,m);var n=g._createSuper(f);f.prototype.clone=function(){return new h({blockWidth:this.blockWidth,blockHeight:this.blockHeight,compression:this.compression,origin:e.clone(this.origin),firstPyramidLevel:this.firstPyramidLevel,maximumPyramidLevel:this.maximumPyramidLevel,pyramidResolutions:e.clone(this.pyramidResolutions),pyramidScalingFactor:this.pyramidScalingFactor,
pyramidBlockWidth:this.pyramidBlockWidth,pyramidBlockHeight:this.pyramidBlockHeight,isVirtualTileInfo:this.isVirtualTileInfo,tileInfo:e.clone(this.tileInfo),transposeInfo:e.clone(this.transposeInfo),blockBoundary:e.clone(this.blockBoundary)})};return g._createClass(f)}(a.JSONSupport);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"blockWidth",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"blockHeight",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"compression",void 0);b.__decorate([c.property({type:l,json:{write:!0}})],a.prototype,"origin",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"firstPyramidLevel",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maximumPyramidLevel",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"pyramidResolutions",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidScalingFactor",
void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockWidth",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockHeight",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"isVirtualTileInfo",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"tileInfo",void 0);b.__decorate([c.property()],a.prototype,"transposeInfo",void 0);b.__decorate([c.property()],a.prototype,"blockBoundary",void 0);
return a=h=b.__decorate([k.subclass("esri.layers.support.RasterStorageInfo")],a)});