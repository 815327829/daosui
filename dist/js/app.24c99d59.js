(function(e){function t(t){for(var i,o,r=t[0],s=t[1],u=t[2],m=0,c=[];m<r.length;m++)o=r[m],n[o]&&c.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(c.length)c.shift()();return a.push.apply(a,u||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],i=!0,r=1;r<l.length;r++){var s=l[r];0!==n[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=l[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var l=i[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=i,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(l,i,function(t){return e[t]}.bind(null,i));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=s;a.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"0747":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("f751"),l("097d");var i=l("2b0e"),n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("Home")],1)},a=[],o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",{staticStyle:{height:"100vh",border:"1px solid #eee margin: 0px"}},[l("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[l("el-menu",{attrs:{"default-openeds":["1","4"],router:!0}},[l("el-menu-item",{attrs:{index:"0"}},[l("i",{staticClass:"el-icon-s-home"}),e._v("主页")]),l("el-submenu",{attrs:{index:"1"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-message"}),e._v("导航一")]),l("el-menu-item-group",[l("template",{slot:"title"},[e._v("分组一")]),l("el-menu-item",{attrs:{index:"./userlist"}},[e._v("用户表")]),l("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],2),l("el-menu-item-group",{attrs:{title:"分组2"}},[l("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),l("el-submenu",{attrs:{index:"1-4"}},[l("template",{slot:"title"},[e._v("选项4")]),l("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项4-1")])],2)],2),l("el-submenu",{attrs:{index:"3"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-setting"}),e._v("我的测试")]),l("el-menu-item-group",[l("template",{slot:"title"},[e._v("分组一")]),l("el-menu-item",{attrs:{index:"3-1"}},[e._v("选项1")]),l("el-menu-item",{attrs:{index:"3-2"}},[e._v("选项2")])],2),l("el-menu-item-group",{attrs:{title:"分组2"}},[l("el-menu-item",{attrs:{index:"3-3"}},[e._v("选项3")])],1),l("el-submenu",{attrs:{index:"3-4"}},[l("template",{slot:"title"},[e._v("选项4")]),l("el-menu-item",{attrs:{index:"3-4-1"}},[e._v("选项4-1")])],2)],2)],1)],1),l("router-view")],1)},r=[],s={name:"Home"},u=s,d=(l("89f1"),l("2877")),m=Object(d["a"])(u,o,r,!1,null,null,null),c=m.exports,f={name:"app",components:{Home:c}},p=f,b=Object(d["a"])(p,n,a,!1,null,null,null),h=b.exports,v=l("5c96"),g=l.n(v),x=(l("0fae"),l("8c4f")),_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",[l("el-header",{staticStyle:{"text-align":"left","font-size":"12px"}},[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加")]),l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.dialogVisibleEdit=!0}}},[e._v("编辑")]),l("el-button",{attrs:{type:"danger",plain:""},on:{click:e.delData}},[e._v("删除")])],1),l("hr"),l("el-main",[l("el-table",{ref:"multipleTable",attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),l("el-table-column",{attrs:{prop:"id",label:"编码",width:"140"}}),l("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),l("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":10,total:e.tableData.length}})],1),l("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[l("el-form",{attrs:{model:e.form}},[l("el-form-item",{attrs:{label:"编码"}},[l("el-input",{model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),l("el-form-item",{attrs:{label:"日期"}},[l("el-input",{model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")])],1)],1),l("el-dialog",{attrs:{title:"提示",visible:e.dialogVisibleEdit,width:"30%"},on:{"update:visible":function(t){e.dialogVisibleEdit=t},close:e.resetForm}},[l("el-form",{attrs:{model:e.formEdit}},[l("el-form-item",{attrs:{label:"编码"}},[l("el-input",{attrs:{value:e.formEdit.id},on:{input:e.updateName}})],1),l("el-form-item",{attrs:{label:"日期"}},[l("el-input",{model:{value:e.formEdit.date,callback:function(t){e.$set(e.formEdit,"date",t)},expression:"formEdit.date"}})],1),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.formEdit.name,callback:function(t){e.$set(e.formEdit,"name",t)},expression:"formEdit.name"}})],1),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:e.formEdit.address,callback:function(t){e.$set(e.formEdit,"address",t)},expression:"formEdit.address"}})],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisibleEdit=!1}}},[e._v("取消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.editForm}},[e._v("确定")])],1)],1)],1)},y=[],w=l("cebc"),E={name:"UserList",data:function(){return{tableData:[{id:"001",date:"2016-05-02",name:"shuvi",address:"human 1518"},{id:"001",date:"2016-05-02",name:"shuvi",address:"human 1518"},{id:"001",date:"2016-05-02",name:"shuvi",address:"human 1518"}],dialogVisible:!1,dialogVisibleEdit:!1,selectedRow:null,form:{id:"",date:"",name:"",address:""},formEdit:{}}},methods:{editData:function(){},delData:function(){this.tableData.pop()},updateName:function(e){this.formEdit.id=e},submitForm:function(){console.log("提交的信息:",JSON.stringify(this.form));var e=Object(w["a"])({},this.form);this.tableData.unshift(e),console.log("数组",JSON.stringify(this.tableData)),this.dialogVisible=!1,this.resetForm()},editForm:function(){},resetForm:function(){this.form={}},handleSelectionChange:function(e){if(e.length>0){var t=e[e.length-1];this.selectedRow&&this.selectedRow!==t&&this.$refs.multipleTable.toggleRowSelection(this.selectedRow,!1),this.selectedRow=t,this.formEdit=this.selectedRow,console.log("当前"+JSON.stringify(this.formEdit))}else this.selectedRow=null}}},k=E,O=(l("d3c2"),Object(d["a"])(k,_,y,!1,null,"fd6719f2",null)),S=O.exports,j=new x["a"]({routes:[{name:"userlist",path:"/userlist",component:S,meta:{title:"userlist"}}]}),$=j;i["default"].config.productionTip=!1,i["default"].use(g.a),i["default"].use(x["a"]),new i["default"]({render:function(e){return e(h)},router:$}).$mount("#app")},"89f1":function(e,t,l){"use strict";var i=l("0747"),n=l.n(i);n.a},cf0d:function(e,t,l){},d3c2:function(e,t,l){"use strict";var i=l("cf0d"),n=l.n(i);n.a}});
//# sourceMappingURL=app.24c99d59.js.map