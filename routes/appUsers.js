const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/appusers', usersController.getAllUsers);

router.get('/appusers/:id', usersController.getUserById);

router.put('/appusers/:id', usersController.updateUserById)

router.post('/appusers', usersController.addUser)

router.delete('/appusers/:id', usersController.deleteUserById)


module.exports = router;