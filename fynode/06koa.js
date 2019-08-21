/**
 * Created by 14486 on 2019/8/18.
 * Koa框架安装
 *      npm i koa@latest -S;
 */
const Koa = require("koa");
const app = new Koa();
// 中间件
app.use(async (ctx,next) =>{
    // ctx上下文环境
    // 洋葱模型;
    console.log("中间件1接受请求");
    await next(); // 将权限交给下一个中间件
    console.log("中间件1响应");
});
app.use(async (ctx,next) =>{
    console.log("中间件2接受请求");
    await next(); // 必须用 await调用;
    console.log("中间件2响应");
});
app.use(async (ctx,next) =>{
    "use strict";
    // ctx相当于吧原生的 req res封装集成到了 ctx里面;
    console.log(ctx);
    ctx.body = "这是后台返回的数据"; // 可以写多次;
    // 参照git里面的koa中文文档;
});
app.listen(3000);
/*   先从外到内 在从内到外;
     当访问3000端口号的时候 依次打印
     中间件1接受请求
     中间件2接受请求
     中间件2响应
     中间件1响应
*/
