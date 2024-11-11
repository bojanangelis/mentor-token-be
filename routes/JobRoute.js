const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobController')

//get 
router.get('/', JobController.getJobs)
router.get('/:id', JobController.getJobByID)


//post
router.post('/', JobController.createJob)



module.exports = router;

