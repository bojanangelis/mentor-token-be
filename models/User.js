const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true, enum: ['mentor', 'company'] },
    created_at: {type: Date, default: Date.now },
    password: { type: String, required: true },
    updated_at:{type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema);