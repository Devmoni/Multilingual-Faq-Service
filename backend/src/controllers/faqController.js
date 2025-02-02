const FAQ = require('../models/faqModel');

// Get FAQs by language
exports.getFAQsByLanguage = async (req, res) => {
  const { language } = req.params;
  
  try {
    const faqs = await FAQ.findAll({ where: { language } });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving FAQs' });
  }
};

// Add a new FAQ
exports.addFAQ = async (req, res) => {
    try {
        console.log("Inside addFAQ controller!");
        console.log("Request Data:", req.body);

        const { question, answer, language } = req.body;
        if (!question || !answer || !language) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newFAQ = await FAQ.create({ question, answer, language });

        res.status(201).json({ message: "FAQ added successfully", faq: newFAQ });
    } catch (error) {
        console.error("Error adding FAQ:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
