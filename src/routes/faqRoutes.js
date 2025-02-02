const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// Route to get all FAQs in a specific language
router.get('/faqs/lang/:language', faqController.getFAQsByLanguage);

// Route to add a new FAQ
// router.post('/faqs', faqController.addFAQ);
router.post('/faqs', (req, res, next) => {
    console.log("POST /faqs hit!");
    next();
}, faqController.addFAQ);

module.exports = router;
