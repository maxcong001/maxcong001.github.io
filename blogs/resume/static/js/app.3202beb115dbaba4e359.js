webpackJsonp([0],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("lDYn"),n=s.n(i),r={data:function(){return{msg:"hello vue",ttc:80,resStyleCode:"",pfdSize:{width:"",height:""},resumeData:n.a}},methods:{responseStyleCode:function(t){this.resStyleCode="<style>"+t+"</style>"}},components:{}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"show-resume"}},[s("div",{staticClass:"resume-content clearfloat",style:{width:t.pfdSize.width+"px",height:t.pfdSize.height+"px"},attrs:{id:"resume_content"}},[s("section",{staticClass:"section-left"},[s("div",{staticClass:"head"},[s("h2",[t._v(t._s(t.resumeData.head.name))]),t._v(" "),s("h3",[t._v("求职意向:"+t._s(t.resumeData.head.intention))]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.tel))]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.email))]),t._v(" "),s("ul",{staticClass:"clearfloat"},[s("li",[s("p",[t._v("住址")]),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.address))])]),t._v(" "),s("li",[s("p",[t._v("年龄")]),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.age))])]),t._v(" "),s("li",[s("p",[t._v("性别")]),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.sex))])])])]),t._v(" "),s("div",{staticClass:"edu"},[t._m(2),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.school)+" ("+t._s(t.resumeData.head.graduation)+")")]),t._v(" "),s("p",[t._v(t._s(t.resumeData.head.graduationTime))]),t._v(" "),s("p",[t._v("专业:"+t._s(t.resumeData.head.major))]),t._v(" "),s("p",{staticClass:"honor-title"},[t._v("荣获")]),t._v(" "),t._l(t.resumeData.head.honor.split("、"),function(e){return s("p",[t._v(t._s(e))])})],2),t._v(" "),s("div",{staticClass:"interest"},[t._m(3),t._v(" "),s("p",t._l(t.resumeData.head.interest.split("、"),function(e){return s("span",{staticClass:"inte-span"},[t._v(t._s(e))])}),0)]),t._v(" "),s("div",{staticClass:"skill"},[t._m(4),t._v(" "),t._l(t.resumeData.head.speciality.split("、"),function(e,a){return s("div",{staticClass:"sk"},[t._v("\n          "+t._s(e)+"\n          "),s("div",{staticClass:"sk-wrap"},[s("span",{staticClass:"sk-per",style:{width:t.resumeData.head.specialityPer.split("、")[a]+"%"}})])])})],2)]),t._v(" "),s("section",{staticClass:"section-right"},[s("div",{staticClass:"blog-box clearfloat"},[s("div",{staticClass:"blog"},[s("div",{staticClass:"link github"},[s("i",{staticClass:"icon-github-alt icon-1x"}),t._v("Github:\n            "),s("a",{attrs:{target:"_blank",href:"https://github.com/maxcong001"}},[t._v(t._s(t.resumeData.blogLink.github))])]),t._v(" "),s("div",{staticClass:"link personal-blog"},[s("i",{staticClass:"icon-flag icon-1x"}),t._v("技术博文:\n            "),s("a",{attrs:{target:"_blank",href:"https://blog.csdn.net/Max_Cong"}},[t._v(t._s(t.resumeData.blogLink.blog))])]),t._v(" "),s("div",{staticClass:"link personal-blog"},[s("i",{staticClass:"icon-flag icon-1x"}),t._v("微信公众号:\n            "),s("a",{attrs:{target:"_blank",href:"https://blog.csdn.net/Max_Cong"}},[t._v(t._s(t.resumeData.blogLink.wechat))])])])]),t._v(" "),s("div",{staticClass:"experience work-experience"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-name"},[t._v("工作经验")]),t._v(" "),s("div",{staticClass:"title-date"},[t._v(t._s(t.resumeData.workExperience.time))])]),t._v(" "),t._l(t.resumeData.workExperience.experience,function(e){return s("div",{staticClass:"show"},[e.name?s("div",{staticClass:"item"},[s("div",{staticClass:"item-title"},[s("span",{staticClass:"item-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"item-skill"},[t._v(" "+t._s(e.skill))]),t._v(" "),s("span",{staticClass:"item-date"},[t._v(t._s(e.time))])]),t._v(" "),s("ul",t._l(e.describe,function(e){return""!=e?s("li",[t._v(t._s(e))]):t._e()}),0)]):t._e()])})],2),t._v(" "),s("div",{staticClass:"experience project-experience"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-name"},[t._v("项目经验")]),t._v(" "),s("div",{staticClass:"title-date"},[t._v(t._s(t.resumeData.projectExperience.time))])]),t._v(" "),t._l(t.resumeData.projectExperience.experience,function(e){return s("div",{staticClass:"show"},[e.name?s("div",{staticClass:"item"},[s("div",{staticClass:"item-title"},[s("span",{staticClass:"item-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"item-skill"},[t._v("/ "+t._s(e.skill))]),t._v(" "),s("span",{staticClass:"item-date"},[t._v(t._s(e.time))])]),t._v(" "),s("ul",t._l(e.describe,function(e){return""!=e?s("li",[t._v(t._s(e))]):t._e()}),0)]):t._e()])})],2),t._v(" "),s("div",{staticClass:"experience skill-experience"},[t._m(5),t._v(" "),t._l(t.resumeData.skill,function(e){return s("div",{staticClass:"show"},[e.type?s("div",{staticClass:"item"},[s("div",{staticClass:"item-title"},[s("span",{staticClass:"item-name"},[t._v(t._s(e.type))])]),t._v(" "),s("ul",t._l(e.describe,function(e){return s("li",[t._v(t._s(e))])}),0)]):t._e()])})],2),t._v(" "),s("div",{staticClass:"experience self-evaluation"},[t._m(6),t._v(" "),t._l(t.resumeData.selfAssessment,function(e){return s("p",{staticClass:"eval-detail"},[t._v(t._s(e))])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"icon-phone icon-2x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"icon-envelope-alt icon-2x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticClass:"item-title"},[this._v("教育背景")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticClass:"item-title"},[this._v("兴趣爱好")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticClass:"item-title"},[this._v("技能特长")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-name"},[this._v("掌握技能")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-name"},[this._v("自我评价")])])}]};var c=s("VU/8")(r,l,!1,function(t){s("gidW")},null,null).exports,_={name:"App",data:function(){return{resumeData:n.a}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")(_,v,!1,function(t){s("QuA3")},null,null).exports,u=s("/ocq"),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){s("RqNW")},"data-v-3b884edb",null).exports;a.a.use(u.a);var d=new u.a({routes:[{path:"/",name:"ShowResume",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:o},template:"<App/>"})},QuA3:function(t,e){},RqNW:function(t,e){},gidW:function(t,e){},lDYn:function(t,e){t.exports={head:{name:"丛明明",intention:"Linux C/C++ Java",tel:"15153229320",email:"savagecm@qq.com",address:"青岛",age:"1988.08.28",sex:"男",school:"青岛大学",graduation:"硕士",graduationTime:"2011-9-1 至 2014-7-1",major:"信号与信息处理",honor:"2016黑客马拉松一等奖",interest:"骑行、编程、篮球",speciality:"C++、C、java",specialityPer:"80、70、60"},blogLink:{github:"https://github.com/maxcong001",blog:"https://blog.csdn.net/Max_Cong",wechat:"来条消息"},workExperience:{time:"2013-7 至 今",experience:[{name:"青岛朗讯 - 实习",skill:"",time:"2013.07 - 2014.07",describe:["从事核心网iAGEF(access gateway control function)研发"]},{name:"青岛朗讯(现诺基亚)",skill:"",time:"2014.07 - 至今",describe:["从事电信核心网研发工作"]}]},projectExperience:{time:"",experience:[{name:"iAGCF研发",skill:"C/C++ H.248",time:"2013.07 - 2015.07",describe:["iAGCF(access gateway conntrol function)研发","将传统电话接入IMS核心网"]},{name:"FSDB 研发",skill:"C/C++ home-made in memory database",time:"2015.07 - 2016.07",describe:["FSDB 是一种subscrober DB，记录用户的service配置"]},{name:"IM 研发",skill:"C/C++ TCP/IP",time:"2016.07 - 2017.07",describe:["IM(internal messaged)，是诺基亚purple核心网底层网络通信基础。独立完成TCP部分功能","至今运行在核心网产品中。"]},{name:"DB wrapper 研发",skill:"C/C++ redis",time:"2017.07 - 至今",describe:["DBwrapper是诺基亚Buliding Block 成员之一，为诺基亚所有部门提供高可用的C++ redis client"]},{name:"PRS 研发",skill:"Java C/C++ SIP REST API",time:"2018.07 - 至今",describe:["PRS 是诺基亚提供的REST API, 通过REST API赋予用户call control等呼叫控制能力"]}]},skill:[{type:"FOSS&&innovation",describe:["诺基亚FOSS docker team 核心成员","诺基亚Redis team 成员","诺基亚 GIM(innovation) idea manager"]},{type:"编程语言",describe:["精通Linux C/C++, C++11, modern C++","熟练使用Java"]},{type:"框架",describe:["精通libevnet，boost asio，libuv等等，各种TCP/UDP 底层通信框架","熟悉java netty等通用框架"]}],selfAssessment:["   stay hungry, stay foolish"]}}},["NHnr"]);
//# sourceMappingURL=app.3202beb115dbaba4e359.js.map