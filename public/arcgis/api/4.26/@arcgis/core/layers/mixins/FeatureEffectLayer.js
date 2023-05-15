/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import o from"../support/FeatureEffect.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/_commonjsHelpers.js";import"../support/FeatureFilter.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../chunks/enumeration.js";import"../../chunks/DataLayerSource.js";import"../support/Field.js";import"../../chunks/domains.js";import"../support/CodedValueDomain.js";import"../support/Domain.js";import"../support/InheritedDomain.js";import"../support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../core/Clonable.js";import"../../rest/support/StatisticDefinition.js";const i={write:{allowNull:!0}},e=e=>{let p=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return s([t({type:o,json:{origins:{"web-map":i,"portal-item":i}}})],p.prototype,"featureEffect",void 0),p=s([r("esri.layers.mixins.FeatureEffectLayer")],p),p};export{e as FeatureEffectLayer};