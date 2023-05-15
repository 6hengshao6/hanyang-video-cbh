/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../request.js";import a from"../geometry/Extent.js";import t from"../geometry/Point.js";import l from"../geometry/SpatialReference.js";import i from"../layers/support/RasterInfo.js";import{p as s,e as n,a as r}from"./utils4.js";import o from"../rest/support/FeatureSet.js";async function u(u,m,f){const p=s(u),{renderingRule:c,sourceJSON:d}=m||{},h=c?JSON.stringify(c.rasterFunctionDefinition||c):null,g=n({...p.query,renderingRule:h,f:"json"}),v=r(g,f);u=p.path;const y=d||await e(u,v).then((e=>e.data)),S=y.hasRasterAttributeTable?e(`${u}/rasterAttributeTable`,v):null,V=y.hasColormap?e(`${u}/colormap`,v):null,x=y.hasHistograms?e(`${u}/histograms`,v):null,b=y.currentVersion>=10.3?e(`${u}/keyProperties`,v):null,D=y.hasMultidimensions?e(`${u}/multidimensionalInfo`,v):null,R=await Promise.allSettled([S,V,x,b,D]);let T=null;if(y.minValues&&y.minValues.length===y.bandCount){T=[];for(let e=0;e<y.minValues.length;e++)T.push({min:y.minValues[e],max:y.maxValues[e],avg:y.meanValues[e],stddev:y.stdvValues[e]})}const j=a.fromJSON(y.extent),w=Math.ceil(j.width/y.pixelSizeX-.1),J=Math.ceil(j.height/y.pixelSizeY-.1),N=l.fromJSON(y.spatialReference||y.extent.spatialReference),O="fulfilled"===R[0].status&&R[0].value?o.fromJSON(R[0].value.data):null,I="fulfilled"===R[1].status?R[1].value?.data.colormap:null,z="fulfilled"===R[2].status?R[2].value?.data.histograms:null,C="fulfilled"===R[3].status?R[3].value?.data??{}:{},$="fulfilled"===R[4].status?R[4].value?.data.multidimensionalInfo:null;$?.variables?.length&&$.variables.forEach((e=>{e.statistics?.length&&e.statistics.forEach((e=>{e.avg=e.mean,e.stddev=e.standardDeviation}))}));const{defaultVariable:P,serviceDataType:E}=y;P&&P!==C.DefaultVariable&&(C.DefaultVariable=P),E&&E.includes("esriImageServiceDataTypeVector")&&!E.includes(C.DataType)&&(C.DataType=E.replace("esriImageServiceDataType",""));let M=y.noDataValue;return y.noDataValues?.length&&y.noDataValues.some((e=>e!==M))&&(M=y.noDataValues),new i({width:w,height:J,bandCount:y.bandCount,extent:a.fromJSON(y.extent),spatialReference:N,pixelSize:new t({x:y.pixelSizeX,y:y.pixelSizeY,spatialReference:N}),pixelType:y.pixelType.toLowerCase(),statistics:T,attributeTable:O,colormap:I,histograms:z,keyProperties:C,noDataValue:M,multidimensionalInfo:$})}function m(e,a,t){return u(e,{sourceJSON:a},t)}function f(e,a,t){return u(e,{renderingRule:a},t)}export{m as f,f as g};
