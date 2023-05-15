// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelDynamicSection ./VoxelSlice".split(" "),function(g,c,d,m,b,n,e,p,q,h,k){var l;b=l=function(r){function f(a){a=t.call(this,a);a.volumeId=0;a.verticalExaggeration=1;a.exaggerationMode="scale-height";a.verticalOffset=
0;a.slices=new (d.ofType(k));a.dynamicSections=new (d.ofType(h));return a}g._inherits(f,r);var t=g._createSuper(f);f.prototype.clone=function(){return new l({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:n.clone(this.slices),dynamicSections:n.clone(this.dynamicSections)})};g._createClass(f,[{key:"slices",set:function(a){this._set("slices",m.referenceSetter(a,this._get("slices"),d.ofType(k)))}},
{key:"dynamicSections",set:function(a){this._set("dynamicSections",m.referenceSetter(a,this._get("dynamicSections"),d.ofType(h)))}}]);return f}(b.JSONSupport);c.__decorate([e.property({type:p.Integer,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"volumeId",void 0);c.__decorate([e.property({type:Number,json:{default:1,write:!0}})],b.prototype,"verticalExaggeration",void 0);c.__decorate([e.property({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],b.prototype,
"exaggerationMode",void 0);c.__decorate([e.property({type:Number,json:{default:0,write:!0}})],b.prototype,"verticalOffset",void 0);c.__decorate([e.property({type:d.ofType(k),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&0<this.slices.length}}}}})],b.prototype,"slices",null);c.__decorate([e.property({type:d.ofType(h),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&0<this.dynamicSections.length}}}}})],b.prototype,"dynamicSections",null);return b=
l=c.__decorate([q.subclass("esri.layers.voxel.VoxelVolumeStyle")],b)});