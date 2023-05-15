"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4580],{93470:(e,t,r)=>{r.d(t,{p:()=>c});var i=r(25368),s=r(32101),o=r(10279),n=r(86656),a=r(21972),l=r(34250),p=r(90886),d=r(38742);function c(e){const t=e?.origins??[void 0];return(r,o)=>{const c=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const o=(0,n.g)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,d.r)(e,t,r);return o.type===String?i:"function"==typeof o.type?new o.type({url:i}):void 0},write:{writer(t,n,l,c){if(!c||!c.resources)return"string"==typeof t?void(n[l]=(0,d.t)(t,c)):void(n[l]=t.write({},c));const f=null==(v=t)?null:"string"==typeof v?v:v.url,g=(0,d.t)(f,{...c,verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),m=o.type!==String&&(!(0,i.i)(this)||c&&c.origin&&this.originIdOf(r)>(0,a.n)(c.origin)),b={object:this,propertyName:r,value:t,targetUrl:g,dest:n,targetPropertyName:l,context:c,params:e};var v;c&&c.portalItem&&g&&!(0,s.YP)(g)?m?function(e){const{context:t,targetUrl:r,params:i,value:o,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),d=h(o,r,t),c=(0,p.g)(d),f=(0,s.Ml)(l.path),g=i?.compress??!1;c===f?(t.resources&&y({...e,resource:l,content:d,compress:g,updates:t.resources.toUpdate}),n[a]=r):u(e)}(b):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(b):c&&c.portalItem&&(null==g||null!=(0,d.i)(g)||(0,s.jc)(g)||m)?u(b):n[l]=g}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.a;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=(0,l.CJ)(r,e,o);for(const e in c)t[e]=c[e]}}}function u(e){const{targetUrl:t,params:i,value:n,context:a,dest:l,targetPropertyName:c}=e;if(!a.portalItem)return;const u=(0,d.p)(t),f=u?.filename??(0,o.g)(),g=i?.prefix??u?.prefix,m=h(n,t,a),b=(0,s.v_)(g,f),v=`${b}.${(0,p.g)(m)}`,w=a.portalItem.resourceFromPath(v);(0,s.jc)(t)&&a.resources&&a.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,82058)).then((e=>e.r))).default,{data:i}=await t(e,{responseType:"blob"});return i}(t).then((e=>{w.path=`${b}.${(0,p.g)(e)}`,l[c]=w.itemRelativeUrl})).catch((()=>{})));const I=i?.compress??!1;a.resources&&y({...e,resource:w,content:m,compress:I,updates:a.resources.toAdd}),l[c]=w.itemRelativeUrl}function y({object:e,propertyName:t,updates:r,resource:i,content:s,compress:o}){r.push({resource:i,content:s,compress:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function h(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},90886:(e,t,r)=>{r.d(t,{g:()=>s});var i=r(32101);function s(e){return o[function(e){return e instanceof Blob?e.type:function(e){const t=(0,i.Ml)(e);return l[t]||n}(e.url)}(e)]||a}const o={},n="text/plain",a=o[n],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in l)o[l[e]]=e},84580:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ye});var i,s=r(29768),o=r(23761),n=r(86748),a=(r(55306),r(71206),r(51979),r(60698),r(53321),r(65684),r(86758),r(95310),r(20208)),l=r(82058),p=r(15324),d=r(60991),c=r(92143),u=r(71252),y=r(54179),h=r(50406),f=r(58085),g=r(32101),m=r(34250),b=(r(91306),r(48578),r(66396)),v=r(97714),w=r(17533),I=r(21972),_=r(41617),L=r(96994),S=r(75025),C=r(65398),F=r(89440),j=r(39241),O=r(6416),x=r(5437),E=r(45272),P=r(43022),T=r(29395),R=r(13322),A=r(34558),N=r(47346),D=r(1709),U=r(14249),Z=r(69003),q=r(77807),Q=r(68653),k=r(2180),G=r(12047),V=r(82933),J=r(76506),M=r(93470),z=r(44567),$=r(1623),K=r(38742);r(31450),r(71552),r(88762),r(40642),r(60474),r(86656),r(91055),r(6540),r(19657),r(6906),r(10279),r(90886),r(75067),r(89914),r(2906),r(21801),r(73796),r(60947),r(53785),r(57251),r(89623),r(91597),r(86787),r(35132),r(98380),r(92482),r(82426),r(72836),r(29794),r(7200),r(65775),r(84069),r(12381),r(73173),r(92896),r(92624),r(92847);let W=i=class extends((0,G.eC)(p.Z.ofType(z.Z))){constructor(e){super(e)}clone(){return new i(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,$.Up)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new w.W("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new z.Z;(0,$.Wt)(r,i,t),r=i}const i=r.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new w.W("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new i;return e.forEach((e=>r.add(z.Z.fromJSON(e,t)))),r}};W=i=(0,s._)([(0,w.j)("esri.layers.support.PolygonCollection")],W);const B=W;var Y;let H=Y=class extends G.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new B,this._geometriesSource=null,this._handles=new V.Z}initialize(){this._handles.add((0,f.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),f.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,K.f)(e,r),context:r}}async loadGeometries(e,t){if((0,u.a)(this._geometriesSource))return;const{url:r,context:i}=this._geometriesSource,s=await(0,l.default)(r,{responseType:"json",signal:(0,u.j)(t,"signal")}),o=e.toJSON(),n=s.data.map((e=>({...e,spatialReference:o})));this.geometries=B.fromJSON(n,i),this._geometriesSource=null}clone(){return new Y({geometries:(0,J.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,s._)([(0,m.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],H.prototype,"spatialRelationship",void 0),(0,s._)([(0,m.Cb)({type:B,nonNullable:!0,json:{write:!0}}),(0,M.p)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],H.prototype,"geometries",void 0),(0,s._)([(0,v.r)(["web-scene","portal-item"],"geometries")],H.prototype,"readGeometries",null),H=Y=(0,s._)([(0,w.j)("esri.layers.support.SceneFilter")],H);const X=H;var ee=r(68714),te=r(31292),re=r(71831),ie=r(78893),se=r(63994),oe=r(37025),ne=r(34394);r(74569),r(22781),r(32422),r(96467),r(63571),r(59465),r(30776),r(48027),r(54174),r(60217),r(63130),r(25696),r(98402),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(5853),r(39141),r(52461),r(48243),r(34635),r(10401),r(49900),r(81184),r(33101),r(3482),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(1648),r(8925),r(33921),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(52228),r(74057),r(48190),r(85557),r(94070),r(67541),r(16218),r(51899),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(9352),r(89241),r(91700),r(32037),r(90811),r(60045),r(68681),r(93939),r(62407),r(90033),r(97807),r(238),r(21132),r(41864),r(56420),r(74742),r(28239),r(60111),r(29027),r(83805),r(46857),r(3754),r(93314),r(35197),r(1557),r(47842),r(17298),r(9506),r(10691),r(38949),r(71777),r(19755),r(62554),r(27371),r(78648),r(87558),r(13063),r(17153),r(35962),r(9252),r(67350),r(11471),r(83748),r(28376),r(9801),r(53523),r(42911),r(46826),r(45433),r(95873),r(23771),r(65514),r(46987),r(37453),r(66284),r(87239),r(87728),r(55823),r(87258),r(97546),r(54732),r(80462),r(92200),r(65949),r(22465),r(5777),r(21471),r(9641),r(6210),r(36231),r(69218),r(32925),r(27207),r(79093),r(99983),r(36097),r(62670),r(34446),r(46646),r(17055),r(14327),r(62748),r(39275),r(70846),r(67961),r(94303),r(50203),r(30439),r(6941),r(14460),r(13201),r(86861),r(97565),r(64049),r(68219),r(82377),r(59765),r(77361),r(46495),r(78303),r(40944),r(39210),r(90549),r(26923),r(35861),r(57257),r(2298),r(99520),r(28904),r(75854),r(35634),r(56697),r(55633),r(40961),r(2420),r(79764),r(32191),r(99045),r(3808);let ae=class extends G.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,s._)([(0,m.Cb)({type:String,json:{read:!0,write:!0}})],ae.prototype,"name",void 0),(0,s._)([(0,m.Cb)({type:String,json:{read:!0,write:!0}})],ae.prototype,"field",void 0),(0,s._)([(0,m.Cb)({type:[Number],json:{read:!0,write:!0}})],ae.prototype,"currentRangeExtent",void 0),(0,s._)([(0,m.Cb)({type:[Number],json:{read:!0,write:!0}})],ae.prototype,"fullRangeExtent",void 0),(0,s._)([(0,m.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],ae.prototype,"type",void 0),ae=(0,s._)([(0,w.j)("esri.layers.support.RangeInfo")],ae);const le=["3DObject","Point"],pe=(0,N.d)();let de=class extends((0,C.E)((0,x.Vt)((0,S.A)((0,F.O)((0,j.I)((0,O.M)((0,y.M)((0,L.V)(_.Z))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new p.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return null!=e&&(0,u.i)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,u.i)(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return(0,u.i)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,u.i)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new D.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:Z.I.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return ue[this.profile]||"mesh"}set renderer(e){(0,U.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,u.i)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:E.z,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsGeometryUpdate:o,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:a,supportsM:l,isVersioned:p,supportsAttachment:d},operations:{supportsEditing:c,supportsAdd:y,supportsUpdate:h,supportsDelete:f,supportsQuery:g,supportsQueryAttachments:m}}=e,b=e.operations.supportsChangeTracking,v=(0,u.i)(this.associatedLayer)&&(0,u.i)(this.associatedLayer.infoFor3D)&&(0,re.s)();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:i,supportsGeometryUpdate:v&&o,supportsUploadWithItemId:s},data:{supportsAttachment:d,supportsZ:a,supportsM:l,isVersioned:p},operations:{supportsQuery:g,supportsQueryAttachments:m,supportsEditing:c&&b,supportsAdd:v&&y&&b,supportsDelete:v&&f&&b,supportsUpdate:h&&b}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return(0,u.i)(this.associatedLayer)?this.associatedLayer.infoFor3D:null}get defaultPopupTemplate(){return(0,u.i)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,u.i)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&ce[r]?ce[r]:(c.L.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,u.i)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(h.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,u.i)(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,ee.l)(this,{origin:"service"},t))).then((()=>(0,U.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){(0,u.i)(this.filter)&&await this.load()}createQuery(){const e=new te.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryCachedAttributes(e,t){const r=(0,U.Lk)(this.fieldsIndex,await(0,oe.g)(this,(0,oe.a)(this)));return(0,se.q)(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new d.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new o.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.L.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,ie.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,u.i)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,u.a)(this.associatedLayer))throw new d.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===r.name){const r=(0,g.v_)(this.parsedUrl.path,e.href);return(0,l.default)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new d.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const i=await r.e(9231).then(r.bind(r,89231));if(await this.load(),(0,u.a)(this.associatedLayer))throw new d.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),i.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!le.includes(e.layerType))throw new d.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new d.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new d.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new d.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,u.i)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,u.a)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,u.a)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,b.g)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===I.O.SERVICE||o===I.O.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new A.F(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(e){(0,h.D_)(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,f.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?c.L.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.L.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&c.L.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&c.L.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,s._)([(0,m.Cb)({types:{key:"type",base:T.F,typeMap:{selection:R.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],de.prototype,"featureReduction",void 0),(0,s._)([(0,m.Cb)({type:[ae],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],de.prototype,"rangeInfos",void 0),(0,s._)([(0,m.Cb)({json:{read:!1}})],de.prototype,"associatedLayer",void 0),(0,s._)([(0,m.Cb)({type:["show","hide"]})],de.prototype,"listMode",void 0),(0,s._)([(0,m.Cb)({type:["ArcGISSceneServiceLayer"]})],de.prototype,"operationalLayerType",void 0),(0,s._)([(0,m.Cb)({json:{read:!1},readOnly:!0})],de.prototype,"type",void 0),(0,s._)([(0,m.Cb)({...pe.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],de.prototype,"fields",void 0),(0,s._)([(0,m.Cb)()],de.prototype,"types",null),(0,s._)([(0,m.Cb)()],de.prototype,"typeIdField",null),(0,s._)([(0,m.Cb)()],de.prototype,"formTemplate",null),(0,s._)([(0,m.Cb)({readOnly:!0})],de.prototype,"fieldsIndex",null),(0,s._)([(0,m.Cb)({type:k.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],de.prototype,"floorInfo",void 0),(0,s._)([(0,m.Cb)(pe.outFields)],de.prototype,"outFields",void 0),(0,s._)([(0,m.Cb)({type:Z.I,readOnly:!0,json:{read:!1}})],de.prototype,"nodePages",void 0),(0,s._)([(0,v.r)("service","nodePages",["nodePages","pointNodePages"])],de.prototype,"readNodePages",null),(0,s._)([(0,m.Cb)({type:[Z.a],readOnly:!0})],de.prototype,"materialDefinitions",void 0),(0,s._)([(0,m.Cb)({type:[Z.b],readOnly:!0})],de.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,m.Cb)({type:[Z.c],readOnly:!0})],de.prototype,"geometryDefinitions",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],de.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],de.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],de.prototype,"statisticsInfo",void 0),(0,s._)([(0,m.Cb)({type:p.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],de.prototype,"excludeObjectIds",void 0),(0,s._)([(0,m.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],de.prototype,"definitionExpression",void 0),(0,s._)([(0,m.Cb)({type:X,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],de.prototype,"filter",void 0),(0,s._)([(0,m.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],de.prototype,"path",void 0),(0,s._)([(0,m.Cb)(P.e)],de.prototype,"elevationInfo",null),(0,s._)([(0,m.Cb)({type:String})],de.prototype,"geometryType",null),(0,s._)([(0,m.Cb)(P.l)],de.prototype,"labelsVisible",void 0),(0,s._)([(0,m.Cb)({type:[q.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:Q.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Q.r},write:!0}})],de.prototype,"labelingInfo",void 0),(0,s._)([(0,m.Cb)(P.a)],de.prototype,"legendEnabled",void 0),(0,s._)([(0,m.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,ne.t)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],de.prototype,"opacity",void 0),(0,s._)([(0,m.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],de.prototype,"priority",void 0),(0,s._)([(0,m.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],de.prototype,"semantic",void 0),(0,s._)([(0,m.Cb)({types:a.w,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],de.prototype,"renderer",null),(0,s._)([(0,m.Cb)({json:{read:!1}})],de.prototype,"cachedDrawingInfo",void 0),(0,s._)([(0,v.r)("service","cachedDrawingInfo")],de.prototype,"readCachedDrawingInfo",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"capabilities",null),(0,s._)([(0,m.Cb)({type:Boolean,json:{read:!1}})],de.prototype,"editingEnabled",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{write:!1,read:!1}})],de.prototype,"infoFor3D",null),(0,s._)([(0,m.Cb)(P.p)],de.prototype,"popupEnabled",void 0),(0,s._)([(0,m.Cb)({type:n.Z,json:{name:"popupInfo",write:!0}})],de.prototype,"popupTemplate",void 0),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"defaultPopupTemplate",null),(0,s._)([(0,m.Cb)({type:String,json:{read:!1}})],de.prototype,"objectIdField",void 0),(0,s._)([(0,v.r)("service","objectIdField",["objectIdField","fields"])],de.prototype,"readObjectIdField",null),(0,s._)([(0,m.Cb)({type:String,json:{read:!1}})],de.prototype,"globalIdField",void 0),(0,s._)([(0,v.r)("service","globalIdField",["globalIdField","fields"])],de.prototype,"readGlobalIdField",null),(0,s._)([(0,m.Cb)({readOnly:!0,type:String,json:{read:!1}})],de.prototype,"displayField",null),(0,s._)([(0,m.Cb)({type:String,json:{read:!1}})],de.prototype,"profile",void 0),(0,s._)([(0,v.r)("service","profile",["store.profile"])],de.prototype,"readProfile",null),(0,s._)([(0,m.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],de.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,m.Cb)(P.s)],de.prototype,"screenSizePerspectiveEnabled",void 0),de=(0,s._)([(0,w.j)("esri.layers.SceneLayer")],de);const ce={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ue={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ye=de}}]);