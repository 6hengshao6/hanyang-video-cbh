/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import e from"../../../core/Accessor.js";import r from"../../../core/Error.js";import{i as s}from"../../../chunks/maybe.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as n}from"../../../core/accessorSupport/decorators/subclass.js";import{fromUsng as i,fromUtm as a,fromMgrs as c,fromLatitudeLongitude as p,toUtm as l,toUsng as u,toMgrs as m,toLatitudeLongitude as h}from"../../../geometry/coordinateFormatter.js";import{isLoaded as d,project as f}from"../../../geometry/projection.js";import{f as g}from"../../../chunks/unitUtils.js";import{project as j}from"../../../geometry/support/webMercatorUtils.js";import y from"../../../geometry/Point.js";import v from"../../../geometry/SpatialReference.js";import"../../../geometry/Extent.js";import"../../../chunks/string.js";import"../../../chunks/object.js";import"../../../core/lang.js";import"../../../geometry/Geometry.js";import"../../../core/JSONSupport.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/Handles.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/reader.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/writer.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../chunks/vec4.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/mat4.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";function k(t){return t>=500?6:t<500&&t>=50?7:t<50&&t>=5?8:9}function w(t){return"number"==typeof t&&isFinite(t)}function b(t){return!!t&&w(t.x)&&w(t.y)}function S(t,e){if(t.spatialReference.isGeographic&&e){const[r,s]=function(t,e){const r=k(e);return[t[0].toFixed(r),t[1].toFixed(r)]}([t.x,t.y],e);return`${r}, ${s}`}return`${t.x.toFixed(3)}, ${t.y.toFixed(3)}`}const P=["dd","dms","ddm","mgrs","usng","utm"];function R(t){return P.includes(t)}let _=class extends e{constructor(t){super(t),this.conversionInfo=null,this.coordinateSegments=null,this.defaultPattern=null,this.name=null,this.viewModel=null}get currentPattern(){return this._get("currentPattern")||this._get("defaultPattern")}set currentPattern(t){this._set("currentPattern",t)}get label(){return this.name??""}set label(t){this._overrideIfSome("label",t)}get hasDisplayProperties(){return!(!this.defaultPattern||!this.coordinateSegments)}get spatialReference(){return"basemap"===this.name?this._viewSpatialReference:this.conversionInfo?.spatialReference??v.WGS84}set spatialReference(t){this._overrideIfSome("spatialReference",t)}get _viewSpatialReference(){return this.get("viewModel.view.spatialReference")||v.WGS84}get _additionalCharactersPattern(){const t=this.get("coordinateSegments");if(!t)return null;const e=t.map((t=>t.alias)),r=this.currentPattern.replace(new RegExp(`["nsew${e.join()}]`,"gi"),"").replace(/\ /g,"");return new RegExp(`[${r}]`,"g")}get test(){return{additionalCharactersPattern:this._additionalCharactersPattern}}async convert(t){if(!b(t))throw new r("format:invalid-point","Could not convert invalid point.",{point:t});const e=this.get("conversionInfo.convert");if(e)return Promise.resolve().then((()=>e(t)));const s=await this._project(t,this.spatialReference);return{location:s,coordinate:await this._getCoordinate(s)}}getConversionStrategy(){const t=this._viewSpatialReference;return this.get("conversionInfo.convert")||this.get("viewModel.formatterAvailable")||"xy"===this.name&&(t.isWebMercator||t.isWGS84)||"basemap"===this.name?"client":"server"}getDisplayCoordinate(t){if(!t)return null;if(!this.coordinateSegments||!this.currentPattern)return t;let e=this.currentPattern;const r=this._getSegmentMatches(t,!1);for(let t=this.coordinateSegments.length-1;t>=0;t--){const s=this.coordinateSegments[t];e=e.replace(s.alias,r[t])}return e}parseUserInput(t){const{defaultPattern:e,_additionalCharactersPattern:r,coordinateSegments:s}=this;if(!e||!r)return"";let o=e.replace(r,"");t=t.replace(r,"");const n=this._getSegmentMatches(t,!0);if(s)for(let t=s.length-1;t>=0;t--){const e=s[t];o=o.replace(e.alias,n[t])}return o}_getSegmentMatches(t,e){const r=new Array,{coordinateSegments:s}=this;if(!s)return r;for(let o=0;o<s.length;o++){const n=s[o],i=t.match(n.searchPattern);if(!i){r.push("");continue}let a=i[0];if(t=t.replace(a,"").trim(),n.substitution){const t=e?n.substitution.input(a):n.substitution.output(a);t&&(a=`${t}`)}r.push(a)}return r}async reverseConvert(t){const e=this.parseUserInput(t),s=this.get("conversionInfo.reverseConvert");let o;if(s)o=s(e);else if("xy"===this.name||"basemap"===this.name)o=function(t,e){const r=t.includes(",")?",":" ",[s,o,n]=t.split(r).map((t=>{const e=t.trim();return e?Number(e):null}));if(!w(s)||!w(o))return null;const i=new y({x:s,y:o,spatialReference:e||v.WGS84});return n&&(i.z=n,i.hasZ=!0),i}(e,this.spatialReference);else if(this.viewModel?.formatterAvailable)switch(this.name){case"dd":case"ddm":case"dms":o=p(e,this.spatialReference);break;case"mgrs":{const t="automatic";o=c(e,this.spatialReference,t);break}case"utm":{const t="latitude-band-indicators";o=a(e,this.spatialReference,t);break}case"usng":o=i(e,this.spatialReference);break;default:o=null}if(!o)throw new r("format:invalid-input","Could not parse input into point.",{userInput:t});return this._project(o,this._viewSpatialReference)}async _getCoordinate(t){const e=this.get("viewModel.view.scale");if(!b(t))throw new r("format:invalid-point","Could not transform invalid point into coordinate.",{point:t});if(this.get("viewModel.formatterAvailable")||"basemap"===this.name||"xy"===this.name)switch(this.name){case"dd":case"ddm":case"dms":{const r=k(e);return h(t,this.name,r)}case"mgrs":return m(t,"automatic",5,!1);case"usng":return u(t,5,!1);case"utm":return l(t,"latitude-band-indicators",!0);default:return S(t,e)}return S(t,e)}async _project(t,e){if(g(t.spatialReference,e)||!e)return t;if(this.viewModel?.formatterAvailable&&d())return f(t,e);if(!this.viewModel?.formatterAvailable){const r=j(t,e);if(s(r))return r}return null}};t([o()],_.prototype,"conversionInfo",void 0),t([o()],_.prototype,"coordinateSegments",void 0),t([o()],_.prototype,"currentPattern",null),t([o()],_.prototype,"label",null),t([o()],_.prototype,"defaultPattern",void 0),t([o({readOnly:!0})],_.prototype,"hasDisplayProperties",null),t([o()],_.prototype,"name",void 0),t([o({type:v})],_.prototype,"spatialReference",null),t([o()],_.prototype,"viewModel",void 0),t([o({readOnly:!0})],_.prototype,"_viewSpatialReference",null),t([o({readOnly:!0})],_.prototype,"_additionalCharactersPattern",null),_=t([n("esri.widgets.CoordinateConversion.support.Format")],_);const x=_;export{R as a,x as default,b as i};
