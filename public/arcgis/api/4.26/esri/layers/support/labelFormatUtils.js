// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/Logger ../../core/maybe ../../intl/date ../../intl/number ./fieldUtils ./labelUtils ../../support/arcadeOnDemand".split(" "),function(t,k,l,u,v,p,w,x,q,y){function r(b,f){if(null==b)return"";const a=f.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type)for(var g of a.codedValues){if(g.code===b)return g.name}else if("range"===a.type){g=+b;const h="range"in a?a.range[1]:a.maxValue;if(("range"in a?a.range[0]:a.minValue)<=g&&g<=h)return a.name}"date"===
f.type||"esriFieldTypeDate"===f.type?b=p.formatDate(b,p.convertDateFormatToIntlOptions("short-date")):x.isNumericField(f)&&(b=w.formatNumber(+b));return b||""}const m=u.getLogger("esri.layers.support.labelFormatUtils"),n={type:"simple",evaluate(){return null}},z={getAttribute(b,f){return b.field(f)}};k.createLabelFunction=async function(b,f,a){if(!b||!b.symbol||!f)return n;const g=b.where,h=q.getLabelExpression(b);b=g?await new Promise((e,d)=>t(["../../core/sql/WhereClause"],e,d)):null;if("arcade"===
h.type){const e=await y.createLabelExpression(h.expression,a,f);if(v.isNone(e))return n;a={type:"arcade",evaluate(d){try{const c=e.evaluate({$feature:"attributes"in d?e.repurposeFeature(d):d});if(null!=c)return c.toString()}catch(c){m.error(new l("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:d,expression:h}))}return null},needsHydrationToEvaluate(){return null==q.getSingleFieldArcadeExpression(h.expression)}}}else a={type:"simple",evaluate(e){return h.expression.replace(/{[^}]*}/g,
d=>{var c=d.slice(1,-1);c=f.get(c);if(!c)return d;d=null;"attributes"in e?e&&e.attributes&&(d=e.attributes[c.name]):d=e.field(c.name);return null==d?"":r(d,c)})}};if(g){let e;try{e=b.WhereClause.create(g,f)}catch(c){return m.error(new l("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:g,error:c})),n}const d=a.evaluate;a.evaluate=c=>{const A="attributes"in c?void 0:z;try{if(e.testFeature(c,A))return d(c)}catch(B){m.error(new l("bad-where-clause","Encountered an error when evaluating where clause for feature",
{where:g,feature:c,error:B}))}return null}}return a};k.formatField=r;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});