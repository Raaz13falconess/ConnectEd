const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddlware');
const router = express.Router();

router.route('/')
  .post(protect, createJob)
  .get(getJobs);

module.exports = router;
