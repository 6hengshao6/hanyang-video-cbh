// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/arrayUtils ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/quantizationUtils ../../../layers/support/arcgisLayerUrl ../../../layers/support/fieldType ../../../layers/support/fieldUtils ../../../rest/generateRenderer ../../../rest/support/GenerateRendererParameters ../../../rest/support/QuantizationParameters ../../../rest/support/StatisticDefinition ../../../rest/support/UniqueValueDefinition ../../statistics/support/predominanceUtils ../../statistics/support/statsWorker ../../statistics/support/utils ../../statistics/support/WorkerClient ../utils ./LayerAdapter ./support/utils ../../../statistics/utils".split(" "),
function(Q,J,N,O,z,R,D,B,S,T,G,ea,U,V,W,X,F,Y,K,Z,L,aa,P,E,u,ba,C,ca,r,y){let M;G=function(n){function H(a){a=da.call(this,a);a._hasLocalSource=!1;return a}J._inherits(H,n);var da=J._createSuper(H);n=H.prototype;n.destroy=function(){this.workerClient?.destroy()};n._isStatsSupportedOnService=function(){const a=this.layer;return!a.get("capabilities.query.supportsStatistics")||"multipatch"===this.geometryType&&!W.isHostedAgolService(a.url)&&10.5>a.version?Promise.reject(new z("feature-layer-adapter:not-supported",
"Layer does not support statistics query")):Promise.resolve()};n._waitForLayerViewUpdate=async function(a){if(!a)throw new z("feature-layer-adapter:insufficient-data","layerView is required to fetch the features");const c=new AbortController,b=S.whenOnce(()=>!a.updating,c.signal);await B.timeout(b,5E3,c).catch(d=>{R.getLogger(this.declaredClass).warn("LayerView is taking too long to update. Aborting fetch from layerView.");throw d;})};n._fetchFeaturesFromMemory=async function(a,c,b,d){const f=this.layer;
d="json"===d;if(this._hasLocalSource)return a=await f.queryFeatures(c),d?r.ensureFeaturesJSON(a.features):a.features;await this._waitForLayerViewUpdate(a);if(d&&"queryFeaturesJSON"in a&&a.queryFeaturesJSON)return{features:d}=await a.queryFeaturesJSON(c,{signal:b}),d;a=await a.queryFeatures(c,{signal:b});return d?r.ensureFeaturesJSON(a.features):a.features};n._fetchFeaturesFromService=function(a,c){return this.layer.queryFeatures(a,{signal:c}).then(b=>b.features)};n._fetchFeaturesJSONFromService=function(a,
c){return this._fetchFeaturesFromService(a,c).then(r.ensureFeaturesJSON)};n._fetchFeaturesForStats=function(a,c){return C.getFieldsList({field:a.field,field2:a.field2,field3:a.field3,normalizationField:a.normalizationField,valueExpression:a.valueExpression}).then(b=>this.getSampleFeatures({sampleSize:-1,view:a.view,returnGeometry:a.returnGeometry,filter:a.filter,requiredFields:b,signal:a.signal},c))};n._summaryStatsFromGenRend=function(a){const c=a.normalizationType,b=a.normalizationField;return this.classBreaks({field:a.field,
numClasses:5,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:c,normalizationField:"field"===c?b:void 0,minValue:a.minValue,maxValue:a.maxValue,filter:a.filter,signal:a.signal}).then(d=>{let f,k;d.classBreakInfos?.some(h=>{h.hasAvg&&(f=h);return!!f});if(f){var e=f.maxValue-f.minValue;k=f.minValue+e/2;e*=4}return y.processSummaryStatisticsResult({min:d.minValue,max:d.maxValue,avg:k,stddev:e})})};n._getSummaryStatsQuery=function(a,c){const {field:b,normalizationType:d,
normalizationField:f,normalizationTotal:k,minValue:e,maxValue:h,filter:g}=a;c=this.supportsSQLExpression&&c?r.msSinceUnixEpochSQL(this,b):a.sqlExpression;var l=r.getFieldExpr({field:b,normalizationType:d,normalizationField:f,normalizationTotal:k,layer:this});const m=c||l;l=m?u.getRangeExpr(m,e,h):null;var q=u.getSQLFilterForNormalization({field:b,normalizationField:f,normalizationType:d});a=u.mergeWhereClauses(a.sqlWhere,q);a=u.mergeWhereClauses(a,l);const p=y.isNullCountSupported({normalizationField:f,
normalizationType:d,sqlExpression:c,supportsSQLExpression:this.supportsSQLExpression,minValue:e,maxValue:h}),t=F.isStringField(this.getField(b??void 0));l=y.statisticTypes.filter(v=>"nullcount"===v?p:t?"count"===v:!0);q=this.layer.createQuery();q.where=u.mergeWhereClauses(q.where,a);q.sqlFormat=c?"standard":null;q.outStatistics=l.map(v=>{const A=new L;let w=null,x=null,I=`${v}_value`;"variance"===v?(w="var",x=m):"nullcount"===v?(w="count",x=this.layer.objectIdField,I="totalcount_value"):"median"===
v?(w="percentile-continuous",x=m,A.statisticParameters={value:.5}):(w=v,x=m);A.statisticType=w;A.onStatisticField=x;A.outStatisticFieldName=I;return A});this._updateQueryWithFeatureFilter(q,g);return q};n._summaryStatsFromServiceQuery=async function(a,c){await this._isStatsSupportedOnService();"percent-of-total"===a.normalizationType&&(a.normalizationTotal=await this._getNormalizationTotal(a.field,a.normalizationType,a.filter));const b=this._getSummaryStatsQuery(a,c);a=await this.layer.queryFeatures(b,
{signal:a.signal});c=r.getSummaryStatisticsFromFeatureSet(a,c);return y.processSummaryStatisticsResult(c)};n._summaryStatsFromClientQuery=async function(a,c){const b=this._getSummaryStatsQuery(a,c);a=await this.layer.queryFeatures(b,{signal:a.signal});c=r.getSummaryStatisticsFromFeatureSet(a,c);return y.processSummaryStatisticsResult(c)};n._getNormalizationTotalFromMemory=async function(a,c,b){const {featuresJSON:d,graphics:f,layerView:k,query:e}=c;a=(!d&&!f&&k&&"querySummaryStatistics"in k?await k.querySummaryStatistics(e,
{field:a},{signal:b}):d?await this.workerClient.summaryStatistics({field:a},d):await E.summaryStatistics({attribute:{field:a},features:f??[]})).sum;if(null==a)throw new z("feature-layer-adapter:invalid","invalid normalizationTotal");return a};n._summaryStatsFromMemory=async function(a,c){const {view:b,field:d,valueExpression:f,normalizationType:k,signal:e}=a,h={field:d,valueExpression:f,normalizationType:k,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,minValue:a.minValue,
maxValue:a.maxValue},{featuresJSON:g,graphics:l,layerView:m,query:q,fieldInfos:p}=await this._processStatsFromMemoryParams({...a,layerViewFunc:"querySummaryStatistics"});f&&b&&(g||l)&&(h.fieldType=c?.type?X.kebabDict.toJSON(c.type):null,h.viewInfoParams=r.getViewInfoParams(b),h.fieldInfos=p);"percent-of-total"===k&&null==a.normalizationTotal&&(h.normalizationTotal=await this._getNormalizationTotalFromMemory(d,{featuresJSON:g,graphics:l,layerView:m,query:q},e));return!g&&!l&&m&&"querySummaryStatistics"in
m?m.querySummaryStatistics(q,h,{signal:e}):g?this.workerClient.summaryStatistics(h,g):E.summaryStatistics({attribute:h,features:l})};n._getFilteredFeatures=async function(a,c){let b=[];if("intersects"===c?.spatialRelationship){M||(M=await new Promise((d,f)=>Q(["../../../geometry/geometryEngineAsync"],d,f)));c=D.isSome(c.geometry)?c.geometry:null;for(const d of a){const f=D.isSome(d.geometry)?d.geometry:null;f&&c&&await M.intersect(f,c)&&b.push(d)}}else b=a;return a.length&&"declaredClass"in a[0]&&
"esri.Graphic"===a[0].declaredClass?{graphics:b}:{featuresJSON:b}};n._processStatsFromMemoryParams=async function(a){const {features:c,filter:b}=a;if(c?.length)return this._getFilteredFeatures(c,b);const {view:d,field:f,field2:k,field3:e,normalizationField:h,valueExpression:g,returnGeometry:l,layerViewFunc:m,signal:q}=a;let p=a=null,t=null,v=null,A=null;if(d)try{a=await d.whenLayerView(this.layer),p=null!=m&&m in a&&"function"===typeof a[m]}catch{p=!1}if(p)try{await this._waitForLayerViewUpdate(a);
const w=await C.getFieldsList({field:f,field2:k,field3:e,normalizationField:h,valueExpression:g});r.getMissingFields(this,w,a).length?p=!1:(t=this.layer.createQuery(),t.outFields=w,t.returnGeometry=!1,this._updateQueryWithFeatureFilter(t,b));a.suspended&&(p=!1)}catch{p=!1}if(!p&&(v=await this._fetchFeaturesForStats({field:f,field2:k,field3:e,valueExpression:g,normalizationField:h,returnGeometry:l,filter:b,view:d,signal:q},"json"),A=(await C.getFieldsList({valueExpression:g})).map(w=>this.getField(w)?.toJSON()).filter(Boolean),
!v?.length))throw new z("feature-layer-adapter:insufficient-data","No features are available to calculate statistics");return{layerView:a,query:t,featuresJSON:v,fieldInfos:A}};n._uvFromGenRenderer=function(a,c){const b=a.field??void 0,d=new aa;d.attributeField=b;const f=new K;f.classificationDefinition=d;return this.generateRenderer(f,a.signal).then(k=>{const e={},h=this.getField(b);k.uniqueValues.forEach(g=>{let l=g.value;if(null==l||""===l||"string"===typeof l&&(""===l.trim()||"\x3cnull\x3e"===
l.toLowerCase()))l=null;null==e[l]?e[l]={count:g.count,data:F.isNumericField(h)&&l?Number(l):l}:e[l].count+=g.count});return{count:e}}).then(k=>y.createUVResult(k,[c],a.returnAllCodedValues))};n._getUVQueryOutStatistic=function(a,c){const b="countOF"+(a||"Expr"),d=new L;d.statisticType="count";d.onStatisticField=c?"1":a;d.outStatisticFieldName=b;return d};n._getUVQuery=function(a){const {field:c,field2:b,field3:d,sqlExpression:f}=a,k=!(!c||!b),e=this.layer.createQuery();e.where=u.mergeWhereClauses(e.where,
a.sqlWhere);e.sqlFormat=f?"standard":null;e.outStatistics=[this._getUVQueryOutStatistic(k?null:c,k?"1":f)].filter(Boolean);e.groupByFieldsForStatistics=[c||f,b,d].filter(Boolean);this._updateQueryWithFeatureFilter(e,a.filter);return e};n._uvFromServiceQuery=async function(a,c){return this._isStatsSupportedOnService().then(()=>this.layer.queryFeatures(this._getUVQuery(a),{signal:a.signal})).then(b=>r.getUniqueValuesFromFeatureSet(b,{layer:this,field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:C.FIELD_DELIMITER,
view:a.view,signal:a.signal})).then(b=>y.createUVResult(b,c,a.returnAllCodedValues,C.FIELD_DELIMITER))};n._uvFromClientQuery=async function(a,c){var {signal:b}=a;const d=this._getUVQuery(a);b=await this.layer.queryFeatures(d,{signal:b});b=await r.getUniqueValuesFromFeatureSet(b,{layer:this,field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:C.FIELD_DELIMITER,view:a.view,signal:a.signal});return y.createUVResult(b,c,a.returnAllCodedValues,C.FIELD_DELIMITER)};n._uvFromMemory=async function(a,
c){const {view:b,field:d,valueExpression:f,returnAllCodedValues:k,signal:e}=a,{featuresJSON:h,graphics:g,layerView:l,query:m,fieldInfos:q}=await this._processStatsFromMemoryParams({...a,layerViewFunc:"queryUniqueValues"});a={field:d,field2:a.field2,field3:a.field3,fieldDelimiter:C.FIELD_DELIMITER,valueExpression:f,domains:c,returnAllCodedValues:k};f&&b&&(h||g)&&(a.viewInfoParams=r.getViewInfoParams(b),a.fieldInfos=q);return!h&&!g&&l&&"queryUniqueValues"in l?l.queryUniqueValues(m,a,{signal:e}):h?this.workerClient.uniqueValues(a,
h):E.uniqueValues({attribute:a,features:g})};n._calcBinsSQL=function(a,c,b){const d=[],f=c.length;c.forEach((k,e)=>{const [h,g]=k;k=null;k=0!==e||b?e!==f-1||b?u.mergeWhereClauses(`${a} >= ${h}`,`${a} ${e===f-1?" \x3c\x3d ":" \x3c "} ${g}`):`${a} >= ${h}`:`${a} < ${g}`;d.push("WHEN ("+k+") THEN "+(e+1))});return["CASE",d.join(" "),"ELSE 0 END"].join(" ")};n._getNormalizationTotal=function(a,c,b,d){return a&&"percent-of-total"===c?this.summaryStatistics({field:a,filter:b,signal:d}).then(f=>f.sum):Promise.resolve(null)};
n._getQueryParamsForExpr=function(a,c){const b=a.signal;if(!a.valueExpression&&!a.sqlExpression){const {field:f,normalizationType:k,normalizationField:e}=a;var d=f?this.getField(f):null;d=F.isDateField(d);c={field:f,normalizationType:k,normalizationField:e,normalizationTotal:c,layer:this};return{sqlExpression:d?r.msSinceUnixEpochSQL(this,f):r.getFieldExpr(c),sqlWhere:d?null:a.sqlWhere||u.getSQLFilterForNormalization({field:f,normalizationType:k,normalizationField:e}),filter:a.filter,signal:b}}return{valueExpression:a.valueExpression,
sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,filter:a.filter,signal:b}};n._getDataRange=function(a,c,b){return null!=c&&null!=b?Promise.resolve({min:c,max:b}):this.summaryStatistics(a).then(d=>({min:d.min,max:d.max}))};n._histogramForExpr=function(a){return this._getNormalizationTotal(a.field,a.normalizationType,a.filter,a.signal).then(c=>{const b=this._getQueryParamsForExpr(a,c);return this._getDataRange(b,a.minValue,a.maxValue).then(d=>{const f=d.min,k=d.max,e=a.numBins||10;d=y.getEqualIntervalBins(f,
k,e);d=this._calcBinsSQL(b.sqlExpression,d,null!=a.minValue&&null!=a.maxValue);const h=new L({statisticType:"count",outStatisticFieldName:"countOFExpr",onStatisticField:"1"}),g=this.layer.createQuery();g.where=u.mergeWhereClauses(g.where,b.sqlWhere);g.sqlFormat="standard";g.outStatistics=[h];g.groupByFieldsForStatistics=[d];g.orderByFields=[d];this._updateQueryWithFeatureFilter(g,a.filter);return this._isStatsSupportedOnService().then(()=>this.layer.queryFeatures(g,{signal:b.signal})).then(l=>r.getHistogramFromFeatureSet(l,
f,k,e,c))})})};n._histogramForField=function(a){let c=null;c=null!=a.minValue&&null!=a.maxValue?Promise.resolve({min:a.minValue,max:a.maxValue}):this.summaryStatistics(a).then(b=>{if(!b.count)throw new z("feature-layer-adapter:insufficient-data","Either the layer has no features or none of the features have data for the field");return{min:b.min,max:b.max}});return c.then(b=>this._getBins({min:b.min,max:b.max},a.field,a.numBins??void 0,a.view,a.filter,a.signal))};n._getBins=function(a,c,b=10,d,f,k){const {min:e,
max:h,normTotal:g,excludeZerosExpr:l}=a,m=a.intervals||y.getEqualIntervalBins(e,h,b);return this._queryBins(m,a.sqlExpr||c,l,d,f,k).then(q=>({bins:q.map((p,t)=>({minValue:m[t][0],maxValue:m[t][1],count:p.value})),minValue:e,maxValue:h,normalizationTotal:g}))};n._queryBins=function(a,c,b,d,f,k){const e=[],h=a.length;for(let g=0;g<h;g++){const l=u.mergeWhereClauses(b,u.mergeWhereClauses(c+" \x3e\x3d "+a[g][0],null!==a[g][1]?c+(g===h-1?" \x3c\x3d ":" \x3c ")+a[g][1]:""));e.push(l)}return B.eachAlways(e.map(g=>
this.queryFeatureCount({whereClause:D.toNullable(g),view:d,filter:f,signal:k})))};n._binParamsFromGenRend=function(a,c){const {field:b,normalizationType:d,normalizationField:f,signal:k}=a,e=u.getSQLFilterForNormalization({field:b,normalizationType:d,normalizationField:f});a=new K({classificationDefinition:y.createClassBreaksDefinition({field:b,normalizationType:d,normalizationField:f,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numBins||
10}),where:u.mergeWhereClauses(e,c)});return this.generateRenderer(a,k).then(h=>{const {normalizationTotal:g,classBreaks:l}=h;return r.generateBinParams({field:b,normalizationType:d,normalizationField:f,normalizationTotal:g,classBreaks:l,where:e,layer:this})})};n._histogramFromMemory=async function(a){const {view:c,field:b,valueExpression:d,signal:f}=a,{featuresJSON:k,graphics:e,layerView:h,query:g,fieldInfos:l}=await this._processStatsFromMemoryParams({...a,layerViewFunc:"queryHistogram"}),m={field:b,
valueExpression:d,normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,classificationMethod:a.classificationMethod,numBins:a.numBins};d&&c&&(k||e)&&(m.viewInfoParams=r.getViewInfoParams(c),m.fieldInfos=l);"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(m.normalizationTotal=await this._getNormalizationTotalFromMemory(b,
{featuresJSON:k,graphics:e,layerView:h,query:g},f));return!k&&!e&&h&&"queryHistogram"in h?h.queryHistogram(g,m,{signal:f}):k?this.workerClient.histogram(m,k):E.histogram({attribute:m,features:e})};n._classBreaksFromGenRend=function(a){const {field:c,normalizationType:b,normalizationField:d,normalizationTotal:f,signal:k}=a,e=u.getSQLFilterForNormalization({field:c,normalizationType:b,normalizationField:d});var h=r.getFieldExpr({field:c,normalizationType:b,normalizationField:d,normalizationTotal:f,
layer:this});h=u.getRangeExpr(h,a.minValue,a.maxValue);const g=y.createClassBreaksDefinition({field:c,normalizationType:b,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numClasses||5}),l=new K;l.classificationDefinition=g;l.where=u.mergeWhereClauses(e,h);return this.generateRenderer(l,k).then(m=>y.resolveCBResult(m,a.classificationMethod))};n._classBreaksFromInterpolation=function(a){const {minValue:c,maxValue:b}=
a,d=a.numClasses||5,f=[],k=(b-c)/d;for(let e=0;e<d;e++){const h=c+e*k;f.push({minValue:h,maxValue:h+k})}f[d-1].maxValue=b;a=y.resolveCBResult({classBreaks:f,normalizationTotal:a.normalizationTotal},a.classificationMethod);return Promise.resolve(a)};n._classBreaksFromMemory=async function(a){const {view:c,field:b,valueExpression:d,signal:f}=a,{featuresJSON:k,graphics:e,layerView:h,query:g,fieldInfos:l}=await this._processStatsFromMemoryParams({...a,layerViewFunc:"queryClassBreaks"}),m={field:b,valueExpression:d,
normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,classificationMethod:a.classificationMethod,numClasses:a.numClasses};d&&c&&(k||e)&&(m.viewInfoParams=r.getViewInfoParams(c),m.fieldInfos=l);"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(m.normalizationTotal=await this._getNormalizationTotalFromMemory(b,{featuresJSON:k,
graphics:e,layerView:h,query:g},f));return!k&&!e&&h&&"queryClassBreaks"in h?h.queryClassBreaks(g,m,{signal:f}):k?this.workerClient.classBreaks(m,k):E.classBreaks({attribute:m,features:e})};n._heatmapStatsFromMemory=async function(a,c){const {view:b,field:d,radius:f}=a,{featuresJSON:k,graphics:e}=await this._processStatsFromMemoryParams({...a,returnGeometry:!0});D.assertIsSome(b,"FeatureLayerAdapter: must have a view");a=new Z({extent:b.extent,tolerance:"2d"===b.type?b.state.resolution:b.pixelSizeAt?.(b.center)});
c={field:d,fieldOffset:c,radius:f,transform:V.toQuantizationTransform(a),spatialReference:b.spatialReference?.toJSON(),size:b.size};return k?.length||e?.length?k?this.workerClient.heatmapStatistics(c,k):E.heatmapStatistics({attribute:c,features:e}):{count:0,min:null,max:null,avg:null,stddev:null}};n._updateQueryWithFeatureFilter=function(a,c){c&&(a.geometry=c.geometry,a.spatialRelationship=c.spatialRelationship)};n.getField=function(a=""){return this.layer.getField(a)};n.getFieldUsageInfo=function(a){return this.getField(a)?
{supportsLabelingInfo:!0,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:!0,supportsStatistics:!0}:null};n.getFieldDomain=function(a,c){return this.layer.getFieldDomain(a,c)};n.summaryStatistics=function(a){const {field:c,normalizationType:b,sqlExpression:d,view:f,features:k,useFeaturesInView:e}=a,h=c?this.getField(c):null,g=F.isDateField(h),l=a.valueExpression||d,m=l&&!d,q=f&&"3d"===f.type;return this._hasLocalSource||k||e||m?m||k||e||q?this._summaryStatsFromMemory(a,h):this._summaryStatsFromClientQuery(a,
g):this.supportsSQLExpression||!g&&!l&&"natural-log"!==b&&"square-root"!==b?(b&&!this.supportsSQLExpression?this._summaryStatsFromGenRend(a):this._summaryStatsFromServiceQuery(a,g)).catch(()=>{B.throwIfAborted(a.signal);return this._summaryStatsFromMemory(a,h)}):Promise.reject(new z("feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries"))};n.uniqueValues=async function(a){const {valueExpression:c,sqlExpression:b,features:d,useFeaturesInView:f,signal:k}=
a,e=c&&(!b||!this.supportsSQLExpression),h=this._hasLocalSource||d||f||e,g=a.view,l=g&&"3d"===g.type,m=await r.getDomainsForFields(a,this);return h?e||d||f||l?this._uvFromMemory(a,m):this._uvFromClientQuery(a,m):this._uvFromServiceQuery(a,m).catch(q=>{B.throwIfAborted(k);return!a.field||a.field2||a.field3||a.filter?q:this._uvFromGenRenderer(a,m[0])}).catch(()=>{B.throwIfAborted(k);return l?this._uvFromMemory(a,m):this._uvFromClientQuery(a,m)})};n.histogram=function(a){const {field:c,normalizationType:b,
normalizationField:d,classificationMethod:f,view:k,filter:e,signal:h}=a;var g=c?this.getField(c):null;g=F.isDateField(g);const l=a.valueExpression||a.sqlExpression,m=l&&!a.sqlExpression,q=this.supportsSQLExpression,p=!f||"equal-interval"===f,t=a.minValue,v=a.maxValue,A=null!=t&&null!=v,w=a.numBins||10;return this._hasLocalSource||a.features||a.useFeaturesInView||m?this._histogramFromMemory(a):(l||q)&&p?q||!l&&"natural-log"!==b&&"square-root"!==b?this._histogramForExpr(a):Promise.reject(new z("feature-layer-adapter:not-supported",
"Layer does not support standardized SQL expression for queries")):g&&p?Promise.reject(new z("feature-layer-adapter:not-supported","Normalization and date field are not allowed when layer does not support standardized SQL expression for queries")):b||!p?this._binParamsFromGenRend(a).then(x=>{if(!A)return this._getBins(x,c,w,k,e,h);if(t>x.max||v<x.min)throw new z("histogram:insufficient-data","Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field");if(p)return this._getBins({min:t,
max:v,sqlExpr:x.sqlExpr,excludeZerosExpr:x.excludeZerosExpr},c,w,k,e,h);x=r.getFieldExpr({field:c,normalizationType:b,normalizationField:d,normalizationTotal:x.normTotal,layer:this});x=u.getRangeExpr(x,t,v);return this._binParamsFromGenRend(a,x).then(I=>this._getBins(I,c,w,k,e,h))}):this._histogramForField(a)};n.classBreaks=function(a){const c=!1!==a.analyzeData,b=this._hasLocalSource||a.features||a.useFeaturesInView||a.valueExpression||a.filter;return c&&b?this._classBreaksFromMemory(a):(c?this._classBreaksFromGenRend(a):
this._classBreaksFromInterpolation(a)).catch(()=>{B.throwIfAborted(a.signal);return this._classBreaksFromMemory(a)})};n.queryFeatureCount=function(a){if(this._hasLocalSource)return Promise.reject(new z("feature-layer-adapter:not-supported","Layer does not support count query"));const c=this.layer,b=c.createQuery();b.where=u.mergeWhereClauses(b.where,a.whereClause);this._updateQueryWithFeatureFilter(b,a.filter);return c.queryFeatureCount(b,{signal:a.signal})};n.generateRenderer=function(a,c){const b=
this.layer;if(this._hasLocalSource||10.1>b.version)return Promise.reject(new z("feature-layer-adapter:not-supported","Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)"));const d=b.createQuery();a.where=u.mergeWhereClauses(a.where,d.where);return Y.generateRenderer(b.parsedUrl.path,{source:b.dynamicDataSource??void 0,gdbVersion:b.gdbVersion??void 0},a,{signal:c})};n.heatmapStatistics=function(a){const {field:c,fieldOffset:b,view:d,signal:f}=a;return(c&&null==
b?this.summaryStatistics({field:c,view:d,signal:f}):Promise.resolve(null)).then(k=>{let e=b||0;if(k){const {count:h,min:g,max:l}=k;h?g===l&&0===g?e=1:0>=l?e="abs":0>g&&(e=-1.01*g):e=1}return this._heatmapStatsFromMemory(a,e).then(h=>({...h,summaryStatistics:k,fieldOffset:e}))})};n.predominantCategories=async function(a){if(!this._hasLocalSource&&!this.supportsSQLExpression)throw new z("feature-layer-adapter:not-supported","Layer does not support advanced SQL expressions and standardized queries");
const {fields:c,view:b,signal:d}=a;a=P.getArcadeForPredominantCategory(c);const f=P.getSQLForPredominantCategoryName(c);a=b&&this._hasLocalSource?await this._uvFromMemory({valueExpression:a,view:b,signal:d}):await this._uvFromServiceQuery({sqlExpression:f.expression,valueExpression:a,signal:d});return r.getPredominantCategoriesFromUVInfos(a.uniqueValueInfos,c)};n.getSampleFeatures=async function(a,c){const {view:b,sampleSize:d,requiredFields:f,returnGeometry:k,filter:e,signal:h}=a,g=this.layer.createQuery(),
l="json"===c;g.outSpatialReference=a.spatialReference||b&&b.spatialReference;g.returnGeometry=!!k;g.outFields=f;this._updateQueryWithFeatureFilter(g,e);let m=[],q=!1;if(b)try{const p=await b.whenLayerView(this.layer);if(q=!r.getMissingFields(this,f,p).length)if(m=await this._fetchFeaturesFromMemory(p,g,h,c),m.length&&null!=d&&0<d&&d<=m.length)return O.pickRandom(m,d,1)}catch(p){B.throwIfAborted(h)}try{if(this._hasLocalSource)return q?m:l?this._fetchFeaturesJSONFromService(g,h):this._fetchFeaturesFromService(g,
h);const p=await this.queryFeatureCount({view:b,filter:e,signal:h}),t=this.layer.capabilities.query.maxRecordCount;c=-1===d?p:d;c=t&&c>t?t:c;if(p<=m.length||m.length>=t)return m;D.assertIsSome(b,"FeatureLayerAdapter: must have a view");const v=b.extent.width/b.width/b.scale*4E5;g.maxAllowableOffset=a.resolution||v;if(p<=c)return l?this._fetchFeaturesJSONFromService(g,h):this._fetchFeaturesFromService(g,h);if(2E4>=p){const A=this.layer.createQuery();this._updateQueryWithFeatureFilter(A,e);const w=
await this.layer.queryObjectIds();g.objectIds=O.pickRandom(w,c,1);return l?this._fetchFeaturesJSONFromService(g,h):this._fetchFeaturesFromService(g,h)}this.layer.get("capabilities.query.supportsPagination")&&(g.num=Math.min(c,2E4));return l?this._fetchFeaturesJSONFromService(g,h):this._fetchFeaturesFromService(g,h)}catch(p){return B.throwIfAborted(h),m}};n.load=function(a){const c=this.layer.load(a).then(async b=>{this.geometryType=b.geometryType;this.objectIdField=b.objectIdField;this.supportsSQLExpression=
b.get("capabilities.query.supportsSqlExpression");this.hasQueryEngine=this._hasLocalSource=!b.url&&!!b.source;this.minScale=b.minScale;this.maxScale=b.maxScale;this.fullExtent=b.fullExtent;this.workerClient=ba.WorkerClient.getInstance();await this.workerClient.open(D.unwrap(D.unwrap(a).signal))});this.addResolvingPromise(c);return Promise.resolve(this)};return J._createClass(H)}(ca);N.__decorate([T.property({constructOnly:!0})],G.prototype,"layer",void 0);return G=N.__decorate([U.subclass("esri.smartMapping.support.adapters.FeatureLayerAdapter")],
G)});