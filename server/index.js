require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Import Models
const Website = require('./models/Website');
const Submission = require('./models/Submission');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection middleware for serverless
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed' });
    }
});

// Routes
// Get all websites
app.get('/api/websites', async (req, res) => {
    try {
        const websites = await Website.find();
        res.json(websites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching websites', error: error.message });
    }
});

// Get single website by ID
app.get('/api/websites/:id', async (req, res) => {
    try {
        const website = await Website.findById(req.params.id);
        if (!website) {
            return res.status(404).json({ message: 'Website not found' });
        }
        res.json(website);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching website details', error: error.message });
    }
});

// Submit a new website
app.post('/api/submit', async (req, res) => {
    try {
        // Save the raw submission
        const newSubmission = new Submission(req.body);
        await newSubmission.save();

        // Also add it to the live Website list so it shows up on the Browse page
        const newWebsite = new Website({
            name: req.body.websiteName,
            abbr: req.body.websiteName?.substring(0, 2).toUpperCase() || '??',
            reviews: '0 reviews',
            desc: req.body.description,
            category: req.body.category,
            featured: false,
            bg: '#3b82f6', // Default blue for new entries
            logoUrl: req.body.logoUrl
        });
        await newWebsite.save();

        res.status(201).json({ message: 'Submission received successfully!', data: newSubmission });
    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ message: 'Error saving submission', error: error.message });
    }
});

// Save contact message
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!', data: newContact });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ message: 'Error saving contact message', error: error.message });
    }
});

// Get all submissions (admin use case)
app.get('/api/submissions', async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ createdAt: -1 });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching submissions', error: error.message });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'success', message: 'Server is running' });
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}

module.exports = app;
