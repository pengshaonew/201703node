let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

//  1. 设置模板引擎  后缀名是ejs
app.set('view engine', 'ejs');

//  2. 设置模板的存放目录  views文件夹名
app.set('views', path.resolve('views'));

//  3. 设置特殊模板的渲染方法
// app.engine('.ejs', require('ejs').renderFile);
app.engine('.ejs', require('ejs').__express);

let users = [];


app.get('/signup', (req, res) => {
	//render 第1个参数是模板的相对路径 相对于当前views的目录
	// 第2参数是数据对象
	res.render('signup.ejs', {title: '用户名'})
});
// res.render('userList', {title: '用户列表', users});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/signup', (req, res) => {
	//render 第1个参数是模板的相对路径 相对于当前views的目录
	// 第2参数是数据对象
	if (users.length === 0) {
		req.body.id = 1;
		users.push(req.body);
	} else {
		req.body.id = users[users.length - 1].id + 1;
		users.push(req.body);
	}
	res.render('userList.ejs', {title: '用户名', users});
});


app.listen(8080);








