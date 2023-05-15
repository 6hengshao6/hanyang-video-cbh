// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/Handles ../core/maybe ../core/reactiveUtils ../core/timeUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../intl/substitute ./Slider ./Widget ./ShadowCast/css ./ShadowCast/ShadowCastState ./ShadowCast/ShadowCastViewModel ./ShadowCast/ShadowCastVisibleElements ./ShadowCast/ShadowVisualizationType ./ShadowCast/components/DiscreteConfigurator ./ShadowCast/components/DurationConfigurator ./ShadowCast/components/ShadowTooltip ./ShadowCast/components/ThresholdConfigurator ./ShadowCast/components/TimezonePicker ./support/componentsUtils ./support/DatePicker ./support/Heading ./support/timeWidgetUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/date".split(" "),
function(y,x,l,g,C,n,q,z,m,X,Y,Z,D,E,F,G,f,H,I,A,t,J,K,L,M,N,O,P,B,Q,aa,R,e,S){var w;(w||(w={})).Slider="slider";const T={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},U=/(.*)\s(.*)/,V={labelFormatFunction:Q.formatSliderLabel,min:0,max:1439,steps:15,rangeLabelInputsEnabled:!1,visibleElements:{labels:!1,rangeLabels:!1},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:(d,p,v)=>{p.classList.add(f.CSS.timeRangePrimaryTick);v.classList.add(f.CSS.timeRangePrimaryTickLabel);
if(d=v.innerText.match(U))v.innerHTML=`${d[1]}<br><div class="${f.CSS.timeRangeAMPMLabel}">${d[2]}</div>`}},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:(d,p)=>{p.classList.add(f.CSS.timeRangeSecondaryTick)}}]};g=function(d){function p(a,b){var c=v.call(this,a,b);c.viewModel=null;c.headingLevel=4;c.iconClass=f.CSS.widgetIcon;c.visibleElements=new A;c._handles=new C;c._defaultViewModel=null;c._timeSlider=new F({...V,container:document.createElement("div")});c._tooltip=
null;c._onTimezoneChange=h=>{c.viewModel.utcOffset=h};c._onDateChange=h=>{c.viewModel.date=h};a?.viewModel||(c._defaultViewModel=new I({view:a?.view}),c.viewModel=c._defaultViewModel);return c}x._inherits(p,d);var v=x._createSuper(p);d=p.prototype;d.initialize=function(){this._handles.add([q.watch(()=>({viewModel:this.viewModel,slider:this._timeSlider}),a=>this._connectTimeSlider(a),q.syncAndInitial),q.watch(()=>({container:n.applySome(this.view,a=>a.surface),viewModel:this.viewModel,tooltipVisible:this.visibleElements.tooltip}),
({container:a,viewModel:b,tooltipVisible:c})=>{this._tooltip=n.destroyMaybe(this._tooltip);!n.isNone(a)&&c&&(this._tooltip=new L.ShadowTooltip({viewModel:b,container:a}))},q.syncAndInitial),q.watch(()=>({viewModel:this.viewModel,visible:this.visible}),({viewModel:a,visible:b})=>a.setRunning(b),q.syncAndInitial)])};d.destroy=function(){this._handles=n.destroyMaybe(this._handles);this._timeSlider=n.destroyMaybe(this._timeSlider);n.isSome(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&
this._defaultViewModel.destroy()};d.loadDependencies=function(){return O.loadCalciteComponents({select:()=>new Promise((a,b)=>y(["../chunks/calcite-select"],a,b)),option:()=>new Promise((a,b)=>y(["../chunks/calcite-option"],a,b))})};d.render=function(){const {visibleElements:a,viewModel:b}=this;return e.tsx("div",{key:this,class:this.classes(f.CSS.base,f.CSS.esriWidget,{[f.CSS.esriWidgetDisabled]:b.state===H.ShadowCastState.Disabled})},this._renderTimeRangeSection(),a.visualizationOptions&&this._renderVisualizationOptionsSection())};
d._connectTimeSlider=function({viewModel:a,slider:b}){this._handles.remove(w.Slider);if(!n.isNone(b)){var c=k=>z.convertTime(k,"milliseconds","minutes"),h=k=>z.convertTime(k,"minutes","milliseconds"),r=({index:k,value:u})=>{0===k?a.startTimeOfDay=h(u):a.endTimeOfDay=h(u)};this._handles.add([q.watch(()=>[a.startTimeOfDay,a.endTimeOfDay],k=>{b.values=k.map(c)},q.syncAndInitial),b.on("thumb-change",r),b.on("thumb-drag",r),b.on("segment-drag",()=>{[a.startTimeOfDay,a.endTimeOfDay]=b.values.map(h)})],
w.Slider)}};d._renderTimeRangeSection=function(){const {visibleElements:a}=this;return a.timeRangeSlider||a.datePicker?e.tsx("section",{key:"time-range",class:f.CSS.timeRange},e.tsx(B.Heading,{level:this.headingLevel},this.messages.timeLabel),a.timeRangeSlider&&this._renderTimeRange(),a.datePicker&&this._renderDatePicker()):null};d._renderTimeRange=function(){const {messages:a,viewModel:b,visibleElements:c}=this,{startTimeOfDay:h,endTimeOfDay:r}=b,[k,u]=[h,r].map(W=>S.formatDate(new Date(W),T));return[e.tsx("div",
{key:"time-range-indicator",class:f.CSS.timeRangeIndicator},E.substitute(a.timeRange,{start:k,end:u}),c.timezone&&e.tsx(N.TimezonePicker,{value:b.utcOffset,onChange:this._onTimezoneChange})),e.tsx("div",{key:"time-slider-container",bind:this,afterCreate:this._timeSliderContainerAfterCreate,afterRemoved:this._timeSliderContainerAfterRemoved})]};d._timeSliderContainerAfterCreate=function(a){const b=n.unwrap(this._timeSlider)?.container;b&&a.appendChild(b)};d._timeSliderContainerAfterRemoved=function(a){const b=
n.unwrap(this._timeSlider)?.container;b&&a.removeChild(b)};d._renderDatePicker=function(){return e.tsx("div",{key:"date-picker",class:f.CSS.datePickerContainer},e.tsx(P,{value:this.viewModel.date,onChange:this._onDateChange}))};d._renderVisualizationOptionsSection=function(){const {headingLevel:a,messages:b,viewModel:c,visibleElements:h}=this,r=h.colorPicker,k=u=>this.classes(c.visualizationType===u?null:f.CSS.visualizationConfigHidden);return e.tsx("section",{key:"visualization",class:f.CSS.visualization},
e.tsx(B.Heading,{level:a},b.visualizationLabel),this._renderVisualizationSelect(),e.tsx("div",{key:"threshold-configurator",class:k(t.ShadowVisualizationType.Threshold)},e.tsx(M.ThresholdConfigurator,{options:c.thresholdOptions,colorPickerVisible:r})),e.tsx("div",{key:"duration-configurator",class:k(t.ShadowVisualizationType.Duration)},e.tsx(K.DurationConfigurator,{options:c.durationOptions,colorPickerVisible:r})),e.tsx("div",{key:"discrete-configurator",class:k(t.ShadowVisualizationType.Discrete)},
e.tsx(J.DiscreteConfigurator,{options:c.discreteOptions,colorPickerVisible:r})))};d._renderVisualizationSelect=function(){const a=this.messages,b=this.viewModel.visualizationType;return e.tsx("calcite-select",{class:f.CSS.visualizationSelect,key:"visualization-select",label:a.visualizationLabel,bind:this,onCalciteSelectChange:this._onVisualizationTypeChange},[{type:t.ShadowVisualizationType.Threshold,label:a.threshold.label},{type:t.ShadowVisualizationType.Duration,label:a.duration.label},{type:t.ShadowVisualizationType.Discrete,
label:a.discrete.label}].map(({type:c,label:h})=>e.tsx("calcite-option",{value:c,selected:c===b},h)))};d._onVisualizationTypeChange=function(a){this.viewModel.visualizationType=a.target.selectedOption?.value??t.ShadowVisualizationType.Threshold};x._createClass(p,[{key:"view",get:function(){return this.viewModel?.view},set:function(a){this.viewModel&&(this.viewModel.view=a)}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"testData",
get:function(){return{tooltip:this._tooltip}}}]);return p}(G);l.__decorate([m.property()],g.prototype,"viewModel",void 0);l.__decorate([m.property()],g.prototype,"view",null);l.__decorate([m.property()],g.prototype,"headingLevel",void 0);l.__decorate([m.property()],g.prototype,"iconClass",void 0);l.__decorate([m.property()],g.prototype,"label",null);l.__decorate([m.property({type:A,nonNullable:!0})],g.prototype,"visibleElements",void 0);l.__decorate([m.property(),R.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],
g.prototype,"messages",void 0);l.__decorate([m.property()],g.prototype,"_defaultViewModel",void 0);l.__decorate([m.property()],g.prototype,"_timeSlider",void 0);l.__decorate([m.property()],g.prototype,"_tooltip",void 0);return g=l.__decorate([D.subclass("esri.widgets.ShadowCast")],g)});