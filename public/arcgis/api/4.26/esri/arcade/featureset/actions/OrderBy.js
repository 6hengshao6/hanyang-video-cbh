// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/languageUtils ../support/errorsupport ../support/FeatureSet ../support/IdSet ../support/OrderbyClause".split(" "),function(k,l,n,p,m,r){return function(f){function h(a){var b=t.call(this,a);b._orderbyclause=null;b.declaredClass="esri.arcade.featureset.actions.OrderBy";b._maxProcessing=100;b._orderbyclause=a.orderbyclause;b._parent=a.parentfeatureset;return b}k._inherits(h,f);var t=k._createSuper(h);f=h.prototype;f._getSet=async function(a){if(null===
this._wset){await this._ensureLoaded();const b=await this._getFilteredSet("",null,null,this._orderbyclause,a);this._checkCancelled(a);this._wset=b}return this._wset};f.manualOrderSet=async function(a,b){a=await this.getIdColumnDictionary(a,[],-1,b);this._orderbyclause?.order(a);b=new m([],[],!0,null);for(let e=0;e<a.length;e++)b._known.push(a[e].id);return b};f.getIdColumnDictionary=async function(a,b,e,c){if(e<a._known.length-1){var d=this._maxQueryRate();if("GETPAGES"===a._known[e+1])return await l.tick(this._parent._expandPagedSet(a,
d,0,0,c)),this.getIdColumnDictionary(a,b,e,c);d=e+1;const g=[];for(;d<a._known.length&&"GETPAGES"!==a._known[d];)g.push(a._known[d]),d++;e+=g.length;d=await l.tick(this._parent._getFeatureBatch(g,c));this._checkCancelled(c);for(const q of d)b.push({id:q.attributes[this.objectIdField],feature:q});return this.getIdColumnDictionary(a,b,e,c)}return 0<a._candidates.length?(await l.tick(this._refineSetBlock(a,this._maxProcessingRate(),c)),this._checkCancelled(c),this.getIdColumnDictionary(a,b,e,c)):b};
f._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};f._getFeatures=function(a,b,e,c){return this._parent._getFeatures(a,b,e,c)};f._featureFromCache=function(a){if(void 0===this._featureCache[a]){const b=this._parent._featureFromCache(a);return void 0===b?void 0:null===b?null:this._featureCache[a]=b}return this._featureCache[a]};f._fetchAndRefineFeatures=async function(){throw new n.FeatureSetError(n.FeatureSetErrorCodes.NeverReach);};f._getFilteredSet=async function(a,b,e,c,d){await this._ensureLoaded();
c=await this._parent._getFilteredSet(a,b,e,null===c?this._orderbyclause:c,d);this._checkCancelled(d);const g=new m(c._candidates.slice(0),c._known.slice(0),c._ordered,this._clonePageDefinition(c.pagesDefinition));a=!0;0<c._candidates.length&&(a=!1);return!1===g._ordered?(d=await this.manualOrderSet(g,d),!1!==a||null===b&&null===e||(d=new m(d._candidates.slice(0).concat(d._known.slice(0)),[],d._ordered,this._clonePageDefinition(d.pagesDefinition))),d):g};h.registerAction=function(){p._featuresetFunctions.orderBy=
function(a){return""===a?this:new h({parentfeatureset:this,orderbyclause:new r(a)})}};return k._createClass(h)}(p)});