---
title: 前端高手进阶
---

04. 掌握CSS精髓：布局
- HTML决定页面的逻辑结构，CSS决定页面的视觉结构。
- 布局结构
   - 单列布局，谷歌结果页
   - 2列布局，element文档
   - 3列布局，github

12. 浏览器如何执行JavaScript代码
- 三个步骤，解析、解释、优化
- 解析
    - 词法分析 => Token，代码解析成令牌
    - 语法分析 => AST，令牌组装成语法树
- 解释
    - AST => 字节码


13. 区分浏览器中的进程与线程
- 进程是操作系统进行资源分配和调度的基本单位，线程是操作系统进行运算的最小单位。一个程序至少有一个进程，一个进程至少有一个线程。线程需要由进程来启动和管理。
- 而多线程没有分配独立的资源，线程之间数据都是共享的，也就意味着创建线程的成本更小，因为不需要分配额外的存储空间。
- GPU 绘制是个进程
- network service 是个进程
- V8代理解析工具进程
- 渲染进程
    - 渲染进程的任务是将 HTML、CSS 和 JavaScript 转化为⽤户可以与之交互的网页，每个渲染进程都会启动单独的渲染引擎线程和 JavaScript 引擎线程。还有事件触发线程。
- 拓展程序进程
    
14. 手写
