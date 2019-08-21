/*
Created by 14486 on 2019/8/18.
    爬虫: 在网络上抓取数据的;
    node.js是没有专门的爬虫框架的; koa有;
    npm i fanyi -g;  全局安装翻译
    使用  fanyi love
    40期es6;
 */
const Koa = require("koa");
const app = new Koa;
// 要想爬取网站上的数据,就必须对该网站发起请求
// 所以 必须用到 request 框架  npm i request -S
// npm官网看request的用法;
// 老师用的superagent 框架
// cheerio  可以将文本型的dom结构转化为dom对象;
const request = require("superagent");
const cheerio = require("cheerio");
let arrJson = [{
    img:"",
    title: "",
    class: "_2zxiF",
    num:""
}];
let data = "";
request.get("https://www.shiguangkey.com/").end((err,res) =>{
    //console.log(res);
    data = res.text;
    console.log(data);
    const $ = cheerio.load(data);  // jq对象;
    //console.log($);
    //console.log($("._36YtQ").eq(1).text());
});
app.use(async (ctx,next) =>{
    // 用什么方式请求;

    ctx.body = data;
    await next();
});
app.listen(3000);
