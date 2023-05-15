// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ./ArcadeDate ../layers/support/FieldsIndex ../time/TimeReference ../chunks/datetime ../time/timeReferenceUtils".split(" "),function(g,m,h,l,n,e,p){function k(a){return a?.timeZoneIANA?a?.timeZoneIANA:a?.timeZone?p.convertLegacyTimeZone(a,""):""}let q=function(){function a(){this.dateTimeReferenceMetaData=null;this._fieldTimeZoneIndex={};this._ianaLayerDateFields=this._ianaEditFields=this._ianaTimeInfo=this._ianaPreferred=this._fieldIndex=null}a.create=
function(b,c){const d=new a;d.dateTimeReferenceMetaData=c;d._fieldIndex=b instanceof l?b:new l(b);return d};a.createFromLayer=function(b){if(!b)return null;if(!b.fieldsIndex)return!b.declaredClass&&b.fields?a.create(b.fields,b):null;const c=new a;c._fieldIndex=b.fieldsIndex;c.dateTimeReferenceMetaData={timeInfo:b?.timeInfo?.toJSON()??null,editFieldsInfo:b?.editFieldsInfo?.toJSON()??null,dateFieldsTimeReference:b?.dateFieldsTimeReference?.toJSON()??null,preferredTimeReference:b?.preferredTimeReference?.toJSON()??
null,datesInUnknownTimezone:!0===b?.datesInUnknownTimezone};return c};var f=a.prototype;f.fieldTimeZone=function(b){b=this._fieldIndex?.get(b);if(!b||"date"!==b.type&&"esriFieldTypeDate"!==b.type)return null;var c=this._fieldTimeZoneIndex[b.name];if(void 0!==c)return c;c=[{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.creationDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},
{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.editDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},{field:this.dateTimeReferenceMetaData?.timeInfo?.startTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},{field:this.dateTimeReferenceMetaData?.timeInfo?.endTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,
isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone}];for(var d of c)if(d.field===b.name)return d=this.convertToIANA(d.timeReference,d.isunknown),this._fieldTimeZoneIndex[b.name]=d;d=this.convertToIANA(this.dateTimeReferenceMetaData?.dateFieldsTimeReference,this.dateTimeReferenceMetaData?.datesInUnknownTimezone);return this._fieldTimeZoneIndex[b.name]=d};f.convertToIANA=function(b,c){return c?"unknown":k(b)};m._createClass(a,[{key:"layerPreferredTimeZone",get:function(){if(null!==
this._ianaPreferred)return this._ianaPreferred;this._ianaPreferred="";return this._ianaPreferred=this.convertToIANA(this.dateTimeReferenceMetaData?.preferredTimeReference,!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone)}},{key:"layerTimeInfoTimeZone",get:function(){if(null!==this._ianaTimeInfo)return this._ianaTimeInfo;this._ianaTimeInfo="";return this._ianaTimeInfo=this.convertToIANA(this.dateTimeReferenceMetaData?.timeInfo?.timeReference,!1)}},{key:"layerEditFieldsTimeZone",get:function(){if(null!==
this._ianaEditFields)return this._ianaEditFields;this._ianaEditFields="";return this._ianaEditFields=this.convertToIANA(this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,this.dateTimeReferenceMetaData?.datesInUnknownTimezone)}},{key:"layerDateFieldsTimeZone",get:function(){if(null!==this._ianaLayerDateFields)return this._ianaLayerDateFields;this._ianaLayerDateFields="";return this._ianaLayerDateFields=this.convertToIANA(this.dateTimeReferenceMetaData?.dateFieldsTimeReference,
!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone)}}]);return a}();g.DateTimeReferenceFieldIndex=q;g.convertTimeReference=function(a){if(!a)return null;a instanceof n&&(a=k(a.toJSON()));if(a instanceof e.Zone)return a;if("unknown"===a.toLowerCase())return h.UnknownTimeZone.instance;if("system"===a.toLowerCase())return e.SystemZone.instance;if("utc"===a.toLowerCase())return e.FixedOffsetZone.utcInstance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(a)){const f=e.FixedOffsetZone.parseSpecifier("UTC"+
(a.startsWith("+")||a.startsWith("-")?"":"+")+a);if(f)return f}a=e.IANAZone.create(a);if(!a.isValid)throw new h.ArcadeDateError(h.ArcadeDateErrorCodes.TimeZoneNotRecognised);return a};g.convertToIANA=k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});