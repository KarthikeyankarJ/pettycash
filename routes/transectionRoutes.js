const express = require('express')
const { addTransection, getAllTransection } = require('../controllers/transectionCtrl')


// router
const router = express.Router()


//route
//add transection

router.post("/add-transection", addTransection)

//get transections
router.post("/get-transection", getAllTransection)

module.exports = router