## vue源码阅读  
### 数据代理  
使用`Object.defineProperty()`实现数据代理  
### 模板解析  
使用`document.createDocumentFragment`实现模板解析  
1. 取出el元素中所有子节点保存到一个fragment对象中  
  1.1 创建空的fragment  
  1.2 将el中所有子节点转移到fragment  
  1.3 返回fragment  
2. 对fragment中所有层次子节点递归进行编译解析处理  
  2.1 对表达式文本节点进行解析  
  2.1 对元素节点的指令属性进行解析 事件指令解析  
3. 将编译好的fragment添加到页面的el元素中
