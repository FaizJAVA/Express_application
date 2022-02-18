const express = require('express');
const pool = require('../Model/db.js');
const indexControllerRoute=require('../Controller/index.controller.js');

const router = express.Router();

router.get('/', indexControllerRoute.HomePage);

router.get('/about', indexControllerRoute.AboutPage);

router.get('/login', indexControllerRoute.LoginPage);

router.get('/register', indexControllerRoute.RegisterPage);

router.post('/register', indexControllerRoute.RegisterPost);

router.post('/login',indexControllerRoute.LoginPost);

module.exports = router;