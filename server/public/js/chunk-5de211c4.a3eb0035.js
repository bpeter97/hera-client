(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5de211c4"],{2621:function(t,e){e.f=Object.getOwnPropertySymbols},"4f53":function(t,e,s){},5501:function(t,e,s){"use strict";s("5cbd")},"5abe":function(t,e,s){"use strict";s("eb6b")},"5cbd":function(t,e,s){},"64f5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"LogisticsRequests"},[s("HeaderComponent"),s("TaskTableComponent")],1)},n=[],i=s("2d6d"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-tables-component"},[t.error?s("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),s("CounterSectionComponent",{attrs:{counters:this.counters}}),s("AlertComponent"),s("div",{staticClass:"div"},t._l(t.changeAlerts,(function(e,a){return s("b-alert",{key:e.id,attrs:{item:e,index:a,show:e.show,dismissible:"",fade:"",variant:"primary-new"}},[s("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:"tasks"}}),t._v(" "+t._s(e.message)+" ")],1)})),1),s("div",{staticClass:"task-pills pt-2"},[s("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[s("b-tab",{staticClass:"request-table-selector",attrs:{title:"Pending Requests",active:""}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Pending"),fields:t.pendingItemFields},scopedSlots:t._u([{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item,taskId:t.taskId}})]}}])})],1),s("b-tab",{attrs:{title:"In-Progress Requests"}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Accepted"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item}})]}}])})],1),s("b-tab",{attrs:{title:"Completed Requests"}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Completed"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item}})]}}])})],1)],1)],1)],1)},o=[],c=(s("c5f6"),s("ac6a"),s("96cf"),s("1da1"));s("8e6e"),s("456d");function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u=s("d4ec"),d=s("bee2"),m=s("bc3a"),p=s.n(m);function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var g="https://hera-tasks.herokuapp.com/api/tasks/",k=function(){function t(){Object(u["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getTasks",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(g);case 3:return e=t.sent,s=e.data,t.abrupt("return",s.map((function(t){return f(f({},t),{},{requestedAt:"".concat(new Date(t.requestedAt).toLocaleDateString()," ").concat(new Date(t.requestedAt).toLocaleTimeString())})})));case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateTask",value:function(t){var e="".concat(g).concat(t._id);return p.a.patch(e,t)}},{key:"insertTask",value:function(t){return p.a.post(g,{location:t.location,precedence:t.precedence,enemyActivity:t.enemyActivity,items:t.items})}},{key:"deleteTask",value:function(t){return p.a.delete("".concat(g).concat(t))}}]),t}(),v=k,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-",attrs:{id:""}},[s("div",{staticClass:"card card-small card-post mb-4"},[s("div",{staticClass:"card-body text-left"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card-header border-bottom d-flex mb-3"},[s("div",{staticClass:"card-post__author d-flex"},[s("div",{staticClass:"d-flex flex-column justify-content-center ml-3"},[s("span",{staticClass:"card-post__author-name"},[t._v("Requested By:")]),s("span",{staticClass:"card-post__author-name"},[t._v("Critinator")]),s("small",{staticClass:"text-muted"},[t._v(t._s(this.task.requestedAt))])])]),"Completed"!==t.task.status?s("div",{staticClass:"my-auto ml-auto"},[s("div",[s("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Request Status",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),s("b-dropdown",{staticClass:"m-1 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Logi Status",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Cooking")}}},[t._v('Change to "Cooking"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Shipping")}}},[t._v('Change to "Shipping"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Delivering")}}},[t._v('Change to "Delivering"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),s("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Assignment",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.unassignSelf(t.task)}}},[t._v("Unassign Self")]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.assignSelf(t.task)}}},[t._v("Assign Self")])],1),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-modal",modifiers:{"delete-modal":!0}}],staticClass:"ml-2",attrs:{variant:"outline-danger"}},[t._v("Delete Request")]),s("div",[s("b-modal",{attrs:{centered:"",id:"delete-modal",title:"Delete Task"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("div",{staticClass:"w-100"},[s("b-button",{staticClass:"float-left",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("delete-modal")}}},[t._v(" Cancel ")]),s("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(e){return t.deleteTask(t.task)}}},[t._v(" Delete ")])],1)]},proxy:!0}],null,!1,2401240998)},[s("p",{staticClass:"my-4"},[t._v(" Are you sure you want to delete the task? ")])])],1)],1)]):t._e()]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("HeaderComponent",{attrs:{card:!0,requestId:t.task.taskId}}),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"45%"}},[t._v(" Request Status: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.status)}},[t._v(" "+t._s(t.task.status))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"30%"}},[t._v(" Logi Status: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.status)}},[t._v(" "+t._s(t.task.logiStatus))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"15%"}},[t._v(" Precedence: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkPrecedence(t.task.precedence)}},[t._v(" "+t._s(t.task.precedence))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"0"}},[t._v(" Member(s) Assigned: "),s("span",{staticClass:"assigned-members"},[t._v(" "+t._s(t.task.assignedTo.length>0?t.task.assignedTo.join(" & "):"None")+" ")])])],1),s("div",{staticClass:"col-6 text-center"},[s("h5",{staticClass:"card-title"},[t._v("Region: "+t._s(t.task.location))]),s("CoolLightBox",{attrs:{items:t.task_image,index:t.index,useZoomBar:!0},on:{close:function(e){t.index=null}}}),s("div",{staticClass:"images-wrapper"},t._l(t.task_image,(function(e,a){return s("img",{key:a,staticClass:"image",attrs:{src:e,height:270},on:{click:function(e){t.index=a}}})})),0)],1)])]),"Pending"===t.task.logiStatus?s("div",{staticClass:"div my-3"}):t._e(),"Pending"!==t.task.logiStatus?s("div",{staticClass:"progress progress-sm my-3 mt-4"},[s("div",{class:t.checkProgress(t.task.logiStatus),style:t.status_value_style,attrs:{id:"progress-bar-example-1",role:"progressbar","aria-valuenow":t.status_value,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(this.status_value)+"% Complete ")])]):t._e(),s("b-table",{attrs:{striped:"",hover:"","sticky-header":"450px",items:t.task.items}}),t._m(0)],1)])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"h5"},[t._v("Required Materials: Coming soon!")])])])}],_=s("5547"),w=s("b00c"),y=w.taskStatus,S=w.logiStatus,P=w.precedence,x={name:"TaskComponent",components:{HeaderComponent:i["a"],CoolLightBox:_["a"]},data:function(){return{delete_modal:!1,status_value:0,status_value_style:"width: 0%",task_image:[s("e935")],index:null}},created:function(){switch(this.task.logiStatus){case S.PENDING:this.status_value=0,this.status_value_style="width: 0%";break;case S.ACCEPTED:this.status_value=25,this.status_value_style="width: 25%";break;case S.COOKING:this.status_value=50,this.status_value_style="width: 50%";break;case S.SHIPPING:this.status_value=75,this.status_value_style="width: 75%";break;case S.DELIVERING:this.status_value=75,this.status_value_style="width: 75%";break;case S.COMPLETED:this.status_value=100,this.status_value_style="width: 100%";break;default:this.status_value=0,this.status_value_style="width: 0%"}},methods:{checkVariant:function(t){var e="";switch(t){case y.PENDING:e="warning";break;case y.COMPLETED:e="success";break;case y.ACCEPTED:e="primary";break;default:break}return e},checkProgress:function(t){var e="progress-bar progress-bar-striped progress-bar-animated ";switch(t){case t.PENDING:e="".concat(e," bg-warning");break;case t.COMPLETED:e="progress-bar progress-bar-striped bg-success";break;case t.ACCEPTED:e="".concat(e," bg-warning");break;case t.COOKING:e="".concat(e," bg-warning");break;case t.DELIVERING:e="".concat(e," bg-primary");break;default:break}return e},checkPrecedence:function(t){var e="";switch(t){case P.LOW:e="primary";break;case P.MEDIUM:e="warning";break;case P.HIGH:e="danger";break;default:break}return e},updateStatus:function(t,e){t.status=e,v.updateTask(t)},deleteTask:function(t){v.deleteTask(t._id)},updateLogiStatus:function(t,e){t.logiStatus=e,v.updateTask(t)},assignSelf:function(t){t.assignedTo.push(this.$store.getters.getUsername),v.updateTask(t)},unassignSelf:function(t){var e=this;t.assignedTo=t.assignedTo.filter((function(t){return t!==e.$store.getters.getUsername})),v.updateTask(t)}},props:{task:Object}},D=x,A=(s("7e62"),s("2877")),T=Object(A["a"])(D,h,C,!1,null,"21e5feb4",null),E=T.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 d-flex bg-warning"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Pending Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalPending)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-primary d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Open Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalOpen)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-success d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Completed Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalCompleted)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-info d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Items/Crates Delivered")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalDelivered)+" ")])])])])])])])},I=[],L={name:"CounterSectionComponent",data:function(){return{error:""}},props:{title:String,counters:Object}},q=L,R=(s("5501"),Object(A["a"])(q,O,I,!1,null,"977a4d36",null)),j=R.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.alerts,(function(e,a){return s("b-alert",{key:e.message,attrs:{variant:"danger-new",item:e,index:a,dismissible:"",show:""}},[s("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:"exclamation-triangle"}}),t._v(" "+t._s(e.message)+" "),s("font-awesome-icon",{staticClass:"fa-icon ml-3",attrs:{icon:"exclamation-triangle"}})],1)})),1)},G=[],H={name:"AlertComponent",components:{},props:{},data:function(){return{alerts:[{message:"Partisan APC patrolling liberation street",createdAt:new Date}]}},mounted:function(){},created:function(){},computed:{},methods:{},watch:{}},M=H,V=(s("5abe"),Object(A["a"])(M,N,G,!1,null,"0d3edee1",null)),$=V.exports,U=s("b00c"),F=U.taskStatus,B={name:"TaskTableComponent",components:{TaskComponent:E,AlertComponent:$,CounterSectionComponent:j},mounted:function(){var t=this;this.sockets.subscribe("task-change",(function(e){switch(e.task.requestedAt=e.task.requestedAt?"".concat(new Date(e.task.requestedAt).toLocaleDateString()," ").concat(new Date(e.task.requestedAt).toLocaleTimeString()):e.task.requestedAt,e.task.completedAt=e.task.completedAt?"".concat(new Date(e.task.completedAt).toLocaleDateString()," ").concat(new Date(e.task.completedAt).toLocaleTimeString()):null,e.change){case"POST":t.tasks.push(e.task),t.calculateCounters(),t.addChangeAlert({message:"A new request has been added!",id:e.task.taskId,show:!0});break;case"DELETE":t.tasks=t.tasks.filter((function(t){return t._id!==e.task._id})),t.calculateCounters(),t.addChangeAlert({message:"Request: 1STRL-".concat(e.task.taskId," has been deleted!"),id:e.task.taskId,show:!0});break;case"PATCH":t.tasks=t.tasks.map((function(t){return t._id===e.task._id?e.task:t})),t.calculateCounters(),t.addChangeAlert({message:"Request: 1STRL-".concat(e.task.taskId,"(").concat(e.task.status,") has been updated!"),id:e.task.taskId,show:!0})}}))},ready:function(){},data:function(){return{counters:{totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0},tasks:[],error:"",pendingItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"enemyActivity",label:"Enemy Activity"},"details"],acceptedItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"logiStatus",label:"Logi Status"},{key:"enemyActivity",label:"Enemy Activity"},"details"],changeAlerts:[]}},methods:{addChangeAlert:function(t){var e=this,s=t.id;this.changeAlerts.push(t),setTimeout((function(){e.changeAlerts=e.changeAlerts.map((function(t){return t.id!==s}))}),3e4)},getAllTasks:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.getTasks();case 2:this.tasks=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTasks:function(t){var e=[];return this.tasks.forEach((function(s){s.status===t&&e.push(s)})),e},calculateCounters:function(){var t=this;this.counters={totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0};var e=this.tasks.filter((function(t){return t.status===F.PENDING}));this.counters.totalPending=e.length;var s=this.tasks.filter((function(t){return t.status===F.ACCEPTED}));this.counters.totalOpen=s.length;var a=this.tasks.filter((function(t){return t.status===F.COMPLETED}));this.counters.totalCompleted=a.length,a.forEach((function(e){e.items.forEach((function(e){t.counters.totalDelivered+=new Number(e.quantity)}))}))}},created:function(){var t=this;this.getAllTasks().then((function(){t.calculateCounters()}))},props:{msg:String}},K=B,z=(s("cc9a"),Object(A["a"])(K,r,o,!1,null,"631ec9c2",null)),J=z.exports,W={name:"LogisticsRequests",components:{HeaderComponent:i["a"],TaskTableComponent:J}},Z=W,Q=Object(A["a"])(Z,a,n,!1,null,null,null);e["default"]=Q.exports},"7e62":function(t,e,s){"use strict";s("4f53")},"8e6e":function(t,e,s){var a=s("5ca1"),n=s("990b"),i=s("6821"),r=s("11e9"),o=s("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,s,a=i(t),c=r.f,l=n(a),u={},d=0;while(l.length>d)s=c(a,e=l[d++]),void 0!==s&&o(u,e,s);return u}})},"8fe3":function(t,e,s){},"990b":function(t,e,s){var a=s("9093"),n=s("2621"),i=s("cb7c"),r=s("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=a.f(i(t)),s=n.f;return s?e.concat(s(t)):e}},b00c:function(t,e){var s={PENDING:"Pending",COMPLETED:"Completed",ACCEPTED:"Accepted"},a={PENDING:"Pending",ACCEPTED:"Accepted",COOKING:"Cooking",SHIPPING:"Shipping",DELIVERING:"Delivering",COMPLETED:"Completed"},n={LOW:"Low",MEDIUM:"Medium",HIGH:"High"};t.exports={taskStatus:s,logiStatus:a,precedence:n}},cc9a:function(t,e,s){"use strict";s("8fe3")},e935:function(t,e,s){t.exports=s.p+"img/Map_Farranac_Coast.b98db249.png"},eb6b:function(t,e,s){},f1ae:function(t,e,s){"use strict";var a=s("86cc"),n=s("4630");t.exports=function(t,e,s){e in t?a.f(t,e,n(0,s)):t[e]=s}}}]);
//# sourceMappingURL=chunk-5de211c4.a3eb0035.js.map