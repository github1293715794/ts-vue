// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190619学习笔记
 */

//  合并
// 3
let newObj = Object.assign({}, json1, json2)
// 尽量用空对象承接  json2 会覆盖 json1的内容   json2可以看作是传进来的参数

let newArr = Object.assign([], arr1)

// 1
// 解构赋值用于数据层级较多，页面刷新不及时 重新赋值即可
// 2
// 将此数据传给子组件：JSON.stringify(对象)
// 子组件接收时再转化：JSON.parse();


// 判断是否相等
let b = Object.is(NaN, NaN);