// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass".split(" "),function(g,d,h,e,b,k,q,r,t,l,m){e=new e.JSONMap({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",
PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let n=0;b=function(c){function f(a){a=p.call(this,a);a.id=`sym${n++}`;a.type=null;a.color=new h([0,0,0,1]);return a}g._inherits(f,c);var p=g._createSuper(f);c=f.prototype;c.readColor=function(a){return a&&null!=a[0]?[a[0],a[1],a[2],a[3]/255]:a};c.collectRequiredFields=async function(a,u){};c.hash=function(){return JSON.stringify(this.toJSON())};
c.clone=function(){};return g._createClass(f)}(b.JSONSupport);d.__decorate([k.property({type:e.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:e.write}}})],b.prototype,"type",void 0);d.__decorate([k.property({type:h,json:{write:{allowNull:!0}}})],b.prototype,"color",void 0);d.__decorate([l.reader("color")],b.prototype,"readColor",null);return b=d.__decorate([m.subclass("esri.symbols.Symbol")],b)});