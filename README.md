## 功能描述  
vue源码阅读  
1. 数据代理  
使用`Object.defineProperty()`实现数据代理  
2. 模板解析
使用`document.createDocumentFragment`实现模板解析  
2.1 取出el元素中所有子节点保存到一个fragment对象中  
    2.1.1 创建空的fragment  
    2.1.2 将el中所有子节点转移到fragment  
  2.1.3 返回fragment  
2.2 编译fragment中所有层次子节点  
2.3 将编译好的fragment添加到页面的el元素中
