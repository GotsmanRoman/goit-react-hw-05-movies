(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[144],{494:function(e,t,n){"use strict";n.d(t,{C2:function(){return s},E3:function(){return l},Mc:function(){return f},h6:function(){return p},uF:function(){return c}});var r=n(5861),o=n(4687),u=n.n(o),i=n(1243),a="e88eb452a05a2e0e5aee8e4233a13d99";i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization=a;var c=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:a,page:1}},e.next=3,(0,i.Z)("/movie/popular",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:a}},e.next=3,(0,i.Z)("/movie/".concat(t),n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:a}},e.next=3,(0,i.Z)("/movie/".concat(t,"/credits"),n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:a}},e.next=3,(0,i.Z)("/movie/".concat(t,"/reviews"),n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:a}},e.next=3,(0,i.Z)("/search/movie?query=".concat(t),n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2144:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r,o,u,i=n(5861),a=n(9439),c=n(4687),f=n.n(c),s=n(2791),p=n(7689),l=n(1087),v=n(168),y=n(5706),d=y.Z.form(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),b=y.Z.input(o||(o=(0,v.Z)(["\n  padding-left: 20px;\n  width: 250px;\n  height: 30px;\n"]))),h=(y.Z.button(u||(u=(0,v.Z)(["\n  width: 70px;\n"]))),n(3628)),m=n(184);function g(){var e,t=(0,l.lr)(),n=(0,a.Z)(t,2),r=n[0],o=n[1],u=null!==(e=r.get("query"))&&void 0!==e?e:"",i=(0,s.useState)(""),c=(0,a.Z)(i,2)[1];return(0,m.jsx)(d,{children:(0,m.jsx)(h.DebounceInput,{placeholder:"input search keywords",element:b,minLength:3,debounceTimeout:500,onChange:function(e){var t=e.target.value;if(c(t),""===t)return o({});o({query:t})},value:u})})}var w=n(9277),x=n(494),O=n(7026);function j(){var e,t=(0,s.useState)(""),n=(0,a.Z)(t,2),r=n[0],o=n[1],u=(0,s.useState)([]),c=(0,a.Z)(u,2),v=c[0],y=c[1],d=(0,s.useState)(!1),b=(0,a.Z)(d,2),h=b[0],j=b[1],Z=(0,p.TH)(),D=(0,l.lr)(),_=null!==(e=(0,a.Z)(D,1)[0].get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){_&&o(_);var e=function(){var e=(0,i.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,x.E3)(t);case 4:n=e.sent,r=n.results,y(r),j(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();e(r)}),[r,_]),(0,m.jsxs)("div",{children:[(0,m.jsx)(w.V,{children:"Movies"}),(0,m.jsx)(g,{}),h?(0,m.jsx)(O.Z,{}):(0,m.jsx)("ul",{children:v.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"/movies/".concat(e.id),state:{from:Z},children:e.original_title})},e.id)}))})]})}},9277:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var r,o,u=n(168),i=n(5706),a=n(1087),c=i.Z.h2(r||(r=(0,u.Z)(["\n  padding-left: 20px;\n"])));(0,i.Z)(a.rU)(o||(o=(0,u.Z)(["\n  margin-top: 40px;\n  padding-left: 20px;\n  text-decoration: none;\n  &::before {\n    content: '\u21e0';\n    margin-right: 10px;\n  }\n"],["\n  margin-top: 40px;\n  padding-left: 20px;\n  text-decoration: none;\n  &::before {\n    content: '\\u21E0';\n    margin-right: 10px;\n  }\n"])))},5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),p=Object.prototype.toString,l=Math.max,v=Math.min,y=function(){return s.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||i.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,u,i,a,c,f=0,s=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,u=o;return r=o=void 0,f=t,i=e.apply(u,n)}function g(e){return f=e,a=setTimeout(x,t),s?m(e):i}function w(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-f>=u}function x(){var e=y();if(w(e))return O(e);a=setTimeout(x,function(e){var n=t-(e-c);return p?v(n,u-(e-f)):n}(e))}function O(e){return a=void 0,h&&r?m(e):(r=o=void 0,i)}function j(){var e=y(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return g(c);if(p)return a=setTimeout(x,t),m(c)}return void 0===a&&(a=setTimeout(x,t)),i}return t=b(t)||0,d(n)&&(s=!!n.leading,u=(p="maxWait"in n)?l(b(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},j.flush=function(){return void 0===a?i:O(y())},j}},6674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=a(n(2791)),u=a(n(5095)),i=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,n,r,a=v(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),h(d(t=a.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),h(d(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),h(d(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),h(d(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,u.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),h(d(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),h(d(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=f,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,u=e.value,i=this.state.value;"undefined"!==typeof n&&u!==n&&i!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,u=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),a=n.forceNotifyOnBlur,f=n.onKeyDown,p=n.onBlur,l=n.inputRef,v=c(n,i),y=this.state.value;e=u?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},t=a?{onBlur:this.onBlur}:p?{onBlur:p}:{};var d=l?{ref:l}:{};return o.default.createElement(r,s(s(s(s({},v),{},{onChange:this.onChange,value:y},e),t),d))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.default.PureComponent);t.DebounceInput=m,h(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(e,t,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=144.e86bb675.chunk.js.map