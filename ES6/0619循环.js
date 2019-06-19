// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190619学习笔记
 */

// 循环  es5语法
let arr = ['apple', 'banana', 'pear']
arr.forEach((val, index, arr) => {
  console.log(val, index, arr)
})
// 用箭头函数 第二个参数改this无效 都是window  当前定义所在的对象

// 改造数组  映射  重新整理数据
// 正常情况下需要配合return 返回是一个新的数组
// 若是没有return 相当于forEach  故只要用map 一定要有return
{
  let arr1 = [
    {aa: '111', bb: '222', cc: '333'},
    {aa: '4', bb: '222', cc: '333'},
    {aa: '5', bb: '222', cc: '333'},
  ]
  // arr1.map((val, index, arr) => {
  //   console.log(val, index, arr)
  // })
  let newArr = arr1.map((val, index, arr) => {
    return 1
  })
  console.log(newArr)
}

// arr.filter() 过滤
{
  let arr1 = [
    {aa: '111', bb: '222', cc: '333'},
    {aa: '4', bb: '222', cc: '333'},
    {aa: '5', bb: '222', cc: '333'},
  ]
  let newArr = arr1.filter((val, index, arr) => {
    return val == '111'
  })
  console.log(newArr)
}
