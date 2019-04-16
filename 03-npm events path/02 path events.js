/**
 * 一: EventEmitter 类
     let {EventEmitter} = require("events");
     let myEmitter = new EventEmitter();
     function fn () {
        console.log(1);
    }
     myEmitter.on("name",fn);  一段时间后执行
     myEmitter.emit("name");

 二: path
     let path = require("path");
     __dirname 项目运行的目录/开始 是绝对路径  __fillname当前运行文件的名字  绝对路径
     path.join("a","b",..)   返回 a/b  路径的拼接   相对路径
     path.resolve("a","b")    返回 /user/               绝对路径
     path.parse(__filename)  返回一个路径对象
 */
