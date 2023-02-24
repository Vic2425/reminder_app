const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const appUsersRoute = require('./appUsers');
const contactRoute = require('./contacts')
// const app = express();

// router.get('/appusers',appUsersRoute );
// router.get('/appusers/:id', appUsersRoute);
router.use(appUsersRoute);

// router.get('/userscontact', contactRoute );
// router.get('/userscontact/:id', contactRoute);
router.use(contactRoute)

module.exports = router;