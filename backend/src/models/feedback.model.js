const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback: { type: mongoose.Schema.Types.String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('feedback', feedbackSchema);