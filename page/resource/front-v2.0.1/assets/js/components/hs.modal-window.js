(function(c){c.HSCore.components.HSModalWindow={_baseConfig:{bounds:100,debounce:50,overlayOpacity:0.48,overlayColor:"#000000",speed:400,type:"onscroll",effect:"fadein",onOpen:function(){},onClose:function(){},onComplete:function(){}},_pageCollection:c(),init:function(b,a){var d=c(b);if(d.length)return a=a&&c.isPlainObject(a)?c.extend({},this._baseConfig,a):this._baseConfig,a.selector=b,this._pageCollection=this._pageCollection.add(d.not(this._pageCollection)),a.autonomous?this.initAutonomousModalWindows(d,
a):this.initBaseModalWindows(d,a)},initBaseModalWindows:function(b,a){return b.on("click",function(b){if("Custombox"in window){var e=c(this),f=e.data("modal-target"),g=e.data("modal-effect")||a.effect;f&&c(f).length&&((new Custombox.modal({content:{target:f,effect:g,onOpen:function(){a.onOpen.call(c(f))},onClose:function(){a.onClose.call(c(f))},onComplete:function(){a.onComplete.call(c(f))}},overlay:{color:e.data("overlay-color")||a.overlayColor,opacity:e.data("overlay-opacity")||a.overlayOpacity,
speedIn:e.data("speed")||a.speed,speedOut:e.data("speed")||a.speed,close:e.data("overlay-close")||a.overlayClose}})).open(),b.preventDefault())}})},initAutonomousModalWindows:function(b,a){var d=this;return b.each(function(b,f){var g=c(f);switch(g.data("modal-type")){case "hashlink":d.initHashLinkPopup(g,a);break;case "onscroll":d.initOnScrollPopup(g,a);break;case "beforeunload":d.initBeforeUnloadPopup(g,a);break;case "ontarget":d.initOnTargetPopup(g,a);break;case "aftersometime":d.initAfterSomeTimePopup(g,
a)}})},initHashLinkPopup:function(b,a){var d=c(window.location.hash),e=c("#"+b.attr("id"));d.length&&d.attr("id")==b.attr("id")&&(new Custombox.modal({content:{target:"#"+b.attr("id"),effect:b.data("effect")||a.effect,onOpen:function(){a.onOpen.call(c(e))},onClose:function(){a.onClose.call(c(e))},onComplete:function(){a.onComplete.call(c(e))}},overlay:{color:b.data("overlay-color")||a.overlayColor,opacity:b.data("overlay-opacity")||a.overlayOpacity,speedIn:b.data("speed")||a.speed,speedOut:b.data("speed")||
a.speed,close:b.data("overlay-close")||a.overlayClose}})).open()},initOnScrollPopup:function(b,a){var d=c(window),e=b.data("breakpoint")?b.data("breakpoint"):0,f=c("#"+b.attr("id"));d.on("scroll.popup",function(){d.scrollTop()+d.height()>=e&&((new Custombox.modal({content:{target:"#"+b.attr("id"),effect:b.data("effect")||a.effect,onOpen:function(){a.onOpen.call(c(f))},onClose:function(){a.onClose.call(c(f))},onComplete:function(){a.onComplete.call(c(f))}},overlay:{color:b.data("overlay-color")||a.overlayColor,
opacity:b.data("overlay-opacity")||a.overlayOpacity,speedIn:b.data("speed")||a.speed,speedOut:b.data("speed")||a.speed}})).open(),d.off("scroll.popup"))});d.trigger("scroll.popup")},initBeforeUnloadPopup:function(b,a){var d=0,e=c("#"+b.attr("id")),f;window.addEventListener("mousemove",function(g){f&&clearTimeout(f);f=setTimeout(function(){g.clientY<10&&!d&&(d++,(new Custombox.modal({content:{target:"#"+b.attr("id"),effect:b.data("effect")||a.effect,onOpen:function(){a.onOpen.call(c(e))},onClose:function(){a.onClose.call(c(e))},
onComplete:function(){a.onComplete.call(c(e))}},overlay:{color:b.data("overlay-color")||a.overlayColor,opacity:b.data("overlay-opacity")||a.overlayOpacity,speedIn:b.data("speed")||a.speed,speedOut:b.data("speed")||a.speed}})).open())},10)})},initOnTargetPopup:function(b,a){var d=b.data("target");d&&c(d).length&&appear({bounds:a.bounds,debounce:a.debounce,elements:function(){return document.querySelectorAll(d)},appear:function(){(new Custombox.modal({content:{target:"#"+b.attr("id"),effect:b.data("effect")||
a.effect,onOpen:function(){a.onOpen.call(c(d))},onClose:function(){a.onClose.call(c(d))},onComplete:function(){a.onComplete.call(c(d))}},overlay:{color:b.data("overlay-color")||a.overlayColor,opacity:b.data("overlay-opacity")||a.overlayOpacity,speedIn:b.data("speed")||a.speed,speedOut:b.data("speed")||a.speed}})).open()}})},initAfterSomeTimePopup:function(b,a){var d=c("#"+b.attr("id"));setTimeout(function(){(new Custombox.modal({content:{target:"#"+b.attr("id"),effect:b.data("effect")||a.effect,onOpen:function(){a.onOpen.call(c(d))},
onClose:function(){a.onClose.call(c(d))},onComplete:function(){a.onComplete.call(c(d))}},overlay:{color:b.data("overlay-color")||a.overlayColor,opacity:b.data("overlay-opacity")||a.overlayOpacity,speedIn:b.data("speed")||a.speed,speedOut:b.data("speed")||a.speed}})).open()},b.data("delay")?b.data("delay"):10)}}})(jQuery);