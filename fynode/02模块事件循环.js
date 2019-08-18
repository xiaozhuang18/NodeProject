/**
 * Created by 14486 on 2019/8/15.
 * 模块:
 *    一个独立的文件就是一个模块
 *    global.exports = module.exports;
 *    所以可以给 exports扩展 ,但是不能直接赋值(引用)
 */
// node导入模块的方法
// 要想引入 必须先从其他模块里面导出
// let obj = {"name":"罗恒"};module.exports = obj;

let dd = require("./01简介安装.js");
console.log(dd.name);

// 事件循环 1 3 5 4 2
// 优先级 process.nextTick > promise.then > setInterval > setImmediate()
setImmediate(() =>{
    console.log(2);
})
console.log(1);

process.nextTick(() =>{
    console.log(3);
})

var p = new Promise((res,rej)=>{
   res();
});
p.then(()=>{
    console.log(4);
})
process.nextTick(() =>{
    console.log(5);
})
