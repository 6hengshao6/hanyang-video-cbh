/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{y as o,z as e}from"../../chunks/unitUtils.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{d as p}from"../../chunks/defaultUnit.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../request.js";import"../../core/JSONSupport.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";let a=class extends r{constructor(t){super(t),this.activeTool=null,this.activeViewModel=null,this.view=null}get areaUnit(){return this.defaultUnit}set areaUnit(t){this._overrideIfSome("areaUnit",t)}get linearUnit(){return this.defaultUnit}set linearUnit(t){this._overrideIfSome("linearUnit",t)}get state(){const{activeViewModel:t}=this;return t?t.state:"disabled"}};t([s({type:["area","distance","direct-line"]})],a.prototype,"activeTool",void 0),t([s()],a.prototype,"activeViewModel",void 0),t([s({type:o})],a.prototype,"areaUnit",null),t([s(p)],a.prototype,"defaultUnit",void 0),t([s({type:e})],a.prototype,"linearUnit",null),t([s({readOnly:!0})],a.prototype,"state",null),t([s()],a.prototype,"view",void 0),a=t([i("esri.widgets.Measurement.MeasurementViewModel")],a);const n=a;export{n as default};
