// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["require","exports","./maybe"],function(e,c,d){c.parseWhereClause=async function(a,b){const {WhereClause:f}=await new Promise((g,h)=>e(["./sql/WhereClause"],g,h));return f.create(a,b)};c.sqlAnd=function(a,b){return d.isSome(a)?d.isSome(b)?`(${a}) AND (${b})`:a:b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});