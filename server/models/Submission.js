const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    websiteName: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    logoUrl: { type: String, required: true },
    twitter: String,
    discord: String,
    agreedToTerms: Boolean,
    agreedToPolicy: Boolean,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
