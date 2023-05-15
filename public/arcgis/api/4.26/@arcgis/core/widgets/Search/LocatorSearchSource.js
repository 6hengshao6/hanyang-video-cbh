/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as t}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import r from"./SearchSource.js";import i from"../../Graphic.js";import{u as n,i as p}from"../../chunks/maybe.js";import l from"../../geometry/Polygon.js";import{S as m,s as a,L as c,l as u,A as j,a as y}from"../../chunks/suggestLocations.js";import{c as h,s as d}from"../../chunks/geometryUtils3.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Identifiable.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/utils4.js";import"../../rest/support/AddressCandidate.js";import"../../chunks/commonProperties3.js";import"../../chunks/scaleUtils.js";const g=3e5;function b(o,t){if(t.localSearchDisabled)return null;const s=o?.scale;return"number"==typeof s&&s<=g?o?.extent?.center:null}function f(o){return!!o&&/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(o)}function S(o){return!!o&&/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/i.test(o)}function k(o){return!!o&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(o)}const x="https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";function v(o,t){const{filter:s,withinViewEnabled:e}=o,r=t&&t.scale,i=t&&t.extent,n=s&&s.geometry;return h(n,t,r)||(e&&i?i:void 0)}function C(o,t){return o.filter(Boolean).map((o=>function(o,t){const{key:s,scale:e,sourceIndex:r,view:n,zoomScale:m,defaultZoomScale:a}=t,{attributes:c,extent:u,location:j,address:y}=o,g=new i({geometry:j,attributes:c}),b=u||j,f=h(b,n,e),S="number"==typeof m?d(f,n,m):"number"==typeof a&&"point"===b?.type?d(f,n,a):f,k=j?`${j.x},${j.y}`:"",x=y||k,v=g.clone();return p(S)&&(v.geometry=l.fromExtent(S)),{extent:S,feature:g,target:v,key:s,name:x,sourceIndex:r}}(o,t)))}var L;let w=L=class extends r{constructor(o){super(o),this.apiKey=null,this.categories=null,this.countryCode=null,this.defaultZoomScale=null,this.localSearchDisabled=!1,this.locationType=null,this.name="",this.placeholder="",this.searchTemplate="",this.singleLineFieldName=null,this.suggestionsEnabled=null,this.url=null,this.zoomScale=null,this.getResults=(o,t)=>function(o,t){return o.location?async function(o,t){const{source:s,spatialReference:e,location:r,sourceIndex:i,view:n}=o,{apiKey:p,url:l,zoomScale:m,defaultZoomScale:a}=s;if(null==l)return[];const j=n?.scale,y=t?.signal,h=new c;h.location=r,p&&(h.apiKey=p),e&&(h.outSpatialReference=e);try{return C([await u(l,h,{signal:y})],{sourceIndex:i,scale:j,view:n,zoomScale:m,defaultZoomScale:a})}catch(o){return[]}}(o,t):async function(o,t){const{source:s,suggestResult:e,spatialReference:r,view:i,maxResults:p,sourceIndex:l}=o,m=s&&s.zoomScale,a=s&&s.defaultZoomScale,c=e.text?.trim();if(!c)return null;const u=!e.key&&s.prefix?s.prefix:"",h=!e.key&&s.suffix?s.suffix:"",d=`${u}${e.text}${h}`,g=new j,{apiKey:f,url:S}=s,k=i&&i.scale,x=v(s,i),L=t&&t.signal;if(f&&(g.apiKey=f),!S)return null;s.categories&&(g.categories=s.categories),s.locationType&&(g.locationType=s.locationType),r&&(g.outSpatialReference=r);const w=b(i,s);w&&(g.location=w),g.maxLocations=p,x&&(g.searchExtent=n(x)),s.countryCode&&(g.countryCode=s.countryCode);const{key:D}=e,I=`${D}`;return D&&(g.magicKey=I),g.address={},g.address[s.singleLineFieldName||"Single Line Input"]=d,s.outFields&&(g.outFields=s.outFields),y(S,g,{signal:L}).then((o=>C(o,{key:I,scale:k,sourceIndex:l,view:i,zoomScale:m,defaultZoomScale:a})))}(o,t)}({source:this,...o},t),this.getSuggestions=(o,t)=>async function(o,t){const{source:s,spatialReference:e,view:r,suggestTerm:i,maxSuggestions:p,sourceIndex:l}=o,c=new m,{apiKey:u,url:j}=s,y=v(s,r),h=t&&t.signal;if(!j)return null;u&&(c.apiKey=u),s.categories&&(c.categories=s.categories),e&&(c.outSpatialReference=e);const d=b(r,s);if(d&&(c.location=d),!i.trim())return null;const{prefix:g="",suffix:f=""}=s,S=`${g}${i}${f}`;return c.text=S,y&&(c.searchExtent=n(y)),c.maxSuggestions=p,s.countryCode&&(c.countryCode=s.countryCode),a(j,c,{signal:h}).then((o=>function(o,t){return o.map((o=>function(o,t){return{text:o.text,key:o.magicKey,sourceIndex:t}}(o,t)))}(o,l)))}({source:this,...o},t)}clone(){return new L({apiKey:this.apiKey,autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?t(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?t(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})}};o([s()],w.prototype,"apiKey",void 0),o([s()],w.prototype,"categories",void 0),o([s()],w.prototype,"countryCode",void 0),o([s({json:{write:!0}})],w.prototype,"defaultZoomScale",void 0),o([s()],w.prototype,"localSearchDisabled",void 0),o([s()],w.prototype,"locationType",void 0),o([s({json:{write:!0}})],w.prototype,"name",void 0),o([s({json:{write:!0}})],w.prototype,"placeholder",void 0),o([s()],w.prototype,"searchTemplate",void 0),o([s({json:{write:!0}})],w.prototype,"singleLineFieldName",void 0),o([s({json:{read:{source:"suggest"},write:{target:"suggest"}}})],w.prototype,"suggestionsEnabled",void 0),o([s({json:{write:!0}})],w.prototype,"url",void 0),o([s({json:{write:!0}})],w.prototype,"zoomScale",void 0),w=L=o([e("esri.widgets.Search.LocatorSearchSource")],w);const D=w;export{S as a,f as b,D as default,k as i,x as m};
