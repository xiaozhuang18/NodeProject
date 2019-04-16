/**
 * Created by 14486 on 2019/3/12.
 */
const Koa = require("Koa");
const app = new Koa;
app.use(async (ctx) =>{
    ctx.body = "这是后台返回给我们的数据";
}).listen(3000);
