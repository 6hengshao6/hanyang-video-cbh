// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/unitUtils"],function(m,f,g){function p(a,b,d){return null===a||void 0===a?null:g.convertUnit(a*b,"meters",d)}function h(a,b,d){return null===a||void 0===a?null:g.convertUnit(a*b,"meters",d)}m.convertSamples=function(a,b){if(f.isNone(a)||f.isNone(b))return null;const {samples:d,spatialReference:e}=a,{distance:c,elevation:k}=b;a=g.getMetersPerUnitForSR(e);b=g.getMetersPerVerticalUnitForSR(e);const q=d.length,r=Array(q);for(let l=0;l<q;++l){const n=
d[l],t=n.sampledZ,u=n.coordinate;r[l]={x:u[0],y:u[1],z:t,distance:p(n.distance,a,c),elevation:h(t,b,k)}}return r};m.convertStatistics=function(a,b){if(f.isNone(a)||f.isNone(b)||f.isNone(a.statistics)||f.isNone(a.spatialReference))return null;const {distance:d,elevation:e}=b,{statistics:c,spatialReference:k}=a;a=g.getMetersPerUnitForSR(k);b=g.getMetersPerVerticalUnitForSR(k);return{maxDistance:p(c.maxDistance,a,d),minElevation:h(c.minElevation,b,e),maxElevation:h(c.maxElevation,b,e),avgElevation:h(c.avgElevation,
b,e),elevationGain:h(c.elevationGain,b,e),elevationLoss:h(c.elevationLoss,b,e),maxPositiveSlope:c.maxPositiveSlope,maxNegativeSlope:c.maxNegativeSlope,avgPositiveSlope:c.avgPositiveSlope,avgNegativeSlope:c.avgNegativeSlope}};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});