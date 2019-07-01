webpackJsonp([21],{1029:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.verifyCertificate=t.decode64=t.encode64=t.decryptKMC=t.encryptKMC=t.stopKmc=t.startKmc=t.decrypt=t.encrypt=t.getDeriveKey=t.getRealRandom=t.saveUserWithCrypt=void 0;var a=r(3),u=n(a),c=r(1),i=n(c),o=r(2),s=n(o),f=r(1030),p=n(f),d=r(326),l=coreLogger.getLogger("logic")("login/support"),y=(t.saveUserWithCrypt=function(){var e=(0,s.default)(i.default.mark(function e(t){var r,n,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.info("save user with crypt"),e.next=3,y(16);case 3:if(""!==(r=e.sent)){e.next=7;break}return l.info("get real random failed"),e.abrupt("return");case 7:return e.next=9,v(r);case 9:if(""!==(n=e.sent)){e.next=13;break}return l.info("get derive key failed"),e.abrupt("return");case 13:return e.next=15,h(t.strUserPwd,n,r);case 15:if(""!==(a=e.sent)){e.next=19;break}return l.info("[encrypt] failed"),e.abrupt("return");case 19:return e.abrupt("return",{res:a,realRandom:r});case 20:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.getRealRandom=function(){var e=(0,s.default)(i.default.mark(function e(t){var r,n,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={RandLen:t},e.next=3,p.default.getinstance();case 3:return n=e.sent,e.next=6,n.getRealRandom(r);case 6:return a=e.sent,l.info("get real random, result = "+a.result),e.abrupt("return",0===a.result?a.param.realrandom:"");case 9:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()),v=t.getDeriveKey=function(){var e=(0,s.default)(i.default.mark(function e(t){var r,n,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={salt:t,saltLen:t.length,dklen:32},e.next=3,p.default.getinstance();case 3:return n=e.sent,e.next=6,n.getDeriveKey(r);case 6:return a=e.sent,l.info("get derive [key], result = "+a.result),e.abrupt("return",0===a.result?a.param.derivedkey:"");case 9:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),h=t.encrypt=function(){var e=(0,s.default)(i.default.mark(function e(t,r,n){var a,u,c;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={Key:r,IV:n,PlainText:t},e.next=3,p.default.getinstance();case 3:return u=e.sent,e.next=6,u.encrypt(a);case 6:return c=e.sent,delete a.PlainText,l.info("[encrypt], result = "+c.result),e.abrupt("return",0===c.result?c.param.CipherText:"");case 10:case"end":return e.stop()}},e,void 0)}));return function(t,r,n){return e.apply(this,arguments)}}();t.decrypt=function(){var e=(0,s.default)(i.default.mark(function e(t,r){var n,a,u,c,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getinstance();case 2:if(n=e.sent,!t||!r){e.next=20;break}return e.next=6,v(r);case 6:if(""!==(a=e.sent)){e.next=10;break}return l.info("get key failed"),e.abrupt("return","");case 10:return u={Key:a,IV:r,cipher:t},e.next=13,n.decrypt(u);case 13:return c=e.sent,l.info("[decrypt], result = "+c.result),o=0===c.result?c.param.PlainText:"",c&&c.param&&c.param.PlainText&&delete c.param.PlainText,e.abrupt("return",o);case 20:return l.info("[cipher] or str[Salt] or [iv] is empty"),e.abrupt("return","");case 22:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}();window.updateKmc=(0,s.default)(i.default.mark(function e(){var t,r,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(isNullOrEmpty(window.getKMCPathPromise)){e.next=3;break}return e.next=3,window.getKMCPathPromise;case 3:return t=new u.default(function(e,t){var r=window.path.join(window.EXEC_PATH,"BfcpTLS"),n=window.path.join(r,"p4bfcp.txt");if(l.info("[kmc] check p2bfcp file :"+n),window.fs){window.fs.existsSync(r)||window.fs.mkdirSync(r);var a=window.path.join(window.KMC_PATH,"p4bfcp.txt");window.fs.existsSync(a)&&(window.fs.writeFileSync(n,window.fs.readFileSync(a)),window.fs.unlinkSync(a))}l.info("[kmc] check kmcstore file is exist = "+appService.isFileExist(window.EXEC_PATH+"/kmcStore.dat")),l.info("[kmc] check kmcstorebak file is exist = "+appService.isFileExist(window.EXEC_PATH+"/kmcStore_bak.dat")),appService.isFileExist(n).then(function(){var t=(0,s.default)(i.default.mark(function t(n){var a,u,c;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l.info("[kmc] p2bfcp existed :"+n),!window.CLIENTCONFIG.ENABLE_IT_MEETING){t.next=4;break}return t.next=4,w();case 4:if(!n){t.next=8;break}e(0),t.next=29;break;case 8:return l.info("[kmc] start update kmc, kmc restarting.."),t.next=11,m(window.EXEC_PATH);case 11:return l.info("[kmc] start decryptKMC start "),t.next=14,x(window.bfcpp);case 14:return a=t.sent,u=a&&a.param&&a.param.PlainText||"",l.info("[kmc] [decrypt]KMC: "+(""===u?"failed":"success")+", stop kmc"),t.next=19,w();case 19:return l.info("[kmc] stop kmc success, restart kmc"),t.next=22,m();case 22:return l.info("[kmc] restart kmc success, [encrypt] kmc"),t.next=25,g(u);case 25:c=t.sent,window.bfcpp=c.param.CiperText,l.info("[kmc] [encrypt] kmc success, start write file "),appService.writeFile(r,"p4bfcp.txt",c.param.CiperText).then(function(){var t=(0,s.default)(i.default.mark(function t(r){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.info("[kmc] write file success, stop kmc "),t.next=3,w();case 3:l.info("[kmc] stop kmc success"),e(0);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(){var t=(0,s.default)(i.default.mark(function t(r){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.info("write p4bfcp failed:"+r+", stop kmc "),t.next=3,w();case 3:l.info("[kmc] stop kmc success"),e(0);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 29:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}())}),e.next=6,t;case 6:return r=e.sent,n=r.param,e.abrupt("return",u.default.resolve(0));case 9:case"end":return e.stop()}},e,void 0)}));var m=t.startKmc=function(){var e=(0,s.default)(i.default.mark(function e(){var t,r,n,a,u,c,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.KMC_PATH;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getinstance();case 2:return t=e.sent,l.info("start kmc : "+o),r=!0,n=r?window.LOG_PATH+"\\kmc.log":window.LOG_PATH+"/kmc.log",a=r?o+"\\kmcStore.dat":o+"/kmcStore.dat",u=r?o+"\\kmcStore_bak.dat":o+"/kmcStore_bak.dat",c={LogFile:n,KeyStoreFile:a,KeyStoreFileBak:u},e.next=11,t.startKmc(c);case 11:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}(),w=t.stopKmc=function(){var e=(0,s.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getinstance();case 2:return t=e.sent,e.next=5,t.stopKmc();case 5:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}(),g=t.encryptKMC=function(){var e=(0,s.default)(i.default.mark(function e(t){var r,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getinstance();case 2:return r=e.sent,e.next=5,_(t);case 5:return n=e.sent,e.abrupt("return",r.encryptKmc(n));case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),x=t.decryptKMC=function(){var e=(0,s.default)(i.default.mark(function e(t){var r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"string"!=typeof t&&l.info("decryptKMC param error!"),e.next=3,p.default.getinstance();case 3:return r=e.sent,e.next=6,r.decryptKMC(t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_=t.encode64=function(){var e=(0,s.default)(i.default.mark(function e(t){var r,n,a,u,c,o,s,f,p;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r="",u="",f="",p=0,t=b(t);do{n=t.charCodeAt(p++),a=t.charCodeAt(p++),u=t.charCodeAt(p++),c=n>>2,o=(3&n)<<4|a>>4,s=(15&a)<<2|u>>6,f=63&u,isNaN(a)?s=f=64:isNaN(u)&&(f=64),r=r+k.charAt(c)+k.charAt(o)+k.charAt(s)+k.charAt(f),n=a=u="",c=o=s=f=""}while(p<t.length);return e.abrupt("return",r);case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}();t.decode64=function(e){if((0,d.isNullOrUndefined)(e))return"";var t=window.atob(e),r=escape(t);return decodeURIComponent(r)},t.verifyCertificate=function(){var e=(0,s.default)(i.default.mark(function e(t){var r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"string"!=typeof t&&l.info("verifyCertificate param error!"),e.next=3,p.default.getinstance();case 3:return r=e.sent,e.next=6,r.verifyCertificate(t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()},1030:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(69),u=n(a),c=r(1),i=n(c),o=r(123),s=n(o),f=r(2),p=n(f),d=r(3),l=n(d),y=r(4),v=n(y),h=r(5),m=n(h),w=coreLogger.getLogger("tup")("support"),g=coreCommon.getTupProtocolClass(),x=null,k=function(){function e(t){var r=this;return(0,v.default)(this,e),this.startKmc=function(e){w.info("start KMC");var t={description:"tup_kmc_start",cmd:262149,param:e};return r.sendMessage(t)},this.stopKmc=function(){w.info("stop KMC");var e={description:"tup_kmc_stop",cmd:262150,param:null};return r.sendMessage(e)},this.encryptKmc=function(e){w.info("[encrypt] KMC");var t={description:"tup_kmc_encrypt",cmd:262151,param:{PlainText:e}};return r.sendMessage(t)},this.decryptKMC=function(e){var t={cmd:262152,description:"TUP_KMC_DECRYPT",param:{CiperText:e}};return r.sendMessage(t,262152)},this.addCallBack=function(e){if(!e)return void w.info("support WebSocket addCallBack option is null");var t=e.closeSupportSocket,n=e.rspKmcEncrypt;"function"==typeof n?r.tupProtocol.addCallBack({key:262151,callback:n}):"function"==typeof t&&r.tupProtocol.addCallBack({key:"closeSupportSocket",callback:t})},this.isPlainPrivatePem=function(e){w.info("isPlainPrivatePem");var t={description:"tup_pkey_plaintext_check",cmd:262154,param:{privatekeypath:e.privatePemPath}};return r.sendMessage(t)},this.isCipherValid=function(e){w.info("isCipherValid");var t={description:"tup_pkey_ciphertext_passwd_check",cmd:262155,param:{privatekeypath:e.privatePemPath,password:e.password}};return r.sendMessage(t)},this.encryptPrivateKey=function(e){w.info("encryptPrivateKey");var t={description:"tup_pkey_plaintext_encode",cmd:262156,param:{privatekeypath:e.privatePemPath,password:e.password,algorithmtype:0,privatekeyencodepath:e.privateEncryptPemPath}};return r.sendMessage(t)},new l.default(function(){var e=(0,p.default)(i.default.mark(function e(n,a){var u;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u={key:constant.TupModuleKey.support,moduleName:"tup_support_service_protocol",webSocketUri:""},(0,s.default)(u,t),e.next=4,new g(u);case 4:r.tupProtocol=e.sent,n(r);case 6:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}())}return(0,m.default)(e,null,[{key:"getinstance",value:function(){return!coreCommon.isMac()&&x||(x=new e),x}}]),(0,m.default)(e,[{key:"sendMessage",value:function(e,t){var r=this,n=Sno();return(0,s.default)(e,{sno:n}),new l.default(function(n,a){var u={resolve:n,data:e,notify:t};r.tupProtocol.setRspFuncsAndSendMessage(u)})}},{key:"getDeriveKey",value:function(e){var t={description:"tup_commonlib_crypt_pkcs5_derive_key",cmd:262145,param:e};return this.sendMessage(t)}},{key:"encrypt",value:function(e){var t=(0,u.default)(e.PlainText).split("");t.shift(),t.pop(),e.PlainText=t.join(""),w.info("pre encrypt do JSON.stringify");var r={description:"tup_commonlib_crypt_encrypt",cmd:262146,param:e};return this.sendMessage(r)}},{key:"decrypt",value:function(e){var t={description:"tup_commonlib_crypt_decrypt",cmd:262147,param:e};return this.sendMessage(t)}},{key:"getRealRandom",value:function(e){var t={description:"tup_commonlib_crypt_realrandom",cmd:262148,param:e};return this.sendMessage(t)}}]),e}();t.default=k},108:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwSecuritySdk=void 0;var a=r(123),u=n(a),c=r(4),i=n(c),o=r(1854);t.HwSecuritySdk=function e(){(0,i.default)(this,e),(0,u.default)(this,(0,o.getSecurityApi)().getApiList())}},119:function(e,t,r){e.exports={default:r(145),__esModule:!0}},120:function(e,t,r){e.exports=r(0)(45)},121:function(e,t,r){e.exports=r(0)(47)},123:function(e,t,r){e.exports=r(0)(562)},129:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},130:function(e,t,r){e.exports=r(0)(238)},137:function(e,t,r){var n=r(10),a=r(8),u=r(138);e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],c={};c[e]=t(r),n(n.S+n.F*u(function(){r(1)}),"Object",c)}},138:function(e,t,r){e.exports=r(0)(59)},139:function(e,t,r){e.exports=r(0)(86)},145:function(e,t,r){r(146),e.exports=r(8).Object.getPrototypeOf},146:function(e,t,r){var n=r(130),a=r(147);r(137)("getPrototypeOf",function(){return function(e){return a(n(e))}})},147:function(e,t,r){e.exports=r(0)(585)},148:function(e,t,r){e.exports=r(0)(196)},1854:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SecurityImpl=t.getSecurityApi=void 0;var u=r(1),c=a(u),i=r(2),o=a(i),s=r(119),f=a(s),p=r(4),d=a(p),l=r(120),y=a(l),v=r(121),h=a(v),m=r(1029),w=n(m),g=r(1855),x=a(g),k=r(1856),b=n(k),_=r(1030),P=a(_),C=(coreLogger.getLogger("Secuirity")("SecurityImpl"),void 0),S=void 0,M=(t.getSecurityApi=function(){return isNullOrEmpty(C)&&(C=new M),C},t.SecurityImpl=function(e){function t(){var e=this;(0,d.default)(this,t);var r=(0,y.default)(this,(t.__proto__||(0,f.default)(t)).call(this));return r.startKmc=function(){var t=(0,o.default)(c.default.mark(function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{kmcPath:window.KMC_PATH},n=r.kmcPath;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.startKmc(n);case 2:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),r.getPasswordManager=(0,o.default)(c.default.mark(function t(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b);case 1:case"end":return e.stop()}},t,e)})),r.decrypt=function(){var t=(0,o.default)(c.default.mark(function t(r){var n=r.cipher,a=r.strSalt;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.decrypt(n,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r.saveUserWithCrypt=function(){var t=(0,o.default)(c.default.mark(function t(r){var n=r.strUserPwd,a=r.strAccount;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.saveUserWithCrypt({strUserPwd:n,strAccount:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r.encryptKMC=function(){var t=(0,o.default)(c.default.mark(function t(r){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.encryptKMC(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r.getHWTupSupport=(0,o.default)(c.default.mark(function t(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return isNullOrEmpty(S)&&(S=P.default.getinstance()),e.abrupt("return",S);case 2:case"end":return e.stop()}},t,e)})),r.decryptKMC=function(){var t=(0,o.default)(c.default.mark(function t(r){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.decryptKMC(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r.encode64=function(){var t=(0,o.default)(c.default.mark(function t(r){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.encode64(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r.getRealRandom=function(){var t=(0,o.default)(c.default.mark(function t(r){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getRealRandom(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),r}return(0,h.default)(t,e),t}(x.default))},1855:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(1),u=n(a),c=r(2),i=n(c),o=r(119),s=n(o),f=r(4),p=n(f),d=r(120),l=n(d),y=r(121),v=n(y),h=function(e){function t(){var e,r,n,a,c=this;(0,p.default)(this,t);for(var o=arguments.length,f=Array(o),d=0;d<o;d++)f[d]=arguments[d];return r=n=(0,l.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(f))),n.startKmc=function(){var e=(0,i.default)(u.default.mark(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{kmcPath:window.KMC_PATH};t.kmcPath;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(){return e.apply(this,arguments)}}(),n.getPasswordManager=(0,i.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)})),n.decrypt=function(){var e=(0,i.default)(u.default.mark(function e(t){t.cipher,t.strSalt;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),n.saveUserWithCrypt=function(){var e=(0,i.default)(u.default.mark(function e(t){t.strUserPwd,t.strAccount;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),n.encryptKMC=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),n.getHWTupSupport=(0,i.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)})),n.decryptKMC=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),n.encode64=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),n.getRealRandom=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,c)}));return function(t){return e.apply(this,arguments)}}(),a=r,(0,l.default)(n,a)}return(0,v.default)(t,e),t}(coreCommon.Interface);t.default=h},1856:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setPasswordInstance=t.getPasswordInstance=t.clearPassword=t.savePasswordToDB=t.getPasswordFromDB=t.saveToDB=t.getFromDB=t.setCipherPassword=t.setPassword=t.getPassword=t.Password=void 0;var a,u,c=r(3),i=n(c),o=r(1),s=n(o),f=r(2),p=n(f),d=r(4),l=n(d),y=r(1857),v={},h=t.Password=(u=a=function e(t){(0,l.default)(this,e),t&&t instanceof Object&&(this.cipher=t.cipher,this.salt=t.salt)},a.create=function(){var e=(0,p.default)(s.default.mark(function e(t){var r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new h,e.next=3,r.encryptPassword(t);case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.decryptCreate=function(){var e=(0,p.default)(s.default.mark(function e(t){var r,n=t.cipher,a=t.salt;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new h({cipher:n,salt:a}),e.next=3,r.decryptPassword();case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),u);h.prototype={useBuffer:!0,decryptPassword:function(){function e(){return t.apply(this,arguments)}var t=(0,p.default)(s.default.mark(function e(){var t;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.decrypt)(this.cipher,this.salt);case 2:return t=e.sent,this.useBuffer&&this.bufferPassword(t),e.abrupt("return",this.password);case 5:case"end":return e.stop()}},e,this)}));return e}(),encryptPassword:function(){function e(e){return t.apply(this,arguments)}var t=(0,p.default)(s.default.mark(function e(t){var r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}throw"encryptPassword needs at least 1 param";case 2:return e.next=4,(0,y.getRealRandom)(16);case 4:return this.salt=e.sent,e.next=7,(0,y.getDeriveKey)(this.salt);case 7:return r=e.sent,e.next=10,(0,y.encrypt)(t,r,this.salt);case 10:return this.cipher=e.sent,this.useBuffer&&this.bufferPassword(t),e.abrupt("return",this.cipher);case 13:case"end":return e.stop()}},e,this)}));return e}(),saveToDB:function(){function e(){return t.apply(this,arguments)}var t=(0,p.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.salt||!this.cipher){e.next=3;break}e.next=4;break;case 3:throw"can not save empty password is empty to save！";case 4:case"end":return e.stop()}},e,this)}));return e}(),bufferPassword:function(e){var t=this;this.password=e,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.password&&delete t.password},1e4)}};t.getPassword=function(e){return v[e]&&(void 0!==v[e].password&&i.default.resolve(v[e].password)||v[e].decryptPassword())||i.default.resolve("")},t.setPassword=function(){var e=(0,p.default)(s.default.mark(function e(t,r){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.create(r);case 2:return e.abrupt("return",v[t]=e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.setCipherPassword=function(e,t,r){return v[e]=new h({cipher:t,salt:r})},t.getFromDB=function(){},t.saveToDB=function(){},t.getPasswordFromDB=function(){},t.savePasswordToDB=function(){},t.clearPassword=function(){v={}},t.getPasswordInstance=function(e){return v[e]},t.setPasswordInstance=function(e){return v[e]}},1857:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decode64=t.encode64=t.utf8_encode=t.decryptKMC=t.encryptKMC=t.startKmc=t.decrypt=t.encrypt=t.getDeriveKey=t.getRealRandom=t.saveUserWithCrypt=void 0;var n=r(1029),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(n);t.saveUserWithCrypt=a.saveUserWithCrypt,t.getRealRandom=a.getRealRandom,t.getDeriveKey=a.getDeriveKey,t.encrypt=a.encrypt,t.decrypt=a.decrypt,t.startKmc=a.startKmc,t.encryptKMC=a.encryptKMC,t.decryptKMC=a.decryptKMC,t.utf8_encode=a.utf8_encode,t.encode64=a.encode64,t.decode64=a.decode64},326:function(e,t,r){(function(e,n){function a(e,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),v(r)?n.showHidden=r:r&&t._extend(n,r),k(n.showHidden)&&(n.showHidden=!1),k(n.depth)&&(n.depth=2),k(n.colors)&&(n.colors=!1),k(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),o(n,e,n.depth)}function u(e,t){var r=a.styles[t];return r?"["+a.colors[r][0]+"m"+e+"["+a.colors[r][1]+"m":e}function c(e,t){return e}function i(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function o(e,r,n){if(e.customInspect&&r&&S(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var a=r.inspect(n,e);return g(a)||(a=o(e,a,n)),a}var u=s(e,r);if(u)return u;var c=Object.keys(r),v=i(c);if(e.showHidden&&(c=Object.getOwnPropertyNames(r)),C(r)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return f(r);if(0===c.length){if(S(r)){var h=r.name?": "+r.name:"";return e.stylize("[Function"+h+"]","special")}if(b(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(P(r))return e.stylize(Date.prototype.toString.call(r),"date");if(C(r))return f(r)}var m="",w=!1,x=["{","}"];if(y(r)&&(w=!0,x=["[","]"]),S(r)){m=" [Function"+(r.name?": "+r.name:"")+"]"}if(b(r)&&(m=" "+RegExp.prototype.toString.call(r)),P(r)&&(m=" "+Date.prototype.toUTCString.call(r)),C(r)&&(m=" "+f(r)),0===c.length&&(!w||0==r.length))return x[0]+m+x[1];if(n<0)return b(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var k;return k=w?p(e,r,n,v,c):c.map(function(t){return d(e,r,n,v,t,w)}),e.seen.pop(),l(k,m,x)}function s(e,t){if(k(t))return e.stylize("undefined","undefined");if(g(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return w(t)?e.stylize(""+t,"number"):v(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,a){for(var u=[],c=0,i=t.length;c<i;++c)T(t,String(c))?u.push(d(e,t,r,n,String(c),!0)):u.push("");return a.forEach(function(a){a.match(/^\d+$/)||u.push(d(e,t,r,n,a,!0))}),u}function d(e,t,r,n,a,u){var c,i,s;if(s=Object.getOwnPropertyDescriptor(t,a)||{value:t[a]},s.get?i=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(i=e.stylize("[Setter]","special")),T(n,a)||(c="["+a+"]"),i||(e.seen.indexOf(s.value)<0?(i=h(r)?o(e,s.value,null):o(e,s.value,r-1),i.indexOf("\n")>-1&&(i=u?i.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+i.split("\n").map(function(e){return"   "+e}).join("\n"))):i=e.stylize("[Circular]","special")),k(c)){if(u&&a.match(/^\d+$/))return i;c=JSON.stringify(""+a),c.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=e.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=e.stylize(c,"string"))}return c+": "+i}function l(e,t,r){var n=0;return e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function y(e){return Array.isArray(e)}function v(e){return"boolean"==typeof e}function h(e){return null===e}function m(e){return null==e}function w(e){return"number"==typeof e}function g(e){return"string"==typeof e}function x(e){return"symbol"==typeof e}function k(e){return void 0===e}function b(e){return _(e)&&"[object RegExp]"===K(e)}function _(e){return"object"==typeof e&&null!==e}function P(e){return _(e)&&"[object Date]"===K(e)}function C(e){return _(e)&&("[object Error]"===K(e)||e instanceof Error)}function S(e){return"function"==typeof e}function M(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function K(e){return Object.prototype.toString.call(e)}function O(e){return e<10?"0"+e.toString(10):e.toString(10)}function j(){var e=new Date,t=[O(e.getHours()),O(e.getMinutes()),O(e.getSeconds())].join(":");return[e.getDate(),D[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var E=/%[sdj%]/g;t.format=function(e){if(!g(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,u=n.length,c=String(e).replace(E,function(e){if("%%"===e)return"%";if(r>=u)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),i=n[r];r<u;i=n[++r])h(i)||!_(i)?c+=" "+i:c+=" "+a(i);return c},t.deprecate=function(r,a){function u(){if(!c){if(n.throwDeprecation)throw new Error(a);n.traceDeprecation?console.trace(a):console.error(a),c=!0}return r.apply(this,arguments)}if(k(e.process))return function(){return t.deprecate(r,a).apply(this,arguments)};if(!0===n.noDeprecation)return r;var c=!1;return u};var A,R={};t.debuglog=function(e){if(k(A)&&(A=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!R[e])if(new RegExp("\\b"+e+"\\b","i").test(A)){var r=n.pid;R[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else R[e]=function(){};return R[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=v,t.isNull=h,t.isNullOrUndefined=m,t.isNumber=w,t.isString=g,t.isSymbol=x,t.isUndefined=k,t.isRegExp=b,t.isObject=_,t.isDate=P,t.isError=C,t.isFunction=S,t.isPrimitive=M,t.isBuffer=r(353);var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",j(),t.format.apply(t,arguments))},t.inherits=r(129),t._extend=function(e,t){if(!t||!_(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(t,r(139),r(148))},353:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},69:function(e,t,r){e.exports={default:r(70),__esModule:!0}},70:function(e,t,r){var n=r(8),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});