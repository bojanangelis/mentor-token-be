const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')


// so ova gi zemame site useroi
router.get('/', userController.getUsers);
// so ova kreirame post user.
router.post('/', userController.createUser);
router.get('/:_id', userController.getUserByID)


module.exports = router;

