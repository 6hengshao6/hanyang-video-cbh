// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils"],function(e,f,c){e.deleteVersion=async function(b,d,a){b=c.parseUrl(b);d=d.toJSON();a=c.asValidOptions(b.query,{query:c.encode({...d,f:"json"}),...a,method:"post"});({data:a}=await f(`${b.path}/delete`,a));return a?a.success:null};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});