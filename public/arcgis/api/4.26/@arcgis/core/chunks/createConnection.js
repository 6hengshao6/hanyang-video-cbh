/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../request.js";import r from"../core/Error.js";import{L as s}from"./Logger.js";import{i as o,a as i,e as n,j as a}from"./maybe.js";import{after as c,createResolver as l}from"../core/promiseUtils.js";import{addQueryParameters as u}from"../core/urlUtils.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{g as m}from"./zscale.js";import h from"../layers/support/StreamConnection.js";import{e as g}from"./query.js";import f from"../rest/support/Query.js";import{fromJSON as y}from"../geometry/support/jsonUtils.js";import _ from"../geometry/SpatialReference.js";import"../geometry/Extent.js";import"./string.js";import"./object.js";import"../core/lang.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../config.js";import"./reader.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../kernel.js";import"../core/Evented.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils4.js";import"./utils5.js";import"./urlUtils2.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../TimeExtent.js";import"./timeUtils.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"../rest/support/StatisticDefinition.js";var j;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(j||(j={}));let w=class extends h{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=m(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),o(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(i(this._websocket))return"disconnected";switch(this._websocket.readyState){case j.CONNECTING:case j.OPEN:return"connected";case j.CLOSING:case j.CLOSED:return"disconnected"}}sendMessageToSocket(e){i(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,o(this._websocket)&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,o=0){try{if(this.destroyed)return;const t=u(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(i){const n=t/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(s.getLogger(this.declaredClass).error(new r("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(s.getLogger(this.declaredClass).error(new r("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,i)),await c(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),o+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(e){return void s.getLogger(this.declaredClass).error(new r("websocket-connection","Failed to parse message, invalid JSON",{error:e}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if(i(t))return;const o=l(),n=t.onmessage,{filter:a,outFields:c,spatialReference:u}=this._config;return o.timeout(e),t.onmessage=e=>{let i=null;try{i=JSON.parse(e.data)}catch(e){}i&&"object"==typeof i||(s.getLogger(this.declaredClass).error(new r("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),o.reject(),this.destroy()),i.spatialReference?.wkid!==u?.wkid&&(s.getLogger(this.declaredClass).error(new r("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),o.reject(),this.destroy()),"json"!==i.format&&(s.getLogger(this.declaredClass).error(new r("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),o.reject(),this.destroy()),a&&i.filter!==a&&s.getLogger(this.declaredClass).error(new r("websocket-connection","Tried to set filter, but server doesn't support it")),c&&i.outFields!==c&&s.getLogger(this.declaredClass).error(new r("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=n;for(const e of this._outstandingMessages)t.send(JSON.stringify(e));this._outstandingMessages=[],o.resolve()},t.send(JSON.stringify({filter:a,outFields:c,format:"json",spatialReference:{wkid:u.wkid}})),o.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)o(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),s.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&s.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};e([p()],w.prototype,"connectionStatus",null),e([p()],w.prototype,"errorString",void 0),w=e([d("esri.layers.graphics.sources.connections.WebSocketConnection")],w);const S={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends w{constructor(e){super({...S,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),o(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(e){return void s.getLogger(this.declaredClass).error(new r("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},s=t(e.path,{query:r,responseType:"json"}),o=(await s).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,i=this._inferWebSocketBaseUrl(s);return u(`${i}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s.getLogger(this.declaredClass).error(new r("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const o=this._websocket;if(i(o)||i(e)&&i(t))return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=l();return o.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s.getLogger(this.declaredClass).error(new r("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(o),a=!0,c.resolve())},o.send(n),setTimeout((()=>{a||(this.destroyed||this._websocket!==o||s.getLogger(this.declaredClass).error(new r("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const n={};if(i(e)&&i(t))return n;if(o(e)&&e.geometry)try{const t=y(e.geometry);if("extent"!==t.type)throw new r(`Expected extent but found type ${t.type}`);n.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){s.getLogger(this.declaredClass).error(new r("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return o(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(n.where=e.where),o(t)&&(n.outFields=t.join(",")),n}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],i=this._relatedFeatures.get(o);if(!i)return s.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=i;for(const t in n)e.attributes[t]=n[t];return a&&(e.geometry=a),e.geometry||e.centroid||s.getLogger(this.declaredClass).error(new r("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const e of o.features)this.onFeature(this._enrich(e))}catch(e){s.getLogger(this.declaredClass).error(new r("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import("../layers/FeatureLayer.js")).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,i=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,u=s?l*c:l,d=new f;if(d.outFields=n(this._config.outFields,["*"]),d.where=n(a(this._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=_.fromJSON(this._config.spatialReference),i&&(d.returnCentroid=!0),s&&(d.maxRecordCountFactor=c),o)return d.num=u,t.destroy(),this._queryPages(e,d);const p=await g(e,d,this._config.sourceSpatialReference);return t.destroy(),p.data}async _queryPages(e,t,r=[],s=0){t.start=o(t.num)?s*t.num:null;const{data:i}=await g(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(i.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[s];t.set(r,e)}this._relatedFeatures=t}};b=e([d("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const k=b;let C=class extends h{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=m(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)o(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function v(e,t,r,s,o,i,n,a){const c={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:i,maxReconnectionInterval:n,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new w(c):new k(c):new C(c)}e([p()],C.prototype,"connectionStatus",void 0),e([p()],C.prototype,"errorString",void 0),C=e([d("esri.layers.support.ClientSideConnection")],C);export{v as createConnection};
