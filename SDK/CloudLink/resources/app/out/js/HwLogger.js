webpackJsonp([3],{2305:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLogger=void 0;var o=t(69),i=function(n){return n&&n.__esModule?n:{default:n}}(o),r=["debug","info","warn","error"],u=void 0,f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=n+"\r\n";u||(u=t(2306)),u.doLogInFile(e)};e.getLogger=function(n){return function(e){var t={},o=function(t){return function(o){for(var u=arguments.length,c=Array(u>1?u-1:0),d=1;d<u;d++)c[d-1]=arguments[d];var l=(new Date).format("yyyy-MM-dd hh:mm:ss.S"),s=("["+l+"]["+t+"]["+n+"]["+e+"]").toUpperCase()+" "+o;if(r.slice(r.indexOf("info")).indexOf(t)>-1){var a=c.map(function(n){return(0,i.default)(n,null,2)}).join(" \n");a&&(a="[data] "+a),f(s+" "+a,n,e)}}};return r.forEach(function(n){t[n]=o(n)}),t}}},2306:function(n,e,t){"use strict";function o(){if(w=!1,!L){i(h.shift()).then(function(){h.length>0?o():w=!0},function(){L=!0,w=!0})}}function i(n){return new l.default(function(e,t){u().then(function(){return r(n)}).then(e)})}function r(n){var e=PromiseObject();return s.writeFile(g+"/CloudLink.log",n,{flag:"a"},e.resolve),e}function u(){return new l.default(function(n,e){s.stat(g+"/CloudLink.log",function(e,t){if(e){if("ENOENT"!==e.code)throw n(),e;s.existsSync(g+"/CloudLink.log")||(s.existsSync(a)||s.mkdirSync(a),s.existsSync(g)||s.mkdirSync(g)),s.writeFileSync(g+"/CloudLink.log"),n()}else f(t.size).then(n).catch(n)})})}function f(n){return new l.default(function(e,t){n>v?(s.readdir(g,function(n,e){for(var t=e.filter(function(n){return/^CloudLink[_0-9]*\.log$/i.test(n)}),o=t.length;o>0;o--)o>=y?s.unlinkSync(g+"/"+t[o-1]):s.renameSync(g+"/"+t[o-1],g+"/CloudLink_"+o+".log")}),e()):e()})}function c(n){n&&h.push(n),w&&o()}Object.defineProperty(e,"__esModule",{value:!0});var d=t(3),l=function(n){return n&&n.__esModule?n:{default:n}}(d);e.doLogInFile=c;var s=window.require("fs"),a=void 0,g=void 0;a=window.process.env.APPDATA+"\\CloudLink",g=window.process.env.APPDATA+"\\CloudLink\\log";var v=10485760,y=2,h=[],w=!0,L=!1},62:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HwLoggerSdk=void 0;var o=t(4),i=function(n){return n&&n.__esModule?n:{default:n}}(o),r=t(2305);e.HwLoggerSdk=function n(){(0,i.default)(this,n),this.getLogger=r.getLogger}},69:function(n,e,t){n.exports={default:t(70),__esModule:!0}},70:function(n,e,t){var o=t(8),i=o.JSON||(o.JSON={stringify:JSON.stringify});n.exports=function(n){return i.stringify.apply(i,arguments)}}});