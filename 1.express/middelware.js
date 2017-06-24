let express = require('express');
let app = express();

// 使用中间件   一定要放在最上面,放在路由之前
app.use((req,res,next)=>{
	res.setHeader('content-type','text/html;charset=utf-8;');
	// res.end('123');
	next();
});

app.get('/signup',(req,res)=>{

	res.end('注册');
});

app.get('/signin',(req,res)=>{

	res.end('登录');
});

app.get('/signout',(req,res)=>{

	res.end('退出');
});

app.all('*',(req,res)=>{

	res.end('您请求的页面不存在');
});

app.listen(8080);






