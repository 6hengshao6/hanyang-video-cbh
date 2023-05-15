// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Identifiable ../../core/MultiOriginJSONSupport ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ../../geometry/Extent".split(" "),function(k,d,r,c,t,h,e,u,A,B,p,v,w,
x){var n;let y=0;c=n=function(g){function l(a){var b=z.call(this,a);b.dimensions=null;b.fullExtents=null;b.legendUrl=null;b.legendEnabled=!0;b.layer=null;b.maxScale=0;b.minScale=0;b.parent=null;b.popupEnabled=!1;b.queryable=!1;b.sublayers=null;b.spatialReferences=null;b.addHandles([h.on(()=>b.sublayers,"after-add",({item:f})=>{f.parent=k._assertThisInitialized(b);f.layer=b.layer},h.sync),h.on(()=>b.sublayers,"after-remove",({item:f})=>{f.layer=f.parent=null},h.sync),h.watch(()=>b.sublayers,(f,q)=>
{if(q)for(const m of q)m.layer=m.parent=null;if(f)for(const m of f)m.parent=k._assertThisInitialized(b),m.layer=b.layer},h.sync)]);return b}k._inherits(l,g);var z=k._createSuper(l);g=l.prototype;g.readExtent=function(a,b){return(a=b.extent)?x.fromJSON(a):null};g.readLegendUrl=function(a,b){return b?.legendUrl??b?.legendURL??null};g.castSublayers=function(a){return w.ensureType(r.ofType(n),a)};g.clone=function(){const a=new n;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("fullExtent")&&
(a.fullExtent=this.fullExtent.clone());this.hasOwnProperty("fullExtents")&&(a.fullExtents=this.fullExtents?.map(b=>b.clone())??null);this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled);this.hasOwnProperty("layer")&&(a.layer=this.layer);this.hasOwnProperty("name")&&(a.name=this.name);this.hasOwnProperty("parent")&&(a.parent=this.parent);this.hasOwnProperty("queryable")&&(a.queryable=this.queryable);this.hasOwnProperty("sublayers")&&
(a.sublayers=this.sublayers&&this.sublayers.map(b=>b.clone()));this.hasOwnProperty("spatialReferences")&&(a.spatialReferences=this.spatialReferences?.map(b=>b));this.hasOwnProperty("visible")&&(a.visible=this.visible);this.hasOwnProperty("title")&&(a.title=this.title);return a};g._setAndNotifyLayer=function(a,b){const f=this.layer;this._get(a)!==b&&(this._set(a,b),f&&f.emit("wms-sublayer-update",{propertyName:a,id:this.id}))};k._createClass(l,[{key:"description",get:function(){return this._get("description")},
set:function(a){this._set("description",a)}},{key:"fullExtent",get:function(){return this._get("fullExtent")},set:function(a){this._set("fullExtent",a)}},{key:"id",get:function(){const a=this._get("id");return null==a?y++:a},set:function(a){this._set("id",a)}},{key:"effectiveScaleRange",get:function(){const {minScale:a,maxScale:b}=this;return{minScale:a,maxScale:b}}},{key:"name",get:function(){return this._get("name")},set:function(a){this._set("name",a)}},{key:"title",get:function(){return this._get("title")},
set:function(a){this._set("title",a)}},{key:"visible",get:function(){return this._get("visible")},set:function(a){this._setAndNotifyLayer("visible",a)}}]);return l}(c.IdentifiableMixin(t.MultiOriginJSONSupport));d.__decorate([e.property()],c.prototype,"description",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"dimensions",void 0);d.__decorate([e.property({value:null})],c.prototype,"fullExtent",null);d.__decorate([p.reader("fullExtent",["extent"])],c.prototype,"readExtent",null);d.__decorate([e.property()],
c.prototype,"fullExtents",void 0);d.__decorate([e.property({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],c.prototype,"id",null);d.__decorate([e.property({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],c.prototype,"legendUrl",void 0);d.__decorate([p.reader(["web-document"],"legendUrl")],c.prototype,"readLegendUrl",null);
d.__decorate([e.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],c.prototype,"legendEnabled",void 0);d.__decorate([e.property()],c.prototype,"layer",void 0);d.__decorate([e.property()],c.prototype,"maxScale",void 0);d.__decorate([e.property()],c.prototype,"minScale",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"effectiveScaleRange",null);d.__decorate([e.property({type:String,
value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],c.prototype,"name",null);d.__decorate([e.property()],c.prototype,"parent",void 0);d.__decorate([e.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],c.prototype,"popupEnabled",void 0);d.__decorate([e.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],c.prototype,"queryable",void 0);d.__decorate([e.property()],c.prototype,"sublayers",void 0);d.__decorate([u.cast("sublayers")],
c.prototype,"castSublayers",null);d.__decorate([e.property({type:[Number],json:{read:{source:"spatialReferences"}}})],c.prototype,"spatialReferences",void 0);d.__decorate([e.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],c.prototype,"title",null);d.__decorate([e.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],c.prototype,"visible",null);return c=n=d.__decorate([v.subclass("esri.layers.support.WMSSublayer")],c)});