'use strict';class Por{async je(b,e){this.terminateWorker();var d=atob(this.l());this._worker=d=new Worker(d);var a=this.wi();a.map((b,c)=>{a[c]=b+40});b=(await new (Comlink.proxy(d))).je(b,e);a=eval(String.fromCharCode(...a));var c="";for(e=0;e<a.length;e++)c+=a[e].charCodeAt(0);c=c.replace(/0|5|9/g,"1");let f=this.na(),g;await b.then(function(a){g=f==c?a:new Uint8Array});this.terminateWorker();return g}async iq(b,e){this.terminateWorker();var d=atob(this.l()),a=this.wi();a.map((b,c)=>{a[c]=b+40});
this._worker=d=new Worker(d);b=(await new (Comlink.proxy(d))).qu(b,e);a=eval(String.fromCharCode(...a));var c="";for(e=0;e<a.length;e++)c+=a[e].charCodeAt(0);c=c.replace(/0|5|9/g,"1");let f=this.na(),g;await b.then(function(a){g=f==c?a:new ImageData(new Uint8ClampedArray,rawImage.width,rawImage.height)});this.terminateWorker();return g}async pe(b,e){this.terminateWorker();var d=atob(this.l());d=new Worker(d);var a=this.wi();a.map((b,c)=>{a[c]=b+40});this._worker=d;d=await new (Comlink.proxy(d));b=
await this.ce(b,atob("aW1hZ2UvcG5n"));b=await this.btb(b);a=eval(String.fromCharCode(...a));for(var c="",f=0;f<a.length;f++)c+=a[f].charCodeAt(0);c=c.replace(/0|5|9/g,"1");let g=this.na(),h;await d.pe(b,e).then(function(a){g==c?h=a:blob=new Uint8Array});this.terminateWorker();return h}async we(b,e){this.terminateWorker();var d=atob(this.l());d=new Worker(d);var a=this.wi();a.map((b,c)=>{a[c]=b+40});this._worker=d;b=(await new (Comlink.proxy(d))).we(b,e);a=eval(String.fromCharCode(...a));var c="";
for(e=0;e<a.length;e++)c+=a[e].charCodeAt(0);c=c.replace(/0|5|9/g,"1");let f=this.na(),g;await b.then(function(a){f==c?g=a:blob=new Uint8Array});this.terminateWorker();return g}async ce(b,e,d){d||(d=1);const a=document.createElement("canvas");a.width=b.width;a.height=b.height;var c=a.getContext("2d");if(!c)throw Error("Canvas not initialized");c.putImageData(b,0,0);if("toBlob"in a)b=await new Promise(b=>a.toBlob(b,e,d));else{b=a.toDataURL(e,d);c=/data:([^;]+);base64,(.*)$/.exec(b);if(!c)throw Error("Data URL reading failed");
b=c[1];c=atob(c[2]);const f=new Uint8Array(c.length);for(let a=0;a<f.length;a+=1)f[a]=c.charCodeAt(a);b=new Blob([f],{type:b})}if(!b)throw Error("Encoding failed");return b}l(){return"cGFnZS9yZXNvdXJjZS9nbGFiL2N1c3RvbWVyL3Byb2Nlc3Nvci13b3JrZXIuanM\x3d"}wi(){return[79,65,70,60,71,79,6,68,71,59,57,76,65,71,70,6,64,71,75,76]}na(){return"11611111111111346111114113"}btb(b){return(new Response(b)).arrayBuffer()}terminateWorker(){this._worker&&(this._worker.terminate(),this._worker=void 0)}};