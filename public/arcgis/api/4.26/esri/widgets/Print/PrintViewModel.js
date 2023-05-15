// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/Collection ../../core/Error ../../core/lang ../../core/Loadable ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../intl/date ../../intl/locale ../../portal/Portal ../../rest/geoprocessor/execute ../../rest/geoprocessor/GPOptions ../../core/has ../../geometry/support/normalizeUtils ../../layers/support/Field ../../layers/support/MapImage ../../config ../../kernel ../../core/urlUtils ../../rest/support/DataFile ../../rest/support/FeatureSet ../../rest/support/LinearUnit ../../rest/support/ParameterValue ../../rest/support/RasterData ../../rest/support/JobInfo ../../rest/print ../../rest/support/fileFormat ../../rest/support/layoutTemplate ../../rest/support/PrintParameters ../../rest/support/PrintTemplate ./CustomTemplate".split(" "),
function(v,k,D,g,u,E,F,G,l,S,H,x,I,y,J,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ha,K,z,w,L,M,A){function N(h){h.layoutOptions||(h.layoutOptions={});h.layoutOptions.customTextElements||(h.layoutOptions.customTextElements=[]);if(!h.layoutOptions.customTextElements.find(q=>"date"in q)){({customTextElements:h}=h.layoutOptions);let q=x.formatDate(Date.now(),x.convertDateFormatToIntlOptions("short-date"));"ar"===I.getLanguage()&&(q="\u200f"+q);h.push({date:q})}}const B=g.ofType(A);g=function(h){function q(a){a=
O.call(this,a);a._serviceTemplateCustomTextElements=null;a.allowedFormats="all";a.allowedLayouts="all";a.defaultTemplates=new B;a.extraParameters=null;a.includeDefaultTemplates=!0;a.error=null;a.portal=y.getDefault();a.printServiceUrl=null;a.templatesInfo=null;a.updateDelay=1E3;a.view=null;a.templateCustomTextElements=null;a.print=a.print.bind(v._assertThisInitialized(a));return a}v._inherits(q,h);var O=v._createSuper(q);h=q.prototype;h.destroy=function(){this.view=null};h.load=async function(a){this.addResolvingPromise(this._loadResources(a).catch(b=>
this.error=b));return this};h.print=async function(a){const {view:b,extraParameters:e,updateDelay:f}=this;if(!b)throw new u("print:view-required","view is not set");N(a);a=new L({view:b,template:a,extraParameters:e,updateDelay:f});try{return await K.execute(this.effectivePrintServiceUrl,a)}catch(d){throw new u("print:export-error","An error occurred while exporting the web map.",{error:d});}};h.toPrintTemplate=function({attributionEnabled:a,author:b,copyright:e,customTextElements:f,dpi:d,forceFeatureAttributes:c,
format:p,height:m,layout:r,legendEnabled:n,northArrowEnabled:t,scale:P,scaleEnabled:Q,title:R,width:C}){a=new M({attributionVisible:a,forceFeatureAttributes:c,format:p,layout:r,layoutOptions:{authorText:b||"",copyrightText:e||"",customTextElements:f,titleText:R||""},outScale:P??0,scalePreserved:Q});C&&(a.exportOptions.width=C);m&&(a.exportOptions.height=m);d&&(a.exportOptions.dpi=d);!n&&a.layoutOptions&&(a.layoutOptions.legendLayers=[]);(d=this.templateToNorthArrowInfo[r])&&d.visible!==t&&a.layoutOptions&&
(a.layoutOptions.elementOverrides={[d.name]:{visible:t}});return a};h._loadResources=async function(a){let b=[];var {printServiceUrl:e}=this;if(!e){if(this.destroyed)return;({portal:e}=this);try{await e.load(a)}catch(f){throw new u("print:could-not-load-portal","Cannot load print resource information from portal",{url:this.effectivePrintServiceUrl});}if(e=e.helperServices?.printTask)this._set("effectivePrintServiceUrl",e.url),b=(e?.templates??[]).map(f=>A.fromJSON(f))}0<b.length&&this.defaultTemplates.addMany(b);
if(-1===(this.effectivePrintServiceUrl?.toLowerCase().split("/")?.indexOf("gpserver")??-1))throw new u("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.effectivePrintServiceUrl});this._processLayoutTemplateInfos(await this._getLayoutTemplatesInfo(a));await this._loadServiceDescription(a)};h._loadServiceDescription=async function(a){a=await this._getPrintTemplatesFromService(a);this._set("templatesInfo",a)};h._getLayoutTemplatesInfo=async function(a){let b=
[];const e=async f=>{f=this.effectivePrintServiceUrl.replace(/(\/GPServer\/).+/i,`$1${encodeURI(f)}`);return(await J.execute(f,null,null,G.unwrap(a))).results[0].value};try{b=await e("Get Layout Templates Info Task")}catch(f){}if(!b||1>b.length)try{b=await e("Get Layout Templates Info")}catch(f){}return b};h._processLayoutTemplateInfos=function(a){const b={},e={};a.forEach(({layoutTemplate:f,layoutOptions:{customTextElements:d,mapSurroundInfos:c}})=>{f=w.fromJSON(f);b[f]=d;c&&(e[f]=c.find(p=>"CIMMarkerNorthArrow"===
p.type))});this.templateCustomTextElements=Object.freeze(b);this.templateToNorthArrowInfo=e};h._getPrintTemplatesFromService=async function(a){return D(this.effectivePrintServiceUrl,{...a,query:{f:"json"},timeout:6E4}).then(b=>{b=b&&b.data;let e=null,f=null;(b&&b.parameters).forEach(d=>{var c=d.choiceList&&d.choiceList.slice(),p=-1;c&&c.length&&d.defaultValue&&(p=c.indexOf(d.defaultValue));-1<p&&(c.splice(p,1),c.unshift(d.defaultValue));p=(m,r)=>{const n="all"===r?m:m.filter(t=>r.includes(t));return 0===
n.length?m:n};if("Format"===d.name)c=p(c.map(z.fromJSON),this.allowedFormats),d=z.fromJSON(d.defaultValue),e={defaultValue:c.includes(d)?d:c[0],choiceList:c};else if("Layout_Template"===d.name){c=c.filter(n=>"map_only"!==n.toLowerCase());let m=-1,r;c.some((n,t)=>{n=n.toLowerCase();if(n.includes("letter")&&n.includes("landscape"))return m=t,!0;n.includes("a4")&&n.includes("landscape")&&(m=t);return!1});m&&(r=c[m],c.splice(m,1),c.unshift(r));c=p(c.map(w.fromJSON),this.allowedLayouts);d=w.fromJSON(d.defaultValue);
f={defaultValue:c.includes(d)?d:c[0],choiceList:c}}});this.error=null;return{format:e,layout:f}}).catch(b=>{throw new u("print:unavailable-service-info","Can't fetch templates info from service",{error:b});})};v._createClass(q,[{key:"effectivePrintServiceUrl",get:function(){return this.printServiceUrl??null}},{key:"effectiveTemplateCustomTextElements",get:function(){if(!this._serviceTemplateCustomTextElements)return{};const a=E.clone(this._serviceTemplateCustomTextElements);this.templateCustomTextElements&&
Object.keys(this.templateCustomTextElements).forEach(b=>{const e=a[b];if(e){const f=this.templateCustomTextElements?.[b];e.forEach(d=>{const [c]=Object.entries(d)[0];f?.forEach(p=>{const [m,r]=Object.entries(p)[0];c===m&&(d[c]=r)})})}});return Object.freeze(a)}},{key:"state",get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"}}]);return q}(F);k.__decorate([l.property()],
g.prototype,"_serviceTemplateCustomTextElements",void 0);k.__decorate([l.property()],g.prototype,"allowedFormats",void 0);k.__decorate([l.property()],g.prototype,"allowedLayouts",void 0);k.__decorate([l.property({type:B})],g.prototype,"defaultTemplates",void 0);k.__decorate([l.property()],g.prototype,"extraParameters",void 0);k.__decorate([l.property()],g.prototype,"includeDefaultTemplates",void 0);k.__decorate([l.property({readOnly:!0})],g.prototype,"effectivePrintServiceUrl",null);k.__decorate([l.property()],
g.prototype,"effectiveTemplateCustomTextElements",null);k.__decorate([l.property()],g.prototype,"error",void 0);k.__decorate([l.property({type:y})],g.prototype,"portal",void 0);k.__decorate([l.property()],g.prototype,"printServiceUrl",void 0);k.__decorate([l.property({readOnly:!0})],g.prototype,"state",null);k.__decorate([l.property({readOnly:!0})],g.prototype,"templatesInfo",void 0);k.__decorate([l.property()],g.prototype,"updateDelay",void 0);k.__decorate([l.property()],g.prototype,"view",void 0);
k.__decorate([l.property()],g.prototype,"templateCustomTextElements",void 0);k.__decorate([l.property()],g.prototype,"templateToNorthArrowInfo",void 0);return g=k.__decorate([H.subclass("esri.widgets.Print.PrintViewModel")],g)});