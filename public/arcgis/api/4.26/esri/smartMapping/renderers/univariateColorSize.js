// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/maybe ../../renderers/support/AuthoringInfo ../../renderers/support/ClassBreakInfo ../../renderers/visualVariables/support/SizeStop ../../renderers/visualVariables/support/visualVariableUtils ./color ./size ./support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/support/aboveAndBelowUtils ../../symbols/support/cimSymbolUtils ../../symbols/support/Symbol3DMaterial".split(" "),function(v,n,x,I,y,p,t,z,w,
u,A,B,q,J,K,L){async function M(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new n("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new n("univariate-colorsize-visual-variables:missing-parameters","View is required when 'valueExpression' is specified");if("above-and-below"===a.theme&&a.sizeOptions?.sizeOptimizationEnabled)throw new n("univariate-colorsize-visual-variables:invalid-parameters",
"sizeOptimizationEnabled cannot be true for 'above-and-below' theme");a.forBinning&&A.verifyBinningParams(a,"univariate-colorsize-visual-variables");const b={...a,layer:a.layer};var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new n("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));b.layer=a;b.theme=b.theme||b.colorOptions?.theme?b.theme:
"high-to-low";if("90-10"===b.theme)throw new n("univariate-colorsize-visual-variables:not-supported","Only 'high-to-low', 'above-and-below', 'above', 'below' themes are supported.");c=x.isSome(b.signal)?{signal:b.signal}:null;await a.load(c);c=await B.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=u.verifyBasicFieldValidity(a,c,"univariate-colorsize-visual-variables:invalid-parameters"))throw a;return b}async function N(a){if(!(a&&a.layer&&
(a.field||a.valueExpression||a.sqlExpression)))throw new n("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new n("univariate-colorsize-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&A.verifyBinningParams(a,"univariate-colorsize-continuous-renderer");const b={...a,layer:a.layer};b.symbolType=
b.symbolType||"2d";b.colorOptions||(b.colorOptions={});b.colorOptions.isContinuous=b.colorOptions.isContinuous??!1;var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new n("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));b.layer=a;c=x.isSome(b.signal)?{signal:b.signal}:null;await a.load(c);if("above-and-below"===b.theme&&b.symbolOptions){if(b.symbolType.includes("3d-volumetric"))throw new n("univariate-colorsize-continuous-renderer:invalid-parameters",
"'symbolOptions' is applicable for '2d' and '3d-flat' 'symbolType' only");if("point"!==a.geometryType&&"polygon"!==a.geometryType)throw new n("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' only apply to layers with 'point' or 'polygon' geometryType");}c=await B.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=u.verifyBasicFieldValidity(a,c,"univariate-colorsize-continuous-renderer:invalid-parameters"))throw a;
return b}function C(a,b){"type"in a&&"cim"===a.type?K.applyCIMSymbolColor(a,b):"type"in a&&a.type.includes("3d")?a.symbolLayers.forEach(c=>{"material"in c&&null!=c.material&&"color"in c.material&&(c.material?c.material.color=b:c.material=new L.Symbol3DMaterial({color:b}))}):"color"in a&&(a.color=b)}function D(a,b,c=!0){const d=b?.authoringInfo?.clone(),e=b.size.visualVariables.map(g=>g.clone());c?e.push(b.color.visualVariable.clone()):d.visualVariables=d.visualVariables?.filter(g=>"size"===g.type);
e.push(...a.visualVariables.filter(g=>"target"in g&&"outline"===g.target).map(g=>g.clone()));a.authoringInfo=d;a.visualVariables=e}async function O(a,b,c,d){const e=b[0];b=b[1];const g=Math.round((b-e)/2)+e,h=a.clone();h.stops=[new p({value:c[0],size:b}),new p({value:c[1],size:g}),new p({value:c[2],size:e}),new p({value:c[3],size:g}),new p({value:c[4],size:b})];a.stops=[new p({value:d[0],size:t.getSize(h,d[0])}),new p({value:d[1],size:t.getSize(h,d[1])}),new p({value:d[2],size:t.getSize(h,d[2])}),
new p({value:d[3],size:t.getSize(h,d[3])}),new p({value:d[4],size:t.getSize(h,d[4])})]}async function P(a,b,c,d){a=a.find(h=>"width-and-depth"!==h.axis&&!h.target);const e="number"===typeof a?.minSize?a?.minSize:null,g="number"===typeof a?.maxSize?a?.maxSize:null;if(null!=a?.minDataValue&&null!=e&&null!=g)if(d)if("above-and-below"===d){a.minDataValue=null;a.maxDataValue=null;a.minSize=null;a.maxSize=null;d=u.createStopValuesForAboveBelow(c);const h=u.clampAboveAndBelowStopValues(d,c);await O(a,[e,
g],d,h);b.stops.forEach((f,l)=>f.value=h[l])}else{const {minDataValue:h,maxDataValue:f}=a,l=u.createDefaultStopValues(h,f,5);b.stops.forEach((m,k)=>m.value=l[k]);a.minDataValue=l[0];a.maxDataValue=l[l.length-1]}else a.minDataValue=b.stops[0].value,a.maxDataValue=b.stops[b.stops.length-1].value}async function E(a){a=await M(a);var b=z.createVisualVariable,c={...a},d=c.colorOptions,e=c.theme||d?.theme,g=c.legendOptions||c.colorOptions?.legendOptions;delete c.sizeOptions;delete c.colorOptions;b=await b.call(z,
{...c,...d,statistics:c.statistics,theme:e,legendOptions:g});const {visualVariable:h,statistics:f}=b;c=w.createVisualVariables;d={...a};const {sizeOptions:l,theme:m}=d;e=d.legendOptions||d.sizeOptions?.legendOptions;delete d.sizeOptions;delete d.colorOptions;var k=await c.call(w,{...d,...l,statistics:f||d.statistics,theme:"above-and-below"===m?null:m,legendOptions:e}),r=k.visualVariables;await P(r,h,f,a.theme);c=k.basemapId;d=k.basemapTheme;e=b.defaultValuesUsed;g={visualVariable:h,colorScheme:b.colorScheme};
r={visualVariables:r,sizeScheme:k.sizeScheme};const {theme:F,minValue:Q,maxValue:R}=a;a=b.authoringInfo.visualVariables[0].clone();k=k.authoringInfo.visualVariables[0].clone();"above-and-below"===F&&(b=b.visualVariable.stops,a.minSliderValue=k.minSliderValue=Q??b[0].value,a.maxSliderValue=k.maxSliderValue=R??b[b.length-1].value,k.theme="above-and-below");a=new I({type:"univariate-color-size",univariateTheme:F,visualVariables:[a,k]});return{basemapId:c,basemapTheme:d,statistics:f,defaultValuesUsed:e,
color:g,size:r,authoringInfo:a}}async function G(a){a=await N(a);var b=w.createContinuousRenderer,c={...a},d={...c.sizeOptions};delete c.sizeOptions;delete c.colorOptions;delete d.sizeOptimizationEnabled;const {renderer:e,statistics:g,defaultValuesUsed:h}=await b.call(w,{...c,...d});b={...a};c=b.symbolType;d=!!c?.includes("3d-volumetric");delete b.symbolType;delete b.defaultSymbolEnabled;if(b.worldScale=d)b.sizeOptions={...b.sizeOptions},b.sizeOptions.axis="3d-volumetric-uniform"===c?"all":"height";
b.statistics=g;b=await E(b);if("above-and-below"===a.theme){var f=a.symbolOptions,l=a.layer;c=f?.symbols?"custom":f?.symbolStyle;var m=a.colorOptions?.isContinuous;D(e,b,m);if(c||!m){d=b.size.visualVariables[0].stops;l=l.geometryType;!f?.symbolStyle&&!f?.symbols||"point"!==l&&"polygon"!==l?(f=e.classBreakInfos[0].symbol,f={above:f.clone(),below:f.clone()}):f=f.symbols||J.getAboveAndBelowSymbols(f.symbolStyle);const {above:k,below:r}=f;m||(m=b.color.colorScheme.colors,f=m[0],C(k,m[m.length-1]),C(r,
f));e.classBreakInfos=[new y({minValue:-H,maxValue:d[2].value,symbol:r}),new y({minValue:d[2].value,maxValue:H,symbol:k})];c&&e.authoringInfo&&(e.authoringInfo.univariateSymbolStyle=c)}}else D(e,b);return{renderer:e,statistics:g,defaultValuesUsed:h,color:a.colorOptions?.isContinuous||"above-and-below"!==a.theme?b.color:null,size:b.size,basemapId:b.basemapId,basemapTheme:b.basemapTheme}}const H=2**53-1;v.createContinuousRenderer=async function(a){return G(a)};v.createRenderer=G;v.createVisualVariables=
E;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});