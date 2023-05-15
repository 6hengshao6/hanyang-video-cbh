// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../intl ../../../core/arrayUtils ../../../core/Error ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/unitFormatUtils ../../../core/unitUtils ../css ./constants ./intlUtils ./niceScale ../../support/chartUtils ../../support/widgetUtils ../../../support/themeUtils ../../../intl/substitute ../../../intl/number".split(" "),function(x,la,K,L,w,k,M,y,B,N,v,O,P,Q,z,R,S,T){function U(a){a=new a.amCharts4Index.am4charts.XYCursor;a.trackable=!0;a.lineY.disabled=
!0;a.behavior="zoomXY";return a}function V(a){const c=a.theme,b=a.amChart.tooltip,{am4core:e}=a.amCharts4Index;b.id="series-tooltip";b.fitPointerToBounds=!0;b.pointerOrientation="vertical";b.zIndex=-1;b.getFillFromObject=!1;b.label.fontSize=c.seriesTooltipFontSize;b.label.fill=e.color(c.seriesTooltipLabelColor);b.label.padding(c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal,c.seriesTooltipPaddingVertical,c.seriesTooltipPaddingHorizontal);b.background.cornerRadius=c.tooltipBorderRadius;
b.background.stroke=null;b.background.fill=e.color(c.seriesTooltipBackgroundColor);b.background.padding(0,0,0,0);b.adapter.add("dy",()=>c.seriesTooltipSpacing*(0>=b.background.pointerY?1:-1));z.isRTL(a.params.container)&&(b.label.textAlign="middle")}function W(a){const {xAxis:c,theme:b}=a,{am4core:e}=a.amCharts4Index;c.numberFormatter=C(a,"distance");c.strictMinMax=!0;c.cursorTooltipEnabled=!1;c.title.visible=!1;a=c.renderer;a.line.visible=!1;a.minGridDistance=b.xAxisMinGridDistance;a.minLabelPosition=
b.xAxisMinLabelPosition;a.maxLabelPosition=b.xAxisMaxLabelPosition;a.fontWeight=b.axisFontWeight;a.fontSize=b.axisFontSize;a.baseGrid.disabled=!0;var d=a.labels.template;d.fontSize=b.axisLabelsFontSize;d.fontWeight=b.axisLabelsFontWeight;d.fill=e.color(b.axisLabelsColor);d.paddingTop=b.xAxisLabelsSpacing;d.horizontalCenter="left";d.paddingLeft=0;d=c.tooltip;d.id="axis-tooltip";d.background.fill=e.color(b.axisTooltipBackgroundColor);d.background.stroke=null;d.background.padding(0,0,0,0);d.label.fontSize=
b.axisTooltipFontSize;d.label.fill=e.color(b.axisTooltipLabelColor);d.label.padding(b.axisTooltipPaddingTop,b.axisTooltipPaddingHorizontal,b.axisTooltipPaddingBottom,b.axisTooltipPaddingHorizontal);a=a.grid.template;a.strokeOpacity=1;a.stroke=e.color(b.axisGridStroke)}function X(a){const {yAxis:c,theme:b}=a,{am4core:e}=a.amCharts4Index;c.numberFormatter=C(a,"elevation");c.title.visible=!1;c.cursorTooltipEnabled=!1;c.strictMinMax=!0;c.baseValue=v.getConfig().noDataValue;const d=c.renderer;d.inside=
!0;d.line.opacity=0;d.line.visible=!1;d.minGridDistance=b.yAxisMinGridDistance;d.minLabelPosition=b.yAxisMinLabelPosition;d.maxLabelPosition=b.yAxisMaxLabelPosition;d.fontWeight=b.axisFontWeight;d.fontSize=b.axisFontSize;d.baseGrid.disabled=!0;const f=d.labels.template;f.fontSize=b.axisLabelsFontSize;f.fontWeight=b.axisLabelsFontWeight;f.fill=e.color(b.axisLabelsColor);f.verticalCenter="bottom";f.paddingLeft=b.yAxisLabelSpacing;f.paddingBottom=0;const g=d.grid.template;g.strokeOpacity=1;g.stroke=
e.color(b.axisGridStroke);z.isRTL(a.params.container)&&(d.opposite=!0,f.textAlign="middle",f.paddingLeft=0,f.paddingRight=b.yAxisLabelSpacing)}function Y(a,{data:c,messages:b}){var {htmlContainer:e}=a.amChart;if(e){var d=k.isSome(c)&&c.refined;a.amChart.cursor.disabled=!d;e.classList.toggle(N.CHART_CSS.cursorEnabled,d);e=a.data!==c;d=k.applySome(a.data,f=>f.effectiveUnits)!==k.applySome(c,f=>f.effectiveUnits);a.data=c;a.messages=b;e&&(Z(a),aa(a));d&&(a.yAxis.invalidateLabels(),a.xAxis.invalidateLabels());
u(a)}}function Z(a){const {xAxis:c,yAxis:b}=a,{minX:e,maxX:d,minY:f,maxY:g}=D({data:a.data,pixelWidth:c.pixelWidth,pixelHeight:b.pixelHeight});c.min=e;c.max=d;b.min=f;b.max=g}function D({data:a,pixelWidth:c,pixelHeight:b}){if(k.isNone(a))return A;var e=a.statistics;const d=k.applySome(e,h=>h.maxDistance);let f=k.applySome(e,h=>h.minElevation);var g=k.applySome(e,h=>h.maxElevation);if(k.isNone(d)||k.isNone(f)||k.isNone(g))return A;e=Math.max(d-0,.001);let l=Math.max(g-f,.001);g=a.effectiveUnits;a.dynamicElevationRange&&
(g=B.convertUnit(e,g.distance,g.elevation),l=Math.max(l,g/v.getConfig().maxChartRatio));f-=.02*l;g=f+l+.02*l;[f,g]=P.niceScale(f,g,10);l=g-f;return a.uniformScaling?E({data:a,bounds:{minX:0,maxX:d,minY:f,maxY:g},pixelWidth:c,pixelHeight:b,centered:!0}):{minX:0,maxX:0+e,minY:f,maxY:f+l}}function E({data:a,bounds:c,pixelWidth:b,pixelHeight:e,centered:d}){if(k.isNone(a))return c;let {minX:f,maxX:g,minY:l,maxY:h}=c;if(null==f||null==g||null==l||null==h)return A;c=g-f;a=a.effectiveUnits;b=B.convertUnit(h-
l,a.elevation,a.distance)/e/(c/b);1<=b?[f,g]=F([f,g],b,d):[l,h]=F([l,h],1/b,d);return{minX:f,maxX:g,minY:l,maxY:h}}function F([a,c],b,e){b*=c-a;return e?(a=(a+c)/2-b/2,[a,a+b]):[a,a+b]}function aa(a){const {amChart:c,data:b}=a;if(k.isNone(b)||0===b.lines.length)c.series.clear();else{var e=new Map,d=new Set(c.series.values),f=b.lines.length;for(let g=0;g<f;g++){const l=b.lines[g];let h=a.series.get(l.id);h?(k.applySome(h.fill,m=>d.delete(m)),d.delete(h.line)):(h=ba(a,l),k.applySome(h.fill,m=>c.series.push(m)),
c.series.push(h.line));e.set(h.id,h);const n=f-g-1;k.applySome(h.fill,m=>m.zIndex=n);h.line.zIndex=f+n;ca(a,h,l)}a.series=e;for(const g of d)c.series.removeValue(g)}}function ca(a,{line:c,fill:b},e){const {theme:d}=a;({am4core:a}=a.amCharts4Index);const {r:f,g,b:l,a:h}=e.color,n=a.color({r:f,g,b:l,a:h}),m=k.unwrapOr(e.samples,[]),p=0<m.length;c.stroke=n;c.visible=p;k.applySome(b,r=>{r.visible=p;r.fill=n.lighten(d.seriesFillLighten)});e=m.length;a=c.data;if(a.length===e){let r=!1;for(let q=0;q<e;++q){const t=
a[q],G=m[q];r=r||k.isSome(t.elevation)!==k.isSome(G.elevation);da(t,G)}r?(c.invalidateData(),k.applySome(b,q=>q.invalidateData())):(c.invalidateRawData(),k.applySome(b,q=>q.invalidateRawData()))}else c.data=m,k.applySome(b,r=>r.data=m)}function da(a,c){a.x=c.x;a.y=c.y;a.z=c.z;a.distance=c.distance;a.elevation=c.elevation}function ba(a,c){const {id:b}=c,e=H(a,`${"line"}-${b}`);e.strokeWidth=c.chartStrokeWidth;e.dy=c.chartStrokeOffsetY;let d=null;c.chartFillEnabled&&(d=H(a,`${"fill"}-${b}`),d.fillOpacity=
1);return{id:b,line:e,fill:d}}function H(a,c){a=new a.amCharts4Index.am4charts.LineSeries;a.id=c;a.showOnInit=!1;a.simplifiedProcessing=!0;a.minDistance=.5;a.excludeFromTotal=!0;a.clickable=!1;a.contextMenuDisabled=!0;a.cursorHoverEnabled=!1;a.cursorTooltipEnabled=!1;a.connect=!1;a.fill=null;a.stroke=null;a.dataFields.valueX="distance";a.dataFields.valueY="elevation";return a}function ea(a,c){const {amChart:b,xAxis:e,yAxis:d}=a;let f=!1;const g=()=>{const {data:n}=a;if(f&&!k.isNone(n)&&n.uniformScaling){f=
!1;var {minX:m,maxX:p,minY:r,maxY:q}=E({data:a.data,bounds:{minX:e.minZoomed,maxX:e.maxZoomed,minY:d.minZoomed,maxY:d.maxZoomed},pixelWidth:e.pixelWidth,pixelHeight:d.pixelHeight,centered:!0});null!=m&&null!=p&&e.zoomToValues(m,p,!0);null!=r&&null!=q&&d.zoomToValues(r,q,!0);b.validate();u(a)}},l=()=>{c(a.xAxis.zoomFactor,a.yAxis.zoomFactor)},h=[b.events.on("down",()=>{a.zooming=!0;u(a)}),b.events.on("up",()=>{a.zooming=!1;u(a)}),b.cursor.events.on("zoomended",()=>{f=!0}),e.events.on("startendchanged",
g),d.events.on("startendchanged",g),e.events.on("rangechangeended",l),d.events.on("rangechangeended",l)];return w.makeHandle(()=>{h.forEach(n=>n.dispose())})}function fa({xAxis:a,yAxis:c}){const b=d=>()=>{d.renderer.grid.each(f=>{f.visible="none"!==f.dataItem.label.dom.getAttribute("display")})},e=[a.events.on("rangechangeended",b(a)),a.events.on("validated",b(a)),c.events.on("rangechangeended",b(c)),c.events.on("validated",b(c))];return w.makeHandle(()=>{e.forEach(d=>d.dispose())})}function ha(a,
c){const {amChart:b,xAxis:e,yAxis:d}=a,{cursor:f,events:g}=b,l=()=>{a.pointerIsOver=!1;u(a);c(null,null)},h=[f.events.on("cursorpositionchanged",()=>{if(a.pointerIsOver){u(a);var n=e.toAxisPosition(f.xPosition),m=d.toAxisPosition(f.yPosition),p=a.data;if(k.isSome(p)&&k.isSome(p.statistics)){const {maxDistance:r,minElevation:q,maxElevation:t}=p.statistics;k.isSome(r)&&(p=e.minZoomed,n=(p+n*(e.maxZoomed-p)-0)/(r-0));k.isSome(q)&&k.isSome(t)&&(p=d.minZoomed,m=(p+m*(d.maxZoomed-p)-q)/(t-q))}c(n,m)}}),
g.on("over",()=>{a.pointerIsOver=!0;u(a)}),g.on("out",l),g.on("blur",l)];return w.makeHandle(()=>{h.forEach(n=>n.dispose())})}function u(a){const {amChart:c,xAxis:b,data:e,theme:d,zooming:f,pointerIsOver:g}=a;a.amChart.tooltip.hide();a.xAxis.hideTooltip();if(g&&!f&&!k.isNone(e)&&e.refined){var l=ia(a);if(k.isSome(l)){var {cursor:h}=c;const n=c.tooltip;h.show(0);h.validate();n.text=l.text;n.show(0);n.validate();n.pointerOrientation=30>l.y-n.contentHeight-d.seriesTooltipSpacing?"up":"down";n.pointTo(l,
!0);n.validate();l=b.tooltip;{const {data:m,messages:p}=a;k.isNone(m)||k.isNone(p)?a="":(a=(h=m.lines[0])?I(a,h):null,h=v.getConfig().formatPrecision,a=k.isSome(a)?y.formatDecimal(p,a.distance,m.effectiveUnits.distance,h):"-")}l.text=a;l.show(0);l.validate()}}}function ia(a){const {amChart:c,yAxis:b,data:e}=a;if(k.isNone(e))return null;const d=e.lines.map(n=>({line:n,y:k.applySome(I(a,n),m=>m.elevation)})).sort(ja),f=d.length?d[0].y:null;if(k.isNone(f))return null;const g=c.cursor,l=b.measuredHeight,
h=l+c.pixelPaddingTop;return{text:d.map(({y:n,line:m})=>{{const {data:r,messages:q}=a;if(k.isNone(r)||k.isNone(q))m="";else{var p=v.getConfig().formatPrecision;n=S.substitute(q.chartTooltip,{name:O.getTranslatedLineTitle(m,q),elevation:k.isSome(n)?y.formatDecimal(q,n,r.effectiveUnits.elevation,p):v.NOT_AVAILABLE});m=`[${m.color.toHex()}]\u25cf[/] ${n}`}}return m}).join("\n"),x:g.point.x+g.parent.pixelX+c.pixelPaddingLeft,y:h-b.valueToPosition(f)*l}}function ja({y:a},{y:c}){return k.isNone(a)?1:k.isNone(c)?
-1:c-a}function C(a,c){const b=a.xAxis.numberFormatter.clone();b.format=(e,d,f)=>{const {messages:g,data:l}=a;return k.isNone(g)||k.isNone(l)||"string"===typeof e?"":`${T.formatNumber(e,{maximumFractionDigits:f})} ${y.unitName(g,l.effectiveUnits[c],"abbr")}`};return b}function I({amChart:a,xAxis:c},b){b=k.unwrapOr(b.samples,[]);if(0===b.length)return null;a=c.toAxisPosition(a.cursor.xPosition);c=c.positionToValue(a);return K.binaryFindClosest(b,c,e=>e.distance)}const J={sideSpacing:15,paddingBottom:0,
paddingLeft:0,paddingRight:0,paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:"#a9a9a9",axisTooltipFontSize:12,axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",axisTooltipPaddingTop:3,axisTooltipPaddingBottom:3,axisTooltipPaddingHorizontal:4,xAxisMinGridDistance:50,xAxisLabelsSpacing:6,xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:4,yAxisMinLabelPosition:0,
yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:"#f8f8f8",seriesTooltipLabelColor:"#323232",seriesFillLighten:.9,seriesTooltipSpacing:6,seriesTooltipPaddingVertical:4,seriesTooltipPaddingHorizontal:4,tooltipBorderRadius:0},ka={...J,axisGridStroke:"#323232",axisLabelsColor:"#a9a9a9",axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",seriesTooltipBackgroundColor:"#323232",seriesTooltipLabelColor:"#f8f8f8",seriesFillLighten:-.75},A={minX:void 0,maxX:void 0,
minY:void 0,maxY:void 0};x.createChart=async function(a){const c=await Q.loadChartsModule();if(!c)throw new L("elevation-profile:load-failed","Could not load amCharts");const {am4core:b,am4charts:e}=c;M.throwIfAborted(a.abortOptions);var {options:d}=b;d.minPolylineStep=.5;d.autoSetClassName=!0;d.animationsEnabled=!1;var f=R.isDarkTheme();d=f?ka:J;f&&b.useTheme(c.am4themes_dark);const g=b.create(a.container,e.XYChart);g.arrangeTooltips=!1;g.preloader.disabled=!0;g.zoomOutButton.disabled=!0;f=z.isRTL(a.container);
g.rtl=f;g.padding(d.paddingTop,f?d.paddingLeft:d.paddingRight,d.paddingBottom,f?d.paddingRight:d.paddingLeft);f=g.plotContainer.background;f.strokeWidth=0;f.strokeOpacity=0;f.stroke=null;f=g.xAxes.push(new e.ValueAxis);const l=g.yAxes.push(new e.ValueAxis),h={params:a,amCharts4Index:c,amChart:g,xAxis:f,yAxis:l,series:new Map,data:null,messages:null,theme:d,zooming:!1,pointerIsOver:!1};g.cursor=U(h);V(h);W(h);X(h);const n=[ea(h,a.onRangeChange),ha(h,a.onCursorPositionChange),fa(h)];let m=null,p=!1;
const r=()=>{k.isNone(m)||("undefined"!==typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(m):clearTimeout(m),m=null)};return{...h,destroy(){p=!0;r();w.handlesGroup(n).remove();g.dispose()},update(q){if(q.data!==h.data||q.messages!==h.messages)if(r(),!p){var t=()=>{p||(m=null,Y(h,q))};m="undefined"!==typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(t,{timeout:30}):setTimeout(t,30)}},zoomOut(){p||(h.yAxis.zoom({start:0,end:1},!1,!0),h.xAxis.zoom({start:0,
end:1},!1,!0))}}};x.getAdjustedBounds=D;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});