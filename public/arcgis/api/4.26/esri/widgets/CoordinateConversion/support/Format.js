// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Accessor ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../geometry/coordinateFormatter ../../../geometry/projection ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils ./coordinateConversionUtils ../../../geometry/SpatialReference".split(" "),
function(q,g,e,w,r,x,h,C,D,E,y,m,v,z,A,n,t){e=function(k){function p(a){a=B.call(this,a);a.conversionInfo=null;a.coordinateSegments=null;a.defaultPattern=null;a.name=null;a.viewModel=null;return a}q._inherits(p,k);var B=q._createSuper(p);k=p.prototype;k.convert=async function(a){if(!n.isValidPoint(a))throw new r("format:invalid-point","Could not convert invalid point.",{point:a});const b=this.get("conversionInfo.convert");if(b)return Promise.resolve().then(()=>b(a));const c=await this._project(a,
this.spatialReference),d=await this._getCoordinate(c);return{location:c,coordinate:d}};k.getConversionStrategy=function(){const a=this._viewSpatialReference;return this.get("conversionInfo.convert")||this.get("viewModel.formatterAvailable")||"xy"===this.name&&(a.isWebMercator||a.isWGS84)||"basemap"===this.name?"client":"server"};k.getDisplayCoordinate=function(a){if(!a)return null;if(!this.coordinateSegments||!this.currentPattern)return a;let b=this.currentPattern;a=this._getSegmentMatches(a,!1);
for(let c=this.coordinateSegments.length-1;0<=c;c--)b=b.replace(this.coordinateSegments[c].alias,a[c]);return b};k.parseUserInput=function(a){const {defaultPattern:b,_additionalCharactersPattern:c,coordinateSegments:d}=this;if(!b||!c)return"";let l=b.replace(c,"");a=a.replace(c,"");a=this._getSegmentMatches(a,!0);if(d)for(let f=d.length-1;0<=f;f--)l=l.replace(d[f].alias,a[f]);return l};k._getSegmentMatches=function(a,b){const c=[],{coordinateSegments:d}=this;if(!d)return c;for(let u=0;u<d.length;u++){var l=
d[u],f=a.match(l.searchPattern);f?(f=f[0],a=a.replace(f,"").trim(),l.substitution&&(l=b?l.substitution.input(f):l.substitution.output(f))&&(f=`${l}`),c.push(f)):c.push("")}return c};k.reverseConvert=async function(a){const b=this.parseUserInput(a),c=this.get("conversionInfo.reverseConvert");let d;if(c)d=c(b);else if("xy"===this.name||"basemap"===this.name)d=n.fromXY(b,this.spatialReference);else if(this.viewModel?.formatterAvailable)switch(this.name){case "dd":case "ddm":case "dms":d=m.fromLatitudeLongitude(b,
this.spatialReference);break;case "mgrs":d=m.fromMgrs(b,this.spatialReference,"automatic");break;case "utm":d=m.fromUtm(b,this.spatialReference,"latitude-band-indicators");break;case "usng":d=m.fromUsng(b,this.spatialReference);break;default:d=null}if(!d)throw new r("format:invalid-input","Could not parse input into point.",{userInput:a});return this._project(d,this._viewSpatialReference)};k._getCoordinate=async function(a){var b=this.get("viewModel.view.scale");if(!n.isValidPoint(a))throw new r("format:invalid-point",
"Could not transform invalid point into coordinate.",{point:a});if(this.get("viewModel.formatterAvailable")||"basemap"===this.name||"xy"===this.name)switch(this.name){case "dd":case "ddm":case "dms":return b=n.getDegreePrecision(b),m.toLatitudeLongitude(a,this.name,b);case "mgrs":return m.toMgrs(a,"automatic",5,!1);case "usng":return m.toUsng(a,5,!1);case "utm":return m.toUtm(a,"latitude-band-indicators",!0)}return n.pointToCoordinate(a,b)};k._project=async function(a,b){return z.equals(a.spatialReference,
b)||!b?a:this.viewModel?.formatterAvailable&&v.isLoaded()?v.project(a,b):!this.viewModel?.formatterAvailable&&(a=A.project(a,b),x.isSome(a))?a:null};q._createClass(p,[{key:"currentPattern",get:function(){return this._get("currentPattern")||this._get("defaultPattern")},set:function(a){this._set("currentPattern",a)}},{key:"label",get:function(){return this.name??""},set:function(a){this._overrideIfSome("label",a)}},{key:"hasDisplayProperties",get:function(){return!(!this.defaultPattern||!this.coordinateSegments)}},
{key:"spatialReference",get:function(){return"basemap"===this.name?this._viewSpatialReference:this.conversionInfo?.spatialReference??t.WGS84},set:function(a){this._overrideIfSome("spatialReference",a)}},{key:"_viewSpatialReference",get:function(){return this.get("viewModel.view.spatialReference")||t.WGS84}},{key:"_additionalCharactersPattern",get:function(){var a=this.get("coordinateSegments");if(!a)return null;a=a.map(b=>b.alias);a=this.currentPattern.replace(new RegExp(`["nsew${a.join()}]`,"gi"),
"").replace(/ /g,"");return new RegExp(`[${a}]`,"g")}},{key:"test",get:function(){return{additionalCharactersPattern:this._additionalCharactersPattern}}}]);return p}(w);g.__decorate([h.property()],e.prototype,"conversionInfo",void 0);g.__decorate([h.property()],e.prototype,"coordinateSegments",void 0);g.__decorate([h.property()],e.prototype,"currentPattern",null);g.__decorate([h.property()],e.prototype,"label",null);g.__decorate([h.property()],e.prototype,"defaultPattern",void 0);g.__decorate([h.property({readOnly:!0})],
e.prototype,"hasDisplayProperties",null);g.__decorate([h.property()],e.prototype,"name",void 0);g.__decorate([h.property({type:t})],e.prototype,"spatialReference",null);g.__decorate([h.property()],e.prototype,"viewModel",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"_viewSpatialReference",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"_additionalCharactersPattern",null);return e=g.__decorate([y.subclass("esri.widgets.CoordinateConversion.support.Format")],e)});