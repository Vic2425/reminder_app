const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/appusers', usersController.getAllUsers);

router.get('/appusers/:id', usersController.getUserById);

router.delete('/appusers/:id', usersController.deleteUserById)

module.exports = router;