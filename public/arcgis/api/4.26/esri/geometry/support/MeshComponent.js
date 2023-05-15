// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./MeshMaterial ./MeshMaterialMetallicRoughness ./MeshVertexAttributes".split(" "),function(h,c,b,k,p,g,m,q,l,n,r,t){var e;const u=p.getLogger("esri.geometry.support.MeshComponent");b=e=function(d){function f(a){a=
v.call(this,a);a.faces=null;a.material=null;a.shading="source";a.trustSourceNormals=!1;return a}h._inherits(f,d);var v=h._createSuper(f);f.from=function(a){return l.ensureClass(e,a)};d=f.prototype;d.castFaces=function(a){return t.castArray(a,Uint32Array,[Uint16Array],{loggerTag:".faces\x3d",stride:3},u)};d.castMaterial=function(a){return a&&"object"===typeof a&&("metallic"in a||"roughness"in a||"metallicRoughnessTexture"in a)?l.ensureClass(r,a):l.ensureClass(n,a)};d.clone=function(){return new e({faces:k.clone(this.faces),
shading:this.shading,material:k.clone(this.material),trustSourceNormals:this.trustSourceNormals})};d.cloneWithDeduplication=function(a,w){a={faces:k.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(a,w):null,trustSourceNormals:this.trustSourceNormals};return new e(a)};return h._createClass(f)}(b.JSONSupport);c.__decorate([g.property({json:{write:!0}})],b.prototype,"faces",void 0);c.__decorate([m.cast("faces")],b.prototype,"castFaces",null);c.__decorate([g.property({type:n,
json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([m.cast("material")],b.prototype,"castMaterial",null);c.__decorate([g.property({type:String,json:{write:!0}})],b.prototype,"shading",void 0);c.__decorate([g.property({type:Boolean})],b.prototype,"trustSourceNormals",void 0);return b=e=c.__decorate([q.subclass("esri.geometry.support.MeshComponent")],b)});