const express = require('express');

const router = express.Router();

router.post('/feedback', (req, res, next) => {
  const feedback = req.body.feedback;
  res.json({ message: 'Feedback added' });
});

module.exports = router;