// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../core/Error ../core/maybe ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./FeatureLayer ./graphics/sources/CSVSource ./graphics/sources/support/clientSideDefaults ../rest/support/Query ../chunks/persistableUrlUtils ../geometry/SpatialReference".split(" "),
function(h,e,d,m,n,u,v,f,C,D,E,w,x,y,p,z,k,q,A){function r(c,g){throw new m(g,`CSVLayer (title: ${c.title}, id: ${c.id}) cannot be saved to a portal item`);}d=function(c){function g(...a){a=B.call(this,...a);a.geometryType="point";a.capabilities=z.createCapabilities(!1,!1);a.delimiter=null;a.editingEnabled=!1;a.fields=null;a.latitudeField=null;a.locationType="coordinates";a.longitudeField=null;a.operationalLayerType="CSV";a.outFields=["*"];a.path=null;a.spatialReference=A.WGS84;a.source=null;a.type=
"csv";return a}h._inherits(g,c);var B=h._createSuper(g);c=g.prototype;c.normalizeCtorArgs=function(a,b){return"string"===typeof a?{url:a,...b}:a};c.load=function(a){const b=n.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},a).catch(u.throwIfAbortError).then(async()=>this.initLayerProperties(await this.createGraphicsSource(b)));this.addResolvingPromise(a);return Promise.resolve(this)};c.readWebMapLabelsVisible=function(a,b){return null!=b.showLabels?b.showLabels:
!!(b.layerDefinition&&b.layerDefinition.drawingInfo&&b.layerDefinition.drawingInfo.labelingInfo)};c.createGraphicsSource=async function(a){const b=new p.CSVSource({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});this._set("source",b);await b.load({signal:a});this.read({locationInfo:b.locationInfo,
columnDelimiter:b.delimiter},{origin:"service",url:this.parsedUrl});return b};c.queryFeatures=function(a,b){return this.load().then(()=>this.source.queryFeatures(k.from(a)||this.createQuery())).then(l=>{if(l?.features)for(const t of l.features)t.layer=t.sourceLayer=this;return l})};c.queryObjectIds=function(a,b){return this.load().then(()=>this.source.queryObjectIds(k.from(a)||this.createQuery()))};c.queryFeatureCount=function(a,b){return this.load().then(()=>this.source.queryFeatureCount(k.from(a)||
this.createQuery()))};c.queryExtent=function(a,b){return this.load().then(()=>this.source.queryExtent(k.from(a)||this.createQuery()))};c.read=function(a,b){h._get(h._getPrototypeOf(g.prototype),"read",this).call(this,a,b);b&&"service"===b.origin&&this.revert(["latitudeField","longitudeField"],"service")};c.write=function(a,b){return h._get(h._getPrototypeOf(g.prototype),"write",this).call(this,a,{...b,writeLayerSchema:!0})};c.clone=function(){throw new m("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);
};c.save=async function(a){return r(this,"csv-layer:save")};c.saveAs=async function(a,b){return r(this,"csv-layer:save-as")};c.hasDataChanged=async function(){try{const {dataChanged:a,updates:b}=await this.source.refresh(this.customParameters);n.isSome(b)&&this.read(b,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return a}catch{}return!1};c._verifyFields=function(){};c._verifySource=function(){};c._hasMemorySource=function(){return!1};h._createClass(g,[{key:"isTable",get:function(){return this.loaded&&
null==this.geometryType}},{key:"url",set:function(a){a?(a=v.urlToObject(a),this._set("url",a.path),a.query&&(this.customParameters={...this.customParameters,...a.query})):this._set("url",a)}}]);return g}(y);e.__decorate([f.property({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"capabilities",void 0);e.__decorate([f.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0);e.__decorate([f.property({readOnly:!0,
type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0);e.__decorate([f.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0);e.__decorate([f.property({type:Boolean,readOnly:!0})],d.prototype,"isTable",null);e.__decorate([w.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null);e.__decorate([f.property({type:String,
json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0);e.__decorate([f.property({type:["show","hide"]})],d.prototype,"listMode",void 0);e.__decorate([f.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0);e.__decorate([f.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},
write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0);e.__decorate([f.property({type:["CSV"]})],d.prototype,"operationalLayerType",void 0);e.__decorate([f.property()],d.prototype,"outFields",void 0);e.__decorate([f.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0);e.__decorate([f.property({json:{read:!1},cast:null,type:p.CSVSource,readOnly:!0})],d.prototype,"source",void 0);e.__decorate([f.property({json:{read:!1},
value:"csv",readOnly:!0})],d.prototype,"type",void 0);e.__decorate([f.property({json:{read:q.read,write:{isRequired:!0,ignoreOrigin:!0,writer:q.write}}})],d.prototype,"url",null);return d=e.__decorate([x.subclass("esri.layers.CSVLayer")],d)});