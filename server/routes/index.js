const express = require('express')
const router = express.Router()
// const { ensureAuth, ensureGuest } = require('../middleware/auth')
const homeController  = require('../controllers/home')




//* Main Routes
// @desc HomePage
// @route GET /disAz
router.get('/api', homeController.getHomePage)






module.exports = router