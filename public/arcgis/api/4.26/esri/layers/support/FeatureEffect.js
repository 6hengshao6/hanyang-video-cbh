// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/JSONSupport ../../core/maybe ../../core/object ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../effects/jsonUtils ./FeatureFilter".split(" "),function(g,h,q,c,u,r,k,m,n,x,v,e,w){var p;m={read:{reader:e.read},write:{writer:e.write,overridePolicy(){return{allowNull:null!=this.excludedEffect,
isRequired:null==this.excludedEffect}}}};e={read:{reader:e.read},write:{writer:e.write,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}};n={name:"showExcludedLabels",default:!0};c=p=function(b){function d(a){a=l.call(this,a);a.filter=null;a.includedEffect=null;a.excludedEffect=null;a.excludedLabelsVisible=!1;return a}g._inherits(d,b);var l=g._createSuper(d);b=d.prototype;b.write=function(a,f){a=g._get(g._getPrototypeOf(d.prototype),"write",this).call(this,
a,f);if(f?.origin){if(a.filter){const t=Object.keys(a.filter);if(1<t.length||"where"!==t[0])return f.messages?.push(new q("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:f.layer,effect:this})),null}if("showExcludedLabels"in a)return f.messages?.push(new q("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:f.layer,effect:this})),
null}return a};b.clone=function(){return new p({filter:u.isSome(this.filter)?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};return g._createClass(d)}(c.JSONSupport);h.__decorate([k.property({type:w,json:{write:{allowNull:!0,writer(b,d,l,a){(b=b?.write({},a))&&0!==Object.keys(b).length?r.setDeepValue(l,b,d):r.setDeepValue(l,null,d)}}}})],c.prototype,"filter",void 0);h.__decorate([k.property({json:{write:!0,
origins:{"web-map":m,"portal-item":m}}})],c.prototype,"includedEffect",void 0);h.__decorate([k.property({json:{write:!0,origins:{"web-map":e,"portal-item":e}}})],c.prototype,"excludedEffect",void 0);h.__decorate([k.property({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":n,"portal-item":n}}})],c.prototype,"excludedLabelsVisible",void 0);return c=p=h.__decorate([v.subclass("esri.layers.support.FeatureEffect")],c)});