let express = require('express');
let app = express();
let user= require('./routers/user');
let article= require('./routers/article');

// 会把此路径和客户端的请求路径进行匹配   匹配的是前缀  请求路径是以/user/开头的
app.use((req,res,next)=>{
	res.setHeader('content-type','text/html;charset=utf-8;');
	next();
});
app.use('/user',user);
app.use('/article',article);

app.listen(8080);