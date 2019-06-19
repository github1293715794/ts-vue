// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190619学习笔记
 */

// 循环  
let arr = ['apple', 'banana', 'pear']
for (let item of arr) {

}
for (let item of arr.keys()) {

}
for (let item of arr.entries()) {

}

{
  let arr = ['apple', 'banana', 'pear']
  console.log(...arr.keys())
}

{
  let arr = ['apple', 'banana', 'pear']
  console.log(...arr.entries())
}