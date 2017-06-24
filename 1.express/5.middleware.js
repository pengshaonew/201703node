let express = require('express');
let app = express();

app.use((req, res, next) => {
	req.start = Date.now();
	res.setHeader('content-type', 'text/html;charset=utf-8');
	let end = res.end;
	res.end =function (msg) {
		end.call(res,msg);
		console.log(Date.now() - req.start);
	};
	next();
});

app.get('/', (req, res) => {
	res.end('结束');
});

app.listen(8080);









