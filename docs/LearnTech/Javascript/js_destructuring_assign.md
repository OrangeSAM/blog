---
title: JS | 解构赋值
---
数组的解构赋值
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
解构不成功，变量的值都会等于undefined。

如果等号的右边不是数组，或者严格的说，不是可遍历解构，那么将会报错

对于Set结构，也可以使用数组的解构赋值，事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值，


解构赋值允许指定默认值,默认值生效的条件是，对象的属性值严格等于undefined
let [foo = true]=true
foo//true
 
let [x,y='b']=['a']; //x='a' y='b'
let [x,y='b']=['a',undefined] //x='a',y='b'


对象的结构赋值
let {foo,bar}={foo:'aaa',bar:'bbb'};
foo //'aaa'
bar //'bbb'

let {foo:baz}={foo:'aaa',bar:'bbb'};
baz // 'aaa'

对象的解构与数组的有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
而由于对象的属性没有次序，变量必须与属性同名。

字符串的解构赋值
使用数组的解构赋值的形式，如果等号右边不是一个数组，
会将其转换成类数组对象 有length属性


数值和布尔值的解构赋值
	如果等号右边是数值和布尔值，则会专为对象
		let {toString: s} = 123;
		s === Number.prototype.toString
		去等式右边找一个叫toString的东西  把他交给s

解构赋值的规则是 只要等号右边的值不是对象或数组，就先将其转为对象。
由于undefined和null 无法转为对象，所以对他们进行解构赋值，都会报错。


函数的参数也可以使用解构赋值
	
	
不能使用圆括号的情况
	变量声明语句
	函数参数
	赋值语句的模式

解构赋值的用途
	交换变量的值
	从函数返回多个值
	函数参数的定义
	提取JSON数据
	函数参数的默认值
	遍历Map解构
	


function getB1({name="zhufeng",age=100}={}){
	console.log(name,age);
}
function getB2({name,age}={name:'zhufeng',age:100}){
	console.log(name,age);
}
当传入空对象时，getB2打印出的name和age 都是undefined


