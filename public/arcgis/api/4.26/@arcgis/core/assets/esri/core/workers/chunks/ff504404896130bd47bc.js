"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7712,2058,3173],{48027:(e,t,r)=>{r.d(t,{Z:()=>d});var n,o,i=r(54174),s=r(82426),a=r(71252),l=r(91306);function u(e){return(0,s.c)((0,l.n)(e),0,255)}function c(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}r(72836),r(29794),r(7200),r(48578),r(92143),r(31450),r(71552),r(76506),r(40642);class f{static blendColors(e,t,r,n=new f){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(r){const e=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0];if("%"===r.charAt(r.length-1)){const r=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(r[3]=parseFloat(e[3])),f.fromArray(r,t)}return f.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return f.fromArray((0,i.h)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new f){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const r=4===e.length?4:8,n=(1<<r)-1;let o=Number("0x"+e.substr(1));return isNaN(o)?null:(["b","g","r"].forEach((e=>{const i=o&n;o>>=r,t[e]=4===r?17*i:i})),t.a=1,t)}static fromArray(e,t=new f){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=(0,i.i)(e)?(0,i.g)(e):null;return r&&f.fromArray(r,t)||f.fromRgb(e,t)||f.fromHex(e,t)}static fromJSON(e){return e&&new f([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,a.i)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,a.i)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?f.fromString(e,this):Array.isArray(e)?f.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof f||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=f.AlphaMode.ALWAYS){const t=u(this.r),r=u(this.g),n=u(this.b);return e===f.AlphaMode.ALWAYS||1!==this.a?[t,r,n,u(255*this.a)]:[t,r,n]}clone(){return new f(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,a.i)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(c(this.r,0,255)),this.g=Math.round(c(this.g,0,255)),this.b=Math.round(c(this.b,0,255)),this.a=c(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}f.prototype.declaredClass="esri.Color",n=f||(f={}),(o=n.AlphaMode||(n.AlphaMode={}))[o.ALWAYS=0]="ALWAYS",o[o.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const d=f},2298:(e,t,r)=>{r.d(t,{a:()=>O,c:()=>C,d:()=>f,r:()=>v});var n=r(60991),o=r(76506),i=r(92143),s=r(99520);const a=!0,l={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function u(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+l.identifierOffset,l.identifierLength)),version:t.getUint16(r+l.versionOffset,a),checksum:t.getUint32(r+l.checksumOffset,a)}}const c={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function f(e){const t=new DataView(e,0);let r=0;const{identifier:o,version:i}=u(e,t,r);if(r+=l.byteCount,"LEPCC     "!==o)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");const s=function(e,t){return{sizeLo:e.getUint32(t+c.sizeLo,a),sizeHi:e.getUint32(t+c.sizeHi,a),minX:e.getFloat64(t+c.minX,a),minY:e.getFloat64(t+c.minY,a),minZ:e.getFloat64(t+c.minZ,a),maxX:e.getFloat64(t+c.maxX,a),maxY:e.getFloat64(t+c.maxY,a),maxZ:e.getFloat64(t+c.maxZ,a),errorX:e.getFloat64(t+c.errorX,a),errorY:e.getFloat64(t+c.errorY,a),errorZ:e.getFloat64(t+c.errorZ,a),count:e.getUint32(t+c.count,a),reserved:e.getUint32(t+c.reserved,a)}}(t,r);if(r+=c.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const f=new Float64Array(3*s.count),h=[],p=[],g=[],b=[];if(r=d(e,r,h),r=d(e,r,p),r=d(e,r,g),r=d(e,r,b),r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");let m=0,y=0;for(let e=0;e<h.length;e++){y+=h[e];let t=0;for(let r=0;r<p[e];r++){t+=g[m];const e=b[m];f[3*m]=Math.min(s.maxX,s.minX+2*s.errorX*t),f[3*m+1]=Math.min(s.maxY,s.minY+2*s.errorY*y),f[3*m+2]=Math.min(s.maxZ,s.minZ+2*s.errorZ*e),m++}}return{errorX:s.errorX,errorY:s.errorY,errorZ:s.errorZ,result:f}}function d(e,t,r){const n=[];t=h(e,t,n);const o=[];for(let i=0;i<n.length;i++){o.length=0,t=h(e,t,o);for(let e=0;e<o.length;e++)r.push(o[e]+n[i])}return t}function h(e,t,r){const o=new DataView(e,t),i=o.getUint8(0),s=31&i,l=!!(32&i),u=(192&i)>>6;let c=0;if(0===u)c=o.getUint32(1,a),t+=5;else if(1===u)c=o.getUint16(1,a),t+=3;else{if(2!==u)throw new n.Z("lepcc-decode-error","Bad count type");c=o.getUint8(1),t+=2}if(l)throw new n.Z("lepcc-decode-error","LUT not implemented");const f=Math.ceil(c*s/8),d=new Uint8Array(e,t,f);let h=0,p=0,g=0;const b=-1>>>32-s;for(let e=0;e<c;e++){for(;p<s;)h|=d[g]<<p,p+=8,g+=1;r[e]=h&b,h>>>=s,p-=s,p+s>32&&(h|=d[g-1]>>8-p)}return t+g}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16},g={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16},b=i.L.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function m(e,t,r){let o="",i=0;for(;i<r;){const s=e[t+i];if(s<128)o+=String.fromCharCode(s),i++;else if(s>=192&&s<224){if(i+1>=r)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&s)<<6|63&e[t+i+1];o+=String.fromCharCode(a),i+=2}else if(s>=224&&s<240){if(i+2>=r)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&s)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(s>=240&&s<248))throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new n.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&s)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function y(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let o=0;o<t.length;o++){const i=t[o],s=i.valueType||i.type,a=S[s];r.fields[i.property]=a(e,n),n+=E[s].BYTES_PER_ELEMENT}return r.byteCount=n,r}function w(e,t,r){const o=[];let i,s,a=0;for(s=0;s<e;s+=1){if(i=t[s],i>0){if(o.push(m(r,a,i-1)),0!==r[a+i-1])throw new n.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=i}return o}function O(e,t){return new(0,E[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function A(e,t,r){if(t!==e&&b.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new n.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function C(e,t){const r=y(e,t&&t.header);let n=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},i=r.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const r={...t.vertexAttributes[e],byteOffset:n,count:s},i=T[e]||"_"+e;o.vertexAttributes[i]=r,n+=I(r.valueType)*r.valuesPerElement*s}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const r={...t.faces[e],byteOffset:n,count:a};o.faces[e]=r,n+=I(r.valueType)*r.valuesPerElement*a}}const l=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&l){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const r={...t.featureAttributes[e],byteOffset:n,count:l};o.featureAttributes[e]=r,n+=("UInt64"===r.valueType?8:I(r.valueType))*r.valuesPerElement*l}}return A(n,e.byteLength,"geometry"),o.byteCount=n-o.byteOffset,o}const T={position:s.V.POSITION,normal:s.V.NORMAL,color:s.V.COLOR,uv0:s.V.UV0,region:s.V.UVREGION};function v(e,t,r){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let r=0;const{identifier:o,version:i}=u(e,t,r);if(r+=l.byteCount,"ClusterRGB"!==o)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");const s=function(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,a),sizeHi:e.getUint32(t+p.sizeHi,a),count:e.getUint32(t+p.count,a),colorMapCount:e.getUint16(t+p.colorMapCount,a),lookupMethod:e.getUint8(t+p.lookupMethod),compressionMethod:e.getUint8(t+p.compressionMethod)}}(t,r);if(r+=p.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+r!==e.byteLength||s.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,r,3*s.colorMapCount),o=new Uint8Array(e,r+3*s.colorMapCount,s.count),i=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++){const r=o[e];i[3*e]=t[3*r],i[3*e+1]=t[3*r+1],i[3*e+2]=t[3*r+2]}return i}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+r!==e.byteLength||0!==s.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(r+3!==e.byteLength||1!==s.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");const o=t.getUint8(r),i=t.getUint8(r+1),a=t.getUint8(r+2),l=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++)l[3*e]=o,l[3*e+1]=i,l[3*e+2]=a;return l}throw new n.Z("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let r=0;const{identifier:o,version:i}=u(e,t,r);if(r+=l.byteCount,"Intensity "!==o)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");const s=function(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,a),sizeHi:e.getUint32(t+g.sizeHi,a),count:e.getUint32(t+g.count,a),scaleFactor:e.getUint16(t+g.scaleFactor,a),bitsPerPoint:e.getUint8(t+g.bitsPerPoint),reserved:e.getUint8(t+g.reserved)}}(t,r);if(r+=g.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const c=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,r,s.count);for(let e=0;e<s.count;e++)c[e]=t[e]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,r,s.count);for(let e=0;e<s.count;e++)c[e]=t[e]*s.scaleFactor}else{const t=[];if(h(e,r,t)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(let e=0;e<s.count;e++)c[e]=t[e]*s.scaleFactor}return c}(t);if(null!=e.encoding&&""!==e.encoding)throw new n.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(b.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(b.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=function(e,t,r){const i=null!=t.header?y(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let e=0;e<t.ordering.length;e++){const r=t.ordering[e],l=(0,o.d9)(t[r]);if(l.count=i.fields.count??0,"String"===l.valueType){if(l.byteOffset=a,l.byteCount=i.fields[r+"ByteCount"],"UTF-8"!==l.encoding)throw new n.Z("unsupported-encoding","Unsupported String encoding.",{encoding:l.encoding});if(l.timeEncoding&&"ECMA_ISO8601"!==l.timeEncoding)throw new n.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:l.timeEncoding})}else{if(!U(l.valueType))throw new n.Z("unsupported-value-type","Unsupported binary valueType",{valueType:l.valueType});{const e=I(l.valueType);a+=a%e!=0?e-a%e:0,l.byteOffset=a,l.byteCount=e*l.valuesPerElement*l.count}}a+=l.byteCount??0,s.entries[r]=l}return s.byteCount=a-s.byteOffset,s}(t,e,r);A(i.byteOffset+i.byteCount,t.byteLength,"attribute");const s=i.entries.attributeValues||i.entries.objectIds;if(s){if("String"===s.valueType){const e=i.entries.attributeByteCounts,r=O(t,e),n=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,s);return s.timeEncoding?function(e,t,r){return w(e,t,r).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,r,n):w(e.count,r,n)}return O(t,s)}throw new n.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const E={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},S={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function U(e){return E.hasOwnProperty(e)}function I(e){return U(e)?E[e].BYTES_PER_ELEMENT:0}},27712:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(71252),o=r(48578),i=r(35861),s=r(99),a=r(72836),l=r(56697),u=r(1623),c=r(60947),f=r(15206),d=r(35491),h=r(23884),p=r(2298);function g(e,t,r){return(0,n.i)(e)&&e.attributeInfo.useElevation?t?function(e,t){const r=new Float64Array(t);for(let n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):null:(0,n.i)(e)&&e.attributeInfo.storageInfo?(0,p.r)(e.attributeInfo.storageInfo,e.buffer,r):null}function b(e,t,r,n,o){const i=e.length/3;let s=0;for(let a=0;a<i;a++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],r=o[e].values[a];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(r)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=y(t.requiredSetBits),n=y(t.requiredClearBits);(r&e)===e&&0==(r&n)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&r,n=r>>>4&15,o=n>1,s=1===e,a=e===n;let l=!1;for(const e of t.includedReturns)if("last"===e&&a||"firstOfMany"===e&&s&&o||"lastOfMany"===e&&a&&o||"single"===e&&!o){l=!0;break}l||(i=!1);break}}}i&&(r[s]=a,e[3*s]=e[3*a],e[3*s+1]=e[3*a+1],e[3*s+2]=e[3*a+2],t[3*s]=t[3*a],t[3*s+1]=t[3*a+1],t[3*s+2]=t[3*a+2],s++)}return s}function m(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function y(e){let t=0;for(const r of e||[])t|=1<<r;return t}r(29794),r(7200),r(60991),r(76506),r(92143),r(31450),r(71552),r(40642),r(82426),r(50406),r(53785),r(57251),r(89623),r(6540),r(66396),r(89914),r(21972),r(17533),r(86656),r(91306),r(60474),r(91055),r(34250),r(19657),r(6906),r(65775),r(21801),r(73796),r(12047),r(97714),r(2906),r(91597),r(86787),r(35132),r(84069),r(12381),r(73173),r(82058),r(88762),r(32101),r(44567),r(98380),r(92482),r(92896),r(92624),r(92847),r(59465),r(60158),r(17035),r(51669),r(48027),r(54174),r(6090),r(99520);class w{transform(e){const t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];(0,n.i)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,o.t)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&r.push(e.values.buffer);return Promise.resolve({result:t,transferList:r})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const r=(0,p.c)(t,e);if((0,n.a)(r.vertexAttributes.position))return;const o=(0,p.a)(t,r.vertexAttributes.position),i=r.header.fields,s=[i.offsetX,i.offsetY,i.offsetZ],a=[i.scaleX,i.scaleY,i.scaleZ],l=o.length/3,u=new Float64Array(3*l);for(let e=0;e<l;e++)u[3*e]=o[3*e]*a[0]+s[0],u[3*e+1]=o[3*e+1]*a[1]+s[1],u[3*e+2]=o[3*e+2]*a[2]+s[2];return u}if("lepcc-xyz"===e.encoding)return(0,p.d)(t).result}(e.schema,e.geometryBuffer);let r=t.length/3,o=null;const i=[],s=g(e.primaryAttributeData,t,r);(0,n.i)(e.primaryAttributeData)&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const a=g(e.modulationAttributeData,t,r);(0,n.i)(e.modulationAttributeData)&&a&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:a});let l=function(e,t,r,n){const{rendererJSON:o,isRGBRenderer:i}=e;let s=null,a=null;if(t&&i)s=t;else if(t&&"pointCloudUniqueValueRenderer"===o?.type){a=h.Z.fromJSON(o);const e=a.colorUniqueValueInfos;s=new Uint8Array(3*n);const r=m(a.fieldTransformType);for(let o=0;o<n;o++){const n=(r?r(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(n)){s[3*o]=e[t].color.r,s[3*o+1]=e[t].color.g,s[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o?.type){a=d.Z.fromJSON(o);const e=a.stops;s=new Uint8Array(3*n);const r=m(a.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o],i=e.length-1;if(n<e[0].value)s[3*o]=e[0].color.r,s[3*o+1]=e[0].color.g,s[3*o+2]=e[0].color.b;else if(n>=e[i].value)s[3*o]=e[i].color.r,s[3*o+1]=e[i].color.g,s[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const r=(n-e[t-1].value)/(e[t].value-e[t-1].value);s[3*o]=e[t].color.r*r+e[t-1].color.r*(1-r),s[3*o+1]=e[t].color.g*r+e[t-1].color.g*(1-r),s[3*o+2]=e[t].color.b*r+e[t-1].color.b*(1-r);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o?.type){a=f.Z.fromJSON(o);const e=a.colorClassBreakInfos;s=new Uint8Array(3*n);const r=m(a.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){s[3*o]=e[t].color.r,s[3*o+1]=e[t].color.g,s[3*o+2]=e[t].color.b;break}}}else{s=new Uint8Array(3*n);for(let e=0;e<s.length;e++)s[e]=255}if(r&&a&&a.colorModulation){const e=a.colorModulation.minValue,t=a.colorModulation.maxValue,o=.3;for(let i=0;i<n;i++){const n=r[i],a=n>=t?1:n<=e?o:o+(1-o)*(n-e)/(t-e);s[3*i]=a*s[3*i],s[3*i+1]=a*s[3*i+1],s[3*i+2]=a*s[3*i+2]}}return s}(e.rendererInfo,s,a,r);if(e.filterInfo&&e.filterInfo.length>0&&(0,n.i)(e.filterAttributesData)){const s=e.filterAttributesData.filter(n.i).map((e=>{const n=g(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return i.push(o),o}));o=new Uint32Array(r),r=b(t,l,o,e.filterInfo,s)}for(const n of e.userAttributesData){const e=g(n,t,r);i.push({attributeInfo:n.attributeInfo,values:e})}3*r<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);const u=this._transformCoordinates(t,r,e.obb,c.Z.fromJSON(e.inSR),c.Z.fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:l,attributes:i,pointIdFilterMap:o}}_transformCoordinates(e,t,r,n,o){if(!(0,u.CM)(e,n,0,e,o,0,t))throw new Error("Can't reproject");const s=(0,l.f)(r.center[0],r.center[1],r.center[2]),c=(0,l.b)(),f=(0,l.b)();(0,i.a)(O,r.quaternion);const d=new Float32Array(3*t);for(let n=0;n<t;n++)c[0]=e[3*n]-s[0],c[1]=e[3*n+1]-s[1],c[2]=e[3*n+2]-s[2],(0,a.q)(f,c,O),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(f[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(f[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(f[2])),d[3*n]=c[0],d[3*n+1]=c[1],d[3*n+2]=c[2];return d}_applyElevationOffsetInPlace(e,t,r){if(0!==r)for(let n=0;n<t;n++)e[3*n+2]+=r}}const O=(0,s.c)();function A(){return new w}},89914:(e,t,r)=>{r.d(t,{S:()=>o});var n=r(21972);class o extends n.c{notify(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}}}},99520:(e,t,r)=>{var n;r.d(t,{V:()=>n}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(n||(n={}))},73173:(e,t,r)=>{r.d(t,{g:()=>l});var n=r(31450),o=(r(82058),r(60991)),i=r(92143),s=r(32101);const a=i.L.getLogger("esri.assets");function l(e){if(!n.Z.assetsPath)throw a.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.Z("assets:path-not-set","config.assetsPath is not set");return(0,s.v_)(n.Z.assetsPath,e)}},59465:(e,t,r)=>{r.d(t,{e:()=>i});var n=r(57251),o=r(34250);function i(e,t={}){const r=e instanceof n.J?e:new n.J(e,t),i={type:t?.ignoreUnknown??1?r.apiValues:String,json:{type:r.jsonValues,read:!t?.readOnly&&{reader:r.read},write:{writer:r.write}}};return void 0!==t?.readOnly&&(i.readOnly=!!t.readOnly),void 0!==t?.default&&(i.json.default=t.default),void 0!==t?.name&&(i.json.name=t.name),void 0!==t?.nonNullable&&(i.nonNullable=t.nonNullable),(0,o.Cb)(i)}},35861:(e,t,r)=>{r.d(t,{a:()=>l,e:()=>c,f:()=>u,g:()=>s,m:()=>a,s:()=>i});var n=r(72836),o=r(29794);function i(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function s(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,o.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function a(e,t,r){const n=t[0],o=t[1],i=t[2],s=t[3],a=r[0],l=r[1],u=r[2],c=r[3];return e[0]=n*c+s*a+o*u-i*l,e[1]=o*c+s*l+i*a-n*u,e[2]=i*c+s*u+n*l-o*a,e[3]=s*c-n*a-o*l-i*u,e}function l(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function u(e,t,r,n){const o=.5*Math.PI/180;t*=o,r*=o,n*=o;const i=Math.sin(t),s=Math.cos(t),a=Math.sin(r),l=Math.cos(r),u=Math.sin(n),c=Math.cos(n);return e[0]=i*l*c-s*a*u,e[1]=s*a*c+i*l*u,e[2]=s*l*u-i*a*c,e[3]=s*l*c+i*a*u,e}const c=r(7200).e;(0,n.d)(),(0,n.f)(1,0,0),(0,n.f)(0,1,0)},99:(e,t,r)=>{function n(){const e=new Float32Array(4);return e[3]=1,e}function o(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}r.d(t,{a:()=>o,c:()=>n})},56697:(e,t,r)=>{function n(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,r){const n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}r.d(t,{b:()=>n,c:()=>o,f:()=>i}),i(1,1,1),i(1,0,0),i(0,1,0),i(0,0,1)},82058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g,l:()=>h,r:()=>R,s:()=>d});var n=r(31450),o=r(88762),i=r(60991),s=r(48578),a=r(76506),l=r(71252),u=r(50406),c=r(32101);r(71552),r(92143),r(40642);const f=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function d(e){const t=(0,c.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!f.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function h(e,t,r=!1,n){return new Promise(((o,i)=>{if((0,u.Hc)(n))return void i(p());let a=()=>{d(),i(new Error(`Unable to load ${t}`))},c=()=>{const t=e;d(),o(t)},f=()=>{if(!e)return;const t=e;d(),t.src="",i(p())};const d=()=>{(0,s.h)("esri-image-decode")||(e.removeEventListener("error",a),e.removeEventListener("load",c)),a=null,c=null,e=null,(0,l.i)(n)&&n.removeEventListener("abort",f),f=null,r&&URL.revokeObjectURL(t)};(0,l.i)(n)&&n.addEventListener("abort",f),(0,s.h)("esri-image-decode")?e.decode().then(c,a):(e.addEventListener("error",a),e.addEventListener("load",c))}))}function p(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function g(e,t){const a=(0,c.HK)(e),f=(0,c.jc)(e);f||a||(e=(0,c.Fv)(e));const h={url:e,requestOptions:{...(0,l.u)(t)}};let p=(0,c.oh)(e);if(p){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=E("request:interceptor",e,t)}if((n instanceof Error||n instanceof i.Z)&&(r=E("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(p,h);if(null!=e)return{data:e,getHeader:C,httpStatus:200,requestOptions:h.requestOptions,url:h.url};p.after||p.error||(p=null)}if(e=h.url,"image"===(t=h.requestOptions).responseType){if((0,s.h)("host-webworker")||(0,s.h)("host-node"))throw E("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),h)}else if(a)throw E("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),h);if("head"===t.method){if(t.body)throw E("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),h);if(a||f)throw E("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),h)}if(await async function(){(0,s.h)("host-webworker")?b||(b=await r.e(9768).then(r.bind(r,89768))):g._abortableFetch||(g._abortableFetch=globalThis.fetch.bind(globalThis))}(),b)return b.execute(e,t);const w=new AbortController;(0,u.fu)(t,(()=>w.abort()));const O={controller:w,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:p,params:h,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},A=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,i=e.controller.signal,s=r.body;let a=null,l=null;if(y&&"HTMLFormElement"in globalThis&&(s instanceof FormData?a=s:s instanceof HTMLFormElement&&(a=new FormData(s))),"string"==typeof s&&(l=s),e.fetchOptions={cache:r.cacheBust&&!g._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:i},(a||l)&&(e.fetchOptions.body=a||l),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||a?.get("token")),!e.hasToken&&n.Z.apiKey&&d(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!U(t)&&!(0,u.Hc)(i)){let n;"immediate"===r.authMode?(await S(),n=await o.id.getCredential(t,{signal:i}),e.credential=n):"no-prompt"===r.authMode?(await S(),n=await o.id.getCredential(t,{prompt:!1,signal:i}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[t,r]=await I(e)}while(!await M(e,t,r))}catch(r){const n=E("request:server",r,e.params,t);throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const i=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(i)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,c.kl)(i)){const e=(0,c.P$)(i,!0);e&&m.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&function(e){n.Z.request.crossOriginNoCorsDomains||(n.Z.request.crossOriginNoCorsDomains={});const t=n.Z.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,c.P$)(r)??""]=0:(t[(0,c.P$)("http://"+r)??""]=0,t[(0,c.P$)("https://"+r)??""]=0)}(r.authorizedCrossOriginNoCorsDomains)}const s=e.credential;if(s&&o.id){const e=o.id.findServerInfo(s.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,s.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):C,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(O);return p?.after?.(A),A}let b;const m=n.Z.request,y="FormData"in globalThis,w=[499,498,403,401],O=["COM_0056","COM_0057","SB_0008"],A=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],C=()=>null,T=Symbol();function v(e){const t=(0,c.P$)(e);return!t||t.endsWith(".arcgis.com")||g._corsServers.includes(t)||(0,c.kl)(t)}function E(e,t,r,n){let o="Error";const s={url:r.url,requestOptions:r.requestOptions,getHeader:C,ssl:!1};if(t instanceof i.Z)return t.details?(t.details=(0,a.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=s,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,i=t.message;i&&(o=i),e&&(s.getHeader=e),s.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,s.subCode=t.subcode,s.messageCode=t.messageCode,"string"==typeof t.details?s.messages=[t.details]:s.messages=t.details,s.raw=T in t?t[T]:t}return(0,u.D_)(t)?(0,u.zE)():new i.Z(e,o,s)}async function S(){o.id||await Promise.all([r.e(6676),r.e(7803)]).then(r.bind(r,67803))}function U(e){return A.some((t=>t.test(e)))}async function I(e){let t=e.params.url;const r=e.params.requestOptions,i=e.fetchOptions??{},a=(0,c.jc)(t)||(0,c.HK)(t),l=r.responseType||"json",f=a?0:null!=r.timeout?r.timeout:m.timeout;let d=!1;if(!a){e.useSSL&&(t=(0,c.hO)(t)),r.cacheBust&&"default"===i.cache&&(t=(0,c.ZN)(t,"request.preventCache",Date.now()));let a={...r.query};e.credentialToken&&(a.token=e.credentialToken);let l=(0,c.B7)(a);(0,s.h)("esri-url-encodes-apostrophe")&&(l=l.replace(/'/g,"%27"));const u=t.length+1+l.length;let f;d="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||u>m.maxUrlLength;const h=r.useProxy||!!(0,c.ed)(t);if(h){const e=(0,c.b7)(t);f=e.path,!d&&f.length+1+u>m.maxUrlLength&&(d=!0),e.query&&(a={...e.query,...a})}if("HEAD"===i.method&&(d||h)){if(d){if(u>m.maxUrlLength)throw E("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw E("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw E("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(i.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,c.fl)(t,a):(i.body=(0,c.B7)(a),i.headers||(i.headers={}),i.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,c.fl)(t,a),h&&(e.useProxy=!0,t=`${f}?${t}`),a.token&&y&&i.body instanceof FormData&&!(0,c.i)(t)&&i.body.set("token",a.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,c.D6)(t,(0,c.TI)()))if((0,c.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(i.credentials="include",function(e){const t=n.Z.request.crossOriginNoCorsDomains;if(t){let r=(0,c.P$)(e);if(r)return r=r.toLowerCase(),!(0,c.D6)(r,(0,c.TI)())&&t[r]<Date.now()-36e5}return!1}(t)&&await async function(e){const t=n.Z.request.crossOriginNoCorsDomains,r=(0,c.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,c.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}(d?(0,c.fl)(t,a):t))}let h,p,b=0,w=!1;f>0&&(b=setTimeout((()=>{w=!0,e.controller.abort()}),f));try{if("native-request-init"===r.responseType)p=i,p.url=t;else if("image"!==r.responseType||"default"!==i.cache||"GET"!==i.method||d||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!a&&!e.useProxy&&m.proxyUrl&&!v(t)){if(h=await g._abortableFetch(t,i),e.useProxy||function(e){const t=(0,c.P$)(e);t&&!g._corsServers.includes(t)&&g._corsServers.push(t)}(t),"native"===r.responseType)p=h;else if("HEAD"!==i.method)if(h.ok){switch(l){case"array-buffer":p=await h.arrayBuffer();break;case"blob":case"image":p=await h.blob();break;default:p=await h.text()}if(b&&(clearTimeout(b),b=0),"json"===l||"xml"===l||"document"===l)if(p)switch(l){case"json":p=JSON.parse(p);break;case"xml":p=L(p,"application/xml");break;case"document":p=L(p,"text/html")}else p=null;if(p){if("array-buffer"===l||"blob"===l){const e=h.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&p["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(p).json();e.error&&(p=e)}catch{}}"image"===l&&p instanceof Blob&&(p=await N(URL.createObjectURL(p),e,!0))}}else p=await h.text()}else p=await N(t,e)}catch(n){if("AbortError"===n.name){if(w)throw new Error("Timeout exceeded");throw(0,u.zE)("Request canceled")}if(!(!h&&n instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||v(t))throw n;e.redoRequest=!0,(0,c.tD)({proxyUrl:m.proxyUrl,urlPrefix:(0,c.P$)(t)??""})}finally{b&&clearTimeout(b)}return[h,p]}function L(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function M(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let i,s;if(!t.ok)throw i=new Error(`Unable to load ${t.url} status: ${t.status}`),i[T]=r,i;r&&(r.error?i=r.error:"error"===r.status&&Array.isArray(r.messages)&&(i={...r},i[T]=r,i.details=r.messages));let a,l=null;i&&(s=Number(i.code),l=i.hasOwnProperty("subcode")?Number(i.subcode):null,a=i.messageCode,a=a&&a.toUpperCase());const u=n.authMode;if(403===s&&(4===l||i.message&&i.message.toLowerCase().includes("ssl")&&!i.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===s)&&void 0!==s&&w.includes(s)&&!U(e.params.url)&&(403!==s||a&&!O.includes(a)&&(null==l||2===l&&e.credentialToken))){await S();try{const t=await o.id.getCredential(e.params.url,{error:E("request:server",i,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=void 0,e.credentialToken=void 0,!1;i=t}}if(i)throw i;return!0}function N(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=m.priority,o.src=e,h(o,e,r,n)}g._abortableFetch=null,g._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const R=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}))}}]);