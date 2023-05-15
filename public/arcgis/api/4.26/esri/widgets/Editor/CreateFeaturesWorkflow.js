// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/arrayUtils ../../core/handleUtils ../../core/maybe ../../core/reactiveUtils ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/layerUtils ../../views/draw/support/helpMessageUtils ../../views/interactive/snapping/FeatureSnappingLayerSource ./CreateFeaturesWorkflowData ./Workflow ./workflowUtils".split(" "),
function(B,x,F,y,m,z,G,A,u,V,I,H,J,K,L,M,q){var C;const D=Symbol();u=C=function(t){function v(a){a=N.call(this,a);a.type="create-features";a.createFeatureState="create-new";a._featureFormHandle=null;a._visualVariableAttributes={rotation:null,size:null};a._attachmentFileInfos=new Map;a._highlightHandles=new Map;a._preventDefaultActionOnCancel=!1;a._lastActiveGraphics=[];return a}B._inherits(v,t);var N=B._createSuper(v);t=v.prototype;t.updatePendingFeature=async function(a,g){this._preventDefaultActionOnCancel=
!0;this.data.viewModel.sketchViewModel.cancel();F.remove(this._lastActiveGraphics,a);return this._startUpdating(a,g)};v.create=function(a,g,b,l,n){const k=new C({data:new L.CreateFeaturesWorkflowData({creationInfo:m.unwrap(g),viewModel:a}),onCommit:async f=>{var d=f.viewModel.sketchViewModel.layer.graphics.toArray();f=f.creationInfo.layer;var e=f.capabilities?.editing.supportsGlobalId&&"globalIdField"in f;const w=k._attachmentFileInfos;0===w.size?await l(f,{addFeatures:d}):e?(d=k._getAttachmentEditsWithGlobalIds(d,
f,w),await l(f,d,"addAttachments"in d?{globalIdUsed:!0}:void 0)):({addFeatureResults:e}=await l(f,{addFeatures:d}),d=k._getAddAttachmentsData(d,e,f,w),await n(f,d))}});k._set("steps",this._createWorkflowSteps(k,b));return k};t._fadeExistingFeatures=function(a){if("effect"in a){const b=a.effect;a.effect="saturate(0.6) opacity(0.8)";return y.makeHandle(()=>a.effect=b)}const g=a.opacity;a.opacity=.7;return y.makeHandle(()=>a.opacity=g)};t._highlight=function(a){const g=this.data.viewModel.view;"3d"===
g?.type&&this._highlightHandles.set(a,g.highlight(a))};t._removeHighlight=function(a){m.removeMaybe(this._highlightHandles.get(a));this._highlightHandles.delete(a)};t._startCreating=async function(a){this.createFeatureState="create-new";return q.startCreatingNewFeature(this.data.viewModel.sketchViewModel,this.data.creationInfo,a)};t._startUpdating=async function(a,g){const {featureFormViewModel:b,layerInfos:l,sketchViewModel:n,view:k}=this.data.viewModel;if(k){var f=this.data.creationInfo.layer,d=
q.findLayerInfo(l,f);b.set({arcadeEditType:"INSERT",feature:a,formTemplate:d?.formTemplate,spatialReference:k.spatialReference,view:k});m.removeMaybe(this._featureFormHandle);this._featureFormHandle=y.handlesGroup([b.on("value-change",async()=>{a.attributes=b.getValues();await q.updateGraphicSymbolWhenRequired(a,g)}),n.on(["update","undo","redo"],e=>{("undo"===e.type||"redo"===e.type||"update"===e.type&&m.isSome(e.toolEventInfo)&&q.isTerminalUpdateEventType(e.toolEventInfo.type))&&b.notifyFeatureGeometryChanged()})]);
this._removeHighlight(a);this.createFeatureState="update-pending";this._visualVariableAttributes=q.getVisualVariableAttributes(a);return q.startUpdatingFeature(n,a,f,this._visualVariableAttributes,g)}};v._createWorkflowSteps=function(a,g="awaiting-feature-creation-info"){const {data:b,handles:l}=a;let n=null,k=!0;const f=new Map;g=q.createWorkflowSteps(["awaiting-feature-creation-info","creating-features","adding-attachment","editing-attachment"],g,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",
async setUp(){b.creationInfo=null;l.add(b.viewModel.featureTemplatesViewModel.on("select",({item:d})=>{d&&(b.creationInfo=d,b.viewModel.activeWorkflow?.next())}),this.id)},async tearDown(){l.remove(this.id)}}),"creating-features":()=>({id:"creating-features",async setUp(){if(!l.has(this.id)){var d=b.viewModel.view;if(d){var e=b.viewModel.sketchViewModel;k=e.updateOnGraphicClick;e.updateOnGraphicClick=!1;a._lastActiveGraphics=[];a._featureFormHandle=m.removeMaybe(a._featureFormHandle);a._visualVariableAttributes=
{rotation:null,size:null};q.prepareAttachmentsForCreateWorkflow(b.viewModel.attachmentsViewModel);var w="2d"===d.type?a._fadeExistingFeatures(b.creationInfo.layer):null,O=e.on("create",async c=>{if("cancel"===c.state){if(a._preventDefaultActionOnCancel){a._preventDefaultActionOnCancel=!1;return}if(1>a._lastActiveGraphics.length)return a._startCreating(f);c=a._lastActiveGraphics.pop();return a._startUpdating(c,f)}if("complete"===c.state&&c.graphic)return a._startUpdating(c.graphic,f)}),Q=e.on("update",
async c=>{var h=c.graphics[0];if("complete"===c.state){h!==n&&(a._lastActiveGraphics.push(h),a._highlight(h));n=null;"add"!==b.viewModel.attachmentsViewModel.mode&&"edit"!==b.viewModel.attachmentsViewModel.mode||b.viewModel.activeWorkflow?.previous();if(c.aborted&&a._preventDefaultActionOnCancel){a._preventDefaultActionOnCancel=!1;return}const r=d.cursor;d.cursor="progress";l.add([y.makeHandle(()=>d.cursor=r),d.on("click",E=>E.preventDefault())],D);return z.whenOnce(()=>!b.viewModel.featureFormViewModel.updating).then(()=>
{l.remove(D);a._startCreating(f)})}if("start"===c.state){a._removeHighlight(h);const r=b.viewModel.attachmentsViewModel;"add"!==r.mode&&"edit"!==r.mode||b.viewModel.activeWorkflow?.previous();r.fileInfos.removeAll();r.graphic=h;r.mode="view";(a._attachmentFileInfos.get(h)||[]).forEach(({file:E,form:P})=>r.addFile(E,P))}await q.visualVariableInteractiveUpdate(d,h,c,a._visualVariableAttributes,f);c=h.attributes;m.isSome(a._visualVariableAttributes.rotation)&&({field:h}=a._visualVariableAttributes.rotation,
b.viewModel.featureFormViewModel.setValue(h,c[h]));m.isSome(a._visualVariableAttributes.size)&&({field:h}=a._visualVariableAttributes.size,b.viewModel.featureFormViewModel.setValue(h,c[h]))}),R=e.on("delete",async c=>{c=c.graphics[0];F.remove(a._lastActiveGraphics,c);n=c}),p=null,S=z.watch(()=>{const c=e.snappingOptions.featureSources.find(h=>h.layer===b.creationInfo.layer);return{hasFeatureLayerSource:!!c,enabled:c?.enabled??!1}},({hasFeatureLayerSource:c,enabled:h})=>{const r=e.snappingOptions.featureSources;
c?(m.isNone(p)&&(p=new K({layer:e.layer,enabled:h}),r.add(p)),p.enabled=h):(m.isSome(p)&&r.remove(p),p=m.destroyMaybe(p))},z.syncAndInitial),T=d.on("immediate-click",async c=>{({results:c}=await d.hitTest(c,{include:e.layer}));if(c=c.find(h=>"graphic"===h.type))c=c.graphic,"transform"!==e.activeTool&&"reshape"!==e.activeTool||e.updateGraphics.getItemAt(0)===c||await a.updatePendingFeature(c,f)}),U=z.watch(()=>b.viewModel.attachmentsViewModel.mode,c=>{"add"===c&&b.viewModel.activeWorkflow.go("adding-attachment");
"edit"===c&&b.viewModel.activeWorkflow.go("editing-attachment")});await a._startCreating(f);l.add({remove:()=>{m.removeMaybe(a._featureFormHandle);O.remove();Q.remove();R.remove();S.remove();m.isSome(p)&&e.snappingOptions.featureSources.remove(p);p=m.destroyMaybe(p);e.cancel();T.remove();U.remove();m.removeMaybe(w)}},this.id)}}},async tearDown(d){d.cancelled&&(b.viewModel.sketchViewModel.layer.removeAll(),l.remove([this.id,D]),b.viewModel.attachmentsViewModel.fileInfos.removeAll(),a._attachmentFileInfos.clear(),
b.viewModel.sketchViewModel.updateOnGraphicClick=k)}}),"adding-attachment":()=>({id:"adding-attachment",parent:"creating-features",async setUp(){},async tearDown(){const {graphic:d,fileInfos:e}=b.viewModel.attachmentsViewModel;a._attachmentFileInfos.set(d,e.toArray());b.viewModel.attachmentsViewModel.mode="view"}}),"editing-attachment":()=>({id:"editing-attachment",parent:"creating-features",async setUp(){},async tearDown(){const {graphic:d,fileInfos:e}=b.viewModel.attachmentsViewModel;a._attachmentFileInfos.set(d,
e.toArray());b.viewModel.attachmentsViewModel.mode="view"}})});return q.avoidFeatureTemplateSelectionWithOnlyOneItem(b,g)};t._getAddAttachmentsData=function(a,g,b,l){const n=[];g.forEach((k,f)=>{if(!k.error){const d=a[f];f=l.get(d)||[];d.attributes[b.objectIdField]=k.objectId;f.forEach(({form:e})=>n.push({feature:d,attachment:e}))}});return n};t._getAttachmentEditsWithGlobalIds=function(a,g,b){const l=[],n=g.globalIdField;a.forEach((k,f)=>{const d=b.get(k)||[];let e=k.attributes[n];m.isNone(e)&&(e=
G.generateUUID(),a[f].attributes[n]=e);d.forEach(({file:w})=>l.push({feature:k,attachment:{globalId:G.generateUUID(),data:w}}))});return l.length?{addFeatures:a,addAttachments:l}:{addFeatures:a}};B._createClass(v,[{key:"numPendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics.length}},{key:"pendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics}},{key:"reliesOnOwnerAdminPrivileges",get:function(){const {layer:a}=this.data.creationInfo,
g=a.capabilities?.operations.supportsAdd,b=H.getEffectiveLayerCapabilities(a)?.operations.supportsAdd;return H.getEffectiveEditingEnabled(a)&&!a.editingEnabled||!!b&&!g}},{key:"shouldShowAttachments",get:function(){return this.data&&this.data.creationInfo&&this.data.viewModel?q.shouldShowAttachmentsForCreateWorkflow(this.data):!1}},{key:"shouldAllowAttachmentEditing",get:function(){return this.shouldShowAttachments}},{key:"helpMessage",get:function(){if("creating-features"===this.stepId){var {creationInfo:a,
viewModel:g}=this.data;return J.getDrawHelpMessage(a.layer.geometryType,g.sketchViewModel.createGraphic?.geometry)}}}]);return v}(M);x.__decorate([A.property()],u.prototype,"reliesOnOwnerAdminPrivileges",null);x.__decorate([A.property()],u.prototype,"shouldShowAttachments",null);x.__decorate([A.property()],u.prototype,"shouldAllowAttachmentEditing",null);x.__decorate([A.property()],u.prototype,"helpMessage",null);return u=C=x.__decorate([I.subclass("esri.widgets.Editor.CreateFeaturesWorkflow")],u)});