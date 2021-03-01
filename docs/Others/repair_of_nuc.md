---
title: NUC返修
---

---
title: NUC返修
---
之前说到NUC(next unit of computing，下一代计算单元)挂掉了，周五拿到了英特尔寄回的全新套件，生产环境终于又恢复如初。以下是对整个返修过程的记录。

当时是工作日前一天晚上发现，无论怎样按开机键主机都没有任何反应，跟经销商的交流的答案是拔掉跳线看看效果，用手指费老大劲后拔掉再次尝试启动也是没有效果。想到应该是遇到最糟糕的情况了，先跟行政小姐姐申请台笔电备用下。

工作日联系到英特尔客服，让我再次按照操作手册自行诊断下，跟经销商说的差不了多少，只不过更为细致完善，具体步骤如下。

> 如启动后无画面输出，可以尝试以下方法：通过拔除安全跳线的方法恢复BIOS出厂设置。
操作方法如下：
> 1. NUC关机断电，打开NUC底盖。
> 2. 找到内存槽位附近的黄色安全跳线并拔出（请记录拔出前的安装位置）。
> 3. 接上电源开机，测试是否有画面输出。若有画面输出，即代表进入工程模式。
> 4. 在工程模式下，按F2进入BIOS，F9恢复默认设置，F10保存退出即可。
> 5. 将NUC断电，安全跳线放回原处，再次测试能否进入BIOS或系统。
      
> 若通过以上方式无画面输出，您可以前往下面的地址下载以“.bio”结尾的BIOS文件，并放置在U盘内，BIOS文件需放在U盘根目录。断电后拔除安全跳线，插入包含有最新BIOS文件的U盘，开机通电。等待2~5分钟左右，电源指示灯熄灭后放回安全跳线。重新启动NUC，观察是否可以正常进入BIOS。
  关于此项操作，建议您查看以下链接：
> BIOS的更新与恢复的详细操作方法与视频可查看链接内“通过安全跳线进行 BIOS 恢复”一项：https://www.intel.cn/content/www/cn/zh/support/articles/000005636/intel-nuc.html
> 适用于NUC8i7BEH产品的BIOS下载地址：https://downloadcenter.intel.com/zh-cn/download/29959/BIOS-BECFL357-86A-

诊断无果，**英特尔对于设备寄回的要求是，提供套件的型号、SN和SA码，以及当时购买的凭证(比如纸质发票)**。英特尔对于NUC这个产品的保修政策是，能提供纸质发票，在一年以内（时间以当时出现问题申请出现计算）套件出现问题，直接更换全新套件；
超出一年未满三年更换官方翻新套件。

我的情况是当时购买忘了要纸质发票（后面补开的无效），叫经销商协助提供了他后台我的购买和收货记录还有我这边的购买记录截图，英特尔审核（审核需要1-3天，我的花费了不到一个工作日）后也同意更换全新套件。

![](https://i.loli.net/2021/01/17/fZASXjbmz2knIp8.png)

图片说的比较明白了，简单来说就是只需要寄拆掉了自己内存条和硬盘的NUC本体。

不用担心NUC寄送包装的问题，联邦快递的人会包装好，寄送的时候只需要在第三方付费那一栏填写英特尔的账号。

更换的时间，英特尔的客服说大概要十天且还不包括寄送的时间，算上期间的周末确实需要这么长的时间，我的是7号寄出，15号收到寄回的全新套件。

过程中几个让我感到意外的点：英特尔客服工作时间朝九晚五；外企的电话客服比国内的好不少（样本少，只是对联邦快递和英特尔客服的感受）。

拿到寄回的设备后遇到的几个问题：
1. 装回内存条和硬盘后，开机需要bitlocker的密码，我当时看到还是挺懵逼，但想起来之前确实有设置过，所幸按照屏幕显示的指引也拿到了对应的密码。

2. PIN码失效，按照他的指示直接去修改PIN码，显示修改失败。后来想到删掉之前的，再添加就好了。

3. 无法连接之前匹配的蓝牙，这点困扰了比较久，按照网上说的各种方法试了都没用。后面试到一个点赞不多的方法竟然有用，具体来说就是得到设备管理器将之前的蓝牙设备卸载干净（包括枚举器）。

