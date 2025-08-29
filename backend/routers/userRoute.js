const express = require('express')
// const path = require('path')
const router = express.Router()
const usersController =require('../controller/usersController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)
router.route('/')
    .get(usersController.getAllUsers )
    .post(usersController.createNewUsers )
    .patch(usersController.updateUser )
    .delete(usersController.deleteUser )


module.exports=router