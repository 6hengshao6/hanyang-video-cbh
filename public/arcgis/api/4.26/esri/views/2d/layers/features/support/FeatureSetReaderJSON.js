// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ./FeatureSetReader".split(" "),function(q,m,k,l,h,r){function t({coords:b,lengths:d}){let g=0;for(const a of d){for(d=1;d<a;d++)b[2*(g+d)]+=b[2*(g+d)-2],b[2*(g+d)+1]+=b[2*(g+d)-1];g+=a}}let u=function(b){function d(a,c,e){a=g.call(this,a,e);a._exceededTransferLimit=!1;a._featureIndex=-1;a._dateFields=new Set;
a._geometryType=e?.geometryType;a._features=c;return a}m._inherits(d,b);var g=m._createSuper(d);d.fromFeatures=function(a,c){const {objectIdField:e,geometryType:f}=c,p=l.convertFromFeatures([],a,f,!1,!1,e);for(let n=0;n<p.length;n++)p[n].displayId=a[n].displayId;return d.fromOptimizedFeatures(p,c)};d.fromFeatureSet=function(a,c){a=l.convertFromFeatureSet(a,c.objectIdField);return d.fromOptimizedFeatureSet(a,c)};d.fromOptimizedFeatureSet=function(a,c){const {features:e}=a;c=d.fromOptimizedFeatures(e,
c);c._exceededTransferLimit=a.exceededTransferLimit;c._transform=a.transform;for(const f of a.fields)"esriFieldTypeDate"===f.type&&c._dateFields.add(f.name);return c};d.fromOptimizedFeatures=function(a,c,e){const f=r.FeatureSetReader.createInstance();a=new d(f,a,c);a._transform=e;return a};b=d.prototype;b.removeIds=function(a){const c=new Set(a);this._features=this._features.filter(e=>!(e.objectId&&c.has(e.objectId)))};b.append=function(a){for(const c of a)this._features.push(c)};b.getSize=function(){return this._features.length};
b.getCursor=function(){return this.copy()};b.getQuantizationTransform=function(){return this._transform};b.getAttributeHash=function(){let a="";for(const c in this._current.attributes)a+=this._current.attributes[c];return a};b.getIndex=function(){return this._featureIndex};b.setIndex=function(a){this._featureIndex=a};b.getObjectId=function(){return this._current?.objectId};b.getDisplayId=function(){return this._current.displayId};b.setDisplayId=function(a){this._current.displayId=a};b.getGroupId=
function(){return this._current.groupId};b.setGroupId=function(a){this._current.groupId=a};b.copy=function(){const a=new d(this.instance,this._features,this.fullSchema());this.copyInto(a);return a};b.next=function(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length};b.readLegacyFeature=function(){return l.convertToFeature(this._current,this.geometryType,this.hasZ,this.hasM)};b.readOptimizedFeature=function(){return this._current};
b.readLegacyPointGeometry=function(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null};b.readLegacyGeometry=function(){const a=this.readGeometry();return l.convertToGeometry(a,this.geometryType,this.hasZ,this.hasM)};b.readLegacyCentroid=function(){const a=this.readCentroid();return k.isNone(a)?null:{x:a.coords[0]*this._sx+this._tx,y:a.coords[1]*this._sy+this._ty}};b.readGeometryArea=function(){return h.hasGeometry(this._current)?l.getQuantizedArea(this._current.geometry,2):0};b.readUnquantizedGeometry=
function(){var a=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!a)return a;a=a.clone();t(a);return a};b.readHydratedGeometry=function(){var a=this._current.geometry;if(k.isNone(a))return null;a=a.clone();k.isSome(this._transform)&&l.unquantizeOptimizedGeometry(a,a,this.hasZ,this.hasM,this._transform);return a};b.getXHydrated=function(){if(!h.hasGeometry(this._current))return 0;const a=this._current.geometry.coords[0],c=this.getQuantizationTransform();return k.isNone(c)?a:a*c.scale[0]+
c.translate[0]};b.getYHydrated=function(){if(!h.hasGeometry(this._current))return 0;const a=this._current.geometry.coords[1],c=this.getQuantizationTransform();return k.isNone(c)?a:c.translate[1]-a*c.scale[1]};b.getX=function(){return h.hasGeometry(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0};b.getY=function(){return h.hasGeometry(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0};b.readGeometry=function(){if(!h.hasGeometry(this._current)){if(k.isSome(this._current.centroid)){const [e,
f]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(e,f)}return null}const a=this._current.geometry.clone();if(a.isPoint)return a.coords[0]=a.coords[0]*this._sx+this._tx,a.coords[1]=a.coords[1]*this._sy+this._ty,a;let c=0;for(const e of a.lengths)a.coords[2*c]=a.coords[2*c]*this._sx+this._tx,a.coords[2*c+1]=a.coords[2*c+1]*this._sy+this._ty,c+=e;return a};b.readCentroid=function(){return h.hasGeometry(this._current)?this._computeCentroid():this._current.centroid};b.hasField=function(a){return a in
this._current.attributes?!0:this.getFieldNames().map(c=>c.toLowerCase()).includes(a.toLowerCase())};b.getFieldNames=function(){return Object.keys(this._current.attributes)};b._readAttribute=function(a,c){var e=this._current.attributes[a];if(void 0!==e)return null!=e&&c&&this._dateFields.has(a)?new Date(e):e;e=this.readAttributes();a=a?.toLocaleLowerCase().trim();for(const f in e)if(f.toLocaleLowerCase().trim()===a)return a=this._current.attributes[f],null!=a&&c&&this._dateFields.has(f)?new Date(a):
a};b.copyInto=function(a){m._get(m._getPrototypeOf(d.prototype),"copyInto",this).call(this,a);a._featureIndex=this._featureIndex;a._transform=this._transform;a._dateFields=this._dateFields};b._readAttributes=function(){return this._current.attributes};m._createClass(d,[{key:"_current",get:function(){return this._features[this._featureIndex]}},{key:"geometryType",get:function(){return this._geometryType}},{key:"hasFeatures",get:function(){return!!this._features.length}},{key:"hasNext",get:function(){return this._featureIndex+
1<this._features.length}},{key:"exceededTransferLimit",get:function(){return this._exceededTransferLimit}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}}]);return d}(r.FeatureSetReader);q.FeatureSetReaderJSON=u;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});