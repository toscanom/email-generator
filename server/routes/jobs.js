// jobs.js - Wiki route module.

const express = require('express');
const router = express.Router();

router.get('/jobs', function (req, res) {
  res.send('job listing');
});

module.exports = router;
