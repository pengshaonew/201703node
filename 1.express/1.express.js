let express = require('express');
let app = express();
app.get('/', (req, res) => {
	res.end('OK');
});

app.post('/about', (req, res) => {
	res.end('post about')
});
app.put('/about', (req, res) => {
	res.end('post about')
});
app.delete('/about', (req, res) => {
	res.end('post about')
});

app.all('*', (req, res) => {
	res.setHeader('content-type', 'text/html;charset=utf-8');
	res.end('请求的路径不存在');
});

app.listen(3000);










