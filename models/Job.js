const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isActive: { type: Boolean, required: true, default: true },
    created_at: { type: Date, default: Date.now },
    updated_at:{ type: Date, default: Date.now }
})

module.exports = mongoose.model('Job', JobSchema);
