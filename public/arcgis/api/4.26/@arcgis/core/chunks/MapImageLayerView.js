/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{g as o}from"./commonProperties2.js";import{E as s}from"./ExportImageParameters.js";const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new s({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return e([r()],a.prototype,"exportImageParameters",void 0),e([r({readOnly:!0})],a.prototype,"floors",null),e([r({readOnly:!0})],a.prototype,"exportImageVersion",null),e([r()],a.prototype,"layer",void 0),e([r()],a.prototype,"suspended",void 0),e([r(o)],a.prototype,"timeExtent",void 0),a=e([t("esri.views.layers.MapImageLayerView")],a),a};export{p as M};
