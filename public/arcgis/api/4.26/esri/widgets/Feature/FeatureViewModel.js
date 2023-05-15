// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../arcade/featureset/support/FeatureSetQueryInterceptor ../../core/Accessor ../../core/Handles ../../core/Identifiable ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/throttle ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../popup/content/TextContent ./FeatureAttachments/FeatureAttachmentsViewModel ./FeatureContent/FeatureContentViewModel ./FeatureExpression/FeatureExpressionViewModel ./FeatureFields/FeatureFieldsViewModel ./FeatureMedia/FeatureMediaViewModel ./FeatureRelationship/FeatureRelationshipViewModel ./support/arcadeFeatureUtils ./support/featureUtils ./support/relatedFeatureUtils".split(" "),
function(v,m,E,F,k,G,H,I,w,B,x,J,p,K,W,X,L,M,N,C,O,P,A,Q,R,q,u){var y;const D={attachmentsContent:!0,chartAnimation:!0,customContent:!0,expressionContent:!0,fieldsContent:!0,mediaContent:!0,textContent:!0,relationshipContent:!0};k=y=function(f){function z(a){var b=S.call(this,a);b._handles=new G;b._error=null;b._featureAbortController=null;b._graphicChangedThrottled=J.throttle(b._graphicChanged,1,v._assertThisInitialized(b));b._expressionAttributes=null;b._graphicExpressionAttributes=null;b.abilities=
{...D};b.content=null;b.contentViewModels=[];b.description=null;b.defaultPopupTemplateEnabled=!1;b.formattedAttributes=null;b.lastEditInfo=null;b.relatedInfos=new Map;b.title="";b.view=null;b._isAllowedContentType=d=>{const {abilities:c}=v._assertThisInitialized(b);return"attachments"===d.type&&!!c.attachmentsContent||"custom"===d.type&&!!c.customContent||"fields"===d.type&&!!c.fieldsContent||"media"===d.type&&!!c.mediaContent||"text"===d.type&&!!c.textContent||"expression"===d.type&&!!c.expressionContent||
"relationship"===d.type&&!!c.relationshipContent};b._handles.add(x.watch(()=>[b.graphic,b._effectivePopupTemplate,b.abilities],()=>b._graphicChangedThrottled(),x.initial));return b}v._inherits(z,f);var S=v._createSuper(z);f=z.prototype;f.destroy=function(){this._clear();this._cancelFeatureQuery();this._error=null;this._handles.destroy();this.graphic=null;this._destroyContentViewModels();this.relatedInfos.clear()};f.castAbilities=function(a){return{...D,...a}};f.setActiveMedia=function(a,b){a=this.contentViewModels[a];
a instanceof A&&a.setActiveMedia(b)};f.nextMedia=function(a){a=this.contentViewModels[a];a instanceof A&&a.next()};f.previousMedia=function(a){a=this.contentViewModels[a];a instanceof A&&a.previous()};f.updateGeometry=async function(){const {graphic:a,spatialReference:b,_sourceLayer:d}=this;await d?.load();var c=d?.objectIdField;c&&a&&d&&(c=a?.attributes?.[c],null!=c&&(c=[c],!a.geometry&&(c=(await q.querySourceLayer({layer:d,graphic:a,outFields:[],objectIds:c,returnGeometry:!0,spatialReference:b}))?.geometry)))&&
(a.geometry=c)};f._clear=function(){this._set("title","");this._set("content",null);this._set("formattedAttributes",null)};f._graphicChanged=async function(){this._cancelFeatureQuery();this._error=null;this._clear();const {graphic:a}=this;if(a){var b=new AbortController;this._featureAbortController=b;try{await this._queryFeature({signal:b.signal})}catch(d){B.isAbortError(d)||(this._error=d,I.getLogger(this.declaredClass).error("error","The popupTemplate could not be displayed for this feature.",{error:d,
graphic:a,popupTemplate:this._effectivePopupTemplate}))}this._featureAbortController===b&&(this._featureAbortController=null)}};f._cancelFeatureQuery=function(){const {_featureAbortController:a}=this;a&&a.abort();this._featureAbortController=null};f._compileContentElement=function(a,b){if("attachments"===a.type)return this._compileAttachments(a,b);if("custom"===a.type)return this._compileCustom(a,b);if("fields"===a.type)return this._compileFields(a,b);if("media"===a.type)return this._compileMedia(a,
b);if("text"===a.type)return this._compileText(a,b);if("expression"===a.type)return this._compileExpression(a,b);if("relationship"===a.type)return this._compileRelationship(a,b)};f._compileContent=function(a){this._destroyContentViewModels();if(this.graphic)return Array.isArray(a)?a.filter(this._isAllowedContentType).map((b,d)=>this._compileContentElement(b,d)).filter(w.isSome):"string"===typeof a?this._compileText(new M({text:a}),0).text:a};f._destroyContentViewModels=function(){this._handles?.remove("relationship-view-models");
this._handles?.remove("content-view-models");this.contentViewModels.forEach(a=>a&&!a.destroyed&&a.destroy());this._set("contentViewModels",[])};f._matchesFeature=function(a,b){a=a?.graphic?.getObjectId();b=b?.getObjectId();return w.isSome(a)&&w.isSome(b)&&a===b};f._setRelatedFeaturesViewModels=function({relatedFeatureViewModels:a,relatedFeatures:b,map:d}){const {view:c,spatialReference:e}=this;b?.filter(Boolean).forEach(g=>{a.find(l=>this._matchesFeature(l,g))||a.add(new y({abilities:{relationshipContent:!1},
map:d,view:c,spatialReference:e,graphic:g}))});a.forEach(g=>{b?.find(l=>this._matchesFeature(g,l))||a.remove(g)})};f._setExpressionContentVM=function(a,b){const d=this.formattedAttributes,{contentElement:c,contentElementViewModel:e}=a;a=c?.type;e&&a&&("fields"===a&&(this._createFieldsFormattedAttributes({contentElement:c,contentElementIndex:b,formattedAttributes:d}),e.set(this._createFieldsVMParams(c,b))),"media"===a&&(this._createMediaFormattedAttributes({contentElement:c,contentElementIndex:b,formattedAttributes:d}),
e.set(this._createMediaVMParams(c,b))),"text"===a&&e.set(this._createTextVMParams(c)))};f._compileRelationship=function(a,b){const {displayCount:d,orderByFields:c,relationshipId:e,title:g,description:l}=a,{_sourceLayer:h,graphic:r,map:n}=this,t=new Q({displayCount:d,graphic:r,orderByFields:c,relationshipId:e,layer:h,map:n,...this._compileTitleAndDesc({title:g,description:l})});this.contentViewModels[b]=t;this._handles.add(x.on(()=>t.relatedFeatures,"change",()=>this._setRelatedFeaturesViewModels(t)),
"relationship-view-models");return a};f._compileExpression=function(a,b){const {expressionInfo:d}=a,{graphic:c,map:e,spatialReference:g,view:l}=this,h=new O({expressionInfo:d,graphic:c,interceptor:y.interceptor,map:e,spatialReference:g,view:l});this.contentViewModels[b]=h;this._handles.add(x.watch(()=>h.contentElementViewModel,()=>this._setExpressionContentVM(h,b),x.initial),"content-view-models");return a};f._compileAttachments=function(a,b){const {graphic:d}=this,{description:c,title:e}=a;this.contentViewModels[b]=
new N({graphic:d,...this._compileTitleAndDesc({title:e,description:c})});return a};f._compileCustom=function(a,b){const {graphic:d}=this,{creator:c,destroyer:e}=a;this.contentViewModels[b]=new C({graphic:d,creator:c,destroyer:e});return a};f._compileTitleAndDesc=function({title:a,description:b}){const {_fieldInfoMap:d,_sourceLayer:c,graphic:e,formattedAttributes:g}=this,l=e?.attributes,h=this._expressionAttributes,r=g.global;return{title:q.substituteFieldsInLinksAndAttributes({attributes:l,fieldInfoMap:d,
globalAttributes:r,expressionAttributes:h,layer:c,text:a}),description:q.substituteFieldsInLinksAndAttributes({attributes:l,fieldInfoMap:d,globalAttributes:r,expressionAttributes:h,layer:c,text:b})}};f._createFieldsVMParams=function(a,b){const d=this._effectivePopupTemplate,c=this.formattedAttributes,e={...c?.global,...c?.content[b]};b=(a?.fieldInfos||d?.fieldInfos)?.filter(({fieldName:h})=>q.isExpressionField(h)||q.isRelatedField(h)||e.hasOwnProperty(h));const {description:g,title:l}=a;return{attributes:e,
expressionInfos:d?.expressionInfos,fieldInfos:b,...this._compileTitleAndDesc({title:l,description:g})}};f._compileFields=function(a,b){const d=a.clone();a=new P(this._createFieldsVMParams(a,b));this.contentViewModels[b]=a;d.fieldInfos=a.formattedFieldInfos.slice(0);return d};f._createMediaVMParams=function(a,b){const {abilities:d,graphic:c,_fieldInfoMap:e,_effectivePopupTemplate:g,relatedInfos:l,_sourceLayer:h,_expressionAttributes:r}=this,n=this.formattedAttributes,t=c?.attributes??{},{description:T,
mediaInfos:U,title:V}=a;return{abilities:{chartAnimation:d.chartAnimation},activeMediaInfoIndex:a.activeMediaInfoIndex||0,attributes:t,isAggregate:c?.isAggregate,layer:h,fieldInfoMap:e,formattedAttributes:{...n?.global,...n?.content[b]},expressionAttributes:r,mediaInfos:U,popupTemplate:g,relatedInfos:l,...this._compileTitleAndDesc({title:V,description:T})}};f._compileMedia=function(a,b){const d=a.clone();a=new A(this._createMediaVMParams(a,b));d.mediaInfos=a.formattedMediaInfos.slice(0);this.contentViewModels[b]=
a;return d};f._createTextVMParams=function(a){const {graphic:b,_fieldInfoMap:d,_sourceLayer:c,_expressionAttributes:e}=this;a&&a.text&&(a.text=q.substituteFieldsInLinksAndAttributes({attributes:b?.attributes??{},fieldInfoMap:d,globalAttributes:this.formattedAttributes?.global??{},expressionAttributes:e,layer:c,text:a.text}));return{graphic:b,creator:a.text}};f._compileText=function(a,b){a=a.clone();this.contentViewModels[b]=new C(this._createTextVMParams(a));return a};f._compileLastEditInfo=function(){const {_effectivePopupTemplate:a,
_sourceLayer:b,graphic:d}=this;if(a){var {lastEditInfoEnabled:c}=a,e=b?.editFieldsInfo;if(c&&e)return q.formatEditInfo(e,d?.attributes)}};f._compileTitle=function(a){const {_fieldInfoMap:b,_sourceLayer:d,graphic:c,_expressionAttributes:e}=this;return q.substituteFieldsInLinksAndAttributes({attributes:c?.attributes??{},fieldInfoMap:b,globalAttributes:this.formattedAttributes?.global??{},expressionAttributes:e,layer:d,text:a})};f._getTitle=async function(){const {_effectivePopupTemplate:a,graphic:b}=
this;return b?q.graphicCallback(a?.title,{graphic:b}):null};f._getContent=async function(){const {_effectivePopupTemplate:a,graphic:b}=this;return b?q.graphicCallback(a?.content,{graphic:b}):null};f._queryFeature=async function(a){const {_featureAbortController:b,_sourceLayer:d,graphic:c,_effectivePopupTemplate:e}=this,g=this.map,l=this.view,h=this.spatialReference;if(b===this._featureAbortController&&c){await q.queryUpdatedFeature({graphic:c,popupTemplate:e,layer:d,spatialReference:h},a);var {content:{value:r},
title:{value:n}}=await B.eachAlways({content:this._getContent(),title:this._getTitle()});({expressionAttributes:{value:a}}=await B.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(a),expressionAttributes:R.createCompiledExpressions({expressionInfos:e?.expressionInfos,spatialReference:h,graphic:c,map:g,interceptor:y.interceptor,view:l})}));b===this._featureAbortController&&c&&(this._expressionAttributes=a,this._graphicExpressionAttributes={...c.attributes,...a},this._set("formattedAttributes",
this._createFormattedAttributes(r)),this._set("title",this._compileTitle(n)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(r)||null))}};f._createMediaFormattedAttributes=function({contentElement:a,contentElementIndex:b,formattedAttributes:d}){const {_effectivePopupTemplate:c,graphic:e,relatedInfos:g,_sourceLayer:l,_fieldInfoMap:h,_graphicExpressionAttributes:r}=this;d.content[b]=q.formatAttributes({fieldInfos:c?.fieldInfos,graphic:e,attributes:{...r,
...a.attributes},layer:l,fieldInfoMap:h,relatedInfos:g})};f._createFieldsFormattedAttributes=function({contentElement:a,contentElementIndex:b,formattedAttributes:d}){if(a.fieldInfos){const {graphic:c,relatedInfos:e,_sourceLayer:g,_fieldInfoMap:l,_graphicExpressionAttributes:h}=this;d.content[b]=q.formatAttributes({fieldInfos:a.fieldInfos,graphic:c,attributes:{...h,...a.attributes},layer:g,fieldInfoMap:l,relatedInfos:e})}};f._createFormattedAttributes=function(a){const {_effectivePopupTemplate:b,graphic:d,
relatedInfos:c,_sourceLayer:e,_fieldInfoMap:g,_graphicExpressionAttributes:l}=this,h={global:q.formatAttributes({fieldInfos:b?.fieldInfos,graphic:d,attributes:l,layer:e,fieldInfoMap:g,relatedInfos:c}),content:[]};Array.isArray(a)&&a.forEach((r,n)=>{"fields"===r.type&&this._createFieldsFormattedAttributes({contentElement:r,contentElementIndex:n,formattedAttributes:h});"media"===r.type&&this._createMediaFormattedAttributes({contentElement:r,contentElementIndex:n,formattedAttributes:h})});return h};
f._checkForRelatedFeatures=function(a){const {graphic:b,_effectivePopupTemplate:d}=this;return this._queryRelatedInfos(b,q.getAllFieldInfos(d),a)};f._queryRelatedInfos=async function(a,b,d){const {relatedInfos:c,_sourceLayer:e}=this;c.clear();const g=w.isSome(e?.associatedLayer)?await e?.associatedLayer.load(d):e;if(g&&a){var l=b.filter(n=>n&&q.isRelatedField(n.fieldName));if(l&&l.length){b.forEach(n=>this._configureRelatedInfo(n,g));var h=await u.queryLayerInfos({relatedInfos:c,layer:g},d);Object.keys(h).forEach(n=>
{const t=c.get(n.toString());n=h[n]?.value;t&&n&&(t.layerInfo=n.data)});var r=await u.queryRelatedFeatures({graphic:a,relatedInfos:c,layer:g},d);Object.keys(r).forEach(n=>{u.setRelatedFeatures(r[n]?.value,c.get(n.toString()))})}}};f._configureRelatedInfo=function(a,b){const {relatedInfos:d}=this,c=u.getRelatedFieldInfo(a.fieldName);if(c){var {layerId:e,fieldName:g}=c;e&&(b=d.get(e.toString())||u.createRelatedInfo(e,b))&&(u.updateRelatedInfo({relatedInfo:b,fieldName:g,fieldInfo:a}),this.relatedInfos.set(e,
b))}};v._createClass(z,[{key:"_effectivePopupTemplate",get:function(){return w.isSome(this.graphic)?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):null}},{key:"_fieldInfoMap",get:function(){return q.createfieldInfoMap(q.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}},{key:"_sourceLayer",get:function(){return q.getSourceLayer(this.graphic)}},{key:"isTable",get:function(){return this._sourceLayer?.isTable||!1}},{key:"state",get:function(){return this.graphic?
this._error?"error":this.waitingForContent?"loading":"ready":"disabled"}},{key:"graphic",set:function(a){this._set("graphic",a?a.clone():null)}},{key:"spatialReference",get:function(){return this.view?.spatialReference??null},set:function(a){this._override("spatialReference",a)}},{key:"map",get:function(){return this.view?.map||null},set:function(a){this._override("map",a)}},{key:"waitingForContent",get:function(){return!!this._featureAbortController}}]);return z}(H.IdentifiableMixin(k));k.interceptor=
new F.FeatureSetQueryInterceptor(q.preLayerQueryCallback,q.preRequestCallback);m.__decorate([p.property()],k.prototype,"_error",void 0);m.__decorate([p.property()],k.prototype,"_featureAbortController",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"_effectivePopupTemplate",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"_fieldInfoMap",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"_sourceLayer",null);m.__decorate([p.property()],k.prototype,"abilities",void 0);
m.__decorate([K.cast("abilities")],k.prototype,"castAbilities",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"content",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"contentViewModels",void 0);m.__decorate([p.property()],k.prototype,"description",void 0);m.__decorate([p.property({type:Boolean})],k.prototype,"defaultPopupTemplateEnabled",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"isTable",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"state",
null);m.__decorate([p.property({readOnly:!0})],k.prototype,"formattedAttributes",void 0);m.__decorate([p.property({type:E,value:null})],k.prototype,"graphic",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"lastEditInfo",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"relatedInfos",void 0);m.__decorate([p.property()],k.prototype,"spatialReference",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"title",void 0);m.__decorate([p.property()],k.prototype,"map",null);
m.__decorate([p.property({readOnly:!0})],k.prototype,"waitingForContent",null);m.__decorate([p.property()],k.prototype,"view",void 0);return k=y=m.__decorate([L.subclass("esri.widgets.FeatureViewModel")],k)});