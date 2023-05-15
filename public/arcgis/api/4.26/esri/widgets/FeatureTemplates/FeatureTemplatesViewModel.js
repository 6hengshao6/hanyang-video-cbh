// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/HandleOwner ../../core/maybe ../../core/ObjectPool ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/layerUtils ./TemplateItem ./TemplateItemGroup".split(" "),function(t,g,e,z,u,w,A,h,H,I,J,B,C,x,D){var q;const E=({layer:c})=>({key:c,label:c.title??
""}),F=({layer:c})=>({key:c.geometryType,label:c.geometryType??""});e=q=function(c){function n(a){a=v.call(this,a);a._itemPool=new w(x);a._groupPool=new w(D);a.filterFunction=null;a.selectedItem=null;return a}t._inherits(n,c);var v=t._createSuper(n);c=n.prototype;c.initialize=function(){this._get("groupBy")||(this.groupBy="layer")};c.refresh=function(){this.notifyChange("items")};c.select=function(a,b=!0){const d=this.selectedItem;a=a?.clone()||null;this._set("selectedItem",a);b&&this.emit("select",
{item:a,oldItem:d,template:a?.template??null})};c._createItem=function(a,b){const d=this._itemPool.acquire();d.set({template:a,layer:b});return d};c._createGroup=function(a,b){const d=this._groupPool.acquire();d.set("label",a);d.items=b;return d};c._releasePreviousItems=function(){this._destroyItems(this._get("items"))};c._destroyItems=function(a){a&&(a[0]instanceof x?a.forEach(b=>this._destroyItem(b)):a.forEach(b=>this._destroyGroup(b)))};c._destroyGroup=function(a){a.items.forEach(b=>this._destroyItem(b));
a.items.length=0;this._groupPool.release(a)};c._destroyItem=function(a){a.layer=null;a.template=null;this._itemPool.release(a)};c._ensureGroupByObject=function(a){return"string"===typeof a?{key:a,label:a}:a};t._createClass(n,[{key:"groupBy",set:function(a){this._set("groupBy",a);if("function"===typeof a)this._groupByFunction=b=>this._ensureGroupByObject(a(b));else switch(a){case "layer":this._groupByFunction=E;break;case "geometry":this._groupByFunction=F;break;default:this._groupByFunction=null}}},
{key:"layers",get:function(){return this._get("layers")},set:function(a){this.handles.remove("layers");if(a){const b=()=>this.notifyChange("state");this.handles.add(a.map(d=>A.when(()=>d.loadStatus,b)),"layers")}this._set("layers",a)}},{key:"state",get:function(){const {layers:a}=this;return a&&0!==a.length?a.some(b=>"loading"===b.loadStatus||"not-loaded"===b.loadStatus)?"loading":"ready":"disabled"}},{key:"_featureTemplatesByLayer",get:function(){if(!this.layers)return new Map;const a=[];for(const b of this.layers)if("subtype-group"===
b.type)for(const d of b.sublayers){const k=y(d);a.push([d,k])}else a.push([b,y(b)]);return new Map(a)}},{key:"numberOfFeatureTemplates",get:function(){return Array.from(this._featureTemplatesByLayer.values()).reduce((a,b)=>a+b.length,0)}},{key:"items",get:function(){if(0===this.numberOfFeatureTemplates)return this._releasePreviousItems(),[];var a=this._featureTemplatesByLayer,b=[],d=u.isSome(this.filterFunction)?this.filterFunction:q._nullFilterFunction;for(const [f,l]of a)if(f.loaded||"subtype-sublayer"===
f.type&&f.parent?.loaded)if(a=C.getEffectiveLayerCapabilities(f)?.operations,a?.supportsEditing&&a?.supportsAdd)for(var k of l)b.push({layer:f,template:k,matchesFilter:d({label:k.name})});if(u.isNone(this._groupByFunction))return d=b.filter(({matchesFilter:f})=>f).map(({template:f,layer:l})=>this._createItem(f,l)),this._releasePreviousItems(),d;k=new Map;for(var m of b){const {template:f,layer:l}=m;b=this._groupByFunction({template:f,layer:l});const {key:p,label:r}=u.isSome(b.key)?b:q.nullGroupBy;
k.has(p)||k.set(p,{label:r,templateItemInfos:[]});k.get(p)?.templateItemInfos.push(m)}m=[];for(const f of k.values()){const {label:l,templateItemInfos:p}=f;b=p.filter(({matchesFilter:r})=>r);b=d({label:l})?p:0<p.length?b:[];0<b.length&&(b=b.map(({template:r,layer:G})=>this._createItem(r,G)),m.push(this._createGroup(l,b)))}if(1===m.length&&m[0].label===q.nullGroupBy.label)return this._releasePreviousItems(),m[0].items;this._releasePreviousItems();return m}}]);return n}(z.HandleOwnerMixin(e.EventedAccessor));
e.nullGroupBy={key:Symbol(),label:"Other\u200b"};e._nullFilterFunction=c=>!0;g.__decorate([h.property()],e.prototype,"_groupByFunction",void 0);g.__decorate([h.property()],e.prototype,"filterFunction",void 0);g.__decorate([h.property()],e.prototype,"groupBy",null);g.__decorate([h.property()],e.prototype,"layers",null);g.__decorate([h.property()],e.prototype,"state",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"_featureTemplatesByLayer",null);g.__decorate([h.property({readOnly:!0})],
e.prototype,"numberOfFeatureTemplates",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"items",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"selectedItem",void 0);g.__decorate([h.property()],e.prototype,"select",null);e=q=g.__decorate([B.subclass("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],e);const y=c=>{const n="templates"in c&&Array.isArray(c.templates)?c.templates:[];c="types"in c&&Array.isArray(c.types)?c.types.flatMap(v=>v.templates):[];return[...n,...c]};
return e});