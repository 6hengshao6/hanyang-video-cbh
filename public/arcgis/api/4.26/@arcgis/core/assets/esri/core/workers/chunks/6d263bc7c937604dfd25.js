"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1171],{91171:(t,e,r)=>{r.r(e),r.d(e,{executeForTopCount:()=>n});var i=r(94216),o=r(66977),s=r(39210);async function n(t,e,r){const n=(0,i.p)(t);return(await(0,o.c)(n,s.Z.from(e),{...r})).data.count}r(31450),r(48578),r(71552),r(76506),r(88762),r(32101),r(60991),r(92143),r(40642),r(82058),r(50406),r(32422),r(21801),r(34250),r(91306),r(60474),r(66396),r(86656),r(17533),r(6540),r(73796),r(12047),r(21972),r(91055),r(19657),r(6906),r(97714),r(60947),r(53785),r(57251),r(89623),r(2906),r(91597),r(86787),r(35132),r(84069),r(44567),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(92896),r(95533),r(94751),r(95307),r(74569),r(22781),r(81731),r(55823),r(92847),r(93314),r(35197),r(90549)},66977:(t,e,r)=>{r.d(e,{a:()=>c,b:()=>h,c:()=>m,e:()=>y});var i=r(82058),o=r(71252),s=r(32101),n=r(32422),l=r(95533),u=r(26900),p=r(55823);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),s=i;if((0,o.i)(r)&&(s.geometry=JSON.stringify(r),s.geometryType=(0,n.Ji)(r),s.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),i.topFilter?.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=i.outSR.wkid||JSON.stringify(i.outSR):r&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return s}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,p.a)(e,r,o.data),o}async function c(t,e,r){return(0,o.i)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return(0,o.i)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return(0,o.i)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,n={},p={}){const a="string"==typeof t?(0,s.mN)(t):t,y=e.geometry?[e.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,l.aX)(y,null,n).then((t=>{const l=t&&t[0];(0,o.i)(l)&&((e=e.clone()).geometry=l);const y=(0,u.m)({...a.query,f:r,...p,...d(e,p)});return(0,i.default)((0,s.v_)(a.path,"queryTopFeatures"),{...n,query:{...y,...n.query}})}))}},39210:(t,e,r)=>{r.d(e,{Z:()=>f});var i,o=r(29768),s=r(74569),n=r(93314),l=r(57251),u=r(12047),p=r(76506),a=r(71252),d=r(34250),y=r(91306),c=r(17533),h=r(2906),m=r(32422),w=r(90549),b=r(60947);r(21801),r(40642),r(71552),r(48578),r(73796),r(97714),r(91597),r(92143),r(31450),r(86787),r(86656),r(66396),r(53785),r(89623),r(35132),r(84069),r(44567),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(92896),r(22781),r(60474),r(60991),r(6540),r(21972),r(91055),r(19657),r(6906),r(50406),r(35197);const v=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),F=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let S=i=class extends u.wq{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new i((0,p.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],S.prototype,"cacheHint",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],S.prototype,"distance",void 0),(0,o._)([(0,d.Cb)({types:s.qM,json:{read:m.im,write:!0}})],S.prototype,"geometry",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],S.prototype,"geometryPrecision",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],S.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],S.prototype,"num",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],S.prototype,"objectIds",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],S.prototype,"orderByFields",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],S.prototype,"outFields",void 0),(0,o._)([(0,d.Cb)({type:b.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],S.prototype,"outSpatialReference",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],S.prototype,"resultType",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],S.prototype,"returnGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],S.prototype,"returnM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],S.prototype,"returnZ",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],S.prototype,"start",void 0),(0,o._)([(0,h.w)("start"),(0,h.w)("num")],S.prototype,"writeStart",null),(0,o._)([(0,d.Cb)({type:String,json:{read:{source:"spatialRel",reader:v.read},write:{target:"spatialRel",writer:v.write}}})],S.prototype,"spatialRelationship",void 0),(0,o._)([(0,d.Cb)({type:n.Z,json:{write:!0}})],S.prototype,"timeExtent",void 0),(0,o._)([(0,d.Cb)({type:w.Z,json:{write:!0}})],S.prototype,"topFilter",void 0),(0,o._)([(0,d.Cb)({type:String,json:{read:F.read,write:{writer:F.write,overridePolicy(t){return{enabled:(0,a.i)(t)&&(0,a.i)(this.distance)&&this.distance>0}}}}})],S.prototype,"units",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],S.prototype,"where",void 0),S=i=(0,o._)([(0,c.j)("esri.rest.support.TopFeaturesQuery")],S),S.from=(0,y.e)(S);const f=S},90549:(t,e,r)=>{r.d(e,{Z:()=>p});var i,o=r(29768),s=r(12047),n=r(34250),l=(r(91306),r(48578),r(17533));r(21972),r(60474),r(66396),r(76506),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);let u=i=class extends s.wq{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"groupByFields",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{write:!0}})],u.prototype,"topCount",void 0),(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"orderByFields",void 0),u=i=(0,o._)([(0,l.j)("esri.rest.support.TopFilter")],u);const p=u}}]);