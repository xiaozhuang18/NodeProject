/**
 * Created by 14486 on 2018/10/11.
 */
let http = require("http");
let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    res.write("范雨菲我爱你");
    console.log(req);
    res.end();
});
server.listen(3400);
