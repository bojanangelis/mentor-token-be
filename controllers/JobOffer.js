const JobOffer = require('../models/JobOffer');

exports.createJobOffer = async (req, res) => {
    const jobOffer = new JobOffer({
        job_id: req.body.job_id,
        mentor_id: req.body.mentor_id,
        company_id: req.body.company_id,
        status: req.body.status,
        type: req.body.type
    });
    try {
        const newJobOffer = await jobOffer.save(); 
        res.status(201).json(newJobOffer);
    } catch(e) {
        res.status(500).json({  message: e.message  })
    }
}

exports.getJobOfferByID = async (req, res) => {
    try {
        const jobOfferById = await JobOffer.findById(req.params.id);

        if(!jobOfferById) {
            return res.status(404).json({message: 'Job Offer is not found'})
        }

        res.status(200).json(jobOfferById);
    }
    catch(e) {
        // ako neshto se skrshi vrajka errror tuka/
        res.status(400).json({  message: e.message  })
    }
}
