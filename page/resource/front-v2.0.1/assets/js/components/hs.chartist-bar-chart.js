(function(a){a.HSCore.components.HSChartistBarChart={_baseConfig:{},pageCollection:a(),init:function(c,d){this.collection=c&&a(c).length?a(c):a();if(a(c).length)return this.config=d&&a.isPlainObject(d)?a.extend({},this._baseConfig,d):this._baseConfig,this.config.itemSelector=c,this.initCharts(),this.pageCollection},initCharts:function(){var c=this.pageCollection;this.collection.each(function(d,b){var i=a(b).data("stroke-width"),j=a(b).data("stroke-color");a(b).attr("id","barCharts"+d);a('<style id="barChartsStyle'+
d+'"></style>').insertAfter(a(b));var f="",e=JSON.parse(b.getAttribute("data-series")),g=JSON.parse(b.getAttribute("data-labels")),k=a(b).data("height"),l=a(b).data("high"),m=a(b).data("low"),n=a(b).data("distance"),o=Boolean(a(b).data("is-show-axis-x")),p=Boolean(a(b).data("is-show-axis-y")),e=new Chartist.Bar(b,{series:e?e:!1,labels:g?g:!1},{width:"100%",height:k,high:l,low:m,seriesBarDistance:n,axisX:{offset:0,scaleMinSpace:0,showGrid:o,showLabel:!1},axisY:{offset:0,scaleMinSpace:0,showGrid:p,
showLabel:!1},chartPadding:{top:0,right:0,bottom:0,left:0}}),h=1;e.on("created",function(){h==1&&(a(b).find(".ct-series").each(function(){f+="#barCharts"+d+" .ct-series .ct-bar {stroke-width: "+i+"; stroke: "+j+"}"}),a("#barChartsStyle"+d).text(f));h++});e.update();c=c.add(a(b))})}}})(jQuery);