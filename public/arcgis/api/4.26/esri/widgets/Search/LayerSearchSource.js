// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./SearchSource ./support/layerSearchUtils".split(" "),function(k,d,n,e,c,q,r,p){var m;c=m=function(f){function l(a){var b=t.call(this,a);b.displayField=null;b.exactMatch=null;b.orderByFields=null;b.searchFields=null;b.searchTemplate=null;b.suggestionTemplate=null;b.getResults=(g,h)=>
p.getResults({source:k._assertThisInitialized(b),...g},h);b.getSuggestions=(g,h)=>p.getSuggestions({source:k._assertThisInitialized(b),...g},h);return b}k._inherits(l,f);var t=k._createSuper(l);f=l.prototype;f.clone=function(){return new m({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?n.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,
prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?n.clone(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})};f._getFirstStringField=function(){return this.layer.fieldsIndex?.fields.find(a=>
"string"===a.type)?.name??""};f._getDisplayField=function(){return this.displayField||this.layer.displayField||this._getFirstStringField()};f._getSearchFieldsString=function(){const {layer:a,searchFields:b}=this;return a.loaded?`: ${(b||[this._getDisplayField()]).map(g=>{const h=a.getField(g);return h&&h.alias||g}).join(", ")}`:""};f._getLayerTitle=function(){var {layer:a}=this;if(a&&({title:a}=a,a))return`${a}${this._getSearchFieldsString()}`};k._createClass(l,[{key:"layer",set:function(a){this._set("layer",
a);a&&a.load().catch(()=>{})}},{key:"name",get:function(){return this._getLayerTitle()??""},set:function(a){this._overrideIfSome("name",a)}}]);return l}(r);d.__decorate([e.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],c.prototype,"displayField",void 0);d.__decorate([e.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],c.prototype,"exactMatch",void 0);d.__decorate([e.property({value:null})],c.prototype,"layer",null);d.__decorate([e.property()],
c.prototype,"name",null);d.__decorate([e.property({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0);d.__decorate([e.property()],c.prototype,"searchFields",void 0);d.__decorate([e.property()],c.prototype,"searchTemplate",void 0);d.__decorate([e.property()],c.prototype,"suggestionTemplate",void 0);return c=m=d.__decorate([q.subclass("esri.widgets.Search.LayerSearchSource")],c)});