// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,c,a,g,f,m,n,p,h){a=function(k){function d(){var e=l.apply(this,arguments);e.opacity=1;e.position=0;return e}b._inherits(d,k);var l=b._createSuper(d);return b._createClass(d)}(a.ClonableMixin(g.JSONSupport));
c.__decorate([f.property({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],a.prototype,"opacity",void 0);c.__decorate([f.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0);return a=c.__decorate([h.subclass("esri.layers.voxel.VoxelOpacityStop")],a)});