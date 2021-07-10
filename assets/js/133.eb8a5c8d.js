(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{257:function(t,_,v){"use strict";v.r(_);var a=v(3),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/19/16acf409b811afe5?w=960&h=545&f=jpeg&s=237414",alt:"berlin wall"}}),t._v("\n想直接看方法请拉到最后。")]),t._v(" "),v("h2",{attrs:{id:"为什么要绕过门卫"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要绕过门卫"}},[t._v("#")]),t._v(" 为什么要绕过门卫")]),t._v(" "),v("p",[t._v("读书那会，应该大部分人都经历过门卫不让进校门的情况，为什么会这样呢，因为你被保安认出来了，没穿校服带校牌还想进校门（即证明不了你是该校学生），门都没有。遇到被关上的门，你就应该主动找一扇窗。比如从小门溜进去。简言之，你想去到一些你资格不够的地方，而且被认出来了。")]),t._v(" "),v("p",[t._v("这个时代的人应该都知道上网点着点着，可能就给你显示个404了（这里只讨论被ban而导致的404）。这个时候如果想通过正常的方式（一样的网络环境，一样的操作）是无法打开你想看的网页的。所以你得绕过这个**机制，或者使个障眼法。")]),t._v(" "),v("h2",{attrs:{id:"门卫怎么知道该拦你"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#门卫怎么知道该拦你"}},[t._v("#")]),t._v(" 门卫怎么知道该拦你")]),t._v(" "),v("p",[t._v("因为你没穿校服而且还想进去学校。")]),t._v(" "),v("p",[t._v("在浏览器中，想去到某个网站是必须输入网址域名的，那这样就很简单了，**机制拿着你要去地方的地址跟需要ban的地址名单对比下就知道该不该拦你了。")]),t._v(" "),v("h2",{attrs:{id:"如何通过门卫的检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何通过门卫的检查"}},[t._v("#")]),t._v(" 如何通过门卫的检查")]),t._v(" "),v("p",[t._v("穿校服呗，爬墙呀。")]),t._v(" "),v("p",[t._v("有说道高一尺魔高一丈，尽管你有名单，那我换个地址不就完了。（这里涉及到的技术知识是，我们所访问的网站是有两个地址，一个是域名地址，另一个是IP地址，域名地址都对应一个IP地址）名单上加一个地址，被ban的地址只要换域名换IP地址就好了。但这种方法一般是小网站用（比如色情网站），只要地址换的够快，你就封不了我:)。但其实也是有对应方法封的。大网站，比如谷歌，是不可能因为你访问不了而换个IP地址的。这也有对应的方法，你要出去学校于是跟门卫说我去边上文具店买支笔，但其实是偷偷溜去隔条街的网咖。")]),t._v(" "),v("h2",{attrs:{id:"一些封锁相关的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一些封锁相关的概念"}},[t._v("#")]),t._v(" 一些封锁相关的概念")]),t._v(" "),v("p",[t._v("就好比有些公司在办公室会禁止职员使用QQ微信或者插入U盘，这些都是使得公司内部信息独立于互联网的一种形式。我们不能访问谷歌也是这样。")]),t._v(" "),v("blockquote",[v("p",[t._v("封锁的主要技术和形式")])]),t._v(" "),v("ul",[v("li",[t._v("端口封锁、IP封锁\n"),v("ul",[v("li",[t._v("因为访问网站的默认端口是80，封锁后就无法访问了；")]),t._v(" "),v("li",[t._v("IP封锁就是上面说到的名单，检测到对该IP的访问即拦截。")])])]),t._v(" "),v("li",[t._v("DNS域名劫持\n"),v("ul",[v("li",[t._v("因为在对某域名发起请求之前，是需要通过DNS服务查询对应IP地址；")]),t._v(" "),v("li",[t._v("那**机制可以在你查询的时候返回错误IP地址。")])])]),t._v(" "),v("li",[t._v("关键字报文过滤\n"),v("ul",[v("li",[t._v("知道IP地址后会发起相关的HTTP请求，检测到请求中包含封锁关键字后即拦截。")])])]),t._v(" "),v("li",[t._v("流量监控\n"),v("ul",[v("li",[t._v("检测流量的流向和频率")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("对策")])]),t._v(" "),v("ul",[v("li",[t._v("代理服务器（借助国外主机转发数据）\n"),v("ul",[v("li",[t._v("使用较广的方法，利用正常的服务器进行中转请求")])])]),t._v(" "),v("li",[t._v("数据加密（借助加密软件）\n"),v("ul",[v("li",[t._v("使得**机制无法检测到请求内容")])])]),t._v(" "),v("li",[t._v("使用安全连接VPN\n"),v("ul",[v("li",[t._v("在请求方和接受方建立专用网络通道")])])])]),t._v(" "),v("h2",{attrs:{id:"一些xx技术的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一些xx技术的原理"}},[t._v("#")]),t._v(" 一些XX技术的原理")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("改hosts，原理是直接访问对应IP地址，省去根据域名查询IP地址的步骤，但也遇到IP地址被封的情况。")])]),t._v(" "),v("li",[v("p",[t._v("VPN，加密且中转请求。")])])]),t._v(" "),v("h2",{attrs:{id:"轻巧的过墙梯。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#轻巧的过墙梯。"}},[t._v("#")]),t._v(" 轻巧的过墙梯。")]),t._v(" "),v("p",[t._v("在交流群见过不少的人请教如何XX，然而却得到一句自己搭呗。搞技术的朋友可能就麻利的搜索去了，小白可能就懵逼了。自己搭？用什么搭，怎么搭，搭什么都成了问题。几番搜索之后得到的是满满的懵逼，可能索性就放弃了。我自己也会觉得自己搭确实是一件繁琐的事。")]),t._v(" "),v("p",[t._v("所幸找到一个简便的方法，访问这个网站"),v("a",{attrs:{href:"https://www.thatseed.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("thatseed"),v("OutboundLink")],1),t._v(" 注册后往里面充钱，只要一块就可以使用很久。此后下载帮助我们XX的工具，安装后需要配置。配置极其简单，选择你要使用的一个节点。在工具上右键点击服务器→扫描屏幕上的二维码。配置完成，尝试访问谷歌。")]),t._v(" "),v("p",[t._v("完美؏؏☝ᖗ乛◡乛ᖘ☝؏؏")])])}),[],!1,null,null,null);_.default=r.exports}}]);