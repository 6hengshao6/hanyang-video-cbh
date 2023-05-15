// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./Column ../../support/uriUtils".split(" "),function(r,h,n,k,g,z,A,w,x,u){g=function(p){function t(d){var a=y.call(this,d);a.activeEditInfo=null;a.cellValueValidatorFunction=({oldValue:c,value:b})=>c!==b;a.editable=!1;a.inputRenderFunction=
({root:c,column:b,rowData:e})=>{if(!a.activeEditInfo?.updating&&a.editable){var m=a.getCellValue(b,e),f=a.createInputElement({root:c,column:b,rowData:e,value:m});a._set("activeEditInfo",{column:b,input:f,root:c,rowData:e,updating:!0,oldValue:m});b=a.createInputContainer();b.appendChild(f);a.removeCellContent(c);c.appendChild(b);f.focus();f instanceof HTMLInputElement&&f.select();a.grid?.notifyResize()}};a.loadingMessage="";a.inputType="text";a.maxLength=null;a.parseInputValueFunction=({input:c})=>
c.value;a.renderFunction=c=>{const {root:b,column:e,rowData:m}=c;var {activeEditInfo:f}=r._assertThisInitialized(a);if(!f||!f.updating){var l=a.getCellValue(e,m);f=a.cellValueFormatFunction({column:e,rowData:m,value:l});b.onclick=()=>b.focus();b.ondblclick=()=>a.inputRenderFunction(c);b.ontouchend=()=>a.inputRenderFunction(c);var q=a.grid?.getSlotElementByName(b.slot)?.parentElement;q&&!q.onkeydown&&(q.onkeydown=v=>{"Enter"!==v.key||a.activeEditInfo||a.inputRenderFunction(c);"Escape"===v.key&&a.activeEditInfo&&
a.cancel()});n.isSome(l)&&n.isSome(f)?b.title=f.toString():b.title&&b.removeAttribute("title");l=u.autoLink(a.messagesURIUtils,f);f?.toString()!==b.innerHTML&&l!==b.innerHTML&&(b.innerHTML=l)}};a.required=!1;a.store=null;a.updateRowItemFunction=({rowData:c,column:b,value:e})=>{n.assertIsSome(c);c.item[b.path]=e};a.updateStoreItemFunction=async({rowData:c,column:b,value:e})=>{n.assertIsSome(c);await a.store?.updateItem({index:c.index,name:b.path,value:e})};return a}r._inherits(t,p);var y=r._createSuper(t);
p=t.prototype;p.cancel=function(){var {activeEditInfo:d}=this;if(d){var {column:a,root:c,rowData:b,oldValue:e}=d;this._set("activeEditInfo",null);d=this.cellValueFormatFunction({column:a,rowData:b,value:e});d=u.autoLink(this.messagesURIUtils,d);c.innerHTML=d;this.grid?.notifyResize()}};p.createInputContainer=function(){const d=document.createElement("div");d.classList.add("esri-editor-column__cell-input--container");return d};p.createInputElement=function({value:d}){const a=document.createElement("input");
a.classList.add("esri-editor-column__cell-input");null!=this.maxLength&&(a.maxLength=this.maxLength);a.type=this.inputType;a.value=d;a.onblur=()=>{a.onblur=null;this.submit()};return a};p.submit=async function(){var {activeEditInfo:d}=this;if(d){var {column:a,input:c,root:b,rowData:e,oldValue:m}=d;d=this.parseInputValueFunction({input:c,column:a,rowData:e});if(this.cellValueValidatorFunction({value:d,oldValue:m,column:a,rowData:e})){b.innerHTML=this.loadingMessage;this.grid?.notifyResize();try{await this.updateStoreItemFunction({rowData:e,
column:a,value:d});this.updateRowItemFunction({rowData:e,column:a,value:d});const f=this.getCellValue(a,e),l=this.cellValueFormatFunction({column:a,rowData:e,value:f});n.isSome(f)&&n.isSome(l)?b.title=l.toString():b.title&&b.removeAttribute("title");const q=u.autoLink(this.messagesURIUtils,l);b.innerHTML=q;this.emit("value-change",{column:a,rowData:e,value:f});this._set("activeEditInfo",null);this.grid?.notifyResize()}catch(f){this.cancel()}}else this.cancel()}};return r._createClass(t)}(x);h.__decorate([k.property({readOnly:!0})],
g.prototype,"activeEditInfo",void 0);h.__decorate([k.property()],g.prototype,"cellValueValidatorFunction",void 0);h.__decorate([k.property()],g.prototype,"editable",void 0);h.__decorate([k.property()],g.prototype,"inputRenderFunction",void 0);h.__decorate([k.property({constructOnly:!0})],g.prototype,"loadingMessage",void 0);h.__decorate([k.property()],g.prototype,"inputType",void 0);h.__decorate([k.property()],g.prototype,"maxLength",void 0);h.__decorate([k.property()],g.prototype,"parseInputValueFunction",
void 0);h.__decorate([k.property()],g.prototype,"renderFunction",void 0);h.__decorate([k.property()],g.prototype,"required",void 0);h.__decorate([k.property()],g.prototype,"store",void 0);h.__decorate([k.property()],g.prototype,"updateRowItemFunction",void 0);h.__decorate([k.property()],g.prototype,"updateStoreItemFunction",void 0);return g=h.__decorate([w.subclass("esri.widgets.FeatureTable.Grid.EditorColumn")],g)});