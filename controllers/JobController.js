const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    }
    catch(e) {
        res.status(500).json({  message: e.message  })
    }
}

exports.createJob = async (req, res) => {
    const job = new Job({
        title: req.body.title,
        description: req.body.description,
        company_id: req.body.company_id,
        isActive: req.body.status
    });
    try {
        const newJob = await job.save(); 
        res.status(201).json(newJob);
    } catch(e) {
        res.status(500).json({  message: e.message  })
    }
}

exports.getJobByID = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if(!job) {
            return res.status(404).json({message: 'Job not found'})
        }

        // ako go ima go vrajka tuka.
        res.status(200).json(job);
    }
    catch(e) {
        // ako neshto se skrshi vrajka errror tuka/
        res.status(400).json({  message: e.message  })
    }
}
