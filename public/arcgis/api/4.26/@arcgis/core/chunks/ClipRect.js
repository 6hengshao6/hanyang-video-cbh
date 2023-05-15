/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{JSONSupport as e}from"../core/JSONSupport.js";let s=class extends e{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([r({readOnly:!0})],s.prototype,"version",null),s=t([o("esri.views.layers.support.ClipArea")],s);const i=s;var p;let m=p=class extends i{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([r({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),t([r({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),t([r({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),t([r({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),m=p=t([o("esri.views.layers.support.ClipRect")],m);const n=m;export{i as C,n as a};
