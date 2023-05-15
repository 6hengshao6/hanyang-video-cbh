// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils","../../chunks/persistableUrlUtils"],function(d,e,g){function k(b,a,c){return a.imageData?e.makeData({mediaType:a.contentType||"image/png",isBase64:!0,data:a.imageData}):h(a.url,c)}function h(b,a){return null==a||"service"!==a.origin&&"portal-item"!==a.origin||"feature"!==a.layer?.type&&"stream"!==a.layer?.type||e.isAbsolute(b)||!a?.layer?.parsedUrl?g.fromJSON(b,a):e.join(a.layer.parsedUrl.path,"images",b)}function l(b,a,c,f){if(e.isDataProtocol(b)){if(b=e.dataComponents(b))a.contentType=
b.mediaType,a.imageData=b.data,c&&c.imageData===a.imageData&&c.url&&g.write(c.url,a,"url",f)}else g.write(b,a,"url",f)}const m={json:{read:{source:["imageData","url"],reader:k},write:{writer(b,a,c,f){l(b,a,this.source,f)}}}};d.read=h;d.readImageDataOrUrl=k;d.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader(b,a,c){b={};a.imageData&&(b.imageData=a.imageData);a.contentType&&(b.contentType=a.contentType);a.url&&(b.url=h(a.url,c));return b}}}};d.urlPropertyDefinition=
m;d.writeImageDataAndUrl=l;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});