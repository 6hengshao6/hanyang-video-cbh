/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{f as t,a as o}from"../chunks/featureReferenceUtils.js";import r from"../core/Accessor.js";import{ClonableMixin as i}from"../core/Clonable.js";import{JSONSupportMixin as e}from"../core/JSONSupport.js";import{h as p}from"../chunks/maybe.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{p as c}from"../chunks/persistable.js";import u from"../geometry/Point.js";import{E as j}from"../chunks/ElevationInfo.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/lang.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../core/urlUtils.js";import"../chunks/uuid.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";let l=class extends(e(i(r))){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return p(this.position,s.position)&&p(this.elevationInfo,s.elevationInfo)&&t(this.feature,s.feature)}};s([n({type:u}),c()],l.prototype,"position",void 0),s([n({type:j}),c()],l.prototype,"elevationInfo",void 0),s([n(o)],l.prototype,"feature",void 0),l=s([m("esri.analysis.LineOfSightAnalysisObserver")],l);const a=l;export{a as default};