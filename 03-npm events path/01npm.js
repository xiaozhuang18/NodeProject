/**
 * Created by 14486 on 2019/3/10.
 * npm
     全称 node package mannege
     www.npmjs.com  找npm包
     1: npm init 初始化项目环境 npm init -y 一路回车

     2: npm install koa --save 上线以后的依赖模块 生产环境   开发环境 --save-dev
     简写 -S(上线需要的)   -D(开发过程使用的)
     npm install koa@7.0.1 默认最高版本 @可以指定版本
     3: 上传包到npmjs
     npm login 登陆成功后
     npm publish
 */
let Koa = require("koa");
let app = new Koa;
app.use((ctx) => {
    ctx.body = "这是后台给我们返回的数据"

});
app.listen(3000);
