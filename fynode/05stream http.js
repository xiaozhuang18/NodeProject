/**
 * Created by 14486 on 2019/8/17.
 *  npm i nodemon -g   改变代码浏览器自动刷新;
 */
// stream 流模块
const fs = require("fs");
const read = fs.createReadStream("./1.txt");

// 上面代码刚刚创建是处于暂停状态的
read.resume();  // 让数据处于流动状态的其中一个方法; 但并不能拿到数据

// 将得到的数据转化为utf-8
read.setEncoding("utf-8");

// 能流动并且可以拿到数据
read.on("data",function (res) {
    console.log(res); // 得到的是一个buffer数据

});

// 监听是否读取完毕, end读取完毕;
read.on("end",function () {
    console.log("读取结束");
});

// 文件的复制
const write = fs.createWriteStream("./3.txt");
// 第三种方法 可以让数据流动起来, 让数据管道输入一样
read.pipe(write);


// http模块
const http = require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //console.log(req.url); // 路由  /后面的内容
    //res.write(JSON.stringify(req.headers)); // 获取请求头信息 对象;
    //res.write(req.method); // 获取请求方式  get post;
    //res.write("data"); // data必须是字符串 或者buffer数据 不然会报错;
    //res.end("你好a");

    // 后台解决 cors跨域 跨域问题解决设置请求头信息;
    res.setHeader("Access-Control-Allow-Origin","*");
    if(req.method === "GET"){
        switch(req.url){ // 根据路由的不同显示不同的页面;
            case "/":
                res.write("<h1>index</h1>");
                break;
            case "/home":
                //  以流的形式传递;
                fs.creatReadStream("home.html").pipe(res);
                res.end();
            default:
                // 读取文件的方式;
                fs.readFile("index.html","utf-8",function (err,data) {
                    res.write(data);
                });
                break;
        }
    }
}).listen(3000);
