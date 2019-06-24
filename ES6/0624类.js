// ES6第二次学习
// 因为工作中碰到的一些问题，让我有了重新学习ES6的想法
/**
 * 20190624学习笔记
 */

// ES6里 class 没有提升功能， es5可以 function Person(){}
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

// 类  方法名是变量
{
  let aaa = 'strive';
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
    [aaa]() {
      return '方法名是个变量'
    }
  }
  let p1 = new Person('js', 12);
  console.log(p1[aaa]());
}