// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Graphic ../../ArcadeDate ../../kernel ../support/errorsupport ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../../core/maybe ../../../core/sql/WhereClause ../../../geometry/SpatialReference".split(" "),function(t,p,G,C,H,q,y,x,u,n,v,z,I){let w=function(){function l(f){this.field=f;this.sqlRewritable=!1}l.prototype.postInitialization=function(f,r){};return p._createClass(l)}(),A=function(l){function f(a){a=
r.call(this,a);a.sqlRewritable=!0;return a}p._inherits(f,l);var r=p._createSuper(f);l=f.prototype;l.extractValue=function(a){return a.attributes[this.field.name]};l.rewriteSql=function(a){return{rewritten:this.sqlRewritable,where:a}};return p._createClass(f)}(w),D=function(l){function f(a,b,d){var e=r.call(this,u.cloneField(a));e.originalField=a;e.sqlRewritable=!0;e.field.name=b;e.field.alias=d;return e}p._inherits(f,l);var r=p._createSuper(f);l=f.prototype;l.rewriteSql=function(a,b){return{rewritten:this.sqlRewritable,
where:n.reformulateWithoutField(a,this.field.name,this.originalField.name,b.getFieldsIndex())}};l.extractValue=function(a){return a.attributes[this.originalField.name]};return p._createClass(f)}(w),E=function(l){function f(a,b,d){a=r.call(this,a);a.codefield=b;a.lkp=d;a.reverseLkp={};for(const e in d)a.reverseLkp[d[e]]=e;a.sqlRewritable=!0;return a}p._inherits(f,l);var r=p._createSuper(f);l=f.prototype;l.rewriteSql=function(a,b){const d=this.evaluateNodeToWhereClause(a.parseTree,u.FeatureServiceDatabaseType.Standardised,
this.field.name,this.codefield instanceof z.WhereClause?n.toWhereClause(this.codefield,u.FeatureServiceDatabaseType.Standardised):this.codefield,a.parameters);return d.includes(f.BADNESS)?{rewritten:!1,where:a}:{rewritten:this.sqlRewritable,where:z.WhereClause.create(d,v.unwrapOrThrow(b._parent).getFieldsIndex())}};l.evaluateNodeToWhereClause=function(a,b,d=null,e=null,c){var g;switch(a.type){case "interval":return n.convertIntervalToSql(this.evaluateNodeToWhereClause(a.value,b,d,e,c),a.qualifier,
a.op);case "case-expression":e=" CASE ";"simple"===a.format&&(e+=this.evaluateNodeToWhereClause(a.operand,b,d,f.BADNESS,c));for(g=0;g<a.clauses.length;g++)e+=" WHEN "+this.evaluateNodeToWhereClause(a.clauses[g].operand,b,d,f.BADNESS,c)+" THEN "+this.evaluateNodeToWhereClause(a.clauses[g].value,b,d,f.BADNESS,c);null!==a.else&&(e+=" ELSE "+this.evaluateNodeToWhereClause(a.else,b,d,f.BADNESS,c));return e+" END ";case "parameter":a=c[a.value.toLowerCase()];if("string"===typeof a)return"'"+a.toString().replace(/'/g,
"''")+"'";if(a instanceof Date)return n.makeDateString(a,b,null);if(a instanceof C.ArcadeDate)return n.arcadeDateToSqlString(a,b,null);if(a instanceof Array){d=[];for(c=0;c<a.length;c++)"string"===typeof a[c]?d.push("'"+a[c].toString().replace(/'/g,"''")+"'"):a[c]instanceof Date?d.push(n.makeDateString(a[c],b,null)):a[c]instanceof C.ArcadeDate?d.push(n.arcadeDateToSqlString(a[c],b,null)):d.push(a[c].toString());return d}return a.toString();case "expression-list":g=[];for(k of a.value)g.push(this.evaluateNodeToWhereClause(k,
b,d,e,c));return g;case "unary-expression":return" ( NOT "+this.evaluateNodeToWhereClause(a.expr,b,d,f.BADNESS,c)+" ) ";case "binary-expression":switch(a.operator){case "AND":return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" AND "+this.evaluateNodeToWhereClause(a.right,b,d,e,c)+") ";case "OR":return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" OR "+this.evaluateNodeToWhereClause(a.right,b,d,e,c)+") ";case "IS":if("null"!==a.right.type)throw new q.SqlError(q.SqlErrorCodes.UnsupportedIsRhs);
return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IS NULL )";case "ISNOT":if("null"!==a.right.type)throw new q.SqlError(q.SqlErrorCodes.UnsupportedIsRhs);return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IS NOT NULL )";case "IN":var k=[];if("expression-list"===a.right.type){if("column-reference"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){var h=[];k=!0;for(g of a.right.value)if("string"===g.type)if(void 0!==this.lkp[g.value])h.push(this.lkp[g.value].toString());
else{k=!1;break}else{k=!1;break}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IN ("+h.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,d,e,c);return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IN ("+k.join(",")+")) "}g=this.evaluateNodeToWhereClause(a.right,b,d,e,c);return g instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" IN ("+g+")) ";case "NOT IN":k=[];if("expression-list"===
a.right.type){if("column-reference"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){g=[];k=!0;for(h of a.right.value)if("string"===h.type)if(void 0!==this.lkp[h.value])g.push(this.lkp[h.value].toString());else{k=!1;break}else{k=!1;break}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" NOT IN ("+g.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,d,e,c);return" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" NOT IN ("+k.join(",")+")) "}g=this.evaluateNodeToWhereClause(a.right,
b,d,e,c);return g instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" NOT IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,d,e,c)+" NOT IN ("+g+")) ";case "BETWEEN":return e=this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)," ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" BETWEEN "+e[0]+" AND "+e[1]+" ) ";case "NOTBETWEEN":return e=this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)," ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,
c)+" NOT BETWEEN "+e[0]+" AND "+e[1]+" ) ";case "LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)+") ";case "NOT LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,
b,d,f.BADNESS,c)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)+") ";case "\x3c\x3e":case "\x3d":if("column-reference"===a.left.type&&"string"===a.right.type){if(a.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[a.right.value.toString()])return" ("+e+" "+a.operator+" "+this.lkp[a.right.value.toString()].toString()+") "}else if("column-reference"===a.right.type&&
"string"===a.left.type&&a.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[a.right.value.toString()].toString()+" "+a.operator+" "+e+") ";return" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)+") ";case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "*":case "-":case "+":case "/":case "||":return" ("+this.evaluateNodeToWhereClause(a.left,b,d,f.BADNESS,c)+" "+a.operator+" "+
this.evaluateNodeToWhereClause(a.right,b,d,f.BADNESS,c)+") "}case "null":return"null";case "boolean":return!0===a.value?"1":"0";case "string":return"'"+a.value.toString().replace(/'/g,"''")+"'";case "timestamp":return n.makeDateString(a.value,b,null);case "date":return n.makeDateString(a.value,b,null);case "number":return a.value.toString();case "current-time":return n.makeToday("date"===a.mode,b);case "column-reference":return d&&d.toLowerCase()===a.column.toLowerCase()?"("+e+")":a.column;case "data-type":return a.value;
case "function":return d=this.evaluateNodeToWhereClause(a.args,b,d,f.BADNESS,c),n.translateFunctionToDatabaseSpecific(a.name,d,b)}throw new q.SqlError(q.SqlErrorCodes.UnsupportedSyntax,{node:a.type});};l.extractValue=function(a){return this.codefield instanceof z.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(a)]:this.reverseLkp[a.attributes[this.codefield]]};return p._createClass(f)}(w);E.BADNESS="_!!!_BAD_LKP_!!!!";let J=function(l){function f(a,b){a=r.call(this,a);a._sql=b;return a}
p._inherits(f,l);var r=p._createSuper(f);l=f.prototype;l.rewriteSql=function(a,b){return{rewritten:!0,where:n.reformulateWithoutField(a,this.field.name,n.toWhereClause(this._sql,u.FeatureServiceDatabaseType.Standardised),b.getFieldsIndex())}};l.extractValue=function(a){return this._sql.calculateValueCompiled(a)};return p._createClass(f)}(w);y=function(l){function f(a){var b=r.call(this,a);b._calcFunc=null;b.declaredClass="esri.arcade.featureset.actions.Adapted";b.adaptedFields=[];b._extraFilter=null;
b._extraFilter=a.extraFilter;b._parent=a.parentfeatureset;b._maxProcessing=30;b.adaptedFields=a.adaptedFields;return b}p._inherits(f,l);var r=p._createSuper(f);f.findField=function(a,b){for(const d of a)if(d.name.toLowerCase()===b.toString().toLowerCase())return d;return null};l=f.prototype;l._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=
this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new I({wkid:4326}),this.globalIdField=this.objectIdField="",this.geometryType=u.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null);this.fields=[];for(const a of this.adaptedFields)a.postInitialization(this,this._parent),this.fields.push(a.field)};l._getSet=async function(a){if(null===this._wset){await this._ensureLoaded();
let b=null;b=this._extraFilter?await this._getFilteredSet("",null,null,null,a):await this._parent?._getSet(a);this._checkCancelled(a);v.assertIsSome(b);this._wset=new x(b._candidates.slice(0),b._known.slice(0),b._ordered,this._clonePageDefinition(b.pagesDefinition))}return this._wset};l._isInFeatureSet=function(a){return v.unwrapOrThrow(this._parent)._isInFeatureSet(a)};l._getFeatures=async function(a,b,d,e){var c=[];-1!==b&&void 0===this._featureCache[b]&&c.push(b);const g=this._maxQueryRate();if(!0===
this._checkIfNeedToExpandKnownPage(a,g))return await this._expandPagedSet(a,g,0,0,e),this._getFeatures(a,b,d,e);let k=0;for(let h=a._lastFetchedIndex;h<a._known.length&&!(k++,k<=d&&(a._lastFetchedIndex+=1),void 0===this._featureCache[a._known[h]]&&(a._known[h]!==b&&c.push(a._known[h]),c.length>=g));h++);if(0===c.length)return"success";a=new x([],c,a._ordered,null);b=Math.min(c.length,d);await this._parent?._getFeatures(a,-1,b,e);this._checkCancelled(e);a=[];for(e=0;e<b;e++)d=this._parent?._featureFromCache(c[e]),
void 0!==d&&a.push({geometry:d.geometry,attributes:d.attributes,id:c[e]});for(const h of a){c=[];for(const m of this.adaptedFields)c[m.field.name]=m.extractValue(h);this._featureCache[h.id]=new G({attributes:c,geometry:H.cloneGeometry(h.geometry)})}return"success"};l._fetchAndRefineFeatures=async function(){throw new q.FeatureSetError(q.FeatureSetErrorCodes.NeverReach);};l._getFilteredSet=async function(a,b,d,e,c){let g=!1;var k=this._reformulateWithoutAdaptions(d);g=k.cannot;d=k.where;k=!1;if(null!==
e){k=!0;const h=[];for(const m of this.adaptedFields)if(!(m instanceof A)&&!0===e.scanForField(m.field.name))if(m instanceof D)h.push({field:m.field.name,newfield:m.originalField.name});else{e=null;k=!1;break}e&&0<h.length&&(e=e.replaceFields(h))}null!==d?null!==this._extraFilter&&(d=n.combine(this._extraFilter,d)):d=this._extraFilter;await this._ensureLoaded();a=await v.unwrapOrThrow(this._parent)._getFilteredSet(a,b,d,e,c);this._checkCancelled(c);return!0===g?new x(a._candidates.slice(0).concat(a._known.slice(0)),
[],!0===k?a._ordered:!1,this._clonePageDefinition(a.pagesDefinition)):new x(a._candidates.slice(0),a._known.slice(0),!0===k?a._ordered:!1,this._clonePageDefinition(a.pagesDefinition))};l._reformulateWithoutAdaptions=function(a){const b={cannot:!1,where:a};if(null!==a)for(const d of this.adaptedFields)if(!0===n.scanForField(a,d.field.name)){const e=d.rewriteSql(a,this);if(!0===e.rewritten)b.where=e.where;else{b.cannot=!0;b.where=null;break}}return b};l._stat=async function(a,b,d,e,c,g,k){var h=!1;
let m=this._reformulateWithoutAdaptions(b);h=m.cannot;b=m.where;m=this._reformulateWithoutAdaptions(c);h=h||m.cannot;c=m.where;null!==c?null!==this._extraFilter&&(c=n.combine(this._extraFilter,c)):c=this._extraFilter;if(!0===h)return null===c&&""===d&&null===e?this._manualStat(a,b,g,k):{calculated:!1};h=await v.unwrapOrThrow(this._parent)._stat(a,b,d,e,c,g,k);return!1===h.calculated?null===c&&""===d&&null===e?this._manualStat(a,b,g,k):{calculated:!1}:h};l._canDoAggregates=async function(a,b,d,e,c){if(null===
this._parent)return!1;for(var g=0;g<a.length;g++)for(var k of this.adaptedFields)if(a[g].toLowerCase()===k.field.name.toLowerCase()&&!(k instanceof A))return!1;g=[];for(k=0;k<b.length;k++){var h=b[k];if(null!==h.workingexpr){const m=this._reformulateWithoutAdaptions(h.workingexpr);if(m.cannot)return!1;h=h.clone();h.workingexpr=m.where;g.push(h)}else g.push(h)}b=this._reformulateWithoutAdaptions(c);if(b.cannot)return!1;c=b.where;null!==c?null!==this._extraFilter&&(c=n.combine(this._extraFilter,c)):
c=this._extraFilter;return this._parent._canDoAggregates(a,g,d,e,c)};l._getAggregatePagesDataSourceDefinition=async function(a,b,d,e,c,g,k){if(null===this._parent)throw new q.FeatureSetError(q.FeatureSetErrorCodes.NeverReach);const h=[];for(let B=0;B<b.length;B++){var m=b[B];if(null!==m.workingexpr){const F=this._reformulateWithoutAdaptions(m.workingexpr);if(F.cannot)throw new q.FeatureSetError(q.FeatureSetErrorCodes.NeverReach);m=m.clone();m.workingexpr=F.where;h.push(m)}else h.push(m)}b=this._reformulateWithoutAdaptions(c);
if(b.cannot)throw new q.FeatureSetError(q.FeatureSetErrorCodes.NeverReach);c=b.where;null!==c?null!==this._extraFilter&&(c=n.combine(this._extraFilter,c)):c=this._extraFilter;return this._parent._getAggregatePagesDataSourceDefinition(a,h,d,e,c,g,k)};return p._createClass(f)}(y);t.AdaptedFeatureSet=y;t.AdaptedField=w;t.FieldRename=D;t.OriginalField=A;t.SqlExpressionAdapted=J;t.StringToCodeAdapted=E;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});