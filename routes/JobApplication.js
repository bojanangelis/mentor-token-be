const express = require('express');
const router = express.Router();
const JobApplication = require('../controllers/JobApplication')
//get 
router.get('/:id', JobApplication.getJobApplicationByID)

//post
router.post('/', JobApplication.createJobApplication)


module.exports = router;

