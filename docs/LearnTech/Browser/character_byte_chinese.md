---
title: 字符字节与汉字
---
UTF-8 UTF-16 ASII

文化上的不平衡——对于欧美地区一些以英语为母语的国家 UTF-8 简直是太棒了，因为它和 ASCII 一样，一个字符只占一个字节，没有任何额外的存储负担；但是对于中日韩等国家来说，UTF-8 实在是太冗余，一个字符竟然要占用 3 个字节，存储和传输的效率不但没有提升，反而下降了。所以欧美人民常常毫不犹豫的采用 UTF-8，而我们却老是要犹豫一会儿

作者：林建入
链接：https://www.zhihu.com/question/24572900/answer/28284322
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



• BMP 的字符是 Unicode 中最基础和最常用的一部分，以 UTF-16 编码时使用2字节，以 UTF-8 编码时使用1至3字节。
• 超出 BMP 的字符以 UTF-16 或 UTF-8 编码都需要4字节。
• 另外还有一个比较少用的编码形式，UTF-32，它编码任何 Unicode 字符都需要4个字节。

作者：梁海
链接：https://www.zhihu.com/question/22881537/answer/22947465
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


Unicode是一个字符编码的标准规范，而UTF-8/UTF-16/UTF-32只是对这个标准规范的具体实现。

来自 <https://www.zhihu.com/question/22881537> 

一个字节的字符和两个字节的字符，这些字节如何分组
一个或多个字节是怎么映射到字符上

编码定义了两件事
	字节是怎么分组的 如8 bits和16bits一组，这也被称作编码单元
	编码单元和字符之间的映射关系，例如，在ASCII码中，十进制65映射到字幕A上
	
Unicode只是一个用来映射字符和数字的标准。它对支持字符的数量没有限制，也不要求字符必须占两个、三个或者其它任意数量的字节。

来自 <http://www.freebuf.com/articles/others-articles/25623.html> 
unicode编码
	utf-8和utf-16
	
在utf-8中，0-127的字符用一个字节表示，使用和US-ASCII相同的编码，只有128号及以上的字符采用2个，3个或者4个字节来表示，因此，UTF-8被称为可变长度编码

utf-16也是可变长度解码方案，它使用2个或4个字节来存储字符

ANSI American national  standard institute
ASCII American standard code for information interchange

Unicode是一个编码方案

彻底搞懂字符编码(unicode,mbcs,utf-8,utf-16,utf-32,big endian,little endian...)_雪儿浅浅_新浪博客  http://blog.sina.com.cn/s/blog_4aa887440101arks.html 

Unicode(UTF-8, UTF-16)令人混淆的概念 - 老金 - 博客园  http://www.cnblogs.com/kingcat/archive/2012/10/16/2726334.html


我们不客气地把那些127号之后的奇异符号们直接取消掉, 规定：一个小于127的字符的意义与原来相同，但两个大于127的字符连在一起时，就表示一个汉字，

来自 <https://www.zhihu.com/question/23374078> 

中国的程序员们看到这一系列汉字编码的标准是好的，于是通称他们叫做 “DBCS“（Double Byte Charecter Set 双字节字符集）。在DBCS系列标准里，最大的特点是两字节长的汉字字符和一字节长的英文字符并存于同一套编码方案里，因此他们写的程序为了支持中文处理，必须要注意字串里的每一个字节的值，如果这个值是大于127的，那么就认为一个双字节字符集里的字符出现了。那时候凡是受过加持，会编程的计算机僧侣们都要每天念下面这个咒语数百遍： “一个汉字算两个英文字符！一个汉字算两个英文字符……”

作者：于洋
链接：https://www.zhihu.com/question/23374078/answer/69732605
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

“字节”是一个8位的物理存贮单元，而“字符”则是一个文化相关的符号

来自 <https://www.zhihu.com/question/23374078> 


(1 封私信 / 4 条消息)Unicode 和 UTF-8 有何区别？ - 知乎  https://www.zhihu.com/question/23374078









