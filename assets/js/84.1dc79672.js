(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{307:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-vue全家桶原理和实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue全家桶原理和实现"}},[s._v("#")]),s._v(" 1. Vue全家桶原理和实现")]),s._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("ol",[a("li",[s._v("Vue.use到底做了什么")]),s._v(" "),a("li",[s._v("为什么要把router的实例挂载到Vue实例的选项中")]),s._v(" "),a("li",[s._v("为什么要加上router-view")]),s._v(" "),a("li",[s._v("为什么可以直接用router-link和router-view")])]),s._v(" "),a("h3",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[s._v("#")]),s._v(" Vue-Router")]),s._v(" "),a("p",[s._v("单页面应用程序中，url发生变化时候，不能刷新，显示对应视图内容")]),s._v(" "),a("h3",{attrs:{id:"要解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要解决的问题"}},[s._v("#")]),s._v(" 要解决的问题")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("spa页面不能刷新")]),s._v(" "),a("ul",[a("li",[s._v("hash #/about")]),s._v(" "),a("li",[s._v("history api /about")])])]),s._v(" "),a("li",[a("p",[s._v("根据url显示对应的内容")]),s._v(" "),a("ul",[a("li",[s._v("router-view")]),s._v(" "),a("li",[s._v("数据响应式：current变量持有url地址，一旦变化，动态重新执行render")])])])]),s._v(" "),a("h3",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("ol",[a("li",[s._v("实现一个插件\n"),a("ul",[a("li",[s._v("实现VueRouter类\n"),a("ul",[a("li",[s._v("处理路由选项")]),s._v(" "),a("li",[s._v("监控url变化，hashchange")]),s._v(" "),a("li",[s._v("响应这个变化")])])]),s._v(" "),a("li",[s._v("实现install方法\n"),a("ul",[a("li",[s._v("$router注册")]),s._v(" "),a("li",[s._v("两个全局组件")])])])])])]),s._v(" "),a("h3",{attrs:{id:"笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔记"}},[s._v("#")]),s._v(" 笔记")]),s._v(" "),a("ol",[a("li",[s._v("this.$options 获得当前组件的选项配置")]),s._v(" "),a("li",[s._v("h 函数是什么，\n"),a("ul",[a("li",[s._v("h是render函数调用是，框架传入的createElement")]),s._v(" "),a("li",[s._v("等同于react中createElement，返回vdom")]),s._v(" "),a("li",[s._v("再多研究下")])])]),s._v(" "),a("li",[s._v("什么是jsx")]),s._v(" "),a("li",[s._v("Vue.util. defineReactive()")]),s._v(" "),a("li",[s._v("再研究下Object.defineProperty")])]),s._v(" "),a("h3",{attrs:{id:"作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作业"}},[s._v("#")]),s._v(" 作业")]),s._v(" "),a("p",[s._v("实现getters")]),s._v(" "),a("p",[a("em",[s._v("写第一课作业实现getters遇到的问题")])]),s._v(" "),a("ol",[a("li",[s._v("getters本质上就是用户给我们一个函数的实现，当用户在使用这个函数的时候，通过运算这个函数为用户返回一个确认的值。")]),s._v(" "),a("li",[s._v("像commit那样处理getters的话，为啥getters没反应（更新，因为getters不是函数）")]),s._v(" "),a("li",[s._v("后面又觉得应该像state那样处理getters，但是get方法不能拿到参数")]),s._v(" "),a("li")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我想为这个getters bind 到当前state上，但是我不知道他的getters是啥")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$$state\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("最开始我是没有很明确的思路，看到state、commit和dispatch的实现就想着先照着抄。但实际上后面就陷阱里头了。\n现在醒悟过来分析一看，state的实现思路是一类，commit和dispatch的实现思路又是一类。state只需要实现获取就好了，后两个是需要实现方法。\n但这两者的思路，getters都套用不上。")]),s._v(" "),a("p",[a("em",[s._v("错误思路一")]),s._v("，这个思路没用的原因是getters点出来的东西不是个函数，他是一个直接取的动作。所以如下的方法不会被触发。有点牛头不对马嘴的感觉。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拿到的value，应该是用户想要用的getters，比如这里的doubleCounter")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" getter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_getters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("getter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unknown getters'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("em",[s._v("错误思路二")]),s._v("，这个思路是完全走到了死胡同。问题在于，get不知道当前用户点的是啥。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我想为这个getters bind 到当前state上，但是我不知道他的getters是啥")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$$getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$$getters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'222'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"_2-手写vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-手写vue"}},[s._v("#")]),s._v(" 2. 手写Vue")]),s._v(" "),a("p",[s._v("数据响应式原理\nObject.defineProperty()\nVue.util.defineReactive()\nVue.observable()\nnew Vue({\ndata(){}\n})")]),s._v(" "),a("ol",[a("li",[s._v("MVVM框架的三要素：数据响应式、模板引擎及其渲染")])]),s._v(" "),a("p",[s._v("依赖收集")]),s._v(" "),a("h2",{attrs:{id:"vue2源码剖析01"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2源码剖析01"}},[s._v("#")]),s._v(" Vue2源码剖析01")]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("\n.\n|-vue\n  |-.circleci\n  |-.git\n  |  |-hooks\n  |  |-info\n  |  |-logs\n  |  |  |-refs\n  |  |  |  |-heads\n  |  |  |  |-remotes\n  |  |  |  |  |-origin\n  |  |-objects\n  |  |  |-info\n  |  |  |-pack\n  |  |-refs\n  |  |  |-heads\n  |  |  |-remotes\n  |  |  |  |-origin\n  |  |  |-tags\n  |-.github\n  |  |-ISSUE_TEMPLATE\n  |-.idea\n  |  |-inspectionProfiles\n  |-benchmarks\n  |  |-big-table\n  |  |-dbmon\n  |  |  |-lib\n  |  |-reorder-list\n  |  |-ssr\n  |  |-svg\n  |  |-uptime\n  |-dist\n  |-examples // 范例\n  |  |-commits\n  |  |-elastic-header\n  |  |-firebase\n  |  |-grid\n  |  |-markdown\n  |  |-modal\n  |  |-move-animations\n  |  |-select2\n  |  |-svg\n  |  |-todomvc\n  |  |-tree\n  |-flow\n  |-packages // 核心代码之外的独立库\n  |  |-vue-server-renderer\n  |  |  |-types\n  |  |-vue-template-compiler\n  |  |  |-types\n  |  |-weex-template-compiler\n  |  |-weex-vue-framework\n  |-scripts\n  |  |-git-hooks\n  |-src\n  |  |-compiler // 编译器相关\n  |  |  |-codegen\n  |  |  |-directives\n  |  |  |-parser\n  |  |-core // 核心代码，重要\n  |  |  |-components // 通用组件如keep-alive\n  |  |  |-global-api // 全局api\n  |  |  |-instance // 构造函数\n  |  |  |  |-render-helpers \n  |  |  |-observer // 响应式相关\n  |  |  |-util\n  |  |  |-vdom // 虚拟dom\n  |  |  |  |-helpers\n  |  |  |  |-modules\n  |  |-platforms\n  |  |  |-web\n  |  |  |  |-compiler\n  |  |  |  |  |-directives\n  |  |  |  |  |-modules\n  |  |  |  |-runtime\n  |  |  |  |  |-components\n  |  |  |  |  |-directives\n  |  |  |  |  |-modules\n  |  |  |  |-server\n  |  |  |  |  |-directives\n  |  |  |  |  |-modules\n  |  |  |  |-util\n  |  |  |-weex\n  |  |-server\n  |  |  |-bundle-renderer\n  |  |  |-optimizing-compiler\n  |  |  |-template-renderer\n  |  |  |-webpack-plugin\n  |  |-sfc\n  |  |-shared\n  |-test\n  |  |-e2e\n  |  |  |-specs\n  |  |-helpers\n  |  |-ssr\n  |  |  |-fixtures\n  |  |-unit\n  |  |  |-features\n  |  |  |  |-component\n  |  |  |  |-directives\n  |  |  |  |-filter\n  |  |  |  |-global-api\n  |  |  |  |-instance\n  |  |  |  |-options\n  |  |  |  |-transition\n  |  |  |-modules\n  |  |  |  |-compiler\n  |  |  |  |-observer\n  |  |  |  |-server-compiler\n  |  |  |  |-sfc\n  |  |  |  |-util\n  |  |  |  |-vdom\n  |  |  |  |  |-modules\n  |  |  |  |  |-patch\n  |  |-weex\n  |  |  |-cases\n  |  |  |  |-event\n  |  |  |  |-recycle-list\n  |  |  |  |  |-components\n  |  |  |  |-render\n  |  |  |-compiler\n  |  |  |-helpers\n  |  |  |-runtime\n  |  |  |  |-components\n  |-types\n  |  |-test\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br")])]),a("p",[s._v("运行时和编译器又是啥")]),s._v(" "),a("p",[s._v("浏览器快捷键\n打开文件 ctrl + p\n运行命令 ctrl + shift + p\nD:\\Repo\\openSource\\famous\\vue\\src\\platforms\\web\\entry-runtime-with-compiler.js // 打包入口文件\nrender > template > el")]),s._v(" "),a("h2",{attrs:{id:"vue2源码剖析02"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2源码剖析02"}},[s._v("#")]),s._v(" Vue2源码剖析02")]),s._v(" "),a("h2",{attrs:{id:"vue2源码剖析03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2源码剖析03"}},[s._v("#")]),s._v(" Vue2源码剖析03")])])}),[],!1,null,null,null);n.default=e.exports}}]);