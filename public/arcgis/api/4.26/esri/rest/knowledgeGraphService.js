// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../geometry ../kernel ../request ../core/Error ../core/Logger ./knowledgeGraph/GraphQueryResult ./knowledgeGraph/GraphQueryStreamingResult ./knowledgeGraph/KnowledgeGraph ./knowledgeGraph/ServiceDefinition ./knowledgeGraph/wasmInterface/knowledgeWasmAccess ./knowledgeGraph/wasmInterface/queryToWasmEncodedFactories ./knowledgeGraph/wasmInterface/updateToWasmEncodedFactories ./knowledgeGraph/wasmInterface/wasmToDataModelFactories ./knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories ./knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories ../geometry/Geometry".split(" "),
function(k,Q,D,q,f,E,y,z,F,G,m,p,r,H,I,J,K){async function t(a){a.dataModel=await A(a)}async function B(a){const c=(await q(a.url,{query:{f:"json"}})).data;c.capabilities=c?.capabilities?.split(",");c.supportedQueryFormats=c?.supportedQueryFormats?.split(",");a.serviceDefinition=new G(c);return a.serviceDefinition}async function v(a){D.id?.findCredential(a.url)||(a.dataModel?await A(a):await t(a))}function u(a,c,b){if(0!==a.error_code)throw new f(c,b,{errorCode:a.error_code,errorMessage:a.error_message});
}async function L(a,c){c.dataModel||await t(c);if(!c.dataModel)throw new f("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const b=await m.getWasmInterface();c=!!a.options?.cascadeDelete;const d=new b.GraphApplyEditsEncoder(b.SpatialReferenceUtil.WGS84(),a.options?.inputQuantizationParameters?r.inputQuantizationParemetersToWasmFormat(a.options?.inputQuantizationParameters):b.InputQuantizationUtil.WGS84_lossless());
d.deleteLater();d.cascade_delete=c;try{let g;a.entityAdds?.forEach(e=>{g=d.add_entity(r.namedObjectToWasm(e,b));u(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")});a.relationshipAdds?.forEach(e=>{if(!e.originId||!e.destinationId)throw new f("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
g=d.add_relationship(r.namedObjectToWasm(e,b));u(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")});a.entityUpdates?.forEach(e=>{if(!e.id)throw new f("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");g=d.update_entity(r.namedObjectToWasm(e,b));u(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")});
a.relationshipUpdates?.forEach(e=>{if(!e.id)throw new f("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");g=d.update_relationship(r.namedObjectToWasm(e,b));u(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")});a.entityDeletes?.forEach(e=>{if(!e.typeName)throw new f("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");
const h=d.make_delete_helper(e.typeName,!0);h.deleteLater();e.ids?.forEach(l=>{h.delete_by_id(l)})});a.relationshipDeletes?.forEach(e=>{if(!e.typeName)throw new f("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const h=d.make_delete_helper(e.typeName,!1);e.ids?.forEach(l=>{h.delete_by_id(l)})});d.encode()}catch(g){throw new f("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:g});}a=
d.get_encoding_result();u(a.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed");return a.get_byte_buffer()}async function M(a,c){const b=await m.getWasmInterface(),d=new b.GraphQueryRequestEncoder;d.deleteLater();d.output_spatial_reference=b.SpatialReferenceUtil.WGS84();d.open_cypher_query=a.openCypherQuery;if(a.bindParameters)for(const [n,N]of Object.entries(a.bindParameters)){var g=n,e=N,h=d,l=b;null===e||void 0===e?h.set_param_key_value(g,""):"object"!==
typeof e?h.set_param_key_value(g,e):e instanceof Date?h.set_param_key_value(g,e):e instanceof K?h.set_param_key_value(g,p.geometryToWasm(e,l)):e instanceof Array?h.set_param_key_value(g,p.bindParamArrayToWasm(e,l)):h.set_param_key_value(g,p.bindParamObjectToWasm(e,l))}if(a.bindGeometryQuantizationParameters)p.setInputQuantizationParametersOnEncoder(a.bindGeometryQuantizationParameters,d);else if(c.dataModel||await t(c),4326===c.dataModel?.spatialReference?.wkid)d.input_quantization_parameters=b.InputQuantizationUtil.WGS84_lossless();
else throw new f("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");a.outputQuantizationParameters&&p.setOutputQuantizationParametersOnEncoder(a.outputQuantizationParameters,d,b);try{d.encode()}catch(n){throw new f("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:n});}a=d.get_encoding_result();if(0!==a.error.error_code)throw new f("knowledge-graph:query-encoding-failed",
"Attempting to encode the query failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return a.get_byte_buffer()}async function O(a){const c=await m.getWasmInterface(),b=new c.GraphSearchRequestEncoder;b.deleteLater();b.search_query=a.searchQuery;b.type_category_filter=c.esriNamedTypeCategory[a.typeCategoryFilter.toString()];!0===a.returnSearchContext&&(b.return_search_context=a.returnSearchContext);void 0!==a.start&&0<a.start&&(b.start_index=a.start);void 0!==a.num&&(b.max_num_results=
a.num);if(void 0!==a.idsFilter&&Array.isArray(a.idsFilter)&&0<a.idsFilter.length)try{b.set_ids_filter(p.bindParamArrayToWasm(a.idsFilter,c))}catch(d){throw new f("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:d});}a.namedTypesFilter?.forEach(d=>{b.add_named_type_filter(d)});try{b.encode()}catch(d){throw new f("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:d});
}a=b.get_encoding_result();if(0!==a.error.error_code)throw new f("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return a.get_byte_buffer()}async function w(a,c){return q(a,{responseType:"native-request-init",method:"post",query:{f:"pbf",...c?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:c?.signal,timeout:c?.timeout})}async function P(a){var c=a.headers.get("content-type");
if(c?.includes("application/x-protobuf"))return a=await a.arrayBuffer(),c=new ((await m.getWasmInterface()).GraphApplyEditsDecoder),c.deleteLater(),c.decode(new Uint8Array(a)),J.decoderToApplyEditsResponse(c);throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:c,data:a.text()});}function x(a,c,b){a.push_buffer(new Uint8Array(c));c=[];for(b=0;a.next_row();){b||(b=a.get_header_keys().size());const d=Array(b);for(let g=0;g<b;g++){const e=a.get_value(g);
d[g]=I.decodedWasmObjToQueryResponseObj(e)}c.push(d)}if(a.has_error())throw new f("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return c}async function C(a,c){c=a.headers.get("content-type");a.headers.get("content-length")&&E.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined.");
if(c?.includes("application/x-protobuf")){const b=a.body?.getReader(),d=new ((await m.getWasmInterface()).GraphQueryDecoder);d.deleteLater();return new ReadableStream({async start(g){function e(){return b?.read().then(({done:h,value:l})=>{if(h){let n;d.has_error()&&(n=new f("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:d.error.error_code,errorMessage:d.error.error_message}));b.releaseLock();if(n)throw g.error(n),n;g.close()}else return h=
x(d,l),0<h.length&&g.enqueue(h),e()})}try{return e()}catch(h){b?.releaseLock(),g.error(new f("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:h})),g.close()}}})}throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:c,data:a.text()});}async function A(a){a=await q(`${a.url}/dataModel/queryDataModel`,{responseType:"array-buffer",query:{f:"pbf"}});const c=
a.getHeader?.("content-type"),b=a.data;if(c?.includes("application/x-protobuf")){a=(await m.getWasmInterface()).decode_data_model_from_protocol_buffer(new Uint8Array(b));if(!a)throw new f("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return H.wasmToDataModel(a)}throw new f("knowledge-graph:unexpected-server-response",
"server returned an unexpected response",{responseType:c,data:a.data});}k.executeApplyEdits=async function(a,c,b){if(a.serviceDefinition?.dataEditingNotSupported)throw new f("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const d=`${a.url}/graph/applyEdits`;await v(a);b=await w(d,b);b.data.body=await L(c,a);a=await fetch(b.data.url,b.data);return P(a)};k.executeQuery=async function(a,c,b){b=await q(`${a.url}/graph/query`,
{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:c.openCypherQuery,...b?.query},signal:b?.signal,timeout:b?.timeout});const d=b.getHeader?.("content-type");c=b.data;if(d?.includes("application/x-protobuf")){b=new ((await m.getWasmInterface()).GraphQueryDecoder);b.deleteLater();if(a.dataModel)return new y({resultRows:x(b,c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");}throw new f("knowledge-graph:unexpected-server-response",
"server returned an unexpected response",{responseType:d,data:b.data});};k.executeQueryStreaming=async function(a,c,b){const d=`${a.url}/graph/query`;await v(a);b=await w(d,b);b.data.body=await M(c,a);c=await fetch(b.data.url,b.data);if(a.dataModel)return new z({resultRowsStream:await C(c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");};k.executeSearch=async function(a,c,b){b=await q(`${a.url}/graph/search`,{responseType:"array-buffer",
query:{f:"pbf",searchQuery:`"${c.searchQuery}"`,typeCategoryFilter:c.typeCategoryFilter,...b?.query},signal:b?.signal,timeout:b?.timeout});const d=b.getHeader?.("content-type");c=b.data;if(d?.includes("application/x-protobuf")){b=new ((await m.getWasmInterface()).GraphQueryDecoder);b.deleteLater();if(a.dataModel)return new y({resultRows:x(b,c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");}throw new f("knowledge-graph:unexpected-server-response",
"server returned an unexpected response",{responseType:d,data:b.data});};k.executeSearchStreaming=async function(a,c,b){const d=`${a.url}/graph/search`;await v(a);b=await w(d,b);b.data.body=await O(c);c=await fetch(b.data.url,b.data);if(a.dataModel)return new z({resultRowsStream:await C(c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");};k.fetchKnowledgeGraph=async function(a){a=new F({url:a});const c=[];c.push(t(a));c.push(B(a));
await Promise.all(c);return a};k.refreshDataModel=t;k.refreshServiceDefinition=B;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});