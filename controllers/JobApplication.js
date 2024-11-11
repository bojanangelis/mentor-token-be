const JobApplication = require('../models/JobApplication');

exports.createJobApplication = async (req, res) => {
    const jobApplication = new JobApplication({
        job_offer_id: req.body.job_offer_id,
        mentor_id: req.body.mentor_id,
        status: req.body.status
    });
    try {
        const newJobApplication = await jobApplication.save(); 
        res.status(201).json(newJobApplication);
    } catch(e) {
        res.status(500).json({  message: e.message  })
    }
}

exports.getJobApplicationByID = async (req, res) => {
    try {
        const jobApplicationById = await JobApplication.findById(req.params.id);
        console.log(req.params)
        console.log(jobApplicationById)

        if(!jobApplicationById) {
            return res.status(404).json({message: 'Job Application is not found'})
        }

        res.status(200).json(jobApplicationById);
    }
    catch(e) {
        // ako neshto se skrshi vrajka errror tuka/
        res.status(400).json({  message: e.message  })
    }
}
