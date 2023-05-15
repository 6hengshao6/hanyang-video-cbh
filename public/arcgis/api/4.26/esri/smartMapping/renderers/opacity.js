// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/maybe ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/visualVariables/OpacityVariable ./support/utils ../statistics/summaryStatistics ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(k,g,l,m,n,p,h,q,r,t,f){async function u(b){if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new g("opacity-visual-variable:missing-parameters",
"'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.view)throw new g("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");b.forBinning&&r.verifyBinningParams(b,"opacity-visual-variable");const a={...b,layer:b.layer};var c=b.forBinning?f.binningCapableLayerTypes:f.featureCapableLayerTypes;b=f.createLayerAdapter(a.layer,c,b.forBinning);if(!b)throw new g("opacity-visual-variable:invalid-parameters",
"'layer' must be one of these types: "+f.getLayerTypeLabels(c).join(", "));a.layer=b;c=l.isSome(a.signal)?{signal:a.signal}:null;await b.load(c);c=await t.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(b=h.verifyBasicFieldValidity(b,c,"opacity-visual-variable:invalid-parameters"))throw b;return a}k.createVisualVariable=async function(b){var a=await u(b);b=null;b=a.statistics?a.statistics:await q({layer:a.layer,field:a.field,valueExpression:a.valueExpression,
sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:a.normalizationField?"field":void 0,normalizationField:a.normalizationField,minValue:a.minValue,maxValue:a.maxValue,view:a.view,signal:a.signal});var c=a.layer,d=a.field;c="date"===(d&&"function"!==typeof d?c.getField(d):null)?.type;var e=h.createStopValues(b);e=(c=h.getDefaultDataRange(b,c,!0))||[e[0],e[4]];d=new p({field:d,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:a.normalizationField,
stops:[{value:e[0],opacity:.3},{value:e[1],opacity:1}],legendOptions:a.legendOptions});a=new n({type:"opacity",minSliderValue:null!=a.minValue?a.minValue:b.min,maxSliderValue:null!=a.maxValue?a.maxValue:b.max});a=new m({visualVariables:[a]});return Promise.resolve({visualVariable:d,statistics:b,defaultValuesUsed:!!c,authoringInfo:a})};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});