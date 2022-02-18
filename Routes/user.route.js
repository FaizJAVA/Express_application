const express = require('express');
const userController = require('../Controller/user.controller');
const router = express.Router();

router.get("/add-product",userController.addProductPage);

router.post("/add-product",userController.addProductPost);

module.exports = router;