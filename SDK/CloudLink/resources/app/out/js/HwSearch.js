webpackJsonp([17],{105:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwSearchSdk=void 0;var o=r(121),c=n(o),a=r(4),i=n(a),s=r(2191);t.HwSearchSdk=function e(){(0,i.default)(this,e),this.getGroupApi=s.getSearchApi,(0,c.default)(this,(0,s.getSearchApi)().getApiList())}},116:function(e,t,r){e.exports=r(0)(0)},1162:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={},n=0;return function(o){var c=t?e[t]:e;clearTimeout(n),n=setTimeout(function(){r={}},O);var a=o?o.trim().split(/\s+/):"";a.length<=128||a.slice(0,128);var i=a;if(!i)return v.default.resolve([]);if(r[i])return r[i].then(function(e){S.info("buffer search finish, count",e.length)}),v.default.resolve(r[i]);var s={},u=0;return r[i]=function e(){if(!(u>=a.length)){var t=a[u++].charAt(0);return(r[t]||(r[t]=c(t))).then(function(e){return e.forEach(function(e){return!s[e.id]&&(s[e.id]=e)})}).then(e)}}().then(function(){return(0,d.default)(s).map(function(e){return s[e]})})}}function c(e,t,r){var n="",o=0;return function(c,a){return clearTimeout(o),n=c,e(c).then(function(e){if(e&&(e=e.sort()),isNullOrEmpty(e)||(e=e.filter(function(e){return!e.group_id||!coreIm.isGroupNotifyMessage(e.media_type)})),c===n)return(0,y.asyncMatch)(e,c,function(e){a(e)},function(e,t){if(c!==n)return t.stop()},r).then(function(e){if(c===n){if(t instanceof Function)var i=0,s=0,u=function(e){if(!(0!==s&&s>=i)){for(var o={is_need_amount:1,offset:s,count:20,query_key:c,query_type:2},a=arguments.length,u=Array(a>1?a-1:0),f=1;f<a;f++)u[f-1]=arguments[f];return t.apply(void 0,[o].concat(u)).then(function(t){var o=t.list,a=void 0===o?[]:o,u=t.count,f=void 0===u?0:u;if(s=s+window.CLIENTCONFIG.EAB_SEARCH_NUM||20,i=f,isNullOrEmpty(a)&&F(!0),c===n)return(0,y.asyncMatch)(a,c,function(t){e instanceof Function&&e(t,!0,f,s),F(!0)},function(e,t){if(c!==n)return t.stop()},r,"useServe",!0)})}};return e&&e.length>=1?u:(t instanceof Function&&(o=setTimeout(u,300,a)),u)}})})}}function a(){return function(){return v.default.resolve(void 0)}}function i(e){var t={},r=coreDb.dbService.queryGroupMemberList;return v.default.all([r({searchtext:e})]).then(function(e){e.forEach(function(e){e instanceof Array&&e.forEach(function(e){t[e.group_id]||(t[e.group_id]=e)})});var r=(0,d.default)(t);return r.length?coreGroup.queryGroupListByIdList(r.join()).then(function(e){return e.map(function(e){var r=t[e.group_id];return r.group=e,r})}):[]})}function s(e){var t=e.query_key,r=e.offset;return S.info("eua_offset",r),coreContact.searchServerContact(t,r).then(function(e){if(!e)return{recordAmount:0,userInformationList:[]};T(e.recordAmount);var t=e.recordAmount,r=e.userInformationList;return S.info("server all contacts search finish, count:",t),{list:r,count:t}})}Object.defineProperty(t,"__esModule",{value:!0}),t.getMoreGroupResult=t.getMoreSearchResult=t.setGlobalDirectorySearchLoadLogic=t.setGlobalSearchGroupLogic=t.setGlobalSearchAmountLogic=t.setGoOutSearchLogic=t.setSeeMoreListLogic=t.setSingleQueryLogic=t.activeGroupConversation=t.searchGroupOnServer=t.queryGroupWithMember=t.searchServerGroupAsync=t.searchGroupLocalAsync=t.searchDirectoryAsync=t.searchContactLocalAsync=t.searchGroupWithMemberAsync=t.searchFileAsync=t.searchMessageAsync=t.searchGroupAsync=t.searchContactAsync=t.searchGroupWithMember=t.searchFile=t.searchMessage=t.searchGroup=t.searchContact=void 0;var u=r(1),f=n(u),h=r(2),l=n(h),p=r(131),d=n(p),g=r(3),v=n(g),m=t.searchGroupOnServer=function(){var e=(0,l.default)(f.default.mark(function e(t){var r,n,o;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.CLIENTCONFIG.USE_IM){e.next=13;break}return e.next=3,coreGroup.searchFixedGroupsLogic(t);case 3:if((r=e.sent)&&1!==r.result){e.next=6;break}return e.abrupt("return",{list:[],count:0});case 6:return j(r.record_amount),n=r.record_amount,o=r.group_list,r.group_list.forEach(function(e){e.server_group=!0}),S.info("server all groups search finish, count:",n),e.abrupt("return",{list:o,count:n});case 13:return e.abrupt("return",{list:[],count:0});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.activeGroupConversation=function(){var e=(0,l.default)(f.default.mark(function e(t){var r;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r={},r.group=t,coreIm.createOrUpdateRecent(r).then(function(e){/search/i.test(location.hash)?(setTimeout(function(){return location.replace("#/conversation")},0),$getState().recent.currentRecentInfo=e):/recent/i.test(location.hash)||coreCommon.switchNav("recent"),coreIm.toggleRecent(e)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.searchContactOnServer=s;var y=r(1163),S=window.Logger("logic")("search/search"),b=["name","account","show_account","foreign_name","mobile","dept_name_en","dept_name_cn","address","bind_no","mobile","office_phone","other_phone","other_phone2","short_phone","voip","email","home_phone","fax"],_=["name","group_id"],L=["show_text"],G=["file_real_save_name"],w=t.searchContact=o(coreContact,"queryFriendsBySearchText"),M=t.searchGroup=o(coreGroup,"queryGroupBySearchText"),A=t.searchMessage=o(coreDb,"queryMessageBySearchText"),x=t.searchFile=o(coreDb,"queryFileBySearchText"),C=t.searchGroupWithMember=o(i),O=(t.searchContactAsync=c(w,s,b),t.searchGroupAsync=c(M,null,_),t.searchMessageAsync=c(A,null,L),t.searchFileAsync=c(x,null,G),t.searchGroupWithMemberAsync=c(C),t.searchContactLocalAsync=c(w,null,b),t.searchDirectoryAsync=c(a(),s,b),t.searchGroupLocalAsync=c(M,null,_),t.searchServerGroupAsync=c(a(),m,_),2e3),T=(t.queryGroupWithMember=i,t.setSingleQueryLogic=function(e){$dispatch(coreUi.setSingleQueryText(e))},t.setSeeMoreListLogic=function(e){$dispatch(coreUi.setSeeMoreListText(e))},t.setGoOutSearchLogic=function(e){$dispatch(coreUi.setGoOutSearchBool(e))},t.setGlobalSearchAmountLogic=function(e){$dispatch(coreUi.setGlobalSearchAmount(e))}),j=t.setGlobalSearchGroupLogic=function(e){$dispatch(coreUi.setGlobalSearchGroup(e))},F=t.setGlobalDirectorySearchLoadLogic=function(e){$dispatch(coreUi.setGlobalDirectorySearchLoading(e))};t.getMoreSearchResult=function(){var e=(0,l.default)(f.default.mark(function e(t,r){var n;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S.info("加载企业通讯录更多搜索结果"),n=r,e.abrupt("return",function(e){return coreContact.searchServerContact(r,t).then(function(t){return isNullOrEmpty(t)&&window.Toast(language.THE_NETWORK_IS_ABNORMAL,1,!1),(0,y.asyncMatch)(t.userInformationList||[],r,function(r){e({filtered:r,recordAmount:t.recordAmount},!0)},function(e,t){if(r!==n)return t.stop()},b)})});case 6:e.prev=6,e.t0=e.catch(0),S.error("getMoreSearchResult 加载更多搜索结果",{error:e.t0.toJSON()});case 9:case"end":return e.stop()}},e,void 0,[[0,6]])}));return function(t,r){return e.apply(this,arguments)}}(),t.getMoreGroupResult=function(){var e=(0,l.default)(f.default.mark(function e(t){var r,n;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return S.info("加载更多网络群组搜索结果"),r=t.query_key,n=r,e.abrupt("return",function(){var e=(0,l.default)(f.default.mark(function e(o){var c;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,coreGroup.searchFixedGroupsLogic(t);case 2:return c=e.sent,e.abrupt("return",function(){return isNullOrEmpty(c)&&window.Toast(language.THE_NETWORK_IS_ABNORMAL,1,!1),(0,y.asyncMatch)(c.group_list||[],r,function(e){o({filtered:e,record_amount:c.record_amount},!0)},function(e,t){if(r!==n)return t.stop()})}());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},1163:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function r(e){return"string"==typeof e?e.replace(t,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.slice(1,-2).map(function(e,t){return 1&t?e:e?"<b>"+e+"</b>":void 0}).join("").replace(/<\/b><b>/g,"")}):e}if(e instanceof Object){var n={};for(var o in e)n[o]=r(e[o]);return n}return r(n)}function c(e){if(e){var t=e,r=t.offsetLeft,n=t.offsetTop;for(e=e.offsetParent,r+=e.offsetLeft,n+=e.offsetTop;e&&e.offsetParent;)r-=e.scrollLeft,n-=e.scrollTop,e=e.offsetParent,r+=e.offsetLeft,n+=e.offsetTop;return{left:r,top:n}}}function a(e,t,r){var n=0,o=-1,c="",a=void 0,i=void 0,s=function(e,s){if((!r||r[s]&&!(o>r[s]))&&"string"==typeof e){var u="",f=e.replace(t,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!u){var n=t[t.length-2].toString(36),o=t[0].length.toString(36),c=0;t.map(function(e,t){return e&&1&t&&c++}),c=c.toString(36),u="0".repeat(3-c.length)+c+"0".repeat(3-o.length)+o+"0".repeat(3-n.length)+n}return t.slice(1,-2).map(function(e,t){return 1&t?e:e?"<b>"+e+"</b>":void 0}).join("").replace(/<\/b><b>/g,"")});u&&(o=r&&r[s],n=u,c=f,a=e,i=s)}};return e instanceof Object?(0,w.default)(e).sort().forEach(function(t){var r=e[t];s(r,t)}):s(e),{power:-parseInt(n,36),mark:c,object:e,origin:a,key:i,reg:t,key_power:o}}function i(e,t){for(var r=!1,n=!1,o=arguments.length,c=Array(o>2?o-2:0),i=2;i<o;i++)c[i-2]=arguments[i];if(c.forEach(function(e){return"boolean"==typeof e?r=e:e instanceof Object?n=e:"string"==typeof e&&(n=[e])}),!e)return[];var u;n instanceof Array?(u={},n.forEach(function(e,t){return u[e]=n.length-t})):n instanceof Object&&(u=n);var f=O(t),h=e.map(function(e,t){var r=a(e,f,u);return r.index=t,r});return t&&!r?h.filter(function(e){return+e.power}).sort(s):r?h:[]}function s(e,t){var r=t.key_power-e.key_power||t.power-e.power;if(0===r){var n=(t.origin||"").toLowerCase(),o=(e.origin||"").toLowerCase();return n<o?1:n>o?-1:0}return r}function u(e,t){for(var r=0,n=e.length;r<n;){var o=r+n>>1;s(e[o],t)<=0?r=o+1:n=o}e.splice(r,0,t)}function f(e,t,r){for(var n=!1,o=!1,c=!1,i=function(){},s=arguments.length,f=Array(s>3?s-3:0),h=3;h<s;h++)f[h-3]=arguments[h];if(f.forEach(function(e){switch(void 0===e?"undefined":(0,L.default)(e)){case"boolean":n=e;break;case"object":o=e;break;case"string":"useServe"===e?c=!0:o=[e];break;case"function":i=e}}),!e)return b.default.resolve([]);var l;o instanceof Array?(l={},o.forEach(function(e,t){return l[e]=o.length-t})):o instanceof Object&&(l=o);var p=O(t),d=0,g=0,v=[],m=b.default.resolve(function o(s){if(!d){if(g>=e.length)return r?r(v):i(v,m||{stop:function(){return d=!0}}),v;for(s>=e.length&&(s=e.length);g<s;){var f=a(e[g],p,l);f.index=g++;(+f.power||t&&n)&&(c?v.push(f):u(v,f))}return i&&i(v,m||{stop:function(){return d=!0}}),new b.default(function(e){return setTimeout(function(){e(g+20)},2)}).then(o)}}(60));return m.onprocess=function(e){i=e},m.stop=function(){return d=!0},m}function h(e,t){t.target=e;var r=c(e),n=(r.left,r.top);document.body.appendChild(t);t.resize=function(e){t.parentNode||window.removeEventListener("resize",window.resize),(0,y.default)(t.style,{right:"0px",width:"250px",top:"0px",position:"fixed",background:"white",height:"100%","box-shadow":"2px 4px 10px 0px rgba(18, 55, 84, .25)"})},t.resize(),window.addEventListener("resize",t.resize);var o=getComputedStyle(t),a=parseInt(o.height),i=Math.max(window.innerHeight-e.offsetHeight-n-parseInt(o.paddingTop)-parseInt(o.paddingBottom),n);a>=i&&(t.style.boxSizing="padding-box",t.style.height="100%",a=i),a+n+e.offsetHeight>window.innerHeight&&(t.style.bottom=n+"px",t.style.top="auto")}function l(e){delete e.object,e&&e.parentNode&&e.parentNode.removeChild(e),e&&window.removeEventListener("resize",e.resize)}function p(e){l(e)}function d(e,t,r){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=e.target,c=o.searchList||g(t);if(n||(o.onblur=function(){l(c),r.setTopbarState({hasFocus:!1})}),o.onkeydown=function(e){return v(e,c)},o.oninput=function(){return r.setState instanceof Function&&r.setState({searchString:o.value&&o.value.trim()})},o.searchList=c,c.move=function(e){r.move instanceof Function&&r.move(e)},c.confirm=function(){if(!c.parentNode)return o.value&&h(o,c);r.confirm instanceof Function&&r.confirm()},c.switch=function(e){r.switch instanceof Function&&r.switch(e)},!(n||o.value&&o.value.trim()))return l(c);h(e.target,c)}function g(e){var t=document.createElement("div");return(0,x.render)(A.default.createElement(C.Provider,{store:window.store}," ",e," "),t),t.onmousedown=function(e){return e.preventDefault()},t}function v(e,t){switch(e.which){case 13:t.confirm();break;case 40:if(!t.parentNode)return;e.preventDefault(),t.move(1);break;case 38:if(!t.parentNode)return;e.preventDefault(),t.move(-1);break;case 27:l(t);break;case 9:if(!t.parentNode)return;e.preventDefault(),t.switch(e.shiftKey)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getRegExp=void 0;var m=r(121),y=n(m),S=r(3),b=n(S),_=r(144),L=n(_),G=r(131),w=n(G);t.mark=o,t.getScreenPosition=c,t.getMatchPower=a,t.filterMatch=i,t.sortCompare=s,t.asyncMatch=f,t.popup=h,t.escape=l,t.closePopup=p,t.searchHere=d;var M=r(116),A=n(M),x=r(151),C=r(122),O=(window.Logger("logic/search")("common"),t.getRegExp=function(e){var t=/\w/gi,r=/([\\?+\-*\/[\]{}()^$.:|])/g,n=e.trim().split(/\s+/g).map(function(e){return t.test(e)?e.trim().split().filter(function(e){return!!e}).map(function(e){return"("+e.replace(r,"\\$1")+")(.*?)"}).join(""):"("+e.replace(r,"\\$1")+")(.*?)"}).join("|");return new RegExp(n,"ig")});window.getSearchRegexp=O,t.default=i},1164:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(void 0===e&&(e=$getState().search.searchText),$dispatch(coreUi.updateSearchData({searchText:e})),""===e.trim())return a();a(!0),window.CLIENTCONFIG.USE_IM?(b(e),_(e),L(e),G(e),w(e)):b(e)}function c(){S=S={contact:"",group:"",message:"",file:""}}function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m.info("clear search data"),S=S={contact:"",group:"",message:"",file:""},e?$dispatch(coreUi.updateSearchData({coordinate:-1})):coreUi.resetSearchData()}function i(e,t){return function(r){r=r.slice(0,128);var n=M(e),o=n.update,c=n.search,a=n.useServer;$dispatch(o({isSearching:!0}));var i=void 0,s=0,u=!1;c(r,function(){var n=(0,g.default)(p.default.mark(function n(c){var f,h=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(m.info("searchGenerator["+e+"] searchtext length "+r.length+" local search finish count "+c.length),n.t0=t instanceof Function,!n.t0){n.next=5;break}return n.next=5,t(c);case 5:i=h,f={},c=c.filter(function(e){var t=e.object.account;if(t){if(f.hasOwnProperty(t))return!1;f[t]=!0}return!0}),"contact"===e&&(s+=1,u=0===c.length&&1===s),"message"===e&&(c=c.filter(function(e){return e.object.media_type===constant.MEDIA_TYPE.TEXT})),$dispatch(o({list:c,displayLength:Math.min(c.length,3),hasSearchServer:!a||i,serverHasMore:d<l,isSearching:u}));case 11:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()).then(function(t){a&&(i?y[e]=function(){}:($getState().login.sipLoginOnly&&isNullOrEmpty($getState().conf.confTempAcsAccount)&&(window.CLIENTCONFIG.ISMOBILE||(window.alert(language.UNABLE_SEARCH),m.info("本地 ：匿名入会不可搜索联系人"),$dispatch(o({list:[]})))),y[e]=t))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.showCollapseSearchResult=t.showMoreSearchResult=t.getSearchObject=t.searchServerFixedGroup=t.searchServerContact=t.searchLocalMessage=t.searchLocalFile=t.searchLocalGroup=t.searchLocalTeam=t.searchLocalContact=void 0;var s=r(121),u=n(s),f=r(129),h=n(f),l=r(1),p=n(l),d=r(2),g=n(d);t.search=o,t.clearGlobalData=c,t.resetSearch=a;var v=r(1162),m=window.Logger("logic")("search/basic"),y={contact:null,group:null},S={contact:"",group:"",message:"",file:""},b=t.searchLocalContact=i("contact",function(e){!window.CLIENTCONFIG.ISMOBILE&&coreContact.detectContactStatus(e.map(function(e){return e.object.account}));var t=$getState().search.searchText.trim();t.length<=128||(t=t.slice(0,128)),/(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(t)?e.unshift({object:{name:t},type:"phone"}):/^.+?[@].+\..+$/.test(t)&&e.unshift({object:{name:t},type:"phone"})}),_=t.searchLocalTeam=i("team",function(e){for(var t=0;t<e.length;t++){e[t].object.group_type===constant.GROUP_TYPE.FIXED_GROUP||e.splice(t--,1)}}),L=t.searchLocalGroup=i("group",function(e){for(var t=0;t<e.length;t++){e[t].object.group_type===constant.GROUP_TYPE.FIXED_GROUP&&e.splice(t--,1)}}),G=t.searchLocalFile=i("file"),w=t.searchLocalMessage=i("message",function(){var e=(0,g.default)(p.default.mark(function e(t){var r,n,o,c,a;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=20;break}if(n=t[r].object,!(o=coreIm.isGroup(n.chat_type))||!n.group_id){e.next=17;break}return e.next=7,coreGroup.getGroupInfoFromDB(n.group_id);case 7:if(c=e.sent,!c.name){e.next=13;break}t[r].object.group_name=c.name,t[r].object.group_type=c.group_type,e.next=17;break;case 13:return e.next=15,coreIm.getLocalRecent({owner:n.group_id});case 15:a=e.sent,t[r].object.group_name=a.last_message.group_name;case 17:r++,e.next=1;break;case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),M=(t.searchServerContact=function(){if(y.contact instanceof Function)y.contact(function(e,t,r,n){m.info("server search conatcts add showing finish,count",e.length),!window.CLIENTCONFIG.ISMOBILE&&coreContact.detectContactStatus(e.map(function(e){return e.object.account}));var o=$getState().search.contact.list,c={};o.reduce(function(e,t){return e[t.object.account]=!0,e},c);var a=1;e.forEach(function(e){!c[e.object.account]&&o.push(e),c[e.object.account]&&m.info("has been filtered["+a+++"]")}),m.info("server current showing search contacts finish,count",o.length),m.info("contact_isloaded",t);var i={};o=o.filter(function(e){var t=e.object.account;if(t){if(i.hasOwnProperty(t))return!1;i[t]=!0}return!0}),$dispatch(coreUi.updateSearchContactData({list:[].concat((0,h.default)(o)),displayLength:o.length,hasSearchServer:t,serverHasMore:0!==r&&n<r,isSearching:!1}))});else{var e=$getState().search.contact.list;$dispatch(coreUi.updateSearchContactData({list:[],displayLength:e.length,hasSearchServer:!0,serverHasMore:!1,isSearching:!1}))}return!0},t.searchServerFixedGroup=function(){if(y.group instanceof Function)y.group(function(e,t,r,n){m.info("server search groups add showing finish,count",e.length);var o=$getState().search.group.list,c={};o.reduce(function(e,t){return e[t.object.group_id]=!0,e},c);var a=1;e.forEach(function(e){!c[e.object.group_id]&&o.push(e),c[e.object.group_id]&&m.info("has been filtered["+a+++"]")});var i=[];o.map(function(e){e.object.server_group&&i.push(e.object.server_group)}),m.info("server group_id_array, count",i.length),m.info("server current showing search groups finish,count",o.length),m.info("group_isloaded",t),$dispatch(coreUi.updateSearchGroupData({list:[].concat((0,h.default)(o)),displayLength:o.length,hasSearchServer:t,serverHasMore:0!==r&&n<r,isSearching:!1}))});else{var e=$getState().search.group.list;$dispatch(coreUi.updateSearchGroupData({list:[],displayLength:e.length,hasSearchServer:!0,serverHasMore:!1,isSearching:!1}))}},t.getSearchObject=function(e){var t={contact:{update:coreUi.updateSearchContactData,search:v.searchContactAsync,useServer:!0},team:{update:coreUi.updateSearchTeamData,search:v.searchGroupAsync,useServer:!1},group:{update:coreUi.updateSearchGroupData,search:v.searchGroupAsync,useServer:!1},file:{update:coreUi.updateSearchFileData,search:v.searchFileAsync,useServer:!1},message:{update:coreUi.updateSearchMessageData,search:v.searchMessageAsync,useServer:!1}},r=$getState().search;return(0,u.default)(t[e],{state:r[e]})});t.showMoreSearchResult=function(e){return function(){m.info("userClick  look more results");var t=M(e),r=t.state,n=t.update;$dispatch(coreUi.updateSearchData({coordinate:-1})),$dispatch(n({displayLength:r.displayLength+20>r.list.length?r.list.length:r.displayLength+20}))}},t.showCollapseSearchResult=function(e){return function(){m.info("userClick  look collapse results");var t=M(e),r=t.state,n=t.update;$dispatch(coreUi.updateSearchData({coordinate:-1})),$dispatch(n({displayLength:Math.min(r.list.length,3)}))}}},117:function(e,t,r){e.exports={default:r(148),__esModule:!0}},118:function(e,t,r){e.exports=r(0)(33)},119:function(e,t,r){e.exports=r(0)(34)},121:function(e,t,r){e.exports=r(0)(573)},122:function(e,t,r){e.exports=r(0)(514)},129:function(e,t,r){"use strict";t.__esModule=!0;var n=r(141),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,o.default)(e)}},131:function(e,t,r){e.exports={default:r(175),__esModule:!0}},132:function(e,t,r){e.exports=r(0)(242)},136:function(e,t,r){var n=r(10),o=r(8),c=r(137);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*c(function(){r(1)}),"Object",a)}},137:function(e,t,r){e.exports=r(0)(60)},141:function(e,t,r){e.exports={default:r(165),__esModule:!0}},144:function(e,t,r){e.exports=r(0)(134)},148:function(e,t,r){r(149),e.exports=r(8).Object.getPrototypeOf},149:function(e,t,r){var n=r(132),o=r(150);r(136)("getPrototypeOf",function(){return function(e){return o(n(e))}})},150:function(e,t,r){e.exports=r(0)(596)},151:function(e,t,r){e.exports=r(0)(11)},164:function(e,t,r){e.exports=r(0)(81)},165:function(e,t,r){r(22),r(166),e.exports=r(8).Array.from},166:function(e,t,r){"use strict";var n=r(11),o=r(10),c=r(132),a=r(31),i=r(32),s=r(27),u=r(167),f=r(26);o(o.S+o.F*!r(33)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,h,l=c(e),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,v=void 0!==g,m=0,y=f(l);if(v&&(g=n(g,d>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(t=s(l.length),r=new p(t);t>m;m++)u(r,m,v?g(l[m],m):l[m]);else for(h=y.call(l),r=new p;!(o=h.next()).done;m++)u(r,m,v?a(h,g,[o.value,m],!0):o.value);return r.length=m,r}})},167:function(e,t,r){"use strict";var n=r(25),o=r(168);e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},168:function(e,t,r){e.exports=r(0)(80)},175:function(e,t,r){r(176),e.exports=r(8).Object.keys},176:function(e,t,r){var n=r(132),o=r(164);r(136)("keys",function(){return function(e){return o(n(e))}})},2191:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SearchImpl=t.getSearchApi=void 0;var o=r(117),c=n(o),a=r(4),i=n(a),s=r(118),u=n(s),f=r(119),h=n(f),l=r(2192),p=n(l),d=r(2193),g=r(1164),v=void 0,m=(t.getSearchApi=function(){return isNullOrEmpty(v)&&(v=new m),v},t.SearchImpl=function(e){function t(){(0,i.default)(this,t);var e=(0,u.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.clearGlobalData=function(){return(0,d.clearGlobalData)()},e.filterMatch=function(e){return(0,d.filterMatch)(e.searchList,e.key,e.matchItem)},e.getFileType=function(e){return(0,d.getFileType)(e)},e.getMoreSearchResult=function(e){return(0,d.getMoreSearchResult)(e.offSet,e.val)},e.getScreenPosition=function(e){return(0,d.getScreenPosition)(e)},e.getTempCallUserInfo=function(e,t,r){return(0,d.getTempCallUserInfo)(e,t,r)},e.search=function(e){return(0,d.search)(e)},e.searchContact=function(e){return(0,d.searchContact)(e)},e.searchContactLocalAsync=function(e,t){return(0,d.searchContactLocalAsync)(e,t)},e.searchDirectoryAsync=function(e,t){return(0,d.searchDirectoryAsync)(e,t)},e.searchGroup=function(e){return(0,d.searchGroup)(e)},e.searchGroupLocalAsync=function(e,t){return(0,d.searchGroupLocalAsync)(e,t)},e.searchLocalContact=function(e){return(0,g.searchLocalContact)(e)},e.searchLocalTeam=function(e){return(0,g.searchLocalTeam)(e)},e.searchServerContact=function(){return(0,d.searchServerContact)()},e.searchServerFixedGroup=function(){return(0,d.searchServerFixedGroup)()},e.searchServerGroupAsync=function(e,t){return(0,d.searchServerGroupAsync)(e,t)},e.setGlobalDirectorySearchLoadLogic=function(e){return(0,d.setGlobalDirectorySearchLoadLogic)(e)},e.setSeeMoreListLogic=function(e){return(0,d.setSeeMoreListLogic)(e)},e.setSingleQueryLogic=function(e){return(0,d.setSingleQueryLogic)(e)},e.showCollapseSearchResult=function(e){return(0,g.showCollapseSearchResult)(e)},e.showMoreSearchResult=function(e){return(0,d.showMoreSearchResult)(e)},e}return(0,h.default)(t,e),t}(p.default))},2192:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(117),c=n(o),a=r(4),i=n(a),s=r(118),u=n(s),f=r(119),h=n(f),l=function(e){function t(){var e,r,n,o;(0,i.default)(this,t);for(var a=arguments.length,s=Array(a),f=0;f<a;f++)s[f]=arguments[f];return r=n=(0,u.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(s))),n.clearGlobalData=function(){},n.filterMatch=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},n.getFileType=function(e){},n.getMoreSearchResult=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},n.getScreenPosition=function(e){},n.getTempCallUserInfo=function(e,t,r){},n.search=function(e){},n.searchContact=function(e){},n.searchContactLocalAsync=function(e,t){},n.searchDirectoryAsync=function(e,t){},n.searchGroup=function(e){},n.searchGroupLocalAsync=function(e,t){},n.searchLocalContact=function(e){},n.searchLocalTeam=function(e){},n.searchServerContact=function(){},n.searchServerFixedGroup=function(){},n.searchServerGroupAsync=function(e,t){},n.setGlobalDirectorySearchLoadLogic=function(e){},n.setSeeMoreListLogic=function(e){},n.setSingleQueryLogic=function(e){},n.showCollapseSearchResult=function(e){},n.showMoreSearchResult=function(e){},o=r,(0,u.default)(n,o)}return(0,h.default)(t,e),t}(coreCommon.Interface);t.default=l},2193:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.getFileType=t.getTempCallUserInfo=t.filterMatch=t.mark=t.getScreenPosition=t.clearGlobalData=t.searchServerContact=t.searchServerFixedGroup=t.showMoreSearchResult=t.getSearchObject=t.search=t.setGlobalDirectorySearchLoadLogic=t.setSingleQueryLogic=t.setSeeMoreListLogic=t.setGoOutSearchLogic=t.searchMessageAsync=t.searchMessage=t.searchGroupWithMemberAsync=t.searchGroupWithMember=t.searchGroupAsync=t.searchGroup=t.searchFileAsync=t.searchFile=t.searchServerGroupAsync=t.searchGroupLocalAsync=t.searchDirectoryAsync=t.searchContactLocalAsync=t.searchContactAsync=t.searchContactOnServer=t.searchContact=t.queryGroupWithMember=t.getMoreGroupResult=t.getMoreSearchResult=t.activeGroupConversation=void 0;var o=r(1162),c=n(o),a=r(1164),i=n(a),s=r(1163),u=n(s),f=r(2194),h=n(f);t.activeGroupConversation=c.activeGroupConversation,t.getMoreSearchResult=c.getMoreSearchResult,t.getMoreGroupResult=c.getMoreGroupResult,t.queryGroupWithMember=c.queryGroupWithMember,t.searchContact=c.searchContact,t.searchContactOnServer=c.searchContactOnServer,t.searchContactAsync=c.searchContactAsync,t.searchContactLocalAsync=c.searchContactLocalAsync,t.searchDirectoryAsync=c.searchDirectoryAsync,t.searchGroupLocalAsync=c.searchGroupLocalAsync,t.searchServerGroupAsync=c.searchServerGroupAsync,t.searchFile=c.searchFile,t.searchFileAsync=c.searchFileAsync,t.searchGroup=c.searchGroup,t.searchGroupAsync=c.searchGroupAsync,t.searchGroupWithMember=c.searchGroupWithMember,t.searchGroupWithMemberAsync=c.searchGroupWithMemberAsync,t.searchMessage=c.searchMessage,t.searchMessageAsync=c.searchMessageAsync,t.setGoOutSearchLogic=c.setGoOutSearchLogic,t.setSeeMoreListLogic=c.setSeeMoreListLogic,t.setSingleQueryLogic=c.setSingleQueryLogic,t.setGlobalDirectorySearchLoadLogic=c.setGlobalDirectorySearchLoadLogic,t.search=i.search,t.getSearchObject=i.getSearchObject,t.showMoreSearchResult=i.showMoreSearchResult,t.searchServerFixedGroup=i.searchServerFixedGroup,t.searchServerContact=i.searchServerContact,t.clearGlobalData=i.clearGlobalData,t.getScreenPosition=u.getScreenPosition,t.mark=u.mark,t.filterMatch=u.filterMatch,t.getTempCallUserInfo=h.getTempCallUserInfo,t.getFileType=h.getFileType},2194:function(e,t,r){"use strict";function n(e){var t=e.replace(/^[\s\S]*\.([^.]*)$/,"$1").replace("<b>","").replace("</b>",""),r=s.exec(t);return r?r&&r.slice(1).map(function(e,t){return e&&i[t]}).join("")||t:"unknown"}Object.defineProperty(t,"__esModule",{value:!0}),t.getTempCallUserInfo=void 0;var o=r(131),c=function(e){return e&&e.__esModule?e:{default:e}}(o);t.getFileType=n;var a={doc:"do[ct][xm]?|wps|wpt|rtf|wtf",ppt:"pp[tsa][xm]?|thmx",exe:"exe|scr",help:"hl.?|chm",html:"html?|hta|xhtml",picture:"png|jpe?g|jpe|gif|bmp|rle|dib|eps|pcx|pct|pict|pxr|sct|tga|vda|tcb|vst|tiff?|p[bgpnfa]m|psb",psd:"eps|psd|pdd",rar:"rar|zip|cab|arj|lzh|ace|7-zip|tar|gzip|uue|bz2|jar|iso|isz|z|7z",xls:"xl[sta][xmb]?|csv",audio:"mp[32c]|m[412p]a|wma|rmi|wav|cda|ra|midi?|ogg|ape|flac|aac|mka|ac3|dts|au|snd|aif[cf]?",video:"avi|wm[axpv]?|r[mtp]|r[ap]m|roq|rmvb|swf|mp4|qt|3gp?[p2]|pls|vob|m3u|dvd|ogm|amr|mpeg?|mpg|fl[ivc]|m[ko]v|as[fx]|flic|ivf|m[124]v|m4[pb]|mp2v|mpv2|mpcpl|dat|ts|tp|tpr|ds[mvas]|drc|ifo|d2v|pva|pss|ratdvd|sm[ik]?|bik|smil|w[va]x"},i=(window.Logger("logic")("search/define"),(0,c.default)(a)),s=new RegExp("^(?:"+i.map(function(e){return"("+a[e]+")"}).join("|")+")$","i");t.getTempCallUserInfo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.toString();return{account:n,name:""!==t.toString()?t:n,q_pin_yin:n,gender:0,mobile:"",office_phone:"",other_phone:"",fax:"",email:"",postcode:"",address:"",title:"",dept_name:"",signature:"",website:"",bind_no:n,native_name:"",staff_no:"",crop_name:"",dept_id:"",dept_name_cn:"",dept_name_en:"",desc:"",foreign_name:"",im_no:"",ip_phone:"",is_security:0,nick_name:"",old_account:n,short_phone:"",voip:"",modify_time:(new Date).getTime().toString(),home_phone:"",other_phone2:"",number:r?n:"",isVmFlag:r}}}});