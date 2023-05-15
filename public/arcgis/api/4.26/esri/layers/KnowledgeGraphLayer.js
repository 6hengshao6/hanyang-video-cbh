// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/Error ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Layer ./knowledgeGraph/KnowledgeGraphLayerDataManager ./knowledgeGraph/KnowledgeGraphSubLayer ./mixins/BlendLayer ./mixins/ScaleRangeLayer ../rest/knowledgeGraphService ../rest/knowledgeGraph/EntityType ../rest/knowledgeGraph/RelationshipType".split(" "),
function(p,f,q,u,r,g,e,F,G,v,w,x,t,y,z,A,B,C){e=function(k){function l(a){var b=D.call(this,a);b.layers=new q;b.sublayerIdsCache=new Map;b.tables=new q;b.type="knowledge-graph";b._originalInclusionList=a.inclusionModeDefinition;return b}p._inherits(l,k);var D=p._createSuper(l);k=l.prototype;k.normalizeCtorArgs=function(a){return{url:a.url,title:a.title}};k._initializeLayerProperties=function(a){const b=new Set,d=new Map;let m=[],n=[];if(a.inclusionModeDefinition&&(!a.inclusionModeDefinition.namedTypeDefinitions||
1>a.inclusionModeDefinition.namedTypeDefinitions.size))throw new u("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");a.inclusionModeDefinition?.generateAllSublayers?(m=a.knowledgeGraph.dataModel.entityTypes??[],n=a.knowledgeGraph.dataModel.relationshipTypes??[]):a.inclusionModeDefinition?.namedTypeDefinitions&&0<a.inclusionModeDefinition?.namedTypeDefinitions.size?(a.knowledgeGraph.dataModel.entityTypes?.forEach(h=>
{h.name&&d.set(h.name,h)}),a.knowledgeGraph.dataModel.relationshipTypes?.forEach(h=>{h.name&&d.set(h.name,h)}),a.inclusionModeDefinition?.namedTypeDefinitions.forEach((h,c)=>{d.get(c)?d.get(c)instanceof C||"strictOrigin"in d.get(c)?b.has(c)||(b.add(c),n.push(d.get(c))):d.get(c)instanceof B||"properties"in d.get(c)?b.has(c)||(b.add(c),m.push(d.get(c))):(r.getLogger(this.declaredClass).warn(`A named type, ${c}, was in the inclusion list that wasn't properly modeled and will be removed`),a.inclusionModeDefinition?.namedTypeDefinitions.delete(c)):
(r.getLogger(this.declaredClass).warn(`A named type, ${c}, was in the inclusion list that wasn't in the data model and will be removed`),a.inclusionModeDefinition?.namedTypeDefinitions.delete(c))})):(m=a.knowledgeGraph.dataModel.entityTypes??[],n=a.knowledgeGraph.dataModel.relationshipTypes??[]);const E=new x.KnowledgeGraphLayerDataManager({knowledgeGraph:a.knowledgeGraph,inclusionModeDefinition:a.inclusionModeDefinition});this.knowledgeGraph=a.knowledgeGraph;this.memberEntityTypes=m;this.memberRelationshipTypes=
n;this.dataManager=E};k.load=function(){this.addResolvingPromise(A.fetchKnowledgeGraph(this.url).then(a=>{this._initializeLayerProperties({knowledgeGraph:a,inclusionModeDefinition:this._originalInclusionList});this.loadLayerAssumingLocalCache()}));return Promise.resolve(this)};k.loadLayerAssumingLocalCache=function(){this.memberEntityTypes.forEach(a=>{const b=new t({objectType:a,parentCompositeLayer:this,graphType:"entity",title:a.name});b.geometryType?this.layers.push(b):this.tables.push(b);this.dataManager.sublayerCaches.has(a.name)||
this.dataManager.sublayerCaches.set(a.name,new Map)});this.memberRelationshipTypes.forEach(a=>{const b=new t({objectType:a,parentCompositeLayer:this,graphType:"relationship",title:a.name});b.geometryType?this.layers.push(b):this.tables.push(b);this.dataManager.sublayerCaches.has(a.name)||this.dataManager.sublayerCaches.set(a.name,new Map)});this.dataManager.inclusionModeDefinition?.namedTypeDefinitions&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((a,b)=>{a.members?.forEach(d=>
{this.sublayerIdsCache.has(b)?this.sublayerIdsCache.get(b)?.push(d.id):this.sublayerIdsCache.set(b,[d.id])})});Array.from(this.sublayerIdsCache.values()).forEach(a=>a.sort())};return p._createClass(l)}(y.BlendLayer(z.ScaleRangeLayer(w)));f.__decorate([g.property()],e.prototype,"dataManager",void 0);f.__decorate([g.property()],e.prototype,"knowledgeGraph",void 0);f.__decorate([g.property()],e.prototype,"layers",void 0);f.__decorate([g.property()],e.prototype,"memberEntityTypes",void 0);f.__decorate([g.property()],
e.prototype,"memberRelationshipTypes",void 0);f.__decorate([g.property()],e.prototype,"sublayerIdsCache",void 0);f.__decorate([g.property()],e.prototype,"tables",void 0);f.__decorate([g.property({json:{read:!1}})],e.prototype,"type",void 0);return e=f.__decorate([v.subclass("esri.layers.KnowledgeGraphLayer")],e)});