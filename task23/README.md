(function (window, undefined){})(window)
1.这里用匿匿名函数，封装。避免了匿名函数内部的代码与外部之间发生冲突(如使用了相同的变量名).
2.将window作为一个参数传入， window是DOM对象模型的最顶层对象，把全局变量传进来，就避免了到外层去寻找,提高效率。
3.将undefined（未定义）作为一个的参数传入，防止undefined在外围被定义（占用）（undefined非关键字）。还有undefined在老一辈的浏览器是不被支持的，直接使用会报错，考虑兼容性，因此增加一个形参undefined。不要用window.undefined传递给形参，window.undefined有可能被其他人修改了，最好就是甚么都不传，形参的undefined就是真正的undefined。









