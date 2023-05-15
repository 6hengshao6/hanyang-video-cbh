/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as e,u as t,i as s}from"./maybe.js";import{W as a}from"./WorkerHandle.js";class i{constructor(e,t,s,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=s,this.noDataValue=a)}get hasNoDataValues(){if(e(this._hasNoDataValues)){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),t(this._minValue)}get maxValue(){return this._ensureBounds(),t(this._maxValue)}_ensureBounds(){if(s(this._minValue))return;const{noDataValue:e,values:t}=this;let a=1/0,i=-1/0,u=!0;for(const s of t)s===e?this._hasNoDataValues=!0:(a=s<a?s:a,i=s>i?s:i,u=!1);u?(this._minValue=0,this._maxValue=0):(this._minValue=a,this._maxValue=i>-3e38?i:0)}}class u extends a{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,s){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},s):Promise.resolve(null)}release(){--this.ref<=0&&(l.forEach(((e,t)=>{e===this&&l.delete(t)})),this.destroy())}}const l=new Map;function h(e=null){let a=l.get(t(e));return a||(s(e)?(a=new u((t=>e.immediate.schedule(t))),l.set(e,a)):(a=new u,l.set(null,a))),++a.ref,a}export{i as E,h as a};