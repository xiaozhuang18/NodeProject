/**
 * Created by 14486 on 2019/8/20.
 */
// 管理静态资源目录  npm i koa-static -S

const Koa = require("koa");
const router = require("./router");
const static = require("koa-static");
const {join} = require("path");
const koaBody = require("koa-body");
const app = new Koa;
// static 的使用方法;
app
    .use(static(join(__dirname,"static")))
    .use(koaBody());
app.use(router.routes()).use(router.allowedMethods()).listen(3000);

// 跨域解决  导入模块 npm i @koa/cors@2 -S
// 使用 const cros = require("@koa/cors")  app.use(cors());