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
再次打开时
if(!!this.bindId) {
  this.editor = UE.getEditor(this.bindId, this.myConfig)
  console.log(this.editor)
  this.editor.execCommand('insertHtml', `<input id="企业地址"
      style="color: #137EFF;border: 0;outline: 0;font-size: 12px;background: transparent;"
      type="reset" title="企业地址" value="#企业地址#">`, true);
}
// 将示例保存下来
// v-model绑定值

// 高阶函数及其作用
// 类和继承