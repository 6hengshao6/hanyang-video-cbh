"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1292],{69218:(e,t,r)=>{r.d(t,{D:()=>M,M:()=>b});var i,o=r(29768),s=r(57251),n=r(12047),a=r(34250),l=r(86787),p=r(59465),u=r(97714),c=r(17533),d=r(91306),y=r(97546),h=(r(48578),r(74569),r(60947)),m=r(22781);let b=i=class extends n.wq{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this;return new i({mapLayerId:e,gdbVersion:t})}};var w;(0,o._)([(0,p.e)({mapLayer:"map-layer"})],b.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:d.I,json:{write:!0}})],b.prototype,"mapLayerId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"gdbVersion",void 0),b=i=(0,o._)([(0,c.j)("esri.layers.support.source.MapLayerSource")],b);let v=w=class extends n.wq{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:t,oidFields:r,spatialReference:i,geometryType:o}=this,s={workspaceId:e,query:t,oidFields:r,spatialReference:i?.clone()??void 0,geometryType:o};return new w(s)}};var S;(0,o._)([(0,p.e)({queryTable:"query-table"})],v.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"query",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"oidFields",void 0),(0,o._)([(0,a.Cb)({type:h.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,o._)([(0,p.e)(m.f)],v.prototype,"geometryType",void 0),v=w=(0,o._)([(0,c.j)("esri.layers.support.source.QueryTableDataSource")],v);let _=S=class extends n.wq{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new S({workspaceId:e,dataSourceName:t})}};var g;(0,o._)([(0,p.e)({raster:"raster"})],_.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"dataSourceName",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"workspaceId",void 0),_=S=(0,o._)([(0,c.j)("esri.layers.support.source.RasterDataSource")],_);let C=g=class extends n.wq{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:r}=this;return new g({workspaceId:e,gdbVersion:t,dataSourceName:r})}};var j,f;(0,o._)([(0,p.e)({table:"table"})],C.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"gdbVersion",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"dataSourceName",void 0),C=g=(0,o._)([(0,c.j)("esri.layers.support.source.TableDataSource")],C);const T=(0,s.s)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let x=j=class extends n.wq{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,r){return F()(e,t,r)}castLeftTableSource(e){return(0,d.a)(V(),e)}readRightTableSource(e,t,r){return F()(e,t,r)}castRightTableSource(e){return(0,d.a)(V(),e)}clone(){const{leftTableKey:e,rightTableKey:t,leftTableSource:r,rightTableSource:i,joinType:o}=this,s={leftTableKey:e,rightTableKey:t,leftTableSource:r?.clone()??void 0,rightTableSource:i?.clone()??void 0,joinType:o};return new j(s)}};(0,o._)([(0,p.e)({joinTable:"join-table"})],x.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"leftTableKey",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"rightTableKey",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"leftTableSource",void 0),(0,o._)([(0,u.r)("leftTableSource")],x.prototype,"readLeftTableSource",null),(0,o._)([(0,l.p)("leftTableSource")],x.prototype,"castLeftTableSource",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"rightTableSource",void 0),(0,o._)([(0,u.r)("rightTableSource")],x.prototype,"readRightTableSource",null),(0,o._)([(0,l.p)("rightTableSource")],x.prototype,"castRightTableSource",null),(0,o._)([(0,p.e)(T)],x.prototype,"joinType",void 0),x=j=(0,o._)([(0,c.j)("esri.layers.support.source.JoinTableDataSource")],x);let R=null;function F(){return R||(R=(0,c.c)({types:V()})),R}let P=null;function V(){return P||(P={key:"type",base:null,typeMap:{"data-layer":M,"map-layer":b}}),P}const D={key:"type",base:null,typeMap:{"join-table":x,"query-table":v,raster:_,table:C}};let M=f=class extends n.wq{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new f({fields:e,dataSource:t})}};(0,o._)([(0,p.e)({dataLayer:"data-layer"})],M.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[y.Z],json:{write:!0}})],M.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({types:D,json:{write:!0}})],M.prototype,"dataSource",void 0),M=f=(0,o._)([(0,c.j)("esri.layers.support.source.DataLayerSource")],M),M.from=(0,d.e)(M)},32925:(e,t,r)=>{r.d(t,{F:()=>u});var i=r(29768),o=r(66122),s=r(12047),n=r(71252),a=r(34250),l=(r(91306),r(48578),r(17533));let p=class extends((0,o.J)(s.wq)){constructor(e){super(e),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,i._)([(0,a.Cb)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,n.i)(this.onFields)&&this.onFields.length>0}}}}})],p.prototype,"onFields",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"operator",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"searchTerm",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"searchType",void 0),p=(0,i._)([(0,l.j)("esri.rest.support.FullTextSearch")],p);const u=p},31292:(e,t,r)=>{r.d(t,{Q:()=>x,Z:()=>D});var i,o=r(29768),s=r(74569),n=r(93314),a=r(57251),l=r(12047),p=r(76506),u=r(71252),c=r(34250),d=r(86787),y=r(59465),h=r(17533),m=r(2906),b=r(91306),w=r(32422),v=r(69218),S=r(32925),_=r(21801),g=r(27207),C=r(60947),j=r(91597);r(73796),r(48578),r(97714),r(84069),r(44567),r(53785),r(89623),r(40642),r(71552),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(35132),r(92896),r(22781),r(92143),r(31450),r(60474),r(66396),r(86656),r(60991),r(6540),r(21972),r(91055),r(19657),r(6906),r(50406),r(35197),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(66122);const f=new a.J({upperLeft:"upper-left",lowerLeft:"lower-left"});let T=i=class extends l.wq{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new i((0,p.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,o._)([(0,c.Cb)({type:_.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],T.prototype,"extent",void 0),(0,o._)([(0,c.Cb)({type:["view","edit"],json:{write:!0}})],T.prototype,"mode",void 0),(0,o._)([(0,c.Cb)({type:String,json:{read:f.read,write:f.write}})],T.prototype,"originPosition",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],T.prototype,"tolerance",void 0),T=i=(0,o._)([(0,h.j)("esri.rest.support.QuantizationParameters")],T);const x=T;var R;const F=new a.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),P=new a.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let V=R=class extends l.wq{static from(e){return(0,b.m)(R,e)}constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const r={};for(const t in e){const i=e[t];Array.isArray(i)?r[t]=i.map((e=>e instanceof Date?e.getTime():e)):i instanceof Date?r[t]=i.getTime():r[t]=i}t.parameterValues=r}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new R((0,p.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:(0,u.i)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};V.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,o._)([(0,c.Cb)({json:{write:!0}})],V.prototype,"aggregateIds",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],V.prototype,"cacheHint",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"compactGeometryEnabled",void 0),(0,o._)([(0,c.Cb)({json:{write:!0}})],V.prototype,"datumTransformation",void 0),(0,o._)([(0,d.p)("datumTransformation")],V.prototype,"castDatumTransformation",null),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"defaultSpatialReferenceEnabled",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],V.prototype,"distance",void 0),(0,o._)([(0,c.Cb)({type:v.D,json:{write:!0}})],V.prototype,"dynamicDataSource",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"formatOf3DObjects",void 0),(0,o._)([(0,c.Cb)({type:[S.F],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,u.i)(this.fullText)&&this.fullText.length>0}}}}})],V.prototype,"fullText",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"gdbVersion",void 0),(0,o._)([(0,c.Cb)({types:s.qM,json:{read:w.im,write:!0}})],V.prototype,"geometry",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{write:!0}})],V.prototype,"geometryPrecision",void 0),(0,o._)([(0,c.Cb)({type:[String],json:{write:!0}})],V.prototype,"groupByFieldsForStatistics",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"having",void 0),(0,o._)([(0,c.Cb)({type:Date})],V.prototype,"historicMoment",void 0),(0,o._)([(0,m.w)("historicMoment")],V.prototype,"writeHistoricMoment",null),(0,o._)([(0,c.Cb)({type:Number,json:{write:!0}})],V.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,c.Cb)({type:Number,cast:e=>e<1?1:e>R.MAX_MAX_RECORD_COUNT_FACTOR?R.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],V.prototype,"maxRecordCountFactor",void 0),(0,o._)([(0,c.Cb)({type:["xyFootprint"],json:{write:!0}})],V.prototype,"multipatchOption",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],V.prototype,"num",void 0),(0,o._)([(0,c.Cb)({json:{write:!0}})],V.prototype,"objectIds",void 0),(0,o._)([(0,c.Cb)({type:[String],json:{write:!0}})],V.prototype,"orderByFields",void 0),(0,o._)([(0,c.Cb)({type:[String],json:{write:!0}})],V.prototype,"outFields",void 0),(0,o._)([(0,c.Cb)({type:C.Z,json:{name:"outSR",write:!0}})],V.prototype,"outSpatialReference",void 0),(0,o._)([(0,c.Cb)({type:[g.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,u.i)(this.outStatistics)&&this.outStatistics.length>0}}}}})],V.prototype,"outStatistics",void 0),(0,o._)([(0,c.Cb)({json:{write:!0}})],V.prototype,"parameterValues",void 0),(0,o._)([(0,m.w)("parameterValues")],V.prototype,"writeParameterValues",null),(0,o._)([(0,c.Cb)({type:j.Z,json:{write:!0}})],V.prototype,"pixelSize",void 0),(0,o._)([(0,c.Cb)({type:x,json:{write:!0}})],V.prototype,"quantizationParameters",void 0),(0,o._)([(0,c.Cb)({type:[Object],json:{write:!0}})],V.prototype,"rangeValues",void 0),(0,o._)([(0,c.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],V.prototype,"relationParameter",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"resultType",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"returnCentroid",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"returnDistinctValues",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!0,write:!0}})],V.prototype,"returnExceededLimitFeatures",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],V.prototype,"returnGeometry",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"returnQueryGeometry",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"returnM",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],V.prototype,"returnZ",void 0),(0,o._)([(0,c.Cb)({type:C.Z,json:{write:!0}})],V.prototype,"sourceSpatialReference",void 0),(0,o._)([(0,y.e)(F,{ignoreUnknown:!1,name:"spatialRel"})],V.prototype,"spatialRelationship",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],V.prototype,"start",void 0),(0,o._)([(0,m.w)("start"),(0,m.w)("num")],V.prototype,"writeStart",null),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"sqlFormat",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:!0}})],V.prototype,"text",void 0),(0,o._)([(0,c.Cb)({type:n.Z,json:{write:!0}})],V.prototype,"timeExtent",void 0),(0,o._)([(0,c.Cb)({type:Boolean,json:{default:!1,write:!0}})],V.prototype,"timeReferenceUnknownClient",void 0),(0,o._)([(0,y.e)(P,{ignoreUnknown:!1}),(0,c.Cb)({json:{write:{overridePolicy(e){return{enabled:!!e&&null!=this.distance&&this.distance>0}}}}})],V.prototype,"units",void 0),(0,o._)([(0,c.Cb)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||null!=this.start&&this.start>0}}}}})],V.prototype,"where",void 0),(0,o._)([(0,m.w)("where")],V.prototype,"writeWhere",null),V=R=(0,o._)([(0,h.j)("esri.rest.support.Query")],V);const D=V},27207:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(29768),s=r(57251),n=r(12047),a=r(76506),l=r(34250),p=(r(91306),r(17533)),u=r(2906);r(71552),r(21972),r(60474),r(66396),r(86656),r(48578),r(92143),r(31450),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);const c=new s.J({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let d=i=class extends n.wq{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=(0,a.d9)(e))}clone(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxPointCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxRecordCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxVertexCount",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"onStatisticField",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"outStatisticFieldName",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:c.read},write:{target:"statisticType",writer:c.write}}})],d.prototype,"statisticType",void 0),(0,o._)([(0,l.Cb)({type:Object})],d.prototype,"statisticParameters",void 0),(0,o._)([(0,u.w)("statisticParameters")],d.prototype,"writeStatisticParameters",null),d=i=(0,o._)([(0,p.j)("esri.rest.support.StatisticDefinition")],d);const y=d}}]);