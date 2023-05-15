/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import r from"../config.js";import t from"../core/Error.js";import o from"../portal/Portal.js";import{p as e}from"./project.js";import s from"../rest/support/ProjectParameters.js";import"./typedArrayUtil.js";import"./maybe.js";import"./object.js";import"../core/lang.js";import"./Logger.js";import"./string.js";import"./tslib.es6.js";import"../kernel.js";import"../core/urlUtils.js";import"../request.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"./get.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./utils4.js";import"./utils5.js";async function i(e=null,s){if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!e)throw new t("internal:geometry-service-url-not-configured");let i;i="portal"in e?e.portal||o.getDefault():e,await i.load({signal:s});const p=i.helperServices?.geometry?.url;if(!p)throw new t("internal:geometry-service-url-not-configured");return p}async function p(r,o,p=null,m){const a=await i(p,m),j=new s;j.geometries=[r],j.outSpatialReference=o;const l=await e(a,j,{signal:m});if(l&&Array.isArray(l)&&1===l.length)return l[0];throw new t("internal:geometry-service-projection-failed")}export{i as getGeometryServiceURL,p as projectGeometry};
