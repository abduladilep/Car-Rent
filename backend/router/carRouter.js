const express = require('express')

const router = express.Router()

const carController = require('../controller/carController')

router.get('/getallcars',carController.getCar)



module.exports=router