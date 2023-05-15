/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import n from"../Color.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";let o=class extends t{constructor(){super(...arguments),this.enabled=!0}};e([i({type:Boolean})],o.prototype,"enabled",void 0),o=e([r("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")],o);let l=class extends t{constructor(e){super(e),this.lineSnapper=new o,this.parallelLineSnapper=new o,this.rightAngleSnapper=new o,this.rightAngleTriangleSnapper=new o,this.shortLineThreshold=15,this.distance=5,this.pointThreshold=1e-6,this.intersectionParallelLineThreshold=1e-6,this.parallelLineThreshold=1e-6,this.verticalLineThreshold=.1,this.touchSensitivityMultiplier=1.5,this.pointOnLineThreshold=1e-6,this.orange=new n([255,127,0]),this.orangeTransparent=new n([255,127,0,.5]),this.lineHintWidthReference=3,this.lineHintWidthTarget=3,this.lineHintFadedExtensions=.3,this.parallelLineHintWidth=2,this.parallelLineHintLength=24,this.parallelLineHintOffset=1.5,this.rightAngleHintSize=24,this.rightAngleHintOutlineSize=1.5,this.satisfiesConstraintScreenThreshold=1}};e([i({type:o,constructOnly:!0,nonNullable:!0,json:{write:!0}})],l.prototype,"lineSnapper",void 0),e([i({type:o,constructOnly:!0,nonNullable:!0,json:{write:!0}})],l.prototype,"parallelLineSnapper",void 0),e([i({type:o,constructOnly:!0,nonNullable:!0,json:{write:!0}})],l.prototype,"rightAngleSnapper",void 0),e([i({type:o,constructOnly:!0,nonNullable:!0,json:{write:!0}})],l.prototype,"rightAngleTriangleSnapper",void 0),e([i({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],l.prototype,"shortLineThreshold",void 0),e([i({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],l.prototype,"distance",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],l.prototype,"pointThreshold",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],l.prototype,"intersectionParallelLineThreshold",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],l.prototype,"parallelLineThreshold",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],l.prototype,"verticalLineThreshold",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],l.prototype,"touchSensitivityMultiplier",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],l.prototype,"pointOnLineThreshold",void 0),e([i({type:n,nonNullable:!0})],l.prototype,"orange",void 0),e([i({type:n,nonNullable:!0})],l.prototype,"orangeTransparent",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],l.prototype,"lineHintWidthReference",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],l.prototype,"lineHintWidthTarget",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],l.prototype,"lineHintFadedExtensions",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],l.prototype,"parallelLineHintWidth",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:50},json:{write:!0}})],l.prototype,"parallelLineHintLength",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],l.prototype,"parallelLineHintOffset",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:46},json:{write:!0}})],l.prototype,"rightAngleHintSize",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:6},json:{write:!0}})],l.prototype,"rightAngleHintOutlineSize",void 0),e([i({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],l.prototype,"satisfiesConstraintScreenThreshold",void 0),l=e([r("esri.views.interactive.snapping.Settings.Defaults")],l);const a=new l;export{a as d};
