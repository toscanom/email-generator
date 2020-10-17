// job-listing.route.js - Wiki route module.

const express = require('express');
const router = express.Router();
const controller = require('../controllers/job-listing.controller');

router.get('/jobs', function (req, res) {
  controller.findAll(req, res);
});

module.exports = router;
