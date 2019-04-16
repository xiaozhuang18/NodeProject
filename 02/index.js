/**
 * Created by 14486 on 2019/3/9.
 * 1: 模块
     每一个JS文件就是一个独立的模块
     导入模块   var obj = require("./02") 不写./默认去找核心模块
     运行 node index
 2:与script区别
     1: script引入的全局变量是共享的;

     2: global 全局变量 最大的顶层对象
     命名空间不是最好的解决办法 模块化才是

 3:  module.exports = {} = obj 导出
     module.exports.fn = () => {};
     每次扩展都要写 module.exports 很麻烦所以
     global.exports = module.exports
     所以可以这样
     exports.fn = () => {};
     exports.num = 1; //  简写方式

 4: AMD(异步导入) CMD 规范() require.js文档 common
 */
let obj = require("./01");
console.log(obj.name);
