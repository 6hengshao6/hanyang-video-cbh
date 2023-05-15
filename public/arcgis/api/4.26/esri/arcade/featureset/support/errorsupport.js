// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../executionError"],function(a,d,h){a.SqlErrorCodes=void 0;(function(b){b.InvalidFunctionParameters="InvalidFunctionParameters";b.UnsupportedSqlFunction="UnsupportedSqlFunction";b.UnsupportedOperator="UnsupportedOperator";b.UnsupportedSyntax="UnsupportedSyntax";b.UnsupportedIsRhs="UnsupportedIsRhs";b.UnsupportedIsLhs="UnsupportedIsLhs";b.InvalidDataType="InvalidDataType";b.CannotCastValue="CannotCastValue";b.MissingStatisticParameters=
"MissingStatisticParameters"})(a.SqlErrorCodes||(a.SqlErrorCodes={}));const k={[a.SqlErrorCodes.MissingStatisticParameters]:"Statistic does not have 1 or 0 Parameters",[a.SqlErrorCodes.InvalidFunctionParameters]:"Invalid parameters for call to {function}",[a.SqlErrorCodes.UnsupportedIsLhs]:"Unsupported left hand expression in is statement",[a.SqlErrorCodes.UnsupportedIsRhs]:"Unsupported right hand expression in is statement",[a.SqlErrorCodes.UnsupportedOperator]:"Unsupported operator - {operator}",
[a.SqlErrorCodes.UnsupportedSyntax]:"Unsupported syntax - {node}",[a.SqlErrorCodes.UnsupportedSqlFunction]:"Sql function not found \x3d {function}",[a.SqlErrorCodes.InvalidDataType]:"Invalid sql data type",[a.SqlErrorCodes.CannotCastValue]:"Cannot cast value to the required data type"};let m=function(b){function e(c,f){c=g.call(this,h.doSubstitutions(k[c],f));c.declaredRootClass="esri.arcade.featureset.support.sqlerror";Error.captureStackTrace&&Error.captureStackTrace(d._assertThisInitialized(c),
e);return c}d._inherits(e,b);var g=d._createSuper(e);return d._createClass(e)}(d._wrapNativeSuper(Error));a.FeatureSetErrorCodes=void 0;(function(b){b.NeverReach="NeverReach";b.NotImplemented="NotImplemented";b.Cancelled="Cancelled";b.InvalidStatResponse="InvalidStatResponse";b.InvalidRequest="InvalidRequest";b.RequestFailed="RequestFailed";b.MissingFeatures="MissingFeatures";b.AggregationFieldNotFound="AggregationFieldNotFound";b.DataElementsNotFound="DataElementsNotFound"})(a.FeatureSetErrorCodes||
(a.FeatureSetErrorCodes={}));const l={[a.FeatureSetErrorCodes.Cancelled]:"Cancelled",[a.FeatureSetErrorCodes.InvalidStatResponse]:"Invalid statistics response from service",[a.FeatureSetErrorCodes.InvalidRequest]:"Invalid request",[a.FeatureSetErrorCodes.RequestFailed]:"Request failed - {reason}",[a.FeatureSetErrorCodes.MissingFeatures]:"Missing features",[a.FeatureSetErrorCodes.AggregationFieldNotFound]:"Aggregation field not found",[a.FeatureSetErrorCodes.DataElementsNotFound]:"Data elements not found on service",
[a.FeatureSetErrorCodes.NeverReach]:"Encountered unreachable logic",[a.FeatureSetErrorCodes.NotImplemented]:"Not implemented"};let n=function(b){function e(c,f){c=g.call(this,h.doSubstitutions(l[c],f));c.declaredRootClass="esri.arcade.featureset.support.featureseterror";Error.captureStackTrace&&Error.captureStackTrace(d._assertThisInitialized(c),e);return c}d._inherits(e,b);var g=d._createSuper(e);return d._createClass(e)}(d._wrapNativeSuper(Error));a.FeatureSetError=n;a.FeatureSetErrorMessages=l;
a.SqlError=m;a.SqlErrorMessages=k;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});