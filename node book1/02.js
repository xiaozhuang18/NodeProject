/**
 * Created by 14486 on 2019/8/15.
 *  1: node中创建服务器
 *      let http = require("http");
 *  2: 遇到的问题
 *      1: 不支持中文;
 *          {"content-type":"text/html;charset=UTF-8"}
 *      2: 返回数据,如何解决跨域问题?
 */
let data = {
    "name":"范雨菲",
    "age":28,
    "sex":"男"
};
let newData = JSON.stringify(data);
let http = require("http");
let app = http.createServer((req,res) =>{
        res.writeHead(200,{"content-type":"test/html;charset=UTF-8"});
        res.end("你好");
    }).listen(8080);
