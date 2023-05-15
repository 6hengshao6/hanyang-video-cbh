// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../networks/support/typeUtils","../utils","./support/QueryAssociationsResult"],function(f,g,h,e,k){function l(a){const {returnDeletes:c,elements:b,gdbVersion:m,moment:n}=a.toJSON(),p=JSON.stringify(b.map(d=>({globalId:d.globalId,networkSourceId:d.networkSourceId,terminalId:d.terminalId})));a=JSON.stringify(a.associationTypes.map(d=>h.associationTypeKebabDict.toJSON(d)));return{returnDeletes:c,elements:p,types:a,gdbVersion:m,moment:n}}f.queryAssociations=async function(a,
c,b){a=e.parseUrl(a);c={...l(c),f:"json"};c=e.encode({...a.query,...c});b=e.asValidOptions(c,{...b,method:"post"});({data:b}=await g(`${a.path}/associations/query`,b));return b?k.fromJSON(b):null};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});