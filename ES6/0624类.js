// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190624学习笔记
 */

// 类
class Person {
  constructor(name, age) {
    // 构造方法 调用new时，自动执行
    console.log(name, age);
    this.name = name;
    this.age = age;
  }
  showName() {
    return `名字为${this.name}`;
  }
}

let p1 = new Person('js', 12);