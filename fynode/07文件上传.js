/**
 * Created by 14486 on 2019/8/20.
 */
// 文件上传模块  npm i koa-multer -S

// 第二种 koa-body    k
const multer = require("koa-multer");
const Koa = require("koa");
const app = new Koa;
const Router = require("koa-router");
const router = new Router;