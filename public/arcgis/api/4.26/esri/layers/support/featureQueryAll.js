// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../../rest/support/Query"],function(d,l,m){function g(a){return f(a)*h(a)}function h(a){return a.capabilities.query.maxRecordCount||2E3}function f(a){return a.capabilities.query.supportsMaxRecordCountFactor?m.MAX_MAX_RECORD_COUNT_FACTOR:1}d.getMaxRecordCountFactor=f;d.getMaximumQuerySize=g;d.getMaximumRecordCount=h;d.queryAllJSON=async function(a,b,n){b=b.clone();a.capabilities.query.supportsMaxRecordCountFactor&&(b.maxRecordCountFactor=f(a));const k=g(a),p=a.capabilities.query.supportsPagination;
b.start=0;b.num=k;let c=null;for(;;){const e=await a.source.queryFeaturesJSON(b,n);l.isNone(c)?c=e:c.features=c.features.concat(e.features);c.exceededTransferLimit=e.exceededTransferLimit;if(!p||!e.exceededTransferLimit)break;b.start+=k}return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});