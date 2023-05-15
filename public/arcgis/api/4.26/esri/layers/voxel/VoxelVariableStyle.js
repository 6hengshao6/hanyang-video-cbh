// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelIsosurface ./VoxelTransferFunctionStyle ./VoxelUniqueValue".split(" "),function(g,c,e,b,h,d,p,q,m,r,n){var k;b=k=function(l){function f(a){a=t.call(this,a);a.variableId=0;a.label="";a.transferFunction=null;a.uniqueValues=null;a.isosurfaces=
null;a.uniqueValues=new (e.ofType(n));a.isosurfaces=new (e.ofType(m));return a}g._inherits(f,l);var t=g._createSuper(f);f.prototype.clone=function(){return new k({variableId:this.variableId,label:this.label,transferFunction:h.clone(this.transferFunction),uniqueValues:h.clone(this.uniqueValues),isosurfaces:h.clone(this.isosurfaces)})};return g._createClass(f)}(b.JSONSupport);c.__decorate([d.property({type:p.Integer,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],b.prototype,"label",void 0);c.__decorate([d.property({type:r,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||1>this.uniqueValues.length}}}}})],b.prototype,"transferFunction",void 0);c.__decorate([d.property({type:e.ofType(n),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&0<this.uniqueValues.length}}}}})],b.prototype,"uniqueValues",void 0);c.__decorate([d.property({type:e.ofType(m),json:{write:{enabled:!0,overridePolicy(){const l=
!!this.isosurfaces&&0<this.isosurfaces.length;return{enabled:(!this.uniqueValues||1>this.uniqueValues.length)&&l}}}}})],b.prototype,"isosurfaces",void 0);return b=k=c.__decorate([q.subclass("esri.layers.voxel.VoxelVariableStyle")],b)});