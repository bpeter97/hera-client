(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-583a6faf":"3071d5f2","chunk-a5b02640":"d765bd83","chunk-e046e920":"79a8f37f","chunk-77602441":"8fd866f4","chunk-8a5b3a9c":"4b602672"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-583a6faf":1,"chunk-a5b02640":1,"chunk-77602441":1,"chunk-8a5b3a9c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-583a6faf":"3c5a42c5","chunk-a5b02640":"93a499bf","chunk-e046e920":"31d6cfe0","chunk-77602441":"e919846d","chunk-8a5b3a9c":"efd4e519"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{class:t.containerClass,attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"main-content col-md-12 p-0"},[n("TopnavComponent",{attrs:{links:t.links}}),n("div",{staticClass:"main-content-container container-fluid p-0"},[n("keep-alive",{attrs:{include:"home"}},[n("router-view")],1)],1)],1)])])])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-navbar sticky-top bg-white"},[n("nav",{class:t.navClass},[n("div",{staticClass:"container-fluid"},[n("a",{class:t.brandClass,attrs:{href:"/"}},[n("img",{staticClass:"d-inline-block align-middle mr-1",staticStyle:{"max-width":"25px"},attrs:{src:t.heraLogo,alt:"Hera Logo"}}),n("span",{staticClass:"navbar-title align-middle"},[t._v(" Hera ")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto mb-2 mb-lg-0",attrs:{id:"header-nav"}},t._l(t.links,(function(e,r){return n("li",{key:e.label,staticClass:"nav-item",attrs:{item:e,index:r}},[n("a",{class:t.navLinkClass(e),attrs:{href:e.url,"aria-disabled":e.disabled}},[n("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:e.icon}}),n("span",{staticClass:"label"},[t._v(t._s(e.label))]),n("b-badge",{class:e.disabled?"d-inline ml-2":"d-none",attrs:{variant:"primary"}},[t._v(" Coming Soon!")])],1)])})),0),n("ul",{staticClass:"navbar-nav ml-auto flex-row "},[!1===this.$store.getters.isLoggedIn?n("li",{staticClass:"nav-item dropdown"},[t._m(1)]):t._e(),!0===this.$store.getters.isLoggedIn?n("li",{staticClass:"nav-item dropdown show"},[n("a",{staticClass:"nav-link dropdown-toggle text-nowrap px-3",attrs:{href:"#",role:"button",id:"dropdownMenuLink","aria-haspopup":"true","aria-expanded":"false","data-toggle":"dropdown"}},[n("img",{staticClass:"user-avatar rounded-circle mr-2",attrs:{src:this.$store.getters.getUserAvatar,alt:"User Avatar"}}),n("span",{class:t.usernameClass},[t._v(t._s(this.$store.getters.getUsername))])]),n("div",{staticClass:"dropdown-menu dropdown-menu-small text-center",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("a",{staticClass:"dropdown-item disabled",attrs:{href:"user-profile-lite.html"}},[t._v(" Dark Mode")]),n("label",{staticClass:"switch switch-left-right"},[n("input",{staticClass:"switch-input",attrs:{type:"checkbox",id:"notifications",name:"notifications"},domProps:{checked:this.$store.getters.getDarkMode},on:{click:function(e){return t.handleDarkmode()}}}),n("span",{staticClass:"switch-label",attrs:{"data-on":"On","data-off":"Off"}}),n("span",{staticClass:"switch-handle"})]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item text-danger",attrs:{href:"#"},on:{click:this.logout}},[n("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:"sign-out-alt"}}),t._v(" Logout ")],1)])]):n("li",{staticClass:"nav-item"})])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"btn nav-link text-nowrap px-3 discord-button",attrs:{href:"https://discord.com/api/oauth2/authorize?client_id=886771334187728896&redirect_uri=https%3A%2F%2Fhera-tasks.herokuapp.com%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20guilds",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[r("img",{staticClass:"discord-icon mr-2 mt-1",attrs:{src:n("cc99"),alt:"User Avatar"}}),r("span",{staticClass:"d-none d-md-inline-block align-middle discord-login-text"},[t._v("Login")])])}],c={name:"TopnavComponent",components:{},props:{links:Array},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},handleDarkmode:function(){this.$store.dispatch("toggleDarkmode")},navLinkClass:function(t){return{"nav-link":!0,disabled:t.disabled?"disabled":"","nav-link-dark":!!this.$store.getters.getDarkMode}}},data:function(){return{userInfo:{}}},mounted:function(){},created:function(){},computed:{navClass:function(){return{navbar:!0,"navbar-expand-lg":!0,"navbar-light":!this.$store.getters.getDarkMode,"bg-light":!this.$store.getters.getDarkMode,"navbar-dark":!!this.$store.getters.getDarkMode,"bg-dark":!!this.$store.getters.getDarkMode}},brandClass:function(){return{"navbar-brand":!0,"navbar-brand-dark":!!this.$store.getters.getDarkMode}},usernameClass:function(){return{"d-none":!0,"d-md-inline-block":!0,"user-name-dark":!!this.$store.getters.getDarkMode}},heraLogo:function(){var t;return t=this.$store.getters.getDarkMode?n("d1a0"):n("a1d5"),t}},watch:{}},u=c,l=(n("8cde"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,"678e9baa",null),p=d.exports,f={name:"App",components:{TopnavComponent:p},data:function(){return{links:[{label:"Home",url:"/",icon:"home"},{label:"Logistics Requests",url:"/logistics-requests",icon:"tasks"},{label:"Factory Calculator",url:"/calculator",icon:"calculator",disabled:!0}]}},create:function(){},mounted:function(){},computed:{containerClass:function(){return{"bg-light-grey":!!this.$store.getters.getDarkMode}}}},h=f,m=(n("034f"),Object(l["a"])(h,a,s,!1,null,null,null)),g=m.exports,v=(n("ac6a"),n("456d"),n("2f62")),b=n("0e44");r["default"].use(v["a"]);var k=new v["a"].Store({state:{darkmode:!1,error:"",auth:"",loggedIn:!1,user:{isLeadership:!1,info:{},guilds:{}},items:{list:[]},regions:{list:[]},events:{list:[],single:{}}},mutations:{setAuthToken:function(t,e){t.auth=e},setUserData:function(t,e){e.message?(t.error="You must be a member of 1st RL to use this app. Speak to an officer if you are a member.",t.loggedIn=!1,t.user={}):(t.error="",t.loggedIn=!0,t.user=e)},setItemsList:function(t,e){t.items.list=e},setEventsList:function(t,e){t.events.list=e},setEvent:function(t,e){t.events.single=e},setRegionsList:function(t,e){t.regions.list=e},increment:function(t){t.count++},setLeadership:function(t,e){t.user.isLeadership=e},logout:function(t){t.loggedIn=!1,t.auth="",t.user={}},error:function(t,e){t.error=e.message},toggleDarkmode:function(t){t.darkmode=!t.darkmode}},actions:{auth:function(t,e){var n=t.commit;n("setAuthToken",e)},login:function(t,e){var n=t.commit;n("setUserData",e)},logout:function(t){var e=t.commit;e("logout")},setLeadership:function(t,e){var n=t.commit;n("setLeadership",e)},setItemsList:function(t,e){var n=t.commit;n("setItemsList",e)},setRegionsList:function(t,e){var n=t.commit;n("setRegionsList",e)},setEventsList:function(t,e){var n=t.commit;n("setEventsList",e)},setEvent:function(t,e){var n=t.commit;n("setEvent",e)},error:function(t,e){var n=t.commit;n("error",e)},toggleDarkmode:function(t){var e=t.commit;e("toggleDarkmode")}},getters:{isLoggedIn:function(t){return t.loggedIn},isLeadership:function(t){return t.user.isLeadership},getAuth:function(t){return t.auth},getUsername:function(t){return 0!==Object.keys(t.user).length?t.user.info.username:null},getUserAvatar:function(t){return"https://cdn.discordapp.com/avatars/".concat(t.user.info.id,"/").concat(t.user.info.avatar,".png")},getItemsList:function(t){return t.items.list},getEventsList:function(t){return t.events.list},getEventInfo:function(t){return t.events.single},getRegionsList:function(t){return t.regions.list},getError:function(t){return t.error},getUserRoles:function(t){return t.user.roles},getDarkMode:function(t){return t.darkmode}},plugins:[Object(b["a"])()]}),C=n("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",[this.$store.getters.getError?r("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(this.$store.getters.getError))]):t._e(),r("b-jumbotron",{staticClass:"home-jumbotron",attrs:{"bg-variant":"info","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Hera")]},proxy:!0},{key:"lead",fn:function(){return[r("img",{staticStyle:{"max-width":"150px"},attrs:{src:n("d1a0"),alt:"logo"}}),r("div",{staticClass:"quote"},[r("p",[t._v(" “Leaders win through logistics. Vision, sure. Strategy, yes. But when you go to war, you need to have both toilet paper and bullets at the right place at the right time. In other words, you must win through superior logistics.” ")]),r("h2",{staticClass:"quote-person"},[t._v("- Tom Peters")]),r("h6",{staticClass:"text-muted"},[t._v(" (Rule #3: Leadership Is Confusing As Hell, Fast Company, March 2001) ")])])]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("p",{staticClass:"pt-4"},[t._v(" For Foxhole version 0.45.10.4 "),r("br"),t._v(" Created by Hartley and Critinator "),r("br"),t._v(" Last updated: 9/11/2021 ")])])],1)])},w=[],L=(n("6762"),n("96cf"),n("1da1")),_=n("d4ec"),x=n("bee2"),$=n("bc3a"),E=n.n($),j=function(){function t(){Object(_["a"])(this,t)}return Object(x["a"])(t,null,[{key:"getUserInfo",value:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{authorization:e}},t.next=4,E.a.get("https://hera-tasks.herokuapp.com/api/discord/user/",n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{authorization:e}},t.next=4,E.a.get("https://hera-tasks.herokuapp.com/api/discord/user/logout",n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),O=j,D={name:"home",components:{},methods:{getUserInfo:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.getUserInfo(this.$route.query.d);case 2:e=t.sent,this.$store.dispatch("auth",this.$route.query.d),this.$store.dispatch("login",e),this.setLeadership(e);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setLeadership:function(t){var e=this,n=["Hermes Company Leadership","Ares Company Leadership","Hades Company Leadership","Hermes Company Command","Ares Company Command","Hades Company Command","Regiment Command"];t.roles.forEach((function(t){n.includes(t)&&e.$store.dispatch("setLeadership",!0)}))}},mounted:function(){},created:function(){this.$route.query.d&&this.getUserInfo()}},I=D,A=(n("fb7f"),Object(l["a"])(I,y,w,!1,null,"1c08da58",null)),M=A.exports;r["default"].use(C["a"]);var S=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/logistics-requests",name:"Logistic Requests",component:function(){return Promise.all([n.e("chunk-e046e920"),n.e("chunk-8a5b3a9c")]).then(n.bind(null,"64f5"))}},{path:"/logistics-requests/new",name:"New Logistics Request",component:function(){return Promise.all([n.e("chunk-e046e920"),n.e("chunk-77602441")]).then(n.bind(null,"eff1"))}},{path:"/events",name:"Events",component:function(){return n.e("chunk-a5b02640").then(n.bind(null,"aa9c"))}},{path:"/events/single",name:"Events",component:function(){return n.e("chunk-583a6faf").then(n.bind(null,"bec6"))}}]}),R=n("1e18"),T=(n("f9e3"),n("9c88"),n("2dd8"),n("8e27")),P=n("5132"),U=n.n(P),q=n("ecee"),H=n("c074"),F=n("ad3d"),N=n("5547");n("2223");r["default"].use(new U.a({debug:!0,connection:T("https://hera-tasks.herokuapp.com/")})),r["default"].use(R["a"]),r["default"].use(N["a"]),r["default"].config.productionTip=!1,q["c"].add(H["i"]),q["c"].add(H["e"]),q["c"].add(H["f"]),q["c"].add(H["c"]),q["c"].add(H["a"]),q["c"].add(H["j"]),q["c"].add(H["g"]),q["c"].add(H["b"]),q["c"].add(H["d"]),q["c"].add(H["h"]),r["default"].component("font-awesome-icon",F["a"]),new r["default"]({router:S,store:k,render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){},"8cde":function(t,e,n){"use strict";n("dc21")},"9c88":function(t,e,n){},a1d5:function(t,e,n){t.exports=n.p+"img/heralogo.22d47546.png"},cc99:function(t,e,n){t.exports=n.p+"img/discord-logo-white.9bfc7946.png"},d1a0:function(t,e,n){t.exports=n.p+"img/heralogo-light.ded5944b.png"},d31d:function(t,e,n){},dc21:function(t,e,n){},fb7f:function(t,e,n){"use strict";n("d31d")}});
//# sourceMappingURL=app.c0f47d6d.js.map