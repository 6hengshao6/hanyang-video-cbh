// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../portal/Portal ../../Widget ../../support/componentsUtils ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(g,
f,n,h,l,q,k,y,z,A,r,t,u,v,B,p,d){f.SaveLayer=function(e){function m(a,b){var c=w.call(this,a,b);c._folders=null;c._layer=null;c._layerNameInput=null;c._portalFolderCombobox=null;c._userName=null;c.messages=null;c.messagesCommon=null;c.messagesIdentity=null;c.opened=!1;c.state="initialized";c.close=()=>{c.opened=!1;c.state="initialized"};return c}n._inherits(m,e);var w=n._createSuper(m);e=m.prototype;e.loadDependencies=function(){return v.loadCalciteComponents({button:()=>new Promise((a,b)=>g(["../../../chunks/calcite-button"],
a,b)),combobox:()=>new Promise((a,b)=>g(["../../../chunks/calcite-combobox"],a,b)),"combobox-item":()=>new Promise((a,b)=>g(["../../../chunks/calcite-combobox-item"],a,b)),icon:()=>new Promise((a,b)=>g(["../../../chunks/calcite-icon"],a,b)),input:()=>new Promise((a,b)=>g(["../../../chunks/calcite-input"],a,b)),label:()=>new Promise((a,b)=>g(["../../../chunks/calcite-label"],a,b)),loader:()=>new Promise((a,b)=>g(["../../../chunks/calcite-loader"],a,b)),panel:()=>new Promise((a,b)=>g(["../../../chunks/calcite-panel"],
a,b))})};e.open=async function(a){this.state="initialized";this.opened=!0;this._layer=a;this.state="connect-to-portal";a=t.getDefault();try{await a.signIn()}catch(b){q.isAbortError(b)||"identity-manager:user-aborted"===b.name?this.close():this.state="connect-to-portal-error";return}this.state="fetch-portal-information";({user:a}=a);this._userName=a?.username;try{this._folders=await a?.fetchFolders()}catch{this.state="fetch-portal-information-error";return}this.state="save-layer"};e.render=function(){switch(this.state){case "initialized":return this._renderInitialized();
case "connect-to-portal":return this._renderProcess(this.messagesIdentity.lblSigning);case "connect-to-portal-error":return this._renderError(this.messages.errors.authenticating);case "fetch-portal-information":return this._renderProcess(this.messages.processing.fetching);case "fetch-portal-information-error":return this._renderError(this.messages.errors.fetching);case "save-layer":return this._renderSaveLayer();case "saving":return this._renderProcess(this.messages.processing.saving);case "saving-error":return this._renderError(this.messages.errors.saving)}};
e._renderError=function(a){return d.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-error-panel"},d.tsx("div",{class:"esri-save-layer__error"},d.tsx("calcite-icon",{class:"esri-save-layer__error-icon",icon:"exclamation-mark-triangle",scale:"l",textLabel:this.messagesCommon.errorMessage}),d.tsx("calcite-label",{class:"esri-save-layer__error-label"},a)),d.tsx("calcite-button",{appearance:"outline",onclick:this.close,slot:"footer-actions",width:"half"},
this.messagesCommon.close))};e._renderInitialized=function(){return d.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-initialize-panel"})};e._renderProcess=function(a){return d.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-process-panel"},d.tsx("calcite-loader",{class:"esri-save-layer__process-loader",label:a}),d.tsx("calcite-label",{class:"esri-save-layer__process-label",alignment:"center"},
a))};e._renderSaveLayer=function(){if(l.isNone(this._layer)||l.isNone(this._folders)||l.isNone(this._userName))return this._renderInitialized();var {stops:a}=this._layer,b=a.getItemAt(0).name;a=a.getItemAt(a.length-1).name;b=`${b} - ${a}`;a=this._folders.map(c=>d.tsx("calcite-combobox-item",{key:`${"esri-save-layer"}-folder-${c.id}`,textLabel:c.title??"",value:c.id}));a.unshift(d.tsx("calcite-combobox-item",{key:"esri-save-layer-folder-home",selected:!0,textLabel:`${this._userName} (${this.messagesCommon.home})`,
value:null}));return d.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-save-panel"},d.tsx("calcite-label",{class:"esri-save-layer__layer-name-label"},this.messages.laverName,d.tsx("calcite-input",{afterCreate:c=>{this._layerNameInput=c},label:this.messages.laverName,value:b})),d.tsx("calcite-label",{class:"esri-save-layer__portal-folder-label"},this.messages.saveInFolder,d.tsx("calcite-combobox",{afterCreate:c=>{this._portalFolderCombobox=c},label:this.messages.saveInFolder,
overlayPositioning:"fixed",selectionMode:"single"},a)),d.tsx("calcite-button",{onclick:()=>this._saveButtonClick(),slot:"footer-actions",width:"half"},this.messagesCommon.save),d.tsx("calcite-button",{appearance:"outline",onclick:()=>{this.close()},slot:"footer-actions",width:"half"},this.messagesCommon.cancel))};e._saveButtonClick=function(){this.state="saving";this._saveLayer().then(()=>{this.close()}).catch(()=>{this.state="saving-error"})};e._saveLayer=async function(){if(!l.isNone(this._layer)&&
!l.isNone(this._folders)){var a=this._layerNameInput?.value,b=this._portalFolderCombobox?.value,c=this._folders.find(x=>x.id===b);await this._layer.saveAs({title:a},{folder:c})}};n._createClass(m,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}}]);return m}(u);h.__decorate([k.property()],f.SaveLayer.prototype,"label",null);h.__decorate([k.property(),p.messageBundle("esri/widgets/support/t9n/SaveLayer")],f.SaveLayer.prototype,"messages",
void 0);h.__decorate([k.property(),p.messageBundle("esri/t9n/common")],f.SaveLayer.prototype,"messagesCommon",void 0);h.__decorate([k.property(),p.messageBundle("esri/identity/t9n/identity")],f.SaveLayer.prototype,"messagesIdentity",void 0);h.__decorate([k.property()],f.SaveLayer.prototype,"opened",void 0);h.__decorate([k.property()],f.SaveLayer.prototype,"state",void 0);f.SaveLayer=h.__decorate([r.subclass("esri.widgets.Directions.SaveLayer")],f.SaveLayer);Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});