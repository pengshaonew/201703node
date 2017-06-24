let express = require('express');
// 返回一个Router的实例
let router = express.Router();
router.get('/signup', (req, res) => {

	res.end('注册')
});
router.get('/signin', (req, res) => {

	res.end('登录')
});
router.get('/signout', (req, res) => {

	res.end('退出')
});
module.exports = router;






