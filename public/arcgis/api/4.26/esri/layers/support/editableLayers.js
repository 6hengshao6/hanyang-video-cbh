// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./layerUtils"],function(b,c){b.isEditableLayer=function(a){return!(!a?.loaded||!c.getEffectiveLayerCapabilities(a)?.operations?.supportsEditing||"editingEnabled"in a&&!c.getEffectiveEditingEnabled(a))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});