// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../request ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ./WebSocketConnection ../../../../rest/query/operations/query ../../../../rest/support/Query ../../../../geometry/support/jsonUtils ../../../../geometry/SpatialReference".split(" "),
function(u,q,v,r,w,m,l,h,x,y,J,K,L,z,A,t,B,C,D){const E={maxQueryDepth:5,maxRecordCountFactor:3};r=function(f){function n(a){a=F.call(this,{...E,...a});a._buddyServicesQuery=null;a._relatedFeatures=null;return a}q._inherits(n,f);var F=q._createSuper(n);f=n.prototype;f._open=async function(){var a=await this._fetchServiceDefinition(this._config.source);a.timeInfo.trackIdField||l.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
a=this._fetchWebSocketUrl(a.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices());await this._buddyServicesQuery;await this._tryCreateWebSocket(a);const {filter:b,outFields:c}=this._config;this.destroyed||this._setFilter(b,c)};f._onMessage=function(a){if("attributes"in a){let b;try{b=this._enrich(a),h.isSome(this._featureZScaler)&&this._featureZScaler(b.geometry)}catch(c){l.getLogger(this.declaredClass).error(new m("geoevent-connection",
"Failed to parse message",c));return}this.onFeature(b)}else this.onMessage(a)};f._fetchServiceDefinition=async function(a){return this._serviceDefinition=a=(await w(a.path,{query:{f:"json",...this._config.customParameters},responseType:"json"})).data};f._fetchWebSocketUrl=function(a,b){const {urls:c,token:d}=a[0];a=this._inferWebSocketBaseUrl(c);return y.addQueryParameters(`${a}/subscribe`,{outSR:""+b.wkid,token:d})};f._inferWebSocketBaseUrl=function(a){if(1===a.length)return a[0];for(const b of a)if(b.includes("wss"))return b;
l.getLogger(this.declaredClass).error(new m("geoevent-connection","Unable to infer WebSocket url",a));return null};f._setFilter=async function(a,b){const c=this._websocket;if(!(h.isNone(c)||h.isNone(a)&&h.isNone(b))){a=JSON.stringify({filter:this._serializeFilter(a,b)});var d=!1,e=x.createResolver();c.onmessage=g=>{g=JSON.parse(g.data);g.filter&&(g.error&&(l.getLogger(this.declaredClass).error(new m("geoevent-connection","Failed to set service filter",g.error)),this._set("errorString",`Could not set service filter - ${g.error}`),
e.reject(g.error)),this._setWebSocketJSONParseHandler(c),d=!0,e.resolve())};c.send(a);setTimeout(()=>{d||(this.destroyed||this._websocket!==c||l.getLogger(this.declaredClass).error(new m("geoevent-connection","Server timed out when setting filter")),e.reject())},1E4);return e.promise}};f._serializeFilter=function(a,b){const c={};if(h.isNone(a)&&h.isNone(b))return c;if(h.isSome(a)&&a.geometry)try{const d=C.fromJSON(a.geometry);if("extent"!==d.type)throw new m(`Expected extent but found type ${d.type}`);
c.geometry=JSON.stringify(d.shiftCentralMeridian())}catch(d){l.getLogger(this.declaredClass).error(new m("geoevent-connection","Encountered an error when setting connection geometryDefinition",d))}h.isSome(a)&&a.where&&"1 \x3d 1"!==a.where&&"1\x3d1"!==a.where&&(c.where=a.where);h.isSome(b)&&(c.outFields=b.join(","));return c};f._enrich=function(a){if(!this._relatedFeatures)return a;const b=this._relatedFeatures.get(a.attributes[this._serviceDefinition.relatedFeatures.joinField]);if(!b)return l.getLogger(this.declaredClass).warn("geoevent-connection",
"Feature join failed. Is the join field configured correctly?",a),a;const {attributes:c,geometry:d}=b;for(const e in c)a.attributes[e]=c[e];d&&(a.geometry=d);a.geometry||a.centroid||l.getLogger(this.declaredClass).error(new m("geoevent-connection","Found malformed feature - no geometry found",a));return a};f._queryBuddyServices=async function(){try{const {relatedFeatures:a,keepLatestArchive:b}=this._serviceDefinition,c=this._queryRelatedFeatures(a),d=this._queryArchive(b);await c;const e=await d;
if(e)for(const g of e.features)this.onFeature(this._enrich(g))}catch(a){l.getLogger(this.declaredClass).error(new m("geoevent-connection","Encountered an error when querying buddy services",{error:a}))}};f._queryRelatedFeatures=async function(a){a&&(a=await this._queryBuddy(a.featuresUrl),this._addRelatedFeatures(a))};f._queryArchive=async function(a){if(a)return this._queryBuddy(a.featuresUrl)};f._queryBuddy=async function(a){const b=new (await new Promise((G,H)=>u(["../../../FeatureLayer"],I=>G(Object.freeze(Object.defineProperty({__proto__:null,
default:I},Symbol.toStringTag,{value:"Module"}))),H))).default({url:a});var {capabilities:c}=await b.load();const d=c.query.supportsMaxRecordCountFactor,e=c.query.supportsPagination;c=c.query.supportsCentroid;const g=this._config.maxRecordCountFactor;var p=b.capabilities.query.maxRecordCount;p=d?p*g:p;const k=new B;k.outFields=h.unwrapOr(this._config.outFields,["*"]);k.where=h.unwrapOr(h.get(this._config.filter,"where"),"1\x3d1");k.returnGeometry=!0;k.returnExceededLimitFeatures=!0;k.outSpatialReference=
D.fromJSON(this._config.spatialReference);c&&(k.returnCentroid=!0);d&&(k.maxRecordCountFactor=g);if(e)return k.num=p,b.destroy(),this._queryPages(a,k);a=await t.executeQuery(a,k,this._config.sourceSpatialReference);b.destroy();return a.data};f._queryPages=async function(a,b,c=[],d=0){b.start=h.isSome(b.num)?d*b.num:null;const {data:e}=await t.executeQuery(a,b,this._config.sourceSpatialReference);if(e.exceededTransferLimit&&d<(this._config.maxQueryDepth??0))return e.features.forEach(g=>c.push(g)),
this._queryPages(a,b,c,d+1);c.forEach(g=>e.features.push(g));return e};f._addRelatedFeatures=function(a){const b=new Map;a=a.features;const c=this._serviceDefinition.relatedFeatures.joinField;for(const d of a)b.set(d.attributes[c],d);this._relatedFeatures=b};return q._createClass(n)}(A.WebSocketConnection);return r=v.__decorate([z.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],r)});