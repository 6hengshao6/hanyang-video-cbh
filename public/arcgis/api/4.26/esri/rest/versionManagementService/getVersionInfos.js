// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","./support/GetVersionInfosResult"],function(e,f,c,g){e.getVersionInfos=async function(b,d,a){b=c.parseUrl(b);d=d.toJSON();a=c.asValidOptions(b.query,{query:c.encode({...d,f:"json"}),...a});({data:a}=await f(`${b.path}/versionInfos`,a));return a?g.fromJSON(a):null};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});