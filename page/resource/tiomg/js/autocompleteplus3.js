$.widget("custom.autocompleteplus",{options:{field:"",source:"",minLength:2},_create:function(){this.element.hide();this.options.value?this.element.val(this.options.value):this.options.value=this.element.val();this._createAutocomplete()},_createAutocomplete:function(){this.options.setDefaultValue=!1;this.options.oldWidgetName="";this.options.oldWidgetValue=this.options.value;this.options.defaultValue=this.options.value;var d=this.options.source,c=this.options.minLength,e=this.element;$("\x3cdiv class\x3d'form-group has-feedback'\x3e\x3c/div\x3e").insertAfter(this.element).append(this.element);
this.autocompleteField=$("\x3cinput type\x3d'text' class\x3d'form-control'/\x3e").addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left");this.autocompleteField.attr("id",this.element.attr("name")+"_autocomplete").attr("name",this.element.attr("name")+"_autocomplete").insertAfter(this.element);this.aLink=$("\x3ca\x3e\x3cspan class\x3d'glyphicon glyphicon-share-alt' style\x3d'position: absolute;top: 0;right: 0;z-index: 2;display: block;width: 34px;height: 34px;line-height: 34px;text-align: center;'\x3e\x3c/span\x3e\x3c/a\x3e").insertAfter(this.autocompleteField);
var b=this;this.autocompleteField.autocomplete({source:d,contentType:"application/x-www-form-urlencoded;charset\x3dutf-8",minLength:c,select:function(f,a){e.val(a.item.value);$(this).val(a.item.name);b.options.oldWidgetName=$(this).val();b.options.oldWidgetValue=e.val();b.options.select&&b.options.select(f,a);return!1},change:function(f,a){a.item||(e.val(b.options.oldWidgetValue),$(this).val(b.options.oldWidgetName))},create:function(f,a){if(b.options.defaultValue){var c=$(this).autocomplete("instance");
c.search('{"value":"'+b.options.defaultValue+'"}');c.close();b.options.setDefaultValue=!0}},response:function(c,a){b.options.setDefaultValue&&a.content[0]&&($(this).val(a.content[0].name),b.options.oldWidgetName=$(this).val(),b.element.val(a.content[0].value),setDefaultValue=!1);b.options.response&&b.options.response(c,a)}}).addClass("form-control").autocomplete("instance")._renderItem=function(b,a){var c=a.identifier?"("+a.identifier+")":"",d=a.doc?a.doc:"";return $("\x3cli\x3e").append("\x3ca\x3e"+
a.name+c+"\x3cbr\x3e"+d+"\x3c/a\x3e").appendTo(b)}},_destroy:function(){this.autocompleteField.remove();this.element.show()},setVal:function(d){var c=$(this.autocompleteField).autocomplete("instance");d?(c.search('{"value":"'+d+'"}'),c.close(),this.options.setDefaultValue=!0):(c.element.val(""),this.element.val(""))},getAutocomplete:function(){return $(this.autocompleteField).autocomplete("instance")},disable:function(){$(this.aLink).find("span").addClass("form-control-feedback");$(this.autocompleteField).attr("readonly",
!0)},enable:function(){$(this.aLink).find("span").removeClass("form-control-feedback");$(this.autocompleteField).attr("readonly",!1)}});