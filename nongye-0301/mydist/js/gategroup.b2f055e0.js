(self.webpackChunknongye_0301=self.webpackChunknongye_0301||[]).push([[29],{1149:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var t={name:"ConTitle",props:["topTitle"]},a=(0,s(1001).Z)(t,function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"box-card"},[t("div",[""!==e.topTitle.type?t("span",{staticClass:"title-n"},[e._v(e._s(e.topTitle.type)+" / ")]):e._e(),t("span",{staticClass:"title-m"},[e._v(e._s(e.topTitle.text))]),t("span",{staticClass:"title-msg"},[e._v(" - "+e._s(e.topTitle.msg))])])])},[],!1,null,"4d662bd5",null).exports},6119:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var t=s(1149),a=s(6797),r=s.n(a),l=s(586),a={naem:"gateGroup",components:{ConTitle:t.Z},data(){return{topTitle:{type:"设备",text:"节点群组",msg:"以分组的形式管理节点设备，提供了搜索，添加新的群组，重命名，移动设备等功能"},gategroupList:[],total:0,query:{currPage:1,pageSize:5,eui:"",keyword:""},ruleForm:{groupName:""},rules:{groupName:[{required:!0,message:"请输入群组名称",trigger:"blur"}]},dialogVisible:!1,editId:"",editname:["修改群组名称","新建群组"]}},mounted(){this.getData()},methods:{delFun(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{(0,l.x3)({id:e}).then(e=>{"success"==e.msg&&this.getData()}),this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},onSubmit(){this.getData()},getData(){(0,l.pI)(this.query).then(e=>{this.gategroupList=e.data,this.total=e.total})},handleSizeChange(e){this.query.currPage=1,this.getData()},handleCurrentChange(e){this.query.currPage=e,this.getData()},addFun(){this.dialogVisible=!0},editFun(e,t){this.dialogVisible=!0,this.editId=e,this.ruleForm.groupName=t},handleOK(){""==this.editId?this.addItem():(this.editItem(),this.editId)},addItem(){this.$refs.ruleForm.validate(e=>{if(!e)return!1;(0,l.vM)({groupName:this.ruleForm.groupName}).then(e=>{"success"==e.msg&&(this.dialogVisible=!1,this.getData())})})},editItem(){this.$refs.ruleForm.validate(e=>{if(!e)return!1;(0,l.i3)({groupName:this.ruleForm.groupName,id:this.editId}).then(e=>{"success"==e.msg&&(this.dialogVisible=!1,this.getData())})})}},filters:{formatTime(e){return r()(e).format("YYYY-MM-DD")},fornn(e){return e?"在线":"离线"}}},i=(0,s(1001).Z)(a,function(){var s=this,e=s._self._c;return e("div",[e("ConTitle",{attrs:{topTitle:s.topTitle}}),e("div",{staticClass:"clearfix"},[e("el-form",{ref:"form",staticStyle:{"background-color":"#fff",height:"3.125rem",margin:".625rem 0 .625rem 0"},attrs:{model:s.query,"label-width":"5rem"}},[e("el-form-item",{attrs:{label:"群组名称"}},[e("el-input",{staticStyle:{width:"25rem","line-height":"3.125rem"},model:{value:s.query.keyword,callback:function(e){s.$set(s.query,"keyword",e)},expression:"query.keyword"}}),e("el-button",{attrs:{type:"primary"},on:{click:s.onSubmit}},[s._v("搜索")]),e("el-button",[s._v("清除条件")]),e("el-button",{staticClass:"addbtn",staticStyle:{float:"right","margin-top":".3125rem","margin-right":".3125rem"},attrs:{type:"primary"},on:{click:s.addFun}},[s._v("新增群组+")])],1)],1)],1),e("el-dialog",{attrs:{title:s.editId?s.editname[0]:s.editname[1],visible:s.dialogVisible,width:"30%"},on:{"update:visible":function(e){s.dialogVisible=e}}},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:s.ruleForm,rules:s.rules,"label-width":"6.25rem"}},[e("el-form-item",{attrs:{label:"群组名称",prop:s.ruleForm.groupName}},[e("el-input",{attrs:{placeholder:"请输入群组名称"},model:{value:s.ruleForm.groupName,callback:function(e){s.$set(s.ruleForm,"groupName",e)},expression:"ruleForm.groupName"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){s.dialogVisible=!1}}},[s._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:s.handleOK}},[s._v("确 定")])],1)],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:s.gategroupList,fixed:"true"}},[e("el-table-column",{attrs:{type:"index"}}),e("el-table-column",{attrs:{prop:"groupName",label:"群组名称"}}),e("el-table-column",{attrs:{prop:"nodeNums",label:"传感器节点数量"}}),e("el-table-column",{attrs:{prop:"onlineNums",label:"在线设备数量"}}),e("el-table-column",{attrs:{prop:"cTime",label:"创建时间"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:s._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return s.editFun(t.row.id,t.row.groupName)}}},[s._v("重命名")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return s.delFun(t.row.id)}}},[s._v("删除")])]}}])})],1),e("el-pagination",{attrs:{"current-page":s.query.currPage,"page-sizes":[2,4,5,10],"page-size":s.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:s.total},on:{"size-change":s.handleSizeChange,"current-change":s.handleCurrentChange}})],1)},[],!1,null,null,null).exports},6700:function(e,t,s){var a={"./af":3906,"./af.js":3906,"./ar":902,"./ar-dz":3853,"./ar-dz.js":3853,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":6825,"./ar-ly.js":6825,"./ar-ma":6379,"./ar-ma.js":6379,"./ar-sa":7700,"./ar-sa.js":7700,"./ar-tn":2059,"./ar-tn.js":2059,"./ar.js":902,"./az":6043,"./az.js":6043,"./be":7936,"./be.js":7936,"./bg":4078,"./bg.js":4078,"./bm":4014,"./bm.js":4014,"./bn":9554,"./bn-bd":7114,"./bn-bd.js":7114,"./bn.js":9554,"./bo":6529,"./bo.js":6529,"./br":5437,"./br.js":5437,"./bs":9647,"./bs.js":9647,"./ca":9951,"./ca.js":9951,"./cs":6113,"./cs.js":6113,"./cv":7965,"./cv.js":7965,"./cy":5858,"./cy.js":5858,"./da":3515,"./da.js":3515,"./de":2831,"./de-at":6263,"./de-at.js":6263,"./de-ch":1127,"./de-ch.js":1127,"./de.js":2831,"./dv":6714,"./dv.js":6714,"./el":8616,"./el.js":8616,"./en-au":4595,"./en-au.js":4595,"./en-ca":3545,"./en-ca.js":3545,"./en-gb":9609,"./en-gb.js":9609,"./en-ie":3727,"./en-ie.js":3727,"./en-il":3302,"./en-il.js":3302,"./en-in":6305,"./en-in.js":6305,"./en-nz":9128,"./en-nz.js":9128,"./en-sg":4569,"./en-sg.js":4569,"./eo":650,"./eo.js":650,"./es":6358,"./es-do":4214,"./es-do.js":4214,"./es-mx":8639,"./es-mx.js":8639,"./es-us":232,"./es-us.js":232,"./es.js":6358,"./et":7279,"./et.js":7279,"./eu":5515,"./eu.js":5515,"./fa":7981,"./fa.js":7981,"./fi":7090,"./fi.js":7090,"./fil":9208,"./fil.js":9208,"./fo":2799,"./fo.js":2799,"./fr":3463,"./fr-ca":2213,"./fr-ca.js":2213,"./fr-ch":2848,"./fr-ch.js":2848,"./fr.js":3463,"./fy":1468,"./fy.js":1468,"./ga":8163,"./ga.js":8163,"./gd":2898,"./gd.js":2898,"./gl":6312,"./gl.js":6312,"./gom-deva":682,"./gom-deva.js":682,"./gom-latn":9178,"./gom-latn.js":9178,"./gu":5009,"./gu.js":5009,"./he":2795,"./he.js":2795,"./hi":7009,"./hi.js":7009,"./hr":6506,"./hr.js":6506,"./hu":9565,"./hu.js":9565,"./hy-am":3864,"./hy-am.js":3864,"./id":5626,"./id.js":5626,"./is":6649,"./is.js":6649,"./it":151,"./it-ch":5348,"./it-ch.js":5348,"./it.js":151,"./ja":9830,"./ja.js":9830,"./jv":3751,"./jv.js":3751,"./ka":3365,"./ka.js":3365,"./kk":5980,"./kk.js":5980,"./km":9571,"./km.js":9571,"./kn":5880,"./kn.js":5880,"./ko":6809,"./ko.js":6809,"./ku":6773,"./ku.js":6773,"./ky":5505,"./ky.js":5505,"./lb":553,"./lb.js":553,"./lo":1237,"./lo.js":1237,"./lt":1563,"./lt.js":1563,"./lv":1057,"./lv.js":1057,"./me":6495,"./me.js":6495,"./mi":3096,"./mi.js":3096,"./mk":3874,"./mk.js":3874,"./ml":6055,"./ml.js":6055,"./mn":7747,"./mn.js":7747,"./mr":7113,"./mr.js":7113,"./ms":8687,"./ms-my":7948,"./ms-my.js":7948,"./ms.js":8687,"./mt":4532,"./mt.js":4532,"./my":4655,"./my.js":4655,"./nb":6961,"./nb.js":6961,"./ne":2512,"./ne.js":2512,"./nl":8448,"./nl-be":2936,"./nl-be.js":2936,"./nl.js":8448,"./nn":9031,"./nn.js":9031,"./oc-lnc":5174,"./oc-lnc.js":5174,"./pa-in":118,"./pa-in.js":118,"./pl":3448,"./pl.js":3448,"./pt":3518,"./pt-br":2447,"./pt-br.js":2447,"./pt.js":3518,"./ro":817,"./ro.js":817,"./ru":262,"./ru.js":262,"./sd":8990,"./sd.js":8990,"./se":3842,"./se.js":3842,"./si":7711,"./si.js":7711,"./sk":756,"./sk.js":756,"./sl":3772,"./sl.js":3772,"./sq":6187,"./sq.js":6187,"./sr":732,"./sr-cyrl":5713,"./sr-cyrl.js":5713,"./sr.js":732,"./ss":9455,"./ss.js":9455,"./sv":9770,"./sv.js":9770,"./sw":959,"./sw.js":959,"./ta":6459,"./ta.js":6459,"./te":5302,"./te.js":5302,"./tet":7975,"./tet.js":7975,"./tg":1294,"./tg.js":1294,"./th":2385,"./th.js":2385,"./tk":4613,"./tk.js":4613,"./tl-ph":8668,"./tl-ph.js":8668,"./tlh":8190,"./tlh.js":8190,"./tr":4506,"./tr.js":4506,"./tzl":3440,"./tzl.js":3440,"./tzm":9852,"./tzm-latn":2350,"./tzm-latn.js":2350,"./tzm.js":9852,"./ug-cn":730,"./ug-cn.js":730,"./uk":99,"./uk.js":99,"./ur":2100,"./ur.js":2100,"./uz":6002,"./uz-latn":6322,"./uz-latn.js":6322,"./uz.js":6002,"./vi":4207,"./vi.js":4207,"./x-pseudo":4674,"./x-pseudo.js":4674,"./yo":570,"./yo.js":570,"./zh-cn":3644,"./zh-cn.js":3644,"./zh-hk":2591,"./zh-hk.js":2591,"./zh-mo":9503,"./zh-mo.js":9503,"./zh-tw":8080,"./zh-tw.js":8080};function r(e){e=l(e);return s(e)}function l(e){if(s.o(a,e))return a[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}r.keys=function(){return Object.keys(a)},r.resolve=l,(e.exports=r).id=6700}}]);