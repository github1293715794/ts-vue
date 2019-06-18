// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190618学习笔记
 */

// 字符串模板  可以随意换行
let name = 'xx'
let age = 14
let str = `我是${name}, 我今年${age}`

// 字符串查找
{
  let str = 'apple banana pear'
  str.indexOf('apple') // 返回索引  没找到返回-1

  str.includes('banana') // 返回true false
}

{
  // 判断浏览器
  if(navigator.userAgent.includes('Chrome')) {
    alert('是Chrome')
  } else {
    alert('不是')
  }
}

{
  // 判断字符串是否以*** 开头  返回true  false
  let str = 'https://www'
  str.startsWith('https')
  str.endsWith('.png')
  console.log(str.repeat(3)) // 重复3次
} 