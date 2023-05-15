// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/events ../../core/Logger ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./datePickerUtils ./DatePickerViewModel ./Popover ./decorators/accessibleHandler ./decorators/messageBundle ./jsxFactory ./widgetUtils ../../chunks/datetime ../../intl/date ../../intl/locale".split(" "),
function(v,l,k,x,I,J,B,m,R,S,T,K,L,y,C,M,z,N,h,p,q,n,A){const t={year:"numeric",month:"2-digit",day:"2-digit"},O=" ;ArrowDown;ArrowLeft;ArrowRight;ArrowUp;End;Enter;Home;PageDown;PageUp".split(";");k=function(e){function w(a,b){var c=P.call(this,a,b);c._calendarNode=null;c._inputOrButtonNode=null;c._rootNode=null;c._pageClickHandler=null;c._requestDayPickerFocusOnCreate=!1;c._activeDate=null;c._calendarPopover=new M({owner:v._assertThisInitialized(c),placement:"bottom-start",anchorElement:()=>c._rootNode,
renderContentFunction:c._renderCalendar});c._isOpen=!1;c.dateInputEnabled=!1;c.messages=null;c.commitOnMonthChange=!1;c.viewModel=new C;c.disabled=!1;c.toggle=c.toggle.bind(v._assertThisInitialized(c));return c}v._inherits(w,e);var P=v._createSuper(w);e=w.prototype;e.initialize=function(){this.addHandles(B.watch(()=>({viewModel:this.viewModel,value:this.viewModel?.value}),({viewModel:a,value:b})=>{if(!this.destroyed&&a&&!J.isNone(this.onChange))this.onChange(b)},B.sync))};e.destroy=function(){this._calendarPopover.destroy()};
e.render=function(){return h.tsx("div",{afterCreate:p.storeNode,bind:this,class:this.classes("esri-date-picker","esri-widget"),"data-node-ref":"_rootNode"},this.dateInputEnabled?this._renderInputAndButtonMode():this._renderButtonOnlyMode())};e.toggle=function(){this._isOpen?this.close():this.open()};e.open=function(a=!0){this._activeDate=q.DateTime.fromJSDate(this.viewModel.value);this._isOpen=!0;this._calendarPopover.open=!0;this._requestDayPickerFocusOnCreate=a;this._pageClickHandler||(this._pageClickHandler=
x.pausable(document,"click",({target:b})=>{this._calendarNode?.contains(b)||this._rootNode?.contains(b)||this.close()}),this.addHandles(this._pageClickHandler));this._pageClickHandler.resume()};e.close=function(a=!0){this._activeDate=null;this._isOpen=!1;this._calendarPopover.open=!1;this._pageClickHandler?.pause();a&&this._inputOrButtonNode?.focus()};e._renderButtonOnlyMode=function(){const a=n.formatDate(this.viewModel.value,t),{disabled:b,_isOpen:c,messages:f}=this;return h.tsx("div",{key:`date-button-${b}`,
afterCreate:p.storeNode,"aria-controls":c?this._getCalendarId():null,"aria-expanded":c.toString(),"aria-haspopup":"true","aria-label":f.setDate,"aria-pressed":c.toString(),bind:this,class:this.classes("esri-widget--button","esri-select","esri-date-picker__calendar-toggle"),"data-node-ref":"_inputOrButtonNode",onclick:this.toggle,onkeydown:this._handleDateButtonKeyDown,role:"button",tabIndex:b?void 0:0},h.tsx("span",{class:"esri-date-picker__date"},a))};e._renderInputAndButtonMode=function(){const a=
n.formatDate(this.viewModel.value,t),{_isOpen:b,messages:c}=this;return h.tsx("div",{class:this.classes("esri-date-picker__input")},h.tsx("input",{afterCreate:p.storeNode,"data-node-ref":"_inputOrButtonNode","aria-controls":b?this._getCalendarId():null,"aria-haspopup":"true","aria-label":c.setDate,bind:this,class:this.classes("esri-date-picker__text-input","esri-input"),key:"date-input",onblur:this._handleDateInputBlur,onclick:this._handleDateInputClick,onkeydown:this._handleDateInputKeyDown,type:"text",
value:a}),h.tsx("span",{"aria-hidden":"true",class:this.classes("esri-date-picker__icon--leading","esri-icon-calendar")}))};e._handleDateInputClick=function(){this.open(!1)};e._handleDateInputKeyDown=function(a){const {key:b}=a;this._isOpen?"Enter"===b?this._handleDateText(a):"Escape"===b&&this.close():"ArrowDown"===b&&(this.open(),a.preventDefault())};e._handleDateButtonKeyDown=function(a){const {key:b,shiftKey:c}=a;this._isOpen&&"Tab"===b&&c?this.close():p.isActivationKey(b)&&this.toggle()};e._handleDateInputBlur=
function(a){this._isOpen||this._handleDateText(a)};e._handleDateText=function(a){a=a.currentTarget;try{var b=y.parseDateIntoParts(a.value,t)}catch(c){I.getLogger(this.declaredClass).warn(c);a.value=n.formatDate(this.viewModel.value,t);return}b=q.DateTime.fromObject(b);b.isValid?(this.viewModel.value=b.toJSDate(),this._activeDate=b):a.value=n.formatDate(this.viewModel.value,t)};e._handleDatePickerKeydown=function(a){"Escape"===x.eventKey(a)&&(this.close(),a.preventDefault(),a.stopPropagation())};e._renderCalendar=
function(){const a=this._activeDate;if(!a)return null;const b=q.DateTime.fromJSDate(this.viewModel.value);return h.tsx("div",{afterCreate:p.storeNode,bind:this,class:this.classes("esri-date-picker__calendar","esri-widget"),"data-node-ref":"_calendarNode",id:this._getCalendarId(),key:"esri-date-picker__calendar",onkeydown:this._handleDatePickerKeydown},this._renderMonthPicker(a),this._renderDayPicker(a,b),this._renderYearPicker(a))};e._getCalendarId=function(){return`date-picker__calendar--${this.id}`};
e._renderMonthPicker=function(a){var b=p.isRTL(this.container);const c=b?"esri-icon-right":"esri-icon-left";b=b?"esri-icon-left":"esri-icon-right";const f=q.Info.months("long",{locale:A.getLocale()}).map((r,u)=>h.tsx("option",{selected:a.month-1===u,value:u.toString()},r)),{disabled:d,messages:g}=this;return h.tsx("div",{class:"esri-date-picker__month-picker"},h.tsx("div",{key:`previous-month-${d}`,"aria-label":g.goToPreviousMonth,bind:this,class:"esri-widget--button",onclick:this._setPreviousMonth,
onkeydown:this._handlePreviousMonthKeyDown,role:"button",tabIndex:d?void 0:0,title:g.goToPreviousMonth},h.tsx("span",{"aria-hidden":"true",class:c})),h.tsx("select",{"aria-live":"assertive","aria-label":g.selectMonth,bind:this,class:this.classes("esri-date-picker__month-dropdown","esri-select"),disabled:d,id:`${this.id}__month-picker`,onchange:this._setMonth,onkeydown:this._setMonth,title:g.selectMonth},f),h.tsx("div",{key:`next-month-${d}`,"aria-label":g.goToNextMonth,bind:this,class:"esri-widget--button",
onclick:this._setNextMonth,onkeydown:this._setNextMonth,role:"button",tabIndex:d?void 0:0,title:g.goToNextMonth},h.tsx("span",{"aria-hidden":"true",class:b})))};e._renderDayPicker=function(a,b){const c=this._getWeekLabels(),f=this._getDayId(a);a=this._renderMonth(a,b);const {id:d,disabled:g}=this;return h.tsx("div",{key:`day-picker-${g}`,afterCreate:this._handleDayPickerCreate,"aria-activedescendant":f,"aria-labelledby":`${d}__month-picker ${d}__selected-year`,bind:this,class:"esri-date-picker__day-picker",
id:`${d}__day-picker`,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:g?void 0:0},h.tsx("div",{class:"esri-date-picker__week-item",role:"row"},c.map(r=>h.tsx("div",{"aria-label":r.name,class:this.classes("esri-date-picker__day-item","esri-date-picker__day-item--header"),role:"columnheader",title:r.name},r.abbr))),a)};e._getDayId=function(a){return`${this.id}__${n.formatDate(a.valueOf(),t)}`};e._handleDayPickerCreate=function(a){this._requestDayPickerFocusOnCreate&&(this._requestDayPickerFocusOnCreate=
!1,a.focus())};e._getWeekLabels=function(){const a=[],b={weekday:"long"},c={weekday:"narrow"};let f=q.DateTime.now().set({weekday:y.getFirstDayOfWeek(A.getLocale())});for(let d=0;7>d;d++)a.push({name:n.formatDate(f.valueOf(),b),abbr:n.formatDate(f.valueOf(),c)}),f=f.plus({day:1});return a};e._handleDayPickerKeydown=function(a){const {ctrlKey:b,shiftKey:c}=a,f=x.eventKey(a);if(O.includes(f)){var d=this._activeDate;d&&("ArrowLeft"===f?d=d.minus({day:1}):"ArrowRight"===f?d=d.plus({day:1}):"ArrowUp"===
f?d=d.minus({week:1}):"ArrowDown"===f?d=d.plus({week:1}):"PageUp"===f?d=d.minus({[c?"year":"month"]:1}):"PageDown"===f?d=d.plus({[c?"year":"month"]:1}):"Home"===f?d=d.startOf(b?"year":"month"):"End"===f?d=d.endOf(b?"year":"month"):p.isActivationKey(f)&&(this.viewModel.value=d.toJSDate(),this.close()),this._activeDate=d,a.preventDefault(),a.stopPropagation())}};e._renderMonth=function(a,b){const c=q.DateTime.now(),f=a.startOf("month"),d=a.endOf("month");let g=f.minus({day:y.getLocaleDayOfWeek(A.getLocale(),
f.weekday)});const r=[];for(let D=0;6>D;D++){const E=[];for(let F=0;7>F;F++){const G=g.day,H=g.hasSame(a,"day");var u=g.hasSame(b,"day");const Q=this._getDayId(g);u={["esri-date-picker__day-item--nearby-month"]:!q.Interval.fromDateTimes(f,d).contains(g),["esri-date-picker__day-item--today"]:g.hasSame(c,"day"),["esri-date-picker__day-item--active"]:H,["esri-date-picker__day-item--selected"]:u};E.push(h.tsx("div",{"aria-label":G.toString(),"aria-selected":H.toString(),bind:this,class:this.classes("esri-date-picker__day-item",
u),"data-iso-date":g.toISO(),id:Q,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,role:"gridcell"},G));g=g.plus({day:1})}r.push(h.tsx("div",{class:"esri-date-picker__week-item",role:"row"},E))}return r};e._renderYearPicker=function(a){const b={year:"numeric"},c=n.formatDate(a.valueOf(),b),f=n.formatDate(a.plus({year:1}).valueOf(),b);a=n.formatDate(a.minus({year:1}).valueOf(),b);const {disabled:d,messages:g}=this;return h.tsx("div",{class:"esri-date-picker__year-picker"},h.tsx("div",
{key:`previous-year-${d}`,"aria-label":g.goToPreviousYear,bind:this,class:"esri-date-picker__year-picker-item",onclick:this._setPreviousYear,onkeydown:this._setPreviousYear,tabIndex:d?void 0:0,title:g.goToPreviousYear},a),h.tsx("div",{class:this.classes("esri-date-picker__year-picker-item","esri-date-picker__year-picker-item--selected"),id:`${this.id}__selected-year`},c),h.tsx("div",{key:`next-year-${d}`,"aria-label":g.goToNextYear,bind:this,class:"esri-date-picker__year-picker-item",onclick:this._setNextYear,
onkeydown:this._handleNextYearKeyDown,tabIndex:d?void 0:0,title:g.goToNextYear},f))};e._setMonth=function(a){this._activeDate&&(this._activeDate=this._activeDate.set({month:Number(a.target.value)+1}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))};e._setPreviousMonth=function(){this._activeDate&&(this._activeDate=this._activeDate.minus({month:1}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))};e._handlePreviousMonthKeyDown=function(a){"Tab"===
a.key&&a.shiftKey?(a.preventDefault(),this.close()):p.isActivationKey(a.key)&&this._setPreviousMonth()};e._setNextMonth=function(){this._activeDate&&(this._activeDate=this._activeDate.plus({month:1}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))};e._setPreviousYear=function(){this._activeDate=this._activeDate?.minus({year:1})??null};e._setNextYear=function(){this._activeDate=this._activeDate?.plus({year:1})??null};e._handleNextYearKeyDown=function(a){"Tab"!==a.key||
a.shiftKey?p.isActivationKey(a.key)&&this._setNextYear():(a.preventDefault(),this.close())};e._handleSelectedDate=function(a){this.viewModel.value=q.DateTime.fromISO(a.target.getAttribute("data-iso-date")).toJSDate();this.close()};v._createClass(w,[{key:"value",get:function(){return this.viewModel.value},set:function(a){this.viewModel.value=a}},{key:"isOpen",get:function(){return this._isOpen}}]);return w}(L);l.__decorate([m.property()],k.prototype,"_activeDate",void 0);l.__decorate([m.property()],
k.prototype,"_calendarPopover",void 0);l.__decorate([m.property()],k.prototype,"_isOpen",void 0);l.__decorate([m.property()],k.prototype,"dateInputEnabled",void 0);l.__decorate([m.property(),N.messageBundle("esri/widgets/support/t9n/DatePicker")],k.prototype,"messages",void 0);l.__decorate([m.property()],k.prototype,"value",null);l.__decorate([m.property()],k.prototype,"commitOnMonthChange",void 0);l.__decorate([m.property({type:C})],k.prototype,"viewModel",void 0);l.__decorate([m.property()],k.prototype,
"onChange",void 0);l.__decorate([m.property()],k.prototype,"disabled",void 0);l.__decorate([m.property()],k.prototype,"isOpen",null);l.__decorate([z.accessibleHandler()],k.prototype,"_setNextMonth",null);l.__decorate([z.accessibleHandler()],k.prototype,"_setPreviousYear",null);l.__decorate([z.accessibleHandler()],k.prototype,"_handleSelectedDate",null);return k=l.__decorate([K.subclass("esri.widgets.support.DatePicker")],k)});