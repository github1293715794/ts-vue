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
// Object.keys(arr)
}
for (let item of arr.entries()) {
  // [0, apple]  返回的是索引和值   取值 item[0]  item[1]
}
for (let [key, val] of arr.entries()) {
  // key  val
}

{
  let arr = ['apple', 'banana', 'pear']
  console.log(...arr.keys())
}

{
  let arr = ['apple', 'banana', 'pear']
  console.log(...arr.entries())
}

// es6 获取的一组元素 类数组 转换成数组
let arr2 = [...aLi]
let arr2 = Array.from(aLi)

let arr = Array.of(1,2,3,4) // 把一组值转成数组

// es5转化
let arr3 = [].slice.call(aLi) // vue中也是用的这种

// 非箭头函数中的 arguments 也是类数组
// 有length属性就能转  字符串也能  json数据加上 .length 也能

find // 用来去查找数组中第一个符合的项   如果没找到返回undefined
{
  let arr = [1, 5, 9, 4, 8]
  let b = arr.find((val, index, arr) => {
    return val > 7
  })
  console.log(b)
}
// 找到符合的数组成员的索引  如果没找到返回-1
{
  let arr = [1, 5, 9, 4, 8]
  let b = arr.findIndex((val, index, arr) => {
    return val > 7
  })
  console.log(b)
}

// 返回true false
{
  let arr = [1, 5, 9, 4, 8]
  let b = arr.includes(9)
  console.log(b)
}