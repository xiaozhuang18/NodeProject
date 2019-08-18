/*
Created by 14486 on 2019/8/16.
    npm常用命令:
        1: node -v 查看版本号;
        2: npm官网查找相应的包;

        3: 初始化项目环境
            npm init 完成之后就会多了一个入口文件 package.json;

        4: 安装包  npm install koa -S  生产环境 -D开发环境

        5: 自己发布上线一个包 (npm官网注册)
            npm login (在当前文件目录下)

        6: 包下载慢 百度搜索 淘宝镜像;


 */
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) =>{
    ctx.body = "这是后台返回的数据1";
});
app.listen(3000);

// 事件模块 events 还有其他方法见文档;
const EventMitter = require("events").EventEmitter;
const myEvent = new EventMitter;
setTimeout(function () {
    // 2秒后 某个操作才会出来结果
    myEvent.emit("someEvent"); // 触发事件
},2000);
//
myEvent.on("someEvent",function () {
    // 监听 someEvent事件,一旦触发执行后面的回调函数
    console.log("这是某个异步的回调函数");
});

// path模块  路径  主要是拼接路径

const path = require("path");
console.log(path);
let ab = path.join("a","b");
console.log(ab); //   a/b  相对路径

let res = path.resolve("a");
console.log(res);  // 绝对路径下 + a;

console.log(path.parse(__filename)); // 序列化为一个对象;

// 文件目录;c:\Users\14486\Desktop\新建文件夹\web\NodeProject\fynode 绝对路径
console.log(__dirname);

// c:\Users\14486\Desktop\新建文件夹\web\NodeProject\fynode\03npm命令path.js 绝对路径
console.log(__filename);