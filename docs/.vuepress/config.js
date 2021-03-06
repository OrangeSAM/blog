module.exports = {
  title: '刘一笔的博客',
  description: '博客，日常记录，JavaScript，CSS，LeetCode，Node，HTTP',
  serviceWorker: true,
  // base: '/blog/',
  plugins: ['@vuepress/back-to-top', '@vuepress/pwa', require('./plugin')],
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href: '/logo.jpg'}],// 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.jpg' }],
    ['link', { rel: 'mask-icon', href: '/logo.jpg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 这是部署到github相关的配置
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4']
  },
  evergreen: true,
  home: true,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '一笔写于',
    // 导航栏配置
    nav: [
      {text: '技术学习', link: '/LearnTech/'},
      {text: '项目记录', link: '/Projects/'},
      {text: 'LeetCode', link: '/LeetCode/'},
      {text: '阅读记录', link: '/Reading/'},
      {text: '闪念', link: '/IdeaPills/'},
      {text: '编程工具', link: '/CodingTool/'},
      {text: 'Github', link: 'https://github.com/OrangeSAM'},
      {
        text: "友链",
        items: [
          {
            text: "若川博客",
            link: "https://www.lxchuan12.cn/"
          },
          {
            text: "森淼",
            link: "https://wind-nest.com/"
          },
          {
            text: "北风",
            link: "https://www.mybeifeng.com/"
          }
        ]
      }
    ],
    // 侧边栏配置
    sidebar: {
      '/LearnTech/': [
        {
          title: "Vue", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 4, // 可选的, 默认值是 1
          children: [
            "Vue/vue_component_communication",
            "Vue/vue_doc_record",
            "Vue/vue_geektime",
            "Vue/vue_router",
            "Vue/vue_source_code_Hcysun",
            "Vue/vue_source_code_Huangyi",
            "Vue/vuex",
            "Vue/element_ui",
            "Vue/virtual_dom",
          ]
        },
        {
          title: "JavaScript", // 必要的
          // path: "/MiniProgram/" // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            "Javascript/apply_call_bind",
            "Javascript/event_bind",
            "Javascript/event_loop_translate",
            "Javascript/babel",
            "Javascript/filter_in_array",
            "Javascript/forin_forof",
            "Javascript/func_declare_expression",
            "Javascript/hand_writing",
            "Javascript/Iterator_generator",
            "Javascript/js_modules",
            "Javascript/js_arrow_func",
            "Javascript/js_async",
            "Javascript/js_dataType",
            "Javascript/js_datatype_convert",
            "Javascript/js_destructuring_assign",
            "Javascript/js_excute_context",
            "Javascript/js_inherit",
            "Javascript/js_new",
            "Javascript/js_new_api",
            "Javascript/js_oop",
            "Javascript/js_proto_chain",
            "Javascript/let_const_interview",
            "Javascript/new_string",
            "Javascript/property_modification",
            "Javascript/reduce_in_array",
            "Javascript/this",
            "Javascript/what_is_js",
            "Javascript/tool_function",
            "Javascript/js_grammar",
            "Javascript/advanced_program_design",
          ]
        },
        {
          title: "CSS", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "CSS/BFC",
            "CSS/block_inline_inlineBlock",
            "CSS/box_module",
            "CSS/css_font",
            "CSS/css_hard_to_learn",
            "CSS/flex",
            "CSS/mobile_page",
            "CSS/preudo",
            "CSS/Sass",
            "CSS/css_img_stretch",
            "CSS/width_height",
          ]
        },
        {
          title: "Node", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Node/about_node",
            "Node/fs_module",
            "Node/http_url_module",
            "Node/mongoDB",
            "Node/node_combat",
          ]
        },
        {
          title: "HTTP", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "HTTP/http_cache",
            "HTTP/illustrate_http",
          ]
        },
        {
          title: "HTML", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "HTML/Dom",
            "HTML/HTML5",
          ]
        },
        {
          title: "浏览器", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Browser/character_byte_chinese",
            "Browser/how_browser_works",
            "Browser/url_to_display",
            "Browser/devtools",
            "Browser/cache",
          ]
        },
        {
          title: "开课吧", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Kaikeba/chapter_2",
          ]
        },
        // {
        //   title: "小程序", // 必要的
        //   // path: '/about/',      // 可选的, 应该是一个绝对路径
        //   collapsable: true, // 可选的, 默认值是 true,
        //   sidebarDepth: 2, // 可选的, 默认值是 1
        //   children: [
        //     "/MiniProgram/",
        //   ]
        // },
        {
          title: "Flutter", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Flutter/flutter_geektime",
            "Flutter/flutter_learn",
          ]
        },
        {
          title: '网课',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            "NetCourse/office_ability",
            "NetCourse/FEer_advance",
            "NetCourse/js_core",
            "NetCourse/js_deep",
            "NetCourse/fe_attack",
          ]
        }
      ],
      '/Projects/': [
        {
          title: "项目记录", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 4, // 可选的, 默认值是 1
          children: [
            "make_blog_with_vuepress",
            "yibi_calendar",
            "page_screenshot",
            "node_getArticle",
            "node_todo",
            "puppeteer_get_image",
            "music_bulk_download",
          ]
        },
        {
          title: "Vue造轮子", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "vue_wheels_start",
            "vue_wheels_button",
            "vue_wheels_layout",
            "vue_wheels_grid",
            "vue_wheels_input",
            "vue_wheels_toast",
            "vue_wheels_popover",
            "vue_wheels_tabs",
            "vue_wheels_compos_name",
            "vue_wheels_primary_conclusion"
          ]
        },
      ],
      '/LeetCode/': [
        {
          title: "LeetCode", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "1.two_num_sum",
            "7.integer_reverse",
            "9.palindromic",
            "13.romeToInteger",
            "14.comon_prefix",
            "20.valid_brace",
            "26.delete_duplicate_in_array",
            "27.delete_item",
            "28.achieve_strstr",
            "35.find_insert_position",
            "67.binary_sum",
            "121.chance_to_trade",
            "189.reverse_array"
          ]
        }
      ],
      '/CodingTool/': [
        {
          title: "Git", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Git/git&github",
            "Git/how_to_keep_sync_with_fork_project",
            "Git/how_to_use_git",
            "Git/git_geektime"
          ]
        },
        {
          title: "NPM", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "NPM/how_to_use",
          ]
        },
        {
          title: "Webpack", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Webpack/webpack_geektime",
            "Webpack/webpack_lagou",
          ]
        }
      ],
      '/Others/': [
        {
          title: "其他", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "cycling_taiwan",
            "anything_about_wechat",
            "cheerio-readme",
            "command_line_trick",
            "cycling_taiwan",
            "frame_lib_sdk",
            "get_outdoor_info",
            "interview",
            "interview_summary",
            "MVC、MVP&MVVM",
            "wechatread_use",
            "FEwechater",
            "make_blog",
            "the_thanks_to_zcl",
            "get_my_money_back",
            "bug_analysis",
            "wrong",
            "try_to_touch_the_market",
            'life_efficiency',
            'the_cognition_gain_in_market'
          ]
        }
      ],
      '/Reading/': [
        {
          title: "阅读记录", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            'xiaomin_qin',
            'writing_is_investing',
            'how_to_learn_efficiently',
            'invest_for_decades',
            'the_rich_father_investment',
            'dog_money',
            'index_funds',
            'charles_munger',
            'replay',
            'value_what_i_thought_during_the_investment',
            'how_to_do_well_in_internet',
            'civilization_modernization_valueInvestment_china',
            'xiaoping_cushijian'
          ]
        }
      ],
      '/IdeaPills/': [
        {
          title: "闪念", // 必要的
          // path: '/about/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "idea_term_1",
            "idea_term_2",
            "idea_term_3",
            "idea_term_4",
            "idea_term_5",
            "idea_term_6",
            "idea_term_7",
            "idea_term_8",
            "idea_term_9",
            "idea_term_10",
            "idea_term_11",
          ]
        }
      ],
    }
  }
};
