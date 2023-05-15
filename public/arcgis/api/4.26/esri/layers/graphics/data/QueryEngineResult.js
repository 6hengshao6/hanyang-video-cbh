// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../geometry/support/centroid ../../../geometry/support/extentUtils ../../../geometry/support/quantizationUtils ../../../geometry/support/spatialReferenceUtils ./AttributesBuilder ./projectionSupport ./SnappingCandidate ./utils ../../support/fieldUtils ../../../statistics/utils ../../../support/arcadeOnDemand".split(" "),function(ba,E,R,N,S,O,T,P,L,U,V,D,W,B,ca){function da(v,l,a,b){const c=b.x-a.x;b=b.y-a.y;
l=Math.min(1,Math.max(0,((l.x-a.x)*c+(l.y-a.y)*b)/(c*c+b*b)));v.x=a.x+c*l;v.y=a.y+b*l}function X(v,l){return v?l?4:3:l?3:2}let ha=function(){function v(a,b,c){this.items=a;this.query=b;this.geometryType=c.geometryType;this.hasM=c.hasM;this.hasZ=c.hasZ;this.fieldsIndex=c.fieldsIndex;this.objectIdField=c.objectIdField;this.spatialReference=c.spatialReference;this.featureAdapter=c.featureAdapter}var l=v.prototype;l.createQueryResponseForCount=function(){const a=new L(this.query,this.featureAdapter,this.fieldsIndex);
if(!this.query.outStatistics)return a.countDistinctValues(this.items);const {groupByFieldsForStatistics:b,having:c,outStatistics:f}=this.query;if(!b?.length)return 1;const d=new Map,e=new Map,g=new Set;for(const m of f){var {statisticType:h}=m;h="exceedslimit"!==h?m.onStatisticField:void 0;if(!e.has(h)){var k=[];for(const n of b){const q=this._getAttributeValues(a,n,d);k.push(q)}e.set(h,this._calculateUniqueValues(k,a.returnDistinctValues))}h=e.get(h);for(const n in h){const {data:q,items:u}=h[n];
k=q.join(",");c&&!a.validateItems(u,c)||g.add(k)}}return g.size};l.createQueryResponse=async function(){let a;a=this.query.outStatistics?this.query.outStatistics.some(b=>"exceedslimit"===b.statisticType)?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query);if(this.query.returnQueryGeometry){const b=this.query.geometry;P.isValid(this.query.outSR)&&!P.equals(b.spatialReference,this.query.outSR)?a.queryGeometry=
D.cleanFromGeometryEngine({spatialReference:this.query.outSR,...U.project(b,b.spatialReference,this.query.outSR)}):a.queryGeometry=D.cleanFromGeometryEngine({spatialReference:this.query.outSR,...b})}return a};l.createSnappingResponse=function(a,b){const c=this.featureAdapter,f=X(this.hasZ,this.hasM),{point:d,mode:e}=a,g="number"===typeof a.distance?a.distance:a.distance.x,h="number"===typeof a.distance?a.distance:a.distance.y,k={candidates:[]},m="esriGeometryPolygon"===this.geometryType;b=this._getPointCreator(e,
this.spatialReference,b);const n=new Y(null,0),q=new Y(null,0),u={x:0,y:0,z:0};for(const t of this.items){var y=c.getGeometry(t);if(N.isNone(y))continue;const {coords:z,lengths:C}=y;n.coords=z;q.coords=z;if(a.types&E.SnappingTypes.EDGE){y=0;for(var A=0;A<C.length;A++){var r=C[A];for(var p=0;p<r;p++,y+=f){var w=n;w.coordsIndex=y;if(p!==r-1){const G=q;G.coordsIndex=y+f;const F=u;da(u,d,w,G);var x=(d.x-F.x)/g;const M=(d.y-F.y)/h;x=x*x+M*M;1>=x&&k.candidates.push(V.makeEdgeCandidate(c.getObjectId(t),
b(F),Math.sqrt(x),b(w),b(G)))}}}}if(a.types&E.SnappingTypes.VERTEX)for(y=m?z.length-f:z.length,A=0;A<y;A+=f)r=n,r.coordsIndex=A,p=(d.x-r.x)/g,w=(d.y-r.y)/h,p=p*p+w*w,1>=p&&k.candidates.push(V.makeVertexCandidate(c.getObjectId(t),b(r),Math.sqrt(p)))}k.candidates.sort((t,z)=>t.distance-z.distance);return k};l._getPointCreator=function(a,b,c){const f=N.isSome(c)&&!P.equals(b,c)?e=>U.project(e,b,c):e=>e,{hasZ:d}=this;return"3d"===a?d?({x:e,y:g,z:h})=>f({x:e,y:g,z:h}):({x:e,y:g})=>f({x:e,y:g,z:0}):({x:e,
y:g})=>f({x:e,y:g})};l.createSummaryStatisticsResponse=async function(a){const {field:b,valueExpression:c,normalizationField:f,normalizationType:d,normalizationTotal:e,minValue:g,maxValue:h,scale:k}=a;a=this.fieldsIndex.isDateField(b);var m=await this._getDataValues({field:b,valueExpression:c,normalizationField:f,normalizationType:d,normalizationTotal:e,scale:k});const n=B.isNullCountSupported({normalizationType:d,normalizationField:f,minValue:g,maxValue:h}),q=this.fieldsIndex.get(b),u={value:.5,
fieldType:q?.type};m=W.isStringField(q)?B.calculateStringStatistics({values:m,supportsNullCount:n,percentileParams:u}):B.calculateStatistics({values:m,minValue:g,maxValue:h,useSampleStdDev:!d,supportsNullCount:n,percentileParams:u});return B.processSummaryStatisticsResult(m,a)};l.createUniqueValuesResponse=async function(a){const {field:b,valueExpression:c,domains:f,returnAllCodedValues:d,scale:e}=a;var g=await this._getDataValues({field:b,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,
valueExpression:c,scale:e});g=B.calculateUniqueValuesCount(g);return B.createUVResult(g,f,d,a.fieldDelimiter)};l.createClassBreaksResponse=async function(a){const {field:b,valueExpression:c,normalizationField:f,normalizationType:d,normalizationTotal:e,classificationMethod:g,standardDeviationInterval:h,minValue:k,maxValue:m,numClasses:n,scale:q}=a;a=await this._getDataValues({field:b,valueExpression:c,normalizationField:f,normalizationType:d,normalizationTotal:e,scale:q});a=B.calculateClassBreaks(a,
{field:b,normalizationField:f,normalizationType:d,normalizationTotal:e,classificationMethod:g,standardDeviationInterval:h,minValue:k,maxValue:m,numClasses:n});return B.resolveCBResult(a,g)};l.createHistogramResponse=async function(a){const {field:b,valueExpression:c,normalizationField:f,normalizationType:d,normalizationTotal:e,classificationMethod:g,standardDeviationInterval:h,minValue:k,maxValue:m,numBins:n,scale:q}=a;a=await this._getDataValues({field:b,valueExpression:c,normalizationField:f,normalizationType:d,
normalizationTotal:e,scale:q});return B.calculateHistogram(a,{field:b,normalizationField:f,normalizationType:d,normalizationTotal:e,classificationMethod:g,standardDeviationInterval:h,minValue:k,maxValue:m,numBins:n})};l._sortFeatures=function(a,b,c){if(1<a.length&&b&&b.length)for(const f of b.reverse()){b=f.split(" ");const d=b[0],e=this.fieldsIndex.get(d);b=b[1]?"desc"===b[1].toLowerCase():!1;const g=B.getAttributeComparator(e?.type,b);a.sort((h,k)=>{h=c(h,d,e);k=c(k,d,e);return g(h,k)})}};l._createFeatureQueryResponse=
function(a){const b=this.items,{geometryType:c,hasM:f,hasZ:d,objectIdField:e,spatialReference:g}=this,{outFields:h,outSR:k,quantizationParameters:m,resultRecordCount:n,resultOffset:q,returnZ:u,returnM:y}=a,A=null!=n?b.length>(q||0)+n:!1,r=h&&(h.includes("*")?[...this.fieldsIndex.fields]:h.map(p=>this.fieldsIndex.get(p)));return{exceededTransferLimit:A,features:this._createFeatures(a,b),fields:r,geometryType:c,hasM:f&&y,hasZ:d&&u,objectIdFieldName:e,spatialReference:D.cleanFromGeometryEngine(k||g),
transform:m&&T.toQuantizationTransform(m)||null}};l._createFeatures=function(a,b){const c=new L(a,this.featureAdapter,this.fieldsIndex),{hasM:f,hasZ:d}=this,{orderByFields:e,quantizationParameters:g,returnGeometry:h,returnCentroid:k,maxAllowableOffset:m,resultOffset:n,resultRecordCount:q,returnZ:u=!1,returnM:y=!1}=a,A=d&&u,r=f&&y;a=[];var p=0;b=[...b];this._sortFeatures(b,e,(t,z,C)=>c.getFieldValue(t,z,C));if(h||k){var w=T.toQuantizationTransform(g)??void 0;if(h&&!k)for(var x of b)a[p++]={attributes:c.getAttributes(x),
geometry:D.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),m,w,A,r)};else if(!h&&k)for(const t of b)a[p++]={attributes:c.getAttributes(t),centroid:D.transformCentroid(this,this.featureAdapter.getCentroid(t,this),w)};else for(const t of b)a[p++]={attributes:c.getAttributes(t),centroid:D.transformCentroid(this,this.featureAdapter.getCentroid(t,this),w),geometry:D.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),m,w,A,r)}}else for(w of b)(x=
c.getAttributes(w))&&(a[p++]={attributes:x});p=n||0;null!=q&&(a=a.slice(p,Math.min(a.length,p+q)));return a};l._createExceedsLimitQueryResponse=function(a){var b=!1;let c=Number.POSITIVE_INFINITY,f=Number.POSITIVE_INFINITY;b=Number.POSITIVE_INFINITY;for(const d of a.outStatistics??[])if("exceedslimit"===d.statisticType){c=null!=d.maxPointCount?d.maxPointCount:Number.POSITIVE_INFINITY;f=null!=d.maxRecordCount?d.maxRecordCount:Number.POSITIVE_INFINITY;b=null!=d.maxVertexCount?d.maxVertexCount:Number.POSITIVE_INFINITY;
break}if("esriGeometryPoint"===this.geometryType)b=this.items.length>c;else if(this.items.length>f)b=!0;else{a=X(this.hasZ,this.hasM);const d=this.featureAdapter;b=this.items.reduce((e,g)=>{g=d.getGeometry(g);return e+(N.isSome(g)&&g.coords.length||0)},0)/a>b}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(b)}}]}};l._createStatisticsQueryResponse=async function(a){var b=
{attributes:{}};const c=[],f=new Map,d=new Map,e=new Map,g=new Map,h=new L(a,this.featureAdapter,this.fieldsIndex);var k=a.outStatistics;const {groupByFieldsForStatistics:m,having:n,orderByFields:q}=a;a=m&&m.length;const u=!!a,y=u?m[0]:null,A=u&&!this.fieldsIndex.get(y);for(const t of k??[]){const {outStatisticFieldName:z,statisticType:C}=t;k=t;var r="exceedslimit"!==C?t.onStatisticField:void 0;const G="percentile_disc"===C||"percentile_cont"===C,F="EnvelopeAggregate"===C||"CentroidAggregate"===C||
"ConvexHullAggregate"===C,M=u&&1===a&&(r===y||A)&&"count"===C;if(u){if(!e.has(r)){var p=[];for(const J of m){var w=this._getAttributeValues(h,J,f);p.push(w)}e.set(r,this._calculateUniqueValues(p,F?!1:h.returnDistinctValues))}p=e.get(r);for(const J in p){const {count:Q,data:Z,items:aa,itemPositions:ea}=p[J];w=Z.join(",");if(!n||h.validateItems(aa,n)){const H=g.get(w)||{attributes:{}};if(F){H.aggregateGeometries||(H.aggregateGeometries={});const {aggregateGeometries:I,outStatisticFieldName:K}=await this._getAggregateGeometry(k,
aa);H.aggregateGeometries[K]=I}else{var x=null;if(M)x=Q;else{const I=this._getAttributeValues(h,r,f);x=ea.map(K=>I[K]);x=G&&"statisticParameters"in k?this._getPercentileValue(k,x):this._getStatisticValue(k,x,null,h.returnDistinctValues)}H.attributes[z]=x}let fa=0;m.forEach((I,K)=>H.attributes[this.fieldsIndex.get(I)?I:`EXPR_${++fa}`]=Z[K]);g.set(w,H)}}}else if(F){b.aggregateGeometries||(b.aggregateGeometries={});const {aggregateGeometries:J,outStatisticFieldName:Q}=await this._getAggregateGeometry(k,
this.items);b.aggregateGeometries[Q]=J}else r=this._getAttributeValues(h,r,f),b.attributes[z]=G&&"statisticParameters"in k?this._getPercentileValue(k,r):this._getStatisticValue(k,r,d,h.returnDistinctValues);c.push({name:z,alias:z,type:"esriFieldTypeDouble"})}b=u?Array.from(g.values()):[b];this._sortFeatures(b,q,(t,z)=>t.attributes[z]);return{fields:c,features:b}};l._getAggregateGeometry=async function(a,b){var c=await new Promise((q,u)=>ba(["../../../geometry/geometryEngineJSON"],q,u));const {statisticType:f,
outStatisticFieldName:d}=a,{featureAdapter:e,spatialReference:g,geometryType:h,hasZ:k,hasM:m}=this;b=b.map(q=>D.getGeometry(h,k,m,e.getGeometry(q)));const n=c.convexHull(g,b,!0)[0];a={aggregateGeometries:null,outStatisticFieldName:null};"EnvelopeAggregate"===f?(c=n?O.getPolygonExtent(n):O.getGeometryExtent(c.union(g,b)),a.aggregateGeometries={...c,spatialReference:g},a.outStatisticFieldName=d||"extent"):"CentroidAggregate"===f?(c=n?S.polygonCentroid(n):S.extentCentroid(O.getGeometryExtent(c.union(g,
b))),a.aggregateGeometries={x:c[0],y:c[1],spatialReference:g},a.outStatisticFieldName=d||"centroid"):"ConvexHullAggregate"===f&&(a.aggregateGeometries=n,a.outStatisticFieldName=d||"convexHull");return a};l._getStatisticValue=function(a,b,c,f){const {onStatisticField:d,statisticType:e}=a;a=null;a=c?.has(d)?c.get(d):W.isStringField(this.fieldsIndex.get(d))?B.calculateStringStatistics({values:b,returnDistinct:f}):B.calculateStatistics({values:f?[...(new Set(b))]:b,minValue:null,maxValue:null,useSampleStdDev:!0});
c&&c.set(d,a);return a["var"===e?"variance":e]};l._getPercentileValue=function(a,b){const {onStatisticField:c,statisticParameters:f,statisticType:d}=a,{value:e,orderBy:g}=f;a=this.fieldsIndex.get(c);return B.calculatePercentile(b,{value:e,orderBy:g,fieldType:a?.type,isDiscrete:"percentile_disc"===d})};l._getAttributeValues=function(a,b,c){if(c.has(b))return c.get(b);const f=this.fieldsIndex.get(b),d=this.items.map(e=>a.getFieldValue(e,b,f));c.set(b,d);return d};l._getAttributeDataValues=function(a,
b){return this.items.map(c=>a.getDataValue(c,{field:b.field,field2:b.field2,field3:b.field3,fieldDelimiter:b.fieldDelimiter,normalizationField:b.normalizationField,normalizationType:b.normalizationType,normalizationTotal:b.normalizationTotal}))};l._getAttributeExpressionValues=async function(a,b,c){const {arcadeUtils:f}=await ca.loadArcade();b=f.createFunction(b);c=c&&f.getViewInfo(c);return a.getExpressionValues(this.items,b,c,f)};l._calculateUniqueValues=function(a,b){const c={},f=this.items,d=
f.length;for(let e=0;e<d;e++){const g=f[e],h=[];for(const m of a)h.push(m[e]);const k=h.join(",");null==c[k]?c[k]={count:1,data:h,items:[g],itemPositions:[e]}:(b||c[k].count++,c[k].items.push(g),c[k].itemPositions.push(e))}return c};l._getDataValues=async function(a){const b=new L(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:c,field:f,normalizationField:d,normalizationType:e,normalizationTotal:g,scale:h}=a,k=c?{viewingMode:"map",scale:h,spatialReference:this.query.outSR||this.spatialReference}:
null;return c?this._getAttributeExpressionValues(b,c,k):this._getAttributeDataValues(b,{field:f,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,normalizationField:d,normalizationType:e,normalizationTotal:g})};R._createClass(v,[{key:"size",get:function(){return this.items.length}}]);return v}();E.SnappingTypes=void 0;(function(v){v[v.NONE=0]="NONE";v[v.EDGE=1]="EDGE";v[v.VERTEX=2]="VERTEX"})(E.SnappingTypes||(E.SnappingTypes={}));let Y=function(){function v(l,a){this.coords=l;this.coordsIndex=
a}R._createClass(v,[{key:"x",get:function(){return this.coords[this.coordsIndex]}},{key:"y",get:function(){return this.coords[this.coordsIndex+1]}},{key:"z",get:function(){return this.coords[this.coordsIndex+2]}}]);return v}();E.QueryEngineResult=ha;Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});