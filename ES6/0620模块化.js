// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190620学习笔记
 */

//  模块化
import {a, b} from ''
// 凡是export 的都需要 {}
// export default 的不需要 {}

// export / export default 出来的是一个对象 则需要.调用
// 按需加载
import('./modules/1.js')
import('./modules/1.js').then(res=> {
  console.log(res.a + res.b)
})

// 百度编辑器
vue-ueditor-wrap
// 用key值保存状态
// 将示例保存下来
// v-model绑定值