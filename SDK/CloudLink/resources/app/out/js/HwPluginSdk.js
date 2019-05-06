webpackJsonp([19],{1063:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PLUGIN_CMD={INIT:"init",LOGIN:"login",CREATE_MEETING:"createMeeting",CREATE_MEETING_WITH_PARTICIPANTS:"createMeetingWithParticipants",JOIN_MEETING_BY_ID:"joinMeetingById",EXIT:"exit"},t.PLUGIN_URL={pluginEnvConfig:"cloudlink://welinksoftclient/startupconfig?model=plugin"}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HwPluginSdk=void 0;var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(1860);t.HwPluginSdk=function e(){(0,o.default)(this,e),(0,i.initPluginApi)()}},119:function(e,t,n){e.exports={default:n(165),__esModule:!0}},120:function(e,t,n){e.exports=n(0)(43)},121:function(e,t,n){e.exports=n(0)(45)},1362:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(141),i=r(o),a=n(65),u=r(a),c=n(1),l=r(c),s=n(2),f=r(s),d=n(119),p=r(d),_=n(4),g=r(_),I=n(5),C=r(I),m=n(120),N=r(m),v=n(121),E=r(v),M=n(1862),w=r(M),P=n(1063),L=window.Logger("Plugin")("logic/pluginimlp"),h=function(e){function t(){var e,n,r,o,a=this;(0,g.default)(this,t);for(var c=arguments.length,s=Array(c),d=0;d<c;d++)s[d]=arguments[d];return n=r=(0,N.default)(this,(e=t.__proto__||(0,p.default)(t)).call.apply(e,[this].concat(s))),r.registJSLoadEvent=function(){L.info("registJSLoadEvent"),coreCommon.Observer.subscribe(constant.COMMON_NOTIFY.ON_COMMON_JS_LOADED,r.handleClmInited)},r.handleClmInited=function(){L.info("handleClmInited"),r.registNotify(),r.clmApiCallback(P.PLUGIN_CMD.INIT,{code:0,msg:"",data:""})},r.loginNotify=function(e){L.info("plugin:login notify:"+e.code+"  "+e.event),0!==e.code&&r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:e.code,msg:e.event,data:""})},r.sipRegResultNotify=function(e){var t=$getState().login,n=t.sipImpi;if(L.info("plugin:[sip register]"),e.param.tel_number!==n)return void L.info(" [sip register] account not compared, no handle ");constant.SIP_REGISTER_STATE.SIP_REGISTER_REGISTERED===e.param.register_state&&0===e.param.reason_code?r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:0,msg:"",data:""}):constant.SIP_REGISTER_STATE.SIP_REGISTER_REGISTERING!==e.param.register_state&&r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:e.param.reason_code,msg:"sip register fail",data:""}),coreCommon.Observer.subscribe("ConfInfoNotify",r.pluginConfConnected)},r.confIncomingShownNotify=function(e){if(isNullOrEmpty(e.confHandle))return void L.warn("confId is empty, ignore!");r.handleConfIncoming()},r.pluginConfPreCheck=function(){return coreAccount.getLoginModel().uportalLoginState!==constant.UPORTAL_LOGIN_STATE.UPORTAL_LOGIN_SUCCESS?(L.info("plugin login: uportal is not logined,return fail"),{code:-1,msg:"uportal is not logined",data:""}):coreAccount.getLoginModel().sipRegisterState!==constant.SIP_REGISTER_STATE.SIP_REGISTER_REGISTERED?(L.info("plugin sip is not registered, return fail"),{code:-1,msg:"sip not registered",data:""}):{code:0}},r.login=function(){var e=(0,f.default)(l.default.mark(function e(t){var n,o,i,u,c;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=coreAccount.getLoginModel().uportalLoginState,o=coreAccount.getLoginModel().sipRegisterState,n!==constant.UPORTAL_LOGIN_STATE.UPORTAL_LOGIN_LOGINING){e.next=6;break}return L.info("plugin login: is logining,return fail"),r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:-1,msg:"repeat operate",data:""}),e.abrupt("return");case 6:if(n!==constant.UPORTAL_LOGIN_STATE.UPORTAL_LOGIN_SUCCESS||o!==constant.SIP_REGISTER_STATE.SIP_REGISTER_REGISTERED||t.account!==coreAccount.getLoginModel().account){e.next=10;break}return L.info("plugin login: accout has already logined"),r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:0,msg:"has successed",data:""}),e.abrupt("return");case 10:if(!(isNullOrEmpty(t.account)||isNullOrEmpty(t.password)||isNullOrEmpty(t.serverAddress)||isNullOrEmpty(t.serverPort))){e.next=14;break}return L.info("account or [password] is null"),r.clmApiCallback(P.PLUGIN_CMD.LOGIN,{code:-1,msg:"args error",data:""}),e.abrupt("return");case 14:return e.next=16,r.handlePreLogin();case 16:return L.info("login: [account]="+handlePhoneNumber(t.account)+", serverAddress="+handlePhoneNumber(t.serverAddress)+", serverPort="+handlePhoneNumber(t.serverPort)),i=t.account,u=t.serverAddress,c=t.serverPort,e.next=22,window.handleSwitchAccount({account:i,serverAddress:u,serverPort:c,noNeedLogout:!0});case 22:coreAccount.getLoginModel().password=t.password,coreAccount.login();case 24:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),r.creatInstantMeeting=function(){var e=(0,f.default)(l.default.mark(function e(t,n){var o,c,s,f,d,p,_,g,I,C,m,N,v,E,M;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.closeAllAlertAndConfirm(),o=r.pluginConfPreCheck(),c=n?P.PLUGIN_CMD.CREATE_MEETING_WITH_PARTICIPANTS:P.PLUGIN_CMD.CREATE_MEETING,0===o.code){e.next=7;break}return r.clmApiCallback(c,o),L.warn("plugin createMeeting preCheck failed!"),e.abrupt("return");case 7:if(L.info("creatInstantMeeting: param=",(0,u.default)(t)),s=$getState().myInfo,f=[],f.push(s),d=!t.needPassword,p=t.mediaType,_=t.confSubject,!t.hasOwnProperty("participants")){e.next=36;break}if(g=t.participants,!(g.length>0)){e.next=36;break}for(I=!0,C=!1,m=void 0,e.prev=20,N=(0,i.default)(g);!(I=(v=N.next()).done);I=!0)E=v.value,f.push(E);e.next=28;break;case 24:e.prev=24,e.t0=e.catch(20),C=!0,m=e.t0;case 28:e.prev=28,e.prev=29,!I&&N.return&&N.return();case 31:if(e.prev=31,!C){e.next=34;break}throw m;case 34:return e.finish(31);case 35:return e.finish(28);case 36:M=coreConf.actionCreateConf(s,f,{group_id:""},p,d,_),r.clmApiCallback(c,{code:M?0:1,msg:"",data:""});case 38:case"end":return e.stop()}},e,a,[[20,24,28,36],[29,,31,35]])}));return function(t,n){return e.apply(this,arguments)}}(),r.closeAllAlertAndConfirm=function(){window.hideConfirm&&window.hideConfirm(),window.hideAlert&&window.hideAlert(),coreUi.hideModal&&coreUi.hideModal(),window.hideNotifyConfirm&&window.hideNotifyConfirm(),window.clearDialogQueue&&window.clearDialogQueue()},r.joinMeetingById=function(){var e=(0,f.default)(l.default.mark(function e(t){var n,o;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.closeAllAlertAndConfirm(),n=r.pluginConfPreCheck(),0===n.code){e.next=6;break}return r.clmApiCallback(P.PLUGIN_CMD.JOIN_MEETING_BY_ID,n),L.warn("plugin joinMeetingById preCheck failed!"),e.abrupt("return");case 6:return L.info("onEnterMeetingById: ",(0,u.default)(t)),e.next=9,coreConf.enterConfByIdOnlyWithConfPas(t);case 9:o=e.sent,o||r.clmApiCallback(P.PLUGIN_CMD.JOIN_MEETING_BY_ID,{code:-1,msg:"",data:""});case 11:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),r.pluginConfConnected=function(){L.info("pluginConfConnected"),r.clmApiCallback(P.PLUGIN_CMD.JOIN_MEETING_BY_ID,{code:0,msg:"join data success",data:""})},o=n,(0,N.default)(r,o)}return(0,E.default)(t,e),(0,C.default)(t,[{key:"registNotify",value:function(){L.info("registNotify"),coreCommon.registeModuleListener("login",this.loginNotify),coreCommon.registeModuleListener("sipRegResultEvent",this.sipRegResultNotify),coreCommon.registeModuleListener("confIncomingShown",this.confIncomingShownNotify)}}]),t}(w.default);t.default=h},139:function(e,t,n){e.exports=n(0)(155)},141:function(e,t,n){e.exports={default:n(180),__esModule:!0}},145:function(e,t,n){var r=n(10),o=n(8),i=n(147);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},147:function(e,t,n){e.exports=n(0)(51)},150:function(e,t,n){e.exports=n(0)(170)},165:function(e,t,n){n(166),e.exports=n(8).Object.getPrototypeOf},166:function(e,t,n){var r=n(139),o=n(167);n(145)("getPrototypeOf",function(){return function(e){return o(r(e))}})},167:function(e,t,n){e.exports=n(0)(377)},180:function(e,t,n){n(24),n(22),e.exports=n(181)},181:function(e,t,n){var r=n(9),o=n(26);e.exports=n(8).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},1860:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.initPluginApi=void 0;var o=n(1),i=r(o),a=n(2),u=r(a),c=n(1861),l=r(c),s=n(1863),f=r(s),d=n(1063),p=window.Logger("plugin")("logic/index"),_=null;t.initPluginApi=function(){var t=(0,u.default)(i.default.mark(function t(){var n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!coreCommon.isPc()){t.next=7;break}return t.next=3,coreCommon.getConsoleUrl();case 3:n=t.sent,n===d.PLUGIN_URL.pluginEnvConfig?window.isPluginEnv=!0:n&&"cloudlink://welinksoftclient/startupconfig?model=integrated"===n&&(window.isHubEnv=!0),t.next=8;break;case 7:window.isPluginEnv="opensdk"===e.env.CHANNEL;case 8:if(window.isPluginEnv){t.next=10;break}return t.abrupt("return");case 10:try{null===_&&(coreCommon.isMobile()?_=new l.default:coreCommon.isWin()&&(_=new f.default),_&&(_.registChannel(),_.registJSLoadEvent()))}catch(e){p.error("init plugin api error",e.toString())}case 11:case"end":return t.stop()}},t,void 0)}));return function(){return t.apply(this,arguments)}}()}).call(t,n(150))},1861:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(65),i=r(o),a=n(1),u=r(a),c=n(2),l=r(c),s=n(119),f=r(s),d=n(4),p=r(d),_=n(120),g=r(_),I=n(121),C=r(I),m=n(1362),N=r(m),v=n(1063),E=window.Logger("Plugin")("logic/pluginimlp"),M=function(e){function t(){var e,n,r,o,a=this;(0,p.default)(this,t);for(var c=arguments.length,s=Array(c),d=0;d<c;d++)s[d]=arguments[d];return n=r=(0,g.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(s))),r.registChannel=(0,l.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.openClmApi=r.openClmApi,window.backToNativeView=r.backToNativeView,window.isNeedBackToNative=r.isNeedBackToNative;case 3:case"end":return e.stop()}},e,a)})),r.clmApiCallback=function(e,t){if(coreCommon.isIos())window.cordova.exec(null,null,"OCJSBridge","clmApiCallback",[e,t]);else if(coreCommon.isAndroid()){var n=(0,i.default)(t);window.webView.clmApiCallback(e,n)}},r.openClmApi=function(e,t){switch(E.info("openClmApi"),e){case v.PLUGIN_CMD.LOGIN:r.login(t);break;case v.PLUGIN_CMD.CREATE_MEETING:r.creatInstantMeeting(t,!1);break;case v.PLUGIN_CMD.CREATE_MEETING_WITH_PARTICIPANTS:r.creatInstantMeeting(t,!0);break;case v.PLUGIN_CMD.JOIN_MEETING_BY_ID:r.joinMeetingById(t);break;default:E.error("call error:cmd not defined"),r.clmApiCallback(e,{result:-1,msg:"cmd error"})}},r.isNeedBackToNative=function(e){if(coreCommon.isPc())return!1;var t=window.getRoute();if(isNullOrEmpty(e)||isNullOrEmpty(t))return!1;var n=["callMain","ConfMemberList","mConfMemberPage","mShowQrcode","mSelectBox","mInitShowSelectBox","selectCorporateDirectory","selectPhoneAddress","selectCorporateDirctory"];return n.includes(t)&&!n.includes(e)},r.backToNativeView=function(){},r.handlePreLogin=(0,l.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $getState().dialogModal.isShowDialog&&(E.info("clear dialog"),window.clearDialogQueueIt($getState().dialogModal.contentStr)),e.next=3,coreCommon.initLogin(!1);case 3:case"end":return e.stop()}},e,a)})),r.handleConfIncoming=(0,l.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,a)})),o=n,(0,g.default)(r,o)}return(0,C.default)(t,e),t}(N.default);t.default=M},1862:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),i=r(o),a=n(2),u=r(a),c=n(119),l=r(c),s=n(4),f=r(s),d=n(120),p=r(d),_=n(121),g=r(_),I=function(e){function t(){var e,n,r,o,a=this;(0,f.default)(this,t);for(var c=arguments.length,s=Array(c),d=0;d<c;d++)s[d]=arguments[d];return n=r=(0,p.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(s))),r.login=function(){var e=(0,u.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),r.creatInstantMeeting=function(){var e=(0,u.default)(i.default.mark(function e(t,n){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)}));return function(t,n){return e.apply(this,arguments)}}(),r.joinMeetingById=function(){var e=(0,u.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),r.closeApp=(0,u.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)})),o=n,(0,p.default)(r,o)}return(0,g.default)(t,e),t}(coreCommon.Interface);t.default=I},1863:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(65),i=r(o),a=n(1),u=r(a),c=n(2),l=r(c),s=n(119),f=r(s),d=n(4),p=r(d),_=n(120),g=r(_),I=n(121),C=r(I),m=n(1362),N=r(m),v=n(1864),E=r(v),M=n(1063),w=window.Logger("plugin")("logic/index"),P=function(e){function t(){var e,n,r,o,a=this;(0,p.default)(this,t);for(var c=arguments.length,s=Array(c),d=0;d<c;d++)s[d]=arguments[d];return n=r=(0,g.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(s))),r.registChannel=(0,l.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new E.default;case 2:t=e.sent,null!==t?(t.setCmdFunc(r.openClmApi),w.info("initPlugin: Create WebSocket success.")):w.info("initPlugin: Create WebSocket failed.");case 4:case"end":return e.stop()}},e,a)})),r.clmApiCallback=function(){var e=(0,l.default)(u.default.mark(function e(t,n){var r,o,i;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.info("pluginCmdCallback: cmd=",t+", result=",n),r=void 0,e.t0=t,e.next=e.t0===M.PLUGIN_CMD.INIT?5:e.t0===M.PLUGIN_CMD.LOGIN?7:e.t0===M.PLUGIN_CMD.CREATE_MEETING?9:e.t0===M.PLUGIN_CMD.CREATE_MEETING_WITH_PARTICIPANTS?11:e.t0===M.PLUGIN_CMD.JOIN_MEETING_BY_ID?13:15;break;case 5:return r=constant.CLK_PLUGIN_CMD.PLUGIN_CMD_INIT,e.abrupt("break",17);case 7:return r=constant.CLK_PLUGIN_CMD.PLUGIN_CMD_LOGIN,e.abrupt("break",17);case 9:return r=constant.CLK_PLUGIN_CMD.PLUGIN_CMD_CREATE_MEETING,e.abrupt("break",17);case 11:return r=constant.CLK_PLUGIN_CMD.PLUGIN_CMD_CREATE_MEETING_WITH_PARTICIPANTS,e.abrupt("break",17);case 13:return r=constant.CLK_PLUGIN_CMD.PLUGIN_CMD_JOIN_MEETING_BY_ID,e.abrupt("break",17);case 15:return w.info("cmd error"),e.abrupt("return");case 17:return e.next=19,new E.default;case 19:o=e.sent,i=0,0!==n.code&&"0"!==n.code&&(i=1),o.postRpsMessage(r,i);case 23:case"end":return e.stop()}},e,a)}));return function(t,n){return e.apply(this,arguments)}}(),r.closeApp=(0,l.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.info("closeApp begin"),setTimeout(function(){try{appService.exitApp()}catch(e){w.error("closeApp:",{e:e.toJSON()})}},500);case 2:case"end":return e.stop()}},e,a)})),r.openClmApi=function(e){var t=e.cmd;switch(w.info("pluginCmdCallback: cmd=",t),t){case constant.CLK_PLUGIN_CMD.PLUGIN_CMD_LOGIN:r.login(e.param);break;case constant.CLK_PLUGIN_CMD.PLUGIN_CMD_CREATE_MEETING:r.creatInstantMeeting(e.param,!1);break;case constant.CLK_PLUGIN_CMD.PLUGIN_CMD_CREATE_MEETING_WITH_PARTICIPANTS:r.creatInstantMeeting(e.param,!0);break;case constant.CLK_PLUGIN_CMD.PLUGIN_CMD_JOIN_MEETING_BY_ID:r.joinMeetingById(e.param);break;case constant.CLK_PLUGIN_CMD.PLUGIN_CMD_EXIT:r.closeApp();break;default:w.error("pluginCmdCallback: not support, data=",(0,i.default)(e))}},r.handlePreLogin=function(){},r.handleConfIncoming=(0,l.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,a)})),o=n,(0,g.default)(r,o)}return(0,C.default)(t,e),t}(N.default);t.default=P},1864:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(65),i=r(o),a=n(3),u=r(a),c=n(4),l=r(c),s=n(5),f=r(s),d=window.Logger("plugin")("websocket"),p=null,_=null,g=null,I=function(e){null!==p&&p.sendToTup(e)},C=function(){function e(){var t=this;return(0,l.default)(this,e),_&&p&&0===p.readyState?(d.info("plugin WebSocket is connecting"),_):_=new u.default(function(e,n){p&&1===p.readyState?e(t):(p=new WebSocket("ws://localhost:"+(window.CLIENTCONFIG.API_PORT||"7685"),"clk_plugin_service_protocol"),p.onopen=function(){d.info("plugin WebSocket is opened"),e(t)},p.onclose=function(){d.info("plugin WebSocket is closed"),p=null},p.onerror=function(e){d.info("plugin WebSocket is error, e = ",(0,i.default)(e)),p=null},p.onmessage=function(e){var t=JSON.parse(e.data);d.info("CloudLink Recive plugin message: ",t),t.cmd>0&&"function"==typeof g&&g(t)})})}return(0,f.default)(e,[{key:"setCmdFunc",value:function(e){d.info("set cmd func success"),g=e}},{key:"postRpsMessage",value:function(e,t){var n={description:"",rps:e,opt:0,call:0,result:t};I(n),d.debug("CloudLink Rsp to proxy: rps = "+n.rps+", result = "+n.result)}},{key:"postRpsParamMessage",value:function(e,t,n){var r={description:"",rps:e,opt:0,call:0,result:n,param:t};I(r),d.debug("CloudLink Rsp param to proxy: rps = "+r.rps+", result = "+r.result+", param = "+r.param)}},{key:"postNotifyMessage",value:function(e){d.debug(e.description,e),I(e)}}]),e}();t.default=C},65:function(e,t,n){e.exports={default:n(66),__esModule:!0}},66:function(e,t,n){var r=n(8),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});