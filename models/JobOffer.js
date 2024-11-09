const mongoose = require('mongoose');

const JobOfferSchema = new mongoose.Schema({
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true, enum: ['pending', 'accepted', 'rejected', 'canceled'], default: 'pending'},
    type: { type: String, required: true, enum: ['direct', 'open'] },
    created_at: {type: Date, default: Date.now },
    updated_at:{type: Date, default: Date.now }
})

module.exports = mongoose.model('JobOffer', JobOfferSchema);
