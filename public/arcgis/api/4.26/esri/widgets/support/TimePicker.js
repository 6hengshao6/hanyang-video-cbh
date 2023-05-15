// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../core/events ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./TimePickerViewModel ./widgetUtils ./decorators/messageBundle ./jsxFactory ../../chunks/datetime ../../intl/date ../../intl/locale".split(" "),function(p,n,h,B,q,H,I,J,C,D,u,K,E,v,l,r,w){function x(d){return null!=d&&r.formatDate(d.valueOf(),
t).includes(" ")}const t={hour:"numeric",minute:"numeric"},F=["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Tab"];h=function(d){function m(a,b){a=G.call(this,a,b);a._activePart=null;a._activeTime=null;a.messages=null;a.viewModel=new u;return a}p._inherits(m,d);var G=p._createSuper(m);d=m.prototype;d.render=function(){const a=this._activeTime||this.viewModel.value;return v.tsx("div",{class:"esri-time-picker esri-widget"},v.tsx("input",{afterUpdate:this._handleInputUpdate,"aria-label":this.messages.inputTitle,
bind:this,class:this.classes("esri-time-picker__input","esri-input"),onblur:this._handleInputBlur,onfocus:this._handleInputFocus,onkeydown:this._handleInputKeydown,oninput:this._handleInputKeydown,onclick:this._handleInputClick,onpaste:this._handleInputPaste,onwheel:this._handleInputWheel,value:r.formatDate(a.valueOf(),t)}))};d._handleInputBlur=function(){this._activeTime?.isValid&&(this.viewModel.value=this._activeTime.toJSDate());this._activePart=this._activeTime=null};d._handleInputUpdate=function(a){this._selectPart(a,
this._activePart)};d._selectPart=function(a,b){var c=this._activeTime;if(c&&a){c=r.formatDate(c.valueOf(),t);var f=c.indexOf(":");if("hours"===b)a.setSelectionRange(0,f);else{var e=f+1;f=e+2;"minutes"===b?a.setSelectionRange(e,f):(c=c.length,"meridiem"===b&&a.setSelectionRange(f+1,c))}}};d._handleInputFocus=function(a){this._activePart="hours";this._activeTime=l.DateTime.fromJSDate(this.viewModel.value).startOf("minute");this._selectPart(a.target,"hours")};d._caretIndexToPartName=function(a){var b=
this._activeTime?.toFormat("t",{locale:w.getLocale(),numberingSystem:"latn"});if(!b)return null;const c=b.indexOf(":");b=b.indexOf(" ");return a<=c?"hours":a>c&&a<=b?"minutes":"meridiem"};d._handleInputKeydown=function(a){const {ctrlKey:b,metaKey:c,shiftKey:f}=a;var e=B.eventKey(a),k=this._activeTime,g=this._activePart;const y=/\d/.test(e),z=/^a|p$/i.test(e),A=c||b;if((F.includes(e)||y||"meridiem"===g&&z&&!A)&&null!=k){if("ArrowLeft"===e)this._activePart=this._prevPart();else if("ArrowRight"===e)this._activePart=
this._nextPart();else if("Tab"===e){g=f?this._prevPart():this._nextPart();if(g===this._activePart)return;this._activePart=g}else"ArrowUp"===e?this._shift("up",g):"ArrowDown"===e?this._shift("down",g):y?this._setTime(k,g,Number(e)):z&&(e=e.toLowerCase(),k=k.hour,("a"===e&&12<=k||"p"===e&&12>k)&&this._shift("up",g));a.preventDefault();a.stopImmediatePropagation()}else A||(a.preventDefault(),a.stopImmediatePropagation())};d._handleInputClick=function(a){a=a.target;this._activePart=null;this.renderNow();
this._activePart=this._caretIndexToPartName(a.selectionStart??0)};d._getOrderedParts=function(){return x(this._activeTime)?["hours","minutes","meridiem"]:["hours","minutes"]};d._prevPart=function(){const a=this._getOrderedParts(),b=this._activePart?a.indexOf(this._activePart)-1:0;return a[Math.max(b,0)]};d._nextPart=function(){const a=this._getOrderedParts(),b=this._activePart?a.indexOf(this._activePart)+1:0;return a[Math.min(b,a.length-1)]};d._setTime=function(a,b,c){if("hours"===b){b=x(a)?12:24;
var f=`${a.hour%b}`;const e=Number(`${f}${c}`);2===f.length||e>b?this._activeTime=a.set({hour:c}):e<=b&&(this._activeTime=a.set({hour:e}))}else"minutes"===b&&(b=`${a.minute}`,f=Number(`${b}${c}`),2===b.length||59<f?this._activeTime=a.set({minute:c}):59>f&&(this._activeTime=a.set({minute:f})))};d._parseTime=function(a){if(!a)return null;const b={locale:w.getLocale(),numberingSystem:"latn"};let c=l.DateTime.fromFormat(a,"t",b);if(c.isValid)return c;c=l.DateTime.fromISO(a,b);if(c.isValid)return c;c=
l.DateTime.fromRFC2822(a,b);if(c.isValid)return c;c=l.DateTime.fromJSDate(new Date(a));return c.isValid?c:null};d._handleInputPaste=function(a){var b=a.clipboardData?.getData("text/plain");if(b=this._parseTime(b))this._activeTime=b;a.preventDefault();a.stopImmediatePropagation()};d._handleInputWheel=function(a){this._shift(0>a.deltaY?"up":"down",this._activePart)};d._shift=function(a,b){b&&(this._activeTime=this._activeTime?.["up"===a?"plus":"minus"]({["hours"===b?"hour":"minutes"===b?"minute":"hours"]:"meridiem"===
b?12:1})??null)};p._createClass(m,[{key:"value",get:function(){return this.viewModel.value},set:function(a){this.viewModel.value=a}}]);return m}(D);n.__decorate([q.property(),E.messageBundle("esri/widgets/support/t9n/TimePicker")],h.prototype,"messages",void 0);n.__decorate([q.property()],h.prototype,"value",null);n.__decorate([q.property({type:u})],h.prototype,"viewModel",void 0);return h=n.__decorate([C.subclass("esri.widgets.support.TimePicker")],h)});