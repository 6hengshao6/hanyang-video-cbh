// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../../core/promiseUtils","../../../../layers/graphics/hydratedFeatures","../../../../support/arcadeOnDemand"],function(d,g,h,k,l){const m=g.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");d.clone=function(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}};d.createContext=
async function(a,b,c,f){a=a&&a.expression;if("string"!==typeof a)return null;var e="0"===a?0:null;if(null!=e)return{cachedResult:e};e=await l.loadArcade();h.throwIfAborted(c);c=e.arcadeUtils;a=c.createSyntaxTree(a);return c.dependsOnView(a)?(null!=f&&f.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(a),context:c.createExecContext(null,{sr:b}),modules:e}}};d.createContextWithoutExpressionSupport=function(a){a=a&&a.expression;
return"string"===typeof a&&(a="0"===a?0:null,null!=a)?{cachedResult:a}:null};d.createFeature=function(a,b,c){return a.arcadeUtils.createFeature(b.attributes,b.geometry,c)};d.execute=function(a){if(null!=a){if(null!=a.cachedResult)return a.cachedResult;var b=a.arcade;b=b?.modules.arcadeUtils.executeFunction(b.func,b.context);"number"!==typeof b&&(b=a.cachedResult=0);return b}return 0};d.extractExpressionInfo=function(a,b=!1){const c=(a=a&&a.featureExpressionInfo)&&a.expression;b||"0"===c||(a=null);
return a??null};d.setContextFeature=function(a,b){null!=a&&null==a.cachedResult&&(b&&a.arcade?(b._geometry&&(b._geometry=k.hydrateGeometry(b._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,b)):m.errorOncePerTick("Arcade support required but not provided"))};d.zeroContext={cachedResult:0};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});