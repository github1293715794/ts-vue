// 从今天开始回顾node内容
// 20190626 
// 命令行
  cd de 进入桌面
  md 文件夹名  创建一个文件夹
  rd 文件夹名  删除一个文件夹

  文件名  打开文件

// 进程
  负责为程序的运行提供必备的环境，相当于工厂中的车间
// 线程
  计算机中最小的计算单位，负责执行进程中的程序， 相当于工人

// 单线程
  node 事件驱动 非阻塞 异步I/O
  js是单线程的
// 多线程

能够在服务器端运行JavaScript的JavaScript运行环境

增加服务器的数量 分布式

// 模块化
// commonjs规范
a.js
exports.x = 'x'

b.js
var md = require('./a.js')
md // {x: 'x'}
// 第8节
基本数据类型保存在 栈内存中

引用数据保存在 堆内存中

// 包
npm remove 包名   删除  npm r
npm remove 包名 --save  将依赖也删除

npm i math --save   // 安装的同时设置为依赖

// 13 14 15 16
