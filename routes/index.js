// const express = require('express');
// const mysql = require('mysql2');
// const router = express.Router();
// const appUsersRoute = require('./appUsers');
// const userData = require('../DB/users.sql')
const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
// const userData = require('../DB/users.sql')

router.get('/appusers/:id', usersController.getUserById);
router.get('/appusers', usersController.getAllUsers);


module.exports = router;
// router.get('/appusers', appUsersRoute )

// module.exports = router;
