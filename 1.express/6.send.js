let express = require('express');
let status_codes = require('_http_server').STATUS_CODES;
let app = express();
let users = [
	{id: 1, name: 'zfpx1'},
	{id: 2, name: 'zfpx2'}
];

app.use((req, res, next) => {
	res.send = params => {
		let type = typeof params;
		switch (type) {
			case  'object':
				params = JSON.stringify(params);
				break;
			case 'number':
				res.StatusCodes = params;
				params = status_codes[params];
				break;
		}
		res.end(params);
	};
	next();
});

app.get('/users', (req, res) => {
	res.send(users);
});

app.get('/not', (req, res) => {
	res.send('中');
});


app.listen(8080);