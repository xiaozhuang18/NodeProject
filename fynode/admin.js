/**
 * Created by 14486 on 2019/8/20.
 */
const fs = require("fs");
exports.root = async (ctx,next) =>{
    ctx.body = fs.readFileSync("./index.html","utf-8");
    await next();
};
exports.home = async (ctx,next) =>{
    ctx.body = fs.readFileSync("./home.html","utf-8");
    await next();
};
exports.user = async (ctx,next) =>{
    ctx.body = fs.readFileSync("./user.html","utf-8");
    await next();
};
