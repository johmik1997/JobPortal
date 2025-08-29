const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const loginLimiter = require('../middleware/loginLimitter')

router.route('/register')
.post(authController.register)
router.route('/login')
    .post(loginLimiter, authController.login)

router.route('/refresh')
    .get(authController.refresh)

router.route('/logout')
    .post(authController.logout)

module.exports = router