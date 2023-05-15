// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./BuildingNumericFilterViewModel ./support/buildingLayerUtils ./support/filterUtils ./support/validation".split(" "),function(g,f,l,h,d,x,y,n,p,q,r,t){d=function(u){function e(){var a=v.apply(this,arguments);a._levelFieldName=null;a._parseValueFromFilter=
b=>{const c=new RegExp(`${a._levelFieldName}\\s*=\\s*(\\d+)`,"gi"),w=new RegExp(`${a._levelFieldName}\\s*<\\s*(\\d+)`,"gi");for(const {filterMode:m,filterExpression:k}of b.filterBlocks?.items??[])if(null!=k&&(b=null,"solid"===m.type?b=c.exec(k):"x-ray"===m.type&&(b=w.exec(k)),b))return parseInt(b[1],10);return null};return a}g._inherits(e,u);var v=g._createSuper(e);e.prototype._setup=function(){const a=[];this.layers.forEach(c=>{c=q.findFieldInfoByModelName(c,"bldglevel");l.isSome(c)&&(this._levelFieldName=
c.fieldName,a.push(c))});this._domainInfo=t.getDomainInfo(a);var b=this._valueBeforeReady;this._set("state","ready");this._valueBeforeReady=null;b=b??r.getValueFromFilters(this.layers,this._parseValueFromFilter);l.isSome(b)?this.select(b):(this.enabled=!1,this.value=this._firstValue)};g._createClass(e,[{key:"filterExpressions",get:function(){return this.enabled&&this._levelFieldName?{xRay:`${this._levelFieldName} < ${this.value}`,solid:`${this._levelFieldName} = ${this.value}`}:{solid:null,xRay:null}}},
{key:"_firstValue",get:function(){const a=this.allowedValues;return 0<a.length?a[0]:0}}]);return e}(p);f.__decorate([h.property({readOnly:!0})],d.prototype,"filterExpressions",null);f.__decorate([h.property()],d.prototype,"_levelFieldName",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"_firstValue",null);return d=f.__decorate([n.subclass("esri.widgets.BuildingExplorer.BuildingLevel")],d)});