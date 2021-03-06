---
title: 函数声明和表达式
---

## 函数声明
	函数声明以function关键字开头，接着必须的函数（变量）名和以逗号分隔的可选参数列表，再接着就是大括号封装的函数体，函数声明必须是一个单独的JavaScript语句
	
## 函数表达式
	在任何情况下都是其他JavaScript语句的一部分（比如赋值表达式等号的右侧，函数的参数）的函数被称为函数表达式，或者是立即执行函数，或者被运算符修饰
	
此外，函数声明必须要有函数名，而函数表达式的函数名可以省略。

立即执行函数必须用括号包裹

解释器在解析JavaScript代码时对于这两种方式并不是一视同仁的。解释器会首先读取函数声明，并使其在执行任何代码之前可用，而对于函数表达式，则必须等到解释器执行到它所在的代码行，才会被真正解析执行

	console.log(add(1,2));   //"3"
	console.log(sub(5,3));   //"unexpected identifier"，报错
	function add(a1,a2){
	    return a1+a2;
	}
	var sub = function(a1,a2){
	    return a1-a2;
	}
	
	来自 <https://www.cnblogs.com/neusc/p/5816732.html> 
	
这也是函数提升的原因，也就是说在执行环境的创建阶段，（函数被调用但还没有开始执行）
