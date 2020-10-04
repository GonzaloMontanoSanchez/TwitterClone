const bodyParser = require('body-parser');
const { Router } = require('express');
const router = Router();
const jsonParser = bodyParser.json();
const UserController = require('../controllers/login.controller');

router.post('/register',jsonParser,UserController.user_create);
router.post('/',jsonParser,UserController.user_create);




module.exports = router;
