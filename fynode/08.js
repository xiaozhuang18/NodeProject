/**
 * Created by 14486 on 2019/8/20.
 */
// pug 中文文档 语法简介 性能还不错 一般用在后台
// 安装 npm i pug -S
// 如何让koa识别 pug这种模板引擎
// 借助中间件 npm i koa-views -S
// 这时候 index.html  就要换成 index.pug
// web 支持 语法  文件 设置 Plugins 安装 npm install pug pug-cli -g
// web监听

const Koa = require("koa");
const views = require("koa-views");
const app = new Koa;
const {join} = require("path");
// 执行的时候需要选择一个文件夹作为我们的模板文件或者视图模板,结构清晰; views
app.use(views(join(__dirname,"views"),{
    // 第一个参数告诉我们当前项目使用的模板文件路径
    extension: "pug"  // 告诉模板引擎使用的是Pug模板
}));
app.use(async (ctx)=>{
    // 渲染;
    await ctx.render("index.pug",{
        // 如果 pug文件的变量可以在这里传值;
        bool:1
    })
});
// 这些中间件 一定要注册在路由前面;
app.listen(3000);

/*
mongodb 概念解析
    数据库,存储数据的集合  (mysql);
    web客户端 -> 后台 (node java c) -> 数据库
    数据库 -> 后台 -> web客户端;
    安装  去官网下载 (msi  傻瓜式安装)

* */
