/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{i as s}from"./maybe.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{unpackFieldNames as a,populateMissingFields as p}from"../layers/support/fieldUtils.js";import{a as o,g as i}from"./popupUtils.js";const c=c=>{let l=class extends c{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:r}=s;if(!r)throw new t("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});if(!o(s,e))throw new t("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,t){this._validateFetchPopupFeatures(t);const r=s(t)?t.clientGraphics:null;if(!r||0===r.length)return[];const c="scene"===this.layer.type&&s(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer;let l=[];"fieldsIndex"in this.layer&&(l=a(this.layer.fieldsIndex,await i(c,o(this.layer,t)))),await this.prepareFetchPopupFeatures(l);const n=new Set,u=[],h=[];for(const e of r)p(l,e,n)?h.push(e):u.push(e);return 0===h.length?u:this.whenGraphicAttributes(h,[...n]).catch((()=>h)).then((e=>u.concat(e)))}};return l=e([r("esri.views.3d.layers.support.PopupSceneLayerView")],l),l};export{c as P};
