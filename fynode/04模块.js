/*
Created by 14486 on 2019/8/16.
*/
// URL模块
const {URL} = require("url"); // es6的结构赋值
const myUrl = new URL("https://www.baidu.com/s?wd=%E7%BD%97%E6%81%92&rsv_spt=1&rsv_iqid=0xe61edfe7001bf0fe&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ib&rsv_sug3=8&rsv_sug1=4&rsv_sug7=100");
console.log(myUrl.search);
// myUrl 是一个map对象
const {resolve} = require("url");
console.log(resolve("a/c", "/b"));

// querystring  查询字符串模块
const qs = require("querystring");
// 将查询字符串转化为对象
const str = qs.parse(myUrl.search.slice(1));
console.log(str);
for (let key in str){
    console.log(key);
    console.log(str[key]);
}

// assert 断言模块
const assert = require("assert");
assert("true","如果第一个参数不为真,这里就是报错信息");

// crypto 加密模块
let str1 = "luoheng";
const crypto = require("crypto");

// 可以使用hash加密的方式;
console.log(crypto.getHashes());

// 创建hash加密
let obj = crypto.createHash("md5");
//  进行更新加密
obj.update(str1);
// 输出 只能输出一次 obj.digest();
let data = obj.digest("hex");

// 得到的是 buffer数据 ,转化为16进制
console.log(data);

// fs  文件模块 读取文件,写入文件

const fs = require("fs");

// 读取文件
fs.readFile("./1.txt","utf-8",function (err,data) {
    // node里面 错误对象永远排在第一位;
    console.log(data);
});

// 写入文件;
fs.writeFile("./2.txt","文件的内容你知道我在等你吗","utf-8",function (err) {
    console.log(err);
});
// 查找文件路径是否存在 返回布尔值;
var flag = fs.existsSync("./1.txt");
console.log(flag);

// 创建文件夹
fs.mkdir("./demo", err =>{
    console.log(err);
})
// 读取文件夹
fs.readdir("../fynode", (err,data) =>{
    // 得到的结果是一个数组;
    console.log(data);
})

// 判断一个文件是不是文件夹
// 判断是不是文件夹
let res1 = fs.statSync("./demo").isDirectory();
// 判断是不是文件
let res2 = fs.statSync("./2.txt").isFile();
console.log(res2);

// 监听文件
fs.watchFile("./1.txt",(current,prev) =>{
    console.log(prev);
})