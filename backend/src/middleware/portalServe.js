const express = require('express');
const path = require('path');

const router = express.Router();

const portalServe = async (req, res, next) => {
  if (req.path.startsWith('/api')) {
    next();
    return;
  }
  res.sendFile(path.join(__dirname, '../../../portal/build/index.html'));
}


module.exports = portalServe;