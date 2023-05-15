/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{p as r,o as t,am as o,t as e,w as i,q as s,an as a,ao as n,F as m,X as p,ap as c,aq as d,ar as u,as as l,L as j,at as y,au as f,av as v}from"./arcadeUtils.js";import{A as g,E as w}from"./executionError.js";import"../geometry.js";import"./ensureType.js";import"./typedArrayUtil.js";import"./maybe.js";import"./Logger.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./string.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./ArcadeDate.js";import"./datetime.js";import"./ImmutableArray.js";import"./number3.js";import"./locale.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./arcadeTimeUtils.js";import"../layers/support/FieldsIndex.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./TimeReference.js";import"../core/Clonable.js";import"../kernel.js";import"../core/urlUtils.js";import"./hash.js";import"../request.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./sizeVariableUtils.js";function b(r,t){return r&&r.domain?"coded-value"===r.domain.type||"codedValue"===r.domain.type?m.convertObjectToArcadeDictionary({type:"codedValue",name:r.domain.name,dataType:v[r.field.type],codedValues:r.domain.codedValues.map((r=>({name:r.name,code:r.code})))},p(t)):m.convertObjectToArcadeDictionary({type:"range",name:r.domain.name,dataType:v[r.field.type],min:r.domain.min,max:r.domain.max},p(t)):null}function h(v){"async"===v.mode&&(v.functions.domain=function(n,m){return v.standardFunctionAsync(n,m,(async(p,c,d)=>{if(r(d,2,3,n,m),t(d[0]))return b(o(d[0],i(d[1]),void 0===d[2]?void 0:e(d[2])),n);if(s(d[0]))return await d[0]._ensureLoaded(),b(a(i(d[1]),d[0],null,void 0===d[2]?void 0:e(d[2])),n);throw new g(n,w.InvalidParameter,m)}))},v.functions.subtypes=function(o,e){return v.standardFunctionAsync(o,e,(async(i,a,c)=>{if(r(c,1,1,o,e),t(c[0])){const r=n(c[0]);return r?m.convertObjectToArcadeDictionary(r,p(o)):null}if(s(c[0])){await c[0]._ensureLoaded();const r=c[0].subtypes();return r?m.convertObjectToArcadeDictionary(r,p(o)):null}throw new g(o,w.InvalidParameter,e)}))},v.functions.domainname=function(o,n){return v.standardFunctionAsync(o,n,(async(m,p,u)=>{if(r(u,2,4,o,n),t(u[0]))return c(u[0],i(u[1]),u[2],void 0===u[3]?void 0:e(u[3]));if(s(u[0])){await u[0]._ensureLoaded();const r=a(i(u[1]),u[0],null,void 0===u[3]?void 0:e(u[3]));return d(r,u[2])}throw new g(o,w.InvalidParameter,n)}))},v.signatures.push({name:"domainname",min:2,max:4}),v.functions.domaincode=function(o,n){return v.standardFunctionAsync(o,n,(async(m,p,c)=>{if(r(c,2,4,o,n),t(c[0]))return u(c[0],i(c[1]),c[2],void 0===c[3]?void 0:e(c[3]));if(s(c[0])){await c[0]._ensureLoaded();const r=a(i(c[1]),c[0],null,void 0===c[3]?void 0:e(c[3]));return l(r,c[2])}throw new g(o,w.InvalidParameter,n)}))},v.signatures.push({name:"domaincode",min:2,max:4})),v.functions.text=function(t,o){return v.standardFunctionAsync(t,o,((e,i,a)=>{if(r(a,1,2,t,o),!s(a[0]))return y(a[0],a[1]);{const r=j(a[1],"");if(""===r)return a[0].castToText();if("schema"===r.toLowerCase())return a[0].convertToText("schema",e.abortSignal);if("featureset"===r.toLowerCase())return a[0].convertToText("featureset",e.abortSignal)}}))},v.functions.gdbversion=function(o,e){return v.standardFunctionAsync(o,e,(async(i,a,n)=>{if(r(n,1,1,o,e),t(n[0]))return n[0].gdbVersion();if(s(n[0]))return(await n[0].load()).gdbVersion;throw new g(o,w.InvalidParameter,e)}))},v.functions.schema=function(o,e){return v.standardFunctionAsync(o,e,(async(i,a,n)=>{if(r(n,1,1,o,e),s(n[0]))return await n[0].load(),m.convertObjectToArcadeDictionary(n[0].schema(),p(o));if(t(n[0])){const r=f(n[0]);return r?m.convertObjectToArcadeDictionary(r,p(o)):null}throw new g(o,w.InvalidParameter,e)}))}}export{h as registerFunctions};