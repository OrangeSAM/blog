---
title: 宽度和高度
---
文档流
	内联元素的宽高
	块级元素的宽高
	水平居中 
	垂直居中
	文字溢出省略
		
盒模型
	一比一的div
	outline
	border调试
		
垂直居中的时候不要写父元素的高度
用padding撑开，辅以line-height固定

块级元素的宽高不仅受内容高度影响，还受字体的line-height影响，不过也可以直接写
死行高（但不建议）

非要上下行文字对 齐时



 
在使用行内元素时，inline inline-block都会造成之间的间隙，可以通过使用float解决

word-break:break all 打断所有，可换行
white-space:nowrap 不换行

多出文本省略号（单行）
	white-space : nowrap
	overflow:hidden
	text-overflow:ellipsis
多出文本省略好 多行
	display: -webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical
	overflow:hidden

div的宽度不是由content内容决定的

百度统计浏览器

 文字垂直居中,通过padding凑出来
	line-height:24px;
	padding:8px 0;


div的高度由其内部文档流元素的高度总和决定。
内联元素从左到右，块级元素从上到下

如何脱离文档流， float absolute fixed 
相对定位不会脱离文档流，定位相对于本来的位置，且原来的位置保留。

 在不需要确定高度下的父子垂直居中
<div padding 100px 0>
	<div margin 0 auto>
	</div>
</div>

子元素定高，用absolute上下左右 距各边为0实现 
如果不定高，则用flex实现  

内联元素inline 的margin padding  都只会影响左右 

一比一的div
border:1px solid red
padding-top:100%
