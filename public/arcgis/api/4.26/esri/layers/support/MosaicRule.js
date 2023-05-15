// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/ensureType ../../geometry/Point ./DimensionalDefinition ./RasterFunction".split(" "),function(m,d,b,t,g,e,u,n,v,w,r,x,y,
z){var p;const h=b.strict()({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),q=b.strict()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});b=p=function(f){function k(a){a=A.call(this,a);a.ascending=!0;a.itemRenderingRule=null;a.lockRasterIds=null;a.method=null;
a.multidimensionalDefinition=null;a.objectIds=null;a.operation=null;a.sortField=null;a.sortValue=null;a.viewpoint=null;a.where=null;return a}m._inherits(k,f);var A=m._createSuper(k);f=k.prototype;f.readAscending=function(a,c){return null!=c.ascending?c.ascending:null!=c.sortAscending?c.sortAscending:!0};f.readMethod=function(a,c){a=c.mosaicMethod||c.defaultMosaicMethod;switch(a?a.toLowerCase().replace("esrimosaic",""):""){case "byattribute":case "attribute":a="esriMosaicAttribute";break;case "lockraster":a=
"esriMosaicLockRaster";break;case "center":a="esriMosaicCenter";break;case "northwest":a="esriMosaicNorthwest";break;case "nadir":a="esriMosaicNadir";break;case "viewpoint":a="esriMosaicViewpoint";break;case "seamline":a="esriMosaicSeamline";break;case "none":a="esriMosaicNone";break;default:a="esriMosaicNone"}return q.fromJSON(a)};f.writeMultidimensionalDefinition=function(a,c,B){null!=a&&(a=a.filter(({variableName:l,dimensionName:C})=>l&&"*"!==l||C),a.length&&(c[B]=a.map(l=>l.toJSON())))};f.readOperation=
function(a,c){a=c.mosaicOperation;c=c.mosaicOperator&&c.mosaicOperator.toLowerCase();c=a||(c?h.toJSON(c):null);return h.fromJSON(c)||"first"};f.castSortValue=function(a){return null==a||"string"===typeof a||"number"===typeof a?a:`${a}`};f.clone=function(){return new p({ascending:this.ascending,itemRenderingRule:g.clone(this.itemRenderingRule),lockRasterIds:g.clone(this.lockRasterIds),method:this.method,multidimensionalDefinition:g.clone(this.multidimensionalDefinition),objectIds:g.clone(this.objectIds),
operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:g.clone(this.viewpoint),where:this.where})};return m._createClass(k)}(t.JSONSupport);d.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"ascending",void 0);d.__decorate([n.reader("ascending",["ascending","sortAscending"])],b.prototype,"readAscending",null);d.__decorate([e.property({type:z,json:{write:!0}})],b.prototype,"itemRenderingRule",void 0);d.__decorate([e.property({type:[r.Integer],json:{write:{overridePolicy(){return{enabled:"lock-raster"===
this.method}}}}})],b.prototype,"lockRasterIds",void 0);d.__decorate([e.property({type:String,json:{type:q.jsonValues,write:{target:"mosaicMethod",writer:q.write}}})],b.prototype,"method",void 0);d.__decorate([n.reader("method",["mosaicMethod","defaultMosaicMethod"])],b.prototype,"readMethod",null);d.__decorate([e.property({type:[y],json:{write:!0}})],b.prototype,"multidimensionalDefinition",void 0);d.__decorate([w.writer("multidimensionalDefinition")],b.prototype,"writeMultidimensionalDefinition",
null);d.__decorate([e.property({type:[r.Integer],json:{name:"fids",write:!0}})],b.prototype,"objectIds",void 0);d.__decorate([e.property({json:{type:h.jsonValues,read:{reader:h.read},write:{target:"mosaicOperation",writer:h.write}}})],b.prototype,"operation",void 0);d.__decorate([n.reader("operation",["mosaicOperation","mosaicOperator"])],b.prototype,"readOperation",null);d.__decorate([e.property({type:String,json:{write:{overridePolicy(){return{enabled:"attribute"===this.method}}}}})],b.prototype,
"sortField",void 0);d.__decorate([e.property({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:"attribute"===this.method,allowNull:!0}}}}})],b.prototype,"sortValue",void 0);d.__decorate([u.cast("sortValue")],b.prototype,"castSortValue",null);d.__decorate([e.property({type:x,json:{write:!0}})],b.prototype,"viewpoint",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"where",void 0);return b=p=d.__decorate([v.subclass("esri.layers.support.MosaicRule")],
b)});