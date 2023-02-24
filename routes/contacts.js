const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');

router.get('/userscontact', contactController.getAllContacts);

router.get('/userscontact/:id', contactController.getContactById);

router.delete('/userscontact/:id', contactController.deleteContactById)

module.exports = router;