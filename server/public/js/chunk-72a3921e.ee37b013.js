(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72a3921e"],{"1ae7":function(t,e,a){t.exports=a.p+"img/MapMarbanHollow.babad93b.png"},"1d44":function(t,e,a){t.exports=a.p+"img/MapHeartlandsHex.c5489d5f.png"},"1e188":function(t,e,a){t.exports=a.p+"img/MapNevishLineHex.b54305a2.png"},"1e38":function(t,e,a){t.exports=a.p+"img/MapCallahansPassageHex.8afc27a7.png"},"1e4d":function(t,e,a){t.exports=a.p+"img/MapWeatheredExpanseHex.f8233b57.png"},"20d6":function(t,e,a){"use strict";var s=a("5ca1"),n=a("0a49")(6),i="findIndex",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),s(s.P+s.F*r,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"2cfc":function(t,e,a){t.exports=a.p+"img/Refined_Materials-largedark.c03c29de.png"},"2f7a":function(t,e,a){t.exports=a.p+"img/MapGreatMarchHex.4bc5a567.png"},"33ee":function(t,e,a){t.exports=a.p+"img/MapMooringCountyHex.db1afc12.png"},3437:function(t,e,a){t.exports=a.p+"img/MapAshFieldsHex.918f4b06.png"},3493:function(t,e,a){t.exports=a.p+"img/MapAllodsBightHex.cbae6eeb.png"},"3a97":function(t,e,a){t.exports=a.p+"img/MapLochMorHex.f5101b93.png"},4078:function(t,e,a){t.exports=a.p+"img/MapAcrithiaHex.d563376d.png"},"40ab":function(t,e,a){t.exports=a.p+"img/MapDrownedValeHex.41b27dd2.png"},"49f8":function(t,e,a){t.exports=a.p+"img/MapClansheadValleyHex.cb80ac0c.png"},"4cce":function(t,e,a){},"53f9":function(t,e,a){"use strict";a("bec6")},5501:function(t,e,a){"use strict";a("5cbd")},"58a2":function(t,e,a){"use strict";a("c3e9")},"597b":function(t,e,a){t.exports=a.p+"img/MapSpeakingWoodsHex.80d96f54.png"},"5cbd":function(t,e,a){},"5dbc":function(t,e,a){var s=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var i,r=e.constructor;return r!==a&&"function"==typeof r&&(i=r.prototype)!==a.prototype&&s(i)&&n&&n(t,i),t}},6214:function(t,e,a){t.exports=a.p+"img/MapRedRiverHex.a42ac824.png"},"64f5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LogisticsRequests pt-1 pl-4 pr-4 pb-4"},[a("HeaderComponent",{attrs:{label:"Logistics Requests"}}),a("TaskTableComponent")],1)},n=[],i=(a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header row no-gutters py-4"},[a("div",{staticClass:"col-12 col-sm-4 text-center text-sm-left mb-0"},[a("span",{staticClass:"text-uppercase page-subtitle"},[t._v(t._s(t.card?"Request #":"Dashboard"))]),a("h3",{staticClass:"page-title"},[t._v(" "+t._s(t.card?"1STRL-"+t.requestId:this.pageTitle)+" ")])])])},o=[],c=(a("c5f6"),{name:"HeaderComponent",components:{},props:{card:Boolean,requestId:Number,label:String},data:function(){return{pageTitle:""}},mounted:function(){if(""!==this.label)this.pageTitle=this.label;else switch(window.location.pathname){case"/":this.pageTitle="Home";break;case"/logistics-requests":this.pageTitle="Logistics Requests";break;case"/calculator":this.pageTitle="Logistics Calculator";break;case"/artillery-map":this.pageTitle="Artillery Map";break;default:this.pageTitle="Add a new page title"}},created:function(){},computed:{},methods:{},watch:{}}),l=c,d=(a("53f9"),a("2877")),u=Object(d["a"])(l,r,o,!1,null,"12c8a59f",null),p=u.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-tables-component"},[t.checkRecruit(this.$store.getters.getUserRoles)?a("div",{staticClass:"text-left mb-3"},[a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:this.createRequest}},[t._v(" Create Request ")])],1):t._e(),a("CounterSectionComponent",{attrs:{counters:this.counters}}),a("div",{staticClass:"div"},t._l(t.changeAlerts,(function(e,s){return a("b-alert",{key:e.id,attrs:{item:e,index:s,show:e.show,dismissible:"",fade:"",variant:"primary-new"}},[a("font-awesome-icon",{staticClass:"fa-icon mr-3",attrs:{icon:"tasks"}}),t._v(" "+t._s(e.message)+" ")],1)})),1),a("div",{staticClass:"task-pills pt-2"},[a("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[a("b-tab",{staticClass:"request-table-selector",attrs:{title:"Pending Requests",active:""}},[a("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Pending"),fields:t.pendingItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[a("TaskComponent",{attrs:{task:t.item,taskId:t.taskId}})]}}])})],1),a("b-tab",{attrs:{title:"In-Progress Requests"}},[a("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Accepted"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[a("TaskComponent",{attrs:{task:t.item}})]}}])})],1),a("b-tab",{attrs:{title:"Completed Requests"}},[a("b-table",{attrs:{striped:"",hover:"",items:t.getTasks("Completed"),fields:t.acceptedItemFields},scopedSlots:t._u([{key:"cell(enemyActivity)",fn:function(e){return[t._v(" "+t._s(e.value?"Yes":"No")+" ")]}},{key:"cell(details)",fn:function(e){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:e.toggleDetails}},[t._v(" "+t._s(e.detailsShowing?"Hide":"View")+" Request ")])]}},{key:"row-details",fn:function(t){return[a("TaskComponent",{attrs:{task:t.item}})]}}])})],1)],1)],1)],1)},m=[],f=(a("ac6a"),a("20d6"),a("d2a4")),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-",attrs:{id:""}},[s("div",{staticClass:"card card-small card-post mb-4"},[s("div",{staticClass:"card-body text-left"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card-header border-bottom d-flex mb-3"},[s("div",{staticClass:"card-post__author d-flex"},[s("div",{staticClass:"d-flex flex-column justify-content-center ml-3"},[s("span",{staticClass:"card-post__author-name"},[t._v("Requested By:")]),s("span",{staticClass:"card-post__author-name"},[t._v(t._s(this.task.requestedBy))]),s("small",{staticClass:"text-muted"},[t._v(t._s(this.task.requestedAt))])])]),"Completed"!==t.task.status?s("div",{staticClass:"my-auto ml-auto"},[s("div",[s("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Request Status",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),s("b-dropdown",{staticClass:"m-1 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Logi Status",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Pending")}}},[t._v('Change to "Pending"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Accepted")}}},[t._v('Change to "Accepted"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Cooking")}}},[t._v('Change to "Cooking"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Shipping")}}},[t._v('Change to "Shipping"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Delivering")}}},[t._v('Change to "Delivering"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Delayed")}}},[t._v('Change to "Delayed"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateLogiStatus(t.task,"Completed")}}},[t._v('Change to "Completed"')])],1),s("b-dropdown",{staticClass:"m-1 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Update Precedence",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateTaskPrecedence(t.task,"Low")}}},[t._v('Change to "Low"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateTaskPrecedence(t.task,"Medium")}}},[t._v('Change to "Medium"')]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateTaskPrecedence(t.task,"High")}}},[t._v('Change to "High"')])],1),s("b-dropdown",{staticClass:"m-2 task-dropdown",attrs:{id:"dropdown-right",right:"",text:"Assignment",variant:"primary"}},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.assignSelf(t.task)}}},[t._v("Assign Self")]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.unassignSelf(t.task)}}},[t._v("Unassign Self")])],1),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-modal",modifiers:{"delete-modal":!0}}],staticClass:"ml-2",attrs:{variant:"outline-danger"}},[t._v("Delete Request")]),s("div",[s("b-modal",{attrs:{centered:"",id:"delete-modal",title:"Delete Task"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("div",{staticClass:"w-100"},[s("b-button",{staticClass:"float-left",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("delete-modal")}}},[t._v(" Cancel ")]),s("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(e){return t.deleteTask(t.task)}}},[t._v(" Delete ")])],1)]},proxy:!0}],null,!1,2401240998)},[s("p",{staticClass:"my-4"},[t._v(" Are you sure you want to delete the task? ")])])],1)],1)]):t._e()]),!0===t.task.enemyActivity?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("b-alert",{staticClass:"danger-task-enemy text-center",attrs:{show:""}},[s("font-awesome-icon",{staticClass:"fa-icon mr-5",attrs:{icon:"exclamation-triangle"}}),s("span",{staticClass:"font-weight-bold"},[t._v("Warning!")]),t._v(" There is enemy activity at the delivery location! "),s("font-awesome-icon",{staticClass:"fa-icon ml-5",attrs:{icon:"exclamation-triangle"}})],1)],1)]):t._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("HeaderComponent",{attrs:{card:!0,requestId:t.task.taskId}}),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"45%"}},[t._v(" Request Status: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.status)}},[t._v(" "+t._s(t.task.status))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"30%"}},[t._v(" Logi Status: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkVariant(t.task.logiStatus)}},[t._v(" "+t._s(t.task.logiStatus))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"15%"}},[t._v(" Precedence: "),s("b-badge",{staticClass:"d-inline",attrs:{variant:t.checkPrecedence(t.task.precedence)}},[t._v(" "+t._s(t.task.precedence))])],1),s("h5",{staticClass:"card-title",staticStyle:{position:"absolute",bottom:"0"}},[t._v(" Member(s) Assigned: "),s("span",{staticClass:"assigned-members"},[t._v(" "+t._s(t.task.assignedTo.length>0?t.task.assignedTo.join(" & "):"None")+" ")])])],1),s("div",{staticClass:"col-6 text-center"},[s("h5",{staticClass:"card-title"},[t._v("Location: "+t._s(t.task.location))]),s("h5",{staticClass:"card-title"},[t._v("Region: "+t._s(t.task.region))]),s("CoolLightBox",{attrs:{items:t.task_image,index:t.index,useZoomBar:!0},on:{close:function(e){t.index=null}}}),s("div",{staticClass:"images-wrapper"},t._l(t.task_image,(function(e,a){return s("img",{key:a,staticClass:"image",attrs:{src:e,height:270},on:{click:function(e){t.index=a}}})})),0)],1)])]),"Pending"===t.task.logiStatus?s("div",{staticClass:"div my-3"}):t._e(),"Pending"!==t.task.logiStatus?s("div",{staticClass:"progress progress-sm my-3 mt-4"},[s("div",{class:t.checkProgress(t.task.logiStatus),style:t.status_value_style,attrs:{id:"progress-bar-example-1",role:"progressbar","aria-valuenow":t.status_value,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(this.status_value)+"% Complete ")])]):t._e(),s("b-table",{attrs:{striped:"",hover:"","sticky-header":"450px",items:t.task.items},scopedSlots:t._u([{key:"cell(item)",fn:function(e){return[s("img",{staticClass:"image mr-2",attrs:{src:t.getIcon(e.value),height:30}}),t._v(t._s(e.value)+" ")]}}])}),s("div",{staticClass:"d-flex flex-row align-content-center"},[this.bmats>0?s("div",{staticClass:"col text-center"},[s("b-card",{attrs:{title:"Basic Materials Required","header-tag":"header","footer-tag":"footer"}},[s("img",{staticClass:"image mr-2",attrs:{src:a("ae31"),height:50}}),s("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.bmats)+" units / "+t._s(this.bmats/100)+" crate(s)")])],1)],1):t._e(),this.emats>0?s("div",{staticClass:"col text-center"},[s("b-card",{attrs:{title:"Explosive Materials Required"}},[s("img",{staticClass:"image mr-2",attrs:{src:a("a8da"),height:50}}),s("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.emats)+" units / "+t._s(this.emats/20)+" crate(s)")])],1)],1):t._e(),this.hmats>0?s("div",{staticClass:"col text-center"},[s("b-card",{attrs:{title:"Heavy Explosive Materials Required"}},[s("img",{staticClass:"image mr-2",attrs:{src:a("864c"),height:50}}),s("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.hmats)+" units / "+t._s(this.hmats/20)+" crate(s)")])],1)],1):t._e(),this.rmats>0?s("div",{staticClass:"col text-center"},[s("b-card",{attrs:{title:"Refined Materials Required"}},[s("img",{staticClass:"image mr-2",attrs:{src:a("2cfc"),height:50}}),s("b-card-text",{staticClass:"pt-3 required-mats-text"},[t._v(t._s(this.rmats)+" units / "+t._s(this.rmats/20)+" crate(s)")])],1)],1):t._e()])],1)])])},b=[],v=(a("7f7f"),a("7514"),a("5547")),k=a("b00c"),C=k.taskStatus,x=k.logiStatus,A=k.precedence,_={name:"TaskComponent",components:{HeaderComponent:p,CoolLightBox:v["a"]},data:function(){return{bmats:0,hmats:0,emats:0,rmats:0,delete_modal:!1,status_value:0,status_value_style:"width: 0%",task_image:[],index:null}},created:function(){var t=this,e=this.$store.getters.getRegionsList.find((function(e){return e.name===t.task.region}));this.task_image.push(a("8d83")("./".concat(e.icon,".png"))),this.task.items.forEach((function(e){var a=t.$store.getters.getItemsList.find((function(t){return t.name===e.item}));t.bmats=t.bmats+a.bmatCost*e.quantity,t.emats=t.emats+a.ematCost*e.quantity,t.hmats=t.hmats+a.hmatCost*e.quantity,t.rmats=t.rmats+a.rmatCost*e.quantity}))},methods:{getIcon:function(t){var e=this.$store.getters.getItemsList.find((function(e){return e.name===t})),s="";try{s=a("f746")("./".concat(e.icon,"-dark.png"))}catch(n){return}return s},findIcon:function(t){var e=this.$store.getters.getItemsList.find((function(e){return e.name+"-dark"===t}));return!!e},checkVariant:function(t){var e="";switch(t){case C.PENDING:e="warning";break;case C.COMPLETED:e="success";break;case C.ACCEPTED:e="primary";break;case x.DELAYED:e="warning";break;default:e="primary";break}return e},checkProgress:function(t){var e="progress-bar progress-bar-striped progress-bar-animated ";switch(t){case x.PENDING:e="".concat(e," bg-warning");break;case x.COMPLETED:e="progress-bar progress-bar-striped bg-success";break;case x.ACCEPTED:e="".concat(e," bg-primary");break;case x.COOKING:e="".concat(e," bg-primary");break;case x.DELIVERING:e="".concat(e," bg-primary");break;case x.DELAYED:e="progress-bar progress-bar-striped bg-warning";break;default:break}return e},checkPrecedence:function(t){var e="";switch(t){case A.LOW:e="primary";break;case A.MEDIUM:e="warning";break;case A.HIGH:e="danger";break;default:break}return e},updateStatus:function(t,e){t.status=e,f["a"].updateTask(t)},deleteTask:function(t){f["a"].deleteTask(t._id)},updateLogiStatus:function(t,e){switch(t.logiStatus=e,f["a"].updateTask(t),this.task.logiStatus){case x.PENDING:this.status_value=0,this.status_value_style="width: 0%";break;case x.ACCEPTED:this.status_value=25,this.status_value_style="width: 25%";break;case x.COOKING:this.status_value=50,this.status_value_style="width: 50%";break;case x.SHIPPING:this.status_value=75,this.status_value_style="width: 75%";break;case x.DELIVERING:this.status_value=75,this.status_value_style="width: 75%";break;case x.COMPLETED:this.status_value=100,this.status_value_style="width: 100%";break;default:break}},updateTaskPrecedence:function(t,e){t.precedence=e,f["a"].updateTask(t)},assignSelf:function(t){t.assignedTo.push(this.$store.getters.getUsername),f["a"].updateTask(t)},unassignSelf:function(t){var e=this;t.assignedTo=t.assignedTo.filter((function(t){return t!==e.$store.getters.getUsername})),f["a"].updateTask(t)}},props:{task:Object}},y=_,w=(a("b4c4"),Object(d["a"])(y,h,b,!1,null,"9b42dd06",null)),M=w.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[a("div",{staticClass:"stats-small stats-small--1 card card-small"},[a("div",{staticClass:"card-body p-0 d-flex bg-warning"},[a("div",{staticClass:"d-flex flex-column m-auto"},[a("div",{staticClass:"stats-small__data text-center"},[a("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Pending Requests")]),a("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalPending)+" ")])])])])])]),a("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[a("div",{staticClass:"stats-small stats-small--1 card card-small"},[a("div",{staticClass:"card-body p-0 bg-primary d-flex"},[a("div",{staticClass:"d-flex flex-column m-auto"},[a("div",{staticClass:"stats-small__data text-center"},[a("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Open Requests")]),a("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalOpen)+" ")])])])])])]),a("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[a("div",{staticClass:"stats-small stats-small--1 card card-small"},[a("div",{staticClass:"card-body p-0 bg-success d-flex"},[a("div",{staticClass:"d-flex flex-column m-auto"},[a("div",{staticClass:"stats-small__data text-center"},[a("span",{staticClass:"stats-small__label text-uppercase color-white"},[t._v("Completed Requests")]),a("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalCompleted)+" ")])])])])])]),a("div",{staticClass:"col-lg col-md-6 col-sm-6 mb-4"},[a("div",{staticClass:"stats-small stats-small--1 card card-small"},[a("div",{staticClass:"card-body p-0 bg-info d-flex"},[a("div",{staticClass:"d-flex flex-column m-auto"},[a("div",{staticClass:"stats-small__data text-center"},[a("span",{staticClass:"stats-small__label text-uppercase"},[t._v("Items/Crates Delivered")]),a("h6",{staticClass:"stats-small__value count my-3"},[t._v(" "+t._s(this.counters.totalDelivered)+" ")])])])])])])])},H=[],I={name:"CounterSectionComponent",data:function(){return{error:""}},props:{title:String,counters:Object}},E=I,T=(a("5501"),Object(d["a"])(E,S,H,!1,null,"977a4d36",null)),D=T.exports,q=a("b00c"),P=q.taskStatus,N={name:"TaskTableComponent",components:{TaskComponent:M,CounterSectionComponent:D},mounted:function(){var t=this;this.sockets.subscribe("task-change",(function(e){switch(e.task.requestedAt=e.task.requestedAt?"".concat(new Date(e.task.requestedAt).toLocaleDateString()," ").concat(new Date(e.task.requestedAt).toLocaleTimeString()):e.task.requestedAt,e.task.completedAt=e.task.completedAt?"".concat(new Date(e.task.completedAt).toLocaleDateString()," ").concat(new Date(e.task.completedAt).toLocaleTimeString()):null,e.change){case"POST":t.tasks.push(e.task),t.calculateCounters(),t.addChangeAlert({message:"A new request has been added!",id:e.task.taskId,show:!0});break;case"DELETE":t.tasks=t.tasks.filter((function(t){return t._id!==e.task._id})),t.calculateCounters(),t.addChangeAlert({message:"Request: 1STRL-".concat(e.task.taskId," has been deleted!"),id:e.task.taskId,show:!0});break;case"PATCH":for(var a=t.tasks.findIndex((function(t){return t._id===e.task._id})),s=Object.getOwnPropertyNames(e.task),n=0;n<s.length;n++){var i=s[n];e.task[i]!==t.tasks[a].propName&&(t.tasks[a].propName=e.task[i])}t.calculateCounters()}}))},ready:function(){},data:function(){return{counters:{totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0},tasks:[],error:"",pendingItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"enemyActivity",label:"Enemy Activity"},"details"],acceptedItemFields:[{key:"taskId",label:"ID",sortable:!0},{key:"location",label:"Location",sortable:!0},{key:"requestedAt",label:"Date Requested",sortable:!0},{key:"precedence",label:"Precendence",sortable:!0},"status",{key:"logiStatus",label:"Logi Status"},{key:"enemyActivity",label:"Enemy Activity"},"details"],changeAlerts:[]}},methods:{addChangeAlert:function(t){var e=this,a=t.id;this.changeAlerts.push(t),setTimeout((function(){e.changeAlerts=e.changeAlerts.map((function(t){return t.id!==a}))}),3e4)},getAllTasks:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].getTasks();case 2:this.tasks=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTasks:function(t){var e=[];return this.tasks.forEach((function(a){a.status===t&&e.push(a)})),e},calculateCounters:function(){var t=this;this.counters={totalOpen:0,totalPending:0,totalCompleted:0,totalDelivered:0};var e=this.tasks.filter((function(t){return t.status===P.PENDING}));this.counters.totalPending=e.length;var a=this.tasks.filter((function(t){return t.status===P.ACCEPTED}));this.counters.totalOpen=a.length;var s=this.tasks.filter((function(t){return t.status===P.COMPLETED}));this.counters.totalCompleted=s.length,s.forEach((function(e){e.items.forEach((function(e){t.counters.totalDelivered+=new Number(e.quantity)}))}))},createRequest:function(){this.$router.push("/logistics-requests/new")}},created:function(){var t=this;this.getAllTasks().then((function(){t.calculateCounters()}))},checkRecruit:function(t){var e=!0;return t.forEach((function(t){"Recruit"===t&&(e=!1)})),e},props:{}},R=N,L=(a("58a2"),Object(d["a"])(R,g,m,!1,null,"00a9dddc",null)),O=L.exports,U={name:"LogisticsRequests",components:{HeaderComponent:p,TaskTableComponent:O},data:function(){return{craftedItems:[]}},methods:{getAllItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].getItems().then((function(t){e.$store.dispatch("setItemsList",t)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getAllRegions:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].getRegions().then((function(t){e.$store.dispatch("setRegionsList",t)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.$store.getters.isLoggedIn||(this.$store.dispatch("error",{message:"You must be logged in to review logistic requests."}),this.$router.push("/")),this.getAllItems(),this.getAllRegions()}},G=U,V=Object(d["a"])(G,s,n,!1,null,null,null);e["default"]=V.exports},6621:function(t,e,a){t.exports=a.p+"img/MapCallumsCapeHex.da2eee0a.png"},"682b":function(t,e,a){t.exports=a.p+"img/MapOriginHex.80703534.png"},"69fe":function(t,e,a){t.exports=a.p+"img/MapShackledChasmHex.e5269949.png"},"6c18":function(t,e,a){t.exports=a.p+"img/MapBasinSionnachHex.acf9b377.png"},"7ddf":function(t,e,a){t.exports=a.p+"img/MapFarranacCoastHex.557fc9c6.png"},8567:function(t,e,a){t.exports=a.p+"img/MapTheFingersHex.db7a6ee5.png"},"864c":function(t,e){t.exports="data:image/png;base64,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"},"8b97":function(t,e,a){var s=a("d3f4"),n=a("cb7c"),i=function(t,e){if(n(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:s(t,a),t}}({},!1):void 0),check:i}},"8d83":function(t,e,a){var s={"./MapAcrithiaHex.png":"4078","./MapAllodsBightHex.png":"3493","./MapAshFieldsHex.png":"3437","./MapBasinSionnachHex.png":"6c18","./MapCallahansPassageHex.png":"1e38","./MapCallumsCapeHex.png":"6621","./MapClansheadValleyHex.png":"49f8","./MapDeadlandsHex.png":"efca","./MapDrownedValeHex.png":"40ab","./MapEndlessShoreHex.png":"d813","./MapFarranacCoastHex.png":"7ddf","./MapFishermansRowHex.png":"e33b","./MapGodcroftsHex.png":"b581","./MapGreatMarchHex.png":"2f7a","./MapHeartlandsHex.png":"1d44","./MapHowlCountyHex.png":"eb58","./MapKalokaiHex.png":"bbda","./MapLinnMercyHex.png":"ce0a","./MapLochMorHex.png":"3a97","./MapMarbanHollow.png":"1ae7","./MapMooringCountyHex.png":"33ee","./MapMorgensCrossingHex.png":"e6a2","./MapNevishLineHex.png":"1e188","./MapOarbreakerHex.png":"e0c1","./MapOriginHex.png":"682b","./MapReachingTrailHex.png":"8de0","./MapRedRiverHex.png":"6214","./MapShackledChasmHex.png":"69fe","./MapSpeakingWoodsHex.png":"597b","./MapStonecradleHex.png":"cfcb","./MapTempestIslandHex.png":"bafb","./MapTerminusHex.png":"9f08","./MapTheFingersHex.png":"8567","./MapUmbralWildwoodHex.png":"a981","./MapViperPitHex.png":"b0b5","./MapWeatheredExpanseHex.png":"1e4d","./MapWestgateHex.png":"f75a"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="8d83"},"8de0":function(t,e,a){t.exports=a.p+"img/MapReachingTrailHex.e631ecf9.png"},"9f08":function(t,e,a){t.exports=a.p+"img/MapTerminusHex.2beb272e.png"},a8da:function(t,e,a){t.exports=a.p+"img/Explosive_Materials-largedark.be63db1f.png"},a981:function(t,e,a){t.exports=a.p+"img/MapUmbralWildwoodHex.60467681.png"},aa77:function(t,e,a){var s=a("5ca1"),n=a("be13"),i=a("79e5"),r=a("fdef"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),u=function(t,e,a){var n={},o=i((function(){return!!r[t]()||c[t]()!=c})),l=n[t]=o?e(p):r[t];a&&(n[a]=l),s(s.P+s.F*o,"String",n)},p=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},ae31:function(t,e,a){t.exports=a.p+"img/Basic_Materials-largedark.df25112f.png"},b00c:function(t,e){var a={PENDING:"Pending",COMPLETED:"Completed",ACCEPTED:"Accepted"},s={PENDING:"Pending",ACCEPTED:"Accepted",COOKING:"Cooking",SHIPPING:"Shipping",DELIVERING:"Delivering",DELAYED:"Delayed",COMPLETED:"Completed"},n={LOW:"Low",MEDIUM:"Medium",HIGH:"High",CRITICAL:"Critical"};t.exports={taskStatus:a,logiStatus:s,precedence:n}},b0b5:function(t,e,a){t.exports=a.p+"img/MapViperPitHex.599dd420.png"},b4c4:function(t,e,a){"use strict";a("4cce")},b581:function(t,e,a){t.exports=a.p+"img/MapGodcroftsHex.caf44857.png"},bafb:function(t,e,a){t.exports=a.p+"img/MapTempestIslandHex.7deb4dc3.png"},bbda:function(t,e,a){t.exports=a.p+"img/MapKalokaiHex.2887ba67.png"},bec6:function(t,e,a){},c3e9:function(t,e,a){},c5f6:function(t,e,a){"use strict";var s=a("7726"),n=a("69a8"),i=a("2d95"),r=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,d=a("11e9").f,u=a("86cc").f,p=a("aa77").trim,g="Number",m=s[g],f=m,h=m.prototype,b=i(a("2aeb")(h))==g,v="trim"in String.prototype,k=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var a,s,n,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var r,c=e.slice(2),l=0,d=c.length;l<d;l++)if(r=c.charCodeAt(l),r<48||r>n)return NaN;return parseInt(c,s)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?c((function(){h.valueOf.call(a)})):i(a)!=g)?r(new f(k(e)),a,m):k(e)};for(var C,x=a("9e1e")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;x.length>A;A++)n(f,C=x[A])&&!n(m,C)&&u(m,C,d(f,C));m.prototype=h,h.constructor=m,a("2aba")(s,g,m)}},ce0a:function(t,e,a){t.exports=a.p+"img/MapLinnMercyHex.b5cd9db3.png"},cfcb:function(t,e,a){t.exports=a.p+"img/MapStonecradleHex.d1f570a7.png"},d813:function(t,e,a){t.exports=a.p+"img/MapEndlessShoreHex.a0e192a4.png"},e0c1:function(t,e,a){t.exports=a.p+"img/MapOarbreakerHex.35d4f679.png"},e33b:function(t,e,a){t.exports=a.p+"img/MapFishermansRowHex.3918fb12.png"},e6a2:function(t,e,a){t.exports=a.p+"img/MapMorgensCrossingHex.e154c78e.png"},eb58:function(t,e,a){t.exports=a.p+"img/MapHowlCountyHex.2a8fdf80.png"},efca:function(t,e,a){t.exports=a.p+"img/MapDeadlandsHex.fb2936ff.png"},f75a:function(t,e,a){t.exports=a.p+"img/MapWestgateHex.537bf149.png"},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-72a3921e.ee37b013.js.map