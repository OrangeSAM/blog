---
title: 继承
---
## 什么是继承
继承是什么，继承就是同上。目的在于代码的复用。

```
有如下题目
1. 写出一个构造函数 Animal
- 输入为空
- 输出为一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
2. 再写出一个构造函数 Human
- Human 继承 Animal
- 输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
- 输出为一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种(人类)、行动和使用工具
3. 再写出一个构造函数 Asian
- Asian 继承 Human
- 输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
- 输出为一个新对象，改对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色
```
## ES5里的继承，原型链实现继承
```javascript
function Animal () {	
}

Animal.prototype.action = function () {}

function Human (obj = {}) {
	this.name = obj.name
	this.birthday = obj.birthday
}

Human.prototype = Object.create(Animal.prototype) // 这个写法只会拿到其原型上的属性
// Human.prototype = new Animal() // 这个写法会导致私有属性重复

Human.prototype.species = 'human being'
Human.prototype.toolUse = ''

function Asian (obj) {
	this.city = obj.city
	this.name = obj.name
	this.birthday = obj.birthday
}

Asian.prototype = Object.create(Human.prototype)
Asian.prototype.color = 'yellow'

let sam = new Asian({city: 'shenzhen', name: 'sam', birthday: '828'})
```
```JavaScript
// 结果，如果使用上面注释一行的代码实现继承，就会导致name和birthday重复
sam
Asian {city: "shenzhen", name: "sam", birthday: "828"}
  birthday: "828"
  city: "shenzhen"
  name: "sam"
  __proto__: Animal
    // birthday: undefined
    color: "yellow"
    // name: undefined
    __proto__: Animal
      species: "human being"
      toolUse: ""
      __proto__: Object
```

### ES6里的继承
类可以通过extends关键字实现继承。类是面向对象里面的一个概念，虽然JS也是面向对象，但在ES6之前并没有类这个概念，在这之前JavaScript的面向对象都是不完备的面向对象。
类的返回值是对象，构造函数的返回值也是对象，所以在ES6之前，类这个概念是通过构造函数来实现。

ECMAScript2015中引入的JavaScript类实质上是JavaScript现有的基于原型的继承的语法糖。类语法不会为JavaScript引入新的面向对象的继承模型。

定义一个类的方法是使用一个类声明。要声明一个类，可以使用带有class关键字的类名。
```javascript
// 类声明
class rectangle{
	constructor(height,width){
		this.width=width
		this.height=height
	}
}
// 类表达式，类名非必须
let rectangle = class (className) {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
```
函数声明和类的声明之间的一个重要区别是函数声明会提升，类声明不会，所以需要先声明再访问。

构造函数、静态方法、原型方法、getter、setter、父类、子类，这些名词是类这一概念中术语。

据此来实现前面提到的继承题目如下：

```javascript
class Animal {
	action () {console.log('行动')}
}

class Human extends Animal {
	constructor (params) {
        super()
		this.name = params.name
		this.birth = params.birth
	}
	species () {return '人类'}
	toolUse () {return '工具'}
}

class Asian extends Human {
	constructor (params) {
		super(params)
		this.city = params.city
	}
	color () {return '肤色'}
}
```

### 构造函数

constructor 方法是一个特殊的方法，其用于创建和初始化使用class创建的一个对象。一个类只能拥有一个名为“constructor”的特殊方法。如果多个，则报语法错误。一个构造函数可以使用super关键字来调用一个父类的构造函数。


---
当读取一个对象的属性的时候，JavaScript 会先从对象中查找，如果没有查找到，才会到原型对象中查找该属性（或方法），所以，尤其是对于方法，最好保存到原型对象中以便于共享，并且达到节省内存的目的，而且原型对象还有一个强大的功能，那就是如果通过构造函数实例化一些对象后，再给构造函数的原型对象增加属性和方法，那么它原来实例化的对象实例将会继承这些增加的属性和方法。



1. 每一个函数数据类型（普通函数，类）都有一个天生自带的属性 :prototype (原型)，并且这个属性是一个对象数据类型的值。
2. 并且在prototype上浏览器天生给他加了一个属性constructor(构造函数)，属性值是当前函数(类)本身。
3. 每一个对象数据类型(普通的对象、实例、prototype等)也天生自带一个属性：__proto__，属性值是当前实例所属类的原型。

今天看今日简史的一点想法就是，你并不是从出生开始就被定义的，而是从有人类开始就被定义了，一代又一代自然选择和遗传造就了你，从这个角度讲，父母起一个基因传递的作用。

---

继承这个概念，按照其字面意思直接理解即接受前人留下来的东西。在计算机科学中，则是指支持面向对象编程语言中的专用术语。

> 如果一个类别B“继承自”另一个类别A，就把这个B称为“A的子类”，而把A称为“B的父类别”也可以称“A是B的超类”。继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码。在令子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能。另外，为子类追加新的属性和方法也是常见的做法。 ---维基百科

但并不是所有的编程语言都有继承机制，前面有说到，继承是面向对象中的术语，C语言就没有。为什么JavaScript需要继承机制的存在，这里贴一小段阮一峰老师对历史的探究。原文点击[这里](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)。
> 如果真的是一种简易的脚本语言，其实不需要有"继承"机制。但是，Javascript里面都是对象，必须有一种机制，将所有对象联系起来。所以，Brendan Eich最后还是设计了"继承"。
>
> 但是，他不打算引入"类"（class）的概念，因为一旦有了"类"，Javascript就是一种完整的面向对象编程语言了，这好像有点太正式了，而且增加了初学者的入门难度。

俗话说就是，继承机制的存在使得代码中各个对象能够产生联系，而不是独立的，产生的联系的意义在于可以少写代码。说到底，还是为了“偷点懒”(提高效率)。


如何实现继承，其实，当一个对象的`__proto__`属性指向一个有效的对象时，继承就发生了，但实现继承的方式远不止这一种。

在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符来作用这个函数时，它就可以被称为构造方法（构造函数）。

使用Object.create创建对象，之前有个方法是`Object.setPrototypeOf()`，手动设置某个对象的原型。而现在的`create`是直接将新创建对象的原型指向create方法的参数。
```
let a = {a: 1}; 
// a ---> Object.prototype ---> null

let b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)
```

其实就相当于
```
let b
Object.setPrototypeOf(a)
```
只不过使用create会让整个逻辑连贯一些。

一个数组类型如何拥有indexOf等方法



JS中现在的继承机制是怎样的，过去呢，有没有演变的过程。   

---

实现继承的方法

---

如果你只要获取到可枚举属性，查看Object.keys或用for...in循环（还会获取到原型链上的可枚举属性，不过可以使用hasOwnProperty()方法过滤掉）。

Object.getOwnProprtyNames()不会获取到原型链上的属性

https://segmentfault.com/a/1190000007908692

遍历对象的属性时，自带的属性不会被遍历。为什么呢
手动添加的会被遍历。

四种用于拓展原型链的方法
- new 和 构造函数的配合
- Object.create
- Object.setPrototypeOf
- __proto__


实例化和继承是两个不同的概念
其中的称呼是  类和实例 & 父类和子类

---
function dialog(target) {
    this.dialog = target
    // 默认return this
    // 如果手动return 值类型，会被忽略
    // 如果手动return 引用类型，会覆盖默认的
}

--- 
hasOwnProperty： 是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员。
isPrototypeOf : 是用来判断要检查其原型链的对象是否存在于指定对象实例中，是则返回true，否则返回false。
什么是原型对象，和对象区别在于？

来自OneNote

---
```
object.__proto__ === Object.prototype
fn.__proto__ === Function.prototype
fn.__proto__.__proto__ === Object.prototype
array.__proto__ === Array.prototype
array.__proto__.__proto__ === Object.prototype
Function.__proto__ === Object.__proto__ || Function.__proto__===Funtion.prototype
// 因为他自己可以构造自己，前者对的原因是因为 Function.__proto__ 指向 Object.prototype，
//而Object.__proto__也指向Object.prototype，所以？ 但好像原因本身就错掉了。
Array.__proto__ === Object.__proto__ || Function.prototype
Object.__proto__ === Function.prototype
true.__proto__ === Boolean.prototype
Function.prototype.__proto__ === Object.prototype
```

在JavaScript中，每个函数都是一个Function对象。




相关文章：
> 
https://juejin.im/post/5d615b7f6fb9a06b0202ccb5

https://zhuanlan.zhihu.com/p/57336944

https://www.zcfy.cc/article/master-the-javascript-interview-what-s-the-difference-between-class-amp-prototypal-inheritance-2185.html

https://2ality.com/2015/09/proto-es6.html