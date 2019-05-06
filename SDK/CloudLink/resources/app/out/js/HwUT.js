webpackJsonp([4],{1071:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UTImpl=t.getUtApi=void 0;var a=n(382),o=r(a),i=n(1),u=r(i),s=n(2),c=r(s),f=n(119),d=r(f),l=n(4),p=r(l),v=n(120),_=r(v),h=n(121),T=r(h),E=n(976),g=r(E),I=n(1074),U=r(I),m=n(1075),w=r(m),y=n(1076),x=r(y),k=n(977),P=r(k),N=window.Logger("UT")("logic/usertrack"),A=void 0,b=(t.getUtApi=function(){return isNullOrEmpty(A)&&(A=new b),A},t.UTImpl=function(e){function t(){var e=this;(0,p.default)(this,t);var n=(0,_.default)(this,(t.__proto__||(0,d.default)(t)).call(this));return n.utConfigAccountInfo=function(e){var t=e.configAccount;isNullOrEmpty(t)||(P.default.getInstance().account=t)},n.utPageAppear=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o,i=r.pageName;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&0!==i.length){e.next=3;break}return N.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(i),o=new g.default(constant.EVENT_ID.UT_PAGE,[a,i,constant.UT_PAGE_ACTION.UT_PAGE_APPEAR]),n.utManager.addTrackerData(o);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utPageDisappear=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o,i=r.pageName,s=r.showTime;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&0!==i.length){e.next=3;break}return N.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(i),o=new g.default(constant.EVENT_ID.UT_PAGE,[a,i,constant.UT_PAGE_ACTION.UT_PAGE_DISAPPEAR,s]),n.utManager.addTrackerData(o);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utPageLoad=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o,i=r.pageName,s=r.loadTime;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&0!==i.length){e.next=3;break}return N.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(i),o=new g.default(constant.EVENT_ID.UT_PAGE,[a,i,constant.UT_PAGE_ACTION.UT_PAGE_LOAD_TIMES,s]),n.utManager.addTrackerData(o);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utConfOperate=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o,i,s=r.eventId,c=r.params;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=3;break}return N.warn("[UT]eventId is empty!"),e.abrupt("return");case 3:a=new Array,o=coreConf.getCurrentConfId(),o&&a.push(o),c instanceof Array&&c.length>0&&(a=a.concat(c)),i=new g.default(s,a),n.utManager.addTrackerData(i);case 9:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utCustomEvent=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o=r.eventId,i=r.params;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}return N.warn("[UT]eventId is empty!"),e.abrupt("return");case 3:a=new g.default(o,i),n.utManager.addTrackerData(a);case 5:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utHandleNativeCrashInfoScan=(0,c.default)(u.default.mark(function t(){var r,a,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.nativeCrashInfoFetch();case 2:if(!((r=e.sent)instanceof Array&&r.length>0)){e.next=13;break}a=0;case 5:if(!(a<r.length)){e.next=12;break}return o=new g.default(constant.EVENT_ID.UT_CRASH,[r[a]]),e.next=9,n.utManager.addTrackerData(o);case 9:a++,e.next=5;break;case 12:appService.nativeCrashTrackedDeal(r);case 13:case"end":return e.stop()}},t,e)})),n.utEventStart=function(e){var t=e.eventId,r=e.extraTrackKey,a=e.params;if(!t)return void N.warn("[UT]eventId is empty!");var o=t;isNullOrEmpty(r)||(o=t+r);var i=new x.default(a);n.actionResponseUTInfos.set(o,i)},n.utEventFinish=function(e){var t=e.eventId,r=e.extraTrackKey,a=e.resultParams,o=e.isTrackTimeCosts,i=void 0!==o&&o;if(!t)return void N.warn("[UT]eventId is empty!");var u=t;isNullOrEmpty(r)||(u=t+r);var s=n.actionResponseUTInfos.get(u);if(!s)return void N.warn("[UT]actionResponseInfo for key"+u+" is not found in actionResponseUTInfos");var c=new Array;if(s.params.length>0&&(c=c.concat(s.params)),a.length>0&&(c=c.concat(a)),i){var f=Date.now()-s.actionTime;f<0&&(N.warn("[UT]action response time cost less than 0!"),f=0),c.push(f)}var d=new g.default(t,c);n.utManager.addTrackerData(d),n.actionResponseUTInfos.delete(u)},n.utHandleFileTransfer=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,o,i=r.sendAccount,s=r.recvAccount,c=r.ipAddress,f=r.fileName,d=r.fileSize,l=r.transferSpeed,p=void 0===l?0:l;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNullOrEmpty(i)){e.next=3;break}return N.warn("[UT]sendAccount is empty!"),e.abrupt("return");case 3:if(!isNullOrEmpty(s)){e.next=6;break}return N.warn("[UT]recvAccount is empty!"),e.abrupt("return");case 6:if(!isNullOrEmpty(c)){e.next=9;break}return N.warn("[UT] ipAddress is empty!"),e.abrupt("return");case 9:if(!isNullOrEmpty(f)){e.next=12;break}return N.warn("[UT]fileName is empty!"),e.abrupt("return");case 12:if(!isNullOrEmpty(d)){e.next=15;break}return N.warn("[UT]fileSize is empty!"),e.abrupt("return");case 15:a=[i,s,c,f,d],isNullOrEmpty(p)||a.push(p),o=new g.default(constant.EVENT_ID.UT_FILE_TRANSFER,a),n.utManager.addTrackerData(o);case 19:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utHandleMobileSystemBroken=(0,c.default)(u.default.mark(function t(){var r,a,o,i,s,c;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("mac"!==(r=window.CLIENTCONFIG.PLATFORM)&&"win"!==r){e.next=4;break}return N.info("[UT]utHandleMobileSystemBroken ignore desktop client!"),e.abrupt("return");case 4:return e.next=6,appService.isSystemBroken();case 6:if(a=e.sent,N.info("[UT]utHandleMobileSystemBroken isSystem broken:",a),!a){e.next=19;break}if(o=P.default.getInstance().account,!isNullOrEmpty(o)){e.next=13;break}return N.warn("[UT]utHandleMobileSystemBroken acount is empty!"),e.abrupt("return");case 13:return i=appService.getReceiveFilesPath(o),e.next=16,appService.fileCountInPath(i);case 16:s=e.sent,c=new g.default(constant.EVENT_ID.UT_FILE_TRANSFER,[s]),n.utManager.addTrackerData(c);case 19:case"end":return e.stop()}},t,e)})),n.instance=null,n.utManager=U.default.getInstance(),n.utPageInfo=new w.default,n.actionResponseUTInfos=new o.default,n.utHandleNativeCrashInfoScan(),n}return(0,T.default)(t,e),t}(coreLazyLoad.UTApi))},1072:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),o=r(a),i=n(2),u=r(i),s=n(4),c=r(s),f=n(5),d=r(f),l=window.Logger("UT")("usertrack"),p=function(){function e(){var t=this;(0,c.default)(this,e),this.instanceDesktopDeviceInfo=(0,u.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.cpuDesc();case 2:t.cpu=e.sent,t.resolution=window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,t.language=t.clientLanguageDescription(),t.osName=appService.osName(),t.osVersion=appService.osVersion();case 7:case"end":return e.stop()}},e,t)})),this.instance=null,this.deviceId="",this.brand="",this.deviceModel="",this.cpu="",this.resolution="",this.language="",this.osName="",this.osVersion="",this.init()}return(0,d.default)(e,[{key:"init",value:function(){var e=window.CLIENTCONFIG.PLATFORM;"mac"===e||"win"===e?this.instanceDesktopDeviceInfo():this.instanceMobileDeveceInfo()}},{key:"instanceMobileDeveceInfo",value:function(){var e=this;document.addEventListener("deviceready",(0,u.default)(o.default.mark(function t(){var n,r;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.CLIENTCONFIG.PLATFORM,r="android"===n,e.brand=window.device.manufacturer,t.next=5,appService.deviceModel();case 5:if(e.deviceModel=t.sent,!r){t.next=11;break}return t.next=9,appService.cpuDesc();case 9:e.cpu=t.sent,l.info("[UT]cpu info is:",e.cpu);case 11:return e.resolution=window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,e.language=e.clientLanguageDescription(),t.next=15,appService.osName();case 15:return e.osName=t.sent,t.next=18,appService.osVersion();case 18:e.osVersion=t.sent;case 19:case"end":return t.stop()}},t,e)})),!1)}},{key:"clientLanguageDescription",value:function(){var e="EN";switch(window.langcode){case"1036":e="FR";break;case"1033":e="EN";break;case"2052":e="CN"}return e}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),e}();t.default=p},1073:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),o=r(a),i=n(2),u=r(i),s=n(4),c=r(s),f=function e(){var t=this;(0,c.default)(this,e),this.refreshNetInfo=(0,u.default)(o.default.mark(function e(){var n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("mac"!==(n=window.CLIENTCONFIG.PLATFORM)&&"win"!==n){e.next=6;break}return e.next=4,t.refreshDesktopClientNetInfo();case 4:e.next=8;break;case 6:return e.next=8,t.refreshMobileClientNetInfo();case 8:case"end":return e.stop()}},e,t)})),this.refreshDesktopClientNetInfo=(0,u.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.netInfo();case 2:t.access=e.sent;case 3:case"end":return e.stop()}},e,t)})),this.refreshMobileClientNetInfo=(0,u.default)(o.default.mark(function e(){var n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.netInfo();case 2:n=e.sent,n instanceof Array&&3===n.length&&(t.carrier=n[0],t.access=n[1],"wifi"===t.access?t.accessSubtype="unknown":t.accessSubtype=n[2]);case 4:case"end":return e.stop()}},e,t)})),this.carrier="",this.access="",this.accessSubtype=""};t.default=f},1074:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(65),o=r(a),i=n(1),u=r(i),s=n(2),c=r(s),f=n(4),d=r(f),l=n(5),p=r(l),v=n(976),_=r(v),h=100,T="rest/usg/ops/v1/operations/terminalaction",E=window.Logger("service")("UT"),g=function(){function e(){var t=this;(0,d.default)(this,e),this.initDbUtCount=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==t.dbUtCacheCount){e.next=4;break}return e.next=3,coreDb.queryUserTrackList({alllength:""});case 3:t.dbUtCacheCount=e.sent;case 4:case"end":return e.stop()}},e,t)})),this.addTrackerData=function(){var e=(0,c.default)(u.default.mark(function e(n){var r,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof _.default){e.next=3;break}return E.error("[UT] utInfo require a UTInfo  member, ignore other!"),e.abrupt("return");case 3:if(r=coreAccount.getMyInfo().isAutoCollectLogs){e.next=6;break}return e.abrupt("return");case 6:if(!t.isServerNoSupportUTUpload()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.toUTString();case 10:return a=e.sent,e.next=13,t.saveUTInfoDesc2DB(a);case 13:return e.next=15,t.initDbUtCount();case 15:if(t.dbUtCacheCount++,!t.isInUploading){e.next=19;break}return E.info("[UT] in uploading, ignore."),e.abrupt("return");case 19:E.info("[UT] teacklist count:"+t.dbUtCacheCount+" UT_ONCE_UPLOAD_COUNT"+h),t.dbUtCacheCount>=h&&t.uploadUserTrackData();case 21:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.uploadUserTrackData=(0,c.default)(u.default.mark(function e(){var n,r,a,o,i,s,c,f,d,l,p,v,_,h,g,I;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=coreAccount.getMyInfo().isAutoCollectLogs){e.next=3;break}return e.abrupt("return");case 3:if(r=coreAccount.getLoginModel().isSupportAS){e.next=6;break}return e.abrupt("return");case 6:if(!t.isInUploading){e.next=9;break}return E.info("[UT]in uploading, ignore new upload"),e.abrupt("return");case 9:return t.isInUploading=!0,t.stopUploadTimer(),E.info("[UT] uploadUserTrackData"),a=coreAccount.getLoginModel(),e.next=15,t.getUploadLists();case 15:if(o=e.sent,0!==o.length){e.next=21;break}return E.info("[UT] no date need upload, ignore!"),t.isInUploading=!1,t.startUploadTimer(),e.abrupt("return");case 21:if(i=t.prepareUploadDataBody(o),s="https://"+a.serverUportalAddress+":"+a.serverUportalPort+"/"+T,c=a.authToken,0!==c.length){e.next=28;break}return t.isInUploading=!1,t.startUploadTimer(),e.abrupt("return");case 28:return f={proxyAddress:"",proxyPort:0,proxyAccount:"",proxyPassword:""},e.next=31,coreSecurity.PasswordManager.getPassword("proxyPassword");case 31:return d=e.sent,a.isSupportProxy&&(f.proxyAddress=a.proxyAddress,f.proxyPort=a.proxyPort,f.proxyAccount=a.proxyAccount,f.proxyPassword=d),l=coreAccount.getLoginModel(),p=l.isSupportCACertCheck,e.next=36,new coreHttp.hwTupHttpTransSdk;case 36:return v=e.sent,e.next=39,v.sendSyncRequest({url:s,type:constant.REQUEST_TYPE.POST,header:{"Content-Type":"application/json",Authorization:"Basic "+c},body:i,proxyInfo:f,tlsParam:{caCertPath:window.EXEC_PATH,tlsMode:p?1:0},cipherlist:[]});case 39:if(_=e.sent,h=_.param&&_.param.resp_code,g=_.result,E.info("[UT] statusCode:"+h+" retCode:"+g),!h){e.next=54;break}if(200!==(I=parseInt(h))){e.next=51;break}return E.info("[UT] upload info success!"),e.next=49,t.deleteUploadedUTList(o);case 49:e.next=52;break;case 51:E.error("[UT] upload failed, request error, status code: "+h+", result: "+g);case 52:e.next=55;break;case 54:E.error("[UT] upload failed, status code:"+h);case 55:t.isInUploading=!1,t.startUploadTimer();case 57:case"end":return e.stop()}},e,t)})),this.getUploadLists=(0,c.default)(u.default.mark(function e(){var n,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,coreDb.queryUserTrackList({alllength:""});case 2:if(n=e.sent,t.dbUtCacheCount=n,r=void 0,!(n>=h)){e.next=11;break}return e.next=8,coreDb.queryUserTrackList({limitcount:h});case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,coreDb.queryUserTrackList();case 13:r=e.sent;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,t)})),this.prepareUploadDataBody=function(e){for(var t="",n=0;n<e.length;n++){t+=e[n].content,n!==e.length-1&&(t+="\n")}var r={user:coreAccount.getLoginModel().account,data:t};return(0,o.default)(r)},this.saveUTInfoDesc2DB=function(){var e=(0,c.default)(u.default.mark(function e(n){var r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNullOrEmpty(n)){e.next=3;break}return E.warn("[UT] utinfodesc is empty, ignore save to db!"),e.abrupt("return");case 3:return r={id:0,content:n,retryCount:0},e.next=6,coreDb.saveUserTrack(r);case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.deleteUploadedUTList=function(){var e=(0,c.default)(u.default.mark(function e(n){var r,a,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r="",a=n.length,o=0;o<a;o++)r+=n[o].id,o<a-1&&(r+=",");return e.next=5,coreDb.deleteUserTrack({all:"",idlist:r});case 5:t.dbUtCacheCount-=a;case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.instance=null,this.localTimer=null,this.uploadTimer=null,this.UTMemoryCache=null,this.isInUploading=!1,this.dbUtCacheCount=-1,this.startUploadTimer()}return(0,p.default)(e,[{key:"startUploadTimer",value:function(){var e=this;this.uploadTimer=setInterval(function(){return e.uploadUserTrackData()},6e5)}},{key:"stopUploadTimer",value:function(){clearInterval(this.uploadTimer)}},{key:"isServerNoSupportUTUpload",value:function(){var e=coreAccount.getLoginModel().isSupportAS,t=coreAccount.getLoginModel().uportalLoginState===constant.UPORTAL_LOGIN_STATE.UPORTAL_LOGIN_SUCCESS;return!(e||!t)}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),e}();t.default=g},1075:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UT_DESKTOP_PAGE_NAME_INDEX=t.UT_MOBILE_PAGE_NAME_INDEX=void 0;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=t.UT_MOBILE_PAGE_NAME_INDEX={MLoginCtn:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_LOGIN,ConferenceHome:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_MEETING,ContactGroups:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_CONTACT,MyInfo:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_ME},i=t.UT_DESKTOP_PAGE_NAME_INDEX={UserLogin:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_LOGIN,CreateConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_CREATE_CONF,JoinConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_JOIN_CONF,BookConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_BOOK_CONF,CloudConferenceRoom:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_CLOUD_CONF,MyConferenceList:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_MY_CONF,LeftDetail:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_CONTACT,CallRecordList:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_RECENT_CALL},u=function e(){var t=this;(0,a.default)(this,e),this.pageTreeIndexByPageName=function(e){var n=window.CLIENTCONFIG.PLATFORM;return"mac"===n||"win"===n?t._desktopPageTreeIndexByPageName(e):t._mobilePageTreeIndexByPageName(e)},this._desktopPageTreeIndexByPageName=function(e){return e&&0!==e.length?i[e]:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_DEFAULT},this._mobilePageTreeIndexByPageName=function(e){return e&&0!==e.length?o[e]:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_DEFAULT}};t.default=u},1076:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function e(t){(0,a.default)(this,e),this.params=t,this.actionTime=Date.now(),this.actionResTimeCosts=0};t.default=o},119:function(e,t,n){e.exports={default:n(165),__esModule:!0}},120:function(e,t,n){e.exports=n(0)(43)},121:function(e,t,n){e.exports=n(0)(45)},124:function(e,t,n){e.exports=n(0)(277)},139:function(e,t,n){e.exports=n(0)(155)},145:function(e,t,n){var r=n(10),a=n(8),o=n(147);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},147:function(e,t,n){e.exports=n(0)(51)},164:function(e,t,n){var r=n(15);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},165:function(e,t,n){n(166),e.exports=n(8).Object.getPrototypeOf},166:function(e,t,n){var r=n(139),a=n(167);n(145)("getPrototypeOf",function(){return function(e){return a(r(e))}})},167:function(e,t,n){e.exports=n(0)(377)},178:function(e,t,n){e.exports=n(0)(385)},187:function(e,t,n){"use strict";var r=n(25).f,a=n(390),o=n(29),i=n(11),u=n(28),s=n(23),c=n(391),f=n(392),d=n(37),l=n(30),p=n(178).fastKey,v=n(164),_=l?"_s":"size",h=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var f=e(function(e,r){u(e,f,t,"_i"),e._t=t,e._i=a(null),e._f=void 0,e._l=void 0,e[_]=0,void 0!=r&&s(r,n,e[c],e)});return o(f.prototype,{clear:function(){for(var e=v(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[_]=0},delete:function(e){var n=v(this,t),r=h(n,e);if(r){var a=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=a),a&&(a.p=o),n._f==r&&(n._f=a),n._l==r&&(n._l=o),n[_]--}return!!r},forEach:function(e){v(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(v(this,t),e)}}),l&&r(f.prototype,"size",{get:function(){return v(this,t)[_]}}),f},def:function(e,t,n){var r,a,o=h(e,t);return o?o.v=n:(e._l=o={i:a=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[_]++,"F"!==a&&(e._i[a]=o)),e},getEntry:h,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=v(e,t),this._k=n,this._l=void 0},function(){for(var e=this,t=e._k,n=e._l;n&&n.r;)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?"keys"==t?f(0,n.k):"values"==t?f(0,n.v):f(0,[n.k,n.v]):(e._t=void 0,f(1))},n?"entries":"values",!n,!0),d(t)}}},188:function(e,t,n){"use strict";var r=n(7),a=n(10),o=n(178),i=n(147),u=n(35),s=n(29),c=n(23),f=n(28),d=n(15),l=n(36),p=n(25).f,v=n(393)(0),_=n(30);e.exports=function(e,t,n,h,T,E){var g=r[e],I=g,U=T?"set":"add",m=I&&I.prototype,w={};return _&&"function"==typeof I&&(E||m.forEach&&!i(function(){(new I).entries().next()}))?(I=t(function(t,n){f(t,I,e,"_c"),t._c=new g,void 0!=n&&c(n,T,t[U],t)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in m&&(!E||"clear"!=e)&&u(I.prototype,e,function(n,r){if(f(this,I,e),!t&&E&&!d(n))return"get"==e&&void 0;var a=this._c[e](0===n?0:n,r);return t?this:a})}),E||p(I.prototype,"size",{get:function(){return this._c.size}})):(I=h.getConstructor(t,e,T,U),s(I.prototype,n),o.NEED=!0),l(I,e),w[e]=I,a(a.G+a.W+a.F,w),E||h.setStrong(I,e,T),I}},189:function(e,t,n){var r=n(16),a=n(398);e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return a(this)}}},190:function(e,t,n){"use strict";var r=n(10);e.exports=function(e){r(r.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},191:function(e,t,n){"use strict";var r=n(10),a=n(12),o=n(11),i=n(23);e.exports=function(e){r(r.S,e,{from:function(e){var t,n,r,u,s=arguments[1];return a(this),t=void 0!==s,t&&a(s),void 0==e?new this:(n=[],t?(r=0,u=o(s,arguments[2],2),i(e,!1,function(e){n.push(u(e,r++))})):i(e,!1,n.push,n),new this(n))}})}},382:function(e,t,n){e.exports={default:n(417),__esModule:!0}},390:function(e,t,n){e.exports=n(0)(111)},391:function(e,t,n){e.exports=n(0)(184)},392:function(e,t,n){e.exports=n(0)(381)},393:function(e,t,n){var r=n(11),a=n(394),o=n(139),i=n(27),u=n(395);e.exports=function(e,t){var n=1==e,s=2==e,c=3==e,f=4==e,d=6==e,l=5==e||d,p=t||u;return function(t,u,v){for(var _,h,T=o(t),E=a(T),g=r(u,v,3),I=i(E.length),U=0,m=n?p(t,I):s?p(t,0):void 0;I>U;U++)if((l||U in E)&&(_=E[U],h=g(_,U,T),e))if(n)m[U]=h;else if(h)switch(e){case 3:return!0;case 5:return _;case 6:return U;case 2:m.push(_)}else if(f)return!1;return d?-1:c||f?f:m}}},394:function(e,t,n){e.exports=n(0)(153)},395:function(e,t,n){var r=n(396);e.exports=function(e,t){return new(r(e))(t)}},396:function(e,t,n){var r=n(15),a=n(397),o=n(6)("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},397:function(e,t,n){e.exports=n(0)(387)},398:function(e,t,n){var r=n(23);e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},417:function(e,t,n){n(31),n(22),n(24),n(418),n(419),n(420),n(421),e.exports=n(8).Map},418:function(e,t,n){"use strict";var r=n(187),a=n(164);e.exports=n(188)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)},419:function(e,t,n){var r=n(10);r(r.P+r.R,"Map",{toJSON:n(189)("Map")})},420:function(e,t,n){n(190)("Map")},421:function(e,t,n){n(191)("Map")},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwUTSdk=void 0;var a=n(124),o=r(a),i=n(4),u=r(i),s=n(1071);t.HwUTSdk=function e(){(0,u.default)(this,e),this.getUtApi=s.getUtApi,(0,o.default)(this,(0,s.getUtApi)().getApiList())}},65:function(e,t,n){e.exports={default:n(66),__esModule:!0}},66:function(e,t,n){var r=n(8),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},976:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),o=r(a),i=n(2),u=r(i),s=n(4),c=r(s),f=n(5),d=r(f),l=n(1072),p=r(l),v=n(977),_=r(v),h=n(1073),T=r(h),E=window.Logger("usertrack")("UTInfo"),g="||",I="|||",U=function(){function e(t,n){var r=this;(0,c.default)(this,e),this.toUTString=(0,u.default)(o.default.mark(function e(){var t,n,a,i,u,s,c;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.netInfo.refreshNetInfo();case 2:for(t="",n=0;n<r.args.length;n++)a=r.args[n],t+=r.decodeElement(a),n!==r.args.length-1&&(t+=g);return i=""+r.decodeElement(r.apiVersion)+g+r.decodeElement(r.version)+g+r.decodeElement(r.deviceInfo.deviceId)+g+r.decodeElement(r.deviceInfo.brand)+g+r.decodeElement(r.deviceInfo.deviceModel)+g+r.decodeElement(r.deviceInfo.cpu)+g+r.decodeElement(r.deviceInfo.resolution)+g,u=r.decodeElement(r.deviceInfo.language)+g+r.decodeElement(r.deviceInfo.osName)+g+r.decodeElement(r.deviceInfo.osVersion)+g+r.decodeElement(r.netInfo.carrier)+g+r.decodeElement(r.netInfo.access)+g+r.decodeElement(r.netInfo.accessSubtype)+g+r.decodeElement(r.timeStamp)+g+r.decodeElement(r.cloudusgIP)+g+r.decodeElement(r.sbcIP)+I+r.decodeElement(r.eventId)+(t.length>0?g+t:""),s=i+r.decodeElement(r.userInfo.account)+g+u,c=i+"****"+g+u,E.info("[UT] generate a utinfo:",c),e.abrupt("return",s);case 10:case"end":return e.stop()}},e,r)})),this.apiVersion="1.0",this.version=window.CLIENTCONFIG.ACS_SOFTWAREVERSION_VALUE,this.deviceInfo=p.default.getInstance(),this.netInfo=new T.default,this.userInfo=_.default.getInstance(),this.timeStamp=this.localUTCTime(),this.eventId=t,this.args=n,this.cloudusgIP=coreAccount.getLoginModel().serverUportalAddress,this.sbcIP=this.getSBCIP()}return(0,d.default)(e,[{key:"getSBCIP",value:function(){var e=coreAccount.getLoginModel(),t=e.sipServerAddress;return 0===t.length?t=e.sipServerBackup1:0<e.sipServerBackup1.length&&(t=t+","+e.sipServerBackup1),t}},{key:"decodeElement",value:function(e){return isNullOrEmpty(e)?"-":e}},{key:"localUTCTime",value:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),i=e.getSeconds(),u=e.getMilliseconds(),s=e.getTimezoneOffset(),c=-s/60,f="";return f=c>0?c<10?"+0"+c+"00":"+"+c+"00":c>-10?"-0"+-c+"00":c+"00",t+"-"+this.formatDoubleNeedsValue(n)+"-"+this.formatDoubleNeedsValue(r)+" "+this.formatDoubleNeedsValue(a)+":"+this.formatDoubleNeedsValue(o)+":"+this.formatDoubleNeedsValue(i)+this.formatMillSecValue(u)+" "+f}},{key:"formatDoubleNeedsValue",value:function(e){return e<10?"0"+e:e}},{key:"formatMillSecValue",value:function(e){if(0!==e){return(""+e/1e3).slice(1)}return".000"}}]),e}();t.default=U},977:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(4),o=r(a),i=n(5),u=r(i),s=function(){function e(){(0,o.default)(this,e),this.instance=null,this.account=""}return(0,u.default)(e,[{key:"clean",value:function(){this.account=""}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),e}();t.default=s}});