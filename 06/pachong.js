/**
 * Created by 14486 on 2019/3/12.
 */
const request = require("superagent");
const cheerio = require("cheerio");
const Koa = require("Koa");
const app = new Koa;
request.post("https://www.shiguangkey.com/").end((err,res) =>{
    const data = res.text;
    const $ = cheerio.load(data);
    const txt = [];
    $("a._1AK4M").each(function (i,val) {
        console.log(i,val);
        //txt.push(val);
    });
    //console.log(txt);
});
// app.use(async (ctx) =>{
//
//     ctx.body = "这是后台返回给我们的数据";
// }).listen(3000);
