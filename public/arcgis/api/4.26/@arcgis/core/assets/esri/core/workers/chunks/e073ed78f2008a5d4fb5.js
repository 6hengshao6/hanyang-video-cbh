"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9352],{9352:(e,t,s)=>{s.r(t),s.d(t,{DictionaryLoader:()=>p});var i=s(48027),o=s(82058),r=s(60991),n=s(92143),l=s(89241),a=s(71252),c=s(50406),y=s(40642),m=s(60217),u=s(63571);s(54174),s(82426),s(72836),s(29794),s(7200),s(91306),s(48578),s(31450),s(71552),s(76506),s(88762),s(32101),s(91700),s(6906),s(74569),s(21801),s(34250),s(60474),s(66396),s(86656),s(17533),s(6540),s(73796),s(12047),s(21972),s(91055),s(19657),s(97714),s(60947),s(53785),s(57251),s(89623),s(2906),s(91597),s(86787),s(35132),s(84069),s(44567),s(98380),s(92482),s(92896),s(22781),s(32422),s(59465),s(14249),s(30776);const h="esri.renderers.support.DictionaryLoader",f={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class p{constructor(e,t,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new l.L(100),this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=s}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let s;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{s=await this._dictionaryPromise}catch(e){if((0,c.D_)(e))return this._dictionaryPromise=null,null}const o={};if(this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t];if(s&&null!=e.attributes[s]){const i=""+e.attributes[s];o[t]=i}else o[t]=""}const r=s?.(o,t);if(!r||"string"!=typeof r)return null;const n=(0,y.n)(r).toString(),l=this._symbolCache.get(n);if(l)return l.catch((()=>{this._symbolCache.pop(n)})),l;const m=r.split(";"),u=[],h=[];for(const e of m)if(e)if(e.includes("po:")){const t=e.substr(3).split("|");if(3===t.length){const e=t[0],s=t[1];let o=t[2];if("DashTemplate"===s)o=o.split(" ").map((e=>Number(e)));else if("Color"===s){const e=new i.Z(o).toRgba();o=[e[0],e[1],e[2],255*e[3]]}else o=Number(o);h.push({primitiveName:e,propertyName:s,value:o})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){u.push(t);break}}else this._itemNames.has(e)&&u.push(e);const f=!(0,a.i)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,p=this._cimPartsToCIMSymbol(u,h,f,t);return this._symbolCache.put(n,p,1),p}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void n.L.getLogger(h).error("no valid URL!");const t=(0,o.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:(0,a.i)(e)?e.signal:null}),[{data:s}]=await Promise.all([t,(0,m.l)()]);if(!s)throw this._dictionaryPromise=null,new r.Z("esri.renderers.DictionaryRenderer","Bad dictionary data!");const i=s.expression,l=s.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+s.cimRefTemplateUrl,this._itemNames=new Set(s.itemsNames),this._symbolFields=l.symbol;const c={};if(this.config){const e=this.config;for(const t in e)c[t]=e[t]}if(l.configuration)for(const e of l.configuration)c.hasOwnProperty(e.name)||(c[e.name]=e.value);const y=[];if((0,a.i)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name===s));i.length>0&&y.push({...i[0],name:t})}const u=(0,m.c)(i,(0,a.i)(e)?e.spatialReference:null,y,c).then((e=>{const t={scale:0};return(s,i)=>{if((0,a.a)(e))return null;const o=e.repurposeFeature({geometry:null,attributes:s});return t.scale=(0,a.i)(i)?i.scale??void 0:void 0,e.evaluate({$feature:o,$view:t})}})).catch((e=>(n.L.getLogger(h).error("Creating dictinoary expression failed:",e),null)));return this._dictionaryPromise=u,u}async _cimPartsToCIMSymbol(e,t,s,i){const o=new Array(e.length);for(let t=0;t<e.length;t++)o[t]=this._getSymbolPart(e[t],i);const r=await Promise.all(o),n=this.fieldMap;if(n)for(const e of r)d(e,n);return new u.Z({data:this._combineSymbolParts(r,t,s)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const s=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=(0,o.default)(s,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,i);try{return(await i).data}catch(t){throw this._ongoingRequests.delete(e),t}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return s&&(i.callout=f),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}}function d(e,t){if(!e)return;const s=e.symbolLayers;if(!s)return;let i=s.length;for(;i--;){const e=s[i];e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&b(e,t)}}function b(e,t){const s=e.markerGraphics;if(s)for(const e of s){if(!e)continue;const s=e.symbol;if(s)switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":d(s,t);break;case"CIMTextSymbol":s.fieldMap=t}}}},63571:(e,t,s)=>{s.d(t,{Z:()=>p});var i,o=s(29768),r=s(76506),n=s(40642),l=s(34250),a=(s(91306),s(59465)),c=s(97714),y=s(17533),m=s(2906),u=s(14249),h=s(30776);s(48578),s(71552),s(92143),s(31450),s(60474),s(66396),s(86656),s(60991),s(57251),s(6540),s(60217),s(74569),s(21801),s(73796),s(12047),s(21972),s(91055),s(19657),s(6906),s(50406),s(60947),s(53785),s(89623),s(91597),s(86787),s(35132),s(84069),s(44567),s(98380),s(92482),s(82426),s(72836),s(29794),s(7200),s(92896),s(22781),s(32422),s(48027),s(54174);let f=i=class extends h.Z{constructor(e){super(e),this.data=null,this.type="cim"}readData(e,t){return t}writeData(e,t){if(e)for(const s in e)t[s]=e[s]}async collectRequiredFields(e,t){if("CIMSymbolReference"===this.data?.type){const s=this.data.primitiveOverrides;if(s){const i=s.map((s=>{const i=s.valueExpressionInfo;return(0,u.io)(e,t,i.expression)}));await Promise.all(i)}}}clone(){return new i({data:(0,r.d9)(this.data)})}hash(){return(0,n.n)(JSON.stringify(this.data)).toString()}};(0,o._)([(0,l.Cb)({json:{write:!1}})],f.prototype,"color",void 0),(0,o._)([(0,l.Cb)({json:{write:!0}})],f.prototype,"data",void 0),(0,o._)([(0,c.r)("data",["symbol"])],f.prototype,"readData",null),(0,o._)([(0,m.w)("data",{})],f.prototype,"writeData",null),(0,o._)([(0,a.e)({CIMSymbolReference:"cim"},{readOnly:!0})],f.prototype,"type",void 0),f=i=(0,o._)([(0,y.j)("esri.symbols.CIMSymbol")],f);const p=f},30776:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(29768),o=s(48027),r=s(57251),n=s(12047),l=s(34250),a=(s(91306),s(48578),s(97714)),c=s(17533);s(54174),s(82426),s(72836),s(29794),s(7200),s(71552),s(76506),s(21972),s(60474),s(66396),s(86656),s(92143),s(31450),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);const y=new r.J({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let m=0,u=class extends n.wq{constructor(e){super(e),this.id="sym"+m++,this.type=null,this.color=new o.Z([0,0,0,1])}readColor(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,t){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,i._)([(0,l.Cb)({type:y.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:y.write}}})],u.prototype,"type",void 0),(0,i._)([(0,l.Cb)({type:o.Z,json:{write:{allowNull:!0}}})],u.prototype,"color",void 0),(0,i._)([(0,a.r)("color")],u.prototype,"readColor",null),u=(0,i._)([(0,c.j)("esri.symbols.Symbol")],u);const h=u}}]);