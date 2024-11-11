const express = require('express');
const router = express.Router();
const JobOffer = require('../controllers/JobOffer')
//get 
router.get('/:id', JobOffer.getJobOfferByID)

//post
router.post('/', JobOffer.createJobOffer)


module.exports = router;

