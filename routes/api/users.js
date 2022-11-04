
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const user = require('../../models/user');

// GET /api/users/check-token
router.get('/check-token',ensureLoggedIn, usersCtrl.checkToken);



// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login)

module.exports = router;