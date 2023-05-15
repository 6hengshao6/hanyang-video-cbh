// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./index ./form ./dom ./interactive ./key ./label2 ./loadable ./locale ./t9n ./icon ./action ./input ./loader ./popover ./progress".split(" "),function(A,e,w,K,L,u,B,p,h,x,D,M,N,O,P,Q){function v(a,b,c=!0){try{const g={hour:"2-digit",minute:"2-digit",timeZone:"UTC",numberingSystem:h.getSupportedNumberingSystem(b)};c&&(g.second="2-digit");return new Intl.DateTimeFormat(h.getSupportedLocale(a),g)}catch(g){throw Error(`Invalid locale supplied while attempting to create a DateTime formatter: ${a}`);
}}function r(a){const b=a.toString();return 0<=a&&9>=a?b.padStart(2,"0"):b}function m(a,b){if(!a||!b)return null;if("hourSuffix"===a){var c=b.indexOf(b.find(({type:d})=>"hour"===d)),g=b.indexOf(b.find(({type:d})=>"minute"===d));return(b=b[c+1])&&"literal"===b.type&&2===g-c?b.value?.trim()||null:null}return"minuteSuffix"===a?(c=b.indexOf(b.find(({type:d})=>"minute"===d)),g=b.indexOf(b.find(({type:d})=>"second"===d)),(b=b[c+1])&&"literal"===b.type&&2===g-c?b.value?.trim()||null:null):"secondSuffix"===
a?(c=b.indexOf(b.find(({type:d})=>"second"===d)),(b=b[c+1])&&"literal"===b.type?b.value?.trim()||null:null):b.find(({type:d})=>"meridiem"==a?"dayPeriod"===d:d===a)?.value||null}function q(a){if(!a||a.startsWith(":")||a.endsWith(":"))return!1;var b=a.split(":");if(!(1<b.length&&4>b.length))return!1;const [c,g,d]=b;var k=parseInt(b[0]);a=parseInt(b[1]);b=parseInt(b[2]);k=h.isValidNumber(c)&&0<=k&&24>k;a=h.isValidNumber(g)&&0<=a&&60>a;b=h.isValidNumber(d)&&0<=b&&60>b;if(k&&a&&!d||k&&a&&b)return!0}function C({value:a,
part:b,locale:c,numberingSystem:g}){if("meridiem"===b)var d="AM"===a||"PM"===a;else h.isValidNumber(a)?(d=Number(a),d="hour"===b?0<=d&&24>d:0<=d&&60>d):d=!1;if(d)return d=parseInt(a),a=new Date(Date.UTC(0,0,0,"hour"===b?d:"meridiem"===b?"AM"===a?0:12:0,"minute"===b?d:0,"second"===b?d:0)),c=v(c,g).formatToParts(a),m(b,c)}function y({value:a,locale:b,numberingSystem:c,includeSeconds:g=!0}){if(!q(a))return null;const {hour:d,minute:k,second:l="0"}=z(a);a=new Date(Date.UTC(0,0,0,parseInt(d),parseInt(k),
parseInt(l)));return v(b,c,g)?.format(a)||null}function E({value:a,locale:b,numberingSystem:c}){if(!q(a))return null;const {hour:g,minute:d,second:k="0"}=z(a);a=new Date(Date.UTC(0,0,0,parseInt(g),parseInt(d),parseInt(k)));b=v(b,c).formatToParts(a);return{localizedHour:m("hour",b),localizedHourSuffix:m("hourSuffix",b),localizedMinute:m("minute",b),localizedMinuteSuffix:m("minuteSuffix",b),localizedSecond:m("second",b),localizedSecondSuffix:m("secondSuffix",b),localizedMeridiem:m("meridiem",b)}}function F({value:a,
locale:b,numberingSystem:c}){if(!q(a))return null;const {hour:g,minute:d,second:k="0"}=z(a);return a=new Date(Date.UTC(0,0,0,parseInt(g),parseInt(d),parseInt(k))),v(b,c).formatToParts(a)}function z(a){if(q(a)){const [b,c,g]=a.split(":");return{hour:b,minute:c,second:g}}return{hour:null,minute:null,second:null}}function G(){"undefined"!==typeof customElements&&["calcite-time-picker","calcite-icon"].forEach(a=>{switch(a){case "calcite-time-picker":customElements.get(a)||customElements.define(a,R);break;
case "calcite-icon":customElements.get(a)||D.defineCustomElement()}})}function H(){"undefined"!==typeof customElements&&"calcite-input-time-picker calcite-action calcite-icon calcite-input calcite-loader calcite-popover calcite-progress calcite-time-picker".split(" ").forEach(a=>{switch(a){case "calcite-input-time-picker":customElements.get(a)||customElements.define(a,I);break;case "calcite-action":customElements.get(a)||M.defineCustomElement();break;case "calcite-icon":customElements.get(a)||D.defineCustomElement();
break;case "calcite-input":customElements.get(a)||N.defineCustomElement();break;case "calcite-loader":customElements.get(a)||O.defineCustomElement();break;case "calcite-popover":customElements.get(a)||P.defineCustomElement();break;case "calcite-progress":customElements.get(a)||Q.defineCustomElement();break;case "calcite-time-picker":customElements.get(a)||G()}})}const f={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",
buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s",
"scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"},R=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalTimePickerBlur=e.createEvent(this,"calciteInternalTimePickerBlur",6);this.calciteInternalTimePickerChange=e.createEvent(this,"calciteInternalTimePickerChange",6);this.calciteInternalTimePickerFocus=e.createEvent(this,"calciteInternalTimePickerFocus",6);this.decrementHour=()=>
{const a=this.hour?"00"===this.hour?23:parseInt(this.hour)-1:0;this.setValuePart("hour",a)};this.decrementMeridiem=()=>{this.setValuePart("meridiem","PM"===this.meridiem?"AM":"PM")};this.decrementMinuteOrSecond=a=>{if(h.isValidNumber(this[a])){var b=parseInt(this[a]);b=0===b?59:b-1}else b=59;this.setValuePart(a,b)};this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")};this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")};this.focusHandler=a=>{this.activeEl=a.currentTarget};
this.hourDownButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.decrementHour()};this.hourKeyDownHandler=a=>{const {key:b}=a;if(u.numberKeys.includes(b)){a=parseInt(b);let c;if(h.isValidNumber(this.hour))switch(this.hourCycle){case "12":c="01"===this.hour&&0<=a&&2>=a?`1${a}`:a;break;case "24":c="01"===this.hour?`1${a}`:"02"===this.hour&&0<=a&&3>=a?`2${a}`:a}else c=a;this.setValuePart("hour",c)}else switch(b){case "Backspace":case "Delete":this.setValuePart("hour",null);break;case "ArrowDown":a.preventDefault();
this.decrementHour();break;case "ArrowUp":a.preventDefault();this.incrementHour();break;case " ":a.preventDefault()}};this.hourUpButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.incrementHour()};this.incrementMeridiem=()=>{this.setValuePart("meridiem","AM"===this.meridiem?"PM":"AM")};this.incrementHour=()=>{const a=h.isValidNumber(this.hour)?"23"===this.hour?0:parseInt(this.hour)+1:1;this.setValuePart("hour",a)};this.incrementMinuteOrSecond=a=>{const b=h.isValidNumber(this[a])?"59"===this[a]?
0:parseInt(this[a])+1:0;this.setValuePart(a,b)};this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")};this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")};this.meridiemDownButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.decrementMeridiem()};this.meridiemKeyDownHandler=a=>{switch(a.key){case "a":this.setValuePart("meridiem","AM");break;case "p":this.setValuePart("meridiem","PM");break;case "Backspace":case "Delete":this.setValuePart("meridiem",null);break;case "ArrowUp":a.preventDefault();
this.incrementMeridiem();break;case "ArrowDown":a.preventDefault();this.decrementMeridiem();break;case " ":a.preventDefault()}};this.meridiemUpButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.incrementMeridiem()};this.minuteDownButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.decrementMinute()};this.minuteKeyDownHandler=a=>{var {key:b}=a;if(u.numberKeys.includes(b))a=parseInt(b),h.isValidNumber(this.minute)&&this.minute.startsWith("0")&&(b=parseInt(this.minute),a=5<b?a:`${b}${a}`),this.setValuePart("minute",
a);else switch(b){case "Backspace":case "Delete":this.setValuePart("minute",null);break;case "ArrowDown":a.preventDefault();this.decrementMinute();break;case "ArrowUp":a.preventDefault();this.incrementMinute();break;case " ":a.preventDefault()}};this.minuteUpButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.incrementMinute()};this.secondDownButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.decrementSecond()};this.secondKeyDownHandler=a=>{var {key:b}=a;if(u.numberKeys.includes(b))a=parseInt(b),
h.isValidNumber(this.second)&&this.second.startsWith("0")&&(b=parseInt(this.second),a=5<b?a:`${b}${a}`),this.setValuePart("second",a);else switch(b){case "Backspace":case "Delete":this.setValuePart("second",null);break;case "ArrowDown":a.preventDefault();this.decrementSecond();break;case "ArrowUp":a.preventDefault();this.incrementSecond();break;case " ":a.preventDefault()}};this.secondUpButtonKeyDownHandler=a=>{this.buttonActivated(a)&&this.incrementSecond()};this.setHourEl=a=>this.hourEl=a;this.setMeridiemEl=
a=>this.meridiemEl=a;this.setMinuteEl=a=>this.minuteEl=a;this.setSecondEl=a=>this.secondEl=a;this.setValue=(a,b=!0)=>{if(q(a)){const {hour:g,minute:d,second:k}=z(a),{effectiveLocale:l,numberingSystem:n}=this,{localizedHour:t,localizedHourSuffix:S,localizedMinute:T,localizedMinuteSuffix:U,localizedSecond:V,localizedSecondSuffix:W,localizedMeridiem:J}=E({value:a,locale:l,numberingSystem:n});this.localizedHour=t;this.localizedHourSuffix=S;this.localizedMinute=T;this.localizedMinuteSuffix=U;this.localizedSecond=
V;this.localizedSecondSuffix=W;this.hour=g;this.minute=d;this.second=k;if(J){this.localizedMeridiem=J;var c=this.hour;h.isValidNumber(c)?(c=parseInt(c),c=0<=c&&11>=c?"AM":"PM"):c=null;this.meridiem=c;a=F({value:a,locale:l,numberingSystem:n});this.meridiemOrder=this.getMeridiemOrder(a)}}else this.value=this.second=this.minute=this.meridiem=this.localizedSecondSuffix=this.localizedSecond=this.localizedMinuteSuffix=this.localizedMinute=this.localizedMeridiem=this.localizedHourSuffix=this.localizedHour=
this.hour=null;b&&this.calciteInternalTimePickerChange.emit()};this.setValuePart=(a,b,c=!0)=>{const {effectiveLocale:g,numberingSystem:d}=this;if("meridiem"===a){if(this.meridiem=b,h.isValidNumber(this.hour)){a=parseInt(this.hour);switch(b){case "AM":12<=a&&(this.hour=r(a-12));break;case "PM":12>a&&(this.hour=r(a+12))}this.localizedHour=C({value:this.hour,part:"hour",locale:g,numberingSystem:d})}}else this[a]="number"===typeof b?r(b):b,this[`localized${a.charAt(0).toUpperCase()+a.slice(1)}`]=C({value:this[a],
part:a,locale:g,numberingSystem:d});this.localizedMeridiem=(this.value=this.hour&&this.minute?`${this.hour}:${this.minute}:${this.second&&this.showSecond?this.second:"00"}`:null)?E({value:this.value,locale:g,numberingSystem:d})?.localizedMeridiem||null:C({value:this.meridiem,part:"meridiem",locale:g,numberingSystem:d});c&&this.calciteInternalTimePickerChange.emit()};this.scale="m";this.step=60;this.numberingSystem=void 0;this.value=null;this.messageOverrides=this.messages=void 0;this.effectiveLocale=
"";this.second=this.minute=this.meridiem=this.localizedSecondSuffix=this.localizedSecond=this.localizedMinuteSuffix=this.localizedMinute=this.localizedMeridiem=this.localizedHourSuffix=this.localizedHour=this.hourCycle=this.hour=void 0;this.showSecond=60>this.step;this.defaultMessages=void 0}valueWatcher(a){this.setValue(a,!1)}onMessagesChange(){}effectiveLocaleWatcher(){this.updateLocale()}hostBlurHandler(){this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(a){const {defaultPrevented:b,
key:c}=a;if(!b)switch(this.activeEl){case this.hourEl:"ArrowRight"===c&&(this.focusPart("minute"),a.preventDefault());break;case this.minuteEl:switch(c){case "ArrowLeft":this.focusPart("hour");a.preventDefault();break;case "ArrowRight":60!==this.step?(this.focusPart("second"),a.preventDefault()):"12"===this.hourCycle&&(this.focusPart("meridiem"),a.preventDefault())}break;case this.secondEl:switch(c){case "ArrowLeft":this.focusPart("minute");a.preventDefault();break;case "ArrowRight":"12"===this.hourCycle&&
(this.focusPart("meridiem"),a.preventDefault())}break;case this.meridiemEl:switch(c){case "ArrowLeft":60!==this.step?this.focusPart("second"):this.focusPart("minute"),a.preventDefault()}}}async setFocus(){await p.componentLoaded(this);this.el?.focus()}async focusPart(a){await p.componentLoaded(this);this[`${a||"hour"}El`]?.focus()}buttonActivated(a){const {key:b}=a;" "===b&&a.preventDefault();return u.isActivationKey(b)}getMeridiemOrder(a){const b=this.effectiveLocale;return a&&"ar"!==b&&"he"!==b?
a.findIndex(c=>c.value===this.localizedMeridiem):0}updateLocale(){x.updateMessages(this,this.effectiveLocale);const a=v(this.effectiveLocale,this.numberingSystem).formatToParts(new Date(Date.UTC(0,0,0,0,0,0)));this.hourCycle=m("meridiem",a)?"12":"24";this.setValue(this.value,!1)}connectedCallback(){h.connectLocalized(this);this.updateLocale();x.connectMessages(this);this.meridiemOrder=this.getMeridiemOrder(F({value:"0:00:00",locale:this.effectiveLocale,numberingSystem:this.numberingSystem}))}async componentWillLoad(){p.setUpLoadableComponent(this);
await x.setUpMessages(this)}componentDidLoad(){p.setComponentLoaded(this)}disconnectedCallback(){h.disconnectLocalized(this);x.disconnectMessages(this)}render(){const a=h.isValidNumber(this.hour),b="s"===this.scale||"m"===this.scale?"s":"m",c=h.isValidNumber(this.minute),g=h.isValidNumber(this.second),d="12"===this.hourCycle;return e.h("div",{class:{[f.timePicker]:!0,[f.showMeridiem]:d,[f.showSecond]:this.showSecond,[f[`scale-${this.scale}`]]:!0},dir:"ltr"},e.h("div",{class:f.column,role:"group"},
e.h("span",{"aria-label":this.messages.hourUp,class:{[f.button]:!0,[f.buttonHourUp]:!0,[f.buttonTopLeft]:!0},onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-up",scale:b})),e.h("span",{"aria-label":this.messages.hour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":a&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[f.input]:!0,[f.hour]:!0},onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,
ref:this.setHourEl,role:"spinbutton",tabIndex:0},this.localizedHour||"--"),e.h("span",{"aria-label":this.messages.hourDown,class:{[f.button]:!0,[f.buttonHourDown]:!0,[f.buttonBottomLeft]:!0},onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-down",scale:b}))),e.h("span",{class:f.delimiter},this.localizedHourSuffix),e.h("div",{class:f.column,role:"group"},e.h("span",{"aria-label":this.messages.minuteUp,class:{[f.button]:!0,
[f.buttonMinuteUp]:!0},onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-up",scale:b})),e.h("span",{"aria-label":this.messages.minute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":c&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[f.input]:!0,[f.minute]:!0},onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:this.setMinuteEl,role:"spinbutton",tabIndex:0},this.localizedMinute||
"--"),e.h("span",{"aria-label":this.messages.minuteDown,class:{[f.button]:!0,[f.buttonMinuteDown]:!0},onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-down",scale:b}))),this.showSecond&&e.h("span",{class:f.delimiter},this.localizedMinuteSuffix),this.showSecond&&e.h("div",{class:f.column,role:"group"},e.h("span",{"aria-label":this.messages.secondUp,class:{[f.button]:!0,[f.buttonSecondUp]:!0},onClick:this.incrementSecond,
onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-up",scale:b})),e.h("span",{"aria-label":this.messages.second,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":g&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[f.input]:!0,[f.second]:!0},onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:this.setSecondEl,role:"spinbutton",tabIndex:0},this.localizedSecond||"--"),e.h("span",{"aria-label":this.messages.secondDown,
class:{[f.button]:!0,[f.buttonSecondDown]:!0},onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-down",scale:b}))),this.localizedSecondSuffix&&e.h("span",{class:f.delimiter},this.localizedSecondSuffix),d&&e.h("div",{class:{[f.column]:!0,[f.meridiemStart]:0===this.meridiemOrder},role:"group"},e.h("span",{"aria-label":this.messages.meridiemUp,class:{[f.button]:!0,[f.buttonMeridiemUp]:!0,[f.buttonTopRight]:!0},onClick:this.incrementMeridiem,
onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-up",scale:b})),e.h("span",{"aria-label":this.messages.meridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":"PM"===this.meridiem&&"2"||"1","aria-valuetext":this.meridiem,class:{[f.input]:!0,[f.meridiem]:!0},onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:this.setMeridiemEl,role:"spinbutton",tabIndex:0},this.localizedMeridiem||"--"),e.h("span",{"aria-label":this.messages.meridiemDown,
class:{[f.button]:!0,[f.buttonMeridiemDown]:!0,[f.buttonBottomRight]:!0},onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},e.h("calcite-icon",{icon:"chevron-down",scale:b}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{value:["valueWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:400;outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:400}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:400;outline-offset:0}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}"}},
[17,"calcite-time-picker",{scale:[513],step:[514],numberingSystem:[1,"numbering-system"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hour:[32],hourCycle:[32],localizedHour:[32],localizedHourSuffix:[32],localizedMeridiem:[32],localizedMinute:[32],localizedMinuteSuffix:[32],localizedSecond:[32],localizedSecondSuffix:[32],meridiem:[32],minute:[32],second:[32],showSecond:[32],defaultMessages:[32],setFocus:[64]},[[0,"blur","hostBlurHandler"],[0,"focus","hostFocusHandler"],
[0,"keydown","keyDownHandler"]]]);G();const I=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInputTimePickerChange=e.createEvent(this,"calciteInputTimePickerChange",7);this.internalValueChange=!1;this.previousValidValue=null;this.referenceElementId=`input-time-picker-${K.guid()}`;this.calciteInternalInputBlurHandler=()=>{this.open=!1;const a=this.shouldIncludeSeconds(),{effectiveLocale:b,numberingSystem:c,value:g,calciteInputEl:d}=
this;h.numberStringFormatter.numberFormatOptions={locale:b,numberingSystem:c,useGrouping:!1};var k=h.numberStringFormatter.delocalize(d.value);k=y({value:k,includeSeconds:a,locale:b,numberingSystem:c});this.setInputValue(k||y({value:g,locale:b,numberingSystem:c,includeSeconds:a}))};this.calciteInternalInputFocusHandler=a=>{this.readOnly||(this.open=!0,a.stopPropagation())};this.calciteInputInputHandler=a=>{a=a.target;h.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,
useGrouping:!1};a=h.numberStringFormatter.delocalize(a.value);this.setValue({value:a});a=a.split("").map(b=>u.numberKeys.includes(b)?h.numberStringFormatter.numberFormatter.format(Number(b)):b).join("");this.setInputValue(a)};this.timePickerChangeHandler=a=>{a.stopPropagation();this.setValue({value:a.target.value,origin:"time-picker"})};this.keyDownHandler=a=>{const {defaultPrevented:b,key:c}=a;b||("Enter"===c&&w.submitForm(this)&&a.preventDefault(),"Escape"===c&&this.open&&(this.open=!1,a.preventDefault()))};
this.setCalcitePopoverEl=a=>{this.popoverEl=a};this.setCalciteInputEl=a=>{this.calciteInputEl=a};this.setCalciteTimePickerEl=a=>{this.calciteTimePickerEl=a};this.setInputValue=a=>{this.calciteInputEl&&(this.calciteInputEl.value=a)};this.setValue=({value:a,origin:b="input"})=>{const c=this.value;if(q(a)){var [g,d,k]=a.split(":");var l=r(parseInt(g));var n=r(parseInt(d));if(k){var t=r(parseInt(k));l=`${l}:${n}:${t}`}else l=`${l}:${n}`}else l=null;n=y({value:l,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,
includeSeconds:this.shouldIncludeSeconds()});this.internalValueChange="external"!==b&&"loading"!==b;t="loading"!==b&&"external"!==b&&(a!==this.previousValidValue&&!a||!(this.previousValidValue||!l)||l!==this.previousValidValue&&l);a?(t&&(this.previousValidValue=l),l&&l!==this.value&&(this.value=l),this.localizedValue=n):(this.value=a,this.localizedValue=null);"time-picker"!==b&&"external"!==b||this.setInputValue(n);t&&(this.calciteInputTimePickerChange.emit().defaultPrevented?(this.internalValueChange=
!1,this.value=c,this.setInputValue(c),this.previousValidValue=c):this.previousValidValue=l)};this.readOnly=this.disabled=this.open=!1;this.numberingSystem=this.name=this.messagesOverrides=void 0;this.required=!1;this.scale="m";this.overlayPositioning="absolute";this.placement="auto";this.step=60;this.value=null;this.effectiveLocale="";this.localizedValue=void 0}openHandler(a){this.disabled||this.readOnly?this.open=!1:a&&this.reposition(!0)}handleDisabledAndReadOnlyChange(a){a||(this.open=!1)}valueWatcher(a){this.internalValueChange||
this.setValue({value:a,origin:"external"});this.internalValueChange=!1}effectiveLocaleWatcher(){this.setInputValue(y({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()}))}clickHandler(a){a.composedPath().includes(this.calciteTimePickerEl)||this.setFocus()}timePickerBlurHandler(a){a.preventDefault();a.stopPropagation();this.open=!1}timePickerFocusHandler(a){a.preventDefault();a.stopPropagation();this.readOnly||(this.open=!0)}async setFocus(){await p.componentLoaded(this);
this.el.focus()}async reposition(a=!1){this.popoverEl?.reposition(a)}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return 60>this.step}connectedCallback(){h.connectLocalized(this);this.value&&this.setValue({value:q(this.value)?this.value:void 0,origin:"loading"});B.connectLabel(this);w.connectForm(this)}componentWillLoad(){p.setUpLoadableComponent(this)}componentDidLoad(){p.setComponentLoaded(this);this.setInputValue(this.localizedValue)}disconnectedCallback(){B.disconnectLabel(this);w.disconnectForm(this);
h.disconnectLocalized(this)}componentDidRender(){L.updateHostInteraction(this)}render(){const a=`${this.referenceElementId}-popover`;return e.h(e.Host,{onKeyDown:this.keyDownHandler},e.h("div",{"aria-controls":a,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":a,id:this.referenceElementId,role:"combobox"},e.h("calcite-input",{disabled:this.disabled,icon:"clock",label:B.getLabelText(this),onCalciteInputInput:this.calciteInputInputHandler,onCalciteInternalInputBlur:this.calciteInternalInputBlurHandler,
onCalciteInternalInputFocus:this.calciteInternalInputFocusHandler,readOnly:this.readOnly,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),e.h("calcite-popover",{focusTrapDisabled:!0,id:a,label:"Time Picker",open:this.open,overlayPositioning:this.overlayPositioning,placement:this.placement,ref:this.setCalcitePopoverEl,referenceElement:this.referenceElementId,triggerDisabled:!0},e.h("calcite-time-picker",{lang:this.effectiveLocale,messageOverrides:this.messagesOverrides,numberingSystem:this.numberingSystem,
onCalciteInternalTimePickerChange:this.timePickerChangeHandler,ref:this.setCalciteTimePickerEl,scale:this.scale,step:this.step,value:this.value})),e.h(w.HiddenFormInputSlot,{component:this}))}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},
[17,"calcite-input-time-picker",{open:[1540],disabled:[516],readOnly:[516,"read-only"],messagesOverrides:[16],name:[1],numberingSystem:[1,"numbering-system"],required:[516],scale:[513],overlayPositioning:[1,"overlay-positioning"],placement:[513],step:[2],value:[1025],effectiveLocale:[32],localizedValue:[32],setFocus:[64],reposition:[64]},[[0,"click","clickHandler"],[0,"calciteInternalTimePickerBlur","timePickerBlurHandler"],[0,"calciteInternalTimePickerFocus","timePickerFocusHandler"]]]);H();A.CalciteInputTimePicker=
I;A.defineCustomElement=H;Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});