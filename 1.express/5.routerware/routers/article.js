let express = require('express');
let router = express.Router();
router.get('/add', (req, res) => {
	res.end('添加');
});
router.get('/delete', (req, res) => {
	res.end('删除');
});

module.exports = router;




