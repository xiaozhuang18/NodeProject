/**
 * Created by 14486 on 2019/3/11.
 * 一: stream  流模块
     边读取边使用  这样等待的时间会更短
     我们用fs演示
     let fs = require("fs");
     let read = fs.createReadStream("1.txt");
     read.setEncoding("utf8");
     read.on("data",() => {// 监听 让流体变成动态的   read.resume()
            console.log(data);
            console.log(1);
     })
     read.on("end",() => {
        console.log("读取结束");
     })
     let write = fs.createWriteStream("3.txt");
     read.pipe(write); 通过管道完成文件的复制 也可以让流体变成动态的;
 另一种方式
     let Readable = require("stream").Readable;
     let rs = new Readable();
     rs.setEncoding("utf8");
     rs.push(2);
     rs.push(3);
     rs.push(null);
     let write = fs.createWriteStream("4.txt");
     rs.pipe(write);
 */
let fs = require("fs");
