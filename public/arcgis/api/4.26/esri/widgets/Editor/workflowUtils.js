// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../Graphic ../../core/has ../../core/handleUtils ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/accessorSupport/diffUtils ../../renderers/support/clickToleranceUtils ../../renderers/support/lengthUtils ../../renderers/visualVariables/support/sizeVariableUtils ../../renderers/visualVariables/support/visualVariableUtils ../../symbols/support/symbolConversion ../../symbols/support/symbolUtils ../../views/3d/layers/graphics/GraphicState ../../views/support/drapedUtils ../../views/support/hitTestSelectUtils".split(" "),
function(K,q,T,la,U,m,v,y,C,V,W,X,L,M,Y,D,Z,aa,E){function N(b){const a=b.sourceLayer;var c;if(!(c=!a||"feature"!==a.type)){a:switch(a.renderer?.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":case "pie-chart":c=!0;break a;default:c=!1}c=!c}if(c)return{rotation:null,size:null};let d=c=null;var h=a.renderer.getVisualVariablesForType("rotation").filter(f=>(!f.axis||"heading"===f.axis)&&f.field&&!f.valueExpression&&m.isSome(M.getRotationAngle(f,b)));1===
h.length&&(c=ba(h[0],a));h=a.renderer.getVisualVariablesForType("size").filter(f=>f.field&&!f.useSymbolValue&&!f.valueExpression&&L.getTransformationType(f)===L.TransformationType.RealWorldSize&&m.isSome(M.getSize(f,b)));1===h.length&&(d=ca(h[0],a));return{rotation:c,size:d}}function ba(b,a){const c="heading"===(b.axis||"heading")&&"arithmetic"===b.rotationType?-1:1,d=b.field,h=(a=a.fields&&a.fields.filter(g=>g.name===d))&&1===a.length?a[0].type:"double";var f=0,e=0;return{field:d,fieldType:h,getDefault:()=>
Promise.resolve(0),getValue:g=>{e=f-c*g;return F((e+360)%360,h)},initValue:g=>{f=null!=g?g:e;e=0},isUpdatingInteractively:!1,rotationType:b.rotationType??"geographic"}}function da(b,a){switch(a){case "width":return b[0];case "depth":return b[1];case "height":return b[2];default:return b[2]||b[1]||b[0]}}async function ea(b,a,c){if(m.isNone(a))return 0;({symbol:a}=Y.to3D(a));if(m.isNone(a)||"web-style"===a.type||"cim"===a.type)return 0;a=a.symbolLayers.getItemAt(0);if(!a)return 0;switch(a.type){case "icon":return{computeIconLayerResourceSize:c}=
await new Promise((h,f)=>K(["../../symbols/support/symbolLayerUtils"],h,f)),a.size||Math.min(t.icon,(await c(a,t.icon))[0])||t.icon;case "text":return a.size||t.text;case "line":return a.size||t.line;case "object":const {computeObjectLayerResourceSize:d}=await new Promise((h,f)=>K(["../../symbols/support/symbolLayerUtils"],h,f));b=await d(a,b.scale/t.viewScaleSizeFactor);return da(b,c);case "path":return(null!=a.width?a.width:a.height)||b.scale/t.viewScaleSizeFactor;case "extrude":return a.size||
b.scale/t.viewScaleSizeFactor;case "fill":case "water":return 0;default:return 0}}function ca(b,a){const c=b.field,d=b.axis,h=(a=a.fields&&a.fields.filter(l=>l.name===c))&&1===a.length?a[0].type:"double";var f=0,e=0;const g=X.meterIn[b.valueUnit]??1;let k;k="area"===b.valueRepresentation?l=>(l*g/2)**2*Math.PI:"radius"===b.valueRepresentation||"distance"===b.valueRepresentation?l=>l*g/2:l=>l*g;return{field:c,fieldType:h,getDefault:async(l,n)=>F(k(await ea(n,l,d)),h),getValue:(l,n)=>{f||(f=n.pixelSizeAt(n.center));
e=f*l;return F(e,h)},initValue:l=>{f=null!=l?l:e;e=0},isUpdatingInteractively:!1,displayUnit:O(b.valueUnit),axis:b.axis}}function F(b,a){switch(a){case "small-integer":case "integer":case "long":return Math.round(b);case "double":case "single":return b;default:return 0}}async function w(b,a){a=await D.getDisplayedSymbol(b,{useSourceLayer:!0,ignoreGraphicSymbol:!0,webStyleCache:a});const c=V.diff(b.symbol,a);m.isSome(c)&&(b.symbol=a)}async function G(b,a,c){var d=a.layer;a={...a.template.prototype.attributes};
await fa(b,d,a,c);c={graphicProperties:{attributes:a,sourceLayer:d},hasZ:d.capabilities.data.supportsZ};b.layer.elevationInfo=d.elevationInfo;a=b.create;d=d.geometryType;if(!d)throw Error("no geometry type");if("mesh"===d||"multipatch"===d)throw Error("Mesh and Multipatch not supported");return a.call(b,d,c)}async function fa(b,a,c,d){a=new T({sourceLayer:a,attributes:c});const {rotation:h,size:f}=N(a);let e=await D.getDisplayedSymbol(a,{useSourceLayer:!0,webStyleCache:d}),g=!1;for(const k of[f,h])m.isNone(k)||
null!=c[k.field]||(c[k.field]=await k.getDefault(e,b.view),g=!0);g&&(e=await D.getDisplayedSymbol(a,{useSourceLayer:!0,webStyleCache:d}));switch(e?.type){case "simple-fill":case "polygon-3d":b.polygonSymbol=e;break;case "simple-line":case "line-3d":b.polylineSymbol=e;break;case "simple-marker":case "picture-marker":case "point-3d":case "cim":b.pointSymbol=e}P(b.tooltipOptions,f,h)}function P(b,a,c){m.isSome(a)||m.isSome(c)?b.visualVariables={size:m.isSome(a)?{unit:a.displayUnit,axis:a.axis,valueType:a.fieldType}:
null,rotation:m.isSome(c)?{valueType:c.fieldType,rotationType:c.rotationType??"geographic"}:null}:b.visualVariables=null}async function ha(b,a,c,d){if(0===b.length)return[];const {updatable:h,graphicsByLayer:f}=await c.async(async()=>{var {results:e}=await v.whenOrAbort(E.hitTestSelectSimilarDistance(a,c),d);const g=new Map;E.filterGraphicHits(e).forEach(({graphic:k})=>{var l=k.layer;var n=g.get(l);n?l=n:(n=[],g.set(l,n),l=n);return l.push(k)});e=b.filter(({supports:k,layer:l})=>k.includes("update")&&
g.has(l));0!==e.length&&c.stopPropagation();return{updatable:e,graphicsByLayer:g}});return v.whenOrAbort(v.eachAlways(h.map(async({layer:e})=>{var {objectIdField:g}=e,k="displayField"in e?e.displayField:null;const l=[g];null!=k&&e.fieldsIndex.has(k)&&l.push(k);g=f.get(e);return g.some(n=>l.some(u=>!(u in n.attributes)))?(k=e.createQuery(),k.outFields=l,k.returnGeometry=!1,k.objectIds=g.map(n=>n.getObjectId()),e.queryFeatures(k,{signal:d}).then(({features:n})=>n)):g})),d)}async function ia(b,a,c,d){if(0===
b.length)return[];let h=null;const f=await c.async(async()=>{var {results:e}=await v.whenOrAbort(a.hitTest(c),d);if(0===e.length)return[];const g=new Set;h=E.filterGraphicHits(e);h.forEach(({graphic:k})=>k&&g.add(k.layer));e=b.items.filter(({layer:k,supports:l,attachmentsOnUpdateEnabled:n})=>g.has(k)&&(l.includes("update")||l.includes("delete")||n));0<e.length&&c.stopPropagation();return e});return v.whenOrAbort(v.eachAlways(f.map(({layer:e})=>{var g="displayField"in e?e.displayField:null,k=[e.objectIdField];
null!=g&&e.fieldsIndex.has(g)&&k.push(g);g=e.createQuery();g.outFields=k;g.returnGeometry=!1;k="renderer"in e?W.calculateTolerance({renderer:e.renderer,event:c}):0;g.geometry=aa.createQueryGeometry(c.mapPoint,k,a);g.outSpatialReference=a.spatialReference;return e.queryFeatures(g,{signal:d}).then(({features:l})=>{h?.forEach(({graphic:n})=>{n.layer!==e||l.some(u=>u.getObjectId()===n.getObjectId())||l.push(n)});return l})})),d)}async function H(b,a,c,d,h){let f=!1;const {rotation:e,size:g}=d;[e,g].forEach(async k=>
{if(!m.isNone(k)){var l=a.attributes[k.field];m.isSome(l)?k.initValue(l):(l=await k.getDefault(a.symbol,b.view),k.initValue(l),a.setAttribute(k.field,l),f=!0)}});f&&await w(a,h);d={multipleSelectionEnabled:!1};"point"===c.geometryType&&(d.enableRotation=m.isSome(e),d.enableScaling=m.isSome(g));P(b.tooltipOptions,g,e);b.layer.elevationInfo=c.elevationInfo;return b.update(a,d)}async function Q(b,a,c,d,h){if(m.isSome(a.geometry)&&"point"===a.geometry?.type){var f=d.rotation;var e=c.toolEventInfo;e=!m.isSome(e)||
"rotate-start"!==e.type&&"rotate"!==e.type&&"rotate-stop"!==e.type?null:e;if(m.isSome(f)&&m.isSome(e))if("rotate-stop"===e.type)f.isUpdatingInteractively=!1,f.initValue();else{f.isUpdatingInteractively=!0;const {field:g,getValue:k}=f;a.attributes[g]=k(e.angle,b)}d=d.size;c=c.toolEventInfo;c=!m.isSome(c)||"scale-start"!==c.type&&"scale"!==c.type&&"scale-stop"!==c.type?null:c;if(m.isSome(d)&&m.isSome(c))if("scale-stop"===c.type)d.isUpdatingInteractively=!1,d.initValue();else{d.isUpdatingInteractively=
!0;const {field:g,getValue:k}=d;a.attributes[g]=k(c.xScale,b)}await w(a,h)}}function O(b){switch(b){case "unknown":case "decimal-degrees":return null;default:return b}}const t={icon:C.px2pt(24),text:C.px2pt(12),line:C.px2pt(1),viewScaleSizeFactor:100},I=(b,a)=>b.whenLayerView("subtype-sublayer"===a.type?a.parent:a);q.avoidFeatureTemplateSelectionWithOnlyOneItem=function(b,a){b.viewModel.refreshCreationTemplates();if("awaiting-feature-creation-info"===a[0].id){var c=b.viewModel.featureTemplatesViewModel.items;
1!==c.length?c=null:(c=c[0],c="items"in c?1===c.items.length?c.items[0]:null:c);m.isSome(c)&&(b.creationInfo=c,a.shift())}return a};q.createWorkflowSteps=function(b,a,c){let d=!1;return b.filter(h=>d?!0:d=h===a).map(h=>c[h]())};q.fetchCandidates=async function(b,a,c,d){switch(a.type){case "3d":return ha(b,a,c,d);case "2d":return ia(b,a,c,d)}};q.fetchFullFeature=async function(b,a,c){const {sourceLayer:d}=b,h=d.createQuery();h.objectIds=[b.getAttribute(d.objectIdField)];h.outFields=["*"];h.outSpatialReference=
a.spatialReference;h.returnM=d.capabilities.data.supportsM;h.returnZ=d.capabilities.data.supportsZ;return(await d.queryFeatures(h,{signal:c})).features[0]};q.findLayerInfo=function(b,a){return b?b.find(c=>c.layer===a):void 0};q.getVisualVariableAttributes=N;q.isTerminalUpdateEventType=b=>/-stop/.test(b)||/vertex-/.test(b);q.prepareAttachmentsForCreateWorkflow=function(b){b.set({abilities:{editing:!0,operations:{add:!0,update:!0,delete:!0}},filesEnabled:!0,mode:"view"})};q.setUpFeatureAdd=async function(b,
a,c,d){await G(b,a,d);const h=b.on("create",async f=>{if("cancel"===f.state)return G(b,a,d);"complete"===f.state&&(f=f.graphic,f.sourceLayer||(f.sourceLayer=a.layer),f.attributes||(f.attributes={...a.template.prototype.attributes}),await w(f,d),c(f))});return{remove:()=>{h.remove();b.cancel()}}};q.setUpGeometryUpdate=async function(b,a,c,d,h,f){const e=b.clone();await w(e,f);d.map.add(c.layer);c.layer.add(e);const g=b.sourceLayer,k=I(d,g),l=()=>{const p=b.attributes[b.layer.objectIdField];k.then(r=>
r.setVisibility?.(p,!1),()=>{});return{remove(){k.then(r=>r.setVisibility?.(p,!0),()=>{})}}};let n=null,u=null;if("3d"===d.type){const p=new Z.GraphicState({graphic:e});n=U.handlesGroup([d.trackGraphicState(p),y.watch(()=>p.displaying,r=>{u=r?l():m.removeMaybe(u)},y.initial)])}else u=l();await H(c,e,g,a,f);let J=null;k.then(p=>J=p,()=>{});const z=a.size,A=a.rotation,R=y.watch(()=>b.attributes,async p=>{let r=!1;for(const x in p){const B=p[x];B!==e.attributes[x]&&(e.setAttribute(x,B),m.isSome(z)&&
!z.isUpdatingInteractively&&z.field===x&&z.initValue(B),m.isSome(A)&&!A.isUpdatingInteractively&&A.field===x&&A.initValue(B),m.isNone(J)||J.requiredFields.includes(x))&&(r=!0)}r&&await w(e,f)}),ja=c.on("update",async p=>{const r=p.graphics[0];if("complete"===p.state)return H(c,r,g,a,f);await Q(d,r,p,a,f);h(r.clone(),p)}),ka=c.on(["undo","redo"],async p=>{h(p.graphics[0].clone(),p)}),S=()=>{};return{interactive:{remove(){ka.remove();ja.remove();c.cancel();R&&R.remove();this.remove=S}},visual:{remove(){m.removeMaybe(u);
I(d,g).then(p=>y.whenOnce(()=>!p.updating)).then(()=>{m.removeMaybe(n);c.layer.remove(e);this.remove=S})}}}};q.shouldShowAttachmentsForCreateWorkflow=function(b){const {creationInfo:{layer:a},viewModel:c}=b;if(b=c.editableItems.find(h=>h.layer===a))return b.attachmentsOnCreateEnabled;b=a.capabilities?.data;const d=c.layerInfos?.find(h=>h.layer===a);return!(!(b&&"supportsAttachment"in b&&b.supportsAttachment)||d&&(!1===d.allowAttachments||!1===d.attachmentsOnUpdateEnabled))};q.sizeDefaults=t;q.sizeVariableUnitToLengthUnit=
O;q.startCreatingNewFeature=G;q.startUpdatingFeature=H;q.updateGraphicSymbolWhenRequired=w;q.visualVariableInteractiveUpdate=Q;q.whenEditorLayerView=I;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});