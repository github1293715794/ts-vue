// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190618学习笔记
 */

// 解构赋值  // 引用类型  值类型
// 左右两边结构格式一样
let arr = [1, 2, 3];

// 解构数组
let [a, b, c] = [1, 2, 3];

// 解构json数据
let json = {
  name: 'aa',
  age: 14,
  job: 'aaa'
}

let {name, age, job} = json;
console.log(name, age, job);
{
  当函数中返回的是json数据时就可以用
  let {name, age, job} = func();
}


{
  // 给默认值
  let [a, b, c="默认数据"] = [1, 2];
}

{
  // 交换
  let a = 12
  let b = 5
  [a,b] = [b,a]
}

import {a, b, c} from '...'

// 工作中遇到的问题，当页面数据层级太多时，会出现修改数据dom不刷新的情况，可以使用解构赋值
// vue中还有this.$forceUpdate();
this.batchEditParams.gridData = [...this.batchEditParams.gridData];

