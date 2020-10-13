const express = require('express');

const router = express.Router();

const user = require('../controllers/user/handler');

router.get('/user', user.get);
router.get('/user/:id', user.getOne);
router.post('/user', user.create);
router.put('/user/:id', user.update);
router.delete('/user/:id', user.deleteOne);
router.post('/user/login', user.login);

module.exports = router;