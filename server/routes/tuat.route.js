const express =  require('express');
const router =  express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const models = require('../models/tuat.model')

router.post('/',jsonParser, models.tuat_submit);
router.get('/',jsonParser, models.tuat_all);


module.exports = router;