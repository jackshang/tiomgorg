'use strict';var legalholiday={y2020:{d0101:"\u4f11",d0119:"\u73ed",d0124:"\u4f11",d0125:"\u4f11",d0126:"\u4f11",d0127:"\u4f11",d0128:"\u4f11",d0129:"\u4f11",d0130:"\u4f11",d0131:"\u4f11",d0201:"\u4f11",d0202:"\u4f11",d0203:"\u4f11",d0204:"\u4f11",d0404:"\u4f11",d0405:"\u4f11",d0406:"\u4f11",d0426:"\u73ed",d0501:"\u4f11",d0502:"\u4f11",d0503:"\u4f11",d0504:"\u4f11",d0505:"\u4f11",d0509:"\u73ed",d0625:"\u4f11",d0626:"\u4f11",d0627:"\u4f11",d0628:"\u73ed",d0927:"\u73ed",d1001:"\u4f11",d1002:"\u4f11",
d1003:"\u4f11",d1004:"\u4f11",d1005:"\u4f11",d1006:"\u4f11",d1007:"\u4f11",d1008:"\u4f11",d1010:"\u73ed"},y2019:{d0101:"\u4f11",d0202:"\u73ed",d0203:"\u73ed",d0204:"\u4f11",d0205:"\u4f11",d0206:"\u4f11",d0207:"\u4f11",d0208:"\u4f11",d0209:"\u4f11",d0210:"\u4f11",d0405:"\u4f11",d0406:"\u4f11",d0407:"\u4f11",d0501:"\u4f11",d0607:"\u4f11",d0608:"\u4f11",d0609:"\u4f11",d0913:"\u4f11",d0914:"\u4f11",d0915:"\u4f11",d0929:"\u73ed",d1001:"\u4f11",d1002:"\u4f11",d1003:"\u4f11",d1004:"\u4f11",d1005:"\u4f11",
d1006:"\u4f11",d1007:"\u4f11",d1012:"\u73ed"},y2018:{d0101:"\u4f11",d0211:"\u73ed",d0215:"\u4f11",d0216:"\u4f11",d0217:"\u4f11",d0218:"\u4f11",d0219:"\u4f11",d0220:"\u4f11",d0221:"\u4f11",d0224:"\u73ed",d0405:"\u4f11",d0406:"\u4f11",d0407:"\u4f11",d0408:"\u73ed",d0428:"\u73ed",d0429:"\u4f11",d0430:"\u4f11",d0501:"\u4f11",d0616:"\u4f11",d0617:"\u4f11",d0618:"\u4f11",d0922:"\u4f11",d0923:"\u4f11",d0924:"\u4f11",d0929:"\u73ed",d0930:"\u73ed",d1001:"\u4f11",d1002:"\u4f11",d1003:"\u4f11",d1004:"\u4f11",
d1005:"\u4f11",d1006:"\u4f11",d1007:"\u4f11"},y2017:{d0101:"\u4f11",d0102:"\u4f11",d0127:"\u73ed",d0128:"\u4f11",d0129:"\u4f11",d0130:"\u4f11",d0131:"\u4f11",d0201:"\u4f11",d0202:"\u4f11",d0204:"\u73ed",d0401:"\u73ed",d0402:"\u4f11",d0403:"\u4f11",d0404:"\u4f11",d0429:"\u4f11",d0430:"\u4f11",d0501:"\u4f11",d0527:"\u73ed",d0528:"\u4f11",d0529:"\u4f11",d0530:"\u4f11",d0930:"\u73ed",d1001:"\u4f11",d1002:"\u4f11",d1003:"\u4f11",d1004:"\u4f11",d1005:"\u4f11",d1006:"\u4f11",d1007:"\u4f11",d1008:"\u4f11"},
y2016:{d0101:"\u4f11",d0102:"\u4f11",d0103:"\u4f11",d0206:"\u73ed",d0207:"\u4f11",d0208:"\u4f11",d0209:"\u4f11",d0210:"\u4f11",d0211:"\u4f11",d0212:"\u4f11",d0213:"\u4f11",d0214:"\u73ed",d0402:"\u4f11",d0403:"\u4f11",d0404:"\u4f11",d0430:"\u4f11",d0501:"\u4f11",d0502:"\u4f11",d0609:"\u4f11",d0610:"\u4f11",d0611:"\u4f11",d0612:"\u73ed",d0915:"\u4f11",d0916:"\u4f11",d0917:"\u4f11",d0918:"\u73ed",d1001:"\u4f11",d1002:"\u4f11",d1003:"\u4f11",d1004:"\u4f11",d1005:"\u4f11",d1006:"\u4f11",d1007:"\u4f11",
d1008:"\u73ed",d1009:"\u73ed",d1231:"\u4f11"}};
function showLegalHoliday(b,a){var f=$("#"+b);if(f.attr("data-year")!=a+""){var d="d"+a;if(legalholiday.hasOwnProperty(d)){var c=legalholiday[d],e=legalholiday.header;d=$('\x3ctable class\x3d"table"\x3e');var g=$("\x3ctr/\x3e");for(let a=0,b=e.length;a<b;a++){var h=e[a];let b=$("\x3cth/\x3e");b.text(h);g.append(b)}d.append(g);for(let a=0,b=c.length;a<b;a++){e=c[a];g=$("\x3ctr/\x3e");for(let a=0,b=e.length;a<b;a++)h=$("\x3ctd/\x3e"),h.text(e[a]),g.append(h);d.append(g)}c=a+"\u5e74\u8282\u5047\u65e5\u653e\u5047\u5b89\u6392";
e=$('\x3cp class\x3d"font-size-2" style\x3d"text-align:center"/\x3e');e.text(c);f.attr("data-year",a+"");f.empty().append(e).append('\x3cdiv class\x3d"d-block small"\x3e\u6570\u636e\u6765\u6e90\uff1a\u56fd\u52a1\u9662\u529e\u516c\u5385\u53d1\u5e03\x3c/div\x3e').append(d);a=legalholiday.year;b=$("#"+b+"Year");for(let c=0,e=a.length;c<e;c++)f=a[e-1-c],d=$('\x3ca href\x3d"legal-holiday?y\x3d'+f+'" target\x3d"_blank"/\x3e'),d.text(f+"\u5e74\u8282\u5047\u65e5\u653e\u5047\u5b89\u6392"),b.append(d).append("\x3cbr/\x3e")}}}
function formateDayD4(b,a){return"d"+(10>b?"0"+b:b)+(10>a?"0"+a:a)}function getLegalHoliday(b,a,f,d){var c="";b="y"+b;legalholiday.hasOwnProperty(b)&&(yearInfo=legalholiday[b],a=formateDayD4(a,f),(c=yearInfo[a])&&0<c.length&&d&&(c='\x3cspan style\x3d"position: absolute; left: 1px;top: 0px;color:red;"\x3e'+c+"\x3c/span\x3e"));c||(c="");return c};