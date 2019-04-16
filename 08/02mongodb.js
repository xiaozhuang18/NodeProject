/**
 * Created by 14486 on 2019/3/13.
 * 关系型数据库 通过表
 * MongoDB  文档 键值对很像json 叫bson 分布式
 * 2: 命令操作
 *      1: ./mongod.exe  启动服务端
 *      2: ./mongo       启动客户端
 *      3: show dbs      查看所有数据库
 *      4: use luoheng   创建数据库
 *      5: db.luoheng.insert({"name":"25"})  插入数据;
 *      6: 删除数据库
 *          use luoheng 表示切换到该数据库
 *          db.dropDatabase()
 *      7: 删除数据库里的集合
 *          use luoheng
 *          db.luoheng.drop()
 *      8:  npm i mongoose 库来操作数据库
 *          const mongoose = require("mongoose");
 *          第一步连接mongodb的服务器
 *          固定写法
 *          let db = mongoose.createConnection
 *          ("mongodb://localhost:27017/luoheng",{useNewUrlParser:true});
 *
 *
 */

