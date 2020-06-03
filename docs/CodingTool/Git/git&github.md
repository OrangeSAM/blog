---
title: Git和GitHub
---
linus在改进linux过程中发明的版本管理工具

cvs和svn都是集中式的版本控制系统
	完整版本库只存在于中央服务器，每次对比和提交代码都必须连接到中央仓库才能进行
git是分布式版本控制系统
	git本地仓库包含代码库以及历史仓库，在本地环境就可以记录历史

使用了git config命令的--global参数，用了这个参数我所使用的机器所有的git仓库都会使用这个配置

Repository 版本库

所有的版本控制软件，其实只能跟踪文本文件的改动，比如txt文件，网页，程序代码
而图片视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化

编写好的文件放到已创建好的仓库目录下
然后用命令Git add 告诉git 把文件添加到仓库
Git add readme.txt
没有出现其他提示，即是添加成功
第二步用git commit命令告诉git把文件提交到仓库
Git commit -m “一些备注信息”

可以多次add不同的文件，用commit一次性提交




-m后面输入的是本次提交的说明，需手动输入
Git commit 命令成功执行后会提示多少个文件被改动，内容是怎样变化的
Commit 一次可以提交很多文件

Mkdir [-p] dirname
说明：建立一个子目录
参数:-确保目录名称存在，如果不存在则创建新的

Cd[目录名]
命令功能：切换至当前目录至dirname

Git log 查看提交历史
Git status 查看仓库当前的状态
Git diff  查看具体更改内容
如果git status 告诉我有文件被修改过，那么用git diff可以查看修改内容

在git中，用head表示当前版本，上一个版本是head^，往上100个版本写成head~100

用git reset 回退到任意版本，git reset --hard commit_id
回退前，用git log可以查看提交历史，以便确定要回退到哪个版本
要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本
Git reflog 是从艰苦对这个版本的所有操作记录
Git log 是这个版本的保留的操作记录

	e.g $git  reset --hard head^
	
当忘记版本号且回退到之前版本希望回到之前的最新版本时
可以使用git reflog查看之前操作的每一步命令

工作区和暂存区
工作区：电脑能看的目录
版本库repository：工作区有一个隐藏目录.git 
git的版本库存了很多东西，其中最重要的是称为stage的暂存区，还有git为我们创建的第一个分支master，以及指向master的一个指针叫做head


当把文件往git版本库添加的时候，是分两步执行的
第一步使用git add 把文件添加进去，是添加到暂存区stage
第二步使用comit提交更改，即是把暂存区的所有内容提交到当前分支
因为当我们创建git版本库时，git自动为我们创建了唯一一个mater分支，所以现在，git commit就是往master分支上提交更改，
即需要提交的文件通通先放到暂存区，然后，一次性提交暂存区的所有更改

一旦提交后，且没有对工作区进行更改，那么工作区就是干净的，即git diff无内容
Git diff 是工作区和暂存区的比较
Git diff --cached 是暂存区和分支的比较


Git 跟踪并管理的是修改，而非文件
每次修改，如果不add到暂存区，那就不会加入到commit中。

08年github网站上线，他为开源项目免费提供存储。