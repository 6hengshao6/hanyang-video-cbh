// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./BuildingNumericFilterViewModel ./support/buildingLayerUtils ./support/filterUtils ./support/validation".split(" "),function(k,f,l,h,e,w,x,p,q,n,r,t){e=function(u){function g(){var a=v.apply(this,arguments);a._createdPhaseFieldName=null;a._demolishedPhaseFieldName=
null;a._parseValueFromFilter=b=>{var c=a._createdPhaseFieldName;c=new RegExp(`${c}\\s*<=\\s*(\\d+)\\s*OR\\s*${c}\\s*IS\\s*NULL`,"gi");var d=a._demolishedPhaseFieldName;d=new RegExp(`${d}\\s*>\\s*(\\d+)\\s*OR\\s*${d}\\s*IS\\s*NULL`,"gi");for(const {filterExpression:m}of b.filterBlocks?.items??[])if(b=m?c.exec(m)??d.exec(m):null)return parseInt(b[1],10);return null};return a}k._inherits(g,u);var v=k._createSuper(g);g.prototype._setup=function(){const a=[];this.layers.forEach(c=>{const d=n.findFieldInfoByModelName(c,
"createdphase");l.isSome(d)&&(this._createdPhaseFieldName=d.fieldName,a.push(d));c=n.findFieldInfoByModelName(c,"demolishedphase");l.isSome(c)&&(this._demolishedPhaseFieldName=c.fieldName,a.push(c))});this._domainInfo=t.getDomainInfo(a);var b=this._valueBeforeReady;this._set("state","ready");this._valueBeforeReady=null;0<this.allowedValues.length?(b=b??r.getValueFromFilters(this.layers,this._parseValueFromFilter),this.select(l.unwrapOr(b,this._lastValue))):this.clear()};k._createClass(g,[{key:"filterExpressions",
get:function(){if(!this.enabled)return{solid:null,xRay:null};var a=[],b=this._createdPhaseFieldName;b&&a.push(`(${b} <= ${this.value} OR ${b} IS NULL)`);(b=this._demolishedPhaseFieldName)&&a.push(`(${b} > ${this.value} OR ${b} IS NULL)`);a=a.join(" AND ");return{solid:a,xRay:a}}},{key:"_lastValue",get:function(){const a=this.allowedValues;return 0<a.length?a[a.length-1]:0}}]);return g}(q);f.__decorate([h.property({readOnly:!0})],e.prototype,"filterExpressions",null);f.__decorate([h.property()],e.prototype,
"_createdPhaseFieldName",void 0);f.__decorate([h.property()],e.prototype,"_demolishedPhaseFieldName",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,"_lastValue",null);return e=f.__decorate([p.subclass("esri.widgets.BuildingExplorer.BuildingPhase")],e)});