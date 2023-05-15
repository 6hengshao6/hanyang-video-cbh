// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../renderers/support/rasterRendererHelper","../support/utils"],function(d,e,p){d.createRenderer=async function(a){a=await p.processRasterRendererParameters(a);const f=[a.bandId||0];var b={bandIds:f,stretchType:a.stretchType,includeStatisticsInStretch:a.includeStatisticsInStretch};const g=a.layer,{rasterInfo:h}=g;let c=e.createStretchRenderer(h,b);a.estimateStatisticsHistograms&&c.dynamicRangeAdjustment&&(await g.updateRasterInfoWithEstimatedStats({renderingRule:a.renderingRule,
signal:a.signal}),c=e.createStretchRenderer(h,b));b=c;const {gamma:k,useGamma:l,dynamicRangeAdjustment:m,colorRamp:n}=a;null!=k&&(b.gamma=[k]);null!=l&&(b.useGamma=l);null!=m&&(b.dynamicRangeAdjustment=m);void 0!==n&&(b.colorRamp=n);return{renderer:c,bandId:f[0]}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});