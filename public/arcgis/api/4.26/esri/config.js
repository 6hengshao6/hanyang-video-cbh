// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["module","./core/has","./core/object"],function(b,a,c){a={analysisTheme:{accentColor:[255,128,0],textColor:"white"},apiKey:void 0,applicationUrl:globalThis.location?.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",userPrivilegesApplied:!1,portalUrl:"https://www.arcgis.com",
routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{crossOriginNoCorsDomains:null,httpsDomains:"arcgis.com arcgisonline.com esrikr.com premiumservices.blackbridge.com esripremium.accuweather.com gbm.digitalglobe.com firstlook.digitalglobe.com msi.digitalglobe.com".split(" "),interceptors:[],maxUrlLength:2E3,priority:"high",proxyRules:[],proxyUrl:null,timeout:6E4,trustedServers:[],
useIdentity:!0},log:{interceptors:[],level:null}};globalThis.esriConfig&&(c.deepMerge(a,globalThis.esriConfig,!0),delete a.has);a.assetsPath||(b=(new URL(b.uri,document.baseURI)).href,a.assetsPath=b.slice(0,b.lastIndexOf("esri/")),a.defaultAssetsPath=a.assetsPath);return a});