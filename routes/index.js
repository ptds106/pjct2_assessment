var express = require('express');
var router = express.Router();
const todosCtrl = require('../controller/todo')

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

module.exports = router;
