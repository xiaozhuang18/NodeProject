/**
 * Created by 14486 on 2019/8/20.
 */
const Router = require("koa-router");
const router = new Router();
const admin = require("./admin");
router.get("/",admin.root);
router.get("/home",admin.home);
router.get("/user",admin.user);
//  post请求 需要借助 koa-body 模块;
router.post("/postDateShow", async ctx =>{
    // 这是前端传过来的数据
    console.log(ctx.request.body);
    ctx.body = "这是后台发送给前台的数据"
});
module.exports = router;
