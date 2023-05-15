/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import r from"../core/Error.js";async function e(e,t){try{return await createImageBitmap(e)}catch(e){throw new r("request:server",`Unable to load ${t}`,{url:t,error:e})}}export{e as c};
