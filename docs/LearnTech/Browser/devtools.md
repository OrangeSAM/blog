---
title: 开发者工具的使用
---
Console 对象是JavaScript的原生对象
常见用途是显代码运行时的错误信息，
提供了一个命令行接口，用于与网页代码互动


控制台选项卡
Resources 查看网页加载的各种资源文件，诸如代码，字体，css，脚本，以及在硬盘上创建的各种内容，诸如本地缓存，cookie，localstorage
Network 查看网页的http通信情况
Sources 调试JavaScript代码
Timeline 查看网页各种行为随时间变化的情况
Profiles 查看网页的性能情况，比如cpu和内存消耗
Audits 提供网页优化的建议

console对象的方法
.log() .info() .debug()
Log 方法会自动在每次输出的结尾，添加换行符
Console.log () 方法支持占位符格式，不同格式的数据需使用对应格式的占位符
%s 字符串 
%d 十进制整数
%i 十进制 八进制 十六进制整数 
%f 浮点数
%o 对象的链接
%c css格式字符串
console.log('%cThis text is styled!',
  'color: red; background: yellow; font-size: 24px;'
)


如果参数是一个对象，console.log()会显示该对象的值

Console.info()和console.debug()都是console.log方法的别名，用法完全一样

Console对象的所有方法都可以被覆盖，这意味着开发者可以重写console.log方法

Warn() error()
Warn 方法和error方法也是输出信息
本质上 log方法是写入标准输出 
warn和error方法是写入标准错误

console.table() 用于制表

Console.count() 用于计数

Console.dir() 
dir方法用来对一个对象进行检查，并以易于阅读和打印的格式显示



console对象 - 从小就爱跺跺跺 - SegmentFault 思否
https://segmentfault.com/a/1190000004528137



Chrome 控制台console的用法(js调试) - CSDN博客
https://blog.csdn.net/qq_26676207/article/details/52954112

