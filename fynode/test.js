/**
 * Created by 14486 on 2019/8/19.
 */
// 事件模块
const EventEmitter = require("events").EventEmitter;
const myEvent = new EventEmitter;
myEvent.on("some",function () {
    console.log("some事件执行的回调函数");
});
myEvent.emit("some");

// 路径模块
const myPath = require("path");
console.log(myPath.join("a", "b"));
console.log(myPath.parse(__dirname));
console.log(myPath);

// url模块
const URL = require("url").URL;
let myUrl = new URL("https://www.baidu.com/s?wd=%E7%BD%97%E6%81%92&rsv_spt=1&rsv_iqid=0x8a5cf49000063f6b&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=9&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1810&rsv_sug4=2673");
console.log(myUrl.search);

// qs查询模块
const qs = require("querystring");
console.log(qs.parse(myUrl.search.slice(1)).wd);

// 文件模块
const fs = require("fs");
// 读文件
fs.readFile("./1.txt","utf-8",(err,data) =>{
    console.log(data);
});
// 写文件
fs.writeFile("./5.txt","有些东西过去了就再也回不来了","utf-8",(err) =>{
    console.log(err);
});

// 创建文件夹;
fs.mkdir("./test",function (err) {
    console.log(err);
});
// 判断是不是文件
console.log(fs.statSync("./test").isFile());