// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/string ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../layers/support/fieldUtils ./Symbol".split(" "),function(h,e,m,n,l,b,p,q,r,t,u,v){var k;b=k=function(c){function g(a){a=w.call(this,a);a.data=null;a.type=
"cim";return a}h._inherits(g,c);var w=h._createSuper(g);c=g.prototype;c.readData=function(a,f){return f};c.writeData=function(a,f){if(a)for(const d in a)f[d]=a[d]};c.collectRequiredFields=async function(a,f){if("CIMSymbolReference"===this.data?.type){var d=this.data.primitiveOverrides;d&&(d=d.map(x=>u.collectArcadeFieldNames(a,f,x.valueExpressionInfo.expression)),await Promise.all(d))}};c.clone=function(){return new k({data:m.clone(this.data)})};c.hash=function(){return n.numericHash(JSON.stringify(this.data)).toString()};
return h._createClass(g)}(v);e.__decorate([l.property({json:{write:!1}})],b.prototype,"color",void 0);e.__decorate([l.property({json:{write:!0}})],b.prototype,"data",void 0);e.__decorate([q.reader("data",["symbol"])],b.prototype,"readData",null);e.__decorate([t.writer("data",{})],b.prototype,"writeData",null);e.__decorate([p.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],b.prototype,"type",void 0);return b=k=e.__decorate([r.subclass("esri.symbols.CIMSymbol")],b)});