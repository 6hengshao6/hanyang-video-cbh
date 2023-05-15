// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./ExpressionInfo ./elements/GroupElement ./support/elements".split(" "),function(h,c,b,n,e,p,q,r,t,u,v,f){var k;const l=f.buildTypeMaps(v);b=k=function(d){function g(a){a=w.call(this,a);a.description=
null;a.elements=null;a.expressionInfos=null;a.preserveFieldValuesWhenHidden=!1;a.title=null;return a}h._inherits(g,d);var w=h._createSuper(g);d=g.prototype;d.castElements=function(a){return f.ensureType(a,l)};d.readElements=function(a,m){return f.fromJSON(m.formElements,l)};d.writeElements=function(a,m){m.formElements=f.toJSON(a,l)};d.clone=function(){return new k({description:this.description,expressionInfos:n.clone(this.expressionInfos),elements:n.clone(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})};
return h._createClass(g)}(b.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([e.property({json:{write:!0}})],b.prototype,"elements",void 0);c.__decorate([p.cast("elements")],b.prototype,"castElements",null);c.__decorate([q.reader("elements",["formElements"])],b.prototype,"readElements",null);c.__decorate([t.writer("elements")],b.prototype,"writeElements",null);c.__decorate([e.property({type:[u],json:{write:!0}})],b.prototype,"expressionInfos",
void 0);c.__decorate([e.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"preserveFieldValuesWhenHidden",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"title",void 0);return b=k=c.__decorate([r.subclass("esri.form.FormTemplate")],b)});