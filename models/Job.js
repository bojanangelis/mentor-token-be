const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true, enum: ['pending', 'accepted', 'rejected'] },
    type: { type: String, required: true, enum: ['direct', 'open'] },
    created_at: {type: Date, default: Date.now },
    updated_at:{type: Date, default: Date.now }
})

module.exports = mongoose.model('Job', JobSchema);
