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
  const { question, answer, language } = req.body;
  
  try {
    const newFAQ = await FAQ.create({ question, answer, language });
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ message: 'Error creating FAQ' });
  }
};
