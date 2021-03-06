---
title: javascript语法
---
JavaScript内部，所有数字都是以64位浮点数形式存储，即便整数也是如此。

数值的进制
	使用字面量（literal）直接表示一个数值时，JavaScript对整数提供四种进制的表示方法：
		十进制， 没有前导0的数值
		八进制，有前缀0o或00的数值，或者由前导0、且只用到0-7的八个阿拉伯数字的数值。
		十六进制，有前缀0x或0x的数值
		二进制，有前缀0b或0B的数值


Unicode是国际组织制定的可以容纳世界上所有文字和符号的字符编码方案。目前的Unicode字符分为17组编排，0x0000 至 0x10FFFF，每组称为平面（Plane），而每平面拥有65536个码位，共1114112个。然而目前只用了少数平面。UTF-8、UTF-16、UTF-32都是将数字转换到程序数据的编码方案。  
 '\u00A9' 表示 "©"
强制转换
主要指使用Number() string() Boolean()三个函数，
手动将各种类型的值，分别转换成数字、字符串或者布尔值。
空字符串转换为0
undefined转为NaN
null转为0


parseInt('42 cats')//42
parseInt('cats 52')
Number('42 cats')//NaN
parseInt逐个解析字符，而Number函数整体转换字符串的类型；
另外,parseInt和Number函数都会自动过滤一个字符串前导和后缀的空格。

自动转换
不同类型的数据互相运算
123+'abc' //'123abc'
对非布尔值类型的数据求布尔值
If('abc'){}  //true
对非数值类型的值使用一元运算符(即+和-)

Error实例对象是最一般的错误类型，在它的基础上，JavaScript还定义了其它6种错误对象。也就是说，存在Error的6个派生对象。
SyntaxError对象是解析代码时发生的语法错误。
ReferenceError对象是引用一个不存在的变量时发生的错误；
另一个触发场景是，将一个值分配给无法分配的对象，
比如对函数的运行结果或者this赋值。（this 对象不能被手动赋值）
RangeError对象是一个值超出有效范围时发生的错误。
（数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。）
TypeError对象是是变量或参数不是预期类型时发生的错误。
比如对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，
因为new命令的参数应该是一个构造参数。
URIError对象是URI相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
EvalError对象，eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再使用。
以上这6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个函数，代表错误提示信息。
开发者也可以自定义自己的错误对象。

throw语句的作用是手动中断程序执行，抛出一个错误。
throw也可以抛出自定义错误，他的参数可以是任何值。
对于JavaScript引擎来说，遇到throw语句，程序就中止了。

Try…catch结构
一旦发生错误，程序就中止执行。JavaScript提供了try…catch结构，允许多错误进行处理，选择是否往下执行。
Try…catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必须在最后运行的错误。 

圆括号
圆括号在JavaScript中有两种作用，一种表示函数的调用，另一种表示表达式的组合。

不使用分号的情况
For和while循环
For ( ; ; ){
}//没有分号
While (true){
}//没有分号
Do…while循环是有分号的
Do{ a--;}while(a>0);

分支语句：if switch  try
If(true){
}//没有分号
Switch(){
}//没有分号
Try{
}catch{
}//没有分号

函数的声明语句
Function f(){}//没有分号
注意，函数表达式仍然要使用分号
Var f=function f(){
};
以上三种情况，即使使用了分号，也并不会出错。


有些JavaScript代码压缩器不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果。

全局变量
JavaScript最大的语法缺点，可能就是全局变量对于任何一个代码块，都是可读可写。这对代码的模块化和重复使用，非常不利。如果不得不使用，可以考虑用大写字母表示变量名，这样更容易看出这个是全局变量.


变量声明

因此建议switch…case结构可以用对象结构代替。

console对象是JavaScript的原生对象。
Console.count()

Console.assert方法主要用于程序运行过程中，进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行。这样就相当于提示用用户，内部状态不正确。

控制台命令行API
getEventListeners(object)
getEventListeners(方法)返回一个对象，该对象的成员为object登记了回调函数的各种事件（比如click或keydown）,每个事件对应一个数组，数组的成员为该事件的回调函数

Keys(object),values(object)
Keys(object)方法返回一个数组，包含object的所有键名。
Values(object)方法返回一个数组，包含object的所有键值。

monitorEvents(object[,events]),unmonitorEvents(object[,events])


---
声明一个简单类型的变量，但也有相关内置方法。
```javascript
let a = 1
a.toString() // '1'
// 这是因为JS内部会对其进行临时转换
let temp = new Number(1)
return temp.toString()
// 这个temp只是临时的
let test = 1
test.temp = 2
test.temp // undefined
```