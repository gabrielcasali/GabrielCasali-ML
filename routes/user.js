const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.home);
router.get('/register', userController.showRegisterForm);

module.exports = router;