//node服务请求类
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");



http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        var urlObj = url.parse(req.url);
		// console.log(urlObj.pathname);
        if(urlObj.pathname === "/api"){
            ajaxHandle(req,res);
        }else{
            fsHandle(req,res);
        }

    }
}).listen("82","localhost");

function ajaxHandle(req,res){
    // get、post
    let str = "";
    req.on("data",(d)=>{
        str += d;
    })
    req.on("end",()=>{
        // post数据的解析
        let data = querystring.parse(str);
        // 如果post数据在解析之前，为空字符
        if(!str){
            // 那么就去解析get数据
            data = url.parse(req.url,true).query;
        }
        // 无论是get和post，都一视同仁，因为数据都已经被解析成对象了
        res.write(`这是node接收的数据：${data.user}-${data.pass}`);
        res.end();
    })
}

function fsHandle(req,res){
    const path = "." + req.url;
	console.log(path)
    fs.readFile(path,(err,data)=>{
        if(err){
            res.write("404");
        }else{
            res.writxe(data);
        }
        res.end();
    })
}


// 前端接收数据
    // 不接的接收：浏览器默认接收
    // ajax的接收：