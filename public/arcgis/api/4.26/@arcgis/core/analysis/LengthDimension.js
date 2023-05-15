/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import{Clonable as o}from"../core/Clonable.js";import{c as r}from"../chunks/Cyclical.js";import{JSONSupportMixin as s}from"../core/JSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{l as n}from"../chunks/ensureType.js";import m from"../geometry/Point.js";import"../geometry/Extent.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/object.js";import"../core/lang.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";var c;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct"}(c||(c={}));const j=[c.Horizontal,c.Vertical,c.Direct];let u=class extends(s(o)){constructor(t){super(t),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=c.Direct,this.offset=0,this.orientation=0}};t([e({type:["length"],json:{write:{isRequired:!0}}})],u.prototype,"type",void 0),t([e({type:m,json:{write:!0}})],u.prototype,"startPoint",void 0),t([e({type:m,json:{write:!0}})],u.prototype,"endPoint",void 0),t([e({type:j,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"measureType",void 0),t([e({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"offset",void 0),t([e({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),i((t=>r.normalize(n(t),0,!0)))],u.prototype,"orientation",void 0),u=t([p("esri.analysis.LengthDimension")],u);const l=u;export{c as L,l as default,j as l};
