/**
 * Created by 14486 on 2019/8/19.
 */
const mongoose = require("mongoose");
const db = mongoose.createConnection("Mongodb://localhost:55010/fengyu",{
    useNewUrlParser: true
});