const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    abbr: String,
    reviews: String,
    desc: String,
    category: String,
    featured: { type: Boolean, default: false },
    color: String,
    bg: String,
    logoUrl: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Website', WebsiteSchema);
