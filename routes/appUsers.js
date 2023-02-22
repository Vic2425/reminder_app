const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
// const userData = require('../DB/users.sql')

router.get('/:id', usersController.getUserById);
router.get('/', usersController.getAllUsers);


module.exports = router;