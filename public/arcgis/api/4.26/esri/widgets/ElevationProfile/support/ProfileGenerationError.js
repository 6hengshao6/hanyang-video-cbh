// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],function(b,c){b.ProfileGenerationErrorCause=void 0;(function(a){a.TooComplex="too-complex";a.InvalidGeometry="invalid-geometry";a.InvalidElevationInfo="invalid-elevation-info";a.ElevationQueryError="elevation-query-error"})(b.ProfileGenerationErrorCause||(b.ProfileGenerationErrorCause={}));let h=function(a){function d(f){var e=g.call(this,"profile could not be generated");e.cause=f;e.type="ProfileGenerationError";return e}c._inherits(d,
a);var g=c._createSuper(d);return c._createClass(d)}(c._wrapNativeSuper(Error));b.ProfileGenerationError=h;b.isProfileGenerationError=function(a){return"ProfileGenerationError"===a.type};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});