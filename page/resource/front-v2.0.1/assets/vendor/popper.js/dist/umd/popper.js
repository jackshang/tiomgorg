/*

 Copyright (c) 2016 Federico Zivolo and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
(function(A,v){typeof exports==="object"&&typeof module!=="undefined"?module.exports=v():typeof define==="function"&&define.amd?define(v):A.Popper=v()})(this,function(){function A(a){var b=!1;return function(){b||(b=!0,window.Promise.resolve().then(function(){b=!1;a()}))}}function v(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){b=!1;a()},M))}}function N(a){var b={};return a&&b.toString.call(a)==="[object Function]"}function p(a,b){if(a.nodeType!==1)return[];var c=getComputedStyle(a,
null);return b?c[b]:c}function B(a){return a.nodeName==="HTML"?a:a.parentNode||a.host}function w(a){if(!a)return document.body;switch(a.nodeName){case "HTML":case "BODY":return a.ownerDocument.body;case "#document":return a.body}var b=p(a);return/(auto|scroll|overlay)/.test(b.overflow+b.overflowY+b.overflowX)?a:w(B(a))}function r(a){return a===11?O:a===10?P:O||P}function s(a){if(!a)return document.documentElement;for(var b=r(10)?document.body:null,c=a.offsetParent;c===b&&a.nextElementSibling;)c=(a=
a.nextElementSibling).offsetParent;b=c&&c.nodeName;return!b||b==="BODY"||b==="HTML"?a?a.ownerDocument.documentElement:document.documentElement:["TD","TABLE"].indexOf(c.nodeName)!==-1&&p(c,"position")==="static"?s(c):c}function C(a){return a.parentNode!==null?C(a.parentNode):a}function y(a,b){if(!a||!a.nodeType||!b||!b.nodeType)return document.documentElement;var c=a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING,d=c?a:b,c=c?b:a,e=document.createRange();e.setStart(d,0);e.setEnd(c,0);e=
e.commonAncestorContainer;if(a!==e&&b!==e||d.contains(c))return d=e.nodeName,(d==="BODY"?0:d==="HTML"||s(e.firstElementChild)===e)?e:s(e);d=C(a);return d.host?y(d.host,b):y(a,C(b).host)}function t(a){var b=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top")==="top"?"scrollTop":"scrollLeft",c=a.nodeName;return c==="BODY"||c==="HTML"?(c=a.ownerDocument.documentElement,(a.ownerDocument.scrollingElement||c)[b]):a[b]}function ea(a,b){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:
!1,d=t(b,"top"),e=t(b,"left"),c=c?-1:1;a.top+=d*c;a.bottom+=d*c;a.left+=e*c;a.right+=e*c;return a}function Q(a,b){var c=b==="x"?"Left":"Top",d=c==="Left"?"Right":"Bottom";return parseFloat(a["border"+c+"Width"],10)+parseFloat(a["border"+d+"Width"],10)}function R(a,b,c,d){return Math.max(b["offset"+a],b["scroll"+a],c["client"+a],c["offset"+a],c["scroll"+a],r(10)?parseInt(c["offset"+a])+parseInt(d["margin"+(a==="Height"?"Top":"Left")])+parseInt(d["margin"+(a==="Height"?"Bottom":"Right")]):0)}function S(a){var b=
a.body,a=a.documentElement,c=r(10)&&getComputedStyle(a);return{height:R("Height",b,a,c),width:R("Width",b,a,c)}}function n(a){return m({},a,{right:a.left+a.width,bottom:a.top+a.height})}function D(a){var b={};try{if(r(10)){var b=a.getBoundingClientRect(),c=t(a,"top"),d=t(a,"left");b.top+=c;b.left+=d;b.bottom+=c;b.right+=d}else b=a.getBoundingClientRect()}catch(e){}b={left:b.left,top:b.top,width:b.right-b.left,height:b.bottom-b.top};d=a.nodeName==="HTML"?S(a.ownerDocument):{};c=a.offsetWidth-(d.width||
a.clientWidth||b.right-b.left);d=a.offsetHeight-(d.height||a.clientHeight||b.bottom-b.top);if(c||d)a=p(a),c-=Q(a,"x"),d-=Q(a,"y"),b.width-=c,b.height-=d;return n(b)}function E(a,b){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=r(10),e=b.nodeName==="HTML",f=D(a),g=D(b),h=w(a),j=p(b),i=parseFloat(j.borderTopWidth,10),l=parseFloat(j.borderLeftWidth,10);if(c&&e)g.top=Math.max(g.top,0),g.left=Math.max(g.left,0);f=n({top:f.top-g.top-i,left:f.left-g.left-l,width:f.width,height:f.height});
f.marginTop=0;f.marginLeft=0;if(!d&&e)e=parseFloat(j.marginTop,10),j=parseFloat(j.marginLeft,10),f.top-=i-e,f.bottom-=i-e,f.left-=l-j,f.right-=l-j,f.marginTop=e,f.marginLeft=j;if(d&&!c?b.contains(h):b===h&&h.nodeName!=="BODY")f=ea(f,b);return f}function fa(a){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=a.ownerDocument.documentElement,d=E(a,c),e=Math.max(c.clientWidth,window.innerWidth||0),f=Math.max(c.clientHeight,window.innerHeight||0),g=!b?t(c):0,b=!b?t(c,"left"):0;return n({top:g-
d.top+d.marginTop,left:b-d.left+d.marginLeft,width:e,height:f})}function T(a){var b=a.nodeName;return b==="BODY"||b==="HTML"?!1:p(a,"position")==="fixed"?!0:T(B(a))}function U(a){if(!a||!a.parentElement||r())return document.documentElement;for(a=a.parentElement;a&&p(a,"transform")==="none";)a=a.parentElement;return a||document.documentElement}function F(a,b,c,d){var e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,f={top:0,left:0},g=e?U(a):y(a,b);if(d==="viewport")f=fa(g,e);else{var h=
void 0;if(d==="scrollParent"){if(h=w(B(b)),h.nodeName==="BODY")h=a.ownerDocument.documentElement}else h=d==="window"?a.ownerDocument.documentElement:d;e=E(h,g,e);h.nodeName==="HTML"&&!T(g)?(h=S(a.ownerDocument),g=h.height,h=h.width,f.top+=e.top-e.marginTop,f.bottom=g+e.top,f.left+=e.left-e.marginLeft,f.right=h+e.left):f=e}c=c||0;e=typeof c==="number";f.left+=e?c:c.left||0;f.top+=e?c:c.top||0;f.right-=e?c:c.right||0;f.bottom-=e?c:c.bottom||0;return f}function V(a,b,c,d,e){var f=arguments.length>5&&
arguments[5]!==void 0?arguments[5]:0;if(a.indexOf("auto")===-1)return a;var f=F(c,d,f,e),g={top:{width:f.width,height:b.top-f.top},right:{width:f.right-b.right,height:f.height},bottom:{width:f.width,height:f.bottom-b.bottom},left:{width:b.left-f.left,height:f.height}},f=Object.keys(g).map(function(a){return m({key:a},g[a],{area:g[a].width*g[a].height})}).sort(function(a,b){return b.area-a.area}),h=f.filter(function(a){var b=a.height;return a.width>=c.clientWidth&&b>=c.clientHeight}),f=h.length>0?
h[0].key:f[0].key,h=a.split("-")[1];return f+(h?"-"+h:"")}function W(a,b,c){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,e=d?U(b):y(b,c);return E(c,e,d)}function X(a){var b=getComputedStyle(a),c=parseFloat(b.marginTop)+parseFloat(b.marginBottom),b=parseFloat(b.marginLeft)+parseFloat(b.marginRight);return{width:a.offsetWidth+b,height:a.offsetHeight+c}}function z(a){var b={left:"right",right:"left",bottom:"top",top:"bottom"};return a.replace(/left|right|bottom|top/g,function(a){return b[a]})}
function Y(a,b,c){var c=c.split("-")[0],a=X(a),d={width:a.width,height:a.height},e=["right","left"].indexOf(c)!==-1,f=e?"top":"left",g=e?"left":"top",h=e?"height":"width";d[f]=b[f]+b[h]/2-a[h]/2;d[g]=c===g?b[g]-a[!e?"height":"width"]:b[z(g)];return d}function x(a,b){return Array.prototype.find?a.find(b):a.filter(b)[0]}function ga(a,b,c){if(Array.prototype.findIndex)return a.findIndex(function(a){return a[b]===c});var d=x(a,function(a){return a[b]===c});return a.indexOf(d)}function Z(a,b,c){(c===void 0?
a:a.slice(0,ga(a,"name",c))).forEach(function(a){a["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var c=a["function"]||a.fn;if(a.enabled&&N(c))b.offsets.popper=n(b.offsets.popper),b.offsets.reference=n(b.offsets.reference),b=c(b,a)});return b}function $(a,b){return a.some(function(a){var d=a.name;return a.enabled&&d===b})}function G(a){for(var b=[!1,"ms","Webkit","Moz","O"],c=a.charAt(0).toUpperCase()+a.slice(1),d=0;d<b.length;d++){var e=b[d],e=e?""+e+c:a;if(typeof document.body.style[e]!==
"undefined")return e}return null}function aa(a){return(a=a.ownerDocument)?a.defaultView:window}function ba(a,b,c,d){var e=a.nodeName==="BODY",a=e?a.ownerDocument.defaultView:a;a.addEventListener(b,c,{passive:!0});e||ba(w(a.parentNode),b,c,d);d.push(a)}function ha(a,b){aa(a).removeEventListener("resize",b.updateBound);b.scrollParents.forEach(function(a){a.removeEventListener("scroll",b.updateBound)});b.updateBound=null;b.scrollParents=[];b.scrollElement=null;b.eventsEnabled=!1;return b}function H(a){return a!==
""&&!isNaN(parseFloat(a))&&isFinite(a)}function I(a,b){Object.keys(b).forEach(function(c){var d="";["width","height","top","right","bottom","left"].indexOf(c)!==-1&&H(b[c])&&(d="px");a.style[c]=b[c]+d})}function ia(a,b){Object.keys(b).forEach(function(c){b[c]!==!1?a.setAttribute(c,b[c]):a.removeAttribute(c)})}function ca(a,b,c){var d=x(a,function(a){return a.name===b}),a=!!d&&a.some(function(a){return a.name===c&&a.enabled&&a.order<d.order});if(!a){var e="`"+b+"`";console.warn("`"+c+"` modifier is required by "+
e+" modifier in order to work, be sure to include it before "+e+"!")}return a}function da(a){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=J.indexOf(a),c=J.slice(c+1).concat(J.slice(0,c));return b?c.reverse():c}function ja(a,b,c,d){var e=[0,0],f=["right","left"].indexOf(d)!==-1,a=a.split(/(\+|\-)/).map(function(a){return a.trim()}),d=a.indexOf(x(a,function(a){return a.search(/,|\s/)!==-1}));a[d]&&a[d].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
var g=/\s*,\s*|\s+/,a=d!==-1?[a.slice(0,d).concat([a[d].split(g)[0]]),[a[d].split(g)[1]].concat(a.slice(d+1))]:[a],a=a.map(function(a,d){var e=(d===1?!f:f)?"height":"width",g=!1;return a.reduce(function(a,b){return a[a.length-1]===""&&["+","-"].indexOf(b)!==-1?(a[a.length-1]=b,g=!0,a):g?(a[a.length-1]+=b,g=!1,a):a.concat(b)},[]).map(function(a){var d;var f=a.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);d=+f[1];f=f[2];if(d)if(f.indexOf("%")===0){a=void 0;switch(f){case "%p":a=b;break;default:a=c}d*=n(a)[e]/
100}else{if(f==="vh"||f==="vw")a=void 0,a=f==="vh"?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),d*=a/100}else d=a;return d})});a.forEach(function(a,b){a.forEach(function(c,d){H(c)&&(e[b]+=c*(a[d-1]==="-"?-1:1))})});return e}for(var q=typeof window!=="undefined"&&typeof document!=="undefined",o=["Edge","Trident","Firefox"],M=0,K=0;K<o.length;K+=1)if(q&&navigator.userAgent.indexOf(o[K])>=0){M=1;break}var ka=
q&&window.Promise?A:v,O=q&&!(!window.MSInputMethodContext||!document.documentMode),P=q&&/MSIE 10/.test(navigator.userAgent),la=function(){function a(a,c){for(var d=0;d<c.length;d++){var e=c[d];e.enumerable=e.enumerable||!1;e.configurable=!0;if("value"in e)e.writable=!0;Object.defineProperty(a,e.key,e)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}(),u=function(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a},m=Object.assign||
function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],J=q.slice(3),L={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},o=function(){function a(b,c){var d=this,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(this instanceof
a))throw new TypeError("Cannot call a class as a function");this.scheduleUpdate=function(){return requestAnimationFrame(d.update)};this.update=ka(this.update.bind(this));this.options=m({},a.Defaults,e);this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]};this.reference=b&&b.jquery?b[0]:b;this.popper=c&&c.jquery?c[0]:c;this.options.modifiers={};Object.keys(m({},a.Defaults.modifiers,e.modifiers)).forEach(function(b){d.options.modifiers[b]=m({},a.Defaults.modifiers[b]||{},e.modifiers?e.modifiers[b]:
{})});this.modifiers=Object.keys(this.options.modifiers).map(function(a){return m({name:a},d.options.modifiers[a])}).sort(function(a,b){return a.order-b.order});this.modifiers.forEach(function(a){if(a.enabled&&N(a.onLoad))a.onLoad(d.reference,d.popper,d.options,a,d.state)});this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners();this.state.eventsEnabled=f}la(a,[{key:"update",value:function(){var a;if(this.state.isDestroyed)a=void 0;else{var c={instance:this,styles:{},arrowStyles:{},
attributes:{},flipped:!1,offsets:{}};c.offsets.reference=W(this.state,this.popper,this.reference,this.options.positionFixed);c.placement=V(this.options.placement,c.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);c.originalPlacement=c.placement;c.positionFixed=this.options.positionFixed;c.offsets.popper=Y(this.popper,c.offsets.reference,c.placement);c.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";
c=Z(this.modifiers,c);if(this.state.isCreated)this.options.onUpdate(c);else this.state.isCreated=!0,this.options.onCreate(c)}return a}},{key:"destroy",value:function(){this.state.isDestroyed=!0;if($(this.modifiers,"applyStyle"))this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[G("transform")]="";this.disableEventListeners();
this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper);return this}},{key:"enableEventListeners",value:function(){if(!this.state.eventsEnabled){var a=this.reference,c=this.state;c.updateBound=this.scheduleUpdate;aa(a).addEventListener("resize",c.updateBound,{passive:!0});a=w(a);ba(a,"scroll",c.updateBound,c.scrollParents);c.scrollElement=a;c.eventsEnabled=!0;this.state=c}}},{key:"disableEventListeners",value:function(){if(this.state.eventsEnabled)cancelAnimationFrame(this.scheduleUpdate),
this.state=ha(this.reference,this.state)}}]);return a}();o.Utils=(typeof window!=="undefined"?window:global).PopperUtils;o.placements=q;o.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(a){var b=a.placement,c=b.split("-")[0];if(b=b.split("-")[1]){var d=a.offsets,e=d.reference,d=d.popper,f=["bottom","top"].indexOf(c)!==-1,c=f?"left":"top",f=f?"width":"height",e={start:u({},
c,e[c]),end:u({},c,e[c]+e[f]-d[f])};a.offsets.popper=m({},d,e[b])}return a}},offset:{order:200,enabled:!0,fn:function(a,b){var c=b.offset,d=a.offsets,e=d.popper,d=d.reference,f=a.placement.split("-")[0],g=void 0,g=H(+c)?[+c,0]:ja(c,e,d,f);f==="left"?(e.top+=g[0],e.left-=g[1]):f==="right"?(e.top+=g[0],e.left+=g[1]):f==="top"?(e.left+=g[0],e.top-=g[1]):f==="bottom"&&(e.left+=g[0],e.top+=g[1]);a.popper=e;return a},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(a,b){var c=b.boundariesElement||
s(a.instance.popper);a.instance.reference===c&&(c=s(c));var d=G("transform"),e=a.instance.popper.style,f=e.top,g=e.left,h=e[d];e.top="";e.left="";e[d]="";var j=F(a.instance.popper,a.instance.reference,b.padding,c,a.positionFixed);e.top=f;e.left=g;e[d]=h;b.boundaries=j;var i=a.offsets.popper,l={primary:function(a){var c=i[a];i[a]<j[a]&&!b.escapeWithReference&&(c=Math.max(i[a],j[a]));return u({},a,c)},secondary:function(a){var c=a==="right"?"left":"top",d=i[c];i[a]>j[a]&&!b.escapeWithReference&&(d=
Math.min(i[c],j[a]-(a==="right"?i.width:i.height)));return u({},c,d)}};b.priority.forEach(function(a){var b=["left","top"].indexOf(a)!==-1?"primary":"secondary";i=m({},i,l[b](a))});a.offsets.popper=i;return a},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(a){var b=a.offsets,c=b.popper,b=b.reference,d=a.placement.split("-")[0],e=Math.floor,f=["top","bottom"].indexOf(d)!==-1,d=f?"right":"bottom",g=f?"left":"top",f=
f?"width":"height";c[d]<e(b[g])&&(a.offsets.popper[g]=e(b[g])-c[f]);c[g]>e(b[d])&&(a.offsets.popper[g]=e(b[d]));return a}},arrow:{order:500,enabled:!0,fn:function(a,b){var c;if(!ca(a.instance.modifiers,"arrow","keepTogether"))return a;var d=b.element;if(typeof d==="string"){if(d=a.instance.popper.querySelector(d),!d)return a}else if(!a.instance.popper.contains(d))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),a;var e=a.placement.split("-")[0],f=a.offsets,g=f.popper,
h=f.reference,j=["left","right"].indexOf(e)!==-1,e=j?"height":"width",i=j?"Top":"Left",f=i.toLowerCase(),l=j?"left":"top",k=j?"bottom":"right",j=X(d)[e];h[k]-j<g[f]&&(a.offsets.popper[f]-=g[f]-(h[k]-j));h[f]+j>g[k]&&(a.offsets.popper[f]+=h[f]+j-g[k]);a.offsets.popper=n(a.offsets.popper);var h=h[f]+h[e]/2-j/2,m=p(a.instance.popper),k=parseFloat(m["margin"+i],10),i=parseFloat(m["border"+i+"Width"],10),i=h-a.offsets.popper[f]-k-i,i=Math.max(Math.min(g[e]-j,i),0);a.arrowElement=d;a.offsets.arrow=(c={},
u(c,f,Math.round(i)),u(c,l,""),c);return a},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(a,b){if($(a.instance.modifiers,"inner"))return a;if(a.flipped&&a.placement===a.originalPlacement)return a;var c=F(a.instance.popper,a.instance.reference,b.padding,b.boundariesElement,a.positionFixed),d=a.placement.split("-")[0],e=z(d),f=a.placement.split("-")[1]||"",g=[];switch(b.behavior){case L.FLIP:g=[d,e];break;case L.CLOCKWISE:g=da(d);break;case L.COUNTERCLOCKWISE:g=da(d,!0);break;default:g=
b.behavior}g.forEach(function(h,j){if(d!==h||g.length===j+1)return a;d=a.placement.split("-")[0];e=z(d);var i=a.offsets.popper,l=a.offsets.reference,k=Math.floor,l=d==="left"&&k(i.right)>k(l.left)||d==="right"&&k(i.left)<k(l.right)||d==="top"&&k(i.bottom)>k(l.top)||d==="bottom"&&k(i.top)<k(l.bottom),n=k(i.left)<k(c.left),p=k(i.right)>k(c.right),q=k(i.top)<k(c.top),k=k(i.bottom)>k(c.bottom),i=d==="left"&&n||d==="right"&&p||d==="top"&&q||d==="bottom"&&k,o=["top","bottom"].indexOf(d)!==-1,n=!!b.flipVariations&&
(o&&f==="start"&&n||o&&f==="end"&&p||!o&&f==="start"&&q||!o&&f==="end"&&k);if(l||i||n){a.flipped=!0;if(l||i)d=g[j+1];n&&(f==="end"?f="start":f==="start"&&(f="end"));a.placement=d+(f?"-"+f:"");a.offsets.popper=m({},a.offsets.popper,Y(a.instance.popper,a.offsets.reference,a.placement));a=Z(a.instance.modifiers,a,"flip")}});return a},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(a){var b=a.placement,c=b.split("-")[0],d=a.offsets,e=d.popper,d=d.reference,
f=["left","right"].indexOf(c)!==-1,g=["top","left"].indexOf(c)===-1;e[f?"left":"top"]=d[c]-(g?e[f?"width":"height"]:0);a.placement=z(b);a.offsets.popper=n(e);return a}},hide:{order:800,enabled:!0,fn:function(a){if(!ca(a.instance.modifiers,"hide","preventOverflow"))return a;var b=a.offsets.reference,c=x(a.instance.modifiers,function(a){return a.name==="preventOverflow"}).boundaries;if(b.bottom<c.top||b.left>c.right||b.top>c.bottom||b.right<c.left){if(a.hide===!0)return a;a.hide=!0;a.attributes["x-out-of-boundaries"]=
""}else{if(a.hide===!1)return a;a.hide=!1;a.attributes["x-out-of-boundaries"]=!1}return a}},computeStyle:{order:850,enabled:!0,fn:function(a,b){var c=b.x,d=b.y,e=a.offsets.popper,f=x(a.instance.modifiers,function(a){return a.name==="applyStyle"}).gpuAcceleration;f!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f=f!==void 0?f:b.gpuAcceleration,g=s(a.instance.popper),h=D(g),j={position:e.position},
e={left:Math.floor(e.left),top:Math.round(e.top),bottom:Math.round(e.bottom),right:Math.floor(e.right)},c=c==="bottom"?"top":"bottom",d=d==="right"?"left":"right",i=G("transform"),l=void 0,k=void 0,k=c==="bottom"?g.nodeName==="HTML"?-g.clientHeight+e.bottom:-h.height+e.bottom:e.top,l=d==="right"?g.nodeName==="HTML"?-g.clientWidth+e.right:-h.width+e.right:e.left;f&&i?(j[i]="translate3d("+l+"px, "+k+"px, 0)",j[c]=0,j[d]=0,j.willChange="transform"):(j[c]=k*(c==="bottom"?-1:1),j[d]=l*(d==="right"?-1:
1),j.willChange=c+", "+d);a.attributes=m({},{"x-placement":a.placement},a.attributes);a.styles=m({},j,a.styles);a.arrowStyles=m({},a.offsets.arrow,a.arrowStyles);return a},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(a){I(a.instance.popper,a.styles);ia(a.instance.popper,a.attributes);a.arrowElement&&Object.keys(a.arrowStyles).length&&I(a.arrowElement,a.arrowStyles);return a},onLoad:function(a,b,c,d,e){d=W(e,b,a,c.positionFixed);a=V(c.placement,d,b,a,c.modifiers.flip.boundariesElement,
c.modifiers.flip.padding);b.setAttribute("x-placement",a);I(b,{position:c.positionFixed?"fixed":"absolute"});return c},gpuAcceleration:void 0}}};return o});