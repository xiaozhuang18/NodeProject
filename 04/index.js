/**
 * Created by 14486 on 2019/3/11.
 * 一: URL  querystring
     let URL = require("url").URL;
     let {URL} = require("url"); // 结构赋值
     let myUrl = new URL("域名");
     console.log(myurl.search)
     查询字符串  querystring
     let myQuery = require("querystring");
     因为有?号所以要切割
     let queryObj = myQuery.parse(myurl.search.slice(1));

 二: assert  断言
     let assert = require("assert");
     assert(true,"第一个参数如果为false那么这里写的就是报错信息")

 三: 加密模块 crypto = require("crypto");
     let crypto = require("crypto");
     加密的方式有这些  crypto.getHashes()
     let pwd = "luohengshi";
     let obj = crypto.createHash("md5");  创建hash加密
     obj.update(pwd); // 加密  输入
     只能输出一次否则报错
     console.log(obj.digest("hex")); hex  输出方式16进制
     注意: 只能输出一次,再次输出会报错;

 四: fs
     let fs = require("fs");
     fs.readFile("./1.txt","utf8",function(err,data){
            if(err) return  没报错 err =null 有错误就是一个
            data 就是文件的内容
            console.log(data)
     })
     fs.writeFile("./2.txt",data(要写的东西),"utf8",err => {
            if(err) throw err;
     })
    同步版本 后面加  fs.writeFileSync
    fs.existsSnyc("./1.txt",data)// 判断文件是否存在
    fs.mkdir("./demo") 创建文件夹
    fs.readdir("./demo",(err,data) =>{
       data是一个数组  
    })
 */
let fs = require("fs");
fs.readFile("./1.txt","utf-8",(err,data) =>{
    "use strict";
    console.log(data);
});
