(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecb9a0ec"],{"20d6":function(t,e,s){"use strict";var a=s("5ca1"),i=s("0a49")(6),n="findIndex",r=!0;n in[]&&Array(1)[n]((function(){r=!1})),a(a.P+a.F*r,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(n)},"2cfc":function(t,e,s){t.exports=s.p+"img/Refined_Materials-largedark.c03c29de.png"},"53f9":function(t,e,s){"use strict";s("bec6")},5501:function(t,e,s){"use strict";s("5cbd")},"5cbd":function(t,e,s){},"5dbc":function(t,e,s){var a=s("d3f4"),i=s("8b97").set;t.exports=function(t,e,s){var n,r=e.constructor;return r!==s&&"function"==typeof r&&(n=r.prototype)!==s.prototype&&a(n)&&i&&i(t,n),t}},"64f5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"LogisticsRequests pt-1 pl-4 pr-4 pb-4"},[s("HeaderComponent",{attrs:{label:"Logistics Requests"}}),s("TaskTableComponent")],1)},i=[],n=(s("96cf"),s("1da1")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-header row no-gutters py-4"},[s("div",{staticClass:"col-12 col-sm-4 text-center text-sm-left mb-0"},[s("span",{staticClass:"text-uppercase page-subtitle"},[t._v(t._s(t.card?"Request #":"Dashboard"))]),s("h3",{staticClass:"page-title"},[t._v(" "+t._s(t.card?"1STRL-"+t.requestId:this.pageTitle)+" ")])])])},c=[],o=(s("c5f6"),{name:"HeaderComponent",components:{},props:{card:Boolean,requestId:Number,label:String},data:function(){return{pageTitle:""}},mounted:function(){if(""!==this.label)this.pageTitle=this.label;else switch(window.location.pathname){case"/":this.pageTitle="Home";break;case"/logistics-requests":this.pageTitle="Logistics Requests";break;case"/calculator":this.pageTitle="Logistics Calculator";break;case"/artillery-map":this.pageTitle="Artillery Map";break;default:this.pageTitle="Add a new page title"}},created:function(){},computed:{},methods:{},watch:{}}),l=o,u=(s("53f9"),s("2877")),d=Object(u["a"])(l,r,c,!1,null,"12c8a59f",null),m=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-tables-component"},[this.$store.getters.isLoggedIn?s("div",{staticClass:"text-left mb-3"},[s("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:this.createRequest}},[t._v(" Create Request ")])],1):t._e(),s("CounterSectionComponent",{attrs:{counters:this.counters}}),s("div",{staticClass:"div"},t._l(t.changeAlerts,(function(e,a){return s("b-alert",{key:e.id,attrs:{item:e,index:a,show:e.show,dismissible:"",fade:"",variant:"primary-new"}},[s("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:"tasks"}}),t._v(" "+t._s(e.message)+" ")],1)})),1),s("div",{staticClass:"task-pills pt-2"},[s("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[s("b-tab",{staticClass:"request-table-selector",attrs:{title:"Pending Requests",active:""}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Pending"),fields:t.pendingItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item,taskId:t.taskId}})]}}])})],1),s("b-tab",{attrs:{title:"In-Progress Requests"}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Accepted"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item}})]}}])})],1),s("b-tab",{attrs:{title:"Completed Requests"}},[s("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Completed"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[s("TaskComponent",{attrs:{task:t.item}})]}}])})],1)],1)],1)],1)},f=[],g=(s("ac6a"),s("20d6"),s("d2a4")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-",attrs:{id:""}},[a("div",{staticClass:"card card-small card-post mb-4"},[a("div",{staticClass:"card-body text-left"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card-header border-bottom d-flex mb-3"},[a("div",{staticClass:"card-post__author d-flex"},[a("div",{staticClass:"d-flex flex-column justify-content-center ml-3"},[a("span",{staticClass:"card-post__author-name"},[t._v("Requested By:")]),a("span",{staticClass:"card-post__author-name"},[t._v(t._s(this.task.requestedBy))]),a("small",{staticClass:"text-muted"},[t._v(t._s(this.task.requestedAt))])])]),"Completed"!==t.task.status?a("div",{staticClass:"my-auto ml-auto"},[a("div",[a("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Request Status",variant:"primary"}},[a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),a("b-dropdown",{staticClass:"m-1 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Logi Status",variant:"primary"}},[a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Cooking")}}},[t._v('Change to "Cooking"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Shipping")}}},[t._v('Change to "Shipping"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Delivering")}}},[t._v('Change to "Delivering"')]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),a("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Assignment",variant:"primary"}},[a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.unassignSelf(t.task)}}},[t._v("Unassign Self")]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.assignSelf(t.task)}}},[t._v("Assign Self")])],1),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-modal",modifiers:{"delete-modal":!0}}],staticClass:"ml-2",attrs:{variant:"outline-danger"}},[t._v("Delete Request")]),a("div",[a("b-modal",{attrs:{centered:"",id:"delete-modal",title:"Delete Task"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-left",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("delete-modal")}}},[t._v(" Cancel ")]),a("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(e){return t.deleteTask(t.task)}}},[t._v(" Delete ")])],1)]},proxy:!0}],null,!1,2401240998)},[a("p",{staticClass:"my-4"},[t._v(" Are you sure you want to delete the task? ")])])],1)],1)]):t._e()]),!0===t.task.enemyActivity?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-alert",{staticClass:"danger-task-enemy text-center",attrs:{show:""}},[a("font-awesome-icon",{staticClass:"fa-icon mr-5",attrs:{icon:"exclamation-triangle"}}),a("span",{staticClass:"font-weight-bold"},[t._v("Warning!")]),t._v(" There is enemy activity at the delivery location! "),a("font-awesome-icon",{staticClass:"fa-icon ml-5",attrs:{icon:"exclamation-triangle"}})],1)],1)]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("HeaderComponent",{attrs:{card:!0,requestId:t.task.taskId}}),a("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"45%"}},[t._v(" Request Status: "),a("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.status)}},[t._v(" "+t._s(t.task.status))])],1),a("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"30%"}},[t._v(" Logi Status: "),a("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.status)}},[t._v(" "+t._s(t.task.logiStatus))])],1),a("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"15%"}},[t._v(" Precedence: "),a("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkPrecedence(t.task.precedence)}},[t._v(" "+t._s(t.task.precedence))])],1),a("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"0"}},[t._v(" Member(s) Assigned: "),a("span",{staticClass:"assigned-members"},[t._v(" "+t._s(t.task.assignedTo.length>0?t.task.assignedTo.join(" & "):"None")+" ")])])],1),a("div",{staticClass:"col-6 text-center"},[a("h5",{staticClass:"card-title"},[t._v("Region: "+t._s(t.task.location))]),a("CoolLightBox",{attrs:{items:t.task_image,index:t.index,useZoomBar:!0},on:{close:function(e){t.index=null}}}),a("div",{staticClass:"images-wrapper"},t._l(t.task_image,(function(e,s){return a("img",{key:s,staticClass:"image",attrs:{src:e,height:270},on:{click:function(e){t.index=s}}})})),0)],1)])]),"Pending"===t.task.logiStatus?a("div",{staticClass:"div my-3"}):t._e(),"Pending"!==t.task.logiStatus?a("div",{staticClass:"progress progress-sm my-3 mt-4"},[a("div",{class:t.checkProgress(t.task.logiStatus),style:t.status_value_style,attrs:{id:"progress-bar-example-1",role:"progressbar","aria-valuenow":t.status_value,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(this.status_value)+"% Complete ")])]):t._e(),a("b-table",{attrs:{striped:"",hover:"","sticky-header":"450px",items:t.task.items},scopedSlots:t._u([{key:"cell(item)",fn:function(e){return[a("img",{staticClass:"image mr-2",attrs:{src:t.getIcon(e.value),height:30}}),t._v(t._s(e.value)+" ")]}}])}),a("div",{staticClass:"d-flex flex-row align-content-center"},[this.bmats>0?a("div",{staticClass:"col text-center"},[a("b-card",{attrs:{title:"Basic Materials Required","header-tag":"header","footer-tag":"footer"}},[a("img",{staticClass:"image mr-2",attrs:{src:s("ae31"),height:50}}),a("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.bmats)+" units / "+t._s(this.bmats/100)+" crate(s)")])],1)],1):t._e(),this.emats>0?a("div",{staticClass:"col text-center"},[a("b-card",{attrs:{title:"Explosive Materials Required"}},[a("img",{staticClass:"image mr-2",attrs:{src:s("a8da"),height:50}}),a("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.emats)+" units / "+t._s(this.emats/20)+" crate(s)")])],1)],1):t._e(),this.hmats>0?a("div",{staticClass:"col text-center"},[a("b-card",{attrs:{title:"Heavy Explosive Materials Required"}},[a("img",{staticClass:"image mr-2",attrs:{src:s("864c"),height:50}}),a("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.hmats)+" units / "+t._s(this.hmats/20)+" crate(s)")])],1)],1):t._e(),this.rmats>0?a("div",{staticClass:"col text-center"},[a("b-card",{attrs:{title:"Refined Materials Required"}},[a("img",{staticClass:"image mr-2",attrs:{src:s("2cfc"),height:50}}),a("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.rmats)+" units / "+t._s(this.rmats/20)+" crate(s)")])],1)],1):t._e()])],1)])])},v=[],b=(s("7f7f"),s("7514"),s("5547")),k=s("b00c"),C=k.taskStatus,_=k.logiStatus,A=k.precedence,y={name:"TaskComponent",components:{HeaderComponent:m,CoolLightBox:b["a"]},data:function(){return{bmats:0,hmats:0,emats:0,rmats:0,delete_modal:!1,status_value:0,status_value_style:"width: 0%",task_image:[s("7ddf")],index:null}},created:function(){var t=this;switch(this.task.items.forEach((function(e){var s=t.$store.getters.getItemsList.find((function(t){return t.name===e.item}));t.bmats=t.bmats+s.bmatCost*e.quantity,t.emats=t.emats+s.ematCost*e.quantity,t.hmats=t.hmats+s.hmatCost*e.quantity,t.rmats=t.rmats+s.rmatCost*e.quantity})),this.task.logiStatus){case _.PENDING:this.status_value=0,this.status_value_style="width: 0%";break;case _.ACCEPTED:this.status_value=25,this.status_value_style="width: 25%";break;case _.COOKING:this.status_value=50,this.status_value_style="width: 50%";break;case _.SHIPPING:this.status_value=75,this.status_value_style="width: 75%";break;case _.DELIVERING:this.status_value=75,this.status_value_style="width: 75%";break;case _.COMPLETED:this.status_value=100,this.status_value_style="width: 100%";break;default:this.status_value=0,this.status_value_style="width: 0%"}},methods:{getIcon:function(t){var e=this.$store.getters.getItemsList.find((function(e){return e.name===t})),a="";try{a=s("f746")("./".concat(e.icon,"-dark.png"))}catch(i){return}return a},findIcon:function(t){var e=this.$store.getters.getItemsList.find((function(e){return e.name+"-dark"===t}));return!!e},checkVariant:function(t){var e="";switch(t){case C.PENDING:e="warning";break;case C.COMPLETED:e="success";break;case C.ACCEPTED:e="primary";break;default:break}return e},checkProgress:function(t){var e="progress-bar progress-bar-striped progress-bar-animated ";switch(t){case t.PENDING:e="".concat(e," bg-warning");break;case t.COMPLETED:e="progress-bar progress-bar-striped bg-success";break;case t.ACCEPTED:e="".concat(e," bg-warning");break;case t.COOKING:e="".concat(e," bg-warning");break;case t.DELIVERING:e="".concat(e," bg-primary");break;default:break}return e},checkPrecedence:function(t){var e="";switch(t){case A.LOW:e="primary";break;case A.MEDIUM:e="warning";break;case A.HIGH:e="danger";break;default:break}return e},updateStatus:function(t,e){t.status=e,g["a"].updateTask(t)},deleteTask:function(t){g["a"].deleteTask(t._id)},updateLogiStatus:function(t,e){t.logiStatus=e,g["a"].updateTask(t)},assignSelf:function(t){t.assignedTo.push(this.$store.getters.getUsername),g["a"].updateTask(t)},unassignSelf:function(t){var e=this;t.assignedTo=t.assignedTo.filter((function(t){return t!==e.$store.getters.getUsername})),g["a"].updateTask(t)}},props:{task:Object}},w=y,x=(s("e750"),Object(u["a"])(w,h,v,!1,null,"4a37e020",null)),I=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 d-flex bg-warning"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Pending Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalPending)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-primary d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Open Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalOpen)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-success d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Completed Requests")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalCompleted)+" ")])])])])])]),s("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[s("div",{staticClass:"stats-small stats-small--1 card card-small"},[s("div",{staticClass:"card-body p-0 bg-info d-flex"},[s("div",{staticClass:"d-flex flex-column m-auto"},[s("div",{staticClass:"stats-small__data text-center"},[s("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Items/Crates Delivered")]),s("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalDelivered)+" ")])])])])])])])},E=[],T={name:"CounterSectionComponent",data:function(){return{error:""}},props:{title:String,counters:Object}},D=T,q=(s("5501"),Object(u["a"])(D,S,E,!1,null,"977a4d36",null)),N=q.exports,P=s("b00c"),R=P.taskStatus,L={name:"TaskTableComponent",components:{TaskComponent:I,CounterSectionComponent:N},mounted:function(){var t=this;this.sockets.subscribe("task-change",(function(e){switch(e.task.requestedAt=e.task.requestedAt?"".concat(new Date(e.task.requestedAt).toLocaleDateString()," ").concat(new Date(e.task.requestedAt).toLocaleTimeString()):e.task.requestedAt,e.task.completedAt=e.task.completedAt?"".concat(new Date(e.task.completedAt).toLocaleDateString()," ").concat(new Date(e.task.completedAt).toLocaleTimeString()):null,e.change){case"POST":t.tasks.push(e.task),t.calculateCounters(),t.addChangeAlert({message:"A new request has been added!",id:e.task.taskId,show:!0});break;case"DELETE":t.tasks=t.tasks.filter((function(t){return t._id!==e.task._id})),t.calculateCounters(),t.addChangeAlert({message:"Request: 1STRL-".concat(e.task.taskId," has been deleted!"),id:e.task.taskId,show:!0});break;case"PATCH":for(var s=t.tasks.findIndex((function(t){return t._id===e.task._id})),a=Object.getOwnPropertyNames(e.task),i=0;i<a.length;i++){var n=a[i];e.task[n]!==t.tasks[s].propName&&(t.tasks[s].propName=e.task[n])}t.calculateCounters()}}))},ready:function(){},data:function(){return{counters:{totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0},tasks:[],error:"",pendingItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"enemyActivity",label:"Enemy Activity"},"details"],acceptedItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"logiStatus",label:"Logi Status"},{key:"enemyActivity",label:"Enemy Activity"},"details"],changeAlerts:[]}},methods:{addChangeAlert:function(t){var e=this,s=t.id;this.changeAlerts.push(t),setTimeout((function(){e.changeAlerts=e.changeAlerts.map((function(t){return t.id!==s}))}),3e4)},getAllTasks:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].getTasks();case 2:this.tasks=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTasks:function(t){var e=[];return this.tasks.forEach((function(s){s.status===t&&e.push(s)})),e},calculateCounters:function(){var t=this;this.counters={totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0};var e=this.tasks.filter((function(t){return t.status===R.PENDING}));this.counters.totalPending=e.length;var s=this.tasks.filter((function(t){return t.status===R.ACCEPTED}));this.counters.totalOpen=s.length;var a=this.tasks.filter((function(t){return t.status===R.COMPLETED}));this.counters.totalCompleted=a.length,a.forEach((function(e){e.items.forEach((function(e){t.counters.totalDelivered+=new Number(e.quantity)}))}))},createRequest:function(){this.$router.push("/logistics-requests/new")}},created:function(){var t=this;this.getAllTasks().then((function(){t.calculateCounters()}))},props:{}},O=L,M=(s("8cfa"),Object(u["a"])(O,p,f,!1,null,"6bc7db3a",null)),G=M.exports,U={name:"LogisticsRequests",components:{HeaderComponent:m,TaskTableComponent:G},data:function(){return{craftedItems:[]}},methods:{getAllItems:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].getItems().then((function(t){e.$store.dispatch("setItemsList",t)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getAllRegions:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].getRegions().then((function(t){e.$store.dispatch("setRegionsList",t)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.$store.getters.isLoggedIn||(this.$store.dispatch("error",{message:"You must be logged in to review logistic requests."}),this.$router.push("/")),this.getAllItems(),this.getAllRegions()}},V=U,B=Object(u["a"])(V,a,i,!1,null,null,null);e["default"]=B.exports},"7ddf":function(t,e,s){t.exports=s.p+"img/MapFarranacCoastHex.557fc9c6.png"},"864c":function(t,e){t.exports="data:image/png;base64,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"},"8b97":function(t,e,s){var a=s("d3f4"),i=s("cb7c"),n=function(t,e){if(i(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,s){return n(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:n}},"8cfa":function(t,e,s){"use strict";s("eeaa")},9588:function(t,e,s){},a8da:function(t,e,s){t.exports=s.p+"img/Explosive_Materials-largedark.be63db1f.png"},aa77:function(t,e,s){var a=s("5ca1"),i=s("be13"),n=s("79e5"),r=s("fdef"),c="["+r+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,s){var i={},c=n((function(){return!!r[t]()||o[t]()!=o})),l=i[t]=c?e(m):r[t];s&&(i[s]=l),a(a.P+a.F*c,"String",i)},m=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ae31:function(t,e,s){t.exports=s.p+"img/Basic_Materials-largedark.df25112f.png"},b00c:function(t,e){var s={PENDING:"Pending",COMPLETED:"Completed",ACCEPTED:"Accepted"},a={PENDING:"Pending",ACCEPTED:"Accepted",COOKING:"Cooking",SHIPPING:"Shipping",DELIVERING:"Delivering",COMPLETED:"Completed"},i={LOW:"Low",MEDIUM:"Medium",HIGH:"High"};t.exports={taskStatus:s,logiStatus:a,precedence:i}},bec6:function(t,e,s){},c5f6:function(t,e,s){"use strict";var a=s("7726"),i=s("69a8"),n=s("2d95"),r=s("5dbc"),c=s("6a99"),o=s("79e5"),l=s("9093").f,u=s("11e9").f,d=s("86cc").f,m=s("aa77").trim,p="Number",f=a[p],g=f,h=f.prototype,v=n(s("2aeb")(h))==p,b="trim"in String.prototype,k=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():m(e,3);var s,a,i,n=e.charCodeAt(0);if(43===n||45===n){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var r,o=e.slice(2),l=0,u=o.length;l<u;l++)if(r=o.charCodeAt(l),r<48||r>i)return NaN;return parseInt(o,a)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof f&&(v?o((function(){h.valueOf.call(s)})):n(s)!=p)?r(new g(k(e)),s,f):k(e)};for(var C,_=s("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;_.length>A;A++)i(g,C=_[A])&&!i(f,C)&&d(f,C,u(g,C));f.prototype=h,h.constructor=f,s("2aba")(a,p,f)}},e750:function(t,e,s){"use strict";s("9588")},eeaa:function(t,e,s){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-ecb9a0ec.30ee165d.js.map