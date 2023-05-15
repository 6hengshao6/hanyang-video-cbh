/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as t}from"./typedArrayUtil.js";import{i as s}from"./maybe.js";import{p as e,i as r}from"./arcgisLayerUrl.js";const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function o(t,s,e){return!!(t&&t.hasOwnProperty(s)?t[s]:e)}function u(t,s,e){return t&&t.hasOwnProperty(s)?t[s]:e}function a(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function i(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function n(t,s){return{analytics:c(t),attachment:d(t),data:l(t),metadata:y(t),operations:m(t.capabilities,t,s),query:h(t,s),queryRelated:g(t),queryTopFeatures:C(t),editing:S(t)}}function c(t){return{supportsCacheHint:i(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:i(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:o(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=p[t.name];s&&(e[s]=!!t.isEnabled)})),e}function l(t){return{isVersioned:o(t,"isDataVersioned",!1),supportsAttachment:o(t,"hasAttachments",!1),supportsM:o(t,"hasM",!1),supportsZ:o(t,"hasZ",!1)}}function y(t){return{supportsAdvancedFieldProperties:o(t,"supportsFieldDescriptionProperty",!1)}}function m(t,r,p){const u=t?t.toLowerCase().split(",").map((t=>t.trim())):[],a=p?e(p):null,i=u.includes(s(a)&&"MapServer"===a.serverType?"data":"query"),n=u.includes("editing")&&!r.datesInUnknownTimezone;let c=n&&u.includes("create"),d=n&&u.includes("delete"),l=n&&u.includes("update");const y=u.includes("changetracking"),m=r.advancedQueryCapabilities;return n&&!(c||d||l)&&(c=d=l=!0),{supportsCalculate:o(r,"supportsCalculate",!1),supportsTruncate:o(r,"supportsTruncate",!1),supportsValidateSql:o(r,"supportsValidateSql",!1),supportsAdd:c,supportsDelete:d,supportsEditing:n,supportsChangeTracking:y,supportsQuery:i,supportsQueryAnalytics:o(m,"supportsQueryAnalytic",!1),supportsQueryAttachments:o(m,"supportsQueryAttachments",!1),supportsQueryTopFeatures:o(m,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:o(r,"supportsAttachmentsResizing",!1),supportsSync:u.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:o(r,"supportsExceedsLimitStatistics",!1)}}function h(s,e){const p=s.advancedQueryCapabilities,n=s.ownershipBasedAccessControlForFeatures,c=s.archivingInfo,d=s.currentVersion,l=e?.includes("MapServer"),y=!l||d>=t("mapserver-pbf-version-support"),m=r(e),h=new Set((s.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:o(p,"supportsStatistics",s.supportsStatistics),supportsPercentileStatistics:o(p,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:o(p,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:a(p),supportsCentroid:o(p,"supportsReturningGeometryCentroid",!1),supportsDistance:o(p,"supportsQueryWithDistance",!1),supportsDistinct:o(p,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:o(p,"supportsReturningQueryExtent",!1),supportsGeometryProperties:o(p,"supportsReturningGeometryProperties",!1),supportsHavingClause:o(p,"supportsHavingClause",!1),supportsOrderBy:o(p,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:o(p,"supportsPagination",!1),supportsQuantization:o(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:o(s,"supportsQuantizationEditMode",!1),supportsQueryGeometry:o(s,"supportsReturningQueryGeometry",!1),supportsResultType:o(p,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:o(p,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:o(p,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:o(s,"useStandardizedQueries",!1),supportsTopFeaturesQuery:o(p,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:o(n,"allowOthersToQuery",!0),supportsHistoricMoment:o(c,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&h.has("pbf"),supportsDisjointSpatialRelationship:o(p,"supportsDisjointSpatialRel",!1),supportsCacheHint:o(p,"supportsQueryWithCacheHint",!1)||i(p,"query"),supportsDefaultSpatialReference:o(p,"supportsDefaultSR",!1),supportsCompactGeometry:m,supportsFullTextSearch:o(p,"supportsFullTextSearch",!1),maxRecordCountFactor:u(s,"maxRecordCountFactor",void 0),maxRecordCount:u(s,"maxRecordCount",void 0),standardMaxRecordCount:u(s,"standardMaxRecordCount",void 0),tileMaxRecordCount:u(s,"tileMaxRecordCount",void 0)}}function g(t){const s=t.advancedQueryCapabilities,e=o(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:o(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:i(s,"queryRelated")}}function C(t){return{supportsCacheHint:i(t.advancedQueryCapabilities,"queryTopFilter")}}function S(t){const s=t.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:o(t,"allowGeometryUpdates",!0),supportsGlobalId:o(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:o(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:o(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:o(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:o(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:o(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:o(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:o(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:o(s,"allowOthersToUpdate",!0)}}export{n as g};