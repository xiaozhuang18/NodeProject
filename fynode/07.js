/*
Created by 14486 on 2019/8/20.
    RESTfull  专门针对于路由的规范;
 */
// koa-router 管理路由 原生的要一直判断 而且代码重复高 也就是path
// 如果 ctx.path ==="/path" && ctx.method ==="GET" doSomething;
const Koa = require("koa");
const Router = require("koa-router");
let router = new Router;
let app = new Koa;

// 表示get请求 根路径 对应的操作;
router.get("/",async (ctx,next) =>{
    console.log("中间件1接收请求");
    ctx.body = "<h1>index</h1>";
    await next();
    console.log("1响应请求");
});
// 访问 home路由
router.get("/home",async (ctx,next) =>{
    // 多个中间件依次写;
    ctx.body = "<h1>home</h1>"
    console.log("中间件2接收请求");
    await next();
    console.log("2响应请求");
});
router.post("/",async (ctx,next) =>{

});
// 将router路由挂载到app上;
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

// 将路由模块化;