/*
Created by 14486 on 2019/8/21.
具体查看菜鸟文档的mongodb教程

mongon命令行操作
    mongo --help  查看是否成功
    如果不成功那么要设置环境变量 我的电脑 右键 属性 高级系统设置 环境变量 添加 bin
    选择一个文件夹作为 mongo存储数据 db
    mongod --dbpath C:\Users\14486\Desktop\demo\db   必须是绝对路径;
        指定一个文件夹作为服务端的  db文件夹出现一些文件表面成功
        启动成功就不要关闭这个窗口;
    另起一个窗口  mongo 回车 输入以下命令
    show dbs
    db  查看当前表
    use local  没有表就创建 有就停留在该表
    db.fengyu.insert({"name":"fengyu"})  插入数据
    db.dropDatabase()  删除数据库
    db.collection.drop()  删除集合
    db.createCollection(name,{选项对象});   创建集合
    show collections 查看所有集合
    db.javascript.drop()  删除 js集合
 */
/*
mongoose使用
    安装  npm i mongoose -S
    可视化工具 studio 3T 收费的 还是老老实实命令行查看吧;
* */
const mongoose = require("mongoose");
console.log(mongoose);
// 连接mongodb的服务器
const db = mongoose.createConnection("mongodb://localhost:27017/fengyu",{
    useNewUrlParser:true
});
// 用原声es6的promise取代mongodb的promise
mongoose.Promise = global.Promise;
// 在操作数据库之前,必须使用Schema来设置每个字段的数据类型 (规范数据结构)
// db也继承了原生node里面的events对象  所以有on方法
db.on("error",() =>{
    console.log("数据库连接失败");
});
db.on("open",() =>{
    console.log("数据库连接成功");
});
// 连接成功  => 操作数据库 设置Schema
const Schema = mongoose.Schema;
//
const javaScriptSchema = new Schema({
    name: "String", // 大写的构造函数
    age: "Number",
    sex: {
        type: "String", // 如果不传就使用默认值
        default: "男"  // 设置默认值
    }
});
const JavaScript = db.model("javascript",javaScriptSchema); // 第一个参数集合名字
//
const data1 = {
    name: "罗恒",
    age: 25
};
const data2 = {
    name: "范雨菲",
    age: 25,
    sex: "女"
};
const d2 = new JavaScript(data2);
d2.save((err,res) =>{
    console.log(err);
    // res就是当前数据在数据库的表现形式;
    console.log(res);
});

