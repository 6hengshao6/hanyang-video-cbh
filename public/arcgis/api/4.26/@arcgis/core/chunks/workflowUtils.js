/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../Graphic.js";import"./typedArrayUtil.js";import{h as t}from"./handleUtils.js";import{i as a,a as i,r}from"./maybe.js";import{whenOrAbort as n,eachAlways as s}from"../core/promiseUtils.js";import{watch as l,initial as o,whenOnce as c}from"../core/reactiveUtils.js";import{p as u}from"./screenUtils.js";import{d as p}from"./diffUtils.js";import{c as y,a as d}from"./drapedUtils.js";import{m as f}from"./lengthUtils.js";import{a as m,T as h}from"./sizeVariableUtils.js";import{getRotationAngle as g,getSize as b}from"./visualVariableUtils.js";import{t as w}from"../symbols/support/jsonUtils.js";import{getDisplayedSymbol as v}from"../symbols/support/symbolUtils.js";import{G as I}from"./GraphicState.js";import{h as S,f as j}from"./hitTestSelectUtils.js";function U(e){const t=e.sourceLayer;if(!t||"feature"!==t.type||!function(e){switch(e?.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":case"pie-chart":return!0;default:return!1}}(t.renderer))return{rotation:null,size:null};let r=null,n=null;const s=t.renderer.getVisualVariablesForType("rotation").filter((t=>(!t.axis||"heading"===t.axis)&&t.field&&!t.valueExpression&&a(g(t,e))));1===s.length&&(r=function(e,t){const a="heading"===(e.axis||"heading")&&"arithmetic"===e.rotationType?-1:1,i=e.field,r=t.fields&&t.fields.filter((e=>e.name===i)),n=r&&1===r.length?r[0].type:"double",s={initial:0,current:0};return{field:i,fieldType:n,getDefault:()=>Promise.resolve(0),getValue:e=>(s.current=s.initial-a*e,V((s.current+360)%360,n)),initValue:e=>{s.initial=null!=e?e:s.current,s.current=0},isUpdatingInteractively:!1,rotationType:e.rotationType??"geographic"}}(s[0],t));const l=t.renderer.getVisualVariablesForType("size").filter((t=>t.field&&!t.useSymbolValue&&!t.valueExpression&&m(t)===h.RealWorldSize&&a(b(t,e))));return 1===l.length&&(n=function(e,t){const a=e.field,r=e.axis,n=t.fields&&t.fields.filter((e=>e.name===a)),s=n&&1===n.length?n[0].type:"double",l={updating:!1,initial:0,current:0},o=f[e.valueUnit]??1;let c;return c="area"===e.valueRepresentation?e=>(e*o/2)**2*Math.PI:"radius"===e.valueRepresentation||"distance"===e.valueRepresentation?e=>e*o/2:e=>e*o,{field:a,fieldType:s,getDefault:async(e,t)=>V(c(await async function(e,t,a){if(i(t))return 0;const{symbol:r}=w(t);if(i(r)||"web-style"===r.type||"cim"===r.type)return 0;const n=r.symbolLayers.getItemAt(0);if(!n)return 0;switch(n.type){case"icon":{const{computeIconLayerResourceSize:e}=await import("./symbolLayerUtils.js");return n.size||Math.min(k.icon,(await e(n,k.icon))[0])||k.icon}case"text":return n.size||k.text;case"line":return n.size||k.line;case"object":{const{computeObjectLayerResourceSize:t}=await import("./symbolLayerUtils.js");return function(e,t){switch(t){case"width":return e[0];case"depth":return e[1];case"height":return e[2];default:return e[2]||e[1]||e[0]}}(await t(n,e.scale/k.viewScaleSizeFactor),a)}case"path":return(null!=n.width?n.width:n.height)||e.scale/k.viewScaleSizeFactor;case"extrude":return n.size||e.scale/k.viewScaleSizeFactor;default:return 0}}(t,e,r)),s),getValue:(e,t)=>(l.initial||(l.initial=t.pixelSizeAt(t.center)),l.current=l.initial*e,V(l.current,s)),initValue:e=>{l.initial=null!=e?e:l.current,l.current=0},isUpdatingInteractively:!1,displayUnit:q(e.valueUnit),axis:e.axis}}(l[0],t)),{rotation:r,size:n}}function V(e,t){switch(t){case"small-integer":case"integer":case"long":return Math.round(e);case"double":case"single":return e;default:return 0}}async function z(e,t){const i=await v(e,{useSourceLayer:!0,ignoreGraphicSymbol:!0,webStyleCache:t}),r=p(e.symbol,i);a(r)&&(e.symbol=i)}async function F(e,t,a,i){await x(e,t,i);const r=e.on("create",(async r=>{if("cancel"===r.state)return x(e,t,i);if("complete"===r.state){const e=r.graphic;e.sourceLayer||(e.sourceLayer=t.layer),e.attributes||(e.attributes={...t.template.prototype.attributes}),await z(e,i),a(e)}}));return{remove:()=>{r.remove(),e.cancel()}}}async function x(t,a,r){const n=a.layer,s={...a.template.prototype.attributes};await async function(t,a,r,n){const s=new e({sourceLayer:a,attributes:r}),{rotation:l,size:o}=U(s);let c=await v(s,{useSourceLayer:!0,webStyleCache:n}),u=!1;for(const e of[o,l])i(e)||null==r[e.field]&&(r[e.field]=await e.getDefault(c,t.view),u=!0);switch(u&&(c=await v(s,{useSourceLayer:!0,webStyleCache:n})),c?.type){case"simple-fill":case"polygon-3d":t.polygonSymbol=c;break;case"simple-line":case"line-3d":t.polylineSymbol=c;break;case"simple-marker":case"picture-marker":case"point-3d":case"cim":t.pointSymbol=c}T(t.tooltipOptions,o,l)}(t,n,s,r);const l={graphicProperties:{attributes:s,sourceLayer:n},hasZ:n.capabilities.data.supportsZ};return t.layer.elevationInfo=n.elevationInfo,t.create(function(e){if(!e)throw new Error("no geometry type");if("mesh"===e||"multipatch"===e)throw new Error("Mesh and Multipatch not supported");return e}(n.geometryType),l)}function T(e,t,i){a(t)||a(i)?e.visualVariables={size:a(t)?{unit:t.displayUnit,axis:t.axis,valueType:t.fieldType}:null,rotation:a(i)?{valueType:i.fieldType,rotationType:i.rotationType??"geographic"}:null}:e.visualVariables=null}function L(e,t){return e?e.find((e=>e.layer===t)):void 0}async function E(e,t,a,i){switch(t.type){case"3d":return async function(e,t,a,i){if(0===e.length)return[];const{updatable:r,graphicsByLayer:l}=await a.async((async()=>{const{results:r}=await n(S(t,a),i),s=new Map;j(r).forEach((({graphic:e})=>(e=>{const t=e.layer,a=s.get(t);if(!a){const e=new Array;return s.set(t,e),e}return a})(e).push(e)));const l=e.filter((({supports:e,layer:t})=>e.includes("update")&&s.has(t)));return 0!==l.length&&a.stopPropagation(),{updatable:l,graphicsByLayer:s}}));return n(s(r.map((async({layer:e})=>{const{objectIdField:t}=e,a="displayField"in e?e.displayField:null,r=[t];null!=a&&e.fieldsIndex.has(a)&&r.push(a);const n=l.get(e);if(n.some((e=>r.some((t=>!(t in e.attributes)))))){const t=e.createQuery();return t.outFields=r,t.returnGeometry=!1,t.objectIds=n.map((e=>e.getObjectId())),e.queryFeatures(t,{signal:i}).then((({features:e})=>e))}return n}))),i)}(e,t,a,i);case"2d":return async function(e,t,a,i){if(0===e.length)return[];let r=null;const l=await a.async((async()=>{const{results:s}=await n(t.hitTest(a),i);if(0===s.length)return[];const l=new Set;r=j(s),r.forEach((({graphic:e})=>e&&l.add(e.layer)));const o=e.items.filter((({layer:e,supports:t,attachmentsOnUpdateEnabled:a})=>l.has(e)&&(t.includes("update")||t.includes("delete")||a)));return o.length>0&&a.stopPropagation(),o}));return n(s(l.map((({layer:e})=>{const n=e.objectIdField,s="displayField"in e?e.displayField:null,l=[n];null!=s&&e.fieldsIndex.has(s)&&l.push(s);const o=e.createQuery();o.outFields=l,o.returnGeometry=!1;const c="renderer"in e?y({renderer:e.renderer,event:a}):0;return o.geometry=d(a.mapPoint,c,t),o.outSpatialReference=t.spatialReference,e.queryFeatures(o,{signal:i}).then((({features:t})=>(r?.forEach((({graphic:a})=>{a.layer!==e||t.some((e=>e.getObjectId()===a.getObjectId()))||t.push(a)})),t)))}))),i)}(e,t,a,i)}}async function M(e,t,a){const{sourceLayer:i}=e,r=i.createQuery();return r.objectIds=[e.getAttribute(i.objectIdField)],r.outFields=["*"],r.outSpatialReference=t.spatialReference,r.returnM=i.capabilities.data.supportsM,r.returnZ=i.capabilities.data.supportsZ,(await i.queryFeatures(r,{signal:a})).features[0]}async function R(e,t,r,n,s){let l=!1;const{rotation:o,size:c}=n;[o,c].forEach((async r=>{if(i(r))return;const n=t.attributes[r.field];if(a(n))r.initValue(n);else{const a=await r.getDefault(t.symbol,e.view);r.initValue(a),t.setAttribute(r.field,a),l=!0}})),l&&await z(t,s);const u={multipleSelectionEnabled:!1};return"point"===r.geometryType&&(u.enableRotation=a(o),u.enableScaling=a(c)),T(e.tooltipOptions,c,o),e.layer.elevationInfo=r.elevationInfo,e.update(t,u)}async function A(e,t,i,r,n){if(!a(t.geometry)||"point"!==t.geometry?.type)return;const s=r.rotation,l=(o=i.toolEventInfo,!a(o)||"rotate-start"!==o.type&&"rotate"!==o.type&&"rotate-stop"!==o.type?null:o);var o;if(a(s)&&a(l))if("rotate-stop"===l.type)s.isUpdatingInteractively=!1,s.initValue();else{s.isUpdatingInteractively=!0;const{field:a,getValue:i}=s;t.attributes[a]=i(l.angle,e)}const c=r.size,u=function(e){return!a(e)||"scale-start"!==e.type&&"scale"!==e.type&&"scale-stop"!==e.type?null:e}(i.toolEventInfo);if(a(c)&&a(u))if("scale-stop"===u.type)c.isUpdatingInteractively=!1,c.initValue();else{c.isUpdatingInteractively=!0;const{field:a,getValue:i}=c;t.attributes[a]=i(u.xScale,e)}await z(t,n)}async function O(e,n,s,u,p,y){const d=e.clone();await z(d,y),u.map.add(s.layer),s.layer.add(d);const f=e.sourceLayer,m=Q(u,f),h=()=>{const t=e.layer,a=e.attributes[t.objectIdField];return m.then((e=>e.setVisibility?.(a,!1)),(()=>{})),{remove(){m.then((e=>e.setVisibility?.(a,!0)),(()=>{}))}}};let g=null,b=null;if("3d"===u.type){const e=new I({graphic:d});g=t([u.trackGraphicState(e),l((()=>e.displaying),(e=>{b=e?h():r(b)}),o)])}else b=h();await R(s,d,f,n,y);let w=null;m.then((e=>w=e),(()=>{}));const v=n.size,S=n.rotation,j=l((()=>e.attributes),(async e=>{let t=!1;for(const r in e){const n=e[r];n!==d.attributes[r]&&(d.setAttribute(r,n),a(v)&&!v.isUpdatingInteractively&&v.field===r&&v.initValue(n),a(S)&&!S.isUpdatingInteractively&&S.field===r&&S.initValue(n),(i(w)||w.requiredFields.includes(r))&&(t=!0))}t&&await z(d,y)})),U=s.on("update",(async e=>{const t=e.graphics[0];if("complete"===e.state)return R(s,t,f,n,y);await A(u,t,e,n,y),p(t.clone(),e)})),V=s.on(["undo","redo"],(async e=>{p(e.graphics[0].clone(),e)})),F=()=>{};return{interactive:{remove(){V.remove(),U.remove(),s.cancel(),j&&j.remove(),this.remove=F}},visual:{remove(){r(b),Q(u,f).then((e=>c((()=>!e.updating)))).then((()=>{r(g),s.layer.remove(d),this.remove=F}))}}}}const k={icon:u(24),text:u(12),line:u(1),viewScaleSizeFactor:100};function G(e,t,a){let i=!1;return e.filter((e=>!!i||(i=e===t,i))).map((e=>a[e]()))}function P(e,t){if(e.viewModel.refreshCreationTemplates(),"awaiting-feature-creation-info"===t[0].id){const i=function(e){if(1!==e.length)return null;const t=e[0];if("items"in t){const e=t;return 1===e.items.length?e.items[0]:null}return t}(e.viewModel.featureTemplatesViewModel.items);a(i)&&(e.creationInfo=i,t.shift())}return t}function q(e){switch(e){case"unknown":case"decimal-degrees":return null;default:return e}}function C(e){e.set({abilities:{editing:!0,operations:{add:!0,update:!0,delete:!0}},filesEnabled:!0,mode:"view"})}function D(e){const{creationInfo:{layer:t},viewModel:a}=e,i=a.editableItems.find((e=>e.layer===t));if(i)return i.attachmentsOnCreateEnabled;const r=t.capabilities?.data,n=a.layerInfos?.find((e=>e.layer===t));return!(!(r&&"supportsAttachment"in r&&r.supportsAttachment)||n&&(!1===n.allowAttachments||!1===n.attachmentsOnUpdateEnabled))}const Z=e=>/-stop/.test(e)||/vertex-/.test(e),Q=(e,t)=>{const a="subtype-sublayer"===t.type?t.parent:t;return e.whenLayerView(a)};export{x as a,R as b,G as c,P as d,F as e,L as f,U as g,E as h,Z as i,M as j,O as k,C as p,D as s,z as u,A as v,Q as w};