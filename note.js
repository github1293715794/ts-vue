1、变量 参数 返回值
	指明类型
		1.显式声明	
			let a:string;
		2.隐式声明
			let b = 12;
		
	如果让变量什么都能放
		1.不给初始值
		2.显式声明any
		
		number/string/boolean/any
		(类型1|类型2|类型3)
		元组类型 [类型1|类型2]  let c:[number,boolean] = [1,true]
		枚举 类似星期、性别 列举有限的可能性	
			enum Gender{Male, Female};
			let gender:Gender = Gender.Male;
			switch(gender){
				case Gender.Male:
					console.log('男');
					break;
				case Gender.Female:
					console.log('女');
					break;
			}
			// 但是因为赋值了Gender.Male 编译时知道了赋值 所以第二个case编译时会报错
		void 没有返回值 用于函数中没有return的
			function show(name):void{
				console.log(`姓名：${name}`);
			}
			show('钢铁侠托尼');
		null / undefined
			undefined 只能接受 undefined
			null 只能接受 null 			let as:null = null
		never
			绝对不会出现 常用于函数中  函数永远不会结束  死循环
			function shows():never{
				let a = 12;
				alert(a);
				throw new Error('有错');// 报错就离开了，不会执行到头
			}
			shows();
			
		数组 两种都行
			let arr:number[] = [1,2,3]
			let ars:Array<number> = [1,2,3]  // java中称之为泛型 c++中称之为语法模板
		
		
2、类
	新的写法
	
	访问修饰符  
		public		任何人都能修改
		private		只有类内部能使用
		protected	只有类和子类能使用
	
3、高级特性
	抽象 接口
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		