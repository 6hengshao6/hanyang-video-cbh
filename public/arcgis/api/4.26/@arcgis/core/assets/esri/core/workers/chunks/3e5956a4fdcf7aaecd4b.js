"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7031,1246],{75025:(e,t,r)=>{r.d(t,{A:()=>l});var s=r(29768),o=r(92143),i=r(71252),n=r(34250),a=(r(91306),r(48578),r(17533)),p=r(21132);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,p.p)(this.url);if((0,i.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,p.s)(e,o.L.getLogger(this.declaredClass)))}};return(0,s._)([(0,n.Cb)()],t.prototype,"title",null),(0,s._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,a.j)("esri.layers.mixins.ArcGISService")],t),t}},80733:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(29768),o=r(60991),i=r(34250),n=(r(91306),r(48578),r(17533)),a=r(9506);r(76506),r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(86748),r(66122),r(21972),r(91055),r(19657),r(6906),r(50406),r(15324),r(75067),r(89914),r(12047),r(86787),r(97714),r(2906),r(14249),r(60217),r(74569),r(21801),r(73796),r(60947),r(53785),r(57251),r(89623),r(91597),r(35132),r(84069),r(44567),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(92896),r(22781),r(32422),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(55306),r(96467),r(63571),r(30776),r(48027),r(54174),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(5853),r(39141),r(32101),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(65684),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(48190),r(85557),r(94070),r(67541),r(16218),r(51899),r(71206),r(9352),r(89241),r(91700),r(51979),r(32037),r(60698),r(90811),r(60045),r(68681),r(53321),r(86758),r(95310),r(58085),r(93939),r(62407),r(90033),r(97807),r(238),r(71831),r(20208),r(54179),r(10691),r(38949),r(71777),r(19755),r(62554),r(27371),r(78648),r(87558),r(13063),r(17153),r(35962),r(9252),r(67350),r(11471),r(83748),r(28376),r(9801),r(53523),r(42911),r(46826),r(45433),r(41617),r(95873),r(23771),r(65514),r(46987),r(37453),r(73173),r(66284),r(87239),r(87728),r(55823),r(92847),r(87258),r(97546),r(54732),r(96994),r(75025),r(21132),r(80462),r(92200),r(65949),r(22465),r(65775),r(5777),r(21471),r(65398),r(9641),r(6210),r(36231),r(93314),r(35197),r(31292),r(69218),r(32925),r(27207),r(79093),r(29027),r(43022),r(1557),r(47842),r(17298),r(99983),r(36097),r(62670),r(34446),r(46646),r(17055),r(2180),r(14327),r(62748),r(39275),r(70846),r(67961),r(29395),r(94303),r(77807),r(50203),r(30439),r(6941),r(14460),r(13322),r(13201),r(89440),r(86861),r(39241),r(41864),r(56420),r(74742),r(28239),r(60111),r(1623),r(12381),r(92624),r(97565),r(64049),r(68219),r(6416),r(82377),r(59765),r(77361),r(46495),r(78303),r(47346),r(1709),r(68653),r(40944),r(68714),r(39210),r(90549),r(78893);let p=class extends a.default{constructor(e){super(e),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new o.Z("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};(0,s._)([(0,i.Cb)()],p.prototype,"cameraProperties",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"coverage",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"coveragePercent",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"defaultSearchLocation",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"depthImage",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"digitalElevationModel",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"geometryType",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"imageProperties",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"maximumDistance",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),(0,s._)([(0,i.Cb)({type:["OrientedImageryLayer"]})],p.prototype,"operationalLayerType",void 0),p=(0,s._)([(0,n.j)("esri.layers.OrientedImageryLayer")],p);const l=p},23771:(e,t,r)=>{r.d(t,{W:()=>d});var s=r(29768),o=r(21972),i=r(82933),n=r(71252),a=r(58085),p=r(6906),l=r(34250),u=r(17533);let d=class extends o.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new i.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,a.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,a.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:s=!1}={}){const o=++this._handleId;return this._handles.add([(0,a.on)(e,"after-changes",this._createSyncUpdatingCallback(),a.Z_),(0,a.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:s?e=>t({added:[],removed:e.toArray()}):void 0})],o),{remove:()=>this._handles.remove(o)}}addPromise(e){if((0,n.a)(e))return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},s){const o=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,o);const i=s(e,t,r);return this._handles.add(i,o),{remove:()=>this._handles.remove(o)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),s=(0,a.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(s,t),s}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,p.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,s._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],d);const c=-42},6941:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>n,c:()=>a,d:()=>o,e:()=>p,f:()=>l,g:()=>u});const s=[252,146,31,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},p={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},l={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},55823:(e,t,r)=>{r.d(t,{a:()=>i});var s=r(71252),o=r(92847);function i(e,t,r){if(!r||!r.features||!r.hasZ)return;const i=(0,o.g)(r.geometryType,t,e.outSpatialReference);if(!(0,s.a)(i))for(const e of r.features)i(e.geometry)}},62748:(e,t,r)=>{r.d(t,{g:()=>d});var s=r(48578),o=r(71252),i=r(21132);const n={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function a(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function p(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}function l(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:m(e),operations:g(e.capabilities,e,t),query:f(e,t),queryRelated:v(e),queryTopFeatures:_(e),editing:w(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:a(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=n[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:a(e,"isDataVersioned",!1),supportsAttachment:a(e,"hasAttachments",!1),supportsM:a(e,"hasM",!1),supportsZ:a(e,"hasZ",!1)}}function m(e){return{supportsAdvancedFieldProperties:a(e,"supportsFieldDescriptionProperty",!1)}}function g(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,i.p)(r):null,p=s.includes((0,o.i)(n)&&"MapServer"===n.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let u=l&&s.includes("create"),d=l&&s.includes("delete"),c=l&&s.includes("update");const y=s.includes("changetracking"),h=t.advancedQueryCapabilities;return l&&!(u||d||c)&&(u=d=c=!0),{supportsCalculate:a(t,"supportsCalculate",!1),supportsTruncate:a(t,"supportsTruncate",!1),supportsValidateSql:a(t,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:d,supportsEditing:l,supportsChangeTracking:y,supportsQuery:p,supportsQueryAnalytics:a(h,"supportsQueryAnalytic",!1),supportsQueryAttachments:a(h,"supportsQueryAttachments",!1),supportsQueryTopFeatures:a(h,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:a(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:c,supportsExceedsLimitStatistics:a(t,"supportsExceedsLimitStatistics",!1)}}function f(e,t){const r=e.advancedQueryCapabilities,o=e.ownershipBasedAccessControlForFeatures,n=e.archivingInfo,d=e.currentVersion,c=t?.includes("MapServer"),y=!c||d>=(0,s.h)("mapserver-pbf-version-support"),h=(0,i.i)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:a(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:a(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:a(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:l(r),supportsCentroid:a(r,"supportsReturningGeometryCentroid",!1),supportsDistance:a(r,"supportsQueryWithDistance",!1),supportsDistinct:a(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:a(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:a(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:a(r,"supportsHavingClause",!1),supportsOrderBy:a(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:a(r,"supportsPagination",!1),supportsQuantization:a(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:a(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:a(e,"supportsReturningQueryGeometry",!1),supportsResultType:a(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:a(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:a(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:a(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:a(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:a(o,"allowOthersToQuery",!0),supportsHistoricMoment:a(n,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&m.has("pbf"),supportsDisjointSpatialRelationship:a(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:a(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:a(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:a(r,"supportsFullTextSearch",!1),maxRecordCountFactor:p(e,"maxRecordCountFactor",void 0),maxRecordCount:p(e,"maxRecordCount",void 0),standardMaxRecordCount:p(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:p(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,r=a(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:a(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function _(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function w(e){const t=e.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:a(e,"allowGeometryUpdates",!0),supportsGlobalId:a(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:a(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:a(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:a(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:a(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:a(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:a(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:a(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:a(t,"allowOthersToUpdate",!0)}}},52228:(e,t,r)=>{var s,o;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?s.Expression:e.field&&"string"==typeof e.field?s.Field:s.Unknown}function p(e,t){const r=t||a(e),i=e.valueUnit||"unknown";return r===s.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}r.d(t,{I:()=>s,T:()=>o,a:()=>p,b:()=>n,g:()=>a,i:()=>i}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(s||(s={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},95873:(e,t,r)=>{r.d(t,{p:()=>l,r:()=>u});var s=r(29768),o=r(21972),i=r(82933),n=r(34250),a=r(17533),p=r(23771);r(60474),r(66396),r(76506),r(48578),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(91306),r(58085);const l=e=>{let t=class extends e{constructor(){super(...arguments),this._handles=new i.Z,this._updatingHandles=new p.W}destroy(){this.destroyed||(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};return(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,s._)([(0,a.j)("esri.core.HandleOwner")],t),t};let u=class extends(l(o.Z)){};u=(0,s._)([(0,a.j)("esri.core.HandleOwner")],u)},52991:(e,t,r)=>{r.d(t,{E:()=>o,_:()=>i});var s=r(71252);async function o(e,t){const{WhereClause:s}=await r.e(2274).then(r.bind(r,72274)).then((e=>e.W));return s.create(e,t)}function i(e,t){return(0,s.i)(e)?(0,s.i)(t)?`(${e}) AND (${t})`:e:t}},96994:(e,t,r)=>{r.d(t,{V:()=>n});var s=r(29768),o=r(34250),i=(r(91306),r(48578),r(17533));r(92143),r(31450),r(71552),r(76506),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540);const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,i.j)("esri.layers.mixins.APIKeyMixin")],t),t}},46495:(e,t,r)=>{r.d(t,{Z:()=>d});var s=r(29768),o=r(66122),i=r(57251),n=r(12047),a=r(34250),p=(r(91306),r(48578),r(17533));r(21972),r(60474),r(66396),r(76506),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);const l=new i.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,o.J)(n.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,a.Cb)({json:{read:l.read,write:l.write}})],u.prototype,"drawingTool",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,s._)([(0,p.j)("esri.layers.support.FeatureTemplate")],u);const d=u},78303:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(29768),o=r(66122),i=r(12047),n=r(34250),a=(r(91306),r(48578),r(97714)),p=r(17533),l=r(2906),u=r(9801),d=r(46495);r(21972),r(60474),r(66396),r(76506),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(53523),r(59465),r(57251),r(42911),r(46826),r(45433);let c=class extends((0,o.J)(i.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.f)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,s._)([(0,a.r)("domains")],c.prototype,"readDomains",null),(0,s._)([(0,l.w)("domains")],c.prototype,"writeDomains",null),(0,s._)([(0,n.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,s._)([(0,p.j)("esri.layers.support.FeatureType")],c);const y=c},2180:(e,t,r)=>{r.d(t,{Z:()=>u});var s,o=r(29768),i=r(15324),n=r(12047),a=r(34250),p=(r(91306),r(48578),r(17533));r(91055),r(75067),r(21972),r(60474),r(66396),r(76506),r(86656),r(92143),r(31450),r(71552),r(40642),r(6540),r(19657),r(6906),r(50406),r(60991),r(89914);let l=s=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.Z}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],l.prototype,"floorField",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllMode",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllLevelIds",void 0),l=s=(0,o._)([(0,p.j)("esri.layers.support.LayerFloorInfo")],l);const u=l},34446:(e,t,r)=>{r.d(t,{Z:()=>c});var s,o=r(29768),i=r(12047),n=r(76506),a=r(34250),p=r(91306),l=r(17533),u=r(2906);r(21972),r(60474),r(66396),r(86656),r(48578),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);let d=s=class extends i.wq{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new s((0,n.d9)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"attachmentTypes",void 0),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],d.prototype,"attachmentsWhere",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"cacheHint",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"keywords",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"globalIds",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{default:!1,write:!0}})],d.prototype,"returnMetadata",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"size",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),(0,o._)([(0,u.w)("start"),(0,u.w)("num")],d.prototype,"writeStart",null),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=s=(0,o._)([(0,l.j)("esri.rest.support.AttachmentQuery")],d),d.from=(0,p.e)(d);const c=d},87258:(e,t,r)=>{r.d(t,{Z:()=>w});var s,o=r(29768),i=r(74569),n=r(23761),a=r(57251),p=r(12047),l=r(76506),u=r(71252),d=r(34250),c=(r(91306),r(97714)),y=r(17533),h=r(2906),m=r(60947),g=r(32422),f=r(97546);r(21801),r(40642),r(71552),r(48578),r(73796),r(91597),r(92143),r(31450),r(86787),r(86656),r(66396),r(53785),r(89623),r(35132),r(84069),r(44567),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(92896),r(22781),r(86748),r(66122),r(21972),r(60474),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(15324),r(75067),r(89914),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(5853),r(39141),r(32101),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732);const v=new a.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let _=s=class extends p.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const o=e[t],i=n.Z.fromJSON(o),a=o.geometry&&o.geometry.spatialReference;(0,u.i)(i.geometry)&&!a&&(i.geometry.spatialReference=r);const p=o.aggregateGeometries,l=i.aggregateGeometries;if(p&&(0,u.i)(l))for(const e in l){const t=l[e],s=p[e],o=s?.spatialReference;(0,u.i)(t)&&!o&&(t.spatialReference=r)}s.push(i)}return s}writeGeometryType(e,t,r,s){if(e)return void v.write(e,t,r,s);const{features:o}=this;if(o)for(const e of o)if(e&&(0,u.i)(e.geometry))return void v.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,g.im)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=m.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,u.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,l.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,o]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((o-e)/r)));for(let e=0,t=i.length;e<t;e++)n?.((0,u.u)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,o],scale:[i,n]}=r,a=this._getHydrationFunction(e,(e=>e*i+s),(e=>o-e*n));for(const{geometry:e}of t)(0,u.i)(e)&&a&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,o;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===s&&n===o||(i.push([e-s,n-o]),s=e,o=n)}else s=t(a[0]),o=r(a[1]),i.push([s,o])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,g.oU)(e)?e.rings:e.paths,o=[];for(let e=0,i=s.length;e<i;e++){const i=s[e],n=this._quantizePoints(i,t,r);n&&o.push(n)}return o.length>0?((0,g.oU)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=(0,g.oU)(e)?e.rings:e.paths;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(o+=s[0],i+=s[1]):(o=s[0],i=s[1]),s[0]=t(o),s[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(o+=n[0],i+=n[1]):(o=n[0],i=n[1]),n[0]=t(o),n[1]=r(i)}}:null}};(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"exceededTransferLimit",void 0),(0,o._)([(0,d.Cb)({type:[n.Z],json:{write:!0}})],_.prototype,"features",void 0),(0,o._)([(0,c.r)("features")],_.prototype,"readFeatures",null),(0,o._)([(0,d.Cb)({type:[f.Z],json:{write:!0}})],_.prototype,"fields",void 0),(0,o._)([(0,d.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:v.read}}})],_.prototype,"geometryType",void 0),(0,o._)([(0,h.w)("geometryType")],_.prototype,"writeGeometryType",null),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasZ",void 0),(0,o._)([(0,d.Cb)({types:i.qM,json:{write:!0}})],_.prototype,"queryGeometry",void 0),(0,o._)([(0,c.r)("queryGeometry")],_.prototype,"readQueryGeometry",null),(0,o._)([(0,d.Cb)({type:m.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),(0,o._)([(0,h.w)("spatialReference")],_.prototype,"writeSpatialReference",null),(0,o._)([(0,d.Cb)({json:{write:!0}})],_.prototype,"transform",void 0),_=s=(0,o._)([(0,y.j)("esri.rest.support.FeatureSet")],_),_.prototype.toJSON.isDefaultToJSON=!0;const w=_}}]);