---
title: JS | 面向对象
---
来自面试核心知识课程

#### 对象属性的增强

##### 初始化一个对象

可以通过<u>new Object()</u>，<u>Object.create()</u>方法，或者使用<u>字面量</u>标记。

```javascript
//使用Object.create()生成一个空对象
Object.create(null)//完全为空，甚至没有__proto__

//ES5生成对象
var a=new Object() & var d={}
//上下完全等价
//ES6新增生成对象方式
var c=Object.create(Object.prototype)
```

##### 对象的缩写

```javascript
//ES6中更简短的语句
var a = "foo",
  b = 42,
  c = {};

// Shorthand property names (ES2015)
var o = { a, b, c };
//本来在ES5中应该是
var o = {
  a: a,
  b: b
};

// In other words,
console.log(o.a === { a }.a); // true
```

对象属性除了原始类型外，还可以是函数、getter、setter 方法。

ES6 中引入了一种更简短的语法，在对象中写入函数，可以去掉 function 关键字

##### 计算属性名

ES6 中，对象初始化语法支持计算属性名，即在[]中可以放入 JS 表达式完成简单的计算后，其结果作为对象属性名。

```javascript
//将复杂的代码简化
var name = "a";
var object = {};
object[name] = 1;
//在ES5中需要这样实现对象的key为一个变量
//在ES6中只要这样就好了，使用方括号
var name = "a";
var object = { [name]: 1 };
```

```javascript
var o={
	_age:18,
	get age(){ return o._age},
	set age(value){
        if(value <100){
		o._age=value
        }else{
    	o._age=100
        }//限制了_age的写入
    }
}
o      //{_age: 18}
o._age //18
o.age  //18 这个时候就在执行get函数

a==1 && a==2 && a==3 为true的实现思路
//通过设置get函数，每读取一次，值加1
var i=0;
Object.defineProperty(window,'a',{
    get(){
        i+=1;
        return i
    }
})
```

##### 对象的浅复制

```javascript
var obj1={a:1,b:2,c:3}
var obj2=obj1//这样只是简单的复制了对象的内存地址

var obj3={}
for(let key in obj1){
    obj3[key]=obj1[key]
}//没有很明白的是，value是怎么复制过去了

//更为简便和进步的写法
var obj3=Object.assign({},obj1)
//更牛逼的写法
var obj3={...obj1};
//两者都是ES6

//眼花缭乱了吗
var aa=1;
var bb=2;
var obj4={..obj1,...obj2,...obj3,aa,bb,get x(){return 'hi'}}
obj4 //都变成了obj4一人的key value，但同名会覆盖
```

##### 变更原型

```javascript
var a = {};
a.__proto__ === Object.prototype;

var b = {
  sayhi() {
    console.log("hi");
  }
};
a = Object.create(b);
a.__proto__ === b; //称为b是对象a的原型

//获取对象的原型
a.__proto__; //不那么推荐
Object.getPrototypeOf(a); //推荐的写法
//得到原型是一样的
```

##### Object.defineProperty()

```javascript
//使用该方法获得一次对已有对象添加get set函数的机会
//因为在最开始声明对象时是添加get set函数的唯一时机
```
