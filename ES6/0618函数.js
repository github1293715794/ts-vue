// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190618学习笔记
 */

// 函数
// 函数的默认参数
{
  function show(a = '欢迎', b = '牧马人') {
    console.log(a, b)
  }
  show('we', 'aa')
}

{
  function show({ a = '欢迎', b = '牧马人' } = {}) {
    console.log(a, b)
  }
  show()
}

// 函数的参数默认是已经定义了，不能再重复声明
{
  function show(a = '欢迎', b = '牧马人') {
    let a = 'sdf' // 报错
    console.log(a, b)
  }
  show('we', 'aa')
}

// 扩展运算符、reset运算符
{
  let arr = [1, 2, 4]
  console.log(...arr); // 展开数组
}
{
  let arr = [1, 2, 4]
  function show(a,b,c) {
    console.log(a,b,c) 
  }
  show(...arr)
}
{
  // ... 既能展开，又能合成数组  还能排序
  function show(...a) {
    console.log(a) // [1, 5, 2, 9, 7]
    console.log(a.sort()) // [1,2,5,7,9]
  }
  show(1, 5, 2, 9, 7)
}
{
  function show() {
    let a = Array.prototype.slice.call(arguments)
    a.sort()
    console.log(a)
  }
  show(1, 5, 2, 9, 7)
}