// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../assets ../core/Error ../core/JSONSupport ../core/lang ../core/Loadable ../core/maybe ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Extent ./Portal ./PortalItemResource ./PortalRating".split(" "),function(t,v,e,B,u,d,l,C,n,x,f,D,E,F,y,z,G,w){var p;const H=new Set("Map Service;Feature Service;Feature Collection;Scene Service;Image Service;Stream Service;Vector Tile Service;GeoJson;CSV;KML;WFS;WMTS;WMS;Feed".split(";")),
I=new Set(["KML","GeoJson","CSV"]);d=p=function(g){function m(a){a=J.call(this,a);a.access=null;a.accessInformation=null;a.apiKey=null;a.applicationProxies=null;a.avgRating=null;a.categories=null;a.created=null;a.culture=null;a.description=null;a.extent=null;a.groupCategories=null;a.id=null;a.isOrgItem=!1;a.itemControl=null;a.licenseInfo=null;a.modified=null;a.name=null;a.numComments=null;a.numRatings=null;a.numViews=null;a.owner=null;a.ownerFolder=null;a.portal=null;a.screenshots=null;a.size=null;
a.snippet=null;a.sourceJSON=null;a.sourceUrl=null;a.spatialReference=null;a.tags=null;a.title=null;a.type=null;a.typeKeywords=null;a.url=null;return a}v._inherits(m,g);var J=v._createSuper(m);m.from=function(a){return D.ensureClass(p,a)};g=m.prototype;g.destroy=function(){this.portal=null};g.readExtent=function(a){return a&&a.length?new y(a[0][0],a[0][1],a[1][0],a[1][1]):null};g.load=function(a){const b=this.portal??(this.portal=z.getDefault()),c=b.load(a).then(()=>this.sourceJSON?this.sourceJSON:
this.id&&this.itemUrl?b.request(this.itemUrl,{signal:n.isSome(a)?a.signal:null,query:{token:this.apiKey}}):{}).then(h=>{this.sourceJSON=h;this.read(h)});this.addResolvingPromise(c);return Promise.resolve(this)};g.addRating=async function(a){const b={method:"post",query:{}};a instanceof w&&(a=a.rating);null==a||isNaN(a)||"number"!==typeof a||(b.query.rating=a);if(!this.portal)return null;await this.portal.request(this.itemUrl+"/addRating",b);return new w({rating:a,created:new Date})};g.clone=function(){var a=
{access:this.access,accessInformation:this.accessInformation,applicationProxies:l.clone(this.applicationProxies),avgRating:this.avgRating,categories:l.clone(this.categories),created:l.clone(this.created),culture:this.culture,description:this.description,extent:l.clone(this.extent),groupCategories:l.clone(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:l.clone(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,
owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:l.clone(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l.clone(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l.clone(this.typeKeywords),url:this.url};this.loaded&&(a.loadStatus="loaded");a=(new p({sourceJSON:this.sourceJSON})).set(a);a._set("isOrgItem",this.isOrgItem);return a};g.createPostQuery=function(){const a=
this.toJSON();for(var b of["tags","typeKeywords","categories"])a[b]&&(a[b]=a[b].join(", "));({extent:b}=a);b&&(a.extent=JSON.stringify(b));return a};g.deleteRating=async function(){await n.unwrapOrThrow(this.portal).request(this.itemUrl+"/deleteRating",{method:"post"})};g.fetchData=function(a="json",b){return n.unwrapOrThrow(this.portal).request(this.itemUrl+"/data",{responseType:a,...b,query:{token:this.apiKey}})};g.fetchRating=async function(a){a=await n.unwrapOrThrow(this.portal).request(this.itemUrl+
"/rating",{query:{token:this.apiKey},...a});return null!=a.rating?(a.created=new Date(a.created),new w(a)):null};g.fetchRelatedItems=function(a,b){return n.unwrapOrThrow(this.portal).requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...a,token:this.apiKey},...b},p)};g.getThumbnailUrl=function(a){let b=this.thumbnailUrl;b&&a&&(b+=`&w=${a}`);return b};g.reload=function(){return n.unwrapOrThrow(this.portal).request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(a=>{this.sourceJSON=
a;this.read(a);return this})};g.update=function(a){return this.id?this.load().then(()=>n.unwrapOrThrow(this.portal).signIn()).then(()=>{const b=a&&a.data,c={method:"post"};c.query=this.createPostQuery();for(const h in c.query)null===c.query[h]&&(c.query[h]="");c.query.clearEmptyFields=!0;null!=b&&("string"===typeof b?c.query.text=b:"object"===typeof b&&(c.query.text=JSON.stringify(b)));return this.portal.request(`${this.userItemUrl}/update`,c).then(()=>this.reload())}):Promise.reject(new u("portal:item-does-not-exist",
"The item does not exist yet and cannot be updated"))};g.copy=async function(a){if(!this.id)throw new u("portal:item-does-not-exist","The item does not exist yet");await this.load();const {portal:b,itemUrl:c}=this;await n.unwrapOrThrow(b).signIn();const {copyResources:h,folder:k,tags:q,title:r}=a||{};a={method:"post",query:{copyPrivateResources:"all"===h,folder:"string"===typeof k?k:k?.id,includeResources:!!h,tags:q?.join(","),title:r}};({itemId:a}=await b.request(`${c}/copy`,a));return new p({id:a,
portal:b})};g.updateThumbnail=function(a){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const b=a.thumbnail,c=a.filename,h={method:"post"};if("string"===typeof b)x.isDataProtocol(b)?h.query={data:b}:h.query={url:x.makeAbsolute(b)},n.isSome(c)&&(h.query.filename=c);else{const k=new FormData;n.isSome(c)?k.append("file",b,c):k.append("file",b);h.body=k}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,h).then(()=>this.reload())}):Promise.reject(new u("portal:item-does-not-exist",
"The item does not exist yet and cannot be updated"))};g.fetchResources=async function(a={},b){return(await new Promise((c,h)=>t(["./support/resourceUtils"],c,h))).fetchResources(this,a,b)};g.addResource=async function(a,b,c){const h=await new Promise((k,q)=>t(["./support/resourceUtils"],k,q));a.portalItem=this;return h.addOrUpdateResource(a,"add",b,c)};g.removeResource=async function(a,b){const c=await new Promise((h,k)=>t(["./support/resourceUtils"],h,k));if(a.portalItem&&a.portalItem.itemUrl!==
this.itemUrl)throw new u("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return c.removeResource(this,a,b)};g.removeAllResources=async function(a){return(await new Promise((b,c)=>t(["./support/resourceUtils"],b,c))).removeAllResources(this,a)};g.resourceFromPath=function(a){return new G({portalItem:this,path:a})};g.toJSON=function(){var a=this.extent;a={accessInformation:this.accessInformation,categories:l.clone(this.categories),
created:this.created&&this.created.getTime(),description:this.description,extent:a&&[[a.xmin,a.ymin],[a.xmax,a.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l.clone(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l.clone(this.typeKeywords),url:this.url};
return l.fixJson(a)};m.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new p({sourceJSON:a})};g._getPostQuery=function(){const a=this.toJSON();for(const b in a)"tags"===b&&null!==a[b]&&(a[b]=a[b].join(", ")),"typeKeywords"===b&&null!==a[b]&&(a[b]=a[b].join(", ")),"extent"===b&&a[b]&&(a[b]=JSON.stringify(a[b]));return a};v._createClass(m,[{key:"displayName",get:function(){const a=this.type,b=this.typeKeywords||[];let c=a;"Feature Service"===
a||"Feature Collection"===a?c=b.includes("Table")?"Table":b.includes("Route Layer")?"Route Layer":b.includes("Markup")?"Markup":"Feature Layer":"Image Service"===a?c=b.includes("Elevation 3D Layer")?"Elevation Layer":b.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===a?c="Scene Layer":"Video Service"===a?c="Video Layer":"Scene Package"===a?c="Scene Layer Package":"Stream Service"===a?c="Feature Layer":"Geoprocessing Service"===a&&this.portal&&this.portal.isPortal?
c=b.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===a?c="Locator":"Geoenrichment Service"===a?c="GeoEnrichment Service":"Microsoft Powerpoint"===a?c="Microsoft PowerPoint":"GeoJson"===a?c="GeoJSON":"Globe Service"===a?c="Globe Layer":"Vector Tile Service"===a?c="Tile Layer":"netCDF"===a?c="NetCDF":"Map Service"===a?c=b.includes("Spatiotemporal")||!b.includes("Hosted Service")&&!b.includes("Tiled")||b.includes("Relational")?"Map Image Layer":"Tile Layer":a&&a.toLowerCase().includes("add in")?
c=a.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===a?c="Big Data File Share":"Compact Tile Package"===a?c="Tile Package (tpkx)":"OGCFeatureServer"===a?c="OGC Feature Layer":"web mapping application"===a&&b.includes("configurableApp")?c="Instant App":"Insights Page"===a&&(c="Insights Report");return c}},{key:"iconUrl",get:function(){var a=this.type&&this.type.toLowerCase()||"";const b=this.typeKeywords||[];let c=!1,h=!1,k=!1,q=!1,r=!1,A=!1;0<a.indexOf("service")||"feature collection"===
a||"kml"===a||"wms"===a||"wmts"===a||"wfs"===a?(c=b.includes("Hosted Service"),"feature service"===a||"feature collection"===a||"kml"===a||"wfs"===a?(h=b.includes("Table"),k=b.includes("Route Layer"),q=b.includes("Markup"),r=b.includes("Spatiotemporal"),A=b.includes("UtilityNetwork"),a=r&&h?"spatiotemporaltable":h?"table":k?"routelayer":q?"markup":r?"spatiotemporal":c?"featureshosted":A?"utilitynetwork":"features"):a="map service"===a||"wms"===a||"wmts"===a?c||b.includes("Tiled")||"wmts"===a?"maptiles":
"mapimages":"scene service"===a?b.includes("Line")?"sceneweblayerline":b.includes("3DObject")?"sceneweblayermultipatch":b.includes("Point")?"sceneweblayerpoint":b.includes("IntegratedMesh")?"sceneweblayermesh":b.includes("PointCloud")?"sceneweblayerpointcloud":b.includes("Polygon")?"sceneweblayerpolygon":b.includes("Building")?"sceneweblayerbuilding":b.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===a?b.includes("Elevation 3D Layer")?"elevationlayer":b.includes("Tiled Imagery")?
"tiledimagerylayer":"imagery":"stream service"===a?"streamlayer":"video service"===a?"mediaservice":"vector tile service"===a?"vectortile":"datastore catalog service"===a?"datastorecollection":"geocoding service"===a?"geocodeservice":"geoprocessing service"===a?b.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===a?"geodataservice":"layers"):a="web map"===a||"cityengine web scene"===a?"maps":"web scene"===a?b.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":
"web mapping application"===a&&b.includes("configurableApp")?"instantapps":"web mapping application"===a||"mobile application"===a||"application"===a||"operation view"===a||"desktop application"===a?"apps":"map document"===a||"map package"===a||"published map"===a||"scene document"===a||"globe document"===a||"basemap package"===a||"mobile basemap package"===a||"mobile map package"===a||"project package"===a||"project template"===a||"pro map"===a||"layout"===a||"layer"===a&&b.includes("ArcGIS Pro")||
"explorer map"===a&&b.indexOf("Explorer Document")?"mapsgray":"service definition"===a||"csv"===a||"shapefile"===a||"cad drawing"===a||"geojson"===a||"360 vr experience"===a||"netcdf"===a||"administrative report"===a?"datafiles":"explorer add in"===a||"desktop add in"===a||"windows viewer add in"===a||"windows viewer configuration"===a?"appsgray":"arcgis pro add in"===a||"arcgis pro configuration"===a?"addindesktop":"rule package"===a||"file geodatabase"===a||"sqlite geodatabase"===a||"csv collection"===
a||"kml collection"===a||"windows mobile package"===a||"map template"===a||"desktop application template"===a||"gml"===a||"arcpad package"===a||"code sample"===a||"form"===a||"document link"===a||"earth configuration"===a||"operations dashboard add in"===a||"rules package"===a||"image"===a||"workflow manager package"===a||"explorer map"===a&&b.includes("Explorer Mapping Application")||b.includes("Document")?"datafilesgray":"network analysis service"===a||"geoprocessing service"===a||"geodata service"===
a||"geometry service"===a||"geoprocessing package"===a||"locator package"===a||"geoprocessing sample"===a||"workflow manager service"===a?"toolsgray":"layer"===a||"layer package"===a||"explorer layer"===a?"layersgray":"scene package"===a?"scenepackage":"mobile scene package"===a?"mobilescenepackage":"tile package"===a||"compact tile package"===a?"tilepackage":"task file"===a?"taskfile":"report template"===a?"report-template":"statistical data collection"===a?"statisticaldatacollection":"insights workbook"===
a?"workbook":"insights model"===a?"insightsmodel":"insights page"===a?"insightspage":"insights theme"===a?"insightstheme":"hub initiative"===a?"hubinitiative":"hubpage"===a?"hubpage":"hub event"===a?"hubevent":"hub site application"===a?"hubsite":"hub project"===a?"hubproject":"relational database connection"===a?"relationaldatabaseconnection":"big data file share"===a?"datastorecollection":"image collection"===a?"imagecollection":"style"===a?"style":"desktop style"===a?"desktopstyle":"dashboard"===
a?"dashboard":"raster function template"===a?"rasterprocessingtemplate":"vector tile package"===a?"vectortilepackage":"ortho mapping project"===a?"orthomappingproject":"ortho mapping template"===a?"orthomappingtemplate":"solution"===a?"solutions":"geopackage"===a?"geopackage":"deep learning package"===a?"deeplearningpackage":"real time analytic"===a?"realtimeanalytics":"big data analytic"===a?"bigdataanalytics":"feed"===a?"feed":"excalibur imagery project"===a?"excaliburimageryproject":"notebook"===
a?"notebook":"storymap"===a?"storymap":"survey123 add in"===a?"survey123addin":"mission"===a?"mission":"mission report"===a?"missionreport":"quickcapture project"===a?"quickcaptureproject":"pro report"===a?"proreport":"pro report template"===a?"proreporttemplate":"urban model"===a?"urbanmodel":"web experience"===a?"experiencebuilder":"web experience template"===a?"webexperiencetemplate":"experience builder widget"===a?"experiencebuilderwidget":"experience builder widget package"===a?"experiencebuilderwidgetpackage":
"workflow"===a?"workflow":"insights script"===a?"insightsscript":"kernel gateway connection"===a?"kernelgatewayconnection":"hub initiative template"===a?"hubinitiativetemplate":"storymap theme"===a?"storymaptheme":"knowledge graph"===a?"knowledgegraph":"native application"===a?"nativeapp":"native application installer"===a?"nativeappinstaller":"link chart"===a?"linkchart":"investigation"===a?"investigation":"ogcfeatureserver"===a?"features":"pro project"===a?"proproject":"insights workbook package"===
a?"insightsworkbookpackage":"apache parquet"===a?"apacheparquet":"notebook code snippets"===a||"notebook code snippet library"===a?"notebookcodesnippets":"suitability model"===a?"suitabilitymodel":"esri classifier definition"===a?"classifierdefinition":"esri classification schema"===a?"classificationschema":"insights data engineering workbook"===a?"dataengineeringworkbook":"insights data engineering model"===a?"dataengineeringmodel":"deep learning studio project"===a?"deeplearningproject":"discussion"===
a?"discussion":"allsource project"===a?"allsourceproject":"api key"===a?"apikey":"maps";return a?B.getAssetUrl("esri/images/portal/"+a+"16.png"):null}},{key:"isLayer",get:function(){return null!=this.type&&H.has(this.type)}},{key:"itemPageUrl",get:function(){const a=this.portal?.itemPageUrl;return a&&this.id?`${a}?id=${this.id}`:null}},{key:"itemUrl",get:function(){const a=this.portal?.restUrl;return a&&this.id?`${a}/content/items/${this.id}`:null}},{key:"thumbnailUrl",get:function(){const a=this.itemUrl,
b=this.thumbnail;return a&&b?this.portal?.normalizeUrl(`${a}/info/${b}?f=json`)??null:null}},{key:"userItemUrl",get:function(){const a=this.get("portal.restUrl");if(!a)return null;const b=this.owner||this.get("portal.user.username");return b?`${a}/content/users/${this.ownerFolder?`${b}/${this.ownerFolder}`:b}/items/${this.id}`:null}}]);return m}(d.JSONSupportMixin(C));e.__decorate([f.property({type:["private","shared","org","public"]})],d.prototype,"access",void 0);e.__decorate([f.property()],d.prototype,
"accessInformation",void 0);e.__decorate([f.property({type:String})],d.prototype,"apiKey",void 0);e.__decorate([f.property({json:{read:{source:"appProxies"}}})],d.prototype,"applicationProxies",void 0);e.__decorate([f.property()],d.prototype,"avgRating",void 0);e.__decorate([f.property()],d.prototype,"categories",void 0);e.__decorate([f.property({type:Date})],d.prototype,"created",void 0);e.__decorate([f.property()],d.prototype,"culture",void 0);e.__decorate([f.property()],d.prototype,"description",
void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"displayName",null);e.__decorate([f.property({type:y})],d.prototype,"extent",void 0);e.__decorate([E.reader("extent")],d.prototype,"readExtent",null);e.__decorate([f.property()],d.prototype,"groupCategories",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"iconUrl",null);e.__decorate([f.property()],d.prototype,"id",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"isLayer",null);e.__decorate([f.property({type:Boolean,
readOnly:!0})],d.prototype,"isOrgItem",void 0);e.__decorate([f.property()],d.prototype,"itemControl",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"itemPageUrl",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"itemUrl",null);e.__decorate([f.property()],d.prototype,"licenseInfo",void 0);e.__decorate([f.property({type:Date})],d.prototype,"modified",void 0);e.__decorate([f.property()],d.prototype,"name",void 0);e.__decorate([f.property()],d.prototype,"numComments",void 0);e.__decorate([f.property()],
d.prototype,"numRatings",void 0);e.__decorate([f.property()],d.prototype,"numViews",void 0);e.__decorate([f.property()],d.prototype,"owner",void 0);e.__decorate([f.property()],d.prototype,"ownerFolder",void 0);e.__decorate([f.property({type:z})],d.prototype,"portal",void 0);e.__decorate([f.property()],d.prototype,"screenshots",void 0);e.__decorate([f.property()],d.prototype,"size",void 0);e.__decorate([f.property()],d.prototype,"snippet",void 0);e.__decorate([f.property()],d.prototype,"sourceJSON",
void 0);e.__decorate([f.property({type:String})],d.prototype,"sourceUrl",void 0);e.__decorate([f.property({type:String})],d.prototype,"spatialReference",void 0);e.__decorate([f.property()],d.prototype,"tags",void 0);e.__decorate([f.property()],d.prototype,"thumbnail",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"thumbnailUrl",null);e.__decorate([f.property()],d.prototype,"title",void 0);e.__decorate([f.property()],d.prototype,"type",void 0);e.__decorate([f.property()],d.prototype,
"typeKeywords",void 0);e.__decorate([f.property({type:String,json:{read(g,m){I.has(m.type)&&(m=this.portal?.restUrl,g||(g=m&&this.id?`${m}/content/items/${this.id}/data`:null));return g}}})],d.prototype,"url",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"userItemUrl",null);return d=p=e.__decorate([F.subclass("esri.portal.PortalItem")],d)});