"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[239],{239:function(n,r,e){e.r(r),e.d(r,{default:function(){return j}});var t,a,c,u,i,s=e(5861),o=e(9439),p=e(4687),f=e.n(p),d=e(2791),h=e(7689),v=e(494),x=e(168),l=e(5706),m=l.Z.div(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n"]))),Z=l.Z.div(a||(a=(0,x.Z)(["\n  width: 200px;\n  height: 330px;\n  display: flex;\n  row-gap: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),w=l.Z.img(c||(c=(0,x.Z)(["\n  width: 200px;\n  height: 250px;\n  background-size: cover;\n"]))),g=l.Z.h3(u||(u=(0,x.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),k=l.Z.h5(i||(i=(0,x.Z)(["\n  text-align: center;\n  padding: 0;\n  margin: 0;\n"]))),_=e(7026),y=e(184);function b(n){var r=n.credits,e=r.cast;return(0,y.jsx)(y.Fragment,{children:Object.keys(r).length?(0,y.jsx)(m,{children:e.map((function(n){return(0,y.jsxs)(Z,{children:[(0,y.jsx)(w,{src:"https://www.themoviedb.org/t/p/w138_and_h175_face/".concat(n.profile_path)}),(0,y.jsx)(g,{children:n.name}),(0,y.jsxs)(k,{children:["Character: ",n.character]})]},n.id)}))}):(0,y.jsx)(_.Z,{})})}function j(){var n=(0,h.UO)().movieId,r=(0,d.useState)({}),e=(0,o.Z)(r,2),t=e[0],a=e[1],c=(0,d.useState)(!1),u=(0,o.Z)(c,2),i=u[0],p=u[1];return(0,d.useEffect)((function(){var r=function(){var n=(0,s.Z)(f().mark((function n(r){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,v.C2)(r);case 4:e=n.sent,a(e),p(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("error");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}();r(n)}),[n]),(0,y.jsx)(y.Fragment,{children:i?(0,y.jsx)(_.Z,{}):(0,y.jsx)(b,{credits:t,isLoading:i})})}},494:function(n,r,e){e.d(r,{C2:function(){return p},E3:function(){return d},Mc:function(){return o},h6:function(){return f},uF:function(){return s}});var t=e(5861),a=e(4687),c=e.n(a),u=e(1243),i="e88eb452a05a2e0e5aee8e4233a13d99";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization=i;var s=function(){var n=(0,t.Z)(c().mark((function n(){var r,e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:i,page:1}},n.next=3,(0,u.Z)("/movie/popular",r);case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:i}},n.next=3,(0,u.Z)("/movie/".concat(r),e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:i}},n.next=3,(0,u.Z)("/movie/".concat(r,"/credits"),e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:i}},n.next=3,(0,u.Z)("/movie/".concat(r,"/reviews"),e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:i}},n.next=3,(0,u.Z)("/search/movie?query=".concat(r),e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=239.9852b3c8.chunk.js.map