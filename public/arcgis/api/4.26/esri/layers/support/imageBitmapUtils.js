// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error"],function(a,c){a.createBitmap=async function(d,b){try{return await createImageBitmap(d)}catch(e){throw new c("request:server",`Unable to load ${b}`,{url:b,error:e});}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});