(function(f){var k=window.AmazonUIPageJS||window.P,l=k._namespace||k.attributeErrors,b=l?l("SWFObject_AUIBuild"):k;b.guardFatal?b.guardFatal(f)(b,window):b.execute(function(){f(b,window)})})(function(f,k,l){f.register("SWFObject",function(){var b=function(){function c(){if(!K){try{var a=t.getElementsByTagName("body")[0].appendChild(t.createElement("span"));a.parentNode.removeChild(a)}catch(b){return}K=!0;for(var a=F.length,c=0;c<a;c++)F[c]()}}function d(a){K?a():F[F.length]=a}function a(a){if("undefined"!=
typeof v.addEventListener)v.addEventListener("load",a,!1);else if("undefined"!=typeof t.addEventListener)t.addEventListener("load",a,!1);else if("undefined"!=typeof v.attachEvent)E(v,"onload",a);else if("function"==typeof v.onload){var b=v.onload;v.onload=function(){b();a()}}else v.onload=a}function e(){var a=t.getElementsByTagName("body")[0],b=t.createElement("object");b.setAttribute("type","application/x-shockwave-flash");var c=a.appendChild(b);if(c){var d=0;(function(){if("undefined"!=typeof c.GetVariable){var e=
c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),A.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d){d++;setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;f()})()}else f()}function f(){var a=G.length;if(0<a)for(var b=0;b<a;b++){var c=G[b].id,d=G[b].callbackFn,e={success:!1,id:c};if(0<A.pv[0]){var g=D(c);if(g)if(!z(G[b].swfVersion)||A.wk&&312>A.wk)if(G[b].expressInstall&&m()){e={};e.data=G[b].expressInstall;e.width=g.getAttribute("width")||"0";e.height=
g.getAttribute("height")||"0";g.getAttribute("class")&&(e.styleclass=g.getAttribute("class"));g.getAttribute("align")&&(e.align=g.getAttribute("align"));for(var k={},g=g.getElementsByTagName("param"),l=g.length,p=0;p<l;p++)"movie"!=g[p].getAttribute("name").toLowerCase()&&(k[g[p].getAttribute("name")]=g[p].getAttribute("value"));q(e,k,c,d)}else n(g),d&&d(e);else u(c,!0),d&&(e.success=!0,e.ref=h(c),d(e))}else u(c,!0),d&&((c=h(c))&&"undefined"!=typeof c.SetVariable&&(e.success=!0,e.ref=c),d(e))}}function h(a){var b=
null;(a=D(a))&&"OBJECT"==a.nodeName&&("undefined"!=typeof a.SetVariable?b=a:(a=a.getElementsByTagName("object")[0])&&(b=a));return b}function m(){return!N&&z("6.0.65")&&(A.win||A.mac)&&!(A.wk&&312>A.wk)}function q(a,b,c,d){N=!0;O=d||null;Q={success:!1,id:c};var e=D(c);if(e){"OBJECT"==e.nodeName?(L=p(e),M=null):(L=e,M=c);a.id="SWFObjectExprInst";if("undefined"==typeof a.width||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if("undefined"==typeof a.height||!/%$/.test(a.height)&&137>parseInt(a.height,
10))a.height="137";t.title=t.title.slice(0,47)+" - Flash Player Installation";d=A.ie&&A.win?"ActiveX":"PlugIn";d="MMredirectURL="+v.location.toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+t.title;b.flashvars="undefined"!=typeof b.flashvars?b.flashvars+("&"+d):d;A.ie&&A.win&&4!=e.readyState&&(d=t.createElement("div"),c+="SWFObjectNew",d.setAttribute("id",c),e.parentNode.insertBefore(d,e),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,
10)}());r(a,b,c)}}function n(a){if(A.ie&&A.win&&4!=a.readyState){var b=t.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(p(a),b);a.style.display="none";(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(p(a),a)}function p(a){var b=t.createElement("div");if(A.win&&A.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName("object")[0])if(a=a.childNodes)for(var c=a.length,d=0;d<c;d++)1==a[d].nodeType&&
"PARAM"==a[d].nodeName||8==a[d].nodeType||b.appendChild(a[d].cloneNode(!0));return b}function r(a,b,c){var d,e=D(c);if(A.wk&&312>A.wk)return d;if(e)if("undefined"==typeof a.id&&(a.id=c),A.ie&&A.win){var f="",g;for(g in a)a[g]!=Object.prototype[g]&&("data"==g.toLowerCase()?b.movie=a[g]:"styleclass"==g.toLowerCase()?f+=' class="'+a[g]+'"':"classid"!=g.toLowerCase()&&(f+=" "+g+'="'+a[g]+'"'));g="";for(var h in b)b[h]!=Object.prototype[h]&&(g+='<param name="'+h+'" value="'+b[h]+'" />');e.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
f+">"+g+"</object>";I[I.length]=a.id;d=D(a.id)}else{h=t.createElement("object");h.setAttribute("type","application/x-shockwave-flash");for(var k in a)a[k]!=Object.prototype[k]&&("styleclass"==k.toLowerCase()?h.setAttribute("class",a[k]):"classid"!=k.toLowerCase()&&h.setAttribute(k,a[k]));for(f in b)b[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&(a=h,g=f,k=b[f],c=t.createElement("param"),c.setAttribute("name",g),c.setAttribute("value",k),a.appendChild(c));e.parentNode.replaceChild(h,e);d=h}return d}
function x(a){var b=D(a);b&&"OBJECT"==b.nodeName&&(A.ie&&A.win?(b.style.display="none",function(){if(4==b.readyState){var c=D(a);if(c){for(var d in c)"function"==typeof c[d]&&(c[d]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function D(a){var b=null;try{b=t.getElementById(a)}catch(c){}return b}function E(a,b,c){a.attachEvent(b,c);H[H.length]=[a,b,c]}function z(a){var b=A.pv;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;
a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function y(a,b,c,d){if(!A.ie||!A.mac){var e=t.getElementsByTagName("head")[0];e&&(c=c&&"string"==typeof c?c:"screen",d&&(P=J=null),J&&P==c||(d=t.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",c),J=e.appendChild(d),A.ie&&A.win&&"undefined"!=typeof t.styleSheets&&0<t.styleSheets.length&&(J=t.styleSheets[t.styleSheets.length-1]),P=c),A.ie&&A.win?J&&"object"==typeof J.addRule&&
J.addRule(a,b):J&&"undefined"!=typeof t.createTextNode&&J.appendChild(t.createTextNode(a+" {"+b+"}")))}}function u(a,b){if(R){var c=b?"visible":"hidden";K&&D(a)?D(a).style.visibility=c:y("#"+a,"visibility:"+c)}}function w(a){return null!=/[\\\"<>\.;]/.exec(a)&&"undefined"!=typeof encodeURIComponent?encodeURIComponent(a):a}var v=k,t=document,B=navigator,C=!1,F=[function(){C?e():f()}],G=[],I=[],H=[],L,M,O,Q,K=!1,N=!1,J,P,R=!0,A=function(){var a="undefined"!=typeof t.getElementById&&"undefined"!=typeof t.getElementsByTagName&&
"undefined"!=typeof t.createElement,b=B.userAgent.toLowerCase(),c=B.platform.toLowerCase(),d=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,e=!+"\v1",f=[0,0,0],g=null;if("undefined"!=typeof B.plugins&&"object"==typeof B.plugins["Shockwave Flash"])!(g=B.plugins["Shockwave Flash"].description)||"undefined"!=typeof B.mimeTypes&&B.mimeTypes["application/x-shockwave-flash"]&&!B.mimeTypes["application/x-shockwave-flash"].enabledPlugin||
(C=!0,e=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),f[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),f[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),f[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if("undefined"!=typeof v.ActiveXObject)try{var h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");h&&(g=h.GetVariable("$version"))&&(e=!0,g=g.split(" ")[1].split(","),f=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)])}catch(k){}return{w3:a,pv:f,wk:b,ie:e,win:d,mac:c}}();
(function(){A.w3&&(("undefined"!=typeof t.readyState&&"complete"==t.readyState||"undefined"==typeof t.readyState&&(t.getElementsByTagName("body")[0]||t.body))&&c(),K||("undefined"!=typeof t.addEventListener&&t.addEventListener("DOMContentLoaded",c,!1),A.ie&&A.win&&(t.attachEvent("onreadystatechange",function(){"complete"==t.readyState&&(t.detachEvent("onreadystatechange",arguments.callee),c())}),v==top&&function(){if(!K){try{t.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,
0);return}c()}}()),A.wk&&function(){K||(/loaded|complete/.test(t.readyState)?c():setTimeout(arguments.callee,0))}(),a(c)))})();(function(){A.ie&&A.win&&k.attachEvent("onunload",function(){for(var a=H.length,c=0;c<a;c++)H[c][0].detachEvent(H[c][1],H[c][2]);a=I.length;for(c=0;c<a;c++)x(I[c]);for(var d in A)A[d]=null;A=null;for(var e in b)b[e]=null;b=null})})();return{registerObject:function(a,b,c,d){if(A.w3&&a&&b){var e={};e.id=a;e.swfVersion=b;e.expressInstall=c;e.callbackFn=d;G[G.length]=e;u(a,!1)}else d&&
d({success:!1,id:a})},getObjectById:function(a){if(A.w3)return h(a)},embedSWF:function(a,b,c,e,f,g,h,k,l,n){var p={success:!1,id:b};A.w3&&!(A.wk&&312>A.wk)&&a&&b&&c&&e&&f?(u(b,!1),d(function(){c+="";e+="";var d={};if(l&&"object"===typeof l)for(var t in l)d[t]=l[t];d.data=a;d.width=c;d.height=e;t={};if(k&&"object"===typeof k)for(var v in k)t[v]=k[v];if(h&&"object"===typeof h)for(var w in h)t.flashvars="undefined"!=typeof t.flashvars?t.flashvars+("&"+w+"="+h[w]):w+"="+h[w];if(z(f))v=r(d,t,b),d.id==
b&&u(b,!0),p.success=!0,p.ref=v;else{if(g&&m()){d.data=g;q(d,t,b,n);return}u(b,!0)}n&&n(p)})):n&&n(p)},switchOffAutoHideShow:function(){R=!1},ua:A,getFlashPlayerVersion:function(){return{major:A.pv[0],minor:A.pv[1],release:A.pv[2]}},hasFlashPlayerVersion:z,createSWF:function(a,b,c){return A.w3?r(a,b,c):l},showExpressInstall:function(a,b,c,d){A.w3&&m()&&q(a,b,c,d)},removeSWF:function(a){A.w3&&x(a)},createCSS:function(a,b,c,d){A.w3&&y(a,b,c,d)},addDomLoadEvent:d,addLoadEvent:a,getQueryParamValue:function(a){var b=
t.location.search||t.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(null==a)return w(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return w(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(N){var a=D("SWFObjectExprInst");a&&L&&(a.parentNode.replaceChild(L,a),M&&(u(M,!0),A.ie&&A.win&&(L.style.display="block")),O&&O(Q));N=!1}}}}();return b})});