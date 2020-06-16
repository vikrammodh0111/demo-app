const express = require('express');
const Feedback = require('../models/feedback.model');

const router = express.Router();

router.post('/feedback', async (req, res, next) => {
  const feedback = req.body.feedback;
  if (!feedback) {
    res.status(403);
    res.json({ message: 'Feedback is required' });
    return;
  }
  await new Feedback({ feedback }).save();
  res.json({ message: 'Feedback added' });
});

module.exports = router;