(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{270:function(s,n,a){"use strict";a.r(n);var r=a(3),t=Object(r.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"题目内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目内容"}},[s._v("#")]),s._v(" 题目内容")]),s._v(" "),a("p",[s._v("给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。")]),s._v(" "),a("h3",{attrs:{id:"解法一，我的解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法一，我的解法"}},[s._v("#")]),s._v(" 解法一，我的解法")]),s._v(" "),a("p",[s._v("一开始看到题目，觉得这还不简单，一个reverse方法就能搞定的事。但细看后，也不尽然。因为只有数组类型直接reverse方法调用，而输入类型是Number。所以首先需要对输入进行处理，变为字符串再处理为数组形式。")]),s._v(" "),a("p",[s._v("按照题目要求，负号和0不参与翻转过程。可以简单地使用"),a("code",[s._v("shift")]),s._v(", "),a("code",[s._v("unshift")]),s._v("和"),a("code",[s._v("pop")]),s._v("处理完。")]),s._v(" "),a("p",[s._v("题目在最后还有一个要求是，假设环境只能存储下32位的有符号整数。给的数值范围是[-2^31, 2^31 -1]，以为直接就是Js中Number类型的两个极值了(Number.Max_value Num.Min_value)，但实际上不是。就直接接用他给的区间进行限定判断。一个小知识，JS中使用两个"),a("code",[s._v("**")]),s._v("来表示指数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var reverse = function(x) {\n    let toString =  `${x}`\n    let toArr = toString.split('')\n    let toArrCopy = toString.split('')\n    if (toArr[0] === '-') {\n        toArr.shift()\n    }\n    if (toArr[toArr.length -1 ] === '0') {\n        toArr.pop()\n    }\n    toArr = toArr.reverse()\n    if (toArrCopy[0] === '-'){\n        toArr.unshift('-')\n    }\n\n    let finalValue = Number(toArr.join(''))\n\n    if ((finalValue > 2**31-1) || (finalValue < -(2**31 - 1))) {\n        return  0\n    } else {\n        return finalValue\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("看了讨论区之后的一点改动，把"),a("code",[s._v("2**31-1")]),s._v("这种计算改为"),a("code",[s._v("Math.pow(2, 31) - 1")]),s._v("，~~发现时间复杂度大大降低，由击败35%变为击败95%。~~删除线部分是早先写好的，但后面进一步测试发现，改动前的代码时间复杂度也能够做到击败90%以上，但多次测试结果看，大概十分之一的概率达到。而改动后的算法虽然时间复杂度也不稳定，但平均击败率高于改动前。")]),s._v(" "),a("h3",{attrs:{id:"解法二，大神解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法二，大神解法"}},[s._v("#")]),s._v(" 解法二，大神解法")]),s._v(" "),a("p",[s._v("在讨论区看到的一种解法，初看的前几遍都看不懂。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var reverse = function(x) {\n    var max = Math.pow(2, 31) - 1;\n    var min = -Math.pow(2, 31);\n    var y = 0;\n    while(x !== 0) {\n        y = 10 * y + x % 10;\n        x = ~~(x/10);\n    }\n    if (y > max) return 0;\n    if (y < min) return 0;\n    return y;\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("该解法思路：\n经过多次submit测试，发现这个解法时间复杂度也不稳定。空间复杂度较为稳定，能够保持击败90%多的击败率。")])])}),[],!1,null,null,null);n.default=t.exports}}]);