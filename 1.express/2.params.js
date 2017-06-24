let express = require('express');
let app = express();
let url = require('url');

app.get('/', (req, res) => {
	// console.log(req.method);  // 获取请求方式
	// console.log(req.url); // 请求的路径
	// console.log(req.headers);  //请求头

	//res.statusCode = 500; // 响应状态码
	//console.log(req.query); //  获取请求参数
	res.end('Ok1')
});

// 路径参数
app.get('/user/:id/:name', (req, res) => {
	//let {pathname,query}=url.parse(req.url,true);
	// console.log(query);
	console.log(req.query);

	console.log(req.params);

	res.end('Ok2')
});

app.all('*', () => {
	res.end('请求的路径不存在');
});

app.listen(8080);









