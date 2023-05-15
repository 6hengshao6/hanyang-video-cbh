// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],function(d,f,g,h,e){async function k(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if("heatmap"!==a?.type)throw new g("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:b,renderer:a}}d.getTemplates=async function(a){const [{renderer:b,layer:c},l]=await Promise.all([k(a),h.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!b.field)return null;
({fieldInfos:a}=await e.getFieldAndExpressionInfos({renderer:b,layer:c}));a=new f({content:await e.getContentFromFieldInfos(c,{fieldInfos:a}),fieldInfos:a});return{primaryTemplate:{name:"heatmap",title:l.heatmap,value:a},secondaryTemplates:[]}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});