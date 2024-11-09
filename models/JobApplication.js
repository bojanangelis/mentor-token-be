const mongoose = require('mongoose');

const JobApplication = new mongoose.Schema({
    job_offer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'JobOffer', required: true },
    mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true, enum: ['pending', 'accepted', 'rejected', 'canceled'], default: 'pending' },
    created_at: {type: Date, default: Date.now },
    updated_at:{type: Date, default: Date.now }
})

module.exports = mongoose.model('JobApplication', JobApplication);
